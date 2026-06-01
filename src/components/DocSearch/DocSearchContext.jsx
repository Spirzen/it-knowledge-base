import React, {createContext, useContext} from 'react';
import {useDocSearchState} from './useDocSearchState';

const DocSearchContext = createContext(null);

export function DocSearchProvider({children}) {
  const state = useDocSearchState();
  return (
    <DocSearchContext.Provider value={state}>{children}</DocSearchContext.Provider>
  );
}

export function useDocSearch() {
  const ctx = useContext(DocSearchContext);
  if (!ctx) {
    throw new Error('useDocSearch must be used within DocSearchProvider');
  }
  return ctx;
}
