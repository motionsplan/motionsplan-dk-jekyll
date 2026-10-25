---
layout: single
title: 🧠 Dagens Repetition & Flashcards
permalink: /repetition/
classes: wide
sitemap: false
---

<style>
  /* Slet-knapper */
  .mp-btn-delete-card {
    background: transparent;
    border: none;
    color: #94a3b8;
    font-size: 0.95rem;
    cursor: pointer;
    padding: 2px 6px;
    border-radius: 6px;
    transition: all 0.15s ease;
    line-height: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .mp-btn-delete-card:hover {
    color: #ef4444;
    background: #fee2e2;
  }

  .mp-btn-delete-table {
    background: transparent;
    border: none;
    cursor: pointer;
    color: #94a3b8;
    padding: 4px 6px;
    border-radius: 6px;
    transition: all 0.15s ease;
    font-size: 0.9rem;
    line-height: 1;
  }
  .mp-btn-delete-table:hover {
    color: #ef4444;
    background: #fee2e2;
  }
</style>

<div class="mp-dashboard-container">
  
  <!-- OVERORDNEDE STATS -->
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
            <th style="width: 42%;">Spørgsmål</th>
            <th style="width: 28%;">Kilde / Artikel</th>
            <th style="width: 15%; white-space: nowrap;">Status / Næste tjek</th>
            <th style="width: 8%; text-align: center;">Reps</th>
            <th style="width: 7%; text-align: center;">Slet</th>
          </tr>
        </thead>
        <tbody id="mp-full-stack-table-body">
          <tr><td colspan="5" style="text-align:center;">Ingen kort gemt endnu</td></tr>
        </tbody>
      </table>
    </div>
  </details>

</div>

<!-- Fælles SRS-motor -->
<script src="{{ '/assets/js/core/srs-engine.js' | relative_url }}"></script>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('mp-repetition-app');
  let activeFilterUrl = 'all';

  const srs = window.MPSRS || {
    getStoredData: () => {
      try { return JSON.parse(localStorage.getItem('motionsplan_flashcards')) || {}; } catch(e) { return {}; }
    },
    saveData: (d) => {
      try { localStorage.setItem('motionsplan_flashcards', JSON.stringify(d)); } catch(e) {}
    },
    calculateSM2: (c, r) => ({ ease: 2.5, reps: 0, interval: 0, nextReview: new Date().toISOString() }),
    parseAnkiCloze: () => null
  };

  function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.innerText = text;
    return div.innerHTML;
  }

  // Slet kort funktion (kaldes fra kort eller tabel)
  window.deleteCard = function(id) {
    if (!confirm('Er du sikker på, at du vil slette dette kort permanent fra dine flashcards?')) {
      return;
    }
    const allData = srs.getStoredData();
    if (allData[id]) {
      delete allData[id];
      srs.saveData(allData);
      renderDashboard();
    }
  };

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
    const allData = srs.getStoredData();
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

    // Artikel-grid
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

    // Fuld stak tabel med Slet-handling
    const fullStackTbody = document.getElementById('mp-full-stack-table-body');
    if (cardsArray.length === 0) {
      fullStackTbody.innerHTML = `<tr><td colspan="5" style="text-align:center;">Ingen kort gemt endnu.</td></tr>`;
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
            <td style="text-align: center;">
              <button type="button" class="mp-btn-delete-table" onclick="deleteCard('${escapeHtml(card.id)}')" title="Slet kort permanent">🗑️</button>
            </td>
          </tr>
        `;
      });
      fullStackTbody.innerHTML = fHtml;
    }
  }

  function renderDashboard() {
    const allData = srs.getStoredData();
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
        <div class="mp-stack-complete" style="display: flex; max-width: 580px; margin: 1rem auto;">
          <div class="mp-complete-topbar">
            <span style="font-size: 0.8rem; font-weight: 800; color: #166534; letter-spacing: 0.05em; text-transform: uppercase;">STATUS</span>
            <span style="font-size: 0.8rem; font-weight: 700; color: #166534;">Ajour ✓</span>
          </div>
          <div class="mp-complete-body">
            <div class="mp-score-display">
              <div class="mp-score-headline">
                <span class="mp-score-correct">Ingen kort klar</span> lige nu
              </div>
            </div>
            <p class="mp-complete-memo">
              ${activeFilterUrl === 'all' 
                ? 'Du er helt ajour med alle dine gemte kort! Tjek igen senere eller udforsk nye artikler.' 
                : 'Ingen kort klar til repetition under denne specifikke artikel.'}
            </p>
          </div>
          ${activeFilterUrl !== 'all' ? `
          <div class="mp-complete-bottombar">
            <button type="button" class="mp-btn-text-subtle mp-btn-repeat-hard" onclick="resetArticleFilter()">← Vis alle artikler</button>
          </div>` : ''}
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

        const hasOptions = (card.options && Array.isArray(card.options) && card.options.length > 0) || (card.front && card.front.includes('mp-options-grid'));

        let frontHtml = card.front || '';
        let backHtml = card.back || '';

        if (srs.parseAnkiCloze) {
          const clozeData = srs.parseAnkiCloze(frontHtml);
          if (clozeData) {
            frontHtml = clozeData.front;
            backHtml = `<div class="mp-cloze-sentence">${clozeData.back}</div>` + (backHtml || '');
          }
        }

        let optionsHtml = '';
        if (card.options && Array.isArray(card.options) && card.options.length > 0 && !frontHtml.includes('mp-options-grid')) {
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

        let contentHtml = frontHtml;
        if (!frontHtml.includes('mp-question-text') && !frontHtml.includes('mp-options-grid')) {
          contentHtml = `<div class="mp-question-text">${frontHtml}</div>`;
        }
        contentHtml += optionsHtml;

        html += `
          <div class="mp-card-wrapper ${isActive}" style="${displayStyle}" data-id="${card.id}">
            <div class="mp-source-meta">
              ${sourceMetaText}
            </div>

            <div class="mp-card">
              <!-- FORSIDE -->
              <div class="mp-card-face mp-card-front">
                <div class="mp-card-topbar">
                  <div class="mp-topbar-left">
                    <span class="mp-subheading">DAGENS REPETITION</span>
                    <span class="mp-badge-count">${index + 1} / ${totalInActiveSession}</span>
                  </div>
                  <button type="button" class="mp-btn-delete-card" onclick="deleteCard('${escapeHtml(card.id)}')" title="Slet kort permanent">🗑️</button>
                </div>
                
                <div class="mp-card-content ${hasOptions ? 'has-options' : ''}">
                  ${contentHtml}
                </div>
                
                <div class="mp-card-bottombar">
                  <button type="button" class="mp-btn-flip" style="${hasOptions ? 'display: none;' : ''}">Vend kort 🔄</button>
                  <button type="button" class="mp-btn-skip" style="margin-left: auto;">Skip ⏩</button>
                </div>
              </div>

              <!-- BAGSIDE -->
              <div class="mp-card-face mp-card-back">
                <div class="mp-card-topbar">
                  <div class="mp-topbar-left">
                    <span class="mp-subheading">SVAR & FORKLARING</span>
                    <span class="mp-user-result-badge"></span>
                  </div>
                  <button type="button" class="mp-btn-delete-card" onclick="deleteCard('${escapeHtml(card.id)}')" title="Slet kort permanent">🗑️</button>
                </div>
                
                <div class="mp-card-content">
                  <div class="mp-answer-text">${backHtml}</div>
                </div>

                <div class="mp-card-bottombar">
                  <div class="mp-rating-pills">
                    <button type="button" class="mp-pill mp-pill-hard" data-rating="hard">🔴 Svær</button>
                    <button type="button" class="mp-pill mp-pill-good" data-rating="good">🟡 OK</button>
                    <button type="button" class="mp-pill mp-pill-easy" data-rating="easy">🟢 Let</button>
                  </div>
                  <div class="mp-bottombar-actions" style="margin-left: auto;">
                    <button type="button" class="mp-btn-flip-back">Se spørgsmål 🔄</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      });

      html += `
          </div>
          <!-- SLUTKORT -->
          <div class="mp-stack-complete" style="display: none;">
            <div class="mp-complete-topbar">
              <span style="font-size: 0.8rem; font-weight: 800; color: #166534; letter-spacing: 0.05em; text-transform: uppercase;">DAGENS REPETITION</span>
              <span style="font-size: 0.8rem; font-weight: 700; color: #166534;">Fuldført ✓</span>
            </div>
            <div class="mp-complete-body">
              <div class="mp-score-display">
                <div class="mp-score-headline">
                  <span class="mp-score-correct">✓ Alle ${totalInActiveSession} kort</span> repeteret
                </div>
                <div class="mp-progress-bar-track">
                  <div class="mp-progress-bar-fill" style="width: 100%; background: #10b981;"></div>
                </div>
              </div>
              <p class="mp-complete-memo">
                Godt gået! Kortene er flyttet længere frem i din langtidshukommelse.
              </p>
            </div>
            <div class="mp-complete-bottombar">
              <div class="mp-complete-bottom-left">
                ${activeFilterUrl !== 'all' ? '<button type="button" class="mp-btn-text-subtle mp-btn-repeat-hard" onclick="resetArticleFilter()">← Vis alle artikler</button>' : ''}
              </div>
              <div class="mp-complete-bottom-right" style="margin-left: auto;">
                <button type="button" class="mp-btn-text-subtle mp-btn-restart-subtle" onclick="location.reload()">🔄 Opdater overblik</button>
              </div>
            </div>
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
      const flipBackBtn = wrapper.querySelector('.mp-btn-flip-back');

      if (flipBtn) {
        flipBtn.onclick = (e) => {
          e.preventDefault();
          wrapper.classList.add('flipped');
        };
      }

      if (flipBackBtn) {
        flipBackBtn.onclick = (e) => {
          e.preventDefault();
          wrapper.classList.remove('flipped');
        };
      }

      const grid = wrapper.querySelector('.mp-options-grid');
      if (grid) {
        const btns = Array.from(grid.children);
        const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

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
              resultBadge.textContent = isCorrect ? "Korrekt! 🎉" : "Forkert ❌";
              resultBadge.className = `mp-user-result-badge ${isCorrect ? 'correct' : 'wrong'}`;
            }

            if (flipBtn) {
              flipBtn.style.display = 'inline-flex';
              flipBtn.textContent = 'Se svar ➔';
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
          let currentStore = srs.getStoredData();

          if (currentStore[id]) {
            const updated = srs.calculateSM2(currentStore[id], rating);
            currentStore[id] = { ...currentStore[id], ...updated };
            srs.saveData(currentStore);
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