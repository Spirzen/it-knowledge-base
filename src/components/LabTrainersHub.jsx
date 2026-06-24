import React, {lazy, Suspense, useEffect, useMemo, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback, demoSkeletonFallback} from './shared/demoFallback';
import ExternalPlayEmbed from './ExternalPlayEmbed';
import styles from './LabTrainersHub.module.css';

const CATEGORIES = [
  {
    id: 'sql',
    label: 'SQL',
    trainers: [
      {
        id: 'sql-trainer',
        label: 'SQL-тренажёр',
        article: '/encyclopedia/3-data-markup/3-07-sql/111',
        embed: {example: 'lab/sql-trainer', title: 'SQL-тренажёр', minHeight: 480},
      },
      {
        id: 'sql-insert',
        label: 'INSERT',
        article: '/encyclopedia/3-data-markup/3-07-sql/5',
        embed: {example: 'data-markup/sql-insert-trainer', title: 'SQL INSERT — тренажёр', minHeight: 480},
      },
      {
        id: 'sql-update',
        label: 'UPDATE',
        article: '/encyclopedia/3-data-markup/3-07-sql/5',
        embed: {example: 'data-markup/sql-update-trainer', title: 'SQL UPDATE — тренажёр', minHeight: 480},
      },
      {
        id: 'sql-delete',
        label: 'DELETE',
        article: '/encyclopedia/3-data-markup/3-07-sql/5',
        embed: {example: 'data-markup/sql-delete-trainer', title: 'SQL DELETE — тренажёр', minHeight: 480},
      },
      {
        id: 'sql-join',
        label: 'JOIN',
        article: '/encyclopedia/3-data-markup/3-07-sql/55',
        embed: {example: 'about/sql-join-trainer', title: 'SQL JOIN-тренажёр', minHeight: 420},
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
        embed: {
          example: 'about/bash-shell-play',
          title: 'Bash-тренажёр',
          minHeight: 400,
          playProps: {lesson: 'basics'},
        },
      },
      {
        id: 'powershell',
        label: 'PowerShell',
        article: '/encyclopedia/5-languages/5-26-powershell/intro',
        embed: {
          example: 'languages/power-shell-shell-play',
          title: 'PowerShell Shell',
          minHeight: 480,
          playProps: {lesson: 'intro'},
        },
      },
      {
        id: 'mongo',
        label: 'MongoDB',
        article: '/encyclopedia/3-data-markup/3-06-nosql/411',
        embed: {example: 'data-markup/mongo-shell-play', title: 'MongoDB Shell', minHeight: 480},
      },
      {
        id: 'memcached',
        label: 'Memcached',
        article: '/encyclopedia/3-data-markup/3-06-nosql/8111',
        embed: {example: 'data-markup/memcached-shell-play', title: 'Memcached Shell', minHeight: 480},
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
        embed: {example: 'code-dev/git-branch-merge-play', title: 'Git — ветки и merge', minHeight: 480},
      },
      {
        id: 'docker-compose',
        label: 'Docker Compose',
        article: '/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/1111',
        embed: {example: 'about/docker-compose-play', title: 'Docker Compose', minHeight: 420},
      },
      {
        id: 'docker-hardening',
        label: 'Docker: безопасность',
        article: '/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/125',
        embed: {example: 'infra-security/docker-hardening-play', title: 'Hardening Docker', minHeight: 480},
      },
      {
        id: 'gitlab-ci',
        label: 'GitLab CI',
        article: '/encyclopedia/8-infra-security/8-04-devops-ci-cd/2113',
        embed: {example: 'infra-security/git-lab-ci-pipeline-play', title: 'GitLab CI pipeline', minHeight: 520},
      },
      {
        id: 'file-ops',
        label: 'Файлы и папки',
        article: '/tools/automation/2',
        embed: {
          example: 'tools-automation/file-ops-lab-play',
          title: 'Файлы и папки',
          minHeight: 400,
        },
      },
    ],
  },
  {
    id: 'web',
    label: 'Веб и данные',
    trainers: [
      {
        id: 'html',
        label: 'HTML Playground',
        article: '/encyclopedia/3-data-markup/3-09-html/1',
        embed: {example: 'about/html-playground', title: 'HTML Playground', minHeight: 420},
      },
      {
        id: 'web-editor',
        label: 'WebEditor',
        article: '/encyclopedia/3-data-markup/3-09-html/intro',
        embed: {src: 'https://html.spirzen.ru/', title: 'WebEditor — HTML/CSS/JS', minHeight: 560},
      },
      {
        id: 'regex',
        label: 'Регулярные выражения',
        article: '/encyclopedia/4-code-dev/4-01-algoritmy/111',
        embed: {example: 'lab/regex-playground-demo', title: 'Regex Playground', minHeight: 420},
      },
      {
        id: 'search',
        label: 'Поисковые запросы',
        article: '/encyclopedia/1-basics/1-21-poisk-informatsii/3',
        embed: {example: 'basics/search-query-lab', title: 'Поисковые запросы', minHeight: 420},
      },
      {
        id: 'soap',
        label: 'SOAP',
        article: '/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/126',
        embed: {example: 'system-network/soap-trainer', title: 'Тренажёр SOAP', minHeight: 480},
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
        embed: {example: 'code-dev/programming-tasks-play', title: 'Задачи по программированию', minHeight: 480},
      },
      {
        id: 'english',
        label: 'IT-английский',
        article: '/encyclopedia/1-basics/1-30-angliyskiy-yazyk/2',
        embed: {
          example: 'about/english-vocabulary-trainer',
          title: 'IT-английский',
          minHeight: 480,
        },
      },
      {
        id: 'netiquette',
        label: 'Нетикет',
        article: '/encyclopedia/9-spinoff/9-10-internet-kultura/113',
        embed: {example: 'spinoff/netiquette-play', title: 'Нетикет', minHeight: 480},
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

  const ActiveTrainer = trainer?.embed ? null : trainer ? getLazyTrainer(trainer.load) : null;

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
          {trainer?.embed ? (
            <ExternalPlayEmbed
              example={trainer.embed.example}
              src={trainer.embed.src}
              title={trainer.embed.title}
              minHeight={trainer.embed.minHeight}
              playProps={trainer.embed.playProps}
            />
          ) : (
            ActiveTrainer &&
            trainer && (
              <Suspense fallback={demoSkeletonFallback()}>
                <ActiveTrainer {...(trainer.props ?? {})} />
              </Suspense>
            )
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
