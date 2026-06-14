---
title: "Scala — о разделе"
description: "Материалы раздела ориентированы на Scala 3 на JVM."
sidebar_label: "Scala — о разделе"
related:
  - title: "Haskell — о разделе"
    doc: encyclopedia/5-languages/5-17-haskell/intro
  - title: "Elixir — о разделе"
    doc: encyclopedia/5-languages/5-19-elixir/intro
  - title: "Си — о разделе"
    doc: encyclopedia/5-languages/5-16-starye-yazyki/c-language/intro
  - title: "Zig — о разделе"
    doc: encyclopedia/5-languages/5-20-zig/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

**Длинные листинги (от ~15 строк)** вынесены в каталог [code.spirzen.ru](https://code.spirzen.ru/) и подгружаются в статьях через `ExternalCodeEmbed` — так HTML энциклопедии не раздувается, а код остаётся с подсветкой, вкладками и сериями "шаг 1…N". Короткие фрагменты (одна строка, пара выражений) по-прежнему прямо в markdown. Диаграммы **mermaid** и интерактив — на месте или в [play.spirzen.ru](https://play.spirzen.ru/).

**Scala** — мультипарадигмальный язык (функциональный, объектно-ориентированный, императивный), созданный в EPFL под руководством [Мартина Одерски](https://ru.wikipedia.org/wiki/Одерски,_Мартин) для **компонентного** ПО: краткий, **типобезопасный** синтаксис и единые концепции абстракции для модулей любого масштаба. Целевые платформы — **JVM**, **JavaScript** ([Scala.js](https://www.scala-js.org/)) и нативный код ([Scala Native](https://www.scala-native.org/)); расширения исходников — `.scala` и `.sc`.

Материалы раздела ориентированы на **Scala 3** на JVM. Если вы приходите из Java, начните с [истории и контекста](/encyclopedia/5-languages/5-18-scala/1), затем [основ языка](/encyclopedia/5-languages/5-18-scala/2) и [первой программы](/encyclopedia/5-languages/5-18-scala/7); дальше — [типы и pattern matching](/encyclopedia/5-languages/5-18-scala/4), [Play Framework](/encyclopedia/5-languages/5-18-scala/211), [Akka](/encyclopedia/5-languages/5-18-scala/212), [Apache Spark](/encyclopedia/5-languages/5-18-scala/213). BEAM-стек для сравнения — [Phoenix на Elixir](/encyclopedia/5-languages/5-19-elixir/104). [Архитектура JVM-приложений](/encyclopedia/5-languages/5-18-scala/3) — когда синтаксис уже понятен.

**Полезные внешние источники:** [документация Scala](https://docs.scala-lang.org/), [обзор на Википедии](https://ru.wikipedia.org/wiki/Scala_(%D1%8F%D0%B7%D1%8B%D0%BA_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F)), курс [Functional Programming Principles in Scala](https://www.coursera.org/learn/scala-functional-programming) (Мартин Одерски).

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база — **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

---

### Зачем этот раздел

Подборка по **Scala** в энциклопедии: синтаксис, первая программа и смежные темы. Выберите один язык для старта, пройдите маршрут до первой рабочей программы — затем переходите к следующему языку или стеку.

---

### С чего начать

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Первая программа](./7.md) | Запуск и синтаксис |

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

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**Бэкенд и серверная разработка** — [Haskell — о разделе](/encyclopedia/5-languages/5-17-haskell/intro), [Elixir — о разделе](/encyclopedia/5-languages/5-19-elixir/intro), [Си — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/intro), [Zig — о разделе](/encyclopedia/5-languages/5-20-zig/intro), [Ассемблер — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/assembler/intro), [Nim — о разделе](/encyclopedia/5-languages/5-21-nim/intro).

{/* /sidebar-collections */}

---
