# Portfolio Redesign Session Log - Feb 13, 2026

## Overview
This session focused on a comprehensive redesign of the personal portfolio website to improve information density, visual flow, and user interaction.

## Key Changes

### 1. Section Reordering & Layout
-   **Structure**: Reordered sections: `Intro` -> `Work Experience` -> `Education` -> `Skills` -> `Projects`.
-   **Viewport Enforcement**: Enforced strictly `100vh` per section.
-   **Strict Scrolling**: Implemented a custom `ScrollManager` (JS-based) to enforce "one scroll = one section" behavior, preventing momentum skipping.
-   **Keyboard Support**: Enabled `ArrowUp`/`ArrowDown` keys for section navigation.

### 2. Work Experience
-   **Fluid Carousel**: Replaced the vertical list with a horizontal, swipeable carousel using `framer-motion`.
-   **Dark Mode Fix**: Resolved an issue where cards were white-on-white in dark mode by applying correct `dark:bg-gray-900/80` backgrounds.
-   **Shadows**: Fixed shadow clipping by removing `overflow: hidden` from the carousel wrapper and increasing padding.

### 3. Projects
-   **Compact Design**: Reduced card padding (`p-6` -> `p-3`) and text sizes to increase density.
-   **Accordion**: Implemented single-item expansion logic (accordion style) to keep the list clean.
-   **Alignment**: Vertically centered the grid in the viewport to eliminate excess bottom whitespace.

### 4. Technical Skills
-   **Icons**: Added visual icons (`react-icons`) to all skill categories for better visual scanning.

### 5. Global Enhancements
-   **Dynamic Sizing**: Updated all sections to use viewport units (`vh`, `vw`, `clamp()`) for fully responsive scaling on different screen sizes.
-   **Tech Pills**: Created a reusable `TechPill` component for consistent styling of technology tags across Projects and Work Experience.
-   **Custom Scrollbar**: Added a sleek, minimal scrollbar for internal scrollable areas.

## Technical Details
-   **Scroll Logic**: Moved from CSS `scroll-snap` (which was unreliable with trackpads) to a custom `ScrollManager.tsx` that uses CSS transforms (`translateY`) to slide the entire page content.
-   **State Management**: `ScrollManager` tracks the active section index and handles "cooldown" periods to prevent rapid-fire scrolling.

## Files Modified
-   `src/app/page.tsx`
-   `src/components/ScrollManager.tsx` (New)
-   `src/components/WorkExperience.tsx`
-   `src/components/Projects.tsx`
-   `src/components/Skills.tsx`
-   `src/components/Intro.tsx`
-   `src/components/Education.tsx`
-   `src/components/TechPill.tsx` (New)
-   `src/utils/techIcons.tsx` (New)
-   `src/app/globals.css`
-   `tailwind.config.ts` (Dark mode config)
