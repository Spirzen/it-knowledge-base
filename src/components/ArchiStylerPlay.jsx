import React, {useCallback, useMemo, useRef, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import useCopyToClipboard from './shared/useCopyToClipboard';
import {
  PATTERNS,
  ROLES,
  RELATION_KINDS,
  createClass,
  createEmptyModel,
  applyPattern,
  applyRoleScaffold,
  syncAutoRelations,
  generateClassCode,
  relationStroke,
  edgeAnchors,
  memberPreview,
  nextId,
} from './shared/archiStylerEngine';
import styles from './ArchiStylerPlay.module.css';

function ArchiStylerPlayInner({
  title = 'ArchiStyler — планировщик классов',
  subtitle = 'UML-диаграмма, роли, паттерны и превью кода C# / Java',
  defaultLanguage = 'csharp',
  defaultPattern = 'layered',
  namespace = 'App.Demo',
}) {
  const initial = useMemo(() => {
    const applied = applyPattern(defaultPattern);
    return {
      namespace,
      language: defaultLanguage,
      classes: applied.classes,
      relations: syncAutoRelations(applied.classes, applied.relations),
    };
  }, [defaultLanguage, defaultPattern, namespace]);

  const [language, setLanguage] = useState(initial.language);
  const [classes, setClasses] = useState(initial.classes);
  const [relations, setRelations] = useState(initial.relations);
  const [selectedId, setSelectedId] = useState(initial.classes[0]?.id ?? null);
  const [connectFrom, setConnectFrom] = useState(null);
  const [defaultRel, setDefaultRel] = useState('Uses');
  const [activePattern, setActivePattern] = useState(defaultPattern);
  const canvasRef = useRef(null);
  const {copy, copied} = useCopyToClipboard();

  const selected = classes.find((c) => c.id === selectedId) ?? null;

  const updateClass = useCallback((id, patch) => {
    setClasses((prev) => {
      const next = prev.map((c) => (c.id === id ? {...c, ...patch} : c));
      setRelations((rels) => syncAutoRelations(next, rels));
      return next;
    });
  }, []);

  const loadPattern = (patternId) => {
    const applied = applyPattern(patternId);
    setActivePattern(patternId);
    setClasses(applied.classes);
    setRelations(syncAutoRelations(applied.classes, applied.relations));
    setSelectedId(applied.classes[0]?.id ?? null);
    setConnectFrom(null);
  };

  const addClass = () => {
    const rect = canvasRef.current?.getBoundingClientRect();
    const cls = createClass({
      x: rect ? rect.width / 2 - 84 : 120,
      y: rect ? rect.height / 2 - 56 : 100,
    });
    setClasses((prev) => [...prev, cls]);
    setSelectedId(cls.id);
  };

  const addByRole = (roleId) => {
    if (roleId === 'None') return;
    let cls = createClass({
      name: roleId === 'Interface' ? 'IService' : roleId,
      role: roleId,
      isInterface: roleId === 'Interface',
    });
    cls = applyRoleScaffold(cls, roleId);
    const rect = canvasRef.current?.getBoundingClientRect();
    cls.x = rect ? 40 + Math.random() * (rect.width - 200) : 80;
    cls.y = rect ? 40 + Math.random() * (rect.height - 160) : 80;
    setClasses((prev) => [...prev, cls]);
    setSelectedId(cls.id);
  };

  const removeSelected = () => {
    if (!selectedId) return;
    setClasses((prev) => prev.filter((c) => c.id !== selectedId));
    setRelations((prev) => prev.filter((r) => r.from !== selectedId && r.to !== selectedId));
    setSelectedId(null);
    setConnectFrom(null);
  };

  const clearAll = () => {
    const empty = createEmptyModel(namespace);
    setClasses(empty.classes);
    setRelations(empty.relations);
    setSelectedId(null);
    setConnectFrom(null);
  };

  const onCardPointerDown = (e, cls) => {
    e.stopPropagation();
    if (connectFrom) {
      if (connectFrom !== cls.id) {
        setRelations((prev) => {
          if (prev.some((r) => r.from === connectFrom && r.to === cls.id && r.kind === defaultRel)) {
            return prev;
          }
          return [...prev, {id: nextId('rel'), from: connectFrom, to: cls.id, kind: defaultRel}];
        });
      }
      setConnectFrom(null);
      return;
    }
    setSelectedId(cls.id);
    const startX = e.clientX;
    const startY = e.clientY;
    const ox = cls.x;
    const oy = cls.y;

    const onMove = (ev) => {
      updateClass(cls.id, {x: ox + ev.clientX - startX, y: oy + ev.clientY - startY});
    };
    const onUp = () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  };

  const code = selected
    ? generateClassCode(selected, {namespace, language})
    : '// Выберите класс на диаграмме';

  const patternMeta = PATTERNS.find((p) => p.id === activePattern);

  return (
    <DemoShell className={styles.root}>
      <DemoCard title={title} subtitle={subtitle}>
        <div className={styles.toolbar}>
          <button type="button" className={styles.toolBtn} onClick={addClass}>
            + Класс
          </button>
          <select
            className={styles.roleSelect}
            defaultValue="None"
            aria-label="Роль нового класса"
            onChange={(e) => {
              addByRole(e.target.value);
              e.target.value = 'None';
            }}
          >
            {ROLES.map((r) => (
              <option key={r.id} value={r.id}>
                {r.label}
              </option>
            ))}
          </select>
          <button
            type="button"
            className={clsx(styles.toolBtn, connectFrom && styles.toolBtnOn)}
            onClick={() => setConnectFrom(connectFrom ? null : selectedId)}
            disabled={!selectedId}
          >
            {connectFrom ? 'Связь… (клик по цели)' : 'Связать'}
          </button>
          <select
            className={styles.langSelect}
            value={defaultRel}
            onChange={(e) => setDefaultRel(e.target.value)}
            aria-label="Тип связи"
          >
            {RELATION_KINDS.map((k) => (
              <option key={k.id} value={k.id}>
                {k.label}
              </option>
            ))}
          </select>
          <select
            className={styles.langSelect}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            aria-label="Язык генерации"
          >
            <option value="csharp">C#</option>
            <option value="java">Java</option>
          </select>
          <button type="button" className={styles.toolBtn} onClick={clearAll}>
            Очистить
          </button>
          <button
            type="button"
            className={clsx(styles.toolBtn, styles.toolBtnDanger)}
            onClick={removeSelected}
            disabled={!selectedId}
          >
            Удалить
          </button>
        </div>

        <div className={styles.layout}>
          <aside className={styles.panel}>
            <div className={styles.panelHead}>Шаблоны</div>
            <div className={styles.panelBody}>
              {PATTERNS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className={styles.patternBtn}
                  onClick={() => loadPattern(p.id)}
                >
                  <strong>{p.name}</strong>
                  <span>{p.description}</span>
                </button>
              ))}
            </div>
          </aside>

          <div
            className={clsx(styles.canvasWrap, connectFrom && styles.canvasWrapConnect)}
            ref={canvasRef}
            onClick={() => {
              setSelectedId(null);
              setConnectFrom(null);
            }}
            role="presentation"
          >
            <div className={styles.canvas}>
              <svg className={styles.svgLayer} aria-hidden>
                <defs>
                  <marker id="as-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="context-stroke" />
                  </marker>
                </defs>
                {relations.map((rel) => {
                  const from = classes.find((c) => c.id === rel.from);
                  const to = classes.find((c) => c.id === rel.to);
                  if (!from || !to) return null;
                  const {x1, y1, x2, y2} = edgeAnchors(from, to);
                  const mx = (x1 + x2) / 2;
                  const stroke = relationStroke(rel.kind);
                  const dash = rel.kind === 'Implements' ? '4 3' : undefined;
                  return (
                    <g key={rel.id}>
                      <path
                        d={`M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`}
                        fill="none"
                        stroke={stroke}
                        strokeWidth="2"
                        strokeDasharray={dash}
                        markerEnd="url(#as-arrow)"
                      />
                      <text
                        className={styles.edgeLabel}
                        x={(x1 + x2) / 2}
                        y={(y1 + y2) / 2 - 6}
                        textAnchor="middle"
                      >
                        {rel.kind}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {classes.map((cls) => (
                <div
                  key={cls.id}
                  className={clsx(
                    styles.classCard,
                    cls.isInterface && styles.classCardInterface,
                    selectedId === cls.id && styles.classCardSelected,
                  )}
                  style={{left: cls.x, top: cls.y, width: cls.w, height: cls.h}}
                  onPointerDown={(e) => onCardPointerDown(e, cls)}
                >
                  <div className={styles.classHead}>
                    {cls.name}
                    {cls.role && cls.role !== 'None' && (
                      <span className={styles.classRole}>{cls.role}</span>
                    )}
                  </div>
                  <div className={styles.classBody}>
                    {memberPreview(cls).map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className={styles.panel}>
            <div className={styles.panelHead}>Инспектор</div>
            <div className={clsx(styles.panelBody, styles.inspector)}>
              {selected ? (
                <>
                  <label htmlFor="as-name">Имя</label>
                  <input
                    id="as-name"
                    type="text"
                    value={selected.name}
                    onChange={(e) => updateClass(selected.id, {name: e.target.value})}
                  />
                  <label htmlFor="as-base">Базовый тип</label>
                  <input
                    id="as-base"
                    type="text"
                    value={selected.baseType || ''}
                    placeholder="BaseClass"
                    onChange={(e) => updateClass(selected.id, {baseType: e.target.value})}
                  />
                  <label htmlFor="as-impl">Интерфейсы (через запятую)</label>
                  <input
                    id="as-impl"
                    type="text"
                    value={(selected.implements || []).join(', ')}
                    onChange={(e) =>
                      updateClass(selected.id, {
                        implements: e.target.value
                          .split(',')
                          .map((s) => s.trim())
                          .filter(Boolean),
                      })
                    }
                  />
                  <div className={styles.flagRow}>
                    <label>
                      <input
                        type="checkbox"
                        checked={selected.isInterface}
                        onChange={(e) => updateClass(selected.id, {isInterface: e.target.checked})}
                      />{' '}
                      interface
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        checked={selected.isAbstract}
                        onChange={(e) => updateClass(selected.id, {isAbstract: e.target.checked})}
                      />{' '}
                      abstract
                    </label>
                  </div>
                  <button
                    type="button"
                    className="it-demo__btn it-demo__btn--secondary"
                    style={{width: '100%', marginBottom: '0.5rem'}}
                    onClick={() => copy(code)}
                  >
                    {copied ? 'Скопировано' : 'Копировать код'}
                  </button>
                  <pre className={styles.codeBox}>{code}</pre>
                </>
              ) : (
                <p className={styles.hint}>Выберите класс на холсте или примените шаблон слева.</p>
              )}
            </div>
          </aside>
        </div>

        {patternMeta && (
          <p className={styles.hint}>
            Активный шаблон: <strong>{patternMeta.name}</strong> — {patternMeta.description}. Перетаскивайте
            карточки; «Связать» — от выбранного класса к цели. Namespace/package: <code>{namespace}</code>.
          </p>
        )}

        <div className={styles.legend} aria-hidden>
          {RELATION_KINDS.slice(0, 4).map((k) => (
            <span key={k.id} className={styles.legendItem}>
              <span className={styles.legendSwatch} style={{background: k.stroke}} />
              {k.label}
            </span>
          ))}
        </div>
      </DemoCard>
    </DemoShell>
  );
}

export default function ArchiStylerPlay(props) {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка ArchiStyler…')}>
      {() => <ArchiStylerPlayInner {...props} />}
    </BrowserOnly>
  );
}
