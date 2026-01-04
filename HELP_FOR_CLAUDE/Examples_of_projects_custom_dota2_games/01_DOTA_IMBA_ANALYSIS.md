# Анализ кастомки: Dota IMBA

## 1. Описание кастомки

**Dota IMBA** (дословно: "Imbalanced" - "несбалансированная") - одна из самых популярных и масштабных кастомок для Dota 2, где все герои, способности и предметы значительно усилены и "имбалансны". Проект open-source, разрабатывается сообществом.

### Основные характеристики:
- **Версия**: 7.01.56
- **Авторы**: Firetoad и Hewdraw
- **Режимы**: imba_standard (10 игроков), imba_10v10 (20 игроков), imba_custom_10v10 (20 игроков)
- **Особенности**: Модифицированные герои, кастомные предметы, новые герои, режимы All Pick/All Random

## 2. Архитектура и структура проекта

### 2.1 Структура файлов

```
dota_imba-developer/
├── game/dota_addons/dota_imba/
│   ├── scripts/vscripts/          # Lua скрипты (196 файлов)
│   ├── panorama/                   # UI интерфейс
│   ├── resource/                   # Локализация и ресурсы
│   ├── models/                     # 3D модели
│   └── addoninfo.txt              # Основная конфигурация
└── content/dota_addons/dota_imba/
    ├── panorama/                   # Исходники UI
    ├── particles/                  # Эффекты (1312+ файлов)
    ├── materials/                  # Текстуры и материалы
    ├── sounds/                     # Звуки
    └── maps/                       # Карты

```

### 2.2 Основные модули (Lua)

```
scripts/vscripts/
├── addon_game_mode.lua           # Точка входа, прекеш ресурсов
├── addon_init.lua                # Инициализация клиента
├── imba.lua                      # Основной модуль IMBA
├── hero_selection.lua            # Система выбора героев
├── events.lua                    # Обработчики событий
├── internal/                     # Внутренние системы
│   ├── gamemode.lua             # Инициализация режима игры
│   ├── constants.lua            # Константы
│   ├── util.lua                 # Утилиты
│   ├── funcs.lua                # Вспомогательные функции
│   └── events.lua               # События
├── libraries/                    # Библиотеки
│   ├── timers.lua               # Система таймеров
│   ├── animations.lua           # Анимации
│   ├── projectiles.lua          # Снаряды
│   ├── physics.lua              # Физика
│   ├── notifications.lua        # Уведомления
│   ├── attachments.lua          # Аттачменты
│   └── ...
├── hero/                        # Lua код героев (73 файла)
├── items/                       # Lua код предметов (65 файлов)
└── modifier/                    # Lua модификаторы
```

## 3. Ключевые методы и системы

### 3.1 Инициализация игрового режима

**Файл**: `addon_game_mode.lua`

#### Функция Precache()
Прекеширование всех ресурсов перед загрузкой игры:

```lua
function Precache(context)
    -- Линковка Lua модификаторов
    LinkLuaModifier("modifier_imba_speed_limit_break", 
                    "modifier/modifier_imba_speed_limit_break.lua", 
                    LUA_MODIFIER_MOTION_NONE)
    
    -- Прекеш партиклов
    PrecacheResource("particle", "particles/...", context)
    
    -- Прекеш звуков
    PrecacheResource("soundfile", "soundevents/...", context)
    
    -- Прекеш моделей
    PrecacheResource("model_folder", "models/...", context)
end
```

**Лайфхак**: Все модификаторы должны быть залинкованы через `LinkLuaModifier()` ДО того, как они будут использованы в игре. Это делается в Precache для гарантии.

#### Функция Activate()
Активация игрового режима:

```lua
function Activate()
    GameRules.GameMode = GameMode()
    GameRules.GameMode:InitGameMode()
end
```

### 3.2 Настройка правил игры

**Файл**: `internal/gamemode.lua`

```lua
function GameMode:_InitGameMode()
    -- Установка базовых правил
    GameRules:SetHeroRespawnEnabled(ENABLE_HERO_RESPAWN)
    GameRules:SetUseUniversalShopMode(UNIVERSAL_SHOP_MODE)
    GameRules:SetSameHeroSelectionEnabled(true)
    GameRules:SetHeroSelectionTime(HERO_SELECTION_TIME)
    GameRules:SetPreGameTime(PRE_GAME_TIME)
    GameRules:SetTreeRegrowTime(TREE_REGROW_TIME)
    GameRules:SetGoldPerTick(GOLD_PER_TICK)
    GameRules:SetRuneSpawnTime(RUNE_SPAWN_TIME)
    
    -- Регистрация кастомных событий
    CustomGameEventManager:RegisterListener("set_game_mode", OnSetGameMode)
    
    -- Настройка команд
    for team, number in pairs(CUSTOM_TEAM_PLAYER_COUNT) do
        GameRules:SetCustomGameTeamMaxPlayers(team, number)
    end
    
    -- Подписка на игровые события
    ListenToGameEvent('dota_player_gained_level', 
                       Dynamic_Wrap(GameMode, 'OnPlayerLevelUp'), self)
    ListenToGameEvent('entity_killed', 
                       Dynamic_Wrap(GameMode, 'OnEntityKilled'), self)
    ListenToGameEvent('dota_item_purchased', 
                       Dynamic_Wrap(GameMode, 'OnItemPurchased'), self)
    -- ... и еще ~30 событий
end
```

**Лайфхак**: `Dynamic_Wrap()` используется для сохранения контекста `self` при вызове обработчиков событий.

### 3.3 Система таймеров (Timers)

**Файл**: `libraries/timers.lua` (версия 1.05)

Мощная библиотека для работы с таймерами:

```lua
-- Простой таймер с повтором каждую секунду
Timers:CreateTimer(function()
    print("Выполняется каждую секунду")
    return 1.0  -- Вернуть число = повторить через N секунд
end)

-- Таймер с задержкой
Timers:CreateTimer(5, function()
    print("Выполнится через 5 секунд, затем каждую секунду")
    return 1.0
end)

-- Таймер с настройками
Timers:CreateTimer({
    endTime = 10,
    callback = function()
        print("Выполнится один раз через 10 секунд")
    end
})

-- Таймер, игнорирующий паузы
Timers:CreateTimer({
    useGameTime = false,
    endTime = 10,
    callback = function()
        print("Выполнится через 10 реальных секунд")
    end
})

-- Именованный таймер (можно удалить по имени)
Timers:CreateTimer("unique_timer", {
    endTime = 5,
    callback = function()
        return 1.0  -- Повторять
    end
})
```

**Лайфхаки**:
- Возврат числа из callback = повтор через N секунд
- Возврат nil или false = таймер удаляется
- `useGameTime = false` для таймеров, не зависящих от игровых пауз
- Именованные таймеры можно удалить через `Timers:RemoveTimer(name)`

### 3.4 Система выбора героев (Hero Selection)

**Серверная часть**: `hero_selection.lua`  
**Клиентская часть**: `panorama/scripts/custom_game/hero_selection.js`

#### Серверная часть (Lua)

```lua
HeroSelection = {}

-- Предзагрузка списка героев
function HeroSelection:HeroListPreLoad()
    -- Загрузка KV файлов
    NPC_HEROES = LoadKeyValues("scripts/npc/npc_heroes.txt")
    NPC_HEROES_CUSTOM = LoadKeyValues("scripts/npc/npc_heroes_custom.txt")
    
    -- Категоризация героев
    HeroSelection.strength_heroes = {}
    HeroSelection.agility_heroes = {}
    HeroSelection.intellect_heroes = {}
    HeroSelection.imba_heroes = {}
    HeroSelection.vanilla_heroes = {}
    HeroSelection.disabled_heroes = {}
    
    -- Парсинг героев
    for hero, attributes in pairs(NPC_HEROES_CUSTOM) do
        hero = string.gsub(hero, "imba", "dota")
        
        if GetKeyValueByHeroName(hero, "IsDisabled") == 1 then
            table.insert(HeroSelection.disabled_heroes, hero)
        end
        
        if GetKeyValueByHeroName(hero, "IsImba") == 1 then
            table.insert(HeroSelection.imba_heroes, hero)
        end
    end
end

-- Отправка списка героев клиенту
function HeroSelection:HeroList()
    CustomNetTables:SetTableValue("hero_selection", "strength", 
                                   HeroSelection.strength_heroes)
    CustomNetTables:SetTableValue("hero_selection", "agility", 
                                   HeroSelection.agility_heroes)
    CustomNetTables:SetTableValue("hero_selection", "intellect", 
                                   HeroSelection.intellect_heroes)
end
```

#### Клиентская часть (JavaScript/Panorama)

```javascript
// Обработчик выбора героя
function OnHeroClicked(heroName) {
    if (selectedHero !== heroName) {
        selectedHero = heroName;
        
        // Отправка на сервер
        GameEvents.SendCustomGameEventToServer("hero_selected", {
            hero: heroName,
            PlayerID: Players.GetLocalPlayer()
        });
        
        // Обновление UI
        UpdateHeroPreview(heroName);
    }
}

// Загрузка информации о способностях героя
function UpdateHeroPreview(heroName) {
    var abilities = GetHeroAbilities(heroName);
    
    // Скрываем служебные способности
    var hiddenAbilities = [
        "generic_hidden",
        "invoker_cold_snap",
        // ...
    ];
    
    abilities = abilities.filter(a => !hiddenAbilities.includes(a));
    
    // Отображаем способности в UI
    for (var i = 0; i < abilities.length; i++) {
        abilityPanels[i].SetAbilityName(abilities[i]);
    }
}
```

**Лайфхаки**:
- `CustomNetTables` используется для передачи данных сервер→клиент
- `GameEvents.SendCustomGameEventToServer()` для клиент→сервер
- Фильтрация "скрытых" способностей (sub-abilities) для корректного отображения

### 3.5 Система кастомных предметов (Items)

Пример: **Divine Rapier** (`items/item_rapier.lua`)

```lua
-- Базовый класс для рапир
rapier_base_class = class({})

function rapier_base_class:OnOwnerDied(params)
    local hOwner = self:GetOwner()
    
    -- Не дропать, если реинкарнация
    if hOwner.IsReincarnating and hOwner:IsReincarnating() then
        return nil
    end
    
    -- Дроп рапиры при смерти
    hOwner:DropRapier(self, true)
end

function rapier_base_class:IsRapier()
    return true
end

-- Divine Rapier
item_imba_rapier = ShallowCopy(rapier_base_class)

function item_imba_rapier:GetIntrinsicModifierName()
    return "modifier_imba_divine_rapier"
end

-- Модификатор рапиры
modifier_imba_divine_rapier = class({})

function modifier_imba_divine_rapier:DeclareFunctions()
    return {
        MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE
    }
end

function modifier_imba_divine_rapier:OnCreated()
    local item = self:GetAbility()
    if item and not self:GetParent():IsCourier() 
           and not self:GetParent():IsIllusion() then
        self.bonus_damage = item:GetSpecialValueFor("bonus_damage")
    else
        self.bonus_damage = 0
    end
end

function modifier_imba_divine_rapier:GetModifierPreAttack_BonusDamage()
    return self.bonus_damage
end

function modifier_imba_divine_rapier:GetAttributes()
    return MODIFIER_ATTRIBUTE_MULTIPLE  -- Можно иметь несколько рапир
end

function modifier_imba_divine_rapier:RemoveOnDeath()
    return false  -- Модификатор не удаляется при смерти
end
```

**Лайфхаки**:
- `ShallowCopy()` для создания копий базовых классов
- `GetIntrinsicModifierName()` - модификатор автоматически применяется при наличии предмета
- `MODIFIER_ATTRIBUTE_MULTIPLE` позволяет стакать несколько копий предмета
- Проверка `IsIllusion()` и `IsCourier()` для корректной работы с иллюзиями

### 3.6 Generic Talents System

**Файл**: `modifier/generic_talents/modifier_imba_generic_talents_handler.lua`

Система обобщенных талантов для автоматической обработки базовых бонусов:

```lua
-- Handler модификатор, который создает дочерние модификаторы
modifier_imba_generic_talents_handler = class({})

function modifier_imba_generic_talents_handler:OnCreated()
    if IsServer() then
        local parent = self:GetParent()
        
        -- Проверяем все таланты героя
        for i = 0, 23 do
            local ability = parent:GetAbilityByIndex(i)
            if ability and ability:GetLevel() > 0 then
                self:CheckTalent(ability)
            end
        end
    end
end

function modifier_imba_generic_talents_handler:CheckTalent(ability)
    local talent_name = ability:GetName()
    
    -- Парсим название таланта
    if string.find(talent_name, "special_bonus_damage_") then
        -- Создаем модификатор для бонуса к урону
        self:GetParent():AddNewModifier(
            self:GetParent(), 
            ability, 
            "modifier_imba_generic_talent_damage", 
            {}
        )
    elseif string.find(talent_name, "special_bonus_hp_") then
        -- Бонус к HP
        self:GetParent():AddNewModifier(
            self:GetParent(), 
            ability, 
            "modifier_imba_generic_talent_hp", 
            {}
        )
    end
    -- ... и так далее для каждого типа таланта
end

-- Модификатор для бонуса к урону
modifier_imba_generic_talent_damage = class({})

function modifier_imba_generic_talent_damage:DeclareFunctions()
    return {MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE}
end

function modifier_imba_generic_talent_damage:GetModifierPreAttack_BonusDamage()
    local ability = self:GetAbility()
    if ability then
        -- Парсим значение из названия таланта
        local value = tonumber(string.match(ability:GetName(), "%d+"))
        return value or 0
    end
    return 0
end
```

**Лайфхак**: Автоматический парсинг названий талантов для применения эффектов без написания индивидуального кода для каждого таланта.

## 4. Panorama UI

### 4.1 Структура UI

```
panorama/
├── layout/                   # XML разметка
│   └── custom_game/
│       ├── hero_selection.xml        # Экран выбора героев
│       ├── hud_main.xml              # Основной HUD
│       ├── talent_window.xml         # Окно талантов
│       ├── team_select.xml           # Выбор команды
│       └── custom_ui_manifest.xml    # Манифест UI
├── scripts/                  # JavaScript
│   └── custom_game/
│       ├── hero_selection.js
│       ├── talent_window.js
│       └── game_mode.js
└── styles/                   # CSS стили
    └── custom_game/
        ├── hero_selection.css
        └── talent_window.css
```

### 4.2 Custom UI Manifest

**Файл**: `layout/custom_game/custom_ui_manifest.xml`

```xml
<root>
    <Panel>
        <!-- Выбор героя -->
        <CustomUIElement type="Hud" 
                         layoutfile="file://{resources}/layout/custom_game/hero_selection.xml" 
                         visible="false" />
        
        <!-- Главный HUD -->
        <CustomUIElement type="Hud" 
                         layoutfile="file://{resources}/layout/custom_game/hud_main.xml" />
        
        <!-- Окно талантов -->
        <CustomUIElement type="Hud" 
                         layoutfile="file://{resources}/layout/custom_game/talent_window.xml" />
        
        <!-- Выбор команды -->
        <CustomUIElement type="GameSetup" 
                         layoutfile="file://{resources}/layout/custom_game/team_select.xml" />
    </Panel>
</root>
```

### 4.3 Пример Talent Window UI

**Layout** (`talent_window.xml`):

```xml
<root>
    <styles>
        <include src="file://{resources}/styles/custom_game/talent_window.css" />
    </styles>
    <scripts>
        <include src="file://{resources}/scripts/custom_game/talent_window.js" />
    </scripts>
    
    <Panel id="TalentWindow" class="Hidden">
        <Panel id="TalentHeader">
            <Label id="TalentTitle" text="#talent_window_title" />
        </Panel>
        
        <Panel id="TalentRows">
            <!-- Строки талантов генерируются динамически -->
        </Panel>
        
        <Button id="TalentCloseBtn" onactivate="CloseTalentWindow()">
            <Label text="#close" />
        </Button>
    </Panel>
</root>
```

**Script** (`talent_window.js`):

```javascript
var talentWindow = $("#TalentWindow");

function ShowTalentWindow() {
    talentWindow.RemoveClass("Hidden");
    UpdateTalentTree();
}

function CloseTalentWindow() {
    talentWindow.AddClass("Hidden");
}

function UpdateTalentTree() {
    var hero = Players.GetPlayerHeroEntityIndex(Players.GetLocalPlayer());
    var level = Entities.GetLevel(hero);
    
    // Очищаем предыдущие таланты
    $("#TalentRows").RemoveAndDeleteChildren();
    
    // Создаем строки талантов
    for (var i = 10; i <= level && i <= 25; i += 5) {
        CreateTalentRow(hero, i);
    }
}

function CreateTalentRow(hero, level) {
    var row = $.CreatePanel("Panel", $("#TalentRows"), "TalentRow_" + level);
    row.AddClass("TalentRow");
    
    // Левый талант
    var leftTalent = CreateTalentButton(hero, level, "left");
    row.AddChild(leftTalent);
    
    // Правый талант
    var rightTalent = CreateTalentButton(hero, level, "right");
    row.AddChild(rightTalent);
}

function CreateTalentButton(hero, level, side) {
    var button = $.CreatePanel("Button", null, "");
    button.AddClass("TalentButton");
    
    var abilityIndex = GetTalentIndex(level, side);
    var ability = Entities.GetAbility(hero, abilityIndex);
    
    if (ability) {
        var abilityName = Abilities.GetAbilityName(ability);
        var abilityLevel = Abilities.GetLevel(ability);
        
        button.SetDialogVariable("talent_name", $.Localize(abilityName));
        
        if (abilityLevel > 0) {
            button.AddClass("Skilled");
        }
        
        button.SetPanelEvent("onactivate", function() {
            SkillTalent(hero, abilityIndex);
        });
    }
    
    return button;
}

function SkillTalent(hero, abilityIndex) {
    GameEvents.SendCustomGameEventToServer("skill_talent", {
        hero: hero,
        abilityIndex: abilityIndex
    });
}

// Подписка на события обновления
GameEvents.Subscribe("talent_learned", UpdateTalentTree);
```

**Лайфхаки Panorama UI**:
- `$.CreatePanel()` для динамического создания элементов
- `AddClass()/RemoveClass()` для управления стилями
- `SetDialogVariable()` для локализации с переменными
- `GameEvents.Subscribe()` для подписки на серверные события
- `Players.GetLocalPlayer()` для получения локального игрока
- `Entities.GetLevel()`, `Entities.GetAbility()` для доступа к игровым данным

### 4.4 Custom Net Tables

Использование для синхронизации данных сервер→клиент:

**Сервер** (Lua):
```lua
-- Установка значения
CustomNetTables:SetTableValue("game_options", "frantic_mode", {true})
CustomNetTables:SetTableValue("game_options", "bounty_multiplier", {150})

-- Можно передавать сложные структуры
CustomNetTables:SetTableValue("hero_selection", "strength", {
    "npc_dota_hero_axe",
    "npc_dota_hero_centaur",
    "npc_dota_hero_pudge"
})
```

**Клиент** (JavaScript):
```javascript
// Чтение значения
var franticMode = CustomNetTables.GetTableValue("game_options", "frantic_mode");
if (franticMode && franticMode[0]) {
    $.Msg("Frantic mode is ON!");
}

// Подписка на изменения
CustomNetTables.SubscribeNetTableListener("game_options", function(table, key, data) {
    $.Msg("Game option changed: " + key);
    UpdateUI();
});
```

## 5. Системы и библиотеки

### 5.1 Physics Library

**Файл**: `libraries/physics.lua`

Система для физического движения юнитов:

```lua
Physics:Unit(unit)  -- Инициализация физики для юнита

-- Толчок в направлении
Physics:Unit(unit):SetVelocity(Vector(x, y, 0))

-- Трение
Physics:Unit(unit):SetFriction(0.1)

-- Гравитация
Physics:Unit(unit):SetGravity(Vector(0, 0, -1000))

-- Обработчик коллизий
Physics:Unit(unit):OnCollide(function(unit, normal)
    -- unit столкнулся с чем-то
end)
```

### 5.2 Projectiles Library

**Файл**: `libraries/projectiles.lua`

Расширенная система снарядов:

```lua
ProjectileManager:CreateLinearProjectile({
    Ability = ability,
    EffectName = "particles/...",
    vSpawnOrigin = startPos,
    fDistance = distance,
    fStartRadius = radius,
    fEndRadius = radius,
    Source = caster,
    bHasFrontalCone = false,
    bReplaceExisting = false,
    iUnitTargetTeam = DOTA_UNIT_TARGET_TEAM_ENEMY,
    iUnitTargetFlags = DOTA_UNIT_TARGET_FLAG_NONE,
    iUnitTargetType = DOTA_UNIT_TARGET_HERO + DOTA_UNIT_TARGET_BASIC,
    fExpireTime = GameRules:GetGameTime() + 10,
    bDeleteOnHit = true,
    vVelocity = direction * speed,
    bProvidesVision = true,
    iVisionRadius = 300,
    iVisionTeamNumber = caster:GetTeamNumber()
})
```

### 5.3 Notifications Library

**Файл**: `libraries/notifications.lua`

Система уведомлений:

```lua
-- Уведомление всем игрокам
Notifications:TopToAll({
    text = "Game is starting!",
    duration = 3.0,
    style = {color = "red"}
})

-- Уведомление конкретному игроку
Notifications:Top(playerID, {
    text = "You killed Roshan!",
    duration = 5.0,
    style = {color = "gold"}
})

-- Центральное уведомление
Notifications:CenterToAll({
    text = "MEGA KILL!",
    duration = 2.0
})
```

### 5.4 Attachments Library

**Файл**: `libraries/attachments.lua`

Система для прикрепления эффектов к юнитам:

```lua
-- Создание attachment
local particleID = ParticleManager:CreateParticle(
    "particles/effect.vpcf", 
    PATTACH_ABSORIGIN_FOLLOW, 
    unit
)

-- Привязка к костям модели
ParticleManager:SetParticleControlEnt(
    particleID,
    0,
    unit,
    PATTACH_POINT_FOLLOW,
    "attach_hitloc",  -- Точка привязки
    unit:GetAbsOrigin(),
    true
)
```

### 5.5 Animations Library

**Файл**: `libraries/animations.lua`

Система управления анимациями:

```lua
-- Проиграть анимацию
StartAnimation(unit, {
    duration = 1.0,
    activity = ACT_DOTA_CAST_ABILITY_1,
    rate = 1.0
})

-- Перевод анимации
AnimationTranslate:SetAnimation(unit, "run")
AnimationTranslate:ClearAnimation(unit)
```

## 6. Кастомный выбор героев

### 6.1 Принцип работы

1. **Загрузка списка героев** (сервер)
   - Парсинг `npc_heroes.txt` и `npc_heroes_custom.txt`
   - Категоризация по атрибутам (STR/AGI/INT)
   - Отправка через CustomNetTables

2. **Отображение UI** (клиент)
   - Рендеринг списка героев по категориям
   - Отображение портретов и способностей
   - Визуализация доступности/блокировки героев

3. **Выбор героя** (клиент→сервер)
   - Отправка события через GameEvents
   - Блокировка героя для других игроков
   - Синхронизация выбора

4. **Спавн героя** (сервер)
   - Создание героя для игрока
   - Применение начальных модификаторов
   - Телепорт на фонтан

### 6.2 Режимы выбора

```lua
-- All Pick (стандартный выбор)
if IMBA_PICK_MODE_ALL_PICK then
    -- Игроки выбирают любого героя
    CustomNetTables:SetTableValue("game_options", "all_pick", {true})
end

-- All Random (случайный выбор)
if IMBA_PICK_MODE_ALL_RANDOM then
    for playerID = 0, DOTA_MAX_TEAM_PLAYERS-1 do
        if PlayerResource:IsValidPlayerID(playerID) then
            local randomHero = HeroSelection:GetRandomHero()
            HeroSelection:SelectHero(playerID, randomHero)
        end
    end
end

-- All Random Same Hero (все играют одним героем)
if IMBA_PICK_MODE_ALL_RANDOM_SAME_HERO then
    local randomHero = HeroSelection:GetRandomHero()
    for playerID = 0, DOTA_MAX_TEAM_PLAYERS-1 do
        if PlayerResource:IsValidPlayerID(playerID) then
            HeroSelection:SelectHero(playerID, randomHero)
        end
    end
end
```

## 7. Лайфхаки и best practices

### 7.1 Общие практики

1. **Модульность**: Каждый герой/предмет/библиотека в отдельном файле
2. **Базовые классы**: Использование `class({})` и наследования через `ShallowCopy()`
3. **LinkLuaModifier**: Всегда линковать модификаторы в Precache
4. **Precache ресурсов**: Прекешировать все партиклы, звуки, модели
5. **Dynamic_Wrap**: Использовать для сохранения контекста в обработчиках

### 7.2 Оптимизация

```lua
-- Плохо: создание таймера каждый фрейм
function modifier:OnIntervalThink()
    Timers:CreateTimer(function()
        -- ...
    end)
end

-- Хорошо: использование встроенного интервала
function modifier:OnCreated()
    self:StartIntervalThink(1.0)
end

function modifier:OnIntervalThink()
    -- Выполняется каждую секунду
end
```

### 7.3 Работа с модификаторами

```lua
modifier_custom = class({})

-- Основные параметры
function modifier_custom:IsHidden() return false end  -- Видимость баффа
function modifier_custom:IsDebuff() return false end  -- Дебафф или бафф
function modifier_custom:IsPurgable() return true end  -- Можно ли диспелить
function modifier_custom:RemoveOnDeath() return true end  -- Удалять при смерти
function modifier_custom:GetAttributes()
    -- MODIFIER_ATTRIBUTE_MULTIPLE - можно несколько копий
    -- MODIFIER_ATTRIBUTE_PERMANENT - не удаляется
    return MODIFIER_ATTRIBUTE_NONE
end

-- Функции для бонусов
function modifier_custom:DeclareFunctions()
    return {
        MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE,
        MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE,
        MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT,
        MODIFIER_EVENT_ON_ATTACK_LANDED,
        -- ... и еще ~200 функций
    }
end

-- Проверки
function modifier_custom:CheckState()
    return {
        [MODIFIER_STATE_MAGIC_IMMUNE] = true,
        [MODIFIER_STATE_DISARMED] = false,
        -- ...
    }
end
```

### 7.4 Работа с KV файлами

```lua
-- Загрузка KV
local abilities = LoadKeyValues("scripts/npc/npc_abilities_custom.txt")

-- Чтение значений
local damage = ability:GetSpecialValueFor("damage")
local duration = ability:GetLevelSpecialValueFor("duration", level)

-- Безопасное чтение
local value = GetKeyValueByHeroName(heroName, "AttributePrimary")
```

### 7.5 Panorama Tips

```javascript
// Локализация
$.Localize("#ability_name")

// Форматирование с переменными
panel.SetDialogVariable("damage", damage);
panel.SetDialogVariableInt("count", count);
// В XML: {d:damage} или {s:variable}

// Отладка
$.Msg("Debug message", variable);
$.Warning("Warning message");

// Поиск панелей
var panel = $("#PanelID");  // По ID
var panel = $.GetContextPanel();  // Текущая панель

// Динамическое создание
var newPanel = $.CreatePanel("Panel", parentPanel, "UniqueID");
newPanel.BLoadLayoutSnippet("SnippetName");
```

## 8. Структура способностей и предметов

### 8.1 Кастомная способность (пример)

```lua
imba_hero_ability = class({})

function imba_hero_ability:OnSpellStart()
    local caster = self:GetCaster()
    local target = self:GetCursorTarget()
    local damage = self:GetSpecialValueFor("damage")
    
    -- Проверка линкена
    if target:TriggerSpellAbsorb(self) then
        return
    end
    
    -- Партикл
    local particle = ParticleManager:CreateParticle(
        "particles/...", 
        PATTACH_ABSORIGIN_FOLLOW, 
        target
    )
    ParticleManager:ReleaseParticleIndex(particle)
    
    -- Урон
    local damageTable = {
        victim = target,
        attacker = caster,
        damage = damage,
        damage_type = DAMAGE_TYPE_MAGICAL,
        ability = self
    }
    ApplyDamage(damageTable)
    
    -- Модификатор
    target:AddNewModifier(caster, self, "modifier_stunned", {
        duration = self:GetSpecialValueFor("duration")
    })
    
    -- Звук
    target:EmitSound("Hero.Ability")
end
```

### 8.2 KV файл способности

```
"imba_hero_ability"
{
    "BaseClass"             "ability_lua"
    "ScriptFile"            "hero/hero_name.lua"
    "AbilityTextureName"    "custom/ability_name"
    
    "AbilityBehavior"       "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET"
    "AbilityUnitTargetTeam" "DOTA_UNIT_TARGET_TEAM_ENEMY"
    "AbilityUnitTargetType" "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC"
    
    "AbilityType"           "DOTA_ABILITY_TYPE_BASIC"
    "AbilityUnitDamageType" "DAMAGE_TYPE_MAGICAL"
    
    "AbilityCastPoint"      "0.3"
    "AbilityCastRange"      "600"
    "AbilityCooldown"       "12 11 10 9"
    "AbilityManaCost"       "100 110 120 130"
    
    "AbilitySpecial"
    {
        "01"
        {
            "var_type"      "FIELD_INTEGER"
            "damage"        "100 200 300 400"
        }
        "02"
        {
            "var_type"      "FIELD_FLOAT"
            "duration"      "2.0 2.5 3.0 3.5"
        }
    }
}
```

## 9. Использованные техники и особенности

1. **Система Generic Talents** - автоматическая обработка талантов по названию
2. **Базовые классы для предметов** - наследование через ShallowCopy
3. **Модульная архитектура** - разделение на библиотеки
4. **Custom Net Tables** - эффективная синхронизация данных
5. **Расширенная система таймеров** - гибкое управление временными событиями
6. **Физическая система** - для сложного движения юнитов
7. **Кастомный UI** - полностью переделанный интерфейс на Panorama
8. **Система уведомлений** - единый API для сообщений игрокам
9. **Библиотека анимаций** - управление анимациями юнитов
10. **Множественные игровые режимы** - через настройки хоста

## 10. Статистика проекта

- **Lua файлов**: 196
- **Файлов героев**: 73
- **Файлов предметов**: 65
- **Модификаторов**: 18+
- **Panorama layouts**: 30
- **Panorama scripts**: 25
- **Particles**: 1312+
- **Sounds**: 65+
- **Maps**: 3 (standard, 10v10, custom_10v10)

## 11. Выводы

**Dota IMBA** - образцовый пример крупной кастомки с:
- Чистой модульной архитектурой
- Переиспользуемыми библиотеками
- Продуманной системой UI
- Множеством игровых режимов
- Open-source кодом высокого качества

Проект отлично подходит для изучения advanced техник разработки кастомок Dota 2.
