import React, {useMemo, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import {BPMN_REFERENCE} from './shared/diagramStudioEngine';
import DiagramStudio from './DiagramStudio';
import styles from './BpmnReferencePlay.module.css';

const CATEGORIES = [...new Set(BPMN_REFERENCE.map((r) => r.category))];

function BpmnReferencePlayInner() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [active, setActive] = useState(BPMN_REFERENCE[0]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BPMN_REFERENCE.filter((item) => {
      if (category !== 'all' && item.category !== category) return false;
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        item.class.toLowerCase().includes(q) ||
        item.hint.toLowerCase().includes(q)
      );
    });
  }, [query, category]);

  return (
    <DemoShell>
      <DemoCard
        title="Справочник BPMN 2.0 — интерактивно"
        subtitle="Быстрый поиск элементов нотации и мини-редактор процесса"
      >
        <div className={styles.searchRow}>
          <input
            className="input-demo"
            placeholder="Поиск: gateway, timer, user task…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className={styles.chips}>
            <button
              type="button"
              className={clsx(styles.chip, category === 'all' && styles.chipActive)}
              onClick={() => setCategory('all')}
            >
              Все
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                className={clsx(styles.chip, category === c && styles.chipActive)}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.split}>
          <ul className={styles.list}>
            {filtered.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={clsx(styles.row, active?.id === item.id && styles.rowActive)}
                  onClick={() => setActive(item)}
                >
                  <span className={styles.rowCat}>{item.category}</span>
                  <strong>{item.name}</strong>
                  <code className={styles.rowCode}>{item.class}</code>
                </button>
              </li>
            ))}
          </ul>
          <div className={styles.detail}>
            {active && (
              <>
                <h4>{active.name}</h4>
                <p>
                  <span className={styles.badge}>{active.category}</span>
                </p>
                <p>
                  <strong>BPMN-класс:</strong>{' '}
                  <code>{active.class}</code>
                </p>
                <p>{active.hint}</p>
              </>
            )}
          </div>
        </div>
      </DemoCard>

      <DiagramStudio
        initialMode="bpmn"
        modes={['bpmn']}
        title="Практика: соберите процесс"
        subtitle="Шаблон "Обработка заказа" или своя схема — экспорт в Mermaid для Confluence"
      />
    </DemoShell>
  );
}

export default function BpmnReferencePlay() {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка справочника BPMN…')}>
      {() => <BpmnReferencePlayInner />}
    </BrowserOnly>
  );
}
