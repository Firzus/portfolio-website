# AGENTS.md - Coding Agent Guidelines

## Project Overview

Portfolio website built with **Next.js 15** (App Router), **React 19**, **TypeScript** (strict),
**Tailwind CSS v4**, **Framer Motion**, and **React Three Fiber** (Three.js). Uses **pnpm** as
package manager and ESM (`"type": "module"`).

## Build / Lint / Type-Check Commands

```bash
pnpm dev              # Start dev server (Next.js)
pnpm build            # Production build
pnpm lint             # ESLint (flat config, next/core-web-vitals + next/typescript)
pnpm type-check       # TypeScript strict check (tsc --noEmit)
```

**No test runner is configured.** There are no test files, no test dependencies, and no test script.

## Project Structure

```
app/                  # Next.js App Router (layout.tsx, page.tsx, health/route.ts)
components/           # React components (PascalCase .tsx files)
  canvas/             # Three.js/R3F canvas components
data/                 # Centralized site content (content.ts)
hoc/                  # Higher-order components (SectionWrapper)
utils/                # Utility functions (motion.ts, analytics.tsx)
styles/               # Global CSS with Tailwind v4 theme config (globals.css)
public/               # Static assets, 3D models, images
  assets/             # Images with barrel re-export (index.ts)
```

No `src/` directory -- source files live at the project root level.

## Code Style

### Formatting (Prettier)

- **Single quotes** (no double quotes for strings)
- **No semicolons**
- **Trailing commas** everywhere (`"all"`)
- **100-character** print width
- **Tailwind class sorting** via `prettier-plugin-tailwindcss`

### Imports

Use the `@/*` path alias (mapped to project root) for all cross-directory imports:

```ts
import { fadeIn, textVariant } from '@/utils/motion'
import { services, technologies } from '@/data/content'
import { SectionWrapper } from '@/hoc'
```

Use relative imports only within the same directory (e.g., `'./Hero'`, `'./canvas'`).

**Import grouping** -- separate with blank lines and optional comment headers:

```ts
// Core
import { useState, useRef } from 'react'
import Image from 'next/image'

// Module / Lib
import { motion } from 'framer-motion'

// Content / Data / Components
import { navLinks } from '@/data/content'
import { Hero, About } from '@/components'
```

**Type-only imports** -- always use `import type` for types/interfaces:

```ts
import type { Metadata } from 'next'
import type { StaticImageData } from 'next/image'
```

### TypeScript

- **Strict mode** is enabled -- do not weaken it
- Prefer **`interface`** over `type` for object shapes
- Use **`type`** only for union types and library type aliases
- **Explicitly type** function parameters, `useState`, and `useRef`:
  ```ts
  useState<ContactFormState>({ ... })
  useRef<HTMLFormElement | null>(null)
  ```
- **Return types** on components are inferred (do not annotate JSX return types)
- **Never use `any`** -- the ESLint config warns on `no-explicit-any`
- Prefix unused variables/params with `_` (e.g., `_event`, `_index`)

### Naming Conventions

| Element              | Convention     | Example                                  |
|----------------------|----------------|------------------------------------------|
| Component files      | PascalCase     | `Hero.tsx`, `SectionWrapper.tsx`         |
| Utility/data files   | camelCase      | `motion.ts`, `content.ts`               |
| React components     | PascalCase     | `ServiceCard`, `ProjectCard`            |
| Functions            | camelCase      | `handleChange`, `buildTransition`       |
| Variables            | camelCase      | `navLinks`, `services`                  |
| Module constants     | UPPER_SNAKE    | `DEFAULT_EASE`                           |
| Interfaces           | PascalCase     | `ContactFormState`, `ProjectCardProps`  |
| CSS classes (custom) | camelCase      | `sectionHeadText`, `heroSubText`        |
| CSS gradient classes | kebab-case     | `violet-text-gradient`                  |

### Component Patterns

- **`'use client'`** directive required on all interactive components (anything using
  hooks, event handlers, browser APIs, framer-motion, or Three.js)
- Server components are used only for `layout.tsx` and `page.tsx`
- **SectionWrapper HOC** wraps major page sections with framer-motion animations:
  ```ts
  export default SectionWrapper(About, 'about')
  ```
- Two component styles in use:
  - `export default function Name()` -- for pages, layouts, and standalone components
  - `const Name = () => { ... }` followed by `export default SectionWrapper(Name, 'id')` --
    for section components that need the animation wrapper
- **Barrel re-exports** in `index.ts` files aggregate components for clean imports:
  ```ts
  import Hero from './Hero'
  export { Hero, Navbar, About, ... }
  ```

### Exports

- **Default exports** for all React components
- **Named exports** for utility functions and data constants
- **Barrel files** (`index.ts`) in `components/`, `components/canvas/`, `hoc/`, `public/assets/`

### Error Handling

- Minimal error handling -- primarily `.then()/.catch()` on promise chains
- Console logging + user-facing `alert()` for form submission errors
- No error boundaries currently exist
- When adding new error handling, prefer `try/catch` with meaningful error messages

## Styling

- **Tailwind CSS v4** -- theme configuration lives in `styles/globals.css` under `@theme { }`
- No `tailwind.config.js` file (Tailwind v4 uses CSS-based config)
- Custom theme tokens: `--color-primary`, `--color-accent-violet`, `--color-accent-cyan`, etc.
- Custom utility classes defined in `globals.css`: `paddingX`, `paddingY`, `sectionHeadText`, etc.
- Gradient classes: `violet-text-gradient`, `cyan-text-gradient`, `purple-text-gradient`
- **PostCSS config** in `postcss.config.cjs` (CommonJS since project is ESM)

## Key Dependencies

| Package                  | Purpose                          |
|--------------------------|----------------------------------|
| `next` (15)              | Framework (App Router)           |
| `react` (19)             | UI library                       |
| `tailwindcss` (4)        | Utility-first CSS                |
| `framer-motion` (12)     | Animations & page transitions    |
| `@react-three/fiber` (9) | React renderer for Three.js      |
| `@react-three/drei` (10) | R3F helpers (OrbitControls, etc) |
| `three` (0.165)          | 3D graphics                      |
| `@emailjs/browser`       | Contact form email sending       |
| `react-vertical-timeline-component` | Experience timeline    |

## CI/CD & Deployment

- **GitHub Actions** (`.github/workflows/docker-build.yml`) on push to `main`
- Builds a Docker image and pushes to **GitHub Container Registry** (ghcr.io)
- Triggers **Dokploy** deployment webhook
- **Dockerfile**: Multi-stage build, Node 20 Alpine, pnpm, standalone Next.js output
- Production runs as non-root user `nextjs` on port 3000

## Important Notes

- ESM project -- use `.mjs` or `.cjs` extensions for config files that need different module syntax
- The `@/*` path alias is the **only** alias configured; do not add others without updating `tsconfig.json`
- Three.js is pinned to `0.165.0` -- do not upgrade without checking R3F/Drei compatibility
- Static assets are barrel-exported from `public/assets/index.ts` -- add new assets there
- The health check endpoint at `app/health/route.ts` is used by the Docker deployment
