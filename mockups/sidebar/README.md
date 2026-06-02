# Макеты сайдбара «Вселенная IT»

Автономные HTML/CSS — **без Docusaurus и без сборки**. Откройте [index.html](./index.html) или любой вариант в браузере.

## Зачем

На проде сайдбар — это **Docusaurus + Infima** (`menu__*`, `theme-doc-sidebar-*`) плюс ваши доработки:

- фильтр и быстрые чипы в `src/theme/DocSidebar/Desktop/Content/index.tsx`;
- resize, автоширина, стили в `src/css/custom.css`.

Макеты отвечают на вопрос: **как сделать красивее, не ломая стек** — без смены генерации `sidebars.js`, без новых фреймворков.

## Варианты

| Файл | Идея | Перенос |
|------|------|---------|
| [01-rail-accent.html](./01-rail-accent.html) | Рейка слева, спокойный active, иерархия разделов | `custom.css`, убрать `activeLinkPulse` |
| [02-cosmic-glass.html](./02-cosmic-glass.html) | Стекло + glow в тёмной теме | `[data-theme='dark']` / `design-cosmic-void` |
| [03-tree-guide.html](./03-tree-guide.html) | Дерево с линиями для вложенности | псевдоэлементы на `.menu__list .menu__list` |
| [04-section-cards.html](./04-section-cards.html) | Карточка на каждый раздел верхнего уровня | `> .menu__list > .menu__list-item` |
| [05-ide-explorer.html](./05-ide-explorer.html) | Тёмный explorer (VS Code) | опционально `html[data-sidebar-style="ide"]` |
| **[06-cosmic-explorer.html](./06-cosmic-explorer.html)** | **02 + 05:** космос + SVG папки/файлы, презентабельно | `html[data-sidebar-style="cosmic-explorer"]` + `custom.css` |

## Что не меняется

- DOM-структура меню Docusaurus (`menu__list`, `menu__link`, `menu__caret`, collapsible categories).
- Логика фильтра, resize-handle, мобильный drawer.
- `sidebars.ts` / автогенерация из `docs/`.

## Как перенести в проект

1. Выберите макет (или смешайте: рейка из 01 + дерево из 03).
2. Скопируйте блок `<style>` в `src/css/custom.css` (или отдельный `sidebar-theme.css` с `@import`).
3. Замените селектор `.sidebar-tools` на продакшен-вариант:
   - `nav.menu.thin-scrollbar > div:first-child` — блок поиска без правки React;
   - или добавьте глобальный класс `it-sidebar-tools` на обёртку в `Content/index.tsx` (одна строка, удобнее сопровождать).
4. Для чипов: `.sidebarQuickFilter` уже в CSS module — дублируйте стили через `:global(.sidebarQuickFilter)` или вынесите общие правила в `custom.css` по селектору `nav.menu button` внутри первого `div`.

### Рекомендация по текущему сайту

Сейчас в `custom.css` у `.menu__link--active` есть **пульсация** (`activeLinkPulse`). В макете **01** она отключена — обычно так читается легче на тысячах статей.

Если нравятся **02** (космос) и **05** (иконки) — смотрите **06 Cosmic Explorer**: те же классы `menu__*`, иконки через `::before` и data-URI (без эмодзи и без правки React).

## Файлы

- `base.css` — общая оболочка (navbar + docRoot + статья).
- `demo-menu.html` — эталонная разметка меню (для копирования).
- `01` … `05` — визуальные темы поверх той же разметки.
