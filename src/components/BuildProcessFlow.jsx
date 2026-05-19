import React, {useState, useEffect} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import styles from './BuildProcessFlow.module.css';

const STEPS = [
  {
    id: 0,
    title: 'Написание исходного кода',
    subtitle: 'Создание программы',
    description:
      'Разработчик пишет код на языке высокого уровня. Файлы .c, .cpp, .java, .go хранятся на диске — процессор их не выполняет напрямую.',
    developerAction: 'Написание в IDE',
    systemAction: 'Хранение исходников',
    artifact: 'main.c',
    icon: '✍️',
    color: 'var(--build-code)',
  },
  {
    id: 1,
    title: 'Запуск сборки',
    subtitle: 'Инициализация',
    description: 'Команда Build в IDE или вызов компилятора из терминала запускает цепочку инструментов.',
    developerAction: 'Ctrl+Shift+B / make',
    systemAction: 'Активация toolchain',
    artifact: 'build.log',
    icon: '▶️',
    color: 'var(--build-start)',
  },
  {
    id: 2,
    title: 'Препроцессинг',
    subtitle: 'Предобработка',
    description: 'Обработка #include, #define, условной компиляции; удаление комментариев.',
    developerAction: 'Директивы #include',
    systemAction: 'Макроподстановка',
    artifact: 'main.i',
    icon: '🔧',
    color: 'var(--build-pre)',
  },
  {
    id: 3,
    title: 'Компиляция',
    subtitle: 'Трансляция',
    description: 'Лексический, синтаксический и семантический анализ; генерация объектного кода (.o / .obj).',
    developerAction: 'Исправление ошибок',
    systemAction: 'Генерация машинных инструкций',
    artifact: 'main.o',
    icon: '⚙️',
    color: 'var(--build-compile)',
  },
  {
    id: 4,
    title: 'Линковка',
    subtitle: 'Сборка EXE',
    description: 'Объединение .o и библиотек, разрешение символов, формирование исполняемого файла.',
    developerAction: 'Пути к .lib / .a',
    systemAction: 'Линковщик ld / link.exe',
    artifact: 'app.exe',
    icon: '🔗',
    color: 'var(--build-link)',
  },
  {
    id: 5,
    title: 'Публикация',
    subtitle: 'Деплой',
    description: 'Упаковка и доставка: Docker, магазины приложений, установщики.',
    developerAction: 'CI/CD pipeline',
    systemAction: 'Загрузка артефактов',
    artifact: 'release.zip',
    icon: '🚀',
    color: 'var(--build-ship)',
  },
];

function BuildProcessFlowInner() {
  const [step, setStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 996);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const current = STEPS[step];
  const canNext = step < STEPS.length - 1;

  const DesktopFlow = () => (
    <div className={clsx(styles.flowDiagram, styles.desktopOnly)}>
      <div className={styles.node} style={{'--node-color': 'var(--build-code)'}}>
        <span className={styles.nodeEmoji}>📝</span>
        Код
        <span className={styles.nodeSub}>Исходный</span>
      </div>
      {STEPS.map((s) => (
        <React.Fragment key={s.id}>
          <span className={styles.arrow} aria-hidden>
            →
          </span>
          <div
            className={clsx(
              styles.node,
              step > s.id && styles.nodeDone,
              step === s.id && styles.nodeActive,
            )}
            style={{'--node-color': s.color}}
          >
            <span className={styles.nodeEmoji}>{s.icon}</span>
            {s.title.split(' ')[0]}
            <span className={styles.nodeSub}>{s.subtitle}</span>
            {step > s.id && <span style={{fontSize: '0.5rem', color: s.color}}>✓</span>}
          </div>
        </React.Fragment>
      ))}
      <span className={styles.arrow} aria-hidden>
        →
      </span>
      <div
        className={clsx(styles.node, step === STEPS.length - 1 && styles.nodeActive)}
        style={{'--node-color': 'var(--build-ship)'}}
      >
        <span className={styles.nodeEmoji}>🎯</span>
        Готово
      </div>
    </div>
  );

  const MobileFlow = () => (
    <div className={styles.mobileOnly}>
      <div
        className={styles.mobileHero}
        style={{'--node-color': current.color}}
      >
        <span className={styles.mobileIcon}>{current.icon}</span>
        <div>
          <strong>{current.title}</strong>
          <br />
          <small style={{color: 'var(--demo-muted)'}}>{current.subtitle}</small>
        </div>
      </div>
      <div className={styles.dots}>
        {STEPS.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            className={styles.dot}
            aria-label={s.title}
            onClick={() => setStep(idx)}
            style={{
              width: idx === step ? '1.75rem' : '0.45rem',
              background: idx <= step ? s.color : 'var(--demo-border)',
            }}
          />
        ))}
      </div>
      <div className={styles.stepList}>
        {STEPS.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            className={clsx(styles.stepListItem, idx === step && styles.stepListItemActive)}
            style={idx === step ? {'--node-color': s.color} : undefined}
            onClick={() => setStep(idx)}
          >
            <span>{s.icon}</span>
            <span style={{flex: 1, fontSize: '0.8rem'}}>{s.title}</span>
            {idx < step && <span style={{color: 'var(--demo-success)', fontSize: '0.7rem'}}>✓</span>}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <DemoShell className={styles.root}>
      <DemoCard title="Процесс сборки приложения" subtitle="От исходника до публикации — шаг за шагом">
        {isMobile ? <MobileFlow /> : <DesktopFlow />}

        <div className={clsx('it-demo__progress', styles.desktopOnly)} style={{marginBottom: '1rem'}}>
          <div
            className="it-demo__progress-bar"
            style={{width: `${((step + 1) / STEPS.length) * 100}%`}}
          />
        </div>
        <p style={{textAlign: 'center', fontSize: '0.75rem', color: 'var(--demo-muted)', margin: '0 0 1rem'}}>
          Этап {step + 1} из {STEPS.length}
        </p>

        <div
          className="it-demo__badge it-demo__badge--active"
          style={{background: `color-mix(in srgb, ${current.color} 20%, transparent)`, color: current.color}}
        >
          {current.icon} {current.title}
        </div>

        <p style={{margin: '0.75rem 0', lineHeight: 1.55, fontSize: '0.875rem'}}>{current.description}</p>

        <div className={styles.detailGrid}>
          <div className={styles.detailCard}>
            <strong>Разработчик</strong>
            <br />
            {current.developerAction}
          </div>
          <div className={styles.detailCard}>
            <strong>Система</strong>
            <br />
            {current.systemAction}
          </div>
        </div>

        <p style={{fontSize: '0.8rem', margin: 0}}>
          <strong>Артефакт:</strong>{' '}
          <code className={styles.artifact}>{current.artifact}</code>
        </p>

        <div className="it-demo__row" style={{marginTop: '1.25rem', justifyContent: 'flex-end'}}>
          {step > 0 && (
            <button type="button" className="it-demo__btn it-demo__btn--secondary" onClick={() => setStep(0)}>
              Сначала
            </button>
          )}
          <button
            type="button"
            className="it-demo__btn it-demo__btn--primary"
            disabled={!canNext && step === STEPS.length - 1}
            onClick={() => (canNext ? setStep(step + 1) : null)}
            style={canNext ? {background: current.color, borderColor: current.color} : undefined}
          >
            {canNext ? `Далее: ${STEPS[step + 1].title.split(' ')[0]}…` : 'Процесс завершён'}
          </button>
        </div>

        {(step === 3 || step === 4) && (
          <div className={styles.buildTypes}>
            <strong>Debug vs Release</strong>
            <div className={styles.buildTypeRow}>
              <div className={styles.buildDebug}>
                <strong>Debug</strong> — отладочные символы, без агрессивной оптимизации
              </div>
              <div className={styles.buildRelease}>
                <strong>Release</strong> — оптимизация скорости и размера, без отладочной информации
              </div>
            </div>
          </div>
        )}
      </DemoCard>
    </DemoShell>
  );
}

export default function BuildProcessFlow() {
  return (
    <BrowserOnly fallback={demoLoadingFallback()}>
      {() => <BuildProcessFlowInner />}
    </BrowserOnly>
  );
}
