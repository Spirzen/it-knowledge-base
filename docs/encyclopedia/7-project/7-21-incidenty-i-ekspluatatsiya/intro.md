---
title: "Инциденты и эксплуатация — о разделе"
description: >-
  Инциденты в production, severity, MTTR, on-call, hotfix, rollback
  и blameless postmortem — для продукта, аутсорса и госсектора.
sidebar_label: "Инциденты — о разделе"
related:
  - title: "ITSM и ИТ-услуги — о разделе"
    doc: encyclopedia/7-project/7-16-itsm-i-it-uslugi/intro
  - title: "Kanban — о разделе"
    doc: encyclopedia/7-project/7-18-kanban/intro
  - title: "Управление изменениями — о разделе"
    doc: encyclopedia/7-project/7-22-upravlenie-izmeneniyami/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе "Инциденты и эксплуатация"

Разработка не заканчивается на деплое. **Инцидент** — неожиданное нарушение или деградация сервиса для пользователей; он требует немедленных действий, а не только тикета в следующем спринте. Зрелая команда знает **severity**, **on-call**, **runbook**, измеряет **MTTR** и проводит **postmortem** без поиска виноватых.

Раздел для **новичка**, который впервые дежурит в prod, и для команды, которая проверяет готовность к сбоям до первого P1.

<div class="callout callout--tip">
  <div class="callout-title">Для кого</div>
  <div class="callout-body">
  <strong>Разработчику</strong> — дефект vs инцидент, rollback, участие в postmortem.

  <strong>On-call и SRE</strong> — severity, runbook, observability.

  <strong>PM и PO</strong> — коммуникация, Expedite, приоритет action items.
  </div>
</div>

---

## Что вы узнаете

| Тема | Результат |
|------|-----------|
| Дефект и инцидент | Разная срочность и процесс |
| Severity | P1–P4 и связь с SLA |
| MTTR | Время восстановления и как снижать |
| On-call | Ротация, эскалация, L1/L2/L3 |
| Runbook | Пошаговые действия по алертам |
| Hotfix / rollback / mitigation | Восстановить сначала |
| Postmortem | Blameless, timeline, action items |
| Поток | Диаграмма от алерта до postmortem |

---

## Как читать раздел

| Шаг | Материал | Содержание |
|-----|----------|------------|
| 1 | [Инциденты, on-call и postmortem](./1) | Severity, MTTR, runbook, диаграмма потока |
| 2 | [Итоги](./998) | Резюме и FAQ |
| 3 | [Чек-лист](./999) | Готовность к сбоям в production |

Перед чтением полезны [ITSM](/encyclopedia/7-project/7-16-itsm-i-it-uslugi/intro) и [Kanban Expedite](/encyclopedia/7-project/7-18-kanban/7). Hotfix в банке — [CAB](/encyclopedia/7-project/7-22-upravlenie-izmeneniyami/1).

---

## Соседние разделы

| Вопрос | Куда идти |
|--------|-----------|
| SLA, услуги, тикеты | [ITSM](/encyclopedia/7-project/7-16-itsm-i-it-uslugi/intro) |
| Срочный поток на доске | [Kanban](/encyclopedia/7-project/7-18-kanban/intro) |
| Feature flags, откат релиза | [Доставка и готовность](/encyclopedia/7-project/7-25-dostavka-i-gotovnost/intro) |
| Мониторинг и логи | [DevOps](/encyclopedia/8-infra-security/8-04-devops-ci-cd/intro) |
| Архитектурные причины | [ADR](/encyclopedia/7-project/7-20-adr-i-arhitekturnaya-pamyat/intro) |
| Техподдержка L1 | [Техподдержка](/encyclopedia/2-system-network/2-07-tehnicheskaya-podderzhka/intro) |

---

## Три контекста эксплуатации

**Продукт.** Свой on-call, свои SLO, статус-страница для пользователей. Postmortem — внутренняя культура.

**Аутсорс.** Реакция по [договору](/encyclopedia/7-project/7-01-obschee-o-biznese/3), согласование hotfix с заказчиком, общий канал с on-call клиента.

**Госсектор и банк.** Формальные регламенты, CAB на изменения в prod, отчётность регулятору при утечке или простое критичной услуги.

---

## Симптомы неготовности

- Нет определения P1 — все кричат "срочно".
- Дежурный не знает, как откатить релиз.
- Алерты сыпятся без runbook — усталость и пропуск настоящего P1.
- После аварии ищут виноватого, action items не делают.
- Postmortem никогда не читали новые сотрудники.

Если узнали команду — [глава 1](./1) и [чек-лист](./999).

---

## Термины раздела

| Термин | Кратко |
|--------|--------|
| Инцидент | Сервис страдает сейчас |
| Severity | P1–P4, критичность |
| MTTR | Время восстановления |
| On-call | Дежурный по алертам |
| Runbook | Инструкция по алерту |
| Postmortem | Разбор после сбоя |
| Mitigation | Временный обход |

---

## До первого P1 сделайте

- [ ] Таблица severity с примерами
- [ ] Календарь on-call
- [ ] Один учебный rollback на stage
- [ ] Шаблон postmortem в wiki

<DocCardList />

---
