---
title: Операционная система — о разделе
description: "Подборка материалов раздела Операционная система в энциклопедии Вселенная IT."
sidebar_label: Операционная система — о разделе
related:
  - title: "Исполняемые файлы и архивы — о разделе"
    doc: encyclopedia/1-basics/1-20-ispolnyaemye-fayly-i-arhivy/intro
  - title: "Советы для новичка — о разделе"
    doc: /encyclopedia/1-basics/1-035-bazovaya-informatika/intro
  - title: "Программа — о разделе"
    doc: encyclopedia/1-basics/1-19-programma/intro
  - title: "Софт рядового пользователя — о разделе"
    doc: /encyclopedia/1-basics/1-035-bazovaya-informatika/intro
  - title: "Архитектура персонального компьютера"
    doc: encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/7
  - title: "Платформы — о разделе"
    doc: encyclopedia/2-system-network/2-02-platformy/intro
  - title: "Принцип работы компьютера"
    doc: encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/1
  - title: "Терминал — о разделе"
    doc: encyclopedia/2-system-network/2-05-terminal/intro
  - title: "Управление службами в Windows"
    doc: encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/64
---

import ExternalPlayEmbed from '@site/src/components/ExternalPlayEmbed';


import DocCardList from '@theme/DocCardList';

# О разделе

Раздел объясняет, **как операционная система управляет железом** для множества программ — процессор, память, диски, сеть, права доступа. Материалы подходят и новичкам, и тем, кто готовит базу по курсу "Операционные системы".

Иллюстрации интерфейса Windows (рабочий стол, "Пуск", окна, проводник) — в [Windows / GUI](/encyclopedia/2-system-network/2-01-operatsionnaya-sistema/4) и [Основы компьютерной грамотности — компьютерная грамотность](/encyclopedia/1-basics/1-035-bazovaya-informatika/101#иллюстрации-для-других-статей).

Как одна ОС на сервере соседствует с **ВМ и контейнерами** — [четыре модели развёртывания](/encyclopedia/2-system-network/2-02-platformy/21#chetiryre-modeli-razvertyvaniya).

<ExternalPlayEmbed example="system-network/os-platforms-hub" title="Операционные системы — хаб" minHeight={520} />

---

## Два маршрута

### Маршрут A — "Понять ОС с нуля"

Для знакомства с Windows/Linux и повседневной работы.

1. [Операционные системы](./1) — что такое ОС, компоненты, загрузка  
2. [Ядро операционной системы](./3) — архитектуры, функции ядра  
3. [Классификация операционных систем](./2) — семейства и сценарии  
4. Платформы: [Windows](./4) · [Windows 11 — настройка и работа](./415) · [Linux](./5) · [Линус Торвальдс — ядро Linux и Git](./52) · [macOS](./6) · [Android](./8) · [iOS](./7)  
5. [Чек-лист самопроверки](./99)

---

### Маршрут B — "База курса по ОС"

Покрывает типичный syllabus — определение, история, требования, архитектура, процессы, синхронизация, тупики, память, I/O.

| № | Тема | Статья |
|---|------|--------|
| 1 | Определение, роль ОС | [Операционные системы](./1) |
| 2 | История и эволюция | [История операционных систем](./9), [Линус Торвальдс — ядро Linux и Git](./52) |
| 2б | Классификация, многозадачность | [Классификация операционных систем](./2) |
| 3 | Требования и подходы к реализации | [Требования к ОС и подходы к реализации](./10) |
| 4 | Архитектура ядра | [Ядро операционной системы](./3) |
| 5 | Процесс, состояния, жизненный цикл | [Жизненный цикл процесса в Linux](./5114), [Управление процессами в Linux](./5115) |
| 6 | Планирование CPU | [Планирование процессора — классические алгоритмы](./5117) |
| 7 | Многозадачность, гонки, критические секции | [Гонки, критические секции и разделяемая память](./5118) |
| 8 | Процедурная синхронизация (mutex, semaphore…) | [Гонки, критические секции и разделяемая память](./5118), [Управление процессами в Linux](./5115) |
| 9 | Тупики и защита | [Тупики (deadlock) и защита от них](./5119) |
| 10 | Методы управления памятью, разделы, свопинг | [Механизмы распределения памяти в ОС](./5116) |
| 11 | x86: сегменты, страницы, CR3 | [Механизмы распределения памяти в ОС](./5116) |
| 12 | Алгоритмы замещения страниц | [Алгоритмы замещения страниц](./5121) |
| 13 | Виртуальная память Windows, VirtualAlloc | [Работа памяти в Windows](./4111) |
| 14 | Ввод-вывод, файловые системы | [Подсистема ввода-вывода в ОС](./5120), [Устройство файловой системы Windows](./411) |
| 15 | Современные ОС и практика | [Справочник по Linux](./51), [Справочник по Windows 11](./41), [Windows 11 — настройка и работа](./415), [Windows](./4), [Управление памятью в Linux](./5112) |

После маршрута B пройдите [чек-лист](./99) — вопросы **81–125** (тематические блоки и практика).

---

## Блок "Процессы и память в Linux"

Углублённая линия для администрирования и backend:

- [Дескрипторы процессов](./5111)  
- [Жизненный цикл процесса](./5114)  
- [Управление процессами](./5115)  
- [Управление памятью в Linux](./5112)  
- [Механизмы распределения памяти](./5116)  
- [Загрузка Linux](./5113)  
- [Основы UNIX](./211)

---

## Смежные разделы энциклопедии

- [Как работает компьютер](/encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/intro) — железо, RAM, MMU в контексте машины  
- [Терминал](/encyclopedia/2-system-network/2-05-terminal/intro) — команды для работы с ОС  
- [Системное администрирование](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/1)  
- [Управление службами в Windows](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/64)  
- [Асинхронность в коде](/encyclopedia/4-code-dev/4-05-asinhronnost/intro) — не путать с планировщиком ОС, но те же идеи блокировок  

---

## Все статьи раздела

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**Компьютерная грамотность** — [Основы компьютерной грамотности](/encyclopedia/1-basics/1-035-bazovaya-informatika/101), [Исполняемые файлы и архивы — о разделе](/encyclopedia/1-basics/1-20-ispolnyaemye-fayly-i-arhivy/intro), [Советы для новичка — о разделе](/encyclopedia/1-basics/1-035-bazovaya-informatika/intro), [Программа — о разделе](/encyclopedia/1-basics/1-19-programma/intro), [Софт рядового пользователя — о разделе](/encyclopedia/1-basics/1-035-bazovaya-informatika/intro), [Как работает компьютер — о разделе](/encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/intro), [Системное администрирование — о разделе](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/intro).

**Системное программирование** — [Архитектура персонального компьютера](/encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/7), [Платформы — о разделе](/encyclopedia/2-system-network/2-02-platformy/intro), [Принцип работы компьютера](/encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/1), [Терминал — о разделе](/encyclopedia/2-system-network/2-05-terminal/intro), [Системное администрирование — о разделе](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/intro), [Выполнение кода — о разделе](/encyclopedia/4-code-dev/4-03-vypolnenie-koda/intro).

{/* /sidebar-collections */}

---
