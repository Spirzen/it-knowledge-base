---
title: C++ — о разделе
description: "Раздел про C++ как язык системного и прикладного программирования: от первой программы до сборки, памяти, потоков и экосистемы библиотек."
sidebar_label: C++ — о разделе
related:
  - title: "Системное программирование на C++"
    doc: encyclopedia/5-languages/5-06-cpp/21
  - title: "Rust — о разделе"
    doc: encyclopedia/5-languages/5-13-rust/intro
  - title: "Оптимизация размера и производительности приложений"
    doc: encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/3
  - title: "Ассемблер — о разделе"
    doc: encyclopedia/5-languages/5-16-starye-yazyki/assembler/intro
  - title: "C# — о разделе"
    doc: encyclopedia/5-languages/5-05-csharp/intro
  - title: "PHP — о разделе"
    doc: encyclopedia/5-languages/5-07-php/intro
  - title: "Платформа .NET — о разделе"
    doc: encyclopedia/5-languages/5-04-platforma-dotnet/intro
  - title: "Smalltalk — о разделе"
    doc: encyclopedia/5-languages/5-08-smalltalk/intro
  - title: "C++ — олимпиадные шаблоны"
    doc: lab/examples/1125
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел про **C++** как язык системного и прикладного программирования: от первой программы до сборки, памяти, потоков и экосистемы библиотек.

<div class="callout callout--info">
  <div class="callout-title">Стандарт в примерах</div>

  <div class="callout-body">
  Большинство фрагментов кода рассчитаны на **C++17**, если в тексте не указано иное. В вводных и системных главах сложные идеи (сборка, память, RAII) по возможности сначала даются **псевдокодом**

  — на C++. Возможности **C++20** и **C++23** помечаются явно. Для новых проектов в [вводной статье](/encyclopedia/5-languages/5-06-cpp/1) рекомендуется C++20; в корпоративных и embedded-проектах часто фиксируют минимум C++17 в CI.
</div>
  </div>

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

<div class="callout callout--info">
  <div class="callout-title">Потоки и память в C++</div>

  <div class="callout-body">
  Теория — [процессы и потоки](/encyclopedia/4-code-dev/4-05-asinhronnost/1), [стек и куча](/encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya/1).

  Практика — [многопоточность в C++](/encyclopedia/5-languages/5-06-cpp/20) (`std::thread`, мьютексы, атомики).
</div>
</div>

---

## Рекомендуемый маршрут

| Этап | Статьи | Зачем |
|------|--------|--------|
| Подготовка | [Что знать перед C++](/encyclopedia/5-languages/5-06-cpp/1001) | фундамент из разделов "Основы", "Код", "Система" |
| Старт | [Язык системного программирования](/encyclopedia/5-languages/5-06-cpp/1) | зачем C++, модель компиляции, ABI |
| Углубление (обзор) | [Углублённые темы](/encyclopedia/5-languages/5-06-cpp/28) | модули, EH, сравнение с Rust, HPC |
| Идиомы и C++20 | [Идиомы](/encyclopedia/5-languages/5-06-cpp/30), [Диапазоны](/encyclopedia/5-languages/5-06-cpp/31) | RAII, copy-and-swap, ranges/views |
| Синтаксис | [Типы](/encyclopedia/5-languages/5-06-cpp/11), [Операторы](/encyclopedia/5-languages/5-06-cpp/12), [Циклы и управление](/encyclopedia/5-languages/5-06-cpp/13) | базовый язык |
| Память и ООП | [ООП в разделе "Код"](/encyclopedia/4-code-dev/4-08-oop/intro) (база) → [ООП в C++](/encyclopedia/5-languages/5-06-cpp/14), [Память](/encyclopedia/5-languages/5-06-cpp/19), [Системное программирование](/encyclopedia/5-languages/5-06-cpp/21) | классы, владение, низкий уровень |
| Практика | [Функции и лямбды](/encyclopedia/5-languages/5-06-cpp/17), [Компиляторы и toolchain](/encyclopedia/5-languages/5-06-cpp/32), [Сборка](/encyclopedia/5-languages/5-06-cpp/1004), [CMake](/encyclopedia/5-languages/5-06-cpp/1006), [Задания](/encyclopedia/5-languages/5-06-cpp/1008) | писать, собирать, закреплять |
| Олимпиады | [Шаблоны C++ в Lab](/lab/Примеры/1125), [Алгоритмы — о разделе](/encyclopedia/4-code-dev/4-01-algoritmy/intro) | ввод-вывод, STL, графы, ДП |
| UI и графика | [Qt](/encyclopedia/5-languages/5-06-cpp/27), [Qt Widgets](/encyclopedia/5-languages/5-06-cpp/2731), [Qt Quick](/encyclopedia/5-languages/5-06-cpp/2732), [Vulkan](/encyclopedia/5-languages/5-06-cpp/29), [Игры](/encyclopedia/5-languages/5-06-cpp/22) | desktop, GPU |
| Продвинутое | [Потоки](/encyclopedia/5-languages/5-06-cpp/20), [Сеть](/encyclopedia/5-languages/5-06-cpp/25), [Экосистема](/encyclopedia/5-languages/5-06-cpp/10) | конкурентность, I/O, фреймворки |
| Справка | [Справочник](/encyclopedia/5-languages/5-06-cpp/3), [Ключевые слова](/encyclopedia/5-languages/5-06-cpp/151) | быстрый поиск по API и официальной документации |

Статья [1](/encyclopedia/5-languages/5-06-cpp/1) — вводный обзор; продолжение в [28](/encyclopedia/5-languages/5-06-cpp/28).

---

### Маршрут "ООП и парадигмы" (C++)

Концепции ООП без C++: [раздел ООП](/encyclopedia/4-code-dev/4-08-oop/intro), начните с [сложности и декомпозиции](/encyclopedia/4-code-dev/4-08-oop/7).

| Шаг | Статья | Темы |
|-----|--------|------|
| 1 | [ООП в C++](./14.md) | класс, наследование, virtual, перегрузка, шаблоны, STL |
| 2 | [Композиция и наследование](./141.md) | has-a, is-a, делегирование |
| 3 | [this, static, friend, вложенные классы](./143.md) | детали объявления класса |
| 4 | [struct и union](./11.md) | агрегаты, `std::string` |
| 5 | [Функции и friend](./17.md) | inline, специальные функции-члены |
| 6 | [Исключения](./192.md) · [иерархия](./191.md) | try/catch, раскрутка стека |
| 7 | [RTTI](./142.md) | typeid, dynamic_cast |
| 8 | [Память и RAII](./19.md) · [идиомы](./30.md) | владение, rule of five |
| 9 | [Паттерны GoF](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/intro) | проектирование поверх синтаксиса |

---

### Зачем этот раздел

Подборка по **C++** в энциклопедии: синтаксис, первая программа и смежные темы. Пройдите один маршрут до конца, не смешивая несколько языков на старте.

---

### С чего начать

Краткий путь для тех, кто хочет сразу писать код (маршрут — в таблице выше):

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Что знать перед C++](./1001.md) · [Первая программа](./1002.md) | фундамент и запуск |
| 2 | [Типы](./11.md) · [Операторы](./12.md) · [Управление потоком](./13.md) | синтаксис языка |
| 3 | [Функции](./17.md) · [Память](./19.md) · [Идиомы](./30.md) | владение, RAII, стиль |
| 4 | [CMake](./1006.md) · [Задания](./1008.md) | сборка и закрепление |
| 5 | [Qt Widgets](./2731.md) · [Qt Quick](./2732.md) | GUI — после базы |

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

Статья входит в [тематические подборки](/about/collections) и блок «С чего начать?» на [главной](/). Соседние шаги того же маршрута:

**Системное программирование** — [Системное программирование на C++](/encyclopedia/5-languages/5-06-cpp/21), [Rust — о разделе](/encyclopedia/5-languages/5-13-rust/intro), [Оптимизация размера и производительности приложений](/encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/3), [Ассемблер — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/assembler/intro), [Выполнение кода — о разделе](/encyclopedia/4-code-dev/4-03-vypolnenie-koda/intro), [Си — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/intro).

**Бэкенд и серверная разработка** — [C# — о разделе](/encyclopedia/5-languages/5-05-csharp/intro), [PHP — о разделе](/encyclopedia/5-languages/5-07-php/intro), [Платформа .NET — о разделе](/encyclopedia/5-languages/5-04-platforma-dotnet/intro), [Smalltalk — о разделе](/encyclopedia/5-languages/5-08-smalltalk/intro), [Java — о разделе](/encyclopedia/5-languages/5-03-java/intro), [Kotlin — о разделе](/encyclopedia/5-languages/5-09-kotlin/intro).

{/* /sidebar-collections */}

---
