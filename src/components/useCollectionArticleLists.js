import {useEffect, useMemo, useState} from 'react';
import {
  SIDEBAR_COLLECTIONS,
  collectionEntryPath,
} from '@site/src/data/sidebarCollections';

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

let titlesPromise;

function loadCollectionDocTitles() {
  if (!titlesPromise) {
    titlesPromise = import('@site/src/data/collectionDocTitles.json').then(
      (mod) => mod.default ?? mod,
    );
  }
  return titlesPromise;
}

/**
 * Карта "название подборки" → статьи с человекочитаемыми заголовками.
 * @returns {Map<string, { id: string, title: string, href: string }[]>}
 */
export function useCollectionArticleLists() {
  const [titlesByDocId, setTitlesByDocId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    loadCollectionDocTitles().then((registry) => {
      if (!cancelled) {
        setTitlesByDocId(registry);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return useMemo(() => {
    const map = new Map();

    const resolveArticleTitle = (docId) => {
      const fromRegistry = titlesByDocId?.[docId]?.title;
      if (fromRegistry) {
        return fromRegistry;
      }
      return fallbackTitleFromDocId(docId);
    };

    for (const collection of SIDEBAR_COLLECTIONS) {
      const articles = collection.items.map((docId) => ({
        id: docId,
        title: resolveArticleTitle(docId),
        href: collectionEntryPath(docId),
      }));
      map.set(collection.label, articles);
    }

    return map;
  }, [titlesByDocId]);
}
