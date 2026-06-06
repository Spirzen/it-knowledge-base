---
title: Практикум REST и WebSocket — о разделе
description: "Сквозной маршрут: два интегрированных сервиса (Python и C#), контракт API, маппинг DTO, WebSocket-события, безопасность и проверка в Postman."
sidebar_label: Практикум REST и WebSocket — о разделе
related:
  - title: "Проектирование API"
    doc: encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/122
  - title: "REST"
    doc: encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/1151
  - title: "Реактивные транспорты"
    doc: encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/116
  - title: "Микросервисы и интеграция — о разделе"
    doc: encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro
  - title: "Проверка взаимодействия компонентов"
    doc: encyclopedia/7-project/7-05-testirovanie/1012
  - title: "Практикум — API-тестер на Groovy и JMeter"
    doc: encyclopedia/5-languages/5-12-groovy/27
---

import DocCardList from '@theme/DocCardList';
import OrderDeskIntegrationPlay from '@site/src/components/OrderDeskIntegrationPlay';

# О разделе

Здесь — **практикум**, который закрепляет навыки проектирования и реализации **безопасных масштабируемых REST API** и **WebSocket-сервисов**. Вы пройдёте путь от контракта до работающего кода на двух стеках и проверите интеграцию в Postman.

<OrderDeskIntegrationPlay />

Песочница выше повторяет статусы **201**, **409**, **502** и события **WebSocket** без установки Python и .NET. Локальный код из шагов 4–5 даёт тот же контракт на реальных портах `8100` и `5200`.

---

## Сценарий

Два сервиса учебной системы **OrderDesk**:

| Сервис | Стек | Порт (локально) | Роль |
|--------|------|-----------------|------|
| **catalog-api** | Python, FastAPI | `8100` | Каталог товаров, остатки, резервирование |
| **orders-api** | C#, ASP.NET Core 8 | `5200` | Заказы, вызов каталога по REST, WebSocket для клиентов |

Синхронная связь — **HTTP/JSON** по версионированному контракту `/api/v1/…`. События для браузера и Postman — **WebSocket** на стороне `orders-api`. Межсервисные вызовы защищены **API-ключом**; для внешних клиентов — **JWT**.

---

## Маршрут по шагам

| Шаг | Статья | Содержание |
|-----|--------|------------|
| 1 | [Сценарий и архитектура](./1.md) | Цели, диаграмма потоков, границы ответственности |
| 2 | [Проектирование контракта API](./2.md) | Ресурсы, методы HTTP, коды ответов, OpenAPI |
| 3 | [Модели данных и маппинг](./3.md) | Домен, DTO, соглашения JSON, версии полей |
| 4 | [Сервис каталога на Python](./4.md) | FastAPI, SQLite, эндпоинты резерва ([практика SQLite](/encyclopedia/3-data-markup/3-07-sql/887)) |
| 5 | [Сервис заказов на C#](./5.md) | Minimal API, HttpClient, сохранение заказов |
| 6 | [Безопасность и устойчивость](./6.md) | JWT, API-ключ, таймауты, идемпотентность |
| 7 | [WebSocket и события](./7.md) | Протокол сообщений, heartbeat, рассылка |
| 8 | [Проверка в Postman](./8.md) | Коллекция, окружение, сценарий E2E |

Проксирование WebSocket через nginx (`Upgrade`, `Connection`) — [Nginx — конфиги под задачу](/lab/Примеры/11112).

Теория по REST, маппингу и WebSocket — в [8.05 Микросервисы и интеграция](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro); этот раздел — **применение на практике**.

---

## Что понадобится

- [Python 3.11+](https://www.python.org/downloads/) и `pip`
- [.NET SDK 8](https://dotnet.microsoft.com/download)
- [Postman](https://www.postman.com/downloads/) или Newman для CLI
- На JVM (Groovy/Java) — опционально [Практикум — API-тестер на Groovy](/encyclopedia/5-languages/5-12-groovy/27) как альтернатива Postman с embedded JMeter
- Базовое знакомство с [HTTP](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/118) и [JSON](/encyclopedia/3-data-markup/3-04-konfiguratsii-i-dannye/1)
- Базовая работа с [утилитой curl](/encyclopedia/2-system-network/2-05-terminal/1133), [curl / fetch — примеры](/lab/Примеры/1133) для проверки ручек вне Postman; клиентский JavaScript — [Fetch / axios — типовые запросы](/lab/Примеры/1145)

---

## Как учиться по разделу

1. Пройдите **интерактивный сценарий** на этой странице (кнопка «Сквозной сценарий»).
2. Прочитайте [шаги 1–3](./1.md) и зафиксируйте контракт на бумаге или в OpenAPI.
3. Поднимите оба сервиса локально ([4](./4.md), [5](./5.md)) и сверьте ответы с песочницей.
4. Закройте цикл в [Postman](./8.md) и негативными кейсами из шага 8.

Закрепление: [итоги](./998.md), [чек-лист](./999.md).

---

## Связь с теорией

| Тема практикума | Статья в энциклопедии |
|-----------------|------------------------|
| REST, коды HTTP | [REST](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/1151) |
| Проектирование и DTO | [Проектирование API](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/122) |
| WebSocket | [Реактивные транспорты](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/116) |
| Polling, SSE, webhook | [129](/encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/129), [Push, Pull, Webhooks](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/120) |
| Интеграционные тесты | [1012](/encyclopedia/7-project/7-05-testirovanie/1012) |

<DocCardList />
