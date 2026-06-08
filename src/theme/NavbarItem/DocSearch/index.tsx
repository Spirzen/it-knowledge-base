import React, {lazy, Suspense, type ReactNode} from 'react';
import type {Props} from './types';

const DocSearchBar = lazy(() => import('@site/src/components/DocSearch/DocSearchBar'));

export default function NavbarItemDocSearch(_props: Props): ReactNode {
  return (
    <Suspense
      fallback={
        <div
          className="navbar__search navbar__search--placeholder"
          aria-hidden="true"
          style={{minWidth: 140, minHeight: 36}}
        />
      }>
      <DocSearchBar variant="navbar" />
    </Suspense>
  );
}
