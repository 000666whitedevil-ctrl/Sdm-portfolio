# Stage 0 — Project Blueprint
## Shiv Dutt Mishra · Immersive Personal Portfolio

**Status:** Stage 0 planning baseline  
**Repository:** https://github.com/000666whitedevil-ctrl/Sdm-portfolio  
**Default branch at audit:** `main`  
**Planning branch:** `stage-0/project-blueprint`  
**Creative direction:** Approved by Shiv on 4 November 2026

---

## 1. Project objective

Create a premium, cinematic portfolio that lets visitors discover five distinct dimensions of Shiv's identity through a connected interactive experience:

1. **The Soul** — personality, personal philosophy and human side.
2. **The Scholar** — mathematics, academic journey and research.
3. **The Leader** — Nivedan Foundation, project contributions and social impact.
4. **The Educator** — teaching, educational volunteering and learning philosophy.
5. **The Visionary** — future ambitions, entrepreneurship and ideas being explored.

The experience begins with a cinematic landing page, moves into an architectural five-portal environment, and ends with a memorable contact experience. Each world must have its own visual language while retaining coherent navigation and transition logic.

The portfolio must be visually distinctive without sacrificing accessibility, mobile usability, loading performance or factual accuracy.

## 2. Repository audit — baseline

The public GitHub repository was accessible and inspected on 4 November 2026.

### Existing root structure

```text
Sdm-portfolio/
├── README.md
├── index.html
├── package.json
└── src/
    ├── App.jsx
    ├── index.css
    └── main.jsx
```

### Existing stack

- React 18.3.1
- React DOM 18.3.1
- Vite 6.0.5
- JavaScript / JSX
- Custom CSS
- lucide-react 0.468.0

The current application already contains a responsive one-page portfolio with navigation, hero, about, focus areas, project descriptions, journey timeline, contact section, reveal-on-scroll animation and reduced-motion CSS.

### Current limitations observed in source

- Hero portrait is a designed placeholder, not a real photo.
- About visual is a placeholder illustration.
- Existing orange accent palette differs from the approved champagne / bronze direction.
- No 3D scene, door models, portal navigation or world environments exist yet.
- Contact email and LinkedIn destinations in the current UI are placeholders / generic destinations.
- No automated test suite or dedicated visual regression setup was identified in the inspected files.
- The source has not yet been built or run in this audit; build success is therefore **not verified**.

### Preservation decision

Keep the current React + Vite application. Refactor incrementally. Do not replace the project wholesale, migrate to Next.js, or convert to TypeScript without a demonstrated need.

## 3. Approved visual system

### Global direction

Cinematic, editorial, architectural, immersive, restrained and human. Avoid generic dashboard layouts, card-heavy page composition, gratuitous effects and decorative animation without a purpose.

### Core palette

| Token | Value | Intended use |
|---|---|---|
| Obsidian | `#10100F` | Main background |
| Charcoal | `#252522` | Secondary surfaces |
| Warm ivory | `#F0EBDD` | Primary text / light surfaces |
| Champagne | `#C5A36A` | Primary metallic accent |
| Bronze | `#A66D45` | Secondary accent |

Individual worlds may introduce distinct supporting colours where they serve the narrative.

### Typography

- Editorial serif for display headings.
- Manrope or DM Sans for readable body copy and interface text.
- DM Mono for metadata, navigation labels and technical annotations.
- Add a display serif such as Cormorant Garamond only after testing its visual and performance impact.

### Motion principles

- Use motion to reveal hierarchy, create depth or communicate navigation.
- Prefer transform and opacity animation.
- Avoid continuous heavy rendering when a scene is not visible.
- Respect `prefers-reduced-motion`.
- Provide a usable non-WebGL fallback for constrained devices.
- Keep touch interactions equivalent to desktop hover interactions.

## 4. Technical architecture recommendation

### Keep

- React + Vite
- JavaScript / JSX
- Existing CSS foundation, refactored into design tokens and component styles
- lucide-react for interface icons

### Add only when the relevant stage begins

- `three` — 3D rendering engine.
- `@react-three/fiber` — React renderer for Three.js scenes.
- `@react-three/drei` — selected scene helpers.
- `gsap` — timeline-based door, camera and shared-element transitions.

### Defer / do not add by default

- Next.js migration: not justified by current scope.
- TypeScript migration: not required to deliver the experience.
- Framer Motion: avoid overlapping animation systems when GSAP is handling the complex timelines.
- Lenis: evaluate only if native scrolling cannot deliver the approved feel.
- Large physics / post-processing packages: only add if a concrete visual requirement needs them.
- A router: introduce only when world-level deep links and browser history are designed; keep navigation semantics deliberate.

### Rendering strategy

Use real 3D for the portal hallway, door geometry and camera transitions. Use semantic HTML/CSS for editorial content and most world layouts. Do not put every paragraph and interaction inside WebGL.

On mobile or low-capability devices, retain the same story and navigation with a lighter scene or static portal presentation.

## 5. Proposed application structure

This is the target structure to evolve towards; it does not describe the current repository.

```text
src/
├── app/
│   ├── App.jsx
│   └── navigation/
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── cursor/
│   ├── transitions/
│   └── motion/
├── scenes/
│   ├── LandingScene.jsx
│   ├── PortalHallway.jsx
│   └── Door.jsx
├── worlds/
│   ├── Soul/
│   ├── Scholar/
│   ├── Leader/
│   ├── Educator/
│   └── Visionary/
├── sections/
│   ├── Landing.jsx
│   └── Contact.jsx
├── assets/
│   ├── portraits/
│   ├── community/
│   ├── academic/
│   ├── textures/
│   └── models/
├── styles/
│   ├── tokens.css
│   ├── global.css
│   └── responsive.css
└── main.jsx
```

Shared navigation, design tokens, transition orchestration and asset references should be centralised. Each world should own its content and visual treatment.

## 6. Content and factual guardrails

### Approved identity details

- Name: **Shiv Dutt Mishra**
- Location: New Delhi, India
- Education: B.Sc. (Hons.) Mathematics, Zakir Husain Delhi College, University of Delhi.
- Academic status: undergraduate coursework completed; two pending backlogs remain. Do not state or imply that the degree has been formally awarded.
- Research topic: **“A Study of Heat Transfer in Ice Cream Cooling System Using Atangana–Baleanu Operators.”**
- Research interests: mathematics, fractional calculus, heat-transfer modelling, Atangana–Baleanu operators and higher education.
- Organisation: Nivedan Foundation.
- Project associations: Project Astitva, Project Tejas, Project Digital Diksha and Project Panchtatva.
- Positioning: mathematics + research + leadership + education + social impact + creativity.

Do not invent awards, titles, outcomes, metrics, dates, formal qualifications or professional responsibilities. Where exact role wording or project outcomes are uncertain, use conservative descriptions or ask Shiv.

### Public contact details approved for the portfolio

- Email: **sdmishra1000@gmail.com**
- LinkedIn: https://www.linkedin.com/in/shiv-dutt-mishra-8b5315372
- GitHub: https://github.com/000666whitedevil-ctrl

Use these exact destinations when the contact section is implemented. Do not retain `hello@example.com` or the generic LinkedIn homepage.

## 7. Photography and asset handling

### Rules

- Prefer original photographs.
- Preserve facial identity; do not generate a replacement face.
- Avoid heavy smoothing, artificial symmetry and identity drift.
- Do not reuse the same photograph repeatedly without a clear reason.
- The photograph of Shiv holding a little girl is explicitly excluded from the entire site.
- Photos containing children or other identifiable people must not be published unless appropriate permission exists; otherwise crop or blur identifiable faces.
- Generated website mockups and AI concept images are references, not authentic portrait assets.
- Do not use a group photograph bearing another organisation's name as evidence of Nivedan Foundation activity.

### Preliminary review of available Library assets

The Library contains a collection of original-looking photographs and generated portfolio reference images. The following initial candidates were visually inspected:

| Asset | Preliminary role | Notes |
|---|---|---|
| `1000239440.jpg` | Potential landing portrait | Full-length black jacket / white shirt against a plain background; usable crop and colour grade should be tested. |
| `1000239438.jpg` | The Soul | Casual crossed-arm outdoor portrait; approachable and candid. |
| `1000239442.jpg` | The Scholar | Graduation cap and stole; clear academic milestone image. |
| `1000239457.jpg` | The Soul / personal story | Traditional attire; optional cultural/personal image if it fits the story. |
| `1000239456.jpg` | Not a primary image | Low-light hooded selfie; not preferred for prominent placement. |
| `1000239439.jpg` | Optional candid | Candid portrait in a transit setting; background is visually distracting. |
| `1000239452.jpg` | The Educator candidate | Classroom image with children; use only with appropriate permissions and privacy treatment. |
| `1000239458.jpg` | Do not use as a website asset | Screenshot/montage with interface elements and children's faces. Locate the original source photo if needed. |
| `1000239441.jpg` | Conditional community image | Group photo with many identifiable people and children; permission / face privacy review required. |
| `1000239453.jpg` | Exclude from Nivedan evidence | Visible Prayan Foundation / Avyanna banner; must not be attributed to Nivedan Foundation. |
| `1000239454.jpg` | Conditional educator image | Classroom selfie with multiple identifiable children; permission / face privacy review required. |
| `1000239133.png` | Visual reference only | A generated portfolio mockup containing a rendered portrait; not a source photograph of Shiv. |

This is a preliminary sample, not the final selection of the complete collection. The remaining original photographs must be reviewed before the asset shortlist is locked.

### Stage 1 asset shortlist — provisional

1. Test `1000239440.jpg` as the hero portrait.
2. Test `1000239438.jpg` for The Soul.
3. Reserve `1000239442.jpg` for The Scholar.
4. Keep classroom / group photographs out of production until permissions and face treatment are resolved.
5. Use no photo in a world if the story is stronger without one.

Do not start AI image enhancement until the final source image and intended treatment are approved.

## 8. Stage-by-stage delivery plan

| Stage | Deliverable | Acceptance gate |
|---|---|---|
| 0 | Audit, architecture, content guardrails, asset inventory and roadmap | Blueprint approved; missing assets identified |
| 1 | Cinematic responsive landing page | Real approved portrait; mobile / desktop; build verified |
| 2 | Five-door portal hallway | All five doors interactive; keyboard/touch fallback; transitions tested |
| 3 | The Soul | Distinct atmosphere and approved personal story |
| 4 | The Scholar | Accurate academic status and research presentation |
| 5 | The Leader | Verified Nivedan contributions; privacy-safe media |
| 6 | The Educator | Authentic teaching story; child privacy protected |
| 7 | The Visionary | Aspirations clearly labelled as future goals |
| 8 | Contact and closing | Working email, LinkedIn and GitHub links |
| 9 | Global integration | Performance, accessibility, responsive and SEO checks; deployment verified |

### Required completion checklist for every stage

- Integrate into the existing project.
- Preserve completed work.
- Run the production build.
- Test the changed interactions and responsive layouts.
- Verify reduced-motion behaviour where relevant.
- Record any known limitations.
- Update this blueprint / README.
- Commit or checkpoint the stage before moving forward.

Never claim a build, test, deployment or interaction was verified unless it was actually run.

## 9. Stage 0 exit criteria

Stage 0 is ready to close when:

- [x] Creative direction approved by Shiv.
- [x] GitHub repository inspected.
- [x] Existing stack and source structure documented.
- [x] Current contact details received.
- [x] Proposed architecture and technical stack documented.
- [x] Five-world roadmap documented.
- [x] Initial available photo assets reviewed.
- [ ] Full original photo collection reviewed and final shortlist approved.
- [ ] Required child-photo permissions / privacy decisions resolved.
- [ ] Hero portrait and Soul portrait approved for production use.

**No Stage 1 implementation should begin until the remaining photo and privacy gates above are resolved.**

## 10. Next action

Complete the remaining photo review and confirm the hero portrait, The Soul image, and which classroom / group images (if any) have permission for public portfolio use. Then begin Stage 1 on a dedicated implementation branch, keeping this blueprint branch as the planning record.
