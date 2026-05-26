import React, {useMemo} from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import {
  filterDocCardListItems,
  useDoc,
  useDocsVersion,
} from '@docusaurus/plugin-content-docs/client';
import {isSamePath} from '@docusaurus/theme-common/internal';
import DocCardList from '@theme/DocCardList';

import {
  findSidebarSiblingContainer,
  getDocIdFromSidebarItem,
  getHrefFromSidebarItem,
  getSiblingsByPathname,
  isIntroDocId,
  resolveDocSidebarItems,
} from './articleSeeAlsoUtils';

import styles from './ArticleSeeAlso.module.css';

const MAX_CARDS = 12;

export default function ArticleSeeAlso() {
  const {metadata, frontMatter} = useDoc();
  const version = useDocsVersion();
  const {pathname} = useLocation();

  const sidebarItems = useMemo(
    () => resolveDocSidebarItems(version, metadata),
    [version, metadata],
  );

  const siblingItems = useMemo(() => {
    if (!sidebarItems.length) {
      return [];
    }

    const byDocId = findSidebarSiblingContainer(sidebarItems, metadata.id);
    if (byDocId?.parentItems?.length) {
      return byDocId.parentItems;
    }

    return getSiblingsByPathname(sidebarItems, pathname);
  }, [sidebarItems, metadata.id, pathname]);

  if (frontMatter.see_also === false) {
    return null;
  }

  if (isIntroDocId(metadata.id)) {
    return null;
  }

  if (!sidebarItems.length) {
    return null;
  }

  const cards = filterDocCardListItems(siblingItems).filter((item) => {
    const docId = getDocIdFromSidebarItem(item);
    if (docId) {
      if (docId === metadata.id || isIntroDocId(docId)) {
        return false;
      }
      return true;
    }
    if (item.href && isSamePath(item.href, metadata.permalink)) {
      return false;
    }
    return item.type === 'category';
  });

  if (cards.length === 0) {
    return null;
  }

  const introItem = siblingItems.find((item) =>
    isIntroDocId(getDocIdFromSidebarItem(item)),
  );
  const introHref = introItem ? getHrefFromSidebarItem(introItem) : undefined;
  const visibleCards = cards.slice(0, MAX_CARDS);
  const hiddenCount = cards.length - visibleCards.length;

  return (
    <section className={styles.seeAlso} aria-labelledby="article-see-also-heading">
      <h2 id="article-see-also-heading" className={styles.heading}>
        См. также
      </h2>
      <p className={styles.hint}>
        Другие статьи этого же раздела в боковом меню (как на странице "О разделе").
      </p>
      <DocCardList items={visibleCards} className={styles.cardList} />
      {hiddenCount > 0 && introHref && (
        <p className={styles.moreLink}>
          <Link to={introHref}>
            Ещё {hiddenCount}{' '}
            {hiddenCount === 1
              ? 'статья'
              : hiddenCount < 5
                ? 'статьи'
                : 'статей'}{' '}
            в разделе
          </Link>
        </p>
      )}
    </section>
  );
}
