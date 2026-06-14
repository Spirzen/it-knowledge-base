---
title: Трансформеры и NLP — о разделе
description: "Подборка материалов по обработке естественного языка и архитектуре Transformer — от задач NLP до практики с предобученными моделями и мультимодальности."
sidebar_label: Трансформеры и NLP — о разделе
related:
  - title: "NLP и работа с текстом"
    doc: encyclopedia/6-ai/6-09-transformery-i-nlp/1
  - title: "Что такое трансформер"
    doc: encyclopedia/6-ai/6-09-transformery-i-nlp/2
  - title: "Большие языковые модели"
    doc: encyclopedia/6-ai/6-04-modeli-i-instrumenty/1
  - title: "OpenAI / API — готовые промпты и вызовы"
    doc: lab/examples/1149
  - title: "Prompt engineering — библиотека промптов"
    doc: lab/examples/1150
  - title: "Нейросети — о разделе"
    doc: encyclopedia/6-ai/6-03-neyroseti/intro
  - title: "Обучение на базе готовой модели"
    doc: encyclopedia/6-ai/6-02-mashinnoe-obuchenie/3
  - title: "Распознавание лиц, объектов и текста"
    doc: encyclopedia/6-ai/6-06-primenenie-ii/120
  - title: "Применение ИИ — о разделе"
    doc: encyclopedia/6-ai/6-06-primenenie-ii/intro
  - title: "Векторные базы данных"
    doc: encyclopedia/3-data-markup/3-06-nosql/812
  - title: "Разработка ИИ — о разделе"
    doc: encyclopedia/6-ai/6-05-razrabotka-ii/intro
  - title: "Графовые базы данных"
    doc: encyclopedia/3-data-markup/3-06-nosql/7
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел посвящён **обработке естественного языка (NLP)** и архитектуре **Transformer**, которая с 2017 года стала основой современных языковых моделей, систем перевода, классификаторов текста и мультимодальных систем.

Краткое упоминание трансформера есть во [введении в ИИ](/encyclopedia/6-ai/6-01-vvedenie-v-ii/1) и в статье [Большие языковые модели](/encyclopedia/6-ai/6-04-modeli-i-instrumenty/1). Здесь — **углублённый маршрут** — от задач NLP и устройства attention до реализации блоков с нуля, fine-tuning, обзора семейств моделей и практики с Hugging Face, в том числе для **русского языка**.

<div class="callout callout--tip">
  <div class="callout-title">Рекомендуемый порядок</div>

  <div class="callout-body">
  1. [NLP и работа с текстом](./1) — задачи, корпуса, метрики.
  2. [Что такое трансформер](./2) — attention, encoder/decoder, особенности.
  3. [Трансформер с нуля](./3) — теория и минимальная реализация на PyTorch.
  4. [Дообучение под задачи NLP](./4) — fine-tuning, LoRA, heads.
  5. [Обзор архитектур](./5) — BERT, GPT, T5, Longformer и др.
  6. [Предобученные модели на практике](./6) — pipelines, русскоязычные чекпоинты.
  7. [Тренды NLP 2018–2021](./7) — эволюция от ELMo до GPT-3.
  8. [Мультимодальные трансформеры](./8) — ViT, Whisper, CLIP.
  9. [Итоги](./98) и [чек-лист](./999).

  Перед разделом полезны [нейрон и слои](/encyclopedia/6-ai/6-03-neyroseti/1), [NumPy — массивы и матрицы](/lab/Примеры/1129), [перцептрон на NumPy](/encyclopedia/6-ai/6-03-neyroseti/2) и [PyTorch для разработчика](/encyclopedia/5-languages/5-02-python/333). После — [LLM и ChatGPT](/encyclopedia/6-ai/6-04-modeli-i-instrumenty/1), [работа с ИИ-моделями](/encyclopedia/6-ai/6-05-razrabotka-ii/113), вызов API — [OpenAI / API — готовые промпты и вызовы](/lab/Примеры/1149) и шаблоны запросов — [Prompt engineering — библиотека промптов](/lab/Примеры/1150).
  </div>
</div>

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**Нейросети и ИИ** — [Применение ИИ — о разделе](/encyclopedia/6-ai/6-06-primenenie-ii/intro), [Векторные базы данных](/encyclopedia/3-data-markup/3-06-nosql/812), [Разработка ИИ — о разделе](/encyclopedia/6-ai/6-05-razrabotka-ii/intro), [Графовые базы данных](/encyclopedia/3-data-markup/3-06-nosql/7), [Модели и инструменты — о разделе](/encyclopedia/6-ai/6-04-modeli-i-instrumenty/intro), [Нейросети — о разделе](/encyclopedia/6-ai/6-03-neyroseti/intro).

**ИИ для разработчика** — [MLOps и LLM-стек — слои 1–3](/encyclopedia/6-ai/6-08-agentops/2), [Разработка и отладка — о разделе](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/intro), [AgentOps и MLOps — о разделе](/encyclopedia/6-ai/6-08-agentops/intro), [Low-code, No-code — о разделе](/encyclopedia/8-infra-security/8-02-low-code-no-code/intro), [Вайб-кодинг](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/1), [Вайб-кодинг и нейроконтент — о разделе](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/intro).

{/* /sidebar-collections */}

---
