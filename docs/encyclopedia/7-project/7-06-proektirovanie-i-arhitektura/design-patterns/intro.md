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

- [Обзор паттернов](./1.md) -> для общей карты;
- [Порождающие](./111.md), [Структурные](./112.md), [Поведенческие](./113.md) -> для базового инструментария;
- [Архитектурные](./114.md), [Интеграционные](./115.md), [Доменные](./116.md) -> для системного уровня;
- [Тестирование](/encyclopedia/7-project/7-05-testirovanie/intro) и [NFR](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/1116) -> чтобы оценивать решения на практике.

---
title: Паттерны проектирования — о разделе
description: >-
  Паттерны GoF и архитектурные приёмы — как выбирать под задачу;
  интерактивные схемы ArchiStyler.
sidebar_label: Паттерны проектирования — о разделе
related:
  - title: "Проектирование и архитектура — о разделе"
    doc: encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/intro
  - title: "Проектирование — о разделе"
    doc: encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/intro
  - title: "Архитектура десктопных приложений"
    doc: encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/1
  - title: "Методы защиты пользовательских и корпоративных данных"
    doc: encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/117
---

import DocCardList from '@theme/DocCardList';
import ArchiStylerPlay from '@site/src/components/ArchiStylerPlay.jsx';
import SchemaMakerPlay from '@site/src/components/SchemaMakerPlay.jsx';

<div class="callout callout--tip">
  <div class="callout-title">Онлайн-версии</div>
  <a href="https://spirzen.github.io/SchemaMakerOnline/">Schema Maker Online</a>,
  <a href="https://spirzen.github.io/ArchiStylerOnline/">ArchiStyler Online</a>.
</div>

<SchemaMakerPlay defaultDocName="GoF" title="Планировщик схем" subtitle="Свободный холст + шаблоны классов ArchiStyler" />

# Паттерны проектирования — о разделе

Паттерн — **имя проверенного решения** повторяющейся проблемы. Сначала [Основы](../1.md) и [обзор в корне](../115.md) — уровни абстракции; затем GoF ниже.

<ArchiStylerPlay defaultPattern="factory" title="Планировщик паттернов" subtitle="Диаграмма классов по шаблону" />

---

## Три уровня

| Уровень | Примеры |
|---------|---------|
| GoF | Factory, Observer, Decorator |
| Архитектурные | Layered, Hexagonal, MVC |
| Распределённые | Saga, Outbox, Circuit Breaker |

---

## Порядок чтения

1. [Обзор](1.md) · [порождающие](111.md) · [структурные](112.md) · [поведенческие](113.md)
2. [Архитектурные](114.md) · [интеграции](115.md) · [доменные](116.md)
3. Углубление — [Стратегия в C#](117.md) (`Func` / интерфейс / DI), [Итератор в C#](118.md) (`yield return` / LINQ), [Фабрика в C#](119.md) (Abstract Factory / DI / keyed services), [Команда в C#](120.md) (`ICommand` / MediatR), [Наблюдатель в C#](121.md) (`event` / `IObservable`)

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
  <p>Если после паттерна код <strong>сложнее объяснить за пять минут</strong> — абстракция, скорее всего, ранняя.</p>
</div>

---

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

**Архитектура и проектирование ПО** — [Проектирование и архитектура — о разделе](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/intro), [Проектирование — о разделе](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/intro), [Архитектура десктопных приложений](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/1), [Методы защиты](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/117), [Архитектура выполнения](/encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya/intro), [Микросервисы и интеграция](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro).

{/* /sidebar-collections */}

---