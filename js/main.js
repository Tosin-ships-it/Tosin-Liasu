/* -------------------------------------------------------------------
   Tosin Liasu Personal Portfolio — Main Script
   Handles global interactive behaviors:
   - Mobile navigation menu toggle
   - Active navigation link highlighting
   ------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  highlightActiveNav();
  initContactForms();
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

/**
 * Handles Formspree contact form submission with feedback and validation.
 */
function initContactForms() {
  const forms = document.querySelectorAll('.contact-form');

  forms.forEach(form => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const submitBtn = form.querySelector('.form-submit-btn') || form.querySelector('button[type="submit"]');
      const statusDiv = form.querySelector('.form-status');

      if (!submitBtn) return;

      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      if (statusDiv) {
        statusDiv.className = 'form-status';
        statusDiv.textContent = '';
      }

      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: form.method || 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          if (statusDiv) {
            statusDiv.className = 'form-status form-status-success';
            statusDiv.textContent = 'Thanks for reaching out. Your message has been sent.';
          }
          form.reset();
        } else {
          let errorMsg = 'Something went wrong and your message could not be sent. Please try again.';
          try {
            const data = await response.json();
            if (data && data.errors && data.errors.length > 0) {
              errorMsg = data.errors.map(err => err.message).join(', ');
            }
          } catch (e) {
            // Use fallback error message if JSON parsing fails
          }
          if (statusDiv) {
            statusDiv.className = 'form-status form-status-error';
            statusDiv.textContent = errorMsg;
          }
        }
      } catch (error) {
        if (statusDiv) {
          statusDiv.className = 'form-status form-status-error';
          statusDiv.textContent = 'Something went wrong and your message could not be sent. Please try again.';
        }
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  });
}
