// Standalone project archive with direct links to its All projects view.
const list = document.getElementById('project-list');
const filters = document.getElementById('filters');
const dialog = document.getElementById('project-dialog');
const detailMedia = document.getElementById('detail-media');
const detailFigures = document.getElementById('detail-figures');
const videoSwitch = document.getElementById('video-switch');
const hoverPreview = matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches;
const years = [...new Set(PROJECTS.map(p => p.year))].sort((a, b) => b - a);
const params = new URLSearchParams(location.search);
const requestedView = params.get('view');
// ?project=<id> opens that project's detail (video, description, paper links); the id may also be one version of a project.
const requestedProject = params.get('project');
let activeFilter = requestedView === 'all' || requestedProject ? 'all' : 'selected';
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
// Awards and patents of a project: short labels on the card, full wording in the detail.
function honors(project, key) {
  const items = [...(project.awards || []), ...(project.patent ? [project.patent] : [])];
  return items.map(item => element('span', 'honor', item[key]));
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
  const detailHonors = document.getElementById('detail-honors');
  detailHonors.replaceChildren(...honors(project, 'full'));
  detailHonors.hidden = !detailHonors.children.length;
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
  // `videos` lists several clips of one project (e.g. a demo recording and an explainer), switched by buttons under the player;
  // without it the single `video` is shown. The first clip should be the card's `video` (its hover preview is found by name).
  const videos = project.videos || (project.video ? [{ src: project.video }] : []);
  const media = element(videos.length ? 'video' : 'img');
  const playClip = clip => {
    media.poster = clip.poster || project.image;
    media.loop = Boolean(clip.loop);
    media.src = clip.src;
  };
  videoSwitch.replaceChildren();
  videoSwitch.hidden = videos.length < 2;
  if (videos.length) {
    media.controls = true;
    media.playsInline = true;
    media.preload = 'metadata';
    playClip(videos[0]);
    if (videos.length > 1) videos.forEach((clip, index) => {
      const button = element('button', '', clip.label);
      button.type = 'button';
      button.setAttribute('aria-pressed', String(index === 0));
      button.addEventListener('click', () => {
        videoSwitch.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
        playClip(clip);
        media.play().catch(() => {});
      });
      videoSwitch.append(button);
    });
  } else {
    media.src = project.detailImage || project.image;
    media.alt = project.alt || project.title;
  }
  detailMedia.replaceChildren(media);
  // Original figures from the paper, shown under the video (equal heights side by side; stacked on phones).
  const figures = project.paperFigures || [];
  detailFigures.hidden = !figures.length;
  detailFigures.querySelector('.figure-row').replaceChildren(...figures.map(figure => {
    const img = element('img');
    img.src = figure.src;
    img.alt = figure.alt || '';
    img.width = figure.w;
    img.height = figure.h;
    img.loading = 'lazy';
    img.style.flexGrow = String(figure.w / figure.h);
    return img;
  }));
  detailFigures.querySelector('figcaption').textContent = project.paperCaption || '';
  if (videos.length) media.play().catch(() => {});
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
  body.append(title);
  const marks = honors(project, 'short');
  if (marks.length) { const row = element('span', 'card-honors'); row.append(...marks); body.append(row); }
  body.append(element('span', 'card-summary', project.summary));
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
if (requestedProject) {
  const project = PROJECTS.find(p => !p.locked && (p.id === requestedProject || (p.versions || []).some(v => v.id === requestedProject && !v.locked)));
  if (project) {
    openProject(project);
    const index = (project.versions || []).findIndex(v => v.id === requestedProject);
    if (index > 0) document.getElementById('version-tabs').children[index]?.click();
  }
}
