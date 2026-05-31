---
title: Микросервисы и интеграция — о разделе
description: "Микросервисная архитектура, коммуникация между сервисами, брокеры сообщений и практика интеграции в продакшене."
sidebar_label: Микросервисы и интеграция — о разделе
related:
  - title: "Основы интеграционного взаимодействия — о разделе"
    doc: encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro
  - title: "Методы защиты пользовательских и корпоративных данных"
    doc: encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/117
  - title: "Контейнеризация и оркестрация — о разделе"
    doc: encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro
  - title: "Low-code и No-code платформы"
    doc: encyclopedia/8-infra-security/8-02-low-code-no-code/1
  - title: "SQL — о разделе"
    doc: encyclopedia/3-data-markup/3-07-sql/intro
  - title: "Проектирование — о разделе"
    doc: encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/intro
  - title: "Паттерны проектирования — о разделе"
    doc: encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/intro
  - title: "DevOps, CI-CD — о разделе"
    doc: encyclopedia/8-infra-security/8-04-devops-ci-cd/intro
  - title: "Забота о коде и данных — о разделе"
    doc: encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел про **микросервисную архитектуру** и **интеграцию в продакшене** — как сервисы общаются, масштабируются и выдерживают нагрузку. Базовые термины, HTTP, API и очереди разобраны в [Основах интеграционного взаимодействия](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro); здесь — MSA, балансировка, практические кейсы и справочники. Наблюдаемость на стенде — [Практикум Prometheus и Grafana](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/prometheus-grafana-praktikum/intro), [PromQL — галерея](/lab/Примеры/11114), корпоративный мониторинг — [Практикум Zabbix](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/zabbix-praktikum/intro). Сводная **экосистема технологий** (БД, брокеры, языки, контейнеры, облако, CI/CD, мониторинг, безопасность) — [таблица в паттернах MSA](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/118#ekosistema-msa). **Карта продакшн-стека** (gateway, registry, сервисы, авторизация, БД, кэш, брокер, метрики, логи) — в [Паттернах микросервисной архитектуры](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/118#prodakshn-stek). Карта **system design** (шесть столпов, собеседование) — [System Design — карта тем](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/143). Краткая шпаргалка по 12 инфраструктурным концепциям — [12 концепций распределённой архитектуры](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/141). Типовые **порты и службы** (DNS, HTTPS, БД, OAuth, SSH) — [Сетевые сервисы по ролям](/encyclopedia/2-system-network/2-03-set-i-internet/618#setevye-servisy-po-rolyam).

**Рекомендуемый порядок чтения:**

1. [Первые шаги к микросервисам](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/101) и [Архитектура микросервисов](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/112) (в т.ч. [миграция с монолита](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/112#миграция-с-монолита)).
2. [Коммуникация и интеграция](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/113) — контракты, ESB, event-driven.
3. [Синхронная](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/115), [асинхронная](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/114), [реактивная](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/116) коммуникация и [Polling, SSE, Webhook](/encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/129).
4. [REST, GraphQL и gRPC — стили API](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/130) (основы), [восемь принципов RESTful API](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/117#rest-api-design-principles) → [REST](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/1151), [проектирование API](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/122), [синхронная коммуникация и сценарий User/Order](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/115#user-order-scenario), [RabbitMQ](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/118), [Kafka](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/119), [реализация интеграции](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/121).
5. Компромиссы распределённых систем — [PACELC](./124.md) (связь с [CAP в основах NoSQL](/encyclopedia/3-data-markup/3-06-nosql/2)).
6. **Практикум** — [REST и WebSocket на Python и C#](/encyclopedia/8-infra-security/8-08-praktikum-rest-i-websocket/intro): проектирование контракта, реализация двух сервисов, Postman.

---

## Связанные разделы

Базовые темы для новичков — в [Основы интеграционного взаимодействия](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro) (блок «Система и сеть»). Рекомендуем пройти их до или параллельно с этим разделом.

| Углубление (этот раздел) | Основы (раздел 2) |
| --- | --- |
| [Коммуникация и интеграция](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/113) | [Интеграция](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/1) |
| [Синхронная](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/115), [асинхронная](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/114) и [реактивная](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/116) коммуникация | [Типы взаимодействия](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/111) |
| [REST](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/1151), [проектирование API](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/122) | [API](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/117), [пагинация](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/131), [HTTP](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/118) |
| [Брокеры сообщений](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/117) | [Брокеры сообщений](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/121) |
| [RabbitMQ](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/118) | [RabbitMQ — работа с очередями](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/122) |
| [Kafka](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/119) | [Apache Kafka — потоковая обработка](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/123) |
| [Справочник по SOAP](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/1201) | [Протокол SOAP](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/126) |
| [Реализация интеграции](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/121) | [Реализация интеграционных решений](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/125) |

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока "С чего начать?" на главной. Соседние шаги того же маршрута:

**Бэкенд и серверная разработка** — [Методы защиты пользовательских и корпоративных данных](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/117), [Контейнеризация и оркестрация — о разделе](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro), [Low-code и No-code платформы](/encyclopedia/8-infra-security/8-02-low-code-no-code/1), [SQL — о разделе](/encyclopedia/3-data-markup/3-07-sql/intro) ([PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/888), [MySQL](/encyclopedia/3-data-markup/3-07-sql/889), [SQLite](/encyclopedia/3-data-markup/3-07-sql/887), [SQL Server](/encyclopedia/3-data-markup/3-07-sql/890)), [ORM и работа с данными — о разделе](/encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro), [JavaScript — о разделе](/encyclopedia/5-languages/5-01-javascript/intro).

**Архитектура и проектирование ПО** — [Методы защиты пользовательских и корпоративных данных](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/117), [Контейнеризация и оркестрация — о разделе](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro), [Проектирование — о разделе](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/intro), [Паттерны проектирования — о разделе](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/intro), [Проектирование и архитектура — о разделе](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/intro), [Архитектура десктопных приложений](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/1).

**DevOps и инфраструктура** — [DevOps, CI-CD — о разделе](/encyclopedia/8-infra-security/8-04-devops-ci-cd/intro), [Контейнеризация и оркестрация — о разделе](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro), [Забота о коде и данных — о разделе](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/intro), [Безопасность в Docker](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/125), [Проверка надежности под нагрузкой](/encyclopedia/7-project/7-05-testirovanie/1014), [Автоматизация тестирования](/encyclopedia/7-project/7-05-testirovanie/115).

{/* /sidebar-collections */}

---
