// Digitelos - site interactions
// Theme: light by default, user-switchable to dark, persisted in localStorage.
// (The pre-paint snippet in index.html applies the saved theme before CSS loads.)

(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');
  var themeMeta = document.querySelector('meta[name="theme-color"]');
  var META_COLOURS = { light: '#FBFAF6', dark: '#0B0B10' };

  function applyTheme(theme) {
    root.dataset.theme = theme;
    if (themeMeta) themeMeta.setAttribute('content', META_COLOURS[theme]);
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(theme === 'dark'));
      toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
    try { localStorage.setItem('digitelos-theme', theme); } catch (e) {}
  }

  if (toggle) {
    // Sync button state with whatever the pre-paint snippet applied.
    if (root.dataset.theme === 'dark') applyTheme('dark');
    toggle.addEventListener('click', function () {
      applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
    });
  }
})();
