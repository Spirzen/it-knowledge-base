/**
 * @jest-environment jsdom
 */
import {wrapArticleSections} from './articleSectionEnhancement';

function mountArticle(html: string): HTMLElement {
  document.body.innerHTML = `<div class="theme-doc-markdown markdown">${html}</div>`;
  return document.querySelector('.theme-doc-markdown')!;
}

describe('wrapArticleSections', () => {
  it('wraps each top-level h2 and following content in .doc-section', () => {
    const root = mountArticle(`
      <h1>Title</h1>
      <p>Intro</p>
      <h2>One</h2>
      <p>A</p>
      <h3>Sub</h3>
      <h2>Two</h2>
      <p>B</p>
    `);

    wrapArticleSections(root);

    const sections = root.querySelectorAll('.doc-section');
    expect(sections).toHaveLength(2);
    expect(sections[0]?.querySelector('h2')?.textContent).toBe('One');
    expect(sections[0]?.querySelector('h3')?.textContent).toBe('Sub');
    expect(sections[1]?.querySelector('h2')?.textContent).toBe('Two');
    expect(root.querySelector(':scope > h2')).toBeNull();
  });

  it('is idempotent on second call', () => {
    const root = mountArticle('<h2>A</h2><p>x</p><h2>B</h2>');
    wrapArticleSections(root);
    wrapArticleSections(root);
    expect(root.querySelectorAll('.doc-section')).toHaveLength(2);
  });

  it('finds h2 inside inner content wrapper (h1 parent)', () => {
    document.body.innerHTML = `
      <div class="theme-doc-markdown">
        <div class="markdown">
          <div class="doc-item-content">
            <h1>Title</h1>
            <h2>Section</h2>
            <p>Body</p>
          </div>
        </div>
      </div>`;
    const root = document.querySelector('.theme-doc-markdown')!;

    wrapArticleSections(root);

    expect(root.querySelectorAll('.doc-section')).toHaveLength(1);
    expect(root.querySelector('.doc-section h2')?.textContent).toBe('Section');
  });
});
