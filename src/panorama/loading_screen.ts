// ============================================
// КАСТОМНЫЙ ЗАГРУЗОЧНЫЙ ЭКРАН (LOADING фаза)
// Просто показываем картинку, эта фаза быстро пропускается
// ============================================

$.Msg("=== Loading screen (image only) initialized ===");

// БЛОКИРОВКА стандартных панелей Dota 2
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
