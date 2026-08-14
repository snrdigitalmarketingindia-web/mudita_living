/* ============================================================
   Mudita Living — Shared Nav Loader
   Include this script on every page. It injects the nav
   automatically and marks the active link based on the URL.
   ============================================================ */
(function () {
  // Detect if we're in the pages/ subfolder or root
  const inPages = window.location.pathname.includes('/pages/');
  const root    = inPages ? '../' : '';
  const pagesPrefix = inPages ? '' : 'pages/';

  // Current filename for active state detection
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  // Nav links definition — single source of truth
  const links = [
    { label: 'About',        file: 'about.html' },
    { label: 'Coaching',     file: 'coaching.html' },
    { label: 'Yoga',         file: 'yoga.html' },
    { label: 'Courses',      file: 'courses.html' },
    { label: 'Blog',         file: 'blog.html' },
    { label: 'Testimonials', file: 'testimonials.html' },
    { label: 'Contact',      file: 'contact.html' },
    { label: 'FAQ',          file: 'faq.html' },
  ];

  function href(file) {
    return inPages ? file : 'pages/' + file;
  }

  function navHTML() {
    const liItems = links.map(l => {
      const active = currentFile === l.file ? ' class="active"' : '';
      return `<li><a href="${href(l.file)}"${active}>${l.label}</a></li>`;
    }).join('\n      ');

    const ddItems = links.map(l =>
      `<a href="${href(l.file)}" onclick="closeHamburger()">${l.label}</a>`
    ).join('\n    ');

    return `
  <nav>
    <a class="nav-logo" href="${root}index.html">
      <img src="${root}assets/MuditaLiving-Logo-WithoutTL.png" alt="Mudita Living"
        style="height:48px;"
        onerror="this.style.display='none';this.nextElementSibling.style.display='inline-block'"/>
      <span style="display:none;font-family:'Cormorant Garamond',serif;font-size:22px;color:#3D1028;font-weight:600;letter-spacing:0.05em;">Mudita Living</span>
    </a>
    <ul class="nav-links">
      ${liItems}
    </ul>
    <a href="${href('contact.html')}" class="btn-primary nav-cta">Book a Session</a>
    <button class="nav-hamburger" id="navHamburger" onclick="toggleHamburger()" aria-label="Open menu">☰</button>
  </nav>
  <div class="nav-dropdown" id="navDropdown">
    ${ddItems}
    <a href="${href('contact.html')}" class="mob-book" onclick="closeHamburger()">Book a Session</a>
  </div>`;
  }

  // Prepend nav directly into <body> — works on every page, no <header> needed
  function inject() {
    document.body.insertAdjacentHTML('afterbegin', navHTML());
  }

  // Hamburger functions (global scope)
  window.toggleHamburger = function () {
    const dd  = document.getElementById('navDropdown');
    const btn = document.getElementById('navHamburger');
    const isOpen = dd.classList.toggle('open');
    btn.textContent = isOpen ? '✕' : '☰';
  };
  window.closeHamburger = function () {
    const dd  = document.getElementById('navDropdown');
    const btn = document.getElementById('navHamburger');
    if (dd) dd.classList.remove('open');
    if (btn) btn.textContent = '☰';
  };
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') window.closeHamburger();
  });

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
