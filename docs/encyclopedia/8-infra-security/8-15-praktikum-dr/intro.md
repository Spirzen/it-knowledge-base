---
title: "Практикум DR — о разделе"
description: "Учебное аварийное восстановление — RTO/RPO, правило 3-2-1, pg_dump и restore на стенде Docker."
sidebar_label: "Практикум DR — о разделе"
related:
  - title: "Бэкапы PostgreSQL"
    doc: encyclopedia/8-infra-security/8-11-praktikum-postgresql/10
  - title: "Методы защиты информации"
    doc: encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/111
---

import DocCardList from '@theme/DocCardList';

# О разделе

Практикум **Disaster Recovery** (DR, аварийное восстановление) учит восстанавливать сервис после потери данных или инфраструктуры. Вы намеренно "ломаете" учебную базу PostgreSQL в Docker, поднимаете её заново из offsite-бэкапа и фиксируете две ключевые метрики — **RTO** (Recovery Time Objective, допустимое время простоя) и **RPO** (Recovery Point Objective, допустимую потерю данных по времени). Это безопасная лабораторная модель того, что в production делают после пожара в дата-центре, ransomware или случайного `DROP DATABASE`. Реальный кейс пожара в дата-центре и его последствия для бэкапов описаны на [странице раздела 8](/section/infra-security).

DR отличается от "просто сделать бэкап по cron". Бэкап создаёт файл на диске. DR включает **проверенный runbook** (пошаговую инструкцию восстановления), **учения restore** по расписанию и измеренные RTO/RPO, с которыми можно сравнить фактический результат инцидента. В этом практикуме вы пройдёте полный цикл — от постановки целей до учебной катастрофы и post-incident записи.

<div class="callout callout--info">
  <div class="callout-title">Для кого раздел</div>
  <div class="callout-body">
  Нужны Docker и базовый Linux (команды `docker`, `psql`, работа с файлами). Полезно заранее пройти [PostgreSQL в Docker](/encyclopedia/8-infra-security/8-11-praktikum-postgresql/7) и [бэкапы PostgreSQL](/encyclopedia/8-infra-security/8-11-praktikum-postgresql/10) — там объясняются `pg_dump`, форматы dump и связь с WAL. Если вы только начинаете с контейнерами, сначала поднимите учебный Postgres по шагу 7 из практикума 8.11, затем возвращайтесь сюда.
  </div>
</div>

---

## Что такое DR простыми словами

**Disaster Recovery** — это набор процессов и документов, которые позволяют вернуть сервис в работу после катастрофы. Катастрофа в учебном сценарии — удаление Docker volume с данными. В жизни это может быть отказ диска, удаление облачного проекта, шифрование данных злоумышленником или физическое уничтожение сервера. Цель DR — заранее знать, **сколько времени** займёт восстановление (**RTO**) и **сколько данных** можно потерять между последней точкой восстановления и моментом сбоя (**RPO**).

**Runbook** — текстовая инструкция для дежурного инженера: какие команды выполнить, куда смотреть, кого позвать. Runbook пишут в спокойное время и проверяют на учениях, чтобы во время инцидента не импровизировать. **Restore drill** (учение восстановления) — запланированное упражнение, где команда (или один человек в pet-проекте) восстанавливает сервис из бэкапа и записывает фактическое время.

---

## Маршрут по шагам

| Шаг | Статья | Содержание |
|-----|--------|------------|
| 1 | [RTO, RPO и правило 3-2-1](./1.md) | Метрики восстановления, стратегии бэкапа, offsite, runbook и отличие DR от файла dump |
| 2 | [Стенд PostgreSQL и бэкап](./2.md) | Docker, `pg_dump`, копия в offsite, автоматизация, черновик runbook |
| 3 | [Учебная катастрофа и restore](./3.md) | Удаление volume, `pg_restore`, замер RTO, упражнение на RPO gap |

После шагов 1–3 закрепите материал в [итогах](./998.md) и [чек-листе](./999.md).

---

## Какие стратегии бэкапа затронем

В практикуме используется **логический бэкап** через `pg_dump` в custom-формате (`-Fc`). Это подходит для pet-проекта и учебных баз до нескольких гигабайт. Логический dump содержит SQL-представление схемы и данных; его можно восстановить через `pg_restore` на другой версии Postgres с оговорками по совместимости.

Для production с большими объёмами и жёстким RPO на уровне минут добавляют **физический бэкап** и **архив WAL** — непрерывную запись журнала транзакций. Тогда возможен **PITR** (Point-in-Time Recovery, восстановление на конкретный момент времени). Подробности — в [8.11, шаг 10](/encyclopedia/8-infra-security/8-11-praktikum-postgresql/10). Здесь мы сознательно начинаем с простого пути, чтобы вы **измерили RTO/RPO руками** на стенде, а затем углубились в WAL по ссылке выше.

**Правило 3-2-1** задаёт минимальную гигиену копий: три экземпляра данных, на двух разных типах носителей, одна копия **offsite** (вне основной площадки — другой диск, другая availability zone, другой регион или объектное хранилище). В шаге 2 вы симулируете offsite отдельной папкой или bucket; в pet-проекте для offsite часто выбирают дешёвый tier object storage — см. [FinOps для pet-проекта](/encyclopedia/8-infra-security/8-16-finops-pet-project/1).

---

## Связь с FinOps и стоимостью offsite

Хранение бэкапов в облаке стоит денег, но потеря единственной копии на том же сервере обходится дороже. Типичный pet-проект кладёт dump в S3 Glacier Instant Retrieval, Yandex Object Storage cold tier или аналог — порядка **$0.01–0.03 за ГБ в месяц** при редком чтении. Ежедневный dump базы 500 МБ — это примерно **$0.15–0.50/мес** за хранение плюс копейки за PUT-запросы. Сравните с managed PostgreSQL **$15–40/мес** за минимальный инстанс — offsite dump почти всегда дешевле основного сервиса, и это сознательная статья расходов DR.

---

## Ожидаемый результат после практикума

Вы сможете сформулировать RTO и RPO для своего pet-проекта, объяснить правило 3-2-1 коллеге, выполнить restore из offsite dump на чистом volume и записать фактическое время восстановления. У вас останется черновик runbook с датой последнего успешного test restore — без этой даты бэкап остаётся "надеждой", а DR начинается с проверенной процедуры.

---

## Сколько времени займёт practicum

| Шаг | Активная работа | Можно отложить |
|-----|-----------------|----------------|
| 1 — теория RTO/RPO | 20–30 min | — |
| 2 — стенд и бэкап | 30–45 min | cron на потом |
| 3 — катастрофа и restore | 30–60 min | — |
| Итоги и чек-лист | 15 min | — |

Первый restore drill часто занимает дольше из-за скачивания образа Docker. Повторный drill на той же машине обычно укладывается в **5–15 минут** — эту цифру и заносят в runbook как baseline RTO.

---

## Требования к окружению

Установлены Docker Engine или Docker Desktop, свободно **2 ГБ** RAM для контейнера Postgres, порты **5433** на хосте. Папки `backup-local` и `backup-offsite` создаёте в домашнем каталоге lab. Для offsite в облаке нужен аккаунт с object storage и CLI (`aws`, `yc` или `rclone`) — опционально на шаге 2.

Если PostgreSQL уже слушает 5432 локально, practicum использует **5433**, конфликта не будет. WSL2 на Windows подходит; пути `./backup-offsite` должны жить на диске, который переживёт `docker volume rm` (не tmpfs внутри контейнера).

---

## Связь с разделом 8 и смежными practicum

Раздел **8-infra-security** собирает инфраструктуру, безопасность и эксплуатацию. DR practicum опирается на [PostgreSQL practicum](/encyclopedia/8-infra-security/8-11-praktikum-postgresql/intro) и дополняет [методы защиты информации](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/111). FinOps practicum объясняет, как не переплатить за offsite tier при хранении dump.

После DR имеет смысл пройти [FinOps для pet-проекта](/encyclopedia/8-infra-security/8-16-finops-pet-project/1) и настроить budget alert на bucket с бэкапами — сюрприз в billing не должен совпасть с реальным инцидентом.

---

## Термины раздела (шпаргалка)

| Термин | Расшифровка |
|--------|-------------|
| DR | Disaster Recovery, аварийное восстановление |
| RTO | Recovery Time Objective, допустимое время простоя |
| RPO | Recovery Point Objective, допустимая потеря данных по времени |
| Offsite | Копия вне основной площадки |
| Runbook | Пошаговая инструкция restore |
| Restore drill | Учение восстановления по runbook |
| pg_dump | Логический бэкап PostgreSQL |
| pg_restore | Восстановление из custom dump |

---

## Антипаттерны practicum

Запуск `docker volume rm` на production "для проверки" — блокирующий инцидент. Restore без свежего dump — wasted RTO. Хранение единственного dump без checksum — риск битого файла. Пропуск post-incident записи — повтор тех же ошибок на следующем drill.

---

## Порядок прохождения с PostgreSQL practicum

| Если вы уже прошли | Начните DR с |
|--------------------|--------------|
| 8.11/7 Docker | [шаг 1](./1.md) теория, затем [шаг 2](./2.md) |
| 8.11/10 бэкапы | [шаг 2](./2.md), повтор dump быстрее |
| Ничего из 8.11 | [PostgreSQL Docker](/encyclopedia/8-infra-security/8-11-praktikum-postgresql/7), затем сюда |

---

## Что вы получите на выходе каждого шага

**Шаг 1** — записанные RTO/RPO, понимание 3-2-1, таблица зрелости backup и DR, черновик структуры runbook, оценка cost offsite. **Шаг 2** — running Postgres в Docker, минимум один `.dump` в `backup-offsite`, опционально cron и S3 upload, runbook v0.1. **Шаг 3** — measured RTO, demonstrated RPO gap, post-incident table, runbook v1.0 с last successful test restore.

---

## Windows и WSL2

На Windows practicum выполняют в **WSL2** (Ubuntu) с Docker Desktop WSL backend. Пути `backup-offsite` держите в Linux filesystem (`~/dr-lab/`), не на `/mnt/c/` — права и performance стабильнее. Команда `date -Iseconds` работает в GNU date; в PowerShell без WSL используйте `Get-Date -Format o` и зафиксируйте эквивалент в runbook.

---

## Ошибки, которые practicum предотвращает

| # | Ошибка | Последствие | Где ловим |
|---|--------|-------------|-----------|
| 1 | Dump только local | total loss | шаг 2 offsite |
| 2 | Restore never tested | panic in incident | шаг 3 drill |
| 3 | No runbook | high RTO | шаги 1–2 doc |
| 4 | Wrong RPO cron | silent data loss | шаг 3 gap exercise |
| 5 | Secrets lost | restore blocked | runbook on-call |

---

## Связь метрик с бизнесом

RTO **1 час** для pet-магазина означает "до часа клиент не оформляет заказ". RPO **6 часов** — "можем объяснить пользователям потерю заказов за последние 6 h". Формулировки plain language помогают на собеседовании и в README для co-founder.

---

## Полный walkthrough подготовки DR lab

```bash
mkdir -p ~/dr-lab/backup-local ~/dr-lab/backup-offsite
cd ~/dr-lab
docker ps --filter name=pg-dr-lab
# если пусто — переходите к шагу 2 practicum
ls -la backup-offsite/
```

Ожидаемо до шага 2 — пустые папки backup, контейнер ещё не создан.

### Быстрая проверка pg_dump (если стенд уже есть)

```bash
docker exec pg-dr-lab pg_isready -U postgres
docker exec pg-dr-lab psql -U postgres -d shop -c "SELECT count(*) FROM orders;"
pg_restore --list ./backup-offsite/shop-*.dump 2>/dev/null | head -5
```

Ожидаемый `--list` — строки TABLE DATA без "corrupted".

---

## Типичные ошибки до старта DR

| Симптом | Ожидание при OK | Решение |
|---------|-----------------|---------|
| Порт 5432 занят | 5433 в practicum | Используйте `-p 5433:5432` |
| Docker не запущен | docker ps | Docker Desktop |
| Нет места на диске | df -h | Освободите 2+ GB |
| WSL /mnt/c медленный | путь в ~/ | backup-offsite в Linux FS |
| pg_restore list fail | оглавление TABLE | Новый pg_dump |

---

## Предупреждения безопасности

1. `docker volume rm` на production — **запрещено** без change ticket.
2. Пароль `lab` в runbook — в prod из vault.
3. Dump offsite шифруйте SSE или gpg.
4. Runbook с credentials — read-only доступ on-call.
5. Restore drill не в часы пик production.

---

## Чек-лист готовности к шагу 1

| # | Проверка | Ожидание |
|---|----------|----------|
| 1 | Docker работает | docker ps OK |
| 2 | 2 GB RAM свободно | достаточно для postgres:16-alpine |
| 3 | Понимание RTO/RPO | можете объяснить разницу |
| 4 | Папки backup | backup-local, backup-offsite |
| 5 | Опционально 8.11/7 | Postgres Docker пройден |

---

## Связь DR с остальными practicum раздела 8

| Practicum | Что даёт для DR |
|-----------|-----------------|
| 8.11 PostgreSQL | pg_dump, WAL, Docker |
| 8.14 Vault | пароли в runbook без plaintext в git |
| 8.16 FinOps | cost offsite bucket, lifecycle |
| 8.13 GitOps | runbook в git, infra as code |

После DR имеет смысл настроить budget alert на bucket с dump — см. [FinOps intro](/encyclopedia/8-infra-security/8-16-finops-pet-project/intro).

<DocCardList />

---
