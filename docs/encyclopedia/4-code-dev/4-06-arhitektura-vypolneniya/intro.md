---
title: Архитектура выполнения — о разделе
description: "Подборка материалов раздела Архитектура выполнения в энциклопедии Вселенная IT."
sidebar_label: Архитектура выполнения — о разделе
related:
  - title: "Асинхронность — о разделе"
    doc: encyclopedia/4-code-dev/4-05-asinhronnost/intro
  - title: "Парадигмы и уровни абстракции — о разделе"
    doc: encyclopedia/4-code-dev/4-07-paradigmy-i-urovni-abstraktsii/intro
  - title: "Проект, структура и фреймворки — о разделе"
    doc: encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/intro
  - title: "Объектно-ориентированное программирование — о разделе"
    doc: encyclopedia/4-code-dev/4-08-oop/intro
  - title: "Основы интеграционного взаимодействия — о разделе"
    doc: encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro
  - title: "Архитектура десктопных приложений"
    doc: encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/1
  - title: "Аутентификация и авторизация"
    doc: encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/111
  - title: "Проектирование и архитектура — о разделе"
    doc: encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел связывает **производительность**, **память**, **потоки**, **ошибки** и **сборку** в единую картину среды исполнения. Сложные механизмы по возможности даются **сначала на русском псевдокоде**, затем — интерактивами и примерами на конкретных языках (как справочник).

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Архитектура выполнения программ](./1.md) | Производительность, GC, потоки, синхронизация |
| 2 | [Битовые операции](./2.md) | Представление чисел в памяти |
| 3 | [Ошибки и исключения](./111.md) | Раскрутка стека, отказоустойчивость |
| 4 | [Вызовы и иерархия](./113.md) | Цепочки, рекурсия, профилирование |
| 5 | [Ресурсы и метрики](./114.md) | CPU, память, диск, сеть |
| 6 | [Отладка](./112.md), [мёртвый код](./115.md), [сборка](./116.md) | Практика разработки |

<div class="callout callout--tip">
  <div class="callout-title">До изучения языков</div>
  Блоки "Справочно на …" можно читать как иллюстрацию идей. Вызовы и стек — в <a href="/encyclopedia/4-code-dev/4-03-vypolnenie-koda/2">выполнении кода</a>; асинхронность — в <a href="/encyclopedia/4-code-dev/4-05-asinhronnost/intro">разделе 4.05</a>; параллелизм на кластерах — в <a href="/encyclopedia/4-code-dev/4-16-parallelnye-vychisleniya/intro">параллельных вычислениях</a>.
</div>

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока "С чего начать?" на главной. Соседние шаги того же маршрута:

**База программиста** — [Асинхронность — о разделе](/encyclopedia/4-code-dev/4-05-asinhronnost/intro), [Парадигмы и уровни абстракции — о разделе](/encyclopedia/4-code-dev/4-07-paradigmy-i-urovni-abstraktsii/intro), [Проект, структура и фреймворки — о разделе](/encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/intro), [Объектно-ориентированное программирование — о разделе](/encyclopedia/4-code-dev/4-08-oop/intro), [Выполнение кода — о разделе](/encyclopedia/4-code-dev/4-03-vypolnenie-koda/intro), [Зависимости — о разделе](/encyclopedia/4-code-dev/4-09-zavisimosti/intro).

**Архитектура и проектирование ПО** — [Основы интеграционного взаимодействия — о разделе](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro), [Архитектура десктопных приложений](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/1), [Аутентификация и авторизация](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/111), [Проектирование и архитектура — о разделе](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/intro), [Low-code и No-code платформы](/encyclopedia/8-infra-security/8-02-low-code-no-code/1), [Паттерны проектирования — о разделе](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/intro).

{/* /sidebar-collections */}

---
