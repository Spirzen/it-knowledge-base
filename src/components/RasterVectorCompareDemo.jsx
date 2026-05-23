import React, {useEffect, useRef, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import {
  describeRasterAtZoom,
  describeVectorAtZoom,
  drawRasterScene,
  rasterPixelCount,
  SCENE_SIZE,
  ZOOM_STOPS,
} from './shared/rasterVectorDemoEngine';
import styles from './RasterVectorCompareDemo.module.css';
import toolStyles from './shared/toolDemo.module.css';

function RasterVectorCompareDemoInner() {
  const canvasRef = useRef(null);
  const [zoom, setZoom] = useState(2);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    drawRasterScene(ctx, SCENE_SIZE);
  }, []);

  const displaySize = SCENE_SIZE * zoom;

  return (
    <DemoShell>
      <DemoCard
        title="Растр и вектор: масштабирование"
        subtitle="Одна и та же сцена — слева фиксированная сетка пикселей, справа параметрическое SVG. Увеличьте масштаб и сравните края."
      >
        <div className={styles.zoomRow}>
          <span className="it-demo__label" style={{marginBottom: 0}}>
            Масштаб
          </span>
          <input
            type="range"
            className={styles.zoomSlider}
            min={1}
            max={8}
            step={0.25}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            aria-valuemin={1}
            aria-valuemax={8}
            aria-valuenow={zoom}
          />
          <span className={styles.zoomValue}>{Math.round(zoom * 100)}%</span>
          <div className={toolStyles.chips}>
            {ZOOM_STOPS.map((stop) => (
              <button
                key={stop.id}
                type="button"
                className={clsx(toolStyles.chip, zoom === stop.value && toolStyles.chipActive)}
                onClick={() => setZoom(stop.value)}
              >
                {stop.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.compareRow}>
          <div className={clsx(styles.panel, styles.panelRaster)}>
            <div className={styles.panelLabel}>Растр ({SCENE_SIZE}×{SCENE_SIZE} px)</div>
            <div className={styles.viewport}>
              <div
                className={styles.rasterWrap}
                style={{width: displaySize, height: displaySize}}
              >
                <canvas
                  ref={canvasRef}
                  className={styles.canvas}
                  width={SCENE_SIZE}
                  height={SCENE_SIZE}
                  style={{width: displaySize, height: displaySize}}
                  aria-label="Растровое изображение фиксированного разрешения"
                />
              </div>
            </div>
            <p className={styles.hint}>{describeRasterAtZoom(zoom)}</p>
          </div>

          <div className={clsx(styles.panel, styles.panelVector)}>
            <div className={styles.panelLabel}>Вектор (SVG)</div>
            <div className={styles.viewport}>
              <svg
                className={styles.svgShape}
                viewBox={`0 0 ${SCENE_SIZE} ${SCENE_SIZE}`}
                width={displaySize}
                height={displaySize}
                role="img"
                aria-label="Векторное SVG-изображение"
              >
                <rect x="18" y="52" width="84" height="28" fill="#1976d2" stroke="#1a237e" strokeWidth="3" />
                <circle cx="60" cy="42" r="22" fill="#ef6c00" />
              </svg>
            </div>
            <p className={styles.hint}>{describeVectorAtZoom(zoom)}</p>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <strong>Растр:</strong> {rasterPixelCount().toLocaleString('ru-RU')} пикселей в данных;
            при печати или Retina нужны отдельные копии (@2x, @3x).
          </div>
          <div className={styles.stat}>
            <strong>Вектор:</strong> описание из нескольких примитивов; на мониторе всё равно
            растрируется, но параметры пересчитываются под текущий DPI.
          </div>
        </div>
      </DemoCard>
    </DemoShell>
  );
}

export default function RasterVectorCompareDemo() {
  return (
    <BrowserOnly fallback={demoLoadingFallback()}>
      {() => <RasterVectorCompareDemoInner />}
    </BrowserOnly>
  );
}
