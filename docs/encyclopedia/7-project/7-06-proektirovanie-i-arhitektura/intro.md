---
title: Проектирование и архитектура — о разделе
description: >-
  Как проектировать ПО осознанно: от домена и стилей развёртывания до микросервисов,
  ADR и документации — маршруты для разработчика, архитектора и аналитика.
sidebar_label: Проектирование и архитектура — о разделе
related:
  - title: "Архитектура десктопных приложений"
    doc: encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/1
  - title: "Паттерны проектирования — о разделе"
    doc: encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/intro
  - title: "Архитектура выполнения — о разделе"
    doc: encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya/intro
  - title: "Проектирование — о разделе"
    doc: encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/intro
  - title: "Типы классов в DDD"
    doc: encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/1141
  - title: "Имитационное моделирование"
    doc: encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/1161
  - title: "Доменная модель"
    doc: encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/114
  - title: "Системный подход и системное мышление"
    doc: encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/116
  - title: "Конструирование ПО — о разделе"
    doc: encyclopedia/7-project/7-12-konstruirovanie-po/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

Здесь собрано **проектирование и архитектура программных систем**: структурные решения, которые потом дорого менять — границы модулей, масштабирование, легаси, объяснение выбора команде и бизнесу.

Материалы для разработчиков, **архитекторов** и аналитиков. Много статей с интерактивными схемами (C4, UML, эскизы монолита и микросервисов).

*Как закодировать и собрать* решения — в **[Конструирование ПО](/encyclopedia/7-project/7-12-konstruirovanie-po/intro)** (связность/сцепление, модели ЖЦ, планирование).

<div class="callout callout--tip">
  <div class="callout-title">Как читать раздел</div>
  <p>Не обязательно идти по алфавиту в меню. Ниже — три маршрута; в конце — связи с соседними разделами и подборка "Архитектура и проектирование ПО".</p>
</div>

---

## С чего начать (базовый маршрут)

1. **[Основы проектирования и архитектуры](1.md)** — зачем проектировать, четыре уровня архитектуры, схемы, ADR.
2. **[Системный подход и системное мышление](116.md)** — границы системы, обратные связи.
3. **[Архитектурные стили и их применение](101.md)** — монолит, SOA, микросервисы.
4. **[Доменная модель](114.md)** · **[Типы классов в DDD](1141.md)** — сущности, агрегаты, роли классов.
5. **[Проектирование под NFR](design/1116.md)** — измеримые нефункциональные требования.
6. **[Итоги](998.md)** · **[чек-лист](999.md)**.

---

## Маршрут для архитектора

1. **[Роль и практика архитектора ПО](117.md)** — артефакты, навыки, отличие от техлида.
2. **[Практика архитектурного проектирования](3.md)** — монолит, границы, Conway, эволюция.
3. **[Event Storming](design/2140.md)** · **[Оценка альтернатив](design/2141.md)** · **[Threat modeling](design/2142.md)**.
4. **[Проектирование — о разделе](design/intro.md)** — API, БД, распределённые системы, надёжность.
5. **[Чистая архитектура — теория](design/2132.md)** → **[практика на ASP.NET Core](design/2143.md)**.
6. **[Документация как инструмент](design/1117.md)** · **[API и интеграции](design/117.md)** · **[микросервисы](design/118.md)** · **[декомпозиция монолита](104.md)**.

<div class="callout callout--info">
  <div class="callout-title">Разбор</div>
  <p><strong>"Срочно нужны микросервисы"</strong> — сначала NFR и границы команд; сравните с <a href="design/2126.md">модульным монолитом</a> и <a href="design/2141.md">таблицей trade-off</a>.</p>
</div>

---

## Термины на одной странице

| Термин | Смысл |
|--------|--------|
| **NFR** | Нефункциональные требования в цифрах: latency, RPS, RTO/RPO |
| **ADR** | Почему выбрали вариант A, а не B |
| **Bounded context** | Граница однозначных терминов и правил |
| **Saga / Outbox** | Согласованность между сервисами без одной БД |
| **Circuit Breaker** | Предохранитель на вызов зависимости |

CAP/PACELC — [распределённые системы](design/21.md), итоги — [998.md](998.md).

---

## Углубление — паттерны

- **[Паттерны проектирования](design-patterns/intro.md)** — GoF, ArchiStyler.
- **[Стили внутренней организации кода](102.md)** · **[обзор паттернов](115.md)**.
- **[Масштабируемость и параллелизм](2.md)** · **[имитационное моделирование](1161.md)**.

---

## Все материалы раздела

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока "С чего начать?" на главной. Соседние шаги того же маршрута:

**Архитектура и проектирование ПО** — [Архитектура десктопных приложений](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/1), [Паттерны проектирования — о разделе](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/intro), [Архитектура выполнения — о разделе](/encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya/intro), [Проектирование — о разделе](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/intro), [Основы интеграционного взаимодействия — о разделе](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro), [Методы защиты пользовательских и корпоративных данных](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/117).

Ключевые материалы этого раздела по теме запроса: [Доменная модель](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/114), [Типы классов в DDD](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/1141), [Системный подход](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/116), [Имитационное моделирование](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/1161). Для .NET: [чистая архитектура — теория](design/2132.md), [Clean Architecture на ASP.NET Core](design/2143.md).

{/* /sidebar-collections */}

---
