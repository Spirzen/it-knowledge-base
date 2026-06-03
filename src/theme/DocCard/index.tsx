import React, {type ReactNode} from 'react';
import {
  useDocById,
  findFirstSidebarItemLink,
} from '@docusaurus/plugin-content-docs/client';
import {
  extractLeadingEmoji,
  useDocCardDescriptionCategoryItemsPlural,
} from '@docusaurus/theme-common/internal';
import isInternalUrl from '@docusaurus/isInternalUrl';
import Layout from '@theme/DocCard/Layout';
import TechIcon from '@site/src/components/TechIcon';
import {getTechIdForPath} from '@site/src/data/techArticlePages';

import type {Props} from '@theme/DocCard';
import type {
  PropSidebarItemCategory,
  PropSidebarItemLink,
} from '@docusaurus/plugin-content-docs';

function getFallbackEmojiIcon(
  item: PropSidebarItemLink | PropSidebarItemCategory,
): string {
  if (item.type === 'category') {
    return '🗃';
  }
  return isInternalUrl(item.href) ? '📄️' : '🔗';
}

function resolveTechIdForCardItem(
  item: PropSidebarItemLink | PropSidebarItemCategory,
  href?: string,
): string | null {
  if (item.type === 'link') {
    const docId = item.docId ?? href;
    return docId ? getTechIdForPath(docId) : null;
  }

  return href ? getTechIdForPath(href) : null;
}

function getIconTitleProps(
  item: PropSidebarItemLink | PropSidebarItemCategory,
  href?: string,
): {icon: ReactNode; title: string} {
  const extracted = extractLeadingEmoji(item.label);
  const title = extracted.rest.trim() || item.label;
  const techId = resolveTechIdForCardItem(item, href);

  if (techId) {
    return {
      icon: <TechIcon techId={techId} variant="badge" size="sm" />,
      title,
    };
  }

  const emoji = extracted.emoji ?? getFallbackEmojiIcon(item);
  return {
    icon: emoji,
    title,
  };
}

function CardCategory({item}: {item: PropSidebarItemCategory}): ReactNode {
  const href = findFirstSidebarItemLink(item);
  const categoryItemsPlural = useDocCardDescriptionCategoryItemsPlural();

  if (!href) {
    return null;
  }
  return (
    <Layout
      item={item}
      className={item.className}
      href={href}
      description={item.description ?? categoryItemsPlural(item.items.length)}
      {...getIconTitleProps(item, href)}
    />
  );
}

function CardLink({item}: {item: PropSidebarItemLink}): ReactNode {
  const doc = useDocById(item.docId ?? undefined);
  return (
    <Layout
      item={item}
      className={item.className}
      href={item.href}
      description={item.description ?? doc?.description}
      {...getIconTitleProps(item, item.href)}
    />
  );
}

export default function DocCard({item}: Props): ReactNode {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
