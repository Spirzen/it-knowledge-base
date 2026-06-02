---
title: "Паттерны проектирования — о разделе"
description: >-
  Паттерны GoF и архитектурные приёмы — как выбирать под задачу;
  интерактивные схемы ArchiStyler.
sidebar_label: "Паттерны проектирования — о разделе"
related:
  - title: "Проектирование и архитектура — о разделе"
    doc: encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/intro
  - title: "Проектирование — о разделе"
    doc: encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/intro
  - title: "Архитектура десктопных приложений"
    doc: encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/1
  - title: "Методы защиты пользовательских и корпоративных данных"
    doc: encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/117
  - title: "Принципы перед паттернами"
    doc: encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/142
  - title: "Составные паттерны и MVC"
    doc: encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/143
---

import DocCardList from '@theme/DocCardList';
import ArchiStylerPlay from '@site/src/components/ArchiStylerPlay.jsx';
import SchemaMakerPlay from '@site/src/components/SchemaMakerPlay.jsx';

<div class="callout callout--tip">
  <div class="callout-title">Онлайн-версии</div>

  <div class="callout-body">
  <a href="https://spirzen.github.io/SchemaMakerOnline/">Schema Maker Online</a>,
  <a href="https://spirzen.github.io/ArchiStylerOnline/">ArchiStyler Online</a>.
</div>
  </div>

<SchemaMakerPlay defaultDocName="GoF" title="Планировщик схем" subtitle="Свободный холст + шаблоны классов ArchiStyler" />

# Паттерны проектирования — о разделе

Паттерн — **имя проверенного решения** повторяющейся проблемы. Сначала [принципы перед паттернами](./142.md) и [обзор](./1.md); затем GoF и архитектурные стили ниже.

<ArchiStylerPlay defaultPattern="factory" title="Планировщик паттернов" subtitle="Диаграмма классов по шаблону" />

---

## Как проходить раздел, чтобы не осталось "сухой теории"

Оптимальный режим изучения:

1. Прочитайте обзор и выберите 1-2 паттерна, которые решают реальную проблему в вашем коде.
2. Соберите минимальный пример (1 модуль, 1 сценарий), не рефакторьте весь проект сразу.
3. Проверьте эффект через тесты, читаемость и скорость добавления новой функции.
4. Только после этого расширяйте применение на соседние модули.

Так материал закрепляется намного лучше, чем при последовательном "прочитал и пошел дальше".

---

## Практическая навигация по связям раздела

Если нужен плавный старт, идите так:

- [Принципы перед паттернами](./142.md) -> для первого прохода;
- [Обзор паттернов](./1.md) -> для общей карты;
- [Порождающие](./111.md), [Структурные](./112.md), [Поведенческие](./113.md) -> для базового инструментария;
- [Архитектурные](./114.md), [Интеграционные](./115.md), [Доменные](./116.md) -> для системного уровня;
- [Тестирование](/encyclopedia/7-project/7-05-testirovanie/intro) и [NFR](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/1116) -> чтобы оценивать решения на практике.

---

## Три уровня

| Уровень | Примеры |
|---------|---------|
| GoF | Factory, Observer, Decorator — [шпаргалка](141.md) |
| Архитектурные | Layered, Hexagonal, MVC |
| Распределённые | Saga, Outbox, Circuit Breaker |

---

## Порядок чтения

1. [Принципы ОО-проектирования перед паттернами](142.md) — четыре опоры и связь с SOLID
2. [Частые паттерны GoF в реальных проектах](141.md) — десять шаблонов для быстрого старта
3. [Обзор](1.md) · [порождающие](111.md) · [структурные](112.md) · [поведенческие](113.md)
4. [Составные паттерны и MVC](143.md) · [архитектурные](114.md) · [интеграции](115.md) · [доменные](116.md)
5. Углубление — [большой гид по GoF в Java](140.md); **C#:** [Стратегия](117.md), [Итератор](118.md), [Фабрика](119.md), [Команда](120.md), [Наблюдатель](121.md). **Java:** [Цепочка](122.md), [Итератор](123.md), [Посредник](124.md), [Мементо](125.md), [Команда](126.md), [Наблюдатель](127.md), [Proxy](128.md), [Фасад](129.md), [Builder](130.md), [Bridge](131.md), [Composite](132.md), [Decorator](133.md), [Prototype](134.md), [Abstract Factory](135.md), [Factory Method](136.md), [Adapter](137.md), [Singleton](138.md), [Strategy](139.md)

<span id="learning-path"></span>

### Тематический маршрут по паттернам

Если удобнее учить паттерны **по одной теме за раз**, а не по группам GoF:

| Тема | Статьи |
|------|--------|
| Стратегия | [141](./141.md) → [117](./117.md) / [139](./139.md) |
| Наблюдатель | [141](./141.md) → [121](./121.md) / [127](./127.md) |
| Декоратор | [133](./133.md) |
| Фабрика (три уровня) | [111](./111.md) → [119](./119.md), [136](./136.md), [135](./135.md) |
| Одиночка | [138](./138.md), [лаб C#](/lab/Кейсы/5) |
| Команда | [120](./120.md) / [126](./126.md) |
| Адаптер, Фасад | [112](./112.md), [137](./137.md), [129](./129.md) |
| Шаблонный метод | [113](./113.md) |
| Итератор, Компоновщик | [123](./123.md), [132](./132.md) |
| Состояние | [113](./113.md) (сравнение со Стратегией) |
| Заместитель | [128](./128.md) |
| Составные, MVC | [143](./143.md) |
| Когда применять | [142](./142.md), [1](./1.md) |
| Bridge, Builder, … | [140](./140.md), статьи `122–135` |

Каркас системы: [design/intro.md](../design/intro.md) · [NFR](../design/1116.md).

---

## Практика в лаборатории

| Тема | Кейс |
|------|------|
| Паттерн Singleton на C# (реализация, DI, тесты) | ["Singleton на C#"](/lab/Кейсы/5) |
| Разбор ситуации перед выбором решения | ["Ситуации в IT"](/lab/Кейсы/1) |
| Постмортем и фиксация архитектурных уроков | ["Разборы"](/lab/Кейсы/2) |
| Слоистый REST-сервис (контроллер, сервис, репозиторий) | ["Spring Boot приложение"](/lab/Кейсы/4) |
| Интеграция с внешним API (бот как клиент) | ["Telegram Bot на Python"](/lab/Кейсы/6) |

Теория TDD и связь с unit-тестами — в [разделе "Тестирование"](/encyclopedia/7-project/7-05-testirovanie/intro); практика цикла Red-Green-Refactor — ["Тренируем TDD"](/lab/Кейсы/7).

<div class="callout callout--warning">
  <div class="callout-title">Антипаттерн</div>

  <div class="callout-body">
  <p>Если после паттерна код <strong>сложнее объяснить за пять минут</strong> — абстракция, скорее всего, ранняя.</p>
</div>
  </div>

---

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок «С чего начать?» на [главной](/). Соседние шаги того же маршрута:

**Архитектура и проектирование ПО** — [Проектирование и архитектура — о разделе](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/intro), [Проектирование — о разделе](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/intro), [Архитектура десктопных приложений](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/1), [Методы защиты пользовательских и корпоративных данных](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/117), [Архитектура выполнения — о разделе](/encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya/intro), [Микросервисы и интеграция — о разделе](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro).

{/* /sidebar-collections */}

---
