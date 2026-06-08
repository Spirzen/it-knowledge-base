let lockCount = 0;

/**
 * Блокирует прокрутку страницы (refcount — несколько embed не ломают unlock).
 * @returns {() => void} release
 */
export function acquirePageScrollLock() {
  lockCount += 1;
  if (lockCount === 1) {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }

  let released = false;
  return () => {
    if (released) return;
    released = true;
    lockCount = Math.max(0, lockCount - 1);
    if (lockCount === 0) {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
  };
}
