'use client';

import { useEffect } from 'react';
import { useScrollContext } from './ScrollContext';

const sections = [
  { label: 'intro', key: 'i' },
  { label: 'work', key: 'w' },
  { label: 'education', key: 'e' },
  { label: 'projects', key: 'p' },
  { label: 'skills', key: 's' },
];

const NavBar = () => {
  const { scrollToSection, currentSection } = useScrollContext();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;

      const index = sections.findIndex((s) => s.key === e.key.toLowerCase());
      if (index !== -1) {
        e.preventDefault();
        scrollToSection(index);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scrollToSection]);

  return (
    <nav className="fixed top-4 left-4 z-50 hidden md:flex items-center gap-6">
      {sections.map((section, index) => (
        <button
          key={section.key}
          onClick={() => scrollToSection(index)}
          className={`text-lg tracking-wide transition-colors cursor-pointer ${
            currentSection === index
              ? 'text-accent'
              : 'text-foreground/40 hover:text-foreground/70'
          }`}
        >
          <span>[</span>
          <span>{section.key}</span>
          <span>]</span>
          {section.label.slice(1)}
        </button>
      ))}
    </nav>
  );
};

export default NavBar;
