---
title: Разработка игр — о разделе
description: Подборка материалов раздела Разработка игр в энциклопедии Вселенная IT — как читать, в каком порядке, где теория и где практика.
sidebar_label: Разработка игр — о разделе
related:
  - title: "Игровая индустрия — о разделе"
    doc: encyclopedia/9-spinoff/9-03-igrovaya-industriya/intro
  - title: "C# — о разделе"
    doc: encyclopedia/5-languages/5-05-csharp/intro
  - title: "Roblox Studio — первая игра"
    doc: encyclopedia/9-spinoff/9-04-razrabotka-igr/203
  - title: "Godot — первая 2D-игра"
    doc: encyclopedia/9-spinoff/9-04-razrabotka-igr/207
  - title: "Luau — о разделе"
    doc: encyclopedia/5-languages/5-15-lua-i-luau/intro
  - title: "Разработка игр на Python"
    doc: encyclopedia/5-languages/5-02-python/312
  - title: "Pygame — мини-игры на Python"
    doc: lab/examples/1132
  - title: "Minecraft — команды и datapack"
    doc: lab/examples/1142
  - title: "Roblox / Luau — скрипты для новичков"
    doc: lab/examples/1141
  - title: "Unity C# — скрипты для новичков"
    doc: lab/examples/1136
  - title: "Unreal Engine 6"
    doc: encyclopedia/9-spinoff/9-04-razrabotka-igr/129
  - title: "Практикум разработки игр — о разделе"
    doc: encyclopedia/9-spinoff/9-04-razrabotka-igr/praktikum-razrabotki-igr/intro
  - title: "Игроведение — о разделе"
    doc: encyclopedia/9-spinoff/9-03-igrovaya-industriya/game-studies/intro
  - title: Веб-игры на HTML5 и Canvas
    doc: encyclopedia/3-data-markup/3-09-html/22
  - title: Видеоигры — отраслевой контекст
    doc: context/video-games/intro
---

import ExternalPlayEmbed from '@site/src/components/ExternalPlayEmbed';


import DocCardList from '@theme/DocCardList';

# О разделе

<ExternalPlayEmbed example="spinoff/game-dev-hub" title="Разработка игр — навигатор" minHeight={560} />

Здесь собран путь от "как вообще делают игры" до работы в **Unity**, **Unreal Engine** и **Roblox**. В **июне 2026** на Unreal Fest Epic представила **Unreal Engine 6** — единый редактор с UEFN, язык Verse, ИИ через MCP; ранний доступ запланирован на конец **2027**. Обзор с расшифровкой терминов — [Unreal Engine 6](/encyclopedia/9-spinoff/9-04-razrabotka-igr/129); практика в редакторе — [UE 5](/encyclopedia/9-spinoff/9-04-razrabotka-igr/4) и [Игровой движок](/encyclopedia/9-spinoff/9-04-razrabotka-igr/112).

Материалы рассчитаны на новичка — много пояснений, примеров кода и ссылок между главами. Можно читать выборочно, но логичнее двигаться сверху вниз по блокам ниже.

**Тяжёлые листинги** (Luau, C#, Python-практикумы) — на [code.spirzen.ru](https://code.spirzen.ru/); **интерактив** (навигатор ниже, пайплайны, платформы) — на [play.spirzen.ru](https://play.spirzen.ru/).

---

## Как устроен раздел

| Тип страницы | Зачем | Примеры |
|--------------|--------|---------|
| **Обзор** | Контекст, термины, сравнения | [Процесс](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1), [Движок](/encyclopedia/9-spinoff/9-04-razrabotka-igr/112), [Гейм-дизайн](/encyclopedia/9-spinoff/9-04-razrabotka-igr/117) |
| **Практика в редакторе** | Пошагово в движке | [Unity](/encyclopedia/9-spinoff/9-04-razrabotka-igr/3), [Unreal](/encyclopedia/9-spinoff/9-04-razrabotka-igr/4), [UE6](/encyclopedia/9-spinoff/9-04-razrabotka-igr/129), [Verse](/encyclopedia/9-spinoff/9-04-razrabotka-igr/130), [Roblox — Studio](/encyclopedia/9-spinoff/9-04-razrabotka-igr/203), [обби](/encyclopedia/9-spinoff/9-04-razrabotka-igr/204) |
| **Практикум на коде** | Мини-игры на Python и Java | [Практикум разработки игр](/encyclopedia/9-spinoff/9-04-razrabotka-igr/praktikum-razrabotki-igr/intro) |
| **Быстрые примеры Pygame** | Один файл — одна игра, разбор строк | [Pygame — мини-игры](/lab/Примеры/1132) |
| **Команды и datapack Minecraft** | Чат, scoreboard, `mcfunction`, load/tick | [Minecraft — команды и datapack](/lab/Примеры/1142) |
| **Быстрые скрипты Unity** | Один скрипт — одна механика, разбор строк | [Unity C# — скрипты](/lab/Примеры/1136) |
| **Быстрые скрипты Roblox** | Script, LocalScript, RemoteEvent — разбор строк | [Roblox / Luau — скрипты](/lab/Примеры/1141) |
| **Справочник** | API, горячие клавиши, lifecycle | [Справочник по Unity](/encyclopedia/9-spinoff/9-04-razrabotka-igr/301), [Справочник по Unreal Engine](/encyclopedia/9-spinoff/9-04-razrabotka-igr/401), [Справочник по Roblox](/encyclopedia/9-spinoff/9-04-razrabotka-igr/201) |
| **Платформы и качество** | Где публиковать, как не тормозить | [PC](/encyclopedia/9-spinoff/9-04-razrabotka-igr/118)–[Мобильные игры](/encyclopedia/9-spinoff/9-04-razrabotka-igr/122), [Steam](/encyclopedia/9-spinoff/9-03-igrovaya-industriya/11435), [Оптимизация](/encyclopedia/9-spinoff/9-04-razrabotka-igr/123), [Тестирование](/encyclopedia/9-spinoff/9-04-razrabotka-igr/124) |
| **Внешний каталог** | Open-source клоны для разбора исходников | [Каталог клонов](/encyclopedia/9-spinoff/9-04-razrabotka-igr/125) ([osgameclones.com](https://osgameclones.com/)) |
| **Референсы для игрока** | Эталоны жанров и механик "на ощупь" | [Игры, которые должен попробовать каждый](/tools/games/4) |

**Справочники** не заменяют учебные главы: сначала поймите идею в `3` / `4` / `2`, потом используйте `301` / `401` / `201` как шпаргалку при работе.

---

## Рекомендуемый порядок (первый проход)

1. [Процесс разработки видеоигр](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1) — этапы, GDD, роли.
2. [Игровой движок](/encyclopedia/9-spinoff/9-04-razrabotka-igr/112) и [Виды движков](/encyclopedia/9-spinoff/9-04-razrabotka-igr/113) — выбор стека.
3. [Гейм-дизайн](/encyclopedia/9-spinoff/9-04-razrabotka-igr/117) — три уровня; цепочка [Механики и пространство состояний](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1172) → [Геймплей и core loop](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1174) → [Системы, петли обратной связи и баланс](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1173) → [Опыт игрока и мотивационные модели](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1171) → [Макроструктура, нарратив и метагейм](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1175) → [Прототип и playtest дизайна](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1176).
4. Один практический трек: **Unity** *или* **Unreal** *или* **Roblox** *или* **Godot** (см. карточки ниже).
5. По желанию — [Языки](/encyclopedia/9-spinoff/9-04-razrabotka-igr/114), [Звук FMOD/Wwise](/encyclopedia/9-spinoff/9-04-razrabotka-igr/126), [Доступность](/encyclopedia/9-spinoff/9-04-razrabotka-igr/127), [ИИ в играх](/encyclopedia/9-spinoff/9-04-razrabotka-igr/128), [Оптимизация](/encyclopedia/9-spinoff/9-04-razrabotka-igr/123), платформы; для разбора чужого кода — [каталог open-source клонов](/encyclopedia/9-spinoff/9-04-razrabotka-igr/125).
6. [Итоги](/encyclopedia/9-spinoff/9-04-razrabotka-igr/998) и [чек-лист](/encyclopedia/9-spinoff/9-04-razrabotka-igr/999).

Для карьеры и ролей в студии — отдельно [Дорожная карта геймдева](/encyclopedia/9-spinoff/9-04-razrabotka-igr/11) и [Команда разработки](/encyclopedia/9-spinoff/9-04-razrabotka-igr/111).

### Углублённый маршрут по гейм-дизайну

Углублённая теория геймплея — цепочка после [Гейм-дизайн](/encyclopedia/9-spinoff/9-04-razrabotka-igr/117):

1. [Механики и пространство состояний — механики](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1172)
2. [Геймплей и core loop — core loop](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1174)
3. [Системы, петли обратной связи и баланс — системы и баланс](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1173)
4. [Опыт игрока и мотивационные модели — опыт игрока](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1171)
5. [Макроструктура, нарратив и метагейм — нарратив](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1175) → [Прототип и playtest дизайна — прототип](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1176)

---

<span id="unity-csharp-track"></span>

## Unity + C# — учебный маршрут

Если цель — **первая игра на Unity**, читайте параллельно практику в редакторе и язык C#. Ниже типичный маршрут первого 3D-прототипа: white-box → движение → механика → NavMesh.

| Шаг | Unity — практика | C# — теория | Зачем |
|-----|------------------|-------------|--------|
| 1 | [One-Page / GDD](/encyclopedia/9-spinoff/9-04-razrabotka-igr/117) | — | Замысел до кода |
| 2 | [Разработка на Unity](/encyclopedia/9-spinoff/9-04-razrabotka-igr/3) — установка, окна, документация | [C# — первая программа](/encyclopedia/5-languages/5-05-csharp/1), [синтаксис](/encyclopedia/5-languages/5-05-csharp/11) | Среда и базовый синтаксис |
| 3 | [Разработка на Unity](/encyclopedia/9-spinoff/9-04-razrabotka-igr/3) — white-box, свет, частицы | [переменные](/encyclopedia/5-languages/5-05-csharp/17), [типы](/encyclopedia/5-languages/5-05-csharp/20) | Уровень и типы данных |
| 4 | [Разработка на Unity](/encyclopedia/9-spinoff/9-04-razrabotka-igr/3) — lifecycle, `Update` / `FixedUpdate` | [ООП в C#](/encyclopedia/5-languages/5-05-csharp/25) — блок Unity | `MonoBehaviour`, компоненты |
| 5 | [Разработка на Unity](/encyclopedia/9-spinoff/9-04-razrabotka-igr/3) — движение, прыжок, UI | [коллекции](/encyclopedia/5-languages/5-05-csharp/28) | `List`, `Dictionary`, свойства |
| 6 | [Разработка на Unity](/encyclopedia/9-spinoff/9-04-razrabotka-igr/3) — стрельба, GameManager | [делегаты и события](/encyclopedia/5-languages/5-05-csharp/102) | События UI и геймплея |
| 7 | [Разработка на Unity](/encyclopedia/9-spinoff/9-04-razrabotka-igr/3) — NavMesh, враги | [generics](/encyclopedia/5-languages/5-05-csharp/26) (по желанию) | ИИ и обобщения |
| 8 | [Справочник по Unity](/encyclopedia/9-spinoff/9-04-razrabotka-igr/301), [Разработка игр — чек-лист](/encyclopedia/9-spinoff/9-04-razrabotka-igr/999) | [справочник C#](/encyclopedia/5-languages/5-05-csharp/471) | Закрепление |

<div class="callout callout--tip">
  <div class="callout-title">Как учиться эффективно</div>

  <div class="callout-body">
  Держите открытыми Unity и IDE — повторяйте примеры из [главы 3](/encyclopedia/9-spinoff/9-04-razrabotka-igr/3) и [галереи скриптов в Lab](/lab/Примеры/1136), не копируя слепо — меняйте параметры (скорость, радиус агента, win-условие).

  После каждого блока — 3–5 вопросов из [чек-листа Unity/C#](/encyclopedia/9-spinoff/9-04-razrabotka-igr/999).
</div>
</div>

---

<span id="roblox-luau-track"></span>

## Roblox + Luau — учебный маршрут

Если цель — **первая игра на Roblox**, читайте практику в Studio и язык Luau параллельно.

| Шаг | Roblox — практика | Luau — теория | Зачем |
|-----|-------------------|---------------|--------|
| 1 | [Roblox Studio — первая игра и настройки Place — Studio и Place](/encyclopedia/9-spinoff/9-04-razrabotka-igr/203) | — | Среда, публикация, первый Script |
| 2 | [Разработка на Roblox — клиент и сервер](/encyclopedia/9-spinoff/9-04-razrabotka-igr/2) (обзор) | [Первая программа](/encyclopedia/5-languages/5-15-lua-i-luau/13), [синтаксис](/encyclopedia/5-languages/5-15-lua-i-luau/14) | Контейнеры и базовый Lua |
| 3 | [Практикум — обби на Roblox — практикум "обби"](/encyclopedia/9-spinoff/9-04-razrabotka-igr/204) | [таблицы](/encyclopedia/5-languages/5-15-lua-i-luau/15), [функции](/encyclopedia/5-languages/5-15-lua-i-luau/17) | DataStore, RemoteEvent, этапы |
| 4 | [Практикум — королевская битва на Roblox — королевская битва](/encyclopedia/9-spinoff/9-04-razrabotka-igr/205) (по желанию) | [корутины](/encyclopedia/5-languages/5-15-lua-i-luau/21) | Раунды, PvP, валидация на сервере |
| 5 | [Roblox — механика, монетизация и продвижение — механика и продвижение](/encyclopedia/9-spinoff/9-04-razrabotka-igr/206), [Внутриигровая экономика Roblox — экономика](/encyclopedia/9-spinoff/9-04-razrabotka-igr/202) | [Luau - типизированный диалект Lua от Roblox — Luau](/encyclopedia/5-languages/5-15-lua-i-luau/23) | Монетизация, жанры, типы |
| 6 | [Справочник по Roblox — справочник](/encyclopedia/9-spinoff/9-04-razrabotka-igr/201), [Разработка игр — чек-лист — чек-лист](/encyclopedia/9-spinoff/9-04-razrabotka-igr/999) | [999 Luau](/encyclopedia/5-languages/5-15-lua-i-luau/999) | Закрепление |

<div class="callout callout--tip">
  <div class="callout-title">Как учиться эффективно</div>

  <div class="callout-body">
  Держите открытыми Studio

  [галерею скриптов в Lab](/lab/Примеры/1141) и статью [Практикум — обби на Roblox](/encyclopedia/9-spinoff/9-04-razrabotka-igr/204): повторяйте модули и чекпоинты, меняя число этапов и цены в магазине. Справочник [Разработка на Roblox](/encyclopedia/9-spinoff/9-04-razrabotka-igr/2) читайте выборочно при вопросах по lifecycle и репликации.
</div>
</div>

---

### Шесть жанров — мини-игры

Перед Unity или Unreal полезно **пощупать жанр** — аркада, платформер, головоломка, пошаговая стратегия, RPG, roguelike. Ниже — оригинальные учебные игрушки с вкладками (подробнее в [классификации жанров](/encyclopedia/1-basics/1-18-kompyuternye-igry/2)).

<ExternalPlayEmbed example="basics/game-genre-toys-hub" title="Жанры игр — обзор" minHeight={480} playProps={{ theme: 'javascript' }} />

---

## Unity C# — быстрые скрипты

Если нужны **готовые MonoBehaviour с разбором строк**, а не только пошаговая глава в редакторе:

1. [Unity C# — скрипты для новичков](/lab/Примеры/1136) — каркас, WASD, прыжок, монетки, UI, камера.
2. [Разработка на Unity](/encyclopedia/9-spinoff/9-04-razrabotka-igr/3) — полная практика в редакторе (white-box, NavMesh, стрельба).
3. [Справочник по Unity](/encyclopedia/9-spinoff/9-04-razrabotka-igr/301) — lifecycle и API.

---

## Python и Pygame — быстрый старт

Если нужен **код на Python без Unity**, а не редактор движка:

1. [Разработка игр на Python](/encyclopedia/5-languages/5-02-python/312) — игровой цикл, события, `Rect`, спрайты.
2. [Pygame — мини-игры на Python](/lab/Примеры/1132) — змейка, Pong, Breakout, Flappy, [крестики-нолики с ИИ](/lab/Примеры/1132#tic-tac-toe). Один файл — скопировать и разобрать по шагам. Для Minecraft без Python — [команды и datapack](/lab/Примеры/1142).
3. [Практикум разработки игр](/encyclopedia/9-spinoff/9-04-razrabotka-igr/praktikum-razrabotki-igr/intro) — Tetris, Match-3, [Space Invaders](/encyclopedia/9-spinoff/9-04-razrabotka-igr/praktikum-razrabotki-igr/11), диаблоид. Пошаговые этапы и полные файлы для сверки.

Для рисования фигур без игровой логики — [Turtle в Lab](/lab/Примеры/111) (Python), [p5.js в Lab](/lab/Примеры/1114) (Canvas в браузере) или [SVG в Lab](/lab/Примеры/1119) (вектор в HTML); для 3D — [Panda3D](/encyclopedia/5-languages/5-02-python/318) и [примеры сцен](/lab/Примеры/1111).

---

## Minecraft Java — команды и datapack

Если ученик уже играет в **Java Edition** и хочет "программировать внутри мира" без установки Forge:

1. [Разработка в Minecraft](/encyclopedia/9-spinoff/9-04-razrabotka-igr/21) — уровни — команды, моды, Python, ComputerCraft.
2. [Minecraft — команды и datapack](/lab/Примеры/1142) — `/tp`, `scoreboard`, `execute`, командные блоки, `pack.mcmeta`, чекпоинт паркура; **разбор каждой строки**, как в [галерее Turtle](/lab/Примеры/111).

Дальше по желанию — [Roblox / Luau](/lab/Примеры/1141) или [Unity C#](/lab/Примеры/1136).

---

## Godot + GDScript — учебный маршрут

Бесплатный движок без роялти — удобен для **2D-инди** и школ:

| Шаг | Материал | Зачем |
|-----|----------|--------|
| 1 | [Godot — первая 2D-игра](./207) | Установка, сцена, движение, монеты |
| 2 | [Виды движков](./113) — раздел Godot | Сравнение с Unity/Unreal |
| 3 | [Гейм-дизайн](./117) → [прототип](./1176) | Идея до полировки |
| 4 | [Blender](/encyclopedia/9-spinoff/9-08-kompyuternaya-grafika/131) (по желанию) | Свои ассеты |

Для детей короче: [Godot и Construct 3](/encyclopedia/9-spinoff/9-11-dlya-detey/2-video-games/27).

---

## Все материалы раздела

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**Соло / инди-разработчик** — [HTML — о разделе](/encyclopedia/3-data-markup/3-09-html/intro), [Разработка — о разделе](/tools/development/intro), [Python — о разделе](/encyclopedia/5-languages/5-02-python/intro), [IDE](/tools/development/1), [Основы работы с Git — о разделе](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/intro), [Основы DevOps](/encyclopedia/8-infra-security/8-04-devops-ci-cd/1).

**Разработка видеоигр** — [Игровая индустрия — о разделе](/encyclopedia/9-spinoff/9-03-igrovaya-industriya/intro), [Практикум — о разделе](/encyclopedia/9-spinoff/9-04-razrabotka-igr/praktikum-razrabotki-igr/intro), [Игроведение — о разделе](/encyclopedia/9-spinoff/9-03-igrovaya-industriya/game-studies/intro), [Разработка игр на Python](/encyclopedia/5-languages/5-02-python/312), [Компьютерные игры — о разделе](/encyclopedia/1-basics/1-18-kompyuternye-igry/intro), [Веб-игры на HTML5 и Canvas](/encyclopedia/3-data-markup/3-09-html/22).

{/* /sidebar-collections */}

---
