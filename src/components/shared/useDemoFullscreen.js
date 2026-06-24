import {useCallback, useEffect, useState} from 'react';

function syncFullscreenDom(active) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  if (active) {
    root.setAttribute('data-it-demo-fullscreen', '');
    root.classList.add('it-demo-fullscreen-lock');
  } else {
    root.removeAttribute('data-it-demo-fullscreen');
    root.classList.remove('it-demo-fullscreen-lock');
  }
}

/** Полноэкранный режим для интерактивных демо (Escape — выход). */
export default function useDemoFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    syncFullscreenDom(isFullscreen);

    if (!isFullscreen) {
      return undefined;
    }

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
    };
  }, [isFullscreen]);

  useEffect(() => {
    return () => {
      syncFullscreenDom(false);
    };
  }, []);

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen((v) => !v);
  }, []);

  return {
    isFullscreen,
    setIsFullscreen,
    toggleFullscreen,
    fullscreenClass: isFullscreen ? 'it-demo--fullscreen' : undefined,
  };
}
