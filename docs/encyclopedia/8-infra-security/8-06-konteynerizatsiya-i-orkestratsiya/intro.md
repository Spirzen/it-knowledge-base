---
title: Контейнеризация и оркестрация — о разделе
description: "Маршрут по Kubernetes в разделе:."
sidebar_label: Контейнеризация и оркестрация — о разделе
related:
  - title: "Микросервисы и интеграция — о разделе"
    doc: encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro
  - title: "Docker Compose — готовые стеки"
    doc: lab/examples/11111
  - title: "Kubernetes YAML — минимальные манифесты"
    doc: lab/examples/11115
  - title: "Prometheus + Grafana — запросы"
    doc: lab/examples/11114
  - title: "Dockerfile — 10 типовых образов"
    doc: lab/examples/11113
  - title: "SQL — о разделе"
    doc: encyclopedia/3-data-markup/3-07-sql/intro
  - title: "Методы защиты пользовательских и корпоративных данных"
    doc: encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/117
  - title: "JavaScript — о разделе"
    doc: encyclopedia/5-languages/5-01-javascript/intro
  - title: "Проектирование — о разделе"
    doc: encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/intro
  - title: "Паттерны проектирования — о разделе"
    doc: encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/intro
  - title: "Забота о коде и данных — о разделе"
    doc: encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/intro
  - title: "Информационная безопасность — о разделе"
    doc: encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

**Длинные листинги (от ~15 строк)** вынесены в каталог [code.spirzen.ru](https://code.spirzen.ru/) и подгружаются в статьях через `ExternalCodeEmbed` — Dockerfile, Compose, Helm-чарты и манифесты Kubernetes не раздувают HTML энциклопедии. Короткие фрагменты (одна строка, пара выражений) по-прежнему прямо в markdown. Диаграммы **mermaid** и интерактив — на месте или в [play.spirzen.ru](https://play.spirzen.ru/).

Контейнеры — **третья** модель в цепочке развёртывания (после bare metal и ВМ); в облаке их часто запускают **внутри ВМ** — [четыре модели развёртывания](/encyclopedia/1-basics/1-13-soft-prodvinutogo-polzovatelya/8#chetiryre-modeli-razvertyvaniya). В **микросервисной** архитектуре один сервис обычно упаковывают в свой образ (Docker, Podman), а реплики координирует оркестратор (Kubernetes, OpenShift, ECS) — см. [экосистему MSA](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/118#ekosistema-msa) и [контейнеры в микросервисах](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/117#контейнеры-в-микросервисах).

Перед первым `docker run` — [Запуск и перезапуск приложений](/encyclopedia/1-basics/1-12-sovety-dlya-novichka/13) (Docker Desktop, окно терминала, остановка). Опасные флаги `docker run` (`-v /`, `--privileged`, socket) — [Опасные скрипты](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/101). Сборка образа в CI — [GitHub Actions — CI/CD рецепты](/lab/Примеры/1134) (рецепт Docker build), контекст пайплайна — [DevOps](/encyclopedia/8-infra-security/8-04-devops-ci-cd/intro).

Маршрут по **Kubernetes** в разделе:

| Цель | Статья |
|------|--------|
| Как устроены клиент, демон, образы и реестр | [Docker](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/111#kak-ustroen-docker) |
| 18 команд Docker с пояснениями | [DevOps — шпаргалка](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/118#docker-18-komand) |
| 9 практик Dockerfile | [DevOps — шпаргалка](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/118#docker-9-praktik) |
| Манифесты зависимостей (`requirements.txt`, `RUN pip install`) | [Манифесты зависимостей](/encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/103) |
| Сборка образа в GitHub Actions | [CI/CD рецепты](/lab/Примеры/1134) |
| Справочник CLI, Dockerfile, Compose | [Справочник по Docker](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/2) |
| Архитектура, Swarm, Helm, Kustomize | [Docker Swarm и Kubernetes](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/117) |
| Docker Desktop на Windows — Engine, Dashboard, Kubernetes | [Docker Desktop](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/1121) |
| Практика (Docker Desktop, kubectl) | [Первые шаги](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/1172) |
| GUI для кластера Kubernetes Dashboard и Minikube Dashboard | [Графический интерфейс для управления Kubernetes](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/119) |
| Администрирование кластера, Ingress, хранение данных, деплой, манифесты, Helm-чарты | [Реализация Kubernetes](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/1171) |
| Мониторинг Prometheus, Grafana, Loki | [Практикум Prometheus и Grafana](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/prometheus-grafana-praktikum/intro), [PromQL — галерея](/lab/Примеры/11114) |
| Мониторинг Zabbix (серверы, SNMP, SLA) | [Практикум Zabbix](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/zabbix-praktikum/intro) |
| Справочник YAML и команд | [Справочник по Kubernetes](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/211) |
| Официальная документация kubernetes.io | [Навигатор Kubernetes](/tools/documentation/7) |
| Готовые `nginx.conf` (proxy, SPA, PHP, TLS) | [Nginx — конфиги под задачу](/lab/Примеры/11112) |
| Готовые `compose.yaml` (nginx, Postgres, Redis, WordPress…) | [Docker Compose — готовые стеки](/lab/Примеры/11111) |
| Готовые Dockerfile (Node, Python, Go, SPA, Spring…) | [Dockerfile — 10 типовых образов](/lab/Примеры/11113) |
| Минимальные манифесты Pod, Deployment, Service | [Kubernetes YAML — минимальные манифесты](/lab/Примеры/11115) |

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**Бэкенд и серверная разработка** — [Микросервисы и интеграция — о разделе](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro), [SQL — о разделе](/encyclopedia/3-data-markup/3-07-sql/intro), [Методы защиты пользовательских и корпоративных данных](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/117), [JavaScript — о разделе](/encyclopedia/5-languages/5-01-javascript/intro), [Low-code и No-code платформы](/encyclopedia/8-infra-security/8-02-low-code-no-code/1), [Python — о разделе](/encyclopedia/5-languages/5-02-python/intro).

**Архитектура и проектирование ПО** — [Микросервисы и интеграция — о разделе](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro), [Методы защиты пользовательских и корпоративных данных](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/117), [Проектирование — о разделе](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/intro), [Паттерны проектирования — о разделе](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/intro), [Проектирование и архитектура — о разделе](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/intro), [Архитектура десктопных приложений](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/1).

**Инфобез** — [Основы информационной безопасности — о разделе](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro), [Системное администрирование — о разделе](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/intro), [Основы интеграционного взаимодействия — о разделе](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro), [Тестирование информационной безопасности](/encyclopedia/7-project/7-05-testirovanie/123), [Забота о коде и данных — о разделе](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/intro), [Информационная безопасность — о разделе](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/intro).

**DevOps и инфраструктура** — [Микросервисы и интеграция — о разделе](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro), [Безопасность в Docker](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/125), [DevOps, CI-CD — о разделе](/encyclopedia/8-infra-security/8-04-devops-ci-cd/intro), [Забота о коде и данных — о разделе](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/intro), [Проверка надежности под нагрузкой](/encyclopedia/7-project/7-05-testirovanie/1014), [Автоматизация тестирования](/encyclopedia/7-project/7-05-testirovanie/115).

{/* /sidebar-collections */}

---
