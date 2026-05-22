/**
 * Restores palette design on client navigation (SSR uses injectHtmlTags script).
 */
const STORAGE_KEY = 'it-universe-design';
const DEFAULT_ID = 'design-universe-original';

export default function itDesignThemeInit() {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    const saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_ID;
    document.documentElement.setAttribute('data-design', saved);
  } catch {
    document.documentElement.setAttribute('data-design', DEFAULT_ID);
  }
}
