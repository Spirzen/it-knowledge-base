---
title: Си — о разделе
description: "Рекомендуемый порядок для первого прохода: 1. Первая программа — установка toolchain, Hello, World, сборка из терминала."
sidebar_label: Си — о разделе
related:
  - title: "Ассемблер — о разделе"
    doc: encyclopedia/5-languages/5-16-starye-yazyki/assembler/intro
  - title: "Rust — о разделе"
    doc: encyclopedia/5-languages/5-13-rust/intro
  - title: "C++ — о разделе"
    doc: encyclopedia/5-languages/5-06-cpp/intro
  - title: "Системное программирование на C++"
    doc: encyclopedia/5-languages/5-06-cpp/21
  - title: "Haskell — о разделе"
    doc: encyclopedia/5-languages/5-17-haskell/intro
  - title: "Visual Basic — о разделе"
    doc: encyclopedia/5-languages/5-16-starye-yazyki/visual-basic/intro
  - title: "Scala — о разделе"
    doc: encyclopedia/5-languages/5-18-scala/intro
---

import DocCardList from '@theme/DocCardList';

# Си — о разделе

**Длинные листинги (от ~15 строк)** вынесены в каталог [code.spirzen.ru](https://code.spirzen.ru/) и подгружаются в статьях через `ExternalCodeEmbed` — так HTML энциклопедии не раздувается, а код остаётся с подсветкой, вкладками и сериями «шаг 1…N». Короткие фрагменты (одна строка, пара выражений) по-прежнему прямо в markdown. Диаграммы **mermaid** и интерактив — на месте или в [play.spirzen.ru](https://play.spirzen.ru/).

### Зачем этот раздел

**C** — основа системного программирования, Unix и многих современных языков. Маршрут ниже ведёт от `Hello, World` к памяти, линковке и стандартам.

---

### Частые ошибки при старте

| Ошибка | Что делать |
|--------|------------|
| Игнор предупреждений компилятора | `-Wall -Wextra` с первого дня |
| Утечки и UB | [Память процесса](./214.md), [идиомы](./412.md) |
| Смешение C и C++ | Держитесь `.c` / компилятора `gcc`, не `g++` без нужды |

---

Рекомендуемый порядок для первого прохода:

1. [Первая программа](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/7) — установка toolchain, `Hello, World`, сборка из терминала.
2. [Основы языка](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/2) — синтаксис, память, указатели, структуры.
3. [Типы данных](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/4) — примитивы, массивы, строки, UB и `<stdint.h>`.
4. [Управляющие конструкции и операторы](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/5) — `if`, циклы, побитовые операции.
5. [Функции и указатели](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/6) — прототипы, модули `.h`/`.c`, передача по указателю.
6. [Архитектура программ](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/3) и [цепочка компиляции](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/211) — препроцессор, объектные файлы, линковка.
7. [Стандарты C](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/213) — C89/C99/C11/C17/C23.
8. [Память процесса](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/214) — сегменты, стек, куча, data и BSS.
9. [Справочник](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/8) — таблицы и быстрый поиск по API.

Углубление: [структуры и объединения](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/411), [идиомы и ошибки](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/412), [хеш-таблица](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/413), [встраиваемая БД](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/414) и [SQLite — практика и API](/encyclopedia/3-data-markup/3-07-sql/887), [многопоточность](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/415), [файловый ввод-вывод](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/416), [компиляторы и IDE](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/311), [примеры](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/711), [системное программирование](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/712). Исторический контекст — [История языка С](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/1).

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

---

### Что попробовать

1. [Первая программа](./7.md) — соберите и запустите из терминала.
2. Один warning исправьте по подсказке `gcc`.
3. Сравните с [C++](/encyclopedia/5-languages/5-06-cpp/intro) после пунктов 1–3 маршрута выше.

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок «С чего начать?» на [главной](/). Соседние шаги того же маршрута:

**Системное программирование** — [Ассемблер — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/assembler/intro), [Rust — о разделе](/encyclopedia/5-languages/5-13-rust/intro), [C++ — о разделе](/encyclopedia/5-languages/5-06-cpp/intro), [Системное программирование на C++](/encyclopedia/5-languages/5-06-cpp/21), [Оптимизация размера и производительности приложений](/encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/3), [Выполнение кода — о разделе](/encyclopedia/4-code-dev/4-03-vypolnenie-koda/intro).

**Бэкенд и серверная разработка** — [Ассемблер — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/assembler/intro), [Haskell — о разделе](/encyclopedia/5-languages/5-17-haskell/intro), [Visual Basic — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/visual-basic/intro), [Scala — о разделе](/encyclopedia/5-languages/5-18-scala/intro), [Pascal — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/Pascal/intro), [Elixir — о разделе](/encyclopedia/5-languages/5-19-elixir/intro).

{/* /sidebar-collections */}

---
