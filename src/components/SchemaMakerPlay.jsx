import React, {Suspense, lazy} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import styles from './SchemaMakerPlay.module.css';

const SchemaMakerEditor = lazy(() =>
  import('./schemaMaker/SchemaMakerEditor').then((m) => ({default: m.SchemaMakerEditor})),
);

function SchemaMakerPlayInner({
  title = 'Schema Maker',
  subtitle = 'Рисуйте блок-схемы и архитектурные эскизы: фигуры, связи, подписи, экспорт PNG / PDF / JSON',
  defaultDocName = 'Схема',
  initialDocument = null,
  height = 560,
  embedded = false,
}) {
  const editor = (
    <div className={styles.editorWrap}>
      <Suspense fallback={demoLoadingFallback('Загрузка редактора схем…')}>
        <SchemaMakerEditor
          defaultDocName={defaultDocName}
          initialDocument={initialDocument}
          height={height}
        />
      </Suspense>
    </div>
  );

  if (embedded) {
    return <div className={clsx(styles.root, 'schema-maker-play')}>{editor}</div>;
  }

  return (
    <DemoShell className={clsx(styles.root, 'schema-maker-play')}>
      <DemoCard title={title} subtitle={subtitle}>
        {editor}
      </DemoCard>
    </DemoShell>
  );
}

/** Свободный редактор схем (порт Schema Maker) — фигуры, связи, рисование, экспорт */
export default function SchemaMakerPlay(props) {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка редактора схем…')}>
      {() => <SchemaMakerPlayInner {...props} />}
    </BrowserOnly>
  );
}
