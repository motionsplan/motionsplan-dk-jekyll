---
layout: single
title: 🧠 Dagens Repetition & Flashcards
permalink: /repetition/
classes: wide
sitemap: false
---

<style>
  /* DASHBOARD FULL WIDTH STYLING */
  .mp-dashboard-container {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    font-family: inherit;
    box-sizing: border-box;
  }

  /* Stats Grid */
  .mp-stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-bottom: 2rem;
  }
  .mp-stat-card {
    background: #ffffff;
    border: 1.5px solid #e2e8f0;
    border-radius: 14px;
    padding: 1.25rem 1rem;
    text-align: center;
    box-shadow: 0 2px 6px rgba(0,0,0,0.02);
    transition: transform 0.15s ease;
  }
  .mp-stat-card:hover {
    transform: translateY(-2px);
  }
  .mp-stat-number {
    font-size: 2.2rem;
    font-weight: 800;
    color: #0f172a;
    line-height: 1.1;
  }
  .mp-stat-label {
    font-size: 0.88rem;
    color: #64748b;
    font-weight: 600;
    margin-top: 4px;
  }

  /* Aktiv Filter Banner over stakken */
  .mp-active-filter-banner {
    background: #eff6ff;
    border: 1px solid #bfdbfe;
    color: #1e40af;
    border-radius: 12px;
    padding: 10px 16px;
    margin: 0 auto 1.5rem auto;
    max-width: 580px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.9rem;
  }
  .mp-btn-reset-filter {
    background: #ffffff;
    color: #2563eb;
    border: 1px solid #93c5fd;
    padding: 4px 12px;
    border-radius: 6px;
    font-weight: 700;
    font-size: 0.82rem;
    cursor: pointer;
    transition: all 0.15s ease;
  }
  .mp-btn-reset-filter:hover {
    background: #2563eb;
    color: #ffffff;
  }

  /* Kort kilde-meta */
  .mp-source-meta {
    font-size: 0.9rem;
    color: #64748b;
    margin-bottom: 10px;
    padding: 0 4px;
  }
  .mp-source-meta a {
    color: #2563eb;
    font-weight: 600;
    text-decoration: underline;
  }

  /* Overskrifter */
  .mp-section-header {
    margin: 3rem 0 1.25rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .mp-section-title {
    font-size: 1.35rem;
    font-weight: 800;
    color: #0f172a;
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0;
  }

  /* ARTIKEL OVERSIGT (GRID AF KORT) */
  .mp-article-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
    margin-bottom: 3rem;
  }
  .mp-article-card {
    background: #ffffff;
    border: 1.5px solid #e2e8f0;
    border-radius: 14px;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.2s ease;
    box-shadow: 0 2px 5px rgba(0,0,0,0.03);
  }
  .mp-article-card:hover {
    border-color: #cbd5e1;
    box-shadow: 0 4px 14px rgba(0,0,0,0.06);
  }
  .mp-article-card.is-active-filter {
    border-color: #2563eb;
    background: #f8fafc;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
  }
  .mp-article-card-title {
    font-weight: 700;
    font-size: 1rem;
    color: #0f172a;
    margin-bottom: 0.75rem;
    line-height: 1.4;
  }
  .mp-article-card-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    padding-top: 0.75rem;
    border-top: 1px solid #f1f5f9;
  }
  .mp-badge-due {
    background: #dcfce7;
    color: #15803d;
    padding: 4px 10px;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.8rem;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  .mp-badge-waiting {
    background: #f1f5f9;
    color: #475569;
    padding: 4px 10px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 0.8rem;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  .mp-btn-study-article {
    background: #2563eb;
    color: #ffffff;
    border: none;
    padding: 6px 14px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 0.85rem;
    cursor: pointer;
    transition: background 0.15s ease;
  }
  .mp-btn-study-article:hover {
    background: #1d4ed8;
  }

  /* DEN FULDSTÆNDIGE STAK (ACCORDION & TABEL STYRING) */
  details.mp-accordion {
    background: #ffffff;
    border: 1.5px solid #e2e8f0;
    border-radius: 14px;
    padding: 1rem 1.25rem;
    margin-top: 2rem;
    box-shadow: 0 2px 6px rgba(0,0,0,0.02);
  }
  details.mp-accordion summary {
    font-weight: 700;
    font-size: 1.05rem;
    color: #1e293b;
    cursor: pointer;
    user-select: none;
  }
  .mp-table-wrapper {
    overflow-x: auto;
    margin-top: 1rem;
    border-radius: 10px;
    border: 1px solid #f1f5f9;
  }
  .mp-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    font-size: 0.88rem;
    line-height: 1.35;
  }
  .mp-table th {
    background: #f8fafc;
    color: #475569;
    font-weight: 700;
    padding: 10px 14px;
    border-bottom: 2px solid #e2e8f0;
    white-space: nowrap;
  }
  .mp-table td {
    padding: 10px 14px;
    border-bottom: 1px solid #f1f5f9;
    color: #334155;
    vertical-align: middle;
  }
  .mp-table td p {
    margin: 0 !important;
    padding: 0 !important;
  }
  .mp-table tr:last-child td {
    border-bottom: none;
  }
  .mp-table tr:hover td {
    background: #f8fafc;
  }
  .mp-table-link {
    color: #2563eb;
    font-weight: 600;
    text-decoration: none;
    display: inline-block;
    max-width: 280px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
  }
  .mp-table-link:hover {
    text-decoration: underline;
  }
</style>

<div class="mp-dashboard-container">
  
  <!-- OVERROUNDE STATS -->
  <div class="mp-stats-grid">
    <div class="mp-stat-card">
      <div id="stat-due-count" class="mp-stat-number">0</div>
      <div class="mp-stat-label">🔴 Klar til repetition nu</div>
    </div>
    <div class="mp-stat-card">
      <div id="stat-total-count" class="mp-stat-number">0</div>
      <div class="mp-stat-label">📚 Gemte kort i alt</div>
    </div>
    <div class="mp-stat-card">
      <div id="stat-articles-count" class="mp-stat-number">0</div>
      <div class="mp-stat-label">📄 Forskellige artikler</div>
    </div>
  </div>

  <!-- AKTIV FILTER BANNER -->
  <div id="mp-active-filter-banner" class="mp-active-filter-banner" style="display: none;">
    <div>📌 Viser kun repetition for: <strong id="mp-filter-article-title"></strong></div>
    <button type="button" class="mp-btn-reset-filter" onclick="resetArticleFilter()">Vis alle kort</button>
  </div>

  <!-- AKTIV REPETITIONS-STAK (SPILLER) -->
  <div id="mp-repetition-app">
    <div class="mp-repetition-loading" style="text-align: center; padding: 2.5rem; color: #64748b;">
      <p>⏳ Henter dine repetitioner...</p>
    </div>
  </div>

  <!-- SEKTION 1: KORT-GRID OVER ARTIKLER DER HAR KORT KLAR -->
  <div class="mp-section-header">
    <h3 class="mp-section-title">📊 Artikler med klar til repetition</h3>
  </div>
  <div id="mp-article-grid" class="mp-article-grid">
    <!-- Genereres dynamisk af JavaScript -->
  </div>

  <!-- SEKTION 2: DEN FULDSTÆNDIGE STAK (ACCORDION INVENTORY) -->
  <details class="mp-accordion">
    <summary>🗃️ Se den fulde stak af alle gemte kort (inkl. fremtidige repetitioner)</summary>
    <div class="mp-table-wrapper">
      <table class="mp-table">
        <thead>
          <tr>
            <th style="width: 45%;">Spørgsmål</th>
            <th style="width: 30%;">Kilde / Artikel</th>
            <th style="width: 15%; white-space: nowrap;">Status / Næste tjek</th>
            <th style="width: 10%; text-align: center;">Reps</th>
          </tr>
        </thead>
        <tbody id="mp-full-stack-table-body">
          <tr><td colspan="4" style="text-align:center;">Ingen kort gemt endnu</td></tr>
        </tbody>
      </table>
    </div>
  </details>

</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'motionsplan_flashcards';
  const container = document.getElementById('mp-repetition-app');
  let activeFilterUrl = 'all';

  function getStoredData() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch (e) { return {}; }
  }

  function saveData(data) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
    catch (e) {}
  }

  function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.innerText = text;
    return div.innerHTML;
  }

  function calculateSM2(card, rating) {
    let ease = card.ease || 2.5;
    let reps = card.reps || 0;
    let interval = card.interval || 0;
    const nextReview = new Date();

    if (rating === 'hard') {
      reps = 0;
      interval = 0;
      ease = Math.max(1.3, ease - 0.2);
      nextReview.setMinutes(nextReview.getMinutes() + 10);
    } else if (rating === 'good') {
      reps += 1;
      interval = reps === 1 ? 1 : reps === 2 ? 6 : Math.round(interval * ease);
      nextReview.setDate(nextReview.getDate() + interval);
    } else if (rating === 'easy') {
      reps += 1;
      interval = reps === 1 ? 4 : Math.round(interval * ease * 1.3);
      ease += 0.15;
      nextReview.setDate(nextReview.getDate() + interval);
    }

    return { ease: parseFloat(ease.toFixed(2)), reps, interval, nextReview: nextReview.toISOString() };
  }

  window.resetArticleFilter = function() {
    activeFilterUrl = 'all';
    renderDashboard();
  };

  window.filterByUrl = function(url) {
    activeFilterUrl = url;
    renderDashboard();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function updateBackgroundStats() {
    const allData = getStoredData();
    const cardsArray = Object.values(allData);
    const now = new Date();

    const dueCardsAll = cardsArray.filter(card => !card.nextReview || new Date(card.nextReview) <= now);
    
    const urlGroups = {};
    cardsArray.forEach(card => {
      const u = card.url || 'Ukendt artikel';
      if (!urlGroups[u]) urlGroups[u] = { title: card.title || 'Artikel uden titel', total: 0, due: 0, url: u };
      urlGroups[u].total++;
      if (!card.nextReview || new Date(card.nextReview) <= now) {
        urlGroups[u].due++;
      }
    });

    document.getElementById('stat-due-count').textContent = dueCardsAll.length;
    document.getElementById('stat-total-count').textContent = cardsArray.length;
    document.getElementById('stat-articles-count').textContent = Object.keys(urlGroups).length;

    // Opdater Artikel-Grid
    const gridContainer = document.getElementById('mp-article-grid');
    const activeDueGroups = Object.values(urlGroups).filter(g => g.due > 0);

    if (activeDueGroups.length === 0) {
      gridContainer.innerHTML = `<p style="color: #64748b; grid-column: 1/-1; margin: 0;">Ingen artikler har kort klar til repetition lige nu. 👍</p>`;
    } else {
      let gHtml = '';
      activeDueGroups.forEach(g => {
        const isSelected = activeFilterUrl === g.url;
        gHtml += `
          <div class="mp-article-card ${isSelected ? 'is-active-filter' : ''}">
            <div>
              <div class="mp-article-card-title">${escapeHtml(g.title)}</div>
              <div style="font-size: 0.82rem; color: #64748b;">Totalt ${g.total} kort gemt</div>
            </div>
            <div class="mp-article-card-meta">
              <span class="mp-badge-due">🟢 ${g.due} klar nu</span>
              <button type="button" class="mp-btn-study-article" onclick="filterByUrl('${escapeHtml(g.url)}')">
                Øv nu ➔
              </button>
            </div>
          </div>
        `;
      });
      gridContainer.innerHTML = gHtml;
    }

    // Opdater Fuld Stak Tabel (med renset tekst og stramme rækker)
    const fullStackTbody = document.getElementById('mp-full-stack-table-body');
    if (cardsArray.length === 0) {
      fullStackTbody.innerHTML = `<tr><td colspan="4" style="text-align:center;">Ingen kort gemt endnu.</td></tr>`;
    } else {
      let fHtml = '';
      cardsArray.forEach(card => {
        const isDueNow = !card.nextReview || new Date(card.nextReview) <= now;
        let statusBadge = '';
        if (isDueNow) {
          statusBadge = `<span class="mp-badge-due">🟢 Klar nu</span>`;
        } else {
          const d = new Date(card.nextReview);
          const dayMonth = d.toLocaleDateString('da-DK', { day: 'numeric', month: 'short' });
          const time = d.toLocaleTimeString('da-DK', { hour: '2-digit', minute: '2-digit' });
          statusBadge = `<span class="mp-badge-waiting">⏳ ${dayMonth} kl. ${time}</span>`;
        }

        // Rens spørgsmålstekst for HTML, linjeskift og dobbelte mellemrum
        let cleanQuestion = card.front ? card.front.replace(/<[^>]*>?/gm, '') : '';
        cleanQuestion = cleanQuestion.replace(/\s+/g, ' ').trim();
        const questionText = cleanQuestion.length > 55 ? cleanQuestion.substring(0, 55) + '...' : cleanQuestion;

        fHtml += `
          <tr>
            <td><strong>${escapeHtml(questionText)}</strong></td>
            <td>
              <a href="${card.url}" target="_blank" class="mp-table-link" title="${escapeHtml(card.title)}">
                ${escapeHtml(card.title || 'Link')}
              </a>
            </td>
            <td style="white-space: nowrap;">${statusBadge}</td>
            <td style="text-align: center; font-weight: 700;">${card.reps || 0}</td>
          </tr>
        `;
      });
      fullStackTbody.innerHTML = fHtml;
    }
  }

  function renderDashboard() {
    const allData = getStoredData();
    const cardsArray = Object.values(allData);
    const now = new Date();

    const dueCardsAll = cardsArray.filter(card => !card.nextReview || new Date(card.nextReview) <= now);
    
    const urlGroups = {};
    cardsArray.forEach(card => {
      const u = card.url || 'Ukendt artikel';
      if (!urlGroups[u]) urlGroups[u] = { title: card.title || 'Artikel uden titel', total: 0, due: 0, url: u };
      urlGroups[u].total++;
      if (!card.nextReview || new Date(card.nextReview) <= now) {
        urlGroups[u].due++;
      }
    });

    const filterBanner = document.getElementById('mp-active-filter-banner');
    const filterTitleEl = document.getElementById('mp-filter-article-title');
    if (activeFilterUrl !== 'all' && urlGroups[activeFilterUrl]) {
      filterTitleEl.textContent = urlGroups[activeFilterUrl].title;
      filterBanner.style.display = 'flex';
    } else {
      filterBanner.style.display = 'none';
    }

    const activeDueCards = dueCardsAll.filter(card => activeFilterUrl === 'all' || card.url === activeFilterUrl);
    const totalInActiveSession = activeDueCards.length;

    if (totalInActiveSession === 0) {
      container.innerHTML = `
        <div class="mp-stack-complete" style="max-width: 580px; margin: 1rem auto;">
          <div class="mp-complete-badge" style="background:#e0f2fe; color:#0369a1;">🎉 ALIR PÅ DENNE KATEGORI</div>
          <h3>Ingen kort at repetere lige nu!</h3>
          <p>${activeFilterUrl === 'all' ? 'Du er helt ajour med alle dine kort!' : 'Ingen kort klar til repetition under denne artikel.'}</p>
        </div>
      `;
    } else {
      let html = `
        <div class="mp-flashcard-stack-container" style="max-width: 580px; margin: 0 auto;">
          <div class="mp-card-stack">
      `;

      activeDueCards.forEach((card, index) => {
        const isActive = index === 0 ? 'is-active' : '';
        const displayStyle = index === 0 ? 'display: block;' : 'display: none;';

        let sourceMetaText = `Kort <strong>${index + 1}</strong> af <strong>${totalInActiveSession}</strong>`;
        if (activeFilterUrl !== 'all' && card.url) {
          sourceMetaText += ` (Fra artiklen: <a href="${card.url}" target="_blank" rel="noopener">${escapeHtml(card.title || 'Læs artiklen')}</a>)`;
        }

        let optionsHtml = '';
        const hasOptions = card.options && Array.isArray(card.options) && card.options.length > 0;
        
        if (hasOptions) {
          optionsHtml = `<div class="mp-options-grid">`;
          card.options.forEach((optText, optIdx) => {
            const isCorrectAttr = optIdx === 0 ? 'data-correct="true"' : '';
            optionsHtml += `
              <button type="button" class="mp-option-btn" data-value="${escapeHtml(optText)}" ${isCorrectAttr}>
                <span class="mp-option-letter"></span>
                <span class="mp-option-text">${escapeHtml(optText)}</span>
              </button>
            `;
          });
          optionsHtml += `</div>`;
        }

        html += `
          <div class="mp-card-wrapper ${isActive}" style="${displayStyle}" data-id="${card.id}">
            <div class="mp-source-meta">
              ${sourceMetaText}
            </div>

            <div class="mp-card">
              <div class="mp-card-face mp-card-front">
                <div class="mp-card-topbar">
                  <div class="mp-topbar-left">
                    <span class="mp-subheading">DAGENS REPETITION</span>
                    <span class="mp-badge-count">${index + 1} / ${totalInActiveSession}</span>
                  </div>
                </div>
                
                <div class="mp-card-content ${hasOptions ? 'has-options' : ''}">
                  <div class="mp-question-text">${card.front}</div>
                  ${optionsHtml}
                </div>
                
                <div class="mp-card-bottombar">
                  ${!hasOptions ? '<button type="button" class="mp-btn-flip">Vend kort 🔄</button>' : '<div></div>'}
                  <button type="button" class="mp-btn-skip">Skip ⏩</button>
                </div>
              </div>

              <div class="mp-card-face mp-card-back">
                <div class="mp-card-topbar">
                  <div class="mp-topbar-left">
                    <span class="mp-subheading">SVAR & FORKLARING</span>
                    <span class="mp-user-result-badge"></span>
                  </div>
                </div>
                
                <div class="mp-card-content">
                  <div class="mp-answer-text">${card.back}</div>
                </div>

                <div class="mp-card-bottombar">
                  <div class="mp-rating-pills">
                    <button type="button" class="mp-pill mp-pill-hard" data-rating="hard">🔴 Svær</button>
                    <button type="button" class="mp-pill mp-pill-good" data-rating="good">🟡 OK</button>
                    <button type="button" class="mp-pill mp-pill-easy" data-rating="easy">🟢 Let</button>
                  </div>
                  <button type="button" class="mp-btn-skip">Skip ⏩</button>
                </div>
              </div>
            </div>
          </div>
        `;
      });

      html += `
          </div>
          <div class="mp-stack-complete" style="display: none;">
            <div class="mp-complete-badge">🎉 STAKKEN ER GENNEMFØRT</div>
            <h3>Godt gået!</h3>
            <p>Du har øvet alle planlagte kort i denne omgang.</p>
          </div>
        </div>
      `;

      container.innerHTML = html;
      bindDeckEvents(container);
    }

    updateBackgroundStats();
  }

  function bindDeckEvents(containerEl) {
    const stackContainer = containerEl.querySelector('.mp-flashcard-stack-container');
    const wrappers = Array.from(stackContainer.querySelectorAll('.mp-card-wrapper'));
    let currentIndex = 0;

    function showCard(index) {
      wrappers.forEach((w, i) => {
        w.classList.remove('flipped');
        if (i === index) {
          w.classList.add('is-active');
          w.style.display = 'block';
        } else {
          w.classList.remove('is-active');
          w.style.display = 'none';
        }
      });

      if (index >= wrappers.length) {
        const completeBox = stackContainer.querySelector('.mp-stack-complete');
        const stackBox = stackContainer.querySelector('.mp-card-stack');
        if (stackBox) stackBox.style.display = 'none';
        if (completeBox) completeBox.style.display = 'flex';
      }
    }

    wrappers.forEach((wrapper) => {
      const id = wrapper.dataset.id;

      const flipBtn = wrapper.querySelector('.mp-btn-flip');
      if (flipBtn) {
        flipBtn.onclick = (e) => {
          e.preventDefault();
          wrapper.classList.add('flipped');
        };
      }

      const grid = wrapper.querySelector('.mp-options-grid');
      if (grid) {
        const btns = Array.from(grid.children);
        const letters = ['A', 'B', 'C', 'D', 'E'];

        for (let i = btns.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          grid.appendChild(btns[j]);
        }

        Array.from(grid.children).forEach((btn, idx) => {
          const letterSpan = btn.querySelector('.mp-option-letter');
          if (letterSpan) letterSpan.textContent = letters[idx] || '';

          btn.onclick = (e) => {
            e.preventDefault();
            const isCorrect = btn.dataset.correct === 'true';
            const resultBadge = wrapper.querySelector('.mp-user-result-badge');

            if (resultBadge) {
              if (isCorrect) {
                resultBadge.textContent = "Korrekt! 🎉";
                resultBadge.className = "mp-user-result-badge correct";
              } else {
                resultBadge.textContent = "Forkert ❌";
                resultBadge.className = "mp-user-result-badge wrong";
              }
            }
            wrapper.classList.add('flipped');
          };
        });
      }

      wrapper.querySelectorAll('.mp-btn-skip').forEach(skipBtn => {
        skipBtn.onclick = (e) => {
          e.preventDefault();
          currentIndex++;
          showCard(currentIndex);
        };
      });

      wrapper.querySelectorAll('[data-rating]').forEach(btn => {
        btn.onclick = (e) => {
          e.preventDefault();
          const rating = btn.dataset.rating;
          let currentStore = getStoredData();

          if (currentStore[id]) {
            const updated = calculateSM2(currentStore[id], rating);
            currentStore[id] = { ...currentStore[id], ...updated };
            saveData(currentStore);
          }

          currentIndex++;
          showCard(currentIndex);
          updateBackgroundStats();
        };
      });
    });
  }

  renderDashboard();
});
</script>