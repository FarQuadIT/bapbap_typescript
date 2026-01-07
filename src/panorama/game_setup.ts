// ============================================
// КАСТОМНЫЙ UI ДЛЯ CUSTOM_GAME_SETUP
// ============================================

$.Msg("=== Game Setup UI initialized ===");

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

// Диагностика: выводим информацию о панели
function DiagnosePanels(): void {
    const rootPanel = $.GetContextPanel();
    $.Msg("=== PANEL DIAGNOSTICS ===");
    $.Msg(`Root panel ID: ${rootPanel.id}`);
    $.Msg(`Root panel class: ${rootPanel.paneltype}`);
    $.Msg(`Actual width: ${rootPanel.actuallayoutwidth}`);
    $.Msg(`Actual height: ${rootPanel.actuallayoutheight}`);
    $.Msg(`Parent: ${rootPanel.GetParent()?.id || "none"}`);
}

// Вызываем сразу и с задержками
ForceFullScreen();
DiagnosePanels();
$.Schedule(0.1, () => { ForceFullScreen(); DiagnosePanels(); });
$.Schedule(0.5, () => { ForceFullScreen(); DiagnosePanels(); });
$.Schedule(1.0, () => { ForceFullScreen(); DiagnosePanels(); });

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

// Экспортируем функцию для использования в XML
(globalThis as any).OnSetupStartClicked = OnSetupStartClicked;

$.Msg("=== Game Setup script loaded successfully ===");
