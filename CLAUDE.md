# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # Start dev server
pnpm build            # Production build
pnpm lint             # ESLint (flat config)
pnpm type-check       # TypeScript strict check (tsc --noEmit)
pnpm test             # Run all tests (vitest run)
pnpm test:watch       # Run tests in watch mode
pnpm format           # Prettier format all files
```

Run a single test file: `pnpm test -- path/to/file.test.ts`

## Architecture

**Next.js 16 App Router** with React 19, TypeScript (strict), Tailwind CSS v4, Framer Motion, and React Three Fiber. Uses **pnpm** and **ESM** (`"type": "module"`).

### Content-Driven Section System

The site follows a centralized content model:

1. **`data/content.tsx`** — single source of truth for all site content (nav links, services, projects, experiences, etc.), typed with `satisfies Type[]`
2. **Section components** (`components/About.tsx`, `components/Works.tsx`, etc.) consume data from content.tsx
3. **`hoc/SectionWrapper.tsx`** wraps each section, providing:
   - Framer Motion `staggerContainer` with `whileInView` scroll-triggered animations (fires once at 15% visibility)
   - Anchor element with CSS offset for smooth-scroll navigation
   - Consistent max-width and padding layout
4. **`app/page.tsx`** composes all wrapped sections with decorative dividers

Export pattern for sections:
```ts
const About = () => { ... }
export default SectionWrapper(About, 'about')
```

### Motion Variant System

`utils/motion.ts` exports reusable animation factories (`fadeIn`, `textVariant`, `zoomIn`, `slideIn`, `staggerContainer`) used throughout components as framer-motion `variants`.

### Three.js / R3F Integration

- `components/canvas/Stars.tsx` — R3F canvas with 3000-point starfield, self-rotating via `useFrame`
- `components/canvas/DynamicStars.tsx` — wraps Stars with `next/dynamic` and `ssr: false` to prevent SSR issues
- Canvas is composited into the Contact section via z-index layering

### Server vs Client Components

Only `app/layout.tsx` and `app/page.tsx` are server components. All components in `components/` use `'use client'` (required for hooks, framer-motion, Three.js, event handlers).

## Code Style

- **Single quotes**, **no semicolons**, **trailing commas everywhere**, **100-char width** (Prettier)
- **Tailwind class sorting** via `prettier-plugin-tailwindcss`
- **`@/*` path alias** (mapped to project root) for cross-directory imports; relative imports only within the same directory
- **`import type`** for all type-only imports
- Prefix unused variables/params with `_`
- **Never use `any`** — ESLint warns on it
- Prefer `interface` over `type` for object shapes
- Explicitly type `useState`, `useRef`, and function parameters
- Components: `export default function Name()` for pages/layouts, arrow functions + `SectionWrapper` for sections
- Shared interfaces in `types/index.ts`; image module declarations in `types/assets.d.ts`

### Import Grouping

Separate with blank lines and comment headers: `// Core`, `// Module / Lib`, `// Types`, `// Content / Data / Components`.

### Naming

| Element            | Convention  |
| ------------------ | ----------- |
| Component files    | PascalCase  |
| Utility/data files | camelCase   |
| Module constants   | UPPER_SNAKE |
| CSS custom classes | camelCase (`sectionHeadText`) or kebab-case (`accent-text-gradient`) |

## Styling

**Tailwind CSS v4** — theme configured in `styles/globals.css` under `@theme { }` (no `tailwind.config`). Key tokens:
- `--color-primary: #090909`, `--color-accent: #e8a849` (signature copper), `--color-steel: #7b8ea0`
- Custom `@utility` classes: `heroHeadText`, `sectionHeadText`, `sectionSubText`
- Layout utilities: `paddingX`, `paddingY`, `padding` (responsive)
- Gradients: `accent-text-gradient`, `steel-text-gradient`, `blue-text-gradient`
- Decorative: `grain-overlay` (film grain), `rule-line`, `accent-dot`
- Fonts: Syne (display `--font-syne`) and Outfit (body `--font-outfit`) via Google Fonts

## Testing

**Vitest** with jsdom, `@testing-library/react`, and `@testing-library/jest-dom`. Test globals are enabled. CSS is disabled in tests.

`vitest.setup.ts` mocks `IntersectionObserver` (required because framer-motion's `whileInView` depends on it).

Test files live alongside source files as `*.test.{ts,tsx}`.

## Important Constraints

- ESM project — use `.mjs` or `.cjs` extensions for config files needing different module syntax
- `@/*` is the only path alias — do not add others without updating `tsconfig.json`
- Three.js is pinned to `0.165.0` — do not upgrade without checking R3F/Drei compatibility
- Static assets are barrel-exported from `public/assets/index.ts` — add new assets there
- Barrel re-exports exist in `components/`, `components/canvas/`, `hoc/`, `types/`
