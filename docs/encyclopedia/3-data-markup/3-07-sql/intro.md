---
title: SQL — о разделе
description: "Раздел охватывает SQL от основ до администрирования. Рекомендуемая последовательность для новичков: 1."
sidebar_label: SQL — о разделе
related:
  - title: "Контейнеризация и оркестрация — о разделе"
    doc: encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro
  - title: "JavaScript — о разделе"
    doc: encyclopedia/5-languages/5-01-javascript/intro
  - title: "Микросервисы и интеграция — о разделе"
    doc: encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro
  - title: "Python — о разделе"
    doc: encyclopedia/5-languages/5-02-python/intro
  - title: "Анализ данных — о разделе"
    doc: encyclopedia/3-data-markup/3-11-analiz-dannyh/intro
  - title: "NoSQL — о разделе"
    doc: encyclopedia/3-data-markup/3-06-nosql/intro
  - title: "Low-code и No-code платформы"
    doc: encyclopedia/8-infra-security/8-02-low-code-no-code/1
  - title: "Техническое письмо — о разделе"
    doc: encyclopedia/7-project/7-08-tehnicheskoe-pismo/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, как текст превращается в исполняемые инструкции; в этом разделе — **язык запросов SQL** и работа с данными в таблицах.

Раздел охватывает SQL от основ до администрирования. Рекомендуемая последовательность для новичков:

1. [Эволюция систем хранения данных](./102.md) → [Реляционная модель](./103.md) → [Нормализация](./104.md)
2. [Принципы работы SQL-движка](./2.md) → [Операторы в коде](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/33) (базис перед `WHERE` и логикой) → [Оператор SELECT](./107.md) → [Фильтрация и NULL](./109.md) → [Фильтрация и группировка](./6.md)
3. [Первые шаги с SQL](./101.md) → [Практикум shop_data](./111.md) → [Словарь данных и каталоги](./105.md)
4. [Подзапросы и EXISTS](./108.md) → [JOIN](./55.md) → [CTE](./551.md) → [функции в коде](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/4) → [оконные функции](./7.md) → [иерархии в реляционной БД](./886.md)
5. [Транзакции](./77.md) → [блокировки](./110.md) → [оптимизация](./881.md) → [резервное копирование](./106.md)
6. Для **Microsoft SQL Server**: теория [T-SQL](./882.md) и [справочник](/encyclopedia/3-data-markup/3-08-upravlenie-rsubd/212) → практика на [Microsoft Learn](/tools/documentation/6) (учебник Transact-SQL, SSMS).

Интерактивная практика: [SQL-тренажёр](./1.md) (схема shop_data, JOIN, GROUP BY, DML) и [практикум shop_data](./111.md).

Отдельный конструктор запросов автора проекта — [SQL Generator Online](https://spirzen.github.io/SQLGeneratorOnline/): визуальная сборка SQL по правилам языка и генерация INSERT из загруженной таблицы Excel для импорта в БД. Под встроенным тренажёром на странице [SQL — язык](./1.md) есть та же ссылка.

<DocCardList />

<!-- sidebar-collections -->
## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока «С чего начать?» на главной. Соседние шаги того же маршрута:

**Бэкенд и серверная разработка** — [Контейнеризация и оркестрация — о разделе](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro), [JavaScript — о разделе](/encyclopedia/5-languages/5-01-javascript/intro), [Микросервисы и интеграция — о разделе](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro), [Python — о разделе](/encyclopedia/5-languages/5-02-python/intro), [Методы защиты пользовательских и корпоративных данных](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/117), [Java — о разделе](/encyclopedia/5-languages/5-03-java/intro).

**Аналитика данных** — [Анализ данных — о разделе](/encyclopedia/3-data-markup/3-11-analiz-dannyh/intro), [NoSQL — о разделе](/encyclopedia/3-data-markup/3-06-nosql/intro).

**Системная аналитика** — [Low-code и No-code платформы](/encyclopedia/8-infra-security/8-02-low-code-no-code/1), [Техническое письмо — о разделе](/encyclopedia/7-project/7-08-tehnicheskoe-pismo/intro), [Основы интеграционного взаимодействия — о разделе](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro), [Аутентификация и авторизация](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/111), [Основы архитектуры](/encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/112), [Платформенные решения в бизнесе](/encyclopedia/2-system-network/2-02-platformy/3002).

<!-- /sidebar-collections -->

---
