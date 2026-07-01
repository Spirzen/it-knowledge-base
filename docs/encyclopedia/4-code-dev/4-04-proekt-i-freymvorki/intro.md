---
title: Проект, структура и фреймворки — о разделе
description: "Подборка материалов раздела Проект, структура и фреймворки в энциклопедии Вселенная IT."
sidebar_label: Проект, структура и фреймворки — о разделе
related:
  - title: "Выполнение кода — о разделе"
    doc: encyclopedia/4-code-dev/4-03-vypolnenie-koda/intro
  - title: "Асинхронность — о разделе"
    doc: encyclopedia/4-code-dev/4-05-asinhronnost/intro
  - title: "Код — о разделе"
    doc: encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/intro
  - title: "Архитектура выполнения — о разделе"
    doc: encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

**Длинные листинги (от ~15 строк)** вынесены в каталог [code.spirzen.ru](https://code.spirzen.ru/) и подгружаются в статьях через `ExternalCodeEmbed` — так HTML энциклопедии не раздувается, а код остаётся с подсветкой, вкладками и сериями "шаг 1…N". Короткие фрагменты (один `print`, пара строк Dockerfile, `npm ci`) по-прежнему прямо в markdown. Диаграммы **mermaid** и интерактив — на месте или в [play.spirzen.ru](https://play.spirzen.ru/).

Команды из README (`npm run`, `dotnet run`, `docker compose up`) и кнопка Run в IDE — [Запуск и перезапуск приложений](/encyclopedia/1-basics/1-035-bazovaya-informatika/208). Готовые `compose.yaml` для локального стека — [Docker Compose — готовые стеки](/lab/Примеры/11111).

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Проект ПО](./1.md) | Структура, `.csproj`, `pyproject.toml` |
| 2 | [Библиотека](./101.md) | Сторонние пакеты и менеджеры |
| 3 | [Манифесты зависимостей](./103.md) | `requirements.txt`, `package.json`, Dockerfile — одна команда установки; в CI — [рецепты GitHub Actions](/lab/Примеры/1134); готовые Dockerfile — [галерея Lab](/lab/Примеры/11113) |
| 4 | [Сборка и публикация](./102.md) | От исходника до артефакта |
| 5 | [Основы работы с контейнерами](./104.md) | Docker, первый `docker run`, Compose — вводная до [8.06](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro) |

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**База программиста** — [Выполнение кода — о разделе](/encyclopedia/4-code-dev/4-03-vypolnenie-koda/intro), [Асинхронность — о разделе](/encyclopedia/4-code-dev/4-05-asinhronnost/intro), [Код — о разделе](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/intro), [Архитектура выполнения — о разделе](/encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya/intro), [Алгоритмы — о разделе](/encyclopedia/4-code-dev/4-01-algoritmy/intro), [Парадигмы и уровни абстракции — о разделе](/encyclopedia/4-code-dev/4-07-paradigmy-i-urovni-abstraktsii/intro).

{/* /sidebar-collections */}

---
