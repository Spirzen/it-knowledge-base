---
title: "Управление изменениями — о разделе"
description: >-
  Change request, scope creep, CAB и согласование изменений в продукте,
  аутсорсе и госсекторе.
sidebar_label: "Управление изменениями — о разделе"
related:
  - title: "Продуктовые роли — о разделе"
    doc: encyclopedia/7-project/7-19-produktovye-roli/intro
  - title: "Общее о бизнесе — о разделе"
    doc: encyclopedia/7-project/7-01-obschee-o-biznese/intro
  - title: "Инциденты — о разделе"
    doc: encyclopedia/7-project/7-21-incidenty-i-ekspluatatsiya/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе "Управление изменениями"

**Change management** — как команда обрабатывает запросы "сделайте ещё вот это" без тихого срыва сроков и бюджета. Ключевые понятия: **scope**, **scope creep**, **change request (CR)**, **CAB** для production, согласование с [PO/PM](/encyclopedia/7-project/7-19-produktovye-roli/1) и [договором](/encyclopedia/7-project/7-01-obschee-o-biznese/3).

Agile **ожидает** изменения приоритетов — но **не** ожидает молчаливого раздувания объёма. Раздел для новичка, который слышит "это же мелочь", и для PM в аутсорсе, который защищает команду и отношения с заказчиком.

<div class="callout callout--tip">
  <div class="callout-title">Для кого</div>
  <div class="callout-body">
  <strong>Разработчику</strong> — не брать работу без тикета и PO.

  <strong>BA и PM</strong> — поля CR, оценка влияния.

  <strong>Руководителю</strong> — CAB, fixed price, госрегламент.
  </div>
</div>

---

## Что вы узнаете

| Тема | Результат |
|------|-----------|
| Scope creep | Признаки и лечение |
| Change request | Поля, fixed price, T&M |
| Agile | Прозрачный trade-off в спринте |
| CAB | Окна, tier, emergency |
| Workflow | Диаграмма от запроса до релиза |
| Контексты | Продукт, аутсорс, гос |

---

## Как читать раздел

| Шаг | Материал | Содержание |
|-----|----------|------------|
| 1 | [Change request и scope](./1) | CR, CAB, scope creep, mermaid |
| 2 | [Итоги](./998) | FAQ |
| 3 | [Чек-лист](./999) | Самопроверка процесса |

Читайте вместе с [продуктовыми ролями](/encyclopedia/7-project/7-19-produktovye-roli/intro) и [договором](/encyclopedia/7-project/7-01-obschee-o-biznese/3).

---

## Соседние разделы

| Вопрос | Куда идти |
|--------|-----------|
| Кто утверждает приоритет | [PO и PM](/encyclopedia/7-project/7-19-produktovye-roli/1) |
| Спринт и цель спринта | [Scrum](/encyclopedia/7-project/7-14-scrum/intro) |
| Срочный hotfix | [Инциденты](/encyclopedia/7-project/7-21-incidenty-i-ekspluatatsiya/intro) |
| Трекер и тикеты | [Базы знаний](/encyclopedia/7-project/7-09-bazy-znaniy-i-zadachniki/21) |
| Релиз и rollback | [Доставка](/encyclopedia/7-project/7-25-dostavka-i-gotovnost/intro) |
| Архитектура при CR | [ADR](/encyclopedia/7-project/7-20-adr-i-arhitekturnaya-pamyat/intro) |

---

## Когда раздел критичен

- Fixed price и заказчик "добавляет по чуть-чуть".
- Госсектор: правки ТЗ без допсоглашения.
- Банк: любой prod-релиз через CAB.
- Scrum-театр: scope меняется каждый день без пересмотра цели.
- Команда выгорает от бесконечных "срочно".

[Глава 1](./1) · [чек-лист](./999)

---

## Термины раздела

| Термин | Кратко |
|--------|--------|
| Scope | Согласованный объём работ |
| Scope creep | Объём растёт, срок нет |
| Change request | Заявка на изменение scope/срока |
| CAB | Согласование prod-релизов |
| Trade-off | Что снимаем, если добавляем |
| Baseline | Снимок scope на дату |
| Emergency tier | Срочный релиз при P1 |

---

## Типовой сценарий читателя

Разработчик слышит: "Добавьте отчёт, это же пара часов". После раздела вы знаете: оформить в трекер, оценить с BA, приоритет у [PO](/encyclopedia/7-project/7-19-produktovye-roli/1), при fixed price — [CR](/encyclopedia/7-project/7-22-upravlenie-izmeneniyami/1) к заказчику.

<DocCardList />

---
