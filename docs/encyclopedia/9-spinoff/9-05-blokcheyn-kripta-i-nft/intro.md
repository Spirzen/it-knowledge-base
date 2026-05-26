---
title: Блокчейн, криптовалюты и NFT — о разделе
description: "Подборка материалов раздела Блокчейн, криптовалюты и NFT в энциклопедии Вселенная IT — теория и практикум Ledger Lab."
sidebar_label: Блокчейн, криптовалюты и NFT — о разделе
related:
  - title: Блокчейн, крипта и NFT
    doc: encyclopedia/9-spinoff/9-05-blokcheyn-kripta-i-nft/1
  - title: Практикум Ledger Lab
    doc: encyclopedia/9-spinoff/9-05-blokcheyn-kripta-i-nft/1010
  - title: Информационная безопасность
    doc: encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел объясняет **блокчейн**, **криптовалюты**, **NFT** и смежную криптографию. Теория — в [вводной главе](./1.md) и [статье про валюты](./11.md); закрепление — в практикуме **[Ledger Lab](./1010.md)** (пошаговая сборка учебного ledger на Python у себя на машине).

<DocCardList />

---

### С чего начать

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Блокчейн, крипта и NFT](./1.md) | Цепочка, консенсус, транзакции, NFT, DeFi |
| 2 | [Криптовалюты](./11.md) | История, волатильность, биржи CEX/DEX |
| 3 | [Практикум Ledger Lab — обзор](./1010.md) | Собрать учебный ledger своими руками |
| 4 | [Чек-лист самопроверки](./3.md) | Проверить понимание |

---

### Практикум Ledger Lab

| Шаг | Статья | Тема |
|-----|--------|------|
| 0 | [Обзор](./1010.md) | Архитектура, подготовка среды, маршрут |
| 1 | [Цепочка блоков](./1011.md) | `Block`, SHA-256, PoW |
| 2 | [Криптография](./1012.md) | Ed25519, AES-GCM для ключа |
| 3 | [Ledger и переводы](./1013.md) | Балансы, mempool, майнинг |
| 4 | [Compliance и тесты](./1014.md) | KYC, audit log, pytest |

Весь код — в тексте статей; каталог проекта создаёте локально по [обзору](./1010.md).

---

### Смежные разделы

- [Информационная безопасность](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/intro) — криптография, PKI, OWASP.
- [Основы интеграции](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro) — API бирж и Web3-RPC (для расширений практикума).

---
