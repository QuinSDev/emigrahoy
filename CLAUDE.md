# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

`emigrahoy` is a freshly scaffolded Astro site (Astro 7, from the `basics` template). Only the starter content exists so far: `src/pages/index.astro` renders the placeholder `Welcome` component inside `src/layouts/Layout.astro`. Expect to replace these. The README is the unmodified Astro starter README.

## Commands

Requires Node >= 22.23.4.

```sh
npm install
astro dev --background   # start dev server (localhost:4321) in background — preferred, per AGENTS.md
astro dev status         # / astro dev logs / astro dev stop
npm run build            # production build to ./dist/
npm run preview          # serve the built site
npm run astro -- <cmd>   # other Astro CLI commands, e.g. `astro add <integration>`
```

There is no test runner, linter, or formatter configured. `astro check` (type-checking `.astro` files) needs `@astrojs/check` and `typescript` installed first.

## Architecture

- File-based routing: every `.astro`/`.md` file in `src/pages/` becomes a route.
- `src/layouts/Layout.astro` owns the HTML shell (`<head>`, `lang`, favicon, `<title>`) and renders page content via `<slot />`. Its `<title>` is still "Astro Basics" and `lang="en"` — update both when real pages are built.
- `astro.config.mjs` is empty (no integrations, no i18n, no adapter → static output). Adding UI frameworks, Tailwind, i18n, or SSR goes through this file / `astro add`.
- TypeScript uses `astro/tsconfigs/strict`.

## Astro docs

Consult the relevant guide before related work (from AGENTS.md): [routing](https://docs.astro.build/en/guides/routing/), [components](https://docs.astro.build/en/basics/astro-components/), [framework components](https://docs.astro.build/en/guides/framework-components/), [content collections](https://docs.astro.build/en/guides/content-collections/), [styling/Tailwind](https://docs.astro.build/en/guides/styling/), [i18n](https://docs.astro.build/en/guides/internationalization/).

## Design tooling

Project-local skills are installed in `.claude/skills/` (impeccable, design-taste-frontend, GSAP, playwright-skill); `.impeccable/config.local.json` holds Impeccable's local config. Use these for frontend design and browser verification work.
