import React, {lazy, Suspense, useEffect, useMemo, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback, demoSkeletonFallback} from './shared/demoFallback';
import styles from './LabTrainersHub.module.css';

const CATEGORIES = [
  {
    id: 'sql',
    label: 'SQL',
    trainers: [
      {
        id: 'sql-select',
        label: 'SELECT',
        article: '/encyclopedia/3-data-markup/3-07-sql/1',
        load: () => import('./SqlTrainer'),
      },
      {
        id: 'sql-insert',
        label: 'INSERT',
        article: '/encyclopedia/3-data-markup/3-07-sql/5',
        load: () => import('./SqlInsertTrainer'),
      },
      {
        id: 'sql-update',
        label: 'UPDATE',
        article: '/encyclopedia/3-data-markup/3-07-sql/5',
        load: () => import('./SqlUpdateTrainer'),
      },
      {
        id: 'sql-delete',
        label: 'DELETE',
        article: '/encyclopedia/3-data-markup/3-07-sql/5',
        load: () => import('./SqlDeleteTrainer'),
      },
      {
        id: 'sql-join',
        label: 'JOIN',
        article: '/encyclopedia/3-data-markup/3-07-sql/55',
        load: () => import('./SqlJoinTrainer'),
      },
    ],
  },
  {
    id: 'shell',
    label: 'Терминал',
    trainers: [
      {
        id: 'bash',
        label: 'Bash',
        article: '/encyclopedia/5-languages/5-25-bash/intro',
        load: () => import('./BashShellPlay'),
        props: {lesson: 'basics'},
      },
      {
        id: 'powershell',
        label: 'PowerShell',
        article: '/encyclopedia/5-languages/5-26-powershell/intro',
        load: () => import('./PowerShellShellPlay'),
        props: {lesson: 'intro'},
      },
      {
        id: 'mongo',
        label: 'MongoDB',
        article: '/encyclopedia/3-data-markup/3-06-nosql/411',
        load: () => import('./MongoShellPlay'),
      },
      {
        id: 'memcached',
        label: 'Memcached',
        article: '/encyclopedia/3-data-markup/3-06-nosql/8111',
        load: () => import('./MemcachedShellPlay'),
      },
    ],
  },
  {
    id: 'devops',
    label: 'Git и DevOps',
    trainers: [
      {
        id: 'git',
        label: 'Git: ветки',
        article: '/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/113',
        load: () => import('./GitBranchMergePlay'),
      },
      {
        id: 'docker-compose',
        label: 'Docker Compose',
        article: '/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/1111',
        load: () => import('./DockerComposePlay'),
      },
      {
        id: 'docker-hardening',
        label: 'Docker: безопасность',
        article: '/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/125',
        load: () => import('./DockerHardeningPlay'),
      },
      {
        id: 'gitlab-ci',
        label: 'GitLab CI',
        article: '/encyclopedia/8-infra-security/8-04-devops-ci-cd/2113',
        load: () => import('./GitLabCiPipelinePlay'),
      },
      {
        id: 'file-ops',
        label: 'Файлы и папки',
        article: '/tools/automation/2',
        load: () => import('./FileOpsLabPlay'),
      },
    ],
  },
  {
    id: 'web',
    label: 'Веб и данные',
    trainers: [
      {
        id: 'html',
        label: 'HTML / JS',
        article: '/encyclopedia/3-data-markup/3-09-html/1',
        load: () => import('./HTMLPlayground'),
      },
      {
        id: 'regex',
        label: 'Регулярные выражения',
        article: '/encyclopedia/4-code-dev/4-01-algoritmy/111',
        load: () => import('./RegexPlaygroundDemo'),
      },
      {
        id: 'search',
        label: 'Поисковые запросы',
        article: '/encyclopedia/1-basics/1-21-poisk-informatsii/3',
        load: () => import('./SearchQueryLab'),
      },
      {
        id: 'soap',
        label: 'SOAP',
        article: '/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/126',
        load: () => import('./SOAPTrainer'),
      },
    ],
  },
  {
    id: 'practice',
    label: 'Практика',
    trainers: [
      {
        id: 'programming-tasks',
        label: 'Задачи разработчика',
        article: '/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/613',
        load: () => import('./ProgrammingTasksPlay'),
      },
      {
        id: 'english',
        label: 'IT-английский',
        article: '/encyclopedia/1-basics/1-30-angliyskiy-yazyk/2',
        load: () => import('./EnglishVocabularyTrainer'),
      },
      {
        id: 'netiquette',
        label: 'Нетикет',
        article: '/encyclopedia/9-spinoff/9-10-internet-kultura/113',
        load: () => import('./NetiquettePlay'),
      },
    ],
  },
];

const LAZY_BY_ID = new Map();

function getLazyTrainer(loadFn) {
  const key = loadFn.toString();
  if (!LAZY_BY_ID.has(key)) {
    LAZY_BY_ID.set(key, lazy(loadFn));
  }
  return LAZY_BY_ID.get(key);
}

function resolveHashSelection() {
  if (typeof window === 'undefined') {
    return null;
  }
  const raw = window.location.hash.replace(/^#/, '').trim();
  if (!raw) {
    return null;
  }
  const [categoryId, trainerId] = raw.split('/').map((part) => part.trim()).filter(Boolean);
  if (!categoryId) {
    return null;
  }
  const category = CATEGORIES.find((c) => c.id === categoryId);
  if (!category) {
    return null;
  }
  const trainer =
    trainerId && category.trainers.some((t) => t.id === trainerId)
      ? trainerId
      : category.trainers[0]?.id;
  return {categoryId, trainerId: trainer};
}

function LabTrainersHubInner({defaultCategory = 'sql', defaultTrainer}) {
  const hashSelection = resolveHashSelection();
  const [categoryId, setCategoryId] = useState(
    hashSelection?.categoryId ?? defaultCategory,
  );
  const category = CATEGORIES.find((c) => c.id === categoryId) ?? CATEGORIES[0];
  const [trainerId, setTrainerId] = useState(() => {
    const initialCategoryId = hashSelection?.categoryId ?? defaultCategory;
    const initialCategory =
      CATEGORIES.find((c) => c.id === initialCategoryId) ?? CATEGORIES[0];
    if (hashSelection?.trainerId) {
      return hashSelection.trainerId;
    }
    if (defaultTrainer && initialCategory.trainers.some((t) => t.id === defaultTrainer)) {
      return defaultTrainer;
    }
    return initialCategory.trainers[0]?.id;
  });

  useEffect(() => {
    const applyHash = () => {
      const next = resolveHashSelection();
      if (!next) {
        return;
      }
      setCategoryId(next.categoryId);
      setTrainerId(next.trainerId);
    };
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  const trainer = useMemo(() => {
    const current = CATEGORIES.find((c) => c.id === categoryId) ?? CATEGORIES[0];
    return current.trainers.find((t) => t.id === trainerId) ?? current.trainers[0];
  }, [categoryId, trainerId]);

  const ActiveTrainer = trainer ? getLazyTrainer(trainer.load) : null;

  const onCategoryChange = (id) => {
    setCategoryId(id);
    const next = CATEGORIES.find((c) => c.id === id);
    const nextTrainerId = next?.trainers[0]?.id;
    setTrainerId(nextTrainerId);
    if (typeof window !== 'undefined' && nextTrainerId) {
      window.history.replaceState(null, '', `#${id}/${nextTrainerId}`);
    }
  };

  const onTrainerChange = (id) => {
    setTrainerId(id);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${categoryId}/${id}`);
    }
  };

  return (
    <DemoShell className={styles.layout}>
      <DemoCard
        title="Тренажёры Вселенной IT"
        subtitle="Встроенные симуляторы с проверкой — SQL, терминалы, Git, Docker и другие темы. Выберите категорию и тренажёр."
      >
        <div className={styles.categoryRow}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={clsx(styles.categoryBtn, categoryId === cat.id && styles.categoryBtnActive)}
              onClick={() => onCategoryChange(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className={styles.trainerRow}>
          {category.trainers.map((t) => (
            <button
              key={t.id}
              type="button"
              className={clsx(styles.trainerBtn, trainerId === t.id && styles.trainerBtnActive)}
              onClick={() => onTrainerChange(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className={styles.panel}>
          {ActiveTrainer && trainer && (
            <Suspense fallback={demoSkeletonFallback()}>
              <ActiveTrainer {...(trainer.props ?? {})} />
            </Suspense>
          )}
        </div>

        {trainer?.article && (
          <Link className={styles.articleLink} to={trainer.article}>
            Подробнее в статье энциклопедии →
          </Link>
        )}

        <p className={styles.hint}>
          Экзамены по уровням — в разделе{' '}
          <Link to="/lab/Экзамены/intro">Лаборатория → Экзамены</Link>. Внешние площадки (SQLZoo,
          LeetCode и др.) — на странице{' '}
          <Link to="/lab/Тренажеры/2">обзор онлайн-тренажёров</Link>.
        </p>
      </DemoCard>
    </DemoShell>
  );
}

export default function LabTrainersHub(props) {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка тренажёров…')}>
      {() => <LabTrainersHubInner {...props} />}
    </BrowserOnly>
  );
}
