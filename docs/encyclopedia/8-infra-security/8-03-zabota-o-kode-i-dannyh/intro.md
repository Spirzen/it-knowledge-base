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
---

import DocCardList from '@theme/DocCardList';

# О разделе

Здесь — практики **сохранности исходников и чувствительных данных**: что делать, когда IDE упала, диск сгорел, в репозиторий попал пароль или два разработчика перезаписали один файл. Это не полный курс ИБ (он в [разделе 8.07](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/intro)), а "гигиена", которую ожидают от любой команды разработки.

> **Смежно:** [Основы работы с Git](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/intro) · [DevOps](/encyclopedia/8-infra-security/8-04-devops-ci-cd/intro) · [Основы ИБ](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro)

## Рекомендуемый порядок

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Безопасность кода](./1.md) | Потеря несохранённого, VCS, локальная история |
| 2 | [Git: ветки и совместная работа](./11.md) | Конфликты, code review |
| 2a | [Опасные скрипты](./101.md) | Стоп-лист: терминал, Git, "curl \| bash" |
| 3 | [Секреты и конфигурация](./117.md) | Пароли не в репозитории |
| 4 | [Шифрование и бэкапы](./115.md) · [111](./111.md) | Данные в покое и при передаче |
| 5 | [Итоги](./998.md) · [чек-лист](./999.md) | Самопроверка |

Начните с [первой статьи](./1.md), если ещё не настроили Git на проекте — остальные главы опираются на эту базу.

<DocCardList />

{/* sidebar-collections */}
## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока "С чего начать?" на главной. Соседние шаги того же маршрута:

**Инфобез** — [Основы информационной безопасности — о разделе](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro), [Системное администрирование — о разделе](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/intro), [Основы интеграционного взаимодействия — о разделе](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro), [Тестирование информационной безопасности](/encyclopedia/7-project/7-05-testirovanie/123), [Контейнеризация и оркестрация — о разделе](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro), [Информационная безопасность — о разделе](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/intro).

**DevOps и инфраструктура** — [Проверка надежности под нагрузкой](/encyclopedia/7-project/7-05-testirovanie/1014), [DevOps, CI-CD — о разделе](/encyclopedia/8-infra-security/8-04-devops-ci-cd/intro), [Автоматизация тестирования](/encyclopedia/7-project/7-05-testirovanie/115), [Микросервисы и интеграция — о разделе](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro), [Основы интеграционного взаимодействия — о разделе](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro), [Контейнеризация и оркестрация — о разделе](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro).

{/* /sidebar-collections */}

---
