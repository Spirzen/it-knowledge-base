import React from 'react';
import Link from '@docusaurus/Link';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

import styles from './ArticleRelated.module.css';

function normalizeRelatedItem(item) {
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
    const docId = doc.replace(/^\//, '').replace(/\.mdx?$/, '');
    return {title, href: `/${docId}`};
  }

  return null;
}

export default function ArticleRelated() {
  const {frontMatter} = useDoc();
  const raw = frontMatter?.related;

  if (!Array.isArray(raw) || raw.length === 0) {
    return null;
  }

  const items = raw.map(normalizeRelatedItem).filter(Boolean);
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
