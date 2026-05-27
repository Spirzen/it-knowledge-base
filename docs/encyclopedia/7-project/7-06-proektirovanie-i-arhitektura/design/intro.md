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

---

## Рекомендуемый порядок

### Мышление и качество

1. [Проектирование программных систем](1.md) · [лестница проектирования](2111.md) · [принципы](1112.md)
2. [NFR](1116.md) · [документация](1117.md) · [сервисы и методы](1113.md)

---

### Данные, API, масштаб

3. [БД](116.md) · [API и интеграции](117.md) (три сквозных примера и маршрут) · [OAuth и webhooks](1171.md) · [mTLS, JWS, AsyncAPI, outbox](1172.md) · [Ричардсон](212.md) · [идемпотентность](213.md)

   Практика выбранной СУБД из кода: [SQLite](/encyclopedia/3-data-markup/3-07-sql/887), [PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/888), [MySQL](/encyclopedia/3-data-markup/3-07-sql/889), [Microsoft SQL Server](/encyclopedia/3-data-markup/3-07-sql/890).
4. [OpenAPI](/encyclopedia/7-project/7-08-tehnicheskoe-pismo/3) · [REST в инфраструктуре](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/1151) · [ввод по API](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/117)
5. [Масштабирование](2112.md) / [2113](2113.md) · [надёжность](2134.md) · [SLA](2135.md) · [распределённые системы](21.md)

---

### Стили и эволюция

6. [Модульный монолит](2126.md) · [события](2127.md) · [CQRS](2122.md) · [Saga](2124.md) · [Strangler](2125.md)
7. [Микросервисные паттерны](118.md) · [веб](119.md) · [GRASP и ADR](2139.md)

---

### Практика архитектора

8. [Event Storming](2140.md) · [оценка альтернатив](2141.md) · [threat modeling](2142.md)

---

## Все материалы

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

**Архитектура и проектирование ПО** — [Паттерны проектирования — о разделе](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/intro), [Методы защиты пользовательских и корпоративных данных](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/117), [Проектирование и архитектура — о разделе](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/intro), [Микросервисы и интеграция — о разделе](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro), [Архитектура десктопных приложений](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/1), [Контейнеризация и оркестрация — о разделе](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro).

{/* /sidebar-collections */}

---
