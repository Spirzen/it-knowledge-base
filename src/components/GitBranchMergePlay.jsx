import React, {useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import {
  MERGE_SCENARIOS,
  advanceMerge,
  initialMergeState,
} from './shared/gitBranchMergeEngine';
import styles from './GitBranchMergePlay.module.css';
import toolStyles from './shared/toolDemo.module.css';

function BranchLane({name, commits, tip, active}) {
  return (
    <div className={styles.lane}>
      <span className={clsx(styles.laneName, active && styles.laneActive)}>{name}</span>
      <div className={styles.commits}>
        {commits.map((c) => (
          <span
            key={c}
            className={clsx(styles.commit, c === tip && styles.commitTip)}
            title={c}
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

function GitBranchMergePlayInner() {
  const [scenarioId, setScenarioId] = useState('merge-commit');
  const [state, setState] = useState(initialMergeState);
  const scenario = MERGE_SCENARIOS.find((s) => s.id === scenarioId) ?? MERGE_SCENARIOS[1];

  const reset = () => {
    setState(initialMergeState());
    setScenarioId('merge-commit');
  };

  const onScenario = (id) => {
    setScenarioId(id);
    setState(initialMergeState());
  };

  const next = () => setState((s) => advanceMerge(s, scenarioId));

  return (
    <DemoShell className={styles.root}>
      <DemoCard
        title="Ветки и слияние"
        subtitle="Сценарии fast-forward, merge commit и разрешение конфликта"
      >
        <div className={toolStyles.chips}>
          {MERGE_SCENARIOS.map((s) => (
            <button
              key={s.id}
              type="button"
              className={clsx(toolStyles.chip, scenarioId === s.id && toolStyles.chipActive)}
              onClick={() => onScenario(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>

        <p className="it-demo__hint" style={{marginTop: '0.5rem'}}>
          {scenario.hint}
        </p>

        <div className={styles.graph}>
          <BranchLane
            name="main"
            commits={state.branches.main.commits}
            tip={state.branches.main.tip}
            active={state.head === 'main'}
          />
          <BranchLane
            name="feature"
            commits={state.branches.feature.commits}
            tip={state.branches.feature.tip}
            active={state.head === 'feature'}
          />
        </div>

        {state.conflict && (
          <div className={styles.conflict} role="alert">
            CONFLICT (content): app.js — выберите версию вручную
          </div>
        )}

        <pre className={styles.file}>app.js: {state.files['app.js']}</pre>

        <div className={styles.controls}>
          <button type="button" className="it-demo__btn it-demo__btn--primary" onClick={next}>
            Следующий шаг merge
          </button>
          <button type="button" className="it-demo__btn it-demo__btn--secondary" onClick={reset}>
            Сброс
          </button>
        </div>

        <ul className={styles.log}>
          {state.log.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </DemoCard>
    </DemoShell>
  );
}

export default function GitBranchMergePlay() {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка демо Git merge…')}>
      {() => <GitBranchMergePlayInner />}
    </BrowserOnly>
  );
}
