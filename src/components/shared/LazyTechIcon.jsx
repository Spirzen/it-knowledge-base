import React, {lazy, Suspense} from 'react';

const TechIcon = lazy(() => import('@site/src/components/TechIcon'));

/**
 * Иконки технологий в сайдбаре — отдельный chunk, не в main.
 */
export default function LazyTechIcon(props) {
  return (
    <Suspense fallback={<span className="tech-icon-skeleton" aria-hidden="true" />}>
      <TechIcon {...props} />
    </Suspense>
  );
}
