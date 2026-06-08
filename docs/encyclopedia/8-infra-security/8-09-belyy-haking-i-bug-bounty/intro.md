---
title: "Белое хакерство и Bug Bounty — о разделе"
description: "Маршрут по белому хакерству — scope, PoC, CVSS, HackerOne, MSRC, выплаты, карьера AppSec и Red Team, кейсы конфликтов с вендорами."
sidebar_label: "Белое хакерство — о разделе"
related:
  - title: "Тестирование информационной безопасности"
    doc: encyclopedia/7-project/7-05-testirovanie/123
  - title: "Информационная безопасность — о разделе"
    doc: encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/intro
  - title: "Основы информационной безопасности — о разделе"
    doc: encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro
  - title: "Анализ и тестирование безопасности"
    doc: encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/1131
---

import DocCardList from '@theme/DocCardList';

# О разделе

**Длинные листинги (от ~15 строк)** вынесены в каталог [code.spirzen.ru](https://code.spirzen.ru/) и подгружаются в статьях через `ExternalCodeEmbed` — шаблоны отчётов Bug Bounty и развёрнутые PoC не раздувают HTML энциклопедии. Короткие фрагменты (HTTP-запросы, curl, таблицы CVSS) по-прежнему прямо в markdown. Диаграммы **mermaid** — на месте.

Здесь собран **маршрут** по белому хакерству: кто такие этичные исследователи, как они **находят** и **документируют** уязвимости, куда отправляют отчёты, как устроены **Bug Bounty** у крупнейших IT-компаний и чем отличается работа **в штате** от независимого исследователя.

<div class="callout callout--info">
  <div class="callout-title">Для кого раздел</div>

  <div class="callout-body">
  Раздел полезен разработчикам, тестировщикам, будущим специалистам по ИБ и всем, кто слышал про «белых хакеров» и хочет понять процесс без мифов. Базовые атаки и OWASP — в [8.07](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/intro) (в т. ч. [жизненный цикл атаки](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/129)) и [тестировании ИБ](/encyclopedia/7-project/7-05-testirovanie/123); практика на Kali — в [8.10](/encyclopedia/8-infra-security/8-10-testirovanie-na-proniknovenie/intro); здесь фокус на **взаимодействии с вендором** и **экономике** поиска дыр.
  </div>
</div>

---

## С чего начать

| Шаг | Статья | Содержание |
|-----|--------|------------|
| 1 | [Белое хакерство — основы](./1.md) | «Шляпы», закон, этика, пентест и штатный AppSec |
| 2 | [Как ищут и оформляют уязвимости](./2.md) | Scope, PoC, CVSS, шаблон отчёта, артефакты |
| 3 | [Bug Bounty и координированное раскрытие](./3.md) | CVD, платформы, triage, выплаты, safe harbor |
| 4 | [Программы техгигантов](./4.md) | Microsoft, Google, Apple, Meta, Amazon, GitHub, Яндекс и др. |
| 5 | [Карьера и обучение](./5.md) | Должности, сертификации, CTF, доход |
| 6 | [Когда доверие ломается](./6.md) | Споры вендоров и исследователей, публичное раскрытие, доказательная база |

Закрепление: [итоги](./998.md), [чек-лист](./999.md).

---

## Маршруты по ролям

| Кто вы | Маршрут | Время (оценка) |
|--------|---------|----------------|
| **Новичок в ИБ** | 1 → 2 → 3 → лаборатории из [5](./5.md) | 2–4 недели теории + практика |
| **Разработчик** | 1 (роли) → 2 (отчёт) → [OWASP в 8.07](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/113) | 1–2 недели |
| **Тестировщик** | [7.05/123](/encyclopedia/7-project/7-05-testirovanie/123) → 2 → 3 → 4 | 2 недели |
| **Будущий bounty hunter** | 2 → 3 → 4 → 5 → первая программа на HackerOne | 1–3 месяца до первого valid |
| **Инженер вендора (triage)** | 3 → 6 → 2 | 1 неделя |

<div class="callout callout--tip">
  <div class="callout-title">Объём раздела</div>

  <div class="callout-body">
  Шесть основных статей + итоги и чек-лист. Материал рассчитан на **справочное** чтение: можно начать с [основ](./1.md) и [оформления отчёта](./2.md), остальное — по задаче.
  </div>
</div>

### Что нужно знать заранее

- HTTP, REST, базовые [инъекции](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/123).
- [Триада CIA](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/1) и идея риска.
- По желанию — [тестирование ИБ](/encyclopedia/7-project/7-05-testirovanie/123) для пентест-контекста.

---

## Связанные материалы

- [Инъекции](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/123), [уязвимости API](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/128) — технические классы проблем, которые чаще всего попадают в bounty-отчёты.
- [Легальный сбор информации](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/122) — OSINT в рамках разрешённой разведки.
- Внешние ориентиры: [белый хакер](https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D1%8B%D0%B9_%D1%85%D0%B0%D0%BA%D0%B5%D1%80), [чёрная шляпа](https://ru.wikipedia.org/wiki/%D0%A7%D1%91%D1%80%D0%BD%D0%B0%D1%8F_%D1%88%D0%BB%D1%8F%D0%BF%D0%B0), [профессия на Практикуме](https://practicum.yandex.ru/blog/professiya-belyj-haker-i-kak-im-stat/).

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

**Инфобез** — [Основы информационной безопасности — о разделе](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro), [Тестирование информационной безопасности](/encyclopedia/7-project/7-05-testirovanie/123), [Информационная безопасность — о разделе](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/intro).

{/* /sidebar-collections */}

---
