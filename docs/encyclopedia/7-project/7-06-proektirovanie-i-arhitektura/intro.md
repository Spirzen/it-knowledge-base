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
  - title: "Семь слоёв LLM-стека"
    doc: encyclopedia/6-ai/6-05-razrabotka-ii/119
---

import DocCardList from '@theme/DocCardList';

# О разделе

Здесь собрано **проектирование и архитектура программных систем**: структурные решения, которые потом дорого менять — границы модулей, масштабирование, легаси, объяснение выбора команде и бизнесу.

Материалы для разработчиков, **архитекторов** и аналитиков. Много статей с интерактивными схемами (C4, UML, эскизы монолита и микросервисов).

Уровень **развёртывания** (bare metal, ВМ, контейнеры, облако) — [четыре модели](/encyclopedia/1-basics/1-13-soft-prodvinutogo-polzovatelya/8#chetiryre-modeli-razvertyvaniya); оркестрация — [8.06](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro).

*Как закодировать и собрать* решения — в **[Конструирование ПО](/encyclopedia/7-project/7-12-konstruirovanie-po/intro)** (связность/сцепление, модели ЖЦ, планирование).

<div class="callout callout--tip">
  <div class="callout-title">PostgreSQL в архитектурных решениях</div>

  <div class="callout-body">
  Архитектору и разработчику нужен живой опыт с **PostgreSQL** — транзакции, индексы, репликация, JSONB, миграции схем.

  Установите сервер локально и пройдите [практику по PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/888); для production — [практикум 8.11](/encyclopedia/8-infra-security/8-11-praktikum-postgresql/intro).

  System Design с БД — [карта тем](143.md).
</div>
  </div>


<div class="callout callout--tip">
  <div class="callout-title">Как читать раздел</div>

  <div class="callout-body">
  Не обязательно идти по алфавиту в меню. Ниже — три маршрута

  в конце — связи с соседними разделами и подборка "Архитектура и проектирование ПО".
</div>
  </div>


---

## С чего начать (базовый маршрут)

1. **[Основы проектирования и архитектуры](1.md)** — зачем проектировать, четыре уровня архитектуры, схемы, ADR.
2. **[System Design — карта тем и подготовка](143.md)** — порядок изучения (сети → БД → кэш → очереди), пять рычагов, типовой контур, классические задачи, postmortem. Для «ложного CRUD» — [email-рассылка как распределённая система](144.md); для ручной диагностики API-контуров — [утилита curl](/encyclopedia/2-system-network/2-05-terminal/1133), [curl / fetch — примеры](/lab/Примеры/1133).
3. **[12 концепций распределённой архитектуры](141.md)** — балансировка, кэш, CDN, очереди, gateway, шардирование и autoscaling в одной шпаргалке. Экосистема технологий MSA (БД, брокеры, K8s, CI/CD) — [таблица](design/118.md#ekosistema-msa); сборка в продакшн-контур — [девять компонентов](design/118.md#prodakshn-stek).
4. **[Системный подход и системное мышление](116.md)** — границы системы, обратные связи.
5. **[Архитектурные стили и их применение](101.md)** — монолит, SOA, микросервисы.
6. **[Доменная модель](114.md)** · **[Типы классов в DDD](1141.md)** — сущности, агрегаты, роли классов.
7. **[Проектирование под NFR](design/1116.md)** — измеримые нефункциональные требования.
8. **[Итоги](998.md)** · **[чек-лист](999.md)**.

---

## Маршрут для архитектора

Массовый ИИ-код без архитектурных инвариантов даёт [нейрослоп](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/2) в репозитории — см. [вайб-кодинг](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/1).

1. **[Роль и практика архитектора ПО](117.md)** — артефакты, навыки, отличие от техлида.
2. **[Практика архитектурного проектирования](3.md)** — монолит, границы, Conway, эволюция.
3. **[Event Storming](design/2140.md)** · **[Оценка альтернатив](design/2141.md)** · **[Threat modeling](design/2142.md)**.
4. **[Проектирование — о разделе](design/intro.md)** — API, БД, распределённые системы, надёжность.
5. **[Чистая архитектура — теория](design/2132.md)** → **[практика на ASP.NET Core](design/2143.md)**.
6. **[Документация как инструмент](design/1117.md)** · **[API и интеграции](design/117.md)** · **[микросервисы](design/118.md)** · **[декомпозиция монолита](104.md)** · **[паттерны перехода](design/2144.md)**.
7. **[Семь слоёв LLM-стека](/encyclopedia/6-ai/6-05-razrabotka-ii/119)** — если в ландшафт входят RAG, copilot или вызов внешней модели: от источников данных до прикладного UI (сопоставимо с gateway, очередями и NFR из [12 концепций](141.md)).

<div class="callout callout--info">
  <div class="callout-title">Разбор</div>

  <div class="callout-body">
  **"Срочно нужны микросервисы"** — сначала NFR и границы команд

  сравните с [модульным монолитом](design/2126.md) и [таблицей trade-off](design/2141.md).
</div>
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

CAP/PACELC — [распределённые системы](design/21.md), выбор лидера (Raft, Paxos, ZAB) — [142.md](142.md), карта system design — [143.md](143.md), итоги — [998.md](998.md).

---

## Углубление — паттерны

- **[System Design — карта тем](143.md)** · **[12 концепций распределённой архитектуры](141.md)** · **[Email-рассылка как распределённая система](144.md)** — подготовка к собеседованию, «ложный CRUD» рассылки, напоминалка перед микросервисами.
- **[Алгоритмы выбора лидера](142.md)** — Bully, Ring, Paxos, Raft, ZAB и примеры из etcd, ZooKeeper, Kafka, PostgreSQL.
- **[Паттерны проектирования](design-patterns/intro.md)** — GoF, ArchiStyler.
- **[Стили внутренней организации кода](102.md)** · **[обзор паттернов](115.md)**.
- **[Масштабируемость и параллелизм](2.md)** · **[имитационное моделирование](1161.md)**.
- **[Семь слоёв LLM-стека](/encyclopedia/6-ai/6-05-razrabotka-ii/119)** — архитектурный каркас для продуктов с большими языковыми моделями (данные → инференс → интеграция → приложение).

---

## Практика в лаборатории

Закрепление тем раздела — в кейсах [лаборатории «Кейсы»](/lab/Кейсы/intro):

| Тема | Кейс |
|------|------|
| Анализ ситуации, гипотезы, критерии решения | [«Ситуации в IT»](/lab/Кейсы/1) |
| Разбор инцидента и профилактика | [«Разборы»](/lab/Кейсы/2) |
| Слоистый backend (REST, DI, репозиторий) | [«Spring Boot приложение»](/lab/Кейсы/4) (данные — [PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/888), [MySQL](/encyclopedia/3-data-markup/3-07-sql/889), [SQL Server](/encyclopedia/3-data-markup/3-07-sql/890)) |
| Порождающий паттерн Singleton | [«Singleton на C#»](/lab/Кейсы/5) |
| Клиент внешнего API, обработчики событий | [«Telegram Bot на Python»](/lab/Кейсы/6) |
| TDD и качество модулей | [«Тренируем TDD»](/lab/Кейсы/7) (теория — [тестирование](/encyclopedia/7-project/7-05-testirovanie/131)) |

Полный список ссылок на кейсы по паттернам — в [обзоре подраздела «Паттерны»](design-patterns/intro.md).

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
