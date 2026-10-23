// Publications: pick "By year" or "By type", then a tab shows one year (grouped by type) or one type (grouped by year).
// The static HTML lists everything by year; this only re-groups the existing <li> nodes.
const TYPES = { journal: 'Journal', conference: 'Conference', demo: 'Demo', domestic: 'Domestic (JP)', article: 'Article' };
const TYPE_HEADINGS = { ...TYPES, domestic: 'Domestic conference (Japanese)' };
const ORDER = Object.keys(TYPES);
const MAJOR = ['journal', 'conference'];
const MINOR_LABELS = { demo: 'demos', domestic: 'domestic talks', article: 'articles' };
const list = document.getElementById('pubList');
const tabs = document.getElementById('pubTabs');
const pubs = [...list.querySelectorAll('.pub')];
const byYear = (a, b) => b.dataset.year - a.dataset.year;
const byType = (a, b) => ORDER.indexOf(a.dataset.type) - ORDER.indexOf(b.dataset.type);
const groupBy = (items, key) => items.reduce((m, li) => m.set(key(li), [...(m.get(key(li)) || []), li]), new Map());

let mode = 'year';
const show = (tab) => {
  tabs.querySelectorAll('button').forEach((b) => b.setAttribute('aria-selected', b.dataset.k === tab));
  const sub = mode === 'year' ? 'type' : 'year';
  const items = pubs.filter((li) => li.dataset[mode] === tab).sort(sub === 'type' ? byType : byYear);
  const sections = [...groupBy(items, (li) => li.dataset[sub])].map(([k, group]) => {
    const sec = document.createElement('section');
    sec.className = 'group';
    sec.dataset.k = k;
    sec.innerHTML = `<h3>${sub === 'type' ? TYPE_HEADINGS[k] : k} <small>${group.length}</small></h3><ol></ol>`;
    sec.querySelector('ol').append(...group);
    return sec;
  });
  list.replaceChildren(...sections);
  // In a year tab, lead with papers; demos, domestic talks and articles fold behind a button.
  const minor = sections.filter((sec) => sub === 'type' && !MAJOR.includes(sec.dataset.k));
  if (minor.length && minor.length < sections.length) {
    const n = minor.reduce((sum, sec) => sum + sec.querySelectorAll('.pub').length, 0);
    const more = document.createElement('button');
    more.className = 'show-more';
    more.textContent = `Show ${n} more: ${minor.map((sec) => MINOR_LABELS[sec.dataset.k]).join(', ')}`;
    more.addEventListener('click', () => { minor.forEach((sec) => { sec.hidden = false; }); more.remove(); });
    minor.forEach((sec) => { sec.hidden = true; });
    list.append(more);
  }
};
const setMode = (m) => {
  mode = m;
  document.querySelectorAll('.seg button').forEach((b) => b.classList.toggle('on', b.dataset.by === m));
  const groups = groupBy([...pubs].sort(m === 'year' ? byYear : byType), (li) => li.dataset[m]);
  tabs.innerHTML = [...groups].map(([k, g]) =>
    `<button role="tab" data-k="${k}">${m === 'year' ? k : TYPES[k]} <small>${g.length}</small></button>`).join('');
  show(groups.keys().next().value);  // newest year (2026) / Journal
};
document.querySelector('.seg').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) setMode(b.dataset.by); });
tabs.addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) show(b.dataset.k); });
setMode('year');

// Projects gallery: a short muted clip (NAME-preview.mp4) while hovering (mouse only); click opens the full video with sound.
const player = document.getElementById('player');
const playerVideo = player.querySelector('video');
const canHover = matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches;
document.querySelectorAll('.project').forEach((card) => {
  const thumb = card.querySelector('.thumb');
  if (!thumb || card.dataset.locked === 'true') return;
  const preview = thumb.querySelector('video');
  if (!preview) return;
  if (canHover) {
    thumb.addEventListener('mouseenter', () => preview.play().catch(() => {}));
    thumb.addEventListener('mouseleave', () => preview.pause());
  }
  thumb.addEventListener('click', () => {
    preview.pause();
    playerVideo.src = preview.dataset.full;
    playerVideo.poster = preview.getAttribute('poster');
    player.querySelector('.caption').textContent = `${card.querySelector('h3').textContent} · ${card.querySelector('.project-venue').textContent}`;
    player.showModal();
    playerVideo.play().catch(() => {});
  });
});
player.querySelector('.close').addEventListener('click', () => player.close());
player.addEventListener('click', (e) => { if (e.target === player) player.close(); });
player.addEventListener('close', () => { playerVideo.pause(); playerVideo.removeAttribute('src'); playerVideo.load(); });

// Nav: underline the section currently in view
const navLinks = [...document.querySelectorAll('.nav-links a')];
const spy = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (e.isIntersecting) navLinks.forEach((a) => a.classList.toggle('active', a.hash === `#${e.target.id}`));
}), { rootMargin: '-45% 0px -50% 0px' });
navLinks.forEach((a) => { const sec = document.querySelector(a.hash); if (sec) spy.observe(sec); });
