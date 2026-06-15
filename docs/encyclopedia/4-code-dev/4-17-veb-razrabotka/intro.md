---
title: "Веб-разработка — о разделе"
description: "Клиент, сервер, HTTP, REST, JSON и CRUD — маршрут для разработчика, который пишет код для веба."
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
  - title: "JavaScript — о разделе"
    doc: encyclopedia/5-languages/5-01-javascript/intro
  - title: "DevTools в браузере — справочник"
    doc: encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/1116
  - title: "ORM и работа с данными — о разделе"
    doc: encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

**Веб-разработка** — создание программ, которые работают через **браузер** и **сеть**: страницы, API, базы данных, авторизация. Этот подраздел в томе "Код и разработка" даёт **языконезависимую карту** — что такое клиент и сервер, как выглядят запрос и ответ, куда читать дальше в энциклопедии.

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

## Словарь подраздела (кратко)

- **Клиент** — браузер или приложение у пользователя.
- **Сервер** — программа, принимающая HTTP-запросы.
- **HTTP** — протокол "запрос — ответ".
- **JSON** — текстовый формат данных.
- **REST** — соглашение про ресурсы и методы HTTP.
- **CRUD** — create, read, update, delete.
- **CORS** — правило браузера для междоменных запросов.
- **API** — адреса и правила обмена данными.

Подробно — [глава 1](./1.md).

---

## С чего начать

| Шаг | Материал | Содержание | Время |
|-----|----------|------------|-------|
| 1 | [Что такое веб-разработка](./1.md) | HTTP, REST, JSON, CORS, `.env` | 2–4 ч чтения |
| 2 | [Как делают веб-приложения](./4.md) | стек, данные, деплой, масштабирование | 1–2 ч |
| 3 | [Итоги](./2.md) | резюме | 15 мин |
| 4 | [Чек-лист](./3.md) | самопроверка | 20 мин |

После главы 1 — **практика** (минимум один пункт):

- открыть [DevTools](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/1116) на любом сайте, вкладка Network;
- выполнить [curl / 1133](/lab/Примеры/1133) к публичному API;
- собрать [GitHub Pages](/lab/Кейсы/3) или [React — 1146](/lab/Примеры/1146).

---

## Связанные материалы в томе 4

| Тема | Статья |
|------|--------|
| Коллекции и JSON | [618](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/618) |
| Docker для локального API+БД | [104](/encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/104) |
| Git и PR | [4.13](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/intro), [117](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/117) |
| Тесты, баги, DevTools | [1117](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/1117), [1119](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/1119), [1116](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/1116) |
| ORM и SQL | [4.10](/encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro), [3.07 SQL](/encyclopedia/3-data-markup/3-07-sql/intro) |

---

## Маршрут "первая неделя"

**День 1–2** — [HTML](/encyclopedia/3-data-markup/3-09-html/intro), [CSS](/encyclopedia/3-data-markup/3-10-css/intro), статическая страница.

**День 3** — [JavaScript](/encyclopedia/5-languages/5-01-javascript/intro), кнопка меняет DOM.

**День 4–5** — [глава 1](./1.md), curl к API, DevTools Network.

**День 6** — [Как делают веб-приложения](./4.md): выбрать стек (SPA или монолит), наметить хранение данных.

**День 7** — простой CRUD API (Python/Node) + JSON — [ORM](/encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro) или [SQL](/encyclopedia/3-data-markup/3-07-sql/887); [чек-лист](./3.md), [итоги](./2.md), первый [PR](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/117).

---

## Инфраструктура и безопасность (куда дальше)

- DNS, HTTPS, nginx — [2.04](/encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/intro)
- OpenAPI, GraphQL — [2.09 / 130](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/130)
- Сессии, JWT, XSS — [2.08 ИБ](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro)
- Деплой — [8.04 DevOps](/encyclopedia/8-infra-security/8-04-devops-ci-cd/intro)

<DocCardList />

---
