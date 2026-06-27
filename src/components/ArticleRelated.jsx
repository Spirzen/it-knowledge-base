import React, {useMemo} from 'react';
import Link from '@docusaurus/Link';
import {useActivePlugin, useDoc} from '@docusaurus/plugin-content-docs/client';

import styles from './ArticleRelated.module.css';

/** @type {Record<string, string>} */
let labDocPermalinks = {};
try {
  labDocPermalinks = require('@site/src/data/labDocPermalinks.json');
} catch {
  // npm run docs:lab-redirects
}

/** @type {Record<string, string>} */
let toolsDocPermalinks = {};
try {
  toolsDocPermalinks = require('@site/src/data/toolsDocPermalinks.json');
} catch {
  // npm run docs:tools-redirects
}

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
    const labExternal = labDocPermalinks[docId];
    if (labExternal) {
      return {title, href: labExternal, external: true};
    }
    const toolsExternal = toolsDocPermalinks[docId];
    if (toolsExternal) {
      return {title, href: toolsExternal, external: true};
    }
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
            {item.external ? (
              <a className={styles.link} href={item.href} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            ) : (
              <Link className={styles.link} to={item.href}>
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
