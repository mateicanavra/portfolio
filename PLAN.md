<!--
  Portfolio Site Foundation Plan
  --------------------------------
  High-level phases for setting up the Astro + MDX + Bun portfolio
-->
# Portfolio Site Foundation Plan

Below is a minimal roadmap to hand off to an expert agent for building out the core structure.

## 1. Core Validation (✅ in place)
- Astro v5 + Bun scaffold
- MDX integration (`@astrojs/mdx`)
- `.gitignore` and lockfile committed

## 2. Layout & Global Assets
- `src/layouts/Layout.astro`: common HTML head, global styles, theme script
- Global CSS or Tailwind setup for basic resets and typography
- Public folder structure (`/images`, `/videos`, etc.)

## 3. Pages & Content
- Create root pages in MDX:
  - `src/pages/index.mdx` (Home)
  - `src/pages/about.mdx` (About)
  - `src/pages/projects.mdx` (Projects)
- Leverage frontmatter for titles and metadata

## 4. Reusable Components
- `src/components/Navigation.astro`: site nav menu
- `src/components/Footer.astro`: footer links & copyright
- `src/components/ProjectCard.astro`: card for featured work (GitHub repos, media)

## 5. Asset & Media Handling
- Organize under `public/assets/` (images, videos, diagrams)
- MDX imports for images and custom <MediaEmbed> helper

## 6. Deployment Pipeline
- GitHub Actions (or Vercel) to run `bun x astro build` and publish `/dist`
- Preview step (`bun x astro preview`)

**Next**: an expert agent can pick up each phase, create files, and wire up data/content.