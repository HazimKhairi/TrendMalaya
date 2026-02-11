# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TrendMalayaa is a single-page marketing website for a Malaysian mobile phone repair business. The Next.js app lives in `trendmalayaa-website/`.

## Commands

All commands run from `trendmalayaa-website/`:

```bash
npm run dev      # Dev server at localhost:3000
npm run build    # Production build
npm start        # Production server
npm run lint     # ESLint
```

No test framework is configured.

## Tech Stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- **Framer Motion** for scroll-triggered and hover animations
- **React Icons** for icon components
- **React Compiler** enabled in `next.config.ts`
- Path alias: `@/*` → `./src/*`

## Architecture

**Single-page layout** — `src/app/page.tsx` composes 9 section components + a floating WhatsApp button. Each section is a standalone client component in `src/components/`.

**Page section order:** Navbar → Hero → Services → GadgetsShowcase → Marquee → WhyTrendMalayaa → CustomerReviews → TikTokFeed → Footer → FloatingWhatsAppButton

**Data is hardcoded** in components (9 branch locations, services, reviews). No database, CMS, or state management library.

**Business Context:** TrendMalayaa is a mobile phone repair business established in 2021 with 9 branches across Malaysia. Main WhatsApp contact: 60374959092. Original design spec was for Mac repair (see Prompt_Website.md) but has been adapted for mobile repair services.

**Styling:** Tailwind utility classes throughout. Custom CSS keyframes for marquee in `globals.css`. Fonts: Poppins (via `next/font/google`) + Helvetica fallback for headings.

## Design Specs

Three reference docs at project root define requirements:
- `Prompt_Website.md` — Full design spec (colors, typography, layout, animations)
- `Company_Information.md` — Business data, 9 branch locations, contact info
- `Reference_Website.md` — Design critique of a reference site

**Brand colors:** Primary blue `#008AFC`, black, white, WhatsApp green `#25D366`

## Critical Constraints

- **No `<style jsx>`** — Causes hydration mismatch errors with SSR. Put all custom CSS in `globals.css`.
- **Next.js Image component** — Use `fill` as boolean prop, NOT deprecated `layout="fill"`. Use `width`/`height` props for non-fill images.
- **No fixed pixel heights** on sections (e.g. `h-[728px]`) — Use `min-h-*` or `py-*` padding to prevent content overflow on different screen sizes.
- **Framer Motion ease typing** — Use `ease: "easeOut" as const` (not bare string) to satisfy TypeScript `Easing` type.
- **No duplicate images** — Each image in `public/images/` should only be used once across components. Current usage:
  - `logo.png` → Navbar, Footer
  - `product.png` → Hero
  - `product-2.jpeg` → Services (Mobile Sales)
  - `in-store-2.png` → Services (Phone Repair)
  - `image.png` → Services (Accessories)
  - `staff.png` → GadgetsShowcase (background)
  - Unused: `in-store.png`, `staff-2.png`, `store.png`, `video-placeholder-1-6.png`

## Third-Party Widgets

- **Google Reviews:** Trustindex widget loaded dynamically via `useEffect` in `CustomerReviews.tsx`. Script: `https://cdn.trustindex.io/loader.js?1f604496462e530d099672b755c`
- **TikTok Feed:** Tagembed widget in `TikTokFeed.tsx`. Widget ID: `316603`. Script: `https://widget.tagembed.com/embed.min.js`
- Both use deferred loading with `setTimeout` and include error/loading states.

## Known Issues

- Footer addresses are **placeholder data** — need to be replaced with real addresses from `Company_Information.md`
- Footer services list shows generic repair services instead of actual business services (Mobile Sales, Phone Repair, Accessories)
