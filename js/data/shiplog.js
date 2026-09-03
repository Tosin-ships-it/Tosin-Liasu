/* -------------------------------------------------------------------
   Tosin Liasu Personal Portfolio — Ship Log Data Store
   Chronological development journal entries.
   ------------------------------------------------------------------- */

export const shiplogEntries = [
  {
    id: "log-02-portfolio-foundation",
    date: "2026-09-03",
    title: "Establishing the Portfolio Design System & Foundation",
    category: "Portfolio Build",
    summary: "Set up the lightweight static architecture, CSS design system tokens (light editorial theme), and project data structures without unnecessary framework bloat.",
    content: "Designed and configured a clean vanilla HTML/CSS/JS foundation. Established an editorial color palette featuring soft warm alabaster, deep charcoal, and restrained indigo accents. Built a data-driven JavaScript project data architecture to ensure future work can be added seamlessly.",
    tags: ["HTML", "CSS Tokens", "Vanilla JS", "Design System"]
  },
  {
    id: "log-01-spendlog-built-product",
    date: "2026-08-28",
    title: "Building SpendLog: Transitioning from UI Design to Frontend Code",
    category: "Project Build",
    summary: "Documenting the experience of translating the SpendLog UI design into working HTML, CSS, and Vanilla JavaScript with local data storage.",
    content: "Building SpendLog provided a hands-on opportunity to bridge interface design with actual browser code execution. Focused on DOM manipulation, local storage logic, and responsive CSS styling.",
    tags: ["SpendLog", "JavaScript", "HTML/CSS", "Learning"]
  }
];

/**
 * Helper function to retrieve all ship log entries sorted newest first.
 */
export function getShipLogEntries() {
  return shiplogEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
}
