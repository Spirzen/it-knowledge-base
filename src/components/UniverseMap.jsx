import React, {useCallback, useMemo, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {ENCYCLOPEDIA_SECTIONS} from '@site/src/data/encyclopediaSections';

import styles from './UniverseMap.module.css';

const SECTION_COUNT = ENCYCLOPEDIA_SECTIONS.length;
const ORBIT_RADIUS = 32;

function polarToPercent(index) {
  const angleDeg = (index * 360) / SECTION_COUNT - 90;
  const angleRad = (angleDeg * Math.PI) / 180;
  return {
    x: Math.cos(angleRad) * ORBIT_RADIUS,
    y: Math.sin(angleRad) * ORBIT_RADIUS,
  };
}

export default function UniverseMap() {
  const [activeId, setActiveId] = useState(ENCYCLOPEDIA_SECTIONS[0].id);

  const nodePositions = useMemo(
    () => ENCYCLOPEDIA_SECTIONS.map((_, index) => polarToPercent(index)),
    [],
  );

  const activeSection =
    ENCYCLOPEDIA_SECTIONS.find((s) => s.id === activeId) ??
    ENCYCLOPEDIA_SECTIONS[0];

  const activate = useCallback((id) => setActiveId(id), []);

  return (
    <section className={styles.universeMap} aria-labelledby="universe-map-title">
      <div className="container">
        <Heading as="h2" className={styles.title} id="universe-map-title">
          Карта Вселенной IT
        </Heading>
        <p className={styles.subtitle}>
          Девять разделов вокруг ядра — нажмите узел на орбите или выберите в списке,
          чтобы увидеть описание и перейти в раздел.
        </p>

        <div className={styles.layout}>
          <div className={styles.mapPanel}>
            <div
              className={styles.mapCanvas}
              role="group"
              aria-label="Разделы энциклопедии">
              <svg
                className={styles.mapSvg}
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true">
                <defs>
                  <linearGradient
                    id="universe-orbit-ring"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%">
                    <stop
                      offset="0%"
                      stopColor="var(--ifm-color-primary)"
                      stopOpacity="0.12"
                    />
                    <stop
                      offset="50%"
                      stopColor="var(--ifm-color-primary)"
                      stopOpacity="0.85"
                    />
                    <stop
                      offset="100%"
                      stopColor="var(--ifm-color-primary)"
                      stopOpacity="0.12"
                    />
                  </linearGradient>
                </defs>
                <circle
                  className={styles.orbitRingGlow}
                  cx="50"
                  cy="50"
                  r={ORBIT_RADIUS + 2}
                />
                <circle
                  className={styles.orbitRing}
                  cx="50"
                  cy="50"
                  r={ORBIT_RADIUS}
                />
                <circle
                  className={styles.orbitRingInner}
                  cx="50"
                  cy="50"
                  r={ORBIT_RADIUS - 3}
                />
              </svg>

              <Link
                to="/encyclopedia/intro"
                className={styles.hub}
                aria-label="Энциклопедия — введение">
                <span className={styles.hubLabel}>
                  IT
                  <br />
                  ядро
                </span>
              </Link>

              {ENCYCLOPEDIA_SECTIONS.map((section, index) => {
                const {x, y} = nodePositions[index];
                const isActive = section.id === activeId;
                return (
                  <Link
                    key={section.id}
                    to={section.link}
                    className={clsx(
                      styles.node,
                      styles[`node--${section.number}`],
                      isActive && styles.nodeActive,
                    )}
                    style={{
                      '--orbit-x': `${x}%`,
                      '--orbit-y': `${y}%`,
                    }}
                    aria-current={isActive ? 'true' : undefined}
                    onPointerEnter={() => activate(section.id)}
                    onFocus={() => activate(section.id)}
                    onClick={() => activate(section.id)}
                    title={section.shortTitle}
                    aria-label={`${section.number}. ${section.title}`}>
                    <span className={styles.nodeNumber}>{section.number}</span>
                  </Link>
                );
              })}
            </div>

            <p className={styles.roadmapLink}>
              <Link to="/encyclopedia/1-basics/1-03-dorozhnaya-karta-izucheniya/1">
                Полная интерактивная дорожная карта →
              </Link>
            </p>
          </div>

          <aside className={styles.detailPanel}>
            <div
              className={clsx(
                styles.detailCard,
                styles[`detailCard--${activeSection.number}`],
              )}>
              <span className={styles.detailBadge}>
                Раздел {activeSection.number}
              </span>
              <Heading as="h3" className={styles.detailTitle}>
                {activeSection.title}
              </Heading>
              <p className={styles.detailText}>{activeSection.description}</p>
              <div className={styles.detailActions}>
                <Link
                  className="button button--primary"
                  to={activeSection.link}>
                  Обзор раздела
                </Link>
                <Link
                  className="button button--outline button--secondary"
                  to={activeSection.encyclopediaLink}>
                  Первая глава
                </Link>
              </div>
            </div>

            <ul className={styles.legend} aria-label="Все разделы">
              {ENCYCLOPEDIA_SECTIONS.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    className={clsx(
                      styles.legendItem,
                      section.id === activeId && styles.legendItemActive,
                      styles[`legendItem--${section.number}`],
                    )}
                    onPointerEnter={() => activate(section.id)}
                    onFocus={() => activate(section.id)}
                    onClick={() => activate(section.id)}>
                    <span className={styles.legendNum}>{section.number}</span>
                    <span className={styles.legendLabel}>{section.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
