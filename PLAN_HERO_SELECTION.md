# 📋 ПЛАН РАЗРАБОТКИ ЭКРАНА ВЫБОРА ГЕРОЕВ

**Дата:** 2026-01-11  
**Последнее обновление:** 2026-01-11 (23:55) - Переработан порядок этапов  
**Статус:** 🚧 В разработке - Этапы 0-2 завершены, утечка памяти исправлена

---

## ⚠️ КРИТИЧНЫЕ ИСПРАВЛЕНИЯ

### 🔄 ЭТАП 1: Исправлена логика распределения команд (2026-01-12 00:30)

**Проблемы:**
1. Система добавляла 15 ботов вместо 7 (всего 16 игроков вместо 8)
2. Игроки и боты распределялись в старые команды GOODGUYS/BADGUYS вместо 8 кастомных
3. Остались настройки для Radiant/Dire команд

**Решение (✅ применено):**

1. **`GameMode.ts` - configure():**
   ```typescript
   GameRules.SetCustomGameTeamMaxPlayers(DotaTeam.GOODGUYS, 0); // Отключено
   GameRules.SetCustomGameTeamMaxPlayers(DotaTeam.BADGUYS, 0); // Отключено
   ```

2. **`GameMode.ts` - OnStateChange() для CUSTOM_GAME_SETUP:**
   - ✅ Распределение реальных игроков по командам 6-13 (через 0.5с)
   - ✅ Добавление 7 ботов (через 2с)
   - ✅ Распределение ботов по оставшимся командам (через 4с)
   - ✅ Отправка Steam IDs на клиент (через 5с)

3. **`GameMode.ts` - Удален обработчик `auto_assign_team`:**
   - Распределение теперь происходит автоматически на сервере

4. **`game_setup.ts` - Удален вызов `auto_assign_team`:**
   - Убран код клиентского распределения в команду

**Результат:**
- ✅ Ровно 8 игроков (1 реальный + 7 ботов)
- ✅ Каждый в своей команде (CUSTOM_1 до CUSTOM_8)
- ✅ Команды 2 (Radiant) и 3 (Dire) отключены

**Файлы:** `src/vscripts/GameMode.ts`, `src/panorama/game_setup.ts`

---

### 🐛 Устранена утечка памяти в `game_setup.ts` (2026-01-11 23:30)
**Проблема:** Таймер и электрическая анимация продолжали работать после перехода в HERO_SELECTION, что видно было в логах.

**Решение (✅ применено):**
- Добавлены флаги `isTimerActive` и `isElectricAnimationActive`
- Добавлены функции `StopTimer()` и `StopElectricAnimation()`
- Вызов остановки в `HideCardsAndStartGame()` перед запуском анимации выхода
- Теперь все ресурсы корректно освобождаются при переходе между экранами

**Файл:** `src/panorama/game_setup.ts`

---

### ⚡ Исправлена очередность остановки анимации портала (2026-01-12 00:40)
**Проблема:** Электрическая анимация портала останавливалась сразу при нажатии кнопки "Начать игру", но карточки еще не успевали улететь в портал.

**Решение (✅ применено):**
- Таймер останавливается сразу при нажатии кнопки
- Электрическая анимация продолжает работать пока карточки летят
- Анимация портала останавливается ПОСЛЕ того как все 8 карточек улетели (через ~3.1s)
- Последовательность: взрывы карточек → вылет в портал → закрытие портала → переход в HERO_SELECTION

**Файл:** `src/panorama/game_setup.ts`

---

### 🎯 ЭТАП 4 ЗАВЕРШЕН: Отображение героев в верхней панели (2026-01-12 01:00)

**Задача:** Показать портреты героев всех 8 игроков в верхней панели экрана выбора героев.

**Реализация (✅ применено):**

1. **Сервер (`GameMode.ts`):**
   ```typescript
   // При переходе в HERO_SELECTION отправляем героев на клиент
   private SendPlayersHeroesToUI(): void {
       // Собираем героев всех игроков (0-7)
       // Отправляем через CustomGameEventManager
   }
   ```

2. **События (`events.d.ts`):**
   ```typescript
   interface HeroSelectionPlayersDataEvent {
       players: Array<{
           playerID: number;
           heroName: string;
           teamNumber: number;
       }>;
   }
   ```

3. **XML (`hero_selection.xml`):**
   - Добавлены ID к каждому слоту: `PickSlot_0` до `PickSlot_7`
   - Контейнер для героя: `PickSlotHero_0` до `PickSlotHero_7`
   - Таймер для каждого слота: `PickSlotTimer_0` до `PickSlotTimer_7`

4. **CSS (`hero_selection.css`):**
   - Стили для `.PickSlotHeroContainer` (80x70px)
   - Стили для `DOTAHeroImage` внутри контейнера

5. **Клиент (`hero_selection.ts`):**
   ```typescript
   // Подписка на событие
   GameEvents.Subscribe("hero_selection_players_data", ...);
   
   // Создание DOTAHeroImage для каждого игрока
   function UpdatePickSlot(slotIndex, heroName) {
       const heroImage = $.CreatePanel("DOTAHeroImage", ...);
       heroImage.SetAttributeString("heroname", heroName);
       heroImage.SetAttributeString("heroimagestyle", "icon");
   }
   ```

**Результат:**
- ✅ Верхняя панель показывает портреты героев всех 8 игроков
- ✅ Портреты загружаются автоматически при переходе в HERO_SELECTION
- ✅ Используется DOTAHeroImage для корректного отображения

**Файлы:** `GameMode.ts`, `hero_selection.ts`, `hero_selection.xml`, `hero_selection.css`, `events.d.ts`

---

## 📚 ПРОВЕРЕННЫЕ API И ДОКУМЕНТАЦИЯ

### ✅ Lua/VScripts API (из moddota_api_lua.json)

#### Teams (8 команд по 1 игроку):
```typescript
// DOTATeam_t constants - проверено в документации:
DOTA_TEAM_CUSTOM_1 = 6   // Команда 1
DOTA_TEAM_CUSTOM_2 = 7   // Команда 2
DOTA_TEAM_CUSTOM_3 = 8   // Команда 3
DOTA_TEAM_CUSTOM_4 = 9   // Команда 4
DOTA_TEAM_CUSTOM_5 = 10  // Команда 5
DOTA_TEAM_CUSTOM_6 = 11  // Команда 6
DOTA_TEAM_CUSTOM_7 = 12  // Команда 7
DOTA_TEAM_CUSTOM_8 = 13  // Команда 8

// Лимиты:
DOTA_MAX_PLAYER_TEAMS = 10  // Максимум команд
DOTA_MAX_TEAM_PLAYERS = 24  // Максимум игроков в команде
```

#### PlayerResource API (существует и работает):
```typescript
PlayerResource.SetSelectedHero(playerID: number, heroName: string): void
// Устанавливает выбранного героя для игрока

PlayerResource.GetSelectedHeroName(playerID: number): string
// Возвращает имя выбранного героя (если есть)

player.GetAssignedHero(): CDOTA_BaseNPC_Hero | undefined
// Возвращает назначенного героя

entity.GetTeam(): DOTATeam_t
entity.SetTeam(teamNum: DOTATeam_t): void
```

#### Game States (проверены):
```typescript
DOTA_GAMERULES_STATE_HERO_SELECTION = 4
DOTA_GAMERULES_STATE_STRATEGY_TIME = 5
DOTA_GAMERULES_STATE_PRE_GAME = 8
DOTA_GAMERULES_STATE_GAME_IN_PROGRESS = 10

GameRules:State_Get(): DOTA_GameState
GameRules:SetGameState(state: DOTA_GameState): void  // Переход между стейтами
```

### ✅ Panorama API (из Dota_2_Workshop_Tools_Panorama_Panels.md)

#### DOTAHeroImage (подтверждено официальной документацией):
```xml
<!-- Icon style (32x32) - для списка героев -->
<DOTAHeroImage heroname="npc_dota_hero_axe" heroimagestyle="icon" />

<!-- Portrait style (71x94) - для верхних слотов с игроками -->
<DOTAHeroImage heroname="npc_dota_hero_axe" heroimagestyle="portrait" />

<!-- Landscape style (128x72) - для scoreboard -->
<DOTAHeroImage heroname="npc_dota_hero_axe" heroimagestyle="landscape" />
```

**Важно:** DOTAHeroImage можно создавать динамически через `$.CreatePanel()` и менять heroname через `SetAttributeString()`.

#### Таймеры в Panorama:
```typescript
$.Schedule(delay: number, callback: () => void)
// Стандартный способ создания таймеров
// КРИТИЧНО: Нужны флаги для остановки рекурсивных таймеров!
```

### 📖 Источники проверенной информации:
- ✅ `HELP_FOR_CLAUDE/Documentation_api_and_functions_lua_and_panorama/moddota_api_lua.json`
- ✅ `HELP_FOR_CLAUDE/Valve_documentation_official_for_dota2_custom_games_developing/Dota_2_Workshop_Tools_Panorama_Panels.md`
- ✅ `HELP_FOR_CLAUDE/Examples_of_projects_custom_dota2_games/04_DOTA_RUN_ANALYSIS.md` (пример FFA с 10 командами)
- ✅ `HELP_FOR_CLAUDE/ModDota_Complete_Documentation.md`

---

## 🎯 НОВАЯ ПОСЛЕДОВАТЕЛЬНОСТЬ РАЗРАБОТКИ

**Согласно требованиям пользователя, порядок изменен:**

1. **Hammer: 8 команд** → Настройка карты для реальных условий
2. **Отображение героев ботов** → Они уже выбраны, показываем в UI
3. **3 героя + кнопка "ВЫБРАТЬ"** → Базовая механика выбора
4. **Переход в STRATEGY_TIME** → Проверка работоспособности
5. **Таймеры и очередность** → Полноценная механика пика
6. **Оформление + PRE_GAME** → 3D модели со скинами

---

## 📊 КРАТКИЙ ROADMAP (НОВАЯ ПОСЛЕДОВАТЕЛЬНОСТЬ)

### ✅ Завершено:
- [x] **Этап 0:** Базовая структура файлов (hero_selection.ts/xml/css)
- [x] **Этап 2:** UI с 3 колонками (40%/35%/25%)
- [x] **Этап 3:** Верхняя панель с 8 слотами
- [x] **Фикс:** Утечка памяти в game_setup.ts
- [x] **ЭТАП 1 (Hammer):** Настроено 8 команд (info_player_start_dota с Team Number 6-13)
- [x] **ЭТАП 1 (VScripts):** SetupCustomTeams() - лимиты для 8 команд
- [x] **ЭТАП 1 (VScripts):** Автоматическое распределение игроков по 8 командам
- [x] **ЭТАП 1 (VScripts):** Добавление и распределение ботов (7 штук)
- [x] **ЭТАП 1 (Фикс):** Отключены стандартные команды Radiant/Dire
- [x] **ЭТАП 4 (Сервер):** SendPlayersHeroesToUI() отправляет героев на клиент
- [x] **ЭТАП 4 (Клиент):** DOTAHeroImage отображает портреты героев в слотах
- [x] **ЭТАП 4 (XML):** Добавлены ID к слотам для динамического обновления
- [x] **ЭТАП 4 (CSS):** Стили для PickSlotHeroContainer и DOTAHeroImage
- [x] **ЭТАП 4 (Events):** Определено событие hero_selection_players_data

### 🚧 Текущие задачи (по порядку):
- [ ] **ЭТАП 6:** 3 героя + кнопка "ВЫБРАТЬ" + переход в STRATEGY_TIME
- [ ] **ЭТАП 7:** Таймеры и очередность пика
- [ ] **ЭТАП 8:** PRE_GAME экран с 3D моделями и скинами

### 📖 Навигация по плану:

**АКТУАЛЬНЫЕ ЭТАПЫ (читай их по порядку):**
1. 👇 **ЭТАП 1** - Hammer (8 команд) - см. ниже ↓
2. 👇 **ЭТАП 4** - Отображение героев ботов - см. ниже ↓  
3. 👇 **ЭТАП 6** - 3 героя + кнопка - см. ниже ↓

**СТАРЫЕ РАЗДЕЛЫ (для справки, НЕ актуальны):**
- "Этап 3: Нижняя панель..." → объединен в ЭТАП 6
- "Этап 4: Список героев..." → объединен в ЭТАП 6
- "Этап 5: Информация о герое..." → делается позже
- Остальные этапы 7-14 → делаются позже

### 🎯 Что в логах (последний запуск):
```
✅ Custom GameSetup UI работает
✅ 8 игроков: 1 реальный + 7 ботов
✅ Боты автоматически получили героев:
   - Player 1: npc_dota_hero_lina
   - Player 2: npc_dota_hero_razor
   - Player 3: npc_dota_hero_vengefulspirit
   - ... и т.д.
✅ Hero selection screen initialized
✅ Hero selection UI loaded successfully

⚠️ НО: Таймер GameSetup продолжал тикать (теперь исправлено)
```

---

**Архитектура (слева направо):**
1. **СПИСОК ГЕРОЕВ** (слева, 40% ширины):
   - Скроллящийся список героев с иконками
   - Кнопка "?" для рандомного выбора
   - Подсветка выбранного героя
   - Блокировка уже выбранных другими игроками

2. **ИНФОРМАЦИЯ О ГЕРОЕ** (центр, 35% ширины):
   - Имя героя (крупно)
   - Альтернативное имя (под основным)
   - Сетка способностей (4-6 иконок)
   - Описание при наведении на способность
   - Слайдер скинов (заглушка пока)

3. **АУГМЕНТАЦИИ** (справа, 25% ширины):
   - Заглушка - прямоугольник с текстом "АУГМЕНТАЦИИ"
   - Будет реализовано позже

4. **ВЕРХНЯЯ ПАНЕЛЬ** (сверху на весь экран):
   - 8 слотов для очереди пика
   - Подсветка своего слота
   - Таймер под текущим пикающим
   - Аватары игроков после выбора

5. **НИЖНЯЯ ПАНЕЛЬ** (снизу по центру):
   - Кнопка "ВЫБРАТЬ" (активируется когда твоя очередь)
   - Блокируется когда не твоя очередь

---

## 🎯 Механика выбора:

**Очередность:**
- 8 игроков выбирают по очереди (слева направо)
- У каждого 30 секунд на выбор
- Если время вышло → остается последний выбранный (или рандом при старте)

**Уникальность:**
- Выбранный героем недоступен остальным
- В списке затемнен и заблокирован

**Инициализация:**
- При загрузке экрана у каждого игрока уже выбран рандомный герой (разный)
- Можно сразу подтвердить или сменить

---

## ✅ Этап 0: Подготовка структуры файлов

### 📁 Файлы для создания:

**Panorama UI:**
```
src/panorama/hero_selection.ts        → TypeScript логика
content/panorama/layout/custom_game/hero_selection.xml    → XML структура
content/panorama/styles/custom_game/hero_selection.css    → Стили
```

**VScripts (серверная логика):**
```
src/vscripts/hero_selection_manager.ts    → Управление очередностью и таймерами
```

**Типы событий:**
```
src/common/events.d.ts    → Добавим типы для hero selection событий
```

**Манифест:**
```xml
<!-- content/panorama/layout/custom_game/custom_ui_manifest.xml -->
<CustomUIElement type="HeroSelection" 
  layoutfile="file://{resources}/layout/custom_game/hero_selection.xml" />
```

### 📋 Этап 0.1: Создать пустые файлы

- [x] **0.1.1** Создать `src/panorama/hero_selection.ts`
  - Пустой файл с начальным логированием
  
- [x] **0.1.2** Создать `content/panorama/layout/custom_game/hero_selection.xml`
  - Базовая структура с `<root>`, подключением CSS и JS
  - ⚠️ **ВАЖНО:** Корневая панель БЕЗ `id`, только `class` (ограничение Panorama)
  
- [x] **0.1.3** Создать `content/panorama/styles/custom_game/hero_selection.css`
  - Базовые стили для корневой панели
  
- [x] **0.1.4** Добавить в `custom_ui_manifest.xml`
  - Строку `<CustomUIElement type="HeroSelection" ...>`

- [x] **0.1.5** Увеличить `heroSelectionTime` до 9999 секунд в `GameMode.ts`
  - Для комфортной разработки без автоперехода в STRATEGY_TIME

**Проверка:** ✅ `npm run build` компилируется без ошибок, в консоли при HERO_SELECTION появляется сообщение "Hero selection initialized"

---

## 🔧 ЭТАП 1 (НОВЫЙ): Настройка 8 команд в Hammer

### 📝 Цель:
Настроить карту так, чтобы было 8 команд по 1 игроку (FFA-режим). Это нужно для работы в реальных условиях с самого начала.

### 📖 Источник:
- **Пример:** Dota Run (HELP_FOR_CLAUDE/Examples_of_projects_custom_dota2_games/04_DOTA_RUN_ANALYSIS.md) - FFA режим с 10 командами
- **Документация:** DOTATeam_t constants (moddota_api_lua.json) - подтверждено существование DOTA_TEAM_CUSTOM_1 до CUSTOM_8

### 🎯 Подробная инструкция:

#### 1.1 Открыть карту в Hammer Editor
```
1. Запустить: Dota 2 Workshop Tools
2. Открыть: Tools > Asset Browser  
3. Найти: maps/bapbap_typescript.vmap
4. Открыть двойным кликом
```

#### 1.2 Настройка спавн-точек (8 команд)

**Источник:** developer.valvesoftware.com - Custom Game Setup, TeamNum property

**ВАЖНО:** Каждый игрок = отдельная команда!

**ПРАВИЛЬНАЯ ИНСТРУКЦИЯ (проверено на source2.wiki):**

```
Шаг 1: Удалить старые спавны (обязательно!)
   - Удалить все: info_player_start_goodguys
   - Удалить все: info_player_start_badguys
   (Они привязаны к Radiant/Dire, не подходят для кастомных команд)

Шаг 2: Создать 8 спавн-точек типа info_player_start_dota
   - Нажать: Shift+E (Entity Tool)
   - В списке выбрать: info_player_start_dota ⭐ (НЕ goodguys/badguys!)
   - Поставить 8 точек в разных местах карты
   
Шаг 3: Настроить Team Number для каждой точки
   
   Для каждой из 8 точек:
   1. Выделить entity
   2. Открыть Object Properties (Alt+Enter или двойной клик)
   3. Найти свойство "Team Number" 
   4. Выставить значения для 8 кастомных команд:
   
      📍 Спавн 1: Team Number = 6  (DOTA_TEAM_CUSTOM_1)
      📍 Спавн 2: Team Number = 7  (DOTA_TEAM_CUSTOM_2)
      📍 Спавн 3: Team Number = 8  (DOTA_TEAM_CUSTOM_3)
      📍 Спавн 4: Team Number = 9  (DOTA_TEAM_CUSTOM_4)
      📍 Спавн 5: Team Number = 10 (DOTA_TEAM_CUSTOM_5)
      📍 Спавн 6: Team Number = 11 (DOTA_TEAM_CUSTOM_6)
      📍 Спавн 7: Team Number = 12 (DOTA_TEAM_CUSTOM_7)
      📍 Спавн 8: Team Number = 13 (DOTA_TEAM_CUSTOM_8)
   
   5. (Опционально) Name: spawn_team_1, spawn_team_2, ... spawn_team_8
   6. Выставить angle (направление взгляда при спавне)

Шаг 4: Расположение
   - Минимум 16 units между спавнами
   - Равномерно по карте: по кругу ИЛИ 2 ряда по 4
```

**ПОЧЕМУ info_player_start_dota:**
- ✅ Generic spawn point с гибкой настройкой Team Number
- ✅ Подходит для кастомных команд (6-13)
- ❌ info_player_start_goodguys - только для Radiant (team 2)
- ❌ info_player_start_badguys - только для Dire (team 3)

#### 1.3 Настройка VScripts (GameMode.ts)

**Файл:** `src/vscripts/GameMode.ts`

Добавить метод настройки команд (это и есть основная настройка 8 команд!):

```typescript
constructor() {
    this.configure();
    
    // НОВОЕ: Настройка 8 команд по 1 игроку
    this.SetupCustomTeams();
    
    // Register event listeners
    ListenToGameEvent("game_rules_state_change", () => this.OnStateChange(), undefined);
    // ... остальной код
}

// НОВЫЙ МЕТОД
private SetupCustomTeams(): void {
    // Устанавливаем максимум 1 игрок в команде для каждой из 8 команд
    GameRules:SetCustomGameTeamMaxPlayers(DOTATeam_t.DOTA_TEAM_CUSTOM_1, 1);
    GameRules:SetCustomGameTeamMaxPlayers(DOTATeam_t.DOTA_TEAM_CUSTOM_2, 1);
    GameRules:SetCustomGameTeamMaxPlayers(DOTATeam_t.DOTA_TEAM_CUSTOM_3, 1);
    GameRules:SetCustomGameTeamMaxPlayers(DOTATeam_t.DOTA_TEAM_CUSTOM_4, 1);
    GameRules:SetCustomGameTeamMaxPlayers(DOTATeam_t.DOTA_TEAM_CUSTOM_5, 1);
    GameRules:SetCustomGameTeamMaxPlayers(DOTATeam_t.DOTA_TEAM_CUSTOM_6, 1);
    GameRules:SetCustomGameTeamMaxPlayers(DOTATeam_t.DOTA_TEAM_CUSTOM_7, 1);
    GameRules:SetCustomGameTeamMaxPlayers(DOTATeam_t.DOTA_TEAM_CUSTOM_8, 1);
    
    print("✅ 8 custom teams configured (1 player each - FFA mode)");
}
```

#### 1.4 Компиляция и проверка
```
1. Hammer: File > Save (Ctrl+S)
2. Hammer: Build > Build Map (F9) - компилируем карту
3. Дождаться завершения компиляции
4. В VS Code: npm run build - компилируем TypeScript
5. Запустить игру и проверить
```

**Примечание:** Max Players в Map Properties менять НЕ НУЖНО - мы ограничиваем количество программно через `SetCustomGameTeamMaxPlayers()` и количеством спавн-точек.

### ✅ Проверка Этапа 1:
- [ ] В Hammer 8 спавн-точек для 8 команд (Team Number: 6-13)
- [ ] Карта успешно компилируется без ошибок
- [ ] `npm run build` проходит успешно
- [ ] В игре появляются 8 игроков (1 реальный + 7 ботов)
- [ ] Каждый игрок в отдельной команде
- [ ] В консоли: "✅ 8 custom teams configured (1 player each - FFA mode)"

---

## ✅ ЭТАП 2 (СТАРЫЙ "Этап 1"): Базовая структура UI - ВЫПОЛНЕНО

### 📐 Цель: Создать layout с 3 колонками без логики

- [x] **1.1** XML структура корневой панели
  - `<Panel class="HeroSelectionRoot">` на весь экран (БЕЗ id!)
  - Темный фон `#1a1a1a`

- [x] **1.2** Создать 3 основные колонки в XML
  - Внутри `<Panel id="MainContent">` (контейнер для колонок)
  - `<Panel id="LeftColumn">` - 40% ширины
  - `<Panel id="CenterColumn">` - 35% ширины
  - `<Panel id="RightColumn">` - 25% ширины

- [x] **1.3** CSS для трех колонок
  - Горизонтальное расположение (`flow-children: right`)
  - Фиксированные ширины: 40%, 35%, 25%
  - MainContent: `height: fill-parent-flow(1.0)`
  - Границы между колонками для визуального разделения

- [x] **1.4** Добавить заглушки в каждую колонку
  - Левая: `<Label text="СПИСОК ГЕРОЕВ" />`
  - Центр: `<Label text="ИНФОРМАЦИЯ О ГЕРОЕ" />`
  - Правая: `<Label text="АУГМЕНТАЦИИ" />`

**XML структура:**
```xml
<root>
    <styles>
        <include src="file://{resources}/styles/custom_game/hero_selection.css" />
    </styles>
    <scripts>
        <include src="file://{resources}/scripts/custom_game/hero_selection.js" />
    </scripts>
    
    <Panel id="HeroSelectionRoot">
        <Panel id="LeftColumn">
            <Label text="СПИСОК ГЕРОЕВ" />
        </Panel>
        <Panel id="CenterColumn">
            <Label text="ИНФОРМАЦИЯ О ГЕРОЕ" />
        </Panel>
        <Panel id="RightColumn">
            <Label text="АУГМЕНТАЦИИ" />
        </Panel>
    </Panel>
</root>
```

**CSS:**
```css
#HeroSelectionRoot {
    width: 100%;
    height: 100%;
    background-color: #1a1a1a;
    flow-children: right; /* Горизонтальные колонки */
}

#LeftColumn {
    width: 40%;
    height: 100%;
    background-color: #2a2a2a;
    border-right: 2px solid #3a3a3a;
}

#CenterColumn {
    width: 35%;
    height: 100%;
    background-color: #252525;
    border-right: 2px solid #3a3a3a;
}

#RightColumn {
    width: 25%;
    height: 100%;
    background-color: #2a2a2a;
}
```

**Проверка:** ✅ Экран разделен на 3 колонки с подписями, заполняет весь экран

---

## ✅ ЭТАП 3 (СТАРЫЙ "Этап 2"): Верхняя панель с очередью пика - ВЫПОЛНЕНО

### 🎯 Цель: 8 слотов для отображения очереди

- [x] **2.1** Добавить `#PickOrderPanel` в XML
  - Над тремя колонками (изменена структура на вложенную)
  - Горизонтальный ряд из 8 слотов

- [x] **2.2** Структура одного слота (статично, 8 штук)
  - 8 слотов с `<Image class="PickSlotAvatar">` (placeholder: tstl.png)
  - `<Label class="PickSlotTimer">` (скрыт по умолчанию)

- [x] **2.3** CSS для верхней панели
  - Фиксированная высота: 120px
  - `flow-children: right` для горизонтального ряда
  - Padding: 10px

- [x] **2.4** CSS для слотов
  - **Равномерное распределение:** `width: fill-parent-flow(1.0)` - каждый слот занимает равную часть ширины
  - Высота: 100px
  - **Прямоугольные карточки** с `border-radius: 8px`
  - Прямоугольный аватар: 80x70px с `border-radius: 5px`
  - Одинаковые отступы `margin: 0px 5px`
  - Таймер под аватаром (изначально скрыт)

**Обновленная XML структура:**
```xml
<Panel id="HeroSelectionRoot">
    <!-- ВЕРХНЯЯ ПАНЕЛЬ: очередь пика -->
    <Panel id="PickOrderPanel">
        <Panel class="PickSlot">
            <Image class="PickSlotAvatar" src="file://{images}/custom_game/tstl.png" />
            <Label class="PickSlotTimer" text="" />
        </Panel>
        <!-- ... всего 8 слотов ... -->
    </Panel>
    
    <!-- ОСНОВНОЙ КОНТЕНТ: 3 колонки -->
    <Panel id="MainContent">
        <Panel id="LeftColumn">...</Panel>
        <Panel id="CenterColumn">...</Panel>
        <Panel id="RightColumn">...</Panel>
    </Panel>
</Panel>
```

**CSS:**
```css
#HeroSelectionRoot {
    flow-children: down; /* Вертикально: верхняя панель → контент */
}

#PickOrderPanel {
    width: 100%;
    height: 120px;
    background-color: #1a1a1a;
    horizontal-align: center;
    flow-children: right; /* 8 слотов в ряд */
    padding: 10px;
}

.PickSlot {
    width: 80px;
    height: 100px;
    margin: 0 10px;
    background-color: #2a2a2a;
    border: 2px solid #3a3a3a;
    border-radius: 10px;
    flow-children: down;
    horizontal-align: center;
}

.PickSlotAvatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-top: 10px;
}

.PickSlotTimer {
    font-size: 20px;
    color: #FF0000;
    text-align: center;
    margin-top: 5px;
    visibility: collapse; /* Скрыт по умолчанию */
}

#MainContent {
    width: 100%;
    height: fill-parent-flow(1.0); /* Заполняем оставшееся */
    flow-children: right;
}
```

**Реализованная структура XML:**
```xml
<Panel class="HeroSelectionRoot">
    <Panel id="PickOrderPanel">
        <!-- 8 слотов (PickSlot) -->
    </Panel>
    <Panel id="MainContent">
        <Panel id="LeftColumn">...</Panel>
        <Panel id="CenterColumn">...</Panel>
        <Panel id="RightColumn">...</Panel>
    </Panel>
</Panel>
```

**Проверка:** ✅ Сверху 8 прямоугольных слотов во всю ширину (равномерно), под ними 3 колонки

---

## 🔧 ЭТАП 4 (НОВЫЙ): Отображение героев ботов в верхней панели

### 📝 Цель:
В 8 слотах верхней панели показать портреты героев, которых выбрали боты автоматически.

### 📖 Источник:
- **API:** `PlayerResource.SetSelectedHero()` и `PlayerResource.GetSelectedHeroName()` (moddota_api_lua.json - подтверждено)
- **UI:** `DOTAHeroImage` с `heroimagestyle="portrait"` (Dota_2_Workshop_Tools_Panorama_Panels.md - подтверждено)

### 🎯 Реализация:

#### 4.1 XML: Добавить ID к слотам (hero_selection.xml)

Чтобы динамически обновлять слоты, нужны уникальные ID:

```xml
<Panel id="PickOrderPanel">
    <!-- Слот 1 -->
    <Panel id="PickSlot_0" class="PickSlot">
        <Image id="PickSlotAvatar_0" class="PickSlotAvatar" src="file://{images}/custom_game/tstl.png" />
        <Label class="PickSlotTimer" text="" />
    </Panel>
    
    <!-- Слот 2 -->
    <Panel id="PickSlot_1" class="PickSlot">
        <Image id="PickSlotAvatar_1" class="PickSlotAvatar" src="file://{images}/custom_game/tstl.png" />
        <Label class="PickSlotTimer" text="" />
    </Panel>
    
    <!-- Слот 3-8 аналогично: PickSlot_2 до PickSlot_7 -->
</Panel>
```

#### 4.2 Серверная часть: Отправка данных о героях (GameMode.ts)

Боты уже получают героев автоматически (видно из логов):
```
PR:SetSelectedHero 1:[I:0:0] npc_dota_hero_lina(25)
PR:SetSelectedHero 2:[I:0:0] npc_dota_hero_razor(15)
```

Добавить в `OnStateChange()`:

```typescript
private OnStateChange(): void {
    const state = GameRules.State_Get();
    print(`=== Game Rules State Change: ${state} ===`);
    
    if (state === DOTA_GAMERULES_STATE_HERO_SELECTION) {
        // Через 0.5s отправляем информацию о выбранных героях ботов
        Timers:CreateTimer(0.5, () => {
            this.SendBotHeroesToUI();
            return undefined;
        });
    }
    
    // ... остальной код
}

// НОВЫЙ МЕТОД
private SendBotHeroesToUI(): void {
    const heroData: Record<number, string> = {};
    
    for (let playerID = 0; playerID < DOTA_MAX_TEAM_PLAYERS; playerID++) {
        if (!PlayerResource:IsValidPlayer(playerID)) continue;
        
        // Получаем имя выбранного героя (если есть)
        const heroName = PlayerResource:GetSelectedHeroName(playerID);
        if (heroName && heroName !== "") {
            heroData[playerID] = heroName;
            print(`📧 Player ${playerID}: ${heroName}`);
        }
    }
    
    // Отправляем на клиент
    CustomGameEventManager:Send_ServerToAllClients("hero_selection_bot_heroes", {
        heroes: heroData
    });
    
    print(`✅ Sent hero data for ${Object.keys(heroData).length} players`);
}
```

#### 4.3 Клиентская часть: Обновление UI (hero_selection.ts)

```typescript
interface BotHeroesEvent {
    heroes: Record<number, string>; // playerID -> heroName
}

// В Initialize()
function Initialize(): void {
    $.Msg("✅ Hero selection UI loaded successfully");
    
    // НОВОЕ: Подписываемся на событие от сервера
    GameEvents.Subscribe("hero_selection_bot_heroes", OnBotHeroesReceived);
}

// НОВЫЙ ОБРАБОТЧИК
function OnBotHeroesReceived(event: BotHeroesEvent): void {
    $.Msg("🔄 Received bot heroes from server");
    
    const heroes = event.heroes;
    
    // Обновляем каждый слот
    for (let slotIndex = 0; slotIndex < 8; slotIndex++) {
        const heroName = heroes[slotIndex];
        
        if (heroName) {
            UpdatePickSlot(slotIndex, heroName);
        }
    }
}

// НОВАЯ ФУНКЦИЯ: Обновление слота с портретом героя
function UpdatePickSlot(slotIndex: number, heroName: string): void {
    const slot = $(`#PickSlot_${slotIndex}`);
    if (!slot) {
        $.Msg(`❌ Slot ${slotIndex} not found!`);
        return;
    }
    
    // Находим Image внутри слота
    const avatarImage = slot.FindChildTraverse("PickSlotAvatar") as ImagePanel;
    if (!avatarImage) {
        $.Msg(`❌ Avatar image in slot ${slotIndex} not found!`);
        return;
    }
    
    // Заменяем Image на DOTAHeroImage через динамическое создание
    const parent = avatarImage.GetParent();
    if (!parent) return;
    
    avatarImage.DeleteAsync(0); // Удаляем старый Image
    
    // Создаем DOTAHeroImage (проверено в документации!)
    const heroImage = $.CreatePanel("DOTAHeroImage", parent, `HeroImage_${slotIndex}`);
    heroImage.AddClass("PickSlotAvatar");
    heroImage.SetAttributeString("heroname", heroName);
    heroImage.SetAttributeString("heroimagestyle", "portrait"); // 71x94 размер
    
    $.Msg(`  ✅ Slot ${slotIndex + 1}: ${heroName}`);
}
```

#### 4.4 Типы событий (events.d.ts)

Добавить типы для нового события:

```typescript
// В src/common/events.d.ts

interface CustomGameEventDeclarations {
    // ... существующие события
    
    // НОВОЕ
    hero_selection_bot_heroes: {
        heroes: Record<number, string>; // playerID -> heroName
    };
}
```

### ✅ Проверка Этапа 4:
- [ ] XML: Все 8 слотов имеют ID (PickSlot_0 до PickSlot_7)
- [ ] В консоли сервера: "📧 Player X: npc_dota_hero_..."
- [ ] В консоли сервера: "✅ Sent hero data for 8 players"
- [ ] В консоли клиента: "🔄 Received bot heroes from server"
- [ ] В консоли клиента: "✅ Slot 1-8: npc_dota_hero_..."
- [ ] В UI верхней панели отображаются портреты героев ботов (71x94)
- [ ] Портреты в правильном стиле (не placeholder tstl.png)

---

## 🔧 ЭТАП 5 (СТАРЫЙ "Этап 3"): Нижняя панель с кнопкой "ВЫБРАТЬ"

### 🎯 Цель: Кнопка для подтверждения выбора

- [ ] **3.1** Добавить `#BottomPanel` в XML
  - Под основным контентом
  - Кнопка `<Button id="SelectHeroButton">`

- [ ] **3.2** CSS для нижней панели
  - Фиксированная высота: 100px
  - Кнопка по центру: 250x60px
  - Яркий цвет (#00FF00) с hover эффектом

- [ ] **3.3** JavaScript обработчик (заглушка)
  - Функция `OnSelectHeroClicked()` для теста
  - Логирование в консоль

**XML (добавляем после MainContent):**
```xml
<!-- НИЖНЯЯ ПАНЕЛЬ: кнопка выбора -->
<Panel id="BottomPanel">
    <Button id="SelectHeroButton" onactivate="OnSelectHeroClicked()">
        <Label text="ВЫБРАТЬ" />
    </Button>
</Panel>
```

**CSS:**
```css
#BottomPanel {
    width: 100%;
    height: 100px;
    background-color: #1a1a1a;
    horizontal-align: center;
    vertical-align: center;
}

#SelectHeroButton {
    width: 250px;
    height: 60px;
    background-color: #00FF00;
    border-radius: 10px;
    horizontal-align: center;
    
    transition-property: background-color, pre-transform-scale2d;
    transition-duration: 0.2s;
}

#SelectHeroButton:hover {
    background-color: #00CC00;
    pre-transform-scale2d: 1.05;
}

#SelectHeroButton:disabled {
    background-color: #555555;
    brightness: 0.5;
}

#SelectHeroButton Label {
    font-size: 24px;
    font-weight: bold;
    color: #000000;
    text-align: center;
    vertical-align: center;
}
```

**TypeScript:**
```typescript
function OnSelectHeroClicked(): void {
    $.Msg("🎯 Select hero button clicked!");
    // Логика выбора будет позже
}

(globalThis as any).OnSelectHeroClicked = OnSelectHeroClicked;
```

**Проверка:** ✅ Кнопка "ВЫБРАТЬ" снизу по центру, при клике логируется сообщение

---

## СТАРЫЙ РАЗДЕЛ (см. новый ЭТАП 6 выше): Список героев (левая колонка)

⚠️ **ЭТОТ РАЗДЕЛ ПЕРЕРАБОТАН И ОБЪЕДИНЕН С НИЖНЕЙ ПАНЕЛЬЮ В НОВЫЙ ЭТАП 6**

### 🎯 Цель: Скроллящийся список с иконками героев

- [ ] **4.1** Очистить левую колонку от заглушки
  - Добавить `<Panel id="HeroListContainer">` с скроллом
  
- [ ] **4.2** Создать статичный список героев (5-10 для теста)
  - Каждый герой: `<Panel class="HeroCard">`
  - Внутри: `<DOTAHeroImage>` + `<Label>` с именем
  
- [ ] **4.3** CSS для списка
  - `overflow: scroll;` для скролла
  - Вертикальное расположение карточек
  - Размер карточки: 180x80px
  - Hover эффект

- [ ] **4.4** Добавить кнопку "?" (Random)
  - В конец списка
  - Другой стиль (вопросительный знак вместо иконки)

**XML структура:**
```xml
<Panel id="LeftColumn">
    <Label id="HeroListTitle" text="ГЕРОИ" />
    
    <Panel id="HeroListContainer">
        <!-- Список создается динамически -->
        <Panel class="HeroCard" data-hero="npc_dota_hero_axe">
            <DOTAHeroImage heroimagestyle="icon" heroname="npc_dota_hero_axe" />
            <Label text="Axe" />
        </Panel>
        <!-- ... еще герои ... -->
        
        <!-- Random кнопка -->
        <Panel id="RandomHeroCard" class="HeroCard">
            <Label class="RandomIcon" text="?" />
            <Label text="Random" />
        </Panel>
    </Panel>
</Panel>
```

**CSS:**
```css
#LeftColumn {
    padding: 20px;
    flow-children: down;
}

#HeroListTitle {
    font-size: 28px;
    font-weight: bold;
    color: #FFFFFF;
    margin-bottom: 15px;
    text-align: center;
}

#HeroListContainer {
    width: 100%;
    height: fill-parent-flow(1.0);
    overflow: scroll;
    flow-children: down;
}

.HeroCard {
    width: 100%;
    height: 80px;
    margin-bottom: 10px;
    background-color: #3a3a3a;
    border: 2px solid #4a4a4a;
    border-radius: 8px;
    flow-children: right;
    padding: 10px;
    
    transition-property: background-color, border-color;
    transition-duration: 0.2s;
}

.HeroCard:hover {
    background-color: #4a4a4a;
    border-color: #00FF00;
}

.HeroCard.selected {
    background-color: #1a5a1a;
    border-color: #00FF00;
    border-width: 3px;
}

.HeroCard.disabled {
    opacity: 0.3;
    brightness: 0.5;
    hittest: false;
}

.HeroCard DOTAHeroImage {
    width: 60px;
    height: 60px;
    margin-right: 15px;
}

.HeroCard Label {
    font-size: 20px;
    color: #FFFFFF;
    vertical-align: center;
}

/* Random карточка */
#RandomHeroCard {
    background-color: #5a3a5a;
}

.RandomIcon {
    font-size: 48px;
    font-weight: bold;
    width: 60px;
    text-align: center;
    color: #FFFF00;
}
```

**Проверка:** ✅ Список героев скроллится, при клике/hover меняется фон, кнопка "?" внизу

---

## ✅ Этап 5: Информация о герое (центральная колонка)

### 🎯 Цель: Отображение имени, альт.имени и способностей

- [ ] **5.1** Очистить центральную колонку
  - Добавить структуру для информации о герое

- [ ] **5.2** Создать layout информации
  ```xml
  <Label id="HeroName" />         <!-- Основное имя -->
  <Label id="HeroAltName" />      <!-- Альтернативное имя -->
  <Panel id="AbilitiesGrid" />    <!-- Сетка способностей -->
  <Panel id="SkinsSlider" />      <!-- Заглушка слайдера -->
  ```

- [ ] **5.3** CSS для центральной колонки
  - Вертикальное расположение
  - Отступы и центрирование
  - Крупный шрифт для имен

- [ ] **5.4** Сетка способностей (4-6 иконок)
  - `<DOTAAbilityImage>` для каждой способности
  - Горизонтальный ряд с wrap
  - Размер иконки: 80x80px

**XML структура:**
```xml
<Panel id="CenterColumn">
    <!-- Имя героя -->
    <Label id="HeroName" text="AXE" />
    
    <!-- Альтернативное имя -->
    <Label id="HeroAltName" text="Берсеркер" />
    
    <!-- Способности -->
    <Panel id="AbilitiesSection">
        <Label class="SectionTitle" text="СПОСОБНОСТИ" />
        <Panel id="AbilitiesGrid">
            <!-- Создаются динамически -->
            <DOTAAbilityImage abilityname="axe_berserker_call" />
            <DOTAAbilityImage abilityname="axe_battle_hunger" />
            <!-- ... -->
        </Panel>
    </Panel>
    
    <!-- Слайдер скинов (заглушка) -->
    <Panel id="SkinsSection">
        <Label class="SectionTitle" text="СКИНЫ" />
        <Panel id="SkinsSlider">
            <Label text="(скоро)" />
        </Panel>
    </Panel>
</Panel>
```

**CSS:**
```css
#CenterColumn {
    padding: 30px;
    flow-children: down;
}

#HeroName {
    font-size: 48px;
    font-weight: bold;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 10px;
    text-shadow: 2px 2px 8px #000000;
}

#HeroAltName {
    font-size: 24px;
    color: #AAAAAA;
    text-align: center;
    margin-bottom: 30px;
    font-style: italic;
}

.SectionTitle {
    font-size: 20px;
    font-weight: bold;
    color: #00FF00;
    margin-bottom: 15px;
    letter-spacing: 2px;
}

#AbilitiesGrid {
    width: 100%;
    flow-children: right-wrap; /* Ряд с переносом */
    horizontal-align: center;
}

#AbilitiesGrid DOTAAbilityImage {
    width: 80px;
    height: 80px;
    margin: 5px;
    border: 2px solid #4a4a4a;
    border-radius: 8px;
    
    transition-property: border-color, pre-transform-scale2d;
    transition-duration: 0.2s;
}

#AbilitiesGrid DOTAAbilityImage:hover {
    border-color: #00FF00;
    pre-transform-scale2d: 1.1;
}

/* Слайдер скинов (заглушка) */
#SkinsSection {
    margin-top: 30px;
}

#SkinsSlider {
    width: 100%;
    height: 100px;
    background-color: #3a3a3a;
    border: 2px dashed #555555;
    border-radius: 10px;
    horizontal-align: center;
    vertical-align: center;
}

#SkinsSlider Label {
    font-size: 18px;
    color: #888888;
    font-style: italic;
}
```

**Проверка:** ✅ При выборе героя отображается имя, альт.имя и способности

---

## ✅ Этап 6: Правая колонка (аугментации - заглушка)

### 🎯 Цель: Простая заглушка для будущих аугментаций

- [ ] **6.1** Очистить правую колонку
  - Добавить заголовок "АУГМЕНТАЦИИ"
  - Добавить прямоугольник-заглушку

**XML:**
```xml
<Panel id="RightColumn">
    <Label id="AugmentationsTitle" text="АУГМЕНТАЦИИ" />
    <Panel id="AugmentationsPlaceholder">
        <Label text="(скоро)" />
    </Panel>
</Panel>
```

**CSS:**
```css
#RightColumn {
    padding: 30px;
    flow-children: down;
}

#AugmentationsTitle {
    font-size: 24px;
    font-weight: bold;
    color: #00FF00;
    margin-bottom: 20px;
    letter-spacing: 2px;
    text-align: center;
}

#AugmentationsPlaceholder {
    width: 100%;
    height: 400px;
    background-color: #3a3a3a;
    border: 2px dashed #555555;
    border-radius: 10px;
    horizontal-align: center;
    vertical-align: center;
}

#AugmentationsPlaceholder Label {
    font-size: 20px;
    color: #888888;
    font-style: italic;
}
```

**Проверка:** ✅ Справа заголовок "АУГМЕНТАЦИИ" и прямоугольник с текстом "(скоро)"

---

## ✅ Этап 7: Динамическое создание списка героев (TypeScript)

### 🎯 Цель: Генерация героев из массива данных

- [ ] **7.1** Создать массив героев в TypeScript
  ```typescript
  const AVAILABLE_HEROES = [
      { id: "npc_dota_hero_axe", name: "Axe", altName: "Берсеркер" },
      { id: "npc_dota_hero_pudge", name: "Pudge", altName: "Мясник" },
      // ... еще ~15-20 героев
  ];
  ```

- [ ] **7.2** Функция создания карточки героя
  ```typescript
  function CreateHeroCard(heroData: HeroData): Panel {
      // $.CreatePanel()
      // Добавить DOTAHeroImage
      // Добавить Label с именем
      // Добавить обработчик клика
  }
  ```

- [ ] **7.3** Заполнить список при загрузке
  - Очистить статичные карточки из XML
  - Динамически создать все карточки
  - Добавить карточку "Random" в конец

- [ ] **7.4** Обработчик клика на карточку
  ```typescript
  function OnHeroCardClicked(heroID: string): void {
      // Обновить центральную колонку
      // Подсветить выбранную карточку
      // Сохранить выбор локально
  }
  ```

**TypeScript реализация:**
```typescript
// src/panorama/hero_selection.ts

interface HeroData {
    id: string;        // npc_dota_hero_axe
    name: string;      // Axe
    altName: string;   // Берсеркер
    abilities: string[]; // Массив ID способностей
}

const AVAILABLE_HEROES: HeroData[] = [
    {
        id: "npc_dota_hero_axe",
        name: "Axe",
        altName: "Берсеркер",
        abilities: ["axe_berserker_call", "axe_battle_hunger", "axe_counter_helix", "axe_culling_blade"]
    },
    {
        id: "npc_dota_hero_pudge",
        name: "Pudge",
        altName: "Мясник",
        abilities: ["pudge_meat_hook", "pudge_rot", "pudge_flesh_heap", "pudge_dismember"]
    },
    // ... добавить еще 15-20 героев
];

let selectedHeroID: string | null = null;

function InitializeHeroList(): void {
    const container = $("#HeroListContainer");
    if (!container) return;
    
    // Очищаем контейнер
    container.RemoveAndDeleteChildren();
    
    // Создаем карточки героев
    AVAILABLE_HEROES.forEach(hero => {
        const card = CreateHeroCard(hero);
        container.AddChild(card);
    });
    
    // Добавляем Random карточку
    const randomCard = CreateRandomCard();
    container.AddChild(randomCard);
    
    $.Msg(`✅ Created ${AVAILABLE_HEROES.length} hero cards`);
}

function CreateHeroCard(heroData: HeroData): Panel {
    const card = $.CreatePanel("Panel", undefined, `HeroCard_${heroData.id}`);
    card.AddClass("HeroCard");
    card.SetAttributeString("data-hero", heroData.id);
    
    // Иконка героя
    const heroImage = $.CreatePanel("DOTAHeroImage", card, "") as DOTAHeroImage;
    heroImage.heroimagestyle = "icon";
    heroImage.heroname = heroData.id;
    
    // Имя героя
    const label = $.CreatePanel("Label", card, "");
    label.text = heroData.name;
    
    // Обработчик клика
    card.SetPanelEvent("onactivate", () => {
        OnHeroCardClicked(heroData.id);
    });
    
    return card;
}

function CreateRandomCard(): Panel {
    const card = $.CreatePanel("Panel", undefined, "RandomHeroCard");
    card.AddClass("HeroCard");
    card.SetAttributeString("data-hero", "random");
    
    // Иконка "?"
    const icon = $.CreatePanel("Label", card, "");
    icon.AddClass("RandomIcon");
    icon.text = "?";
    
    // Текст "Random"
    const label = $.CreatePanel("Label", card, "");
    label.text = "Random";
    
    // Обработчик клика
    card.SetPanelEvent("onactivate", () => {
        OnRandomClicked();
    });
    
    return card;
}

function OnHeroCardClicked(heroID: string): void {
    $.Msg(`🎯 Hero clicked: ${heroID}`);
    
    // Снимаем выделение с предыдущей карточки
    if (selectedHeroID) {
        const prevCard = $(`#HeroCard_${selectedHeroID}`);
        if (prevCard) {
            prevCard.RemoveClass("selected");
        }
    }
    
    // Выделяем новую карточку
    selectedHeroID = heroID;
    const card = $(`#HeroCard_${heroID}`);
    if (card) {
        card.AddClass("selected");
    }
    
    // Обновляем центральную колонку
    UpdateHeroInfo(heroID);
}

function UpdateHeroInfo(heroID: string): void {
    const heroData = AVAILABLE_HEROES.find(h => h.id === heroID);
    if (!heroData) return;
    
    // Обновляем имя
    const nameLabel = $("#HeroName") as LabelPanel;
    if (nameLabel) {
        nameLabel.text = heroData.name.toUpperCase();
    }
    
    // Обновляем альтернативное имя
    const altNameLabel = $("#HeroAltName") as LabelPanel;
    if (altNameLabel) {
        altNameLabel.text = heroData.altName;
    }
    
    // Обновляем способности
    UpdateAbilities(heroData.abilities);
}

function UpdateAbilities(abilities: string[]): void {
    const grid = $("#AbilitiesGrid");
    if (!grid) return;
    
    // Очищаем старые способности
    grid.RemoveAndDeleteChildren();
    
    // Создаем новые иконки
    abilities.forEach(abilityID => {
        const abilityImage = $.CreatePanel("DOTAAbilityImage", grid, "") as DOTAAbilityImage;
        abilityImage.abilityname = abilityID;
    });
}

function OnRandomClicked(): void {
    $.Msg("🎲 Random hero clicked!");
    
    // Выбираем случайного героя
    const randomIndex = Math.floor(Math.random() * AVAILABLE_HEROES.length);
    const randomHero = AVAILABLE_HEROES[randomIndex];
    
    OnHeroCardClicked(randomHero.id);
}

// Инициализация при загрузке
$.Msg("🎮 Hero selection initialized");
InitializeHeroList();

// Выбираем рандомного героя при старте
$.Schedule(0.5, () => {
    OnRandomClicked();
});
```

**Проверка:** ✅ Список героев создается динамически, при клике обновляется центр, Random работает

---

## ✅ Этап 8: Серверная логика очередности (VScripts)

### 🎯 Цель: Управление порядком пика и таймерами на сервере

- [ ] **8.1** Создать `src/vscripts/hero_selection_manager.ts`
  - Класс `HeroSelectionManager`
  - Хранение очереди пика
  - Управление таймерами

- [ ] **8.2** Определить порядок пика
  ```typescript
  private pickOrder: PlayerID[] = [];
  private currentPickIndex: number = 0;
  ```

- [ ] **8.3** Инициализация при входе в HERO_SELECTION
  ```typescript
  if (state === GameState.HERO_SELECTION) {
      HeroSelectionManager.Initialize();
  }
  ```

- [ ] **8.4** Логика смены хода
  - Таймер 30 секунд
  - При выборе или таймауте → следующий игрок
  - Отправка событий на клиент

**VScripts реализация:**
```typescript
// src/vscripts/hero_selection_manager.ts

export class HeroSelectionManager {
    private pickOrder: PlayerID[] = [];
    private currentPickIndex: number = 0;
    private pickTimeRemaining: number = 30;
    private pickTimerHandle?: string;
    private selectedHeroes: Map<PlayerID, string> = new Map();
    private initialRandomHeroes: Map<PlayerID, string> = new Map();
    
    static Initialize(): void {
        const manager = new HeroSelectionManager();
        (GameRules as any).HeroSelectionManager = manager;
        
        // Определяем порядок (случайный)
        manager.pickOrder = this.ShuffleArray(this.GetAllValidPlayers());
        
        print(`🎮 Pick order: ${manager.pickOrder.join(", ")}`);
        
        // Назначаем рандомных героев всем для старта
        manager.AssignInitialRandomHeroes();
        
        // Отправляем данные на клиент
        CustomGameEventManager.Send_ServerToAllClients("hero_selection_init", {
            pickOrder: manager.pickOrder,
            initialHeroes: this.MapToArray(manager.initialRandomHeroes)
        });
        
        // Запускаем первый пик
        $.Schedule(1.0, () => manager.StartNextPick());
    }
    
    private AssignInitialRandomHeroes(): void {
        const allHeroes = [
            "npc_dota_hero_axe", "npc_dota_hero_pudge", "npc_dota_hero_invoker",
            "npc_dota_hero_mirana", "npc_dota_hero_juggernaut", "npc_dota_hero_sven",
            "npc_dota_hero_crystal_maiden", "npc_dota_hero_lina"
        ];
        
        const shuffled = HeroSelectionManager.ShuffleArray([...allHeroes]);
        
        this.pickOrder.forEach((playerID, index) => {
            const heroID = shuffled[index % shuffled.length];
            this.initialRandomHeroes.set(playerID, heroID);
            print(`🎲 Player ${playerID} initial hero: ${heroID}`);
        });
    }
    
    private StartNextPick(): void {
        if (this.currentPickIndex >= this.pickOrder.length) {
            print("✅ All players picked heroes!");
            this.FinishSelection();
            return;
        }
        
        const currentPlayerID = this.pickOrder[this.currentPickIndex];
        this.pickTimeRemaining = 30;
        
        print(`⏰ Player ${currentPlayerID} turn to pick (${this.pickTimeRemaining}s)`);
        
        // Отправляем на клиент
        CustomGameEventManager.Send_ServerToAllClients("hero_selection_turn", {
            playerID: currentPlayerID,
            timeRemaining: this.pickTimeRemaining,
            pickNumber: this.currentPickIndex + 1,
            totalPicks: this.pickOrder.length,
            unavailableHeroes: Array.from(this.selectedHeroes.values())
        });
        
        // Запускаем таймер
        this.StartPickTimer();
    }
    
    private StartPickTimer(): void {
        this.pickTimerHandle = Timers.CreateTimer(1.0, () => {
            this.pickTimeRemaining--;
            
            // Обновляем клиенты
            CustomGameEventManager.Send_ServerToAllClients("hero_selection_timer_tick", {
                timeRemaining: this.pickTimeRemaining
            });
            
            if (this.pickTimeRemaining <= 0) {
                // Таймаут - используем последний выбранный или initial
                const currentPlayerID = this.pickOrder[this.currentPickIndex];
                const heroID = this.selectedHeroes.get(currentPlayerID) 
                    || this.initialRandomHeroes.get(currentPlayerID) 
                    || "npc_dota_hero_axe";
                
                print(`⏰ Timeout! Player ${currentPlayerID} auto-selected: ${heroID}`);
                
                this.ConfirmHeroPick(currentPlayerID, heroID);
                return undefined;
            }
            
            return 1.0; // Продолжаем таймер
        });
    }
    
    static OnHeroSelected(playerID: PlayerID, heroID: string): void {
        const manager = (GameRules as any).HeroSelectionManager as HeroSelectionManager;
        
        // Проверяем что это правильный игрок
        if (playerID !== manager.pickOrder[manager.currentPickIndex]) {
            print(`⚠️ Player ${playerID} tried to pick out of turn!`);
            return;
        }
        
        // Проверяем что герой не занят
        if (Array.from(manager.selectedHeroes.values()).includes(heroID)) {
            print(`⚠️ Hero ${heroID} already picked!`);
            return;
        }
        
        print(`✅ Player ${playerID} picked ${heroID}`);
        
        // Останавливаем таймер
        if (manager.pickTimerHandle) {
            Timers.RemoveTimer(manager.pickTimerHandle);
        }
        
        manager.ConfirmHeroPick(playerID, heroID);
    }
    
    private ConfirmHeroPick(playerID: PlayerID, heroID: string): void {
        // Сохраняем выбор
        this.selectedHeroes.set(playerID, heroID);
        
        // Назначаем героя через Valve API (СКИНЫ ЗАГРУЗЯТСЯ!)
        PlayerResource.SetSelectedHero(playerID, heroID);
        
        // Отправляем подтверждение
        CustomGameEventManager.Send_ServerToAllClients("hero_selection_confirmed", {
            playerID: playerID,
            heroID: heroID
        });
        
        // Переход к следующему
        this.currentPickIndex++;
        
        $.Schedule(1.5, () => {
            this.StartNextPick();
        });
    }
    
    private FinishSelection(): void {
        print("🎉 Hero selection finished!");
        
        CustomGameEventManager.Send_ServerToAllClients("hero_selection_finished", {});
        
        // Valve автоматически перейдет в PRE_GAME
    }
    
    private static GetAllValidPlayers(): PlayerID[] {
        const players: PlayerID[] = [];
        for (let playerID = 0; playerID < 24; playerID++) {
            if (PlayerResource.IsValidPlayerID(playerID) && 
                !PlayerResource.IsFakeClient(playerID)) {
                players.push(playerID);
            }
        }
        return players;
    }
    
    private static ShuffleArray<T>(array: T[]): T[] {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    private static MapToArray<K, V>(map: Map<K, V>): Array<{key: K; value: V}> {
        const result: Array<{key: K; value: V}> = [];
        map.forEach((value, key) => {
            result.push({key, value});
        });
        return result;
    }
}

// В GameMode.ts добавляем:
// import { HeroSelectionManager } from "./hero_selection_manager";

// if (state === GameState.HERO_SELECTION) {
//     HeroSelectionManager.Initialize();
// }

// // Слушаем событие выбора
// CustomGameEventManager.RegisterListener("hero_selected", (_, data) => {
//     HeroSelectionManager.OnHeroSelected(
//         data.PlayerID as PlayerID, 
//         data.heroID as string
//     );
// });
```

**Проверка:** ✅ В консоли логируется порядок пика, смена ходов каждые 30 сек

---

## ✅ Этап 9: Синхронизация клиента с сервером

### 🎯 Цель: Клиент реагирует на события сервера

- [ ] **9.1** Подписаться на события в `hero_selection.ts`
  - `hero_selection_init` - получить порядок и initial героев
  - `hero_selection_turn` - обновить UI (чей ход, таймер)
  - `hero_selection_timer_tick` - обновить таймер
  - `hero_selection_confirmed` - заблокировать выбранного героя

- [ ] **9.2** Обновление верхней панели (слоты)
  - Заполнить аватары по порядку
  - Подсветить текущего пикающего
  - Показать таймер под ним

- [ ] **9.3** Блокировка/разблокировка кнопки "ВЫБРАТЬ"
  - Активна только когда твоя очередь
  - Disabled когда не твоя очередь

- [ ] **9.4** Блокировка выбранных героев
  - Добавить класс `.disabled` карточкам
  - Убрать обработчик клика

**TypeScript клиента:**
```typescript
// src/panorama/hero_selection.ts

let localPlayerID: PlayerID;
let pickOrder: PlayerID[] = [];
let currentPickingPlayerID: PlayerID | null = null;
let unavailableHeroes: string[] = [];

// Подписка на события
GameEvents.Subscribe("hero_selection_init", OnSelectionInit);
GameEvents.Subscribe("hero_selection_turn", OnSelectionTurn);
GameEvents.Subscribe("hero_selection_timer_tick", OnTimerTick);
GameEvents.Subscribe("hero_selection_confirmed", OnHeroConfirmed);

function OnSelectionInit(data: any): void {
    $.Msg("🎮 Hero selection initialized by server");
    
    localPlayerID = Game.GetLocalPlayerID();
    pickOrder = data.pickOrder;
    
    // Заполняем слоты
    UpdatePickOrderSlots();
    
    // Устанавливаем initial героев
    const initialHeroes = data.initialHeroes as Array<{key: number; value: string}>;
    const myInitialHero = initialHeroes.find(h => h.key === localPlayerID);
    
    if (myInitialHero) {
        OnHeroCardClicked(myInitialHero.value);
    }
}

function UpdatePickOrderSlots(): void {
    const panel = $("#PickOrderPanel");
    if (!panel) return;
    
    // Очищаем старые слоты
    panel.RemoveAndDeleteChildren();
    
    // Создаем слоты по порядку
    pickOrder.forEach((playerID, index) => {
        const slot = $.CreatePanel("Panel", panel, `PickSlot_${playerID}`);
        slot.AddClass("PickSlot");
        
        // Аватар (заглушка пока)
        const avatar = $.CreatePanel("Image", slot, "") as ImagePanel;
        avatar.AddClass("PickSlotAvatar");
        avatar.SetImage("file://{images}/custom_game/tstl.png");
        
        // Таймер (скрыт)
        const timer = $.CreatePanel("Label", slot, `PickTimer_${playerID}`);
        timer.AddClass("PickSlotTimer");
        timer.text = "";
        
        // Подсветка своего слота
        if (playerID === localPlayerID) {
            slot.AddClass("my-slot");
        }
    });
}

function OnSelectionTurn(data: any): void {
    currentPickingPlayerID = data.playerID;
    const timeRemaining = data.timeRemaining;
    unavailableHeroes = data.unavailableHeroes || [];
    
    $.Msg(`⏰ Turn: Player ${currentPickingPlayerID} (${timeRemaining}s)`);
    
    // Обновляем подсветку слотов
    UpdateSlotHighlight(currentPickingPlayerID);
    
    // Обновляем таймер
    UpdateTimerDisplay(currentPickingPlayerID, timeRemaining);
    
    // Блокируем недоступных героев
    UpdateHeroAvailability();
    
    // Блокируем/разблокируем кнопку
    UpdateSelectButton();
}

function UpdateSlotHighlight(activePlayerID: PlayerID): void {
    // Снимаем старую подсветку
    $(".PickSlot").forEach((slot: Panel) => {
        slot.RemoveClass("active");
    });
    
    // Подсвечиваем активный слот
    const activeSlot = $(`#PickSlot_${activePlayerID}`);
    if (activeSlot) {
        activeSlot.AddClass("active");
    }
}

function UpdateTimerDisplay(playerID: PlayerID, time: number): void {
    const timerLabel = $(`#PickTimer_${playerID}`) as LabelPanel;
    if (timerLabel) {
        timerLabel.text = time.toString();
        timerLabel.style.visibility = "visible";
    }
}

function OnTimerTick(data: any): void {
    const time = data.timeRemaining;
    
    if (currentPickingPlayerID !== null) {
        UpdateTimerDisplay(currentPickingPlayerID, time);
    }
}

function UpdateHeroAvailability(): void {
    AVAILABLE_HEROES.forEach(hero => {
        const card = $(`#HeroCard_${hero.id}`);
        if (!card) return;
        
        if (unavailableHeroes.includes(hero.id)) {
            card.AddClass("disabled");
            card.hittest = false;
        } else {
            card.RemoveClass("disabled");
            card.hittest = true;
        }
    });
}

function UpdateSelectButton(): void {
    const button = $("#SelectHeroButton");
    if (!button) return;
    
    const isMyTurn = (currentPickingPlayerID === localPlayerID);
    
    if (isMyTurn) {
        button.enabled = true;
        button.RemoveClass("disabled");
    } else {
        button.enabled = false;
        button.AddClass("disabled");
    }
}

function OnHeroConfirmed(data: any): void {
    const playerID = data.playerID;
    const heroID = data.heroID;
    
    $.Msg(`✅ Player ${playerID} confirmed: ${heroID}`);
    
    // Обновляем аватар в слоте
    const slot = $(`#PickSlot_${playerID}`);
    if (slot) {
        const avatar = slot.FindChild("") as ImagePanel; // Первый Image
        if (avatar) {
            // Меняем на иконку героя (можно использовать DOTAHeroImage)
            // Пока просто оставляем placeholder
        }
    }
    
    // Скрываем таймер
    const timer = $(`#PickTimer_${playerID}`) as LabelPanel;
    if (timer) {
        timer.style.visibility = "collapse";
    }
}

// Обновляем обработчик кнопки "ВЫБРАТЬ"
function OnSelectHeroClicked(): void {
    if (!selectedHeroID) {
        $.Msg("⚠️ No hero selected!");
        return;
    }
    
    $.Msg(`🎯 Confirming hero: ${selectedHeroID}`);
    
    // Отправляем на сервер
    GameEvents.SendCustomGameEventToServer("hero_selected", {
        PlayerID: localPlayerID,
        heroID: selectedHeroID
    });
}
```

**CSS дополнения:**
```css
/* Подсветка текущего пикающего */
.PickSlot.active {
    border-color: #FFFF00;
    border-width: 3px;
    box-shadow: 0px 0px 15px #FFFF00;
}

/* Подсветка своего слота */
.PickSlot.my-slot {
    border-color: #00FF00;
}

/* Заблокированная кнопка */
#SelectHeroButton:disabled {
    background-color: #555555;
    brightness: 0.5;
}
```

**Проверка:** ✅ Слоты обновляются, таймер тикает, кнопка активна только на своем ходу

---

## ✅ Этап 10: Типизация событий (TypeScript)

### 🎯 Цель: Добавить типы для всех событий

- [ ] **10.1** Обновить `src/common/events.d.ts`
  - Интерфейсы для всех hero selection событий
  
**events.d.ts:**
```typescript
// Hero Selection Events

interface HeroSelectionInitEventData {
    pickOrder: PlayerID[];
    initialHeroes: Array<{
        key: PlayerID;
        value: string; // heroID
    }>;
}

interface HeroSelectionTurnEventData {
    playerID: PlayerID;
    timeRemaining: number;
    pickNumber: number;
    totalPicks: number;
    unavailableHeroes: string[];
}

interface HeroSelectionTimerTickEventData {
    timeRemaining: number;
}

interface HeroSelectionConfirmedEventData {
    playerID: PlayerID;
    heroID: string;
}

interface HeroSelectionFinishedEventData {}

// Клиент → Сервер
interface HeroSelectedEventData {
    PlayerID: PlayerID;
    heroID: string;
}
```

**Проверка:** ✅ TypeScript компилируется без ошибок, типы работают

---

## ✅ Этап 11: Tooltip для способностей

### 🎯 Цель: Показывать описание способности при наведении

- [ ] **11.1** Создать панель tooltip в XML
  - Скрытая по умолчанию
  - Появляется при hover на способности

- [ ] **11.2** JavaScript логика tooltip
  - Функция `ShowAbilityTooltip(abilityID)`
  - Функция `HideAbilityTooltip()`
  - Получение данных через Panorama API

**XML (добавить в конец):**
```xml
<!-- Tooltip для способностей -->
<Panel id="AbilityTooltip">
    <Label id="TooltipAbilityName" />
    <Label id="TooltipAbilityDesc" />
</Panel>
```

**CSS:**
```css
#AbilityTooltip {
    position: 0px 0px 0px; /* Будет динамически */
    width: 300px;
    min-height: 100px;
    background-color: #000000DD;
    border: 2px solid #00FF00;
    border-radius: 8px;
    padding: 15px;
    flow-children: down;
    z-index: 9999;
    visibility: collapse; /* Скрыт по умолчанию */
}

#TooltipAbilityName {
    font-size: 20px;
    font-weight: bold;
    color: #00FF00;
    margin-bottom: 10px;
}

#TooltipAbilityDesc {
    font-size: 14px;
    color: #FFFFFF;
}
```

**TypeScript:**
```typescript
function SetupAbilityTooltips(): void {
    // После создания ability grid
    const grid = $("#AbilitiesGrid");
    if (!grid) return;
    
    grid.FindChildrenWithClassTraverse("DOTAAbilityImage").forEach((abilityImage: Panel) => {
        abilityImage.SetPanelEvent("onmouseover", () => {
            const abilityName = (abilityImage as DOTAAbilityImage).abilityname;
            ShowAbilityTooltip(abilityName);
        });
        
        abilityImage.SetPanelEvent("onmouseout", () => {
            HideAbilityTooltip();
        });
    });
}

function ShowAbilityTooltip(abilityID: string): void {
    const tooltip = $("#AbilityTooltip");
    if (!tooltip) return;
    
    const nameLabel = $("#TooltipAbilityName") as LabelPanel;
    const descLabel = $("#TooltipAbilityDesc") as LabelPanel;
    
    // Получаем локализованное имя
    const abilityName = $.Localize(`#DOTA_Tooltip_ability_${abilityID}`);
    const abilityDesc = $.Localize(`#DOTA_Tooltip_ability_${abilityID}_Description`);
    
    if (nameLabel) nameLabel.text = abilityName;
    if (descLabel) descLabel.text = abilityDesc;
    
    // Позиционируем рядом с курсором
    const cursorPos = GameUI.GetCursorPosition();
    tooltip.style.x = `${cursorPos[0] + 20}px`;
    tooltip.style.y = `${cursorPos[1]}px`;
    
    tooltip.style.visibility = "visible";
}

function HideAbilityTooltip(): void {
    const tooltip = $("#AbilityTooltip");
    if (tooltip) {
        tooltip.style.visibility = "collapse";
    }
}
```

**Проверка:** ✅ При наведении на способность появляется tooltip с описанием

---

## ✅ Этап 12: Анимации и полировка

### 🎯 Цель: Плавные появления и переходы

- [ ] **12.1** Fade-in анимации при загрузке
  - Колонки появляются последовательно
  - Список героев с задержкой

- [ ] **12.2** Transition для смены информации
  - При смене героя плавная смена имени и способностей

- [ ] **12.3** Пульсация таймера при < 5 секунд
  - Красный цвет + анимация scale

**CSS анимации:**
```css
/* Fade-in для колонок */
#LeftColumn, #CenterColumn, #RightColumn {
    animation-name: FadeInColumn;
    animation-duration: 0.8s;
    animation-fill-mode: backwards;
}

#LeftColumn {
    animation-delay: 0.0s;
}

#CenterColumn {
    animation-delay: 0.2s;
}

#RightColumn {
    animation-delay: 0.4s;
}

@keyframes 'FadeInColumn' {
    0% {
        opacity: 0;
        pre-transform-scale2d: 0.95;
    }
    100% {
        opacity: 1;
        pre-transform-scale2d: 1.0;
    }
}

/* Пульсация таймера */
.PickSlotTimer.urgent {
    animation-name: PulseTimer;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

@keyframes 'PulseTimer' {
    0% {
        pre-transform-scale2d: 1.0;
        color: #FF0000;
    }
    100% {
        pre-transform-scale2d: 1.3;
        color: #FFFF00;
    }
}

/* Transition для смены героя */
#HeroName, #HeroAltName {
    transition-property: opacity;
    transition-duration: 0.3s;
}
```

**TypeScript (анимация смены):**
```typescript
function UpdateHeroInfo(heroID: string): void {
    const heroData = AVAILABLE_HEROES.find(h => h.id === heroID);
    if (!heroData) return;
    
    const nameLabel = $("#HeroName") as LabelPanel;
    const altNameLabel = $("#HeroAltName") as LabelPanel;
    
    // Fade out
    if (nameLabel) nameLabel.style.opacity = "0";
    if (altNameLabel) altNameLabel.style.opacity = "0";
    
    // Через 0.3s обновляем текст и fade in
    $.Schedule(0.3, () => {
        if (nameLabel) {
            nameLabel.text = heroData.name.toUpperCase();
            nameLabel.style.opacity = "1";
        }
        if (altNameLabel) {
            altNameLabel.text = heroData.altName;
            altNameLabel.style.opacity = "1";
        }
    });
    
    UpdateAbilities(heroData.abilities);
}

// Обновляем таймер с анимацией при < 5 сек
function OnTimerTick(data: any): void {
    const time = data.timeRemaining;
    
    if (currentPickingPlayerID !== null) {
        const timerLabel = $(`#PickTimer_${currentPickingPlayerID}`) as LabelPanel;
        if (timerLabel) {
            timerLabel.text = time.toString();
            
            // Пульсация при < 5 секунд
            if (time <= 5) {
                timerLabel.AddClass("urgent");
            } else {
                timerLabel.RemoveClass("urgent");
            }
        }
    }
}
```

**Проверка:** ✅ Анимации плавные, таймер пульсирует при малом времени

---

## ✅ Этап 13: Финальная полировка и тестирование

### 🎯 Цель: Довести до продакшена

- [ ] **13.1** Обработка edge cases
  - Отключение игрока во время его хода
  - Перезагрузка UI (`ui_reloadscheme`)
  - Проверка на < 8 игроков

- [ ] **13.2** Адаптивность (опционально)
  - Проверка на разных разрешениях
  - Корректировка размеров элементов

- [ ] **13.3** Финальное тестирование
  - Тест с 1 игроком + 7 ботов
  - Тест с реальными игроками (если возможно)
  - Проверка всех сценариев (timeout, выбор, random)

- [ ] **13.4** Логирование и дебаг
  - Убрать лишние `$.Msg()` для production
  - Оставить только важные логи
  - Проверить консоль на ошибки

**Проверка:** ✅ Все работает стабильно во всех сценариях

---

## ✅ Этап 14: Экран PRE_GAME (Loading Screen с 3D моделями)

### 🎯 Цель: Показать выбранных героев в 3D со скинами + таймер до спавна

После завершения выбора героев (HERO_SELECTION) игра автоматически переходит в состояние **PRE_GAME (8)**. На этом этапе:
- Герои УЖЕ назначены через `SetSelectedHero()` → **скины загружены!**
- Нужно показать 3D модели всех героев со скинами
- Таймер обратного отсчета до спавна на карте

**Важно:** Это НЕ ранний loading screen (который мы делали в PLAN_LOADING_SCREEN.md для CUSTOM_GAME_SETUP), а **стратегический экран** перед началом игры.

---

### 📁 Файлы для создания:

**Panorama UI:**
```
src/panorama/pre_game.ts                                    → TypeScript логика
content/panorama/layout/custom_game/pre_game_screen.xml   → XML структура
content/panorama/styles/custom_game/pre_game_screen.css   → Стили
```

**VScripts (серверная логика):**
```
src/vscripts/GameMode.ts    → Добавим обработку PRE_GAME состояния
```

**Манифест:**
```xml
<!-- НЕ нужен CustomUIElement! PRE_GAME использует стандартный loading screen -->
<!-- Но можно кастомизировать через хаки (см. ниже) -->
```

---

### 📋 Этап 14.1: Серверная логика PRE_GAME

- [ ] **14.1.1** Добавить обработчик PRE_GAME в `GameMode.ts`
  - В функции `OnStateChange()` добавить case для `GameState.PRE_GAME`
  - Установить время до старта игры: `GameRules.SetStrategyTime(15)` (15 секунд)

- [ ] **14.1.2** Собрать данные о выбранных героях
  - Пройтись по всем игрокам
  - Получить `PlayerResource.GetSelectedHeroName(playerID)`
  - Отправить на клиент

- [ ] **14.1.3** Запустить таймер до спавна
  - Обратный отсчет от 15 секунд
  - Отправка тиков на клиент каждую секунду

**VScripts реализация:**
```typescript
// src/vscripts/GameMode.ts

public OnStateChange(): void {
    const state = GameRules.State_Get();
    
    print(`=== Game Rules State Change: ${state} ===`);
    
    // ... существующие обработчики ...
    
    if (state === GameState.PRE_GAME) {
        this.OnPreGame();
    }
}

private OnPreGame(): void {
    print("🎮 PRE_GAME state started - Strategy time before spawn");
    
    // Устанавливаем время стратегии (15 секунд)
    GameRules.SetStrategyTime(15);
    
    // Собираем данные о героях
    const heroesData: Array<{playerID: number; heroID: string}> = [];
    
    for (let playerID = 0; playerID < 24; playerID++) {
        if (PlayerResource.IsValidPlayerID(playerID) && 
            !PlayerResource.IsFakeClient(playerID)) {
            
            const heroName = PlayerResource.GetSelectedHeroName(playerID);
            if (heroName && heroName !== "") {
                heroesData.push({
                    playerID: playerID,
                    heroID: heroName
                });
                
                print(`✅ Player ${playerID} hero: ${heroName}`);
            }
        }
    }
    
    // Отправляем данные на клиент с задержкой (UI может грузиться)
    Timers.CreateTimer(0.5, () => {
        CustomGameEventManager.Send_ServerToAllClients("pre_game_heroes", {
            heroes: heroesData as any
        });
        return undefined;
    });
    
    // Запускаем таймер обратного отсчета
    this.StartPreGameTimer(15);
}

private StartPreGameTimer(seconds: number): void {
    let remaining = seconds;
    
    const timerHandle = Timers.CreateTimer(0.0, () => {
        // Отправляем тик
        CustomGameEventManager.Send_ServerToAllClients("pre_game_timer", {
            timeRemaining: remaining
        });
        
        print(`⏰ Strategy time: ${remaining}s`);
        
        remaining--;
        
        if (remaining < 0) {
            print("🎉 Strategy time ended, spawning heroes...");
            return undefined; // Останавливаем таймер
        }
        
        return 1.0; // Следующий тик через 1 секунду
    });
}
```

**Проверка:** ✅ В консоли логируется PRE_GAME, список героев, таймер тикает

---

### 📋 Этап 14.2: UI для PRE_GAME (упрощенная версия)

**Проблема:** В Dota 2 состояние PRE_GAME использует **стандартный loading screen Valve**, который сложно полностью переопределить через манифест.

**Решение:** 3 варианта (по возрастанию сложности):

#### **Вариант A: Простой (рекомендуется для старта)**
Использовать существующий `custom_game_setup.xml` (который уже есть):
- Он уже отображается во время PRE_GAME
- Добавить панель с 3D моделями героев
- Добавить таймер обратного отсчета

#### **Вариант B: Средний**
Создать отдельный `pre_game_screen.xml` и подключить через хак:
- В `game_setup.ts` отслеживать переход в PRE_GAME
- Динамически создавать новую панель поверх существующей

#### **Вариант C: Сложный (опционально)**
Полностью переопределить loading screen через манифест (нестабильно).

---

**Реализуем Вариант A (самый простой):**

- [ ] **14.2.1** Обновить `game_setup.ts`
  - Добавить обработчик события `pre_game_heroes`
  - Создать панель с 3D героями
  - Скрыть старые элементы (кнопка "Начать игру", таймер автостарта)

- [ ] **14.2.2** Добавить контейнер для 3D героев в XML
  - `<Panel id="HeroesPreviewPanel">` (изначально скрыт)
  - Будет показан при переходе в PRE_GAME

- [ ] **14.2.3** Создать 3D модели через `DOTAScenePanel`
  - Для каждого игрока создать `DOTAScenePanel`
  - Установить `SetUnit(heroEntityIndex)` - покажет героя СО СКИНАМИ!

- [ ] **14.2.4** Добавить таймер обратного отсчета
  - Большой таймер по центру: "До начала игры: X сек."

**TypeScript реализация:**
```typescript
// src/panorama/game_setup.ts (добавить в конец)

// Подписка на PRE_GAME события
GameEvents.Subscribe("pre_game_heroes", OnPreGameHeroes);
GameEvents.Subscribe("pre_game_timer", OnPreGameTimer);

function OnPreGameHeroes(data: any): void {
    $.Msg("🎮 PRE_GAME: Received heroes data");
    
    // Скрываем элементы CUSTOM_GAME_SETUP
    HideSetupElements();
    
    // Показываем панель с героями
    ShowHeroesPreview(data.heroes);
}

function HideSetupElements(): void {
    const setupLabel = $("#SetupLabel");
    const teamLabel = $("#TeamLabel");
    const autoStartTimer = $("#AutoStartTimer");
    const bottomContainer = $("#SetupBottomContainer");
    
    if (setupLabel) setupLabel.style.visibility = "collapse";
    if (teamLabel) teamLabel.style.visibility = "collapse";
    if (autoStartTimer) autoStartTimer.style.visibility = "collapse";
    if (bottomContainer) bottomContainer.style.visibility = "collapse";
    
    $.Msg("✅ Hidden CUSTOM_GAME_SETUP elements");
}

function ShowHeroesPreview(heroesData: Array<{playerID: number; heroID: string}>): void {
    let previewPanel = $("#HeroesPreviewPanel");
    
    // Создаем панель если её нет
    if (!previewPanel) {
        const root = $("#GameSetupRoot");
        if (!root) return;
        
        previewPanel = $.CreatePanel("Panel", root, "HeroesPreviewPanel");
        previewPanel.AddClass("heroes-preview-panel");
    }
    
    previewPanel.style.visibility = "visible";
    
    // Очищаем старый контент
    previewPanel.RemoveAndDeleteChildren();
    
    // Заголовок
    const title = $.CreatePanel("Label", previewPanel, "PreGameTitle");
    title.AddClass("pre-game-title");
    title.text = "ВЫБРАННЫЕ ГЕРОИ";
    
    // Контейнер для героев
    const heroesContainer = $.CreatePanel("Panel", previewPanel, "HeroesContainer");
    heroesContainer.AddClass("heroes-container");
    
    // Создаем 3D модели для каждого героя
    heroesData.forEach(({playerID, heroID}) => {
        Create3DHeroCard(heroesContainer, playerID, heroID);
    });
    
    // Таймер (создаем отдельно)
    const timerLabel = $.CreatePanel("Label", previewPanel, "PreGameTimer");
    timerLabel.AddClass("pre-game-timer");
    timerLabel.text = "До начала игры: --";
    
    $.Msg(`✅ Created ${heroesData.length} hero preview cards`);
}

function Create3DHeroCard(parent: Panel, playerID: number, heroID: string): void {
    const card = $.CreatePanel("Panel", parent, `Hero3DCard_${playerID}`);
    card.AddClass("hero-3d-card");
    
    // Никнейм игрока
    const playerName = Players.GetPlayerName(playerID) || `Player ${playerID}`;
    const nameLabel = $.CreatePanel("Label", card, "");
    nameLabel.AddClass("hero-card-name");
    nameLabel.text = playerName;
    
    // 3D МОДЕЛЬ ГЕРОЯ (СО СКИНАМИ!)
    // ВАЖНО: DOTAScenePanel требует ENTITY INDEX героя, который уже заспавнен
    // В PRE_GAME герои УЖЕ существуют как entities!
    
    const scenePanel = $.CreatePanel("DOTAScenePanel", card, `Scene_${playerID}`) as DOTAScenePanel;
    scenePanel.AddClass("hero-3d-scene");
    
    // КРИТИЧНО: явные размеры (как с DOTAAvatarImage)
    scenePanel.style.width = "200px";
    scenePanel.style.height = "250px";
    
    // Настройки камеры и освещения
    scenePanel.SetUnit("", true); // Пока пустой, обновим когда получим entity
    
    // Через небольшую задержку получаем entity героя
    $.Schedule(0.5, () => {
        UpdateHeroScene(scenePanel, playerID);
    });
    
    // Имя героя
    const heroNameLabel = $.CreatePanel("Label", card, "");
    heroNameLabel.AddClass("hero-card-hero-name");
    heroNameLabel.text = $.Localize(`#${heroID}`);
}

function UpdateHeroScene(scenePanel: DOTAScenePanel, playerID: number): void {
    // Получаем entity героя (он УЖЕ заспавнен в PRE_GAME)
    const heroEntityIndex = Players.GetPlayerHeroEntityIndex(playerID);
    
    if (heroEntityIndex === -1) {
        $.Msg(`⚠️ Hero not spawned yet for player ${playerID}, retrying...`);
        $.Schedule(0.5, () => UpdateHeroScene(scenePanel, playerID));
        return;
    }
    
    $.Msg(`✅ Setting 3D model for player ${playerID}, entity: ${heroEntityIndex}`);
    
    // МАГИЯ: SetUnit() покажет героя СО ВСЕМИ СКИНАМИ!
    // Потому что entity уже содержит прикрепленные wearables
    scenePanel.SetUnit(`#${heroEntityIndex}`, true);
    
    // Настройки камеры (опционально)
    scenePanel.FireEntityInput("", "SetCamera", "default");
}

function OnPreGameTimer(data: any): void {
    const time = data.timeRemaining;
    const timerLabel = $("#PreGameTimer") as LabelPanel;
    
    if (timerLabel) {
        timerLabel.text = `До начала игры: ${time} сек.`;
        
        // Пульсация при < 5 секунд
        if (time <= 5) {
            timerLabel.AddClass("urgent");
        }
    }
}
```

**XML (добавить в `custom_game_setup.xml`):**
```xml
<!-- В конец GameSetupRoot, перед закрывающим тегом -->
<!-- Панель для PRE_GAME (изначально скрыта) -->
<Panel id="HeroesPreviewPanel" class="heroes-preview-panel" style="visibility: collapse;">
    <!-- Контент создается динамически -->
</Panel>
```

**CSS (добавить в `custom_game_setup.css`):**
```css
/* PRE_GAME: Панель с героями */
.heroes-preview-panel {
    width: 100%;
    height: 100%;
    flow-children: down;
    background-color: #0a0a0a;
    padding: 40px;
}

.pre-game-title {
    font-size: 48px;
    font-weight: bold;
    color: #FFFFFF;
    text-align: center;
    text-shadow: 2px 2px 8px #000000;
    margin-bottom: 40px;
    letter-spacing: 4px;
}

/* Контейнер с 3D моделями героев */
.heroes-container {
    width: 100%;
    height: fill-parent-flow(1.0);
    flow-children: right-wrap; /* Ряд с переносом */
    horizontal-align: center;
    vertical-align: center;
}

/* Карточка одного героя */
.hero-3d-card {
    width: 220px;
    height: 350px;
    margin: 15px;
    background-color: #1a1a1a;
    border: 2px solid #3a3a3a;
    border-radius: 15px;
    flow-children: down;
    padding: 10px;
    
    animation-name: FadeInHeroCard;
    animation-duration: 0.6s;
    animation-fill-mode: backwards;
}

@keyframes 'FadeInHeroCard' {
    0% {
        opacity: 0;
        pre-transform-scale2d: 0.8;
    }
    100% {
        opacity: 1;
        pre-transform-scale2d: 1.0;
    }
}

/* Имя игрока */
.hero-card-name {
    font-size: 16px;
    font-weight: bold;
    color: #00FF00;
    text-align: center;
    margin-bottom: 10px;
}

/* 3D сцена с героем */
.hero-3d-scene {
    width: 200px;
    height: 250px;
    horizontal-align: center;
    background-color: #0a0a0a;
    border: 1px solid #2a2a2a;
    border-radius: 10px;
}

/* Имя героя */
.hero-card-hero-name {
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
    margin-top: 10px;
    text-shadow: 1px 1px 4px #000000;
}

/* Таймер */
.pre-game-timer {
    font-size: 36px;
    font-weight: bold;
    color: #00FF00;
    text-align: center;
    margin-top: 30px;
    text-shadow: 2px 2px 8px #000000;
    
    transition-property: pre-transform-scale2d, color;
    transition-duration: 0.3s;
}

.pre-game-timer.urgent {
    animation-name: PulseUrgent;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

@keyframes 'PulseUrgent' {
    0% {
        pre-transform-scale2d: 1.0;
        color: #FF0000;
    }
    100% {
        pre-transform-scale2d: 1.2;
        color: #FFFF00;
    }
}
```

**Проверка:** ✅ После HERO_SELECTION показываются 3D модели всех героев СО СКИНАМИ, таймер тикает

---

### 📋 Этап 14.3: Типизация событий

- [ ] **14.3.1** Добавить типы в `events.d.ts`

**events.d.ts (добавить):**
```typescript
// PRE_GAME Events

interface PreGameHeroesEventData {
    heroes: Array<{
        playerID: number;
        heroID: string;
    }>;
}

interface PreGameTimerEventData {
    timeRemaining: number;
}
```

**Проверка:** ✅ TypeScript компилируется без ошибок

---

### 📋 Этап 14.4: Тестирование и отладка

- [ ] **14.4.1** Проверить последовательность:
  1. CUSTOM_GAME_SETUP → кнопка "Начать"
  2. HERO_SELECTION → выбор героев
  3. PRE_GAME → 3D модели появляются, таймер работает
  4. GAME_IN_PROGRESS → герои спавнятся на карте

- [ ] **14.4.2** Проверить скины:
  - В PRE_GAME 3D модели должны показывать скины из Steam инвентаря
  - В игре герои должны иметь те же скины

- [ ] **14.4.3** Обработать edge cases:
  - Если герой не заспавнился вовремя → retry
  - Если DOTAScenePanel не работает → fallback на DOTAHeroImage (2D)

**Fallback вариант (если DOTAScenePanel не работает):**
```typescript
// Вместо DOTAScenePanel используем DOTAHeroImage
const heroImage = $.CreatePanel("DOTAHeroImage", card, "") as DOTAHeroImage;
heroImage.heroimagestyle = "landscape"; // Большая картинка
heroImage.heroname = heroID;
heroImage.AddClass("hero-2d-image");

// CSS
// .hero-2d-image {
//     width: 200px;
//     height: 200px;
//     horizontal-align: center;
// }
```

**Проверка:** ✅ Все работает, скины отображаются, таймер корректный

---

### 🎯 Итоговый флоу:

```
CUSTOM_GAME_SETUP
    ↓ [Кнопка "Начать игру"]
    
HERO_SELECTION
    ↓ [Выбор героев по очереди]
    ↓ [PlayerResource.SetSelectedHero() → СКИНЫ ЗАГРУЖЕНЫ!]
    
PRE_GAME (Strategy Time)
    ✅ Скрываем UI game setup
    ✅ Показываем панель с 3D моделями
    ✅ DOTAScenePanel.SetUnit(heroEntity) → ГЕРОИ СО СКИНАМИ!
    ✅ Таймер 15 секунд
    ↓ [Таймер → 0]
    
GAME_IN_PROGRESS
    ✅ Герои спавнятся на карте
    ✅ Скины работают в игре
```

---

### ⚠️ Важные особенности DOTAScenePanel:

1. **Требует entity index героя:**
   - Герои должны быть УЖЕ заспавнены как entities
   - В PRE_GAME они существуют, но могут спавниться с задержкой
   - Используй `Players.GetPlayerHeroEntityIndex(playerID)`

2. **Показывает РЕАЛЬНУЮ entity со всеми wearables:**
   - Это не картинка, а рендер настоящего героя
   - Все скины/косметика автоматически видны
   - Можно настроить камеру, анимацию, освещение

3. **Явные размеры обязательны:**
   - Как и с `DOTAAvatarImage`, устанавливай размеры через JS
   - CSS не всегда работает для специальных панелей

4. **Альтернативы если не работает:**
   - `DOTAHeroImage` (2D картинка) - без скинов, но надежно
   - `Image` с рендером (если есть скриншоты героев)

**Проверка финальная:** ✅ Экран PRE_GAME показывает всех выбранных героев в 3D со скинами из Steam, таймер обратного отсчета работает

---

## 📝 Важные заметки

**Game State Flow:**
```
CUSTOM_GAME_SETUP (2) 
    → кнопка "Начать игру" 
    → GameRules.FinishCustomGameSetup()
    
HERO_SELECTION (4)
    → HeroSelectionManager работает
    → Игроки выбирают по очереди
    → PlayerResource.SetSelectedHero() для каждого игрока
    → Последний игрок выбрал
    → Valve автоматически переходит
    
PRE_GAME (8) / STRATEGY_TIME (5)
    → Скины УЖЕ загружены (через SetSelectedHero)
    → Герои заспавнены как entities
    → Показываем 3D модели ВСЕХ героев через DOTAScenePanel
    → Таймер обратного отсчета (15 секунд)
    → GameRules.SetStrategyTime(15)
    
GAME_IN_PROGRESS (10)
    → Игра началась
    → Герои спавнятся на карте
    → Все скины работают
```

**Критично для работы скинов:**
- ✅ Использовать `PlayerResource.SetSelectedHero()` - Valve загрузит скины
- ❌ НЕ использовать `CreateHeroForPlayer()` напрямую - скины не загрузятся

**Источники информации:**
- `moddota_panorama_api.json` - Panorama API (DOTAHeroImage, DOTAAbilityImage, и т.д.)
- `01_DOTA_IMBA_ANALYSIS.md` - пример системы hero selection
- `forum_full_data.json` - примеры кастомных экранов выбора

**Потенциальные проблемы:**
1. `DOTAHeroImage`/`DOTAAbilityImage` могут требовать явные стили (как DOTAAvatarImage)
2. Panorama CSS парсер имеет ограничения - проверяй сложные селекторы
3. События могут не синхронизироваться если клиент переподключается

---

## 🔧 API Справка

### Panorama API для героев:

```typescript
// DOTAHeroImage - иконка героя
const heroImage = $.CreatePanel("DOTAHeroImage", parent, id) as DOTAHeroImage;
heroImage.heroimagestyle = "icon"; // "icon", "portrait", "landscape"
heroImage.heroname = "npc_dota_hero_axe";

// DOTAAbilityImage - иконка способности
const abilityImage = $.CreatePanel("DOTAAbilityImage", parent, id) as DOTAAbilityImage;
abilityImage.abilityname = "axe_berserker_call";

// Локализация
$.Localize("#npc_dota_hero_axe"); // "Axe"
$.Localize("#DOTA_Tooltip_ability_axe_berserker_call"); // "Berserker's Call"

// События
GameEvents.SendCustomGameEventToServer("event_name", data);
GameEvents.Subscribe("event_name", callback);
```

### VScripts API:

```typescript
// Hero selection
PlayerResource.SetSelectedHero(playerID, "npc_dota_hero_axe"); // ← СКИНЫ!
PlayerResource.GetSelectedHeroEntity(playerID); // После спавна

// Таймеры
Timers.CreateTimer(delay, callback);
Timers.RemoveTimer(handle);

// События
CustomGameEventManager.Send_ServerToAllClients("event", data);
CustomGameEventManager.RegisterListener("event", callback);
```

---

## 📖 Дополнительные этапы (опционально)

### Этап 14: Звуки
- [ ] Звук при выборе героя
- [ ] Звук тикания таймера (последние 5 сек)
- [ ] Звук подтверждения выбора

### Этап 15: Больше информации о герое
- [ ] Атрибуты (сила, ловкость, интеллект)
- [ ] Базовые характеристики (HP, урон, броня)
- [ ] Роль героя (Carry, Support, и т.д.)

### Этап 16: Слайдер скинов
- [ ] Получение доступных скинов (сложно!)
- [ ] Переключение между скинами
- [ ] Превью скина (если возможно)

---

## 🚀 Быстрые команды

```bash
# Билд
npm run build

# Запуск
dota_launch_custom_game bapbap_typescript bapbap_typescript

# Перезагрузка
ui_reloadscheme
script_reload

# Логи
developer 1
dota_dev hero_selection 1
```

---

## 🎯 Приоритеты реализации

**Минимально жизнеспособный продукт (MVP):**
- Этапы 0-9: Базовая функциональность с очередностью

**Для полного функционала:**
- Этапы 10-12: Типизация, tooltip, анимации
- **Этап 14: PRE_GAME экран с 3D моделями и таймером** ← ОБЯЗАТЕЛЬНО!

**Nice to have:**
- Этап 13: Полировка и edge cases
- Этапы 15+: Звуки, доп. информация, слайдер скинов

---

**Следующий шаг:** Начинаем с Этапа 0 - создание структуры файлов. После каждого этапа проверяем работоспособность!
