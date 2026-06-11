---
title: Go — о разделе
description: >-
  Go (Golang) — синтаксис, goroutines, модули и веб (Gin); маршрут раздела
  для backend и системного программирования в энциклопедии Вселенная IT.
sidebar_label: Go — о разделе
related:
  - title: "Kotlin — о разделе"
    doc: encyclopedia/5-languages/5-09-kotlin/intro
  - title: "Ruby — о разделе"
    doc: encyclopedia/5-languages/5-11-ruby/intro
  - title: "Smalltalk — о разделе"
    doc: encyclopedia/5-languages/5-08-smalltalk/intro
  - title: "Groovy — о разделе"
    doc: encyclopedia/5-languages/5-12-groovy/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

**Go** — компилируемый язык с простым синтаксисом, встроенной конкурентностью (goroutine, channel) и быстрой сборкой бинарника. Часто выбирают для CLI, микросервисов, DevOps-утилит и высоконагруженного backend.

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка. Память и GC — [сравнение Java, Python и Go](/encyclopedia/4-code-dev/4-15-sborka-musora/4), практика — [основы Go](./13.md#работа-с-памятью).

<div class="callout callout--info">
  <div class="callout-title">Горутины и модель CSP</div>

  <div class="callout-body">
  Go реализует **легковесные потоки** (горутины) и обмен через каналы — вариант [передачи сообщений](/encyclopedia/4-code-dev/4-05-asinhronnost/13).

  Теория — [процессы и потоки](/encyclopedia/4-code-dev/4-05-asinhronnost/1); практика — [синтаксис и конкурентность](/encyclopedia/5-languages/5-10-go/14), [паттерны](/encyclopedia/5-languages/5-10-go/16).
</div>
</div>

Горутины и каналы в [синтаксисе Go](./14.md) сначала разбираются **псевдокодом**, затем — на Go.

---

### Что в разделе

Статьи по синтаксису, модулям (`go mod`), ошибкам, тестам и вебу (Gin). Модель ошибок без `try/catch` — сначала [теория](/encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya/111), затем [Обработка ошибок в Go](./191.md). Ниже — короткий маршрут; на старте не смешивайте с Java или Python — путаются модели ошибок и работа с пакетами.

---

### С чего начать

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Основы языка](./11.md) | Типы, `main`, инструменты |
| 1a | [GoLand — IDE для разработки на Go](./102.md) | Установка, интерфейс, отладка (рекомендуется перед первой программой) |
| 1b | [package main и func main()](./40.md) | Исполняемый пакет vs библиотека |
| 2 | [Первая программа](./24.md) | `go run`, структура проекта |
| 3 | [Gin](./2412.md) | HTTP API после базы |
| 4 | [REST обзор](./24.md) | Контракты и маршруты |
| — | СУБД из Go | [PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/888), [MySQL](/encyclopedia/3-data-markup/3-07-sql/889), [SQLite](/encyclopedia/3-data-markup/3-07-sql/887), [SQL Server](/encyclopedia/3-data-markup/3-07-sql/890) |

---

### Углублённый маршрут (после базы)

Сквозной путь от CLI к внутренним RPC:

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [GoEmailVerifier — практикум](./212.md) | CLI: DNS, SMTP, `flag`, тесты |
| 1a | [Практикум GoHTMLParser](./211.md) | CLI — HTTP, парсинг HTML, `internal/`, тесты |
| 2 | [CLI на cobra и viper](./33.md) | Подкоманды, конфиг, embed |
| 3 | [Веб на stdlib](./25.md) | `net/http` до фреймворков |
| 4 | [Gin](./2412.md) | REST API |
| 5 | [gRPC в Go](./32.md) | Protobuf между сервисами |
| 6 | [Дженерики](./31.md) | Обобщённые алгоритмы |
| 7 | [Профилирование и fuzz](./35.md) | pprof, trace, benchstat |
| 8 | [WebSocket](./34.md) | Push и live-данные |
| 9 | [TCP и UNIX-сокеты](./27.md) | Транспорт ниже HTTP |

---

### Зачем этот раздел

Подборка по **Go** в энциклопедии: синтаксис, первая программа и смежные темы. Пройдите один маршрут до конца, не смешивая несколько языков на старте.

---

### С чего начать

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Первая программа](./24.md) | Запуск и синтаксис |
| 2 | [Gin](./2412.md) | Углубление |
| 3 | [REST обзор](./24.md) | Углубление |

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

<DocCardList />

---

{/* http-basics-link  */}
<div class="callout callout--tip">
  <div class="callout-title">Основа по протоколу</div>

  <div class="callout-body">
  Базовый разбор HTTP и HTTPS находится в отдельной статье — [HTTP как основа веб-интеграций](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/118).
</div>
  </div>

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок «С чего начать?» на [главной](/). Соседние шаги того же маршрута:

**Бэкенд и серверная разработка** — [Kotlin — о разделе](/encyclopedia/5-languages/5-09-kotlin/intro), [Ruby — о разделе](/encyclopedia/5-languages/5-11-ruby/intro), [Smalltalk — о разделе](/encyclopedia/5-languages/5-08-smalltalk/intro), [Groovy — о разделе](/encyclopedia/5-languages/5-12-groovy/intro), [PHP — о разделе](/encyclopedia/5-languages/5-07-php/intro), [Rust — о разделе](/encyclopedia/5-languages/5-13-rust/intro).

{/* /sidebar-collections */}

---
