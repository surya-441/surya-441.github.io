'use client';

import { useEffect, useRef, ReactNode, useCallback } from 'react';

interface ScrollManagerProps {
  children: ReactNode;
  sectionCount: number;
}

const SCROLL_COOLDOWN = 500; // ms between section transitions

const ScrollManager = ({ children, sectionCount }: ScrollManagerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);
  const isScrolling = useRef(false);

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

      // Reset scrolling flag after the smooth scroll completes
      setTimeout(() => {
        isScrolling.current = false;
      }, SCROLL_COOLDOWN);
    },
    [sectionCount]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();

      // Check if we are inside a scrollable container
      const target = e.target as HTMLElement;
      const scrollableParent = target.closest('.custom-scrollbar, .overflow-y-auto');

      if (scrollableParent) {
        const { scrollTop, scrollHeight, clientHeight } = scrollableParent as HTMLElement;
        const isAtTop = scrollTop <= 0;
        const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 1;

        // Allow internal scrolling when not at boundary
        if (e.deltaY > 0 && !isAtBottom) return;
        if (e.deltaY < 0 && !isAtTop) return;
      }

      // Prevent default scrolling — we handle it ourselves
      e.preventDefault();

      // Cooldown check
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
  }, [sectionCount, getCurrentSection, scrollToSection]);

  useEffect(() => {
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
  }, [sectionCount, getCurrentSection, scrollToSection]);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
    >
      {children}
    </div>
  );
};

export default ScrollManager;
