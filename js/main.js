/* ═══════════════════════════════════════════════════════════════
   ThunderMoon — Main JS
   Header scroll · Mobile menu · Smooth scroll · Active nav
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Header scroll effect ──
  const header = document.getElementById('header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 40) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Mobile menu ──
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Smooth scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Active nav based on current page ──
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.tm-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === 'index.html' && href && href.startsWith('index.html'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // ── Fade-in on scroll ──
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.game-card, .value-card, .blog-card, .stat').forEach(el => {
      observer.observe(el);
    });
  }
})();
