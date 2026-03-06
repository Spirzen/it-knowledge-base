// TypeScript shims for Docusaurus theme aliases in IDE/lints.
// Runtime resolution is handled by Docusaurus/webpack; this file is only for TS.

declare module '@theme/*' {
  import type {ComponentType} from 'react';
  const ThemeComponent: ComponentType<any>;
  export default ThemeComponent;
  export type Props = any;
}

declare module '@theme-original/*' {
  import type {ComponentType} from 'react';
  const ThemeComponent: ComponentType<any>;
  export default ThemeComponent;
  export type Props = any;
}

// Fallback JSX namespace for environments where React types aren't picked up.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export {};

