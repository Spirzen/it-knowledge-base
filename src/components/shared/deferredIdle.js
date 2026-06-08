/**
 * Откладывает работу до idle или первого взаимодействия — не блокирует LCP/INP.
 */
export function scheduleIdleWork(callback, {timeout = 2500} = {}) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  let cancelled = false;
  let idleId = 0;

  const run = () => {
    if (!cancelled) {
      callback();
    }
  };

  const onIntent = () => {
    if (cancelled) return;
    cancelled = true;
    if (idleId && typeof window.cancelIdleCallback === 'function') {
      window.cancelIdleCallback(idleId);
    }
    window.removeEventListener('pointerdown', onIntent);
    window.removeEventListener('keydown', onIntent);
    run();
  };

  if (typeof window.requestIdleCallback === 'function') {
    idleId = window.requestIdleCallback(run, {timeout});
  } else {
    idleId = window.setTimeout(run, Math.min(timeout, 800));
  }

  window.addEventListener('pointerdown', onIntent, {once: true, passive: true});
  window.addEventListener('keydown', onIntent, {once: true});

  return () => {
    cancelled = true;
    if (idleId) {
      if (typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleId);
      } else {
        window.clearTimeout(idleId);
      }
    }
    window.removeEventListener('pointerdown', onIntent);
    window.removeEventListener('keydown', onIntent);
  };
}
