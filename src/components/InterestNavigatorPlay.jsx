import React, {useEffect, useMemo, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';

const AREAS = [
  {id: 'programming', label: 'Программирование'},
  {id: 'web', label: 'Веб-разработка'},
  {id: 'frontend', label: 'Фронтенд'},
  {id: 'backend', label: 'Бэкенд'},
  {id: 'data', label: 'Аналитика данных'},
  {id: 'architecture', label: 'Архитектура'},
  {id: 'analytics', label: 'Системная/бизнес-аналитика'},
  {id: 'testing', label: 'Тестирование'},
  {id: 'security', label: 'Инфобез/кибербез'},
  {id: 'devops', label: 'DevOps/администрирование'},
  {id: 'ai', label: 'AI-направление'},
  {id: 'communication', label: 'Коммуникация и техписьмо'},
];

const STEPS = [
  {
    id: 'b1',
    title: 'Базовая информатика',
    href: '/encyclopedia/Основы/1.035.%20Базовая%20информатика/intro',
    section: 'Старт',
    weights: {communication: 1, data: 1, devops: 1},
  },
  {
    id: 'b2',
    title: 'Система и сеть',
    href: '/section/system-network',
    section: 'Фундамент',
    weights: {devops: 2, security: 2, architecture: 1},
  },
  {
    id: 'b3',
    title: 'Данные и разметка',
    href: '/encyclopedia/3-data-markup/data-markup',
    section: 'Фундамент',
    weights: {data: 2, web: 1, analytics: 1},
  },
  {
    id: 'b4',
    title: 'Код и разработка',
    href: '/encyclopedia/4-code-dev/code-dev',
    section: 'Проба профессии',
    weights: {
      programming: 3,
      architecture: 2,
      testing: 1,
      backend: 1,
      frontend: 1,
    },
  },
  {
    id: 'b5',
    title: 'HTML и CSS',
    href: '/encyclopedia/3-data-markup/3-09-html/intro',
    section: 'Развилки',
    weights: {web: 3, frontend: 2, programming: 1},
  },
  {
    id: 'b6',
    title: 'SQL',
    href: '/encyclopedia/3-data-markup/3-07-sql/intro',
    section: 'Развилки',
    weights: {data: 3, analytics: 2, backend: 1},
  },
  {
    id: 'b7',
    title: 'Интеграции и API',
    href: '/encyclopedia/Система%20и%20сеть/2.09.%20Основы%20интеграционного%20взаимодействия/1',
    section: 'Развилки',
    weights: {architecture: 2, analytics: 2, backend: 2, testing: 1},
  },
  {
    id: 'b8',
    title: 'Информационная безопасность',
    href: '/encyclopedia/Система%20и%20сеть/2.08.%20Основы%20информационной%20безопасности/1',
    section: 'Развилки',
    weights: {security: 3, devops: 1, architecture: 1},
  },
  {
    id: 'b9',
    title: 'Системное администрирование',
    href: '/encyclopedia/Система%20и%20сеть/2.06.%20Системное%20администрирование/1',
    section: 'Развилки',
    weights: {devops: 3, security: 1, architecture: 1},
  },
  {
    id: 'b10',
    title: 'ИИ: введение',
    href: '/encyclopedia/6-ai/6-01-vvedenie-v-ii/intro',
    section: 'Развилки',
    weights: {ai: 3, data: 1, analytics: 1},
  },
  {
    id: 'b11',
    title: 'Тестирование',
    href: '/encyclopedia/7-project/7-05-testirovanie/intro',
    section: 'Развилки',
    weights: {testing: 3, analytics: 1, communication: 1},
  },
  {
    id: 'b12',
    title: 'Техническое письмо',
    href: '/encyclopedia/7-project/7-08-tehnicheskoe-pismo/intro',
    section: 'Развилки',
    weights: {communication: 3, analytics: 1, testing: 1},
  },
];

const STORAGE_KEY = 'it-universe-interest-ratings-v1';

function scoreAreas(ratings) {
  const totals = Object.fromEntries(AREAS.map((a) => [a.id, 0]));
  STEPS.forEach((step) => {
    const rating = ratings[step.id] ?? 0;
    Object.entries(step.weights).forEach(([areaId, weight]) => {
      totals[areaId] += rating * weight;
    });
  });
  return totals;
}

function InterestNavigatorPlayInner() {
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setRatings(JSON.parse(raw));
    } catch (error) {
      console.error('Не удалось загрузить оценки интереса', error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ratings));
    } catch (error) {
      console.error('Не удалось сохранить оценки интереса', error);
    }
  }, [ratings]);

  const areaScores = useMemo(() => scoreAreas(ratings), [ratings]);
  const ratedCount = useMemo(
    () => STEPS.filter((s) => (ratings[s.id] ?? 0) > 0).length,
    [ratings],
  );

  const topAreas = useMemo(
    () =>
      AREAS.map((area) => ({...area, score: areaScores[area.id] ?? 0}))
        .sort((a, b) => b.score - a.score)
        .slice(0, 5),
    [areaScores],
  );

  const recommendations = useMemo(() => {
    const strong = new Set(topAreas.slice(0, 3).map((a) => a.id));
    const list = [];
    if (strong.has('programming') || strong.has('backend') || strong.has('frontend')) {
      list.push('Языки и практика: двигайтесь в раздел 5 и закрепляйте через пет-проекты.');
    }
    if (strong.has('web') || strong.has('frontend')) {
      list.push('Веб-вектор: HTML/CSS → JavaScript → PHP/Node.js и проект с UI.');
    }
    if (strong.has('data') || strong.has('analytics')) {
      list.push('Аналитика: SQL + анализ данных + основы системного/бизнес-анализа.');
    }
    if (strong.has('security')) {
      list.push('Кибербез: идите в блоки по ИБ, пентесту и защитной инженерии.');
    }
    if (strong.has('devops')) {
      list.push('Инфра-вектор: администрирование → DevOps/CI-CD → контейнеризация.');
    }
    if (strong.has('ai')) {
      list.push('AI-вектор: после основ переходите в ML/нейросети и мини-проект.');
    }
    if (!list.length) {
      list.push('Сейчас профиль не выражен: попробуйте AI, тестирование и техписьмо, затем вернитесь к языкам.');
    }
    return list;
  }, [topAreas]);

  return (
    <DemoShell>
      <DemoCard
        title="Навигатор интересов в IT"
        subtitle="Оценивайте темы от 1 до 5 и смотрите, какие направления проявляются."
      >
        <div style={{display: 'grid', gap: '0.75rem'}}>
          {STEPS.map((step) => {
            const value = ratings[step.id] ?? 0;
            return (
              <div
                key={step.id}
                style={{
                  border: '1px solid var(--ifm-color-emphasis-300)',
                  borderRadius: 10,
                  padding: '0.75rem',
                }}
              >
                <div style={{display: 'flex', justifyContent: 'space-between', gap: '0.75rem'}}>
                  <a href={step.href} style={{fontWeight: 700}}>
                    {step.title}
                  </a>
                  <span style={{opacity: 0.7, fontSize: '0.8rem'}}>{step.section}</span>
                </div>
                <div style={{display: 'flex', gap: '0.35rem', marginTop: '0.5rem', flexWrap: 'wrap'}}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setRatings((prev) => ({...prev, [step.id]: n}))}
                      title={`Оценка ${n}`}
                      style={{
                        border: '1px solid var(--ifm-color-emphasis-300)',
                        borderRadius: 8,
                        background: n <= value ? '#ffd166' : 'transparent',
                        cursor: 'pointer',
                        padding: '0.2rem 0.4rem',
                      }}
                    >
                      {n <= value ? '★' : '☆'}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setRatings((prev) => ({...prev, [step.id]: 0}))}
                    style={{
                      border: '1px solid var(--ifm-color-emphasis-300)',
                      borderRadius: 8,
                      background: 'transparent',
                      cursor: 'pointer',
                      padding: '0.2rem 0.5rem',
                    }}
                  >
                    Пропустить
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <hr />

        <p>
          Пройдено шагов: <b>{ratedCount}</b> / {STEPS.length}
        </p>
        <p className="it-demo__label">Топ направлений</p>
        <ul>
          {topAreas.map((area) => (
            <li key={area.id}>
              {area.label}: <b>{area.score}</b>
            </li>
          ))}
        </ul>

        <p className="it-demo__label">Рекомендации</p>
        <ul>
          {recommendations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </DemoCard>
    </DemoShell>
  );
}

export default function InterestNavigatorPlay() {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка навигатора интересов...')}>
      {() => <InterestNavigatorPlayInner />}
    </BrowserOnly>
  );
}
