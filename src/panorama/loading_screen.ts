// ============================================
// КАСТОМНЫЙ ЗАГРУЗОЧНЫЙ ЭКРАН (LOADING фаза)
// Показываем картинку + progress bar (симуляция загрузки)
// Реальная предзагрузка 30 кадров через CSS в loading_screen.css
// ============================================

$.Msg("=== Loading screen with progress bar initialized ===");

// ============================================
// СИМУЛЯЦИЯ PROGRESS BAR (для визуала)
// ============================================
let currentProgress = 0;

function UpdateProgressBar(): void {
    const progressBar = $("#LoadingProgressBar");
    const progressText = $("#LoadingText") as LabelPanel;
    
    if (!progressBar || !progressText) return;
    
    currentProgress += 5;
    if (currentProgress > 100) currentProgress = 100;
    
    progressBar.style.width = `${currentProgress}%`;
    progressText.text = `Загрузка ресурсов... ${currentProgress}%`;
    
    if (currentProgress < 100) {
        $.Schedule(0.1, UpdateProgressBar);
    } else {
        progressText.text = "Загрузка завершена!";
        $.Msg("✅ Loading screen complete");
    }
}

// Запускаем симуляцию загрузки
$.Schedule(0.2, UpdateProgressBar);

// ============================================
// БЛОКИРОВКА стандартных панелей Dota 2
// ============================================
function BlockStandardPanels(): void {
    const contextPanel = $.GetContextPanel();
    if (!contextPanel) return;
    
    const parent = contextPanel.GetParent();
    if (!parent) return;
    
    const grandParent = parent.GetParent();
    if (!grandParent) return;
    
    const sidebar = grandParent.FindChildTraverse('SidebarAndBattleCupLayoutContainer');
    if (sidebar) {
        sidebar.style.visibility = "collapse";
        sidebar.hittest = false;
        sidebar.hittestchildren = false;
    }
    
    const battleCup = grandParent.FindChildTraverse('LoadingScreenBattleCupWinnerContainer');
    if (battleCup) {
        battleCup.style.visibility = "collapse";
        battleCup.hittest = false;
        battleCup.hittestchildren = false;
    }
}

BlockStandardPanels();
$.Schedule(0.1, BlockStandardPanels);
$.Schedule(0.5, BlockStandardPanels);

$.Msg("✅ Loading screen ready: spinner rotating, resources preloading...");
