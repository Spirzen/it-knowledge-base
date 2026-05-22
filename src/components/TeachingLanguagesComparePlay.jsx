import React, {useMemo, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import {
  DEFAULT_COMPARE_LANGS,
  TEACHING_COMPARE_ROWS,
  TEACHING_LANGUAGES,
} from './shared/teachingLanguagesData';
import styles from './TeachingLanguagesComparePlay.module.css';

const LANG_COL_CLASS = {
  scratch: styles.colScratch,
  java: styles.colJava,
  csharp: styles.colCsharp,
  kotlin: styles.colKotlin,
  go: styles.colGo,
  cpp: styles.colCpp,
  rust: styles.colRust,
};

export function TeachingLanguagesComparePlayInner({
  compact = false,
  embedded = false,
  initialLangs = DEFAULT_COMPARE_LANGS,
  maxLangs = 4,
}) {
  const [rowId, setRowId] = useState('hello');
  const [selected, setSelected] = useState(() =>
    initialLangs.filter((id) => TEACHING_LANGUAGES.some((l) => l.id === id)).slice(0, maxLangs),
  );

  const row = TEACHING_COMPARE_ROWS.find((r) => r.id === rowId) ?? TEACHING_COMPARE_ROWS[0];

  const visibleLangs = useMemo(
    () => TEACHING_LANGUAGES.filter((l) => selected.includes(l.id)),
    [selected],
  );

  const toggleLang = (id) => {
    setSelected((prev) => {
      if (prev.includes(id)) {
        if (prev.length <= 2) return prev;
        return prev.filter((x) => x !== id);
      }
      if (prev.length >= maxLangs) {
        return [...prev.slice(1), id];
      }
      return [...prev, id];
    });
  };

  const body = (
    <>
      <p className={styles.pickHint}>
        Выберите до {maxLangs} языков для сравнения на проекторе (минимум 2):
      </p>
      <div className={styles.langPick}>
        {TEACHING_LANGUAGES.map((l) => (
          <button
            key={l.id}
            type="button"
            className={clsx(
              styles.langChip,
              selected.includes(l.id) && styles.langChipOn,
            )}
            onClick={() => toggleLang(l.id)}
            aria-pressed={selected.includes(l.id)}
          >
            <span aria-hidden>{l.icon}</span> {l.label}
          </button>
        ))}
      </div>

      <div className={styles.rowBar}>
        {TEACHING_COMPARE_ROWS.map((r) => (
          <button
            key={r.id}
            type="button"
            className={clsx(
              'it-demo__btn it-demo__btn--sm',
              rowId !== r.id && 'it-demo__btn--secondary',
            )}
            onClick={() => setRowId(r.id)}
          >
            {r.label}
          </button>
        ))}
      </div>

      <div
        className={styles.grid}
        style={{gridTemplateColumns: `repeat(${visibleLangs.length}, minmax(140px, 1fr))`}}
      >
        {visibleLangs.map((l) => (
          <div key={l.id} className={clsx(styles.col, LANG_COL_CLASS[l.id])}>
            <div className={styles.colHead}>
              {l.icon} {l.label}
            </div>
            <pre>{row[l.id] ?? '—'}</pre>
          </div>
        ))}
      </div>
      <p className={styles.hint}>
        <strong>{row.label}:</strong> {row.hint}
      </p>
    </>
  );

  if (embedded) {
    return <div className={styles.root}>{body}</div>;
  }

  return (
    <DemoShell className={styles.root}>
      <DemoCard
        title={compact ? 'Синтаксис: учебные языки' : 'Одна идея — разные языки'}
        subtitle="Scratch, Java, C#, Kotlin, Go, C++, Rust — переключайте колонки под свой курс"
      >
        {body}
      </DemoCard>
    </DemoShell>
  );
}

export default function TeachingLanguagesComparePlay(props) {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка сравнения языков…')}>
      {() => <TeachingLanguagesComparePlayInner {...props} />}
    </BrowserOnly>
  );
}
