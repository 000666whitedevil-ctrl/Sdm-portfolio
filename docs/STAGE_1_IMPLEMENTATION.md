# Stage 1 — Cinematic Landing Page

**Branch:** `stage-1/cinematic-landing`  
**Status:** Initial implementation committed; visual QA and portrait asset integration remain open.  
**Date:** 4 November 2026

## Direction

The five AI reference images are treated as art direction only. The implementation translates their visual language into a responsive editorial landing page: obsidian background, warm ivory typography, champagne / bronze accents, architectural portrait framing, subtle grain and restrained motion. The reference compositions are not treated as biographical evidence or mandatory assets.

## Implemented

- Replaced the generic orange-accented starter page with a cinematic editorial landing page.
- Added responsive navigation with an accessible mobile toggle.
- Added a hero introduction, portrait frame, five-world journey index, short biography and contact ending.
- Added responsive layouts for desktop, tablet and mobile.
- Added reduced-motion overrides.
- Updated page title, description, theme colour and Open Graph metadata.
- Replaced placeholder email and LinkedIn destinations with the public details supplied by Shiv.
- Kept the implementation in the existing React + Vite stack; no unnecessary dependencies added.

## Hero image

The landing page expects the selected portrait at:

`public/assets/hero-portrait.webp`

The component includes a designed fallback if that file is not present. The repository's current GitHub text-file workflow has not transferred the binary photo asset yet, so the production portrait is **not yet integrated**. Do not treat the fallback as the final hero photography.

The provisional portrait choice should be an authentic source photograph. The studio-style black jacket image and generated mockups are not assumed to be camera originals; use an original photo as the identity source and avoid face regeneration.

## Privacy and content

- No classroom or group photographs are included in this landing-page implementation.
- Photos containing identifiable children remain excluded until appropriate permission and privacy treatment are confirmed.
- No invented awards, roles, impact metrics or academic completion claims have been added.
- The degree is not represented as formally awarded.

## Verification status

- Source files updated on GitHub: **yes**.
- Production build: **not run** (no repository checkout / build environment used in this implementation step).
- Browser visual QA: **not run**.
- Mobile device QA: **not run**.
- Deployment: **not performed**.

Do not describe the landing page as build-verified or deployed until those checks have actually been run.

## Next actions

1. Transfer the selected authentic portrait to `public/assets/hero-portrait.webp`.
2. Run `npm install` and `npm run build` in a repository checkout.
3. Inspect desktop and mobile rendering, including the hero image fallback.
4. Check keyboard navigation, focus visibility and reduced-motion behaviour.
5. Commit any fixes before starting Stage 2 (the five-door portal hallway).
