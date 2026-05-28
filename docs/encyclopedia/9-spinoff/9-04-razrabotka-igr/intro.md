---
title: Разработка игр — о разделе
description: Подборка материалов раздела Разработка игр в энциклопедии Вселенная IT — как читать, в каком порядке, где теория и где практика.
sidebar_label: Разработка игр — о разделе
related:
  - title: "Игровая индустрия — о разделе"
    doc: encyclopedia/9-spinoff/9-03-igrovaya-industriya/intro
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
| **Практика в редакторе** | Пошагово в движке | [Unity](/encyclopedia/9-spinoff/9-04-razrabotka-igr/3), [Unreal](/encyclopedia/9-spinoff/9-04-razrabotka-igr/4), [Roblox](/encyclopedia/9-spinoff/9-04-razrabotka-igr/2) |
| **Справочник** | API, горячие клавиши, lifecycle | [301](/encyclopedia/9-spinoff/9-04-razrabotka-igr/301), [401](/encyclopedia/9-spinoff/9-04-razrabotka-igr/401), [201](/encyclopedia/9-spinoff/9-04-razrabotka-igr/201) |
| **Платформы и качество** | Где публиковать, как не тормозить | [PC](/encyclopedia/9-spinoff/9-04-razrabotka-igr/118)–[122](/encyclopedia/9-spinoff/9-04-razrabotka-igr/122), [Steam](/encyclopedia/9-spinoff/9-03-igrovaya-industriya/11435), [Оптимизация](/encyclopedia/9-spinoff/9-04-razrabotka-igr/123), [Тестирование](/encyclopedia/9-spinoff/9-04-razrabotka-igr/124) |
| **Внешний каталог** | Open-source клоны для разбора исходников | [Каталог клонов](/encyclopedia/9-spinoff/9-04-razrabotka-igr/125) ([osgameclones.com](https://osgameclones.com/)) |
| **Референсы для игрока** | Эталоны жанров и механик "на ощупь" | [Игры, которые должен попробовать каждый](/tools/games/4) |

**Справочники** не заменяют учебные главы: сначала поймите идею в `3` / `4` / `2`, потом используйте `301` / `401` / `201` как шпаргалку при работе.

---

## Рекомендуемый порядок (первый проход)

1. [Процесс разработки видеоигр](/encyclopedia/9-spinoff/9-04-razrabotka-igr/1) — этапы, GDD, роли.
2. [Игровой движок](/encyclopedia/9-spinoff/9-04-razrabotka-igr/112) и [Виды движков](/encyclopedia/9-spinoff/9-04-razrabotka-igr/113) — выбор стека.
3. [Гейм-дизайн](/encyclopedia/9-spinoff/9-04-razrabotka-igr/117) — механики и опыт *до* кода.
4. Один практический трек: **Unity** *или* **Unreal** *или* **Roblox** (см. карточки ниже).
5. По желанию: [Языки](/encyclopedia/9-spinoff/9-04-razrabotka-igr/114), [Оптимизация](/encyclopedia/9-spinoff/9-04-razrabotka-igr/123), платформы; для разбора чужого кода — [каталог open-source клонов](/encyclopedia/9-spinoff/9-04-razrabotka-igr/125).
6. [Итоги](/encyclopedia/9-spinoff/9-04-razrabotka-igr/998) и [чек-лист](/encyclopedia/9-spinoff/9-04-razrabotka-igr/999).

Для карьеры и ролей в студии — отдельно [Дорожная карта геймдева](/encyclopedia/9-spinoff/9-04-razrabotka-igr/11) и [Команда разработки](/encyclopedia/9-spinoff/9-04-razrabotka-igr/111).

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
