/**
 * Оборачивает блоки h2+контент в `.doc-section` для карточек секций (Docs Prime).
 * Идемпотентно: повторный вызов безопасен (навигация, Strict Mode, re-render).
 */

const MARKDOWN_ROOT = '.theme-doc-markdown';

const SKIP_ANCESTOR =
  '.doc-section, .theme-admonition, .admonition, .callout, .it-demo, .tabs-container, .tabItem';

/** Контейнер, в котором лежат h1/h2/p (не всегда корень .theme-doc-markdown). */
function getMarkdownContentHost(root: HTMLElement): HTMLElement {
  const h1 = root.querySelector('h1');
  if (h1?.parentElement && root.contains(h1.parentElement)) {
    return h1.parentElement;
  }

  if (root.classList.contains('markdown')) {
    return root;
  }

  return root.querySelector<HTMLElement>('.markdown') ?? root;
}

function isDirectH2(h2: HTMLHeadingElement, host: HTMLElement): boolean {
  return h2.parentElement === host && !h2.closest(SKIP_ANCESTOR);
}

function nextUnwrappedH2(host: HTMLElement): HTMLHeadingElement | null {
  for (const h2 of host.querySelectorAll<HTMLHeadingElement>(':scope > h2')) {
    if (isDirectH2(h2, host)) {
      return h2;
    }
  }
  return null;
}

function wrapOneSection(host: HTMLElement, h2: HTMLHeadingElement): void {
  if (h2.parentElement !== host) {
    return;
  }

  const section = document.createElement('div');
  section.className = 'doc-section';
  host.insertBefore(section, h2);
  section.appendChild(h2);

  let node = section.nextSibling;
  while (node) {
    if (node instanceof HTMLHeadingElement && node.tagName === 'H2') {
      break;
    }
    const next = node.nextSibling;
    section.appendChild(node);
    node = next;
  }
}

export function wrapArticleSections(root: HTMLElement): void {
  const host = getMarkdownContentHost(root);

  let h2 = nextUnwrappedH2(host);
  while (h2) {
    wrapOneSection(host, h2);
    h2 = nextUnwrappedH2(host);
  }
}

export function enhanceArticleSections(): void {
  const root = document.querySelector<HTMLElement>(MARKDOWN_ROOT);
  if (!root) {
    return;
  }

  try {
    wrapArticleSections(root);
  } catch (error) {
    console.error('[articleSectionEnhancement]', error);
  }
}
