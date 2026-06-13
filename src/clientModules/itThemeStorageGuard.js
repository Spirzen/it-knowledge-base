/**
 * Сбрасывает битый localStorage темы Docusaurus (не light/dark).
 * Защита от циклического переключения data-theme.
 */
export default {
  onClientEntry() {
    if (typeof window === 'undefined') {
      return;
    }
    try {
      for (let i = 0; i < localStorage.length; i += 1) {
        const key = localStorage.key(i);
        if (!key || !key.startsWith('theme')) {
          continue;
        }
        const raw = localStorage.getItem(key);
        if (raw !== null && raw !== 'light' && raw !== 'dark') {
          localStorage.removeItem(key);
        }
      }
    } catch {
      // storage недоступен — пропускаем
    }
  },
};
