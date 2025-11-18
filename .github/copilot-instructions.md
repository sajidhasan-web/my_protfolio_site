<!-- Copilot / AI agent instructions for this repository -->
# Repo overview

This is a Next.js (App Router) TypeScript site located under `src/app`. It was created with `create-next-app` and uses Next 16 + React 19. Styles live in `src/app/globals.css` and some pages use inline React styles (see `src/app/page.tsx`). Tailwind/PostCSS tooling is present (`postcss.config.mjs`, `tailwindcss` devDependency) but many components currently use simple CSS or inline style objects.

Key files to inspect before making changes:

- `src/app/page.tsx` — main landing page (safe/default values, inline styles, examples of defensive coding patterns).
- `src/app/layout.tsx` — global layout and where global styles/fonts are applied.
- `src/app/globals.css` — global stylesheet and place to add global Tailwind/util classes.
- `next.config.ts` — Next config; check for experimental flags or custom webpack if present.
- `package.json` — dev/build/start/lint scripts.
- `tsconfig.json` — TypeScript compiler options and paths.
- `postcss.config.mjs` and `eslint.config.mjs` — build and lint tooling configuration.
- `public/` — static assets served by Next.

What the AI agent should know

- App structure: This repo uses the Next.js App Router (`src/app`). Route files are React Server Components by default; any client-only logic should be placed in components with `'use client'` at the top.
- TypeScript: Keep types consistent with `tsconfig.json`. If adding runtime JS, prefer typed React components (.tsx) to maintain consistency.
- Styling: The project has Tailwind tooling installed, but the current pages use normal CSS / inline styles. If you add Tailwind utility classes, ensure `postcss` and `tailwind` configs are updated and consistent.
- Defensive patterns: Code in `src/app/page.tsx` uses defensive defaults (e.g., `const heroTagline = '...' || ''`) and safe access patterns. Preserve these patterns when touching the page to avoid runtime errors.

Dev / build / lint commands

- Run dev server: `npm run dev` (starts Next dev on `http://localhost:3000`).
- Build for production: `npm run build` then `npm run start` to serve.
- Lint: `npm run lint` (uses the repo's `eslint` config).

Conventions & patterns specific to this repo

- Minimal dependencies: do not add new packages without a short justification; this is a small portfolio app.
- Prefer small, focused changes: the codebase is compact—edit `src/app/page.tsx` to update content and `src/app/layout.tsx` for site-wide UI changes.
- Inline styles: Some components intentionally use inline style objects for quick design iteration — keep consistency. If converting to Tailwind or CSS modules, do it per-component and update `globals.css` or add a new module file.
- Fonts and assets: Global font loading is done in `layout.tsx` or via Next's font utilities — prefer updating those places rather than sprinkling new font imports across files.

Integration points & external dependencies

- Hosting/deploy: README suggests Vercel; Next features may assume Vercel environment (image optimization, fonts). Keep serverless-friendly code.
- No runtime backend or API routes are present in this repo — adding server-side integrations should include clear design notes and security considerations.

Testing & debugging notes

- There are no test scripts in `package.json`. If adding tests, include a test runner (e.g., Vitest/Jest) and add scripts to `package.json`.
- Debugging: use `npm run dev` and the browser console; for Node-side errors check terminal where `next dev` runs.

PR guidance for AI agents

- Keep changes small and self-contained. Update only the files needed for the change.
- Preserve defensive defaults and existing patterns (see `src/app/page.tsx` initials computation and guards).
- Add or update `README.md` only when documentation for new features is necessary.

If anything is unclear

- Ask for the desired content, design, or deployment target before making UX or infra changes.
- If adding dependencies or new build steps, request permission and update `package.json` and README with exact install + run steps.

Examples from the codebase to reference

- Defensive initials example: `src/app/page.tsx` uses `React.useMemo` with try/catch and default `'SN'` — mirror that for similar user-data parsing.
- Hero text: `src/app/page.tsx` contains the `heroTagline` and README points contributors to edit `app/page.tsx` for content changes.

End of file
