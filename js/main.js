/* -------------------------------------------------------------------
   Tosin Liasu Personal Portfolio — Main Script
   Handles global interactive behaviors:
   - Mobile navigation menu toggle
   - Active navigation link highlighting
   ------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  highlightActiveNav();
});

/**
 * Mobile Navigation Menu Toggle Handler
 */
function initMobileNav() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!menuBtn.contains(event.target) && !navLinks.contains(event.target)) {
      navLinks.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * Highlights current page navigation link based on window location.
 */
function highlightActiveNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && (currentPath.endsWith(href) || (href === 'index.html' && currentPath === '/'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
