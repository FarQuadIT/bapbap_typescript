# 📋 ПЛАН РАЗРАБОТКИ ЗАГРУЗОЧНОГО ЭКРАНА

**Архитектура (сверху вниз):**
1. **Логотип игры** (В САМОМ ВЕРХУ по центру)
2. **8 панелей игроков в ряд** (ПОД логотипом, каждая панель сверху вниз):
   - Никнейм игрока (сверху)
   - Аватар Steam (по центру, круглый)
   - Статус: "Загружается...", "Готов", "Отключен" (снизу)
3. **Текст "ИНИЦИАЛИЗАЦИЯ ГЕРОЕВ ИГРОКОВ"** (ПОД панелями игроков)
4. **Кнопка "Начать игру"** (В САМОМ НИЗУ, для тестов)

**Размеры изображений:**
- Логотип: ~800x300px (PNG с прозрачностью)
- Фон (опционально): 1920x1080px

**⚡ TypeScript Структура проекта:**
```
src/panorama/loading_screen.ts       → Пишем код здесь (TypeScript)
  ↓ компиляция
content/panorama/scripts/custom_game/loading_screen.js  → Автоматически создаётся
  ↓ подключение
content/panorama/layout/custom_game/custom_loading_screen.xml  → Подключает .js
```

---

## ✅ Этап 1: Создание базовой версии загрузочного экрана (ВЫПОЛНЕНО)

### Что реально реализовано:

#### 🎯 **Две фазы загрузки:**

**1. LOADING фаза (быстрая):**
- Просто картинка `background.jpg` на весь экран
- Файлы: `custom_loading_screen.xml`, `custom_loading_screen.css`, `loading_screen.ts`
- Блокировка стандартных панелей Dota 2 (sidebar)

**2. CUSTOM_GAME_SETUP фаза (интерактивная):**
- Темный фон `#1a1a1a` на весь экран
- Текст "Загрузка игры..."
- Текст "Вы будете автоматически распределены в команду"
- Кнопка "Начать игру"
- **Автоматическое распределение игрока в команду Radiant**
- **Плавные анимации появления** (fade-in)

---

### 🔧 Ключевые технические решения:

#### ✅ **1. Структура файлов:**

**LOADING фаза:**
```
content/panorama/layout/custom_game/custom_loading_screen.xml
content/panorama/styles/custom_game/custom_loading_screen.css
src/panorama/loading_screen.ts → компилируется в → loading_screen.js
content/panorama/images/custom_game/loading_screen/background.jpg
```

**CUSTOM_GAME_SETUP фаза:**
```
content/panorama/layout/custom_game/custom_game_setup.xml
content/panorama/styles/custom_game/custom_game_setup.css
src/panorama/game_setup.ts → компилируется в → game_setup.js
```

**Манифест:**
```xml
<!-- content/panorama/layout/custom_game/custom_ui_manifest.xml -->
<CustomUIElement type="GameSetup" 
  layoutfile="file://{resources}/layout/custom_game/custom_game_setup.xml" />
```

---

#### ✅ **2. Проблема: Панель не занимает 100% экрана (левая полоска)**

**Решение:** Программно растягиваем **ВСЕ родительские панели** вверх по иерархии:

```typescript
// src/panorama/game_setup.ts
function ForceFullScreen(): void {
    const rootPanel = $.GetContextPanel();
    
    // Растягиваем ВСЕ родительские панели
    let currentPanel = rootPanel.GetParent();
    let level = 1;
    
    while (currentPanel && level < 10) {
        currentPanel.style.width = "100%";
        currentPanel.style.height = "100%";
        currentPanel.style.position = "0 0 0 0";
        currentPanel.style.margin = "0px";
        currentPanel.style.padding = "0px";
        
        currentPanel = currentPanel.GetParent();
        level++;
    }
}

// Вызываем несколько раз с задержками
ForceFullScreen();
$.Schedule(0.1, ForceFullScreen);
$.Schedule(0.5, ForceFullScreen);
$.Schedule(1.0, ForceFullScreen);
```

**Почему это работает:**
- `CustomUIElement type="GameSetup"` создаёт контейнеры, которые ограничивают ширину
- Нужно растягивать не только корневую панель, но и всех её родителей
- Повторные вызовы гарантируют применение стилей после загрузки UI

---

#### ✅ **3. Автоматическое распределение игрока в команду**

**Проблема:** Боты занимают все слоты, игрок не может выбрать героя.

**Решение:** Распределяем игрока **ДО** добавления ботов:

```typescript
// src/vscripts/GameMode.ts
if (state === GameState.CUSTOM_GAME_SETUP) {
    // Через 0.5 сек → распределяем реальных игроков
    Timers.CreateTimer(0.5, () => {
        for (let playerID = 0; playerID < 24; playerID++) {
            if (PlayerResource.IsValidPlayerID(playerID)) {
                const isFakeClient = PlayerResource.IsFakeClient(playerID);
                if (!isFakeClient) {
                    const player = PlayerResource.GetPlayer(playerID);
                    if (player) {
                        player.SetTeam(DotaTeam.GOODGUYS);
                    }
                }
            }
        }
        return undefined;
    });
    
    // Через 2 сек → добавляем ботов
    if (IsInToolsMode()) {
        Timers.CreateTimer(2, () => {
            for (let i = 0; i < 4; i++) {
                SendToServerConsole("dota_bot_populate");
            }
            return undefined;
        });
    }
}
```

**Клиентская часть (Panorama):**
```typescript
// src/panorama/game_setup.ts
const localPlayerID = Game.GetLocalPlayerID();
(GameEvents.SendCustomGameEventToServer as any)("auto_assign_team", 
    { playerID: localPlayerID });
```

---

#### ✅ **4. Плавные анимации появления**

**CSS анимации в `custom_game_setup.css`:**

```css
/* Фон плавно появляется за 0.8с */
.GameSetupRoot {
    animation-name: FadeIn;
    animation-duration: 0.8s;
    animation-timing-function: ease-in;
}

@keyframes 'FadeIn' {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

/* Элементы появляются по очереди */
#SetupLabel {
    animation-name: FadeInText;
    animation-duration: 1s;
    animation-delay: 0.3s;  /* Заголовок: +0.3с */
    animation-fill-mode: backwards;
}

#TeamLabel {
    animation-delay: 0.5s;  /* Текст: +0.5с */
}

#SetupBottomContainer {
    animation-delay: 0.7s;  /* Кнопка: +0.7с */
}
```

---

#### ✅ **5. Блокировка стандартных панелей Dota 2**

**В `loading_screen.ts`:**
```typescript
function BlockStandardPanels(): void {
    const contextPanel = $.GetContextPanel();
    const grandParent = contextPanel.GetParent()?.GetParent();
    
    if (grandParent) {
        const sidebar = grandParent.FindChildTraverse('SidebarAndBattleCupLayoutContainer');
        if (sidebar) {
            sidebar.style.visibility = "collapse";
            sidebar.hittest = false;
            sidebar.hittestchildren = false;
        }
    }
}

BlockStandardPanels();
$.Schedule(0.1, BlockStandardPanels);
$.Schedule(0.5, BlockStandardPanels);
```

---

### 📋 Итоговый флоу игры:

1. **LOADING** (1-3 сек):
   - Картинка `background.jpg` на весь экран
   - Блокировка sidebar Dota 2
   
2. **CUSTOM_GAME_SETUP** (до нажатия кнопки):
   - Плавное появление темного фона (0.8с)
   - Плавное появление текста и кнопки (0.3с → 0.5с → 0.7с)
   - Автоматическое распределение игрока в Radiant (через 0.5с)
   - Добавление ботов (через 2с)
   - Игрок нажимает "Начать игру"
   
3. **HERO_SELECTION** (60 сек):
   - Стандартный UI выбора героев
   - Игрок может выбрать героя
   
4. **PRE_GAME** → **GAME_IN_PROGRESS**

---

### 🚀 Команды для тестирования:

```bash
# Билд проекта
npm run build

# Запуск кастомки
dota_launch_custom_game bapbap_typescript bapbap_typescript

# Перезагрузка UI без перезапуска
ui_reloadscheme

# Перезагрузка скриптов
script_reload
```

---

### ⚠️ Важные особенности Panorama:

1. **`z-index` не работает в CSS**, только через JS: `panel.style.zIndex = 9999`
2. **`position: 0 0 0 0`** = `left top right bottom` (4 значения)
3. **`animation-fill-mode: backwards`** нужен для применения начального стиля во время `animation-delay`
4. **`PlayerResource.IsFakeClient(playerID)`** - правильный способ проверки на бота (не `player.IsBot()`)
5. **`(GameEvents.SendCustomGameEventToServer as any)`** - обход TypeScript типизации для кастомных событий

---

**Проверка Этапа 1:** 
✅ Картинка загрузки появляется
✅ Темный экран GameSetup плавно появляется на **весь экран** (без полосок)
✅ Игрок автоматически распределяется в команду
✅ Можно выбрать героя в HERO_SELECTION
✅ Анимации работают плавно

---

## ✅ Этап 2: Добавление логотипа В САМОМ ВЕРХУ

- [ ] **2.1** Добавить логотип в XML В НАЧАЛЕ (первым элементом)
  - Панель-контейнер в самом верху
  - `<Image>` элемент с логотипом
  - БЕЗ текста "ИНИЦИАЛИЗАЦИЯ" (он будет позже под игроками)

- [ ] **2.2** Стилизация логотипа в CSS
  - Расположение в самом верху по центру
  - Размеры логотипа
  - Отступы сверху и снизу

**Проверка:** Логотип виден В САМОМ ВЕРХУ экрана по центру

---

## ✅ Этап 3: Создание статичного макета панелей игроков ПОД логотипом

- [ ] **3.1** Добавить контейнер для игроков ПОД логотипом
  - `<Panel id="PlayersContainer">` с горизонтальным flow
  - 8 статичных панелей игроков для теста

- [ ] **3.2** Структура одной панели игрока (сверху вниз внутри панели):
  1. Никнейм (тестовый текст "Player 1") - СВЕРХУ
  2. Аватар (пока placeholder image) - ПО ЦЕНТРУ
  3. Статус (тестовый текст "Загружается...") - СНИЗУ

- [ ] **3.3** Добавить текст "ИНИЦИАЛИЗАЦИЯ ГЕРОЕВ ИГРОКОВ" ПОД панелями
  - `<Label id="InitText">` под PlayersContainer
  - CSS стилизация текста

- [ ] **3.4** CSS для всех элементов
  - Горизонтальное расположение панелей в ряд (flow-children: right)
  - Вертикальное расположение внутри панели (flow-children: down)
  - Размеры панелей и отступы между ними
  - Стили для аватаров (круглая форма через border-radius)
  - Стили для текста никнейма (сверху) и статуса (снизу)
  - Стили для текста "ИНИЦИАЛИЗАЦИЯ"

**Проверка:** Сверху вниз: ЛОГОТИП → 8 ПАНЕЛЕЙ ИГРОКОВ → ТЕКСТ "ИНИЦИАЛИЗАЦИЯ" → КНОПКА

---

## ✅ Этап 4: Динамическое создание панелей через TypeScript

- [ ] **4.1** Добавить функции в `src/panorama/loading_screen.ts`
  - Функция `CreatePlayerPanels()` для генерации панелей
  - Получить количество игроков через `Game.GetAllPlayerIDs()`
  - Динамически создавать панели через `$.CreatePanel()`
  - Добавить типизацию TypeScript

- [ ] **4.2** Удалить статичные панели из XML
  - Оставить только пустой контейнер `PlayersContainer`
  - Панели будут создаваться скриптом

- [ ] **4.3** Тестовая логика заполнения
  - Для каждого playerID создать панель
  - Заполнить тестовыми данными (пока без реальных аватаров)

**Проверка:** Панели создаются динамически, их количество = количеству игроков в игре

---

## ✅ Этап 5: Получение реальных данных игроков

- [ ] **5.1** Использовать Panorama API для аватаров
  - Попробовать `DOTAAvatarImage` элемент вместо `Image`
  - Передать playerID для каждого игрока
  - Если не работает - использовать альтернативные методы

- [ ] **5.2** Получение никнеймов
  - `Players.GetPlayerName(playerID)` для никнеймов
  - Fallback на "Player X" если имя недоступно

- [ ] **5.3** Проверка на ботов
  - Определение ботов через API
  - Отображение специального индикатора для ботов (опционально)

**Проверка:** Реальные аватары Steam и никнеймы игроков отображаются в панелях

---

## ✅ Этап 6: Система статусов загрузки

- [ ] **6.1** Определение статусов через Game API
  - Использовать `Game.GetPlayerInfo(playerID)` для получения connection state
  - Или альтернативный метод через кастомные события с сервера

- [ ] **6.2** Маппинг состояний на текст
  - CONNECTION_STATE_LOADING → "Загружается..."
  - CONNECTION_STATE_CONNECTED → "Готов"
  - CONNECTION_STATE_DISCONNECTED → "Отключен"
  - CONNECTION_STATE_FAILED → "Ошибка подключения"

- [ ] **6.3** Визуальная индикация статусов
  - Разные цвета для разных статусов в CSS
  - Класс `.loading`, `.ready`, `.disconnected`
  - Анимация для статуса "Загружается..." (опционально)

**Проверка:** Статусы игроков корректно отображаются и обновляются

---

## ✅ Этап 7: Обновление статусов в реальном времени

- [ ] **7.1** Создать таймер для обновления в TypeScript
  - `$.Schedule()` для периодической проверки (каждые 0.5 сек)
  - Функция `UpdatePlayerStatuses()` в `loading_screen.ts`

- [ ] **7.2** Обновление UI при изменении статуса
  - Сравнение предыдущего и нового состояния
  - Обновление только измененных панелей (оптимизация)

- [ ] **7.3** Подписка на игровые события
  - `GameEvents.Subscribe("player_connect", ...)` (если доступно)
  - Обновление UI по событиям вместо polling (если возможно)

**Проверка:** Статусы обновляются автоматически без перезагрузки экрана

---

## ✅ Этап 8: Полировка и финальные штрихи

- [ ] **8.1** Анимации появления
  - Fade-in для панелей игроков
  - Пульсация для статуса "Загружается..."

- [ ] **8.2** Адаптивность
  - Проверка на разных разрешениях
  - Корректировка размеров и отступов

- [ ] **8.3** Обработка edge cases
  - Меньше 8 игроков - центрирование панелей
  - Больше 8 игроков - скроллинг или уменьшение размера

- [ ] **8.4** Локализация
  - Вынести текстовые строки в локализацию (опционально)
  - Поддержка разных языков

**Проверка:** Экран загрузки выглядит профессионально и работает во всех сценариях

---

## ✅ Этап 9: Тестирование

- [ ] **9.1** Тест с разным количеством игроков
  - Соло (1 игрок + боты)
  - 5 игроков
  - 8+ игроков

- [ ] **9.2** Тест статусов
  - Симуляция отключения (если возможно)
  - Проверка задержки загрузки

- [ ] **9.3** Тест производительности
  - Проверка FPS на экране загрузки
  - Оптимизация если есть просадки

**Проверка:** Все работает стабильно без ошибок в консоли

---

## 📝 Важные заметки

**Источники информации:**
- `HELP_FOR_CLAUDE/forum_full_data.json` - примеры custom_loading_screen из форума
- `HELP_FOR_CLAUDE/Documentation_api_and_functions_lua_and_panorama/moddota_panorama_api.json` - Panorama API
- `DOTAConnectionState_t` enum для статусов: UNKNOWN(0), NOT_YET_CONNECTED(1), CONNECTED(2), DISCONNECTED(3), ABANDONED(4), LOADING(5), FAILED(6)

**Потенциальные проблемы:**
1. `DOTAAvatarImage` может не работать в custom loading screen - тогда используем альтернативу
2. Game API может быть ограничен на этапе loading - проверим и адаптируем
3. Статусы могут требовать серверную часть для точности - добавим если нужно

**Следующий шаг:**
Начинаем с Этапа 1. Реализация по одному чекбоксу, после каждого можно тестировать.

---

## 🔧 API и Методы для Разработки

### Panorama JavaScript API (доступные в loading screen):

**Работа с игроками:**
```javascript
Game.GetAllPlayerIDs()              // Массив всех playerID в игре
Players.GetPlayerName(playerID)     // Никнейм игрока
Players.GetTeam(playerID)           // Команда игрока (2-Radiant, 3-Dire, и т.д.)
Game.GetLocalPlayerID()             // ID локального игрока
```

**Работа с состоянием игры:**
```javascript
Game.GetState()                     // Текущее состояние игры (0-7)
// DOTA_GAMERULES_STATE_INIT = 0
// DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD = 1
// DOTA_GAMERULES_STATE_HERO_SELECTION = 2
// DOTA_GAMERULES_STATE_STRATEGY_TIME = 3
// DOTA_GAMERULES_STATE_PRE_GAME = 4
// DOTA_GAMERULES_STATE_GAME_IN_PROGRESS = 5
// DOTA_GAMERULES_STATE_POST_GAME = 6
// DOTA_GAMERULES_STATE_DISCONNECT = 7
```

**Работа с UI панелями:**
```javascript
$.CreatePanel(type, parent, id)     // Создать панель ("Panel", "Label", "Image", "Button")
$.GetContextPanel()                 // Получить корневую панель
panel.FindChild(id)                 // Найти дочернюю панель по ID
panel.FindChildTraverse(id)         // Рекурсивный поиск по всему дереву
panel.SetHasClass(class, bool)      // Добавить/убрать класс
panel.AddClass(class)               // Добавить класс
panel.RemoveClass(class)            // Убрать класс
panel.DeleteAsync(delay)            // Удалить панель с задержкой
```

**Работа с атрибутами:**
```javascript
panel.SetAttributeString(attr, val) // Установить строковый атрибут
panel.SetAttributeInt(attr, val)    // Установить числовой атрибут
label.text = "текст"                // Установить текст Label
image.SetImage(path)                // Установить изображение
```

**Таймеры и события:**
```javascript
$.Schedule(delay, func)             // Запустить функцию через delay секунд
$.Msg(...)                          // Вывести в консоль
GameEvents.Subscribe(event, func)   // Подписаться на событие
GameEvents.SendCustomGameEventToServer(event, data) // Отправить на сервер
```

**Специальные элементы для Dota 2:**
```javascript
// DOTAAvatarImage - аватар Steam (может не работать в loading screen)
// DOTAUserName - имя пользователя
// DOTAHeroImage - иконка героя
```

---

### CSS Свойства (работающие в Panorama):

**Размеры и отступы:**
```css
width: 100px;                    /* Ширина в px или % */
height: 50px;                    /* Высота */
min-width: 100px;               /* Минимальная ширина */
max-width: 500px;               /* Максимальная ширина */
margin: 10px 20px;              /* Внешние отступы */
padding: 5px;                   /* Внутренние отступы */
```

**Позиционирование:**
```css
position: 100px 50px 0px;       /* x y z координаты */
vertical-align: top;            /* top, center, bottom */
horizontal-align: left;         /* left, center, right */
align: center center;           /* vertical horizontal */
```

**Layout:**
```css
flow-children: right;           /* right, down, right-wrap, down-right */
width: fill-parent-flow(1.0);  /* Заполнить родителя */
height: fit-children;           /* По содержимому */
```

**Фон и цвета:**
```css
background-color: #FF0000;      /* Цвет фона */
background-color: rgb(255, 0, 0);
background-color: rgba(255, 0, 0, 0.5);
background-image: url("file://{images}/path/image.png");
background-size: 100% 100%;
```

**Текст:**
```css
font-size: 24px;
color: #FFFFFF;
text-align: center;             /* left, center, right */
font-weight: bold;
text-shadow: 2px 2px 4px #000000;
letter-spacing: 2px;
```

**Границы и скругления:**
```css
border: 2px solid #FFFFFF;
border-radius: 50%;             /* Для круглых элементов */
border-top-left-radius: 10px;
border-top-right-radius: 10px;
```

**Видимость и прозрачность:**
```css
visibility: visible;            /* visible, collapse */
opacity: 1.0;                   /* 0.0 - 1.0 */
```

**Анимации (РАБОТАЮТ в Panorama!):**
```css
/* Transition для плавных переходов */
transition-property: opacity, position;
transition-duration: 0.3s;
transition-timing-function: ease-in-out;
transition-delay: 0s;

/* Keyframe анимации */
animation-name: FadeIn;
animation-duration: 1s;
animation-timing-function: ease-in;
animation-delay: 0s;
animation-iteration-count: 1;   /* или infinite */
animation-fill-mode: forwards;  /* Сохранить конечное состояние */

@keyframes 'FadeIn' {
    0% {
        opacity: 0;
        position: 0px -100px 0px;
    }
    100% {
        opacity: 1;
        position: 0px 0px 0px;
    }
}
```

**⚠️ НЕ РАБОТАЮТ в Panorama:**
- `transform` (scale, rotate, translate - использовать `position` и `pre-transform-scale2d`)
- `box-shadow` (использовать `box-shadow: fill`)
- `float`
- `z-index` (использовать `z-index` но работает не везде)
- Некоторые CSS3 псевдо-классы

**✅ Альтернативы:**
```css
/* Вместо transform: scale() */
pre-transform-scale2d: 1.5;

/* Box shadow работает специфично */
box-shadow: fill #000000FF 0px 0px 8px 0px;

/* Wash-color для overlay эффектов */
wash-color: #FF000080;
```

---

## 🎮 Дополнительные Этапы

### ✅ Этап 0.5: Кнопка "Начать игру" для тестирования

- [ ] **0.5.1** Добавить кнопку в XML внизу по центру
  - `<Button id="StartGameButton">` с текстом "Начать игру"
  - Контейнер внизу экрана

- [ ] **0.5.2** Стилизация кнопки в CSS
  - Позиционирование внизу по центру
  - Красивый дизайн с hover эффектом
  - Размеры: 200x50px

- [ ] **0.5.3** JavaScript обработчик
  - Отправка события на сервер для начала игры
  - Или переход к следующему этапу (hero selection)
  - Кнопка появляется когда все готовы

**Проверка:** Кнопка отображается внизу, при клике отправляет событие

**Примечание:** Эта кнопка только для тестов, в финальной версии можно убрать

---

## 📖 Примеры Кода

### Пример XML структуры (custom_loading_screen.xml):
```xml
<root>
    <styles>
        <include src="file://{resources}/styles/custom_game/custom_loading_screen.css" />
    </styles>

    <scripts>
        <!-- ВАЖНО: подключаем СКОМПИЛИРОВАННЫЙ .js файл, а не .ts! -->
        <include src="file://{resources}/scripts/custom_game/loading_screen.js" />
    </scripts>

    <Panel id="LoadingScreenRoot">
        <!-- 1. ЛОГОТИП В САМОМ ВЕРХУ -->
        <Panel id="LogoContainer">
            <Image id="Logo" src="file://{images}/custom_game/loading_screen/logo.png" />
        </Panel>

        <!-- 2. ПАНЕЛИ ИГРОКОВ ПОД ЛОГОТИПОМ -->
        <Panel id="PlayersContainer">
            <!-- Панели игроков будут создаваться динамически -->
            <!-- Каждая панель: никнейм (сверху) → аватар (центр) → статус (снизу) -->
        </Panel>

        <!-- 3. ТЕКСТ "ИНИЦИАЛИЗАЦИЯ" ПОД ПАНЕЛЯМИ -->
        <Panel id="InitTextContainer">
            <Label id="InitText" text="ИНИЦИАЛИЗАЦИЯ ГЕРОЕВ ИГРОКОВ" />
        </Panel>

        <!-- 4. КНОПКА В САМОМ НИЗУ (для тестов) -->
        <Panel id="BottomContainer">
            <Button id="StartGameButton" onactivate="OnStartGameClicked()">
                <Label text="Начать игру" />
            </Button>
        </Panel>
    </Panel>
</root>
```

### Пример CSS:
```css
#LoadingScreenRoot {
    width: 100%;
    height: 100%;
    background-color: #1a1a1a;
    flow-children: down;  /* Все элементы сверху вниз */
}

/* 1. ЛОГОТИП В САМОМ ВЕРХУ */
#LogoContainer {
    width: 100%;
    horizontal-align: center;
    margin-top: 40px;
    margin-bottom: 30px;
}

#Logo {
    width: 800px;
    height: 300px;
    horizontal-align: center;
}

/* 2. ПАНЕЛИ ИГРОКОВ ПОД ЛОГОТИПОМ */
#PlayersContainer {
    width: 100%;
    height: 180px;
    horizontal-align: center;
    flow-children: right;  /* Панели в ряд горизонтально */
    margin-bottom: 20px;
}

.PlayerPanel {
    width: 120px;
    height: 160px;
    margin: 0px 10px;
    flow-children: down;  /* Внутри панели: никнейм → аватар → статус */
    horizontal-align: center;
}

/* Никнейм - СВЕРХУ в панели игрока */
.PlayerName {
    font-size: 16px;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 8px;
    font-weight: bold;
}

/* Аватар - ПО ЦЕНТРУ панели игрока */
.PlayerAvatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid #FFFFFF;
    margin-bottom: 8px;
}

/* Статус - СНИЗУ в панели игрока */
.PlayerStatus {
    font-size: 14px;
    text-align: center;
}

.PlayerStatus.loading {
    color: #FFA500;
}

.PlayerStatus.ready {
    color: #00FF00;
}

.PlayerStatus.disconnected {
    color: #FF0000;
}

/* 3. ТЕКСТ "ИНИЦИАЛИЗАЦИЯ" ПОД ПАНЕЛЯМИ */
#InitTextContainer {
    width: 100%;
    horizontal-align: center;
    margin-bottom: 30px;
}

#InitText {
    font-size: 32px;
    color: #FFFFFF;
    text-align: center;
    text-shadow: 2px 2px 8px #000000;
    horizontal-align: center;
}

/* 4. КНОПКА В САМОМ НИЗУ */
#BottomContainer {
    width: 100%;
    height: 100px;
    vertical-align: bottom;
    horizontal-align: center;
}

#StartGameButton {
    width: 200px;
    height: 50px;
    background-color: #4CAF50;
    border-radius: 5px;
    horizontal-align: center;
    
    transition-property: background-color;
    transition-duration: 0.3s;
}

#StartGameButton:hover {
    background-color: #45a049;
}

#StartGameButton Label {
    font-size: 20px;
    color: #FFFFFF;
    font-weight: bold;
    text-align: center;
    vertical-align: center;
}
```

### Пример TypeScript (src/panorama/loading_screen.ts):
```typescript
// Логирование для отладки
$.Msg("Loading screen initialized");

// Функция создания панелей игроков
function CreatePlayerPanels(): void {
    const container = $("#PlayersContainer");
    const playerIDs = Game.GetAllPlayerIDs();
    
    $.Msg("Creating panels for", playerIDs.length, "players");
    
    for (const playerID of playerIDs) {
        CreatePlayerPanel(container, playerID);
    }
}

// Создание панели одного игрока
function CreatePlayerPanel(parent: Panel, playerID: PlayerID): void {
    const panel = $.CreatePanel("Panel", parent, `Player_${playerID}`);
    panel.AddClass("PlayerPanel");
    
    // 1. Никнейм - СВЕРХУ
    const nameLabel = $.CreatePanel("Label", panel, "");
    nameLabel.AddClass("PlayerName");
    nameLabel.text = Players.GetPlayerName(playerID) || `Player ${playerID}`;
    
    // 2. Аватар - ПО ЦЕНТРУ (пока просто цветной квадрат)
    const avatar = $.CreatePanel("Panel", panel, "");
    avatar.AddClass("PlayerAvatar");
    const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    avatar.style.backgroundColor = `#${randomColor}`;
    
    // 3. Статус - СНИЗУ
    const statusLabel = $.CreatePanel("Label", panel, `Status_${playerID}`);
    statusLabel.AddClass("PlayerStatus");
    statusLabel.AddClass("loading");
    statusLabel.text = "Загружается...";
}

// Обработчик кнопки (вызывается из XML через onactivate)
function OnStartGameClicked(): void {
    $.Msg("Start game button clicked!");
    GameEvents.SendCustomGameEventToServer("start_game_from_loading", {});
}

// Экспортируем для использования в XML
(globalThis as any).OnStartGameClicked = OnStartGameClicked;

// Создаём панели при загрузке
CreatePlayerPanels();

// Обновление статусов каждые 0.5 секунд
function UpdateStatuses(): void {
    const playerIDs = Game.GetAllPlayerIDs();
    
    for (const playerID of playerIDs) {
        const statusLabel = $(`#Status_${playerID}`);
        
        if (statusLabel) {
            // Логика обновления статуса
            // Пока просто симуляция - все готовы через 3 секунды
            $.Schedule(3.0, () => {
                statusLabel.RemoveClass("loading");
                statusLabel.AddClass("ready");
                statusLabel.text = "Готов";
            });
        }
    }
}

// Инициализация при загрузке
UpdateStatuses();
```

---

## ⚡ Быстрые Команды

**Консольные команды для тестирования:**
```
dota_launch_custom_game bapbap_typescript dota  # Запуск на карте dota
script_reload                                    # Перезагрузка Lua скриптов
ui_reloadscheme                                  # Перезагрузка Panorama UI
dota_dev                                         # Режим разработчика
```

**Структура файлов проекта:**
```
src/panorama/loading_screen.ts    → компилируется в → content/panorama/scripts/custom_game/loading_screen.js
content/panorama/layout/custom_game/custom_loading_screen.xml (подключает .js)
content/panorama/styles/custom_game/custom_loading_screen.css
```

**Пути к файлам в XML/CSS:**
```
{resources} = content/panorama/
{images} = content/panorama/images/
{scripts} = content/panorama/scripts/
```

**⚠️ ВАЖНО для TypeScript проекта:**
1. Пиши код в `src/panorama/loading_screen.ts` (TypeScript)
2. `tsconfig.json` настроен на компиляцию в `content/panorama/scripts/custom_game/`
3. XML подключает скомпилированный `.js` файл, НЕ `.ts`!
4. Используй типы из `@moddota/panorama-types` (Panel, PlayerID, и т.д.)
5. После изменений `.ts` файла проект автоматически пересоберётся
6. Если автокомпиляция не работает, запусти вручную: `npm run dev` или `npm run build`
