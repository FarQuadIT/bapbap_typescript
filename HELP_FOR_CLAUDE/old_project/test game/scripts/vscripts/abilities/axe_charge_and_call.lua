-- Axe: Charge and Call
-- Дэш в точку + Berserker's Call по прибытии

-- Регистрируем модификаторы
LinkLuaModifier("modifier_axe_charge_and_call_motion", "abilities/axe_charge_and_call", LUA_MODIFIER_MOTION_NONE)
LinkLuaModifier("modifier_axe_berserkers_call_enemy", "abilities/axe_charge_and_call", LUA_MODIFIER_MOTION_NONE)
LinkLuaModifier("modifier_axe_berserkers_call_armor", "abilities/axe_charge_and_call", LUA_MODIFIER_MOTION_NONE)

axe_charge_and_call = class({})

function axe_charge_and_call:OnSpellStart()
	local caster = self:GetCaster()
	local point = self:GetCursorPosition()
	local caster_pos = caster:GetAbsOrigin()
	
	-- Параметры способности
	local charge_speed = self:GetSpecialValueFor("charge_speed")
	if charge_speed == 0 then charge_speed = 1200 end -- Fallback if value not loaded
	
	local charge_damage = self:GetSpecialValueFor("charge_damage")
	local call_radius = self:GetSpecialValueFor("call_radius")
	local call_bonus_armor = self:GetSpecialValueFor("call_bonus_armor")
	local call_duration = self:GetSpecialValueFor("call_duration")
	
	-- Направление и дистанция
	local direction = (point - caster_pos):Normalized()
	direction.z = 0
	local distance = math.min((point - caster_pos):Length2D(), self:GetCastRange(caster_pos, caster))
	local destination = caster_pos + direction * distance
	
	-- Разворачиваем героя в сторону движения
	caster:SetForwardVector(direction)
	
	-- Звук Skewer
	caster:EmitSound("Hero_Magnataur.Skewer.Cast")
	
	-- Эффект движения (Skewer trail)
	local particle = ParticleManager:CreateParticle("particles/units/heroes/hero_magnataur/magnataur_skewer.vpcf", PATTACH_ABSORIGIN_FOLLOW, caster)
	ParticleManager:SetParticleControl(particle, 0, caster_pos)
	ParticleManager:SetParticleControl(particle, 1, destination)
	
	-- Время движения
	local duration = distance / charge_speed
	
	-- Сохраняем начальные данные для модификатора
	self.charge_direction = direction
	self.charge_distance_remaining = distance
	self.charge_destination = destination
	self.charge_damage = charge_damage
	self.charge_hit_units = {}
	
	-- Запускаем движение
	caster:AddNewModifier(caster, self, "modifier_axe_charge_and_call_motion", {
		duration = duration,
		particle_index = particle
	})
end

function axe_charge_and_call:ApplyBerserkersCall()
	local caster = self:GetCaster()
	local call_radius = self:GetSpecialValueFor("call_radius")
	local call_bonus_armor = self:GetSpecialValueFor("call_bonus_armor")
	local call_duration = self:GetSpecialValueFor("call_duration")
	
	-- Звук и эффект Berserker's Call
	caster:EmitSound("Hero_Axe.Berserkers_Call")
	
	local particle = ParticleManager:CreateParticle("particles/units/heroes/hero_axe/axe_beserkers_call_owner.vpcf", PATTACH_ABSORIGIN_FOLLOW, caster)
	ParticleManager:SetParticleControl(particle, 1, Vector(call_radius, 0, 0))
	ParticleManager:ReleaseParticleIndex(particle)
	
	-- Находим врагов в радиусе
	local enemies = FindUnitsInRadius(
		caster:GetTeamNumber(),
		caster:GetAbsOrigin(),
		nil,
		call_radius,
		DOTA_UNIT_TARGET_TEAM_ENEMY,
		DOTA_UNIT_TARGET_HERO + DOTA_UNIT_TARGET_BASIC,
		DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES,
		FIND_ANY_ORDER,
		false
	)
	
	-- Применяем модификатор тонта
	for _, enemy in pairs(enemies) do
		enemy:AddNewModifier(caster, self, "modifier_axe_berserkers_call_enemy", {duration = call_duration})
	end
	
	-- Бонус брони для Axe
	caster:AddNewModifier(caster, self, "modifier_axe_berserkers_call_armor", {duration = call_duration})
end

--------------------------------------------------------------------------------
-- Модификатор движения (dash)
--------------------------------------------------------------------------------
modifier_axe_charge_and_call_motion = class({})

function modifier_axe_charge_and_call_motion:IsHidden() return true end
function modifier_axe_charge_and_call_motion:IsPurgable() return false end

function modifier_axe_charge_and_call_motion:CheckState()
	return {
		[MODIFIER_STATE_STUNNED] = true,
		[MODIFIER_STATE_NO_UNIT_COLLISION] = true,
	}
end

function modifier_axe_charge_and_call_motion:GetOverrideAnimation()
	return ACT_DOTA_OVERRIDE_ABILITY_4
end

function modifier_axe_charge_and_call_motion:OnCreated(params)
	if not IsServer() then return end
	
	-- Сохраняем индекс партикла
	if params.particle_index then
		self:SetStackCount(params.particle_index)
	end
	
	-- Движение и урон каждый фрейм (0.03 секунды)
	self:StartIntervalThink(0.03)
end

function modifier_axe_charge_and_call_motion:OnIntervalThink()
	if not IsServer() then return end
	
	local ability = self:GetAbility()
	local parent = self:GetParent()
	
	if not ability or ability:IsNull() then
		self:Destroy()
		return
	end
	
	local pos = parent:GetAbsOrigin()
	local target_pos = ability.charge_destination
	local direction = ability.charge_direction
	local speed = ability:GetSpecialValueFor("charge_speed")
	
	-- Fallback if GetSpecialValueFor returns 0
	if speed == 0 then speed = 1200 end
	
	-- Вычисляем новую позицию
	local distance_to_move = speed * 0.03
	local new_pos = pos + direction * distance_to_move
	
	-- Проверяем, не прошли ли мы цель
	local distance_to_target = (target_pos - pos):Length2D()
	
	if distance_to_target <= distance_to_move then
		parent:SetAbsOrigin(target_pos)
		FindClearSpaceForUnit(parent, target_pos, false)
		self:Destroy()
		return
	else
		parent:SetAbsOrigin(new_pos)
		FindClearSpaceForUnit(parent, new_pos, false)
	end
	
	-- Урон врагам на пути
	local enemies = FindUnitsInRadius(
		parent:GetTeamNumber(),
		pos,
		nil,
		150,
		DOTA_UNIT_TARGET_TEAM_ENEMY,
		DOTA_UNIT_TARGET_HERO + DOTA_UNIT_TARGET_BASIC,
		DOTA_UNIT_TARGET_FLAG_NONE,
		FIND_ANY_ORDER,
		false
	)
	
	for _, enemy in pairs(enemies) do
		if not ability.charge_hit_units[enemy:GetEntityIndex()] then
			ability.charge_hit_units[enemy:GetEntityIndex()] = true
			
			ApplyDamage({
				victim = enemy,
				attacker = parent,
				damage = ability.charge_damage,
				damage_type = DAMAGE_TYPE_MAGICAL,
				ability = ability
			})
		end
	end
end

function modifier_axe_charge_and_call_motion:OnDestroy()
	if not IsServer() then return end
	local parent = self:GetParent()
	local ability = self:GetAbility()
	
	-- Motion Controller автоматически останавливается при удалении модификатора
	FindClearSpaceForUnit(parent, parent:GetAbsOrigin(), false)
	
	-- Активируем Berserker's Call
	if ability and not ability:IsNull() then
		ability:ApplyBerserkersCall()
	end
	
	-- Уничтожаем партикл
	local particle_index = self:GetStackCount()
	if particle_index and particle_index > 0 then
		ParticleManager:DestroyParticle(particle_index, false)
		ParticleManager:ReleaseParticleIndex(particle_index)
	end
end

--------------------------------------------------------------------------------
-- Модификатор тонта (для врагов)
--------------------------------------------------------------------------------
modifier_axe_berserkers_call_enemy = class({})

function modifier_axe_berserkers_call_enemy:IsDebuff() return true end
function modifier_axe_berserkers_call_enemy:IsStunDebuff() return false end

function modifier_axe_berserkers_call_enemy:CheckState()
	return {
		[MODIFIER_STATE_TAUNTED] = true,
	}
end

function modifier_axe_berserkers_call_enemy:GetEffectName()
	return "particles/units/heroes/hero_axe/axe_beserkers_call.vpcf"
end

function modifier_axe_berserkers_call_enemy:GetEffectAttachType()
	return PATTACH_OVERHEAD_FOLLOW
end

--------------------------------------------------------------------------------
-- Модификатор брони (для Axe)
--------------------------------------------------------------------------------
modifier_axe_berserkers_call_armor = class({})

function modifier_axe_berserkers_call_armor:IsHidden() return false end
function modifier_axe_berserkers_call_armor:IsPurgable() return false end

function modifier_axe_berserkers_call_armor:DeclareFunctions()
	return {
		MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS,
	}
end

function modifier_axe_berserkers_call_armor:GetModifierPhysicalArmorBonus()
	return self:GetAbility():GetSpecialValueFor("call_bonus_armor")
end

function modifier_axe_berserkers_call_armor:GetEffectName()
	return "particles/units/heroes/hero_axe/axe_beserkers_call_owner.vpcf"
end

function modifier_axe_berserkers_call_armor:GetEffectAttachType()
	return PATTACH_ABSORIGIN_FOLLOW
end
