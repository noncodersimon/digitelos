// Digitelos - site interactions
// Theme toggle (light default, persisted), hero chaos->calm choreography,
// scroll reveals, and header state. No dependencies.

(function () {
  var root = document.documentElement;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Theme: light by default, user-switchable, persisted ------------- */
  var toggle = document.querySelector('.theme-toggle');
  var themeMeta = document.querySelector('meta[name="theme-color"]');
  var META_COLOURS = { light: '#FBFAF6', dark: '#0B0B10' };

  function applyTheme(theme) {
    root.dataset.theme = theme;
    if (themeMeta) themeMeta.setAttribute('content', META_COLOURS[theme]);
    if (toggle) toggle.setAttribute('aria-pressed', String(theme === 'dark'));
    try { localStorage.setItem('digitelos-theme', theme); } catch (e) {}
  }

  if (toggle) {
    if (root.dataset.theme === 'dark') applyTheme('dark');
    toggle.addEventListener('click', function () {
      applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
    });
  }

  /* ---- Hero: settle the tangle into the spiral -------------------------- */
  var scene = document.querySelector('.hero-scene');
  var replay = document.querySelector('.replay');

  if (scene) {
    if (reducedMotion) {
      scene.classList.add('settled');
    } else {
      // Hold the tangle for a beat so the "before" registers, then settle.
      window.setTimeout(function () { scene.classList.add('settled'); }, 1250);
      if (replay) {
        // Offer replay once the story has finished telling itself.
        window.setTimeout(function () { replay.hidden = false; }, 8600);
        replay.addEventListener('click', function () {
          // Snap back to the tangle with transitions off, hold a beat, then re-settle.
          scene.classList.add('no-anim');
          scene.classList.remove('settled');
          void scene.getBoundingClientRect(); // force style flush so the snap is instant
          scene.classList.remove('no-anim');
          window.setTimeout(function () { scene.classList.add('settled'); }, 800);
        });
      }
    }
  }

  /* ---- Scroll reveals ---------------------------------------------------- */
  var revealables = document.querySelectorAll('.reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('in-view'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    revealables.forEach(function (el) { io.observe(el); });
  }

  /* ---- Header border on scroll ------------------------------------------ */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- Mobile navigation -------------------------------------------------- */
  var navToggle = document.querySelector('.nav-toggle');
  var navMenu = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    var closeNav = function () {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    };
    navToggle.addEventListener('click', function () {
      var open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    navMenu.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeNav();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeNav();
        navToggle.focus();
      }
    });
  }

  /* ---- Contact form: compose the email in the visitor's own mail app ------ */
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var val = function (n) { var el = form.elements[n]; return el ? el.value.trim() : ''; };
      var subject = 'Website enquiry' + (val('name') ? ' from ' + val('name') : '');
      var body = 'Name: ' + val('name') +
                 '\nOrganisation: ' + val('organisation') +
                 '\nRough budget: ' + val('budget') +
                 '\n\n' + val('message');
      window.location.href = 'mailto:info@digitelos.co.uk?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

  /* ---- Footer year -------------------------------------------------------- */
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
