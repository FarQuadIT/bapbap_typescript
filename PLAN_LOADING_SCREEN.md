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
- **⏱️ Таймер автостарта** - "Игра начнется автоматически через X сек."
- **🎮 Кнопка "Начать игру"** (только для лидера лобби - PlayerID 0)
- Для не-лидеров: "Ожидание решения лидера лобби..."
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

#### ✅ **6. Таймер автостарта и проверка лидера лобби**

**Проблема:** Нужен таймер обратного отсчета до автозапуска + кнопка только для лидера.

**Решение:** 

**Серверная часть (`GameMode.ts`):**
```typescript
private configure(): void {
    // Настройки автостарта для CUSTOM_GAME_SETUP
    GameRules.SetCustomGameSetupAutoLaunchDelay(15); // 15 сек до автостарта
    GameRules.SetCustomGameSetupTimeout(300); // 5 минут макс ожидание всех игроков
}

if (state === GameState.CUSTOM_GAME_SETUP) {
    // Отправляем таймер всем клиентам
    Timers.CreateTimer(0.3, () => {
        CustomGameEventManager.Send_ServerToAllClients("setup_timer_update", {
            seconds: 15
        });
        return undefined;
    });
}
```

**Клиентская часть (`game_setup.ts`):**

1. **Таймер через SetDialogVariable:**
```typescript
let remainingTime = 15;

function UpdateTimer(): void {
    const timerLabel = $("#AutoStartTimer");
    if (!timerLabel) return;
    
    if (remainingTime > 0) {
        timerLabel.SetDialogVariable("timer_seconds", remainingTime.toString());
        remainingTime--;
        $.Schedule(1.0, UpdateTimer);
    } else {
        timerLabel.style.visibility = "collapse";
    }
}

// Подписка на событие от сервера
GameEvents.Subscribe("setup_timer_update", (data: any) => {
    StartAutoStartTimer(data.seconds);
});
```

2. **XML с плейсхолдером:**
```xml
<Label id="AutoStartTimer" html="true" 
  text="Игра начнется автоматически через {s:timer_seconds} сек." />
```

3. **Проверка лидера лобби (PlayerID 0):**
```typescript
function CheckIfLobbyLeader(): void {
    const localPlayerID = Game.GetLocalPlayerID();
    const isLeader = (localPlayerID === 0); // В Dota 2 лидер = PlayerID 0
    
    const startButton = $("#SetupStartButton");
    const waitingLabel = $("#WaitingForLeaderLabel");
    
    if (isLeader) {
        // Показываем кнопку только лидеру
        startButton.style.visibility = "visible";
        waitingLabel.style.visibility = "collapse";
    } else {
        // Остальным показываем сообщение ожидания
        startButton.style.visibility = "collapse";
        waitingLabel.style.visibility = "visible";
    }
}
```

**Типы событий (`events.d.ts`):**
```typescript
interface SetupTimerUpdateEventData {
    seconds: number; // Seconds until auto-start
}
```

**Почему это работает:**
- Сервер контролирует таймеры через `GameRules.SetCustomGameSetupAutoLaunchDelay()`
- Клиент показывает обратный отсчет через `SetDialogVariable()`
- `{s:timer_seconds}` в XML автоматически заменяется на значение
- Лидер лобби всегда имеет PlayerID = 0 (стандарт Dota 2)
- Не-лидеры видят только сообщение ожидания

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

## ✅ Этап 2: Добавление логотипа В САМОМ ВЕРХУ (ВЫПОЛНЕНО)

- [x] **2.1** Добавить логотип в XML В НАЧАЛЕ (первым элементом)
  - Панель-контейнер `#LogoContainer` в самом верху
  - `<Image id="Logo">` элемент с логотипом
  - Путь: `file://{images}/custom_game/loading_screen/logo.png`
  - БЕЗ текста "ИНИЦИАЛИЗАЦИЯ" (он будет позже под игроками)

- [x] **2.2** Стилизация логотипа в CSS
  - Расположение в самом верху по центру (`horizontal-align: center`)
  - Адаптивные размеры: `max-width: 800px`, `max-height: 300px`
  - Отступы: `margin-top: 80px`, `margin-bottom: 40px`
  - Плавное появление с задержкой 0.2с

**XML структура:**
```xml
<Panel id="LogoContainer">
    <Image id="Logo" src="file://{images}/custom_game/loading_screen/logo.png" />
</Panel>
```

**CSS стили:**
```css
#LogoContainer {
    width: 100%;
    horizontal-align: center;
    margin-top: 80px;
    margin-bottom: 40px;
    animation-name: FadeInText;
    animation-delay: 0.2s;
}

#Logo {
    horizontal-align: center;
    max-width: 800px;  /* Автоматически уменьшится если логотип больше */
    max-height: 300px;
}
```

**Последовательность анимаций:**
1. 🎨 Фон - 0.0с (сразу)
2. 🖼️ Логотип - 0.2с
3. 🟢 "Загрузка игры..." - 0.4с
4. ⚪ "Вы будете автоматически..." - 0.6с
5. ⏱️ Таймер - 0.8с
6. 🟢 Кнопка/сообщение - 1.0с

**Проверка:** ✅ Логотип виден В САМОМ ВЕРХУ экрана по центру, появляется плавно

---

### ✅ **2.3** Добавление покадровой электрической анимации под логотипом (ВЫПОЛНЕНО)

**Реализовано:**

#### 🎬 **Электрическая анимация:**
- 360 PNG кадров (1920x1080, 16:9) в `content/panorama/images/custom_game/electric/`
- Предзагружено **31 кадр** (каждый 12-й: 1, 12, 24...360) через CSS
- JavaScript анимация: 25 FPS (0.04s delay), зацикленная
- Позиция: под логотипом с `margin-top: -320px` для наложения
- Z-index: логотип (10) поверх электричества (5)

**XML:**
```xml
<Image id="Logo" src="..." />
<Image id="ElectricEffect" src="file://{images}/custom_game/electric/frame_00001.png" />
<Panel id="PreloadElectricFrames" /> <!-- Скрытая панель для CSS предзагрузки -->
```

**CSS предзагрузка (31 кадр):**
```css
#ElectricEffect {
    width: 800px;
    height: 450px;
    margin-top: -320px;
    margin-left: 50px;
    z-index: 5;
}

#PreloadElectricFrames {
    visibility: collapse;
    background-image: 
        url("file://{images}/custom_game/electric/frame_00001.png"),
        url("file://{images}/custom_game/electric/frame_00012.png"),
        /* ... всего 31 url каждый 12-й кадр ... */
        url("file://{images}/custom_game/electric/frame_00360.png");
}
```

**JavaScript анимация:**
```typescript
const ELECTRIC_FRAME_NUMBERS = [1, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 
    132, 144, 156, 168, 180, 192, 204, 216, 228, 240, 252, 264, 276, 288, 
    300, 312, 324, 336, 348, 360];
const FRAME_DELAY = 0.04; // 25 FPS

function PlayElectricAnimation(): void {
    const electricPanel = $("#ElectricEffect") as ImagePanel;
    const frameNumber = ELECTRIC_FRAME_NUMBERS[currentElectricFrameIndex]
        .toString().padStart(5, '0');
    electricPanel.SetImage(`file://{images}/custom_game/electric/frame_${frameNumber}.png`);
    
    currentElectricFrameIndex++;
    if (currentElectricFrameIndex >= ELECTRIC_FRAME_NUMBERS.length) {
        currentElectricFrameIndex = 0;
    }
    $.Schedule(FRAME_DELAY, PlayElectricAnimation);
}
```

#### 📊 **Progress Bar на Loading Screen:**
- Симуляция загрузки на `custom_loading_screen.xml`
- Progress bar (зеленая полоса) с плавным заполнением
- Текст "Загрузка ресурсов... X%"
- JavaScript обновление через `$.Schedule()`

**CSS:**
```css
#LoadingProgressBar {
    width: 0%;
    background-color: #00FF00;
    transition-property: width;
    transition-duration: 0.3s;
}
```

#### ⏱️ **Увеличен таймер автостарта:**
- Было: 15 секунд
- Стало: **100 секунд**
- Изменено в `GameMode.ts`: `GameRules.SetCustomGameSetupAutoLaunchDelay(100)`

---

### 🔧 **Технические ограничения Panorama CSS:**

**Проблема:** Panorama CSS парсер не поддерживает больше ~30-40 URL в одном `background-image`.

**Решение:**
1. **CSS предзагрузка:** Только 31 кадр (каждый 12-й) в скрытой панели
2. **Принудительная компиляция:** Panorama компилирует PNG → .vtex_c только для путей в CSS/XML
3. **JavaScript использует готовые .vtex_c:** После компиляции все 360 кадров доступны через `SetImage()`

**Альтернативы (не использованы):**
- ❌ CSS @keyframes для `background-image` - не работает в Panorama
- ❌ 360 URL в одном CSS - превышает лимит парсера
- ❌ Множественные панели (6 × 60 кадров) - всё равно превышает лимит

**Проверка:** ✅ Анимация плавная, 25 FPS, зацикленная, под логотипом

---

## ✅ Этап 3: Создание статичного макета панелей игроков ПОД логотипом (ВЫПОЛНЕНО)

- [x] **3.1** Добавить контейнер для игроков ПОД логотипом
  - `<Panel id="PlayersContainer">` с горизонтальным flow
  - 8 статичных панелей игроков для теста

- [x] **3.2** Структура одной панели игрока (сверху вниз внутри панели):
  1. Никнейм (тестовый текст "Player 1") - СВЕРХУ
  2. Аватар (пока placeholder `tstl.png`) - ПО ЦЕНТРУ
  3. Статус (тестовый текст "Загружается...") - СНИЗУ

- [x] **3.3** Добавить текст "ИНИЦИАЛИЗАЦИЯ ГЕРОЕВ ИГРОКОВ" ПОД панелями
  - `<Label id="InitText">` под PlayersContainer
  - CSS стилизация текста

- [x] **3.4** CSS для всех элементов
  - Горизонтальное расположение панелей в ряд (flow-children: right)
  - Вертикальное расположение внутри панели (flow-children: down)
  - Размеры панелей и отступы между ними
  - Стили для аватаров (круглая форма через border-radius: 50%)
  - Стили для текста никнейма (сверху) и статуса (снизу)
  - Стили для текста "ИНИЦИАЛИЗАЦИЯ"

**XML структура:**
```xml
<Panel id="PlayersContainer">
    <Panel class="PlayerPanel">
        <Label class="PlayerNickname" text="Player 1" />
        <Image class="PlayerAvatar" src="file://{images}/custom_game/tstl.png" />
        <Label class="PlayerStatus" text="Загружается..." />
    </Panel>
    <!-- ... всего 8 панелей ... -->
</Panel>
<Label id="InitText" text="ИНИЦИАЛИЗАЦИЯ ГЕРОЕВ ИГРОКОВ" />
```

**CSS стили:**
```css
#PlayersContainer {
    horizontal-align: center;
    flow-children: right; /* Горизонтальный ряд */
    animation-delay: 1.2s;
}

.PlayerPanel {
    width: 120px;
    height: 180px;
    margin: 0 10px;
    flow-children: down; /* Вертикально: никнейм → аватар → статус */
    background-color: #2a2a2a;
    border: 2px solid #3a3a3a;
    border-radius: 10px;
}

.PlayerAvatar {
    width: 80px;
    height: 80px;
    border-radius: 50%; /* Круглый */
    border: 2px solid #00FF00;
}

#InitText {
    font-size: 20px;
    color: #00FF00;
    letter-spacing: 2px;
    animation-delay: 1.4s;
}
```

**Обновленная последовательность анимаций:**
1. 🎨 Фон - 0.0с
2. 🖼️ Логотип - 0.2с
3. ⚡ Электричество - 0.5с
4. 👥 Панели игроков - 1.2с
5. 📝 "ИНИЦИАЛИЗАЦИЯ" - 1.4с
6. 🟢 "Загрузка игры..." - 1.6с
7. ⚪ "Вы будете автоматически..." - 1.8с
8. ⏱️ Таймер - 2.0с
9. 🟢 Кнопка/сообщение - 2.2с

**Проверка:** ✅ Сверху вниз: ЛОГОТИП → ЭЛЕКТРИЧЕСТВО → 8 ПАНЕЛЕЙ ИГРОКОВ → ТЕКСТ "ИНИЦИАЛИЗАЦИЯ" → ОСТАЛЬНЫЕ ЭЛЕМЕНТЫ

---

## ✅ Этап 4: Динамическое создание панелей через TypeScript (ВЫПОЛНЕНО)

- [x] **4.1** Добавить функции в `src/panorama/game_setup.ts`
  - Функция `CreatePlayerPanels()` для генерации панелей
  - Получить количество игроков через `Game.GetAllPlayerIDs()`
  - Динамически создавать панели через `$.CreatePanel()`
  - Добавить типизацию TypeScript

- [x] **4.2** Удалить статичные панели из XML
  - Оставить только пустой контейнер `PlayersContainer`
  - Панели будут создаваться скриптом

- [x] **4.3** Тестовая логика заполнения
  - Для каждого playerID создать панель
  - Заполнить тестовыми данными (пока без реальных аватаров)

**Реализация:**

```typescript
function CreatePlayerPanels(): void {
    const playersContainer = $("#PlayersContainer");
    const allPlayerIDs = Game.GetAllPlayerIDs();
    
    $.Msg(`📋 Creating panels for ${allPlayerIDs.length} players`);
    
    allPlayerIDs.forEach((playerID) => {
        if (!Game.IsPlayerInGame(playerID)) {
            return; // Пропускаем неактивных игроков
        }
        
        // Создаем панель игрока
        const playerPanel = $.CreatePanel("Panel", playersContainer, `Player_${playerID}`);
        playerPanel.AddClass("PlayerPanel");
        
        // Получаем никнейм (с fallback)
        const playerName = Players.GetPlayerName(playerID) || `Player ${playerID}`;
        
        // Создаем никнейм
        const nicknameLabel = $.CreatePanel("Label", playerPanel, `Nickname_${playerID}`);
        nicknameLabel.AddClass("PlayerNickname");
        nicknameLabel.text = playerName;
        
        // Создаем аватар (placeholder)
        const avatarImage = $.CreatePanel("Image", playerPanel, `Avatar_${playerID}`) as ImagePanel;
        avatarImage.AddClass("PlayerAvatar");
        avatarImage.SetImage("file://{images}/custom_game/tstl.png");
        
        // ВАЖНО: явные стили для корректного отображения
        avatarImage.style.width = "80px";
        avatarImage.style.height = "80px";
        avatarImage.style.visibility = "visible";
        avatarImage.style.opacity = "1.0";
        
        // Создаем статус
        const statusLabel = $.CreatePanel("Label", playerPanel, `Status_${playerID}`);
        statusLabel.AddClass("PlayerStatus");
        statusLabel.text = "Загружается...";
        
        $.Msg(`✅ Created panel for player ${playerID}: ${playerName}`);
    });
}

// Запуск с задержкой 1.5 сек (после анимации появления контейнера)
$.Schedule(1.5, CreatePlayerPanels);
```

**XML структура (упрощена):**
```xml
<!-- Пустой контейнер, панели создаются JavaScript -->
<Panel id="PlayersContainer"></Panel>
```

**Особенности:**
- ✅ Используется `Game.GetAllPlayerIDs()` для получения всех игроков
- ✅ `Players.GetPlayerName(playerID)` для получения реальных никнеймов
- ✅ Fallback на `"Player X"` если имя недоступно
- ✅ Каждая панель имеет уникальный ID: `Player_${playerID}`
- ✅ Применяются те же CSS классы, что и для статичных панелей
- ✅ Защита от дублирования через проверку существования панели
- ✅ Периодическое обновление каждую 1 секунду (первые 10 секунд) для подхвата новых игроков/ботов
- ⏱️ Первый вызов через 1.5 сек, затем проверки каждую секунду до 12 сек

**Тестирование (соло + 6 ботов):**
```
📋 Updating panels, current players: 1
✅ Created panel for player 0: FarQuke

🤖 Боты добавились...

📋 Updating panels, current players: 7
✅ Created panel for player 1: Έλλη
✅ Created panel for player 2: 子轩
✅ Created panel for player 3: Jan
✅ Created panel for player 4: Victoria
✅ Created panel for player 5: 吉娜
✅ Created panel for player 6: Στέφανος

⚠️ Panel for player X already exists, skipping (защита от дублей)
```

**Проверка:** ✅ Панели создаются динамически, их количество = количеству игроков в игре (включая ботов). Реальные никнеймы отображаются корректно.

---

## ✅ Этап 5: Получение реальных данных игроков (ВЫПОЛНЕНО)

- [x] **5.1** Использовать Panorama API для аватаров
  - Попробовать `DOTAAvatarImage` элемент вместо `Image`
  - Передать playerID для каждого игрока
  - Если не работает - использовать альтернативные методы

- [x] **5.2** Получение никнеймов
  - `Players.GetPlayerName(playerID)` для никнеймов
  - Fallback на "Player X" если имя недоступно

- [x] **5.3** Проверка на ботов
  - Определение ботов через API
  - Отображение специального индикатора для ботов (опционально)

**Реализация:**

**Проблема:** `Players.GetSteamAccountID()` доступна только на сервере (VScripts/Lua), а не на клиенте (Panorama).

**Решение:** Серверно-клиентская архитектура с пересылкой данных:

1. **Сервер (`GameMode.ts`)** собирает Steam Account IDs всех игроков:
```typescript
Timers.CreateTimer(3, () => {
    const players: Array<{ playerID: number; steamAccountID: number }> = [];
    
    for (let playerID = 0; playerID < 24; playerID++) {
        if (PlayerResource.IsValidPlayerID(playerID)) {
            const isFakeClient = PlayerResource.IsFakeClient(playerID);
            let steamAccountID = 0; // 0 для ботов
            
            if (!isFakeClient) {
                steamAccountID = PlayerResource.GetSteamAccountID(playerID);
            }
            
            players.push({ playerID, steamAccountID });
        }
    }
    
    CustomGameEventManager.Send_ServerToAllClients("player_steam_ids", {
        players: players as any
    });
});
```

2. **Клиент (`game_setup.ts`)** получает данные и обновляет аватары:
```typescript
function UpdatePlayerAvatars(event: NetworkedData<PlayerSteamIDsEventData>): void {
    // Преобразуем объект обратно в массив (Dota 2 конвертирует массивы в объекты)
    const playersArray: Array<{ playerID: number; steamAccountID: number }> = [];
    for (const key in event.players) {
        playersArray.push(event.players[key]);
    }
    
    playersArray.forEach(({ playerID, steamAccountID }) => {
        const playerPanel = $(`#Player_${playerID}`);
        if (!playerPanel) return;
        
        // Удаляем старый placeholder
        const oldAvatar = $(`#Avatar_${playerID}`);
        if (oldAvatar) oldAvatar.DeleteAsync(0);
        
        if (steamAccountID > 0) {
            // Реальный игрок - DOTAAvatarImage с Steam аватаром
            const playerInfo = Game.GetPlayerInfo(playerID as PlayerID);
            if (!playerInfo) return;
            
            const avatar = $.CreatePanel("DOTAAvatarImage", playerPanel, `Avatar_${playerID}`);
            avatar.AddClass("PlayerAvatar");
            avatar.steamid = playerInfo.player_steamid; // 64-bit Steam ID
            
            // ОБЯЗАТЕЛЬНО: явные стили (CSS не работает для DOTAAvatarImage!)
            avatar.style.width = "80px";
            avatar.style.height = "80px";
            avatar.style.visibility = "visible";
            avatar.style.opacity = "1.0";
            
            // Перемещаем в правильную позицию
            const nicknamePanel = $(`#Nickname_${playerID}`);
            if (nicknamePanel) {
                playerPanel.MoveChildAfter(avatar, nicknamePanel);
            }
        } else {
            // Бот - Image с placeholder
            const avatar = $.CreatePanel("Image", playerPanel, `Avatar_${playerID}`) as ImagePanel;
            avatar.AddClass("PlayerAvatar");
            avatar.SetImage("file://{images}/custom_game/tstl.png");
            
            // Те же стили для консистентности
            avatar.style.width = "80px";
            avatar.style.height = "80px";
            avatar.style.visibility = "visible";
            avatar.style.opacity = "1.0";
            
            const nicknamePanel = $(`#Nickname_${playerID}`);
            if (nicknamePanel) {
                playerPanel.MoveChildAfter(avatar, nicknamePanel);
            }
        }
    });
}

GameEvents.Subscribe("player_steam_ids", UpdatePlayerAvatars);
```

3. **Событие (`events.d.ts`)** для типизации:
```typescript
interface PlayerSteamIDsEventData {
    players: Array<{
        playerID: number;
        steamAccountID: number; // 32-bit Steam Account ID (0 для ботов)
    }>;
}
```

**Как работает `DOTAAvatarImage`:**
- ✅ Специальный элемент Panorama UI для отображения Steam аватаров
- ✅ Использует `Game.GetPlayerInfo(playerID).player_steamid` для получения 64-bit Steam ID
- ✅ Автоматически загружает изображение из Steam API
- ✅ Для реальных игроков показывает их Steam аватар
- ✅ Для ботов используется обычный `Image` с placeholder (tstl.png)

**⚠️ КРИТИЧНОЕ ТРЕБОВАНИЕ для отображения аватаров:**

`DOTAAvatarImage` **НЕ РАБОТАЕТ** с CSS стилями в Panorama! Размеры, видимость и прозрачность нужно задавать **явно через JavaScript**.

**Проблема (аватары не отображались):**
```typescript
// ❌ НЕ РАБОТАЕТ - только CSS класс
const avatar = $.CreatePanel("DOTAAvatarImage", parent, id);
avatar.AddClass("PlayerAvatar"); // CSS не применяется!
avatar.steamid = steamID;
```

**Решение (ОБЯЗАТЕЛЬНО):**
```typescript
// ✅ РАБОТАЕТ - явные стили через JavaScript
const avatar = $.CreatePanel("DOTAAvatarImage", parent, id);
avatar.AddClass("PlayerAvatar"); // Для других свойств (border-radius и т.д.)
avatar.steamid = playerInfo.player_steamid;

// ОБЯЗАТЕЛЬНО явно устанавливаем стили:
avatar.style.width = "80px";
avatar.style.height = "80px";
avatar.style.visibility = "visible";
avatar.style.opacity = "1.0";
```

**Почему так:**
- Panorama CSS применяется не ко всем типам панелей
- `DOTAAvatarImage` - специальный внутренний компонент Source 2
- Требует явной инициализации размеров через JavaScript API
- CSS `border-radius`, `margin` и др. работают нормально, но `width`/`height` - НЕТ

**Финальная реализация в `UpdatePlayerAvatars`:**
```typescript
if (steamAccountID > 0) {
    const playerInfo = Game.GetPlayerInfo(playerID as PlayerID);
    const avatar = $.CreatePanel("DOTAAvatarImage", playerPanel, `Avatar_${playerID}`);
    avatar.AddClass("PlayerAvatar");
    avatar.steamid = playerInfo.player_steamid;
    
    // Обязательные явные стили:
    avatar.style.width = "80px";
    avatar.style.height = "80px";
    avatar.style.visibility = "visible";
    avatar.style.opacity = "1.0";
} else {
    // Боты - те же стили для консистентности
    const avatar = $.CreatePanel("Image", playerPanel, `Avatar_${playerID}`) as ImagePanel;
    avatar.AddClass("PlayerAvatar");
    avatar.SetImage("file://{images}/custom_game/tstl.png");
    
    avatar.style.width = "80px";
    avatar.style.height = "80px";
    avatar.style.visibility = "visible";
    avatar.style.opacity = "1.0";
}
```

**Таймлайн загрузки:**
1. **0.0s** - Игра стартует, создаются placeholder аватары для всех
2. **3.0s** - Сервер отправляет Steam Account IDs
3. **3.1s** - Клиент получает данные и заменяет placeholder на реальные аватары с явными стилями

**Проверка:** ✅ Реальные Steam аватары для игроков (круглые, 80x80px), placeholder для ботов

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
