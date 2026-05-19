import React, {useCallback, useEffect, useState} from 'react';
import clsx from 'clsx';
import BrowserOnly from '@docusaurus/BrowserOnly';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback, demoSkeletonFallback} from './shared/demoFallback';
import {
  extractGameTitles,
  pickRandom,
  pickRandomDifferent,
} from './shared/articleExtract';
import styles from './shared/articleWidgets.module.css';

function RandomGameGeneratorInner() {
  const [games, setGames] = useState([]);
  const [selected, setSelected] = useState(null);
  const [fading, setFading] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const titles = extractGameTitles();
      setGames(titles);
      setReady(true);
    }, 200);
    return () => window.clearTimeout(timer);
  }, []);

  const pickGame = useCallback(() => {
    if (!games.length) {
      return;
    }
    setFading(true);
    window.setTimeout(() => {
      const next =
        selected == null ? pickRandom(games) : pickRandomDifferent(games, selected);
      setSelected(next);
      setFading(false);
    }, 200);
  }, [games, selected]);

  if (!ready) {
    return demoSkeletonFallback();
  }

  const empty = games.length === 0;

  return (
    <DemoShell>
      <DemoCard
        title="Генератор случайной игры"
        subtitle="Случайная рекомендация из списка игр на этой странице (Steam, Nintendo)."
      >
        {!empty && (
          <span className={styles.poolBadge}>
            В базе: {games.length} {games.length === 1 ? 'игра' : games.length < 5 ? 'игры' : 'игр'}
          </span>
        )}

        <div
          className={clsx(styles.gameResult, fading && styles.gameResultFading)}
          aria-live="polite"
        >
          {empty ? (
            <span className={styles.gamePlaceholder}>
              Список игр не найден — добавьте ссылки на магазины в статью.
            </span>
          ) : selected ? (
            selected
          ) : (
            <span className={styles.gamePlaceholder}>Нажмите кнопку, чтобы выбрать игру</span>
          )}
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className="it-demo__btn it-demo__btn--primary"
            onClick={pickGame}
            disabled={empty}
            aria-label="Случайная игра"
          >
            {selected ? 'Другая игра' : 'Случайная игра'}
          </button>
        </div>

        <p className={styles.footnote}>
          * Выбор из ссылок Steam и Nintendo на странице
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
