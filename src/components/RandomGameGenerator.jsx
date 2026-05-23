import React, {useCallback, useEffect, useMemo, useState} from 'react';
import clsx from 'clsx';
import BrowserOnly from '@docusaurus/BrowserOnly';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback, demoSkeletonFallback} from './shared/demoFallback';
import {
  extractGameEntries,
  pickRandom,
  pickRandomDifferent,
} from './shared/articleExtract';
import styles from './shared/articleWidgets.module.css';

function RandomGameGeneratorInner() {
  const [games, setGames] = useState([]);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const [fading, setFading] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setGames(extractGameEntries());
      setReady(true);
    }, 200);
    return () => window.clearTimeout(timer);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return games;
    return games.filter((g) => g.title.toLowerCase().includes(q));
  }, [games, query]);

  const pickGame = useCallback(() => {
    const pool = filtered.length ? filtered : games;
    if (!pool.length) {
      return;
    }
    setFading(true);
    window.setTimeout(() => {
      const next =
        selected == null
          ? pickRandom(pool)
          : pickRandomDifferent(
              pool,
              selected,
              (a, b) => a?.href === b?.href && a?.title === b?.title,
            );
      setSelected(next);
      setFading(false);
    }, 200);
  }, [filtered, games, selected]);

  if (!ready) {
    return demoSkeletonFallback();
  }

  const empty = games.length === 0;

  return (
    <DemoShell>
      <DemoCard
        title="Генератор случайной игры"
        subtitle="Поиск и случайный выбор из списка на странице (Steam, Nintendo)"
      >
        {!empty && (
          <span className={styles.poolBadge}>
            В базе: {games.length}{' '}
            {games.length === 1 ? 'игра' : games.length < 5 ? 'игры' : 'игр'}
            {query.trim() ? ` · в фильтре: ${filtered.length}` : ''}
          </span>
        )}

        <input
          type="search"
          className="it-demo__input"
          style={{width: '100%', marginBottom: '0.65rem'}}
          placeholder="Фильтр по названию…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={empty}
          aria-label="Фильтр игр"
        />

        <div
          className={clsx(styles.gameResult, fading && styles.gameResultFading)}
          aria-live="polite"
        >
          {empty ? (
            <span className={styles.gamePlaceholder}>
              Список игр не найден — добавьте ссылки на магазины в статью.
            </span>
          ) : selected ? (
            selected.href ? (
              <a href={selected.href} target="_blank" rel="noopener noreferrer">
                {selected.title}
              </a>
            ) : (
              selected.title
            )
          ) : (
            <span className={styles.gamePlaceholder}>Нажмите кнопку, чтобы выбрать игру</span>
          )}
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className="it-demo__btn it-demo__btn--primary"
            onClick={pickGame}
            disabled={empty || (query.trim() && !filtered.length)}
            aria-label="Случайная игра"
          >
            {selected ? 'Другая игра' : 'Случайная игра'}
          </button>
          {selected?.href && (
            <a
              href={selected.href}
              target="_blank"
              rel="noopener noreferrer"
              className="it-demo__btn"
              style={{textDecoration: 'none'}}
            >
              В магазин
            </a>
          )}
        </div>

        <p className={styles.footnote}>
          Ссылки берутся из markdown-списка на этой странице
        </p>
      </DemoCard>
    </DemoShell>
  );
}

export default function RandomGameGenerator() {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка генератора…')}>
      {() => <RandomGameGeneratorInner />}
    </BrowserOnly>
  );
}
