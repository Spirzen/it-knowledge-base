import React, {useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import {MEMORY_MODEL_SCENARIOS, TEACHING_LANGUAGES} from './shared/teachingLanguagesData';
import styles from './TeachingMemoryModelPlay.module.css';

function langLabels(ids) {
  return ids
    .map((id) => TEACHING_LANGUAGES.find((l) => l.id === id)?.label)
    .filter(Boolean)
    .join(', ');
}

export function TeachingMemoryModelPlayInner({embedded = false}) {
  const [scenarioId, setScenarioId] = useState('gc');
  const scenario =
    MEMORY_MODEL_SCENARIOS.find((s) => s.id === scenarioId) ?? MEMORY_MODEL_SCENARIOS[0];

  const body = (
    <>
      <div className={styles.bar}>
        {MEMORY_MODEL_SCENARIOS.map((s) => (
          <button
            key={s.id}
            type="button"
            className={clsx(
              'it-demo__btn it-demo__btn--sm',
              scenarioId !== s.id && 'it-demo__btn--secondary',
            )}
            onClick={() => setScenarioId(s.id)}
          >
            {s.title.split('(')[0].trim()}
          </button>
        ))}
      </div>
      <p className={styles.langs}>
        Языки: <strong>{langLabels(scenario.langs)}</strong>
      </p>
      <ol className={styles.steps}>
        {scenario.steps.map((step, i) => (
          <li key={step}>
            <span className={styles.stepNum}>{i + 1}</span>
            {step}
          </li>
        ))}
      </ol>
      <p className={styles.tip}>
        <strong>Совет преподавателю:</strong> {scenario.teacherTip}
      </p>
    </>
  );

  if (embedded) {
    return <div className={styles.root}>{body}</div>;
  }

  return (
    <DemoShell className={styles.root}>
      <DemoCard
        title="Как язык работает с памятью"
        subtitle="Три модели — объясните разницу перед тем, как сравнивать Java и C++ на одном курсе"
      >
        {body}
      </DemoCard>
    </DemoShell>
  );
}

export default function TeachingMemoryModelPlay(props) {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка модели памяти…')}>
      {() => <TeachingMemoryModelPlayInner {...props} />}
    </BrowserOnly>
  );
}
