# Opeyemi Owolabi — Portfolio Site

A personal portfolio site for Opeyemi Owolabi, Product Designer. Built with Next.js 16, Tailwind CSS v4, and MDX — designed to be fast, minimal, and content-driven.

**GitHub:** [github.com/owolabiopeyemih-lgtm/My-Portfolio-Site](https://github.com/owolabiopeyemih-lgtm/My-Portfolio-Site)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Content | MDX via `next-mdx-remote/rsc` |
| Animation | Framer Motion |
| Fonts | Geist Sans + Geist Mono |
| Theme | `next-themes` (dark/light toggle) |
| Package Manager | npm |

---

## Project Structure

```
narrative/
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Homepage (hero, featured projects, about teaser)
│   ├── about/page.tsx          # About page (bio, skills, career journey)
│   ├── work/
│   │   ├── page.tsx            # All projects grid
│   │   └── [slug]/page.tsx     # Individual case study page
│   ├── writing/
│   │   ├── page.tsx            # Articles listing
│   │   └── [slug]/page.tsx     # Individual article page
│   ├── contact/page.tsx        # Contact page with form
│   ├── lifestyle/page.tsx      # Lifestyle page (fashion, reading, games, sport)
│   ├── process/page.tsx        # Design process page
│   ├── globals.css             # Global styles + Tailwind v4 theme tokens
│   └── layout.tsx              # Root layout (sidebar, mobile nav, footer)
│
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx         # Desktop sidebar with nav + social links
│   │   ├── Navbar.tsx          # Navbar component
│   │   └── Footer.tsx          # Site footer
│   ├── sections/
│   │   ├── HeroText.tsx        # Hero headline, tagline, CTAs
│   │   ├── HeroAnimation.tsx   # Hero background animation
│   │   ├── ContactForm.tsx     # Contact form
│   │   └── ShimmerCTA.tsx      # Shimmer call-to-action banner
│   └── ui/
│       ├── AnimatedSection.tsx # Scroll-triggered fade/slide wrapper
│       ├── Badge.tsx           # Tag/badge pill component
│       ├── Button.tsx          # Button component (variants: default, ghost)
│       ├── CaseStudyCard.tsx   # Project card with 3D tilt + cover image
│       ├── WritingCard.tsx     # Article card
│       ├── CountUp.tsx         # Animated number counter
│       ├── CustomCursor.tsx    # Custom cursor (desktop only)
│       ├── Magnetic.tsx        # Magnetic hover effect
│       └── ThemeToggle.tsx     # Dark/light mode toggle
│
├── content/
│   ├── case-studies/           # MDX files for portfolio projects
│   │   ├── small-business-dashboard.mdx
│   │   ├── forgeflow-project-idea-generator.mdx
│   │   ├── habityn.mdx
│   │   ├── ecommerce-fashion-marketplace.mdx
│   │   ├── medication-reminder-app.mdx
│   │   └── healthcare-appointment-booking.mdx
│   └── writing/                # MDX files for articles
│       ├── from-aso-oke-to-wireframes.mdx
│       └── designing-for-humans-fashion-vs-digital.mdx
│
├── lib/
│   ├── mdx.ts                  # MDX file reading, frontmatter parsing, sorting
│   └── utils.ts                # Utility functions (cn, formatDate)
│
└── public/
    ├── profile.jpg             # Profile photo
    ├── lifestyle.jpg           # Lifestyle page photo
    ├── forgeflow-cover.jpg     # ForgeFlow project screenshot
    ├── habityn-cover.jpg       # Habityn project screenshot
    ├── resume.html             # Resume HTML source
    └── resume.pdf              # Downloadable resume PDF
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, featured projects, about teaser, CTA |
| `/work` | All case studies in a 3-column grid |
| `/work/[slug]` | Full case study with cover image, meta, outcomes, MDX content |
| `/writing` | Article listing |
| `/writing/[slug]` | Full article with pull quotes and emphasis |
| `/about` | Bio, skills, tools, career journey timeline |
| `/contact` | Contact links + form |
| `/lifestyle` | Fashion, reading, games, sport |
| `/process` | Design process overview |

---

## Content System

All portfolio content is file-based. No CMS, no database.

### Adding a Case Study

Create a new `.mdx` file in `content/case-studies/`:

```mdx
---
title: "Project Title"
description: "One-line description shown on cards and in metadata."
role: "Product Designer"
company: "Company Name"
timeline: "Jan 2026 - Mar 2026"
year: "2026"
coverImage: "/your-cover-image.jpg"   # optional — place image in /public
tools: ["Figma", "Maze", "Framer"]
tags: ["UX Research", "Mobile Design"]
outcomes:
  - "Key result or metric"
  - "Another outcome"
featured: true        # true = appears on homepage
order: 1              # controls sort order (lower = first)
---

Your case study content in markdown here...
```

Drop the file in — the route at `/work/your-filename` generates automatically.

### Adding an Article

Create a new `.mdx` file in `content/writing/`:

```mdx
---
title: "Article Title"
description: "Short description for cards and metadata."
date: "2026-06-19"
tags: ["Design", "Process"]
readingTime: 4
---

Article content here...
```

Route at `/writing/your-filename` generates automatically. Articles are sorted newest-first.

---

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev       # http://localhost:3000

# Production build
npm run build

# Lint
npm run lint
```

---

## Theming

The site uses Tailwind CSS v4 with all theme tokens defined as CSS custom properties in `app/globals.css`. There is no `tailwind.config.js`.

Dark mode is the default. Light mode is toggled via the `.light` class on `<html>` (managed by `next-themes`).

Key tokens:

```css
--color-canvas        /* page background */
--color-card          /* card/surface background */
--color-foreground    /* primary text */
--color-muted         /* secondary text */
--color-line          /* borders and dividers */
```

---

## Deployment

The site is ready to deploy on **Vercel** with zero configuration.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Set the root directory to `narrative/` if deploying from the monorepo root.

---

## Contact

**Opeyemi Owolabi** — Product Designer
Email: [owolabiopeyemih@gmail.com](mailto:owolabiopeyemih@gmail.com)
LinkedIn: [linkedin.com/in/opeyemi-owolabi-a9b059322](https://www.linkedin.com/in/opeyemi-owolabi-a9b059322/)
Behance: [behance.net/opeyemiowolabi3](https://www.behance.net/opeyemiowolabi3)
