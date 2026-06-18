---
tags: [developer, beginner]
title: "Практикум разработки игр — о разделе"
description: "Пошаговые мини-проекты на Python (Pygame), Java и TypeScript — от аркады до roguelike и онлайн-карточной игры. На каждом этапе — полные файлы для копирования, проверка и разбор кода."
sidebar_label: "Практикум — о разделе"
related:
  - title: "Разработка игр — о разделе"
    doc: encyclopedia/9-spinoff/9-04-razrabotka-igr/intro
  - title: "Разработка игр на Python"
    doc: encyclopedia/5-languages/5-02-python/312
  - title: "Pygame — мини-игры на Python"
    doc: lab/examples/1132
  - title: "Разработка в Minecraft"
    doc: encyclopedia/9-spinoff/9-04-razrabotka-igr/21
  - title: "Minecraft — команды и datapack"
    doc: lab/examples/1142
  - title: "Unity C# — скрипты для новичков"
    doc: lab/examples/1136
  - title: "Python — о разделе"
    doc: encyclopedia/5-languages/5-02-python/intro
  - title: "Java — о разделе"
    doc: encyclopedia/5-languages/5-03-java/intro
  - title: "Java Swing — окна и кнопки"
    doc: lab/examples/1143
  - title: "TypeScript"
    doc: encyclopedia/5-languages/5-01-javascript/30
  - title: "JavaScript — о разделе"
    doc: encyclopedia/5-languages/5-01-javascript/intro
  - title: "Компьютерные игры — о разделе"
    doc: encyclopedia/1-basics/1-18-kompyuternye-igry/intro
---

import DocCardList from '@theme/DocCardList';

# Практикум разработки игр — о разделе

<span class="complexity-badge">Разработчику</span>
<span class="complexity-badge">Начальный уровень</span>

---

## О разделе

Здесь — **сквозные учебные проекты**: одна игра от пустого окна до играбельного прототипа. Каждый этап даёт **готовые файлы целиком** — скопируй блок в проект и запусти `python main.py` без догадок и пропусков вроде `# ...`.

**Листинги от ~15 строк** (Python, Java, TypeScript и конфиги) живут в [code.spirzen.ru](https://code.spirzen.ru/) и встроены в статьи через `ExternalCodeEmbed` — копирование и подсветка синтаксиса работают так же, как на отдельном сайте. Короткие фрагменты и схемы остаются inline.

Теория движков, пайплайна и гейм-дизайна — в [разделе "Разработка игр"](/encyclopedia/9-spinoff/9-04-razrabotka-igr/intro); база **Pygame** и игрового цикла на Python — в [Разработка игр на Python](/encyclopedia/5-languages/5-02-python/312). Перед длинным треком удобно прогнать [короткие мини-игры с разбором](/lab/Примеры/1132) (змейка, Pong, Breakout в одном файле). Для **Minecraft Java** без движка — [команды и datapack с разбором](/lab/Примеры/1142) и [теория Minecraft](/encyclopedia/9-spinoff/9-04-razrabotka-igr/21). Для **Unity + C#** — [курс в редакторе](/encyclopedia/9-spinoff/9-04-razrabotka-igr/3) и [готовые скрипты](/lab/Примеры/1136). Браузерные игры и Canvas — в [Веб-игры на HTML5 и Canvas](/encyclopedia/3-data-markup/3-09-html/22), типизация — в [TypeScript](/encyclopedia/5-languages/5-01-javascript/30).

| Трек | Проект | Статус | Стек |
|------|--------|--------|------|
| Python | [Bubble Shooter](./10.md) | готов (12 этапов) | Python, Pygame |
| Python | [Space Invaders](./11.md) | готов, 8 этапов и ревизия модулей | Python, Pygame |
| Python | [Battle City](https://github.com/Spirzen/BattleCity) | готов (16 этапов, эталон на GitHub) | Python, Pygame |
| Python | [Match3](./2.md) | готов (18 этапов, [эталон на GitHub](https://github.com/Spirzen/Match3)) | Python, Pygame |
| Python | [Ping Pong](./3.md) | готов (полная сборка в конце) | Python, Pygame |
| Python | [Racing](./4.md) | готов (полная ревизия) | Python, Pygame |
| Python | [Tetris](./5.md) | готов (полная ревизия) | Python, Pygame |
| Python | [диаблоид](./6.md) | готов (полная ревизия) | Python, Pygame |
| Python | [карточная стратегия](./7.md) | поэтапно, полная ревизия в работе | Python, Pygame |
| Java | [Java Survivors](./8.md) | поэтапно, полная ревизия в работе | Java, Swing, Java2D; перед треком — [Lab — Swing](/lab/Примеры/1143) (`JFrame`, кнопки, EDT) |
| TypeScript | [OnlineCardGame](./9.md) | поэтапно, полная ревизия в работе | TypeScript, браузер / Canvas |
| TypeScript | TypeScript Survivors | скоро | TypeScript, браузер / Canvas |
| TypeScript | диаблоид | скоро | TypeScript, браузер / Canvas |
| Smalltalk | [SmallShooter](/encyclopedia/5-languages/5-08-smalltalk/44) | готов (8 этапов) | Pharo, Morphic |

[Приключения Урала Батыра](https://spirzen.github.io/OnlineCardGame/) (репозиторий [OnlineCardGame](https://github.com/Spirzen/OnlineCardGame)) уже можно сыграть в браузере; пошаговый разбор кода — в главе [TypeScript — OnlineCardGame](./9.md).

## Как проходить практикум

<div class="callout callout--tip">
  <div class="callout-title">Рабочий цикл на каждом этапе</div>

  <div class="callout-body">
  Создай папку проекта и виртуальное окружение один раз в начале трека — дальше работай в той же папке на всех этапах.
  </div>
</div>

1. **Подготовь окружение** — отдельная папка проекта и `venv` (или аналог для Java/TypeScript-треков). Установи зависимости из инструкции в первой главе трека.
2. **Копируй полные файлы** — после каждого этапа бери из статьи **целые блоки кода** (`main.py`, вспомогательные модули). Вставляй их в проект как готовые файлы, без фрагментов с `# ...` и пропусками строк.
3. **Запускай после каждого этапа** — выполни `python main.py` (или команду из главы) и убедись, что игра стартует до перехода к следующему шагу.
4. **Проверяй себя** — в конце этапа есть блок **"Проверка"** или чек-лист: пройди пункты и сверь поведение с ожидаемым.
5. **Читай разбор** — в каждом этапе появляется секция **"Разбор"** с пояснением ключевых строк и связей между файлами. Разделы без разбора дополняются по мере обновления треков.
6. **Если застрял** — перейди к разделу **"Полная ревизия файлов"** в конце статьи: там собраны финальные версии всех файлов проекта для сверки.

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**Разработка видеоигр** — [Разработка игр — о разделе](/encyclopedia/9-spinoff/9-04-razrabotka-igr/intro), [Разработка игр на Python](/encyclopedia/5-languages/5-02-python/312), [Игровая индустрия — о разделе](/encyclopedia/9-spinoff/9-03-igrovaya-industriya/intro), [Веб-игры на HTML5 и Canvas](/encyclopedia/3-data-markup/3-09-html/22), [Игроведение — о разделе](/encyclopedia/9-spinoff/9-03-igrovaya-industriya/game-studies/intro), [Разработка игр с использованием C++](/encyclopedia/5-languages/5-06-cpp/22).

{/* /sidebar-collections */}

---
