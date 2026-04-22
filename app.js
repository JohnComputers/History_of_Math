// ============================================================================
// CHRONICA MATHEMATICA — APPLICATION LOGIC
// ============================================================================

const app = document.getElementById('app-main');
const navLinks = document.querySelectorAll('nav.main-nav a, .brand');
const searchInput = document.getElementById('search-input');
const searchDropdown = document.getElementById('search-dropdown');

// Update total counter
document.getElementById('counter-total').textContent = MATHEMATICIANS.length;

// ============================================================================
// LOCAL STORAGE — progress tracking
// ============================================================================
const storage = {
  get(key, def) {
    try { return JSON.parse(localStorage.getItem(key)) ?? def; }
    catch { return def; }
  },
  set(key, val) { localStorage.setItem(key, JSON.stringify(val)); },
  // helpers
  favorites: () => storage.get('cm_favorites', []),
  toggleFavorite(id) {
    const favs = storage.favorites();
    const i = favs.indexOf(id);
    if (i >= 0) favs.splice(i, 1); else favs.push(id);
    storage.set('cm_favorites', favs);
    return i < 0;
  },
  mastered: () => storage.get('cm_mastered', []),
  toggleMastered(id) {
    const m = storage.mastered();
    const i = m.indexOf(id);
    if (i >= 0) m.splice(i, 1); else m.push(id);
    storage.set('cm_mastered', m);
    return i < 0;
  },
  quizHistory: () => storage.get('cm_quiz_history', []),
  addQuizResult(mode, score, total) {
    const hist = storage.quizHistory();
    hist.unshift({ mode, score, total, date: new Date().toISOString() });
    if (hist.length > 50) hist.pop();
    storage.set('cm_quiz_history', hist);
    storage.updateStreak();
  },
  streak: () => storage.get('cm_streak', { count: 0, lastDate: null }),
  updateStreak() {
    const now = new Date();
    const today = now.toDateString();
    const s = storage.streak();
    if (s.lastDate === today) return;
    const yest = new Date(now.getTime() - 86400000).toDateString();
    const newCount = (s.lastDate === yest) ? s.count + 1 : 1;
    storage.set('cm_streak', { count: newCount, lastDate: today });
  }
};

// ============================================================================
// UTILS
// ============================================================================
function escapeHtml(s) {
  if (s === null || s === undefined) return '';
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[c]);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom(arr, n) { return shuffle(arr).slice(0, n); }

// Convert "born" field to a year number (negative for BC)
function parseBirthYear(str) {
  if (!str) return null;
  const bc = /BC/i.test(str);
  const match = str.match(/(\d{1,4})/);
  if (!match) return null;
  let year = parseInt(match[1], 10);
  if (bc) year = -year;
  // For strings like "March 18, 1690" take the LAST numeric group
  const all = str.match(/\d+/g);
  if (all && all.length && !bc) {
    year = parseInt(all[all.length - 1], 10);
  } else if (all && all.length && bc) {
    year = -parseInt(all[all.length - 1], 10);
  }
  return year;
}

function formatDates(born, died) {
  const b = born || '?';
  const d = died && died.trim() !== '' ? died : '—';
  return `${b}<span style="color:var(--gilt);margin:0 8px">·</span>${d}`;
}

function renderPage(html) {
  app.innerHTML = html;
  app.classList.remove('page');
  void app.offsetWidth;
  app.classList.add('page');
  window.scrollTo(0, 0);
}

// ============================================================================
// ROUTER
// ============================================================================
function parseRoute() {
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (!hash) return { page: 'home' };
  const parts = hash.split('/');
  const p = parts[0];
  if (p === 'profile') return { page: 'profile', id: parts[1] };
  if (p === 'browse') return { page: 'browse', filter: parts[1] };
  if (p === 'timeline') return { page: 'timeline' };
  if (p === 'topics') return { page: 'topics', field: parts[1] };
  if (p === 'theorems') return { page: 'theorems' };
  if (p === 'quiz') return { page: 'quiz', mode: parts[1] };
  if (p === 'stats') return { page: 'stats' };
  return { page: 'home' };
}

function navigate(hash) {
  window.location.hash = hash;
}

function route() {
  const r = parseRoute();
  // update nav active state
  navLinks.forEach(a => a.classList.remove('active'));
  const activeNav = document.querySelector(`nav.main-nav a[data-route="${r.page}"]`);
  if (activeNav) activeNav.classList.add('active');

  switch (r.page) {
    case 'home': return renderHome();
    case 'browse': return renderBrowse(r.filter);
    case 'profile': return renderProfile(r.id);
    case 'timeline': return renderTimeline();
    case 'topics': return renderTopics(r.field);
    case 'theorems': return renderTheorems();
    case 'quiz': return renderQuiz(r.mode);
    case 'stats': return renderStats();
    default: return renderHome();
  }
}

window.addEventListener('hashchange', route);

// ============================================================================
// HOME
// ============================================================================
function renderHome() {
  const q = FAMOUS_QUOTES[Math.floor(Math.random() * FAMOUS_QUOTES.length)];
  const speakerName = getMathematicianById(q.speaker)?.name || q.speaker;
  const eras = Object.keys(ERA_INFO).length;

  renderPage(`
    <div class="hero">
      <h1><em>Chronica</em> Mathematica</h1>
      <p class="hero-sub">A Study Companion to the History of Mathematics</p>
      <div class="hero-ornament">❦&nbsp;❦&nbsp;❦</div>
      <p class="hero-blurb">
        A private reading-room for the working student: <em>${MATHEMATICIANS.length} mathematicians</em>
        spanning four and a half millennia, each with biography, chief works, key ideas, and anecdotes —
        linked to their contemporaries, indexed by field and era, drilled with flashcards and quizzes
        in the style of competition mathematics.
      </p>
    </div>

    <div class="stats-band">
      <div class="stat">
        <div class="stat-num">${MATHEMATICIANS.length}</div>
        <div class="stat-label">Mathematicians</div>
      </div>
      <div class="stat">
        <div class="stat-num">${eras}</div>
        <div class="stat-label">Historical Eras</div>
      </div>
      <div class="stat">
        <div class="stat-num">${FAMOUS_THEOREMS.length}</div>
        <div class="stat-label">Theorems</div>
      </div>
      <div class="stat">
        <div class="stat-num">${new Set(MATHEMATICIANS.flatMap(m => m.fields || [])).size}</div>
        <div class="stat-label">Fields</div>
      </div>
    </div>

    <div class="home-grid">
      <a class="home-card" href="#/browse">
        <div class="home-card-num">I.</div>
        <h3>Gallery of Mathematicians</h3>
        <p>Browse ${MATHEMATICIANS.length} figures with filtering by era, field, and nationality. Each profile details their life, principal works, key ideas, and memorable anecdotes.</p>
        <span class="home-card-arrow">Enter &rarr;</span>
      </a>
      <a class="home-card" href="#/timeline">
        <div class="home-card-num">II.</div>
        <h3>Chronological Timeline</h3>
        <p>The history of mathematics laid out as a scrollable timeline from Ahmes the Scribe to Terence Tao — grouped by era, ordered by birth.</p>
        <span class="home-card-arrow">Traverse &rarr;</span>
      </a>
      <a class="home-card" href="#/topics">
        <div class="home-card-num">III.</div>
        <h3>Index of Fields</h3>
        <p>Who worked on what. Explore number theory, geometry, algebra, analysis, topology, and a dozen other branches through their practitioners.</p>
        <span class="home-card-arrow">Survey &rarr;</span>
      </a>
      <a class="home-card" href="#/theorems">
        <div class="home-card-num">IV.</div>
        <h3>Compendium of Theorems</h3>
        <p>${FAMOUS_THEOREMS.length} landmark theorems, each linked to its discoverer and its era — from the Pythagorean theorem to the Green-Tao theorem.</p>
        <span class="home-card-arrow">Consult &rarr;</span>
      </a>
      <a class="home-card" href="#/quiz">
        <div class="home-card-num">V.</div>
        <h3>Quiz & Flashcards</h3>
        <p>Test yourself: multiple-choice in the FAMAT style, flashcard drills, matching games, timed rounds, and a daily challenge.</p>
        <span class="home-card-arrow">Challenge &rarr;</span>
      </a>
      <a class="home-card" href="#/stats">
        <div class="home-card-num">VI.</div>
        <h3>Study Progress</h3>
        <p>Your favourites, mastered flashcards, quiz history, and study streak — stored privately in your browser.</p>
        <span class="home-card-arrow">Review &rarr;</span>
      </a>
    </div>

    <div class="home-quote">
      <blockquote>&ldquo;${escapeHtml(q.text)}&rdquo;</blockquote>
      <cite>— ${escapeHtml(speakerName)}</cite>
    </div>
  `);
}

// ============================================================================
// BROWSE
// ============================================================================
let browseState = { era: '', field: '', nationality: '' };

function renderBrowse(filterHint) {
  // derive unique filter options
  const allFields = [...new Set(MATHEMATICIANS.flatMap(m => m.fields || []))].sort();
  const allNations = [...new Set(MATHEMATICIANS.map(m => m.nationality).filter(Boolean))].sort();

  // if filterHint provided (e.g. "topic:algebra") apply
  if (filterHint && filterHint.startsWith('field-')) {
    browseState.field = filterHint.slice(6);
  } else if (filterHint && filterHint.startsWith('era-')) {
    browseState.era = filterHint.slice(4);
  }

  renderPage(`
    <div class="page-title-block">
      <h1>Gallery of <em>Mathematicians</em></h1>
      <p class="page-subtitle">${MATHEMATICIANS.length} figures from antiquity to the present day</p>
    </div>

    <div class="filter-panel">
      <div>
        <label class="filter-label">Era</label>
        <select id="f-era">
          <option value="">All eras</option>
          ${Object.entries(ERA_INFO).map(([k, v]) => `<option value="${k}" ${browseState.era === k ? 'selected' : ''}>${escapeHtml(v.label)} (${escapeHtml(v.range)})</option>`).join('')}
        </select>
      </div>
      <div>
        <label class="filter-label">Field</label>
        <select id="f-field">
          <option value="">All fields</option>
          ${allFields.map(f => `<option value="${escapeHtml(f)}" ${browseState.field === f ? 'selected' : ''}>${escapeHtml(f)}</option>`).join('')}
        </select>
      </div>
      <div>
        <label class="filter-label">Nationality</label>
        <select id="f-nat">
          <option value="">All nationalities</option>
          ${allNations.map(n => `<option value="${escapeHtml(n)}" ${browseState.nationality === n ? 'selected' : ''}>${escapeHtml(n)}</option>`).join('')}
        </select>
      </div>
      <button class="filter-clear" id="f-clear">Clear</button>
    </div>

    <div class="result-count" id="result-count"></div>
    <div class="math-grid" id="math-grid"></div>
  `);

  document.getElementById('f-era').addEventListener('change', e => { browseState.era = e.target.value; updateBrowseGrid(); });
  document.getElementById('f-field').addEventListener('change', e => { browseState.field = e.target.value; updateBrowseGrid(); });
  document.getElementById('f-nat').addEventListener('change', e => { browseState.nationality = e.target.value; updateBrowseGrid(); });
  document.getElementById('f-clear').addEventListener('click', () => {
    browseState = { era: '', field: '', nationality: '' };
    document.getElementById('f-era').value = '';
    document.getElementById('f-field').value = '';
    document.getElementById('f-nat').value = '';
    updateBrowseGrid();
  });

  updateBrowseGrid();
}

function updateBrowseGrid() {
  let filtered = MATHEMATICIANS.slice();
  if (browseState.era) filtered = filtered.filter(m => m.era === browseState.era);
  if (browseState.field) filtered = filtered.filter(m => (m.fields || []).includes(browseState.field));
  if (browseState.nationality) filtered = filtered.filter(m => m.nationality === browseState.nationality);
  // sort by birth year
  filtered.sort((a, b) => (parseBirthYear(a.born) ?? 9999) - (parseBirthYear(b.born) ?? 9999));

  document.getElementById('result-count').textContent = `${filtered.length} ${filtered.length === 1 ? 'figure' : 'figures'} found`;

  const grid = document.getElementById('math-grid');
  if (filtered.length === 0) {
    grid.innerHTML = '<p style="padding:2rem;text-align:center;color:var(--ink-soft);font-style:italic">No mathematicians match these filters.</p>';
    return;
  }

  grid.innerHTML = filtered.map(m => {
    const eraColor = ERA_INFO[m.era]?.color || '#888';
    return `
      <div class="math-card" onclick="navigate('#/profile/${m.id}')">
        <div class="math-card-top">
          <div class="math-card-name">${escapeHtml(m.name)}</div>
          <div class="math-card-dates">${formatDateShort(m.born)}–${formatDateShort(m.died)}</div>
        </div>
        <div class="math-card-nat">${escapeHtml(m.nationality || '')}</div>
        <div class="math-card-short">${escapeHtml(m.short || '')}</div>
        <div class="math-card-fields">
          ${(m.fields || []).slice(0, 4).map(f => `<span class="field-pill">${escapeHtml(f)}</span>`).join('')}
        </div>
        <div class="math-card-era-tag" style="background:${eraColor}">${escapeHtml(ERA_INFO[m.era]?.label || m.era)}</div>
      </div>
    `;
  }).join('');
}

function formatDateShort(dateStr) {
  if (!dateStr || dateStr.trim() === '') return '';
  const bc = /BC/i.test(dateStr);
  const nums = dateStr.match(/\d+/g);
  if (!nums) return '?';
  const year = nums[nums.length - 1];
  return bc ? `${year} BC` : year;
}

// ============================================================================
// PROFILE
// ============================================================================
function renderProfile(id) {
  const m = getMathematicianById(id);
  if (!m) {
    renderPage(`<div class="page-title-block"><h1>Not Found</h1></div><p>No mathematician with that id. <a href="#/browse">Return to gallery</a></p>`);
    return;
  }

  const isFav = storage.favorites().includes(id);
  const isMastered = storage.mastered().includes(id);

  renderPage(`
    <div class="profile">
      <div class="profile-header">
        <a href="#/browse" class="profile-back">&larr; Return to Gallery</a>
        <div class="profile-actions">
          <button class="profile-action-btn ${isFav ? 'active' : ''}" id="btn-fav" title="Favorite">${isFav ? '★ Favourited' : '☆ Favourite'}</button>
          <button class="profile-action-btn ${isMastered ? 'active' : ''}" id="btn-mast" title="Mastered">${isMastered ? '✓ Mastered' : '○ Mark Mastered'}</button>
        </div>
        <h1 class="profile-name">${escapeHtml(m.name)}</h1>
        <div class="profile-dates">${escapeHtml(m.born || '?')} &nbsp;&middot;&nbsp; ${m.died ? escapeHtml(m.died) : 'still living'}</div>
        <div class="profile-meta">
          <span><strong>Nationality:</strong> ${escapeHtml(m.nationality || '—')}</span>
          <span><strong>Fields:</strong> ${(m.fields || []).map(escapeHtml).join(', ') || '—'}</span>
          <span><strong>Era:</strong> ${escapeHtml(ERA_INFO[m.era]?.label || m.era)}</span>
        </div>
        <p class="profile-short">${escapeHtml(m.short || '')}</p>
      </div>

      <div class="profile-section">
        <h3>Life</h3>
        <p class="profile-bio">${escapeHtml(m.bio || '')}</p>
      </div>

      ${(m.keyWorks && m.keyWorks.length) ? `
      <div class="profile-section">
        <h3>Selected Works</h3>
        <ul class="profile-list works">
          ${m.keyWorks.map(w => `<li>${escapeHtml(w)}</li>`).join('')}
        </ul>
      </div>` : ''}

      ${(m.keyIdeas && m.keyIdeas.length) ? `
      <div class="profile-section">
        <h3>Key Ideas &amp; Contributions</h3>
        <ul class="profile-list ideas">
          ${m.keyIdeas.map(i => `<li>${escapeHtml(i)}</li>`).join('')}
        </ul>
      </div>` : ''}

      ${(m.trivia && m.trivia.length) ? `
      <div class="profile-section">
        <h3>Notable Anecdotes</h3>
        <ul class="profile-list trivia">
          ${m.trivia.map(t => `<li>${escapeHtml(t)}</li>`).join('')}
        </ul>
      </div>` : ''}

      ${(m.connections && m.connections.length) ? `
      <div class="profile-section">
        <h3>Contemporaries &amp; Connections</h3>
        <div class="connections-box">
          ${m.connections.map(cid => {
            const c = getMathematicianById(cid);
            return c ? `<a href="#/profile/${cid}" class="connection-chip">${escapeHtml(c.name)}</a>` : '';
          }).join('')}
        </div>
      </div>` : ''}

      ${findRelatedTheorems(m.id).length ? `
      <div class="profile-section">
        <h3>Associated Theorems in This Compendium</h3>
        <ul class="profile-list works">
          ${findRelatedTheorems(m.id).map(t => `<li><strong>${escapeHtml(t.name)}</strong> (${escapeHtml(t.year)}) — ${escapeHtml(t.statement)}</li>`).join('')}
        </ul>
      </div>` : ''}
    </div>
  `);

  document.getElementById('btn-fav').addEventListener('click', () => {
    const added = storage.toggleFavorite(id);
    const btn = document.getElementById('btn-fav');
    btn.classList.toggle('active', added);
    btn.textContent = added ? '★ Favourited' : '☆ Favourite';
  });
  document.getElementById('btn-mast').addEventListener('click', () => {
    const added = storage.toggleMastered(id);
    const btn = document.getElementById('btn-mast');
    btn.classList.toggle('active', added);
    btn.textContent = added ? '✓ Mastered' : '○ Mark Mastered';
  });
}

function findRelatedTheorems(id) {
  return FAMOUS_THEOREMS.filter(t => t.discoverer === id);
}

// ============================================================================
// TIMELINE
// ============================================================================
function renderTimeline() {
  const eraOrder = ['ancient', 'medieval', 'renaissance', 'enlightenment', '19th', '20th', '21st'];
  const byEra = {};
  MATHEMATICIANS.forEach(m => {
    if (!byEra[m.era]) byEra[m.era] = [];
    byEra[m.era].push(m);
  });

  // sort within each era by birth year
  Object.values(byEra).forEach(arr => arr.sort((a, b) => (parseBirthYear(a.born) ?? 9999) - (parseBirthYear(b.born) ?? 9999)));

  const html = `
    <div class="page-title-block">
      <h1>Chronological <em>Timeline</em></h1>
      <p class="page-subtitle">From Ahmes to today — sorted by birth year within each era</p>
    </div>
    <div class="timeline">
      ${eraOrder.map(era => {
        if (!byEra[era]) return '';
        const info = ERA_INFO[era];
        return `
          <div class="timeline-era-header">
            <div class="timeline-era-range">${escapeHtml(info.range)}</div>
            <h2>${escapeHtml(info.label)}</h2>
            <p>${escapeHtml(info.description)}</p>
          </div>
          ${byEra[era].map(m => `
            <div class="timeline-entry">
              <div class="t-year">${formatDateShort(m.born) || '?'}</div>
              <a href="#/profile/${m.id}" class="t-name">${escapeHtml(m.name)}</a>
              <div class="t-desc">${escapeHtml(m.short || '')}</div>
            </div>
          `).join('')}
        `;
      }).join('')}
    </div>
  `;
  renderPage(html);
}

// ============================================================================
// TOPICS / FIELDS
// ============================================================================
function renderTopics(field) {
  if (field) {
    browseState = { era: '', field: field, nationality: '' };
    return renderBrowse(`field-${field}`);
  }

  const fieldCounts = {};
  MATHEMATICIANS.forEach(m => {
    (m.fields || []).forEach(f => {
      if (!fieldCounts[f]) fieldCounts[f] = [];
      fieldCounts[f].push(m);
    });
  });

  const sortedFields = Object.entries(fieldCounts).sort((a, b) => b[1].length - a[1].length);

  renderPage(`
    <div class="page-title-block">
      <h1>Index of <em>Fields</em></h1>
      <p class="page-subtitle">The branches of mathematics and their practitioners, in order of frequency</p>
    </div>
    <div class="topics-grid">
      ${sortedFields.map(([f, mathematicians]) => {
        const sample = mathematicians.slice(0, 5).map(m => m.name).join(', ');
        const more = mathematicians.length > 5 ? `, and <span class="more">${mathematicians.length - 5} more</span>` : '';
        return `
          <div class="topic-card" onclick="navigate('#/topics/${encodeURIComponent(f)}')">
            <h3>${escapeHtml(f)}</h3>
            <span class="topic-count">${mathematicians.length} ${mathematicians.length === 1 ? 'mathematician' : 'mathematicians'}</span>
            <p class="topic-people">${escapeHtml(sample)}${more}</p>
          </div>
        `;
      }).join('')}
    </div>
  `);
}

// ============================================================================
// THEOREMS
// ============================================================================
function renderTheorems() {
  const eraOrder = ['ancient', 'medieval', 'renaissance', 'enlightenment', '19th', '20th', '21st'];
  const byEra = {};
  FAMOUS_THEOREMS.forEach(t => {
    if (!byEra[t.era]) byEra[t.era] = [];
    byEra[t.era].push(t);
  });

  renderPage(`
    <div class="page-title-block">
      <h1>Compendium of <em>Theorems</em></h1>
      <p class="page-subtitle">${FAMOUS_THEOREMS.length} landmark results, arranged chronologically</p>
    </div>

    ${eraOrder.map(era => {
      if (!byEra[era]) return '';
      const info = ERA_INFO[era];
      return `
        <div class="profile-section" style="max-width:900px;margin:0 auto 3rem">
          <h3 style="color:${info.color};border-color:${info.color}">${escapeHtml(info.label)} (${escapeHtml(info.range)})</h3>
          <ul class="profile-list ideas">
            ${byEra[era].map(t => {
              const d = getMathematicianById(t.discoverer);
              return `
                <li>
                  <strong>${escapeHtml(t.name)}</strong>
                  <span style="font-family:var(--small-caps);letter-spacing:0.08em;color:var(--gilt);margin-left:8px">${escapeHtml(t.year)}</span>
                  <div style="margin-top:4px;color:var(--ink)">${escapeHtml(t.statement)}</div>
                  ${d ? `<div style="margin-top:3px;font-size:0.9rem"><em>Discovered by <a href="#/profile/${d.id}">${escapeHtml(d.name)}</a></em></div>` : ''}
                  ${t.note ? `<div style="margin-top:3px;font-size:0.9rem;color:var(--ink-soft);font-style:italic">${escapeHtml(t.note)}</div>` : ''}
                </li>
              `;
            }).join('')}
          </ul>
        </div>
      `;
    }).join('')}
  `);
}

// ============================================================================
// QUIZ — MAIN SELECT PAGE
// ============================================================================
function renderQuiz(mode) {
  if (mode === 'multiple-choice') return renderQuizMultipleChoice();
  if (mode === 'flashcards') return renderQuizFlashcards();
  if (mode === 'matching') return renderQuizMatching();
  if (mode === 'timed') return renderQuizTimed();
  if (mode === 'daily') return renderQuizDaily();

  // default: mode select
  renderPage(`
    <div class="page-title-block">
      <h1>Quiz &amp; <em>Flashcards</em></h1>
      <p class="page-subtitle">Choose your mode of study — each round draws fresh questions from all ${MATHEMATICIANS.length} mathematicians</p>
    </div>

    <div class="quiz-mode-select">
      <a href="#/quiz/multiple-choice" class="quiz-mode-card" style="border-bottom:1px solid var(--rule)">
        <div class="quiz-icon">A)</div>
        <h3>Multiple Choice</h3>
        <p>10 questions in the FAMAT style: dates, works, theorems, contemporaries, nationalities, quotes.</p>
      </a>
      <a href="#/quiz/flashcards" class="quiz-mode-card" style="border-bottom:1px solid var(--rule)">
        <div class="quiz-icon">∞</div>
        <h3>Flashcards</h3>
        <p>Name on the front, everything you should know on the back. Mark as mastered or review later.</p>
      </a>
      <a href="#/quiz/matching" class="quiz-mode-card" style="border-bottom:1px solid var(--rule)">
        <div class="quiz-icon">⇌</div>
        <h3>Matching Game</h3>
        <p>Match 6 mathematicians to their signature discoveries or works. Quick pattern drill.</p>
      </a>
      <a href="#/quiz/timed" class="quiz-mode-card" style="border-bottom:1px solid var(--rule)">
        <div class="quiz-icon">⧗</div>
        <h3>Timed Round</h3>
        <p>60 seconds, rapid-fire. How many can you answer correctly? Best for drilling under pressure.</p>
      </a>
      <a href="#/quiz/daily" class="quiz-mode-card" style="border-bottom:1px solid var(--rule)">
        <div class="quiz-icon">☉</div>
        <h3>Daily Challenge</h3>
        <p>Five questions, same for everyone today, different tomorrow. Build a streak of consecutive days.</p>
      </a>
    </div>
  `);
}

// ============================================================================
// QUIZ QUESTION GENERATORS
// ============================================================================
function generateQuestion() {
  // pick a random question type
  const types = ['works', 'nationality', 'contemporary', 'theorem-statement', 'theorem-person', 'quote', 'born-century', 'idea'];
  const type = types[Math.floor(Math.random() * types.length)];
  switch (type) {
    case 'works': return qWhoWroteWork();
    case 'nationality': return qNationality();
    case 'contemporary': return qContemporary();
    case 'theorem-statement': return qTheoremStatement();
    case 'theorem-person': return qTheoremPerson();
    case 'quote': return qQuote();
    case 'born-century': return qBornCentury();
    case 'idea': return qKeyIdea();
    default: return qWhoWroteWork();
  }
}

function qWhoWroteWork() {
  const withWorks = MATHEMATICIANS.filter(m => m.keyWorks && m.keyWorks.length > 0);
  const m = withWorks[Math.floor(Math.random() * withWorks.length)];
  const work = m.keyWorks[Math.floor(Math.random() * m.keyWorks.length)];
  const distractors = pickRandom(MATHEMATICIANS.filter(x => x.id !== m.id && !(x.fields || []).every(f => !(m.fields || []).includes(f))), 3);
  if (distractors.length < 3) {
    distractors.push(...pickRandom(MATHEMATICIANS.filter(x => x.id !== m.id && !distractors.includes(x)), 3 - distractors.length));
  }
  const choices = shuffle([m, ...distractors]);
  return {
    question: `Who is the author of <em>${escapeHtml(work.replace(/\([^)]+\)$/, '').trim())}</em>?`,
    choices: choices.map(c => c.name),
    correctIndex: choices.indexOf(m),
    context: m.era ? `Era: ${ERA_INFO[m.era]?.label}` : null,
    explanation: `This is one of ${m.name}'s principal works.`
  };
}

function qNationality() {
  const m = MATHEMATICIANS.filter(x => x.nationality)[Math.floor(Math.random() * MATHEMATICIANS.filter(x => x.nationality).length)];
  const allNations = [...new Set(MATHEMATICIANS.map(x => x.nationality).filter(Boolean))];
  const mNat = m.nationality;
  const distractors = pickRandom(allNations.filter(n => n !== mNat), 3);
  const choices = shuffle([mNat, ...distractors]);
  return {
    question: `Of what nationality was <strong>${escapeHtml(m.name)}</strong>?`,
    choices: choices,
    correctIndex: choices.indexOf(mNat),
    explanation: `${m.name} was ${mNat}. ${m.short || ''}`
  };
}

function qContemporary() {
  // pick a person with connections
  const withConn = MATHEMATICIANS.filter(m => m.connections && m.connections.length > 0);
  const m = withConn[Math.floor(Math.random() * withConn.length)];
  const connId = m.connections[Math.floor(Math.random() * m.connections.length)];
  const conn = getMathematicianById(connId);
  if (!conn) return qNationality(); // fallback
  // distractors: 3 mathematicians from different era
  const wrongs = pickRandom(MATHEMATICIANS.filter(x => x.id !== m.id && x.id !== conn.id && x.era !== m.era), 3);
  if (wrongs.length < 3) {
    wrongs.push(...pickRandom(MATHEMATICIANS.filter(x => x.id !== m.id && x.id !== conn.id && !wrongs.includes(x)), 3 - wrongs.length));
  }
  const choices = shuffle([conn, ...wrongs]);
  return {
    question: `Which of the following was a contemporary or direct intellectual connection of <strong>${escapeHtml(m.name)}</strong>?`,
    choices: choices.map(c => c.name),
    correctIndex: choices.indexOf(conn),
    explanation: `${m.name} and ${conn.name} were connected: ${conn.short || ''}`
  };
}

function qTheoremStatement() {
  const t = FAMOUS_THEOREMS[Math.floor(Math.random() * FAMOUS_THEOREMS.length)];
  const d = getMathematicianById(t.discoverer);
  const distractorTheorems = pickRandom(FAMOUS_THEOREMS.filter(x => x.id !== t.id), 3);
  const choices = shuffle([t.statement, ...distractorTheorems.map(x => x.statement)]);
  return {
    question: `Which of the following is the statement of the <strong>${escapeHtml(t.name)}</strong>?`,
    choices: choices,
    correctIndex: choices.indexOf(t.statement),
    explanation: d ? `Stated by ${d.name} in ${t.year}.` : `From ${t.year}.`
  };
}

function qTheoremPerson() {
  const t = FAMOUS_THEOREMS[Math.floor(Math.random() * FAMOUS_THEOREMS.length)];
  const d = getMathematicianById(t.discoverer);
  if (!d) return qTheoremStatement();
  const distractors = pickRandom(MATHEMATICIANS.filter(m => m.id !== d.id), 3);
  const choices = shuffle([d, ...distractors]);
  return {
    question: `Who discovered / proved / stated the <strong>${escapeHtml(t.name)}</strong>?`,
    choices: choices.map(c => c.name),
    correctIndex: choices.indexOf(d),
    context: `The theorem states: "${t.statement}"`,
    explanation: `${d.name} (${t.year}). ${t.note || ''}`
  };
}

function qQuote() {
  const q = FAMOUS_QUOTES[Math.floor(Math.random() * FAMOUS_QUOTES.length)];
  const speaker = getMathematicianById(q.speaker);
  if (!speaker) return qTheoremPerson();
  const distractors = pickRandom(MATHEMATICIANS.filter(m => m.id !== speaker.id), 3);
  const choices = shuffle([speaker, ...distractors]);
  return {
    question: `Who is said to have declared: <em>"${escapeHtml(q.text)}"</em>?`,
    choices: choices.map(c => c.name),
    correctIndex: choices.indexOf(speaker),
    explanation: q.note || `Attributed to ${speaker.name}.`
  };
}

function qBornCentury() {
  const m = MATHEMATICIANS.filter(x => parseBirthYear(x.born))[Math.floor(Math.random() * MATHEMATICIANS.filter(x => parseBirthYear(x.born)).length)];
  const year = parseBirthYear(m.born);
  let correctCentury;
  if (year < 0) {
    correctCentury = `${Math.floor(-year / 100) + 1}th century BC`;
  } else {
    correctCentury = `${Math.floor((year - 1) / 100) + 1}th century`;
  }
  // produce 3 wrong centuries
  const allCenturies = ['5th century BC', '4th century BC', '3rd century BC', '1st century', '5th century', '9th century', '12th century', '15th century', '16th century', '17th century', '18th century', '19th century', '20th century'];
  const distractors = pickRandom(allCenturies.filter(c => c !== correctCentury), 3);
  const choices = shuffle([correctCentury, ...distractors]);
  return {
    question: `In which century was <strong>${escapeHtml(m.name)}</strong> born?`,
    choices,
    correctIndex: choices.indexOf(correctCentury),
    explanation: `${m.name} was born in ${m.born}.`
  };
}

function qKeyIdea() {
  const withIdeas = MATHEMATICIANS.filter(m => m.keyIdeas && m.keyIdeas.length > 0);
  const m = withIdeas[Math.floor(Math.random() * withIdeas.length)];
  const idea = m.keyIdeas[Math.floor(Math.random() * m.keyIdeas.length)];
  const distractors = pickRandom(MATHEMATICIANS.filter(x => x.id !== m.id), 3);
  const choices = shuffle([m, ...distractors]);
  return {
    question: `Which mathematician is associated with the following contribution: <em>"${escapeHtml(idea)}"</em>?`,
    choices: choices.map(c => c.name),
    correctIndex: choices.indexOf(m),
    explanation: `This is one of ${m.name}'s key contributions.`
  };
}

// ============================================================================
// QUIZ — MULTIPLE CHOICE
// ============================================================================
let currentQuiz = null;

function renderQuizMultipleChoice(questionsOverride, modeName, totalOverride) {
  const total = totalOverride || 10;
  const questions = questionsOverride || Array.from({ length: total }, () => generateQuestion());
  currentQuiz = { questions, current: 0, score: 0, review: [], mode: modeName || 'multiple-choice' };
  displayCurrentQuestion();
}

function displayCurrentQuestion() {
  const q = currentQuiz.questions[currentQuiz.current];
  const n = currentQuiz.current + 1;
  const total = currentQuiz.questions.length;

  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  renderPage(`
    <div class="quiz-panel">
      <div class="quiz-header">
        <div class="quiz-progress">Question ${n} of ${total} &middot; Score: ${currentQuiz.score}</div>
        <button class="quiz-exit" onclick="navigate('#/quiz')">Exit</button>
      </div>
      ${q.context ? `<div class="quiz-context">${q.context}</div>` : ''}
      <div class="quiz-question">${q.question}</div>
      <div class="quiz-choices" id="choices">
        ${q.choices.map((c, i) => `
          <button class="quiz-choice" data-idx="${i}">
            <span class="quiz-choice-letter">${letters[i]}</span>
            <span>${escapeHtml(c)}</span>
          </button>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="feedback"></div>
    </div>
  `);

  document.querySelectorAll('#choices .quiz-choice').forEach(btn => {
    btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.idx, 10)));
  });
}

function handleAnswer(idx) {
  const q = currentQuiz.questions[currentQuiz.current];
  const correct = idx === q.correctIndex;
  if (correct) currentQuiz.score++;
  currentQuiz.review.push({ q, chosenIdx: idx, correct });

  document.querySelectorAll('#choices .quiz-choice').forEach((btn, i) => {
    btn.classList.add('disabled');
    if (i === q.correctIndex) btn.classList.add('correct');
    else if (i === idx) btn.classList.add('wrong');
  });

  const feedback = document.getElementById('feedback');
  feedback.classList.add('shown');
  feedback.innerHTML = `
    <strong>${correct ? '✓ Correct.' : '✕ Incorrect.'}</strong>
    The answer is <em>${escapeHtml(q.choices[q.correctIndex])}</em>.
    ${q.explanation ? '<br>' + q.explanation : ''}
    <button class="quiz-next-btn" id="next-btn">${currentQuiz.current + 1 >= currentQuiz.questions.length ? 'See Results' : 'Next Question'}</button>
  `;

  document.getElementById('next-btn').addEventListener('click', nextQuestion);
}

function nextQuestion() {
  currentQuiz.current++;
  if (currentQuiz.current >= currentQuiz.questions.length) {
    showQuizResults();
  } else {
    displayCurrentQuestion();
  }
}

function showQuizResults() {
  const { score, questions, review, mode } = currentQuiz;
  const pct = Math.round(100 * score / questions.length);
  let msg = '';
  if (pct === 100) msg = '<em>Perfectum.</em> A mastery of the material.';
  else if (pct >= 80) msg = '<em>Eruditus.</em> Strong command — very well done.';
  else if (pct >= 60) msg = '<em>Diligens.</em> A solid effort; keep drilling the weaker spots.';
  else if (pct >= 40) msg = '<em>Discens.</em> You are on your way; re-read the relevant profiles.';
  else msg = '<em>Incipiens.</em> Begin by browsing the gallery before trying another quiz.';

  storage.addQuizResult(mode, score, questions.length);

  renderPage(`
    <div class="quiz-panel">
      <div class="quiz-result">
        <div class="quiz-result-score">${score}<span style="font-size:0.45em;color:var(--ink-soft)"> / ${questions.length}</span></div>
        <div class="quiz-result-total">${pct}%</div>
        <div class="quiz-result-msg">${msg}</div>
        <div style="margin-top:2rem">
          <button class="quiz-next-btn" onclick="navigate('#/quiz/${mode}')">Try Again</button>
          <button class="quiz-next-btn" onclick="navigate('#/quiz')" style="background:transparent;color:var(--burgundy);border:1px solid var(--burgundy);margin-left:0.5rem">Other Modes</button>
        </div>
        <div class="quiz-review-list">
          ${review.map((r, i) => `
            <div class="quiz-review-item">
              <span class="rev-mark ${r.correct ? 'correct' : 'wrong'}">${r.correct ? '✓' : '✕'}</span>
              <span class="rev-q">${r.q.question}</span>
              <div class="rev-a">Answer: ${escapeHtml(r.q.choices[r.q.correctIndex])}${r.correct ? '' : ` &middot; You answered: ${escapeHtml(r.q.choices[r.chosenIdx])}`}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `);
}

// ============================================================================
// QUIZ — FLASHCARDS
// ============================================================================
let flashcardDeck = null;
let flashcardIndex = 0;

function renderQuizFlashcards() {
  if (!flashcardDeck || flashcardIndex >= flashcardDeck.length) {
    flashcardDeck = shuffle(MATHEMATICIANS.slice());
    flashcardIndex = 0;
  }
  const m = flashcardDeck[flashcardIndex];
  const isMastered = storage.mastered().includes(m.id);

  renderPage(`
    <div class="quiz-panel" style="padding:1.5rem">
      <div class="quiz-header">
        <div class="quiz-progress">Card ${flashcardIndex + 1} of ${flashcardDeck.length}</div>
        <button class="quiz-exit" onclick="navigate('#/quiz')">Exit</button>
      </div>

      <div class="flashcard-container">
        <div class="flashcard" id="flashcard">
          <div class="flashcard-face flashcard-front">
            <h2>${escapeHtml(m.name)}</h2>
            <div class="fc-dates">${escapeHtml(m.born || '?')} &mdash; ${escapeHtml(m.died || 'present')}</div>
            <div class="fc-nat">${escapeHtml(m.nationality || '')}</div>
            <div class="fc-hint">Click card to flip</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="fc-section">
              <h3>In a sentence</h3>
              <p>${escapeHtml(m.short || '')}</p>
            </div>
            ${(m.keyIdeas && m.keyIdeas.length) ? `
              <div class="fc-section">
                <h3>Key contributions</h3>
                <ul>
                  ${m.keyIdeas.slice(0, 6).map(i => `<li>${escapeHtml(i)}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
            ${(m.keyWorks && m.keyWorks.length) ? `
              <div class="fc-section">
                <h3>Principal works</h3>
                <ul>
                  ${m.keyWorks.slice(0, 4).map(w => `<li>${escapeHtml(w)}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
          </div>
        </div>
      </div>

      <div class="flashcard-controls">
        <button class="flashcard-btn danger" id="fc-review">Review Later</button>
        <button class="flashcard-btn ${isMastered ? 'primary' : 'success'}" id="fc-master">${isMastered ? '✓ Mastered' : 'I Know It'}</button>
        <button class="flashcard-btn primary" id="fc-next">Next →</button>
      </div>

      <div style="text-align:center;margin-top:1rem">
        <a href="#/profile/${m.id}" style="font-family:var(--small-caps);font-size:0.8rem;letter-spacing:0.12em;text-transform:uppercase">View full profile →</a>
      </div>
    </div>
  `);

  const fc = document.getElementById('flashcard');
  fc.addEventListener('click', () => fc.classList.toggle('flipped'));

  document.getElementById('fc-master').addEventListener('click', e => {
    e.stopPropagation();
    storage.toggleMastered(m.id);
    flashcardIndex++;
    renderQuizFlashcards();
  });

  document.getElementById('fc-review').addEventListener('click', e => {
    e.stopPropagation();
    // move this card to later in deck
    flashcardDeck.splice(flashcardIndex + 3, 0, flashcardDeck.splice(flashcardIndex, 1)[0]);
    renderQuizFlashcards();
  });

  document.getElementById('fc-next').addEventListener('click', e => {
    e.stopPropagation();
    flashcardIndex++;
    renderQuizFlashcards();
  });
}

// ============================================================================
// QUIZ — MATCHING GAME
// ============================================================================
let matchingState = null;

function renderQuizMatching() {
  // pick 6 mathematicians with interesting facts
  const withIdeas = MATHEMATICIANS.filter(m => (m.keyIdeas && m.keyIdeas.length > 0) || (m.keyWorks && m.keyWorks.length > 0));
  const chosen = pickRandom(withIdeas, 6);

  const people = chosen.map(m => ({ id: m.id, label: m.name, matchId: m.id }));
  const facts = chosen.map(m => {
    let fact;
    if (m.keyIdeas && m.keyIdeas.length) fact = m.keyIdeas[0];
    else if (m.keyWorks && m.keyWorks.length) fact = m.keyWorks[0];
    else fact = m.short;
    return { id: 'fact-' + m.id, label: fact, matchId: m.id };
  });

  matchingState = {
    people: shuffle(people),
    facts: shuffle(facts),
    selected: null,
    matched: new Set(),
    errors: 0,
    startTime: Date.now()
  };

  drawMatching();
}

function drawMatching() {
  const { people, facts } = matchingState;
  renderPage(`
    <div class="page-title-block">
      <h1>Matching <em>Game</em></h1>
      <p class="page-subtitle">Match each mathematician to their signature discovery</p>
    </div>
    <div class="quiz-header" style="max-width:800px;margin:0 auto 1rem;background:var(--parchment);padding:10px 1rem;border:1px solid var(--rule);border-radius:2px">
      <div class="quiz-progress">Matched: ${matchingState.matched.size / 2} of 6 &middot; Errors: ${matchingState.errors}</div>
      <button class="quiz-exit" onclick="navigate('#/quiz')">Exit</button>
    </div>
    <div class="matching-grid">
      <div style="display:flex;flex-direction:column;gap:0.6rem">
        ${people.map(p => `
          <div class="match-tile person ${matchingState.matched.has(p.id) ? 'matched' : ''}" data-tile-id="${p.id}" data-match="${p.matchId}">${escapeHtml(p.label)}</div>
        `).join('')}
      </div>
      <div style="display:flex;flex-direction:column;gap:0.6rem">
        ${facts.map(f => `
          <div class="match-tile fact ${matchingState.matched.has(f.id) ? 'matched' : ''}" data-tile-id="${f.id}" data-match="${f.matchId}">${escapeHtml(f.label)}</div>
        `).join('')}
      </div>
    </div>
  `);

  document.querySelectorAll('.match-tile').forEach(tile => {
    tile.addEventListener('click', () => handleMatchClick(tile));
  });
}

function handleMatchClick(tile) {
  if (tile.classList.contains('matched')) return;
  const tileId = tile.dataset.tileId;
  const matchId = tile.dataset.match;

  if (!matchingState.selected) {
    // first pick
    document.querySelectorAll('.match-tile.selected').forEach(t => t.classList.remove('selected'));
    tile.classList.add('selected');
    matchingState.selected = { tileId, matchId, elem: tile };
    return;
  }

  // check if they match
  if (matchingState.selected.tileId === tileId) {
    // deselect
    tile.classList.remove('selected');
    matchingState.selected = null;
    return;
  }

  if (matchingState.selected.matchId === matchId) {
    tile.classList.add('matched');
    matchingState.selected.elem.classList.add('matched');
    matchingState.selected.elem.classList.remove('selected');
    matchingState.matched.add(tileId);
    matchingState.matched.add(matchingState.selected.tileId);
    matchingState.selected = null;
    // update status bar
    const progress = document.querySelector('.quiz-progress');
    if (progress) progress.textContent = `Matched: ${matchingState.matched.size / 2} of 6 · Errors: ${matchingState.errors}`;

    if (matchingState.matched.size === 12) {
      setTimeout(() => showMatchingResults(), 600);
    }
  } else {
    // wrong
    matchingState.errors++;
    tile.classList.add('wrong');
    matchingState.selected.elem.classList.add('wrong');
    const sel = matchingState.selected;
    setTimeout(() => {
      tile.classList.remove('wrong');
      sel.elem.classList.remove('wrong', 'selected');
      matchingState.selected = null;
      const progress = document.querySelector('.quiz-progress');
      if (progress) progress.textContent = `Matched: ${matchingState.matched.size / 2} of 6 · Errors: ${matchingState.errors}`;
    }, 500);
  }
}

function showMatchingResults() {
  const elapsed = Math.round((Date.now() - matchingState.startTime) / 1000);
  const errors = matchingState.errors;
  const perfect = errors === 0;

  storage.addQuizResult('matching', Math.max(0, 6 - errors), 6);

  renderPage(`
    <div class="quiz-panel">
      <div class="quiz-result">
        <div class="quiz-result-score">${elapsed}s</div>
        <div class="quiz-result-total">${errors} ${errors === 1 ? 'error' : 'errors'}</div>
        <div class="quiz-result-msg">
          ${perfect ? '<em>Perfectum.</em> Six matches without an error.' : errors < 3 ? '<em>Bene factum.</em> A minor stumble or two.' : '<em>Incipiens.</em> Review the profiles of those you missed.'}
        </div>
        <div style="margin-top:2rem">
          <button class="quiz-next-btn" onclick="navigate('#/quiz/matching')">New Round</button>
          <button class="quiz-next-btn" onclick="navigate('#/quiz')" style="background:transparent;color:var(--burgundy);border:1px solid var(--burgundy);margin-left:0.5rem">Other Modes</button>
        </div>
      </div>
    </div>
  `);
}

// ============================================================================
// QUIZ — TIMED ROUND
// ============================================================================
let timedState = null;

function renderQuizTimed() {
  timedState = {
    score: 0,
    answered: 0,
    timeLeft: 60,
    review: [],
    startTime: Date.now(),
    timerId: null
  };

  nextTimedQuestion();

  timedState.timerId = setInterval(() => {
    timedState.timeLeft--;
    const timerEl = document.getElementById('timed-timer');
    if (timerEl) timerEl.textContent = `⧗ ${timedState.timeLeft}s`;
    if (timedState.timeLeft <= 0) {
      clearInterval(timedState.timerId);
      showTimedResults();
    }
  }, 1000);
}

function nextTimedQuestion() {
  if (!timedState || timedState.timeLeft <= 0) return;
  const q = generateQuestion();
  timedState.currentQ = q;

  const letters = ['A', 'B', 'C', 'D'];
  renderPage(`
    <div class="quiz-panel">
      <div class="quiz-header">
        <div class="quiz-progress">Answered ${timedState.answered} &middot; Score ${timedState.score}</div>
        <div class="quiz-timer" id="timed-timer">⧗ ${timedState.timeLeft}s</div>
        <button class="quiz-exit" onclick="exitTimed()">Exit</button>
      </div>
      ${q.context ? `<div class="quiz-context">${q.context}</div>` : ''}
      <div class="quiz-question">${q.question}</div>
      <div class="quiz-choices" id="timed-choices">
        ${q.choices.map((c, i) => `
          <button class="quiz-choice" data-idx="${i}">
            <span class="quiz-choice-letter">${letters[i]}</span>
            <span>${escapeHtml(c)}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `);

  document.querySelectorAll('#timed-choices .quiz-choice').forEach(btn => {
    btn.addEventListener('click', () => handleTimedAnswer(parseInt(btn.dataset.idx, 10)));
  });
}

function handleTimedAnswer(idx) {
  const q = timedState.currentQ;
  const correct = idx === q.correctIndex;
  if (correct) timedState.score++;
  timedState.answered++;
  timedState.review.push({ q, chosenIdx: idx, correct });

  // brief flash
  document.querySelectorAll('#timed-choices .quiz-choice').forEach((btn, i) => {
    btn.classList.add('disabled');
    if (i === q.correctIndex) btn.classList.add('correct');
    else if (i === idx) btn.classList.add('wrong');
  });

  setTimeout(() => nextTimedQuestion(), 450);
}

function exitTimed() {
  if (timedState && timedState.timerId) clearInterval(timedState.timerId);
  navigate('#/quiz');
}

function showTimedResults() {
  const { score, answered, review } = timedState;
  storage.addQuizResult('timed', score, answered);

  renderPage(`
    <div class="quiz-panel">
      <div class="quiz-result">
        <div class="quiz-result-score">${score}</div>
        <div class="quiz-result-total">in 60 seconds &middot; ${answered} answered</div>
        <div class="quiz-result-msg">
          ${score >= 15 ? '<em>Extraordinarium.</em>' : score >= 10 ? '<em>Velox.</em> Strong pace.' : score >= 5 ? '<em>Discens.</em> Keep drilling.' : '<em>Incipiens.</em> Read a few profiles and try again.'}
        </div>
        <div style="margin-top:2rem">
          <button class="quiz-next-btn" onclick="navigate('#/quiz/timed')">Another Round</button>
          <button class="quiz-next-btn" onclick="navigate('#/quiz')" style="background:transparent;color:var(--burgundy);border:1px solid var(--burgundy);margin-left:0.5rem">Other Modes</button>
        </div>
        ${review.length ? `
          <div class="quiz-review-list">
            ${review.slice(0, 20).map(r => `
              <div class="quiz-review-item">
                <span class="rev-mark ${r.correct ? 'correct' : 'wrong'}">${r.correct ? '✓' : '✕'}</span>
                <span class="rev-q">${r.q.question}</span>
                <div class="rev-a">Answer: ${escapeHtml(r.q.choices[r.q.correctIndex])}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    </div>
  `);
}

// ============================================================================
// QUIZ — DAILY CHALLENGE
// ============================================================================
function renderQuizDaily() {
  // seeded random based on date
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const prng = mulberry32(seed);

  // generate 5 deterministic questions
  const prevRandom = Math.random;
  Math.random = prng;
  const questions = Array.from({ length: 5 }, () => generateQuestion());
  Math.random = prevRandom;

  renderQuizMultipleChoice(questions, 'daily', 5);
}

function mulberry32(seed) {
  return function() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ============================================================================
// STATS PAGE
// ============================================================================
function renderStats() {
  const favs = storage.favorites();
  const mastered = storage.mastered();
  const hist = storage.quizHistory();
  const streak = storage.streak();

  // compute stats
  const totalQuizzes = hist.length;
  const totalCorrect = hist.reduce((s, h) => s + h.score, 0);
  const totalAnswered = hist.reduce((s, h) => s + h.total, 0);
  const accuracy = totalAnswered > 0 ? Math.round(100 * totalCorrect / totalAnswered) : 0;

  const byMode = {};
  hist.forEach(h => { byMode[h.mode] = (byMode[h.mode] || 0) + 1; });

  renderPage(`
    <div class="page-title-block">
      <h1>Study <em>Progress</em></h1>
      <p class="page-subtitle">Your reading, your mastered cards, your quiz record — stored locally in this browser</p>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;margin-bottom:2rem">
      <div class="stats-card">
        <h3>Overview</h3>
        <div class="stats-row"><span>Mathematicians mastered</span><strong>${mastered.length} / ${MATHEMATICIANS.length}</strong></div>
        <div class="stats-row"><span>Favourites</span><strong>${favs.length}</strong></div>
        <div class="stats-row"><span>Quizzes completed</span><strong>${totalQuizzes}</strong></div>
        <div class="stats-row"><span>Overall accuracy</span><strong>${accuracy}%</strong></div>
        <div class="stats-row"><span>Current day streak</span><strong>${streak.count} ${streak.count === 1 ? 'day' : 'days'}</strong></div>
      </div>

      <div class="stats-card">
        <h3>Quiz modes played</h3>
        ${Object.entries(byMode).length ? Object.entries(byMode).map(([mode, count]) => `
          <div class="stats-row"><span>${escapeHtml(mode)}</span><strong>${count}</strong></div>
        `).join('') : '<p style="color:var(--ink-soft);font-style:italic">No quizzes played yet.</p>'}
      </div>

      <div class="stats-card">
        <h3>Recent quiz results</h3>
        ${hist.length ? hist.slice(0, 8).map(h => {
          const date = new Date(h.date);
          return `<div class="stats-row"><span>${escapeHtml(h.mode)} &middot; <span style="font-size:0.8rem;color:var(--gilt)">${date.toLocaleDateString()}</span></span><strong>${h.score}/${h.total}</strong></div>`;
        }).join('') : '<p style="color:var(--ink-soft);font-style:italic">No results yet. <a href="#/quiz">Take a quiz.</a></p>'}
      </div>
    </div>

    ${favs.length ? `
      <div class="profile-section" style="max-width:900px;margin:0 auto">
        <h3>Your Favourites</h3>
        <div class="connections-box">
          ${favs.map(id => {
            const m = getMathematicianById(id);
            return m ? `<a href="#/profile/${id}" class="connection-chip">${escapeHtml(m.name)}</a>` : '';
          }).join('')}
        </div>
      </div>
    ` : ''}

    ${mastered.length ? `
      <div class="profile-section" style="max-width:900px;margin:0 auto">
        <h3>Mastered</h3>
        <div class="connections-box">
          ${mastered.map(id => {
            const m = getMathematicianById(id);
            return m ? `<a href="#/profile/${id}" class="connection-chip">${escapeHtml(m.name)}</a>` : '';
          }).join('')}
        </div>
      </div>
    ` : ''}

    <div style="text-align:center;margin-top:3rem">
      <button class="filter-clear" onclick="if(confirm('Really reset all your study progress? This cannot be undone.')) { localStorage.clear(); renderStats(); }">Reset all progress</button>
    </div>
  `);
}

// ============================================================================
// SEARCH
// ============================================================================
function performSearch(query) {
  query = query.toLowerCase().trim();
  if (!query) return [];

  const results = [];

  MATHEMATICIANS.forEach(m => {
    let score = 0;
    const name = m.name.toLowerCase();
    if (name === query) score = 100;
    else if (name.startsWith(query)) score = 50;
    else if (name.includes(query)) score = 30;
    else if ((m.nationality || '').toLowerCase().includes(query)) score = 10;
    else if ((m.short || '').toLowerCase().includes(query)) score = 8;
    else if ((m.fields || []).some(f => f.toLowerCase().includes(query))) score = 6;
    else if ((m.keyIdeas || []).some(i => i.toLowerCase().includes(query))) score = 5;
    else if ((m.keyWorks || []).some(w => w.toLowerCase().includes(query))) score = 5;
    else if ((m.bio || '').toLowerCase().includes(query)) score = 3;

    if (score > 0) results.push({ m, score, type: 'person' });
  });

  // theorems
  FAMOUS_THEOREMS.forEach(t => {
    let score = 0;
    if (t.name.toLowerCase().includes(query)) score = 20;
    else if (t.statement.toLowerCase().includes(query)) score = 8;
    if (score > 0) results.push({ t, score, type: 'theorem' });
  });

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, 10);
}

searchInput.addEventListener('input', e => {
  const results = performSearch(e.target.value);
  if (!results.length) {
    searchDropdown.classList.remove('active');
    searchDropdown.innerHTML = '';
    return;
  }
  searchDropdown.classList.add('active');
  searchDropdown.innerHTML = results.map(r => {
    if (r.type === 'person') {
      return `<div class="search-result-item" onclick="navigate('#/profile/${r.m.id}');clearSearch()">
        <div class="res-name">${escapeHtml(r.m.name)}</div>
        <div class="res-dates">${escapeHtml(r.m.born || '?')} &mdash; ${escapeHtml(r.m.died || 'present')} &middot; ${escapeHtml(r.m.nationality || '')}</div>
      </div>`;
    } else {
      const d = getMathematicianById(r.t.discoverer);
      return `<div class="search-result-item" onclick="navigate('#/theorems');clearSearch()">
        <div class="res-name">${escapeHtml(r.t.name)}</div>
        <div class="res-dates">Theorem${d ? ' &middot; ' + escapeHtml(d.name) : ''} &middot; ${escapeHtml(r.t.year)}</div>
      </div>`;
    }
  }).join('');
});

function clearSearch() {
  searchInput.value = '';
  searchDropdown.classList.remove('active');
  searchDropdown.innerHTML = '';
}

// close search on outside click
document.addEventListener('click', e => {
  if (!e.target.closest('.search-box')) {
    searchDropdown.classList.remove('active');
  }
});

// expose navigate, renderStats, clearSearch globally
window.navigate = navigate;
window.renderStats = renderStats;
window.clearSearch = clearSearch;
window.exitTimed = exitTimed;

// ============================================================================
// BOOT
// ============================================================================
route();
