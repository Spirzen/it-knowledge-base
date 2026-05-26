---
title: Dart — о разделе
description: "Dart — язык от Google: статическая типизация, null safety, async/await и изоляты (isolates) вместо разделяемой памяти между потоками."
sidebar_label: Dart — о разделе
related:
  - title: "Nim — о разделе"
    doc: encyclopedia/5-languages/5-21-nim/intro
  - title: "R — о разделе"
    doc: encyclopedia/5-languages/5-23-r/intro
  - title: "Zig — о разделе"
    doc: encyclopedia/5-languages/5-20-zig/intro
  - title: "Julia — о разделе"
    doc: encyclopedia/5-languages/5-24-julia/intro
---

import DocCardList from '@theme/DocCardList';
import FirstProgramPlay from '@site/src/components/FirstProgramPlay';
import SyntaxComparePlay from '@site/src/components/SyntaxComparePlay';

# О разделе

**Dart** — язык от Google: статическая типизация, null safety, `async`/`await` и **изоляты (isolates)** вместо разделяемой памяти между потоками. **Flutter** — UI-фреймворк на Dart; язык при этом самостоятелен (консоль, HTTP, скрипты).

В разделе: история и runtime, синтаксис, типы, управление, async, паттерны Dart 3, ООП, консоль и HTTP, Flutter, чек-лист. Сначала **Dart как язык**, затем [Flutter](./311.md).

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

Перед [классами и ООП](./10): [парадигмы](/encyclopedia/4-code-dev/4-07-paradigmy-i-urovni-abstraktsii/intro) и [ООП в разделе "Код"](/encyclopedia/4-code-dev/4-08-oop/intro).

### Рекомендуемый маршрут

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [История](./1.md) → [Runtime](./3.md) | VM, isolates, event loop |
| 2 | [Основы](./2.md) → [Синтаксис](./12.md) → [Типы](./4.md) | `main`, null safety |
| 3 | [Управление](./5.md) → [Паттерны Dart 3](./8.md) | switch expressions |
| 4 | [Первая программа](./7.md) → [Async](./6.md) | SDK и `dart run` |
| 5 | [ООП](./10.md) → [Консоль и HTTP](./9.md) | Без Flutter |
| 6 | [Flutter](./311.md) → [Чек-лист](./999.md) | UI и самопроверка |

Мобильный контекст: [раздел мобильных приложений](/encyclopedia/4-code-dev/4-12-mobilnye-prilozheniya/1134).

### Зачем этот раздел

Подборка по **Dart** в энциклопедии: синтаксис, первая программа и смежные темы. Пройдите один маршрут до конца, не смешивая несколько языков на старте.

---

### С чего начать

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Первая программа](./7.md) | Запуск и синтаксис |
| 2 | [Flutter](/encyclopedia/4-code-dev/4-12-mobilnye-prilozheniya/1134) | Углубление |

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

<FirstProgramPlay language="dart" />

<SyntaxComparePlay />

<DocCardList />

{/* sidebar-collections */}
## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока "С чего начать?" на главной. Соседние шаги того же маршрута:

**Бэкенд и серверная разработка** — [Nim — о разделе](/encyclopedia/5-languages/5-21-nim/intro), [R — о разделе](/encyclopedia/5-languages/5-23-r/intro), [Zig — о разделе](/encyclopedia/5-languages/5-20-zig/intro), [Julia — о разделе](/encyclopedia/5-languages/5-24-julia/intro), [Elixir — о разделе](/encyclopedia/5-languages/5-19-elixir/intro), [Bash — о разделе](/encyclopedia/5-languages/5-25-bash/intro).

{/* /sidebar-collections */}

---
