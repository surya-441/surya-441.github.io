# Portfolio Code Review — Feb 2025

## 🟢 What's Good
- **Clean build** — zero warnings, lean bundle (~105 kB first load)
- **Static export** — correct for GitHub Pages
- **Theme toggle** — proper SSR hydration handling with `mounted` gate
- **Scroll snap** — full-page on desktop, disabled on mobile
- **Stickman** — charming, unique, adds personality
- **Icon components** — well-typed with `React.SVGProps<SVGSVGElement>`
- **Data separation** — experiences/projects in their own files

## 🟡 What's Okay
- Data files are `.js` not `.ts` (no type safety)
- Inline `style={{}}` mixed with Tailwind classes (inconsistent)
- SEO metadata is generic (`"Next JS Portfolio"`)
- No favicon, robots.txt, or sitemap
- Unused `RightArrow.tsx` icon

## 🟠 Needs Improvement
- Dark mode colors in WorkExperience (`text-gray-600`/`text-gray-700` invisible on dark bg)
- Scroll indicators use hardcoded `#0070f3`
- No entrance animations or transitions
- No contact section or social links
- No resume download
- Project cards lack visual hierarchy (no images, no tech tags, no hover)
- Global `g { fill }` CSS rule is too broad

## 🔴 Fix Right Away
- Conflicting `text-base text-xl` in Intro.tsx
- Stickman SVG has no `aria-label` or `role`
- GitHub icon SVG inlined in Projects.tsx (not reusable)
- Unnecessary `"use client"` in Stickman.tsx
