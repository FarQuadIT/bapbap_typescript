import { reloadable } from "./lib/tstl-utils";
import { modifier_panic } from "./modifiers/modifier_panic";

const heroSelectionTime = 10;

declare global {
    interface CDOTAGameRules {
        Addon: GameMode;
    }
}

interface HeroZoneData {
    br_last_debug_time?: number;
    br_damage_particle?: ParticleID;
    br_damage_particle_time?: number;
}

@reloadable
export class GameMode {
    // Battle Royale zone parameters
    private br_zone_center?: CBaseEntity;
    private br_zone_particle?: ParticleID;
    private br_current_radius: number = 3000;
    private br_target_radius: number = 3000;
    private br_min_radius: number = 100;
    private br_shrink_speed: number = 30;
    private br_damage_per_second: number = 10;
    private br_shrink_delay: number = 5;
    private br_shrink_pause: number = 15;
    private br_next_shrink_time: number = 0;
    private br_is_shrinking: boolean = false;
    private br_game_start_time: number = 0;
    private br_last_visual_radius?: number;
    private hero_zone_data: Map<EntityIndex, HeroZoneData> = new Map();
    public static Precache(this: void, context: CScriptPrecacheContext) {
        PrecacheResource("particle", "particles/units/heroes/hero_meepo/meepo_earthbind_projectile_fx.vpcf", context);
        PrecacheResource("soundfile", "soundevents/game_sounds_heroes/game_sounds_meepo.vsndevts", context);

        // Battle Royale zone particles
        PrecacheResource("particle", "particles/ui_mouseactions/range_display.vpcf", context);
        PrecacheResource("particle", "particles/units/heroes/hero_leshrac/leshrac_pulse_nova.vpcf", context);

        // Axe Charge and Call particles
        PrecacheResource("particle", "particles/units/heroes/hero_magnataur/magnataur_skewer.vpcf", context);
        PrecacheResource("particle", "particles/units/heroes/hero_axe/axe_beserkers_call.vpcf", context);
        PrecacheResource("particle", "particles/units/heroes/hero_axe/axe_beserkers_call_owner.vpcf", context);

        // Viper Poison Attack (for Drow Ranger)
        PrecacheResource("particle", "particles/units/heroes/hero_viper/viper_poison_attack.vpcf", context);
        PrecacheResource("soundfile", "soundevents/game_sounds_heroes/game_sounds_viper.vsndevts", context);

        // Sounds
        PrecacheResource("soundfile", "soundevents/game_sounds_heroes/game_sounds_axe.vsndevts", context);
        PrecacheResource("soundfile", "soundevents/game_sounds_heroes/game_sounds_magnataur.vsndevts", context);
    }

    public static Activate(this: void) {
        // When the addon activates, create a new instance of this GameMode class.
        GameRules.Addon = new GameMode();
    }

    constructor() {
        this.configure();

        // Register event listeners for dota engine events
        ListenToGameEvent("game_rules_state_change", () => this.OnStateChange(), undefined);
        ListenToGameEvent("npc_spawned", event => this.OnNpcSpawned(event), undefined);

        // Register event listeners for events from the UI
        CustomGameEventManager.RegisterListener("ui_panel_closed", (_, data) => {
            print(`Player ${data.PlayerID} has closed their UI panel.`);

            // Respond by sending back an example event
            const player = PlayerResource.GetPlayer(data.PlayerID)!;
            CustomGameEventManager.Send_ServerToPlayer(player, "example_event", {
                myNumber: 42,
                myBoolean: true,
                myString: "Hello!",
                myArrayOfNumbers: [1.414, 2.718, 3.142]
            });

            // Also apply the panic modifier to the sending player's hero
            const hero = player.GetAssignedHero();
            if (hero != undefined) { // Hero didn't spawn yet or dead
                hero.AddNewModifier(hero, undefined, modifier_panic.name, { duration: 5 });
            }
        });

        // Start Battle Royale zone update loop
        Timers.CreateTimer(0.1, () => this.OnThink());
    }

    private configure(): void {
        GameRules.SetCustomGameTeamMaxPlayers(DotaTeam.GOODGUYS, 4);
        GameRules.SetCustomGameTeamMaxPlayers(DotaTeam.BADGUYS, 3);

        GameRules.SetShowcaseTime(0);
        GameRules.SetHeroSelectionTime(heroSelectionTime);
        GameRules.SetPreGameTime(10); // Time after heroes spawn before game starts (10 seconds for testing)
    }

    public OnStateChange(): void {
        const state = GameRules.State_Get();

        print(`=== Game Rules State Change: ${state} ===`);

        // Add 4 bots to lobby in tools
        if (IsInToolsMode() && state == GameState.CUSTOM_GAME_SETUP) {
            Timers.CreateTimer(1, () => {
                for (let i = 0; i < 4; i++) {
                    SendToServerConsole("dota_bot_populate");
                }
                return undefined;
            });
        }

        if (state === GameState.CUSTOM_GAME_SETUP) {
            // Automatically skip setup in tools
            if (IsInToolsMode()) {
                Timers.CreateTimer(3, () => {
                    GameRules.FinishCustomGameSetup();
                });
            }
        }

        // Initialize Battle Royale zone in pre-game
        if (state === GameState.PRE_GAME) {
            this.InitializeBattleRoyaleZone();
            Timers.CreateTimer(0.2, () => this.StartGame());
        }

        // Start shrinking timer when game starts
        if (state === GameState.GAME_IN_PROGRESS) {
            this.br_game_start_time = GameRules.GetGameTime();
            this.br_next_shrink_time = this.br_game_start_time + this.br_shrink_delay;
            print("=== GAME STARTED ===");
            print(`Game start time: ${this.br_game_start_time}`);
            print(`Next shrink time: ${this.br_next_shrink_time}`);
            print(`Shrink delay: ${this.br_shrink_delay}`);
        }
    }

    private StartGame(): void {
        print("Game starting!");

        // Do some stuff here
    }

    // Called on script_reload
    public Reload() {
        print("Script reloaded!");

        // Do some stuff here
    }

    private OnNpcSpawned(event: NpcSpawnedEvent) {
        // After a hero unit spawns, apply modifier_panic for 8 seconds
        const unit = EntIndexToHScript(event.entindex) as CDOTA_BaseNPC; // Cast to npc since this is the 'npc_spawned' event
        // Give all real heroes (not illusions) the meepo_earthbind_ts_example spell
        if (unit.IsRealHero()) {
            if (!unit.HasAbility("meepo_earthbind_ts_example")) {
                // Add lua ability to the unit
                unit.AddAbility("meepo_earthbind_ts_example");
            }
        }
    }

    private InitializeBattleRoyaleZone(): void {
        print("=== InitializeBattleRoyaleZone called ===");

        // Find zone center entity
        this.br_zone_center = Entities.FindByName(undefined, "br_zone_center");

        if (!this.br_zone_center) {
            print("ERROR: br_zone_center not found!");
            return;
        }

        const center_pos = this.br_zone_center.GetAbsOrigin();
        print(`Battle Royale zone center at: ${center_pos}`);

        // Create zone visualization particle
        this.br_zone_particle = ParticleManager.CreateParticle(
            "particles/ui_mouseactions/range_display.vpcf",
            ParticleAttachment.WORLDORIGIN,
            undefined
        );
        print(`Created range_display particle: ${this.br_zone_particle}`);

        ParticleManager.SetParticleControl(this.br_zone_particle, 0, center_pos);
        ParticleManager.SetParticleControl(this.br_zone_particle, 1, Vector(this.br_current_radius, 0, 0));
        ParticleManager.SetParticleControl(this.br_zone_particle, 2, Vector(255, 0, 0)); // Bright red

        this.br_last_visual_radius = this.br_current_radius;

        print(`Zone initialized with radius: ${this.br_current_radius}`);
    }

    private UpdateBattleRoyaleZone(): void {
        if (!this.br_zone_center || !this.br_zone_particle) {
            return;
        }

        const current_time = GameRules.GetGameTime();

        // Zone shrinking logic
        if (current_time >= this.br_next_shrink_time && this.br_next_shrink_time > 0) {
            if (!this.br_is_shrinking) {
                // Start new shrink phase
                this.br_is_shrinking = true;
                const shrink_amount = this.br_current_radius * 0.4; // Shrink by 40%
                this.br_target_radius = Math.max(this.br_min_radius, this.br_current_radius - shrink_amount);
                print("=== ZONE SHRINKING START ===");
                print(`Current time: ${current_time}`);
                print(`Current radius: ${this.br_current_radius}`);
                print(`Target radius: ${this.br_target_radius}`);
            }
        }

        // Smooth shrinking
        if (this.br_is_shrinking) {
            if (this.br_current_radius > this.br_target_radius) {
                this.br_current_radius = this.br_current_radius - this.br_shrink_speed * 0.1;
                if (this.br_current_radius <= this.br_target_radius) {
                    this.br_current_radius = this.br_target_radius;
                    this.br_is_shrinking = false;
                    this.br_next_shrink_time = current_time + this.br_shrink_pause;
                    print("=== ZONE SHRINK COMPLETE ===");
                    print(`Final radius: ${this.br_current_radius}`);
                    print(`Next shrink at: ${this.br_next_shrink_time}`);
                }
            }
        }

        // Update visualization - recreate only on significant change
        const center_pos = this.br_zone_center.GetAbsOrigin();

        // Recreate on ANY change for smooth animation
        if (this.br_last_visual_radius && Math.abs(this.br_last_visual_radius - this.br_current_radius) > 0.1) {
            ParticleManager.DestroyParticle(this.br_zone_particle, false);
            ParticleManager.ReleaseParticleIndex(this.br_zone_particle);

            this.br_zone_particle = ParticleManager.CreateParticle(
                "particles/ui_mouseactions/range_display.vpcf",
                ParticleAttachment.WORLDORIGIN,
                undefined
            );
            ParticleManager.SetParticleControl(this.br_zone_particle, 0, center_pos);
            ParticleManager.SetParticleControl(this.br_zone_particle, 1, Vector(this.br_current_radius, 0, 0));
            ParticleManager.SetParticleControl(this.br_zone_particle, 2, Vector(255, 0, 0)); // Always bright red

            this.br_last_visual_radius = this.br_current_radius;
        }

        ParticleManager.SetParticleControl(this.br_zone_particle, 0, center_pos);
        ParticleManager.SetParticleControl(this.br_zone_particle, 1, Vector(this.br_current_radius, 0, 0));
        ParticleManager.SetParticleControl(this.br_zone_particle, 2, Vector(255, 0, 0)); // Always bright red

        // Check heroes and deal damage to those outside zone
        this.CheckHeroesOutsideZone();
    }

    private CheckHeroesOutsideZone(): void {
        if (!this.br_zone_center) return;

        const center_pos = this.br_zone_center.GetAbsOrigin();
        const heroes = HeroList.GetAllHeroes();

        for (const hero of heroes) {
            if (hero && hero.IsAlive()) {
                const hero_pos = hero.GetAbsOrigin();
                const distance = ((hero_pos - center_pos) as Vector).Length2D();

                // Get or create hero data
                const heroIndex = hero.GetEntityIndex();
                let heroData = this.hero_zone_data.get(heroIndex);
                if (!heroData) {
                    heroData = {};
                    this.hero_zone_data.set(heroIndex, heroData);
                }

                // Debug: show distance every 5 seconds
                if (!heroData.br_last_debug_time) heroData.br_last_debug_time = 0;
                if (GameRules.GetGameTime() - heroData.br_last_debug_time > 5) {
                    print(`Hero ${hero.GetUnitName()} distance: ${Math.floor(distance)} / ${Math.floor(this.br_current_radius)}`);
                    heroData.br_last_debug_time = GameRules.GetGameTime();
                }

                if (distance > this.br_current_radius) {
                    // Hero outside zone - deal damage
                    const damage = this.br_damage_per_second * 0.1; // Multiply by 0.1 since OnThink is called every 0.1 sec

                    ApplyDamage({
                        victim: hero,
                        attacker: hero,
                        damage: damage,
                        damage_type: DamageTypes.PURE,
                        damage_flags: DamageFlag.HPLOSS | DamageFlag.NO_SPELL_AMPLIFICATION,
                    });

                    // Visual effect - recreate every 0.5 seconds for pulsing
                    if (!heroData.br_damage_particle_time) {
                        heroData.br_damage_particle_time = 0;
                    }

                    const current_time = GameRules.GetGameTime();
                    if (current_time - heroData.br_damage_particle_time >= 0.5) {
                        // Destroy old effect
                        if (heroData.br_damage_particle) {
                            ParticleManager.DestroyParticle(heroData.br_damage_particle, false);
                            ParticleManager.ReleaseParticleIndex(heroData.br_damage_particle);
                        }

                        // Create new effect
                        heroData.br_damage_particle = ParticleManager.CreateParticle(
                            "particles/units/heroes/hero_leshrac/leshrac_pulse_nova.vpcf",
                            ParticleAttachment.ABSORIGIN_FOLLOW,
                            hero
                        );
                        heroData.br_damage_particle_time = current_time;
                        print(`Recreated damage particle for ${hero.GetUnitName()}`);
                    }
                } else {
                    // Hero inside zone - remove damage effect
                    if (heroData.br_damage_particle) {
                        ParticleManager.DestroyParticle(heroData.br_damage_particle, false);
                        ParticleManager.ReleaseParticleIndex(heroData.br_damage_particle);
                        heroData.br_damage_particle = undefined;
                        heroData.br_damage_particle_time = undefined;
                        print(`Removed damage particle from ${hero.GetUnitName()}`);
                    }
                }
            }
        }
    }

    private OnThink(): number | undefined {
        const state = GameRules.State_Get();

        if (state === GameState.GAME_IN_PROGRESS) {
            this.UpdateBattleRoyaleZone();
        } else if (state >= GameState.POST_GAME) {
            return undefined;
        }

        return 0.1; // Call every 0.1 seconds for smooth updates
    }
}
