import ExternalPlayEmbed from '@site/src/components/ExternalPlayEmbed';

---
title: "Clojure — о разделе"
description: "Черновик раздела Clojure — Lisp на JVM, функциональная модель и практические материалы."
sidebar_label: Clojure — о разделе
related:
  - title: "Java — о разделе"
    doc: encyclopedia/5-languages/5-03-java/intro
  - title: "Scala — о разделе"
    doc: encyclopedia/5-languages/5-18-scala/intro
  - title: "Haskell — о разделе"
    doc: encyclopedia/5-languages/5-17-haskell/intro
---

import DocCardList from '@theme/DocCardList';

# Clojure — о разделе

> **Черновик раздела.** Материалы будут дополняться; ниже — структура раздела, ключевые идеи и черновые статьи с уже полезным содержанием для старта.

**Clojure** — современный диалект [Lisp](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/intro), компилируемый в байткод JVM (также ClojureScript для JS и Clojure CLR для .NET). Язык сочетает:

- **неизменяемые** структуры данных (vector, map, set);
- **REPL-first** workflow — разработка через интерактивную консоль;
- **макросы** — расширение языка без форка компилятора;
- **interop с Java** — вызов любого Java-класса из Clojure.

Раздел ориентирован на Clojure на **JVM** (tools.deps, Leiningen, Clojure CLI).

Общая база — [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1).

| Материал | Зачем |
|----------|-------|
| [История языка](./1.md) | Rich Hickey, идеи immutability |
| [Первая программа](./7.md) | REPL, deps.edn, Hello World |
| [Java — о разделе](/encyclopedia/5-languages/5-03-java/intro) | Runtime и библиотеки |
| [Lisp — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/intro) | S-expressions и macros |

---

## Что такое Clojure простыми словами

<ExternalPlayEmbed example="data-markup/language-intro-play" title="Обзор Clojure" minHeight={520} playProps={{"topic":"clojure"}} />


<ExternalPlayEmbed example="languages/macro-expander-play" title="Macro expander" minHeight={420} />


Clojure работает на **JVM** — той же виртуальной машине, что и [Java](/encyclopedia/5-languages/5-03-java/intro). Вы пишете код в скобочной нотации Lisp, получаете доступ к миллионам Java-библиотек и деплоите JAR или uberjar.

Отличие от Java и [Scala](/encyclopedia/5-languages/5-18-scala/intro):

| Аспект | Java | Scala | Clojure |
|--------|------|-------|---------|
| Парадигма | ОО, классы | ОО + FP, типы | FP, данные + функции |
| Синтаксис | фигурные скобки | Scala-синтаксис | S-expressions `(f x y)` |
| Состояние | mutable поля | var/val, implicits | atoms, refs, immutability |
| REPL | вторичен | есть | центр workflow |

Clojure **прагматичен**: это функциональный язык на JVM, а не pure FP как [Haskell](/encyclopedia/5-languages/5-17-haskell/intro) — допускаются side effects через явные механизмы (`atom`, `IO` через host).

---

## Планируемое содержание

| № | Тема | Статус |
|---|------|--------|
| 1 | [История языка](./1.md) | черновик |
| 2 | Основы — синтаксис S-expressions, типы, коллекции | планируется |
| 3 | Функции, замыкания, lazy seq | планируется |
| 4 | STM, atoms, refs, agents | планируется |
| 5 | Макросы и метапрограммирование | планируется |
| 6 | Java interop, deps.edn, Leiningen | планируется |
| 7 | [Первая программа](./7.md) | черновик |
| 8+ | ClojureScript, Datomic, практикумы | планируется |

---

## Ключевые идеи раздела

### Неизменяемые коллекции

```clojure
(def users [{:id 1 :name "Anna"} {:id 2 :name "Bob"}])
(conj users {:id 3 :name "Carol"})  ; новая vector, старая не меняется
```

Persistent data structures дают structural sharing — новая версия переиспользует части старой без полного копирования.

### REPL как основной инструмент

Разработчик оценивает выражения в REPL, наращивает функции инкрементально, подключает namespace из файлов. Файл `.clj` служит модулем для организации кода; стартовать можно прямо из REPL.

### Identity и state

Изменяемое состояние во времени моделируют через **identity** (логическая сущность) и **state** (значение в момент времени):

- **atom** — swap! для одиночного значения;
- **ref** — транзакции STM;
- **agent** — асинхронные обновления.

Подробные статьи по concurrency — в планируемых главах 4–6.

### Java interop

```clojure
(.format (java.text.SimpleDateFormat. "yyyy-MM-dd") (java.util.Date.))
```

Любой Maven-артефакт из deps.edn доступен без генерации обёрток.

---

## Инструменты экосистемы

| Инструмент | Назначение |
|------------|------------|
| **Clojure CLI** | `clojure`, `clj`, deps.edn |
| **Leiningen** | Классический build, `lein new`, `lein repl` |
| **tools.deps** | Декларативные зависимости в EDN |
| **nREPL** | Сетевой REPL для IDE |
| **Calva / Cursive** | VS Code и IntelliJ |

Современные проекты часто начинают с **deps.edn**; legacy — Leiningen. Обе модели coexist — в [первой программе](./7.md) разобран Clojure CLI.

---

## ClojureScript и смежные темы (план)

**ClojureScript** — тот же язык, компиляция в JavaScript. Популярны Reagent, re-frame для SPA. **Datomic** — база данных от автора Clojure с моделью immutable facts. Эти темы — в главах 8+ после JVM-базы.

---

## Порядок чтения

1. [История языка](./1.md) — контекст и мотивация Rich Hickey.
2. [Первая программа](./7.md) — REPL, `deps.edn`, `-main`.
3. Основы и коллекции (когда появятся статьи 2–3).
4. Concurrency и interop с Java (статьи 4–6).

Для сравнения JVM-языков параллельно полезны [Scala intro](/encyclopedia/5-languages/5-18-scala/intro) и [Java intro](/encyclopedia/5-languages/5-03-java/intro).

---

## Кому подойдёт раздел

Clojure привлекает команды, которым нужны **функциональная модель** и **JVM-экосистема** без тяжёлого ОО-шаблонного кода enterprise-стиля.

| Сценарий | Почему Clojure |
|----------|----------------|
| Backend на JVM с простой моделью данных | Maps и vectors вместо иерархий классов |
| Data pipeline, ETL | Immutable transforms, transducers |
| Legacy Java + новый модуль | Interop без переписывания |
| Fullstack (Clojure + ClojureScript) | Общие структуры данных |

Вакансии реже, чем Java/Kotlin, но стабильны в fintech, стартапах с data-oriented design и open source (Metabase, Penpot ecosystem).

---

## Связанные разделы энциклопедии

| Язык / тема | Связь |
|-------------|-------|
| [Lisp](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/intro) | Предок синтаксиса и macros |
| [Java](/encyclopedia/5-languages/5-03-java/intro) | Runtime, hiring pool библиотек |
| [Scala](/encyclopedia/5-languages/5-18-scala/intro) | Альтернативный FP на JVM |
| [Haskell](/encyclopedia/5-languages/5-17-haskell/intro) | Теория immutability и типов |

<div class="callout callout--info">
  <div class="callout-title">Черновик</div>
  <div class="callout-body">
  Статьи 2–6 и ClojureScript пока в плане. Черновики <a href="./1.md">истории</a> и <a href="./7.md">первой программы</a> уже содержат рабочие команды и примеры для локального старта.
  </div>
</div>

---

## Экосистема JVM вокруг Clojure

Clojure не изолирован: он **компилируется в JVM bytecode** и вызывает Java-классы без обёрток. Типичный backend-стек:

| Слой | Технология |
|------|------------|
| HTTP | Ring, Compojure, Reitit, Pedestal |
| Persistence | next.jdbc, HugSQL, Datomic (отдельный продукт) |
| Async | core.async, manifold |
| Config | EDN, Aero, cprop |
| Build | deps.edn, Leiningen, tools.build |

Зависимости из Maven Central подключаются в `deps.edn` — см. [пакетные менеджеры](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/621).

---

## Clojure и другие JVM-языки

| Критерий | Java | Kotlin | Scala | Clojure |
|----------|------|--------|-------|---------|
| Парадигма | ОО | ОО + FP | FP + OО | FP, data-first |
| Синтаксис | verbose | concise | Scala | S-expressions |
| REPL | вторичен | есть | есть | **центр workflow** |
| Null | NPE | nullable types | Option | nil + spec |

Clojure выбирают, когда нужна **простая модель данных** (maps/vectors) и **interop с Java**, но не нужен типовый гигантизм Scala.

---

## Transducers и производительность

**Transducers** — композиция трансформаций без промежуточных коллекций:

```clojure
(def xf (comp (filter odd?) (map inc) (take 5)))
(into [] xf (range 100))
```

Идея Rich Hickey — отделить **что делать** с элементами от **куда складывать**. Полезно в ETL и stream processing на JVM.

---

## Spec и контракты данных

**clojure.spec** (или **Malli**) описывает форму данных для валидации и generative testing:

```clojure
(s/def ::email (s/and string? #(re-matches #".+@.+" %)))
(s/def ::user (s/keys :req-un [::email ::name]))
```

Spec не заменяет статическую типизацию Haskell, но ловит ошибки на границах API и в REPL-driven разработке.

---

## Типичные ошибки новичков

| Ошибка | Симптом | Совет |
|--------|---------|-------|
| `(def x (conj x 1))` | Путаница var vs value | `def` — top-level binding; локально `let` |
| Lazy seq без realize | Stack overflow / hang | `doall`, `vec`, limit |
| Mutable Java object в atom | Race | Immutable maps внутри atom |
| Giant `defn` без decomposition | Нечитаемый код | Малые pure functions |

---

## Сообщество и ресурсы

| Ресурс | Содержание |
|--------|------------|
| clojure.org | Официальная документация |
| ClojureVerse / r/Clojure | Обсуждения |
| *Clojure for the Brave and True* | Бесплатная книга для старта |
| *Programming Clojure* (Pragmatic) | Глубже про экосystem |

Конференции: Clojure/conj (US), :clojureD (EU). Вакансии концентрируются в fintech, data, open source (Metabase).

---

## Безопасность и деплой

- **Uberjar** — один JAR со всеми deps для `java -jar app.jar`.
- **Secrets** — env vars, не EDN в git; см. [конфигурации](/encyclopedia/3-data-markup/3-04-konfiguratsii-i-dannye/intro).
- **AOT compile** — ускорение cold start; trade-off с dynamic REPL в prod.

---

## Чек-лист перед первой программой

- [ ] Установлен JDK 17+ (LTS)
- [ ] `clojure -Sdescribe` показывает версию CLI
- [ ] Прочитана [история](./1.md) — контекст immutability
- [ ] Открыт REPL и выполнен `(+ 1 2)`

---

## Сравнение JVM-языков для новичка

| Критерий | Java | Kotlin | Scala | Clojure |
|----------|------|--------|-------|---------|
| Синтаксис | Знакомый C-style | Современный | Гибкий, сложный | Скобки Lisp |
| REPL | jshell (позже) | kotlinc | scala | **центр workflow** |
| Null safety | Optional | встроена | Option | nil messaging |
| Learning curve | средняя | средняя | высокая | скобки + FP |

Clojure выбирают, когда команда уже ценит immutability и data-oriented design, а не когда нужен максимальный hiring pool.

---

## Типичный стек Clojure-проекта

| Слой | Технология |
|------|------------|
| HTTP | Ring, Reitit, Pedestal |
| HTML | Hiccup (server-side) |
| Frontend | ClojureScript + Shadow-cljs |
| БД | next.jdbc, Datomic (niche) |
| Async | core.async |
| Config | EDN files, aero |

Статьи по каждому компоненту появятся в главах 8+.

---

## Как читать S-expressions

```clojure
(max 3 (+ 1 2))
```

Читается **изнутри наружу**: `(+ 1 2)` → 3, затем `(max 3 3)` → 3. Оператор всегда **первый** в списке — prefix notation.

---

## Ресурсы сообщества

| Ресурс | URL |
|--------|-----|
| Официальный сайт | [clojure.org](https://clojure.org) |
| ClojureDocs | [clojuredocs.org](https://clojuredocs.org) |
| Slack / Zulip | community links на clojure.org |
| 4Clojure | упражнения для новичков |

---


<DocCardList />

---

## Второй проход — transducers и spec (черновик)

### Transducers (кратко)

**Transducers** — композиция трансформаций без промежуточных коллекций:

```clojure
(require '[clojure.core :refer [comp map filter into transduce]])

(def xf (comp (map :score) (filter #(> % 50))))
(transduce xf + [{:score 40} {:score 80} {:score 60}])
;; => 140
```

Идея из Clojure 1.7+ — эффективные data pipeline; подробная статья в планируемой главе 4.

### clojure.spec (обзор)

**spec** описывает форму данных для валидации и генерации тестов:

```clojure
(require '[clojure.spec.alpha :as s])

(s/def ::email (s/and string? #(re-find #"@" %)))
(s/def ::user (s/keys :req-un [::email]))

(s/valid? ::user {:email "a@b.c"})  ; true
```

В полной версии раздела — generative testing с `clojure.test.check`.

### Безопасность deps.edn

Не подключайте произвольные Git-координаты без ревью. SHA-pin для `:git/url` deps в командных проектах. См. [конфигурации](/encyclopedia/3-data-markup/3-04-konfiguratsii-i-dannye/intro).

---

## FAQ раздела

**Clojure или Scala на JVM?** Clojure — FP и data; Scala — типы и ОО+FP — [Scala intro](/encyclopedia/5-languages/5-18-scala/intro).

**Нужен ли Java до Clojure?** Базовое понимание JVM и Maven coords помогает; синтаксис Java не обязателен.

**Leiningen или deps.edn?** Новые проекты — deps.edn; legacy — Leiningen.

**ClojureScript когда?** Fullstack после JVM-базы — глава 8+.

**Hiring niche?** Fintech, data startups, Metabase ecosystem.

**Lisp обязателен?** Полезен контекст — [Lisp intro](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/intro).

**Pure FP?** Нет — atoms, side effects через host явно.

**IDE?** Calva, Cursive, CIDER — REPL-first.

**Breaking changes?** Редки; 1.x совместимость сильная.

**Datomic required?** Нет — отдельный продукт того же автора.

**Babashka vs JVM?** Scripts vs long-running services.

**spec vs Malli?** Обе validate; Malli популярнее в новых libs.

**Transducers?** Композиция без промежуточных seq — см. выше.

**Java interop pain?** Dot notation; occasional type hints.

**Next read?** [1.md](./1.md), [7.md](./7.md).

---

## Упражнения для самопроверки (раздел)

1. Запустите `clojure` и вычислите `(reduce + (range 10))`.
2. Создайте `deps.edn` с одной зависимостью `cheshire` и распарсьте JSON.
3. Объясните разницу `def`, `defn`, `let`.
4. Найдите в документации описание `atom` и `swap!`.
5. Прочитайте [историю Rich Hickey](./1.md) и выпишите три идеи immutability.

---

<DocCardList />

---
