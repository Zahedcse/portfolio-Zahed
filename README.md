## Zahed Alam — QA Portfolio

A modern, animated single-page experience for Senior QA Engineer Zahed Alam. It highlights signature projects, skills, and contact CTAs with a neon-dark visual language built for quick Vercel deployments.

### Tech stack

- **Next.js 15** (App Router) + React 19
- **Tailwind CSS** custom theme with layered gradients
- **Framer Motion** for scroll-triggered reveals and hover motion
- **lucide-react** icons & `next/image` optimized assets

### Local development

```bash
npm install
npm run dev
# visit http://localhost:3000
```

### Useful scripts

- `npm run dev` – start the dev server
- `npm run lint` – run ESLint
- `npm run build` – production build with type/lint checks
- `npm run start` – serve the production build locally

### Deploying to Vercel

1. Push this repository to GitHub (or any Git provider).
2. In [Vercel](https://vercel.com/new), choose “Import Project” and select the repo.
3. Leave defaults (`npm run build`, output `.next`, install command `npm install`).
4. Deploy — preview URLs are created automatically; promote the build to production when ready.

> Tip: run `npm run build` locally before deploying to confirm the bundle, ESLint, and type checks all pass.
