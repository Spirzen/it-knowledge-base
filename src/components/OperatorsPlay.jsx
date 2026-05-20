import React, {useMemo, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import {
  ARITY_TABS,
  BINARY_OPS,
  UNARY_OPS,
  buildPrioritySteps,
  evalBinary,
  evalTernary,
  evalUnary,
  formatOperandValue,
  formatResult,
  PRIORITY_WRONG,
} from './shared/operatorsEngine';
import styles from './OperatorsPlay.module.css';

function OperandChip({value, expr}) {
  return (
    <div className={clsx(styles.chip, styles.operand)}>
      <span className={styles.chipRole}>операнд</span>
      <span className={styles.chipValue}>{value}</span>
      {expr && <span className={styles.chipExpr}>{expr}</span>}
    </div>
  );
}

function OperatorChip({symbol, label}) {
  return (
    <div className={clsx(styles.chip, styles.operator)}>
      <span className={styles.chipRole}>оператор</span>
      <span className={styles.chipValue}>{symbol}</span>
      <span className={styles.chipExpr}>{label}</span>
    </div>
  );
}

function OperationChip({result}) {
  return (
    <div className={clsx(styles.chip, styles.operation)}>
      <span className={styles.chipRole}>операция</span>
      <span className={styles.chipValue}>{result}</span>
      <span className={styles.chipExpr}>результат</span>
    </div>
  );
}

function BinaryDemo() {
  const [a, setA] = useState(5);
  const [b, setB] = useState(3);
  const [opId, setOpId] = useState('+');

  const {op, result} = evalBinary(opId, a, b);
  const expr = `${formatOperandValue(a)} ${op.symbol} ${formatOperandValue(b)}`;

  return (
    <>
      <div className={styles.exprBar} aria-label="Выражение">
        <span className={styles.exprOperand}>{formatOperandValue(a)}</span>{' '}
        <span className={styles.exprOperator}>{op.symbol}</span>{' '}
        <span className={styles.exprOperand}>{formatOperandValue(b)}</span>{' '}
        <span className={styles.exprOperator}>=</span>{' '}
        <span className={styles.exprResult}>{formatResult(result)}</span>
      </div>

      <div className={styles.controlsRow}>
        <label className={styles.control}>
          <span className="it-demo__label">Операнд a</span>
          <input
            type="number"
            className="it-demo__input"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
          />
        </label>
        <label className={styles.control}>
          <span className="it-demo__label">Оператор</span>
          <select className="it-demo__select" value={opId} onChange={(e) => setOpId(e.target.value)}>
            {BINARY_OPS.map((o) => (
              <option key={o.id} value={o.id}>
                {o.symbol} — {o.label}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.control}>
          <span className="it-demo__label">Операнд b</span>
          <input
            type="number"
            className="it-demo__input"
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
          />
        </label>
      </div>

      <div className={styles.diagram}>
        <OperandChip value={formatOperandValue(a)} expr="a" />
        <span className={styles.arrow} aria-hidden>
          →
        </span>
        <OperatorChip symbol={op.symbol} label={op.label} />
        <span className={styles.arrow} aria-hidden>
          →
        </span>
        <OperandChip value={formatOperandValue(b)} expr="b" />
        <span className={styles.arrow} aria-hidden>
          ⇒
        </span>
        <OperationChip result={formatResult(result)} />
      </div>

      <p className="it-demo__alert it-demo__alert--info" style={{marginBottom: 0}}>
        Бинарный оператор связывает <strong>два операнда</strong>; результат вычисления —{' '}
        <strong>операция</strong>. Запись <code>{expr}</code> — выражение; после вычисления
        получаем <code>{formatResult(result)}</code>.
      </p>
    </>
  );
}

function UnaryDemo() {
  const [x, setX] = useState(7);
  const [opId, setOpId] = useState('neg');

  const {op, result} = evalUnary(opId, x);
  const displayX = formatOperandValue(x);
  const expr = `${op.symbol}${displayX}`;

  return (
    <>
      <div className={styles.exprBar}>
        <span className={styles.exprOperator}>{op.symbol}</span>
        <span className={styles.exprOperand}>{displayX}</span>
        <span className={styles.exprOperator}> = </span>
        <span className={styles.exprResult}>{formatResult(result)}</span>
      </div>

      <div className={styles.controlsRow}>
        <label className={styles.control}>
          <span className="it-demo__label">Операнд x</span>
          <input
            type="number"
            className="it-demo__input"
            value={x}
            onChange={(e) => setX(Number(e.target.value))}
          />
        </label>
        <label className={styles.control}>
          <span className="it-demo__label">Оператор</span>
          <select className="it-demo__select" value={opId} onChange={(e) => setOpId(e.target.value)}>
            {UNARY_OPS.map((o) => (
              <option key={o.id} value={o.id}>
                {o.symbol} — {o.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.diagram}>
        <OperandChip value={displayX} expr="x" />
        <span className={styles.arrow}>→</span>
        <OperatorChip symbol={op.symbol} label={op.label} />
        <span className={styles.arrow}>⇒</span>
        <OperationChip result={formatResult(result)} />
      </div>

      <p className="it-demo__alert it-demo__alert--info" style={{marginBottom: 0}}>
        Унарный оператор действует на <strong>один операнд</strong>: <code>{expr}</code>. Арность
        оператора — 1.
      </p>
    </>
  );
}

function TernaryDemo() {
  const [condition, setCondition] = useState(true);
  const [whenTrue, setWhenTrue] = useState(100);
  const [whenFalse, setWhenFalse] = useState(0);

  const {branch, result} = evalTernary(condition, whenTrue, whenFalse);

  return (
    <>
      <div className={styles.exprBar}>
        <span className={styles.exprOperand}>{condition ? 'true' : 'false'}</span>
        <span className={styles.exprOperator}> ? </span>
        <span className={styles.exprOperand}>{whenTrue}</span>
        <span className={styles.exprOperator}> : </span>
        <span className={styles.exprOperand}>{whenFalse}</span>
        <span className={styles.exprOperator}> = </span>
        <span className={styles.exprResult}>{formatResult(result)}</span>
      </div>

      <div className={styles.controlsRow}>
        <label className={styles.control}>
          <span className="it-demo__label">Условие</span>
          <select
            className="it-demo__select"
            value={condition ? 'true' : 'false'}
            onChange={(e) => setCondition(e.target.value === 'true')}
          >
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </label>
        <label className={styles.control}>
          <span className="it-demo__label">если истина</span>
          <input
            type="number"
            className="it-demo__input"
            value={whenTrue}
            onChange={(e) => setWhenTrue(Number(e.target.value))}
          />
        </label>
        <label className={styles.control}>
          <span className="it-demo__label">если ложь</span>
          <input
            type="number"
            className="it-demo__input"
            value={whenFalse}
            onChange={(e) => setWhenFalse(Number(e.target.value))}
          />
        </label>
      </div>

      <div className={styles.diagram}>
        <OperandChip value={condition ? 'true' : 'false'} expr="условие" />
        <span className={styles.arrow}>?</span>
        <OperandChip value={String(whenTrue)} expr="ветка true" />
        <span className={styles.arrow}>:</span>
        <OperandChip value={String(whenFalse)} expr="ветка false" />
        <span className={styles.arrow}>⇒</span>
        <OperationChip result={formatResult(result)} />
      </div>

      <p className="it-demo__alert it-demo__alert--info" style={{marginBottom: 0}}>
        Тернарный оператор <code>?:</code> принимает <strong>три операнда</strong>. Сейчас условие{' '}
        {condition ? 'истинно' : 'ложно'}, выбрана ветка <code>{formatResult(branch)}</code>.
      </p>
    </>
  );
}

function PriorityDemo() {
  const [a, setA] = useState(2);
  const [b, setB] = useState(3);
  const [c, setC] = useState(4);
  const [stepIdx, setStepIdx] = useState(2);

  const steps = useMemo(() => buildPrioritySteps(a, b, c), [a, b, c]);
  const wrong = PRIORITY_WRONG(a, b, c);
  const correct = steps[steps.length - 1].partial;
  const highlight = steps[Math.min(stepIdx, steps.length - 1)].highlight;

  return (
    <>
      <div className={styles.controlsRow}>
        <label className={styles.control}>
          <span className="it-demo__label">a</span>
          <input
            type="number"
            className="it-demo__input"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
          />
        </label>
        <label className={styles.control}>
          <span className="it-demo__label">b</span>
          <input
            type="number"
            className="it-demo__input"
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
          />
        </label>
        <label className={styles.control}>
          <span className="it-demo__label">c</span>
          <input
            type="number"
            className="it-demo__input"
            value={c}
            onChange={(e) => setC(Number(e.target.value))}
          />
        </label>
      </div>

      <div className={styles.priorityExpr}>
        <span className={highlight === 'add' || highlight === 'done' ? styles.priorityHighlightAdd : undefined}>
          {a}
        </span>
        {' + '}
        <span
          className={
            highlight === 'mul' || highlight === 'done' ? styles.priorityHighlightMul : undefined
          }
        >
          {b} * {c}
        </span>
        {' = '}
        <span className={styles.priorityHighlightDone}>{correct}</span>
      </div>

      <ul className={styles.stepList}>
        {steps.map((s, idx) => (
          <li key={s.step}>
            <button
              type="button"
              className={clsx(styles.stepItem, stepIdx === idx && styles.stepItemActive)}
              style={{width: '100%', textAlign: 'left', cursor: 'pointer', background: 'inherit'}}
              onClick={() => setStepIdx(idx)}
            >
              <span className={styles.stepNum}>{s.step}</span>
              <span>{s.text}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className={styles.compareBox}>
        <div className={styles.compareCard}>
          <strong>Правильно (приоритет *)</strong>
          <code>
            {a} + ({b} * {c}) = {correct}
          </code>
        </div>
        <div className={styles.compareCard}>
          <strong>Ошибочно ((a + b) * c)</strong>
          <code>
            ({a} + {b}) * {c} = {wrong}
          </code>
        </div>
      </div>
    </>
  );
}

function OperatorsPlayInner() {
  const [tab, setTab] = useState('binary');

  return (
    <DemoShell className={styles.root}>
      <DemoCard
        title="Операнды, операторы и операции"
        subtitle="Интерактивно: кто на кого действует и какой получается результат"
      >
        <div className="it-demo__tabs" role="tablist">
          {ARITY_TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              className={clsx('it-demo__tab', tab === t.id && 'it-demo__tab--active')}
              onClick={() => setTab(t.id)}
              title={t.hint}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'binary' && <BinaryDemo />}
        {tab === 'unary' && <UnaryDemo />}
        {tab === 'ternary' && <TernaryDemo />}
        {tab === 'priority' && <PriorityDemo />}
      </DemoCard>
    </DemoShell>
  );
}

export default function OperatorsPlay() {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка демо операторов…')}>
      {() => <OperatorsPlayInner />}
    </BrowserOnly>
  );
}
