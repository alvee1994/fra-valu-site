/* Hero cursor blob: an organic, squishy shape that stands in for the system
   pointer while it's over the hero. Mouse-only — touch devices keep the
   normal pointer and a static word background. */
(function () {
  var hero = document.querySelector('.hero');
  var blob = document.querySelector('.hero-blob');
  var wordBg = document.querySelector('.hero-word-bg');
  if (!hero || !blob) return;

  if (wordBg) {
    var words = (wordBg.getAttribute('data-words') || '').split(',').filter(Boolean);
    if (words.length) {
      var html = '';
      for (var i = 0; i < 60; i++) html += '<span>' + words[i % words.length] + '</span>';
      wordBg.innerHTML = html;
    }
  }

  var canHover = window.matchMedia('(pointer: fine)').matches;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!canHover || reduceMotion) return;

  var targetX = 0, targetY = 0, curX = 0, curY = 0, active = false, raf = null;

  function onMove(e) {
    var r = hero.getBoundingClientRect();
    targetX = e.clientX - r.left;
    targetY = e.clientY - r.top;
    if (!active) {
      curX = targetX;
      curY = targetY;
      active = true;
      hero.classList.add('has-blob');
      tick();
    }
  }

  function onLeave() {
    active = false;
    hero.classList.remove('has-blob');
    if (raf) cancelAnimationFrame(raf);
    raf = null;
  }

  function tick(time) {
    var dx = targetX - curX;
    var dy = targetY - curY;
    curX += dx * 0.18;
    curY += dy * 0.18;

    var speed = Math.min(Math.hypot(dx, dy), 60);
    var angle = Math.atan2(dy, dx) * (180 / Math.PI);
    var stretch = 1 + speed / 140;
    var squeeze = 1 - speed / 260;

    var t = (time || 0) / 900;
    var r1 = 42 + Math.sin(t) * 8;
    var r2 = 58 - Math.sin(t * 1.3) * 8;
    var r3 = 46 + Math.cos(t * 1.1) * 8;
    var r4 = 54 - Math.cos(t * 0.9) * 8;

    blob.style.borderRadius = r1 + '% ' + (100 - r1) + '% ' + r3 + '% ' + (100 - r3) + '% / ' +
      r2 + '% ' + r4 + '% ' + (100 - r4) + '% ' + (100 - r2) + '%';
    blob.style.transform =
      'translate(' + curX + 'px,' + curY + 'px) rotate(' + angle + 'deg) scale(' + stretch + ',' + squeeze + ')';

    if (active) raf = requestAnimationFrame(tick);
  }

  hero.addEventListener('mousemove', onMove);
  hero.addEventListener('mouseleave', onLeave);
})();
