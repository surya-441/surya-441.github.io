'use client';

import { useEffect, useState, useRef } from 'react';
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
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;

      const index = sections.findIndex((s) => s.key === e.key.toLowerCase());
      if (index !== -1) {
        e.preventDefault();
        scrollToSection(index);
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scrollToSection]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  const navItems = sections.map((section, index) => (
    <button
      key={section.key}
      onClick={() => {
        scrollToSection(index);
        setOpen(false);
      }}
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
  ));

  return (
    <>
      {/* Desktop: horizontal bar */}
      <nav className="fixed top-4 left-4 z-50 hidden lg:flex items-center gap-6">
        {navItems}
      </nav>

      {/* Mobile / medium: hamburger */}
      <div ref={menuRef} className="fixed top-4 left-4 z-50 flex lg:hidden">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-foreground text-background shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            {open ? (
              <>
                <line x1="3" y1="3" x2="13" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="13" y1="3" x2="3" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="2" y1="4" x2="14" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="2" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>

        {open && (
          <div className="absolute top-full left-0 mt-2 flex flex-col gap-2 p-3 rounded-lg shadow-lg border border-foreground/20 bg-background backdrop-blur-sm">
            {navItems}
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
