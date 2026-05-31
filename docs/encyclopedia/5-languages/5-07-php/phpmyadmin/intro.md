---
title: phpMyAdmin — о разделе
description: "Веб-интерфейс на PHP для MySQL и MariaDB: установка в локальных стеках, подключение, SQL, DDL и DML, импорт и экспорт."
sidebar_label: phpMyAdmin — о разделе
related:
  - title: "phpPgAdmin — о разделе"
    doc: encyclopedia/5-languages/5-07-php/phppgadmin/intro
  - title: "Локальная среда разработки на PHP"
    doc: encyclopedia/5-languages/5-07-php/113
  - title: "Работа с базами данных из PHP"
    doc: encyclopedia/5-languages/5-07-php/20
  - title: "PDO в PHP — подключение и безопасные запросы"
    doc: encyclopedia/5-languages/5-07-php/160
  - title: "MySQL"
    doc: encyclopedia/3-data-markup/3-07-sql/889
  - title: "Настройка веб-сервера для работы с PHP"
    doc: encyclopedia/5-languages/5-07-php/112
---

import DocCardList from '@theme/DocCardList';

# О разделе

**phpMyAdmin** — свободное веб-приложение на PHP для администрирования серверов **MySQL** и совместимых СУБД (**MariaDB**). Интерфейс открывается в браузере; логин и пароль на странице входа передаются напрямую в MySQL — отдельной учётной базы у самого phpMyAdmin нет.

Раздел собран для PHP-разработчиков, которые впервые поднимают локальный стек (Open Server, XAMPP и аналоги) и хотят управлять БД без консоли `mysql`. Материалы согласованы с официальной документацией **phpMyAdmin 5.2** (в Open Server она доступна по адресу `http://127.0.0.1/openserver/phpmyadmin/doc/html/`).

---

## Рекомендуемый порядок

| Шаг | Статья | Содержание |
|-----|--------|------------|
| 1 | [Что такое phpMyAdmin и где встретить](./1) | Архитектура, стеки, первый вход |
| 2 | [Требования, установка и подключение](./2) | PHP, веб-сервер, СУБД, `config.inc.php`, режимы входа |
| 3 | [SQL, DDL и DML в интерфейсе](./3) | Вкладки SQL, консоль, БД, таблицы, данные |
| 4 | [Импорт, экспорт, pmadb и FAQ](./4) | Дампы, лимиты загрузки, хранилище конфигурации, типичные сбои |
| 5 | [История веб-админок БД на PHP](./5) | MySQL-Webadmin, WebDB, phpPgAdmin, эпохи релизов |

Для **PostgreSQL** — соседняя глава [phpPgAdmin](/encyclopedia/5-languages/5-07-php/phppgadmin/intro). Параллельно полезны [локальная среда PHP](/encyclopedia/5-languages/5-07-php/113) и [работа с БД из кода](/encyclopedia/5-languages/5-07-php/20) (PDO, подготовленные запросы).

<DocCardList />

---

## См. также

- [Глоссарий — phpMyAdmin](/glossary/P#phpmyadmin)
- [Глоссарий — phpPgAdmin](/glossary/P#phppgadmin)
- [Клиенты и инструменты SQL](/encyclopedia/3-data-markup/3-07-sql/4)
- [HTTP как основа веб-интеграций](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/118)

---
