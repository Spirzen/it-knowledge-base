/** @typedef {{ u: string, t: string, d?: string, s?: string }} DocEntry */

/**
 * @param {DocEntry[]} docs
 * @returns {DocEntry | null}
 */
export function pickRandomDoc(docs) {
  const pool = docs.filter(
    (doc) =>
      doc.t &&
      doc.t.length > 2 &&
      !doc.u.endsWith('/intro') &&
      !doc.u.includes('/_category_'),
  );
  if (pool.length === 0) {
    return null;
  }
  return pool[Math.floor(Math.random() * pool.length)];
}
