---
title: Программа — о разделе
description: "Подборка материалов раздела Программа в энциклопедии Вселенная IT."
sidebar_label: Программа — о разделе
related:
  - title: "Основы компьютерной грамотности"
    doc: encyclopedia/1-basics/1-035-bazovaya-informatika/101
  - title: "Компиляторы и интерпретаторы"
    doc: encyclopedia/1-basics/1-19-programma/2
  - title: "Код и разработка"
    doc: encyclopedia/4-code-dev/code-dev
  - title: "Алгоритм"
    href: /glossary/А#алгоритм
  - title: "Как работает компьютер — о разделе"
    doc: encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/intro
  - title: "Исполняемые файлы и архивы — о разделе"
    doc: encyclopedia/1-basics/1-20-ispolnyaemye-fayly-i-arhivy/intro
  - title: "Операционная система — о разделе"
    doc: encyclopedia/2-system-network/2-01-operatsionnaya-sistema/intro
  - title: "Советы для новичка — о разделе"
    doc: encyclopedia/1-basics/1-12-sovety-dlya-novichka/intro
  - title: "Текст — о разделе"
    doc: encyclopedia/1-basics/1-15-tekst/intro
  - title: "Базовые операции с данными — о разделе"
    doc: encyclopedia/1-basics/1-10-bazovye-operatsii-s-dannymi/intro
  - title: "Терминал — о разделе"
    doc: encyclopedia/2-system-network/2-05-terminal/intro
  - title: "Код — о разделе"
    doc: encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/intro
  - title: "Основы работы с Git — о разделе"
    doc: encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

Впервые за ПК — сначала [Основы компьютерной грамотности](/encyclopedia/1-basics/1-035-bazovaya-informatika/101): там же разбираются установка и запуск программ в бытовом смысле.

Раздел объясняет, что такое **программа** как инструкции для компьютера, как исходный код превращается в работающий **процесс**, и как программы связаны с операционной системой, настройками и жизненным циклом (установка, обновление).

Программа реализует [алгоритм](/glossary/А#алгоритм) — упорядоченные шаги решения задачи. Сами алгоритмы, синтаксис языков и архитектурные приёмы разбираются в [базовой информатике](/encyclopedia/1-basics/1-035-bazovaya-informatika/4) и в томе [Код и разработка](/encyclopedia/4-code-dev/code-dev); здесь фокус на **исполнении**, **типах ПО** и **взаимодействии с системой**.

### Как формулируют «программу»

В стандартах и учебниках встречаются два близких смысла — их полезно различать с первого дня:

| Смысл | Суть | Пример в жизни |
|-------|------|----------------|
| **Исполняемая программа** | Комбинация **инструкций и данных**, которую аппаратура может выполнять (ISO/IEC/IEEE 24765) | Файл `.exe`, модуль в ОЗУ, прошивка |
| **Исходный текст** | Синтаксическая единица **языка программирования** — определения и операторы для заданной задачи (ISO/IEC 2382-1) | `main.py`, проект в IDE |

В российском праве **программа для ЭВМ** — совокупность данных и команд в объективной форме для получения определённого результата на компьютере, включая подготовительные материалы разработки (ст. 1261 ГК РФ). Это юридическое определение; в быту «программа» чаще означает и приложение для пользователя, и файл на диске.

**Образ программы** обычно хранится в [исполняемом файле](/encyclopedia/1-basics/1-20-ispolnyaemye-fayly-i-arhivy/intro) на диске. По запросу пользователя **операционная система** загружает его в [оперативную память](/encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/3); **центральный процессор** выполняет инструкции до конца, ошибки или явного завершения. Работающая копия называется **процессом**; внутри неё — **потоки** как наименьшие единицы выполнения. Схема «диск → процесс → потоки» — в [вводной статье](/encyclopedia/1-basics/1-19-programma/1#programma-protsess-potok). При [многозадачности](/encyclopedia/4-code-dev/4-05-asinhronnost/1) ОС переключает процессы и потоки так быстро, что создаётся эффект одновременной работы нескольких программ; на многоядерных машинах они могут идти **параллельно** на разных ядрах ([параллельные вычисления](/encyclopedia/4-code-dev/4-16-parallelnye-vychisleniya/intro)).

**Прикладное ПО** решает задачи пользователя (документы, расчёты, игры). **Системное ПО** управляет ресурсами машины и создаёт среду для прикладных программ; главная часть — [операционная система](/encyclopedia/2-system-network/2-01-operatsionnaya-sistema/intro).

---

## Рекомендуемый порядок

0. [Основы компьютерной грамотности](/encyclopedia/1-basics/1-035-bazovaya-informatika/101) — если ещё не уверенно пользуетесь ПК, файлами и установкой софта.
1. [Запуск и перезапуск приложений](/encyclopedia/1-basics/1-12-sovety-dlya-novichka/13) — exe, IDE, терминал, dev-сервер, службы, Docker (практика для новичка).
2. [Что такое программа?](/encyclopedia/1-basics/1-19-programma/1) — базовые термины, компиляция и интерпретация, процесс.
3. [ПО и операционная система](/encyclopedia/1-basics/1-19-programma/111) — системное, прикладное, инструментальное ПО.
4. [Классификация программ](/encyclopedia/1-basics/1-19-programma/112) — утилиты, модули, службы, исполняемые файлы.
5. [Поведение программ](/encyclopedia/1-basics/1-19-programma/113) — конфигурация, зависимости, процессы и потоки.
6. [Установка и обновление](/encyclopedia/1-basics/1-19-programma/114) — версии, патчи, инсталляция и удаление.
7. [Взаимодействие с ОС](/encyclopedia/1-basics/1-19-programma/115) — системные вызовы, память, драйверы.

**Углубление (не обязательно с первого прохода):** [Компиляторы и интерпретаторы](/encyclopedia/1-basics/1-19-programma/2) — трансляторы, полный конвейер компиляции, байт-код, JIT.

**Мобильные приложения** — обзор в [статье 3](/encyclopedia/1-basics/1-19-programma/3); подробная разработка — в разделе [Мобильные приложения](/encyclopedia/4-code-dev/4-12-mobilnye-prilozheniya/intro).

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок «С чего начать?» на [главной](/). Соседние шаги того же маршрута:

**Первый коммит** — [Как работает компьютер — о разделе](/encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/intro), [Терминал — о разделе](/encyclopedia/2-system-network/2-05-terminal/intro), [Код — о разделе](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/intro), [Основы работы с Git — о разделе](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/intro), [Python — о разделе](/encyclopedia/5-languages/5-02-python/intro), [Разработка и отладка — о разделе](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/intro).

**Компьютерная грамотность** — [Основы компьютерной грамотности](/encyclopedia/1-basics/1-035-bazovaya-informatika/101), [Как работает компьютер — о разделе](/encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/intro), [Исполняемые файлы и архивы — о разделе](/encyclopedia/1-basics/1-20-ispolnyaemye-fayly-i-arhivy/intro), [Операционная система — о разделе](/encyclopedia/2-system-network/2-01-operatsionnaya-sistema/intro), [Советы для новичка — о разделе](/encyclopedia/1-basics/1-12-sovety-dlya-novichka/intro), [Софт рядового пользователя — о разделе](/encyclopedia/1-basics/1-11-soft-ryadovogo-polzovatelya/intro), [Системное администрирование — о разделе](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/intro).

**База программиста** — [Текст — о разделе](/encyclopedia/1-basics/1-15-tekst/intro), [Исполняемые файлы и архивы — о разделе](/encyclopedia/1-basics/1-20-ispolnyaemye-fayly-i-arhivy/intro), [Базовые операции с данными — о разделе](/encyclopedia/1-basics/1-10-bazovye-operatsii-s-dannymi/intro), [Терминал — о разделе](/encyclopedia/2-system-network/2-05-terminal/intro), [Данные и информация — о разделе](/encyclopedia/1-basics/1-09-dannye-i-informatsiya/intro), [Основы информационной безопасности — о разделе](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro).

{/* /sidebar-collections */}

---
