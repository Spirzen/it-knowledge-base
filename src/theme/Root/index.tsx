import React, {type ReactNode} from 'react';
import {DocSearchProvider} from '@site/src/components/DocSearch/DocSearchContext';
import {DocSidebarFallbackProvider} from '@site/src/theme/DocSidebarFallback/context';

type Props = {
  children: ReactNode;
};

export default function Root({children}: Props): ReactNode {
  return (
    <DocSearchProvider>
      <DocSidebarFallbackProvider>{children}</DocSidebarFallbackProvider>
    </DocSearchProvider>
  );
}
