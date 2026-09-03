# Chronological Development Journal (JOURNAL.md)

> **Project**: Tosin Liasu Personal Portfolio & Ship Log Project
> **Author**: Tosin Liasu with AI Pair Programmer

---

## 2026-09-03 — Stage 1: Discovery & Strategy Approval

### Context & Goals
- Initialized the Personal Portfolio project positioned around **UI/UX Designer expanding into frontend development and AI-assisted workflows**.
- Defined core progression model: **DESIGN → PRODUCT THINKING → BUILDING → LEARNING**.

### Strategy Decisions
- **Stack Selection**: Evaluated frameworks (React, Next.js, Vite) vs Vanilla HTML5/CSS3/JavaScript. Approved **Vanilla HTML5 + Modern CSS + Vanilla JS (ES Modules)** to prioritize learning clarity, maintainability, and zero framework bloat.
- **Information Architecture**: Approved 5 core sections: `HOME`, `WORK`, `ABOUT`, `SHIP LOG`, `CONTACT`, with dynamic web-native `CASE STUDY` template.
- **Behance Strategy**: Existing Behance case studies will be adapted into structured web-native layouts. Behance is retained as a secondary link.
- **SpendLog Positioning**: Highlights SpendLog as the primary proof of the Design → Building transition.

---

## 2026-09-03 — Stage 2: Core Setup & Design System Foundation

### Key Implementation Milestones
1. **Git Initialization**: Created local git repository and `.gitignore` file.
2. **Simplified CSS Architecture**: Built two clean stylesheets as requested:
   - `css/tokens.css`: Houses design tokens for Light Editorial theme (soft warm alabaster background `#FBFBF9`, deep charcoal text `#121619`, restrained indigo accent `#4F46E5`, fluid type scale with `clamp()`, and 8pt spacing grid).
   - `css/main.css`: Contains CSS reset, base typography, responsive grid containers, buttons, cards, tags, navigation header, and footer styles.
3. **Truthful Project Data Store**: Built `js/data/projects.js` and `js/data/shiplog.js`. Ensured all initial projects (**SpendLog**, **The Force**, **Ecochic**) contain truthful, verified project descriptions without fabricated metrics or unverified research claims.
4. **Beginner-Readable Rendering Utilities**: Built `js/renderers.js` containing clear template string functions (`renderProjectCard`, `renderProjectGrid`, `renderCaseStudy`, `renderShipLogEntries`).
5. **Interactive Navigation**: Implemented `js/main.js` handling mobile navigation menu toggle and active page link highlighting.
6. **Documentation**: Wrote comprehensive `README.md` documenting step-by-step instructions on how to add, reorder, or update projects without touching component code.

---

## 2026-09-03 — Stage 3: Homepage Construction (index.html)

### Key Implementation Milestones
1. **Homepage HTML Shell (`index.html`)**: Constructed semantic HTML structure featuring:
   - Header with brand logo mark and navigation links.
   - Hero Section communicating primary positioning (*UI/UX Designer expanding into frontend & AI workflows*) and progression model (*DESIGN → PRODUCT THINKING → BUILDING → LEARNING*).
   - Selected Work Grid dynamically rendered from `js/data/projects.js` using `renderProjectGrid()`.
   - Currently Building section highlighting SpendLog and the Personal Portfolio website.
   - Working Approach section outlining 3 core pillars (Discovery, Product Thinking, Building).
   - Contact CTA & Footer featuring exact clickable `mailto:liasutosin@gmail.com` email link and Behance profile link (`be.net/tl332`).

---

## 2026-09-03 — Stage 4: Work Gallery (`work.html`) & Dynamic Case Study System (`case-study.html`)

### Key Implementation Milestones
1. **Work Directory (`work.html`)**: Built complete Work Gallery page featuring:
   - Page header and lead summary.
   - Interactive Category Filter Bar allowing real-time filtering between *All Projects*, *Built Products*, *Product Design*, and *Visual Design* using categories defined in `projects.js`.
   - Dynamic grid rendering via `renderProjectGrid()`.
2. **Dynamic Web-Native Case Study Viewer (`case-study.html`)**: Built dynamic case study viewer utilizing:
   - `URLSearchParams` to extract project `?id=` from URL.
   - `getProjectById()` to load project data from `js/data/projects.js`.
   - `renderCaseStudy()` helper to render structured metadata, problem context, key design decisions, and truthful outcomes.
   - Graceful fallback view ("Project Not Found") with a direct link back to `work.html` when an invalid ID is requested.
3. **Contact Consistency**: Verified exact `mailto:liasutosin@gmail.com` email link across all pages and footers.

---

## 2026-09-03 — Stage 5: Secondary Page Suite (`about.html`, `shiplog.html`, `contact.html`)

### Key Implementation Milestones
1. **About Page (`about.html`)**: Built background & strategy page featuring:
   - Positioning statement as UI/UX Designer expanding into frontend development and AI-assisted workflows.
   - Structured 4-pillar progression cards (*01 / DESIGN*, *02 / PRODUCT THINKING*, *03 / BUILDING*, *04 / LEARNING*).
   - Current tool stack showcase tags (Figma, HTML5, CSS3, JavaScript, Git/GitHub, AI-Assisted Tools).
2. **Ship Log Page (`shiplog.html`)**: Built dynamic development journal page featuring:
   - Dynamic rendering of chronological build entries from `js/data/shiplog.js` using `renderShipLogEntries()`.
   - Clean tags, mono timestamps, and category badges per entry.
3. **Contact Page (`contact.html`)**: Built dedicated contact options page featuring:
   - Direct Email card (`liasutosin@gmail.com`).
   - GitHub profile card (`github.com/Tosin-ships-it`).
   - Behance portfolio card (`be.net/tl332`).
4. **Design System & Component Refinement (`css/main.css`)**: Added reusable utility classes (`.info-card`, `.shiplog-card`, `.contact-card`, `.text-center`) eliminating redundant inline styles.
5. **Global Footer Alignment**: Updated footer socials across all pages (`index.html`, `work.html`, `case-study.html`, `about.html`, `shiplog.html`, `contact.html`) to include GitHub link alongside Email and Behance.

