// Standalone project archive with direct links to its All projects view.
const list = document.getElementById('project-list');
const filters = document.getElementById('filters');
const dialog = document.getElementById('project-dialog');
const detailMedia = document.getElementById('detail-media');
const hoverPreview = matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches;
const years = [...new Set(PROJECTS.map(p => p.year))].sort((a, b) => b - a);
const requestedView = new URLSearchParams(location.search).get('view');
let activeFilter = requestedView === 'all' ? 'all' : 'selected';
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function stopVideo(video) {
  video.pause();
  video.removeAttribute('src');
  video.load();
}
function showVersion(project) {
  if (project.locked) return;
  detailMedia.querySelectorAll('video').forEach(stopVideo);
  document.getElementById('detail-meta').textContent = `${project.year} · ${project.venue}`;
  document.getElementById('detail-summary').textContent = project.summary;
  document.getElementById('detail-text').replaceChildren(...project.detail.filter(Boolean).map(text => element('p', '', text)));
  document.getElementById('detail-source').textContent = project.source || 'Original research materials';
  const links = project.links.map(link => {
    const a = element('a', '', link.label);
    a.href = link.href;
    a.target = '_blank';
    a.rel = 'noopener';
    return a;
  });
  document.getElementById('detail-links').replaceChildren(...links);
  const media = element(project.video ? 'video' : 'img');
  if (project.video) {
    media.controls = true;
    media.playsInline = true;
    media.poster = project.image;
    media.preload = 'metadata';
    media.src = project.video;
  } else {
    media.src = project.detailImage || project.image;
    media.alt = project.alt || project.title;
  }
  detailMedia.replaceChildren(media);
  if (project.video) media.play().catch(() => {});
}
function openProject(project) {
  if (project.locked) return;
  list.querySelectorAll('video').forEach(v => v.pause());
  document.getElementById('detail-title').textContent = project.title;
  const tabs = document.getElementById('version-tabs');
  const versions = (project.versions || [project]).map(version => version.id === project.id ? { ...project, ...version } : version);
  const publicVersions = versions.filter(version => !version.locked);
  tabs.replaceChildren();
  tabs.hidden = versions.length < 2;
  versions.forEach((version, index) => {
    const button = element('button', version.locked ? 'unpublished-version' : '', version.title);
    button.disabled = Boolean(version.locked);
    if (version.locked) button.setAttribute('aria-label', `${version.title} · ${version.year} · Not yet public`);
    button.type = 'button';
    button.setAttribute('aria-pressed', String(index === 0));
    button.addEventListener('click', () => {
      tabs.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      showVersion(version);
    });
    tabs.append(button);
  });
  dialog.showModal();
  document.body.classList.add('modal-open');
  dialog.scrollTop = 0;
  showVersion(publicVersions[0]);
}
function makeCard(project) {
  const card = element('article', 'project');
  card.dataset.id = project.id;
  card.id = project.id;
  if (project.locked) {
    card.classList.add('is-locked');
    const button = element('button', 'project-button locked-button');
    button.type = 'button';
    button.disabled = true;
    button.setAttribute('aria-label', 'Unpublished project. Details are not yet public.');
    const frame = element('span', 'card-media locked-preview');
    frame.setAttribute('aria-hidden', 'true');
    const skeleton = element('span', 'locked-skeleton');
    for (let i = 0; i < 3; i++) skeleton.append(element('span', 'locked-bar'));
    const overlay = element('span', 'locked-overlay');
    overlay.append(element('span', 'lock-glyph'), element('span', '', 'Not yet public'));
    frame.append(skeleton, overlay);
    const body = element('span', 'card-body');
    body.append(element('span', 'card-venue', String(project.year)), element('h3', '', project.title), element('span', 'card-summary', 'Details will be available after publication.'));
    button.append(frame, body);
    card.append(button);
    return card;
  }
  const button = element('button', 'project-button');
  button.type = 'button';
  button.setAttribute('aria-haspopup', 'dialog');
  const titleId = `title-${project.id}`;
  button.setAttribute('aria-labelledby', titleId);
  const frame = element('span', `card-media${project.video ? '' : ' figure'}`);
  const media = element(project.video ? 'video' : 'img');
  if (project.video) {
    media.poster = project.image;
    media.preload = 'none';
    media.muted = true;
    media.loop = true;
    media.playsInline = true;
    media.setAttribute('aria-hidden', 'true');
    if (hoverPreview) {
      button.addEventListener('mouseenter', () => {
        if (dialog.open) return;
        if (!media.getAttribute('src')) media.src = project.video.replace(/\.mp4$/, '-preview.mp4');
        media.play().catch(() => {});
      });
      button.addEventListener('mouseleave', () => media.pause());
    }
  } else {
    media.src = project.image;
    media.alt = '';
    media.loading = 'lazy';
    media.width = 1200;
    media.height = 675;
  }
  frame.append(media);
  if (project.video) {
    const badge = element('span', 'media-mark');
    badge.append(element('span', 'play-icon'), element('span', '', 'Video'));
    badge.setAttribute('aria-hidden', 'true');
    frame.append(badge);
  }
  const body = element('span', 'card-body');
  body.append(element('span', 'card-venue', project.shortVenue));
  const title = element('h3', '', project.title);
  title.id = titleId;
  body.append(title, element('span', 'card-summary', project.summary));
  const arrow = element('span', 'card-arrow', '↗');
  arrow.setAttribute('aria-hidden', 'true');
  button.append(frame, body, arrow);
  button.addEventListener('click', () => openProject(project));
  card.append(button);
  return card;
}
function render() {
  list.querySelectorAll('video').forEach(stopVideo);
  const visible = PROJECTS.filter(p => activeFilter === 'selected' ? p.selected : activeFilter === 'all' || p.year === Number(activeFilter));
  const groups = activeFilter === 'selected' ? (() => {
    const grid = element('div', 'gallery featured');
    grid.append(...visible.sort((a, b) => a.rank - b.rank).map(makeCard));
    return [grid];
  })() : years.filter(year => visible.some(p => p.year === year)).map(year => {
    const group = element('section', 'year-section');
    group.setAttribute('aria-labelledby', `year-${year}`);
    const title = element('h2', 'year-heading', String(year));
    title.id = `year-${year}`;
    if (year > 2026) title.append(element('small', '', 'Manuscripts under review'));
    const grid = element('div', 'gallery');
    grid.append(...visible.filter(p => p.year === year).sort((a, b) => a.rank - b.rank).map(makeCard));
    group.append(title, grid);
    return group;
  });
  list.replaceChildren(...groups);
  filters.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === activeFilter)));
  document.getElementById('result-count').textContent = `${visible.length} projects`;
}
for (const [value, label] of [['selected', 'Selected'], ['all', 'All projects'], ...years.map(year => [String(year), String(year)])]) {
  const button = element('button', '', label);
  button.type = 'button';
  button.dataset.filter = value;
  button.addEventListener('click', () => { activeFilter = value; render(); });
  filters.append(button);
}
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  detailMedia.querySelectorAll('video').forEach(stopVideo);
  detailMedia.replaceChildren();
  document.body.classList.remove('modal-open');
});
render();
