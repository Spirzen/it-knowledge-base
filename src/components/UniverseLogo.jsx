import React, {useCallback, useId, useRef, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {ENCYCLOPEDIA_SECTIONS} from '@site/src/data/encyclopediaSections';

import styles from './UniverseLogo.module.css';

const SECTION_COUNT = ENCYCLOPEDIA_SECTIONS.length;

const ORBIT_COLORS = [
  '#4a6cf7',
  '#7b61ff',
  '#2e8b57',
  '#d2691e',
  '#1e90ff',
  '#d2b48c',
  '#9370db',
  '#32cd32',
  '#ff69b4',
];

const FLOATING_GLYPHS = ['{}', '</>', '01', 'λ', '⚡', '◇', '∞', '▣'];

const STAR_SEEDS = [
  [8, 12, 0.4],
  [22, 8, 0.55],
  [88, 14, 0.35],
  [94, 28, 0.5],
  [6, 42, 0.45],
  [76, 6, 0.6],
  [52, 4, 0.3],
  [38, 18, 0.5],
  [62, 22, 0.4],
  [14, 72, 0.55],
  [48, 88, 0.45],
  [82, 78, 0.5],
  [92, 58, 0.35],
  [4, 58, 0.4],
  [28, 92, 0.5],
  [70, 94, 0.35],
  [56, 52, 0.25],
  [18, 38, 0.45],
  [44, 62, 0.3],
  [86, 38, 0.5],
];

function orbitOffset(index) {
  const angleDeg = (index * 360) / SECTION_COUNT - 90;
  const angleRad = (angleDeg * Math.PI) / 180;
  const radius = 46;
  return {
    x: 50 + Math.cos(angleRad) * radius,
    y: 50 + Math.sin(angleRad) * radius,
  };
}

function nearestOrbitIndex(normX, normY) {
  const dx = normX - 0.5;
  const dy = normY - 0.5;
  let angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
  if (angleDeg < 0) angleDeg += 360;
  return Math.round(angleDeg / (360 / SECTION_COUNT)) % SECTION_COUNT;
}

export default function UniverseLogo() {
  const rootRef = useRef(null);
  const labelId = useId();
  const [activeOrbit, setActiveOrbit] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  const updatePointer = useCallback((clientX, clientY) => {
    const el = rootRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width;
    const y = (clientY - rect.top) / rect.height;
    const clampedX = Math.min(1, Math.max(0, x));
    const clampedY = Math.min(1, Math.max(0, y));

    el.style.setProperty('--ptr-x', String(clampedX));
    el.style.setProperty('--ptr-y', String(clampedY));
    el.style.setProperty('--tilt-x', `${(clampedY - 0.5) * -10}deg`);
    el.style.setProperty('--tilt-y', `${(clampedX - 0.5) * 12}deg`);
    setActiveOrbit(nearestOrbitIndex(clampedX, clampedY));
  }, []);

  const handlePointerMove = useCallback(
    (e) => updatePointer(e.clientX, e.clientY),
    [updatePointer],
  );

  const handlePointerLeave = useCallback(() => {
    const el = rootRef.current;
    if (el) {
      el.style.setProperty('--ptr-x', '0.5');
      el.style.setProperty('--ptr-y', '0.5');
      el.style.setProperty('--tilt-x', '0deg');
      el.style.setProperty('--tilt-y', '0deg');
    }
    setActiveOrbit(null);
  }, []);

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => {
    setIsFocused(false);
    handlePointerLeave();
  }, [handlePointerLeave]);

  return (
    <Link
      to="/about/project"
      className={styles.logoLink}
      aria-labelledby={labelId}
      onFocus={handleFocus}
      onBlur={handleBlur}>
      <div
        ref={rootRef}
        className={clsx(
          styles.logo,
          isFocused && styles.logoFocused,
          activeOrbit !== null && styles.logoActive,
        )}
        style={{'--ptr-x': 0.5, '--ptr-y': 0.5, '--tilt-x': '0deg', '--tilt-y': '0deg'}}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}>
        <svg
          className={styles.starCanvas}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true">
          <defs>
            <radialGradient id="universeLogoGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--logo-glow-core)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="var(--logo-glow-edge)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100" height="100" fill="url(#universeLogoGlow)" opacity="0.35" />
          {STAR_SEEDS.map(([cx, cy, r], i) => (
            <circle
              key={i}
              className={styles.star}
              cx={cx}
              cy={cy}
              r={r}
              style={{animationDelay: `${i * 0.17}s`}}
            />
          ))}
          <g className={styles.orbitRingGroup}>
            <circle
              className={styles.orbitRingSvg}
              cx="50"
              cy="50"
              r="38"
              fill="none"
            />
          </g>
          {ENCYCLOPEDIA_SECTIONS.map((_, index) => {
            const {x, y} = orbitOffset(index);
            const isLit = activeOrbit === index;
            return (
              <g key={ENCYCLOPEDIA_SECTIONS[index].id}>
                <line
                  className={clsx(styles.spoke, isLit && styles.spokeLit)}
                  x1="50"
                  y1="50"
                  x2={x}
                  y2={y}
                />
                <circle
                  className={clsx(styles.orbitNodeSvg, isLit && styles.orbitNodeSvgLit)}
                  cx={x}
                  cy={y}
                  r={isLit ? 2.8 : 1.8}
                  style={{'--node-color': ORBIT_COLORS[index]}}
                />
              </g>
            );
          })}
        </svg>

        <div className={styles.glyphField} aria-hidden="true">
          {FLOATING_GLYPHS.map((glyph, i) => (
            <span
              key={glyph}
              className={styles.glyph}
              style={{
                '--glyph-i': i,
                left: `${12 + (i * 11) % 76}%`,
                top: `${8 + ((i * 17) % 72)}%`,
              }}>
              {glyph}
            </span>
          ))}
        </div>

        <div className={styles.spotlight} aria-hidden="true" />

        <div className={styles.wordmark}>
          <span id={labelId} className={styles.visuallyHidden}>
            Вселенная IT — о проекте
          </span>
          <span className={styles.titleLine} aria-hidden="true">
            <span className={styles.titleWord}>
              {'ВСЕЛЕННАЯ'.split('').map((char, i) => (
                <span
                  key={i}
                  className={styles.titleLetter}
                  style={{'--letter-i': i}}>
                  {char}
                </span>
              ))}
            </span>
          </span>
          <span className={styles.coreBadge} aria-hidden="true">
            <span className={styles.coreRing} />
            <span className={styles.coreRingOuter} />
            <span className={styles.coreLabel}>IT</span>
            <span className={styles.coreHint}>
              {activeOrbit !== null
                ? ENCYCLOPEDIA_SECTIONS[activeOrbit].shortTitle
                : '9 разделов'}
            </span>
          </span>
        </div>

        <div className={styles.orbitLegend} aria-hidden="true">
          {ENCYCLOPEDIA_SECTIONS.map((section, index) => (
            <span
              key={section.id}
              className={clsx(
                styles.legendDot,
                activeOrbit === index && styles.legendDotLit,
              )}
              style={{'--node-color': ORBIT_COLORS[index]}}
              title={section.title}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
