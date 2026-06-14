---
title: Разработка и отладка — о разделе
description: >-
  Практики разработки: процесс, отладка, README, структура кодовой базы,
  pet-проекты, AI-ассистенты и типичные ошибки новичков.
sidebar_label: Разработка и отладка — о разделе
related:
  - title: "Prompt engineering — библиотека промптов"
    doc: lab/examples/1150
  - title: "Генерация кода — ChatGPT, Gemini и DeepSeek"
    doc: encyclopedia/6-ai/6-04-modeli-i-instrumenty/117
  - title: "Основы работы с Git — о разделе"
    doc: encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/intro
  - title: "Автоматическое управление памятью"
    doc: encyclopedia/4-code-dev/4-15-sborka-musora/1
  - title: "Десктопные приложения — о разделе"
    doc: encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/intro
  - title: "Проверка и валидация"
    doc: encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/118
  - title: "DevTools в браузере — справочник"
    doc: encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/1116
  - title: "Отладка"
    doc: encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/111
  - title: "Low-code и No-code платформы"
    doc: encyclopedia/8-infra-security/8-02-low-code-no-code/1
  - title: "Python — о разделе"
    doc: encyclopedia/5-languages/5-02-python/intro
  - title: "Код — о разделе"
    doc: encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/intro
  - title: "Программа — о разделе"
    doc: encyclopedia/1-basics/1-19-programma/intro
  - title: "Трансформеры и NLP — о разделе"
    doc: encyclopedia/6-ai/6-09-transformery-i-nlp/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

**Длинные листинги (от ~15 строк)** вынесены в каталог [code.spirzen.ru](https://code.spirzen.ru/) и подгружаются в статьях через `ExternalCodeEmbed` — HTML энциклопедии остаётся компактным, код сохраняет подсветку, вкладки и серии "шаг 1…N". Короткие фрагменты (одна команда в терминале, пара строк конфига) по-прежнему прямо в markdown. Диаграммы **mermaid** и интерактив — на месте или в [play.spirzen.ru](https://play.spirzen.ru/).

Раздел про практику разработки: от процесса и отладки до оформления репозитория. **Справочник типовых задач** (Jira, Git, БД, API, UI, Docker, BPMN и др.) — [Типовые задачи разработчика — справочник-шпаргалка](./101). Входные данные из форм, API и баз — [Проверка и валидация](./118). Встроенные **средства разработчика в браузере** (Elements, Console, Network, Sources) — [DevTools в браузере — справочник](./1116). Сборка, Run в IDE, dev-сервер и перезапуск — [Запуск и перезапуск приложений](/encyclopedia/1-basics/1-12-sovety-dlya-novichka/13). Для README и структуры проекта см. [README для разработчика](./117). Быстрые проверки HTTP API в терминале — [утилита curl](/encyclopedia/2-system-network/2-05-terminal/1133), [curl / fetch — примеры](/lab/Примеры/1133). Чтобы вынести пет-проект в интернет бесплатно — ["Размещение своего сайта с GitHub Pages"](/lab/Кейсы/3); идеи проектов — [Пет-проекты](./114).

Код из ИИ без review — [вайб-кодинг](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/1); осознанный цикл "промпт → проверка → merge" — [Генерация кода](/encyclopedia/6-ai/6-04-modeli-i-instrumenty/117) и [библиотека промптов](/lab/Примеры/1150) (Python, traceback, рефакторинг, review).

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**Первый коммит** — [Как работает компьютер — о разделе](/encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/intro), [Терминал — о разделе](/encyclopedia/2-system-network/2-05-terminal/intro), [Программа — о разделе](/encyclopedia/1-basics/1-19-programma/intro), [Код — о разделе](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/intro), [Основы работы с Git — о разделе](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/intro), [Python — о разделе](/encyclopedia/5-languages/5-02-python/intro).

**База программиста** — [Основы работы с Git — о разделе](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/intro), [Автоматическое управление памятью](/encyclopedia/4-code-dev/4-15-sborka-musora/1), [Десктопные приложения — о разделе](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/intro), [Low-code и No-code платформы](/encyclopedia/8-infra-security/8-02-low-code-no-code/1), [ORM и работа с данными — о разделе](/encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro), [JavaScript — о разделе](/encyclopedia/5-languages/5-01-javascript/intro).

**ИИ для разработчика** — [Трансформеры и NLP — о разделе](/encyclopedia/6-ai/6-09-transformery-i-nlp/intro), [Low-code, No-code — о разделе](/encyclopedia/8-infra-security/8-02-low-code-no-code/intro), [MLOps и LLM-стек — слои 1–3](/encyclopedia/6-ai/6-08-agentops/2), [AgentOps и MLOps — о разделе](/encyclopedia/6-ai/6-08-agentops/intro), [Вайб-кодинг](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/1), [Вайб-кодинг и нейроконтент — о разделе](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/intro).

{/* /sidebar-collections */}

---
