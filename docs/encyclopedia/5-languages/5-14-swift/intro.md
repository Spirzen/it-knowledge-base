---
title: Swift — о разделе
description: "Раздел про язык Swift и разработку под экосистему Apple (и смежные сценарии: сервер, скрипты, Linux)."
sidebar_label: Swift — о разделе
related:
  - title: "Rust — о разделе"
    doc: encyclopedia/5-languages/5-13-rust/intro
  - title: "Lua и Luau — о разделе"
    doc: encyclopedia/5-languages/5-15-lua-i-luau/intro
  - title: "Groovy — о разделе"
    doc: encyclopedia/5-languages/5-12-groovy/intro
  - title: "Cobol — о разделе"
    doc: encyclopedia/5-languages/5-16-starye-yazyki/Cobol/intro
  - title: "Kotlin — о разделе"
    doc: encyclopedia/5-languages/5-09-kotlin/intro
  - title: "Справочник по Android"
    doc: encyclopedia/2-system-network/2-01-operatsionnaya-sistema/81
  - title: "Справочник по iOS"
    doc: encyclopedia/2-system-network/2-01-operatsionnaya-sistema/71
  - title: "Мобильные игры"
    doc: encyclopedia/9-spinoff/9-04-razrabotka-igr/122
---

import DocCardList from '@theme/DocCardList';
import FirstProgramPlay from '@site/src/components/FirstProgramPlay';
import SyntaxComparePlay from '@site/src/components/SyntaxComparePlay';

# О разделе

Раздел про язык **Swift** и разработку под экосистему Apple (и смежные сценарии: сервер, скрипты, Linux). Сильные стороны — опционалы, протоколы, `async`/`await` и безопасность типов.

**SwiftUI** разбирается в [первой программе](./20.md) и [фреймворках](./15.md). Статья [жизненный цикл](./21.md) — про сцены, `@main` и состояния приложения.

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

---

## Рекомендуемый порядок чтения

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 0 | [Что нужно знать перед Swift](./1001.md) | Фундамент (по желанию) |
| 1 | [История](./1.md) | Objective-C, эволюция, факты из открытых источников |
| 2 | [Основы](./11.md) → [Синтаксис](./12.md) → [Типы](./13.md) → [Управление](./14.md) | База языка |
| 3 | [Параметры](./23.md) → [Pattern matching](./24.md) → [Property wrappers](./25.md) | Идиомы Swift |
| 4 | [ООП в разделе "Код"](/encyclopedia/4-code-dev/4-08-oop/intro) → [ООП](./102.md) → [Данные](./16.md) → [Async](./17.md) | struct/class, Codable |
| 5 | [Первая программа](./20.md) | Playground, Xcode, SwiftUI в обзоре |
| 6 | [Экосистема](./10.md) → [Фреймворки](./15.md) → [Жизненный цикл](./21.md) | Apple-стек |
| 7 | [Справочник](./3.md) → [Чек-лист](./999.md) | После курса |

По необходимости: [интерактивное изучение](./22.md), [популярные проекты](./19.md).

---

### Частые ошибки при старте

| Ошибка | Что делать |
|--------|------------|
| Частый `!` у опционалов | `if let` / `guard let` — [типы](./13.md) |
| Retain cycle в замыканиях | `[weak self]` — [ООП](./102.md), [async](./17.md) |

---

### Зачем этот раздел

Подборка по **Swift** в энциклопедии: синтаксис, первая программа и смежные темы. Пройдите один маршрут до конца, не смешивая несколько языков на старте.

---

### С чего начать

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Первая программа](./20.md) | Запуск и синтаксис |
| 2 | [SwiftUI](./21.md) | Углубление |

---

### Частые ошибки при старте

| Ошибка | Что делать |
|--------|------------|
| Прыжки между языками | Закройте одну "первую программу", потом сравнивайте |
| Код без запуска | Выполните пример локально |
| Сразу большой фреймворк | Сначала база раздела, потом REST/UI |

---

### Что попробовать

1. Шаг 1 из таблицы.
2. Три непонятных термина — найдите статьи в оглавлении раздела.
3. Другой язык — только после своей рабочей первой программы.

---

<FirstProgramPlay language="swift" />

<SyntaxComparePlay />

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока "С чего начать?" на главной. Соседние шаги того же маршрута:

**Бэкенд и серверная разработка** — [Rust — о разделе](/encyclopedia/5-languages/5-13-rust/intro), [Lua и Luau — о разделе](/encyclopedia/5-languages/5-15-lua-i-luau/intro), [Groovy — о разделе](/encyclopedia/5-languages/5-12-groovy/intro), [Cobol — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/Cobol/intro), [Ruby — о разделе](/encyclopedia/5-languages/5-11-ruby/intro), [Fortran — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/Fortran/intro).

**Мобильная разработка** — [Kotlin — о разделе](/encyclopedia/5-languages/5-09-kotlin/intro), [Справочник по Android](/encyclopedia/2-system-network/2-01-operatsionnaya-sistema/81), [Справочник по iOS](/encyclopedia/2-system-network/2-01-operatsionnaya-sistema/71), [Мобильные игры](/encyclopedia/9-spinoff/9-04-razrabotka-igr/122), [Особенности тестирования мобильных приложений](/encyclopedia/7-project/7-05-testirovanie/124), [Беспроводные технологии - Bluetooth, Zigbee, NFC](/encyclopedia/2-system-network/2-10-zhelezo/119).

{/* /sidebar-collections */}

---
