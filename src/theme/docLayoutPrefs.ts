export const DOC_TOC_COLLAPSED_KEY = 'it-knowledge-base.doc-toc-collapsed';

const NARROW_DEFAULT_MAX_PX = 1366;

export function readDocTocCollapsed(): boolean | null {
  if (typeof window === 'undefined') {
    return null;
  }
  try {
    const raw = localStorage.getItem(DOC_TOC_COLLAPSED_KEY);
    if (raw === '1') {
      return true;
    }
    if (raw === '0') {
      return false;
    }
    return null;
  } catch {
    return null;
  }
}

export function writeDocTocCollapsed(collapsed: boolean): void {
  try {
    localStorage.setItem(DOC_TOC_COLLAPSED_KEY, collapsed ? '1' : '0');
  } catch {
    // ignore quota / private mode
  }
}

/** Первый визит: на узких desktop скрываем TOC, чтобы освободить место статье. */
export function getInitialDocTocCollapsed(): boolean {
  const stored = readDocTocCollapsed();
  if (stored !== null) {
    return stored;
  }
  if (typeof window === 'undefined') {
    return false;
  }
  return window.matchMedia(`(max-width: ${NARROW_DEFAULT_MAX_PX}px)`).matches;
}
