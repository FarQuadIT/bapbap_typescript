# Анализ оставшихся кастомок (4-10)

## 4. Dota Run

### Описание
**Dota Run** - runner-игра в стиле Temple Run, где игроки бегут по трассе с препятствиями, соревнуясь за первое место.

### Основные характеристики:
- **Жанр**: Runner / Racing
- **Игроки**: До 10 (FFA)
- **Цель**: Первым набрать 30 очков
- **Особенности**: Динамические препятствия, предметы для помехи соперникам

### Структура (25 Lua файлов):
```
vscripts/
├── addon_game_mode.lua
├── dotarun.lua              # Главный геймплей
├── waypoint.lua             # Система чекпоинтов
├── voting.lua               # Голосование
├── gamesettings.lua         # Настройки
├── timers.lua               # Таймеры
├── Препятствия:
│   ├── arrow_trap.lua       # Ловушки со стрелами
│   ├── pudge.lua            # Pudge хуки
│   ├── shakers.lua          # Earthshaker fissures
│   ├── magnus.lua           # Magnus skewer
│   ├── earth_spirit.lua     # Earth Spirit kicks
│   ├── centaurs.lua         # Centaur stampede
│   └── techies.lua          # Techies mines
├── heroes/                  # Кастомные способности героев
└── lib/                     # Библиотеки (notifications, json, md5)
```

### Ключевые системы:

#### 4.1 Система чекпоинтов

```lua
-- waypoint.lua
function CreateCheckpoint(position, checkpoint_number)
    local checkpoint = CreateUnitByName("npc_checkpoint", position, 
                                        false, nil, nil, DOTA_TEAM_NOTEAM)
    
    checkpoint.checkpoint_number = checkpoint_number
    checkpoint.trigger_radius = 200
    
    -- Проверка прохождения
    Timers:CreateTimer(function()
        local players = FindUnitsInRadius(DOTA_TEAM_GOODGUYS, position, nil, 
                                         checkpoint.trigger_radius, 
                                         DOTA_UNIT_TARGET_TEAM_BOTH,
                                         DOTA_UNIT_TARGET_HERO, 
                                         DOTA_UNIT_TARGET_FLAG_NONE,
                                         FIND_ANY_ORDER, false)
        
        for _, hero in pairs(players) do
            if hero.last_checkpoint == checkpoint_number - 1 then
                -- Игрок прошел чекпоинт!
                hero.last_checkpoint = checkpoint_number
                
                -- Финиш?
                if checkpoint_number == TOTAL_CHECKPOINTS then
                    OnPlayerFinished(hero)
                end
            end
        end
        
        return 0.1  -- Проверяем каждые 0.1 сек
    end)
    
    return checkpoint
end

function OnPlayerFinished(hero)
    local playerID = hero:GetPlayerOwnerID()
    
    -- Начисляем очки
    AddScore(playerID, 1)
    
    -- Телепорт на старт
    hero:SetAbsOrigin(SPAWN_POSITION)
    hero.last_checkpoint = 0
    
    -- Эффект
    ParticleManager:CreateParticle("particles/finish_effect.vpcf", 
                                   PATTACH_ABSORIGIN, hero)
    
    -- Проверка победы
    if GetScore(playerID) >= 30 then
        EndGame(playerID)
    end
end
```

**Лайфхак**: Чекпоинты постоянно проверяют радиус на наличие героев через таймер.

#### 4.2 Динамические препятствия

```lua
-- shakers.lua - Earthshaker фиссуры
function InitializeShaker(shaker)
    shaker.ability = shaker:FindAbilityByName("earthshaker_fissure")
    
    -- Периодическое использование фиссуры
    Timers:CreateTimer(function()
        -- Поворот к ближайшему игроку
        local nearest_hero = FindNearestHero(shaker)
        if nearest_hero then
            local direction = (nearest_hero:GetAbsOrigin() - shaker:GetAbsOrigin()):Normalized()
            shaker:SetForwardVector(direction)
            
            -- Задержка для возможности реакции
            Timers:CreateTimer(0.5, function()
                shaker.ability:OnSpellStart()
            end)
        end
        
        return 5.0  -- Каждые 5 секунд
    end)
end

-- pudge.lua - Pudge хуки
function InitializePudge(pudge)
    pudge.ability = pudge:FindAbilityByName("pudge_meat_hook")
    
    Timers:CreateTimer(function()
        local target = FindBestHookTarget(pudge)
        if target then
            -- Предсказание движения цели
            local target_velocity = target:GetForwardVector() * target:GetIdealSpeed()
            local hook_time = 1.0  -- Время полета хука
            local predicted_pos = target:GetAbsOrigin() + target_velocity * hook_time
            
            pudge:CastAbilityOnPosition(predicted_pos, pudge.ability, playerID)
        end
        
        return 7.0  -- Каждые 7 секунд
    end)
end

-- magnus.lua - Magnus skewer
function InitializeMagnus(magnus)
    magnus.ability = magnus:FindAbilityByName("magnus_skewer")
    magnus.patrol_points = {point1, point2}  -- Точки патруля
    magnus.current_point = 1
    
    -- Патруль туда-сюда
    Timers:CreateTimer(function()
        local target_point = magnus.patrol_points[magnus.current_point]
        
        -- Skewer к точке
        magnus:CastAbilityOnPosition(target_point, magnus.ability, playerID)
        
        -- Переключаем точку
        magnus.current_point = (magnus.current_point == 1) and 2 or 1
        
        return 3.0
    end)
end

-- earth_spirit.lua - Earth Spirit пинает remnants
function InitializeEarthSpirit(es)
    -- Создаем remnants
    es.remnants = {}
    for i = 1, 3 do
        local remnant = CreateRemnant(es:GetAbsOrigin() + RandomVector(200))
        table.insert(es.remnants, remnant)
    end
    
    -- Пинаем remnants туда-сюда
    Timers:CreateTimer(function()
        for _, remnant in pairs(es.remnants) do
            local direction = RandomVector(1)
            es:CastAbilityOnTarget(remnant, es.kick_ability, playerID)
        end
        
        return 4.0
    end)
end
```

**Лайфхак**: Каждое препятствие - это NPC с AI, который периодически использует свои способности.

#### 4.3 Предметы и препятствия для игроков

```lua
-- Игроки могут подбирать предметы для помехи соперникам
local AVAILABLE_ITEMS = {
    "item_force_staff",        -- Толкнуть противника
    "item_blink",              -- Телепорт
    "item_phase_boots",        -- Ускорение
    "item_black_king_bar",     -- Иммунитет к препятствиям
    "item_manta",              -- Illusions для отвлечения
    "item_ethereal_blade",     -- Сделать врага эфирным
    "item_euls",               -- Поднять врага в воздух
}

function SpawnRandomItem(position)
    local item_name = AVAILABLE_ITEMS[RandomInt(1, #AVAILABLE_ITEMS)]
    local item = CreateItem(item_name, nil, nil)
    CreateItemOnPositionSync(position, item)
    
    -- Автоудаление через 30 секунд
    Timers:CreateTimer(30, function()
        if item and not item:IsNull() then
            UTIL_Remove(item)
        end
    end)
end
```

### Особенности Panorama UI:

```
panorama/
├── layout/
│   ├── scoreboard.xml           # Табло с очками
│   ├── round_timer.xml          # Таймер раунда
│   └── player_position.xml      # Позиция игрока (1st, 2nd...)
├── scripts/
│   ├── scoreboard.js
│   └── round_timer.js
└── styles/
    └── custom.css
```

**Лайфхак**: UI в стиле Overthrow - минималистичный табло с очками.

### Статистика:
- **Lua файлов**: 25
- **Препятствий**: 7 типов
- **UI файлов**: 32 XML + 15 JS + 14 CSS
- **Карт**: 3 (разные варианты трассы)

### Лайфхаки:
1. **Checkpoint validation**: Игроки должны пройти чекпоинты по порядку
2. **Predictive AI**: Pudge предсказывает положение цели для хука
3. **Patrol patterns**: Magnus патрулирует между точками
4. **Auto-respawn**: После финиша игрок телепортируется на старт
5. **Dynamic obstacles**: Препятствия активируются в зависимости от близости игроков

---

## 5. Icewrack

### Описание
**Icewrack** - сложная RPG-кастомка с прокачкой, квестами и кооперативным геймплеем.

### Характеристики:
- **Жанр**: Co-op RPG / Adventure
- **Структура**: 125 Lua файлов
- **Особенности**: Система квестов, прокачка, боссы, кастомные предметы

### Ключевые файлы:
```
vscripts/
├── gamemode.lua
├── quests/                  # Система квестов
├── items/                   # Кастомные предметы
├── bosses/                  # Боссы
├── abilities/               # Кастомные способности
└── libraries/               # Библиотеки
```

### Уникальные системы:
- **Quest System**: Динамические квесты с objectives
- **Boss Mechanics**: Сложные боссы с фазами
- **Loot System**: Система дропа предметов
- **Leveling**: Кастомная система прокачки

---

## 6. reflexdota-source2

### Описание
**Reflex Dota** - мини-игра на реакцию и рефлексы.

### Характеристики:
- **Жанр**: Mini-game / Reflex training
- **Структура**: Минималистичная (~20 файлов)
- **Цель**: Тренировка реакции игроков

### Основные механики:
- Dodge challenges (уклонение от снарядов)
- Last-hit training (тренировка добивания крипов)
- Skill-shot challenges (точность способностей)

---

## 7. SlideNinjaSlide

### Описание
**Slide Ninja Slide** - аркадная игра о скольжении по ледяным поверхностям.

### Характеристики:
- **Жанр**: Arcade / Puzzle
- **Структура**: 19 Lua файлов
- **Механика**: Физика скольжения по льду

### Ключевые файлы:
```
vscripts/
├── addon_game_mode.lua
├── slide_mechanics.lua      # Физика скольжения
├── ice_physics.lua          # Ледяные поверхности
└── puzzle_elements.lua      # Элементы головоломок
```

### Особенности:
```lua
-- Физика скольжения
function ApplySlidePhysics(hero, ice_surface)
    -- Убираем трение
    hero:SetFriction(0.01)
    
    -- Сохраняем momentum
    local velocity = hero:GetForwardVector() * hero:GetIdealSpeed()
    Physics:Unit(hero):SetVelocity(velocity)
    
    -- Скольжение до столкновения
    Physics:Unit(hero):OnCollide(function(unit, normal)
        -- Отскок от стены
        local reflected = velocity - 2 * (velocity:Dot(normal)) * normal
        Physics:Unit(hero):SetVelocity(reflected * 0.8)  -- Потеря энергии
    end)
end
```

---

## 8. TrollsAndElves

### Описание
**Trolls and Elves** - командная игра в стиле Warcraft 3 карты Troll vs Elves.

### Характеристики:
- **Жанр**: Team Survival / Defense
- **Игроки**: Trolls vs Elves
- **Структура**: 17 Lua файлов

### Геймплей:
- **Elves**: Строят базу и защищаются
- **Trolls**: Атакуют эльфов волнами
- **Цель Elves**: Выжить определенное время
- **Цель Trolls**: Убить всех эльфов

### Ключевые системы:
```lua
-- Система волн троллей
function SpawnTrollWave(wave_number)
    local troll_count = 5 + wave_number * 2
    local troll_hp = 500 + wave_number * 100
    
    for i = 1, troll_count do
        local troll = CreateUnitByName("npc_troll", SPAWN_POINT, 
                                       true, nil, nil, DOTA_TEAM_BADGUYS)
        troll:SetBaseMaxHealth(troll_hp)
        troll:SetHealth(troll_hp)
        
        -- AI: атака ближайшего эльфа
        troll:SetContextThink("TrollAI", function()
            local target = FindNearestElf(troll)
            if target then
                troll:MoveToTargetToAttack(target)
            end
            return 1.0
        end, 0.1)
    end
end

-- Система строительства для эльфов
function AllowElfBuilding(elf)
    -- Эльфы могут строить защитные сооружения
    elf:AddAbility("build_wall")
    elf:AddAbility("build_tower")
    elf:AddAbility("build_trap")
end
```

---

## 9. Warchasers

### Описание
**Warchasers** - гибрид RPG и ARPG в стиле Diablo, основанный на Warcraft 3 карте Warchasers.

### Характеристики:
- **Жанр**: ARPG / Dungeon Crawler
- **Структура**: 39 Lua файлов (game), 751 файлов ресурсов
- **Особенности**: Loot system, рандомные данжи, affix system

### Ключевые системы:

#### 9.1 Affix System (случайные модификаторы предметов)

```lua
-- Affixes.txt документирует систему
local PREFIXES = {
    "Mighty",    -- +Strength
    "Swift",     -- +Agility
    "Wise",      -- +Intelligence
    "Hardened",  -- +Armor
    "Sharp",     -- +Damage
}

local SUFFIXES = {
    "of Power",      -- +Attack Speed
    "of Vitality",   -- +HP
    "of Swiftness",  -- +Movement Speed
    "of Mana",       -- +Mana
}

function GenerateRandomItem(level)
    local base_item = PickRandomBaseItem(level)
    local prefix = PREFIXES[RandomInt(1, #PREFIXES)]
    local suffix = SUFFIXES[RandomInt(1, #SUFFIXES)]
    
    local item_name = prefix .. " " .. base_item .. " " .. suffix
    local item = CreateItem(base_item, nil, nil)
    
    -- Применяем модификаторы
    ApplyPrefix(item, prefix)
    ApplySuffix(item, suffix)
    
    -- Визуальные эффекты
    AddItemGlow(item, GetRarityColor(item))
    
    return item
end

function ApplyPrefix(item, prefix)
    if prefix == "Mighty" then
        item:SetBonusStrength(RandomInt(5, 15))
    elseif prefix == "Sharp" then
        item:SetBonusDamage(RandomInt(10, 30))
    end
    -- ...
end
```

#### 9.2 Dungeon System

```lua
-- Процедурная генерация данжей
function GenerateDungeon(difficulty)
    local dungeon = {
        rooms = {},
        corridors = {},
        monster_spawns = {},
        boss_room = nil
    }
    
    -- Генерация комнат
    local room_count = 5 + difficulty * 2
    for i = 1, room_count do
        local room = {
            position = GetRandomDungeonPosition(),
            size = RandomInt(500, 1000),
            monster_level = difficulty,
            loot_quality = difficulty
        }
        table.insert(dungeon.rooms, room)
    end
    
    -- Связываем комнаты коридорами
    ConnectRoomsWithCorridors(dungeon.rooms)
    
    -- Генерация boss room
    dungeon.boss_room = GenerateBossRoom(difficulty)
    
    return dungeon
end
```

#### 9.3 Loot System

```lua
function DropLoot(unit, killer)
    local drop_chance = 0.3  -- 30% шанс дропа
    
    if RollPercentage(drop_chance) then
        local item_level = unit:GetLevel()
        local item_rarity = DetermineRarity()  -- Common/Uncommon/Rare/Epic/Legendary
        
        local item = GenerateRandomItem(item_level, item_rarity)
        DropItemAtPosition(unit:GetAbsOrigin(), item)
        
        -- Визуальный эффект
        CreateLootBeam(item, GetRarityColor(item_rarity))
    end
end

function DetermineRarity()
    local roll = RandomFloat(0, 1)
    
    if roll < 0.50 then return "common"       -- 50%
    elseif roll < 0.75 then return "uncommon"  -- 25%
    elseif roll < 0.90 then return "rare"      -- 15%
    elseif roll < 0.98 then return "epic"      -- 8%
    else return "legendary"                    -- 2%
    end
end
```

### Статистика Warchasers:
- **Lua файлов**: 39
- **Ресурсов**: 751 (407 txt, 195 png, 39 vmesh_c...)
- **Particles**: Множество кастомных эффектов
- **Affixes**: Документированная система в Affixes.txt
- **Карты**: (4)WarChasers.w3m (оригинальная WC3 карта)

---

## 10. x-template

### Описание
**x-template** - продвинутый шаблон для создания кастомок с TypeScript поддержкой.

### Характеристики:
- **Назначение**: Boilerplate/Template
- **Структура**: TypeScript + Lua
- **Инструменты**: Gulp build system, Excel integration

### Структура:
```
x-template/
├── content/                 # Panorama UI (TypeScript)
├── game/                    # Lua скрипты
├── scripts/                 # Build scripts
├── shared/                  # Shared code
├── excels/                  # Excel для балансировки
├── gulpfile.ts              # Gulp build configuration
├── tsconfig.json            # TypeScript config
└── package.json             # Node dependencies
```

### Ключевые особенности:

#### 10.1 TypeScript для Panorama

```typescript
// Типизированный Panorama код
interface HeroData {
    name: string;
    health: number;
    mana: number;
    abilities: AbilityData[];
}

class HeroPanel {
    private panel: Panel;
    private heroData: HeroData;
    
    constructor(panelId: string) {
        this.panel = $("#" + panelId) as Panel;
    }
    
    updateHeroInfo(data: HeroData): void {
        this.heroData = data;
        this.panel.SetDialogVariable("hero_name", data.name);
        this.panel.SetDialogVariableInt("hero_health", data.health);
        // Type-safe!
    }
}
```

#### 10.2 Excel Integration

```typescript
// Автоматическая генерация KV из Excel
import * as XLSX from 'xlsx';

function convertExcelToKV(excelPath: string): void {
    const workbook = XLSX.readFile(excelPath);
    const sheet = workbook.Sheets['Abilities'];
    
    const abilities = XLSX.utils.sheet_to_json(sheet);
    
    let kv = '"DOTAAbilities"\n{\n';
    
    for (const ability of abilities) {
        kv += `  "${ability.name}"\n  {\n`;
        kv += `    "AbilityDamage"  "${ability.damage}"\n`;
        kv += `    "AbilityCooldown"  "${ability.cooldown}"\n`;
        kv += `  }\n`;
    }
    
    kv += '}\n';
    
    fs.writeFileSync('npc_abilities_custom.txt', kv);
}
```

#### 10.3 Gulp Build System

```typescript
// gulpfile.ts
import * as gulp from 'gulp';

gulp.task('build:lua', () => {
    return gulp.src('game/**/*.lua')
        .pipe(/* validation */)
        .pipe(gulp.dest('dist/game'));
});

gulp.task('build:panorama', () => {
    return gulp.src('content/**/*.ts')
        .pipe(typescript())
        .pipe(gulp.dest('dist/content'));
});

gulp.task('watch', () => {
    gulp.watch('game/**/*.lua', ['build:lua']);
    gulp.watch('content/**/*.ts', ['build:panorama']);
});
```

### Преимущества x-template:
1. **Type Safety**: TypeScript предотвращает ошибки
2. **Hot Reload**: Автоматическая пересборка при изменениях
3. **Excel Integration**: Балансировка через таблицы
4. **Modern Tooling**: npm, gulp, TypeScript
5. **Shared Code**: Общий код между клиентом и сервером

---

## Сравнительная таблица всех проектов

| Проект | Lua файлов | Жанр | Сложность | UI | Особенности |
|--------|------------|------|-----------|----|----|
| **Dota IMBA** | 196 | Modified MOBA | Очень высокая | Полный | Generic talents, модульность |
| **Ashenvale Archers** | 13 | PvP Arena | Низкая | Минимальный | Data-driven, простота |
| **DotaCraft** | 257 | RTS | Очень высокая | Полный | Building Helper, 4 расы |
| **Dota Run** | 25 | Runner | Средняя | Средний | Динамические препятствия |
| **Icewrack** | 125 | Co-op RPG | Высокая | Полный | Квесты, боссы |
| **Reflex Dota** | ~20 | Mini-game | Низкая | Минимальный | Тренировка рефлексов |
| **SlideNinjaSlide** | 19 | Arcade/Puzzle | Низкая | Средний | Физика скольжения |
| **Trolls and Elves** | 17 | Team Survival | Средняя | Средний | Asymmetric gameplay |
| **Warchasers** | 39 | ARPG | Высокая | Средний | Affix system, loot |
| **x-template** | - | Template | - | TypeScript | Modern tooling |

---

## Общие лайфхаки из всех проектов

### 1. Архитектурные паттерны

**State Machines**:
```lua
-- Управление состояниями юнитов
unit.state = "idle"
unit:SetState("gathering")
```

**Callback Architecture**:
```lua
event:OnPreConstruction(validator)
event:OnBuildingPosChosen(handler)
```

**Observer Pattern**:
```lua
CustomGameEventManager:RegisterListener("event_name", handler)
```

### 2. Оптимизация

**Таймер pooling**:
```lua
-- Переиспользование таймеров
Timers:CreateTimer(function()
    return continue and 1.0 or nil
end)
```

**Entity caching**:
```lua
-- Кешируем поиск entities
local cached_units = FindUnitsInRadius(...)
for _, unit in pairs(cached_units) do
    -- work
end
```

### 3. UI/UX

**CustomNetTables для sync**:
```lua
-- Сервер
CustomNetTables:SetTableValue("game_state", "key", data)

// Клиент
CustomNetTables.SubscribeNetTableListener("game_state", callback)
```

**Dynamic UI generation**:
```javascript
for (var i = 0; i < items.length; i++) {
    var panel = $.CreatePanel("Panel", parent, "");
    // populate
}
```

### 4. Геймплей

**Procedural generation**:
```lua
-- Процедурная генерация контента
function GenerateLevel(seed)
    math.randomseed(seed)
    -- generate
end
```

**Difficulty scaling**:
```lua
-- Масштабирование сложности
function ScaleEnemyStats(enemy, difficulty)
    enemy:SetHealth(base_hp * (1 + difficulty * 0.5))
    enemy:SetDamage(base_dmg * (1 + difficulty * 0.3))
end
```

### 5. Фильтры

**Order Filter** - перехват команд:
```lua
GameMode:SetExecuteOrderFilter(handler, context)
```

**Damage Filter** - модификация урона:
```lua
GameMode:SetDamageFilter(handler, context)
```

**Gold/XP Filters** - контроль ресурсов:
```lua
GameMode:SetModifyGoldFilter(handler, context)
GameMode:SetModifyExperienceFilter(handler, context)
```

---

## Выводы

### Уровни сложности кастомок:

**Beginner** (13-25 файлов):
- Ashenvale Archers
- SlideNinjaSlide
- Reflex Dota

**Intermediate** (25-50 файлов):
- Dota Run
- Trolls and Elves
- Warchasers

**Advanced** (50-150 файлов):
- Icewrack

**Expert** (150+ файлов):
- Dota IMBA (196)
- DotaCraft (257)

### Ключевые уроки:

1. **Начинайте просто** - Ashenvale Archers показывает, что data-driven подход работает
2. **Используйте библиотеки** - Building Helper экономит месяцы разработки
3. **Модульность критична** - DotaCraft организован в 257 файлов без хаоса
4. **UI важен** - Хороший UI делает геймплей понятным (Dota Run, IMBA)
5. **TypeScript помогает** - x-template показывает современный подход
6. **Callbacks > Hardcode** - Гибкость через события и callbacks
7. **State machines** - Для управления сложным поведением
8. **Filters мощные** - Позволяют модифицировать базовое поведение Dota

### Рекомендации по выбору подхода:

**Для PvP/Arena**:
- Минимальный код (Ashenvale Archers)
- Data-driven abilities
- Простой UI

**Для RTS**:
- Building Helper обязателен (DotaCraft)
- Grid-based systems
- Production queues
- Resource management

**Для RPG/Co-op**:
- Quest system (Icewrack)
- Loot generation (Warchasers)
- Boss mechanics
- Progression system

**Для Mini-games**:
- Простая механика (Dota Run, Reflex)
- Quick rounds
- Leaderboards
- Replay value

---

## Итоговая документация

Все рассмотренные кастомки демонстрируют различные подходы к разработке:

- **IMBA**: Масштабная модификация базовой Dota
- **Ashenvale Archers**: Простота и эффективность
- **DotaCraft**: Воссоздание целого жанра (RTS)
- **Dota Run**: Динамичный arcade геймплей
- **Icewrack**: Глубокая RPG механика
- **Warchasers**: ARPG с loot system
- **x-template**: Современные инструменты разработки

Каждый проект предоставляет ценные уроки и готовые решения для повторного использования в ваших кастомках.
