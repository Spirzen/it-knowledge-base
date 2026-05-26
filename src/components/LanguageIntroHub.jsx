import React, {useMemo, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import {formatLanguageLabel, LANGUAGE_INTROS} from './shared/languageIntroData';
import {LanguageIntroPlayInner} from './LanguageIntroPlay';
import styles from './LanguageIntroHub.module.css';

const ENTRIES = Object.values(LANGUAGE_INTROS)
  .filter((e) => e.id !== 'legacy-hub')
  .sort((a, b) => (a.name > b.name ? 1 : -1));

function LanguageIntroHubInner() {
  const [topic, setTopic] = useState('python');

  const groups = useMemo(() => {
    const map = new Map();
    for (const e of ENTRIES) {
      const g = e.category;
      if (!map.has(g)) map.set(g, []);
      map.get(g).push(e);
    }
    return [...map.entries()];
  }, []);

  return (
    <DemoShell>
      <DemoCard
        title="Обзор языков из энциклопедии"
        subtitle="Выберите язык — краткие сведения из раздела "Основные языки""
      >
        <div className={styles.root}>
          {groups.map(([category, items]) => (
            <div key={category} className={styles.group}>
              <div className={styles.groupTitle}>{category}</div>
              <div className={styles.row}>
                {items.map((e) => (
                  <button
                    key={e.id}
                    type="button"
                    className={clsx(
                      'it-demo__btn it-demo__btn--sm',
                      topic !== e.id && 'it-demo__btn--secondary',
                    )}
                    onClick={() => setTopic(e.id)}
                  >
                    {formatLanguageLabel(e)}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <div className={styles.panel}>
            <LanguageIntroPlayInner topic={topic} embedded />
          </div>
        </div>
      </DemoCard>
    </DemoShell>
  );
}

export default function LanguageIntroHub() {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка обзора языков…')}>
      {() => <LanguageIntroHubInner />}
    </BrowserOnly>
  );
}
