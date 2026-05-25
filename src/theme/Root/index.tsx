import React, {type ReactNode} from 'react';
import {DocSidebarFallbackProvider} from '@site/src/theme/DocSidebarFallback/context';

type Props = {
  children: ReactNode;
};

export default function Root({children}: Props): ReactNode {
  return <DocSidebarFallbackProvider>{children}</DocSidebarFallbackProvider>;
}
