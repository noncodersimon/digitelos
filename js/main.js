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

  /* ---- A quiet nod to the Deep Note: scattered voices converging into a
     warm chord, timed to the replay's chaos-to-calm choreography. Browsers
     only allow audio after a user gesture. Replay is silent unless the
     visitor explicitly selects sound. */
  function playDeepNote() {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    var ctx = new AC();
    if (ctx.state === 'suspended') ctx.resume();
    var t0 = ctx.currentTime;
    var master = ctx.createGain();
    master.gain.setValueAtTime(0.0001, t0);
    master.gain.exponentialRampToValueAtTime(0.13, t0 + 1.4);   // gentle swell in
    master.gain.setValueAtTime(0.13, t0 + 3.6);                 // hold while the spiral draws
    master.gain.exponentialRampToValueAtTime(0.0001, t0 + 7);   // fade as the hedgerow blooms
    var lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(2000, t0);
    lp.frequency.exponentialRampToValueAtTime(800, t0 + 6.5);
    lp.connect(master);
    master.connect(ctx.destination);
    // B across five octaves with F sharp and D sharp for warmth
    var chord = [61.74, 92.50, 123.47, 185.00, 246.94, 311.13, 369.99, 493.88, 739.99, 987.77];
    chord.forEach(function (f, i) {
      var o = ctx.createOscillator();
      var g = ctx.createGain();
      o.type = 'triangle';
      var scattered = 100 + Math.random() * 220;
      o.frequency.setValueAtTime(scattered, t0);
      o.frequency.setValueAtTime(scattered, t0 + 0.8);                    // hold through the tangle
      o.frequency.exponentialRampToValueAtTime(f, t0 + 3.2 + i * 0.05);   // converge with the spiral
      o.detune.value = (Math.random() - 0.5) * 10;
      g.gain.value = 0.8 / chord.length;
      o.connect(g);
      g.connect(lp);
      o.start(t0);
      o.stop(t0 + 7.2);
    });
    window.setTimeout(function () { ctx.close(); }, 7600);
  }

  /* ---- Hero: settle the tangle into the spiral -------------------------- */
  var scene = document.querySelector('.hero-scene');
  var replay = document.querySelector('.replay');
  var sceneControls = document.querySelector('.scene-controls');
  var animationSound = document.getElementById('animation-sound');
  var mobileSound = window.matchMedia('(max-width: 720px), (hover: none) and (pointer: coarse)');
  var soundSupported = Boolean(window.AudioContext || window.webkitAudioContext);

  // Mobile replay stays silent: audio can be suppressed by browser/device
  // settings. Never retain an enabled choice when its control is hidden.
  if (animationSound) {
    var updateSoundOption = function () {
      var available = soundSupported && !mobileSound.matches;
      animationSound.closest('.sound-option').hidden = !available;
      animationSound.disabled = !available;
      if (!available) animationSound.checked = false;
    };
    updateSoundOption();
    if (mobileSound.addEventListener) {
      mobileSound.addEventListener('change', updateSoundOption);
    } else {
      mobileSound.addListener(updateSoundOption);
    }
  }

  if (scene) {
    if (reducedMotion) {
      scene.classList.add('settled');
    } else {
      // Hold the tangle for a beat so the "before" registers, then settle.
      window.setTimeout(function () { scene.classList.add('settled'); }, 1250);
      if (replay) {
        // Offer replay once the story has finished telling itself.
        window.setTimeout(function () { sceneControls.hidden = false; }, 8600);
        replay.addEventListener('click', function () {
          replay.disabled = true;
          // Snap back to the tangle with transitions off, hold a beat, then re-settle.
          scene.classList.add('no-anim');
          scene.classList.remove('settled');
          void scene.getBoundingClientRect(); // force style flush so the snap is instant
          scene.classList.remove('no-anim');
          window.setTimeout(function () { scene.classList.add('settled'); }, 800);
          if (animationSound && animationSound.checked && !mobileSound.matches && soundSupported) playDeepNote();
          window.setTimeout(function () { replay.disabled = false; }, 8600);
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
    form.querySelector('[type="submit"]').disabled = false;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var val = function (n) { var el = form.elements[n]; return el ? el.value.trim() : ''; };
      var subject = 'Digitelos - ' + (val('enquiry') || 'General enquiry') +
                    (val('name') ? ' from ' + val('name') : '');
      var body = 'Name: ' + val('name') +
                 '\nOrganisation: ' + val('organisation') +
                 '\nEnquiry: ' + (val('enquiry') || 'General enquiry') +
                 '\n\n' + val('message');
      window.location.href = 'mailto:info@digitelos.co.uk?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

  /* ---- Footer year -------------------------------------------------------- */
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
