# Tosin Liasu — Personal Portfolio & Ship Log Project

> **Professional Identity**: UI/UX Designer expanding into frontend development and AI-assisted workflows.
> 
> **Progression Model**: DESIGN → PRODUCT THINKING → BUILDING → LEARNING

---

## 1. Project Overview

This website is both a professional portfolio and a active **Ship Log project**. It presents Tosin Liasu's UI/UX case studies and built products (such as SpendLog) in a clean, web-native format without relying on external presentation embeds or third-party CMS platforms.

---

## 2. Technology Stack

- **HTML5**: Semantic markup (`<header>`, `<main>`, `<nav>`, `<article>`, `<footer>`).
- **Modern CSS3**: Standard CSS with CSS Custom Properties (`css/tokens.css`), Flexbox, CSS Grid, and dynamic `clamp()` typography scaling.
- **Vanilla JavaScript (ES Modules)**: Modular JavaScript files (`js/data/projects.js`, `js/renderers.js`, `js/main.js`) with zero frameworks or build tools.
- **Deployment Target**: Static site hosting on **Vercel** (or GitHub Pages / Netlify).

---

## 3. Project Directory Structure

```text
Tosin Liasu/
├── index.html              # Homepage (Hero, Selected Work, Approach, Currently Building, Ship Log preview, Contact)
├── work.html               # Work Directory
├── case-study.html         # Dynamic Web-Native Case Study Page
├── about.html              # About & Background
├── shiplog.html            # Development Journal & Build Logs
├── contact.html            # Contact Options
├── css/
│   ├── tokens.css          # Design system variables (colors, typography, spacing, shadows)
│   └── main.css            # Master stylesheet (reset, base, typography, components, layouts, responsive rules)
├── js/
│   ├── main.js             # Global navigation toggle & active link handling
│   ├── renderers.js        # Beginner-readable template functions (renderProjectCard, renderCaseStudy)
│   └── data/
│       ├── projects.js     # Single source of truth for project data & case studies
│       └── shiplog.js      # Single source of truth for Ship Log journal entries
├── assets/
│   └── images/
│       └── projects/       # Image directories per project
│           ├── spendlog/
│           ├── the-force/
│           └── ecochic/
├── README.md               # Maintenance & project management documentation
└── JOURNAL.md              # Development journal tracking key technical & design decisions
```

---

## 4. How to Add a New Project (Zero-Redesign Maintenance)

Adding a new project to your portfolio does **NOT** require modifying HTML layout files or redesigning components. All project content is managed inside `js/data/projects.js`.

### Step-by-step workflow to add a project:

1. **Add Project Images**:
   Save your project cover image and screenshot assets into `assets/images/projects/your-project-id/`.

2. **Open `js/data/projects.js`**:
   Copy the following blank template object and paste it into the `projects` array:

   ```javascript
   {
     id: "your-project-id",
     title: "Project Title",
     category: "UI/UX / Product Design", // 'Built Product' | 'UI/UX / Product Design' | 'UI/UX / Visual Design'
     featured: true,                     // true to display on Homepage Selected Work
     order: 4,                           // Sort order number
     tagline: "Short one-sentence summary of the project.",
     shortDescription: "A 2-sentence description for project cards.",
     role: "UI/UX Designer",
     year: "2026",
     tools: ["Figma", "Wireframing", "UI Design"],
     coverImage: "assets/images/projects/your-project-id/cover.jpg",
     coverAlt: "Description of cover image for accessibility",
     tags: ["UI/UX", "Product Design"],
     links: {
       caseStudy: "case-study.html?id=your-project-id",
       liveDemo: "", // Optional: Add live URL when available
       github: "",   // Optional: Add GitHub repository URL
       behance: ""   // Optional: Add Behance link
     },
     caseStudy: {
       overview: "Project background and context.",
       problem: "The specific problem or challenge addressed.",
       myRole: "Your actual responsibilities and process.",
       keyDecisions: [
         {
           title: "Key Design Decision Name",
           description: "Explanation of why this choice was made.",
           image: "assets/images/projects/your-project-id/decision-1.jpg",
           imageAlt: "Description of decision visual"
         }
       ],
       implementationNotes: "", // Optional for built products
       outcomes: "Outcome summary.",
       lessons: "Lessons learned."
     }
   }
   ```

3. **Reordering or Removing Projects**:
   - To **reorder**: Change the order of objects inside the `projects` array in `js/data/projects.js` or adjust the `order` property value.
   - To **hide from Homepage**: Set `featured: false`.
   - To **delete**: Remove the project object block from `js/data/projects.js`.

---

## 5. Running Locally

Since the portfolio uses standard Vanilla HTML/CSS/JS with ES Modules:
1. Open the project folder in VS Code or your preferred code editor.
2. Use a local HTTP server extension (such as **Live Server** in VS Code) or run:
   ```bash
   npx serve .
   ```
3. Open `http://localhost:3000` or the Live Server URL in your browser.

---

## 6. License & Content Integrity

All project descriptions, case studies, and code examples reflect truthful representations of Tosin Liasu's actual design process and frontend progression.
