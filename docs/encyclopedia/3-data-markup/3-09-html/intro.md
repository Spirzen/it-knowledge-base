---
title: HTML — о разделе
description: "HTML — каркас страницы: заголовки, абзацы, ссылки, формы. Стили добавляет CSS, поведение кнопок — JavaScript."
sidebar_label: HTML — о разделе
related:
  - title: "Веб-браузеры"
    doc: encyclopedia/1-basics/1-11-soft-ryadovogo-polzovatelya/3
  - title: "JavaScript — о разделе"
    doc: encyclopedia/5-languages/5-01-javascript/intro
  - title: "Веб-сайты и веб-приложения — о разделе"
    doc: encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/intro
  - title: "CSS — о разделе"
    doc: encyclopedia/3-data-markup/3-10-css/intro
  - title: "HTML + CSS — готовые макеты"
    doc: lab/examples/110
  - title: "HTML-страницы целиком"
    doc: lab/examples/1153
  - title: "Tailwind — готовые блоки"
    doc: lab/examples/1117
  - title: "React — компоненты-рецепты"
    doc: lab/examples/1146
  - title: "CSS-анимации — готовые эффекты"
    doc: lab/examples/1116
  - title: "UI-паттерны из Uiverse (Galaxy)"
    doc: lab/examples/1155
  - title: "SVG — рисунки кодом"
    doc: lab/examples/1119
  - title: "DevTools в браузере — справочник"
    doc: encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/1116
  - title: "Python — о разделе"
    doc: encyclopedia/5-languages/5-02-python/intro
---

import ExternalPlayEmbed from '@site/src/components/ExternalPlayEmbed';


import DocCardList from '@theme/DocCardList';

# О разделе

**Длинные листинги (от ~15 строк)** вынесены в каталог [code.spirzen.ru](https://code.spirzen.ru/) и подгружаются в статьях через `ExternalCodeEmbed` — так HTML энциклопедии не раздувается, а код остаётся с подсветкой, вкладками и сериями "шаг 1…N". Короткие фрагменты (один тег, атрибут, пара строк разметки) по-прежнему прямо в markdown.

HTML — **каркас** страницы — заголовки, абзацы, ссылки, формы. Стили добавляет CSS, поведение кнопок — JavaScript. Проверка разметки в браузере — [DevTools в браузере](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/1116) (вкладка Elements). Связь с формулировками рунета — [9.10 / 133](/encyclopedia/9-spinoff/9-10-internet-kultura/133). Разметка описывает **гипертекст** — электронный текст со ссылками между документами; теория терминов (веб-страница, статика и динамика, гиперссылки) — в [основах HTML](./1.md). Сервер дополняет каркас данными — [PHP — о разделе](/encyclopedia/5-languages/5-07-php/intro). В статьях энциклопедии дополнительно используют **callout** (выноски на `<div>`) и **`<details>`** — см. [основы HTML](./1.md#callout-i-details).

<div class="callout callout--tip">
  <div class="callout-title">Официальная документация</div>

  <div class="callout-body">
  Статьи раздела учат разметке; при споре о тегах, атрибутах и Web API сверяйтесь с эталоном:

  [MDN: HTML](https://developer.mozilla.org/ru/docs/Web/HTML) · [WHATWG HTML Living Standard](https://html.spec.whatwg.org/) · [подборка документации](/tools/documentation/2).
  </div>
</div>

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база — **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный** и **машинный код**; HTML — тоже текстовый код, который читает браузер.

> **Теория операций в коде:** [Операторы](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/33) — пригодится для [CSS](/encyclopedia/3-data-markup/3-10-css/intro) и [JavaScript](/encyclopedia/5-languages/5-01-javascript/intro); в самой разметке HTML отдельной системы операторов нет.

> **Логика на странице** (вызов функций, обработчики событий): [функции в коде](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/4), практика — [JavaScript](/encyclopedia/5-languages/5-01-javascript/15).

> **Локализация в HTML:** для мультиязычных страниц сразу закладывайте `lang`, при смешении направлений письма применяйте `dir`, а для служебных фрагментов (`бренды`, `команды`, `код`) используйте `translate="no"`.

> **Ускорение навигации:** `<script type="speculationrules">` (Speculation Rules API) позволяет заранее готовить следующую страницу — переход по ссылке ощущается заметно быстрее.

<ExternalPlayEmbed example="data-markup/beginner-web-stack-hub" title="Веб-стек для новичка" minHeight={520} playProps={{ defaultTab: 'html' }} />

<ExternalPlayEmbed example="system-network/web-page-layers-play" title="Слои веб-страницы" />

> **Практика целых страниц.** Готовые файлы от `DOCTYPE` до `footer` с разбором тегов (статья, таблица, форма, портфолио): [HTML-страницы целиком](/lab/Примеры/1153). После каркаса — макеты HTML+CSS (центрирование, сетка, адаптив): [HTML + CSS — готовые макеты](/lab/Примеры/110). **Векторные рисунки** в `<svg>` — квадрат, домик, цветок, снежинка с разбором строк: [SVG — рисунки кодом](/lab/Примеры/1119). Тот же каркас на **Tailwind** (классы в `class="..."`, CDN без сборки): [Tailwind — готовые блоки](/lab/Примеры/1117). **Анимации** — fade, спиннер, hover: [CSS-анимации — готовые эффекты](/lab/Примеры/1116). **Отдельные UI-блоки** (кнопки, switch, tooltip, skeleton по мотивам [Uiverse / Galaxy](/lab/Примеры/1155)) — после [типовых элементов в CSS](/encyclopedia/3-data-markup/3-10-css/113). Когда макет понятен, перенесите его в компоненты — [React — компоненты-рецепты](/lab/Примеры/1146) (лендинг, форма, modal).

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**Веб-разработка** — [Веб-браузеры](/encyclopedia/1-basics/1-11-soft-ryadovogo-polzovatelya/3), [JavaScript — о разделе](/encyclopedia/5-languages/5-01-javascript/intro), [Веб-сайты и веб-приложения — о разделе](/encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/intro), [CSS — о разделе](/encyclopedia/3-data-markup/3-10-css/intro), [Сеть и интернет — о разделе](/encyclopedia/2-system-network/2-03-set-i-internet/intro), [PHP — о разделе](/encyclopedia/5-languages/5-07-php/intro).

**Соло / инди-разработчик** — [Python — о разделе](/encyclopedia/5-languages/5-02-python/intro), [Разработка игр — о разделе](/encyclopedia/9-spinoff/9-04-razrabotka-igr/intro), [Основы работы с Git — о разделе](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/intro), [Разработка — о разделе](/tools/development/intro), [Личный профиль и портфолио разработчика](/encyclopedia/1-basics/1-26-karera-v-it-i-mify/7), [IDE](/tools/development/1).

{/* /sidebar-collections */}

---
