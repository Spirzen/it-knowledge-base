import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import {SPIRZEN_ONLINE_TOOLS_LIST} from './shared/spirzenOnlineTools';
import styles from './SpirzenOnlineToolsPanel.module.css';

function SpirzenOnlineToolsPanelInner({
  title = 'Онлайн-инструменты автора',
  subtitle = 'Отдельные веб-приложения на spirzen.github.io — дополнение к встроенным демо энциклопедии',
}) {
  return (
    <DemoShell className={styles.root}>
      <DemoCard title={title} subtitle={subtitle}>
        <ul className={styles.list}>
          {SPIRZEN_ONLINE_TOOLS_LIST.map((tool) => (
            <li key={tool.id} className={styles.item}>
              <a
                className={styles.link}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {tool.name}
              </a>
              <p className={styles.desc}>{tool.tagline}</p>
            </li>
          ))}
        </ul>
      </DemoCard>
    </DemoShell>
  );
}

/** Панель со ссылками на Schema Maker, SQL Generator и ArchiStyler Online. */
export default function SpirzenOnlineToolsPanel(props) {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка списка инструментов…')}>
      {() => <SpirzenOnlineToolsPanelInner {...props} />}
    </BrowserOnly>
  );
}
