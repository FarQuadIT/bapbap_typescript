// ============================================
// КАСТОМНЫЙ UI ДЛЯ CUSTOM_GAME_SETUP
// ============================================

// ============================================
// ЭЛЕКТРИЧЕСКАЯ АНИМАЦИЯ (покадровая)
// ВАЖНО: 31 кадр (1-31) предзагружены через CSS!
// ============================================
const ELECTRIC_FRAME_NUMBERS = Array.from({length: 31}, (_, i) => i + 1); // [1, 2, 3, ..., 31]
let currentElectricFrameIndex = 0;
const FRAME_DELAY = 0.04; // ~25 FPS

// ============================================
// АНИМАЦИЯ ВЗРЫВА НА КАРТОЧКАХ (34 кадра: 234-267)
// ============================================
const EXPLOSION_FRAME_START = 234;
const EXPLOSION_FRAME_END = 267;
const EXPLOSION_FRAME_DELAY = 0.033; // ~30 FPS
const EXPLOSION_TOTAL_FRAMES = EXPLOSION_FRAME_END - EXPLOSION_FRAME_START + 1; // 34 кадра

// ============================================
// 🎯 ПОЗИЦИОНИРОВАНИЕ АВАТАРОВ - МЕНЯЙ ТОЛЬКО ЗДЕСЬ!
// ============================================
const AVATAR_POSITION_X = "15px";   // Горизонталь (left)
const AVATAR_POSITION_Y = "52px";  // Вертикаль (top)

function PlayElectricAnimation(): void {
    const electricPanel = $("#ElectricEffect") as ImagePanel | null;
    if (!electricPanel) {
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

// НЕ запускаем анимацию сразу - дождемся полной загрузки
// PlayElectricAnimation запустится из функции RevealUI()

// ============================================
// АНИМАЦИЯ ВЗРЫВА НА КАРТОЧКЕ
// ============================================

function PlayExplosionOnCard(playerID: PlayerID, onComplete?: () => void): void {
    const explosionImage = $(`#Explosion_${playerID}`) as ImagePanel | null;
    if (!explosionImage) {
        $.Msg(`⚠️ Взрыв для игрока ${playerID} не найден`);
        if (onComplete) onComplete();
        return;
    }
    
    // Показываем взрыв
    explosionImage.style.visibility = "visible";
    explosionImage.style.opacity = "1";
    
    let currentFrame = EXPLOSION_FRAME_START;
    
    function PlayNextFrame(): void {
        if (currentFrame > EXPLOSION_FRAME_END) {
            // Анимация закончилась - скрываем взрыв
            if (explosionImage) {
                explosionImage.style.visibility = "collapse";
                explosionImage.style.opacity = "0";
            }
            if (onComplete) onComplete();
            return;
        }
        
        const frameNumber = currentFrame.toString().padStart(5, '0');
        const framePath = `file://{images}/custom_game/cartoonexplosion/explosion_${frameNumber}.png`;
        
        if (explosionImage) {
            explosionImage.SetImage(framePath);
        }
        
        currentFrame++;
        $.Schedule(EXPLOSION_FRAME_DELAY, PlayNextFrame);
    }
    
    // Запускаем анимацию
    PlayNextFrame();
}

// ============================================
// ДИНАМИЧЕСКОЕ СОЗДАНИЕ ПАНЕЛЕЙ ИГРОКОВ
// ============================================

function CreatePlayerPanel(playerID: PlayerID): void {
    const playersContainer = $("#PlayersContainer");
    if (!playersContainer) {
        return;
    }
    
    // Проверяем, не создана ли уже панель для этого игрока
    const existingPanel = $(`#Player_${playerID}`);
    if (existingPanel) {
        return;
    }
    
    // Создаем панель игрока
    const playerPanel = $.CreatePanel("Panel", playersContainer, `Player_${playerID}`);
    playerPanel.AddClass("PlayerPanel");
    
    // Получаем никнейм
    const playerName = Players.GetPlayerName(playerID) || `Player ${playerID}`;
    
    // Создаем никнейм
    const nicknameLabel = $.CreatePanel("Label", playerPanel, `Nickname_${playerID}`);
    nicknameLabel.AddClass("PlayerNickname");
    nicknameLabel.text = playerName;
    
    // Создаем аватар - сначала как Image с placeholder
    const avatarImage = $.CreatePanel("Image", playerPanel, `Avatar_${playerID}`) as ImagePanel;
    avatarImage.AddClass("PlayerAvatar");
    avatarImage.SetImage("file://{images}/custom_game/tstl.png"); // Placeholder по умолчанию
    
    // Явно устанавливаем стили (обязательно для корректного отображения)
    avatarImage.style.width = "155px";
    avatarImage.style.height = "155px";
    avatarImage.style.visibility = "visible";
    avatarImage.style.opacity = "1.0";
    
    // АБСОЛЮТНОЕ позиционирование (используем константы)
    avatarImage.style.x = AVATAR_POSITION_X;
    avatarImage.style.y = AVATAR_POSITION_Y;
    
    // Создаем статус
    const statusLabel = $.CreatePanel("Label", playerPanel, `Status_${playerID}`);
    statusLabel.AddClass("PlayerStatus");
    statusLabel.AddClass("status-connecting"); // Начальный статус
    statusLabel.text = "Подключается...";
    
    // Создаем Image для анимации взрыва (скрыт по умолчанию, Z-index 100 - поверх всего)
    const explosionImage = $.CreatePanel("Image", playerPanel, `Explosion_${playerID}`) as ImagePanel;
    explosionImage.AddClass("PlayerExplosion");
    explosionImage.SetImage(`file://{images}/custom_game/cartoonexplosion/explosion_00234.png`);
}

function UpdatePlayerPanels(): void {
    const allPlayerIDs = Game.GetAllPlayerIDs();
    
    // Создаем панели для всех игроков (пропускаются уже созданные)
    allPlayerIDs.forEach((playerID) => {
        CreatePlayerPanel(playerID);
    });
}

// НЕ создаем панели сразу - дождемся полной загрузки
// UpdatePlayerPanels вызовется из RevealUI()

// Периодическое обновление для подхвата новых игроков/ботов
function CheckForNewPlayers(): void {
    UpdatePlayerPanels();
    $.Schedule(1.0, CheckForNewPlayers); // Проверяем каждую секунду
}

// Запускаем проверку через 4 секунды (после появления UI)
$.Schedule(4, CheckForNewPlayers);

// Останавливаем проверку через 15 секунд (все игроки уже должны загрузиться)
$.Schedule(15, () => {
    // Проверка остановлена
});

// ============================================
// ОБНОВЛЕНИЕ АВАТАРОВ STEAM
// ============================================

function UpdatePlayerAvatars(event: NetworkedData<PlayerSteamIDsEventData>): void {
    $.Msg("🔄 Получено событие player_steam_ids от сервера");
    
    // Преобразуем объект обратно в массив (Dota 2 конвертирует массивы в объекты при отправке событий)
    const playersArray: Array<{ playerID: number; steamAccountID: number }> = [];
    for (const key in event.players) {
        playersArray.push(event.players[key]);
    }
    
    $.Msg(`  └ Обновляем аватары для ${playersArray.length} игроков`);
    
    playersArray.forEach((playerData) => {
        const { playerID, steamAccountID } = playerData;
        $.Msg(`  └ Player ${playerID}: steamID = ${steamAccountID} ${steamAccountID === 0 ? "(БОТ)" : "(ИГРОК)"}`);
        
        // Сохраняем информацию о том, бот это или нет
        playerBotStatus.set(playerID, steamAccountID === 0);
        
        const avatarPanel = $(`#Avatar_${playerID}`);
        
        if (!avatarPanel) {
            return;
        }
        
        // Удаляем старый Image
        avatarPanel.DeleteAsync(0);
        
        // Создаем новый DOTAAvatarImage или оставляем Image
        const playerPanel = $(`#Player_${playerID}`);
        if (!playerPanel) return;
        
        if (steamAccountID > 0) {
            // Реальный игрок - используем DOTAAvatarImage
            const playerInfo = Game.GetPlayerInfo(playerID as PlayerID);
            if (!playerInfo) {
                return;
            }
            
            const newAvatar = $.CreatePanel("DOTAAvatarImage", playerPanel, `Avatar_${playerID}`);
            newAvatar.AddClass("PlayerAvatar");
            newAvatar.steamid = playerInfo.player_steamid;
            
            // Явно устанавливаем обязательные стили (без них аватар не отображается)
            newAvatar.style.width = "155px";
            newAvatar.style.height = "155px";
            newAvatar.style.visibility = "visible";
            newAvatar.style.opacity = "1.0";
            
            // АБСОЛЮТНОЕ позиционирование (используем константы)
            newAvatar.style.x = AVATAR_POSITION_X;
            newAvatar.style.y = AVATAR_POSITION_Y;
        } else {
            // Бот - оставляем placeholder
            const newAvatar = $.CreatePanel("Image", playerPanel, `Avatar_${playerID}`) as ImagePanel;
            newAvatar.AddClass("PlayerAvatar");
            newAvatar.SetImage("file://{images}/custom_game/tstl.png");
            
            // Явно устанавливаем те же стили, что и для Steam аватаров
            newAvatar.style.width = "155px";
            newAvatar.style.height = "155px";
            newAvatar.style.visibility = "visible";
            newAvatar.style.opacity = "1.0";
            
            // АБСОЛЮТНОЕ позиционирование (используем константы)
            newAvatar.style.x = AVATAR_POSITION_X;
            newAvatar.style.y = AVATAR_POSITION_Y;
        }
    });
}

// Храним информацию о том, кто бот
const playerBotStatus: Map<number, boolean> = new Map();

// Подписываемся на событие с Steam Account IDs
GameEvents.Subscribe("player_steam_ids", UpdatePlayerAvatars);

// ============================================
// СИСТЕМА СТАТУСОВ ИГРОКОВ (Этап 6)
// ============================================

// Маппинг connection state → текст и CSS класс
interface PlayerStatusInfo {
    text: string;
    cssClass: string;
}

// Получить название enum для логирования
function GetConnectionStateName(state: DOTAConnectionState_t): string {
    switch (state) {
        case DOTAConnectionState_t.DOTA_CONNECTION_STATE_UNKNOWN: return "UNKNOWN(0)";
        case DOTAConnectionState_t.DOTA_CONNECTION_STATE_NOT_YET_CONNECTED: return "NOT_YET_CONNECTED(1)";
        case DOTAConnectionState_t.DOTA_CONNECTION_STATE_CONNECTED: return "CONNECTED(2)";
        case DOTAConnectionState_t.DOTA_CONNECTION_STATE_DISCONNECTED: return "DISCONNECTED(3)";
        case DOTAConnectionState_t.DOTA_CONNECTION_STATE_ABANDONED: return "ABANDONED(4)";
        case DOTAConnectionState_t.DOTA_CONNECTION_STATE_LOADING: return "LOADING(5)";
        case DOTAConnectionState_t.DOTA_CONNECTION_STATE_FAILED: return "FAILED(6)";
        default: return `UNKNOWN(${state})`;
    }
}

function GetPlayerStatusInfo(connectionState: DOTAConnectionState_t): PlayerStatusInfo {
    switch (connectionState) {
        case DOTAConnectionState_t.DOTA_CONNECTION_STATE_CONNECTED:
            return { text: "Готов", cssClass: "status-ready" };
        
        case DOTAConnectionState_t.DOTA_CONNECTION_STATE_LOADING:
            return { text: "Загружается...", cssClass: "status-loading" };
        
        case DOTAConnectionState_t.DOTA_CONNECTION_STATE_DISCONNECTED:
            return { text: "Отключен", cssClass: "status-disconnected" };
        
        case DOTAConnectionState_t.DOTA_CONNECTION_STATE_ABANDONED:
            return { text: "Покинул игру", cssClass: "status-abandoned" };
        
        case DOTAConnectionState_t.DOTA_CONNECTION_STATE_FAILED:
            return { text: "Ошибка подключения", cssClass: "status-failed" };
        
        case DOTAConnectionState_t.DOTA_CONNECTION_STATE_NOT_YET_CONNECTED:
            return { text: "Подключается...", cssClass: "status-connecting" };
        
        case DOTAConnectionState_t.DOTA_CONNECTION_STATE_UNKNOWN:
        default:
            return { text: "Неизвестно", cssClass: "status-unknown" };
    }
}

// Счетчик обновлений для управления логированием
let statusUpdateCount = 0;
const VERBOSE_LOG_COUNT = 5; // Первые 5 обновлений логируем подробно

// Проверка: все ли игроки готовы к старту игры
function AreAllPlayersReady(): boolean {
    const allPlayerIDs = Game.GetAllPlayerIDs();
    let notReadyPlayers: string[] = [];
    
    for (const playerID of allPlayerIDs) {
        const playerInfo = Game.GetPlayerInfo(playerID as PlayerID);
        if (!playerInfo) continue; // Пропускаем если нет информации
        
        const connectionState = playerInfo.player_connection_state as DOTAConnectionState_t;
        const isBot = playerBotStatus.get(playerID) || false;
        
        // Боты всегда готовы (даже в статусе NOT_YET_CONNECTED)
        if (isBot) continue;
        
        // Реальные игроки должны быть в статусе CONNECTED (2)
        if (connectionState !== DOTAConnectionState_t.DOTA_CONNECTION_STATE_CONNECTED) {
            const stateName = GetConnectionStateName(connectionState);
            notReadyPlayers.push(`Player ${playerID}: ${stateName}`);
        }
    }
    
    if (notReadyPlayers.length > 0) {
        // $.Msg(`⏳ Не все игроки готовы: ${notReadyPlayers.join(", ")}`);
        return false;
    }
    
    return true; // Все игроки готовы
}

// Функция обновления статусов всех игроков
function UpdatePlayerStatuses(): void {
    const allPlayerIDs = Game.GetAllPlayerIDs();
    statusUpdateCount++;
    
    allPlayerIDs.forEach((playerID) => {
        const statusLabel = $(`#Status_${playerID}`) as LabelPanel | null;
        if (!statusLabel) {
            return;
        }
        
        // Получаем информацию о игроке
        const playerInfo = Game.GetPlayerInfo(playerID as PlayerID);
        if (!playerInfo) {
            statusLabel.text = "Неизвестно";
            statusLabel.RemoveClass("status-ready");
            statusLabel.RemoveClass("status-loading");
            statusLabel.RemoveClass("status-disconnected");
            statusLabel.RemoveClass("status-abandoned");
            statusLabel.RemoveClass("status-failed");
            statusLabel.RemoveClass("status-connecting");
            statusLabel.AddClass("status-unknown");
            return;
        }
        
        // Получаем статус подключения
        const connectionState = playerInfo.player_connection_state as DOTAConnectionState_t;
        let statusInfo = GetPlayerStatusInfo(connectionState);
        
        // ФИКС ДЛЯ БОТОВ: Если это бот и статус NOT_YET_CONNECTED, показываем "Готов"
        const isBot = playerBotStatus.get(playerID) || false;
        if (isBot && connectionState === DOTAConnectionState_t.DOTA_CONNECTION_STATE_NOT_YET_CONNECTED) {
            statusInfo = { text: "Готов (Бот)", cssClass: "status-ready" };
        }
        
        // Обновляем текст статуса
        statusLabel.text = statusInfo.text;
        
        // Удаляем все старые классы статусов
        statusLabel.RemoveClass("status-ready");
        statusLabel.RemoveClass("status-loading");
        statusLabel.RemoveClass("status-disconnected");
        statusLabel.RemoveClass("status-abandoned");
        statusLabel.RemoveClass("status-failed");
        statusLabel.RemoveClass("status-connecting");
        statusLabel.RemoveClass("status-unknown");
        
        // Добавляем новый класс статуса
        statusLabel.AddClass(statusInfo.cssClass);
    });
    
    // После обновления статусов проверяем, можно ли показать кнопку "Начать игру"
    CheckIfLobbyLeader();
}

// Запускаем периодическое обновление статусов (каждые 0.2 секунды для более отзывчивого UI)
function StartStatusUpdates(): void {
    UpdatePlayerStatuses();
    $.Schedule(0.2, StartStatusUpdates); // Рекурсивный вызов каждые 200ms
}

// Запускаем обновление статусов через 3 секунды (после появления UI)
$.Schedule(3, StartStatusUpdates);

// Таймер автостарта
let autoStartTime = 10000; // Автостарт через 10000 секунд
let remainingTime = autoStartTime;

// Обновление таймера каждую секунду
function UpdateTimer(): void {
    const timerText = $("#CircularTimerText") as LabelPanel | null;
    const timerContainer = $("#CircularTimerContainer");
    
    if (!timerText || !timerContainer) {
        return;
    }
    
    if (remainingTime > 0) {
        // Обновляем цифру в центре
        timerText.text = remainingTime.toString();
        
        // Легкая пульсация цифр при каждой секунде
        timerText.style.transform = "scale3d(1.1, 1.1, 1)";
        $.Schedule(0.15, () => {
            if (timerText) {
                timerText.style.transform = "scale3d(1, 1, 1)";
            }
        });
        
        $.Msg(`⏱️ Timer: ${remainingTime}s`);
        remainingTime--;
        $.Schedule(1.0, UpdateTimer);
    } else {
        $.Msg("⏱️ Timer finished! Запускаем игру с анимацией...");
        // Вместо простого скрытия - запускаем красивую анимацию выхода
        HideCardsAndStartGame();
    }
}

// Старт таймера
function StartAutoStartTimer(seconds: number): void {
    autoStartTime = seconds;
    remainingTime = seconds;
    
    const timerContainer = $("#CircularTimerContainer");
    if (timerContainer) {
        timerContainer.style.visibility = "visible";
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
        
        // Растягиваем ВСЕ родительские панели вверх по иерархии
        let currentPanel = rootPanel.GetParent();
        let level = 1;
        
        while (currentPanel && level < 10) { // Ограничение на 10 уровней
            currentPanel.style.width = "100%";
            currentPanel.style.height = "100%";
            currentPanel.style.position = "0 0 0 0";
            
            // Убираем отступы
            currentPanel.style.margin = "0px";
            currentPanel.style.padding = "0px";
            
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
                }
            }
        }
    }
}

// Блокировка стандартных панелей Dota 2 (перенесено из loading_screen.ts)
function BlockStandardPanels(): void {
    const contextPanel = $.GetContextPanel();
    if (!contextPanel) return;
    
    const parent = contextPanel.GetParent();
    if (!parent) return;
    
    const grandParent = parent.GetParent();
    if (!grandParent) return;
    
    // Скрываем sidebar с battle cup
    const sidebar = grandParent.FindChildTraverse('SidebarAndBattleCupLayoutContainer');
    if (sidebar) {
        sidebar.style.visibility = "collapse";
        sidebar.hittest = false;
        sidebar.hittestchildren = false;
    }
    
    // Скрываем battle cup победителя
    const battleCup = grandParent.FindChildTraverse('LoadingScreenBattleCupWinnerContainer');
    if (battleCup) {
        battleCup.style.visibility = "collapse";
        battleCup.hittest = false;
        battleCup.hittestchildren = false;
    }
}

// Проверка: является ли локальный игрок лидером лобби И все ли игроки готовы
// В Dota 2 custom games лидер лобби (хост) всегда имеет PlayerID = 0
function CheckIfLobbyLeader(): void {
    const localPlayerID = Game.GetLocalPlayerID();
    const isLeader = (localPlayerID === 0);
    const allPlayersReady = AreAllPlayersReady();
    
    const startButton = $("#SetupStartButton");
    const waitingLabel = $("#WaitingForLeaderLabel") as LabelPanel | null;
    
    if (!isLeader) {
        // НЕ лидер - скрываем кнопку, показываем "Ожидание лидера лобби..."
        if (startButton) startButton.style.opacity = "0";
        if (waitingLabel) {
            waitingLabel.text = "Ожидание решения лидера лобби...";
            waitingLabel.style.visibility = "visible";
            waitingLabel.style.opacity = "1";
        }
    } else if (!allPlayersReady) {
        // Лидер, но НЕ все игроки готовы - скрываем кнопку, показываем "Ожидание игроков..."
        if (startButton) startButton.style.opacity = "0";
        if (waitingLabel) {
            waitingLabel.text = "Ожидание подключения игроков...";
            waitingLabel.style.visibility = "visible";
            waitingLabel.style.opacity = "1";
        }
    } else {
        // Лидер И все игроки готовы - ПОКАЗЫВАЕМ КНОПКУ!
        if (startButton) startButton.style.opacity = "1"; // Явно показываем кнопку
        if (waitingLabel) waitingLabel.style.visibility = "collapse";
    }
}

// ============================================
// СИСТЕМА ПРЕДЗАГРУЗКИ И ПЛАВНОГО ПОЯВЛЕНИЯ
// ============================================

let isUIRevealed = false;

function RevealUI(): void {
    if (isUIRevealed) {
        return; // Уже показали
    }
    isUIRevealed = true;
    
    $.Msg("🎨 UI полностью загружен, начинаем плавное появление...");
    
    const root = $.GetContextPanel();
    const logo = $("#Logo");
    const electric = $("#ElectricEffect");
    const playersContainer = $("#PlayersContainer");
    const timer = $("#CircularTimerContainer");
    const bottomContainer = $("#SetupBottomContainer");
    const initText = $("#InitText");
    const glowBottomLeft = $("#GlowOverlayBottomLeft");
    const glowTopRight = $("#GlowOverlayTopRight");
    
    // ПОЭТАПНОЕ ПОЯВЛЕНИЕ с задержками для плавности
    
    // 1. Фон (сразу)
    if (root) {
        root.AddClass("loaded");
    }
    
    // 1.5. Оверлеи свечения (через 0.1s) - сразу после фона для плавного перелива
    $.Schedule(0.1, () => {
        if (glowBottomLeft) {
            $.Msg("✨ Активирую ЛЕВЫЙ оверлей свечения");
            glowBottomLeft.AddClass("loaded");
            $.Msg(`  └ Видимость: ${glowBottomLeft.visible}, Opacity: ${glowBottomLeft.style.opacity}`);
        } else {
            $.Msg("⚠️ ЛЕВЫЙ оверлей НЕ НАЙДЕН!");
        }
        
        if (glowTopRight) {
            $.Msg("✨ Активирую ПРАВЫЙ оверлей свечения");
            glowTopRight.AddClass("loaded");
            $.Msg(`  └ Видимость: ${glowTopRight.visible}, Opacity: ${glowTopRight.style.opacity}`);
        } else {
            $.Msg("⚠️ ПРАВЫЙ оверлей НЕ НАЙДЕН!");
        }
        
        // Дополнительная проверка через 2 секунды
        $.Schedule(2, () => {
            if (glowBottomLeft) {
                $.Msg(`🔍 ЛЕВЫЙ оверлей через 2с: Opacity = ${glowBottomLeft.style.opacity}`);
            }
            if (glowTopRight) {
                $.Msg(`🔍 ПРАВЫЙ оверлей через 2с: Opacity = ${glowTopRight.style.opacity}`);
            }
        });
    });
    
    // 2. Логотип (через 0.2s)
    $.Schedule(0.2, () => {
        if (logo) logo.AddClass("loaded");
    });
    
    // 3. Электричество (через 0.5s) + запускаем анимацию
    $.Schedule(0.5, () => {
        if (electric) electric.AddClass("loaded");
        PlayElectricAnimation(); // Запускаем покадровую анимацию
    });
    
    // 4. Панели игроков (СОЗДАЁМ ЗАРАНЕЕ, через 0.8s, пока невидимы)
    $.Schedule(0.8, () => {
        $.Msg("🃏 Начинаем создание карточек игроков...");
        
        // Переменные для отслеживания
        let lastPlayerCount = 0;
        let stableChecks = 0;
        const STABLE_CHECKS_NEEDED = 5; // 5 проверок подряд (0.5s)
        const MIN_PLAYERS = 8; // Минимум 8 игроков (1 человек + 7 ботов)
        const MAX_WAIT_TIME = 5000; // Максимум 5 секунд ожидания
        const startTime = Game.GetGameTime();
        
        // Периодически создаём карточки для новых игроков
        function CreatePlayerCardsLoop(): void {
            const currentPlayerCount = Game.GetAllPlayerIDs().length;
            const elapsed = (Game.GetGameTime() - startTime) * 1000;
            
            if (currentPlayerCount > lastPlayerCount) {
                $.Msg(`  └ Обнаружено игроков: ${currentPlayerCount} (было ${lastPlayerCount})`);
                UpdatePlayerPanels(); // Создаём карточки для новых игроков
                lastPlayerCount = currentPlayerCount;
                stableChecks = 0; // Сбрасываем счётчик
            } else if (currentPlayerCount === lastPlayerCount && currentPlayerCount > 0) {
                stableChecks++;
            }
            
            // УСЛОВИЯ ЗАВЕРШЕНИЯ:
            // 1. Достигли минимума игроков И стабильно
            // 2. ИЛИ превысили таймаут
            const hasMinPlayers = currentPlayerCount >= MIN_PLAYERS;
            const isStable = stableChecks >= STABLE_CHECKS_NEEDED;
            const timeout = elapsed >= MAX_WAIT_TIME;
            
            if ((hasMinPlayers && isStable) || timeout) {
                if (timeout && currentPlayerCount < MIN_PLAYERS) {
                    $.Msg(`⏱️ Таймаут (${elapsed}ms), показываем ${currentPlayerCount} игроков`);
                } else {
                    $.Msg(`✅ Все ${currentPlayerCount} игроков загружены, показываем карточки`);
                }
                ShowPlayerCards();
            } else {
                // Проверяем снова через 0.1s
                $.Schedule(0.1, CreatePlayerCardsLoop);
            }
        }
        
        // Запускаем цикл создания
        CreatePlayerCardsLoop();
    });
    
    // Функция показа карточек (вынесена отдельно)
    function ShowPlayerCards(): void {
        const playersContainer = $("#PlayersContainer");
        if (!playersContainer) return;
        
        // АДАПТИВНЫЙ SCALE под разные разрешения
        const rootPanel = $.GetContextPanel();
        const screenWidth = rootPanel.actuallayoutwidth || 1920;
        const screenHeight = rootPanel.actuallayoutheight || 1080;
        
        // Базовое разрешение (для которого дизайн сделан)
        const BASE_WIDTH = 1920;
        const MIN_REQUIRED_WIDTH = 1600; // Минимум для нормального отображения 8 карточек
        
        // Рассчитываем scale (не больше 1.0, не меньше 0.5)
        let scale = Math.min(1.0, screenWidth / MIN_REQUIRED_WIDTH);
        scale = Math.max(0.5, scale); // Не уменьшаем меньше 50%
        
        $.Msg(`📐 Адаптация под разрешение ${screenWidth}x${screenHeight}`);
        $.Msg(`  └ Scale: ${(scale * 100).toFixed(0)}% (базовое = ${BASE_WIDTH}px)`);
        
        // Предупреждения для проблемных разрешений
        if (scale < 0.8) {
            $.Msg(`  ⚠️ Маленький экран - карточки уменьшены до ${(scale * 100).toFixed(0)}%`);
        }
        if (screenWidth > 2560) {
            $.Msg(`  📺 Большой экран (${screenWidth}px) - используем 100% размер`);
        }
        
        // Применяем scale к контейнеру (через отдельное свойство, чтобы не конфликтовать)
        // transform-origin: center - масштабирование от центра
        playersContainer.style.transformOrigin = "50% 50%";
        
        // Показываем контейнер
        playersContainer.AddClass("loaded");
        
        // Применяем scale ПОСЛЕ появления (чтобы не конфликтовать с opacity transition)
        $.Schedule(0.1, () => {
            playersContainer.style.transform = `scale3d(${scale}, ${scale}, 1)`;
        });
        
        // ДВУХЭТАПНАЯ АНИМАЦИЯ: выезд вверх → сдвиг на позицию
        const allPlayerIDs = Game.GetAllPlayerIDs();
        $.Msg(`🌊 Запускаем волновую анимацию для ${allPlayerIDs.length} карточек`);
        
        const CARD_WIDTH = 190; // 180px width + 10px spacing (БЕЗ учета scale - scale применяется к контейнеру)
        const totalCards = allPlayerIDs.length;
        
        allPlayerIDs.forEach((playerID, index) => {
            const playerPanel = $(`#Player_${playerID}`);
            if (!playerPanel) return;
            
            // ЭТАП 1: Выезд вверх (по центру) с задержкой
            $.Schedule(index * 0.5, () => {
                playerPanel.AddClass("loaded");
                $.Msg(`  └ Карточка ${index + 1}/${totalCards}: Выезд вверх`);
                
                // ЭТАП 2: Сдвиг на финальную позицию через 0.4s
                $.Schedule(0.4, () => {
                    // Рассчитываем смещение от центра (в исходных пикселях, scale применится автоматически)
                    // Центр всего ряда: (totalCards - 1) / 2
                    // Расстояние текущей карточки от центра
                    const offsetFromCenter = index - (totalCards - 1) / 2;
                    const translateX = offsetFromCenter * CARD_WIDTH;
                    
                    playerPanel.style.transform = `translate3d(${translateX}px, 0px, 0px)`;
                    playerPanel.AddClass("positioned");
                    $.Msg(`  └ Карточка ${index + 1}/${totalCards}: Сдвиг на ${translateX}px`);
                    
                    // Добавляем обработку hover для сохранения позиции
                    playerPanel.SetPanelEvent("onmouseover", () => {
                        playerPanel.style.transform = `translate3d(${translateX}px, -8px, 60px) rotateY(4deg) rotateX(-3deg) scale3d(1.01, 1.01, 1)`;
                        playerPanel.style.boxShadow = "#00000088 0px 8px 15px 0px";
                        playerPanel.style.brightness = "1.05";
                    });
                    
                    playerPanel.SetPanelEvent("onmouseout", () => {
                        playerPanel.style.transform = `translate3d(${translateX}px, 0px, 0px)`;
                        playerPanel.style.boxShadow = "none";
                        playerPanel.style.brightness = "1.0";
                    });
                });
            });
        });
        
        // Запускаем периодическое обновление статусов после появления карточек
        StartStatusUpdates();
    }
    
    // 5. Текст инициализации (через 1.6s - после карточек)
    $.Schedule(1.6, () => {
        if (initText) initText.AddClass("loaded");
    });
    
    // 6. Таймер (через 2.2s)
    $.Schedule(2.2, () => {
        if (timer) timer.AddClass("loaded");
    });
    
    // 7. Контейнер кнопки внизу (через 2.4s)
    $.Schedule(2.4, () => {
        if (bottomContainer) bottomContainer.AddClass("loaded");
        
        // 7.1. САМА КНОПКА появляется через 0.1s ПОСЛЕ контейнера (чтобы избежать прыжка)
        $.Schedule(0.1, () => {
            const startButton = $("#SetupStartButton");
            if (startButton) startButton.AddClass("loaded");
        });
    });
}

// Функция проверки готовности UI
function CheckUIReady(): void {
    // Проверяем что все критичные панели существуют
    const root = $.GetContextPanel();
    const logo = $("#Logo");
    const electric = $("#ElectricEffect");
    const playersContainer = $("#PlayersContainer");
    
    if (root && logo && electric && playersContainer) {
        $.Msg("✅ Все панели загружены, ожидаем 0.5s для рендера...");
        
        // Даем еще 0.5s на полный рендер всех изображений
        $.Schedule(0.5, RevealUI);
    } else {
        $.Msg("⏳ UI еще не готов, ждем...");
        // Проверяем снова через 0.1s
        $.Schedule(0.1, CheckUIReady);
    }
}

// Вызываем сразу и с задержками
ForceFullScreen();
BlockStandardPanels();
CheckIfLobbyLeader();
$.Schedule(0.1, () => { ForceFullScreen(); BlockStandardPanels(); });
$.Schedule(0.5, () => { ForceFullScreen(); BlockStandardPanels(); CheckIfLobbyLeader(); });
$.Schedule(1.0, () => { ForceFullScreen(); BlockStandardPanels(); });

// ЗАПУСКАЕМ ПРОВЕРКУ ГОТОВНОСТИ UI
// Даем небольшую задержку для полной загрузки DOM
$.Schedule(0.3, CheckUIReady);

// Автоматически распределяем локального игрока в команду при загрузке
(function AutoAssignTeam() {
    const localPlayerID = Game.GetLocalPlayerID();
    
    // Отправляем событие на сервер для распределения в команду
    (GameEvents.SendCustomGameEventToServer as any)("auto_assign_team", { playerID: localPlayerID });
})();

// ============================================
// АНИМАЦИЯ ВЫХОДА КАРТОЧЕК ПЕРЕД НАЧАЛОМ ИГРЫ
// ============================================

let isGameStarting = false; // Флаг чтобы не запускать дважды

function HideCardsAndStartGame(): void {
    if (isGameStarting) {
        return; // Уже запущено
    }
    isGameStarting = true;
    
    $.Msg("🚀 Начинаем анимацию выхода и запуск игры...");
    
    const allPlayerIDs = Game.GetAllPlayerIDs();
    const HIDE_DELAY = 0.15; // Задержка между вылетом карточек
    const ANIMATION_DURATION = 0.6; // Длительность вылета одной карточки
    
    // ЭТАП 1: Сразу скрываем кнопку, таймер и текст (0.0s)
    $.Msg("  └ Этап 1: Скрываем кнопку, таймер и текст");
    
    const timer = $("#CircularTimerContainer");
    const bottomContainer = $("#SetupBottomContainer");
    const initText = $("#InitText");
    
    // СНАЧАЛА устанавливаем transitions для всех элементов
    if (timer) {
        timer.style.transitionProperty = "opacity, transform";
        timer.style.transitionDuration = "0.5s";
        timer.style.transitionTimingFunction = "ease-out";
    }
    
    if (bottomContainer) {
        bottomContainer.style.transitionProperty = "opacity, transform";
        bottomContainer.style.transitionDuration = "0.6s";
        bottomContainer.style.transitionTimingFunction = "ease-out";
    }
    
    if (initText) {
        initText.style.transitionProperty = "opacity";
        initText.style.transitionDuration = "0.4s";
        initText.style.transitionTimingFunction = "ease-out";
    }
    
    // МИКРОЗАДЕРЖКА (1 кадр) чтобы движок применил transitions
    $.Schedule(0.016, () => {
        // ТЕПЕРЬ меняем значения - они анимируются!
        if (timer) {
            timer.style.opacity = "0";
            timer.style.transform = "scale3d(0.5, 0.5, 1)";
        }
        
        if (bottomContainer) {
            bottomContainer.style.opacity = "0";
            bottomContainer.style.transform = "translate3d(0px, 100px, 0px)";
        }
        
        if (initText) {
            initText.style.opacity = "0";
        }
    });
    
    // ЭТАП 2: Через 0.4s скрываем логотип
    $.Schedule(0.4, () => {
        $.Msg("  └ Этап 2: Логотип исчезает");
        const logo = $("#Logo");
        if (logo) {
            // СНАЧАЛА transition
            logo.style.transitionProperty = "opacity, transform";
            logo.style.transitionDuration = "0.8s";
            logo.style.transitionTimingFunction = "ease-out";
            
            // МИКРОЗАДЕРЖКА для применения transition
            $.Schedule(0.016, () => {
                // ПОТОМ значения
                if (logo) {
                    logo.style.opacity = "0";
                    logo.style.transform = "translate3d(0px, -300px, 0px)";
                }
            });
        }
    });
    
    // ЭТАП 3: Через 0.8s начинаем вылет карточек в электричество
    const CARDS_START_DELAY = 0.8;
    $.Schedule(CARDS_START_DELAY, () => {
        $.Msg("  └ Этап 3: Карточки улетают в электричество");
    });
    
    // Запускаем вылет карточек по очереди С ВЗРЫВОМ! 💥
    allPlayerIDs.forEach((playerID, index) => {
        const playerPanel = $(`#Player_${playerID}`);
        if (!playerPanel) return;
        
        $.Schedule(CARDS_START_DELAY + (index * HIDE_DELAY), () => {
            $.Msg(`    └ Карточка ${index + 1}/${allPlayerIDs.length}: 💥 ВЗРЫВ!`);
            
            // СНАЧАЛА запускаем анимацию взрыва
            PlayExplosionOnCard(playerID as PlayerID);
            
            // Через 0.5s (в середине взрыва) - карточка начинает улетать
            $.Schedule(0.5, () => {
                // СНАЧАЛА transition
                playerPanel.style.transitionProperty = "transform, opacity";
                playerPanel.style.transitionDuration = `${ANIMATION_DURATION}s`;
                playerPanel.style.transitionTimingFunction = "ease-in";
                
                // МИКРОЗАДЕРЖКА для применения transition
                $.Schedule(0.016, () => {
                    // ПОТОМ улетают вверх (в центр электричества) и растворяются
                    playerPanel.style.transform = `translate3d(0px, -500px, 0px)`;
                    playerPanel.style.opacity = "0";
                });
                
                $.Msg(`    └ Карточка ${index + 1}/${allPlayerIDs.length}: ↑ улетает в портал`);
            });
        });
    });
    
    // Рассчитываем общее время анимации
    // Взрыв длится ~1.1s, вылет начинается через 0.5s после взрыва и длится 0.6s
    // Максимальное время одной карточки: max(1.1s взрыв, 0.5s задержка + 0.6s вылет) = 1.1s
    const explosionDuration = EXPLOSION_TOTAL_FRAMES * EXPLOSION_FRAME_DELAY; // ~1.12s
    const totalAnimationTime = CARDS_START_DELAY + (allPlayerIDs.length * HIDE_DELAY) + explosionDuration;
    
    $.Msg(`  └ Полное время анимации: ${totalAnimationTime.toFixed(1)}s (с взрывами!)`);
    
    // После завершения анимации - скрываем весь UI и запускаем игру
    $.Schedule(totalAnimationTime, () => {
        $.Msg("✅ Анимация завершена, отправляем сигнал на сервер...");
        
        // Скрываем весь root panel
        const root = $.GetContextPanel();
        if (root) {
            root.style.visibility = "collapse";
        }
        
        // Отправляем событие на сервер для начала игры
        (GameEvents.SendCustomGameEventToServer as any)("setup_start_game", {});
    });
}

// Обработчик кнопки "Начать игру"
function OnSetupStartClicked(): void {
    HideCardsAndStartGame();
}

// Обработчик события с сервера для установки таймера
GameEvents.Subscribe("setup_timer_update", (data: any) => {
    StartAutoStartTimer(data.seconds);
});

// Экспортируем функцию для использования в XML
(globalThis as any).OnSetupStartClicked = OnSetupStartClicked;
