import React, {lazy, Suspense} from 'react';
import {demoSkeletonFallback} from './demoFallback';

/**
 * Ленивая загрузка тяжёлого демо (отдельный chunk).
 * Использование в MDX:
 *   import loadDemo from '@site/src/components/shared/lazyDemo';
 *   const ArticlePdfExport = loadDemo(() => import('@site/src/components/ArticlePdfExport'));
 */
export default function lazyDemo(importFn) {
  const LazyComponent = lazy(importFn);

  function LazyDemo(props) {
    return (
      <Suspense fallback={demoSkeletonFallback()}>
        <LazyComponent {...props} />
      </Suspense>
    );
  }

  LazyDemo.displayName = 'LazyDemo';
  return LazyDemo;
}
