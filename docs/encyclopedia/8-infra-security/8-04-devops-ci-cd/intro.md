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

Раздел про **путь кода от коммита до продакшена**: отдельные среды (dev, test/stage, prod), автоматическая сборка и тесты (CI), выкладка (CD), инфраструктура как код и обратная связь через логи и метрики. Материалы полезны разработчикам, инженерам эксплуатации и тем, кто готовится к роли DevOps.

> **Смежная база:** [Терминал](/encyclopedia/2-system-network/2-05-terminal/intro) · [Опасные скрипты](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/101) · [Системное администрирование](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/intro) · [Контейнеризация](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro) · [Тестирование](/encyclopedia/7-project/7-05-testirovanie/intro)

## Рекомендуемый порядок

1. **[Основы DevOps](./1.md)** — тест vs прод, зачем CI/CD, типичные ошибки при выкате.
2. **[Git и ветки](./2.md)** · **[GitHub Actions / GitLab CI](./3.md)** — как запускается пайплайн.
3. **Инфраструктура как код** — статьи блока `21x` (Terraform, Ansible и смежные темы по оглавлению).
4. **[Мониторинг и логи](./11.md)** · **[Надёжность под нагрузкой](/encyclopedia/7-project/7-05-testirovanie/1014)** — наблюдаемость после релиза.
5. **Итоги** [998](./998.md) и **чек-лист** [999](./999.md).

Если вы только пишете код в IDE и никогда не видели staging — начните с [основ](./1.md): без этого остальные главы про Jenkins, Kubernetes и Terraform воспринимаются как «чужой мир».

<DocCardList />

{/* sidebar-collections */}
## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока «С чего начать?» на главной. Соседние шаги того же маршрута:

**DevOps и инфраструктура** — [Забота о коде и данных — о разделе](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/intro), [Микросервисы и интеграция — о разделе](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro), [Проверка надежности под нагрузкой](/encyclopedia/7-project/7-05-testirovanie/1014), [Контейнеризация и оркестрация — о разделе](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro), [Автоматизация тестирования](/encyclopedia/7-project/7-05-testirovanie/115), [Безопасность в Docker](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/125).

{/* /sidebar-collections */}

---
