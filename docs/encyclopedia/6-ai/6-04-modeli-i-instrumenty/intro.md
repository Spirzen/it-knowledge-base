---
title: Модели и инструменты — о разделе
description: "Подборка материалов раздела Модели и инструменты в энциклопедии Вселенная IT."
sidebar_label: Модели и инструменты — о разделе
related:
  - title: "RAG, MCP и агенты — три слоя архитектуры"
    doc: encyclopedia/6-ai/6-04-modeli-i-instrumenty/121
  - title: "Типы интеллектуальных агентов"
    doc: encyclopedia/6-ai/6-04-modeli-i-instrumenty/120
  - title: "Семь слоёв LLM-стека"
    doc: encyclopedia/6-ai/6-05-razrabotka-ii/119
  - title: "Параметры генерации LLM — напоминалка"
    doc: encyclopedia/6-ai/6-04-modeli-i-instrumenty/118
  - title: "Вайб-кодинг"
    doc: encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/1
  - title: "Генерация кода — ChatGPT, Gemini и DeepSeek"
    doc: encyclopedia/6-ai/6-04-modeli-i-instrumenty/117
  - title: "MCP-серверы"
    doc: encyclopedia/6-ai/6-04-modeli-i-instrumenty/114
  - title: "API — интерфейсы прикладного программирования"
    doc: encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/117
  - title: "OpenAI / API — готовые промпты и вызовы"
    doc: lab/examples/1149
  - title: "Prompt engineering — библиотека промптов"
    doc: lab/examples/1150
  - title: "Трансформеры и NLP — о разделе"
    doc: encyclopedia/6-ai/6-09-transformery-i-nlp/intro
  - title: "Нейросети — о разделе"
    doc: encyclopedia/6-ai/6-03-neyroseti/intro
  - title: "Reasoning-модели"
    doc: encyclopedia/6-ai/6-04-modeli-i-instrumenty/123
  - title: "Российские нейросети"
    doc: encyclopedia/6-ai/6-04-modeli-i-instrumenty/124
  - title: "Как выбрать модель и где её запускать"
    doc: encyclopedia/6-ai/6-04-modeli-i-instrumenty/125
  - title: "Сколько стоит ИИ"
    doc: encyclopedia/6-ai/6-04-modeli-i-instrumenty/126
  - title: "Контекст агента — AGENTS, skills, rules"
    doc: encyclopedia/8-infra-security/8-04-devops-ci-cd/2153
  - title: "Cursor"
    doc: tools/development/3
---

import DocCardList from '@theme/DocCardList';

# О разделе

Ключевые темы раздела:

- [RAG, MCP и агенты — три слоя архитектуры](./121) — как retrieval, инструменты и оркестрация складываются в одно приложение;
- [Типы интеллектуальных агентов](./120) — классическая схема от рефлекса до обучения;
- [Агенты ИИ](./116) — архитектура LLM-агентов, tools и политики безопасности;
- [MCP-серверы](./114) — стандартизированный слой инструментов для IDE и агентов ([MCP и классический API](./114#mcp-i-api));
- [Emergence World](./122) — долгоживущие агенты в одной среде;
- [AgentOps](/encyclopedia/8-infra-security/8-04-devops-ci-cd/2151) — эксплуатация агентов в проде.

Перед запуском shell или Git от IDE-агента прочитайте [Опасные скрипты](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/101). Углублённый маршрут по NLP — [Трансформеры и NLP](/encyclopedia/6-ai/6-09-transformery-i-nlp/intro).

## Agent Skills

**Agent Skills** — набор markdown-файлов `SKILL.md` с пошаговыми инструкциями для [ИИ-агента](/encyclopedia/6-ai/6-04-modeli-i-instrumenty/116). Каждый файл описывает один типовый этап работы (спецификация, план, код, тест, ревью, деплой). Skills дополняют [rules и AGENTS.md](/encyclopedia/8-infra-security/8-04-devops-ci-cd/2153) — там границы и контракт репозитория, здесь конкретная процедура.

| Слой | Вопрос, на который отвечает |
| --- | --- |
| **Rules** | Что запрещено и как оформлять код |
| **AGENTS.md** | Как устроен репозиторий и как его собирать |
| **Skills** | Как пройти конкретный этап — spec, plan, build, test, review, ship |

Каждый skill обычно содержит:

- **триггер** — когда применять навык;
- **процесс** — нумерованные шаги;
- **red flags** — когда остановиться и позвать человека;
- **verification** — какие тесты, логи или метрики приложить к отчёту.

Открытый пример lifecycle-навыков — репозиторий [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills). Практика в [Cursor](/tools/development/3) — папка `.cursor/skills/`; теория контекста — [Контекст агента — AGENTS, skills, rules](/encyclopedia/8-infra-security/8-04-devops-ci-cd/2153). Подход стыкуется с [AgentOps](/encyclopedia/6-ai/6-08-agentops/intro) и [вайб-кодингом](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/1).

**Практика в коде**

- [OpenAI / API — готовые промпты и вызовы](/lab/Примеры/1149) — Python, curl, streaming, JSON mode;
- [Prompt engineering — библиотека промптов](/lab/Примеры/1150) — шаблоны system/user для учёбы и лабораторных.

**Выбор модели без погружения в ML**

- [как выбрать модель](./125);
- [стоимость](./126);
- [российский стек](./124);
- [reasoning-модели](./123).

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**Нейросети и ИИ** — [Нейросети — о разделе](/encyclopedia/6-ai/6-03-neyroseti/intro), [Разработка ИИ — о разделе](/encyclopedia/6-ai/6-05-razrabotka-ii/intro), [Машинное обучение — о разделе](/encyclopedia/6-ai/6-02-mashinnoe-obuchenie/intro), [Применение ИИ — о разделе](/encyclopedia/6-ai/6-06-primenenie-ii/intro), [Введение в ИИ — о разделе](/encyclopedia/6-ai/6-01-vvedenie-v-ii/intro), [Трансформеры и NLP — о разделе](/encyclopedia/6-ai/6-09-transformery-i-nlp/intro).

**ИИ для разработчика** — [Введение в ИИ — о разделе](/encyclopedia/6-ai/6-01-vvedenie-v-ii/intro), [Разработка ИИ — о разделе](/encyclopedia/6-ai/6-05-razrabotka-ii/intro), [Вайб-кодинг и нейроконтент — о разделе](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/intro), [Вайб-кодинг](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/1), [AgentOps и MLOps — о разделе](/encyclopedia/6-ai/6-08-agentops/intro), [MLOps и LLM-стек — слои 1–3](/encyclopedia/6-ai/6-08-agentops/2).

{/* /sidebar-collections */}

---
