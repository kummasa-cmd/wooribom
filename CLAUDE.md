# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Wooribom's Jewel Box (우리봄 보석함)** — A healing-themed landing page for author Wooribom (김윤희), an elementary school teacher and writer. The site should feel like arriving at a calm ocean shore, prioritizing emotional experience over information delivery.

Full requirements are in `requirements.md`.

## Tech Stack (per requirements)

- **Framework**: Next.js 14 (App Router) or HTML + Vanilla JS + TailwindCSS
- **Styling**: TailwindCSS with custom CSS variables for the color palette
- **Animation**: Framer Motion (if Next.js) or GSAP / pure CSS keyframes
- **Fonts**: Google Fonts CDN — Gowun Batang or Nanum Myeongjo (headlines), Pretendard or Gowun Dodum (body), Cafe24 Ssurround or Gaegu (accent)
- **Icons**: Phosphor Icons or Lucide (thin line style)
- **Deployment**: Vercel / Netlify / GitHub Pages

## Color Palette

| Token            | HEX       | Usage                          |
|------------------|-----------|--------------------------------|
| Aqua Mist        | `#A8DCE3` | Main background gradient top   |
| Ocean Teal       | `#3DB2C7` | Buttons, accents, link hover   |
| Sky Cloud Blue   | `#7EC0E8` | Secondary background, gradient |
| Soft Sand        | `#F4E6D2` | Card backgrounds, section dividers |
| Foam White       | `#FAFCFD` | Body background                |
| Cloud Gray       | `#E8EEF2` | Dividers, shadows              |
| Deep Ocean       | `#1F4D5C` | Body text                      |
| Misty Gray       | `#6B8A93` | Secondary text, captions       |

Default gradient: `linear-gradient(180deg, #7EC0E8 0%, #A8DCE3 40%, #F4E6D2 100%)`

## Site Sections (scroll order)

1. **Hero** — Fullscreen ocean background, site name, subtitle, scroll indicator
2. **About** — Author profile (photo placeholder + bio)
3. **Books** — Two book cards (published 2025 + upcoming 2026)
4. **Media** — YouTube embed (video ID: `XjV5x5grrD4`)
5. **Connect** — SNS link cards (Instagram, Threads, YouTube, Brunch, Naver Blog, X, Linktree)
6. **Footer** — Copyright, back-to-top

## Design Constraints

- Cards use `border-radius: 24px` with soft shadows (`0 8px 32px rgba(61,178,199,0.12)`)
- Glassmorphism on SNS cards (`backdrop-filter: blur(10px)`)
- Animations must be gentle (8-12s loop for ripple), with `prefers-reduced-motion` fallback
- Responsive breakpoints: Mobile ~640px, Tablet 641-1024px, Desktop 1025px+
- Lighthouse performance target: 90+
- All images need `alt` attributes, keyboard navigation must work
- Images should use WebP + lazy loading

## Language

All user-facing text is in Korean. Code (variable names, comments, commit messages) should be in English.
