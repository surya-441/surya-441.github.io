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

    const scrollToSection = (index: number) => {
        isScrolling.current = true;
        lastScrollTime.current = Date.now();
        setActiveIndex(index);
        setTimeout(() => {
            isScrolling.current = false;
        }, 500);
    };



    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();

            const now = Date.now();
            if (now - lastScrollTime.current < 500 || isScrolling.current) {
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

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [activeIndex, sectionCount]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const now = Date.now();
            if (now - lastScrollTime.current < 500) return;

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

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeIndex, sectionCount]);
    
    useEffect(() => {
        let startY = 0;
        let startTime = 0;

        const handleTouchStart = (e: TouchEvent) => {
            if (e.touches.length === 1) {
                startY = e.touches[0].clientY;
                startTime = Date.now();
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (startY === 0 || e.touches.length !== 1) return;

            const currentY = e.touches[0].clientY;
            const deltaY = startY - currentY;
            
            // Only process significant movement (20px threshold for accidental touch)
            if (Math.abs(deltaY) < 20) return;

            const now = Date.now();
            if (now - lastScrollTime.current < 500 || isScrolling.current) {
                return;
            }

            // Check for internal scrollable areas (same logic as wheel)
            const target = e.target as HTMLElement;
            const scrollableParent = target.closest(".custom-scrollbar, .overflow-y-auto");
            if (scrollableParent) {
                const el = scrollableParent as HTMLElement;
                const { scrollTop, scrollHeight, clientHeight } = el;
                const isAtTop = scrollTop <= 0;
                const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 1;

                if (deltaY > 0 && !isAtBottom) return; // Allow internal down
                if (deltaY < 0 && !isAtTop) return;   // Allow internal up
            }

            e.preventDefault();  // Block native scroll

            if (deltaY > 30) {  // Down swipe (positive delta)
                if (activeIndex < sectionCount - 1) {
                    scrollToSection(activeIndex + 1);
                }
            } else if (deltaY < -30) {  // Up swipe (negative delta)
                if (activeIndex > 0) {
                    scrollToSection(activeIndex - 1);
                }
            }
        };

        const handleTouchEnd = () => {
            startY = 0;
            startTime = 0;
        };

        // Use document for global capture (works better than window on mobile)
        document.addEventListener('touchstart', handleTouchStart, { passive: true });
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd, { passive: true });

        return () => {
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [activeIndex, sectionCount]);  // Reuse your scrollToSection via closure
    
    return (
        <div 
            className="w-full transition-transform duration-300 ease-in-out h-screen"
            style={{ transform: `translateY(-${activeIndex * 100}vh)` }}
        >
            {children}
        </div>
    );
};

export default ScrollManager;
