import { BaseAbility, registerAbility, BaseModifier, registerModifier } from "../../../lib/dota_ts_adapter";

/**
 * Axe: Charge and Call
 * Dash to target point + Berserker's Call on arrival
 */
@registerAbility()
export class axe_charge_and_call extends BaseAbility {
    charge_direction?: Vector;
    charge_distance_remaining?: number;
    charge_destination?: Vector;
    charge_damage?: number;
    charge_hit_units: Record<number, boolean> = {};

    OnSpellStart(): void {
        const caster = this.GetCaster();
        const point = this.GetCursorPosition();
        const caster_pos = caster.GetAbsOrigin();

        // Ability parameters
        let charge_speed = this.GetSpecialValueFor("charge_speed");
        if (charge_speed === 0) charge_speed = 1200; // Fallback

        const charge_damage = this.GetSpecialValueFor("charge_damage");

        // Direction and distance
        let direction = (point - caster_pos) as Vector;
        direction = direction.Normalized();
        direction.z = 0;

        const distance = Math.min(
            ((point - caster_pos) as Vector).Length2D(),
            this.GetCastRange(caster_pos, caster)
        );
        const destination = (caster_pos + direction * distance) as Vector;

        // Turn hero towards movement direction
        caster.SetForwardVector(direction);

        // Skewer sound
        caster.EmitSound("Hero_Magnataur.Skewer.Cast");

        // Movement effect (Skewer trail)
        const particle = ParticleManager.CreateParticle(
            "particles/units/heroes/hero_magnataur/magnataur_skewer.vpcf",
            ParticleAttachment.ABSORIGIN_FOLLOW,
            caster
        );
        ParticleManager.SetParticleControl(particle, 0, caster_pos);
        ParticleManager.SetParticleControl(particle, 1, destination);

        // Movement duration
        const duration = distance / charge_speed;

        // Save data for modifier
        this.charge_direction = direction;
        this.charge_distance_remaining = distance;
        this.charge_destination = destination;
        this.charge_damage = charge_damage;
        this.charge_hit_units = {};

        // Start movement
        caster.AddNewModifier(caster, this, modifier_axe_charge_and_call_motion.name, {
            duration: duration,
            particle_index: particle,
        });
    }

    ApplyBerserkersCall(): void {
        const caster = this.GetCaster();
        const call_radius = this.GetSpecialValueFor("call_radius");
        const call_duration = this.GetSpecialValueFor("call_duration");

        // Berserker's Call sound and effect
        caster.EmitSound("Hero_Axe.Berserkers_Call");

        const particle = ParticleManager.CreateParticle(
            "particles/units/heroes/hero_axe/axe_beserkers_call_owner.vpcf",
            ParticleAttachment.ABSORIGIN_FOLLOW,
            caster
        );
        ParticleManager.SetParticleControl(particle, 1, Vector(call_radius, 0, 0));
        ParticleManager.ReleaseParticleIndex(particle);

        // Find enemies in radius
        const enemies = FindUnitsInRadius(
            caster.GetTeamNumber(),
            caster.GetAbsOrigin(),
            undefined,
            call_radius,
            UnitTargetTeam.ENEMY,
            UnitTargetType.HERO | UnitTargetType.BASIC,
            UnitTargetFlags.MAGIC_IMMUNE_ENEMIES,
            0,
            false
        );

        if (IsInToolsMode()) {
            print(`Berserker's Call: Found ${enemies.length} enemies in radius ${call_radius}`);
        }

        // Apply taunt modifier
        for (const enemy of enemies) {
            const modifier = enemy.AddNewModifier(caster, this, modifier_axe_berserkers_call_enemy.name, {
                duration: call_duration,
            });
            
            if (IsInToolsMode()) {
                print(`Applied taunt to ${enemy.GetUnitName()}, modifier: ${modifier !== undefined ? "success" : "failed"}`);
            }
        }

        // Armor bonus for Axe
        caster.AddNewModifier(caster, this, modifier_axe_berserkers_call_armor.name, {
            duration: call_duration,
        });
    }
}

/**
 * Motion modifier (dash)
 */
@registerModifier()
export class modifier_axe_charge_and_call_motion extends BaseModifier {
    particle_index?: ParticleID;

    IsHidden(): boolean {
        return true;
    }

    IsPurgable(): boolean {
        return false;
    }

    CheckState(): Partial<Record<ModifierState, boolean>> {
        return {
            [ModifierState.STUNNED]: true,
            [ModifierState.NO_UNIT_COLLISION]: true,
        };
    }

    GetOverrideAnimation(): GameActivity {
        return GameActivity.DOTA_OVERRIDE_ABILITY_4;
    }

    OnCreated(params: { particle_index?: ParticleID }): void {
        if (!IsServer()) return;

        // Save particle index
        if (params.particle_index) {
            this.particle_index = params.particle_index;
        }

        // Movement and damage every frame (0.03 seconds)
        this.StartIntervalThink(0.03);
    }

    OnIntervalThink(): void {
        if (!IsServer()) return;

        const ability = this.GetAbility() as axe_charge_and_call;
        const parent = this.GetParent();

        if (!ability || ability.IsNull()) {
            this.Destroy();
            return;
        }

        const pos = parent.GetAbsOrigin();
        const target_pos = ability.charge_destination!;
        const direction = ability.charge_direction!;
        let speed = ability.GetSpecialValueFor("charge_speed");

        // Fallback
        if (speed === 0) speed = 1200;

        // Calculate new position
        const distance_to_move = speed * 0.03;
        const new_pos = (pos + direction * distance_to_move) as Vector;

        // Check if we reached target
        const distance_to_target = ((target_pos - pos) as Vector).Length2D();

        if (distance_to_target <= distance_to_move) {
            parent.SetAbsOrigin(target_pos);
            FindClearSpaceForUnit(parent, target_pos, false);
            this.Destroy();
            return;
        } else {
            parent.SetAbsOrigin(new_pos);
            FindClearSpaceForUnit(parent, new_pos, false);
        }

        // Damage enemies in path
        const enemies = FindUnitsInRadius(
            parent.GetTeamNumber(),
            pos,
            undefined,
            150,
            UnitTargetTeam.ENEMY,
            UnitTargetType.HERO | UnitTargetType.BASIC,
            UnitTargetFlags.NONE,
            0,
            false
        );

        for (const enemy of enemies) {
            if (!ability.charge_hit_units[enemy.GetEntityIndex()]) {
                ability.charge_hit_units[enemy.GetEntityIndex()] = true;

                ApplyDamage({
                    victim: enemy,
                    attacker: parent,
                    damage: ability.charge_damage!,
                    damage_type: DamageTypes.MAGICAL,
                    ability: ability,
                });
            }
        }
    }

    OnDestroy(): void {
        if (!IsServer()) return;

        const parent = this.GetParent();
        const ability = this.GetAbility() as axe_charge_and_call;

        // Stop motion
        FindClearSpaceForUnit(parent, parent.GetAbsOrigin(), false);

        // Activate Berserker's Call
        if (ability && !ability.IsNull()) {
            ability.ApplyBerserkersCall();
        }

        // Destroy particle
        if (this.particle_index) {
            ParticleManager.DestroyParticle(this.particle_index, false);
            ParticleManager.ReleaseParticleIndex(this.particle_index);
        }
    }
}

/**
 * Taunt modifier (for enemies)
 */
@registerModifier()
export class modifier_axe_berserkers_call_enemy extends BaseModifier {
    OnCreated(): void {
        if (IsInToolsMode()) {
            print(`Taunt modifier created on ${this.GetParent().GetUnitName()}`);
        }
    }

    IsDebuff(): boolean {
        return true;
    }

    IsStunDebuff(): boolean {
        return false;
    }

    CheckState(): Partial<Record<ModifierState, boolean>> {
        return {
            [ModifierState.TAUNTED]: true,
            [ModifierState.COMMAND_RESTRICTED]: true,
        };
    }

    DeclareFunctions(): ModifierFunction[] {
        return [
            ModifierFunction.ON_ATTACK,
        ];
    }

    OnAttack(event: ModifierAttackEvent): void {
        if (!IsServer()) return;
        
        // Force enemy to attack Axe
        if (event.attacker === this.GetParent()) {
            const caster = this.GetCaster();
            if (caster && IsValidEntity(caster) && caster.IsAlive()) {
                event.attacker.MoveToTargetToAttack(caster);
            }
        }
    }

    GetEffectName(): string {
        return "particles/units/heroes/hero_axe/axe_beserkers_call.vpcf";
    }

    GetEffectAttachType(): ParticleAttachment {
        return ParticleAttachment.OVERHEAD_FOLLOW;
    }
}

/**
 * Armor modifier (for Axe)
 */
@registerModifier()
export class modifier_axe_berserkers_call_armor extends BaseModifier {
    IsHidden(): boolean {
        return false;
    }

    IsPurgable(): boolean {
        return false;
    }

    DeclareFunctions(): ModifierFunction[] {
        return [ModifierFunction.PHYSICAL_ARMOR_BONUS];
    }

    GetModifierPhysicalArmorBonus(): number {
        return this.GetAbility()!.GetSpecialValueFor("call_bonus_armor");
    }

    GetEffectName(): string {
        return "particles/units/heroes/hero_axe/axe_beserkers_call_owner.vpcf";
    }

    GetEffectAttachType(): ParticleAttachment {
        return ParticleAttachment.ABSORIGIN_FOLLOW;
    }
}
