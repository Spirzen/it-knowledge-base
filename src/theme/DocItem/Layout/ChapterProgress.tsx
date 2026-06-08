import React, {useEffect, useState, type ReactElement} from 'react';
import {scheduleIdleWork} from '@site/src/components/shared/deferredIdle';
import styles from './styles.module.css';

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export default function ChapterProgress(): ReactElement | null {
  const [enabled, setEnabled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return scheduleIdleWork(() => setEnabled(true), {timeout: 3000});
  }, []);

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    let rafId = 0;

    function updateProgress() {
      const article =
        document.querySelector<HTMLElement>('.theme-doc-markdown > article') ??
        document.querySelector<HTMLElement>('.theme-doc-markdown') ??
        document.querySelector<HTMLElement>('article');

      if (!article) {
        return;
      }

      const rect = article.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const docTop = window.scrollY + rect.top;
      const docHeight = article.offsetHeight;
      const maxScrollable = Math.max(docHeight - viewportHeight, 1);
      const scrolled = clamp(window.scrollY - docTop, 0, maxScrollable);
      const ratio = clamp(scrolled / maxScrollable, 0, 1);
      setProgress(Math.round(ratio * 100));
    }

    const onScrollOrResize = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        updateProgress();
      });
    };

    updateProgress();
    window.addEventListener('scroll', onScrollOrResize, {passive: true});
    window.addEventListener('resize', onScrollOrResize, {passive: true});

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [enabled]);

  if (!enabled || progress <= 0) {
    return null;
  }

  return (
    <div className={styles.chapterProgress}>
      <div className={styles.chapterProgressHeader}>
        <span className={styles.chapterProgressLabel}>Освоение главы</span>
        <span className={styles.chapterProgressPercent}>{progress}%</span>
      </div>
      <div className={styles.chapterProgressBar}>
        <div className={styles.chapterProgressBarInner} style={{width: `${progress}%`}} />
      </div>
    </div>
  );
}
