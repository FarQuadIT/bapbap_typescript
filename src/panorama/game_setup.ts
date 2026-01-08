// ============================================
// КАСТОМНЫЙ UI ДЛЯ CUSTOM_GAME_SETUP
// ============================================

$.Msg("=== Game Setup UI initialized ===");

// ============================================
// ЭЛЕКТРИЧЕСКАЯ АНИМАЦИЯ (покадровая)
// ВАЖНО: 31 кадр (каждый 12-й) предзагружены через CSS!
// ============================================
const ELECTRIC_FRAME_NUMBERS = [
    1, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144, 156, 168, 180,
    192, 204, 216, 228, 240, 252, 264, 276, 288, 300, 312, 324, 336, 348, 360
];
let currentElectricFrameIndex = 0;
const FRAME_DELAY = 0.04; // ~20 FPS - замедленная анимация

function PlayElectricAnimation(): void {
    const electricPanel = $("#ElectricEffect") as ImagePanel | null;
    if (!electricPanel) {
        $.Msg("⚠️ Electric panel not found!");
        return;
    }
    
    // Получаем номер текущего кадра из массива
    const frameNumber = ELECTRIC_FRAME_NUMBERS[currentElectricFrameIndex].toString().padStart(5, '0');
    const framePath = `file://{images}/custom_game/electric/frame_${frameNumber}.png`;
    
    // Устанавливаем текущий кадр
    electricPanel.SetImage(framePath);
    
    // Переходим к следующему кадру (зацикливаем)
    currentElectricFrameIndex++;
    if (currentElectricFrameIndex >= ELECTRIC_FRAME_NUMBERS.length) {
        currentElectricFrameIndex = 0;
    }
    
    // Планируем следующий кадр
    $.Schedule(FRAME_DELAY, PlayElectricAnimation);
}

// Запускаем анимацию с задержкой 0.5 сек (плавное появление)
$.Schedule(0.5, PlayElectricAnimation);

// Таймер автостарта
let autoStartTime = 100; // Автостарт через 100 секунд
let remainingTime = autoStartTime;

// Обновление таймера каждую секунду
function UpdateTimer(): void {
    const timerLabel = $("#AutoStartTimer") as LabelPanel | null;
    if (!timerLabel) {
        $.Msg("⚠️ Timer label not found!");
        return;
    }
    
    if (remainingTime > 0) {
        // Обновляем HTML напрямую
        timerLabel.html = true;
        timerLabel.text = `Игра начнется автоматически через <font color='#FFD700'>${remainingTime}</font> сек.`;
        $.Msg(`⏱️ Timer tick: ${remainingTime} seconds remaining`);
        remainingTime--;
        $.Schedule(1.0, UpdateTimer);
    } else {
        $.Msg("⏱️ Timer finished!");
        timerLabel.style.visibility = "collapse";
    }
}

// Старт таймера
function StartAutoStartTimer(seconds: number): void {
    autoStartTime = seconds;
    remainingTime = seconds;
    
    $.Msg(`⏱️ Auto-start timer set to ${seconds} seconds`);
    
    const timerLabel = $("#AutoStartTimer");
    if (timerLabel) {
        timerLabel.style.visibility = "visible";
    }
    
    UpdateTimer();
}

// Программное растягивание панели на весь экран
function ForceFullScreen(): void {
    const rootPanel = $.GetContextPanel();
    
    if (rootPanel) {
        // Принудительно растягиваем на весь экран
        rootPanel.style.width = "100%";
        rootPanel.style.height = "100%";
        rootPanel.style.position = "0 0 0 0";
        rootPanel.style.zIndex = 9999;
        
        $.Msg("✅ Root panel forced to fullscreen");
        
        // Растягиваем ВСЕ родительские панели вверх по иерархии
        let currentPanel = rootPanel.GetParent();
        let level = 1;
        
        while (currentPanel && level < 10) { // Ограничение на 10 уровней
            $.Msg(`🔍 Level ${level}: ${currentPanel.id || currentPanel.paneltype || "unknown"}`);
            
            currentPanel.style.width = "100%";
            currentPanel.style.height = "100%";
            currentPanel.style.position = "0 0 0 0";
            
            // Убираем отступы
            currentPanel.style.margin = "0px";
            currentPanel.style.padding = "0px";
            
            $.Msg(`✅ Stretched parent panel at level ${level}`);
            
            currentPanel = currentPanel.GetParent();
            level++;
        }
        
        // Ищем и скрываем стандартные панели Dota 2
        const topParent = rootPanel.GetParent()?.GetParent()?.GetParent();
        if (topParent) {
            const panelsToHide = [
                "CustomGameSetupRoot", "PreGame", "TeamSelect", "GameSetup", 
                "DOTACustomGameSetup", "CustomGameSetupPanel", "SetupScreen"
            ];
            
            for (const panelName of panelsToHide) {
                const panel = topParent.FindChildTraverse(panelName);
                if (panel && panel !== rootPanel && !panel.FindChild(rootPanel.id)) {
                    panel.style.visibility = "collapse";
                    panel.hittest = false;
                    $.Msg(`✅ Blocked panel: ${panelName}`);
                }
            }
        }
    }
}

// Проверка: является ли локальный игрок лидером лобби
// В Dota 2 custom games лидер лобби (хост) всегда имеет PlayerID = 0
function CheckIfLobbyLeader(): void {
    const localPlayerID = Game.GetLocalPlayerID();
    const isLeader = (localPlayerID === 0);
    
    $.Msg(`🎮 Local player ID: ${localPlayerID}, Is lobby leader: ${isLeader}`);
    
    const startButton = $("#SetupStartButton");
    const waitingLabel = $("#WaitingForLeaderLabel");
    
    if (isLeader) {
        // Лидер лобби (PlayerID 0) - показываем кнопку "Начать игру"
        if (startButton) startButton.style.visibility = "visible";
        if (waitingLabel) waitingLabel.style.visibility = "collapse";
    } else {
        // Обычный игрок - скрываем кнопку, показываем сообщение ожидания
        if (startButton) startButton.style.visibility = "collapse";
        if (waitingLabel) waitingLabel.style.visibility = "visible";
    }
}

// Вызываем сразу и с задержками
ForceFullScreen();
CheckIfLobbyLeader();
$.Schedule(0.1, ForceFullScreen);
$.Schedule(0.5, () => { ForceFullScreen(); CheckIfLobbyLeader(); });
$.Schedule(1.0, ForceFullScreen);

// Автоматически распределяем локального игрока в команду при загрузке
(function AutoAssignTeam() {
    $.Msg("🔄 Auto-assigning player to team...");
    
    const localPlayerID = Game.GetLocalPlayerID();
    $.Msg(`Local player ID: ${localPlayerID}`);
    
    // Отправляем событие на сервер для распределения в команду
    (GameEvents.SendCustomGameEventToServer as any)("auto_assign_team", { playerID: localPlayerID });
    
    $.Msg("✅ Team assignment request sent");
})();

// Обработчик кнопки "Начать игру"
function OnSetupStartClicked(): void {
    $.Msg("=== Setup Start button clicked! ===");
    
    // Отправляем событие на сервер для начала игры
    (GameEvents.SendCustomGameEventToServer as any)("setup_start_game", {});
    
    $.Msg("✅ Start game event sent");
}

// Обработчик события с сервера для установки таймера
GameEvents.Subscribe("setup_timer_update", (data: any) => {
    $.Msg(`📡 Received timer update: ${data.seconds} seconds`);
    StartAutoStartTimer(data.seconds);
});

// Экспортируем функцию для использования в XML
(globalThis as any).OnSetupStartClicked = OnSetupStartClicked;

$.Msg("=== Game Setup script loaded successfully ===");
