# Анализ кастомки: Ashenvale Archers

## 1. Описание кастомки

**Ashenvale Archers** - PvP кастомка, основанная на одноименной карте из Warcraft 3. Игроки выбирают одного из пяти лучников и сражаются друг с другом, используя различные луки с уникальными стрелами.

### Основные характеристики:
- **Жанр**: PvP Arena, Team Deathmatch
- **Режим**: Первая команда до 20 убийств побеждает
- **Игроки**: 2-10 (рекомендуется 2v2, 3v3, 4v4, 5v5)
- **Особенности**: Прицельная стрельба, уникальные типы луков и стрел

### Герои:
- Wind Archer (Ветряной лучник)
- Frost Archer (Морозный лучник)
- Moon Archer (Лунный лучник)
- Serpent Archer (Змеиный лучник)
- Bone Archer (Костяной лучник)

### Луки (10 типов):
- Bow of Explosive (Взрывной лук)
- Bow of Fell (Лук погибели)
- Bow of Flame (Огненный лук)
- Bow of Frost (Морозный лук)
- Bow of Longshot (Дальнобойный лук)
- Bow of Crystal Caves (Лук кристальных пещер)
- Bow of Pepper (Перечный лук)
- Bow of Pierce (Пронзающий лук)
- Bow of Watcher (Лук наблюдателя)
- Sparrowhawk Bow (Лук ястреба)

## 2. Архитектура проекта

### 2.1 Структура файлов

```
ashenvale_archers/
├── game/dota_addons/ashenvale_archers/
│   ├── addoninfo.txt
│   ├── scripts/vscripts/
│   │   ├── addon_game_mode.lua      # Точка входа
│   │   ├── gamemode.lua             # Основной геймплей
│   │   ├── events.lua               # Обработчики событий
│   │   ├── settings.lua             # Настройки игры
│   │   ├── internal/                # Внутренние системы
│   │   └── libraries/               # Библиотеки (timers, physics, projectiles)
│   ├── scripts/npc/
│   │   ├── npc_abilities_custom.txt # Кастомные способности
│   │   ├── npc_heroes_custom.txt    # Кастомные герои
│   │   └── npc_items_custom.txt     # Кастомные предметы
│   └── panorama/                    # UI (минимальный)
└── content/dota_addons/ashenvale_archers/
    ├── maps/
    │   └── 1v1_arrow_showdown.vmap  # Основная карта
    ├── particles/                   # Партиклы стрел (259 файлов)
    └── sounds/                      # Звуки
```

### 2.2 Основные файлы (Lua)

**Всего 13 Lua файлов** - проект очень компактный и простой:
- addon_game_mode.lua
- gamemode.lua
- events.lua
- settings.lua
- internal/gamemode.lua
- internal/events.lua
- internal/util.lua
- internal/eventtest.lua
- libraries/timers.lua
- libraries/physics.lua
- libraries/projectiles.lua
- examples/colliders.lua
- instantkillscript.lua

## 3. Ключевые методы и системы

### 3.1 Инициализация

**Файл**: `addon_game_mode.lua`

```lua
require('internal/util')
require('gamemode')

function Precache(context)
    -- Прекеш партиклов стрел
    PrecacheResource("particle", "particles/basicexplosivearrow.vpcf", context)
    PrecacheResource("particle", "particles/basicfastarrow.vpcf", context)
    PrecacheResource("particle", "particles/basicicearrow.vpcf", context)
    PrecacheResource("particle", "particles/basicfirearrow.vpcf", context)
    PrecacheResource("particle", "particles/basicwatcherarrow.vpcf", context)
    PrecacheResource("particle", "particles/basiclongarrow.vpcf", context)
    PrecacheResource("particle", "particles/basicfellarrow.vpcf", context)
    PrecacheResource("particle", "particles/basicpiercearrow.vpcf", context)
    
    -- Прекеш моделей
    PrecacheResource("Model", "models/items/beastmaster/hawk/fotw_eagle/fotw_eagle.vmdl", context)
end

function Activate()
    GameRules.GameMode = GameMode()
    GameRules.GameMode:InitGameMode()
end
```

**Лайфхак**: Все партиклы стрел прекешируются заранее, чтобы не было задержек при выстреле.

### 3.2 Настройки игры

**Файл**: `settings.lua`

```lua
-- Основные параметры
ENABLE_HERO_RESPAWN = true
UNIVERSAL_SHOP_MODE = true
ALLOW_SAME_HERO_SELECTION = true

-- Время выбора и старта
HERO_SELECTION_TIME = 30.0
PRE_GAME_TIME = 30.0
POST_GAME_TIME = 60.0

-- Экономика
GOLD_PER_TICK = 100
GOLD_TICK_TIME = 5

-- Условие победы
END_GAME_ON_KILLS = true
KILLS_TO_END_GAME_FOR_TEAM = 20  -- Первая команда до 20 убийств

-- Кастомные уровни
USE_CUSTOM_HERO_LEVELS = true
MAX_LEVEL = 12
USE_CUSTOM_XP_VALUES = true

-- Таблица опыта
XP_PER_LEVEL_TABLE = {}
for i=1,MAX_LEVEL do
    XP_PER_LEVEL_TABLE[i] = (i-1) * 100  -- Линейная прогрессия
end

-- Цвета команд
USE_CUSTOM_TEAM_COLORS = true
TEAM_COLORS = {}
TEAM_COLORS[DOTA_TEAM_GOODGUYS] = { 61, 210, 150 }   -- Бирюзовый
TEAM_COLORS[DOTA_TEAM_BADGUYS]  = { 243, 201, 9 }    -- Желтый

-- Настройки геймплея
ENABLE_TOWER_BACKDOOR_PROTECTION = false
BUYBACK_ENABLED = false
LOSE_GOLD_ON_DEATH = true
SHOW_KILLS_ON_TOPBAR = true
```

**Лайфхак**: Линейная прогрессия XP `(i-1) * 100` делает левелинг предсказуемым и быстрым для PvP-режима.

### 3.3 Инициализация геймплея

**Файл**: `gamemode.lua`

```lua
function GameMode:OnHeroInGame(hero)
    -- Стартовое золото
    hero:SetGold(500, false)
    
    -- Стартовый предмет (example)
    local item = CreateItem("item_example_item", hero, hero)
    hero:AddItem(item)
end

function GameMode:OnGameInProgress()
    DebugPrint("[BAREBONES] The game has officially begun")
    
    -- Пример периодического таймера
    Timers:CreateTimer(30, function()
        DebugPrint("This runs every 30 seconds")
        return 30.0
    end)
end
```

**Лайфхак**: `OnHeroInGame()` вызывается при первом спавне героя - идеальное место для инициализации стартовых предметов и статов.

## 4. Система стрельбы (Data-Driven)

### 4.1 Базовая способность стрелы

**Файл**: `npc_abilities_custom.txt`

```
"archer_arrow"
{
    "AbilityBehavior"       "DOTA_ABILITY_BEHAVIOR_DIRECTIONAL | 
                             DOTA_ABILITY_BEHAVIOR_POINT | 
                             DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING"
    "AbilityUnitDamageType" "DAMAGE_TYPE_PHYSICAL"
    "AbilityTextureName"    "mirana_arrow"
    "BaseClass"             "ability_datadriven"
    "AbilityCastAnimation"  "ACT_DOTA_ATTACK"
    
    "precache"
    {
        "particle_folder"   "particles\units\heroes\hero_mirana"
        "soundfile"         "soundevents/game_sounds_heroes/game_sounds_mirana.vsndevts"
    }
    
    // Характеристики
    "AbilityCastRange"      "3000"
    "AbilityCastPoint"      "0.55 0.44 0.33 0.22"  // Уменьшается с уровнем
    "AnimationPlaybackRate" "2"
    "AbilityCooldown"       "1"
    "AbilityManaCost"       "5 5 5 10"
    "AbilityDamage"         "500 600 700 1000"
    
    "OnSpellStart"
    {
        "LinearProjectile"
        {
            "EffectName"        "particles\units\heroes\hero_mirana\mirana_spell_arrow.vpcf"
            "MoveSpeed"         "%speed"
            "StartPosition"     "attach_attack1"
            "StartRadius"       "%arrow_width"
            "EndRadius"         "%arrow_width"
            "FixedDistance"     "%arrow_range"
            "TargetTeams"       "DOTA_UNIT_TARGET_TEAM_ENEMY"
            "TargetTypes"       "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC"
            "HasFrontalCone"    "0"
            "ProvidesVision"    "1"
            "VisionRadius"      "300"
        }
        "FireSound"
        {
            "EffectName"        "Catapult.Attack"
        }
    }
    
    "OnProjectileHitUnit"
    {
        "DeleteOnHit"       "1"
        
        "FireSound"
        {
            "EffectName"    "Catapult.Impact"
            "Target"        "TARGET"
        }
        
        "ApplyModifier"
        {
            "ModifierName"  "modifier_stunned"
            "Target"        "TARGET"
            "Duration"      "%stun_duration"
        }
        
        "Damage"
        {
            "Target"        "TARGET"
            "Type"          "DAMAGE_TYPE_PHYSICAL"
            "Damage"        "%AbilityDamage"
        }
    }
    
    "AbilitySpecial"
    {
        "01"
        {
            "var_type"      "FIELD_FLOAT"
            "speed"         "1000 1200 1400 1600"
        }
        "02"
        {
            "var_type"      "FIELD_INTEGER"
            "arrow_width"   "150"
        }
        "03"
        {
            "var_type"      "FIELD_INTEGER"
            "arrow_range"   "3000"
        }
        "04"
        {
            "var_type"      "FIELD_FLOAT"
            "stun_duration" "1.0 1.5 2.0 2.5"
        }
    }
}
```

**Ключевые особенности**:
1. **DOTA_ABILITY_BEHAVIOR_DIRECTIONAL** - способность направленная
2. **DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING** - нет задержки после каста
3. **LinearProjectile** - линейный снаряд
4. **StartPosition: "attach_attack1"** - стрела вылетает из точки атаки
5. **DeleteOnHit: "1"** - снаряд удаляется при попадании
6. **ProvidesVision** - снаряд дает видимость

**Лайфхак**: `AbilityCastPoint` уменьшается с уровнем (0.55 → 0.22), делая стрельбу быстрее на высоких уровнях.

### 4.2 Различные типы стрел

Каждый лук имеет свой тип стрелы с уникальным эффектом:

#### Взрывная стрела (Explosive Arrow)
```
"OnProjectileHitUnit"
{
    // Урон по цели
    "Damage"
    {
        "Target"    "TARGET"
        "Damage"    "%direct_damage"
    }
    
    // AoE урон
    "ActOnTargets"
    {
        "Target"
        {
            "Center"    "TARGET"
            "Radius"    "%explosion_radius"
            "Teams"     "DOTA_UNIT_TARGET_TEAM_ENEMY"
            "Types"     "DOTA_UNIT_TARGET_HERO"
        }
        
        "Action"
        {
            "Damage"
            {
                "Target"    "TARGET"
                "Damage"    "%aoe_damage"
            }
        }
    }
    
    // Партикл взрыва
    "FireEffect"
    {
        "EffectName"        "particles/basicexplosivearrow.vpcf"
        "EffectAttachType"  "follow_origin"
        "Target"            "TARGET"
    }
}
```

#### Ледяная стрела (Frost Arrow)
```
"OnProjectileHitUnit"
{
    "Damage"
    {
        "Target"    "TARGET"
        "Damage"    "%damage"
    }
    
    // Замедление
    "ApplyModifier"
    {
        "ModifierName"  "modifier_frost_slow"
        "Target"        "TARGET"
        "Duration"      "%slow_duration"
    }
    
    "FireEffect"
    {
        "EffectName"    "particles/basicicearrow.vpcf"
        "Target"        "TARGET"
    }
}
```

#### Пронзающая стрела (Pierce Arrow)
```
// Снаряд не удаляется при попадании
"OnProjectileHitUnit"
{
    "DeleteOnHit"   "0"  // Пролетает сквозь врагов!
    
    "Damage"
    {
        "Target"    "TARGET"
        "Damage"    "%damage"
    }
}
```

**Лайфхак**: `DeleteOnHit: "0"` позволяет снаряду пролетать сквозь несколько целей.

## 5. Система партиклов

### 5.1 Кастомные партиклы стрел

В проекте 259 файлов партиклов, включая:

**Базовые стрелы**:
- `basicexplosivearrow.vpcf` - Взрывная стрела
- `basicfastarrow.vpcf` - Быстрая стрела
- `basicicearrow.vpcf` - Ледяная стрела
- `basicfirearrow.vpcf` - Огненная стрела
- `basicwatcherarrow.vpcf` - Стрела наблюдателя
- `basiclongarrow.vpcf` - Дальнобойная стрела
- `basicfellarrow.vpcf` - Стрела погибели
- `basicpiercearrow.vpcf` - Пронзающая стрела

**Эффекты**:
- `basic_explosion/` - Взрывы (4 файла)
- `basic_projectile/` - Снаряды (5 файлов)
- `basic_trail/` - Следы (1 файл)
- `basic_ambient/` - Окружающие эффекты

**Лайфхак**: Партиклы организованы по папкам и имеют единую структуру имен `basic*arrow.vpcf`, что упрощает их использование в коде.

### 5.2 Структура партикла снаряда

```
particles/basic_projectile/
├── basic_projectile.vpcf           # Основной партикл
├── basic_projectile_trail.vpcf    # След
├── basic_projectile_launch.vpcf   # Эффект запуска
├── basic_projectile_explosion.vpcf         # Взрыв
└── basic_projectile_explosion_flash.vpcf   # Вспышка взрыва
```

## 6. Предметы и магазин

### 6.1 Кастомные предметы

**Типы предметов**:
- Различные луки (основное оружие)
- Arcane Boots 2 (улучшенная обувь)
- Entangling Net (опутывающая сеть)
- Greater Clarity/Salve (улучшенное восстановление)
- Slippers of Halcyon (тапочки)
- Emergency Blink (аварийный блинк)
- Decoy (приманка)

### 6.2 Пример предмета лука

```
"item_bow_explosive"
{
    "BaseClass"             "item_datadriven"
    "AbilityTextureName"    "custom/bow_explosive"
    
    "ItemCost"              "1000"
    "ItemShopTags"          "weapon"
    "ItemQuality"           "artifact"
    
    "AbilitySpecial"
    {
        "01"
        {
            "var_type"      "FIELD_INTEGER"
            "bonus_damage"  "50"
        }
    }
    
    "Modifiers"
    {
        "modifier_bow_explosive"
        {
            "Passive"       "1"
            "IsHidden"      "1"
            
            "Properties"
            {
                "MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE" "%bonus_damage"
            }
            
            "OnAttackLanded"
            {
                // Заменить обычную атаку на взрывную стрелу
                "RunScript"
                {
                    "ScriptFile"    "items/bow_explosive.lua"
                    "Function"      "OnAttack"
                }
            }
        }
    }
}
```

**Лайфхак**: Предметы-луки используют `OnAttackLanded` для запуска кастомной логики вместо обычной атаки.

## 7. Библиотеки

### 7.1 Timers Library

Стандартная библиотека таймеров от Barebones (идентична IMBA).

```lua
-- Простой таймер
Timers:CreateTimer(function()
    -- Код
    return 1.0  -- Повтор через 1 секунду
end)

-- Таймер с задержкой
Timers:CreateTimer(5, function()
    -- Выполнится через 5 секунд
    return nil  -- Не повторять
end)
```

### 7.2 Physics Library

Библиотека для физического движения юнитов.

```lua
-- Инициализация физики
Physics:Unit(unit)

-- Установка скорости
Physics:Unit(unit):SetVelocity(Vector(x, y, z))

-- Трение
Physics:Unit(unit):SetFriction(0.1)

-- Обработчик коллизий
Physics:Unit(unit):OnCollide(function(unit, normal)
    -- Обработка столкновения
end)
```

**Применение**: Для физики стрел и отталкивания юнитов.

### 7.3 Projectiles Library

Расширенная система снарядов (поверх стандартной).

```lua
-- Создание кастомного снаряда
ProjectileManager:CreateLinearProjectile({
    Ability = ability,
    EffectName = "particles/basicfirearrow.vpcf",
    vSpawnOrigin = startPos,
    fDistance = 3000,
    fStartRadius = 150,
    fEndRadius = 150,
    Source = caster,
    bDeleteOnHit = true,
    iUnitTargetTeam = DOTA_UNIT_TARGET_TEAM_ENEMY,
    iUnitTargetType = DOTA_UNIT_TARGET_HERO,
    vVelocity = direction * speed,
    bProvidesVision = true
})
```

## 8. Обработчики событий

**Файл**: `events.lua`

```lua
-- Отключение игрока
function GameMode:OnDisconnect(keys)
    local userid = keys.userid
    local reason = keys.reason
    -- Cleanup
end

-- Покупка предмета
function GameMode:OnItemPurchased(keys)
    local playerID = keys.PlayerID
    local itemName = keys.itemname
    local itemCost = keys.itemcost
    
    -- Можно добавить логику ограничений/бонусов
end

-- Использование способности
function GameMode:OnAbilityUsed(keys)
    local abilityname = keys.abilityname
    
    -- Статистика, достижения и т.д.
end

-- Убийство юнита
function GameMode:OnEntityKilled(keys)
    local killedUnit = EntIndexToHScript(keys.entindex_killed)
    local killerEntity = EntIndexToHScript(keys.entindex_attacker)
    
    if killedUnit:IsRealHero() then
        -- Подсчет убийств для условия победы
        local team = killerEntity:GetTeam()
        GameRules.teamKills[team] = GameRules.teamKills[team] + 1
        
        if GameRules.teamKills[team] >= KILLS_TO_END_GAME_FOR_TEAM then
            GameRules:SetGameWinner(team)
        end
    end
end
```

**Лайфхак**: `END_GAME_ON_KILLS` и подсчет убийств в `OnEntityKilled` реализует условие победы.

## 9. Архитектурные решения

### 9.1 Data-Driven подход

Вся логика способностей реализована через KV-файлы (data-driven), без Lua-скриптов для способностей.

**Преимущества**:
- Не нужно писать Lua для каждой способности
- Проще балансировать (менять числа в KV)
- Меньше багов
- Быстрее разработка

**Недостатки**:
- Ограниченная гибкость
- Сложная логика требует workaround

### 9.2 Минимальный UI

Проект использует минимальный кастомный UI:
- Custom loading screen (экран загрузки)
- Базовый HUD (почти стандартный)

Нет кастомного выбора героев - используется стандартный Dota 2 hero picker.

### 9.3 Простая структура

Проект намеренно прост:
- 13 Lua файлов
- Базовые библиотеки (timers, physics, projectiles)
- Все способности data-driven
- Минимум кастомного кода

**Философия**: Keep It Simple, Stupid (KISS)

## 10. Лайфхаки и best practices

### 10.1 Data-Driven способности

```
// Хороший паттерн: базовая способность + вариации
"archer_arrow"          // Базовая
"archer_arrow_fire"     // + огненный эффект
"archer_arrow_ice"      // + замедление
"archer_arrow_explosive" // + AoE урон
```

**Лайфхак**: Наследование через `"BaseClass"` позволяет переиспользовать код:

```
"archer_arrow_fire"
{
    "BaseClass"     "archer_arrow"  // Наследуем базовую способность
    
    // Переопределяем только нужные параметры
    "AbilitySpecial"
    {
        "05"
        {
            "var_type"          "FIELD_INTEGER"
            "burn_damage_per_tick" "50"
        }
    }
}
```

### 10.2 Прекеш всех вариантов

```lua
-- Прекешируем ВСЕ возможные стрелы сразу
PrecacheResource("particle", "particles/basicexplosivearrow.vpcf", context)
PrecacheResource("particle", "particles/basicfastarrow.vpcf", context)
PrecacheResource("particle", "particles/basicicearrow.vpcf", context)
-- ... и так далее
```

**Лайфхак**: В PvP-режиме важна мгновенная реакция, поэтому все партиклы грузятся заранее.

### 10.3 Условие победы

```lua
-- В settings.lua
END_GAME_ON_KILLS = true
KILLS_TO_END_GAME_FOR_TEAM = 20

-- В events.lua
function GameMode:OnEntityKilled(keys)
    if END_GAME_ON_KILLS then
        -- Подсчет и проверка
        if teamKills >= KILLS_TO_END_GAME_FOR_TEAM then
            GameRules:SetGameWinner(team)
        end
    end
end
```

### 10.4 Линейная прогрессия XP

```lua
XP_PER_LEVEL_TABLE = {}
for i=1,MAX_LEVEL do
    XP_PER_LEVEL_TABLE[i] = (i-1) * 100
end

-- Уровень 1:  0 XP
-- Уровень 2:  100 XP
-- Уровень 3:  200 XP
-- ...
-- Уровень 12: 1100 XP
```

**Лайфхак**: Линейная прогрессия быстрее стандартной экспоненциальной, что подходит для коротких PvP-матчей.

### 10.5 Быстрый кулдаун

```lua
"AbilityCooldown"   "1"  // 1 секунда между выстрелами
```

**Лайфхак**: Короткий кулдаун делает геймплей динамичным, но `AbilityCastPoint` (0.55-0.22) балансирует скорострельность.

### 10.6 Направленные способности

```
"AbilityBehavior"   "DOTA_ABILITY_BEHAVIOR_DIRECTIONAL | 
                     DOTA_ABILITY_BEHAVIOR_POINT"
```

**Лайфхак**: Комбинация DIRECTIONAL + POINT позволяет игроку целиться стрелой как в Mirana Arrow.

### 10.7 Видимость снарядов

```
"LinearProjectile"
{
    "ProvidesVision"    "1"
    "VisionRadius"      "300"
}
```

**Лайфхак**: Снаряды дают видимость, что позволяет игрокам "разведывать" территорию стрелами.

## 11. Известные баги (из README)

- Можно искать предметы, которые игра не должна разрешать
- Партиклы стрел не удаляются после попадания (визуальный баг)
- Net item не работает
- Нет внутриигровой музыки

**Совет**: Эти баги указывают на недоделанные фичи, что типично для ранних версий кастомок.

## 12. Статистика проекта

- **Lua файлов**: 13 (очень компактный проект)
- **Библиотек**: 3 (timers, physics, projectiles)
- **Партиклов**: 259 (большинство - вариации стрел)
- **Героев**: 5 лучников
- **Луков**: 10 типов
- **Карт**: 1 (1v1_arrow_showdown.vmap)
- **UI**: Минимальный (только loading screen)

## 13. Сравнение с IMBA

| Аспект | Ashenvale Archers | Dota IMBA |
|--------|-------------------|-----------|
| **Размер** | 13 Lua файлов | 196 Lua файлов |
| **Сложность** | Простая | Очень сложная |
| **Подход** | Data-driven | Lua-scripting |
| **UI** | Минимальный | Полностью кастомный |
| **Герои** | 5 | 100+ |
| **Жанр** | PvP Arena | Modified Dota |
| **Библиотеки** | 3 базовые | 10+ расширенных |

## 14. Выводы

**Ashenvale Archers** - отличный пример **простой и эффективной** кастомки:

### Сильные стороны:
1. **Минималистичный код** - легко понять и модифицировать
2. **Data-driven подход** - не нужно писать Lua для способностей
3. **Базовые библиотеки** - timers, physics, projectiles
4. **Четкий геймплей** - PvP с ясными правилами
5. **Быстрая разработка** - простая структура

### Применение:
- Отличная база для изучения data-driven abilities
- Пример простого PvP-режима
- Показывает как работать с projectiles
- Хороший стартовый шаблон для новых кастомок

### Кому подходит:
- Начинающим разработчикам кастомок
- Проектам с ограниченным scope
- Быстрым прототипам
- PvP/Arena режимам

**Ключевой урок**: Не всегда нужна сложная архитектура - иногда простое решение работает лучше.
