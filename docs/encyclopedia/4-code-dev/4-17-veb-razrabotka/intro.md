---
title: "Веб-разработка — о разделе"
description: "HTML, CSS, JavaScript, HTTP, дизайн, этапы проекта, стеки MERN и LAMP — маршрут для разработчика веба."
sidebar_label: "Веб-разработка — о разделе"
related:
  - title: "Фронтенд и бэкенд — о разделе"
    doc: encyclopedia/1-basics/1-23-frontend-i-bekend/intro
  - title: "Веб-сайты и веб-приложения — о разделе"
    doc: encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/intro
  - title: "Основы интеграционного взаимодействия — о разделе"
    doc: encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro
  - title: "HTML — о разделе"
    doc: encyclopedia/3-data-markup/3-09-html/intro
  - title: "CSS — о разделе"
    doc: encyclopedia/3-data-markup/3-10-css/intro
  - title: "JavaScript — о разделе"
    doc: encyclopedia/5-languages/5-01-javascript/intro
  - title: "DevTools в браузере — справочник"
    doc: encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/1116
  - title: "ORM и работа с данными — о разделе"
    doc: encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro
---

import DocCardList from '@theme/DocCardList';


import ExternalPlayEmbed from '@site/src/components/ExternalPlayEmbed';

import SpirzenOnlineToolLink from '@site/src/components/SpirzenOnlineToolLink';

# О разделе

**Веб-разработка** — создание программ через **браузер** и **сеть**: страницы, API, базы данных, авторизация. Подраздел даёт **языконезависимую карту** — три слоя страницы, клиент и сервер, этапы проекта, выбор стека. Обзор HTTP — [глава 1](./1.md); практика API — [глава 4](./4.md#http-и-api-в-проекте).

---

## Для кого этот подраздел

| Роль | Что получите |
|------|--------------|
| Начинающий разработчик | карта терминов до React/Django |
| Аналитик | понимание API, JSON, статус-кодов |
| Бэкендер | связь HTTP с [2.09](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro) |
| Фронтендер | CORS, fetch, DevTools — [1116](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/1116) |

Предполагается базовое знакомство с [компьютером](/encyclopedia/1-basics/intro) и желание писать код — [4.02 что такое код](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/intro).

---

## Чем этот подраздел отличается от 2.04 и 2.09

| Раздел | Фокус |
|--------|--------|
| **4.17 (здесь)** | языконезависимая карта для **разработчика** |
| [2.04 Сайты](/encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/intro) | DNS, HTTPS, nginx, CDN, путь запроса |
| [2.09 Интеграции](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro) | контракты, очереди, SOAP, gRPC |
| [1.23 Фронт/бэк](/encyclopedia/1-basics/1-23-frontend-i-bekend/intro) | роли в команде |

Читайте **4.17 первым**, затем углубляйтесь по задаче.

---

## С чего начать

| Шаг | Материал | Содержание | Время |
|-----|----------|------------|-------|
| 1 | [HTML, CSS и JavaScript — три слоя](./5.md) | структура, стили, логика в браузере | 1–2 ч |
| 2 | [Основы веб-дизайна](./7.md) | UX, макеты, типографика, адаптив | 1–2 ч |
| 3 | [От идеи до сайта](./6.md) | этапы проекта, хостинг, статика, CMS или своё приложение | 1–2 ч |
| 4 | [Что такое веб-разработка](./1.md) | клиент, сервер, обзор HTTP и REST | 45–60 мин |
| 5 | [Как делают веб-приложения](./4.md) | стек, API в проекте, деплой | 2–3 ч |
| 5a | [Open-source веб-фреймворки](./8.md) | справочник по языкам — Django, Express, Spring, Gin и др. | 30–60 мин |
| 6 | [Итоги](./2.md) | резюме и терминология | 15 мин |
| 7 | [Чек-лист](./3.md) | самопроверка | 20 мин |

Термины раздела — [итоги](./2.md#терминология-раздела). После глав 5 и 4 полезно открыть [DevTools](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/1116) и [curl / 1133](/lab/Примеры/1133).

---

## Связанные материалы в томе 4

| Тема | Статья |
|------|--------|
| Коллекции и JSON | [618](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/618) |
| Docker для локального API+БД | [104](/encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/104) |
| Git и PR | [4.13](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/intro), [117](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/117) |
| Тесты, баги, DevTools | [1117](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/1117), [1119](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/1119), [1116](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/1116) |
| ORM и SQL | [4.10](/encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro), [3.07 SQL](/encyclopedia/3-data-markup/3-07-sql/intro) |
| Справочник веб-фреймворков | [8 — open-source по языкам](./8.md) |

---

## Маршрут для старта

1. [Три слоя](./5.md) и [дизайн](./7.md) — статическая страница.
2. [Этапы проекта](./6.md) — выбор пути: статика, CMS или API.
3. [Обзор HTTP](./1.md) и [API в проекте](./4.md#http-и-api-в-проекте) — curl, CORS, стек.
4. [Чек-лист](./3.md) и [итоги](./2.md).

Pet-проект с API — [114](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/114).

---

## Инфраструктура и безопасность (куда дальше)

- DNS, HTTPS, nginx — [2.04](/encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/intro)
- OpenAPI, GraphQL — [2.09 / 130](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/130)
- Сессии, JWT, XSS — [2.08 ИБ](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro)
- Деплой — [8.04 DevOps](/encyclopedia/8-infra-security/8-04-devops-ci-cd/intro)

<DocCardList />

<ExternalPlayEmbed example="about/web-app-architecture-play" title="Архитектура веб-приложения" minHeight={520} />

<SpirzenOnlineToolLink toolId="webEditor" />


---
