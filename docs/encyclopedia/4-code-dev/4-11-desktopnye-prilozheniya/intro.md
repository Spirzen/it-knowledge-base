---
title: Десктопные приложения — о разделе
description: "Подборка материалов раздела Десктопные приложения в энциклопедии Вселенная IT."
sidebar_label: Десктопные приложения — о разделе
related:
  - title: "ORM и работа с данными — о разделе"
    doc: encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro
  - title: "Основы работы с Git — о разделе"
    doc: encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/intro
  - title: "Зависимости — о разделе"
    doc: encyclopedia/4-code-dev/4-09-zavisimosti/intro
  - title: "Разработка и отладка — о разделе"
    doc: encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

### Зачем этот раздел

**Десктоп** — программы, которые работают на компьютере пользователя: окна, меню, доступ к файлам и устройствам без браузера. Здесь собраны архитектура GUI, выбор стека (нативный, Electron, WebView, Qt, Tkinter) и практики: потоки, память, установщики.

Если вы уже пишете веб на [React](/encyclopedia/5-languages/5-01-javascript/272) или бэкенд на [Node](/encyclopedia/5-languages/5-01-javascript/262), десктоп — логичный следующий шаг для утилит и внутренних инструментов.

---

### С чего начать

| Шаг | Материал |
|-----|----------|
| 1 | [Архитектура десктопных приложений](./1.md) — окно, UI-поток, события |
| 2 | [Особенности разработки](./112.md) — многопоточность, ресурсы |
| 3 | Стек по языку | Python: [Tkinter](/encyclopedia/5-languages/5-02-python/3111) · C#: [MAUI](/encyclopedia/5-languages/5-05-csharp/4513) · C++: [Qt](/encyclopedia/5-languages/5-06-cpp/2731) · JS: [Electron](./114.md) |

---

### Частые ошибки при старте

| Ошибка | Что делать |
|--------|------------|
| Electron "на всякий случай" | Для утилиты хватит [Tkinter](/encyclopedia/5-languages/5-02-python/3111) или нативного UI |
| Блокировка UI-потока | Сначала [112](./112.md) |
| Сразу Store без MSIX | Сначала локальная сборка, потом [117](./117.md) |

---

### Что попробовать после intro

1. Откройте [архитектуру](./1.md) и пройдите симулятор окна.
2. Выберите один стек: [Electron](./114.md) *или* [Python Tkinter](/encyclopedia/5-languages/5-02-python/3111) *или* [Qt](/encyclopedia/5-languages/5-06-cpp/2731).
3. Прочитайте [112](./112.md) про UI-поток — применимо ко всем стекам.

---

### Все статьи раздела

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока "С чего начать?" на главной. Соседние шаги того же маршрута:

**База программиста** — [ORM и работа с данными — о разделе](/encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro), [Основы работы с Git — о разделе](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/intro), [Зависимости — о разделе](/encyclopedia/4-code-dev/4-09-zavisimosti/intro), [Разработка и отладка — о разделе](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/intro), [Объектно-ориентированное программирование — о разделе](/encyclopedia/4-code-dev/4-08-oop/intro), [Автоматическое управление памятью](/encyclopedia/4-code-dev/4-15-sborka-musora/1).

{/* /sidebar-collections */}

---
