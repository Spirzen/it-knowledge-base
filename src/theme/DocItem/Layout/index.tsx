import React from 'react';
import OriginalLayout from '@theme-original/DocItem/Layout';
import AnimatedBackground from '@site/src/components/AnimatedBackground';

export default function DocLayout(props) {
  return (
    <>
      <AnimatedBackground />
      <OriginalLayout {...props} />
    </>
  );
}