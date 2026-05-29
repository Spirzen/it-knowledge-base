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
  - title: "Luau — о разделе"
    doc: encyclopedia/5-languages/5-15-lua-i-luau/intro
  - title: "Разработка игр на Python"
    doc: encyclopedia/5-languages/5-02-python/312
  - title: "Игроведение — о разделе"
    doc: encyclopedia/9-spinoff/9-03-igrovaya-industriya/game-studies/intro
  - title: "Веб-игры на HTML5 и Canvas"
    doc: encyclopedia/3-data-markup/3-09-html/22
---

import GameDevHub from '@site/src/components/GameDevHub.jsx';
import {GameGenreToysHub} from '@site/src/components/GameGenreToysPlay';
import DocCardList from '@theme/DocCardList';

# О разделе

<GameDevHub />

Здесь собран путь от "как вообще делают игры" до работы в **Unity**, **Unreal Engine** и **Roblox**. В **мае 2026** Epic анонсировала **Unreal Engine 6** (демонстрация на обновлённой *Rocket League*); практические главы по Unreal пока ориентированы на **UE 5** — см. [Игровой движок](/encyclopedia/9-spinoff/9-04-razrabotka-igr/112) и [Unreal Engine](/encyclopedia/9-spinoff/9-04-razrabotka-igr/4). Материалы рассчитаны на новичка: много пояснений, примеров кода и ссылок между главами — можно читать выборочно, но логичнее двигаться сверху вниз по блокам ниже.

---

## Как устроен раздел

| Тип страницы | Зачем | Примеры |
|--------------|--------|---------|
| **Обзор** | Контекст, термины, сравнения | [Процесс](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1), [Движок](/encyclopedia/9-spinoff/9-04-razrabotka-igr/112), [Гейм-дизайн](/encyclopedia/9-spinoff/9-04-razrabotka-igr/117) |
| **Практика в редакторе** | Пошагово в движке | [Unity](/encyclopedia/9-spinoff/9-04-razrabotka-igr/3), [Unreal](/encyclopedia/9-spinoff/9-04-razrabotka-igr/4), [Roblox — Studio](/encyclopedia/9-spinoff/9-04-razrabotka-igr/203), [обби](/encyclopedia/9-spinoff/9-04-razrabotka-igr/204) |
| **Справочник** | API, горячие клавиши, lifecycle | [301](/encyclopedia/9-spinoff/9-04-razrabotka-igr/301), [401](/encyclopedia/9-spinoff/9-04-razrabotka-igr/401), [201](/encyclopedia/9-spinoff/9-04-razrabotka-igr/201) |
| **Платформы и качество** | Где публиковать, как не тормозить | [PC](/encyclopedia/9-spinoff/9-04-razrabotka-igr/118)–[122](/encyclopedia/9-spinoff/9-04-razrabotka-igr/122), [Steam](/encyclopedia/9-spinoff/9-03-igrovaya-industriya/11435), [Оптимизация](/encyclopedia/9-spinoff/9-04-razrabotka-igr/123), [Тестирование](/encyclopedia/9-spinoff/9-04-razrabotka-igr/124) |
| **Внешний каталог** | Open-source клоны для разбора исходников | [Каталог клонов](/encyclopedia/9-spinoff/9-04-razrabotka-igr/125) ([osgameclones.com](https://osgameclones.com/)) |
| **Референсы для игрока** | Эталоны жанров и механик "на ощупь" | [Игры, которые должен попробовать каждый](/tools/games/4) |

**Справочники** не заменяют учебные главы: сначала поймите идею в `3` / `4` / `2`, потом используйте `301` / `401` / `201` как шпаргалку при работе.

---

## Рекомендуемый порядок (первый проход)

1. [Процесс разработки видеоигр](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1) — этапы, GDD, роли.
2. [Игровой движок](/encyclopedia/9-spinoff/9-04-razrabotka-igr/112) и [Виды движков](/encyclopedia/9-spinoff/9-04-razrabotka-igr/113) — выбор стека.
3. [Гейм-дизайн](/encyclopedia/9-spinoff/9-04-razrabotka-igr/117) — три уровня; цепочка [1172](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1172) → [1174](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1174) → [1173](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1173) → [1171](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1171) → [1175](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1175) → [1176](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1176).
4. Один практический трек: **Unity** *или* **Unreal** *или* **Roblox** (см. карточки ниже).
5. По желанию: [Языки](/encyclopedia/9-spinoff/9-04-razrabotka-igr/114), [Оптимизация](/encyclopedia/9-spinoff/9-04-razrabotka-igr/123), платформы; для разбора чужого кода — [каталог open-source клонов](/encyclopedia/9-spinoff/9-04-razrabotka-igr/125).
6. [Итоги](/encyclopedia/9-spinoff/9-04-razrabotka-igr/998) и [чек-лист](/encyclopedia/9-spinoff/9-04-razrabotka-igr/999).

Для карьеры и ролей в студии — отдельно [Дорожная карта геймдева](/encyclopedia/9-spinoff/9-04-razrabotka-igr/11) и [Команда разработки](/encyclopedia/9-spinoff/9-04-razrabotka-igr/111).

### Углублённый маршрут по гейм-дизайну

Углублённая теория геймплея — цепочка после [117](/encyclopedia/9-spinoff/9-04-razrabotka-igr/117):

1. [1172 — механики](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1172)
2. [1174 — core loop](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1174)
3. [1173 — системы и баланс](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1173)
4. [1171 — опыт игрока](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1171)
5. [1175 — нарратив](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1175) → [1176 — прототип](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1176)

---

<span id="unity-csharp-track"></span>

## Unity + C# — учебный маршрут

Если цель — **первая игра на Unity**, читайте параллельно практику в редакторе и язык C#. Ниже типичный маршрут первого 3D-прототипа: white-box → движение → механика → NavMesh.

| Шаг | Unity — практика | C# — теория | Зачем |
|-----|------------------|-------------|--------|
| 1 | [One-Page / GDD](/encyclopedia/9-spinoff/9-04-razrabotka-igr/117) | — | Замысел до кода |
| 2 | [3.md](/encyclopedia/9-spinoff/9-04-razrabotka-igr/3) — установка, окна, документация | [C# — первая программа](/encyclopedia/5-languages/5-05-csharp/1), [синтаксис](/encyclopedia/5-languages/5-05-csharp/11) | Среда и базовый синтаксис |
| 3 | [3.md](/encyclopedia/9-spinoff/9-04-razrabotka-igr/3) — white-box, свет, частицы | [переменные](/encyclopedia/5-languages/5-05-csharp/17), [типы](/encyclopedia/5-languages/5-05-csharp/20) | Уровень и типы данных |
| 4 | [3.md](/encyclopedia/9-spinoff/9-04-razrabotka-igr/3) — lifecycle, `Update` / `FixedUpdate` | [ООП в C#](/encyclopedia/5-languages/5-05-csharp/25) — блок Unity | `MonoBehaviour`, компоненты |
| 5 | [3.md](/encyclopedia/9-spinoff/9-04-razrabotka-igr/3) — движение, прыжок, UI | [коллекции](/encyclopedia/5-languages/5-05-csharp/28) | `List`, `Dictionary`, свойства |
| 6 | [3.md](/encyclopedia/9-spinoff/9-04-razrabotka-igr/3) — стрельба, GameManager | [делегаты и события](/encyclopedia/5-languages/5-05-csharp/102) | События UI и геймплея |
| 7 | [3.md](/encyclopedia/9-spinoff/9-04-razrabotka-igr/3) — NavMesh, враги | [generics](/encyclopedia/5-languages/5-05-csharp/26) (по желанию) | ИИ и обобщения |
| 8 | [301](/encyclopedia/9-spinoff/9-04-razrabotka-igr/301), [999](/encyclopedia/9-spinoff/9-04-razrabotka-igr/999) | [справочник C#](/encyclopedia/5-languages/5-05-csharp/471) | Закрепление |

<div class="callout callout--tip">
  <div class="callout-title">Как учиться эффективно</div>

  <div class="callout-body">
  Держите открытыми Unity и IDE: повторяйте примеры из <a href="/encyclopedia/9-spinoff/9-04-razrabotka-igr/3">главы 3</a>, не копируя слепо — меняйте параметры (скорость, радиус агента, win-условие). После каждого блока — 3–5 вопросов из <a href="/encyclopedia/9-spinoff/9-04-razrabotka-igr/999">чек-листа Unity/C#</a>.
</div>
</div>

---

<span id="roblox-luau-track"></span>

## Roblox + Luau — учебный маршрут

Если цель — **первая игра на Roblox**, читайте практику в Studio и язык Luau параллельно.

| Шаг | Roblox — практика | Luau — теория | Зачем |
|-----|-------------------|---------------|--------|
| 1 | [203 — Studio и Place](/encyclopedia/9-spinoff/9-04-razrabotka-igr/203) | — | Среда, публикация, первый Script |
| 2 | [2 — клиент и сервер](/encyclopedia/9-spinoff/9-04-razrabotka-igr/2) (обзор) | [Первая программа](/encyclopedia/5-languages/5-15-lua-i-luau/13), [синтаксис](/encyclopedia/5-languages/5-15-lua-i-luau/14) | Контейнеры и базовый Lua |
| 3 | [204 — практикум «обби»](/encyclopedia/9-spinoff/9-04-razrabotka-igr/204) | [таблицы](/encyclopedia/5-languages/5-15-lua-i-luau/15), [функции](/encyclopedia/5-languages/5-15-lua-i-luau/17) | DataStore, RemoteEvent, этапы |
| 4 | [205 — королевская битва](/encyclopedia/9-spinoff/9-04-razrabotka-igr/205) (по желанию) | [корутины](/encyclopedia/5-languages/5-15-lua-i-luau/21) | Раунды, PvP, валидация на сервере |
| 5 | [206 — механика и продвижение](/encyclopedia/9-spinoff/9-04-razrabotka-igr/206), [202 — экономика](/encyclopedia/9-spinoff/9-04-razrabotka-igr/202) | [23 — Luau](/encyclopedia/5-languages/5-15-lua-i-luau/23) | Монетизация, жанры, типы |
| 6 | [201 — справочник](/encyclopedia/9-spinoff/9-04-razrabotka-igr/201), [999 — чек-лист](/encyclopedia/9-spinoff/9-04-razrabotka-igr/999) | [999 Luau](/encyclopedia/5-languages/5-15-lua-i-luau/999) | Закрепление |

<div class="callout callout--tip">
  <div class="callout-title">Как учиться эффективно</div>

  <div class="callout-body">
  Держите открытыми Studio и статью <a href="/encyclopedia/9-spinoff/9-04-razrabotka-igr/204">204</a>: повторяйте модули и чекпоинты, меняя число этапов и цены в магазине. Справочник <a href="/encyclopedia/9-spinoff/9-04-razrabotka-igr/2">2</a> читайте выборочно при вопросах по lifecycle и репликации.
</div>
</div>

---

### Шесть жанров — мини-игры

Перед Unity или Unreal полезно **пощупать жанр**: аркада, платформер, головоломка, пошаговая стратегия, RPG, roguelike. Ниже — оригинальные учебные игрушки с вкладками (подробнее в [классификации жанров](/encyclopedia/1-basics/1-18-kompyuternye-igry/2)).

<GameGenreToysHub theme="javascript" />

---

## Все материалы раздела

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока "С чего начать?" на главной. Соседние шаги того же маршрута:

**Разработка видеоигр** — [Компьютерные игры — о разделе](/encyclopedia/1-basics/1-18-kompyuternye-igry/intro), [Игроведение — о разделе](/encyclopedia/9-spinoff/9-03-igrovaya-industriya/game-studies/intro), [Игровая индустрия — о разделе](/encyclopedia/9-spinoff/9-03-igrovaya-industriya/intro), [Разработка игр на Python](/encyclopedia/5-languages/5-02-python/312), [Веб-игры на HTML5 и Canvas](/encyclopedia/3-data-markup/3-09-html/22), [Разработка игр с использованием C++](/encyclopedia/5-languages/5-06-cpp/22).

{/* /sidebar-collections */}

---
