/**
 * Сборка панели метаданных статьи (статус + аудитория) без правок markdown.
 * Один блок `.article-tags` до первого h2; демо-страницы с несколькими блоками не трогаем.
 */

export const TAG_CLASS_TO_SLUG: Record<string, string> = {
  'tag-required': 'required',
  'tag-notrequired': 'notrequired',
  'tag-human': 'beginner',
  'tag-beginner': 'beginner',
  'tag-advanced': 'advanced',
};

export const COMPLEXITY_LABEL_TO_SLUG: Record<string, string> = {
  Аналитику: 'analytic',
  Тестировщику: 'tester',
  Архитектору: 'architector',
  Разработчику: 'developer',
  Руководителю: 'manager',
  Инженеру: 'engineer',
  Всем: 'all',
  'Техническому писателю': 'technical-writer',
  'Детям и родителям': 'family',
  'Опытному пользователю': 'power-user',
};

const MARKDOWN_ROOT = '.theme-doc-markdown';

export function getArticleTagSlug(el: HTMLElement): string | null {
  if (el.classList.contains('tag-inprogress')) {
    return null;
  }

  for (const [className, slug] of Object.entries(TAG_CLASS_TO_SLUG)) {
    if (el.classList.contains(className)) {
      return slug;
    }
  }

  return null;
}

export function getComplexityBadgeSlug(el: HTMLElement): string | null {
  const label = el.textContent?.trim();
  if (!label) {
    return null;
  }

  return COMPLEXITY_LABEL_TO_SLUG[label] ?? null;
}

function isBeforeH2(el: Element, h2: Element | null): boolean {
  if (!h2) {
    return true;
  }

  return (h2.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_PRECEDING) !== 0;
}

function isIgnorableSibling(el: HTMLElement): boolean {
  if (el.matches('br')) {
    return true;
  }

  const text = el.textContent?.trim() ?? '';
  const hasElementChildren = el.querySelector(
    ':not(br):not(.complexity-badge)',
  );

  return text.length === 0 && !hasElementChildren;
}

/** Элемент содержит только бейджи аудитории (часто отдельный `<p>` на строку). */
function isBadgeOnlyContainer(el: HTMLElement): boolean {
  const badges = el.querySelectorAll('.complexity-badge');
  if (badges.length === 0) {
    return false;
  }

  const clone = el.cloneNode(true) as HTMLElement;
  clone.querySelectorAll('.complexity-badge').forEach((b) => b.remove());
  return (clone.textContent?.trim() ?? '').length === 0;
}

function appendBadgesFromNode(node: HTMLElement, badges: HTMLElement[]): void {
  if (node.matches('.complexity-badge')) {
    badges.push(node);
    return;
  }

  if (isBadgeOnlyContainer(node)) {
    node.querySelectorAll<HTMLElement>('.complexity-badge').forEach((badge) => {
      badges.push(badge);
    });
  }
}

function collectBadgeSiblingsAfter(anchor: HTMLElement): HTMLElement[] {
  const badges: HTMLElement[] = [];
  let node: ChildNode | null = anchor.nextSibling;

  while (node) {
    if (node instanceof HTMLElement) {
      if (node.matches('hr, h2, h3, h4')) {
        break;
      }

      if (node.matches('.article-tags, .article-meta')) {
        break;
      }

      if (node.matches('.complexity-badge') || isBadgeOnlyContainer(node)) {
        appendBadgesFromNode(node, badges);
      } else if (!isIgnorableSibling(node)) {
        break;
      }
    }

    node = node.nextSibling;
  }

  return badges;
}

function collectConsecutiveBadgesFrom(firstBadge: HTMLElement): HTMLElement[] {
  const parent = firstBadge.parentElement;

  if (parent && isBadgeOnlyContainer(parent)) {
    const badges: HTMLElement[] = [];
    appendBadgesFromNode(parent, badges);
    return [...badges, ...collectBadgeSiblingsAfter(parent)];
  }

  return [firstBadge, ...collectBadgeSiblingsAfter(firstBadge)];
}

function collectBadgesAfter(anchor: HTMLElement): HTMLElement[] {
  return collectBadgeSiblingsAfter(anchor);
}

function findSoloIntroArticleTags(root: HTMLElement): HTMLElement | null {
  const h2 = root.querySelector('h2');
  const candidates = [...root.querySelectorAll<HTMLElement>('.article-tags')].filter(
    (el) =>
      !el.closest('.article-meta') &&
      !el.closest('.callout') &&
      isBeforeH2(el, h2),
  );

  if (candidates.length !== 1) {
    return null;
  }

  return candidates[0]!;
}

function findIntroBadgeCluster(root: HTMLElement): HTMLElement[] {
  const h2 = root.querySelector('h2');
  const hasIntroTags = [...root.querySelectorAll('.article-tags')].some(
    (el) => isBeforeH2(el, h2) && !el.closest('.callout'),
  );

  if (hasIntroTags) {
    return [];
  }

  const firstBadge = [...root.querySelectorAll<HTMLElement>('.complexity-badge')].find(
    (el) =>
      !el.closest('.article-meta') &&
      !el.closest('.callout') &&
      isBeforeH2(el, h2),
  );

  if (!firstBadge) {
    return [];
  }

  return collectConsecutiveBadgesFrom(firstBadge);
}

function createMetaLabel(text: string): HTMLSpanElement {
  const label = document.createElement('span');
  label.className = 'article-meta__label';
  label.textContent = text;
  return label;
}

function createMetaRow(
  labelText: string,
  chipsClassName: string,
): {row: HTMLDivElement; chips: HTMLDivElement} {
  const row = document.createElement('div');
  row.className = 'article-meta__row';

  const chips = document.createElement('div');
  chips.className = chipsClassName;

  row.append(createMetaLabel(labelText), chips);

  return {row, chips};
}

function applyAudienceRoleClasses(root: HTMLElement): void {
  root.querySelectorAll<HTMLElement>('.complexity-badge').forEach((el) => {
    const slug = getComplexityBadgeSlug(el);
    const modifier = slug ? `complexity-badge--${slug}` : 'complexity-badge--other';

    for (const cls of [...el.classList]) {
      if (cls.startsWith('complexity-badge--')) {
        el.classList.remove(cls);
      }
    }

    el.classList.add(modifier);
  });
}

function buildMetaPanel(
  tagsEl: HTMLElement | null,
  badges: HTMLElement[],
): void {
  if (!tagsEl && badges.length === 0) {
    return;
  }

  const insertBeforeEl = tagsEl ?? badges[0]!;
  if (insertBeforeEl.closest('.article-meta')) {
    return;
  }

  const meta = document.createElement('div');
  meta.className = 'article-meta';
  meta.dataset.enhanced = 'true';

  if (tagsEl) {
    const {row, chips} = createMetaRow('Статус', 'article-meta__chips article-tags');
    chips.append(...tagsEl.querySelectorAll('.tag'));
    meta.append(row);
  }

  if (badges.length > 0) {
    const {row, chips} = createMetaRow(
      'Для кого',
      'article-meta__chips article-meta__audience',
    );
    badges.forEach((badge) => chips.append(badge));
    meta.append(row);
  }

  insertBeforeEl.parentNode?.insertBefore(meta, insertBeforeEl);

  if (tagsEl) {
    tagsEl.remove();
  }
}

export function enhanceArticleMeta(): void {
  const root = document.querySelector<HTMLElement>(MARKDOWN_ROOT);
  if (!root) {
    return;
  }

  applyAudienceRoleClasses(root);

  if (root.querySelector('.article-meta[data-enhanced="true"]')) {
    return;
  }

  const tagsEl = findSoloIntroArticleTags(root);
  const badges = tagsEl
    ? collectBadgesAfter(tagsEl)
    : findIntroBadgeCluster(root);

  buildMetaPanel(tagsEl, badges);
}
