import {useMemo} from 'react';
import {
  SIDEBAR_COLLECTIONS,
  collectionEntryPath,
} from '@site/src/data/sidebarCollections';
import collectionDocTitles from '@site/src/data/collectionDocTitles.json';

function humanizeSlug(segment) {
  return segment
    .replace(/^\d+-/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

/** Запасной заголовок, если в реестре нет записи */
export function fallbackTitleFromDocId(docId) {
  const parts = docId.split('/');
  const last = parts[parts.length - 1] ?? docId;

  if (last === 'intro' && parts.length >= 2) {
    return humanizeSlug(parts[parts.length - 2]);
  }

  if (/^\d+$/.test(last) && parts.length >= 2) {
    return `${humanizeSlug(parts[parts.length - 2])} · ${last}`;
  }

  return humanizeSlug(last) || docId;
}

function resolveArticleTitle(docId) {
  const fromRegistry = collectionDocTitles[docId]?.title;
  if (fromRegistry) {
    return fromRegistry;
  }
  return fallbackTitleFromDocId(docId);
}

/**
 * Карта "название подборки" → статьи с человекочитаемыми заголовками.
 * @returns {Map<string, { id: string, title: string, href: string }[]>}
 */
export function useCollectionArticleLists() {
  return useMemo(() => {
    const map = new Map();

    for (const collection of SIDEBAR_COLLECTIONS) {
      const articles = collection.items.map((docId) => ({
        id: docId,
        title: resolveArticleTitle(docId),
        href: collectionEntryPath(docId),
      }));
      map.set(collection.label, articles);
    }

    return map;
  }, []);
}
