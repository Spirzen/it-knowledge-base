---
title: Smalltalk — о разделе
description: "Подборка материалов раздела Smalltalk в энциклопедии Вселенная IT."
sidebar_label: Smalltalk — о разделе
related:
  - title: "SmallDesktop на Morphic — практикум"
    doc: encyclopedia/5-languages/5-08-smalltalk/21
  - title: "SmallPong на Morphic — практикум"
    doc: encyclopedia/5-languages/5-08-smalltalk/31
  - title: "PHP — о разделе"
    doc: encyclopedia/5-languages/5-07-php/intro
  - title: "Kotlin — о разделе"
    doc: encyclopedia/5-languages/5-09-kotlin/intro
  - title: "C++ — о разделе"
    doc: encyclopedia/5-languages/5-06-cpp/intro
  - title: "Go — о разделе"
    doc: encyclopedia/5-languages/5-10-go/intro
---

import ExternalPlayEmbed from '@site/src/components/ExternalPlayEmbed';


import DocCardList from '@theme/DocCardList';

# О разделе

**Длинные листинги (от ~15 строк)** вынесены в каталог [code.spirzen.ru](https://code.spirzen.ru/) и подгружаются в статьях через `ExternalCodeEmbed` — так HTML энциклопедии не раздувается, а код остаётся с подсветкой, вкладками и сериями "шаг 1…N". Короткие фрагменты (одна строка, пара выражений) по-прежнему прямо в markdown. Диаграммы **mermaid** и интерактив — на месте или в [play.spirzen.ru](https://play.spirzen.ru/).

**Smalltalk** — один из родоначальников ООП и GUI — объекты и **сообщения**, динамическая типизация, среда **image**, IDE внутри системы. Язык создали в Xerox PARC в 1970-х; эталоном для индустрии стал **Smalltalk-80** (образ + виртуальная машина). От Simula пришли классы и наследование; к Java, Ruby, Objective-C и Python ушли посылка сообщений, живая среда и идеи рефакторинга, шаблонов и XP. Для обучения ориентируемся на **[Pharo](./13.md)** (Playground, Class Browser); родственные реализации — **[Squeak](./14.md)**, **VisualWorks**, **GNU Smalltalk**. UI и игры в разделе — на **[Morphic](./15.md)**; для нативной графики — **[Raylib](./16.md)**, для анализа кода — **[Glamorous Toolkit](./17.md)**.

Материал лучше проходить **в живой среде** — копирование в "обычный" редактор без image не заменит опыт.

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база — **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

Перед [ООП-модель Smalltalk](./4): [парадигмы](/encyclopedia/4-code-dev/4-07-paradigmy-i-urovni-abstraktsii/intro) и [ООП в разделе "Код"](/encyclopedia/4-code-dev/4-08-oop/intro).

---

### Рекомендуемый маршрут

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Первая программа](./11.md) | Pharo, Playground |
| 2 | [О языке](./1.md) | Image, VM |
| 3 | [Философия](./22.md) → [Синтаксис](./3.md) | Сообщения |
| 4 | [Типы](./33.md) → [ООП](./4.md) | Класс в браузере |
| 5 | [Pharo](./13.md) → [Morphic](./15.md) | Среда и графическая система |
| 6 | [Крестики-нолики](./12.md) | Morphic, MVC на практике |
| 7 | [SmallDesktop на Morphic](./21.md) | Десктопное GUI — панели, формы, тема |
| 8 | [SmallPong на Morphic](./31.md) | Игровой цикл, клавиатура |
| 9 | [SmallShooter — шутер](./44.md) | Волны врагов, Morphic UI |
| 10 | [Raylib в Pharo](./16.md) · [Glamorous Toolkit](./17.md) | FFI-игры и moldable tools |
| 11 | [Squeak](./14.md) · [Справочник](./5.md) → [Чек-лист](./999.md) | Родственная VM и шпаргалка |

---

### Частые ошибки

| Ошибка | Что делать |
|--------|------------|
| Ждать `.exe` и сборку как в C | Работать в **image**, сохранять образ |
| Копировать Java-синтаксис | `ifTrue:`, `timesRepeat:` |
| Не нажать accept (Ctrl+S) | Метод не попадёт в систему |

---

### Зачем этот раздел

Подборка по **Smalltalk** в энциклопедии: синтаксис, первая программа и смежные темы. Выберите один язык для старта, пройдите маршрут до первой рабочей программы — затем переходите к следующему языку или стеку.

---

### С чего начать

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Первая программа](./11.md) | Запуск и синтаксис |

---

### Частые ошибки при старте

| Ошибка | Что делать |
|--------|------------|
| Прыжки между языками | Закройте одну "первую программу", потом сравнивайте |
| Код без запуска | Выполните пример локально |
| Сразу большой фреймворк | Сначала база раздела, потом REST/UI |

---

### Что попробовать

1. Шаг 1 из таблицы.
2. Три непонятных термина — найдите статьи в оглавлении раздела.
3. Другой язык — только после своей рабочей первой программы.

---

<ExternalPlayEmbed example="lab/first-program-play" title="Первая программа" minHeight={420} playProps={{ language: 'smalltalk' }} />

<ExternalPlayEmbed example="data-markup/syntax-compare-play" title="Сравнение синтаксиса языков" minHeight={420} />

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**Бэкенд и серверная разработка** — [PHP — о разделе](/encyclopedia/5-languages/5-07-php/intro), [Kotlin — о разделе](/encyclopedia/5-languages/5-09-kotlin/intro), [C++ — о разделе](/encyclopedia/5-languages/5-06-cpp/intro), [Go — о разделе](/encyclopedia/5-languages/5-10-go/intro), [C# — о разделе](/encyclopedia/5-languages/5-05-csharp/intro), [Ruby — о разделе](/encyclopedia/5-languages/5-11-ruby/intro).

{/* /sidebar-collections */}

---
