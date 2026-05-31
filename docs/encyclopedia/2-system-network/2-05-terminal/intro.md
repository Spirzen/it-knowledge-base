---
title: Терминал — о разделе
description: "Раздел про командную строку и терминал: зачем нужен текстовый интерфейс, как запускать оболочки в Windows и Linux, базовые команды и автоматизация."
sidebar_label: Терминал — о разделе
related:
  - title: "Исполняемые файлы и архивы — о разделе"
    doc: encyclopedia/1-basics/1-20-ispolnyaemye-fayly-i-arhivy/intro
  - title: "Основы информационной безопасности — о разделе"
    doc: encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro
  - title: "Программа — о разделе"
    doc: encyclopedia/1-basics/1-19-programma/intro
  - title: "Основы интеграционного взаимодействия — о разделе"
    doc: encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro
  - title: "Платформы — о разделе"
    doc: encyclopedia/2-system-network/2-02-platformy/intro
  - title: "Системное администрирование — о разделе"
    doc: encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/intro
  - title: "Операционная система — о разделе"
    doc: encyclopedia/2-system-network/2-01-operatsionnaya-sistema/intro
  - title: "Выполнение кода — о разделе"
    doc: encyclopedia/4-code-dev/4-03-vypolnenie-koda/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел про **командную строку и терминал**: зачем нужен текстовый интерфейс, как запускать оболочки в Windows и Linux, базовые команды и автоматизация. Для Windows центральный инструмент администрирования — **PowerShell**; углублённый язык и синтаксис — в разделе [5.26 PowerShell](/encyclopedia/5-languages/5-26-powershell/intro).

---

## С чего начать в энциклопедии

Общая база для всех платформ:

1. [Запуск и перезапуск приложений](/encyclopedia/1-basics/1-12-sovety-dlya-novichka/13) — когда держать окно терминала открытым, `npm run dev`, утилиты из `cd`.
2. [Что такое терминал](/encyclopedia/2-system-network/2-05-terminal/1) — терминал vs оболочка, CMD, PowerShell, Bash, потоки ввода-вывода.
3. [Опасные скрипты](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/101) — стоп-лист перед `rm`, pipe в bash и командами от ИИ-агента.
4. [Знаки препинания в командной строке](/encyclopedia/2-system-network/2-05-terminal/11) — `|`, `>`, `&&`, кавычки, переменные; [напоминалка по скобкам Bash](/encyclopedia/2-system-network/2-05-terminal/11#napominalka-bash) — `()`, `{}`, `$()`, `[[ ]]`.

**Маршрут Windows:** [справочник команд](/encyclopedia/2-system-network/2-05-terminal/102) → [bat-сценарии](/encyclopedia/2-system-network/2-05-terminal/103) → [PowerShell](/encyclopedia/2-system-network/2-05-terminal/112).

**Продакшен-автоматизация (Windows):** [124](/encyclopedia/5-languages/5-26-powershell/124) → [125](/encyclopedia/5-languages/5-26-powershell/125) → [126](/encyclopedia/5-languages/5-26-powershell/126) → [127](/encyclopedia/5-languages/5-26-powershell/127) → [128](/encyclopedia/5-languages/5-26-powershell/128) → [112](/encyclopedia/2-system-network/2-05-terminal/112) → [111](/encyclopedia/5-languages/5-26-powershell/111).

**Маршрут Linux / macOS:** [справочник и напоминалка команд](/encyclopedia/2-system-network/2-05-terminal/101#napominalka) (включая [дерево каталогов FHS](/encyclopedia/2-system-network/2-05-terminal/101#fhs-katalogi)) → [скрипты Unix](/encyclopedia/2-system-network/2-05-terminal/111).

**Удалённый сервер, HTTP и сборка:** [PuTTY и SSH](/encyclopedia/2-system-network/2-05-terminal/1131) · [утилита curl](/encyclopedia/2-system-network/2-05-terminal/1133) (запросы к API и сайтам из консоли) · [утилита make](/encyclopedia/2-system-network/2-05-terminal/1132) (оркестрация команд по Makefile, не замена shell).

**Мастер-таблица CLI:** [справочник утилит и исполняемых файлов](/encyclopedia/2-system-network/2-05-terminal/114) — **500+** команд по всему стеку (оболочки, языки, DevOps, СУБД, облака, ИИ, пакетные менеджеры).

Справочники **101**, **102** и **114** удобнее открывать по задаче, а не читать подряд. Итоги раздела — [статья 2](/encyclopedia/2-system-network/2-05-terminal/2), самопроверка — [чек-лист](/encyclopedia/2-system-network/2-05-terminal/3).

---

## PowerShell — официальные материалы Microsoft

Документация вендора дополняет статьи раздела; при расхождении с учебным текстом приоритет у Learn.

| Ресурс | Назначение |
|--------|------------|
| [Документация PowerShell](https://learn.microsoft.com/ru-ru/powershell/) | Хаб: обзор, установка, примеры, модули |
| [Что такое PowerShell?](https://learn.microsoft.com/ru-ru/powershell/scripting/overview?view=powershell-7.6) | Три компонента: shell, язык, платформа управления |
| [Установка PowerShell](https://learn.microsoft.com/ru-ru/powershell/scripting/install/install-powershell?view=powershell-7.6) | `pwsh` на Windows/Linux/macOS |
| [Примеры для администрирования](https://learn.microsoft.com/ru-ru/powershell/scripting/samples/sample-scripts-for-administration?view=powershell-7.6) | Типовые задачи сисадмина |
| [Windows PowerShell ISE](https://learn.microsoft.com/ru-ru/powershell/scripting/windows-powershell/ise/introducing-the-windows-powershell-ise?view=powershell-7.6) | Графическая среда (устаревает; см. [статью 112](/encyclopedia/2-system-network/2-05-terminal/112)) |
| [PowerShell Gallery](https://www.powershellgallery.com/) | Репозиторий модулей сообщества |

Полный навигатор по языку: [5.26 — о разделе](/encyclopedia/5-languages/5-26-powershell/intro), [подборка документации](/tools/documentation/2).

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока "С чего начать?" на главной. Соседние шаги того же маршрута:

**База программиста** — [Исполняемые файлы и архивы — о разделе](/encyclopedia/1-basics/1-20-ispolnyaemye-fayly-i-arhivy/intro), [Основы информационной безопасности — о разделе](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro), [Программа — о разделе](/encyclopedia/1-basics/1-19-programma/intro), [Основы интеграционного взаимодействия — о разделе](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro), [Текст — о разделе](/encyclopedia/1-basics/1-15-tekst/intro), [Алгоритмы — о разделе](/encyclopedia/4-code-dev/4-01-algoritmy/intro).

**Системное программирование** — [Платформы — о разделе](/encyclopedia/2-system-network/2-02-platformy/intro), [Системное администрирование — о разделе](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/intro), [Операционная система — о разделе](/encyclopedia/2-system-network/2-01-operatsionnaya-sistema/intro), [Выполнение кода — о разделе](/encyclopedia/4-code-dev/4-03-vypolnenie-koda/intro), [Архитектура персонального компьютера](/encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/7), [Оптимизация размера и производительности приложений](/encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/3).

**Бэкенд и серверная разработка** — [Архитектура персонального компьютера](/encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/7), [Системное администрирование — о разделе](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/intro), [Данные и информация](/encyclopedia/1-basics/1-09-dannye-i-informatsiya/1), [Аутентификация и авторизация](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/111), [ORM и работа с данными — о разделе](/encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro), [Low-code и No-code платформы](/encyclopedia/8-infra-security/8-02-low-code-no-code/1).

**DevOps и инфраструктура** — [Основы DevOps](/encyclopedia/8-infra-security/8-04-devops-ci-cd/1), [Системное администрирование — о разделе](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/intro), [Модели и сервисы облачных технологий](/encyclopedia/8-infra-security/8-01-oblachnye-tehnologii/1), [Основы информационной безопасности — о разделе](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro), [Платформы — о разделе](/encyclopedia/2-system-network/2-02-platformy/intro), [Основы интеграционного взаимодействия — о разделе](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro).

{/* /sidebar-collections */}

---
