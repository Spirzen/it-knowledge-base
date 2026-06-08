/** Одновременно не больше N тяжёлых iframe — снижает INP и блокировку main thread. */
const MAX_CONCURRENT = 2;

let active = 0;
const waiters = [];

function drainQueue() {
  while (active < MAX_CONCURRENT && waiters.length > 0) {
    const {resolve} = waiters.shift();
    active += 1;
    resolve(releaseEmbedLoadSlot);
  }
}

function releaseEmbedLoadSlot() {
  active = Math.max(0, active - 1);
  drainQueue();
}

/**
 * @returns {Promise<() => void>} release — вызвать после onLoad/onError iframe
 */
export function acquireEmbedLoadSlot() {
  if (active < MAX_CONCURRENT) {
    active += 1;
    return Promise.resolve(releaseEmbedLoadSlot);
  }
  return new Promise((resolve) => {
    waiters.push({resolve});
  });
}
