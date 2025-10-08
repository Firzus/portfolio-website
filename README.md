# Portfolio Website

Ce projet est un site portfolio construit avec Next.js (App Router), TypeScript, Tailwind CSS et des composants 3D via Three.js / React Three Fiber.

## Scripts

- `pnpm dev` : lance le serveur de développement
- `pnpm build` : génère le build de production
- `pnpm start` : démarre le serveur de production
- `pnpm lint` : exécute ESLint

## Docker

Une image multi-stage est fournie via le `Dockerfile` à la racine.

```bash
docker build -t portfolio-website .
docker run -p 3000:3000 portfolio-website
```

## CI/CD

- Un workflow GitHub Actions (`.github/workflows/docker-build.yml`) construit et pousse l’image Docker sur Docker Hub à chaque push sur `main` (installe pnpm via Corepack).
- Renseigne les secrets `DOCKERHUB_USERNAME` et `DOCKERHUB_TOKEN` avant d’activer le workflow.

## Configuration

- `tailwind.config.cjs` et `postcss.config.cjs` sont en CommonJS pour fonctionner avec le mode ESM global.
- `next.config.js` expose uniquement les options nécessaires (formats d’image, etc.).

## Divers

- Les assets 3D se situent dans `public/desktop_pc` et `public/planet`.
- Les contenus (services, projets, expériences, etc.) sont centralisés dans `data/content.ts`.
