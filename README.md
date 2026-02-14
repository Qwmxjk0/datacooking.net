# datacooking.net (Next.js)

Landing site rebuilt from `datacooking.github.io` concept, redesigned with a Netflix + BigTech visual direction and optimized for smooth browsing.
Now split into multiple pages for clearer navigation.

## Stack
- Next.js (App Router)
- TypeScript
- Static export output (`out/`) for Cloudflare Pages

## Local Development
```bash
npm install
npm run dev
```

## Production Build
```bash
npm run build
```

## Deploy to Cloudflare Pages
Use these settings in Cloudflare Pages:
- Framework preset: `Next.js` (or `None` for static)
- Build command: `npm run build`
- Build output directory: `out`
- Node.js version: `20+`

Because this project uses `output: "export"`, deployment is static and edge-friendly.

## Structure
- `src/app/page.tsx` Home
- `src/app/services/page.tsx` Services
- `src/app/products/page.tsx` Products
- `src/app/what-we-do/page.tsx` What We Do
- `src/app/how-we-work/page.tsx` How We Work
- `src/app/contact/page.tsx` Contact
- `src/app/globals.css` full visual system and motion tuning
- `src/app/layout.tsx` metadata and font setup
- `next.config.ts` static export config for Cloudflare Pages
