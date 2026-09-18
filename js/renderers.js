/* -------------------------------------------------------------------
   Tosin Liasu Personal Portfolio — Rendering Utilities
   Simple, beginner-readable DOM template functions.
   ------------------------------------------------------------------- */

/**
 * Creates an HTML string for a single project card.
 */
export function renderProjectCard(project) {
  const liveLinkHTML = project.links.liveDemo 
    ? `<a href="${project.links.liveDemo}" class="btn btn-secondary text-small" target="_blank" rel="noopener">Live Demo</a>` 
    : '';

  const behanceLinkHTML = project.links.behance 
    ? `<a href="${project.links.behance}" class="btn btn-secondary text-small" target="_blank" rel="noopener">Behance</a>` 
    : '';

  return `
    <article class="project-card" id="project-${project.id}">
      <div class="card-cover">
        <img src="${project.coverImage}" alt="${project.coverAlt || project.title}" loading="lazy">
      </div>
      <div class="card-content">
        <div class="card-header">
          <span class="card-category">${project.category}</span>
          <span class="text-small text-muted font-mono">${project.year || ''}</span>
        </div>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-description">${project.shortDescription}</p>
        <div class="card-actions">
          <a href="${project.links.caseStudy}" class="btn btn-primary text-small">View Case Study</a>
          ${liveLinkHTML}
          ${behanceLinkHTML}
        </div>
      </div>
    </article>
  `;
}

/**
 * Renders a list of projects into a container element.
 */
export function renderProjectGrid(containerElement, projectList) {
  if (!containerElement) return;
  if (!projectList || projectList.length === 0) {
    containerElement.innerHTML = `<p class="text-muted">No projects found.</p>`;
    return;
  }

  containerElement.innerHTML = projectList.map(renderProjectCard).join('');
}

/**
 * Renders a full web-native case study into a container element.
 */
export function renderCaseStudy(containerElement, project) {
  if (!containerElement || !project) return;

  const caseStudy = project.caseStudy || {};
  const toolsHTML = (project.tools || []).map(t => `<span class="tag">${t}</span>`).join(' ');
  
  const keyDecisionsHTML = (caseStudy.keyDecisions || []).map(decision => `
    <div class="decision-block" style="margin-bottom: var(--space-xl);">
      <h3 style="margin-bottom: var(--space-xs);">${decision.title}</h3>
      <p style="color: var(--text-secondary); margin-bottom: var(--space-md);">${decision.description}</p>
      ${decision.image ? `<div style="border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-light);"><img src="${decision.image}" alt="${decision.imageAlt || decision.title}" loading="lazy"></div>` : ''}
    </div>
  `).join('');

  const liveLinkHTML = project.links.liveDemo 
    ? `<a href="${project.links.liveDemo}" class="btn btn-primary" target="_blank" rel="noopener">Launch Live Demo</a>` 
    : '';

  const githubLinkHTML = project.links.github 
    ? `<a href="${project.links.github}" class="btn btn-secondary" target="_blank" rel="noopener">GitHub Repository</a>` 
    : '';

  const behanceLinkHTML = project.links.behance 
    ? `<a href="${project.links.behance}" class="btn btn-secondary" target="_blank" rel="noopener">Original Behance Study</a>` 
    : '';

  containerElement.innerHTML = `
    <article class="case-study-view">
      <header class="case-study-header" style="margin-bottom: var(--space-2xl);">
        <div class="badge" style="margin-bottom: var(--space-sm);">${project.category}</div>
        <h1 class="page-title">${project.title}</h1>
        <p class="lead">${project.tagline}</p>
        
        <div class="metadata-bar" style="display: flex; flex-wrap: wrap; gap: var(--space-md); margin-top: var(--space-lg); padding: var(--space-md); background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-md);">
          <div>
            <span class="text-small text-muted" style="display: block;">My Role</span>
            <strong class="text-small">${project.role || 'UI/UX Designer'}</strong>
          </div>
          <div>
            <span class="text-small text-muted" style="display: block;">Timeline</span>
            <strong class="text-small font-mono">${project.year || '2026'}</strong>
          </div>
          <div>
            <span class="text-small text-muted" style="display: block;">Tools</span>
            <div style="margin-top: 4px;">${toolsHTML}</div>
          </div>
        </div>

        <div style="display: flex; gap: var(--space-sm); margin-top: var(--space-md);">
          ${liveLinkHTML}
          ${githubLinkHTML}
          ${behanceLinkHTML}
        </div>
      </header>

      <div class="case-study-body container-reading">
        ${caseStudy.overview ? `
          <section style="margin-bottom: var(--space-xl);">
            <h2>Project Overview</h2>
            <p>${caseStudy.overview}</p>
          </section>
        ` : ''}

        ${caseStudy.problem ? `
          <section style="margin-bottom: var(--space-xl);">
            <h2>The Challenge & Problem</h2>
            <p>${caseStudy.problem}</p>
          </section>
        ` : ''}

        ${caseStudy.myRole ? `
          <section style="margin-bottom: var(--space-xl);">
            <h2>My Approach & Role</h2>
            <p>${caseStudy.myRole}</p>
          </section>
        ` : ''}

        ${keyDecisionsHTML ? `
          <section style="margin-bottom: var(--space-xl);">
            <h2>Key Design Decisions</h2>
            ${keyDecisionsHTML}
          </section>
        ` : ''}

        ${caseStudy.implementationNotes ? `
          <section style="margin-bottom: var(--space-xl);">
            <h2>Implementation & Technical Notes</h2>
            <p>${caseStudy.implementationNotes}</p>
          </section>
        ` : ''}

        ${caseStudy.outcomes ? `
          <section style="margin-bottom: var(--space-xl);">
            <h2>Outcome & Reflection</h2>
            <p>${caseStudy.outcomes}</p>
            ${caseStudy.lessons ? `<p style="color: var(--text-secondary);">${caseStudy.lessons}</p>` : ''}
          </section>
        ` : ''}
      </div>
    </article>
  `;
}

/**
 * Renders Ship Log journal entries into a container element.
 */
export function renderShipLogEntries(containerElement, entries) {
  if (!containerElement) return;
  if (!entries || entries.length === 0) {
    containerElement.innerHTML = `<p class="text-muted">No ship log entries recorded yet.</p>`;
    return;
  }

  containerElement.innerHTML = entries.map(entry => `
    <article class="shiplog-card" id="${entry.id}">
      <div class="shiplog-card-header">
        <span class="badge">${entry.category}</span>
        <time class="text-small text-muted font-mono" datetime="${entry.date}">${entry.date}</time>
      </div>
      <h3 style="margin-bottom: var(--space-xs);">${entry.title}</h3>
      <p style="color: var(--text-secondary); margin-bottom: var(--space-sm);">${entry.summary}</p>
      <p style="font-size: var(--font-size-sm);">${entry.content}</p>
      <div class="shiplog-card-tags">
        ${(entry.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </article>
  `).join('');
}
