// Thermal field: soft cool/warm blobs drift across the background; the pointer adds a warm spot.
(() => {
  const canvas = document.getElementById('thermal');
  const ctx = canvas.getContext('2d');
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const blobs = [
    { x: .15, y: .2, r: .45, c: [76, 195, 255], s: .00012 },
    { x: .85, y: .15, r: .4, c: [255, 106, 61], s: .00015 },
    { x: .6, y: .75, r: .5, c: [180, 156, 255], s: .0001 },
    { x: .2, y: .85, r: .35, c: [255, 179, 71], s: .00018 },
  ];
  const pointer = { x: -1, y: -1, tx: -1, ty: -1 };
  let w, h, dpr;
  const resize = () => {
    dpr = Math.min(devicePixelRatio || 1, 1.5);
    w = canvas.width = innerWidth * dpr;
    h = canvas.height = innerHeight * dpr;
  };
  resize();
  addEventListener('resize', resize);
  addEventListener('pointermove', (e) => { pointer.tx = e.clientX * dpr; pointer.ty = e.clientY * dpr; });
  const draw = (t) => {
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';
    for (const b of blobs) {
      const x = (b.x + Math.sin(t * b.s + b.r * 10) * .08) * w;
      const y = (b.y + Math.cos(t * b.s * 1.3 + b.x * 10) * .08) * h;
      const r = b.r * Math.max(w, h);
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${b.c},.22)`);
      g.addColorStop(1, `rgba(${b.c},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    }
    if (pointer.tx >= 0) {
      if (pointer.x < 0) { pointer.x = pointer.tx; pointer.y = pointer.ty; }
      pointer.x += (pointer.tx - pointer.x) * .08;
      pointer.y += (pointer.ty - pointer.y) * .08;
      const r = 260 * dpr;
      const g = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, r);
      g.addColorStop(0, 'rgba(255,120,70,.28)');
      g.addColorStop(.5, 'rgba(255,90,60,.08)');
      g.addColorStop(1, 'rgba(255,90,60,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    }
    ctx.globalCompositeOperation = 'source-over';
    if (!still) requestAnimationFrame(draw);
  };
  requestAnimationFrame(draw);
})();

// Publication filters: view (selected/all) × direction × type
const pubState = { view: 'selected', theme: '*', type: '*' };
const applyPubFilters = () => {
  let shown = 0;
  document.querySelectorAll('#pubList .pub').forEach((li) => {
    const ok = (pubState.view === 'all' || li.dataset.selected)
      && (pubState.theme === '*' || li.dataset.theme === pubState.theme)
      && (pubState.type === '*' || li.dataset.type === pubState.type);
    li.hidden = !ok; if (ok) shown++;
  });
  document.getElementById('pubEmpty').hidden = shown > 0;
};
document.querySelectorAll('.fgroup').forEach((g) => g.addEventListener('click', (e) => {
  const btn = e.target.closest('button'); if (!btn) return;
  g.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b === btn));
  pubState[g.dataset.group] = btn.dataset.v;
  // Picking a direction or type implies browsing everything
  if (g.dataset.group !== 'view' && btn.dataset.v !== '*' && pubState.view === 'selected') {
    pubState.view = 'all';
    document.querySelectorAll('[data-group=view] button').forEach((b) => b.classList.toggle('on', b.dataset.v === 'all'));
  }
  applyPubFilters();
}));
applyPubFilters();

// Count-up stats (target captured up front; the static HTML already shows the final value)
document.querySelectorAll('[data-count]').forEach((el) => {
  const end = +el.dataset.count;
  if (!Number.isFinite(end)) return;
  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    io.disconnect();
    const t0 = performance.now();
    const step = (t) => { const p = Math.min(1, (t - t0) / 900); el.textContent = Math.round(end * (1 - (1 - p) ** 3)); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }, { threshold: .6 });
  io.observe(el);
});

// Reveal on scroll
const revealEls = document.querySelectorAll('.block-head, .core, .pillar, .pipeline li, .trajectory > li, .next li, .feature, .contact-card, .stats');
revealEls.forEach((el) => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12 });
revealEls.forEach((el) => io.observe(el));
