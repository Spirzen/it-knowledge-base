---
title: Rust — о разделе
description: "Rust — владение, Cargo, async и Axum; сравнение с C++ и Go, системное программирование и безопасность памяти."
sidebar_label: Rust — о разделе
related:
  - title: "C++ — о разделе"
    doc: encyclopedia/5-languages/5-06-cpp/intro
  - title: "Ассемблер — о разделе"
    doc: encyclopedia/5-languages/5-16-starye-yazyki/assembler/intro
  - title: "Системное программирование на C++"
    doc: encyclopedia/5-languages/5-06-cpp/21
  - title: "Си — о разделе"
    doc: encyclopedia/5-languages/5-16-starye-yazyki/c-language/intro
  - title: "Groovy — о разделе"
    doc: encyclopedia/5-languages/5-12-groovy/intro
  - title: "Swift — о разделе"
    doc: encyclopedia/5-languages/5-14-swift/intro
  - title: "Ruby — о разделе"
    doc: encyclopedia/5-languages/5-11-ruby/intro
  - title: "Lua и Luau — о разделе"
    doc: encyclopedia/5-languages/5-15-lua-i-luau/intro
---

import DocCardList from '@theme/DocCardList';
import FirstProgramPlay from '@site/src/components/FirstProgramPlay';
import SyntaxComparePlay from '@site/src/components/SyntaxComparePlay';

# О разделе

**Rust** — компилируемый язык с проверкой безопасности памяти **на этапе компиляции**: владение, заимствование и borrow checker вместо сборщика мусора. Подходит для системного кода, CLI, WebAssembly, высоконагруженных сервисов и всего, где важны предсказуемость и скорость.

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

Перед [ООП-паттернами в Rust](/encyclopedia/5-languages/5-13-rust/141): [парадигмы](/encyclopedia/4-code-dev/4-07-paradigmy-i-urovni-abstraktsii/intro) и [ООП в разделе «Код»](/encyclopedia/4-code-dev/4-08-oop/intro).

Пройдите **один маршрут до конца**, не смешивая на старте несколько языков — иначе правила владения смешаются с GC из Java или Python.

В [типах и владении](./13.md) правила borrow checker сначала объясняются **псевдокодом**, затем — синтаксисом Rust.

### Рекомендуемый маршрут

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 0 | [Что повторить перед Rust](./1001.md) | Базовые термины (по желанию) |
| 1 | [Первая программа](./20.md) | `rustup`, `cargo new`, `cargo run` |
| 2 | [Основы](./11.md) → [Синтаксис](./12.md) | Компилятор, модули, стиль |
| 3 | [Типы и владение](./13.md) | Главная тема Rust |
| 4 | [Управление](./14.md) → [Ошибки](./171.md) | `match`, `Result`, `?` |
| 5 | [ООП-паттерны](./141.md) → [Трейты](./18.md) | Без классического наследования |
| 6 | [Тестирование](./202.md) → [Cargo workspace](./204.md) | Практика в проекте |
| 7 | [Async](./17.md) → [Потоки](./203.md) | Когда что выбирать |
| 8 | [Axum](./201.md) | HTTP после базы |
| 9 | [Чек-лист](./999.md) | Самопроверка |

### Частые ошибки при старте

| Ошибка | Что делать |
|--------|------------|
| Борьба с borrow checker без `cargo run` | Компилируйте каждый пример |
| Сразу Tokio + Axum без `13` и `171` | Сначала владение и `Result` |
| Везде `clone()` | Поймите, где достаточно `&T` |

### Что попробовать

1. [Первая программа](./20.md) — измените вывод и пересоберите проект.
2. Получите ошибку borrow checker и прочитайте подсказку компилятора.
3. Один unit-тест по [тестированию](./202.md).

### Зачем этот раздел

Подборка по **Rust** в энциклопедии: синтаксис, первая программа и смежные темы. Пройдите один маршрут до конца, не смешивая несколько языков на старте.

---

### С чего начать

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Первая программа](./20.md) | Запуск и синтаксис |
| 2 | [Axum](./201.md) | Углубление |

---

### Частые ошибки при старте

| Ошибка | Что делать |
|--------|------------|
| Прыжки между языками | Закройте одну «первую программу», потом сравнивайте |
| Код без запуска | Выполните пример локально |
| Сразу большой фреймворк | Сначала база раздела, потом REST/UI |

---

### Что попробовать

1. Шаг 1 из таблицы.
2. Три непонятных термина — найдите статьи в оглавлении раздела.
3. Другой язык — только после своей рабочей первой программы.

---

<FirstProgramPlay language="rust" />

<SyntaxComparePlay />

<DocCardList />

{/* sidebar-collections */}
## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока «С чего начать?» на главной. Соседние шаги того же маршрута:

**Системное программирование** — [C++ — о разделе](/encyclopedia/5-languages/5-06-cpp/intro), [Ассемблер — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/assembler/intro), [Системное программирование на C++](/encyclopedia/5-languages/5-06-cpp/21), [Си — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/intro), [Оптимизация размера и производительности приложений](/encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/3), [Выполнение кода — о разделе](/encyclopedia/4-code-dev/4-03-vypolnenie-koda/intro).

**Бэкенд и серверная разработка** — [Groovy — о разделе](/encyclopedia/5-languages/5-12-groovy/intro), [Swift — о разделе](/encyclopedia/5-languages/5-14-swift/intro), [Ruby — о разделе](/encyclopedia/5-languages/5-11-ruby/intro), [Lua и Luau — о разделе](/encyclopedia/5-languages/5-15-lua-i-luau/intro), [Go — о разделе](/encyclopedia/5-languages/5-10-go/intro), [Cobol — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/Cobol/intro).

{/* /sidebar-collections */}

---
