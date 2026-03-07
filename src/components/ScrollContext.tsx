'use client';

import { createContext, useContext } from 'react';

interface ScrollContextType {
  scrollToSection: (index: number) => void;
  currentSection: number;
}

export const ScrollContext = createContext<ScrollContextType>({
  scrollToSection: () => {},
  currentSection: 0,
});

export const useScrollContext = () => useContext(ScrollContext);
