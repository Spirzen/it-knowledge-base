import React, {memo} from 'react';
import Link from '@docusaurus/Link';
import {splitHighlight} from './highlight';
import styles from './styles.module.css';

/**
 * @param {{ text: string, mark: boolean }[]} parts
 */
function Highlighted({parts}) {
  return (
    <>
      {parts.map((part, index) =>
        part.mark ? (
          <mark key={index} className={styles.mark}>
            {part.text}
          </mark>
        ) : (
          <React.Fragment key={index}>{part.text}</React.Fragment>
        ),
      )}
    </>
  );
}

/**
 * @param {{
 *   doc: { u: string, t: string, d: string, s: string },
 *   query: string,
 *   active: boolean,
 *   onSelect: () => void,
 * }} props
 */
function DocSearchResult({doc, query, active, onSelect}) {
  const titleParts = splitHighlight(doc.t, query);
  const descParts = doc.d ? splitHighlight(doc.d, query) : [];

  return (
    <li data-active={active ? 'true' : undefined}>
      <Link
        to={doc.u}
        className={`${styles.result} ${active ? styles.resultActive : ''}`}
        onClick={onSelect}>
        <div className={styles.resultMain}>
          <span className={styles.resultTitle}>
            <Highlighted parts={titleParts} />
          </span>
          {doc.s ? <span className={styles.resultSection}>{doc.s}</span> : null}
        </div>
        {doc.d ? (
          <p className={styles.resultDesc}>
            <Highlighted parts={descParts} />
          </p>
        ) : null}
        <span className={styles.resultGo} aria-hidden>
          ↵
        </span>
      </Link>
    </li>
  );
}

export default memo(DocSearchResult);
