---
title: Методология и жизненный цикл ПО — о разделе
description: >-
  Waterfall, Agile, Scrum, Kanban, DevOps и жизненный цикл ПО — маршруты для
  руководителя, аналитика и разработчика; отдельно — методология государственных ИТ-систем.
sidebar_label: Методология и жизненный цикл ПО — о разделе
related:
  - title: "Команда и управление — о разделе"
    doc: encyclopedia/7-project/7-02-komanda-i-upravlenie/intro
  - title: "Scrum — о разделе"
    doc: encyclopedia/7-project/7-14-scrum/intro
  - title: "Общее о бизнесе — о разделе"
    doc: encyclopedia/7-project/7-01-obschee-o-biznese/intro
  - title: "Базы знаний и задачники — о разделе"
    doc: encyclopedia/7-project/7-09-bazy-znaniy-i-zadachniki/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

Здесь — **как организуют разработку**: жизненный цикл ПО (SDLC), выбор между Waterfall и Agile, инженерные практики (TDD, CI/CD) и особенности **государственных** контрактов.

<div class="callout callout--tip">
  <div class="callout-title">Для кого</div>

  <div class="callout-body">
  **Новичкам** — базовые термины и сравнение подходов.

  **Руководителям и аналитикам** — гибриды, регуляторика ГИС, чек-лист "какой процесс у нас на самом деле".

  **Разработчикам** — связь методологии с TDD, DevOps и качеством поставки.
</div>
  </div>

---

## Как читать раздел

| Шаг | Материал | Зачем |
|-----|----------|--------|
| 1 | [Жизненный цикл программного обеспечения](./1) | SDLC, Scrum/Kanban/Waterfall, Stacey, Cynefin, DevOps, примеры артефактов |
| 1b | [Agile — гибкая методология разработки](./3) | Манифест, словарь, чек-лист, XP, DSDM, FDD, TDD, BDD |
| 1a | [Scrum — углублённо](/encyclopedia/7-project/7-14-scrum/intro) | История, спринт, потери, бэклог, внедрение |
| 1b | [Внедрение ERP — о разделе](/encyclopedia/7-project/7-15-vnedrenie-erp-sistem/intro) | Fit-gap, жизненный цикл КИС, оценки и риски ERP-проекта |
| 2 | [Методологии разработки государственных ИТ-систем](./2) | ТЗ, приёмка, MVP в контракте, "два мира" подрядчика |
| 3 | [Итоги](./998) | Краткое сравнение подходов |
| 4 | [Чек-лист самопроверки](./999) | Диагностика заявленной и реальной методологии |

Статью **2** логично читать после **1**, если работаете с госконтрактами или заказной разработкой для госсектора.

Практика **TDD** как инженерной дисциплины Agile/XP — лабораторный кейс [«Тренируем Test-Driven Development»](/lab/Кейсы/7); теория уровней тестов и TDD/BDD — [карта в разделе «Тестирование»](/encyclopedia/7-project/7-05-testirovanie/131).

---

## Закрепить базовую теорию (глава 2)

DevOps и CI/CD в [статье 1](./1) опираются на то, **что именно выкатываете** и как это наблюдается в эксплуатации:

| Тема в методологии | Теория |
| :--- | :--- |
| HTTP/API в пайплайне и контракты | [2.09 Интеграция](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro) |
| Сеть, TLS, доступность стенда | [2.03 Сеть и интернет](/encyclopedia/2-system-network/2-03-set-i-internet/intro) |
| Метрики, логи, алерты | [Практикум Prometheus и Grafana](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/prometheus-grafana-praktikum/intro) |
| Инциденты и эскалация | [2.07 Техподдержка](/encyclopedia/2-system-network/2-07-tehnicheskaya-podderzhka/intro) · [7.16 ITSM](/encyclopedia/7-project/7-16-itsm-i-it-uslugi/intro) |

## Закрепить базовую теорию (глава 3)

Миграции данных, ночные job и согласованность между сервисами — не «чистая методология», а инженерия хранения:

| Тема в методологии | Теория |
| :--- | :--- |
| Миграция БД в релизе, откат | [Восстановление после сбоя](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/8) · [пакетная работа](/encyclopedia/3-data-markup/3-11-analiz-dannyh/433#idempotency) |
| ETL, регламентные выгрузки | [Пакетная работа с данными](/encyclopedia/3-data-markup/3-11-analiz-dannyh/433) · [ETL-ELT](/encyclopedia/3-data-markup/3-11-analiz-dannyh/425) |
| Конфиги сред (dev/stage/prod) | [Конфигурации и данные](/encyclopedia/3-data-markup/3-04-konfiguratsii-i-dannye/intro) |
| SQL в CI и smoke-проверках | [Первые шаги с SQL](/encyclopedia/3-data-markup/3-07-sql/101) · [тестирование](/encyclopedia/7-project/7-05-testirovanie/129) |

## Закрепить базовую теорию (глава 4)

XP, TDD и DevOps в [статье 1](./1) опираются на инженерные практики **в коде**, а не только на процесс:

| Тема в методологии | Теория |
| :--- | :--- |
| TDD, рефакторинг, техдолг | [Методы рефакторинга](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/612) · [технический долг](/encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya/115) |
| Git, ветки, code review в команде | [Основы Git — о разделе](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/intro) · [Git в команде](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/114) |
| Сборка, зависимости, CI job | [Проект и фреймворки — о разделе](/encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/intro) · [манифесты зависимостей](/encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/103) |
| Unit/integration как инженерная дисциплина | [Карта уровней и TDD/BDD](/encyclopedia/7-project/7-05-testirovanie/131) · [конструирование и тесты](/encyclopedia/7-project/7-12-konstruirovanie-po/6) |
| Отладка на стенде, логи | [Разработка и отладка — о разделе](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/intro) |

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок «С чего начать?» на [главной](/). Соседние шаги того же маршрута:

**Управление проектами и Agile** — [Команда и управление — о разделе](/encyclopedia/7-project/7-02-komanda-i-upravlenie/intro), [Scrum — о разделе](/encyclopedia/7-project/7-14-scrum/intro), [Общее о бизнесе — о разделе](/encyclopedia/7-project/7-01-obschee-o-biznese/intro), [Базы знаний и задачники — о разделе](/encyclopedia/7-project/7-09-bazy-znaniy-i-zadachniki/intro), [Культура кода — о разделе](/encyclopedia/7-project/7-10-kultura-koda/intro), [Экономика производства ПО — о разделе](/encyclopedia/7-project/7-13-ekonomika-proizvodstva-po/intro).

{/* /sidebar-collections */}

---
