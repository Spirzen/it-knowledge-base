---
title: AgentOps и MLOps — о разделе
description: "Эксплуатация LLM-стека — MLOps на слоях 1–3 (данные, модель) и AgentOps на слоях 4–7 (оркестрация, инференс, интеграция, продукт)."
sidebar_label: AgentOps и MLOps — о разделе
related:
  - title: "Prompt engineering — библиотека промптов"
    doc: lab/examples/1150
  - title: "MLOps и LLM-стек — слои 1–3"
    doc: encyclopedia/6-ai/6-08-agentops/2
  - title: "AgentOps и LLM-стек — слои 4–7"
    doc: encyclopedia/6-ai/6-08-agentops/1
  - title: "Оркестрация AI-агентов"
    doc: encyclopedia/6-ai/6-05-razrabotka-ii/121
  - title: "AgentOps — операции с ИИ-агентами"
    doc: encyclopedia/8-infra-security/8-04-devops-ci-cd/2151
  - title: "Семь слоёв LLM-стека"
    doc: encyclopedia/6-ai/6-05-razrabotka-ii/119
  - title: "DevOps, CI-CD — о разделе"
    doc: encyclopedia/8-infra-security/8-04-devops-ci-cd/intro
  - title: "Вайб-кодинг"
    doc: encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/1
  - title: "Вайб-кодинг и нейроконтент — о разделе"
    doc: encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/intro
  - title: "Трансформеры и NLP — о разделе"
    doc: encyclopedia/6-ai/6-09-transformery-i-nlp/intro
  - title: "Безопасность при работе с ИИ"
    doc: encyclopedia/6-ai/6-10-bezopasnost-pri-rabote-s-ii/1
  - title: "Контекст агента — AGENTS, skills, rules"
    doc: encyclopedia/8-infra-security/8-04-devops-ci-cd/2153
  - title: "Cursor"
    doc: tools/development/3
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел описывает **операционную** сторону [семи слоёв LLM-стека](/encyclopedia/6-ai/6-05-razrabotka-ii/119). Здесь собраны практики эксплуатации — воспроизводимость (reproducibility), дрейф данных (drift), оценка качества (eval), наблюдаемость (observability) и управление (governance).

| Статья | Слои | Дисциплина |
|--------|------|------------|
| [MLOps и LLM-стек — слои 1–3](./2) | Источники, данные, модель | CRISP-ML, drift, retrieval theory, registry |
| [AgentOps и LLM-стек — слои 4–7](./1) | Оркестрация, инференс, интеграция, продукт | BDI, eval theory, HITL, trust boundaries |

Связанные разделы:

- [8.04 DevOps](/encyclopedia/8-infra-security/8-04-devops-ci-cd/intro) — CI/CD, IaC, Git, деплой;
- [8.04 AgentOps](/encyclopedia/8-infra-security/8-04-devops-ci-cd/2151) — multi-agent PR, `AGENTS.md`, tools;
- [Безопасность при работе с ИИ](/encyclopedia/6-ai/6-10-bezopasnost-pri-rabote-s-ii/1) — терминал, промпт-инъекции, утечки.

## Skills в AgentOps

**Skill** (`SKILL.md`) — короткий markdown-**runbook** (пошаговая инструкция) для IDE-агента. Файл лежит в репозитории рядом с кодом и подключается, когда задача совпадает с **триггером** навыка ("создать PR", "починить CI", "прогнать eval").

Три слоя контекста агента (подробно — [Контекст агента — AGENTS, skills, rules](/encyclopedia/8-infra-security/8-04-devops-ci-cd/2153)):

| Слой | Роль в AgentOps |
| --- | --- |
| **Rules** | Запреты и формат — git safety, стиль, MDX |
| **AGENTS.md** | Манифест репозитория — сборка, границы, escalation |
| **Skills** | Процедуры — spec, plan, build, test, review, ship |

Навык на [слоях L4–L7](/encyclopedia/6-ai/6-05-razrabotka-ii/119) превращает абстрактный **quality gate** (обязательную проверку перед следующим шагом) в конкретные действия:

- **L4, оркестрация** — skill `test` задаёт golden eval перед merge промпта;
- **L5, инференс** — skill `ship` фиксирует budget cap и fallback между моделями;
- **L6, интеграция** — skill `review` требует audit log tool calls;
- **L7, продукт** — skill `spec` собирает acceptance criteria до кода.

Открытый набор lifecycle-навыков — [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills). Настройка в [Cursor](/tools/development/3) — каталог `.cursor/skills/`.

---

## Рекомендуемый порядок

1. [Семь слоёв LLM-стека](/encyclopedia/6-ai/6-05-razrabotka-ii/119)
2. [Агенты ИИ](/encyclopedia/6-ai/6-04-modeli-i-instrumenty/116), [RAG, MCP и агенты](/encyclopedia/6-ai/6-04-modeli-i-instrumenty/121), [Оркестрация AI-агентов](/encyclopedia/6-ai/6-05-razrabotka-ii/121)
3. [MLOps — слои 1–3](./2)
4. [AgentOps — слои 4–7](./1)
5. Цепочка в DevOps
   - [AgentOps — обзор](/encyclopedia/8-infra-security/8-04-devops-ci-cd/2151)
   - [Мультиагентные команды и DevOps-pipeline](/encyclopedia/8-infra-security/8-04-devops-ci-cd/2152)
   - [Контекст агента — AGENTS, skills, rules](/encyclopedia/8-infra-security/8-04-devops-ci-cd/2153)
   - [Инструменты AgentOps](/encyclopedia/8-infra-security/8-04-devops-ci-cd/2154)
6. [Итоги](./98) и [чек-лист](./99)

<DocCardList />

---

## См. также

- [Развёртывание ИИ-моделей](/encyclopedia/6-ai/6-05-razrabotka-ii/111)
- [Контекст агента — AGENTS, skills, rules](/encyclopedia/8-infra-security/8-04-devops-ci-cd/2153)
- [Cursor](/tools/development/3)
- [Agent Skills (GitHub)](https://github.com/addyosmani/agent-skills)
- [OpenAI / API — готовые промпты и вызовы](/lab/Примеры/1149)
- [Prompt engineering — библиотека промптов](/lab/Примеры/1150)
- [Вайб-кодинг](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/1)
- [Векторные базы данных](/encyclopedia/3-data-markup/3-06-nosql/812)

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**ИИ для разработчика** — [Вайб-кодинг](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/1), [MLOps и LLM-стек — слои 1–3](/encyclopedia/6-ai/6-08-agentops/2), [Вайб-кодинг и нейроконтент — о разделе](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/intro), [Трансформеры и NLP — о разделе](/encyclopedia/6-ai/6-09-transformery-i-nlp/intro), [Разработка ИИ — о разделе](/encyclopedia/6-ai/6-05-razrabotka-ii/intro), [Разработка и отладка — о разделе](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/intro).

{/* /sidebar-collections */}

---
