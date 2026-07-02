---
title: "Безопасность при работе с ИИ — о разделе"
description: "Утечки данных, промпт-инъекции, агенты с правами root, атаки на цепочку поставок ML и практические правила для разработчиков и команд ИБ."
sidebar_label: "Безопасность при работе с ИИ — о разделе"
related:
  - title: "Безопасность при работе с ИИ"
    doc: encyclopedia/6-ai/6-10-bezopasnost-pri-rabote-s-ii/1
  - title: "OWASP LLM Top 10 для разработчика"
    doc: encyclopedia/6-ai/6-10-bezopasnost-pri-rabote-s-ii/2
  - title: "Ответственное использование ИИ и Copilot"
    doc: encyclopedia/6-ai/6-06-primenenie-ii/3
  - title: "Вайб-кодинг"
    doc: encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/1
  - title: "AgentOps и LLM-стек — слои 4–7"
    doc: encyclopedia/6-ai/6-08-agentops/1
  - title: "Безопасная интеграция LLM в мобильные и клиентские приложения"
    doc: encyclopedia/6-ai/6-10-bezopasnost-pri-rabote-s-ii/10
  - title: "Информационная безопасность — о разделе"
    doc: encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

ИИ ускоряет разработку, анализ данных и поддержку пользователей — но добавляет **новый класс угроз** — утечки через чаты и API, промпт-инъекции, агенты с доступом к терминалу, отравленные модели на Hugging Face и обход ИИ-сканеров в репозиториях пакетов.

Раздел собирает **практику безопасности** для разработчиков, инженеров и команд ИБ. Базовые понятия CIA, OWASP и жизненный цикл атаки — в [информационной безопасности](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/intro); здесь фокус на **LLM, агентах и ML-инфраструктуре**.

---

## Рекомендуемый порядок

1. **[Безопасность при работе с ИИ](./1)** — обзор угроз и чек-лист.
2. **[OWASP LLM Top 10](./2)** — каркас рисков 2025.
3. **[Безопасность RAG и MCP](./3)** — индекс, tools, malicious MCP.
4. **[Песочница и права агента](./4)** — Docker, least privilege, HITL.
5. **[Политика данных и провайдер](./5)** — ZDR, классификация, enterprise.
6. **[Red team и тестирование](./6)** — golden set атак, CI.
7. **[Slopsquatting и supply chain](./7)** — пакеты, модели, PyPI.
8. **[Дипфейки и биометрия](./8)** — KYC, vishing, recovery.
9. **[ИИ в SOC](./9)** — triage, логи, границы автономии.
10. **[Безопасная интеграция LLM в мобильные и клиентские приложения](./10)** — BFF, утечки ключей, LLMjacking.
11. **[Итоги](./98)** и **[чек-лист](./99)**.

Краткие правила для сотрудника — [Ответственное использование ИИ](/encyclopedia/6-ai/6-06-primenenie-ii/3). Риски "кода по наитию" — [вайб-кодинг](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/1). Эксплуатация агентов в prod — [AgentOps](/encyclopedia/6-ai/6-08-agentops/1).

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**ИИ для разработчика** — [Вайб-кодинг](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/1), [AgentOps и MLOps — о разделе](/encyclopedia/6-ai/6-08-agentops/intro), [Информационная безопасность — о разделе](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/intro), [Ответственное использование ИИ и Copilot](/encyclopedia/6-ai/6-06-primenenie-ii/3).

{/* /sidebar-collections */}

---
