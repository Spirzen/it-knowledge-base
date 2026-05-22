import designs from '@site/src/data/itDesigns.json';

export const IT_DESIGN_STORAGE_KEY = 'it-universe-design';
export const IT_DESIGN_DEFAULT_ID = 'design-universe-original';

export type ItDesignMode = 'light' | 'dark';

export interface ItDesign {
  id: string;
  name: string;
  mode: ItDesignMode;
}

export const IT_DESIGNS: ItDesign[] = designs as ItDesign[];

export function getItDesignById(id: string): ItDesign | undefined {
  return IT_DESIGNS.find((d) => d.id === id);
}

export function applyItDesign(
  designId: string,
  setColorMode?: (mode: ItDesignMode) => void,
): ItDesign {
  const design =
    getItDesignById(designId) ??
    getItDesignById(IT_DESIGN_DEFAULT_ID)!;

  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-design', design.id);
  }
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(IT_DESIGN_STORAGE_KEY, design.id);
  }
  if (setColorMode) {
    setColorMode(design.mode);
  }
  return design;
}

export function readStoredItDesignId(): string {
  if (typeof localStorage === 'undefined') {
    return IT_DESIGN_DEFAULT_ID;
  }
  const saved = localStorage.getItem(IT_DESIGN_STORAGE_KEY);
  return saved && getItDesignById(saved) ? saved : IT_DESIGN_DEFAULT_ID;
}
