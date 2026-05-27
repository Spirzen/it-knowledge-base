import React, {useMemo} from 'react';
import Link from '@docusaurus/Link';
import {useActivePlugin, useDoc} from '@docusaurus/plugin-content-docs/client';

import styles from './ArticleRelated.module.css';

function normalizeDocId(doc) {
  return doc.replace(/^\//, '').replace(/\.mdx?$/, '');
}

function normalizeRelatedItem(item, docPermalinks) {
  if (!item || typeof item !== 'object') {
    return null;
  }

  const title = (item.title || item.label || '').trim();
  const href = (item.href || item.to || '').trim();
  const doc = (item.doc || item.id || '').trim();

  if (!title) {
    return null;
  }

  if (href) {
    return {title, href: href.startsWith('/') ? href : `/${href}`};
  }

  if (doc) {
    const docId = normalizeDocId(doc);
    return {title, href: docPermalinks.get(docId) ?? `/${docId}`};
  }

  return null;
}

function useDocPermalinks() {
  const activePlugin = useActivePlugin({failfast: true});
  return useMemo(() => {
    const version =
      activePlugin.pluginData.versions.find((entry) => entry.isLast) ??
      activePlugin.pluginData.versions[0];
    if (!version) {
      return new Map();
    }
    return new Map(version.docs.map((doc) => [doc.id, doc.path]));
  }, [activePlugin.pluginData]);
}

export default function ArticleRelated() {
  const {frontMatter} = useDoc();
  const docPermalinks = useDocPermalinks();
  const raw = frontMatter?.related;

  if (!Array.isArray(raw) || raw.length === 0) {
    return null;
  }

  const items = raw.map((item) => normalizeRelatedItem(item, docPermalinks)).filter(Boolean);
  if (items.length === 0) {
    return null;
  }

  return (
    <section className={styles.related} aria-labelledby="article-related-heading">
      <h2 id="article-related-heading" className={styles.heading}>
        Связанные темы
      </h2>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={`${item.href}-${item.title}`}>
            <Link className={styles.link} to={item.href}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
