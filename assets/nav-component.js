/* ============================================================
   Mudita Living — Shared Nav v3.0
   Transparent on homepage → solid on scroll
   Full-screen dark burgundy mobile overlay
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
  const path    = window.location.pathname;
  const inPages = path.includes('/pages/');
  const root    = inPages ? '../' : '';
  const current = path.split('/').pop() || 'index.html';
  const isHome  = current === 'index.html' || current === '';

  function href(file) {
    return inPages ? file : 'pages/' + file;
  }

  /* ─── Build HTML ─── */
  function navHTML() {
    const navLinks = LINKS.map(l => {
      const active = current === l.file ? ' active' : '';
      return `<li><a href="${href(l.file)}" class="nav-link${active}">${l.label}</a></li>`;
    }).join('');

    const overlayLinks = LINKS.map(l => {
      const active = current === l.file ? ' active' : '';
      return `<a href="${href(l.file)}" class="nav-overlay-link${active}" onclick="ML.closeNav()">${l.label}</a>`;
    }).join('');

    const logoImg = `<img src="${root}assets/MuditaLiving-Logo-WithoutTL.png" alt="Mudita Living"
      onerror="this.style.display='none'" /><span class="nav-logo-text">Mudita Living</span>`;

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
  <button class="nav-overlay-close" onclick="ML.closeNav()" aria-label="Close navigation">✕</button>
  <nav class="nav-overlay-links" aria-label="Mobile navigation">
    ${overlayLinks}
  </nav>
  <a href="${href('contact.html')}" class="nav-overlay-cta" onclick="ML.closeNav()">Book a Session</a>
</div>`;
  }

  /* ─── Mega Footer HTML ─── */
  function footerHTML() {
    const p = inPages ? '' : 'pages/';
    return `
<footer class="site-footer" aria-label="Site footer">
  <div class="footer-mega-grid">

    <!-- Column 1: Brand -->
    <div class="footer-col-brand">
      <img src="${root}assets/MuditaLiving-Logo-WithoutTL.png" alt="Mudita Living" class="footer-logo-img"
        onerror="this.style.display='none'">
      <span class="footer-brand-name">Mudita Living</span>
      <p class="footer-tagline">Ancient Wisdom, Modern Practices</p>
      <p class="footer-brand-desc">Radhika Avanthsa guides executives, leaders, and women through profound transformation — integrating ICF-accredited coaching, Traditional Hatha Yoga, and menopause wellness.</p>
      <div class="footer-social-row">
        <a href="https://instagram.com" class="footer-social-icon" aria-label="Instagram" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <a href="https://linkedin.com" class="footer-social-icon" aria-label="LinkedIn" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
      </div>
    </div>

    <!-- Column 2: Coaching -->
    <div>
      <span class="footer-col-title">Coaching</span>
      <div class="footer-links">
        <a href="${p}coaching.html">Executive Human Performance</a>
        <a href="${p}coaching.html">Menopause Coaching</a>
        <a href="${p}coaching.html">Corporate Programs</a>
        <a href="${p}coaching.html">1:1 Sessions</a>
        <a href="${p}coaching.html">Group Sessions</a>
      </div>
    </div>

    <!-- Column 3: Yoga & Courses -->
    <div>
      <span class="footer-col-title">Yoga &amp; Courses</span>
      <div class="footer-links">
        <a href="${p}yoga.html">Traditional Hatha Yoga</a>
        <a href="${p}yoga.html">Yoga Therapy</a>
        <a href="${p}courses.html">Yoga Certification</a>
        <a href="${p}courses.html">Yoga Therapy Course</a>
        <a href="${p}yoga.html">Online Classes</a>
      </div>
    </div>

    <!-- Column 4: Learn -->
    <div>
      <span class="footer-col-title">Learn</span>
      <div class="footer-links">
        <a href="${p}blog.html">Blog</a>
        <a href="${p}testimonials.html">Testimonials</a>
        <a href="${p}faq.html">FAQ</a>
        <a href="${p}about.html">About Radhika</a>
      </div>
    </div>

    <!-- Column 5: Connect -->
    <div>
      <span class="footer-col-title">Connect</span>
      <div class="footer-links">
        <a href="${p}contact.html">Book a Discovery Call</a>
        <a href="${p}contact.html">Contact</a>
        <a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
        <a href="mailto:hello@muditaliving.com">hello@muditaliving.com</a>
      </div>
    </div>

  </div>

  <div class="footer-divider"></div>

  <div class="footer-bottom">
    <span class="footer-copyright">© 2026 Mudita Living · Radhika Avanthsa · Singapore &amp; India</span>
    <div class="footer-legal-links">
      <a href="${p}privacy.html">Privacy Policy</a>
      <span>|</span>
      <a href="${p}terms.html">Terms of Use</a>
    </div>
  </div>
</footer>`;
  }

  /* ─── Inject into DOM ─── */
  function inject() {
    document.body.insertAdjacentHTML('afterbegin', navHTML());
    document.body.insertAdjacentHTML('beforeend', footerHTML());
    initScrollBehavior();
    initBodyOffset();
  }

  /* ─── Scroll behavior ─── */
  function initScrollBehavior() {
    const nav = document.getElementById('mlNav');
    if (!nav) return;

    if (!isHome) return; /* Inner pages always solid */

    function onScroll() {
      if (window.scrollY > 80) {
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
    if (!isHome) {
      const firstSection = document.body.querySelector('section, main, .hero, .page-hero');
      if (firstSection) {
        const current = parseInt(getComputedStyle(firstSection).paddingTop) || 0;
        if (current < 72) {
          firstSection.style.paddingTop = (current + 72) + 'px';
        }
      }
    }
  }

  /* ─── Mobile overlay controls ─── */
  window.ML = window.ML || {};

  window.ML.toggleNav = function () {
    const overlay   = document.getElementById('navOverlay');
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

    document.querySelectorAll('.fade-up, .fade-left').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ─── Stats count-up ─── */
  function initCountUp() {
    const statEls = document.querySelectorAll('[data-count]');
    if (!statEls.length || !window.IntersectionObserver) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const el     = entry.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const dur    = 1800;
        const start  = performance.now();
        function step(now) {
          const p = Math.min((now - start) / dur, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          const val = Math.round(ease * target * 10) / 10;
          el.textContent = prefix + (Number.isInteger(val) ? val : val.toFixed(1)) + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });

    statEls.forEach(function (el) { observer.observe(el); });
  }

  /* ─── Boot ─── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      inject();
      initAnimations();
      initCountUp();
    });
  } else {
    inject();
    initAnimations();
    initCountUp();
  }
})();
