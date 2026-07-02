---
title: 7. Проект - о разделе
description: IT-проект целиком — роли, командный конвейер, договор и сдача результата - не только код, но и координация аналитики, архитектуры и сопутствующих функций.
sidebar_label: 7. Проект - о разделе
slug: /encyclopedia/Проект/project
id: project
---

<div class="article-tags">
  <span class="tag tag-required">ОБЯЗАТЕЛЬНО</span>
  <span class="tag tag-beginner">ДЛЯ НОВИЧКОВ</span>
  <span class="tag tag-inprogress">В РАЗРАБОТКЕ</span>
</div>

import DocCardList from '@theme/DocCardList';

---

## О разделе

<DocCardList />

Совсем с нуля, без опыта за ПК — сначала [Основы компьютерной грамотности](/encyclopedia/1-basics/1-035-bazovaya-informatika/101), затем [дорожная карта](/encyclopedia/1-basics/1-03-dorozhnaya-karta-izucheniya/1) и материалы этого тома.

Инфраструктурный контекст сдачи ПО (ВМ, контейнеры, облако) — [четыре модели развёртывания](/encyclopedia/2-system-network/2-02-platformy/21#chetiryre-modeli-razvertyvaniya), раздел [8. Инфраструктура и безопасность](/encyclopedia/8-infra-security/infra-security) и вводная статья [Основы развития информационных систем](/encyclopedia/8-infra-security/8-00-osnovy-infrastruktury/2).

---

## Базовая теория: раздел 2

В проектных материалах часто всплывают сети, API, безопасность и интеграции. Чтобы не гадать "как это устроено под капотом", держите под рукой [2. Система и сеть](/encyclopedia/2-system-network/system-network):

| Вопрос в главе 7 | Куда закрепить теорию |
| :--- | :--- |
| API, REST, HTTP, контракты, очереди | [2.09 Интеграция](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro) · практика в [7.06](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/117) |
| IP, DNS, TLS, CDN, коды HTTP | [2.03 Сеть и интернет](/encyclopedia/2-system-network/2-03-set-i-internet/intro) |
| Браузер, cookie, путь запроса | [2.04 Как работают сайты](/encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/intro) |
| OAuth, JWT, TLS, ИБ в требованиях | [2.08 Основы ИБ](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro) |
| curl, терминал, ручная проверка API | [2.05 Терминал](/encyclopedia/2-system-network/2-05-terminal/1133) · [2.09 Postman/curl](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/2) |
| Мониторинг, инциденты, поддержка | [2.06 Администрирование](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/prometheus-grafana-praktikum/intro) · [2.07 Техподдержка](/encyclopedia/2-system-network/2-07-tehnicheskaya-podderzhka/intro) · [7.16 ITSM](/encyclopedia/7-project/7-16-itsm-i-it-uslugi/intro) |
| ERP, платформы, корпоративное ПО | [2.02 Платформы](/encyclopedia/2-system-network/2-02-platformy/3001) · [7.15 ERP](/encyclopedia/7-project/7-15-vnedrenie-erp-sistem/intro) |

---

## Базовая теория: раздел 3

В проектных материалах постоянно всплывают **данные** — ERD, SQL, миграции, пакетные загрузки, выбор СУБД. Чтобы не гадать "что такое транзакция и нормализация", держите под рукой [3. Данные и разметка](/encyclopedia/3-data-markup/data-markup):

| Вопрос в главе 7 | Куда закрепить теорию |
| :--- | :--- |
| Данные vs информация, типы | [1.09 Данные и информация](/encyclopedia/1-basics/1-09-dannye-i-informatsiya/intro) · [3.03 Мыслительная база](/encyclopedia/3-data-markup/3-03-myslitelnaya-baza/intro) |
| ERD, ключи, связи 1:N / M:N | [Entity Relationship](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/11) · [проектирование БД в 7.06](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/116) |
| Нормализация, модель данных | [Нормализация в SQL](/encyclopedia/3-data-markup/3-07-sql/104#normalnye-formy) · [реляционная модель](/encyclopedia/3-data-markup/3-07-sql/103) |
| СУБД, индексы, транзакции, WAL | [Основы БД](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/intro) · [опорные темы масштабирования](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/12) |
| SQL на практике (все роли) | [Первые шаги с SQL](/encyclopedia/3-data-markup/3-07-sql/101) · [PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/888) |
| NoSQL, кэш, полиглот | [NoSQL — о разделе](/encyclopedia/3-data-markup/3-06-nosql/intro) · [Redis](/encyclopedia/3-data-markup/3-06-nosql/5) |
| Миграции, ETL, batch/bulk | [Пакетная работа с данными](/encyclopedia/3-data-markup/3-11-analiz-dannyh/433) · [ETL и оркестрация](/encyclopedia/3-data-markup/3-11-analiz-dannyh/425) |
| RPO/RTO, бэкапы, восстановление | [Восстановление после сбоя](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/8) · [управление РСУБД](/encyclopedia/3-data-markup/3-08-upravlenie-rsubd/1) |
| Конфиги и форматы данных | [Конфигурации и данные](/encyclopedia/3-data-markup/3-04-konfiguratsii-i-dannye/intro) |

<div class="callout callout--tip">
  <div class="callout-title">PostgreSQL — общий навык для всех ролей в проекте</div>

  <div class="callout-body">
  Разработчикам, аналитикам, тестировщикам, инженерам, администраторам и архитекторам в одной команде нужно уметь работать с данными в **PostgreSQL** — независимо от языка.

  Поставьте сервер локально, пройдите [Первые шаги с SQL](/encyclopedia/3-data-markup/3-07-sql/101) и держите под рукой [практику по PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/888).

  Проверка данных в QA — [SQL для тестировщика](/encyclopedia/7-project/7-05-testirovanie/129); модели и ERD — в [Аналитике](/encyclopedia/7-project/7-04-analitika/intro) и [Проектировании](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/intro).
</div>
  </div>
