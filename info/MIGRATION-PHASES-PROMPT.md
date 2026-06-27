# Промпт: миграция экосистемы «Вселенная IT» (фазы 2–4)

> **Как использовать:** скопируй блок «Промпт для агента» целиком в новый чат Cursor.  
> Рабочая папка: `f:\ITUniverse\` — соседние git-репозитории (не monorepo).

---

## Промпт для агента

```
Ты продолжаешь миграцию контента экосистемы «Вселенная IT» (spirzen.ru) на отдельные Astro-порталы (1 repo = 1 GitHub Pages domain).

## Архитектурные правила (не нарушать)

1. **Docusaurus только на spirzen.ru** — энциклопедия, контекст, философия, about.
2. **Контентные порталы — Astro** в отдельных repo: it-terms, it-lab, it-tools, it-games, it-kids.
3. **Перенос владения**, не вечный sync: после миграции `content/` в портале = источник правды. Sync из KB — только для первичного переноса и переходный период.
4. **URL path сохраняем** при смене домена:
   - terms: `/glossary/{буква}#{термин}` → terms.spirzen.ru
   - lab: `/lab/{категория}/{id}` → lab.spirzen.ru (в т.ч. кириллические сегменты: `/lab/Примеры/1133`)
5. **GitHub Pages = 1 custom domain на repo.** Monorepo it-portals больше не для контента — только хаб status.spirzen.ru.
6. **Интеграция KB ↔ порталы:** правка генераторов индексов + exclude из docs + external redirects (как сделано для glossary). Массовая правка `[[wiki]]` в MD не нужна — достаточно wikiLinkIndex.
7. **Мигрировать по одному порталу.** Не трогать lab/tools/games параллельно.

## Что уже сделано (фаза 1 — terms) ✅

Репо: **it-terms** → terms.spirzen.ru (prod работает).

В **it-knowledge-base**:
- `scripts/build-wiki-link-index.mjs` — glossary href → `https://terms.spirzen.ru/glossary/...`
- `scripts/lib/termsUrl.mjs`, `scripts/build-glossary-external-redirects.mjs`
- `docs/glossary/**` excluded из Docusaurus (`exclude: ['**/glossary/**']`)
- `src/data/glossaryExternalRedirects.json` — 140 redirect `/glossary/*` → terms
- sidebar/footer/главная → external link на terms
- doc-search-index без glossary (−69 страниц)
- `src/remark/wikiLink.js` — `/glossary` и `glossary/` → terms

Остаётся по terms (мелочи):
- [ ] Закрепить `content/glossary/` в it-terms как единственный источник правды (sync только на переход)
- [ ] Обновить `info/ECOSYSTEM.md` и itu-mobile-app `search-manifest.json` (paths glossary → terms URLs)
- [ ] Решить, когда удалить `docs/glossary/` из KB (после стабилизации)

Эталон для следующих фаз — **повторить паттерн terms** для каждого раздела.

---

## Фаза 2 — lab.spirzen.ru (ПРИОРИТЕТ)

Репо: **it-lab** (stub задеплоен, порт dev 4331).

### Масштаб контента в KB

`it-knowledge-base/docs/lab/` (~189 MD):
- intro, questions, tasks, cases, roadmap, examples, trainers, exams, experiments
- URL через frontmatter `slug` (часто кириллица): `slug: /lab/Примеры/1133`
- Много **MDX-паттернов**: `import ExternalPlayEmbed`, `ExternalCodeEmbed`, `LabTrainersHub`, `DocCardList`

### Задачи it-lab (портал)

1. **Sync:** `scripts/sync-lab.mjs` — копия из `it-portals/packages/sync/sync-lab.mjs` (mirror `docs/lab` → `content/lab`). Env: `IT_KB_ROOT=../it-knowledge-base`.
2. **Routing:** catch-all Astro `[...slug].astro` с резолвом slug из frontmatter (как terms `/glossary/[slug]`). Сохранить кириллические path.
3. **Markdown pipeline:**
   - frontmatter, related, wiki-links `[[...]]` (можно переиспользовать remark или пост-обработку)
   - **Критично:** заменить Docusaurus-компоненты:
     - `ExternalPlayEmbed` → iframe на play.spirzen.ru (postMessage как в KB)
     - `ExternalCodeEmbed` → iframe на code.spirzen.ru
     - `LabTrainersHub` → порт React island или упрощённый каталог тренажёров
     - `DocCardList` → навигация по подразделам lab
4. **Nav:** ecosystem-urls.json, PortalLayout (уже скопирован из terms).
5. **Build + CI:** package-lock.json есть, deploy.yml есть.

### Задачи it-knowledge-base (после prod lab)

Повторить terms-паттерн:
- `scripts/lib/labUrl.mjs` — `https://lab.spirzen.ru`
- `scripts/build-lab-external-redirects.mjs` — все slug из lab MD
- `exclude: ['**/lab/**']` в docusaurus docs
- sidebar: одна ссылка «Лаборатория» → lab.spirzen.ru/lab/intro
- doc-search-index: skip `lab/**`
- wikiLinkIndex: если есть lab-entries — external URLs (проверить, есть ли сейчас)
- footer, index.js, enrich-lab-crosslinks.mjs, mobile ContentCatalog

### Решения, которые нужно принять в начале фазы 2

| Вопрос | Варианты |
|--------|----------|
| exam.spirzen.ru / quiz.spirzen.ru | A) оставить разделы **внутри lab** (`/lab/exams`, `/lab/questions`) — рекомендуется; B) отдельные repo позже |
| MD vs MDX в lab | Конвертировать embed-страницы в `.mdx` Astro или HTML-компоненты в `.md` |
| Wiki-links в lab-статьях | Порт remark wikiLink или pre-render при sync |

### Критерии «фаза 2 готова»

- [ ] lab.spirzen.ru отдаёт контент, path совпадают с текущими (`/lab/Примеры/1133`)
- [ ] spirzen.ru/lab/* → redirect на lab.spirzen.ru
- [ ] ExternalPlayEmbed / ExternalCodeEmbed работают на lab
- [ ] sidebar KB → lab, поиск KB без lab
- [ ] `content/lab/` в it-lab — источник правды

---

## Фаза 3 — tools.spirzen.ru

Репо: **it-tools** (stub, порт 4334).

### Масштаб

`docs/tools/` (~76 файлов): development, data, documentation, games, multimedia, network, security, system, testing, automation, misc.

### Задачи

1. Sync `docs/tools` → `content/tools`
2. Routing: `/tools/{category}/{id}` — проверить slug в frontmatter
3. Особенность: `docs/tools/games/4.mdx` — может содержать embed
4. Связь с **html.spirzen.ru** (WebEditor) — статьи со ссылками на практику, не дублировать редактор
5. KB: exclude, redirects, sidebar, search — тот же паттерн

### Критерии

- [ ] tools.spirzen.ru live, redirects с spirzen.ru/tools/*
- [ ] Каталог инструментов + deep links из энциклопедии работают

---

## Фаза 4 — games.spirzen.ru + kids.spirzen.ru

Репо: **it-games** (4332), **it-kids** (4333) — stubs.

### Источник контента (решить перед стартом)

- **games:** spinoff encyclopedia `9-03`, `9-04`, `9-11` + возможно `docs/tools/games`
- **kids:** дорожные карты lab (`lab/roadmap`?), spinoff, отдельная детская тема UI

### Задачи

1. Инвентаризация: какие статьи переносим, какие остаются в encyclopedia со ссылками
2. games — два раздела на одном домене: «игры» + «gamedev» (если нужно)
3. kids — отдельная палитра/типографика (PortalLayout variant)
4. KB integration — паттерн terms/lab

---

## Смежные домены (не в scope текущих фаз, только учесть)

| Домен | Статус | Заметка |
|-------|--------|---------|
| status.spirzen.ru | ✅ it-portals | хаб + мониторинг |
| exam.spirzen.ru | stub? | возможно часть lab |
| quiz.spirzen.ru | stub? | возможно часть lab |
| search/color/schema/sql/writer/random | будущие | отдельные repo по мере готовности контента |

---

## Репозитории и порты

| Repo | Domain | Dev port |
|------|--------|----------|
| it-knowledge-base | spirzen.ru | 3000 |
| it-code-examples | code.spirzen.ru | 4321 |
| it-play | play.spirzen.ru | 4322 |
| it-terms | terms.spirzen.ru | 4330 |
| it-lab | lab.spirzen.ru | 4331 |
| it-games | games.spirzen.ru | 4332 |
| it-kids | kids.spirzen.ru | 4333 |
| it-tools | tools.spirzen.ru | 4334 |
| it-portals | status.spirzen.ru | 4335 |
| it-management | localhost | 8787 |

---

## Ключевые файлы для изучения

**Эталон миграции (terms):**
- `it-knowledge-base/scripts/build-wiki-link-index.mjs`
- `it-knowledge-base/scripts/build-glossary-external-redirects.mjs`
- `it-knowledge-base/scripts/lib/termsUrl.mjs`
- `it-knowledge-base/docusaurus.config.js` (exclude, redirects, termsUrl)
- `it-knowledge-base/sidebars.js`
- `it-terms/` — Astro portal, sync-glossary, `[slug].astro`

**Lab-specific (сложность):**
- `it-knowledge-base/docs/lab/examples/1133.md` — типичный slug + related
- `it-knowledge-base/docs/lab/examples/111.md` — ExternalPlayEmbed + code
- `it-knowledge-base/src/components/ExternalPlayEmbed.jsx`
- `it-knowledge-base/src/components/ExternalCodeEmbed.jsx`
- `it-knowledge-base/src/components/LabTrainersHub.jsx`
- `it-portals/packages/sync/sync-lab.mjs` (архив, перенести в it-lab)

**Документация:**
- `it-knowledge-base/info/ECOSYSTEM.md`
- `it-knowledge-base/info/wiki-links.md`
- `it-portals/docs/MIGRATION.md`

---

## Порядок работы агента (рекомендуемый)

1. Прочитать эталон terms + 2–3 lab-статьи с embed.
2. **Фаза 2 only:** реализовать it-lab MVP (routing + markdown + один embed).
3. Sync lab → build → deploy lab.spirzen.ru.
4. Интеграция KB (redirects, exclude, sidebar) — только после prod lab.
5. Smoke-test: redirects, embed, wiki-links, sidebar.
6. Не начинать tools/games до закрытия критериев фазы 2.

## Ограничения

- Не коммитить без явной просьбы пользователя.
- Не удалять `docs/lab/` из KB до проверки redirects.
- Не делать monorepo — только отдельные repo.
- Минимальный diff, следовать стилю существующего кода it-terms / it-knowledge-base.

Начни с **фазы 2 (lab)**: оцени объём MDX/embed, предложи план на 3–5 шагов, затем реализуй sync + routing + один proof-of-concept embed.
```

---

## Краткая шпаргалка по фазам

| Фаза | Repo | KB path | Главная сложность |
|------|------|---------|-------------------|
| 1 terms | it-terms | docs/glossary | ✅ готово |
| 2 lab | it-lab | docs/lab | MDX embed, кириллические slug |
| 3 tools | it-tools | docs/tools | каталог, ссылки на html.spirzen.ru |
| 4 games/kids | it-games, it-kids | encyclopedia spinoff + lab/roadmap | отбор контента, UI kids |

---

*Обновлено: 2026-06-27. После каждой фазы — обновить этот файл и `it-portals/docs/MIGRATION.md`.*
