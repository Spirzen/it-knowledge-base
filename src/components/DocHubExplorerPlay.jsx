import React, {useMemo, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import toolStyles from './shared/toolDemo.module.css';
import styles from './programPlays.module.css';

const SECTIONS = [
  {id: 'all', label: 'Все'},
  {id: 'web', label: 'Веб'},
  {id: 'lang', label: 'Языки'},
  {id: 'data', label: 'БД'},
  {id: 'ops', label: 'DevOps'},
  {id: 'os', label: 'ОС'},
];

const RESOURCES = [
  {id: 'mdn', section: 'web', name: 'MDN Web Docs', url: 'https://developer.mozilla.org/ru/', lang: 'RU/EN', note: 'Эталон по HTML, CSS, JS и Web API.'},
  {id: 'devdocs', section: 'web', name: 'DevDocs.io', url: 'https://devdocs.io/', lang: 'EN', note: 'Агрегатор справок, офлайн-режим, быстрый поиск.'},
  {id: 'learnjs', section: 'web', name: 'learn.javascript.ru', url: 'https://learn.javascript.ru/', lang: 'RU', note: 'Полный курс JS на русском.'},
  {id: 'metanit', section: 'lang', name: 'Metanit.com', url: 'https://metanit.com/', lang: 'RU', note: 'C#, Java, Python, Go, C++, SQL и др.'},
  {id: 'pyru', section: 'lang', name: 'Python docs (RU)', url: 'https://docs.python.org/3/', lang: 'RU', note: 'Официальная документация; есть русский перевод.'},
  {id: 'ms-csharp', section: 'lang', name: 'Microsoft Learn — C#', url: 'https://learn.microsoft.com/ru/dotnet/csharp/', lang: 'RU', note: 'Тур по языку, справочник, примеры.'},
  {id: 'rust-book', section: 'lang', name: 'The Rust Book (RU)', url: 'https://doc.rust-lang.ru/book/', lang: 'RU', note: 'Полный перевод официальной книги.'},
  {id: 'postgrespro', section: 'data', name: 'PostgreSQL (Postgres Pro)', url: 'https://postgrespro.ru/docs/postgresql', lang: 'RU', note: 'Локализованная документация PostgreSQL.'},
  {id: 'k8s-ru', section: 'ops', name: 'Kubernetes (RU)', url: 'https://kubernetes.io/ru/docs/home/', lang: 'RU', note: 'Концепции и справка по объектам кластера.'},
  {id: 'progit', section: 'ops', name: 'Pro Git (книга)', url: 'https://git-scm.com/book/ru/v2', lang: 'RU', note: 'Рекомендуемый учебник по Git.'},
  {id: 'archwiki', section: 'os', name: 'Arch Wiki', url: 'https://wiki.archlinux.org/', lang: 'EN', note: 'Глубокая база по Linux; часто используют как справочник.'},
  {id: 'win-docs', section: 'os', name: 'Windows Developer Docs', url: 'https://learn.microsoft.com/ru/windows/', lang: 'RU', note: 'Разработка и администрирование Windows.'},
];

function DocHubExplorerPlayInner() {
  const [section, setSection] = useState('all');
  const [query, setQuery] = useState('');
  const [picked, setPicked] = useState('mdn');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return RESOURCES.filter((r) => {
      if (section !== 'all' && r.section !== section) return false;
      if (!q) return true;
      return `${r.name} ${r.note} ${r.lang}`.toLowerCase().includes(q);
    });
  }, [section, query]);

  const item = RESOURCES.find((r) => r.id === picked) ?? filtered[0] ?? RESOURCES[0];

  return (
    <DemoShell className={styles.root}>
      <DemoCard
        title="Навигатор документации"
        subtitle="Выберите раздел, найдите ресурс и откройте официальный источник"
      >
        <input
          type="search"
          className="it-demo__input"
          style={{width: '100%', marginBottom: '0.65rem'}}
          placeholder="MDN, Git, PostgreSQL…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Поиск ресурсов"
        />
        <div className={toolStyles.chips} style={{marginBottom: '0.65rem'}}>
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              className={clsx(toolStyles.chip, section === s.id && toolStyles.chipActive)}
              onClick={() => setSection(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>
        <div className={styles.explorer}>
          <ul className={styles.tree}>
            {filtered.map((r) => (
              <li key={r.id}>
                <button
                  type="button"
                  className={clsx(styles.treeItem, picked === r.id && styles.treeItemActive)}
                  onClick={() => setPicked(r.id)}
                >
                  <span>{r.name}</span>
                  <span className={styles.ext}>{r.lang}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className={styles.detail}>
            <h4 className={styles.detailTitle}>{item.name}</h4>
            <p className={styles.detailRole}>Язык: {item.lang}</p>
            <p>{item.note}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="it-demo__btn it-demo__btn--primary"
              style={{display: 'inline-block', marginTop: '0.65rem', textDecoration: 'none'}}
            >
              Открыть сайт ↗
            </a>
          </div>
        </div>
      </DemoCard>
    </DemoShell>
  );
}

export default function DocHubExplorerPlay() {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка навигатора…')}>
      {() => <DocHubExplorerPlayInner />}
    </BrowserOnly>
  );
}
