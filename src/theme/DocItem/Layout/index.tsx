import React from 'react';
import OriginalLayout from '@theme-original/DocItem/Layout';
import AnimatedBackground from '@site/src/components/AnimatedBackground';

interface DocLayoutProps {
  [key: string]: unknown;
}

export default function DocLayout(props: DocLayoutProps): JSX.Element {
  return (
    <>
      <AnimatedBackground />
      <OriginalLayout {...props} />
    </>
  );
}