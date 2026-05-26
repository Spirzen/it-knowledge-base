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
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел про **C++** как язык системного и прикладного программирования: от первой программы до сборки, памяти, потоков и экосистемы библиотек.

:::info Стандарт в примерах
Большинство фрагментов кода рассчитаны на **C++17**, если в тексте не указано иное. Возможности **C++20** и **C++23** помечаются явно. Для новых проектов в [вводной статье](/encyclopedia/5-languages/5-06-cpp/1) рекомендуется C++20; в корпоративных и embedded-проектах часто фиксируют минимум C++17 в CI.
:::

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

## Рекомендуемый маршрут

| Этап | Статьи | Зачем |
|------|--------|--------|
| Подготовка | [Что знать перед C++](/encyclopedia/5-languages/5-06-cpp/1001) | фундамент из разделов «Основы», «Код», «Система» |
| Старт | [Язык системного программирования](/encyclopedia/5-languages/5-06-cpp/1) | зачем C++, модель компиляции, ABI |
| Углубление (обзор) | [Углублённые темы](/encyclopedia/5-languages/5-06-cpp/28) | модули, EH, сравнение с Rust, HPC |
| Идиомы и C++20 | [Идиомы](/encyclopedia/5-languages/5-06-cpp/30), [Диапазоны](/encyclopedia/5-languages/5-06-cpp/31) | RAII, copy-and-swap, ranges/views |
| Синтаксис | [Типы](/encyclopedia/5-languages/5-06-cpp/11), [Операторы](/encyclopedia/5-languages/5-06-cpp/12), [Циклы и управление](/encyclopedia/5-languages/5-06-cpp/13) | базовый язык |
| Память и ООП | [ООП в разделе «Код»](/encyclopedia/4-code-dev/4-08-oop/intro) (база) → [ООП в C++](/encyclopedia/5-languages/5-06-cpp/14), [Память](/encyclopedia/5-languages/5-06-cpp/19), [Системное программирование](/encyclopedia/5-languages/5-06-cpp/21) | классы, владение, низкий уровень |
| Практика | [Функции и лямбды](/encyclopedia/5-languages/5-06-cpp/17), [Сборка](/encyclopedia/5-languages/5-06-cpp/1004), [CMake](/encyclopedia/5-languages/5-06-cpp/1006), [Задания](/encyclopedia/5-languages/5-06-cpp/1008) | писать, собирать, закреплять |
| UI и графика | [Qt](/encyclopedia/5-languages/5-06-cpp/27), [Qt Widgets](/encyclopedia/5-languages/5-06-cpp/2731), [Qt Quick](/encyclopedia/5-languages/5-06-cpp/2732), [Vulkan](/encyclopedia/5-languages/5-06-cpp/29), [Игры](/encyclopedia/5-languages/5-06-cpp/22) | desktop, GPU |
| Продвинутое | [Потоки](/encyclopedia/5-languages/5-06-cpp/20), [Сеть](/encyclopedia/5-languages/5-06-cpp/25), [Экосистема](/encyclopedia/5-languages/5-06-cpp/10) | конкурентность, I/O, фреймворки |
| Справка | [Справочник](/encyclopedia/5-languages/5-06-cpp/3), [Ключевые слова](/encyclopedia/5-languages/5-06-cpp/151) | быстрый поиск по API |

Статья [1](/encyclopedia/5-languages/5-06-cpp/1) — вводный обзор; продолжение в [28](/encyclopedia/5-languages/5-06-cpp/28).

<DocCardList />

<!-- sidebar-collections -->
## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока «С чего начать?» на главной. Соседние шаги того же маршрута:

**Системное программирование** — [Системное программирование на C++](/encyclopedia/5-languages/5-06-cpp/21), [Rust — о разделе](/encyclopedia/5-languages/5-13-rust/intro), [Оптимизация размера и производительности приложений](/encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/3), [Ассемблер — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/assembler/intro), [Выполнение кода — о разделе](/encyclopedia/4-code-dev/4-03-vypolnenie-koda/intro), [Си — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/intro).

**Бэкенд и серверная разработка** — [C# — о разделе](/encyclopedia/5-languages/5-05-csharp/intro), [PHP — о разделе](/encyclopedia/5-languages/5-07-php/intro), [Платформа .NET — о разделе](/encyclopedia/5-languages/5-04-platforma-dotnet/intro), [Smalltalk — о разделе](/encyclopedia/5-languages/5-08-smalltalk/intro), [Java — о разделе](/encyclopedia/5-languages/5-03-java/intro), [Kotlin — о разделе](/encyclopedia/5-languages/5-09-kotlin/intro).

<!-- /sidebar-collections -->

---
