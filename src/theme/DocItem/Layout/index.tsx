import React from 'react';
import OriginalLayout from '@theme-original/DocItem/Layout';

interface DocLayoutProps {
  [key: string]: unknown;
}

export default function DocLayout(props: DocLayoutProps): JSX.Element {
  return <OriginalLayout {...props} />;
}