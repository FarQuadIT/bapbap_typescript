/**
 * This file contains types for the events you want to send between the UI (Panorama)
 * and the server (VScripts).
 * 
 * IMPORTANT: 
 * 
 * The dota engine will change the type of event data slightly when it is sent, so on the
 * Panorama side your event handlers will have to handle NetworkedData<EventType>, changes are:
 *   - Booleans are turned to 0 | 1
 *   - Arrays are automatically translated to objects when sending them as event. You have
 *     to change them back into arrays yourself! See 'toArray()' in src/panorama/hud.ts
 */

// To declare an event for use, add it to this table with the type of its data
interface CustomGameEventDeclarations {
    example_event: ExampleEventData,
    ui_panel_closed: UIPanelClosedEventData,
    setup_timer_update: SetupTimerUpdateEventData,
    player_steam_ids: PlayerSteamIDsEventData,
    hero_selection_players_data: HeroSelectionPlayersDataEvent,
    player_pick_hero: PlayerPickHeroEvent  // ЭТАП 5: Выбор героя игроком
}

// Define the type of data sent by the example_event event
interface ExampleEventData {
    myNumber: number;
    myBoolean: boolean;
    myString: string;
    myArrayOfNumbers: number[]
}

// This event has no data
interface UIPanelClosedEventData {}

// Event sent from server to update auto-start timer
interface SetupTimerUpdateEventData {
    seconds: number; // Seconds until auto-start
}

// Event sent from server with player Steam Account IDs
interface PlayerSteamIDsEventData {
    players: Array<{
        playerID: number;
        steamAccountID: number; // 32-bit Steam Account ID (0 for bots)
    }>;
}

// Event sent from server with all players' hero data for hero selection UI
interface HeroSelectionPlayersDataEvent {
    players: Array<{
        playerID: number;
        heroName: string; // Hero name (e.g. "npc_dota_hero_axe")
        teamNumber: number; // Team number (6-13 for custom teams)
    }>;
}

// 🎯 ЭТАП 5: Событие выбора героя игроком
interface PlayerPickHeroEvent {
    heroName: string; // Выбранный герой (e.g. "npc_dota_hero_axe")
}