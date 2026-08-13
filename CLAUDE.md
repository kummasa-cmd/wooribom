# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Wooribom Ocean (우리봄의 바다)** — a landing page for author Wooribom (김윤희), an elementary school teacher and writer. The site should feel like standing at the edge of a deep, calm sea: restrained, spacious, and sophisticated rather than cute or decorative.

Full requirements are in `requirements.md` (original brief; palette/tone there has since been superseded by the redesign below).

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS with custom CSS variables for the color palette
- **Animation**: Framer Motion + minimal CSS keyframes (ripple)
- **Fonts**: Google Fonts — Gowun Batang (headlines, serif), local Pretendard (body, sans). Two families only — no handwriting/accent font.
- **Icons**: Lucide (thin line style)
- **Deployment**: Vercel / Netlify / GitHub Pages

## Color Palette

A restrained palette: off-white, deep navy, one pale sea-blue, and a single accent color.

| Token       | HEX       | Usage                                  |
|-------------|-----------|-----------------------------------------|
| Paper       | `#FAFAF8` | Main background (off-white)            |
| Mist        | `#E8EFF3` | Secondary background tint, card fills, dividers |
| Ink         | `#16283A` | Primary text, headlines, dark sections (Hero/Farewell/Footer) |
| Ink Soft    | `#56697A` | Secondary text, captions, metadata     |
| Accent      | `#2C6B82` | The single accent — CTA buttons, link/icon hover |
| Line        | `#E2E7EA` | Borders, subtle dividers               |

Hero and Farewell use a deep navy gradient (`ink` → `#0E1B27`) as full-bleed bookends; all other sections sit on `paper` or `mist/40`. Do not reintroduce pastel/teal/sand tones or a second accent color.

## Site Sections (scroll order)

1. **Hero** — Full-bleed deep navy background, "우리봄의 바다 / Wooribom Ocean" title, one-line copy, small inline menu (Books · Films · Wooribom Ocean), scroll indicator. No floating emoji decoration.
2. **About** — Author identity line ("WOORIBOM | Writer · Teacher · Diver") + bio blockquote. No photo placeholder.
3. **Books** — Two grouped book cards (우리봄의 책 / 교실에서 아이들과 함께 만든 책). Section heading: "Books".
4. **Films** (`Media.tsx`) — YouTube embeds. Section heading: "Films".
5. **Wooribom Ocean** (`Walk.tsx`) — full SNS link grid (Instagram, Naver Blog, Threads, Brunch, YouTube, X). This is the only SNS section — there is no separate "Connect" section anymore.
6. **Farewell** — closing message, mirrors Hero's deep navy background.
7. **Footer** — Copyright, back-to-top.
8. **AudioPlayer** — fixed floating play/pause control (bottom-right), rendered in `layout.tsx` outside `<main>`. Plays tracks from `public/music/` sequentially (not random), shows the current track title only while playing.

## Design Constraints

- Cards use `border-radius: 20px` with soft shadows (`0 8px 32px rgba(22,40,58,0.10)`)
- No glassmorphism/blur on cards — solid `paper` fill with a `line` border reads cleaner against the restrained palette
- One message per screen; keep decoration minimal (no emoji, no busy layering)
- On desktop, let content breathe — prefer wider containers (`max-w-6xl`/`max-w-5xl`) over small centered columns
- Animations must be gentle (8-12s loop for ripple), with `prefers-reduced-motion` fallback
- Responsive breakpoints: Mobile ~640px, Tablet 641-1024px, Desktop 1025px+
- Lighthouse performance target: 90+
- All images need `alt` attributes, keyboard navigation must work
- Images should use WebP + lazy loading

## Language

All user-facing text is in Korean (with select English brand/section labels: Wooribom Ocean, Books, Films). Code (variable names, comments, commit messages) should be in English.
