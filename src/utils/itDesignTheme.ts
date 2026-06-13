import designs from '@site/src/data/itDesigns.json';

export const IT_DESIGN_STORAGE_KEY = 'it-universe-design';
export const IT_DESIGN_DEFAULT_ID = 'design-universe-original';

export type ItDesignMode = 'light' | 'dark';

export interface ItDesign {
  id: string;
  name: string;
  mode: ItDesignMode;
  featured?: boolean;
}

export const IT_DESIGNS: ItDesign[] = designs as ItDesign[];

/** Популярные темы — в JSON идут сразу после оригинала; здесь для явной группировки в UI */
export const IT_FEATURED_DESIGNS = IT_DESIGNS.filter((d) => d.featured);

export const IT_OTHER_DESIGNS = IT_DESIGNS.filter(
  (d) => d.id !== IT_DESIGN_DEFAULT_ID && !d.featured,
);

export function getItDesignById(id: string): ItDesign | undefined {
  return IT_DESIGNS.find((d) => d.id === id);
}

export function applyItDesign(designId: string): ItDesign {
  const design =
    getItDesignById(designId) ??
    getItDesignById(IT_DESIGN_DEFAULT_ID)!;

  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-design', design.id);
  }
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(IT_DESIGN_STORAGE_KEY, design.id);
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
