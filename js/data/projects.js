/* -------------------------------------------------------------------
   Tosin Liasu Personal Portfolio — Project Data Store
   Single source of truth for all projects and case study data.
   
   Note: All fields are truthful representations or clear placeholders.
   Unverified claims (metrics, research findings, audit claims) are omitted.
   ------------------------------------------------------------------- */

export const projects = [
  {
    id: "schoolpass",
    title: "SchoolPass",
    category: "UI/UX / Product Design",
    featured: true,
    order: 1,
    tagline: "A school-parent platform that brings school information and child records into one place.",
    shortDescription: "A school-parent platform that brings school information and your child’s records into one place.",
    role: "UI/UX Designer",
    year: "Incoming",
    tools: ["Figma", "UI/UX Design"],
    coverImage: "assets/images/projects/schoolpass/cover.jpg",
    coverAlt: "SchoolPass student access platform cover",
    tags: ["UI/UX Design", "Product Design"],
    links: {
      caseStudy: "case-study.html?id=schoolpass",
      liveDemo: "",
      github: "",
      behance: ""
    },
    caseStudy: {
      overview: "SchoolPass is a school-parent platform bringing school information and student records into a single unified interface.",
      context: "Product design project focused on streamlining communication between schools and parents.",
      problem: "Parents often navigate fragmented portals and communications to track school updates and student records.",
      myRole: "UI/UX Designer responsible for interface layouts, screen flows, and visual hierarchy.",
      outcomes: "Designed a clear, modern platform concept for school information management."
    }
  },
  {
    id: "spendlog",
    title: "SpendLog",
    category: "Built Product",
    featured: true,
    order: 2,
    tagline: "Personal expense tracking designed and built from scratch.",
    shortDescription: "An expense tracking web application demonstrating the transition from UI/UX design into frontend implementation.",
    role: "UI/UX Designer & Frontend Developer",
    year: "2026",
    tools: ["Figma", "HTML5", "CSS3", "JavaScript", "Git/GitHub"],
    coverImage: "assets/images/projects/spendlog/cover.jpg",
    coverAlt: "SpendLog project interface cover screenshot",
    tags: ["UI/UX Design", "Frontend Implementation", "JavaScript App"],
    links: {
      caseStudy: "case-study.html?id=spendlog",
      liveDemo: "", // To be populated when deployed
      github: "",   // To be populated with repository link
      behance: ""
    },
    caseStudy: {
      overview: "SpendLog is a personal project created to connect interface design with frontend code execution.",
      context: "Personal project focused on building a clean expense tracker.",
      problem: "Many personal finance tools present complex multi-step navigation for logging basic expenses.",
      myRole: "Handled user experience layout, visual design in Figma, and frontend HTML/CSS/JavaScript implementation.",
      keyDecisions: [
        {
          title: "Interface Layout & Entry Flow",
          description: "Focused on an open entry form layout to simplify logging daily expenses.",
          image: "assets/images/projects/spendlog/decision-1.jpg",
          imageAlt: "SpendLog main entry form interface layout"
        },
        {
          title: "Vanilla JavaScript Data Handling",
          description: "Implemented standard JavaScript data logic and local storage data persistence.",
          image: "assets/images/projects/spendlog/decision-2.jpg",
          imageAlt: "JavaScript data state structure diagram"
        }
      ],
      implementationNotes: "Structured using semantic HTML5 tags, CSS custom properties, and vanilla JS DOM handling.",
      outcomes: "Built a functional web app bridging design concept to real browser execution.",
      lessons: "Gained direct practical insight into translating UI design systems into browser code."
    }
  },
  {
    id: "the-force",
    title: "The Force",
    category: "UI/UX / Product Design",
    categoryBadge: "ux-case-study",
    featured: true,
    order: 3,
    tagline: "Product design case study focusing on interaction flow and UI layout.",
    shortDescription: "A UI/UX design project exploring user flows, structured interface layouts, and design system components.",
    role: "UI/UX Designer",
    year: "2026",
    tools: ["Figma", "Wireframing", "UI Design"],
    coverImage: "assets/images/projects/the-force/cover.jpg",
    coverAlt: "The Force product design case study cover",
    tags: ["UI/UX Design", "Product Design", "Figma"],
    links: {
      caseStudy: "case-study.html?id=the-force",
      liveDemo: "",
      github: "",
      behance: "https://be.net/tl332"
    },
    caseStudy: {
      overview: "The Force is a product design exploration focusing on structured digital interaction patterns.",
      context: "Design exploration adapted from Behance case study material.",
      problem: "Organizing information-dense interfaces so users can navigate complex options clearly.",
      myRole: "UI/UX Designer responsible for interface layouts, screen flows, and visual hierarchy.",
      keyDecisions: [
        {
          title: "Structured Navigation & Canvas Layout",
          description: "Designed a clean side-panel system to organize tools while keeping the main workspace clear.",
          image: "assets/images/projects/the-force/decision-1.jpg",
          imageAlt: "The Force interface layout design"
        }
      ],
      outcomes: "Created a comprehensive UI design concept demonstrating interface structure and visual craft.",
      lessons: "Explored visual hierarchy principles for complex application layout."
    }
  },
  {
    id: "whisk",
    title: "Whisk",
    category: "UI/UX / Product Design",
    featured: false,
    order: 4,
    tagline: "Culinary recipe discovery and meal planning experience.",
    shortDescription: "A recipe discovery and meal planning web application designed for intuitive kitchen navigation and recipe organization.",
    role: "UI/UX Designer",
    year: "2026",
    tools: ["Figma", "Visual Design", "UI Design"],
    coverImage: "assets/images/projects/whisk/cover.jpg",
    coverAlt: "Whisk recipe discovery web application cover",
    tags: ["UI/UX Design", "Product Design"],
    links: {
      caseStudy: "case-study.html?id=whisk",
      liveDemo: "",
      github: "",
      behance: ""
    },
    caseStudy: {
      overview: "Whisk is a recipe discovery and meal planning interface design exploration.",
      context: "Product design case study exploring digital kitchen workflows.",
      problem: "Designing a clear interface for saving and organizing culinary recipes.",
      myRole: "UI/UX Designer responsible for interface layout and user flows.",
      outcomes: "Created a modern culinary web app UI concept."
    }
  },
  {
    id: "ecochic",
    title: "Ecochic",
    category: "UI/UX / Visual Design",
    featured: false,
    order: 5,
    tagline: "Visual UI design exploration featuring editorial typography and storefront layout.",
    shortDescription: "A visual design project showcasing typography choices, spatial hierarchy, and clean product cards.",
    role: "UI/Visual Designer",
    year: "2025",
    tools: ["Figma", "Visual Design", "Typography"],
    coverImage: "assets/images/projects/ecochic/cover.jpg",
    coverAlt: "Ecochic e-commerce visual UI design cover",
    tags: ["Visual Design", "UI Craft", "E-Commerce"],
    links: {
      caseStudy: "case-study.html?id=ecochic",
      liveDemo: "",
      github: "",
      behance: "https://be.net/tl332"
    },
    caseStudy: {
      overview: "Ecochic explores digital storefront design with a focus on visual composition and typography.",
      context: "Visual UI design concept adapted from Behance portfolio source material.",
      problem: "Designing an e-commerce layout that balances strong brand visuals with clear product browsing.",
      myRole: "UI/Visual Designer focusing on visual composition, color systems, and typographic grid.",
      keyDecisions: [
        {
          title: "Typographic Scale & Card Composition",
          description: "Paired distinct display headings with generous grid spacing to highlight featured products.",
          image: "assets/images/projects/ecochic/decision-1.jpg",
          imageAlt: "Ecochic product card visual layout"
        }
      ],
      outcomes: "Delivered a visual design exploration focused on digital presentation and refined layout.",
      lessons: "Refined visual design craft and typography alignment."
    }
  }
];

/**
 * Helper function to retrieve a single project by its unique ID.
 * Returns undefined if project is not found.
 */
export function getProjectById(id) {
  return projects.find(project => project.id === id);
}

/**
 * Helper function to retrieve all featured projects sorted by order.
 */
export function getFeaturedProjects() {
  return projects.filter(project => project.featured).sort((a, b) => a.order - b.order);
}
