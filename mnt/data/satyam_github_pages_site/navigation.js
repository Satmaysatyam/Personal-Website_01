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
        <div class="brand-mark">🌿</div>
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
    footer.innerHTML = `
      Designed as a modular multi-page website with modern CSS view transitions.
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
});
