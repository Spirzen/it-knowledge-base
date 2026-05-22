import React, {useCallback, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import styles from './ScratchBlocksMiniPlay.module.css';

const BLOCKS = [
  {id: 'flag', label: 'когда 🚩 нажат', color: '#ffbf00', kind: 'hat'},
  {id: 'repeat', label: 'повторить 3 раз', color: '#ffab19', kind: 'c'},
  {id: 'move', label: 'идти 10 шагов', color: '#4c97ff', kind: 'stack'},
  {id: 'say', label: 'сказать «Привет!»', color: '#9966ff', kind: 'stack'},
];

const LOG_LINES = [
  '🚩 Зелёный флаг — программа стартовала',
  '↻ Повтор 1 из 3: шаг +10',
  '↻ Повтор 2 из 3: шаг +10',
  '↻ Повтор 3 из 3: шаг +10',
  '💬 Сказать: «Привет!»',
  '✓ Готово — спрайт на позиции 30',
];

function ScratchBlocksMiniPlayInner({compact = false}) {
  const [running, setRunning] = useState(false);
  const [step, setStep] = useState(-1);
  const [spriteX, setSpriteX] = useState(0);
  const [bubble, setBubble] = useState('');

  const run = useCallback(async () => {
    setRunning(true);
    setStep(0);
    setSpriteX(0);
    setBubble('');

    const delays = [400, 500, 450, 450, 450, 600];
    for (let i = 0; i < LOG_LINES.length; i++) {
      setStep(i);
      if (i >= 1 && i <= 3) setSpriteX((i - 1) * 10 + 10);
      if (i === 4) setBubble('Привет!');
      await new Promise((r) => setTimeout(r, delays[i] ?? 400));
    }
    setRunning(false);
    setStep(LOG_LINES.length);
  }, []);

  const body = (
    <div className={styles.layout}>
      <div className={styles.script}>
        <p className={styles.scriptLabel}>Скрипт (как в Scratch)</p>
        {BLOCKS.map((b, i) => (
          <div
            key={b.id}
            className={clsx(
              styles.block,
              b.kind === 'hat' && styles.blockHat,
              b.kind === 'c' && styles.blockC,
              running && step >= i && styles.blockActive,
            )}
            style={{'--block-color': b.color}}
          >
            {b.label}
          </div>
        ))}
        <button
          type="button"
          className="it-demo__btn"
          onClick={run}
          disabled={running}
        >
          {running ? 'Выполняется…' : '▶ Зелёный флаг'}
        </button>
      </div>

      <div className={styles.stage}>
        <p className={styles.scriptLabel}>Сцена</p>
        <div className={styles.stageInner}>
          <span
            className={styles.sprite}
            style={{transform: `translateX(${spriteX * 4}px)`}}
            aria-hidden
          >
            🐱
          </span>
          {bubble && <div className={styles.bubble}>{bubble}</div>}
        </div>
        <ol className={styles.log}>
          {LOG_LINES.map((line, i) => (
            <li
              key={line}
              className={clsx(
                styles.logLine,
                step >= i && styles.logLineDone,
                step === i && running && styles.logLineActive,
              )}
            >
              {line}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );

  if (compact) {
    return <div className={styles.root}>{body}</div>;
  }

  return (
    <DemoShell className={styles.root}>
      <DemoCard
        title="Scratch: блоки и сцена"
        subtitle="Тот же алгоритм, что в текстовых языках — цикл и вывод текста, но без опечаток в синтаксисе"
      >
        {body}
        <p className={styles.hint}>
          На уроке: после демо откройте сравнение синтаксиса — ученики увидят те же идеи в Java или Kotlin.
        </p>
      </DemoCard>
    </DemoShell>
  );
}

export default function ScratchBlocksMiniPlay(props) {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка Scratch-демо…')}>
      {() => <ScratchBlocksMiniPlayInner {...props} />}
    </BrowserOnly>
  );
}
