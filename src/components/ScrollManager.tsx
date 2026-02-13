"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollManagerProps {
    children: ReactNode;
    sectionCount: number;
}

const ScrollManager = ({ children, sectionCount }: ScrollManagerProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const lastScrollTime = useRef(0);
    const isScrolling = useRef(false);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();

            const now = Date.now();
            if (now - lastScrollTime.current < 1000 || isScrolling.current) {
                return;
            }

            // Check if we are inside a scrollable container
            const target = e.target as HTMLElement;
            // Improved detection: look for scrollable areas specifically
            const scrollableParent = target.closest(".custom-scrollbar, .overflow-y-auto");

            if (scrollableParent) {
                const { scrollTop, scrollHeight, clientHeight } = scrollableParent as HTMLElement;
                const isAtTop = scrollTop <= 0;
                // Use a small buffer (1px) for float imprecision
                const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 1;

                if (e.deltaY > 0 && !isAtBottom) return; // Allow internal down scroll
                if (e.deltaY < 0 && !isAtTop) return;   // Allow internal up scroll
            }

            if (e.deltaY > 0) {
                if (activeIndex < sectionCount - 1) {
                    scrollToSection(activeIndex + 1);
                }
            } else {
                if (activeIndex > 0) {
                    scrollToSection(activeIndex - 1);
                }
            }
        };

        const scrollToSection = (index: number) => {
            isScrolling.current = true;
            lastScrollTime.current = Date.now();
            setActiveIndex(index);

            setTimeout(() => {
                isScrolling.current = false;
            }, 1000);
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [activeIndex, sectionCount]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const now = Date.now();
            if (now - lastScrollTime.current < 1000) return;

            if (e.key === "ArrowDown" || e.key === "PageDown") {
                e.preventDefault();
                if (activeIndex < sectionCount - 1) {
                    // Check logic for internal scroll could be added here if needed
                    scrollToSection(activeIndex + 1);
                }
            } else if (e.key === "ArrowUp" || e.key === "PageUp") {
                e.preventDefault();
                if (activeIndex > 0) {
                    scrollToSection(activeIndex - 1);
                }
            }
        };

        // Reuse scrollToSection logic
        const scrollToSection = (index: number) => {
            isScrolling.current = true;
            lastScrollTime.current = Date.now();
            setActiveIndex(index);
            setTimeout(() => {
                isScrolling.current = false;
            }, 1000);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeIndex, sectionCount]);
    
    return (
        <div 
            className="w-full transition-transform duration-700 ease-in-out h-screen"
            style={{ transform: `translateY(-${activeIndex * 100}vh)` }}
        >
            {children}
        </div>
    );
};

export default ScrollManager;
