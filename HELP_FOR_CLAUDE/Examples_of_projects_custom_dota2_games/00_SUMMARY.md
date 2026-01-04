# Сводный анализ Dota 2 кастомок - Итоговая документация

## Введение

Данная документация представляет собой **полный анализ 10 различных Dota 2 кастомок**, охватывающих широкий спектр жанров и уровней сложности. Документация предназначена для разработчиков кастомок Dota 2 и содержит:

- Подробное описание архитектуры каждого проекта
- Ключевые методы и системы
- Лайфхаки и best practices
- Примеры кода
- Сравнительный анализ

## Структура документации

### Основные отчеты:
1. **01_DOTA_IMBA_ANALYSIS.md** - Dota IMBA (196 Lua файлов)
2. **02_ASHENVALE_ARCHERS_ANALYSIS.md** - Ashenvale Archers (13 файлов)
3. **03_DOTACRAFT_ANALYSIS.md** - DotaCraft (257 файлов)
4. **04-10_REMAINING_PROJECTS_ANALYSIS.md** - Остальные 7 проектов

### Данный файл (00_SUMMARY.md):
- Краткий обзор всех проектов
- Сравнительные таблицы
- Рекомендации по выбору подхода
- Ключевые выводы

---

## Обзор проектов

### 1. Dota IMBA (★★★★★ Сложность)

**Жанр**: Modified MOBA  
**Lua файлов**: 196  
**Автор**: Firetoad и Hewdraw  

**Описание**: Популярнейшая кастомка, где все способности и предметы значительно усилены ("имбалансны").

**Ключевые особенности**:
- Generic Talents System (авто-обработка талантов)
- Модульная архитектура (hero/, items/, modifier/)
- Полностью кастомный Panorama UI
- Система hero selection
- Множественные режимы игры (All Pick, All Random, All Random Same Hero)

**Основные библиотеки**:
- Timers (1.05)
- Physics
- Projectiles
- Notifications
- Animations
- Attachments

**Для кого**:
- Изучение продвинутых техник
- Модификация базовой Dota
- Примеры модульной архитектуры

**Документация**: `01_DOTA_IMBA_ANALYSIS.md`

---

### 2. Ashenvale Archers (★☆☆☆☆ Сложность)

**Жанр**: PvP Arena  
**Lua файлов**: 13  
**Автор**: AgileTim  

**Описание**: Простая PvP-арена с луками, основанная на WC3 карте.

**Ключевые особенности**:
- **Data-driven подход** (все способности через KV)
- Минимальный код
- 5 лучников, 10 луков
- Линейная прогрессия XP
- Условие победы: 20 убийств

**Основные библиотеки**:
- Timers
- Physics
- Projectiles (базовые)

**Для кого**:
- Начинающие разработчики
- Изучение data-driven подхода
- Быстрые прототипы

**Документация**: `02_ASHENVALE_ARCHERS_ANALYSIS.md`

---

### 3. DotaCraft (★★★★★ Сложность)

**Жанр**: RTS  
**Lua файлов**: 257  
**Авторы**: MNoya и community  

**Описание**: Амбициозное воссоздание Warcraft III в Dota 2 с полноценной RTS-механикой.

**Ключевые особенности**:
- **Building Helper** (2713 строк кода!)
- Dual-resource economy (Gold + Lumber)
- 4 расы (Human, Orc, Undead, Night Elf)
- Production queues
- 24 героя
- Система апгрейдов
- Control groups (1-7)
- 9 карт

**Основные библиотеки**:
- Building Helper ★★★★★
- Gatherer (сбор ресурсов)
- Selection
- Playertables
- 10+ других

**Для кого**:
- Разработчики RTS-кастомок
- Изучение Building Helper
- Advanced архитектура

**Документация**: `03_DOTACRAFT_ANALYSIS.md`

---

### 4. Dota Run (★★☆☆☆ Сложность)

**Жанр**: Runner / Racing  
**Lua файлов**: 25  

**Описание**: Runner-игра с препятствиями в стиле Temple Run.

**Ключевые особенности**:
- Система чекпоинтов
- 7 типов динамических препятствий (Pudge, Earthshaker, Magnus...)
- Предметы для помехи соперникам
- Цель: 30 очков

**Для кого**:
- Arcade/mini-game разработчики
- Изучение AI-препятствий

**Документация**: `04-10_REMAINING_PROJECTS_ANALYSIS.md`

---

### 5. Icewrack (★★★★☆ Сложность)

**Жанр**: Co-op RPG  
**Lua файлов**: 125  

**Описание**: RPG-кастомка с квестами и кооперативным геймплеем.

**Ключевые особенности**:
- Система квестов
- Боссы с фазами
- Loot system
- Кастомная прокачка

**Для кого**:
- RPG разработчики
- Изучение quest systems

**Документация**: `04-10_REMAINING_PROJECTS_ANALYSIS.md`

---

### 6. reflexdota-source2 (★☆☆☆☆ Сложность)

**Жанр**: Mini-game  
**Lua файлов**: ~20  

**Описание**: Тренировка реакции и рефлексов.

**Ключевые особенности**:
- Dodge challenges
- Last-hit training
- Skill-shot challenges

**Для кого**:
- Создатели тренировочных мини-игр

**Документация**: `04-10_REMAINING_PROJECTS_ANALYSIS.md`

---

### 7. SlideNinjaSlide (★☆☆☆☆ Сложность)

**Жанр**: Arcade / Puzzle  
**Lua файлов**: 19  

**Описание**: Головоломка со скольжением по льду.

**Ключевые особенности**:
- Физика скольжения
- Puzzle elements
- Momentum-based gameplay

**Для кого**:
- Puzzle-game разработчики
- Изучение кастомной физики

**Документация**: `04-10_REMAINING_PROJECTS_ANALYSIS.md`

---

### 8. TrollsAndElves (★★☆☆☆ Сложность)

**Жанр**: Team Survival  
**Lua файлов**: 17  

**Описание**: Ассиметричная командная игра (Trolls vs Elves).

**Ключевые особенности**:
- Asymmetric gameplay
- Wave survival
- Building для эльфов

**Для кого**:
- Team-based game разработчики

**Документация**: `04-10_REMAINING_PROJECTS_ANALYSIS.md`

---

### 9. Warchasers (★★★☆☆ Сложность)

**Жанр**: ARPG / Dungeon Crawler  
**Lua файлов**: 39  

**Описание**: ARPG в стиле Diablo с системой лута.

**Ключевые особенности**:
- Affix system (случайные модификаторы)
- Procedural dungeons
- Loot generation
- Rarity tiers

**Для кого**:
- ARPG разработчики
- Изучение loot systems

**Документация**: `04-10_REMAINING_PROJECTS_ANALYSIS.md`

---

### 10. x-template (N/A Сложность)

**Назначение**: Boilerplate/Template  
**Технологии**: TypeScript + Lua  

**Описание**: Современный шаблон с TypeScript и build tools.

**Ключевые особенности**:
- TypeScript для Panorama
- Gulp build system
- Excel integration
- Hot reload

**Для кого**:
- Разработчики, использующие modern tooling

**Документация**: `04-10_REMAINING_PROJECTS_ANALYSIS.md`

---

## Сравнительная таблица

| Проект | Файлов | Жанр | Сложность | UI | Building | Resources | Heroes |
|--------|--------|------|-----------|----|----|----|----|
| **Dota IMBA** | 196 | Modified MOBA | ★★★★★ | Полный | - | - | 100+ |
| **Ashenvale Archers** | 13 | PvP Arena | ★☆☆☆☆ | Минимум | - | - | 5 |
| **DotaCraft** | 257 | RTS | ★★★★★ | Полный | ✓ | Gold+Lumber | 24 |
| **Dota Run** | 25 | Runner | ★★☆☆☆ | Средний | - | - | - |
| **Icewrack** | 125 | Co-op RPG | ★★★★☆ | Полный | - | - | Custom |
| **Reflex Dota** | 20 | Mini-game | ★☆☆☆☆ | Минимум | - | - | - |
| **SlideNinjaSlide** | 19 | Puzzle | ★☆☆☆☆ | Средний | - | - | - |
| **Trolls and Elves** | 17 | Survival | ★★☆☆☆ | Средний | Partial | - | - |
| **Warchasers** | 39 | ARPG | ★★★☆☆ | Средний | - | Loot | Custom |
| **x-template** | - | Template | - | TS | - | - | - |

---

## Ключевые паттерны и техники

### 1. Архитектурные паттерны

#### State Machines
**Используется в**: DotaCraft, Dota Run, Icewrack

```lua
-- Управление состояниями юнитов
unit.state = "idle"
unit:SetState("gathering")
```

#### Callback Architecture
**Используется в**: DotaCraft (Building Helper)

```lua
event:OnPreConstruction(validator)
event:OnBuildingPosChosen(handler)
event:OnConstructionStarted(handler)
```

#### Observer Pattern
**Используется в**: Все проекты

```lua
CustomGameEventManager:RegisterListener("event_name", handler)
GameEvents.Subscribe("event_name", handler)  -- JS
```

#### Data-Driven Design
**Используется в**: Ashenvale Archers

```
// Способности описаны в KV без Lua
"archer_arrow"
{
    "OnSpellStart" { "LinearProjectile" {...} }
    "OnProjectileHitUnit" { "Damage" {...} }
}
```

---

### 2. Системы управления

#### Timers (Универсальная библиотека)

**Версия**: 1.05  
**Используется в**: Все проекты

```lua
-- Простой таймер
Timers:CreateTimer(function()
    return 1.0  -- Повтор через 1 сек
end)

-- Отложенный таймер
Timers:CreateTimer(5, function()
    -- Выполнится через 5 сек
    return nil  -- Не повторять
end)

-- С настройками
Timers:CreateTimer({
    endTime = 10,
    useGameTime = false,
    callback = function() end
})
```

#### Building Helper (для RTS)

**Версия**: 1.2.9  
**Используется в**: DotaCraft  
**Размер**: 2713 строк

```lua
-- Инициализация
BuildingHelper:Init()

-- Создание сетки
BuildingHelper:InitializeGridNav()

-- Валидация позиции
BuildingHelper:CanBuildAt(position, size, playerID)

-- Блокировка сетки
BuildingHelper:BlockGridSquares(position, size)
```

#### Selection System

**Используется в**: DotaCraft

```lua
-- Control groups
Players:CreateControlGroup(playerID, group_number)
Players:SelectControlGroup(playerID, group_number)

-- Hero selection (F1-F3)
Players:SelectHeroByIndex(playerID, hero_index)
```

---

### 3. Системы ресурсов

#### Dual-Resource Economy (DotaCraft)

```lua
-- Gold + Lumber
Players:ModifyGold(playerID, amount)
Players:ModifyLumber(playerID, amount)

-- Проверки
Players:HasEnoughGold(playerID, cost)
Players:HasEnoughLumber(playerID, cost)
```

#### Loot System (Warchasers)

```lua
-- Генерация предмета с аффиксами
function GenerateRandomItem(level, rarity)
    local base_item = PickRandomBaseItem(level)
    local prefix = GetRandomPrefix()
    local suffix = GetRandomSuffix()
    
    ApplyPrefix(item, prefix)
    ApplySuffix(item, suffix)
    
    return item
end

-- Определение редкости
function DetermineRarity()
    local roll = RandomFloat(0, 1)
    if roll < 0.50 then return "common"      -- 50%
    elseif roll < 0.75 then return "uncommon" -- 25%
    elseif roll < 0.90 then return "rare"     -- 15%
    elseif roll < 0.98 then return "epic"     -- 8%
    else return "legendary"                   -- 2%
    end
end
```

---

### 4. UI Patterns

#### CustomNetTables (Server → Client)

```lua
-- Server (Lua)
CustomNetTables:SetTableValue("game_state", "resources", {
    gold = 500,
    lumber = 150
})

// Client (JavaScript)
CustomNetTables.SubscribeNetTableListener("game_state", function(table, key, data) {
    UpdateUI(data);
});
```

#### Dynamic UI Generation

```javascript
// Создание элементов на лету
for (var i = 0; i < items.length; i++) {
    var panel = $.CreatePanel("Panel", parent, "item_" + i);
    panel.AddClass("ItemSlot");
    // Настройка панели
}
```

#### Progress Bars

```javascript
// Прогресс строительства/производства
$("#ProgressBar").value = progress / total;  // 0.0 - 1.0
```

---

### 5. Gameplay Patterns

#### Checkpoint System (Dota Run)

```lua
function CreateCheckpoint(position, number)
    local checkpoint = CreateUnitByName("npc_checkpoint", position, ...)
    
    Timers:CreateTimer(function()
        local heroes = FindUnitsInRadius(...)
        for _, hero in pairs(heroes) do
            if hero.last_checkpoint == number - 1 then
                hero.last_checkpoint = number
                OnCheckpointPassed(hero)
            end
        end
        return 0.1
    end)
end
```

#### Production Queue (DotaCraft)

```lua
function TrainUnit(building, unit_name, train_time)
    table.insert(building.queue, {
        unit_name = unit_name,
        train_time = train_time,
        progress = 0
    })
    
    if #building.queue == 1 then
        StartTraining(building)
    end
end
```

#### Wave System (Trolls and Elves)

```lua
function SpawnWave(wave_number)
    local count = 5 + wave_number * 2
    local hp = 500 + wave_number * 100
    
    for i = 1, count do
        local enemy = CreateUnit(...)
        enemy:SetMaxHealth(hp)
        ApplyWaveAI(enemy)
    end
end
```

---

### 6. Фильтры

#### Execute Order Filter

```lua
function GameMode:FilterExecuteOrder(filterTable)
    local order_type = filterTable.order_type
    local target = EntIndexToHScript(filterTable.entindex_target)
    
    -- Right-click на ресурс = начать сбор
    if order_type == DOTA_UNIT_ORDER_MOVE_TO_TARGET then
        if IsGatherTarget(target) then
            StartGathering(unit, target)
            return false  -- Блокируем оригинальный приказ
        end
    end
    
    return true
end
```

#### Damage Filter

```lua
function GameMode:FilterDamage(filterTable)
    local attacker = EntIndexToHScript(filterTable.entindex_attacker_const)
    local victim = EntIndexToHScript(filterTable.entindex_victim_const)
    
    -- WC3-style damage types
    local attack_type = attacker:GetAttackType()
    local armor_type = victim:GetArmorType()
    
    filterTable.damage = filterTable.damage * GetDamageModifier(attack_type, armor_type)
    
    return true
end
```

---

## Рекомендации по выбору подхода

### Для начинающих (0-6 месяцев опыта)

**Рекомендуемые проекты для изучения**:
1. **Ashenvale Archers** - простота и data-driven подход
2. **Dota Run** - динамическое поведение и AI
3. **SlideNinjaSlide** - кастомная физика

**С чего начать**:
- Изучите Timers library
- Освойте data-driven abilities (KV-файлы)
- Попрактикуйтесь с CustomNetTables
- Создайте простой UI на Panorama

**Чего избегать**:
- Сложных архитектур
- Building systems (пока)
- Множества библиотек сразу

---

### Для промежуточных (6-12 месяцев опыта)

**Рекомендуемые проекты**:
1. **Dota Run** - как референс для arcade-игр
2. **Trolls and Elves** - asymmetric gameplay
3. **Warchasers** - loot systems

**Что изучать**:
- State machines
- Callback architecture
- Order/Damage filters
- Продвинутый Panorama UI

**Проекты для практики**:
- Tower Defense с волнами
- Mini-game collection
- Simple ARPG

---

### Для продвинутых (1+ год опыта)

**Рекомендуемые проекты**:
1. **DotaCraft** - масштабная RTS архитектура
2. **Dota IMBA** - модульность и generic systems
3. **Icewrack** - quest systems

**Что изучать**:
- Building Helper
- Complex resource management
- Multiple game modes
- TypeScript (x-template)

**Проекты для практики**:
- Полноценная RTS
- MMO-like кастомка
- Battle Royale

---

## Топ-10 лайфхаков из всех проектов

### 1. LinkLuaModifier в Precache

```lua
function Precache(context)
    LinkLuaModifier("modifier_name", "path/to/file.lua", LUA_MODIFIER_MOTION_NONE)
end
```
**Почему**: Модификаторы должны быть залинкованы ДО использования.

---

### 2. Dynamic_Wrap для событий

```lua
ListenToGameEvent('entity_killed', Dynamic_Wrap(GameMode, 'OnEntityKilled'), self)
```
**Почему**: Сохраняет контекст `self` при вызове.

---

### 3. Callback-based строительство

```lua
event:OnPreConstruction(function(pos)
    return IsValidPosition(pos)
end)

event:OnBuildingPosChosen(function(pos)
    -- Действия после подтверждения
end)
```
**Почему**: Гибкость и возможность расширения.

---

### 4. Именованные таймеры

```lua
Timers:CreateTimer("unique_name", {...})
-- Позже можно удалить
Timers:RemoveTimer("unique_name")
```
**Почему**: Возможность управления таймерами.

---

### 5. CustomNetTables для синхронизации

```lua
-- Server
CustomNetTables:SetTableValue("resources", tostring(playerID), {
    gold = gold,
    lumber = lumber
})

// Client - автоматическое обновление!
CustomNetTables.SubscribeNetTableListener("resources", UpdateUI)
```
**Почему**: Автоматическая синхронизация состояния.

---

### 6. $.CreatePanel для динамического UI

```javascript
for (var i = 0; i < count; i++) {
    var panel = $.CreatePanel("Panel", parent, "id_" + i);
    panel.AddClass("SlotClass");
    panel.SetPanelEvent("onactivate", function() { /* handler */ });
}
```
**Почему**: Гибкое создание UI элементов.

---

### 7. GetKeyValue для чтения KV

```lua
local building_name = ability:GetKeyValue("UnitName")
local gold_cost = ability:GetSpecialValueFor("gold_cost")
```
**Почему**: Доступ к данным из KV-файлов.

---

### 8. StartIntervalThink для модификаторов

```lua
function modifier:OnCreated()
    self:StartIntervalThink(1.0)  -- Каждую секунду
end

function modifier:OnIntervalThink()
    -- Выполняется автоматически
end
```
**Почему**: Лучше чем создавать отдельные таймеры.

---

### 9. FindUnitsInRadius с правильными флагами

```lua
local units = FindUnitsInRadius(
    teamNumber, position, nil, radius,
    DOTA_UNIT_TARGET_TEAM_ENEMY,
    DOTA_UNIT_TARGET_HERO + DOTA_UNIT_TARGET_BASIC,
    DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES,
    FIND_CLOSEST, false
)
```
**Почему**: Точный контроль над поиском.

---

### 10. Precache через KV

```
"precache"
{
    "particle_folder"   "particles/hero"
    "soundfile"         "soundevents/game_sounds.vsndevts"
    "model"             "models/hero.vmdl"
}
```
**Почему**: Автоматический прекеш при загрузке способности/юнита.

---

## Общие проблемы и решения

### Проблема: Модификатор не применяется

**Решение**: Проверьте `LinkLuaModifier` в Precache
```lua
LinkLuaModifier("modifier_name", "path.lua", LUA_MODIFIER_MOTION_NONE)
```

---

### Проблема: UI не обновляется

**Решение**: Используйте CustomNetTables для синхронизации
```lua
-- Server
CustomNetTables:SetTableValue("table_name", "key", data)

// Client
CustomNetTables.SubscribeNetTableListener("table_name", handler)
```

---

### Проблема: Таймеры не останавливаются

**Решение**: Возвращайте nil из callback
```lua
Timers:CreateTimer(function()
    if should_stop then
        return nil  -- Останавливает таймер
    end
    return 1.0  -- Продолжает
end)
```

---

### Проблема: Lag при FindUnitsInRadius

**Решение**: Кешируйте результаты и ограничивайте частоту
```lua
local last_search = 0
Timers:CreateTimer(function()
    local now = GameRules:GetGameTime()
    if now - last_search < 0.5 then
        return 0.1
    end
    
    cached_units = FindUnitsInRadius(...)
    last_search = now
    return 0.1
end)
```

---

### Проблема: Precache не работает

**Решение**: Используйте Async для dynamic content
```lua
PrecacheUnitByNameAsync("unit_name", function(unit)
    print("Unit precached!")
end)
```

---

## Полезные ресурсы

### Официальная документация:
- [Valve Developer Wiki](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools)
- [ModDota](https://moddota.com)

### Community ресурсы:
- [DotaCraft GitHub](https://github.com/MNoya/DotaCraft) - RTS reference
- [Dota IMBA GitHub](https://github.com/fcalife/dota_imba) - MOBA modification
- [Building Helper Wiki](https://github.com/MNoya/BuildingHelper/wiki)

### Библиотеки:
- **Timers** - Универсальная система таймеров
- **Building Helper** - RTS строительство
- **Physics** - Кастомная физика
- **Animations** - Управление анимациями
- **Notifications** - Система уведомлений

---

## Заключение

Данная документация охватывает **10 различных Dota 2 кастомок**, от простейших (13 файлов) до сложнейших (257 файлов). Каждый проект демонстрирует уникальный подход и предоставляет ценные уроки:

### Ключевые выводы:

1. **Начинайте просто** - Data-driven подход (Ashenvale Archers) позволяет создать игру с минимумом кода

2. **Используйте библиотеки** - Building Helper экономит месяцы работы для RTS

3. **Модульность критична** - DotaCraft показывает, как организовать 257 файлов без хаоса

4. **UI важен** - Хороший интерфейс делает сложную механику понятной

5. **TypeScript помогает** - Modern tooling (x-template) предотвращает ошибки

6. **Фильтры мощные** - Order/Damage фильтры модифицируют базовое поведение

7. **State machines** - Для управления сложным поведением юнитов

8. **Callbacks > Hardcode** - Гибкость через события

### Рекомендации:

**Новичкам**: Начните с Ashenvale Archers или Dota Run  
**Intermediate**: Изучите Warchasers или Trolls and Elves  
**Advanced**: Погрузитесь в DotaCraft или Dota IMBA  

### Дальнейшие шаги:

1. Выберите проект по уровню сложности
2. Изучите соответствующий отчет
3. Экспериментируйте с кодом
4. Создавайте свои модификации
5. Делитесь знаниями с сообществом

---

**Удачи в разработке ваших кастомок!**

*Документация создана: 2 января 2026*  
*Версия: 1.0*
