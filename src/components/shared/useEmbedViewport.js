import {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {acquireEmbedLoadSlot} from './embedLoadQueue';

const DEFAULT_LOAD_MARGIN = '120px 0px';
const DEFAULT_UNLOAD_MARGIN = 960;

function isNearViewport(el, marginPx) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  return rect.bottom >= -marginPx && rect.top <= vh + marginPx;
}

/**
 * Монтировать iframe только рядом с viewport; размонтировать далеко за экраном.
 */
export function useEmbedInView(options = {}) {
  const loadRootMargin = options.rootMargin ?? DEFAULT_LOAD_MARGIN;
  const unloadDistance = options.unloadDistance ?? DEFAULT_UNLOAD_MARGIN;
  const hostRef = useRef(null);
  const [hostEl, setHostEl] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  const setHostRef = useCallback((node) => {
    hostRef.current = node;
    setHostEl(node);
  }, []);

  useLayoutEffect(() => {
    if (hostEl && isNearViewport(hostEl, 160)) {
      setIsMounted(true);
    }
  }, [hostEl]);

  useEffect(() => {
    if (!hostEl) {
      return undefined;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setIsMounted(true);
      return undefined;
    }

    const loadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsMounted(true);
        }
      },
      {rootMargin: loadRootMargin},
    );

    loadObserver.observe(hostEl);

    let scrollRaf = 0;
    const onScrollOrResize = () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0;
        if (isNearViewport(hostEl, 160)) {
          setIsMounted(true);
        } else if (!isNearViewport(hostEl, unloadDistance)) {
          setIsMounted(false);
        }
      });
    };

    window.addEventListener('scroll', onScrollOrResize, {passive: true});
    window.addEventListener('resize', onScrollOrResize, {passive: true});

    return () => {
      loadObserver.disconnect();
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [hostEl, loadRootMargin, unloadDistance]);

  return {hostRef: setHostRef, isMounted};
}

/**
 * Обновление высоты iframe с debounce и компенсацией scroll,
 * когда embed выше текущей позиции чтения.
 */
export function useStableEmbedHeight(hostRef, minHeight, isFullscreen) {
  const [height, setHeightState] = useState(minHeight);
  const lastHeightRef = useRef(minHeight);
  const rafRef = useRef(null);
  const settleTimerRef = useRef(null);
  const pendingHeightRef = useRef(null);
  const wasFullscreenRef = useRef(false);
  const settleUntilRef = useRef(0);

  useEffect(() => {
    lastHeightRef.current = minHeight;
    setHeightState(minHeight);
  }, [minHeight]);

  useEffect(() => {
    if (wasFullscreenRef.current && !isFullscreen) {
      settleUntilRef.current = Date.now() + 900;
      pendingHeightRef.current = null;
      if (settleTimerRef.current != null) {
        clearTimeout(settleTimerRef.current);
        settleTimerRef.current = null;
      }
    }
    wasFullscreenRef.current = isFullscreen;
  }, [isFullscreen]);

  const applyHeightImmediate = useCallback(
    (normalized) => {
      if (Math.abs(normalized - lastHeightRef.current) < 2) {
        return;
      }

      const host = hostRef.current;
      const delta = normalized - lastHeightRef.current;
      const inSettle = Date.now() < settleUntilRef.current;

      if (host && delta > 0 && !isFullscreen && !inSettle) {
        const top = host.getBoundingClientRect().top;
        if (top < -4) {
          window.scrollBy(0, delta);
        }
      }

      lastHeightRef.current = normalized;
      setHeightState(normalized);
    },
    [hostRef, isFullscreen],
  );

  const applyHeight = useCallback(
    (nextHeight) => {
      const normalized = Math.max(minHeight, Math.ceil(nextHeight));

      if (Date.now() < settleUntilRef.current) {
        pendingHeightRef.current = normalized;
        if (settleTimerRef.current == null) {
          settleTimerRef.current = window.setTimeout(() => {
            settleTimerRef.current = null;
            const pending = pendingHeightRef.current;
            pendingHeightRef.current = null;
            if (pending != null) {
              applyHeightImmediate(pending + 2);
            }
          }, 180);
        }
        return;
      }

      applyHeightImmediate(normalized + 2);
    },
    [applyHeightImmediate, minHeight],
  );

  const scheduleHeight = useCallback(
    (nextHeight) => {
      if (typeof nextHeight !== 'number' || nextHeight < 48) {
        return;
      }

      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        applyHeight(nextHeight);
      });
    },
    [applyHeight],
  );

  useEffect(
    () => () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
      }
      if (settleTimerRef.current != null) {
        clearTimeout(settleTimerRef.current);
      }
    },
    [],
  );

  return {height, scheduleHeight};
}

/**
 * Стабильный src iframe: очередь загрузки + размонтирование вне viewport.
 * Смена темы — только postMessage, без перезагрузки iframe.
 */
export function useStableIframeSrc(buildSrc, isMounted, colorMode, srcKey) {
  const [iframeSrc, setIframeSrc] = useState('');
  const colorModeRef = useRef(colorMode);
  const releaseRef = useRef(null);

  useEffect(() => {
    colorModeRef.current = colorMode;
  }, [colorMode]);

  useEffect(() => {
    setIframeSrc('');
    releaseRef.current?.();
    releaseRef.current = null;
  }, [srcKey]);

  useEffect(() => {
    if (!isMounted) {
      setIframeSrc('');
      releaseRef.current?.();
      releaseRef.current = null;
      return undefined;
    }

    if (iframeSrc) {
      return undefined;
    }

    let cancelled = false;

    acquireEmbedLoadSlot().then((release) => {
      if (cancelled) {
        release();
        return;
      }
      releaseRef.current = release;
      const src = buildSrc(colorModeRef.current);
      if (src) {
        setIframeSrc(src);
      } else {
        release();
        releaseRef.current = null;
      }
    });

    return () => {
      cancelled = true;
    };
  }, [buildSrc, iframeSrc, isMounted, srcKey]);

  const releaseLoadSlot = useCallback(() => {
    releaseRef.current?.();
    releaseRef.current = null;
  }, []);

  return {iframeSrc, releaseLoadSlot};
}
