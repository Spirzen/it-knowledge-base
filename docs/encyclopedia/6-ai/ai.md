---
title: 6. Искусственный интеллект - о разделе
description: Современный ИИ как статистика, данные и модели — без "Скайнета" из фантастики, но с реальными возможностями и ограничениями прикладных систем.
sidebar_label: 6. Искусственный интеллект - о разделе
slug: /encyclopedia/Искусственный интеллект/ai
id: ai
---

<div class="article-tags">
  <span class="tag tag-required">ОБЯЗАТЕЛЬНО</span>
  <span class="tag tag-beginner">ДЛЯ НОВИЧКОВ</span>
  <span class="tag tag-inprogress">В РАЗРАБОТКЕ</span>
</div>

import DocCardList from '@theme/DocCardList';

---

## О разделе

Раздел про **реальные** технологии — машинное обучение, нейросети, языковые модели и их внедрение — без мифа про "разумную машину из фильма". Маркетинговый ярлык "ИИ" и инженерная дисциплина здесь разведены явно.

---

### Как читать

Рекомендуемый порядок для новичка:

1. [Что такое ИИ на самом деле](/encyclopedia/6-ai/6-01-vvedenie-v-ii/1) — термины, перцептрон, трансформер, ограничения LLM.
2. [История ИИ](/encyclopedia/6-ai/6-01-vvedenie-v-ii/11) и [классификация моделей](/encyclopedia/6-ai/6-01-vvedenie-v-ii/112).
3. [Машинное обучение](/encyclopedia/6-ai/6-02-mashinnoe-obuchenie/1) — типы обучения, датасеты, метрики; практика — [Scikit-learn](/encyclopedia/6-ai/6-02-mashinnoe-obuchenie/10), [Keras и TensorFlow](/encyclopedia/6-ai/6-03-neyroseti/114).
4. [Нейрон](/encyclopedia/6-ai/6-03-neyroseti/1) — веса, слои; базовые массивы — [NumPy — массивы и матрицы](/lab/Примеры/1129); затем [перцептрон на NumPy](/encyclopedia/6-ai/6-03-neyroseti/2) — первое обучение в коде; [распознавание лиц, объектов и текста](/encyclopedia/6-ai/6-06-primenenie-ii/120).
5. [Трансформеры и NLP](/encyclopedia/6-ai/6-09-transformery-i-nlp/intro) — задачи NLP, архитектура Transformer, реализация с нуля, fine-tuning, обзор BERT/GPT/T5, практика с Hugging Face (в т.ч. русский), тренды 2018–2021, мультимодальность.
6. [Большие языковые модели](/encyclopedia/6-ai/6-04-modeli-i-instrumenty/1) — LLM, цепочка «текст → токены → эмбеддинги», инференс; затем [RAG, MCP и агенты — три слоя](/encyclopedia/6-ai/6-04-modeli-i-instrumenty/121), [типы интеллектуальных агентов](/encyclopedia/6-ai/6-04-modeli-i-instrumenty/120), [агенты ИИ](/encyclopedia/6-ai/6-04-modeli-i-instrumenty/116) и [MCP-серверы](/encyclopedia/6-ai/6-04-modeli-i-instrumenty/114) (связь с [классическим API](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/117)).
7. [Генерация кода — ChatGPT, Gemini, DeepSeek](/encyclopedia/6-ai/6-04-modeli-i-instrumenty/117) — практика для разработчика; первый вызов API — [OpenAI / API — готовые промпты и вызовы](/lab/Примеры/1149), шаблоны промптов — [Prompt engineering — библиотека](/lab/Примеры/1150).
8. [Вайб-кодинг](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/1), [практический AI-стек](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/3), [Claude Code](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/4) и [нейрослоп](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/2) — риски «кода по наitию», сборка продуктов и агентная разработка в терминале.
9. [Цифровые инструменты без ручного кодинга](/encyclopedia/6-ai/6-05-razrabotka-ii/117) — конструкторы, агенты, деплой.
10. [Семь слоёв LLM-стека](/encyclopedia/6-ai/6-05-razrabotka-ii/119) — каркас от данных до продукта.
11. [MLOps — слои 1–3](/encyclopedia/6-ai/6-08-agentops/2) и [AgentOps — слои 4–7](/encyclopedia/6-ai/6-08-agentops/1) — эксплуатация всего стека.
12. [AgentOps в DevOps](/encyclopedia/8-infra-security/8-04-devops-ci-cd/2151) — CI/CD, multi-agent, инструменты.
13. [Разработка ИИ-решений](/encyclopedia/6-ai/6-05-razrabotka-ii/1) — API, RAG, галлюцинации, развёртывание; [облачные Cognitive Services](/encyclopedia/6-ai/6-05-razrabotka-ii/120).
14. [Применение в бизнесе](/encyclopedia/6-ai/6-06-primenenie-ii/1) — критерии зрелости продукта и риски.
15. [Монетизация цифровых продуктов с ИИ](/encyclopedia/6-ai/6-06-primenenie-ii/5) — модели дохода для автора и фрилансера.

Статья [Контекст](/encyclopedia/6-ai/6-01-vvedenie-v-ii/113) — углубление в промпты, эмбеддинги и контекстное окно; её удобно читать после базового введения в LLM. Закрепить **messages**, system prompt и вызов из кода — [OpenAI / API — готовые промпты и вызовы](/lab/Примеры/1149).

<DocCardList />
