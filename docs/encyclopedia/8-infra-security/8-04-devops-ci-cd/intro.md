---
title: DevOps, CI-CD — о разделе
description: >-
  Доставка ПО: тестовые стенды, CI/CD, инфраструктура как код, мониторинг и
  безопасный выкат в прод — маршрут по разделу DevOps в энциклопедии Вселенная IT.
sidebar_label: DevOps, CI-CD — о разделе
related:
  - title: "Забота о коде и данных — о разделе"
    doc: encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/intro
  - title: "Микросервисы и интеграция — о разделе"
    doc: encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro
  - title: "Проверка надежности под нагрузкой"
    doc: encyclopedia/7-project/7-05-testirovanie/1014
  - title: "Контейнеризация и оркестрация — о разделе"
    doc: encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел про **путь кода от коммита до продакшена**: отдельные среды (dev, test/stage, prod), автоматическая сборка и тесты (CI), выкладка (CD), инфраструктура как код и обратная связь через логи и метрики. В **микросервисах** у каждого сервиса свой пайплайн (GitHub Actions, Jenkins, GitLab CI, TeamCity, CircleCI), а наблюдаемость строят на [Prometheus и Grafana](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/prometheus-grafana-praktikum/intro) или [Zabbix](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/zabbix-praktikum/intro) с централизованными логами — [экосистема MSA](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/118#ekosistema-msa). Материалы полезны разработчикам, инженерам эксплуатации и тем, кто готовится к роли DevOps. CI отсекает часть [нейрослопа](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/2) из ветки с [вайб-кодингом](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/1) — пайплайн без тестов и lint не компенсирует слепой merge.

> **Смежная база:** [Четыре модели развёртывания](/encyclopedia/1-basics/1-13-soft-prodvinutogo-polzovatelya/8#chetiryre-modeli-razvertyvaniya) · [Терминал](/encyclopedia/2-system-network/2-05-terminal/intro) · [утилита curl](/encyclopedia/2-system-network/2-05-terminal/1133) · [Опасные скрипты](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/101) · [Системное администрирование](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/intro) · [Контейнеризация](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro) · [Тестирование](/encyclopedia/7-project/7-05-testirovanie/intro)

---

## Рекомендуемый порядок

1. **[Основы DevOps](./1.md)** — тест vs прод, зачем CI/CD, типичные ошибки при выкате.
2. **[CI/CD — принципы](./11.md)** · **[Жизненный цикл пайплайна](./14.md)** — карта этапов (план → код → сборка → тесты → релиз → деплой → мониторинг) и типичные инструменты (Jira, GitHub, Gradle, Playwright, Kubernetes, Prometheus).
3. **[Git и ветки](./12.md)** · **[GitHub Actions / GitLab CI](./3.md)** — триггеры и конфигурация job.
4. **Инфраструктура как код** — [IaC — принципы](./215.md) → [Terraform](./2.md) → [справочник Terraform](./3.md); практика — [путь EC2→ALB](./22.md), [модули и live/](./23.md).
5. **AgentOps** — [MLOps, слои 1–3](/encyclopedia/6-ai/6-08-agentops/2) → [AgentOps, слои 4–7](/encyclopedia/6-ai/6-08-agentops/1) → [обзор в DevOps](./2151.md) → [мультиагентные команды](./2152.md) → [AGENTS, skills, rules](./2153.md) → [инструменты](./2154.md).
6. **[Логирование и мониторинг](./19.md)** · **[Практикум Prometheus и Grafana](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/prometheus-grafana-praktikum/intro)** · **[Практикум Zabbix](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/zabbix-praktikum/intro)** · **[Надёжность под нагрузкой](/encyclopedia/7-project/7-05-testirovanie/1014)** — наблюдаемость после релиза.
7. **Итоги** [998](./998.md) и **чек-лист** [999](./999.md).

Если вы только пишете код в IDE и никогда не видели staging — начните с [основ](./1.md): без этого остальные главы про Jenkins, Kubernetes и Terraform воспринимаются как "чужой мир".

Культурный мост по терминам GitHub и DevOps в рунете — [9.10 / 133](/encyclopedia/9-spinoff/9-10-internet-kultura/133).

Развёрнутый пример CI/CD на **GitHub Pages** (`.github/workflows/deploy.yml`, ручной и автоматический запуск) — лабораторный кейс [«Размещение своего сайта с GitHub Pages»](/lab/Кейсы/3).

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока "С чего начать?" на главной. Соседние шаги того же маршрута:

**DevOps и инфраструктура** — [Забота о коде и данных — о разделе](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/intro), [Микросервисы и интеграция — о разделе](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro), [Проверка надежности под нагрузкой](/encyclopedia/7-project/7-05-testirovanie/1014), [Контейнеризация и оркестрация — о разделе](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro), [Автоматизация тестирования](/encyclopedia/7-project/7-05-testirovanie/115), [Безопасность в Docker](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/125).

{/* /sidebar-collections */}

---
