import React, {useEffect, useRef} from 'react';
import {useLocation} from '@docusaurus/router';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import {createRoot} from 'react-dom/client';
import {getTechIdForDoc} from '@site/src/data/techArticlePages';
import TechIcon from './TechIcon';
import heroStyles from '../css/tech-article-hero.module.css';

const MARKDOWN_ROOT = '.theme-doc-markdown';
const WRAP_ATTR = 'data-tech-hero-wrap';

function TechArticleHeroIcon({techId}) {
  return (
    <TechIcon
      techId={techId}
      variant="badge"
      size="lg"
      className={heroStyles.icon}
    />
  );
}

/**
 * Вставляет логотип технологии в одну строку с h1 (intro и теория 1/10/11/14).
 */
export default function TechArticleHero() {
  const {metadata} = useDoc();
  const location = useLocation();
  const rootRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const techId = getTechIdForDoc(metadata.id);
    let observer = null;
    let cancelled = false;

    const cleanup = () => {
      rootRef.current?.unmount();
      rootRef.current = null;

      const wrap = wrapRef.current;
      const heading = wrap?.querySelector('h1');
      if (wrap && heading?.parentElement === wrap) {
        wrap.parentElement.insertBefore(heading, wrap);
        wrap.remove();
      }
      wrapRef.current = null;
    };

    const attach = () => {
      if (cancelled || !techId) return false;

      const markdown = document.querySelector(MARKDOWN_ROOT);
      const h1 = markdown?.querySelector('h1:first-of-type');
      if (!h1?.parentElement) return false;
      if (h1.closest(`[${WRAP_ATTR}]`)) return true;

      cleanup();

      const wrap = document.createElement('div');
      wrap.className = heroStyles.wrap;
      wrap.setAttribute(WRAP_ATTR, techId);
      wrap.dataset.techHero = techId;

      const iconHost = document.createElement('div');
      iconHost.className = heroStyles.iconHost;

      h1.parentElement.insertBefore(wrap, h1);
      wrap.appendChild(iconHost);
      wrap.appendChild(h1);

      wrapRef.current = wrap;
      const root = createRoot(iconHost);
      rootRef.current = root;
      root.render(<TechArticleHeroIcon techId={techId} />);
      return true;
    };

    cleanup();

    if (!techId) {
      return cleanup;
    }

    if (!attach()) {
      const markdown = document.querySelector(MARKDOWN_ROOT);
      if (markdown) {
        observer = new MutationObserver(() => {
          if (attach()) observer?.disconnect();
        });
        observer.observe(markdown, {childList: true, subtree: true});
      }
      requestAnimationFrame(() => {
        if (!cancelled) attach();
      });
    }

    return () => {
      cancelled = true;
      observer?.disconnect();
      cleanup();
    };
  }, [metadata.id, location.pathname]);

  return null;
}
