import React, {useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import {PARADIGMS} from './shared/programmingParadigmEngine';
import styles from './ProgrammingParadigmPlay.module.css';
import toolStyles from './shared/toolDemo.module.css';

function ProgrammingParadigmPlayInner() {
  const [paradigmId, setParadigmId] = useState('imperative');
  const [stepIdx, setStepIdx] = useState(0);
  const p = PARADIGMS.find((x) => x.id === paradigmId) ?? PARADIGMS[0];
  const steps = p.steps;
  const safeStep = Math.min(stepIdx, steps.length - 1);

  const pick = (id) => {
    setParadigmId(id);
    setStepIdx(0);
  };

  return (
    <DemoShell className={styles.root}>
      <DemoCard
        title="Одна задача — разные парадигмы"
        subtitle="Переключайте стиль мышления и смотрите, как меняется код и ход выполнения"
      >
        <div className={toolStyles.chips}>
          {PARADIGMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={clsx(toolStyles.chip, paradigmId === item.id && toolStyles.chipActive)}
              onClick={() => pick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <p className={styles.focus}>{p.focus}</p>
        <p className="it-demo__hint" style={{marginTop: 0}}>
          Языки: {p.langs}
        </p>

        <div className={styles.split}>
          <pre className={styles.code}>{p.code}</pre>
          <div className={styles.trace}>
            <span className="it-demo__label">Трассировка</span>
            <ol className={styles.steps}>
              {steps.map((line, i) => (
                <li
                  key={line}
                  className={clsx(i === safeStep && styles.stepActive, i < safeStep && styles.stepDone)}
                >
                  {line}
                </li>
              ))}
            </ol>
            <div className={styles.controls}>
              <button
                type="button"
                className="it-demo__btn it-demo__btn--secondary"
                disabled={safeStep <= 0}
                onClick={() => setStepIdx((n) => Math.max(0, n - 1))}
              >
                ← Назад
              </button>
              <button
                type="button"
                className="it-demo__btn it-demo__btn--primary"
                disabled={safeStep >= steps.length - 1}
                onClick={() => setStepIdx((n) => Math.min(steps.length - 1, n + 1))}
              >
                Шаг →
              </button>
              <button
                type="button"
                className="it-demo__btn it-demo__btn--secondary"
                onClick={() => setStepIdx(0)}
              >
                Сброс
              </button>
            </div>
          </div>
        </div>

        <ul className={styles.traits}>
          {p.traits.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </DemoCard>
    </DemoShell>
  );
}

export default function ProgrammingParadigmPlay() {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка демо парадигм…')}>
      {() => <ProgrammingParadigmPlayInner />}
    </BrowserOnly>
  );
}
