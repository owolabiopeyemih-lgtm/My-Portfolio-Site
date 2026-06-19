# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

All commands run from `narrative/`:

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint (flat config, Next.js + TypeScript rules)
```

No test runner is configured; Playwright is installed but has no test files yet.

## Architecture

This is **Opeyemi Owolabi's portfolio site** — Next.js 16 App Router, TypeScript, Tailwind CSS v4, MDX content, Framer Motion animations.

### Routing & Pages

All routes live under `app/`. Dynamic routes (`/work/[slug]`, `/writing/[slug]`) are statically generated at build time via `generateStaticParams()` which reads MDX files from `content/`.

### Content System

MDX files in `content/case-studies/` and `content/writing/` are the data source for the portfolio. `lib/mdx.ts` handles all file reading, frontmatter parsing (`gray-matter`), and read-time calculation. Content is rendered server-side via `next-mdx-remote/rsc`.

**CaseStudy frontmatter:** `title`, `description`, `role`, `company`, `timeline`, `year`, `tools[]`, `tags[]`, `outcomes[]`, `featured`, `coverImage?`, `order?`

**Article frontmatter:** `title`, `description`, `date`, `tags[]`, `readingTime?`

Adding new content: drop a `.mdx` file with correct frontmatter into the appropriate `content/` subdirectory — the route generates automatically.

### Styling

Tailwind v4 — **there is no `tailwind.config.js`**. All theme configuration (colors, easing, durations) lives in `app/globals.css` as CSS custom properties under `@theme`. Light mode overrides use the `.light` class selector (not `prefers-color-scheme`). Use `cn()` from `lib/utils.ts` for conditional class names.

Theme tokens: `--color-canvas`, `--color-surface`, `--color-card`, `--color-foreground`, `--color-muted`, `--color-accent`, `--color-line`. Animation tokens: `--ease-out-expo`, `--ease-spring`, `--duration-fast/normal/slow`.

### Component Layout

- `components/ui/` — reusable primitives (Button, Badge, AnimatedSection, CountUp, Magnetic, CustomCursor)
- `components/layout/` — Sidebar, Navbar, Footer
- `components/sections/` — page-specific sections (HeroText, HeroAnimation, ContactForm, ShimmerCTA)

Wrap scroll-triggered animations in `<AnimatedSection>`. Use `<Magnetic>` for interactive hover effects. `AnimatedSection` is a Framer Motion client component.

### Theme

`next-themes` provides `useTheme()`. The `ThemeProvider` in `app/layout.tsx` sets `attribute="class"` so the `.light` class toggles on `<html>`.

### API

`app/api/contact/route.ts` — POST endpoint for the contact form. Currently logs to console; needs email provider (Resend or Nodemailer) wired up for production.

### Path Alias

`@/*` resolves to the project root (`narrative/`).
