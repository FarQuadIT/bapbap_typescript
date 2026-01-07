$.Msg("Hud panorama loaded");

// ⚠️ ВРЕМЕННО: Блокируем стандартные панели Dota 2 в HUD
// Это нужно, чтобы они не появлялись во время CUSTOM_GAME_SETUP
function BlockStandardPanelsInHUD(): void {
    const hudRoot = $("#HudRoot");
    if (!hudRoot) {
        $.Msg("⚠️ [HUD] HudRoot not found");
        return;
    }
    
    const parent = hudRoot.GetParent();
    if (!parent) {
        $.Msg("⚠️ [HUD] HudRoot parent not found");
        return;
    }
    
    // Ищем панели на уровне выше HUD
    const sidebar = parent.FindChildTraverse('SidebarAndBattleCupLayoutContainer');
    if (sidebar) {
        sidebar.style.visibility = "collapse";
        sidebar.hittest = false;
        sidebar.hittestchildren = false;
        $.Msg("✅ [HUD] Blocked SidebarAndBattleCupLayoutContainer");
    } else {
        $.Msg("⚠️ [HUD] SidebarAndBattleCupLayoutContainer not found");
    }
    
    const battleCup = parent.FindChildTraverse('LoadingScreenBattleCupWinnerContainer');
    if (battleCup) {
        battleCup.style.visibility = "collapse";
        battleCup.hittest = false;
        battleCup.hittestchildren = false;
        $.Msg("✅ [HUD] Blocked LoadingScreenBattleCupWinnerContainer");
    } else {
        $.Msg("⚠️ [HUD] LoadingScreenBattleCupWinnerContainer not found");
    }
}

// Блокируем сразу и с задержками
BlockStandardPanelsInHUD();
$.Schedule(0.5, BlockStandardPanelsInHUD);
$.Schedule(1.0, BlockStandardPanelsInHUD);
$.Schedule(2.0, BlockStandardPanelsInHUD);
$.Schedule(3.0, BlockStandardPanelsInHUD);

function OnCloseButtonClicked() {
    $.Msg("Example close button clicked");

    // Find panel by id
    const examplePanel = $("#ExamplePanel");

    // Remove panel
    examplePanel.DeleteAsync(0);

    // Send event to server
    GameEvents.SendCustomGameEventToServer("ui_panel_closed", {});
}

GameEvents.Subscribe("example_event", (data: NetworkedData<ExampleEventData>) => {
    const myNumber = data.myNumber;
    const myString = data.myString;

    const myBoolean = data.myBoolean; // After sending to client this is now type 0 | 1!

    const myArrayObject = data.myArrayOfNumbers; // After sending this is now an object!

    const myArray = toArray(myArrayObject); // We can turn it back into an array ourselves.

    $.Msg("Received example event", myNumber, myString, myBoolean, myArrayObject, myArray);

});

/**
 * Turn a table object into an array.
 * @param obj The object to transform to an array.
 * @returns An array with items of the value type of the original object.
 */
function toArray<T>(obj: Record<number, T>): T[] {
    const result = [];
    
    let key = 1;
    while (obj[key]) {
        result.push(obj[key]);
        key++;
    }

    return result;
}

async function sleep(time: number): Promise<void> {
    return new Promise<void>((resolve) => $.Schedule(time, resolve));
}
