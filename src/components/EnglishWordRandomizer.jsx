import React, {useCallback, useEffect, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoSkeletonFallback} from './shared/demoFallback';
import {extractTableVocabulary} from './shared/articleExtract';
import styles from './shared/articleWidgets.module.css';

function shuffleSlice(arr, count) {
  const copy = [...arr].sort(() => Math.random() - 0.5);
  return copy.slice(0, count);
}

function EnglishWordRandomizerInner() {
  const [pool, setPool] = useState([]);
  const [items, setItems] = useState([]);
  const [cols, setCols] = useState(2);
  const [ready, setReady] = useState(false);

  const refresh = useCallback(() => {
    const {items: data, cols: columnCount} = extractTableVocabulary();
    if (!data.length) {
      setPool([]);
      setItems([]);
      setReady(true);
      return;
    }
    const count = columnCount >= 3 ? 1 : 5;
    setPool(data);
    setCols(columnCount);
    setItems(shuffleSlice(data, Math.min(count, data.length)));
    setReady(true);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(refresh, 150);
    return () => window.clearTimeout(timer);
  }, [refresh]);

  if (!ready) {
    return demoSkeletonFallback();
  }

  if (!pool.length) {
    return null;
  }

  const countLabel = cols >= 3 ? '1 термин' : '5 терминов';

  return (
    <DemoShell>
      <DemoCard
        title="Тренажёр терминов"
        subtitle="Случайные слова из таблицы на странице — откройте карточку, чтобы увидеть перевод."
      >
        <span className={styles.poolBadge}>
          В словаре: {pool.length} · показано: {items.length}
        </span>

        <button
          type="button"
          className="it-demo__btn it-demo__btn--primary"
          style={{width: '100%', marginBottom: '0.75rem'}}
          onClick={refresh}
        >
          Новый набор ({countLabel})
        </button>

        <div className={styles.flashList}>
          {items.map((item) => (
            <details key={`${item.term}-${item.definition.slice(0, 20)}`} className={styles.flashCard}>
              <summary className={styles.flashSummary}>
                <span className={styles.flashTerm}>{item.term}</span>
                <span className={styles.flashHint} aria-hidden>
                  ▼
                </span>
              </summary>
              <div className={styles.flashAnswer}>{item.definition}</div>
            </details>
          ))}
        </div>

        <p className={styles.footnote}>
          * Данные читаются из таблицы в статье автоматически
        </p>
      </DemoCard>
    </DemoShell>
  );
}

export default function EnglishWordRandomizer() {
  return (
    <BrowserOnly fallback={demoSkeletonFallback()}>
      {() => <EnglishWordRandomizerInner />}
    </BrowserOnly>
  );
}
