/* ============================================================
   Mudita Living — Shared Nav v2.0
   Full-screen mobile overlay · scroll-transparent on homepage
   Single source of truth — edit here, every page updates
   ============================================================ */
(function () {
  'use strict';

  /* ─── Config ─── */
  const LINKS = [
    { label: 'About',        file: 'about.html' },
    { label: 'Coaching',     file: 'coaching.html' },
    { label: 'Yoga',         file: 'yoga.html' },
    { label: 'Courses',      file: 'courses.html' },
    { label: 'Blog',         file: 'blog.html' },
    { label: 'Testimonials', file: 'testimonials.html' },
    { label: 'Contact',      file: 'contact.html' },
    { label: 'FAQ',          file: 'faq.html' },
  ];

  /* ─── Path helpers ─── */
  const path      = window.location.pathname;
  const inPages   = path.includes('/pages/');
  const root      = inPages ? '../' : '';
  const current   = path.split('/').pop() || 'index.html';
  const isHome    = current === 'index.html' || current === '';

  function href(file) {
    return inPages ? file : 'pages/' + file;
  }

  /* ─── Build HTML ─── */
  function navHTML() {
    /* Desktop nav links */
    const navLinks = LINKS.map(l => {
      const active = current === l.file ? ' active' : '';
      return `<li><a href="${href(l.file)}" class="nav-link${active}">${l.label}</a></li>`;
    }).join('');

    /* Overlay links */
    const overlayLinks = LINKS.map(l => {
      const active = current === l.file ? ' active' : '';
      return `<a href="${href(l.file)}" class="nav-overlay-link${active}" onclick="ML.closeNav()">${l.label}</a>`;
    }).join('');

    const logoImg = `<img src="${root}assets/MuditaLiving-Logo-WithoutTL.png" alt="Mudita Living"
      onerror="this.style.display='none'" />
      <span class="nav-logo-text">Mudita Living</span>`;

    return `
<nav class="ml-nav ${isHome ? 'is-transparent' : 'inner-page'}" id="mlNav" role="navigation" aria-label="Main">
  <a class="nav-logo" href="${root}index.html" aria-label="Mudita Living home">
    ${logoImg}
  </a>
  <ul class="nav-links" role="list">
    ${navLinks}
  </ul>
  <a href="${href('contact.html')}" class="btn-primary nav-cta" aria-label="Book a session">Book a Session</a>
  <button class="nav-hamburger" id="navHamburger" aria-label="Open navigation menu"
    aria-expanded="false" aria-controls="navOverlay" onclick="ML.toggleNav()">
    <span class="hamburger-bars" aria-hidden="true">
      <span></span><span></span><span></span>
    </span>
  </button>
</nav>

<div class="nav-overlay" id="navOverlay" role="dialog" aria-modal="true" aria-label="Navigation menu">
  <nav class="nav-overlay-links" aria-label="Mobile navigation">
    ${overlayLinks}
  </nav>
  <a href="${href('contact.html')}" class="nav-overlay-cta" onclick="ML.closeNav()">Book a Session</a>
</div>`;
  }

  /* ─── Inject into DOM ─── */
  function inject() {
    document.body.insertAdjacentHTML('afterbegin', navHTML());
    initScrollBehavior();
    initBodyOffset();
  }

  /* ─── Scroll behavior ─── */
  function initScrollBehavior() {
    if (!isHome) return; /* Inner pages stay solid always */
    const nav = document.getElementById('mlNav');
    if (!nav) return;

    function onScroll() {
      if (window.scrollY > 60) {
        nav.classList.remove('is-transparent');
        nav.classList.add('is-solid');
      } else {
        nav.classList.remove('is-solid');
        nav.classList.add('is-transparent');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ─── Offset body so content isn't hidden under fixed nav ─── */
  function initBodyOffset() {
    /* Only inner pages need a top margin — homepage hero covers the nav area */
    if (!isHome) {
      /* Add nav-height padding to first page section */
      const firstSection = document.body.querySelector('section, main, .hero, .page-hero');
      if (firstSection) {
        const current = parseInt(getComputedStyle(firstSection).paddingTop) || 0;
        if (current < 72) {
          firstSection.style.paddingTop = (current + 72) + 'px';
        }
      }
    }
  }

  /* ─── Mobile overlay controls (global) ─── */
  window.ML = window.ML || {};

  window.ML.toggleNav = function () {
    const overlay  = document.getElementById('navOverlay');
    const hamburger = document.getElementById('navHamburger');
    if (!overlay) return;
    const isOpen = overlay.classList.toggle('is-open');
    hamburger.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  window.ML.closeNav = function () {
    const overlay   = document.getElementById('navOverlay');
    const hamburger = document.getElementById('navHamburger');
    if (!overlay) return;
    overlay.classList.remove('is-open');
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  /* Close on Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') window.ML.closeNav();
  });

  /* ─── Scroll-entrance animations ─── */
  function initAnimations() {
    if (!window.IntersectionObserver) return;
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-up').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ─── Boot ─── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { inject(); initAnimations(); });
  } else {
    inject();
    initAnimations();
  }
})();
