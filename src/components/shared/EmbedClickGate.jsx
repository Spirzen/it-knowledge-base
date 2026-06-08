import React from 'react';
import styles from './EmbedClickGate.module.css';

const COPY = {
  code: {
    kind: 'Пример кода',
    lead: 'Листинг с подсветкой синтаксиса и кнопкой копирования — из каталога Code Examples.',
    features: [
      'Код подгружается только после вашего запроса',
      'Можно читать и копировать прямо в статье',
      'Полная версия — на code.spirzen.ru',
    ],
    note: 'Обычно готов за 1–2 секунды · до клика внешних запросов нет',
    button: 'Показать код',
    buttonHint: 'Откроется встроенный просмотрщик',
    link: 'Полный пример на code.spirzen.ru ↗',
    icon: '{}',
  },
  play: {
    kind: 'Интерактивное демо',
    lead: 'Симулятор, конструктор или визуализация из каталога Play — можно потрогать руками.',
    features: [
      'Демо запускается здесь, без перехода на другой сайт',
      'Работает на play.spirzen.ru, в статье — через встраивание',
      'Страница не тормозит, пока вы не нажмёте кнопку',
    ],
    note: 'Обычно готов за 2–4 секунды · до клика внешних запросов нет',
    button: 'Запустить демо',
    buttonHint: 'Подгрузится интерактивный блок',
    link: 'Полное демо на play.spirzen.ru ↗',
    icon: '▶',
  },
};

/**
 * Плейсхолдер до явного запроса пользователя (без iframe и без внешних запросов).
 *
 * @param {{ kind: 'code' | 'play', title?: string, minHeight?: number, fullPageUrl?: string, onActivate: () => void }} props
 */
export default function EmbedClickGate({kind, title, minHeight = 200, fullPageUrl, onActivate}) {
  const copy = COPY[kind] ?? COPY.play;
  const gateClass = kind === 'code' ? `${styles.gate} ${styles.gateCode}` : styles.gate;

  return (
    <div className={gateClass} style={{minHeight}} data-embed-click-gate={kind}>
      <div className={styles.body}>
        <div className={styles.header}>
          <span className={styles.icon} aria-hidden="true">
            {copy.icon}
          </span>
          <div className={styles.headerText}>
            <p className={styles.kind}>{copy.kind}</p>
            <p className={styles.lead}>{copy.lead}</p>
          </div>
        </div>

        {title ? <p className={styles.title}>{title}</p> : null}

        <ul className={styles.features}>
          {copy.features.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p className={styles.note}>{copy.note}</p>

        <div className={styles.action}>
          <button type="button" className={styles.button} onClick={onActivate}>
            {copy.button}
          </button>
          <p className={styles.buttonHint}>{copy.buttonHint}</p>
        </div>
      </div>

      {fullPageUrl ? (
        <div className={styles.caption}>
          <a href={fullPageUrl} target="_blank" rel="noopener noreferrer">
            {copy.link}
          </a>
        </div>
      ) : null}
    </div>
  );
}
