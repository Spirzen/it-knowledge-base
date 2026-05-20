import React, {useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import styles from './GangOfFourCatalog.module.css';

const PATTERNS = {
  observer: {
    title: 'Observer',
    hint: 'Подписчики получают уведомление при изменении субъекта.',
    nodes: ['Subject', 'Observer A', 'Observer B'],
    action: (setMsg) => setMsg('Subject.notify() → A, B обновлены'),
  },
  factory: {
    title: 'Factory Method',
    hint: 'Фабрика создаёт объект нужного типа без знания конкретного класса клиентом.',
    nodes: ['Creator', 'Product A', 'Product B'],
    action: (setMsg) => setMsg('Creator.create() → new ProductB()'),
  },
  singleton: {
    title: 'Singleton',
    hint: 'Один экземпляр на процесс; повторный getInstance() возвращает тот же объект.',
    nodes: ['Singleton', 'instance', 'client'],
    action: (setMsg) => setMsg('getInstance() === getInstance() ✓'),
  },
};

function GangOfFourCatalogInner() {
  const [tab, setTab] = useState('observer');
  const [msg, setMsg] = useState('');
  const p = PATTERNS[tab];

  return (
    <DemoShell className={styles.root}>
      <DemoCard title="Паттерны GoF" subtitle="Мини-схема и действие для Observer, Factory, Singleton">
        <div className={styles.tabs} role="tablist">
          {Object.keys(PATTERNS).map((id) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              className={clsx(styles.tab, tab === id && styles.tabActive)}
              onClick={() => {
                setTab(id);
                setMsg('');
              }}
            >
              {PATTERNS[id].title}
            </button>
          ))}
        </div>
        <p className={styles.hint}>{p.hint}</p>
        <div className={styles.diagram}>
          {p.nodes.map((n, i) => (
            <React.Fragment key={n}>
              {i > 0 && <span className={styles.arrow}>→</span>}
              <span className={styles.node}>{n}</span>
            </React.Fragment>
          ))}
        </div>
        <button type="button" className="it-demo__btn it-demo__btn--primary" onClick={() => p.action(setMsg)}>
          Запустить
        </button>
        {msg && <p className={styles.msg}>{msg}</p>}
      </DemoCard>
    </DemoShell>
  );
}

export default function GangOfFourCatalog() {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка GoF…')}>
      {() => <GangOfFourCatalogInner />}
    </BrowserOnly>
  );
}
