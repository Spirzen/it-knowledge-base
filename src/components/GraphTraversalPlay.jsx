import React, {useMemo, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import {
  GRAPH_EDGES,
  GRAPH_NODES,
  TRAVERSAL_PRESETS,
  bfs,
} from './shared/graphTraversalEngine';
import styles from './GraphTraversalPlay.module.css';
import toolStyles from './shared/toolDemo.module.css';

function edgePath(from, to) {
  const a = GRAPH_NODES.find((n) => n.id === from);
  const b = GRAPH_NODES.find((n) => n.id === to);
  if (!a || !b) return '';
  return `M ${a.x} ${a.y} L ${b.x} ${b.y}`;
}

function GraphTraversalPlayInner() {
  const [presetId, setPresetId] = useState('friends');
  const preset = TRAVERSAL_PRESETS.find((p) => p.id === presetId) ?? TRAVERSAL_PRESETS[0];

  const traversal = useMemo(
    () => bfs(preset.start, preset.depth, preset.edgeTypes, preset.target),
    [preset],
  );

  const activeEdgeKeys = new Set(
    traversal.pathEdges.map((e) => `${e.from}-${e.to}`),
  );

  return (
    <DemoShell>
      <DemoCard
        title="Граф: обход связей vs JOIN в SQL"
        subtitle="Графовая СУБД идёт по рёбрам локально; в реляционной модели глубина растёт числом JOIN"
      >
        <div className={toolStyles.chips} style={{marginBottom: '0.65rem'}}>
          {TRAVERSAL_PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              className={clsx(toolStyles.chip, presetId === p.id && toolStyles.chipActive)}
              onClick={() => setPresetId(p.id)}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className={styles.wrap}>
          <svg viewBox="0 0 580 240" className={styles.svg} role="img" aria-label="Социальный граф">
            {GRAPH_EDGES.map((e) => (
              <path
                key={`${e.from}-${e.to}`}
                d={edgePath(e.from, e.to)}
                className={clsx(
                  styles.edgeLine,
                  activeEdgeKeys.has(`${e.from}-${e.to}`) && styles.edgeActive,
                )}
              />
            ))}
            {GRAPH_NODES.map((n) => (
              <g key={n.id}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={22}
                  className={clsx(
                    styles.nodeCircle,
                    n.id === preset.start && styles.nodeActive,
                    traversal.visited.includes(n.id) && styles.nodeVisited,
                  )}
                />
                <text
                  x={n.x}
                  y={n.y + 4}
                  textAnchor="middle"
                  fontSize="11"
                  fill="currentColor"
                >
                  {n.label}
                </text>
              </g>
            ))}
          </svg>

          <div className={styles.sidePanel}>
            <p>
              <strong>Узлов в обходе:</strong> {traversal.visited.length}
            </p>
            <div className={styles.queryBox}>{preset.cypher}</div>
            <div className={styles.compare}>
              <span className={styles.graphWin}>Граф: O(соседи)</span>
              <span className={styles.sqlCost}>SQL: ~{preset.sqlJoins} JOIN</span>
            </div>
            <p className="it-demo__hint" style={{marginTop: '0.5rem'}}>
              {preset.id === 'path_work'
                ? traversal.reachedTarget
                  ? 'Кратчайший путь найден по рёбрам графа.'
                  : 'Увеличьте глубину для достижения цели.'
                : 'Локальность обхода — ключевое преимущество Neo4j и аналогов.'}
            </p>
          </div>
        </div>
      </DemoCard>
    </DemoShell>
  );
}

export default function GraphTraversalPlay() {
  return (
    <BrowserOnly fallback={demoLoadingFallback()}>{() => <GraphTraversalPlayInner />}</BrowserOnly>
  );
}
