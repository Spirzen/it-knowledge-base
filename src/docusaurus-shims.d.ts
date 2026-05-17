// TypeScript shims for Docusaurus theme aliases in IDE/lints.
// Runtime resolution is handled by Docusaurus/webpack; this file is only for TS.

declare module '@theme/*' {
  import type {ComponentType} from 'react';
  const ThemeComponent: ComponentType<any>;
  export default ThemeComponent;
  export type Props = any;
}

declare module 'html2canvas' {
  import type {Options as Html2CanvasOptions} from 'html2canvas';
  function html2canvas(
    element: HTMLElement,
    options?: Partial<Html2CanvasOptions>,
  ): Promise<HTMLCanvasElement>;
  export default html2canvas;
}

declare module 'jspdf' {
  export class jsPDF {
    constructor(
      orientation?: 'p' | 'portrait' | 'l' | 'landscape',
      unit?: string,
      format?: string | number[],
    );
    internal: {
      pageSize: {
        getWidth: () => number;
        getHeight: () => number;
      };
    };
    addImage(
      imageData: string,
      format: string,
      x: number,
      y: number,
      width: number,
      height: number,
    ): void;
    addPage(): void;
    save(filename: string): void;
  }
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

