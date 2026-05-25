export const STORAGE_KEY = 'it-knowledge-base.doc-sidebar-user-width';
export const USER_WIDTH_ATTR = 'data-user-sidebar-width';
export const RESET_WIDTH_EVENT = 'it-doc-sidebar-width-reset';

const MIN_WIDTH_PX = 168;
const MAX_WIDTH_VW = 0.5;

export function clampSidebarWidth(px, viewportWidth = window.innerWidth) {
  const max = Math.floor(viewportWidth * MAX_WIDTH_VW);
  return Math.min(max, Math.max(MIN_WIDTH_PX, Math.round(px)));
}

export function readUserSidebarWidth() {
  if (typeof window === 'undefined') {
    return null;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }
    const n = parseInt(raw, 10);
    return Number.isFinite(n) && n > 0 ? n : null;
  } catch {
    return null;
  }
}

export function writeUserSidebarWidth(px) {
  try {
    localStorage.setItem(STORAGE_KEY, String(clampSidebarWidth(px)));
  } catch {
    /* ignore quota / private mode */
  }
}

export function clearUserSidebarWidth() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

export function hasUserSidebarWidth(sidebar) {
  return sidebar?.hasAttribute(USER_WIDTH_ATTR) ?? false;
}

export function applySidebarWidth(sidebar, px) {
  if (!sidebar || px == null) {
    return;
  }
  const width = clampSidebarWidth(px);
  sidebar.style.width = `${width}px`;
  sidebar.style.setProperty('--doc-sidebar-width', `${width}px`);
  sidebar.setAttribute(USER_WIDTH_ATTR, 'true');
}

export function clearAppliedSidebarWidth(sidebar) {
  if (!sidebar) {
    return;
  }
  sidebar.style.removeProperty('width');
  sidebar.style.removeProperty('--doc-sidebar-width');
  sidebar.removeAttribute(USER_WIDTH_ATTR);
}

export function dispatchSidebarWidthReset() {
  if (typeof window === 'undefined') {
    return;
  }
  window.dispatchEvent(new CustomEvent(RESET_WIDTH_EVENT));
}
