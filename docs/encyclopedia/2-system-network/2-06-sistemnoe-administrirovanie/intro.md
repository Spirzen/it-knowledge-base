---
title: Системное администрирование — о разделе
description: "Подборка материалов раздела Системное администрирование в энциклопедии Вселенная IT."
sidebar_label: Системное администрирование — о разделе
related:
  - title: "Софт рядового пользователя — о разделе"
    doc: encyclopedia/1-basics/1-11-soft-ryadovogo-polzovatelya/intro
  - title: "Основы информационной безопасности — о разделе"
    doc: encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro
  - title: "Советы для новичка — о разделе"
    doc: encyclopedia/1-basics/1-12-sovety-dlya-novichka/intro
  - title: "Операционная система — о разделе"
    doc: encyclopedia/2-system-network/2-01-operatsionnaya-sistema/intro
  - title: "Терминал — о разделе"
    doc: encyclopedia/2-system-network/2-05-terminal/intro
  - title: "Выполнение кода — о разделе"
    doc: encyclopedia/4-code-dev/4-03-vypolnenie-koda/intro
  - title: "Платформы — о разделе"
    doc: encyclopedia/2-system-network/2-02-platformy/intro
  - title: "Оптимизация размера и производительности приложений"
    doc: encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/3
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел про **эксплуатацию инфраструктуры**: кто и чем управляет в IT-среде, как ставят и настраивают ОС и серверы, как устроена сеть, резервное копирование, мониторинг и реакция на сбои. Материалы рассчитаны на разработчика и инженера, которым нужно понимать "что делает админ" и уметь базовую диагностику самостоятельно.

---

## С чего начать

| Этап | Статья | Содержание |
|------|--------|------------|
| 1 | [Администрирование](./1.md) | Роли, права, RBAC, кто такой sysadmin |
| 2 | [Установка и настройка ОС](./2.md) | ISO, UEFI/GPT, загрузка, переустановка |
| 3 | [ИТ-инфраструктура](./3.md) | Железо, софт, сеть; [четыре модели развёртывания](/encyclopedia/1-basics/1-13-soft-prodvinutogo-polzovatelya/8#chetiryre-modeli-razvertyvaniya), [типы storage](/encyclopedia/2-system-network/2-10-zhelezo/121.md) |
| 4 | [Windows Server — начало](./63.md) | Роли, отличия от клиентской Windows |
| 5 | [Настройка серверов](./4.md) | Первый DC, AD, DNS, PowerShell |
| 6 | [Рабочие станции](./5.md) | Подготовка ПК, ввод в домен |
| 7 | [Сеть и диагностика](./6.md) | IP, ping, порты, DNS, NAT |

Дальше — углубление: [планировщики](./8.md), [ошибки и логи](./9.md), [диагностика производительности Linux](./100.md), [Linux в админской практике](./93.md) (права `chmod` — [rwx и восьмеричный код](./93.md#linux-prava-rwx)), [рабочие столы GNU/Linux](./96.md), [Windows Store и «сборки»](./97.md), [жизненный цикл Windows](./95.md), [СУБД](./91.md), [мониторинг](./92.md), [GPO](./411.md), [сетевые аномалии](./31.md).

---

## Windows и Linux

- **Клиентская Windows** на ПК — жизненный цикл, переустановка, активация — [95](./95.md); пошаговая установка — [2](./2.md).
- **Корпоративный офис (СНГ)** в примерах часто описан через **Windows Server** и **Active Directory** — см. [4](./4.md), [5](./5.md), [411](./411.md).
- **Серверы и облако** нередко на **Linux** — [93](./93.md) (в т.ч. [дерево каталогов FHS](./93.md#fhs-napominalka), [rwx и chmod](./93.md#linux-prava-rwx)); **GNOME/KDE и споры DE** — [96](./96.md); сеть и диагностика — [6](./6.md); тормоза на хосте — [диагностика производительности](./100.md); шпаргалка shell-команд — [справочник Linux](/encyclopedia/2-system-network/2-05-terminal/101#napominalka).

---

## Восстановление данных и самопроверка

Подраздел [Восстановление данных](./data-restoring/intro.md). В конце раздела — [чек-лист](./99.md) и [итоги](./98.md).

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока "С чего начать?" на главной. Соседние шаги того же маршрута:

**Компьютерная грамотность** — [Софт рядового пользователя — о разделе](/encyclopedia/1-basics/1-11-soft-ryadovogo-polzovatelya/intro), [Основы информационной безопасности — о разделе](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro), [Советы для новичка — о разделе](/encyclopedia/1-basics/1-12-sovety-dlya-novichka/intro), [Операционная система — о разделе](/encyclopedia/2-system-network/2-01-operatsionnaya-sistema/intro), [Исполняемые файлы и архивы — о разделе](/encyclopedia/1-basics/1-20-ispolnyaemye-fayly-i-arhivy/intro), [Программа — о разделе](/encyclopedia/1-basics/1-19-programma/intro).

**Системное программирование** — [Терминал — о разделе](/encyclopedia/2-system-network/2-05-terminal/intro), [Выполнение кода — о разделе](/encyclopedia/4-code-dev/4-03-vypolnenie-koda/intro), [Платформы — о разделе](/encyclopedia/2-system-network/2-02-platformy/intro), [Оптимизация размера и производительности приложений](/encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/3), [Операционная система — о разделе](/encyclopedia/2-system-network/2-01-operatsionnaya-sistema/intro), [Системное программирование на C++](/encyclopedia/5-languages/5-06-cpp/21).

**Бэкенд и серверная разработка** — [Терминал — о разделе](/encyclopedia/2-system-network/2-05-terminal/intro), [Аутентификация и авторизация](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/111), [Архитектура персонального компьютера](/encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/7), [ORM и работа с данными — о разделе](/encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro), [Данные и информация](/encyclopedia/1-basics/1-09-dannye-i-informatsiya/1), [Low-code и No-code платформы](/encyclopedia/8-infra-security/8-02-low-code-no-code/1).

**Инфобез** — [Основы информационной безопасности — о разделе](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro), [Основы интеграционного взаимодействия — о разделе](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro), [Тестирование информационной безопасности](/encyclopedia/7-project/7-05-testirovanie/123), [Забота о коде и данных — о разделе](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/intro), [Контейнеризация и оркестрация — о разделе](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro), [Информационная безопасность — о разделе](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/intro).

Также: DevOps и инфраструктура.

{/* /sidebar-collections */}

---
