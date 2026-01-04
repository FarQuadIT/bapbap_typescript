-- Generated from template

if CAddonTemplateGameMode == nil then
	CAddonTemplateGameMode = class({})
end

function Precache( context )
	PrecacheResource( "particle", "particles/ui_mouseactions/range_display.vpcf", context )
	PrecacheResource( "particle", "particles/units/heroes/hero_leshrac/leshrac_pulse_nova.vpcf", context )
	
	-- Частицы для Axe Charge and Call
	PrecacheResource( "particle", "particles/units/heroes/hero_magnataur/magnataur_skewer.vpcf", context )
	PrecacheResource( "particle", "particles/units/heroes/hero_axe/axe_beserkers_call.vpcf", context )
	PrecacheResource( "particle", "particles/units/heroes/hero_axe/axe_beserkers_call_owner.vpcf", context )
	
	-- Звуки
	PrecacheResource( "soundfile", "soundevents/game_sounds_heroes/game_sounds_axe.vsndevts", context )
	PrecacheResource( "soundfile", "soundevents/game_sounds_heroes/game_sounds_magnataur.vsndevts", context )
end

-- Create the game mode when we activate
function Activate()
	GameRules.AddonTemplate = CAddonTemplateGameMode()
	GameRules.AddonTemplate:InitGameMode()
end

function CAddonTemplateGameMode:InitGameMode()
	print( "Battle Royale mode is loaded." )
	
	-- Быстрый старт игры для тестирования
	GameRules:SetCustomGameSetupTimeout(3) -- минимальное время лобби
	GameRules:SetHeroSelectionTime(10) -- 10 сек на выбор героя
	GameRules:SetPreGameTime(3) -- 3 сек до старта игры
	GameRules:SetStrategyTime(0) -- без стратегии
	GameRules:SetShowcaseTime(0) -- без показа
	
	-- Battle Royale параметры
	self.br_zone_center = nil
	self.br_zone_particle = nil
	self.br_current_radius = 3000 -- начальный радиус зоны
	self.br_target_radius = 3000
	self.br_min_radius = 100 -- МЕНЬШИЙ минимальный радиус = дольше сужение
	self.br_shrink_speed = 30 -- МЕДЛЕННЕЕ скорость сужения (units/sec)
	self.br_damage_per_second = 10 -- урон в секунду вне зоны
	self.br_shrink_delay = 5 -- задержка перед началом сужения (секунды)
	self.br_shrink_pause = 15 -- пауза между сужениями
	self.br_next_shrink_time = 0
	self.br_is_shrinking = false
	self.br_game_start_time = 0
	self.br_last_visual_radius = nil
	
	GameRules:GetGameModeEntity():SetThink( "OnThink", self, "GlobalThink", 0.1 )
	
	ListenToGameEvent("game_rules_state_change", Dynamic_Wrap(CAddonTemplateGameMode, "OnGameRulesStateChange"), self)
end

function CAddonTemplateGameMode:OnGameRulesStateChange()
	local state = GameRules:State_Get()
	print("=== Game Rules State Change: " .. state .. " ===")
	
	if state == DOTA_GAMERULES_STATE_PRE_GAME then
		self:InitializeBattleRoyaleZone()
	elseif state == DOTA_GAMERULES_STATE_GAME_IN_PROGRESS then
		self.br_game_start_time = GameRules:GetGameTime()
		self.br_next_shrink_time = self.br_game_start_time + self.br_shrink_delay
		print("=== GAME STARTED ===")
		print("Game start time: " .. self.br_game_start_time)
		print("Next shrink time: " .. self.br_next_shrink_time)
		print("Shrink delay: " .. self.br_shrink_delay)
	end
end

function CAddonTemplateGameMode:InitializeBattleRoyaleZone()
	print("=== InitializeBattleRoyaleZone called ===")
	
	-- Найти центр зоны
	self.br_zone_center = Entities:FindByName(nil, "br_zone_center")
	
	if not self.br_zone_center then
		print("ERROR: br_zone_center not found!")
		return
	end
	
	local center_pos = self.br_zone_center:GetAbsOrigin()
	print("Battle Royale zone center at: " .. tostring(center_pos))
	
	-- Используем range_display - визуально работает, просто пересоздаем реже
	self.br_zone_particle = ParticleManager:CreateParticle(
		"particles/ui_mouseactions/range_display.vpcf",
		PATTACH_WORLDORIGIN,
		nil
	)
	print("Created range_display particle: " .. tostring(self.br_zone_particle))
	
	ParticleManager:SetParticleControl(self.br_zone_particle, 0, center_pos)
	ParticleManager:SetParticleControl(self.br_zone_particle, 1, Vector(self.br_current_radius, 0, 0))
	ParticleManager:SetParticleControl(self.br_zone_particle, 2, Vector(255, 0, 0)) -- ярко красный
	
	self.br_last_visual_radius = self.br_current_radius
	
	print("Zone initialized, radius: " .. self.br_current_radius)
	
	print("Zone initialized with DYNAMIC radius: " .. self.br_current_radius)
end

function CAddonTemplateGameMode:UpdateBattleRoyaleZone()
	if not self.br_zone_center or not self.br_zone_particle then
		return
	end
	
	local current_time = GameRules:GetGameTime()
	
	-- Логика сужения зоны
	if current_time >= self.br_next_shrink_time and self.br_next_shrink_time > 0 then
		if not self.br_is_shrinking then
			-- Начать новое сужение
			self.br_is_shrinking = true
			local shrink_amount = self.br_current_radius * 0.4 -- сужаем на 40%
			self.br_target_radius = math.max(self.br_min_radius, self.br_current_radius - shrink_amount)
			print("=== ZONE SHRINKING START ===")
			print("Current time: " .. current_time)
			print("Current radius: " .. self.br_current_radius)
			print("Target radius: " .. self.br_target_radius)
		end
	end
	
	-- Плавное сужение
	if self.br_is_shrinking then
		if self.br_current_radius > self.br_target_radius then
			self.br_current_radius = self.br_current_radius - self.br_shrink_speed * 0.1
			if self.br_current_radius <= self.br_target_radius then
				self.br_current_radius = self.br_target_radius
				self.br_is_shrinking = false
				self.br_next_shrink_time = current_time + self.br_shrink_pause
				print("=== ZONE SHRINK COMPLETE ===")
				print("Final radius: " .. self.br_current_radius)
				print("Next shrink at: " .. self.br_next_shrink_time)
			end
		end
	end
	
	-- Обновить визуализацию - пересоздаем ТОЛЬКО при значительном изменении
	local center_pos = self.br_zone_center:GetAbsOrigin()
	
	-- Пересоздаем при ЛЮБОМ изменении (абсолютная плавность!)
	if self.br_last_visual_radius and math.abs(self.br_last_visual_radius - self.br_current_radius) > 0.1 then
		ParticleManager:DestroyParticle(self.br_zone_particle, false)
		ParticleManager:ReleaseParticleIndex(self.br_zone_particle)
		
		self.br_zone_particle = ParticleManager:CreateParticle(
			"particles/ui_mouseactions/range_display.vpcf",
			PATTACH_WORLDORIGIN,
			nil
		)
		ParticleManager:SetParticleControl(self.br_zone_particle, 0, center_pos)
		ParticleManager:SetParticleControl(self.br_zone_particle, 1, Vector(self.br_current_radius, 0, 0))
		ParticleManager:SetParticleControl(self.br_zone_particle, 2, Vector(255, 0, 0)) -- всегда ярко красный
		
		self.br_last_visual_radius = self.br_current_radius
	end
	
	ParticleManager:SetParticleControl(self.br_zone_particle, 0, center_pos)
	ParticleManager:SetParticleControl(self.br_zone_particle, 1, Vector(self.br_current_radius, 0, 0))
	
	-- Всегда ярко красный цвет
	ParticleManager:SetParticleControl(self.br_zone_particle, 2, Vector(255, 0, 0))
	
	-- Проверить всех героев и нанести урон тем, кто вне зоны
	self:CheckHeroesOutsideZone()
end

function CAddonTemplateGameMode:CheckHeroesOutsideZone()
	if not self.br_zone_center then return end
	
	local center_pos = self.br_zone_center:GetAbsOrigin()
	local heroes = HeroList:GetAllHeroes()
	
	for _, hero in pairs(heroes) do
		if hero and hero:IsAlive() then
			local hero_pos = hero:GetAbsOrigin()
			local distance = (hero_pos - center_pos):Length2D()
			
			-- Отладка: показываем расстояние каждые 5 секунд
			if not hero.br_last_debug_time then hero.br_last_debug_time = 0 end
			if GameRules:GetGameTime() - hero.br_last_debug_time > 5 then
				print("Hero " .. hero:GetUnitName() .. " distance: " .. math.floor(distance) .. " / " .. math.floor(self.br_current_radius))
				hero.br_last_debug_time = GameRules:GetGameTime()
			end
			
			if distance > self.br_current_radius then
				-- Герой вне зоны - наносим урон
				local damage = self.br_damage_per_second * 0.1 -- умножаем на 0.1 т.к. OnThink вызывается каждые 0.1 сек
				
				ApplyDamage({
					victim = hero,
					attacker = hero,
					damage = damage,
					damage_type = DAMAGE_TYPE_PURE,
					damage_flags = DOTA_DAMAGE_FLAG_NO_SPELL_AMPLIFICATION + DOTA_DAMAGE_FLAG_HPLOSS,
				})
				
				-- Визуальный эффект - пересоздаем каждые 1.5 секунды для пульсации
				if not hero.br_damage_particle_time then
					hero.br_damage_particle_time = 0
				end
				
				local current_time = GameRules:GetGameTime()
				if current_time - hero.br_damage_particle_time >= 0.5 then
					-- Уничтожить старый эффект
					if hero.br_damage_particle then
						ParticleManager:DestroyParticle(hero.br_damage_particle, false)
						ParticleManager:ReleaseParticleIndex(hero.br_damage_particle)
					end
					
					-- Создать новый эффект
					hero.br_damage_particle = ParticleManager:CreateParticle("particles/units/heroes/hero_leshrac/leshrac_pulse_nova.vpcf", PATTACH_ABSORIGIN_FOLLOW, hero)
					hero.br_damage_particle_time = current_time
					print("Recreated damage particle for " .. hero:GetUnitName())
				end
			else
				-- Герой в зоне - убрать эффект урона
				if hero.br_damage_particle then
					ParticleManager:DestroyParticle(hero.br_damage_particle, false)
					ParticleManager:ReleaseParticleIndex(hero.br_damage_particle)
					hero.br_damage_particle = nil
					hero.br_damage_particle_time = nil
					print("Removed damage particle from " .. hero:GetUnitName())
				end
			end
		end
	end
end

-- Evaluate the state of the game
function CAddonTemplateGameMode:OnThink()
	if GameRules:State_Get() == DOTA_GAMERULES_STATE_GAME_IN_PROGRESS then
		self:UpdateBattleRoyaleZone()
	elseif GameRules:State_Get() >= DOTA_GAMERULES_STATE_POST_GAME then
		return nil
	end
	return 0.1 -- вызывать каждые 0.1 секунды для плавного обновления
end