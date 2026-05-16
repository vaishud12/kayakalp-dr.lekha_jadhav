# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands
- **Development server**: `npm run dev` – starts Next.js in hot‑reloading mode on `http://localhost:3000`.
- **Build**: `npm run build` – creates an optimized production build in `.next/`.
- **Start production**: `npm start` – serves the previously built app.
- **Lint**: `npm run lint` – runs ESLint using the configuration in `eslint.config.mjs`.
- **Run a single test**: No test framework is defined yet; when added, use the typical pattern `npm test -- <test-file>` (replace `<test-file>` with the path).

## High‑Level Architecture
- **Framework**: Next.js 16 (app router) with TypeScript support.
- **Entry point**: `app/layout.tsx` – defines global metadata, fonts, and wraps pages with `<Header/>`, `<Footer/>`, and a `<Toaster/>`.
- **Pages**: Files under `app/` are route‑segments. Notable routes:
  - `/` – home page (`app/page.jsx`).
  - `/book-appointment` – appointment booking page (`app/book-appointment/page.jsx`).
- **Components**: Reusable UI lives in `app/components/` and its `ui/` subfolder (e.g., `button.jsx`, `card.jsx`). Components such as `Header`, `Footer`, `FAQSection`, `StatsSection`, and `TestimonialsSection` assemble the main layout.
- **Styling**: Tailwind CSS (configured via `tailwindcss` and `postcss.config.mjs`). Global styles are in `app/globals.css`.
- **Static assets**: Images and media are stored in `public/`. They are referenced with absolute paths (`/Images/...`).
- **Utilities**: `app/lib/mock.js` provides placeholder data for development.
- **Configuration**: 
  - `next.config.ts` – Next.js configuration (image formats, remote patterns).
  - `tsconfig.json` – TypeScript compiler options.
  - `eslint.config.mjs` – ESLint rules.

## Important Files
- `package.json` – scripts, dependencies, and dev dependencies.
- `README.md` – high‑level project description (clinic branding).
- `.vscode/` – editor settings, not required for code execution.

## Development Tips for Claude Code
- When a task references a component, start from `app/components/` and follow imports to understand its usage.
- For route‑specific work, locate the corresponding folder under `app/` (e.g., edit `app/book-appointment/page.jsx` for the booking page).
- UI changes often require updating Tailwind classes; run `npm run dev` to see live updates.
- If new scripts or test frameworks are added, update the **Common Commands** section accordingly.
