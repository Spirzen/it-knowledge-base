---
title: Основы работы с Git — о разделе
description: >-
  Git для начинающих и команд: установка, workflow, ветвление, типовые ситуации,
  .gitignore, рекомендации и справочник-шпаргалка.
sidebar_label: Основы работы с Git — о разделе
related:
  - title: "Десктопные приложения — о разделе"
    doc: encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/intro
  - title: "Разработка и отладка — о разделе"
    doc: encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/intro
  - title: "ORM и работа с данными — о разделе"
    doc: encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro
  - title: "Автоматическое управление памятью"
    doc: encyclopedia/4-code-dev/4-15-sborka-musora/1
  - title: "Git — шпаргалка сценариев"
    doc: lab/examples/1123
  - title: "Код — о разделе"
    doc: encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/intro
  - title: "Python — о разделе"
    doc: encyclopedia/5-languages/5-02-python/intro
  - title: "Программа — о разделе"
    doc: encyclopedia/1-basics/1-19-programma/intro
  - title: "Личный профиль и портфолио разработчика"
    doc: encyclopedia/1-basics/1-26-karera-v-it-i-mify/7
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел ведёт от идеи системы контроля версий до ежедневной работы в команде — ветки, pull request и merge request, `.gitignore` и восстановление после типичных ошибок. **Тот же материал глубже** (протоколы, packfile, GitFlow, расширенные команды) — в [разделе 8.03 "Забота о коде и данных"](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/intro); карта ссылок — в подзаголовке **"Углубление — раздел 8.03"** ниже на этой странице.

---

## Рекомендуемый порядок

1. [Система контроля версий Git](./1) — зачем Git и первый репозиторий  
2. [Установка и настройка Git](./111) — установка, `git config`, клиенты  
3. [Как работать с Git](./112) — четыре уровня (проект → GitHub), `add`, `commit`, `push` / `fetch` / `pull`  
4. [Ветвление и слияние](./113) — ветки, PR, конфликты, форк  
5. [Рекомендации в команде](./114) — процесс, сообщения коммитов, базовое восстановление  
5a. [Опасные скрипты](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/101) — `reset --hard`, `clean`, `push --force`, reflog  
6. [Типовые ситуации с Git](./1141) — **справочник по симптомам** (ошибки, `stash`, `rebase`, `bisect`)  
7. [`.gitignore`](./116) — секреты и шаблоны под стек  
8. [Справочник-шпаргалка](./115) — [12 команд на каждый день](./115#12-komand), затем полный CLI-справочник  

По желанию: [итоги](./2), [чек-лист самопроверки](./3).

**Параллельно с курсом** (удобно для курсовых и поиска в Google) — [лабораторная "Git — шпаргалка сценариев"](/lab/Примеры/1123) — готовые блоки `add` / `commit` / `push`, заливка на GitHub, merge, откат; у каждой команды построчный разбор. После первого push — [CI для тестов и деплоя](/lab/Примеры/1134) или [кейс GitHub Pages](/lab/Кейсы/3).

| Задача в учёбе или на работе | Энциклопедия | Лаборатория (примеры с разбором) |
|------------------------------|--------------|-----------------------------------|
| Первый репозиторий, GitHub Desktop | [Система контроля версий Git](./1), [Установка и настройка Git](./111) | [залить проект на GitHub](/lab/Примеры/1123#как-залить-проект-на-github-с-нуля) |
| Ежедневный цикл | [Как работать с Git](./112) | [git add, commit, push](/lab/Примеры/1123#git-add-git-commit-git-push--пример-для-начинающих) |
| Ветка для лабы / PR | [Ветвление и слияние в Git](./113) | [ветка фичи](/lab/Примеры/1123#ветка-фичи-для-задания-или-функции) |
| Ошибка push, конфликт | [Типовые ситуации с Git](./1141) | [push отклонён](/lab/Примеры/1123#ошибка-при-push-rejected-non-fast-forward), [merge](/lab/Примеры/1123#git-merge--конфликт-слияния) |
| `.gitignore`, секреты | [Файл .gitignore](./116) | [шаблоны](/lab/Примеры/2) |
| CI после push / PR | [Ветвление и слияние в Git](./113), [DevOps CI](/encyclopedia/8-infra-security/8-04-devops-ci-cd/intro) | [GitHub Actions — рецепты](/lab/Примеры/1134) |

---

## Углубление — раздел "Забота о коде и данных" (8.03)

Статьи ниже в **4.13** заточены под ежедневную работу разработчика. Если нужны протоколы `clone`/`push`, внутреннее устройство объектов, жёстко регламентированное ветвление релизов или расширенный список команд — смотрите блок **8.03** ([о разделе](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/intro)):

| Тема | Куда читать |
|------|-------------|
| Рабочая копия, индекс, объекты, `git status` | [Архитектура Git](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/111) |
| Хэши, packfile, внутренности | [Внутреннее устройство Git](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/112) |
| Протоколы, remotes, упаковка | [Особенности репозиториев](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/113) |
| Команды "на каждый день" | [12 команд — карманный набор](./115#12-komand) · [расширенный справочник](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/114) |
| Модель `main` / `develop` / `release` / `hotfix` | [Модель ветвления GitFlow](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/1111) |

Ветки, конфликты и запросы на слияние с примерами — в [Ветвление и слияние](./113).

---

## Справочник "что делать, если…"

Глава **[Типовые ситуации с Git](./1141)** — отдельная точка входа, когда что-то пошло не так. Краткий указатель:

| Тема | Примеры |
|------|---------|
| Коммиты и индекс | [забытый файл](./1141#дополнить-или-исправить-последний-коммит), [`add -p`](./1141#выборочный-stage-часть-файла), [разбить коммиты](./1141#разделить-изменения-на-несколько-коммитов) |
| Ветки | [не та ветка](./1141#изменения-в-неверной-ветке), [коммит в `main`](./1141#закоммитил-в-main-нужна-отдельная-ветка), [`stash`](./1141#временно-спрятать-правки-stash) |
| Сервер | [push отклонён](./1141#push-отклонён-non-fast-forward), [неверный `pull`](./1141#pull-из-неправильной-ветки), [сброс к `origin`](./1141#сбросить-локальную-ветку-к-серверу) |
| Merge / rebase | [трёхстороннее слияние](./113#trehstoronnee-sliyanie), [merge и rebase](./113#merge-i-rebase), [отменить merge](./1141#отменить-слияние-merge), [конфликт rebase](./1141#конфликт-при-rebase) |
| Потеря данных | [`reset --hard`](./1141#после-git-reset---hard), [`reflog`](./1141#не-понимаю-что-произошло), [удалённая ветка](./1141#удалена-локальная-ветка) |
| Отладка | [`bisect`](./1141#найти-коммит-который-всё-сломал-bisect), [cherry-pick](./1141#перенести-один-коммит-cherry-pick) |
| Безопасность | [секрет в Git](./1141#секрет-или-конфиденциальный-файл-в-git) → также [Файл .gitignore](./116) |

Тренажёр веток: [Learn Git Branching](https://learngitbranching.js.org/?locale=ru_RU).

Практика выкладки статического сайта после `git push` — лабораторный кейс ["Размещение своего сайта с GitHub Pages"](/lab/Кейсы/3) (HTTPS/SSH, `.gitignore`, деплой через Actions). Готовые блоки команд по ситуациям — [Git — шпаргалка сценариев](/lab/Примеры/1123) в разделе "Примеры".

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**Первый коммит** — [Как работает компьютер — о разделе](/encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/intro), [Терминал — о разделе](/encyclopedia/2-system-network/2-05-terminal/intro), [Программа — о разделе](/encyclopedia/1-basics/1-19-programma/intro), [Код — о разделе](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/intro), [Python — о разделе](/encyclopedia/5-languages/5-02-python/intro), [Разработка и отладка — о разделе](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/intro).

**База программиста** — [Десктопные приложения — о разделе](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/intro), [Разработка и отладка — о разделе](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/intro), [ORM и работа с данными — о разделе](/encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro), [Автоматическое управление памятью](/encyclopedia/4-code-dev/4-15-sborka-musora/1), [Зависимости — о разделе](/encyclopedia/4-code-dev/4-09-zavisimosti/intro), [Low-code и No-code платформы](/encyclopedia/8-infra-security/8-02-low-code-no-code/1).

**Соло / инди-разработчик** — [Личный профиль и портфолио разработчика](/encyclopedia/1-basics/1-26-karera-v-it-i-mify/7), [Python — о разделе](/encyclopedia/5-languages/5-02-python/intro), [Маркетинг и распространение — о разделе](/encyclopedia/1-basics/1-28-marketing-i-rasprostranenie/intro), [HTML — о разделе](/encyclopedia/3-data-markup/3-09-html/intro), [Удаленная работа — о разделе](/encyclopedia/1-basics/1-27-udalennaya-rabota/intro), [Разработка игр — о разделе](/encyclopedia/9-spinoff/9-04-razrabotka-igr/intro).

{/* /sidebar-collections */}

---
