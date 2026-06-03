document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('.app');
  if (!app) return;

  // 1. Identify active page based on filename
  const path = window.location.pathname;
  const pageName = path.substring(path.lastIndexOf('/') + 1);
  let activePageId = 'home';
  
  if (pageName && pageName !== 'index.html') {
    const matchingPage = site.pages.find(p => p.url === pageName);
    if (matchingPage) activePageId = matchingPage.id;
  }

  // 2. Create Header
  const header = document.createElement('header');
  header.className = 'topbar';
  header.innerHTML = `
    <div class="topbar-inner">
      <a href="index.html" class="brand">
        <img src="logo.png" alt="Logo" class="brand-logo">
        <div>
          <div>Satyam Gupta</div>
          <div class="subtle">Behavioral Ecologist • Bioacoustician • Conservation Researcher</div>
        </div>
      </a>
      <nav class="nav" id="nav">
        ${site.pages.map(p => `
          <a href="${p.url}" class="${p.id === activePageId ? 'active' : ''}">${p.label}</a>
        `).join('')}
      </nav>
    </div>
  `;
  app.insertBefore(header, app.firstChild);

  // 3. Create Footer (if not already defined)
  if (!document.querySelector('.footer')) {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    
    let licenseHtml = '';
    if (activePageId === 'photography' || activePageId === 'audio') {
      licenseHtml = `<div class="license-notice" style="margin-top: 10px; font-size: 0.82rem; opacity: 0.85; color: var(--muted);">
        All personal photography, audio recordings, and media on this page are licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; color: var(--brand); font-weight: 600;">Creative Commons Attribution 4.0 International (CC BY 4.0)</a>.
      </div>`;
    }

    footer.innerHTML = `
      <div>Designed as a modular multi-page website with modern CSS view transitions.</div>
      ${licenseHtml}
    `;
    app.appendChild(footer);
  }

  // 4. Create Floating Note (if not already defined)
  if (!document.querySelector('.floating-note')) {
    const note = document.createElement('div');
    note.className = 'floating-note';
    note.innerHTML = `
      <strong>Multi-page Site</strong><br>
      Styles live in <code>style.css</code>. Menu links and shared layout are loaded dynamically from <code>navigation.js</code>.
    `;
    app.appendChild(note);
  }

  // 5. Aesthetic Page Exit Transitions (Cross-Browser support)
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href');
    if (href && href.endsWith('.html') && !link.target && !href.startsWith('http') && !href.startsWith('#')) {
      e.preventDefault();
      document.body.classList.add('page-exit');
      setTimeout(() => {
        window.location.href = href;
      }, 200);
    }
  });
});
