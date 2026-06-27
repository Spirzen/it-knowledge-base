/** Базовый URL игрового портала (games.spirzen.ru). Переопределение: IT_GAMES_URL */
export const GAMES_ORIGIN = (process.env.IT_GAMES_URL ?? 'https://games.spirzen.ru').replace(/\/+$/, '');

/** @param {string} path — `/games/…` */
export function gamesHref(path) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${GAMES_ORIGIN}${normalized}`;
}

/** @param {string} relPath — путь от docs/encyclopedia/9-spinoff/ (9-03-…/file) */
export function gamesHrefFromSpinoff(relPath) {
  const clean = relPath.replace(/^encyclopedia\/9-spinoff\//, '').replace(/\.mdx?$/i, '');
  return gamesHref(`/games/${clean}`);
}
