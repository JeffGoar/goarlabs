// Phone menu: below 820px the header shows the logo and a Menu button; the links open in a panel.
// Without JavaScript the links simply wrap under the logo, as before.
(function () {
  var header = document.querySelector('.site-header');
  var button = header && header.querySelector('.nav-toggle');
  var nav = header && header.querySelector('.site-nav');
  if (!button || !nav) return;
  header.classList.add('has-menu');
  button.hidden = false;
  var label = button.querySelector('.nav-toggle-label');
  function set(open) {
    header.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (label) label.textContent = open ? 'Close' : 'Menu';
  }
  button.addEventListener('click', function () { set(!header.classList.contains('is-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('is-open')) { set(false); button.focus(); }
  });
  document.addEventListener('click', function (e) { if (!header.contains(e.target)) set(false); });
  matchMedia('(min-width: 821px)').addEventListener('change', function (m) { if (m.matches) set(false); });
})();
