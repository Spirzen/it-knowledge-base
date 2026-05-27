/**
 * Канонический URL статьи — как в Docusaurus: frontmatter `slug`, иначе путь от docs/.
 * @param {string} relPath — путь от docs/ (например lab/questions/122.md)
 * @param {Record<string, unknown>} [frontmatter]
 * @returns {string}
 */
export function resolveDocHref(relPath, frontmatter = {}) {
  const slug = frontmatter.slug;
  if (typeof slug === 'string' && slug.trim()) {
    const trimmed = slug.trim();
    return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  }
  const withoutExt = relPath.replace(/\.mdx?$/i, '');
  return `/${withoutExt.replace(/\\/g, '/')}`;
}
