# Анализ кастомки: DotaCraft

## 1. Описание кастомки

**DotaCraft** - амбициозный проект по полному воссозданию Warcraft III внутри Dota 2. Это полноценная RTS (Real-Time Strategy) с постройкой зданий, сбором ресурсов, производством юнитов и героическими кампаниями.

### Основные характеристики:
- **Жанр**: RTS (Real-Time Strategy)
- **Концепция**: Воссоздание Warcraft 3
- **Режимы**: 1v1, 2v2, 3v3 (до 6 игроков)
- **Расы**: Human, Orc, Undead, Night Elf
- **Стадия**: Closed Alpha

### Ключевые особенности:
- Полноценная система строительства зданий (Building Helper)
- Сбор двух ресурсов: Gold и Lumber
- Производство юнитов через очереди
- Система героев с уровнями и опытом
- Upgrade-система (апгрейды войск и построек)
- Магазины, предметы, нейтральные крипы
- 9 различных карт
- Кастомные горячие клавиши (F1-F11, control groups)

## 2. Архитектура проекта

### 2.1 Структура файлов

```
dotacraft/
├── game/dota_addons/dotacraft/
│   ├── addoninfo.txt
│   ├── scripts/vscripts/             # 257 Lua файлов!
│   │   ├── addon_game_mode.lua      # Точка входа
│   │   ├── dotacraft.lua            # Главный геймплей
│   │   ├── utilities.lua            # Утилиты
│   │   ├── orders.lua               # Обработка приказов
│   │   ├── damage.lua               # Система урона
│   │   ├── developer.lua            # Dev-инструменты
│   │   ├── libraries/               # Библиотеки (14 файлов)
│   │   │   ├── buildinghelper.lua   # Система строительства (2713 строк!)
│   │   │   ├── gatherer.lua         # Сбор ресурсов
│   │   │   ├── selection.lua        # Выделение юнитов
│   │   │   ├── playertables.lua     # Sync игрока
│   │   │   └── ...
│   │   ├── mechanics/               # Игровые механики (22 файла)
│   │   │   ├── players.lua          # Управление игроками
│   │   │   ├── resources.lua        # Ресурсы
│   │   │   ├── upgrades.lua         # Апгрейды
│   │   │   ├── heroes.lua           # Героические механики
│   │   │   └── ...
│   │   ├── units/                   # Юниты (66 файлов)
│   │   │   ├── builder.lua          # Рабочие-строители
│   │   │   ├── gather.lua           # Сбор ресурсов
│   │   │   ├── human/               # Человеческие юниты
│   │   │   ├── orc/                 # Орочьи юниты
│   │   │   ├── undead/              # Нежить
│   │   │   └── nightelf/            # Ночные эльфы
│   │   ├── buildings/               # Здания (7 файлов)
│   │   │   ├── queue.lua            # Очередь производства
│   │   │   ├── research.lua         # Исследования
│   │   │   ├── upgrades.lua         # Апгрейды зданий
│   │   │   └── ...
│   │   ├── heroes/                  # 24 героя
│   │   │   ├── archmage/
│   │   │   ├── death_knight/
│   │   │   ├── far_seer/
│   │   │   └── ...
│   │   └── items/                   # Предметы (24 файла)
│   ├── scripts/npc/                 # KV-файлы (257 файлов)
│   │   ├── npc_units_custom.txt
│   │   ├── npc_abilities_custom.txt
│   │   ├── npc_heroes_custom.txt
│   │   └── npc_items_custom.txt
│   ├── panorama/                    # UI (40 JS файлов, 32 XML)
│   └── maps/                        # 9 карт (.vpk)
└── content/dota_addons/dotacraft/
    ├── maps/                        # 9 .vmap файлов
    ├── panorama/                    # Исходники UI
    ├── particles/                   # 690+ кастомных партиклов
    └── sounds/                      # WC3 звуки
```

### 2.2 Статистика

- **Lua файлов**: 257 (огромный проект!)
- **Библиотек**: 14 (включая Building Helper ~2700 строк)
- **Механик**: 22 модуля
- **Героев**: 24
- **Юнитов**: ~60
- **Предметов**: ~24
- **Карт**: 9
- **Партиклов**: 690+
- **UI файлов**: 40 JS + 32 XML + 11 CSS

## 3. Ключевые системы

### 3.1 Building Helper (Система строительства)

**Файл**: `libraries/buildinghelper.lua` (2713 строк!)

Это **фундаментальная библиотека** для RTS-режимов, созданная Myll и доработанная community.

#### 3.1.1 Инициализация

```lua
function BuildingHelper:Init()
    BuildingHelper.Players = {}      -- Таблица для каждого игрока
    BuildingHelper.Dummies = {}      -- Dummy для каждого типа здания
    BuildingHelper.TreeDummies = {}  -- Dummy срубленных деревьев
    BuildingHelper.Grid = {}         -- Сетка строительства
    BuildingHelper.Terrain = {}      -- Сетка terrain (изменяется при вырубке)
    BuildingHelper.Encoded = ""      -- Закодированный terrain (для клиентов)
    
    -- Grid States
    BuildingHelper.GridTypes = {}
    BuildingHelper:NewGridType("BLOCKED")
    BuildingHelper:NewGridType("BUILDABLE")
    
    -- Event Listeners
    CustomGameEventManager:RegisterListener("building_helper_build_command", 
                                           Dynamic_Wrap(BuildingHelper, "BuildCommand"))
    CustomGameEventManager:RegisterListener("building_helper_cancel_command", 
                                           Dynamic_Wrap(BuildingHelper, "CancelCommand"))
    CustomGameEventManager:RegisterListener("building_helper_repair_command", 
                                           Dynamic_Wrap(BuildingHelper, "RepairCommand"))
    
    -- Lua Modifiers
    LinkLuaModifier("modifier_building", "libraries/modifiers/modifier_building", LUA_MODIFIER_MOTION_NONE)
    LinkLuaModifier("modifier_builder_hidden", "libraries/modifiers/modifier_builder_hidden", LUA_MODIFIER_MOTION_NONE)
    LinkLuaModifier("modifier_repairing", "libraries/modifiers/repair_modifiers", LUA_MODIFIER_MOTION_NONE)
end
```

**Лайфхак**: Building Helper создает глобальную сетку строительства, которая синхронизируется с клиентами через nettables.

#### 3.1.2 Процесс строительства

**Файл**: `units/builder.lua`

```lua
-- Юнит использует способность постройки
function Build(event)
    local caster = event.caster
    local ability = event.ability
    local building_name = ability:GetKeyValue("UnitName")
    local gold_cost = ability:GetSpecialValueFor("gold_cost")
    local lumber_cost = ability:GetSpecialValueFor("lumber_cost")
    
    local hero = caster:IsRealHero() and caster or caster:GetOwner()
    local playerID = hero:GetPlayerID()
    
    -- Возврат золота (оно было списано при касте)
    Players:ModifyGold(playerID, gold_cost)
    
    -- Проверка lumber
    if not Players:HasEnoughLumber(playerID, lumber_cost) then
        return
    end
    
    -- Создание dummy здания и начало "призрачного" режима
    BuildingHelper:AddBuilding(event)
    
    -- Callback: Проверка валидности позиции
    event:OnPreConstruction(function(vPos)
        -- Проверка врагов в радиусе
        local enemies = FindUnitsInRadius(teamNumber, vPos, nil, 
                                         construction_size, 
                                         DOTA_UNIT_TARGET_TEAM_ENEMY,
                                         target_type, flags, 
                                         FIND_ANY_ORDER, false)
        if #enemies > 0 then
            SendErrorMessage(playerID, "#error_invalid_build_position")
            return false
        end
        
        -- Проверка Blight (для Undead)
        if string.match(building_name, "undead") and building_name ~= "undead_necropolis" then
            if not BuildingHelper:PositionHasBlight(vPos) then
                SendErrorMessage(playerID, "#error_must_build_on_blight")
                return false
            end
        end
        
        -- Проверка близости к золотой шахте
        if HasGoldMineDistanceRestriction(building_name) then
            local nearby_mine = Entities:FindAllByNameWithin("*gold_mine", vPos, 768)
            if #nearby_mine > 0 then
                SendErrorMessage(playerID, "#error_too_close_to_goldmine")
                return false
            end
        end
        
        -- Проверка ресурсов
        if not Players:HasEnoughGold(playerID, gold_cost) then
            return false
        end
        if not Players:HasEnoughLumber(playerID, lumber_cost) then
            return false
        end
        
        return true  -- Позиция валидна
    end)
    
    -- Callback: Позиция подтверждена
    event:OnBuildingPosChosen(function(vPos)
        -- Списание ресурсов
        Players:ModifyGold(playerID, -gold_cost)
        Players:ModifyLumber(playerID, -lumber_cost)
        
        -- Звук размещения
        Sounds:EmitSoundOnClient(playerID, "Building.Placement")
        
        -- Отмена сбора ресурсов
        local gather_ability = caster:GetGatherAbility()
        if gather_ability then caster:CancelGather() end
        
        -- Отодвинуть союзных юнитов
        MoveAwayUnits(vPos, construction_size, playerID)
        
        -- Строитель идет к месту постройки
        caster.state = "moving_to_build"
        caster:MoveToPosition(vPos)
    end)
    
    -- Callback: Строитель прибыл к месту
    event:OnConstructionStarted(function(building)
        -- Спрятать строителя
        caster:AddNewModifier(caster, nil, "modifier_builder_hidden", {})
        
        -- Начать строительство
        building:SetHealth(1)
        building:StartConstruction(caster)
        
        -- Таймер на строительство
        Timers:CreateTimer(function()
            if not building:IsAlive() then return end
            
            -- Увеличиваем HP здания
            local current_hp = building:GetHealth()
            local max_hp = building:GetMaxHealth()
            local build_rate = 10  -- HP в секунду
            
            building:SetHealth(math.min(current_hp + build_rate, max_hp))
            
            if building:GetHealth() == max_hp then
                -- Строительство завершено!
                building:OnConstructionCompleted()
                caster:RemoveModifierByName("modifier_builder_hidden")
                return nil  -- Останавливаем таймер
            end
            
            return 1.0  -- Продолжаем каждую секунду
        end)
    end)
end
```

**Лайфхаки**:
1. **Callback-based архитектура**: `OnPreConstruction` → `OnBuildingPosChosen` → `OnConstructionStarted`
2. **Призрачный режим**: Игрок видит "призрак" здания до подтверждения позиции
3. **Grid validation**: Building Helper автоматически проверяет сетку на занятость
4. **Строитель прячется**: Модификатор `modifier_builder_hidden` делает рабочего невидимым во время стройки

#### 3.1.3 Сетка строительства

```lua
-- Создание сетки при загрузке карты
function BuildingHelper:InitializeGridNav()
    local mapName = GetMapName()
    local map_bounds = BuildingHelper:GetMapBounds()
    
    -- Размер одной клетки
    local gridstep = 64
    
    -- Количество клеток
    BuildingHelper.squareX = math.ceil((map_bounds.maxX - map_bounds.minX) / gridstep)
    BuildingHelper.squareY = math.ceil((map_bounds.maxY - map_bounds.minY) / gridstep)
    
    -- Создание Grid
    for x = 0, BuildingHelper.squareX do
        BuildingHelper.Grid[x] = {}
        BuildingHelper.Terrain[x] = {}
        for y = 0, BuildingHelper.squareY do
            local gridX = map_bounds.minX + x * gridstep
            local gridY = map_bounds.minY + y * gridstep
            local position = Vector(gridX, gridY, 0)
            
            -- Проверка проходимости
            if GridNav:IsTraversable(position) then
                BuildingHelper.Grid[x][y] = BuildingHelper.GridTypes.BUILDABLE
            else
                BuildingHelper.Grid[x][y] = BuildingHelper.GridTypes.BLOCKED
            end
            
            -- Копируем в Terrain grid
            BuildingHelper.Terrain[x][y] = BuildingHelper.Grid[x][y]
        end
    end
    
    -- Кодирование для клиентов
    BuildingHelper:EncodeGrid()
end

-- Проверка возможности постройки
function BuildingHelper:CanBuildAt(position, construction_size, playerID)
    local gridX, gridY = BuildingHelper:WorldToGrid(position)
    
    for x = gridX, gridX + construction_size - 1 do
        for y = gridY, gridY + construction_size - 1 do
            if BuildingHelper.Grid[x][y] ~= BuildingHelper.GridTypes.BUILDABLE then
                return false
            end
        end
    end
    
    return true
end

-- Блокировка сетки при постройке
function BuildingHelper:BlockGridSquares(position, construction_size)
    local gridX, gridY = BuildingHelper:WorldToGrid(position)
    
    for x = gridX, gridX + construction_size - 1 do
        for y = gridY, gridY + construction_size - 1 do
            BuildingHelper.Grid[x][y] = BuildingHelper.GridTypes.BLOCKED
        end
    end
    
    -- Обновление клиентов
    BuildingHelper:UpdateGridNav()
end
```

**Лайфхак**: Сетка делит карту на клетки 64x64 единиц, что соответствует размеру клеток в Warcraft 3.

### 3.2 Система сбора ресурсов

**Файл**: `libraries/gatherer.lua`, `units/gather.lua`

#### 3.2.1 Архитектура сбора

```lua
-- Рабочий начинает сбор
function StartGathering(unit, target, resource_type)
    local playerID = unit:GetPlayerOwnerID()
    
    -- Сохраняем информацию о сборе
    unit.gathering = {
        target = target,
        resource_type = resource_type,  -- "gold" или "lumber"
        amount = 0,
        capacity = GetGatherCapacity(unit, resource_type)
    }
    
    -- Идем к ресурсу
    unit:MoveToTargetToAttack(target)
    
    -- Callback при достижении
    unit:SetContextThink("GatherThink", function()
        if not target:IsAlive() then
            unit:CancelGather()
            return nil
        end
        
        -- Начинаем анимацию сбора
        unit:StartGesture(ACT_DOTA_ATTACK)
        
        -- Таймер сбора
        local gather_rate = 0.5  -- Раз в 0.5 секунды
        Timers:CreateTimer(gather_rate, function()
            if not unit.gathering then return end
            
            -- Собираем ресурс
            local gathered = GatherFromResource(target, resource_type, 10)
            unit.gathering.amount = unit.gathering.amount + gathered
            
            -- Достигли вместимости?
            if unit.gathering.amount >= unit.gathering.capacity then
                -- Идем сдавать ресурсы
                ReturnResources(unit)
                return nil
            end
            
            return gather_rate  -- Продолжаем
        end)
    end, 0.1)
end

-- Возврат ресурсов
function ReturnResources(unit)
    local playerID = unit:GetPlayerOwnerID()
    local gathering = unit.gathering
    
    -- Находим ближайшее здание для сдачи
    local return_building = FindClosestReturnBuilding(unit, gathering.resource_type)
    
    if not return_building then
        -- Нет здания - отменяем сбор
        unit:CancelGather()
        return
    end
    
    -- Идем к зданию
    unit:MoveToTargetToAttack(return_building)
    
    unit:SetContextThink("ReturnThink", function()
        -- Достигли здания
        local distance = (unit:GetAbsOrigin() - return_building:GetAbsOrigin()):Length2D()
        if distance < 200 then
            -- Сдаем ресурсы
            if gathering.resource_type == "gold" then
                Players:ModifyGold(playerID, gathering.amount)
            elseif gathering.resource_type == "lumber" then
                Players:ModifyLumber(playerID, gathering.amount)
            end
            
            -- Визуальный эффект
            ParticleManager:CreateParticle("particles/resource_return.vpcf", 
                                          PATTACH_ABSORIGIN, unit)
            
            -- Обнуляем собранное
            gathering.amount = 0
            
            -- Возвращаемся собирать дальше
            StartGathering(unit, gathering.target, gathering.resource_type)
        end
        
        return 0.1
    end, 0.1)
end
```

**Лайфхаки**:
1. **State machine**: Состояния рабочего: idle → moving_to_resource → gathering → returning → moving_to_resource
2. **Вместимость**: У каждого рабочего есть capacity (10 для золота, 10 для дерева)
3. **Автовозврат**: После достижения capacity рабочий автоматически идет сдавать ресурсы

#### 3.2.2 Ресурсные объекты

```lua
-- Золотая шахта
function InitGoldMine(mine)
    mine.resource_type = "gold"
    mine.resource_amount = 12500  -- Стартовое количество
    mine.max_gatherers = 5        -- Максимум рабочих
    mine.current_gatherers = 0
    
    mine.GatherResource = function(self, amount)
        local gathered = math.min(amount, self.resource_amount)
        self.resource_amount = self.resource_amount - gathered
        
        if self.resource_amount <= 0 then
            -- Шахта истощена
            self:OnResourceDepleted()
        end
        
        return gathered
    end
end

-- Дерево
function InitTree(tree)
    tree.resource_type = "lumber"
    tree.resource_amount = 400  -- Древесина с одного дерева
    
    tree.GatherResource = function(self, amount)
        local gathered = math.min(amount, self.resource_amount)
        self.resource_amount = self.resource_amount - gathered
        
        if self.resource_amount <= 0 then
            -- Дерево срублено
            self:CutDown()
            
            -- Обновляем Building Helper grid
            BuildingHelper:OnTreeCut(self)
        end
        
        return gathered
    end
end
```

**Лайфхак**: Ресурсы - это юниты с методом `GatherResource()`, что унифицирует систему.

### 3.3 Система производства юнитов (Queue)

**Файл**: `buildings/queue.lua`

```lua
-- Здание начинает производить юнита
function TrainUnit(building, ability)
    local unit_name = ability:GetKeyValue("UnitName")
    local gold_cost = ability:GetSpecialValueFor("gold_cost")
    local lumber_cost = ability:GetSpecialValueFor("lumber_cost")
    local train_time = ability:GetSpecialValueFor("train_time")
    
    local playerID = building:GetPlayerOwnerID()
    
    -- Проверка ресурсов
    if not Players:HasEnoughResources(playerID, gold_cost, lumber_cost) then
        return
    end
    
    -- Списание ресурсов
    Players:ModifyGold(playerID, -gold_cost)
    Players:ModifyLumber(playerID, -lumber_cost)
    
    -- Добавляем в очередь
    if not building.queue then
        building.queue = {}
    end
    
    table.insert(building.queue, {
        unit_name = unit_name,
        train_time = train_time,
        progress = 0
    })
    
    -- Если это первый в очереди, начинаем производство
    if #building.queue == 1 then
        StartTraining(building)
    end
    
    -- Обновление UI
    UpdateBuildingQueue(building)
end

-- Процесс производства
function StartTraining(building)
    if not building.queue or #building.queue == 0 then
        return
    end
    
    local current_item = building.queue[1]
    
    -- Таймер производства
    Timers:CreateTimer(0.1, function()
        if not building:IsAlive() or not building.queue then
            return nil
        end
        
        -- Увеличиваем прогресс
        current_item.progress = current_item.progress + 0.1
        
        -- Обновляем UI
        UpdateTrainingProgress(building, current_item.progress / current_item.train_time)
        
        -- Производство завершено?
        if current_item.progress >= current_item.train_time then
            -- Создаем юнита
            local rally_point = building:GetRallyPoint()
            local unit = CreateUnitByName(current_item.unit_name, 
                                         rally_point, 
                                         true, 
                                         building:GetOwner(), 
                                         building:GetOwner(), 
                                         building:GetTeamNumber())
            
            -- Даем приказ двигаться к rally point
            ExecuteOrderFromTable({
                UnitIndex = unit:entindex(),
                OrderType = DOTA_UNIT_ORDER_MOVE_TO_POSITION,
                Position = rally_point
            })
            
            -- Удаляем из очереди
            table.remove(building.queue, 1)
            
            -- Производим следующего
            if #building.queue > 0 then
                StartTraining(building)
            end
            
            return nil
        end
        
        return 0.1  -- Продолжаем
    end)
end

-- Отмена производства
function CancelTraining(building, queue_index)
    if not building.queue or not building.queue[queue_index] then
        return
    end
    
    local cancelled_item = building.queue[queue_index]
    
    -- Возврат ресурсов (частичный при отмене текущего)
    local refund_percentage = 1.0
    if queue_index == 1 then
        -- Текущий в производстве - возвращаем пропорционально прогрессу
        refund_percentage = 1.0 - (cancelled_item.progress / cancelled_item.train_time)
    end
    
    local gold_refund = cancelled_item.gold_cost * refund_percentage
    local lumber_refund = cancelled_item.lumber_cost * refund_percentage
    
    Players:ModifyGold(building:GetPlayerOwnerID(), gold_refund)
    Players:ModifyLumber(building:GetPlayerOwnerID(), lumber_refund)
    
    -- Удаляем из очереди
    table.remove(building.queue, queue_index)
    
    -- Если это был первый, начинаем следующего
    if queue_index == 1 and #building.queue > 0 then
        StartTraining(building)
    end
    
    UpdateBuildingQueue(building)
end
```

**Лайфхаки**:
1. **Очередь как массив**: Каждое здание имеет `building.queue[]` с информацией о производстве
2. **Прогресс-бар**: UI показывает прогресс производства через CustomNetTables
3. **Частичный возврат**: При отмене производства возвращаются ресурсы пропорционально остатку времени
4. **Rally Point**: Созданные юниты автоматически идут к точке сбора

### 3.4 Система апгрейдов

**Файл**: `mechanics/upgrades.lua`, `buildings/research.lua`

```lua
-- Глобальное хранилище апгрейдов
if not Players.upgrades then
    Players.upgrades = {}
end

-- Начало исследования
function StartResearch(building, ability)
    local upgrade_name = ability:GetKeyValue("ResearchName")
    local gold_cost = ability:GetSpecialValueFor("gold_cost")
    local lumber_cost = ability:GetSpecialValueFor("lumber_cost")
    local research_time = ability:GetSpecialValueFor("research_time")
    
    local playerID = building:GetPlayerOwnerID()
    
    -- Проверка ресурсов
    if not Players:HasEnoughResources(playerID, gold_cost, lumber_cost) then
        return
    end
    
    -- Списание ресурсов
    Players:ModifyGold(playerID, -gold_cost)
    Players:ModifyLumber(playerID, -lumber_cost)
    
    -- Блокируем здание
    building.researching = {
        upgrade_name = upgrade_name,
        research_time = research_time,
        progress = 0
    }
    
    -- Таймер исследования
    Timers:CreateTimer(0.1, function()
        if not building:IsAlive() or not building.researching then
            return nil
        end
        
        building.researching.progress = building.researching.progress + 0.1
        
        -- Завершено?
        if building.researching.progress >= research_time then
            -- Применяем апгрейд
            ApplyUpgrade(playerID, upgrade_name)
            
            building.researching = nil
            return nil
        end
        
        return 0.1
    end)
end

-- Применение апгрейда
function ApplyUpgrade(playerID, upgrade_name)
    -- Сохраняем
    if not Players.upgrades[playerID] then
        Players.upgrades[playerID] = {}
    end
    Players.upgrades[playerID][upgrade_name] = true
    
    -- Применяем ко всем существующим юнитам
    local units = Players:GetUnits(playerID)
    for _, unit in pairs(units) do
        ApplyUpgradeToUnit(unit, upgrade_name)
    end
    
    -- Синхронизация с клиентом
    CustomNetTables:SetTableValue("player_upgrades", 
                                   tostring(playerID), 
                                   Players.upgrades[playerID])
end

-- Применение апгрейда к юниту
function ApplyUpgradeToUnit(unit, upgrade_name)
    local upgrade_data = GetUpgradeData(upgrade_name)
    
    if upgrade_data.type == "attack_damage" then
        unit:SetBaseDamageMin(unit:GetBaseDamageMin() + upgrade_data.bonus)
        unit:SetBaseDamageMax(unit:GetBaseDamageMax() + upgrade_data.bonus)
    elseif upgrade_data.type == "armor" then
        unit:SetPhysicalArmorBaseValue(unit:GetPhysicalArmorBaseValue() + upgrade_data.bonus)
    elseif upgrade_data.type == "ability" then
        -- Даем новую способность
        unit:AddAbility(upgrade_data.ability_name)
    elseif upgrade_data.type == "modifier" then
        -- Применяем модификатор
        unit:AddNewModifier(unit, nil, upgrade_data.modifier_name, {})
    end
end

-- Проверка наличия апгрейда
function Players:HasUpgrade(playerID, upgrade_name)
    return Players.upgrades[playerID] and Players.upgrades[playerID][upgrade_name]
end
```

**Лайфхаки**:
1. **Глобальное хранилище**: `Players.upgrades[playerID][upgrade_name]` хранит все апгрейды игрока
2. **Ретроактивность**: Апгрейды применяются ко всем существующим юнитам, не только новым
3. **Типы апгрейдов**: attack_damage, armor, ability, modifier - разные типы для разных эффектов
4. **Синхронизация**: CustomNetTables передает информацию об апгрейдах клиенту для UI

### 3.5 Система героев

**Файл**: `mechanics/heroes.lua`

```lua
-- Призыв героя на Altar
function SummonHero(altar, ability)
    local hero_name = ability:GetKeyValue("HeroName")
    local gold_cost = ability:GetSpecialValueFor("gold_cost")
    local lumber_cost = ability:GetSpecialValueFor("lumber_cost")
    local summon_time = ability:GetSpecialValueFor("summon_time")
    
    local playerID = altar:GetPlayerOwnerID()
    
    -- Проверка лимита героев (3 в Warcraft 3)
    local hero_count = Players:GetHeroCount(playerID)
    if hero_count >= 3 then
        SendErrorMessage(playerID, "#error_hero_limit")
        return
    end
    
    -- Списание ресурсов
    Players:ModifyGold(playerID, -gold_cost)
    Players:ModifyLumber(playerID, -lumber_cost)
    
    -- Призыв через очередь
    altar.summoning = {
        hero_name = hero_name,
        summon_time = summon_time,
        progress = 0
    }
    
    Timers:CreateTimer(0.1, function()
        if not altar:IsAlive() or not altar.summoning then
            return nil
        end
        
        altar.summoning.progress = altar.summoning.progress + 0.1
        
        if altar.summoning.progress >= summon_time then
            -- Создаем героя
            local hero = CreateUnitByName(hero_name, 
                                         altar:GetAbsOrigin(), 
                                         true, 
                                         altar:GetOwner(), 
                                         altar:GetOwner(), 
                                         altar:GetTeamNumber())
            
            -- Инициализация героя
            InitializeHero(hero, playerID)
            
            -- Партикл призыва
            ParticleManager:CreateParticle("particles/hero_summon.vpcf", 
                                          PATTACH_ABSORIGIN, hero)
            
            altar.summoning = nil
            return nil
        end
        
        return 0.1
    end)
end

-- Инициализация героя
function InitializeHero(hero, playerID)
    -- Привязка к игроку
    hero:SetPlayerID(playerID)
    hero:SetControllableByPlayer(playerID, true)
    
    -- Добавление в список героев игрока
    if not Players.heroes then
        Players.heroes = {}
    end
    if not Players.heroes[playerID] then
        Players.heroes[playerID] = {}
    end
    table.insert(Players.heroes[playerID], hero)
    
    -- Начальный уровень
    hero:SetAbilityPoints(1)
    
    -- Предметы по умолчанию
    local starting_item = "item_town_portal_scroll"
    local item = CreateItem(starting_item, hero, hero)
    hero:AddItem(item)
    
    -- Событие создания героя
    FireGameEvent("hero_spawned", {
        playerID = playerID,
        hero = hero:entindex()
    })
end

-- Воскрешение героя на Altar
function ReviveHero(altar, hero)
    local playerID = hero:GetPlayerOwnerID()
    local revive_time = CalculateReviveTime(hero)
    local gold_cost = CalculateReviveCost(hero)
    
    -- Списание золота
    Players:ModifyGold(playerID, -gold_cost)
    
    -- Таймер воскрешения
    altar.reviving = {
        hero = hero,
        revive_time = revive_time,
        progress = 0
    }
    
    Timers:CreateTimer(1.0, function()
        if not altar:IsAlive() or not altar.reviving then
            return nil
        end
        
        altar.reviving.progress = altar.reviving.progress + 1.0
        
        if altar.reviving.progress >= revive_time then
            -- Воскрешаем
            hero:RespawnHero(false, false)
            hero:SetAbsOrigin(altar:GetAbsOrigin())
            
            -- Партикл
            ParticleManager:CreateParticle("particles/hero_revive.vpcf", 
                                          PATTACH_ABSORIGIN, hero)
            
            altar.reviving = nil
            return nil
        end
        
        return 1.0
    end)
end

-- Расчет времени воскрешения (как в WC3)
function CalculateReviveTime(hero)
    local level = hero:GetLevel()
    return 5 + level * 5  -- 10 сек на 1 lvl, 60 сек на 10 lvl
end

-- Расчет стоимости воскрешения
function CalculateReviveCost(hero)
    local level = hero:GetLevel()
    return level * 100  -- 100 золота за уровень
end
```

**Лайфхаки**:
1. **Лимит героев**: Максимум 3 героя у игрока (как в WC3)
2. **Altar-based**: Герои призываются и воскрешаются через Altar of Kings/etc
3. **Время воскрешения**: Растет с уровнем героя (5 + level * 5 секунд)
4. **Стоимость воскрешения**: 100 золота за уровень

### 3.6 Control Groups (Группы управления)

**Файл**: `libraries/selection.lua`

```lua
-- Custom Key Bindings в addoninfo.txt
"Default_Keys"
{
    "06"  -- Control Group 1
    {
        "Key"       "1"
        "Command"   "+SelectCreateControlGroup1"
        "Name"      "Select or Create Control Group 1"
    }
    -- ... до 7 групп
}

-- Создание/выбор группы
function CreateControlGroup(playerID, group_number)
    local selected_units = Players:GetSelection(playerID)
    
    if #selected_units == 0 then
        -- Нет выделения - выбираем группу
        SelectControlGroup(playerID, group_number)
    else
        -- Есть выделение - создаем группу
        if not Players.control_groups then
            Players.control_groups = {}
        end
        if not Players.control_groups[playerID] then
            Players.control_groups[playerID] = {}
        end
        
        Players.control_groups[playerID][group_number] = {}
        for _, unit in pairs(selected_units) do
            table.insert(Players.control_groups[playerID][group_number], unit:entindex())
        end
        
        -- Обновляем UI
        UpdateControlGroupUI(playerID, group_number)
    end
end

-- Выбор группы
function SelectControlGroup(playerID, group_number)
    if not Players.control_groups or 
       not Players.control_groups[playerID] or
       not Players.control_groups[playerID][group_number] then
        return
    end
    
    local units = {}
    for _, entindex in pairs(Players.control_groups[playerID][group_number]) do
        local unit = EntIndexToHScript(entindex)
        if unit and unit:IsAlive() then
            table.insert(units, unit)
        end
    end
    
    -- Выделяем юнитов
    Players:SetSelection(playerID, units)
    
    -- Двойное нажатие - центрировать камеру
    if Players.last_group_select and 
       Players.last_group_select.group == group_number and
       GameRules:GetGameTime() - Players.last_group_select.time < 0.5 then
        -- Центрируем камеру
        CenterCameraOnUnits(playerID, units)
    end
    
    Players.last_group_select = {
        group = group_number,
        time = GameRules:GetGameTime()
    }
end

-- F1-F3 для выбора героев
function SelectHeroByIndex(playerID, hero_index)
    local heroes = Players:GetHeroes(playerID)
    if heroes and heroes[hero_index] then
        Players:SetSelection(playerID, {heroes[hero_index]})
        CenterCameraOnUnits(playerID, {heroes[hero_index]})
    end
end
```

**Лайфхаки**:
1. **Custom keybinds**: Настраиваются в `addoninfo.txt` через `Default_Keys`
2. **Двойное нажатие**: Дважды нажать группу = центрировать камеру
3. **F1-F3 для героев**: Быстрый доступ к героям
4. **F8 для idle builder**: Переключение между простаивающими рабочими

## 4. Panorama UI

DotaCraft имеет полностью кастомный UI:

### 4.1 Структура UI

```
panorama/
├── layout/                  # 32 XML файла
│   ├── custom_game/
│   │   ├── selection.xml           # Панель выделения
│   │   ├── resource_panel.xml      # Панель ресурсов
│   │   ├── building_queue.xml      # Очередь производства
│   │   ├── control_groups.xml      # Группы управления
│   │   ├── hero_panel.xml          # Панель героев
│   │   ├── minimap.xml             # Миникарта
│   │   └── ...
├── scripts/                 # 40 JS файлов
│   ├── selection.js
│   ├── resources.js
│   ├── building_helper.js
│   └── ...
└── styles/                  # 11 CSS файлов
    ├── selection.css
    ├── resources.css
    └── ...
```

### 4.2 Панель ресурсов

**Layout** (`resource_panel.xml`):
```xml
<root>
    <Panel id="ResourcePanel">
        <Panel id="GoldPanel">
            <Image src="file://{images}/gold_icon.png" />
            <Label id="GoldAmount" text="500" />
        </Panel>
        
        <Panel id="LumberPanel">
            <Image src="file://{images}/lumber_icon.png" />
            <Label id="LumberAmount" text="150" />
        </Panel>
        
        <Panel id="FoodPanel">
            <Label id="FoodCurrent" text="10" />
            <Label text="/" />
            <Label id="FoodMax" text="50" />
        </Panel>
    </Panel>
</root>
```

**Script** (`resources.js`):
```javascript
// Подписка на изменения ресурсов
CustomNetTables.SubscribeNetTableListener("player_resources", function(table_name, key, data) {
    var playerID = Players.GetLocalPlayer();
    if (key == playerID.toString()) {
        UpdateResourceDisplay(data);
    }
});

function UpdateResourceDisplay(data) {
    $("#GoldAmount").text = data.gold.toString();
    $("#LumberAmount").text = data.lumber.toString();
    $("#FoodCurrent").text = data.food_used.toString();
    $("#FoodMax").text = data.food_cap.toString();
    
    // Подсветка при нехватке ресурсов
    if (data.gold < 100) {
        $("#GoldPanel").AddClass("LowResource");
    } else {
        $("#GoldPanel").RemoveClass("LowResource");
    }
}
```

**Лайфхак**: CustomNetTables автоматически синхронизирует ресурсы с клиентом в реальном времени.

### 4.3 Панель выделения (Selection)

```javascript
// Обработка выделения юнитов
GameEvents.Subscribe("selection_update", function(data) {
    var units = data.units;
    
    // Очищаем панель
    $("#SelectionGrid").RemoveAndDeleteChildren();
    
    if (units.length == 1) {
        // Одинunit - показываем полную информацию
        DisplaySingleUnit(units[0]);
    } else if (units.length > 1) {
        // Несколько юнитов - показываем сетку
        DisplayMultipleUnits(units);
    }
});

function DisplaySingleUnit(unit) {
    // Портрет
    $("#UnitPortrait").SetImage(GetUnitPortrait(unit));
    
    // HP/Mana бары
    $("#HPBar").value = unit.health / unit.max_health;
    $("#ManaBar").value = unit.mana / unit.max_mana;
    
    // Способности
    for (var i = 0; i < 6; i++) {
        var ability = unit.abilities[i];
        if (ability) {
            $("#Ability" + i).SetAbilityName(ability.name);
            $("#Ability" + i).SetCooldown(ability.cooldown);
        }
    }
}

function DisplayMultipleUnits(units) {
    // Создаем сетку портретов (как в WC3)
    for (var i = 0; i < Math.min(units.length, 12); i++) {
        var panel = $.CreatePanel("Panel", $("#SelectionGrid"), "");
        panel.AddClass("SelectionSlot");
        
        var portrait = $.CreatePanel("DOTAUnitPortrait", panel, "");
        portrait.SetUnit(units[i]);
        
        // Клик - центрировать на юните
        panel.SetPanelEvent("onactivate", (function(unit) {
            return function() {
                CenterCameraOnUnit(unit);
            };
        })(units[i]));
    }
}
```

### 4.4 Очередь производства

```javascript
// Отображение очереди здания
function UpdateBuildingQueue(building) {
    $("#QueuePanel").RemoveAndDeleteChildren();
    
    if (!building.queue || building.queue.length == 0) {
        $("#QueuePanel").AddClass("Hidden");
        return;
    }
    
    $("#QueuePanel").RemoveClass("Hidden");
    
    for (var i = 0; i < building.queue.length; i++) {
        var item = building.queue[i];
        
        var panel = $.CreatePanel("Panel", $("#QueuePanel"), "");
        panel.AddClass("QueueSlot");
        
        // Иконка юнита
        var icon = $.CreatePanel("Image", panel, "");
        icon.SetImage(GetUnitIcon(item.unit_name));
        
        // Прогресс-бар (только для первого)
        if (i == 0) {
            var progress = $.CreatePanel("ProgressBar", panel, "");
            progress.value = item.progress / item.train_time;
        }
        
        // Правый клик - отмена
        panel.SetPanelEvent("oncontextmenu", (function(index) {
            return function() {
                GameEvents.SendCustomGameEventToServer("cancel_queue", {
                    building: building.entindex,
                    index: index
                });
            };
        })(i));
    }
}
```

## 5. Фильтры и перехваты

DotaCraft использует множество фильтров для модификации поведения:

### 5.1 Execute Order Filter

```lua
function dotacraft:FilterExecuteOrder(filterTable)
    local units = filterTable.units
    local order_type = filterTable.order_type
    local issuer = filterTable.issuer_player_id_const
    
    -- Right-click на здание - сбор ресурсов или возврат
    if order_type == DOTA_UNIT_ORDER_MOVE_TO_TARGET then
        local target = EntIndexToHScript(filterTable.entindex_target)
        
        if IsGatherTarget(target) then
            -- Это ресурс - начинаем сбор
            for _, unit in pairs(units) do
                if unit:IsGatherer() then
                    StartGathering(unit, target)
                end
            end
            return false  -- Блокируем оригинальный приказ
        elseif IsReturnBuilding(target) then
            -- Это здание для сдачи - возврат ресурсов
            for _, unit in pairs(units) do
                if unit.gathering then
                    ReturnResources(unit)
                end
            end
            return false
        end
    end
    
    -- Right-click на враждебное здание - атака
    if order_type == DOTA_UNIT_ORDER_MOVE_TO_TARGET then
        local target = EntIndexToHScript(filterTable.entindex_target)
        if target:IsBuilding() and target:GetTeamNumber() ~= units[1]:GetTeamNumber() then
            -- Меняем на приказ атаки
            filterTable.order_type = DOTA_UNIT_ORDER_ATTACK_TARGET
        end
    end
    
    return true
end
```

**Лайфхак**: Order Filter перехватывает команды игрока и модифицирует их поведение (например, right-click на ресурс = начать сбор).

### 5.2 Damage Filter

```lua
function dotacraft:FilterDamage(filterTable)
    local victim = EntIndexToHScript(filterTable.entindex_victim_const)
    local attacker = EntIndexToHScript(filterTable.entindex_attacker_const)
    local damage = filterTable.damage
    
    -- Модификация урона по типу атаки
    local attack_type = attacker:GetAttackType()  -- "normal", "pierce", "siege", "magic"
    local armor_type = victim:GetArmorType()      -- "heavy", "medium", "light", "fortified"
    
    local damage_modifier = GetDamageModifier(attack_type, armor_type)
    filterTable.damage = damage * damage_modifier
    
    -- Здания получают меньше урона от юнитов
    if victim:IsBuilding() and not attacker:IsSiegeUnit() then
        filterTable.damage = filterTable.damage * 0.5
    end
    
    return true
end

-- Таблица модификаторов урона (как в WC3)
function GetDamageModifier(attack_type, armor_type)
    local modifiers = {
        ["normal"] = {
            ["heavy"] = 1.0,
            ["medium"] = 1.0,
            ["light"] = 1.0,
            ["fortified"] = 0.5
        },
        ["pierce"] = {
            ["heavy"] = 0.75,
            ["medium"] = 1.0,
            ["light"] = 1.5,
            ["fortified"] = 0.35
        },
        ["siege"] = {
            ["heavy"] = 0.5,
            ["medium"] = 0.5,
            ["light"] = 0.5,
            ["fortified"] = 1.5
        }
    }
    
    return modifiers[attack_type][armor_type] or 1.0
end
```

**Лайфхак**: Damage Filter реализует систему типов атаки/брони из Warcraft 3.

## 6. Лайфхаки и best practices

### 6.1 Callback-based Architecture

```lua
-- Вместо жесткого кода используем callbacks
event:OnPreConstruction(function(vPos)
    -- Валидация позиции
    return IsValidPosition(vPos)
end)

event:OnBuildingPosChosen(function(vPos)
    -- Действия после подтверждения
end)

event:OnConstructionStarted(function(building)
    -- Начало строительства
end)

event:OnConstructionCompleted(function(building)
    -- Завершение строительства
end)
```

**Преимущество**: Гибкость и расширяемость - можно добавлять свою логику на каждом этапе.

### 6.2 State Machines для юнитов

```lua
-- Состояния рабочего
unit.state = "idle"  -- idle, moving_to_resource, gathering, returning, building

-- Переходы состояний
function unit:SetState(new_state)
    if self.state == new_state then return end
    
    -- Выход из старого состояния
    self:OnExitState(self.state)
    
    -- Вход в новое состояние
    self.state = new_state
    self:OnEnterState(new_state)
end
```

### 6.3 Resource Objects

```lua
-- Унификация ресурсов как объектов с методами
resource.GatherResource = function(self, amount)
    -- Универсальный интерфейс для всех ресурсов
end
```

### 6.4 Grid-Based Building

```lua
-- Сетка строительства для точного размещения
BuildingHelper.Grid[x][y] = BUILDABLE/BLOCKED
```

### 6.5 Custom Keybindings

```
// В addoninfo.txt
"Default_Keys"
{
    "01" { "Key" "F1" "Command" "+SelectHero1" }
    "02" { "Key" "1" "Command" "+ControlGroup1" }
}
```

### 6.6 Network Optimization

```lua
-- Используем CustomNetTables для batch-обновлений
CustomNetTables:SetTableValue("player_resources", tostring(playerID), {
    gold = gold,
    lumber = lumber,
    food_used = food_used,
    food_cap = food_cap
})
```

### 6.7 Модульность

Каждая раса/юнит/герой в отдельном файле:
```
units/
  human/
    peasant.lua
    footman.lua
    knight.lua
  orc/
    peon.lua
    grunt.lua
    tauren.lua
```

## 7. Особенности реализации

### 7.1 Blight System (для Undead)

```lua
-- Undead могут строить только на Blight
function BuildingHelper:PositionHasBlight(position)
    local blight_sources = Entities:FindAllByName("*necropolis*")
    
    for _, source in pairs(blight_sources) do
        local distance = (position - source:GetAbsOrigin()):Length2D()
        if distance < BLIGHT_RADIUS then
            return true
        end
    end
    
    return false
end
```

### 7.2 Upkeep System (Tax)

```lua
-- Налог на содержание армии (как в WC3)
function CalculateUpkeep(food_used)
    if food_used < 40 then
        return 1.0  -- 100% дохода
    elseif food_used < 70 then
        return 0.7  -- 70% дохода (Low Upkeep)
    else
        return 0.4  -- 40% дохода (High Upkeep)
    end
end
```

### 7.3 Day/Night Cycle

```lua
-- Цикл день/ночь влияет на видимость
function UpdateDayNight()
    local time = GameRules:GetTimeOfDay()
    local is_night = (time > 0.25 and time < 0.75)
    
    if is_night then
        -- Ночные эльфы получают бонусы ночью
        ApplyNightBonuses()
    else
        RemoveNightBonuses()
    end
end
```

## 8. Сравнение с другими кастомками

| Аспект | DotaCraft | Dota IMBA | Ashenvale Archers |
|--------|-----------|-----------|-------------------|
| **Lua файлов** | 257 | 196 | 13 |
| **Сложность** | Очень высокая | Высокая | Низкая |
| **Жанр** | RTS | Modified MOBA | PvP Arena |
| **Building System** | Да (2700 строк!) | Нет | Нет |
| **Resource Gathering** | Да (Gold+Lumber) | Нет | Нет |
| **Races** | 4 (Human/Orc/Undead/NE) | - | - |
| **Библиотеки** | 14 (включая BH) | 10+ | 3 |
| **UI кастомизация** | Полная | Полная | Минимальная |

## 9. Выводы

**DotaCraft** - самый амбициозный и технически сложный проект из рассмотренных:

### Уникальные особенности:
1. **Building Helper** - фундаментальная библиотека для RTS (2700+ строк)
2. **Dual-resource economy** - Gold + Lumber
3. **4 полноценные расы** - со своими юнитами, зданиями, апгрейдами
4. **Production Queues** - очереди производства для всех зданий
5. **Warcraft 3 mechanics** - типы атаки/брони, upkeep, blight
6. **24 героя** - с уникальными способностями
7. **Control Groups** - 7 групп + F-keys для героев
8. **Полный UI** - selection, resources, queues, minimap

### Технические достижения:
- **Grid-based building** с валидацией
- **Callback architecture** для гибкости
- **State machines** для управления юнитами
- **Order/Damage filters** для модификации поведения
- **CustomNetTables** для синхронизации
- **Модульная структура** - 257 файлов организованы логично

### Применимость:
- **База для RTS-кастомок** - Building Helper можно переиспользовать
- **Обучение advanced техникам** - фильтры, callbacks, state machines
- **Референс по организации** - как структурировать большой проект

### Кому подходит:
- Разработчикам RTS-кастомок
- Тем, кто хочет изучить Building Helper
- Advanced разработчикам, интересующимся масштабными проектами

**Ключевой урок**: Создание RTS в Dota 2 возможно, но требует огромного объема работы и продуманной архитектуры. Building Helper - must-have библиотека для любой RTS-кастомки.
