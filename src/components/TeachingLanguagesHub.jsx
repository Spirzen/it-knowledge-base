import React, {useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import {
  TEACHING_LADDER,
  TEACHING_LANGUAGES,
} from './shared/teachingLanguagesData';
import {TeachingLanguagesComparePlayInner} from './TeachingLanguagesComparePlay';
import {TeachingMemoryModelPlayInner} from './TeachingMemoryModelPlay';
import ScratchBlocksMiniPlay from './ScratchBlocksMiniPlay';
import FirstProgramPlay from './FirstProgramPlay';
import hubStyles from './BeginnerWebStackHub.module.css';

const TABS = [
  {id: 'overview', label: 'Обзор', icon: '🗺️'},
  ...TEACHING_LANGUAGES.map((l) => ({
    id: l.id,
    label: l.label,
    icon: l.icon,
  })),
];

function difficultyStars(n) {
  return '★'.repeat(n) + '☆'.repeat(5 - n);
}

function LanguagePanel({lang, showFirstProgram}) {
  return (
    <div className={hubStyles.langCard} style={{'--lang-accent': lang.color}}>
      <div className={hubStyles.langHero}>
        <h4 className={hubStyles.langTitle}>
          <span aria-hidden>{lang.icon}</span> {lang.label}
        </h4>
        <span className={hubStyles.badge}>{lang.compileBadge}</span>
        <span className={hubStyles.badge}>от {lang.ageFrom} лет</span>
        <span className={hubStyles.badge}>{difficultyStars(lang.difficulty)}</span>
      </div>

      <div className={hubStyles.grid2}>
        <div className={hubStyles.block}>
          <h5>Для кого на курсе</h5>
          <p>{lang.bestFor}</p>
        </div>
        <div className={hubStyles.block}>
          <h5>Образ для детей</h5>
          <p>{lang.metaphor}</p>
        </div>
      </div>

      <table className={hubStyles.table}>
        <tbody>
          <tr>
            <th>Парадигма</th>
            <td>{lang.paradigm}</td>
          </tr>
          <tr>
            <th>Выполнение</th>
            <td>{lang.execution}</td>
          </tr>
          <tr>
            <th>Память</th>
            <td>{lang.memory}</td>
          </tr>
          <tr>
            <th>Типизация</th>
            <td>{lang.typing}</td>
          </tr>
          <tr>
            <th>Экосистема</th>
            <td>{lang.ecosystem}</td>
          </tr>
        </tbody>
      </table>

      <div className={hubStyles.block}>
        <h5>Первая строка</h5>
        <pre>{lang.firstLine}</pre>
      </div>

      <div className={hubStyles.block}>
        <h5>Частые путаницы</h5>
        <ul className={hubStyles.pitfalls}>
          {lang.pitfalls.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>

      <div className={hubStyles.links}>
        <Link to={lang.articlePath}>Статья в энциклопедии →</Link>
      </div>

      {lang.id === 'scratch' && (
        <div className={hubStyles.embed}>
          <ScratchBlocksMiniPlay compact />
        </div>
      )}

      {showFirstProgram && lang.firstProgramLang && (
        <div className={hubStyles.embed}>
          <FirstProgramPlay language={lang.firstProgramLang} />
        </div>
      )}
    </div>
  );
}

function OverviewPanel({audience}) {
  return (
    <>
      <p className={hubStyles.overviewIntro}>
        {audience === 'kids'
          ? 'Сначала Scratch — блоки без страшных скобок. Потом текстовый язык: Kotlin или Java проще для Android, C# — для игр в Unity.'
          : 'Сравнение семи языков, которые часто ведут в школах и кружках: от визуального Scratch до системных C++ и Rust. Используйте вкладки и демо на проекторе.'}
      </p>

      <div className={hubStyles.path} aria-label="Рекомендуемая лестница">
        {TEACHING_LADDER.map((p, i) => (
          <React.Fragment key={p.step}>
            {i > 0 && <span className={hubStyles.pathArrow} aria-hidden>→</span>}
            <span className={hubStyles.pathStep} title={p.note}>
              {p.step}. {p.label}
            </span>
          </React.Fragment>
        ))}
      </div>

      <table className={hubStyles.table}>
        <thead>
          <tr>
            <th>Язык</th>
            <th>Возраст</th>
            <th>Сложность</th>
            <th>Память</th>
            <th>Типичный курс</th>
          </tr>
        </thead>
        <tbody>
          {TEACHING_LANGUAGES.map((l) => (
            <tr key={l.id}>
              <td>
                {l.icon} {l.label}
              </td>
              <td>{l.ageFrom}+</td>
              <td>{difficultyStars(l.difficulty)}</td>
              <td>{l.memory}</td>
              <td>{l.bestFor.slice(0, 48)}…</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h5 className="it-demo__label">Scratch: блоки на сцене</h5>
      <div className={hubStyles.embed}>
        <ScratchBlocksMiniPlay compact />
      </div>

      <h5 className="it-demo__label">Память: GC, ручная, владение</h5>
      <div className={hubStyles.embed}>
        <TeachingMemoryModelPlayInner embedded />
      </div>

      <h5 className="it-demo__label">Сравнение синтаксиса</h5>
      <div className={hubStyles.embed}>
        <TeachingLanguagesComparePlayInner compact embedded />
      </div>
    </>
  );
}

function TeachingLanguagesHubInner({
  defaultTab = 'overview',
  audience = 'teacher',
  showFirstProgram = false,
}) {
  const [active, setActive] = useState(
    TABS.some((t) => t.id === defaultTab) ? defaultTab : 'overview',
  );

  const lang = TEACHING_LANGUAGES.find((l) => l.id === active);

  return (
    <DemoShell>
      <DemoCard
        title="Языки для курса: Scratch, Java, C#, Kotlin, Go, C++, Rust"
        subtitle={
          audience === 'kids'
            ? 'Путеводитель для детей и родителей — можно проходить на уроке'
            : 'Анализ и интерактивы для преподавателя — возраст, память, синтаксис'
        }
      >
        <div className={hubStyles.tabs} role="tablist" aria-label="Учебные языки">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active === t.id}
              className={clsx(hubStyles.tab, active === t.id && hubStyles.tabActive)}
              onClick={() => setActive(t.id)}
            >
              <span aria-hidden>{t.icon}</span> {t.label}
            </button>
          ))}
        </div>

        {active === 'overview' ? (
          <OverviewPanel audience={audience} />
        ) : lang ? (
          <LanguagePanel lang={lang} showFirstProgram={showFirstProgram} />
        ) : null}

        <p className={hubStyles.hint}>
          Совет: 1-й урок — вкладка «Обзор» и Scratch-демо; 2-й — сравнение синтаксиса (Java + C#);
          3-й — «Первая программа» во вкладке выбранного языка.
        </p>
      </DemoCard>
    </DemoShell>
  );
}

export default function TeachingLanguagesHub(props) {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка учебного хаба языков…')}>
      {() => <TeachingLanguagesHubInner {...props} />}
    </BrowserOnly>
  );
}
