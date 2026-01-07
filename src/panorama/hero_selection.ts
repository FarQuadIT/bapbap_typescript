/**
 * Custom Hero Selection Screen
 * Allows players to choose from available heroes
 */

// List of available heroes
const heroes = [
    { name: "npc_dota_hero_axe", displayName: "Axe" },
    { name: "npc_dota_hero_drow_ranger", displayName: "Drow Ranger" },
    { name: "npc_dota_hero_phantom_assassin", displayName: "Phantom Assassin" }
];

let isHeroLocked = false;

// Initialize the hero selection screen
function InitializeHeroSelection() {
    $.Msg("Hero Selection screen initialized");
    
    const heroGrid = $("#HeroGrid");
    if (!heroGrid) {
        $.Msg("ERROR: HeroGrid panel not found!");
        return;
    }

    // Clear existing children (in case of reload)
    heroGrid.RemoveAndDeleteChildren();

    // Create hero cards
    heroes.forEach((heroData) => {
        CreateHeroCard(heroGrid, heroData.name, heroData.displayName);
    });

    $.Msg(`Created ${heroes.length} hero cards`);
}

// Create a single hero card
function CreateHeroCard(parent: Panel, heroName: string, displayName: string) {
    // Main hero card container
    const heroCard = $.CreatePanel("Panel", parent, `hero_card_${heroName}`);
    heroCard.AddClass("hero-card");
    heroCard.SetAttributeString("hero-name", heroName);

    // Hero image (this automatically shows player's equipped cosmetics!)
    const heroImage = $.CreatePanel("DOTAHeroImage", heroCard, `hero_image_${heroName}`);
    heroImage.heroname = heroName;
    heroImage.heroimagestyle = "landscape"; // 'landscape', 'portrait', or 'icon'
    heroImage.AddClass("hero-image");

    // Hero name label
    const heroLabel = $.CreatePanel("Label", heroCard, `hero_label_${heroName}`);
    heroLabel.text = displayName;
    heroLabel.AddClass("hero-label");

    // Hover effect
    heroCard.SetPanelEvent("onmouseover", () => {
        if (!isHeroLocked) {
            heroCard.AddClass("hero-card-hover");
        }
    });

    heroCard.SetPanelEvent("onmouseout", () => {
        heroCard.RemoveClass("hero-card-hover");
    });

    // Click handler
    heroCard.SetPanelEvent("onactivate", () => {
        if (!isHeroLocked) {
            OnHeroSelected(heroName, displayName);
        }
    });
}

// Handle hero selection
function OnHeroSelected(heroName: string, displayName: string) {
    $.Msg(`Hero selected: ${displayName} (${heroName})`);
    
    // Lock selection
    isHeroLocked = true;

    // Visual feedback - highlight selected hero
    const heroGrid = $("#HeroGrid");
    if (heroGrid) {
        const children = heroGrid.Children();
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (child) {
                child.RemoveClass("hero-card-selected");
                child.RemoveClass("hero-card-hover");
            }
        }
    }

    const selectedCard = $(`#hero_card_${heroName}`);
    if (selectedCard) {
        selectedCard.AddClass("hero-card-selected");
    }

    // Get local player ID
    const playerId = Players.GetLocalPlayer();
    $.Msg(`Local Player ID: ${playerId}`);

    // Send selection to server
    GameEvents.SendCustomGameEventToServer("player_selected_hero", {
        PlayerID: playerId,
        hero: heroName
    });

    $.Msg(`Sent hero selection to server: ${heroName} for player ${playerId}`);
}

// Initialize on load
(function() {
    $.Msg("=== Custom Hero Selection UI Loaded ===");
    
    // Wait a bit for the panel to be fully loaded
    $.Schedule(0.1, () => {
        InitializeHeroSelection();
    });
})();
