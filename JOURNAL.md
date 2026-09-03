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
