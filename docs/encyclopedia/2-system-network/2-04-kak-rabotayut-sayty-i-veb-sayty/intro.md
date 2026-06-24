---
title: Веб-сайты и веб-приложения — о разделе
description: "Подборка материалов раздела Веб-сайты и веб-приложения в энциклопедии Вселенная IT."
sidebar_label: Веб-сайты и веб-приложения — о разделе
related:
  - title: "Веб-браузеры"
    doc: encyclopedia/1-basics/1-11-soft-ryadovogo-polzovatelya/3
  - title: "Организация домашней сети"
    doc: encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/61
  - title: "Сеть и интернет — о разделе"
    doc: encyclopedia/2-system-network/2-03-set-i-internet/intro
  - title: "NAT и проброс портов"
    doc: encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/7
  - title: "История интернета"
    doc: encyclopedia/1-basics/1-07-nemnogo-o-proshlom/4
  - title: "HTML — о разделе"
    doc: encyclopedia/3-data-markup/3-09-html/intro
  - title: "React — компоненты-рецепты"
    doc: lab/examples/1146
  - title: "HTML-страницы целиком"
    doc: lab/examples/1153
  - title: "HTML + CSS — готовые макеты"
    doc: lab/examples/110
  - title: "SVG — рисунки кодом"
    doc: lab/examples/1119
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел связывает **как пользователь открывает сайт в браузере** с **тем, что происходит на сервере и в коде страницы**.

---

## Рекомендуемый порядок

| Этап | Статьи | Зачем |
| :--- | :--- | :--- |
| 1. Основы | [Сайты и веб-сайты](./1.md) ([от URL до пикселей](./1.md#url-enter-to-page)), [Адресная строка браузера](./11.md) | Клиент–сервер, DNS, HTTPS, рендеринг, URL |
| 2. Инфраструктура | [Веб-серверы](./112.md), [Обработка внутренних ошибок браузера](./1112.md), [212](./212.md) | Веб-серверы, CDN и origin, ошибки `ERR_*` |
| | [Nginx — конфиги под задачу](/lab/Примеры/11112) | Готовые `nginx.conf` — статика, SPA, proxy, PHP, SSL |
| | [Dockerfile — 10 типовых образов](/lab/Примеры/11113) | React/Vue + nginx, Node API — образ для `docker build` |
| | [Сетевые сервисы по ролям](/encyclopedia/2-system-network/2-03-set-i-internet/618#setevye-servisy-po-rolyam) | DNS, HTTPS, SSH, БД, OAuth — порты для backend и DevOps |
| | [12 концепций архитектуры](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/141) | Балансировка, кэш, CDN, gateway — шпаргалка с ссылками |
| 3. Приложения | [Архитектура веб-приложений](./111.md), [Архитектурные особенности современных веб-приложений](./114.md), [Фоновая работа и офлайн-режим веб-приложений](./115.md), [Polling, Long Polling, SSE и Webhook](./129.md), [Метрики производительности веб-страницы](./130.md) | SPA, SSR, Service Worker, метрики скорости страницы, обновления в реальном времени |
| | [React — компоненты-рецепты](/lab/Примеры/1146) | Счётчик, todo, Router, fetch — практика SPA после [272](/encyclopedia/5-languages/5-01-javascript/272) |
| 4. Сборка без кода | [Конструкторы сайтов](./113.md), [Справочник по Tilda](./122.md) | Конструкторы, CMS и справочник по Tilda |
| 5. Данные и реклама | [Хранение данных в браузере и на сервере](./116.md), [Персонализация и пользовательские предпочтения](./119.md), [Рекламные технологии в вебе](./3.md) | Cookies, хранилища, персонализация |
| 6. Интерфейс | [Дизайн веб-интерфейсов](./2.md), [Веб-дизайн — маршрут](/encyclopedia/1-basics/1-25-interfeys/7) | UX/UI, структура страницы, типы сайтов |

Опционально: [Push-уведомления и рассылки](./117.md) (PWA, push), [SEO-оптимизация](./118.md), [Polling, Long Polling, SSE и Webhook](./129.md) (polling, SSE, webhook), [Web API в браузере](./120.md) (Web API браузера), [Web API на практике - примеры кода](./121.md) (Web API с кодом), [BB-код — разметка постов на форумах](./123.md) (BB-код на форумах), [История браузера и приватность на клиенте](./124.md) (история браузера и приватность), [Движки браузеров и линейки продуктов](./127.md) (движки и линейки браузеров), [HTTPS и TLS — шифрование веба](./128.md) (HTTPS и TLS), [Интернет, сайт и HTTP — связь с культурой сети](./125.md) (мост с интернет-культурой), [DevTools в браузере](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/1116). Итоги — [Веб-сайты и веб-приложения — итоги](./998.md), самопроверка — [Веб-сайты и веб-приложения — чек-лист](./999.md). По платформенному запуску без кода смотрите [Справочник по Tilda](./122.md).

---

## Связь с соседними разделами

- Пошаговая публикация статики на **GitHub Pages** (домен, DNS, Actions) — лабораторный кейс ["Размещение своего сайта с GitHub Pages"](/lab/Кейсы/3)
- Сети, DNS, TCP — [2.03. Сеть и интернет](/encyclopedia/2-system-network/2-03-set-i-internet/intro)
- HTML и разметка — [3.09. HTML](/encyclopedia/3-data-markup/3-09-html/intro)
- Целые HTML-файлы с разбором тегов (лаборатория) — [HTML-страницы целиком](/lab/Примеры/1153)
- Готовые макеты HTML+CSS (лаборатория) — [HTML + CSS — готовые макеты](/lab/Примеры/110)
- SVG — рисунки кодом (лаборатория) — [SVG — рисунки кодом](/lab/Примеры/1119)
- Tailwind — готовые блоки (лаборатория) — [Tailwind — готовые блоки](/lab/Примеры/1117)
- CSS-анимации (лаборатория) — [CSS-анимации — готовые эффекты](/lab/Примеры/1116)
- Конфиги Nginx для VPS и лабораторных — [Nginx — конфиги под задачу](/lab/Примеры/11112)
- Dockerfile для фронта и API в контейнере — [Dockerfile — 10 типовых образов](/lab/Примеры/11113)
- JavaScript — [5.01. JavaScript](/encyclopedia/5-languages/5-01-javascript/intro)
- Практика HTML/CSS/JS в браузере — [WebEditor](https://html.spirzen.ru/) (домен экосистемы, [исходники](https://github.com/Spirzen/WebEditor))

<DocCardList />

---

{/* http-basics-link  */}
<div class="callout callout--tip">
  <div class="callout-title">Основа по протоколу</div>

  <div class="callout-body">
  Базовый разбор HTTP и HTTPS находится в отдельной статье — [HTTP как основа веб-интеграций](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/118).
</div>
  </div>

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**Сетевая грамотность** — [Веб-браузеры](/encyclopedia/1-basics/1-11-soft-ryadovogo-polzovatelya/3), [Организация домашней сети](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/61), [Сеть и интернет — о разделе](/encyclopedia/2-system-network/2-03-set-i-internet/intro), [NAT и проброс портов](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/7), [Сайты и веб-сайты](/encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/1), [Основы информационной безопасности — о разделе](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro).

**Веб-разработка** — [Сеть и интернет — о разделе](/encyclopedia/2-system-network/2-03-set-i-internet/intro), [Веб-браузеры](/encyclopedia/1-basics/1-11-soft-ryadovogo-polzovatelya/3), [История интернета](/encyclopedia/1-basics/1-07-nemnogo-o-proshlom/4), [HTML — о разделе](/encyclopedia/3-data-markup/3-09-html/intro), [Интерфейс — о разделе](/encyclopedia/1-basics/1-25-interfeys/intro), [JavaScript — о разделе](/encyclopedia/5-languages/5-01-javascript/intro).

{/* /sidebar-collections */}

---
