---
title: Забота о коде и данных — о разделе
description: >-
  Резервные копии, Git, секреты, шифрование и гигиена репозитория — как не
  потерять код и не утекли данные; маршрут раздела в энциклопедии Вселенная IT.
sidebar_label: Забота о коде и данных — о разделе
related:
  - title: "Тестирование информационной безопасности"
    doc: encyclopedia/7-project/7-05-testirovanie/123
  - title: "Контейнеризация и оркестрация — о разделе"
    doc: encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro
  - title: "Основы интеграционного взаимодействия — о разделе"
    doc: encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro
  - title: "Информационная безопасность — о разделе"
    doc: encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/intro
  - title: "DevOps, CI-CD — о разделе"
    doc: encyclopedia/8-infra-security/8-04-devops-ci-cd/intro
  - title: "Проверка надежности под нагрузкой"
    doc: encyclopedia/7-project/7-05-testirovanie/1014
  - title: "Автоматизация тестирования"
    doc: encyclopedia/7-project/7-05-testirovanie/115
  - title: "Микросервисы и интеграция — о разделе"
    doc: encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

**Длинные листинги (от ~15 строк)** вынесены в каталог [code.spirzen.ru](https://code.spirzen.ru/) и подгружаются в статьях через `ExternalCodeEmbed` — так HTML энциклопедии не раздувается, а код остаётся с подсветкой, вкладками и сериями "шаг 1…N". Короткие фрагменты (одна строка, пара выражений) по-прежнему прямо в markdown. Диаграммы **mermaid** и интерактив — на месте или в [play.spirzen.ru](https://play.spirzen.ru/).

Здесь — практики **сохранности исходников и чувствительных данных** — что делать, когда IDE упала, диск сгорел, в репозиторий попал пароль или два разработчика перезаписали один файл. Слепая вставка кода из чата ([вайб-кодинг](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/1)) — частый источник утечек секретов в промпт и уязвимостей в диффе. Это "гигиена", которую ожидают от любой команды разработки.

> **Смежно:** [Основы работы с Git](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/intro) · [DevOps](/encyclopedia/8-infra-security/8-04-devops-ci-cd/intro) · [Основы ИБ](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro)

**База в разделе 4.13 (с чего начать новичку):** [12 команд Git](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/115#12-komand) · [как работать с Git — add, commit, push](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/112) · [ветки, merge, pull request / merge request](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/113) · [рекомендации в команде](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/114) · [типовые ситуации и восстановление](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/1141).

Ниже в **8.03** — материалы про сохранность кода, устройство Git и гигиену репозитория; они опираются на ту же базу, но идут глубже в инфраструктуру и процессы.

---

## Рекомендуемый порядок

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Безопасность кода](./1.md) | Потеря несохранённого, VCS, локальная история |
| 2 | [Защита кода от изменений](./11.md) · [Архитектура Git](./111.md) | Подмена бинарников; зоны репозитория |
| 2a | [Опасные скрипты](./101.md) | Стоп-лист: терминал, Git, "curl \| bash" |
| 3 | [Секреты и конфигурация](./117.md) | Пароли не в репозитории |
| 4 | [Методы защиты данных](./117.md) · [Настройка Git](./115.md) · [Архитектура системы контроля версий Git](./111.md) | Бэкапы, флаги, архитектура |
| 5 | [Итоги](./998.md) · [чек-лист](./999.md) | Самопроверка |

Начните с [первой статьи](./1.md), если ещё не настроили Git на проекте — остальные главы опираются на эту базу.

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**Инфобез** — [Основы информационной безопасности — о разделе](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro), [Системное администрирование — о разделе](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/intro), [Основы интеграционного взаимодействия — о разделе](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro), [Тестирование информационной безопасности](/encyclopedia/7-project/7-05-testirovanie/123), [Контейнеризация и оркестрация — о разделе](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro), [Информационная безопасность — о разделе](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/intro).

**DevOps и инфраструктура** — [Проверка надежности под нагрузкой](/encyclopedia/7-project/7-05-testirovanie/1014), [DevOps, CI-CD — о разделе](/encyclopedia/8-infra-security/8-04-devops-ci-cd/intro), [Автоматизация тестирования](/encyclopedia/7-project/7-05-testirovanie/115), [Микросервисы и интеграция — о разделе](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro), [Основы интеграционного взаимодействия — о разделе](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro), [Контейнеризация и оркестрация — о разделе](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro).

{/* /sidebar-collections */}

---
