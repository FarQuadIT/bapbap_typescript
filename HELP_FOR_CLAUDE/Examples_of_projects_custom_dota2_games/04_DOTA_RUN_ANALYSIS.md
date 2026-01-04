# Анализ кастомки: Dota Run

## 1. Описание кастомки

**Dota Run** - динамичная runner-игра в стиле Temple Run, где до 10 игроков одновременно бегут по трассе с препятствиями, соревнуясь за первое место. Это FFA (free-for-all) гонка с системой очков.

### Основные характеристики:
- **Жанр**: Runner / Racing / Arcade
- **Игроки**: До 10 (FFA)
- **Режим**: TeamCount = 10 (каждый игрок - отдельная команда)
- **Цель**: Первым набрать 30 очков
- **Особенности**: Динамические препятствия, случайные предметы/способности, system очков за места

### Система очков:
- 1 место: 10 очков
- 2 место: 7 очков
- 3 место: 5 очков
- 4 место: 4 очка
- 5 место: 3 очка
- 6 место: 2 очка
- Остальные: 1 очко

## 2. Архитектура проекта

### 2.1 Структура файлов

```
dotarun/
├── game/dota_addons/dotarun/
│   ├── addoninfo.txt
│   ├── scripts/vscripts/          # 25 Lua файлов
│   │   ├── addon_game_mode.lua
│   │   ├── dotarun.lua            # Главный файл
│   │   ├── waypoint.lua           # Система чекпоинтов
│   │   ├── voting.lua             # Голосование
│   │   ├── gamesettings.lua       # Настройки
│   │   ├── Препятствия:
│   │   │   ├── arrow_trap.lua     # Mirana стрелы
│   │   │   ├── pudge.lua          # Pudge хуки
│   │   │   ├── shakers.lua        # Earthshaker fissures
│   │   │   ├── magnus.lua         # Magnus skewer
│   │   │   ├── earth_spirit.lua   # Earth Spirit kicks
│   │   │   ├── centaurs.lua       # Centaur stampede
│   │   │   └── techies.lua        # Techies mines
│   │   ├── heroes/
│   │   │   ├── hero_wisp/tether.lua
│   │   │   ├── hero_spirit_breaker/charge.lua
│   │   │   └── hero_techies/stasis_trap.lua
│   │   ├── lua_abilities/
│   │   │   └── magnus_skewer_lua/  # Кастомный Magnus skewer
│   │   ├── lib/
│   │   │   ├── notifications.lua
│   │   │   ├── json.lua
│   │   │   └── md5.lua
│   │   └── timers.lua
│   ├── panorama/                   # UI
│   │   ├── layout/                 # 30 XML файлов
│   │   ├── scripts/                # 14 JS файлов
│   │   └── styles/                 # 14 CSS файлов
│   └── maps/
│       └── dotarun.vpk
└── content/dota_addons/dotarun/
    ├── maps/
    │   ├── dotarun.vmap            # Основная карта
    │   ├── dotarunheroclip.vmap    # Вариант с клипом
    │   └── dotarunpit.vmap         # Вариант с ямой
    └── panorama/                   # Исходники UI
```

### 2.2 Статистика

- **Lua файлов**: 25
- **UI файлов**: 30 XML + 14 JS + 14 CSS
- **Препятствий**: 7 типов
- **Карт**: 3 варианта
- **Библиотек**: 4 (timers, notifications, json, md5)

## 3. Ключевые системы

### 3.1 Система чекпоинтов (Waypoints)

**Файл**: `waypoint.lua`

Это **основа геймплея** - игроки должны пройти все 6 чекпоинтов по порядку, чтобы финишировать.

```lua
-- Глобальное хранилище прогресса каждого игрока
GameRules.dotaRun.waypoints = {}  -- [playerID][waypointNumber] = true/false
GameRules.dotaRun.waypointleader = {}  -- [waypointNumber] = true (first player)

-- Чекпоинт 1
function WaypointOneTouch(trigger)
    if not isHero(trigger) then
        return
    end
    
    local playerID = trigger.activator:GetPlayerID()
    
    -- Отмечаем лидера (первого кто достиг)
    if not GameRules.dotaRun.waypointleader[1] then
        GameRules.dotaRun.lead = playerID
        GameRules.dotaRun.waypointleader[1] = true
    end
    
    -- Отмечаем прохождение
    GameRules.dotaRun.waypoints[playerID][1] = true
    
    -- Проверяем - последний ли игрок?
    lastMan(1, trigger.activator)
end

-- Чекпоинт 2 - требует прохождение 1-го
function WaypointTwoTouch(trigger)
    if not isHero(trigger) then
        return
    end
    
    local playerID = trigger.activator:GetPlayerID()
    
    if not GameRules.dotaRun.waypointleader[2] then
        GameRules.dotaRun.lead = playerID
        GameRules.dotaRun.waypointleader[2] = true
    end
    
    -- Засчитывается только если прошел предыдущий!
    if GameRules.dotaRun.waypoints[playerID][1] then
        GameRules.dotaRun.waypoints[playerID][2] = true
    end
    
    lastMan(2, trigger.activator)
end

-- Чекпоинт 3 - требует 1 и 2
function WaypointThreeTouch(trigger)
    if not isHero(trigger) then
        return
    end
    
    local playerID = trigger.activator:GetPlayerID()
    
    if not GameRules.dotaRun.waypointleader[3] then
        GameRules.dotaRun.lead = playerID
        GameRules.dotaRun.waypointleader[3] = true
    end
    
    -- Требует ВСЕ предыдущие
    if GameRules.dotaRun.waypoints[playerID][1] and 
       GameRules.dotaRun.waypoints[playerID][2] then
        GameRules.dotaRun.waypoints[playerID][3] = true
    end
    
    lastMan(3, trigger.activator)
end

-- ... аналогично для waypoints 4, 5, 6
```

**Лайфхак #1**: Валидация порядка через проверку `if waypoint[1] and waypoint[2] then` предотвращает читы.

#### 3.1.1 Last Man Standing система

```lua
-- Бонус последнему игроку на чекпоинте
function lastMan(waypointID, hero)
    local throughCount = 0
    local playerID = hero:GetPlayerID()
    
    -- Считаем сколько прошло этот чекпоинт
    for i = 0, 9 do
        if GameRules.dotaRun.waypoints[i][waypointID] then
            throughCount = throughCount + 1
        end
    end
    
    -- Если это последний игрок
    if throughCount >= GameRules.dotaRun.playerCount then
        print("last man!")
        
        -- Ищем пустой слот для способности
        local hasMaxAbilities = true
        local removeAbil = 0
        
        for i = 0, 6 do
            if hero:GetAbilityByIndex(i) ~= nil then
                for j = 1, 6 do
                    local emptyAbil = "empty_ability" .. j
                    if hero:GetAbilityByIndex(i):GetAbilityName() == emptyAbil then
                        removeAbil = emptyAbil
                        hasMaxAbilities = false
                        break
                    end
                end
            end
        end
        
        -- Даем Spirit Breaker Charge
        if not hasMaxAbilities then
            local abilityName = "charge_player"
            if hero:FindAbilityByName(abilityName) == nil then
                hero:RemoveAbility(removeAbil)
                hero:AddAbility(abilityName)
                hero:SetAbilityPoints(1)
                
                local ability = hero:FindAbilityByName(abilityName)
                ability:UpgradeAbility(true)
            end
        end
    end
end
```

**Лайфхак #2**: Последний игрок на чекпоинте получает Charge для догона - это создает драматизм!

### 3.2 Финишная зона

**Файл**: `waypoint.lua`

```lua
function WinHere(trigger)
    if not isHero(trigger) then
        return
    end
    
    local playerID = trigger.activator:GetPlayerID()
    local player = PlayerResource:GetPlayer(playerID)
    local hero = player:GetAssignedHero()
    local teamNumber = PlayerResource:GetTeam(playerID)
    
    -- Проверка прохождения ВСЕХ чекпоинтов
    if GameRules.dotaRun.waypoints[playerID][1] and 
       GameRules.dotaRun.waypoints[playerID][2] and 
       GameRules.dotaRun.waypoints[playerID][3] and 
       GameRules.dotaRun.waypoints[playerID][4] and 
       GameRules.dotaRun.waypoints[playerID][5] and 
       GameRules.dotaRun.waypoints[playerID][6] then
        
        -- Защита от двойного засчитывания
        if GameRules.dotaRun.alreadyScored[playerID] then
            teleportHero(hero, GameRules.dotaRun.waypointHomeTeleport, playerID)
            hero:AddNewModifier(caster, ability, "modifier_stunned", modifier_table)
            return
        end
        GameRules.dotaRun.alreadyScored[playerID] = true
        
        -- Начисление очков
        DistributePoints(teamNumber, hero, playerID)
        
        -- Проверка победы
        if GameRules.dotaRun.points[teamNumber] >= GameRules.dotaRun.pointsToWin then
            GameRules:SetSafeToLeave(true)
            GameRules:SetGameWinner(teamNumber)
            GameRules:SetCustomVictoryMessage(GameRules.dotaRun.m_VictoryMessages[teamNumber])
        end
        
        -- Увеличиваем счетчик финишировавших
        GameRules.dotaRun.numFinished = GameRules.dotaRun.numFinished + 1
        
        -- Все финишировали?
        if GameRules.dotaRun.numFinished == GameRules.dotaRun.playerCount then
            StartReset()
            GameRules.dotaRun.hasAlreadyReset = true
        else
            -- Телепорт на спавн
            Timers:CreateTimer(0.06, function()
                teleportHero(hero, GameRules.dotaRun.waypointHomeTeleport, playerID)
                hero:AddNewModifier(caster, ability, "modifier_stunned", modifier_table)
            end)
        end
        
        -- Первый финишировавший запускает таймер
        if GameRules.dotaRun.numFinished == 1 then
            GameRules.dotaRun:ShowCenterMessage("30 seconds left!", 5)
            
            -- Предупреждения
            Timers:CreateTimer(15, function()
                if not GameRules.dotaRun.hasAlreadyReset then
                    GameRules.dotaRun:ShowCenterMessage("15", 1)
                end
            end)
            
            Timers:CreateTimer(27, function()
                if not GameRules.dotaRun.hasAlreadyReset then
                    GameRules.dotaRun:ShowCenterMessage("3", 1)
                end
            end)
            
            Timers:CreateTimer(28, function()
                if not GameRules.dotaRun.hasAlreadyReset then
                    GameRules.dotaRun:ShowCenterMessage("2", 1)
                end
            end)
            
            Timers:CreateTimer(29, function()
                if not GameRules.dotaRun.hasAlreadyReset then
                    GameRules.dotaRun:ShowCenterMessage("1", 1)
                end
            end)
            
            -- Таймаут - автоматический reset через 30 секунд
            Timers:CreateTimer(30, function()
                if not GameRules.dotaRun.hasAlreadyReset then
                    StartReset()
                end
            end)
        end
    end
end
```

**Лайфхак #3**: Первый финишировавший запускает 30-секундный таймер - это создает pressure на отстающих!

#### 3.2.1 Распределение очков

```lua
function DistributePoints(teamID, hero, playerID)
    local points = 0
    
    -- Система мест
    if GameRules.dotaRun.numFinished == 0 then
        points = 10  -- 1 место
    elseif GameRules.dotaRun.numFinished == 1 then
        points = 7   -- 2 место
    elseif GameRules.dotaRun.numFinished == 2 then
        points = 5   -- 3 место
    elseif GameRules.dotaRun.numFinished == 3 then
        points = 4   -- 4 место
    elseif GameRules.dotaRun.numFinished == 4 then
        points = 3   -- 5 место
    elseif GameRules.dotaRun.numFinished == 5 then
        points = 2   -- 6 место
    else
        points = 1   -- Остальные
    end
    
    GameRules.dotaRun.points[teamID] = GameRules.dotaRun.points[teamID] + points
    
    -- Визуализация через kills
    for i = 1, points do
        hero:IncrementKills(playerID)
    end
end
```

**Лайфхак #4**: Очки визуализируются через kills в табло - красиво и понятно!

### 3.3 Система раундов

```lua
function NewLap()
    -- Сброс состояния
    GameRules.dotaRun:ResetRound()
    
    -- Респавн всех игроков
    for i = 0, 9 do
        local player = PlayerResource:GetPlayer(i)
        if player ~= nil then
            -- Замена героя (полный респавн)
            PlayerResource:ReplaceHeroWith(i, 
                                          player:GetAssignedHero():GetUnitName(), 
                                          0, 0)
            local hero = player:GetAssignedHero()
            local point = GameRules.dotaRun.waypointHomeTeleport
            
            -- Телепорт на спавн
            teleportHero(hero, point, i)
            
            -- Стан на время отсчета
            hero:AddNewModifier(caster, ability, "modifier_stunned", modifier_table)
            
            -- Удаление предметов (кроме Force Staff)
            for slot = 0, 5 do
                local item = hero:GetItemInSlot(slot)
                if item ~= nil and item:GetClassname() ~= "item_force_staff" then
                    hero:RemoveItem(item)
                end
            end
        end
    end
    
    -- Отсчет
    Timers:CreateTimer(1, function()
        CustomGameEventManager:Send_ServerToAllClients("start_countdown", nil)
    end)
    
    -- Снятие стана через 5 секунд
    Timers:CreateTimer(5, function()
        for i = 0, 9 do
            local player = PlayerResource:GetPlayer(i)
            if player ~= nil then
                local hero = player:GetAssignedHero()
                if hero ~= nil then
                    hero:RemoveModifierByName("modifier_stunned")
                end
            end
        end
    end)
end
```

**Лайфхак #5**: `ReplaceHeroWith` полностью сбрасывает состояние героя (HP, mana, cooldowns).

### 3.4 Система случайных наград

**Файл**: `dotarun.lua`

#### 3.4.1 Item Zones

```lua
-- Список доступных предметов
GameRules.dotaRun.itemList = {
    "item_force_staff",
    "item_blink",
    "item_phase_boots",
    "item_black_king_bar",
    "item_manta",
    "item_ethereal_blade",
    "item_cyclone",
    "item_banana"  -- Уникальный предмет
}

function ItemZoneOne(trigger)
    local hero = trigger.activator
    
    if not isHero(trigger) then
        return
    end
    
    local playerID = trigger.activator:GetPlayerID()
    
    -- Проверка - зона открыта?
    if GameRules.dotaRun.zoneOpen[playerID] == true then
        -- Даем случайную способность и предмет
        GiveRandomAbility(hero)
        GiveRandomItem(hero)
        
        -- Закрываем зону
        GameRules.dotaRun.zoneOpen[playerID] = false
        
        -- Запускаем таймер открытия
        GameRules.dotaRun:StartZoneTimer(hero)
        
        -- Визуальный эффект
        local particle = ParticleManager:CreateParticleForPlayer(
            "particles/econ/items/lanaya/lanaya_epit_trap/templar_assassin_epit_trap_ring_inner_start.vpcf",
            PATTACH_ABSORIGIN_FOLLOW, hero, PlayerResource:GetPlayer(playerID))
        ParticleManager:SetParticleControl(particle, 0, hero:GetAbsOrigin())
    end
end
```

#### 3.4.2 Выдача предмета

```lua
function GiveRandomItem(hero)
    -- Проверка свободных слотов
    local itemSlotsFull = GameRules.dotaRun:DoesHeroHaveMaxItems(hero)
    if itemSlotsFull then
        print("No item slots!")
        return
    end
    
    -- Выбираем случайный предмет
    local itemNew = CreateItem(
        GameRules.dotaRun.itemList[RandomInt(1, #GameRules.dotaRun.itemList)], 
        hero, hero)
    
    -- Проверка дубликатов
    local alreadyHas = false
    for i = 0, 5 do
        local itemOld = hero:GetItemInSlot(i)
        if itemOld ~= nil and itemOld:GetClassname() == itemNew:GetClassname() then
            -- Banana можно стакать
            if itemOld:GetClassname() == "item_banana" then
                break
            end
            print("Hero already has: " .. itemNew:GetClassname())
            alreadyHas = true
            break
        end
    end
    
    -- Рекурсия если дубликат
    if alreadyHas then
        GiveRandomItem(hero)
    else
        print("Adding item: " .. itemNew:GetClassname())
        hero:AddItem(itemNew)
    end
end
```

**Лайфхак #6**: Рекурсивный вызов `GiveRandomItem()` гарантирует уникальность (кроме banana).

#### 3.4.3 Выдача способности

```lua
-- Список способностей
GameRules.dotaRun.spellList = {
    "obsidian_destroyer_astral_imprisonment_custom",
    "vengefulspirit_nether_swap_custom",
    "mirana_arrow_custom",
    "gyrocopter_homing_missile_custom",
    -- ... и другие
}

-- Способности с зарядами
local chargeBasedSpells = {
    "obsidian_destroyer_astral_imprisonment_custom",
    "vengefulspirit_nether_swap_custom"
}

function GiveRandomAbility(hero)
    -- Ищем пустой слот (empty_ability1-6)
    local removeAbil = 0
    local hasMaxAbilities = true
    
    for i = 0, 6 do
        if hero:GetAbilityByIndex(i) ~= nil then
            for j = 1, 6 do
                local ability = "empty_ability" .. j
                if hero:GetAbilityByIndex(i):GetAbilityName() == ability then
                    removeAbil = ability
                    hasMaxAbilities = false
                    break
                end
            end
        end
    end
    
    if not hasMaxAbilities then
        -- Выбираем случайную способность
        local abilityName = GameRules.dotaRun.spellList[RandomInt(1, #GameRules.dotaRun.spellList)]
        
        -- Проверка дубликата
        if hero:FindAbilityByName(abilityName) == nil then
            print("Adding ability: " .. abilityName)
            
            -- Удаляем пустую способность
            hero:RemoveAbility(removeAbil)
            
            -- Добавляем новую
            hero:AddAbility(abilityName)
            hero:SetAbilityPoints(1)
            
            local ability = hero:FindAbilityByName(abilityName)
            ability:UpgradeAbility(true)
            
            -- Заряды для некоторых способностей
            if chargeBasedSpells[abilityName] then
                print("Giving charge")
                local modifier = ability:GetIntrinsicModifierName()
                hero:FindModifierByName(modifier):IncrementStackCount()
            end
        else
            print("Hero already had ability: " .. abilityName)
            GiveRandomAbility(hero)  -- Рекурсия
        end
    else
        print("Hero already has six abilities")
    end
end
```

**Лайфхак #7**: Герои начинают с `empty_ability1-6` в слотах, которые заменяются на реальные способности.

### 3.5 Динамические препятствия

#### 3.5.1 Pudge Hooker

**Файл**: `pudge.lua`

```lua
local pudges = {}
local hookAbilities = {}
local positions = {Vector(-5234,-5396,20), Vector(4161,-7033,20)}
local hookPositions = {Vector(-5271,-6243,20), Vector(4144,-6220,20)}
local numPudges = 2

-- Инициализация Pudge
function initPudges()
    for i = 1, numPudges do
        -- Создаем Pudge
        pudges[i] = CreateUnitByName("pudge_hooker", positions[i], 
                                     true, nil, nil, 1)
        
        -- Настраиваем хук
        hookAbilities[i] = pudges[i]:FindAbilityByName("pudge_meat_hook_ai")
        hookAbilities[i]:SetLevel(1)
        
        print("pudge " .. i .. " created")
        
        -- Делаем неуязвимым
        local ability = pudges[i]:FindAbilityByName("Invulnerable")
        ability:SetLevel(1)
    end
    
    startHooks()
end

-- Логика хуков
function hook()
    for i = 1, numPudges do
        -- Проверяем позицию (телепорт если сдвинулся)
        if pudges[i]:GetAbsOrigin() ~= positions[i] then
            FindClearSpaceForUnit(pudges[i], positions[i], false)
        end
        
        -- Хук в случайную точку
        local randomOffset = Vector(RandomInt(0, 500), RandomInt(0, 500), 20)
        pudges[i]:CastAbilityOnPosition(hookPositions[i] + randomOffset, 
                                       hookAbilities[i], 0)
    end
end

-- Запуск таймера хуков
function startHooks()
    Timers:CreateTimer(5, function()
        hook()
        return RandomInt(1.5, 3.5)  -- Случайный интервал 1.5-3.5 сек
    end)
end
```

**Лайфхак #8**: Случайный offset в hookPositions делает хуки непредсказуемыми!

#### 3.5.2 Arrow Traps

**Файл**: `arrow_trap.lua`

```lua
-- Предопределенные точки для стрельбы
local Points = {
    Vector(4058,6076,20), 
    Vector(3286,6964,20), 
    Vector(2286,6072,20), 
    Vector(1470,6940,20),
    Vector(-1120,6724,20), 
    Vector(-1097,6528,20), 
    Vector(-1114,6361,20)
}

-- Выстрел по прямой
function Fire(data)
    if not isHero(data) then
        return
    end
    
    print("Arrow firing")
    local target = data.caller
    
    if target ~= nil then
        local arrow = thisEntity:FindAbilityByName("mirana_arrow_custom")
        thisEntity:CastAbilityOnPosition(Vector(7040,512,20), arrow, -1)
    end
end

-- Выстрел в точку (зависит от имени ловушки)
function FireAtPoint(data)
    if not isHero(data) then
        return
    end
    
    print("Arrow firing")
    local target = data.caller
    
    if target ~= nil then
        local arrow = thisEntity:FindAbilityByName("mirana_arrow_custom")
        
        -- Определяем точку по имени entity
        if string.find(thisEntity:GetName(), "two") then
            thisEntity:CastAbilityOnPosition(Points[1], arrow, -1)
        elseif string.find(thisEntity:GetName(), "three") then
            thisEntity:CastAbilityOnPosition(Points[2], arrow, -1)
        elseif string.find(thisEntity:GetName(), "four") then
            thisEntity:CastAbilityOnPosition(Points[3], arrow, -1)
        -- ... и так далее
        end
    end
end

-- TA Trap
function TaTrap(data)
    if not isHero(data) then
        return
    end
    
    print("TA trap!")
    
    if not GameRules.dotaRun.TaTrapFired then
        local TaTrap = Entities:FindByName(nil, "ta_trap_one")
        
        -- Psionic trap
        local trap = TaTrap:FindAbilityByName("templar_assassin_psionic_trap_custom")
        trap:SetLevel(1)
        TaTrap:CastAbilityOnPosition(Vector(-4160, 6528, 320), trap, -1)
        
        -- Slow trap
        trap = TaTrap:FindAbilityByName("templar_assassin_trap_custom")
        trap:SetLevel(1)
        TaTrap:CastAbilityOnPosition(Vector(-4160, 6528, 320), trap, -1)
        
        GameRules.dotaRun.TaTrapFired = true
    end
end
```

**Лайфхак #9**: Ловушки срабатывают через trigger zones в Hammer, вызывая Lua функции.

### 3.6 Water Slow система

**Файл**: `dotarun.lua`

```lua
-- Вход в воду
function WaterSlow(trigger)
    print("Slowing")
    local hero = trigger.activator
    
    if not isHero(trigger) then
        return
    end
    
    GiveUnitSlow(hero, hero, "modifier_slow")
end

-- Выход из воды
function WaterUnslow(trigger)
    print("Unslowing")
    local hero = trigger.activator
    
    if not isHero(trigger) then
        return
    end
    
    hero:RemoveModifierByName("modifier_slow")
end

-- Применение замедления
function GiveUnitSlow(source, target, modifier)
    -- Создаем item для применения модификатора
    local item = CreateItem("item_apply_slow", source, source)
    item:ApplyDataDrivenModifier(source, target, modifier, {})
end
```

**Лайфхак #10**: Data-driven модификаторы применяются через dummy item `item_apply_slow`.

### 3.7 Утилиты

```lua
-- Проверка что trigger активирован героем
function isHero(trigger)
    local unit = trigger.activator
    
    if not unit or unit:IsNull() then
        return false
    end
    
    if not unit.GetPlayerID or not unit.IsRealHero then
        return false
    end
    
    local playerID = unit:GetPlayerID()
    
    -- Debug
    print("Triggered by: " .. unit:GetClassname() .. " | PlayerID: " .. playerID)
    
    -- Игнорируем иллюзии
    if unit:IsIllusion() then
        return false
    end
    
    -- PlayerID -1 = NPC (courier, summon, collision box)
    return playerID ~= -1
end

-- Телепорт героя
function teleportHero(hero, point, playerID)
    -- Партикл телепорта
    local particle = ParticleManager:CreateParticle(
        "particles/econ/events/nexon_hero_compendium_2014/teleport_start_i_nexon_hero_cp_2014.vpcf",
        PATTACH_ABSORIGIN, hero)
    
    -- Поиск свободного места
    FindClearSpaceForUnit(hero, point, false)
    
    -- Остановка движения
    hero:Stop()
    
    -- Центрировка камеры
    SendToConsole("dota_camera_center")
end
```

## 4. Panorama UI

### 4.1 Структура UI

```
panorama/
├── layout/custom_game/
│   ├── multiteam_top_scoreboard.xml        # Топ табло
│   ├── multiteam_flyout_scoreboard.xml     # Выпадающее табло
│   ├── multiteam_end_screen.xml            # Экран окончания
│   ├── countdown.xml                        # Отсчет
│   ├── voting.xml                           # Голосование
│   └── overthrow_*.xml                      # Базовые элементы (из Overthrow)
├── scripts/custom_game/
│   ├── multiteam_top_scoreboard.js
│   ├── countdown.js
│   ├── voting.js
│   └── shared_scoreboard_updater.js        # Обновление счета
└── styles/custom_game/
    └── (соответствующие CSS)
```

### 4.2 Countdown система

**JavaScript** (`countdown.js`):

```javascript
// Отсчет перед стартом
function StartCountdown() {
    $("#CountdownPanel").RemoveClass("Hidden");
    
    var count = 5;
    
    function UpdateCountdown() {
        $("#CountdownNumber").text = count.toString();
        
        // Звук
        Game.EmitSound("General.CountdownBeep");
        
        count--;
        
        if (count > 0) {
            $.Schedule(1.0, UpdateCountdown);
        } else {
            // GO!
            $("#CountdownNumber").text = "GO!";
            Game.EmitSound("General.CountdownStart");
            
            $.Schedule(1.0, function() {
                $("#CountdownPanel").AddClass("Hidden");
            });
        }
    }
    
    UpdateCountdown();
}

// Подписка на серверное событие
GameEvents.Subscribe("start_countdown", StartCountdown);
```

### 4.3 Scoreboard система

**JavaScript** (`multiteam_top_scoreboard.js`):

```javascript
// Обновление счета
function UpdateScoreboard() {
    var playerCount = Game.GetAllPlayerIDs().length;
    
    for (var i = 0; i < playerCount; i++) {
        var playerID = Game.GetAllPlayerIDs()[i];
        
        // Получаем данные игрока
        var kills = Players.GetKills(playerID);
        var heroName = Players.GetPlayerSelectedHero(playerID);
        var teamID = Players.GetTeam(playerID);
        
        // Обновляем UI
        var panel = $("#Player_" + playerID);
        if (!panel) {
            panel = CreatePlayerPanel(playerID);
        }
        
        panel.SetDialogVariableInt("kills", kills);
        panel.SetDialogVariable("hero_name", $.Localize(heroName));
        
        // Подсветка лидера
        if (IsLeader(playerID)) {
            panel.AddClass("Leader");
        } else {
            panel.RemoveClass("Leader");
        }
    }
    
    // Сортировка по очкам
    SortScoreboard();
}

function SortScoreboard() {
    var panels = [];
    
    for (var i = 0; i < Game.GetAllPlayerIDs().length; i++) {
        var playerID = Game.GetAllPlayerIDs()[i];
        panels.push({
            id: playerID,
            kills: Players.GetKills(playerID),
            panel: $("#Player_" + playerID)
        });
    }
    
    // Сортировка по kills (descending)
    panels.sort(function(a, b) {
        return b.kills - a.kills;
    });
    
    // Переупорядочиваем панели
    for (var i = 0; i < panels.length; i++) {
        panels[i].panel.SetPositionInList(i);
    }
}

// Обновление каждую секунду
$.Schedule(1.0, function() {
    UpdateScoreboard();
    $.Schedule(1.0, arguments.callee);
});
```

**Лайфхак #11**: UI в стиле Overthrow переиспользует Valve-код с минимальными изменениями.

## 5. Игровые механики

### 5.1 Система голосования

**Файл**: `voting.lua`

Игроки могут голосовать за рестарт игры:

```lua
GameRules.dotaRun.votes = {}  -- [playerID] = true/false

function VoteForRestart(playerID)
    if GameRules.dotaRun.votes[playerID] then
        print("Player " .. playerID .. " already voted")
        return
    end
    
    GameRules.dotaRun.votes[playerID] = true
    
    -- Считаем голоса
    local voteCount = 0
    local totalPlayers = 0
    
    for i = 0, 9 do
        if PlayerResource:IsValidPlayerID(i) then
            totalPlayers = totalPlayers + 1
            if GameRules.dotaRun.votes[i] then
                voteCount = voteCount + 1
            end
        end
    end
    
    -- Большинство?
    if voteCount > totalPlayers / 2 then
        print("Vote passed! Restarting game...")
        RestartGame()
    else
        local needed = math.ceil(totalPlayers / 2) + 1 - voteCount
        Notifications:TopToAll({
            text = voteCount .. "/" .. needed .. " votes for restart",
            duration = 3.0
        })
    end
end
```

### 5.2 Settings система

**Файл**: `gamesettings.lua`

```lua
-- Настройки игры
POINTS_TO_WIN = 30
ROUND_TIMEOUT = 30  -- Секунд после первого финиша

-- Настройки item zones
ITEM_ZONE_COOLDOWN = 20  -- Секунд между активациями

-- Water slow
WATER_SLOW_PERCENTAGE = 20  -- -20% скорости

-- Препятствия
PUDGE_HOOK_INTERVAL_MIN = 1.5
PUDGE_HOOK_INTERVAL_MAX = 3.5

SHAKER_FISSURE_INTERVAL = 5.0
MAGNUS_SKEWER_INTERVAL = 3.0

-- Награды
MAX_ABILITIES = 6
MAX_ITEMS = 6
```

## 6. Лайфхаки и best practices

### 6.1 Trigger-based геймплей

**Все взаимодействия через Hammer triggers**:
- Waypoint touches → Lua callback
- Water zones → Slow/unslow
- Item zones → Reward distribution
- Arrow traps → Fire function

```
Hammer Entity → Output → RunScriptCode → Lua function
```

**Преимущество**: Не нужно постоянно проверять позиции через FindUnitsInRadius.

### 6.2 isHero() валидация

```lua
function isHero(trigger)
    -- Проверки:
    -- 1. Unit существует
    -- 2. IsRealHero
    -- 3. Не иллюзия
    -- 4. PlayerID != -1
    return valid
end
```

**Используется везде** для защиты от ложных срабатываний.

### 6.3 State tracking через tables

```lua
-- Прогресс каждого игрока
GameRules.dotaRun.waypoints[playerID][waypointNumber] = true

-- Состояние зон
GameRules.dotaRun.zoneOpen[playerID] = true/false

-- Флаги
GameRules.dotaRun.alreadyScored[playerID] = true
GameRules.dotaRun.hasAlreadyReset = true
```

### 6.4 ReplaceHeroWith для полного сброса

```lua
-- Лучше чем Respawn()
PlayerResource:ReplaceHeroWith(playerID, heroName, gold, xp)
```

**Преимущество**: Сбрасывает все (HP, mana, cooldowns, modifiers).

### 6.5 Визуализация через kills

```lua
-- Очки = kills в табло
for i = 1, points do
    hero:IncrementKills(playerID)
end
```

### 6.6 Рекурсивная randomization

```lua
function GiveRandomItem(hero)
    -- ... проверка дубликатов ...
    if alreadyHas then
        GiveRandomItem(hero)  -- Рекурсия до уникального
    end
end
```

### 6.7 Таймеры с проверкой hasAlreadyReset

```lua
Timers:CreateTimer(30, function()
    if not GameRules.dotaRun.hasAlreadyReset then
        StartReset()
    end
end)
```

**Предотвращает** двойные resets.

### 6.8 Dummy items для модификаторов

```lua
local item = CreateItem("item_apply_slow", source, source)
item:ApplyDataDrivenModifier(source, target, modifier, {})
```

### 6.9 Notification система

```lua
-- Через BMD notifications library
Notifications:Top(playerID, {
    text = "Message",
    duration = 3.0,
    style = {color = "red"}
})
```

### 6.10 String matching для entity logic

```lua
if string.find(thisEntity:GetName(), "two") then
    -- Логика для "trap_two"
end
```

## 7. Сравнение с другими проектами

| Аспект | Dota Run | Ashenvale Archers | Dota IMBA |
|--------|----------|-------------------|-----------|
| **Lua файлов** | 25 | 13 | 196 |
| **Сложность** | Средняя | Низкая | Очень высокая |
| **Подход** | Trigger-based | Data-driven | Lua-scripting |
| **UI** | Средний (Overthrow) | Минимальный | Полный |
| **Препятствия** | 7 динамических | Нет | Нет |
| **Геймплей** | Runner/Racing | PvP Arena | Modified MOBA |

## 8. Статистика

- **Lua файлов**: 25
- **Препятствий**: 7 типов
- **Чекпоинтов**: 6
- **Item zones**: Несколько
- **UI файлов**: 58 (30 XML + 14 JS + 14 CSS)
- **Карт**: 3 варианта
- **Предметов**: 8 в пуле
- **Способностей**: 10+ в пуле

## 9. Выводы

**Dota Run** - отличный пример **среднесложной кастомки** с фокусом на:

### Сильные стороны:
1. **Trigger-based геймплей** - эффективно и просто
2. **Checkpoint validation** - предотвращает читы
3. **Dynamic obstacles** - каждая игра уникальна
4. **Racing mechanics** - система мест и очков
5. **Round system** - повторяемость без перезагрузки
6. **Last man bonus** - драматизм и динамика

### Применение:
- База для runner/racing кастомок
- Пример работы с Hammer triggers
- Референс по multi-round системам
- Изучение AI-препятствий

### Кому подходит:
- Разработчикам arcade-игр
- Тем, кто изучает Hammer integration
- Проектам с соревновательным геймплеем

**Ключевой урок**: Trigger-based подход позволяет создать сложный геймплей с относительно простым кодом (25 файлов).
