---
title: Проектирование — о разделе
description: >-
  Методы проектирования ПО: NFR, API, БД, распределённые системы, workshop
  и оценка альтернатив — с рекомендуемым порядком чтения.
sidebar_label: Проектирование — о разделе
related:
  - title: "Паттерны проектирования — о разделе"
    doc: encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/intro
  - title: "Методы защиты пользовательских и корпоративных данных"
    doc: encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/117
  - title: "Проектирование и архитектура — о разделе"
    doc: encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/intro
  - title: "Конструирование ПО — о разделе"
    doc: encyclopedia/7-project/7-12-konstruirovanie-po/intro
  - title: "Микросервисы и интеграция — о разделе"
    doc: encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro
  - title: "Семь слоёв LLM-стека"
    doc: encyclopedia/6-ai/6-05-razrabotka-ii/119
  - title: "Архитектура выполнения — о разделе"
    doc: encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya/intro
  - title: "Роль и практика архитектора программного обеспечения"
    doc: encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/117
---

import DocCardList from '@theme/DocCardList';

# Проектирование — о разделе

Продолжение [Проектирование и архитектура](../intro.md): **как спроектировать систему** — NFR, API, данные, распределёнка, надёжность. Паттерны GoF — в [соседней папке](../design-patterns/intro.md).

**Чистая архитектура:** [теория (2132)](2132.md) → [практика ASP.NET Core (2143)](2143.md) → [MediatR](/encyclopedia/5-languages/5-05-csharp/4518).

---

### Термины подраздела

| Термин | Коротко |
|--------|---------|
| **DDD** | Domain-Driven Design — bounded context, агрегаты |
| **Contract-first** | OpenAPI/AsyncAPI до кода |
| **PACELC** | При живой сети: latency vs consistency ([21.md](21.md)) |
| **Outbox** | Событие и запись в БД — одна транзакция ([2124.md](2124.md)) |
| **Circuit Breaker** | Предохранитель на вызов зависимости ([2136.md](2136.md)) |

### Стадии проектной документации (ГОСТ 2.103)

В российской практике **конструкторская** документация на ПО часто ведётся по **ГОСТ 2.103** (стадии разработки), в дополнение к **ГОСТ 34** для автоматизированных систем ([121](/encyclopedia/7-project/7-04-analitika/121)):

| Стадия | Содержание (упрощённо) |
|--------|-------------------------|
| Техническое задание | Требования к системе (в 2.103 не всегда как стадия КД, но связывается с ТЗ по 34) |
| Техническое предложение | Варианты решения, обоснование выбора |
| Эскизный проект | Принципиальная структура, основные решения |
| Технический проект | Детальная архитектура, интерфейсы, данные |
| Рабочий проект | Документация для реализации и сопровождения |

На западных проектах роли те же по смыслу, но названия другие: **Software Architecture Document**, **Software Design Document**, OpenAPI-спецификации. См. [виды документации](/encyclopedia/7-project/7-08-tehnicheskoe-pismo/1002).

---

## Рекомендуемый порядок

### Мышление и качество

1. [Проектирование программных систем](1.md) · [лестница проектирования](2111.md) · [принципы](1112.md)
2. [NFR](1116.md) · [документация](1117.md) · [сервисы и методы](1113.md)

---

### Данные, API, масштаб

3. [БД](116.md) · [API и интеграции](117.md) (три сквозных примера и маршрут) · [OAuth и webhooks](1171.md) · [mTLS, JWS, AsyncAPI, outbox](1172.md) · [Ричардсон](212.md) · [идемпотентность](213.md)

   Практика выбранной СУБД из кода: [SQLite](/encyclopedia/3-data-markup/3-07-sql/887), [PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/888), [MySQL](/encyclopedia/3-data-markup/3-07-sql/889), [Microsoft SQL Server](/encyclopedia/3-data-markup/3-07-sql/890).
4. [OpenAPI](/encyclopedia/7-project/7-08-tehnicheskoe-pismo/3) · [REST в инфраструктуре](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/1151) · [ввод по API](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/117) · [8 принципов RESTful API](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/117#rest-api-design-principles)
5. [System Design — карта тем](../143.md) · [12 концепций распределённой архитектуры](../141.md) · [масштабирование](2112.md) / [2113](2113.md) · [надёжность](2134.md) · [SLA — договор](/encyclopedia/7-project/7-16-itsm-i-it-uslugi/2) · [SLA — «девятки»](2135.md) · [распределённые системы](21.md)

---

### Стили и эволюция

6. [Модульный монолит](2126.md) · [события](2127.md) · [CQRS](2122.md) · [Event Sourcing](2123.md) · [Saga](2124.md) · [Strangler](2125.md) · [паттерны перехода с монолита](2144.md)
7. [Микросервисные паттерны](118.md) ([девять компонентов продакшн-стека](118.md#prodakshn-stek)) · [веб](119.md) · [GRASP и ADR](2139.md)

---

### Практика архитектора

8. [Event Storming](2140.md) · [оценка альтернатив](2141.md) · [threat modeling](2142.md)

---

### Системы с LLM и RAG

Корпоративный чат, copilot и поиск по базе знаний — те же инженерные задачи, что и у распределённого сервиса: контракт API, NFR, данные, отказоустойчивость. Удобный **вертикальный** каркас — [Семь слоёв LLM-стека](/encyclopedia/6-ai/6-05-razrabotka-ii/119) (источники → предобработка → модель → оркестрация → инференс → интеграция → приложение). Горизонтальные приёмы из этого подраздела к нему стыкуются так:

| Задача проектирования | Глава здесь | Слой LLM-стека |
|----------------------|-------------|----------------|
| Latency, SLA, деградация | [NFR](1116.md), [SLA](2135.md) | 5 — инференс |
| REST, OAuth, webhooks | [API и интеграции](117.md) | 6 — интеграция |
| Векторный индекс, схема метаданных | [БД](116.md), [векторные БД](/encyclopedia/3-data-markup/3-06-nosql/812) | 2 — данные |
| Gateway, rate limit, очереди | [12 концепций](../141.md) | 5–6 |
| Угрозы и PII | [threat modeling](2142.md), [защита данных](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/117) | 2, 5 |

Реализация и промпты — [Разработка ИИ](/encyclopedia/6-ai/6-05-razrabotka-ii/intro).

---

## Все материалы

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок «С чего начать?» на [главной](/). Соседние шаги того же маршрута:

**Техлид** — [Паттерны проектирования — о разделе](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/intro), [Архитектура выполнения — о разделе](/encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya/intro), [Роль и практика архитектора программного обеспечения](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/117), [Микросервисы и интеграция — о разделе](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro), [Проектирование и архитектура — о разделе](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/intro), [Культура кода — о разделе](/encyclopedia/7-project/7-10-kultura-koda/intro).

**Архитектура и проектирование ПО** — [Паттерны проектирования — о разделе](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/intro), [Методы защиты пользовательских и корпоративных данных](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/117), [Проектирование и архитектура — о разделе](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/intro), [Микросервисы и интеграция — о разделе](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro), [Архитектура десктопных приложений](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/1), [Контейнеризация и оркестрация — о разделе](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro).

{/* /sidebar-collections */}

---
