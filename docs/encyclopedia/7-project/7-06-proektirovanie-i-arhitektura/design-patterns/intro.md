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

Каркас системы: [design/intro.md](../design/intro.md) · [NFR](../design/1116.md).

<div class="callout callout--warning">
  <div class="callout-title">Антипаттерн</div>
  <p>Если после паттерна код <strong>сложнее объяснить за пять минут</strong> — абстракция, скорее всего, ранняя.</p>
</div>

---

<DocCardList />

<!-- sidebar-collections -->
## В подборках

**Архитектура и проектирование ПО** — [Проектирование и архитектура — о разделе](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/intro), [Проектирование — о разделе](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/intro), [Архитектура десктопных приложений](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/1), [Методы защиты](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/117), [Архитектура выполнения](/encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya/intro), [Микросервисы и интеграция](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro).

<!-- /sidebar-collections -->

---
