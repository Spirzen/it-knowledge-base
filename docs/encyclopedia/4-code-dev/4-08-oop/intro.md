---
title: Объектно-ориентированное программирование — о разделе
description: "Подборка материалов раздела Объектно-ориентированное программирование в энциклопедии Вселенная IT."
sidebar_label: Объектно-ориентированное программирование — о разделе
related:
  - title: "Парадигмы и уровни абстракции — о разделе"
    doc: encyclopedia/4-code-dev/4-07-paradigmy-i-urovni-abstraktsii/intro
  - title: "Зависимости — о разделе"
    doc: encyclopedia/4-code-dev/4-09-zavisimosti/intro
  - title: "Архитектура выполнения — о разделе"
    doc: encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya/intro
  - title: "ORM и работа с данными — о разделе"
    doc: encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел про **объектно-ориентированное программирование** без привязки к одному языку: определение парадигмы, класс и объект, абстракция данных, инкапсуляция, наследование, полиморфизм (подтипы, перегрузка, обобщения), инструменты проектирования. Теоретические формулировки согласованы с [статьёй в Википедии](https://ru.wikipedia.org/wiki/Объектно-ориентированное_программирование) и адаптированы под учебный стиль энциклопедии. Синтаксис C++ — в [разделе C++](/encyclopedia/5-languages/5-06-cpp/intro).

Идеи здесь даются **сначала на русском псевдокоде** (`КЛАСС`, `метод`, `НАСЛЕДУЕТ`), затем — примерами на Java/C#/Python в статьях и в разделах языков. На старте пройдите этот маршрут **до** синтаксиса конкретного языка.

**Листинги на языках программирования (от ~8 строк)** вынесены в каталог [code.spirzen.ru](https://code.spirzen.ru/) и подгружаются через `ExternalCodeEmbed`. Русский псевдокод, короткие фрагменты (1–7 строк), диаграммы **mermaid** и интерактивные демо остаются в статьях — последние подгружаются из [play.spirzen.ru](https://play.spirzen.ru/). Образец интеграции — [Каталог примеров кода](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/617).

---

## Рекомендуемый маршрут

| Шаг | Статья | Зачем |
|-----|--------|--------|
| 1 | [Сложность, декомпозиция и ООП](./7.md) | зачем объекты и границы модулей |
| 2 | [Введение в ООП](./1.md) | класс, объект, инстанцирование |
| 3 | [Абстракция](./2.md) | скрытие деталей |
| 4 | [Инкапсуляция](./3.md) | модификаторы доступа |
| 5 | [Наследование](./4.md) | иерархии типов |
| 6 | [Полиморфизм](./5.md) | единый интерфейс; обобщения — [теория](/encyclopedia/4-code-dev/4-07-paradigmy-i-urovni-abstraktsii/114) |
| 7 | [Перечисления](./6.md) | enum, закрытые типы |
| 8 | [Коллекции](./61.md) | списки, словари, перебор |
| 9 | [Итоги](./98.md) · [чек-лист](./99.md) | закрепление |
| 10 | [Частые паттерны GoF](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/141) | Factory, Observer, Strategy и др. после столпов ООП |

Парадигмы и SOLID: [Парадигмы и уровни абстракции](/encyclopedia/4-code-dev/4-07-paradigmy-i-urovni-abstraktsii/intro). Паттерны: [design-patterns](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/intro), шпаргалка — [Частые паттерны GoF в реальных проектах](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/141).

---

## ООП в разделах языков

| Язык | Статья |
|------|--------|
| Python | [ООП в Python](/encyclopedia/5-languages/5-02-python/26) |
| Java | [ООП в Java](/encyclopedia/5-languages/5-03-java/18) |
| C# | [ООП в C#](/encyclopedia/5-languages/5-05-csharp/25) |
| C++ | [ООП в C++](/encyclopedia/5-languages/5-06-cpp/14) |
| JavaScript | [Объекты и прототипы](/encyclopedia/5-languages/5-01-javascript/22) |
| PHP | [ООП в PHP](/encyclopedia/5-languages/5-07-php/18) |
| Kotlin | [ООП в Kotlin](/encyclopedia/5-languages/5-09-kotlin/15) |
| Swift | [ООП в Swift](/encyclopedia/5-languages/5-14-swift/102) |
| Rust | [ООП-паттерны в Rust](/encyclopedia/5-languages/5-13-rust/141) |
| Ruby | [ООП в Ruby](/encyclopedia/5-languages/5-11-ruby/102) |
| Go | [структуры и интерфейсы](/encyclopedia/5-languages/5-10-go/14) (композиция вместо классического наследования) |
| Dart | [Классы и ООП](/encyclopedia/5-languages/5-22-dart/10) |
| Groovy | [ООП в Groovy](/encyclopedia/5-languages/5-12-groovy/15) |
| Lua | [ООП в Lua](/encyclopedia/5-languages/5-15-lua-i-luau/171) |
| Smalltalk | [ООП-модель](/encyclopedia/5-languages/5-08-smalltalk/4) |

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**База программиста** — [Парадигмы и уровни абстракции — о разделе](/encyclopedia/4-code-dev/4-07-paradigmy-i-urovni-abstraktsii/intro), [Зависимости — о разделе](/encyclopedia/4-code-dev/4-09-zavisimosti/intro), [Архитектура выполнения — о разделе](/encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya/intro), [ORM и работа с данными — о разделе](/encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro), [Асинхронность — о разделе](/encyclopedia/4-code-dev/4-05-asinhronnost/intro), [Десктопные приложения — о разделе](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/intro).

{/* /sidebar-collections */}

---
