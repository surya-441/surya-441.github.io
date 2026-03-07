'use client';

import { useEffect, useRef, useState, ReactNode, useCallback } from 'react';
import { ScrollContext } from './ScrollContext';
import NavBar from './NavBar';

interface ScrollManagerProps {
  children: ReactNode;
  sectionCount: number;
}

const SCROLL_COOLDOWN = 500; // ms between section transitions
const MD_BREAKPOINT = 768; // Tailwind md breakpoint

const ScrollManager = ({ children, sectionCount }: ScrollManagerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);
  const isScrolling = useRef(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  // Track viewport size to enable/disable snap behavior
  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${MD_BREAKPOINT}px)`);
    setIsDesktop(mql.matches);

    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const getCurrentSection = useCallback(() => {
    const container = containerRef.current;
    if (!container) return 0;
    return Math.round(container.scrollTop / container.clientHeight);
  }, []);

  const scrollToSection = useCallback(
    (index: number) => {
      const container = containerRef.current;
      if (!container) return;

      const clamped = Math.max(0, Math.min(index, sectionCount - 1));
      isScrolling.current = true;
      lastScrollTime.current = Date.now();

      container.scrollTo({
        top: clamped * container.clientHeight,
        behavior: 'smooth',
      });

      setCurrentSection(clamped);

      setTimeout(() => {
        isScrolling.current = false;
      }, SCROLL_COOLDOWN);
    },
    [sectionCount]
  );

  // Track current section on scroll (for mobile free-scroll)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const section = Math.round(container.scrollTop / container.clientHeight);
      setCurrentSection(section);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Wheel event interception — desktop only
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isDesktop) return;

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();

      const target = e.target as HTMLElement;
      const scrollableParent = target.closest('.custom-scrollbar, .overflow-y-auto');

      if (scrollableParent) {
        const { scrollTop, scrollHeight, clientHeight } = scrollableParent as HTMLElement;
        const isAtTop = scrollTop <= 0;
        const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 1;

        if (e.deltaY > 0 && !isAtBottom) return;
        if (e.deltaY < 0 && !isAtTop) return;
      }

      e.preventDefault();

      if (now - lastScrollTime.current < SCROLL_COOLDOWN || isScrolling.current) {
        return;
      }

      const current = getCurrentSection();

      if (e.deltaY > 0 && current < sectionCount - 1) {
        scrollToSection(current + 1);
      } else if (e.deltaY < 0 && current > 0) {
        scrollToSection(current - 1);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [sectionCount, getCurrentSection, scrollToSection, isDesktop]);

  // Keyboard navigation — desktop only
  useEffect(() => {
    if (!isDesktop) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const now = Date.now();
      if (now - lastScrollTime.current < SCROLL_COOLDOWN || isScrolling.current) return;

      const current = getCurrentSection();

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        if (current < sectionCount - 1) {
          scrollToSection(current + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (current > 0) {
          scrollToSection(current - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sectionCount, getCurrentSection, scrollToSection, isDesktop]);

  return (
    <ScrollContext.Provider value={{ scrollToSection, currentSection }}>
      <NavBar />
      <div
        ref={containerRef}
        className="w-full h-screen overflow-y-scroll scroll-smooth md:snap-y md:snap-mandatory"
      >
        {children}
      </div>
    </ScrollContext.Provider>
  );
};

export default ScrollManager;
