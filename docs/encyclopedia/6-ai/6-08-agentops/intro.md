---
title: AgentOps и MLOps — о разделе
description: "Эксплуатация LLM-стека: MLOps на слоях 1–3 (данные, модель) и AgentOps на слоях 4–7 (оркестрация, инференс, интеграция, продукт)."
sidebar_label: AgentOps и MLOps — о разделе
related:
  - title: "Prompt engineering — библиотека промптов"
    doc: lab/examples/1150
  - title: "MLOps и LLM-стек — слои 1–3"
    doc: encyclopedia/6-ai/6-08-agentops/2
  - title: "AgentOps и LLM-стек — слои 4–7"
    doc: encyclopedia/6-ai/6-08-agentops/1
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
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел закрывает **операционную** сторону [семи слоёв LLM-стека](/encyclopedia/6-ai/6-05-razrabotka-ii/119) — архитектуру дополняет **теория эксплуатации**: reproducibility, drift, eval, observability, governance.

| Статья | Слои | Дисциплина |
|--------|------|------------|
| [MLOps и LLM-стек — слои 1–3](./2) | Источники, данные, модель | CRISP-ML, drift, retrieval theory, registry |
| [AgentOps и LLM-стек — слои 4–7](./1) | Оркестрация, инференс, интеграция, продукт | BDI, eval theory, HITL, trust boundaries |

Практики DevOps (CI/CD, IaC, Git, деплой) — [8.04 DevOps](/encyclopedia/8-infra-security/8-04-devops-ci-cd/intro). Углублённый AgentOps (multi-agent PR, AGENTS.md, tools) — [8.04 AgentOps](/encyclopedia/8-infra-security/8-04-devops-ci-cd/2151).

---

## Рекомендуемый порядок

1. [Семь слоёв LLM-стека](/encyclopedia/6-ai/6-05-razrabotka-ii/119) — архитектурная карта.
2. [Агенты ИИ](/encyclopedia/6-ai/6-04-modeli-i-instrumenty/116) и [RAG, MCP и агенты](/encyclopedia/6-ai/6-04-modeli-i-instrumenty/121).
3. **[MLOps — слои 1–3](./2)** — данные и модель.
4. **[AgentOps — слои 4–7](./1)** — runtime и продукт.
5. [AgentOps — обзор в DevOps](/encyclopedia/8-infra-security/8-04-devops-ci-cd/2151) → [2152](/encyclopedia/8-infra-security/8-04-devops-ci-cd/2152) · [2153](/encyclopedia/8-infra-security/8-04-devops-ci-cd/2153) · [2154](/encyclopedia/8-infra-security/8-04-devops-ci-cd/2154).
6. [Итоги](./98) и [чек-лист](./99).

<DocCardList />

---

## См. также

- [Развёртывание ИИ-моделей](/encyclopedia/6-ai/6-05-razrabotka-ii/111)
- [OpenAI / API — готовые промпты и вызовы](/lab/Примеры/1149) — контроль расходов токенов на уровне кода
- [Prompt engineering — библиотека промптов](/lab/Примеры/1150) — версионируемые шаблоны system/user и RAG в git
- [Вайб-кодинг](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/1)
- [Векторные базы данных](/encyclopedia/3-data-markup/3-06-nosql/812)

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок «С чего начать?» на [главной](/). Соседние шаги того же маршрута:

**ИИ для разработчика** — [Вайб-кодинг](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/1), [MLOps и LLM-стек — слои 1–3](/encyclopedia/6-ai/6-08-agentops/2), [Вайб-кодинг и нейроконтент — о разделе](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/intro), [Трансформеры и NLP — о разделе](/encyclopedia/6-ai/6-09-transformery-i-nlp/intro), [Разработка ИИ — о разделе](/encyclopedia/6-ai/6-05-razrabotka-ii/intro), [Разработка и отладка — о разделе](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/intro).

{/* /sidebar-collections */}

---
