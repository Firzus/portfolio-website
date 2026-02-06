# AGENTS.md - Coding Agent Guidelines

## Project Overview

Portfolio website built with **Next.js 16** (App Router), **React 19**, **TypeScript** (strict),
**Tailwind CSS v4**, **Framer Motion**, and **React Three Fiber** (Three.js). Uses **pnpm** as
package manager and ESM (`"type": "module"`).

## Build / Lint / Type-Check Commands

```bash
pnpm dev              # Start dev server (Next.js)
pnpm build            # Production build (standalone output)
pnpm lint             # ESLint (flat config, next/core-web-vitals + next/typescript)
pnpm type-check       # TypeScript strict check (tsc --noEmit)
pnpm format           # Prettier format all files
```

**No test runner is configured.** There are no test files, no test dependencies, and no test script.
No Cursor rules or Copilot instructions files exist in this repository.

## Project Structure

```
app/                  # Next.js App Router (layout.tsx, page.tsx, health/route.ts)
components/           # React components (PascalCase .tsx files)
  canvas/             # Three.js/R3F canvas components (Stars, DynamicStars)
data/                 # Centralized site content (content.ts)
hoc/                  # Higher-order components (SectionWrapper)
types/                # Shared TypeScript interfaces (index.ts) and module declarations (assets.d.ts)
utils/                # Utility functions (motion.ts, analytics.tsx)
styles/               # Global CSS with Tailwind v4 theme config (globals.css)
public/assets/        # Static images with barrel re-export (index.ts)
```

No `src/` directory -- source files live at the project root level.

## Code Style

### Formatting (Prettier via `.prettierrc`)

- **Single quotes** -- no double quotes for strings
- **No semicolons**
- **Trailing commas** everywhere (`"all"`)
- **100-character** print width
- **Tailwind class sorting** via `prettier-plugin-tailwindcss`

### Imports

Use the `@/*` path alias (mapped to project root) for all cross-directory imports.
Use relative imports only within the same directory (e.g., `'./Hero'`, `'./canvas'`).

**Import grouping** -- separate with blank lines and comment headers:

```ts
// Core
import { useState, useRef } from 'react'
import Image from 'next/image'

// Module / Lib
import { motion } from 'framer-motion'

// Types
import type { Service } from '@/types'

// Content / Data / Components
import { navLinks } from '@/data/content'
import { SectionWrapper } from '@/hoc'
```

**Type-only imports** -- always use `import type` for types/interfaces:

```ts
import type { Metadata } from 'next'
import type { Group } from 'three'
```

### TypeScript

- **Strict mode** is enabled -- do not weaken it
- Prefer **`interface`** over `type` for object shapes; use `type` only for unions and aliases
- **Explicitly type** function parameters, `useState`, and `useRef`:
  ```ts
  useState<ContactFormState>({ ... })
  useRef<HTMLFormElement | null>(null)
  ```
- **Return types** on components are inferred (do not annotate JSX return types)
- **Never use `any`** -- ESLint warns on `@typescript-eslint/no-explicit-any`
- Prefix unused variables/params with `_` (e.g., `_event`, `_index`)
- Use **`satisfies`** for type-safe data arrays: `] satisfies NavLink[]`
- Shared interfaces live in `types/index.ts`; image module declarations in `types/assets.d.ts`

### Naming Conventions

| Element              | Convention  | Example                             |
| -------------------- | ----------- | ----------------------------------- |
| Component files      | PascalCase  | `Hero.tsx`, `SectionWrapper.tsx`    |
| Utility/data files   | camelCase   | `motion.ts`, `content.ts`           |
| React components     | PascalCase  | `ServiceCard`, `ProjectCard`        |
| Functions            | camelCase   | `handleChange`, `buildTransition`   |
| Variables            | camelCase   | `navLinks`, `services`              |
| Module constants     | UPPER_SNAKE | `DEFAULT_EASE`, `STAR_COUNT`        |
| Interfaces / Types   | PascalCase  | `ContactFormState`, `Direction`     |
| CSS classes (custom) | camelCase   | `sectionHeadText`, `heroSubText`    |
| CSS decorative       | kebab-case  | `accent-text-gradient`, `rule-line` |

### Component Patterns

- **`'use client'`** directive required on all interactive components (hooks, event handlers,
  browser APIs, framer-motion, or Three.js). Only `layout.tsx` and `page.tsx` are server components.
- **SectionWrapper HOC** wraps major page sections with framer-motion stagger animations:
  ```ts
  export default SectionWrapper(About, 'about')
  ```
- Two component styles:
  - `export default function Name()` -- pages, layouts, standalone components
  - `const Name = () => { ... }` + `export default SectionWrapper(Name, 'id')` -- sections
- Sub-components (cards) are defined as arrow functions in the same file as their parent section.
- **Barrel re-exports** in `index.ts` files: `components/`, `components/canvas/`, `hoc/`,
  `public/assets/`, `types/`
- Three.js canvas components use `next/dynamic` with `ssr: false` (see `DynamicStars.tsx`)

### Exports

- **Default exports** for all React components
- **Named exports** for utility functions and data constants
- **Barrel files** (`index.ts`) aggregate exports for clean imports

### Error Handling

- Minimal -- primarily `.then()/.catch()` on promise chains (emailjs)
- Console logging + user-facing `alert()` for form submission errors
- No error boundaries exist; when adding new error handling, prefer `try/catch`
- Environment variables use `|| ''` fallback for missing values

## Styling

- **Tailwind CSS v4** -- theme config in `styles/globals.css` under `@theme { }` (no tailwind.config)
- **PostCSS config** in `postcss.config.cjs` (CommonJS since project is ESM)
- Custom theme tokens: `--color-primary`, `--color-accent`, `--color-surface`, `--color-steel`, etc.
- Custom `@utility` classes: `heroHeadText`, `sectionHeadText`, `sectionSubText`
- Layout classes: `paddingX`, `paddingY`, `padding` (responsive, plain CSS)
- Gradient classes: `accent-text-gradient`, `steel-text-gradient`, `blue-text-gradient`
- Decorative: `grain-overlay` (film grain), `rule-line`, `accent-dot`
- **Fonts**: Syne (display, `--font-syne`) and Outfit (body, `--font-outfit`) via Google Fonts

## Key Dependencies

| Package                  | Purpose                           |
| ------------------------ | --------------------------------- |
| `next` (16)              | Framework (App Router)            |
| `react` (19)             | UI library                        |
| `tailwindcss` (4)        | Utility-first CSS                 |
| `framer-motion` (12)     | Animations & page transitions     |
| `@react-three/fiber` (9) | React renderer for Three.js       |
| `@react-three/drei` (10) | R3F helpers (OrbitControls, etc)  |
| `three` (0.165)          | 3D graphics -- **pinned version** |
| `@emailjs/browser`       | Contact form email sending        |

## CI/CD & Deployment

- **GitHub Actions** (`.github/workflows/docker-build.yml`) on push to `main`
- Builds a Docker image and pushes to **GitHub Container Registry** (ghcr.io)
- Triggers **Dokploy** deployment webhook
- **Dockerfile**: Multi-stage build, Node 20 Alpine, pnpm, standalone Next.js output
- Production runs as non-root user `nextjs` on port 3000

## Important Notes

- ESM project -- use `.mjs` or `.cjs` extensions for config files that need different module syntax
- The `@/*` path alias is the **only** alias; do not add others without updating `tsconfig.json`
- Three.js is pinned to `0.165.0` -- do not upgrade without checking R3F/Drei compatibility
- Static assets are barrel-exported from `public/assets/index.ts` -- add new assets there
- The health check endpoint at `app/health/route.ts` is used by Docker deployment
- `next.config.mjs` sets `output: 'standalone'` and `images.formats: ['image/webp', 'image/avif']`
