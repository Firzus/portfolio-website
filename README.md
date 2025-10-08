# Portfolio Website

Ce projet est un site portfolio construit avec Next.js (App Router), TypeScript, Tailwind CSS et des composants 3D via Three.js / React Three Fiber.

## Scripts

- `npm run dev` : lance le serveur de développement
- `npm run build` : génère le build de production
- `npm run start` : démarre le serveur de production
- `npm run lint` : exécute ESLint
- `npm run type-check` : lance la vérification TypeScript

## Docker

Une image multi-stage est fournie via le `Dockerfile` à la racine.

```bash
docker build -t portfolio-website .
docker run -p 3000:3000 portfolio-website
```

## Configuration

- `tailwind.config.cjs` et `postcss.config.cjs` sont en CommonJS pour fonctionner avec le mode ESM global.
- `next.config.js` expose uniquement les options nécessaires (formats d’image, etc.).

## Divers

- Les assets 3D se situent dans `public/desktop_pc` et `public/planet`.
- Les contenus (services, projets, expériences, etc.) sont centralisés dans `data/content.ts`.
