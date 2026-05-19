/** Извлечение контента из DOM статьи (только в браузере). */

export function getArticleElement() {
  if (typeof document === 'undefined') {
    return null;
  }
  return (
    document.querySelector('main article') ||
    document.querySelector('.theme-doc-markdown') ||
    document.querySelector('article')
  );
}

export function pickRandom(items) {
  if (!items?.length) {
    return null;
  }
  return items[Math.floor(Math.random() * items.length)];
}

export function pickRandomDifferent(items, current) {
  if (!items?.length) {
    return null;
  }
  if (items.length === 1) {
    return items[0];
  }
  let next = current;
  let guard = 0;
  while (next === current && guard < 20) {
    next = pickRandom(items);
    guard += 1;
  }
  return next;
}

/** Вопросы из нумерованных списков (чеклист самопроверки). */
export function extractChecklistQuestions(articleElement) {
  if (!articleElement) {
    return [];
  }
  const found = [];
  articleElement.querySelectorAll('ol').forEach((ol) => {
    ol.querySelectorAll('li').forEach((li) => {
      const text = li.textContent.trim();
      if (text.length > 5 && text.includes('?')) {
        found.push(text);
      }
    });
  });
  return [...new Set(found)];
}

/** Вопросы после заголовков «Вопрос» в лабораторных статьях. */
export function extractArticleQuestions(articleElement) {
  if (!articleElement) {
    return [];
  }

  const found = [];

  const questionAnchors = articleElement.querySelectorAll('h4.anchor[id^="вопрос"]');
  questionAnchors.forEach((anchor) => {
    let next = anchor.nextElementSibling;
    while (next && next.tagName !== 'P') {
      next = next.nextElementSibling;
    }
    if (next?.textContent) {
      const text = next.textContent.trim();
      if (text.length > 5 && text.includes('?')) {
        found.push(text);
      }
    }
  });

  if (found.length === 0) {
    const headers = articleElement.querySelectorAll('h1, h2, h3, h4, h5, h6, strong, b');
    Array.from(headers)
      .filter(
        (el) =>
          el.textContent.trim() === 'Вопрос' || el.textContent.trim().startsWith('Вопрос'),
      )
      .forEach((header) => {
        let next = header.nextElementSibling;
        let attempts = 0;
        while (next && next.tagName !== 'P' && attempts < 5) {
          next = next.nextElementSibling;
          attempts += 1;
        }
        if (next?.tagName === 'P') {
          const text = next.textContent.trim();
          if (text.length > 5 && text.includes('?')) {
            found.push(text);
          }
        }
      });
  }

  if (found.length === 0) {
    const html = articleElement.innerHTML;
    const regex1 =
      /<h4[^>]*>Вопрос<\/h4>\s*<p[^>]*>([^<]+(?:<[^/][^>]*>[^<]*<\/[^>]+>)*[^<]*)<\/p>/gi;
    let match;
    while ((match = regex1.exec(html)) !== null) {
      const text = match[1].replace(/<[^>]*>/g, '').trim();
      if (text.includes('?')) {
        found.push(text);
      }
    }
    if (found.length === 0) {
      const regex2 = /####\s*Вопрос\s*[\s\S]*?<p>(.*?)<\/p>/gi;
      while ((match = regex2.exec(html)) !== null) {
        const text = match[1].replace(/<[^>]*>/g, '').trim();
        if (text.includes('?')) {
          found.push(text);
        }
      }
    }
  }

  return [...new Set(found)];
}

const GAME_LINK_SELECTOR =
  'a[href*="store.steampowered.com"], a[href*="nintendo.com"], a[href*="animalcrossing.nintendo.com"]';

const SKIP_TITLE = /^(ссылка|перейти)$/i;

/** Названия игр со страницы (магазины Steam / Nintendo). */
export function extractGameTitles(root = document) {
  const titles = [];
  root.querySelectorAll(GAME_LINK_SELECTOR).forEach((link) => {
    const title = link.innerText.trim();
    if (title && !SKIP_TITLE.test(title)) {
      titles.push(title);
    }
  });
  return [...new Set(titles)];
}

/** Термины из таблиц на странице (английский словарь). */
export function extractTableVocabulary(root = document) {
  const rows = root.querySelectorAll('table tbody tr');
  const extracted = [];
  let cols = 0;

  rows.forEach((row) => {
    const cells = row.querySelectorAll('td');
    if (cells.length > cols) {
      cols = cells.length;
    }
    if (!cells.length) {
      return;
    }
    const texts = Array.from(cells).map((c) => c.textContent.trim());
    if (cols === 2 && texts[0] && texts[1]) {
      extracted.push({type: 'pair', term: texts[0], definition: texts[1]});
    } else if (cols >= 3 && texts[0]) {
      extracted.push({
        type: 'abbr',
        term: texts[0],
        definition: texts.slice(1).join(' '),
      });
    }
  });

  return {items: extracted, cols};
}
