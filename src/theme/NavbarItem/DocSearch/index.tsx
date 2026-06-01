import React, {type ReactNode} from 'react';
import DocSearchBar from '@site/src/components/DocSearch/DocSearchBar';
import type {Props} from './types';

export default function NavbarItemDocSearch(_props: Props): ReactNode {
  return <DocSearchBar variant="navbar" />;
}
