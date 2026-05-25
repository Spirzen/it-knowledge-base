import {useCallback, useEffect, useState} from 'react';

/** Полноэкранный режим для интерактивных демо (Escape — выход). */
export default function useDemoFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!isFullscreen) {
      return undefined;
    }
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isFullscreen]);

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
