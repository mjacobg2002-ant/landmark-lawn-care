/* LandMark Lawn Care — homepage interactions */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- year ---- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---- sticky nav state ---- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 40) nav.classList.add('is-solid');
    else nav.classList.remove('is-solid');
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- mobile menu ---- */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobileMenu');
  function closeMenu() {
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });
  menu.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) closeMenu();
  });

  /* ---- services: interactive image-swap + accordion ---- */
  var svcList = document.getElementById('svcList');
  var svcImgs = document.querySelectorAll('#svcMedia img');
  var svcTag = document.getElementById('svcTag');
  if (svcList) {
    var items = Array.prototype.slice.call(svcList.querySelectorAll('.svc'));
    function activate(idx) {
      items.forEach(function (li) {
        var on = +li.dataset.svc === idx;
        li.classList.toggle('open', on);
        li.querySelector('.svc__head').setAttribute('aria-expanded', String(on));
      });
      svcImgs.forEach(function (img) { img.classList.toggle('active', +img.dataset.svc === idx); });
      var active = items.find(function (li) { return +li.dataset.svc === idx; });
      if (svcTag && active) svcTag.textContent = active.querySelector('.svc__title').textContent;
    }
    items.forEach(function (li) {
      var head = li.querySelector('.svc__head');
      var idx = +li.dataset.svc;
      head.addEventListener('click', function () { activate(idx); });
      // desktop: swap image on hover for an editorial feel
      head.addEventListener('mouseenter', function () {
        if (window.innerWidth > 900) activate(idx);
      });
    });
  }

  /* ---- before / after slider ---- */
  var ba = document.getElementById('ba');
  if (ba) {
    var wrap = document.getElementById('baBeforeWrap');
    var handle = document.getElementById('baHandle');
    var range = document.getElementById('baRange');
    function setPos(pct) {
      pct = Math.max(0, Math.min(100, pct));
      wrap.style.clipPath = 'inset(0 ' + (100 - pct) + '% 0 0)';
      handle.style.left = pct + '%';
      range.value = pct;
    }
    range.addEventListener('input', function () { setPos(+range.value); });
    // pointer drag over the stage
    var dragging = false;
    function fromEvent(clientX) {
      var r = ba.getBoundingClientRect();
      setPos(((clientX - r.left) / r.width) * 100);
    }
    ba.addEventListener('pointerdown', function (e) { dragging = true; fromEvent(e.clientX); });
    window.addEventListener('pointermove', function (e) { if (dragging) fromEvent(e.clientX); });
    window.addEventListener('pointerup', function () { dragging = false; });
    setPos(50);
  }

  /* ---- transformation words: lit in sequence ---- */
  var tWords = document.getElementById('tWords');
  if (tWords && !reduce) {
    var spans = tWords.querySelectorAll('span');
    var wi = 0;
    var started = false;
    var tObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && !started) {
          started = true;
          setInterval(function () {
            spans.forEach(function (s, i) { s.classList.toggle('lit', i === wi); });
            wi = (wi + 1) % spans.length;
          }, 900);
        }
      });
    }, { threshold: 0.4 });
    tObserver.observe(tWords);
  } else if (tWords) {
    tWords.querySelectorAll('span').forEach(function (s) { s.classList.add('lit'); });
  }

  /* ---- scroll reveal ---- */
  var reveals = document.querySelectorAll('.reveal:not(.in)');
  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
  } else {
    var ro = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); obs.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { ro.observe(el); });
  }

  /* ---- estimate form (concept) ---- */
  var form = document.getElementById('estimateForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#f-name');
      var phone = form.querySelector('#f-phone');
      var ok = true;
      [name, phone].forEach(function (f) {
        if (!f.value.trim()) { f.style.borderColor = 'var(--rust)'; ok = false; }
        else { f.style.borderColor = ''; }
      });
      if (!ok) return;
      document.getElementById('formFields').style.display = 'none';
      document.getElementById('formSuccess').classList.add('show');
    });
  }
})();
