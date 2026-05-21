import React, {useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import {WordSimulatorInner} from './WordSimulator';
import {ExcelSimulatorInner} from './ExcelSimulator';
import {WebBrowserSimulatorInner} from './WebBrowserSimulator';
import {MediaPlayerSimulatorInner} from './MediaPlayerSimulator';
import {MessengerSimulatorInner} from './MessengerSimulator';
import {VideoConferenceSimulatorInner} from './VideoConferenceSimulator';
import {ArchiveUtilitySimulatorInner} from './ArchiveUtilitySimulator';
import styles from './EndUserSoftwareHub.module.css';

const APPS = [
  {id: 'word', label: 'Word', tier: 'basic', Component: WordSimulatorInner},
  {id: 'excel', label: 'Excel', tier: 'basic', Component: ExcelSimulatorInner},
  {id: 'browser', label: 'Браузер', tier: 'basic', Component: WebBrowserSimulatorInner},
  {id: 'media', label: 'Медиаплеер', tier: 'basic', Component: MediaPlayerSimulatorInner},
  {id: 'messenger', label: 'Мессенджер', tier: 'basic', Component: MessengerSimulatorInner},
  {id: 'video', label: 'Видеосвязь', tier: 'basic', Component: VideoConferenceSimulatorInner},
  {id: 'archive', label: 'Архиватор', tier: 'advanced', Component: ArchiveUtilitySimulatorInner},
];

function EndUserSoftwareHubInner({tier = 'all', defaultApp = 'word'}) {
  const pool = APPS.filter((a) => tier === 'all' || a.tier === tier);
  const [active, setActive] = useState(
    pool.some((a) => a.id === defaultApp) ? defaultApp : pool[0]?.id,
  );

  const current = pool.find((a) => a.id === active) || pool[0];
  const ActiveComponent = current?.Component;

  return (
    <DemoShell>
      <DemoCard
        title="Софт пользователя — интерактивный хаб"
        subtitle="Переключайтесь между симуляторами офисных, сетевых и коммуникационных программ"
      >
        <div className={styles.tabs}>
          {pool.map((app) => (
            <button
              key={app.id}
              type="button"
              className={clsx(styles.tab, active === app.id && styles.tabActive)}
              onClick={() => setActive(app.id)}
            >
              {app.label}
              {app.tier === 'advanced' && <span className={styles.badge}>+</span>}
            </button>
          ))}
        </div>
        {ActiveComponent && <ActiveComponent compact />}
        <p className={styles.hint}>
          Симуляторы упрощены для обучения: интерфейс похож на реальные программы, но данные не
          сохраняются на диск.
        </p>
      </DemoCard>
    </DemoShell>
  );
}

export default function EndUserSoftwareHub(props) {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка хаба приложений…')}>
      {() => <EndUserSoftwareHubInner {...props} />}
    </BrowserOnly>
  );
}
