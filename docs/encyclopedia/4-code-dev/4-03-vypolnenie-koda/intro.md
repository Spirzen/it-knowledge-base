---
title: Выполнение кода — о разделе
description: "Подборка материалов раздела Выполнение кода в энциклопедии Вселенная IT."
sidebar_label: Выполнение кода — о разделе
related:
  - title: "Код — о разделе"
    doc: encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/intro
  - title: "Проект, структура и фреймворки — о разделе"
    doc: encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/intro
  - title: "Алгоритмы — о разделе"
    doc: encyclopedia/4-code-dev/4-01-algoritmy/intro
  - title: "Асинхронность — о разделе"
    doc: encyclopedia/4-code-dev/4-05-asinhronnost/intro
  - title: "Системное администрирование — о разделе"
    doc: encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/intro
  - title: "Оптимизация размера и производительности приложений"
    doc: encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/3
  - title: "Терминал — о разделе"
    doc: encyclopedia/2-system-network/2-05-terminal/intro
  - title: "Системное программирование на C++"
    doc: encyclopedia/5-languages/5-06-cpp/21
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел объясняет путь от **исходного кода** до работы программы на процессоре — память, стек, вызовы функций, циклы, условия, компиляция и виртуальные машины. Сложные механизмы по возможности даются **сначала на русском псевдокоде**, затем — схемами, интерактивами и примерами на конкретных языках (как справочник).

Пока программа лежит на диске, она в **энергонезависимой** памяти — статический набор инструкций. После запуска ОС копирует образ в **ОЗУ** и создаёт **процесс** ([как это делают на практике](/encyclopedia/1-basics/1-12-sovety-dlya-novichka/13) — exe, IDE, терминал, dev-сервер); процессор выполняет **машинные инструкции** по циклу **выборка → декодирование → исполнение** (fetch–decode–execute), пока процесс не завершится штатно или с ошибкой. Внутри процесса могут работать **потоки** — параллельные цепочки инструкций с общей памятью ([схема program → process → thread](/encyclopedia/1-basics/1-19-programma/1#programma-protsess-potok)). **JIT-компиляция** переводит часто используемый байт-код в нативный машинный код уже во время работы (JVM, .NET), сочетая переносимость и скорость.

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Выполнение программного кода](./1.md) | Жизненный цикл объекта и данных |
| 2 | [Процесс выполнения исходного кода](./2.md) | Вызов метода, стек, возврат |
| 3 | [Архитектура процессора](./3.md) | Стек, куча, регистры, инструкции |
| 4 | [Функции](./112.md), [циклы](./113.md), [условия](./114.md) | Управление потоком |
| 5 | [Переменные](./115.md) (типы, scope, namespace), [неопределённое поведение](./111.md) | Данные и границы языка |
| 6 | [Байт-код и VM](./314.md) | IR, P-код, Java, .NET, AOT и JIT |
| — | [Память процесса](./313.md) | Виртуальные адреса, сегменты, подкачка страниц |
| — | [Четыре модели развёртывания](/encyclopedia/1-basics/1-13-soft-prodvinutogo-polzovatelya/8#chetiryre-modeli-razvertyvaniya) | Bare metal, ВМ, контейнеры (отдельно от JVM/CLR) |

<div class="callout callout--tip">
  <div class="callout-title">До изучения языков</div>

  <div class="callout-body">
  Блоки "Справочно на …" можно читать как иллюстрацию идей. Базовые алгоритмы и блок-схемы — в [базовой информатике](/encyclopedia/1-basics/1-035-bazovaya-informatika/4)

  параллелизм на потоках — в [асинхронности](/encyclopedia/4-code-dev/4-05-asinhronnost/1) и [параллельных вычислениях](/encyclopedia/4-code-dev/4-16-parallelnye-vychisleniya/intro).
</div>
  </div>


<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока "С чего начать?" на главной. Соседние шаги того же маршрута:

**База программиста** — [Код — о разделе](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/intro), [Проект, структура и фреймворки — о разделе](/encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/intro), [Алгоритмы — о разделе](/encyclopedia/4-code-dev/4-01-algoritmy/intro), [Асинхронность — о разделе](/encyclopedia/4-code-dev/4-05-asinhronnost/intro), [Основы интеграционного взаимодействия — о разделе](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro), [Архитектура выполнения — о разделе](/encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya/intro).

**Системное программирование** — [Системное администрирование — о разделе](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/intro), [Оптимизация размера и производительности приложений](/encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/3), [Терминал — о разделе](/encyclopedia/2-system-network/2-05-terminal/intro), [Системное программирование на C++](/encyclopedia/5-languages/5-06-cpp/21), [Платформы — о разделе](/encyclopedia/2-system-network/2-02-platformy/intro), [C++ — о разделе](/encyclopedia/5-languages/5-06-cpp/intro).

{/* /sidebar-collections */}

---
