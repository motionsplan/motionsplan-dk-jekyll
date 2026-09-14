// assets/js/core/DashboardManager.js
import { StorageAdapter } from './StorageAdapter.js';

export const DashboardManager = {
  // Opretter global Quick-Log modal automatisk, hvis den mangler i DOM'en
  ensureQuickLogModal() {
    if (document.getElementById('mp-global-quicklog-modal')) return;

    const modalHtml = `
      <div id="mp-global-quicklog-modal" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(15, 23, 42, 0.6); z-index: 1001; align-items: center; justify-content: center; padding: 16px;">
        <div style="background: #ffffff; border-radius: 16px; max-width: 400px; width: 100%; padding: 20px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2);">
          
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <div class="js-quicklog-title" style="font-size: 1.05rem; font-weight: 800; color: #0f172a;">Registrer resultat</div>
            <button type="button" class="js-quicklog-close" style="background: #f1f5f9; border: none; border-radius: 50%; width: 28px; height: 28px; cursor: pointer; font-size: 0.85rem;">✖</button>
          </div>

          <form id="mp-quicklog-form">
            <input type="hidden" class="js-quicklog-key">
            
            <div style="margin-bottom: 1.2rem;">
              <label style="display: block; font-size: 0.82rem; font-weight: 800; color: #334155; margin-bottom: 6px;">
                Måling (<span class="js-quicklog-unit">enhed</span>)
              </label>
              <input type="number" step="0.01" class="js-quicklog-input" placeholder="0.00" required style="width: 100%; padding: 10px 12px; font-size: 1.2rem; font-weight: 800; border: 2px solid #cbd5e1; border-radius: 8px; text-align: center; box-sizing: border-box;">
            </div>

            <button type="submit" class="mp-db-btn-primary" style="width: 100%; padding: 10px; font-size: 0.9rem; margin-bottom: 8px;">
              💾 Gem i loggen
            </button>
            <button type="button" class="js-quicklog-clear-data" style="width: 100%; background: none; border: none; color: #dc2626; font-size: 0.75rem; font-weight: 700; cursor: pointer; padding: 4px;">
              🗑️ Slet gemte data for denne test
            </button>
          </form>

        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);

    const modal = document.getElementById('mp-global-quicklog-modal');
    const closeBtn = modal.querySelector('.js-quicklog-close');
    if (closeBtn) {
      closeBtn.onclick = () => { modal.style.display = 'none'; };
    }
  },

  // Henter seneste resultat og norm-farver via StorageAdapter
  getCardScore(storageKey) {
    const latest = StorageAdapter.getLatest(storageKey);
    
    if (!latest || !latest.primary) {
      return {
        display: '- <span class="mp-db-unit">ml/kg/min</span>',
        bg: '#f8fafc',
        color: '#64748b',
        border: '#e2e8f0'
      };
    }

    const val = latest.primary.value;
    const unit = latest.primary.unit || 'ml/kg/min';
    const display = `${val} <span class="mp-db-unit">${unit}</span>`;

    let bg = '#dcfce7';
    let color = '#15803d';
    let border = '#86efac';

    if (latest.norm) {
      bg = latest.norm.bg || bg;
      color = latest.norm.color || color;
      border = latest.norm.color ? `${latest.norm.color}40` : border;
    }

    return { display, bg, color, border };
  },

  // Initialiserer grid, modaler og event listeners
  initGrid({ gridSelector, library, defaultCards, configStorageKey, resetBtnSelector, addBtnSelector, modalSelector, showTag = true }) {
    const grid = document.querySelector(gridSelector);
    if (!grid) return;

    const addModal = document.querySelector(modalSelector);
    this.ensureQuickLogModal();
    const quickModal = document.getElementById('mp-global-quicklog-modal');

    const getActiveCards = () => {
      const saved = localStorage.getItem(configStorageKey);
      if (!saved) return [...defaultCards];
      try {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) && parsed.length > 0 ? parsed : [...defaultCards];
      } catch (e) {
        return [...defaultCards];
      }
    };

    const saveActiveCards = (cards) => {
      localStorage.setItem(configStorageKey, JSON.stringify(cards));
    };

    let activeCategory = 'all';

    const renderGrid = () => {
      const currentCards = getActiveCards();
      grid.innerHTML = '';

      currentCards.forEach(key => {
        const item = library[key];
        if (!item) return;

        const score = this.getCardScore(item.storageKey);
        const isInteractive = !!item.allowQuickLog;
        const hasTag = showTag && item.tag;

        const topSectionHtml = hasTag ? `
          <div class="mp-db-card-header">
            <span class="mp-db-tag">${item.tag}</span>
            <button type="button" class="mp-db-remove-btn js-db-remove" data-key="${key}" title="Skjul fra dashboard">&times;</button>
          </div>
          <div class="mp-db-card-title">${item.title}</div>
        ` : `
          <div class="mp-db-card-header" style="align-items: flex-start;">
            <div class="mp-db-card-title" style="margin-bottom: 0;">${item.title}</div>
            <button type="button" class="mp-db-remove-btn js-db-remove" data-key="${key}" title="Skjul fra dashboard">&times;</button>
          </div>
        `;

        const card = document.createElement('div');
        card.className = 'mp-db-card';

        card.innerHTML = `
          <div>
            ${topSectionHtml}
            <p class="mp-db-card-desc">${item.desc}</p>
          </div>

          <div class="mp-db-card-bottom">
            <div class="mp-db-score-pill ${isInteractive ? 'is-interactive js-db-quick-log' : ''}" 
                 data-key="${key}"
                 title="${isInteractive ? 'Klik for at redigere/registrere resultat' : ''}"
                 style="background: ${score.bg}; color: ${score.color}; border-color: ${score.border};">
              ${score.display}
            </div>

            <a href="${item.url}" class="mp-db-btn-primary">
              Prøv →
            </a>
          </div>
        `;

        grid.appendChild(card);
      });

      // Bind Skjul-knapper
      grid.querySelectorAll('.js-db-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const updated = getActiveCards().filter(k => k !== e.currentTarget.dataset.key);
          saveActiveCards(updated);
          renderGrid();
        });
      });

      // Bind klik på resultat-pillekassen til Quick-Log modal
      grid.querySelectorAll('.js-db-quick-log').forEach(pill => {
        pill.addEventListener('click', (e) => {
          const key = e.currentTarget.dataset.key;
          const item = library[key];
          if (!item || !quickModal) return;

          quickModal.querySelector('.js-quicklog-title').textContent = item.title;
          quickModal.querySelector('.js-quicklog-key').value = key;
          quickModal.querySelector('.js-quicklog-unit').textContent = item.quickLogUnit || item.unit || 'ml/kg/min';
          quickModal.querySelector('.js-quicklog-input').value = '';
          quickModal.style.display = 'flex';
        });
      });
    };

    // Quick-Log form submission og nulstilling
    const form = document.getElementById('mp-quicklog-form');
    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();
        const key = quickModal.querySelector('.js-quicklog-key').value;
        const val = parseFloat(quickModal.querySelector('.js-quicklog-input').value);
        const item = library[key];

        if (!isNaN(val) && item) {
          StorageAdapter.commitToLog(item.storageKey, {
            type: 'manual',
            primary: {
              value: val,
              unit: item.unit || 'ml/kg/min'
            }
          });

          quickModal.style.display = 'none';
          renderGrid();
        }
      };

      const clearSingleBtn = form.querySelector('.js-quicklog-clear-data');
      if (clearSingleBtn) {
        clearSingleBtn.onclick = () => {
          const key = quickModal.querySelector('.js-quicklog-key').value;
          const item = library[key];
          if (item && confirm(`Vil du slette gemte resultater for ${item.title}?`)) {
            StorageAdapter.clearLog(item.storageKey);
            quickModal.style.display = 'none';
            renderGrid();
          }
        };
      }
    }

    // Modal tilføj-liste logik
    const renderModalList = () => {
      if (!addModal) return;
      const listContainer = addModal.querySelector('.js-modal-test-list');
      if (!listContainer) return;

      const currentCards = getActiveCards();
      listContainer.innerHTML = '';

      Object.keys(library).forEach(key => {
        const item = library[key];
        if (activeCategory !== 'all' && item.category !== activeCategory) return;

        const isAdded = currentCards.includes(key);

        const row = document.createElement('div');
        row.style.cssText = 'display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 10px 14px; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff; margin-bottom: 8px;';

        row.innerHTML = `
          <div>
            <div style="font-size: 0.90rem; font-weight: 800; color: #0f172a;">${item.title}</div>
            <div style="font-size: 0.72rem; color: #64748b; margin-top: 2px;">${item.desc}</div>
          </div>
          <button type="button" class="js-modal-add-btn ${isAdded ? '' : 'mp-db-btn-primary'}" data-key="${key}" style="padding: 6px 12px; font-size: 0.78rem; font-weight: 800; border-radius: 6px; border: none; cursor: pointer; white-space: nowrap; ${isAdded ? 'background: #dcfce7; color: #166534; cursor: default;' : ''}">
            ${isAdded ? 'Tilføjet ✓' : 'Tilføj +'}
          </button>
        `;

        listContainer.appendChild(row);
      });

      listContainer.querySelectorAll('.js-modal-add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const key = e.currentTarget.dataset.key;
          const current = getActiveCards();
          if (!current.includes(key)) {
            current.push(key);
            saveActiveCards(current);
            renderGrid();
            renderModalList();
          }
        });
      });
    };

    if (addModal) {
      const addBtn = document.querySelector(addBtnSelector);
      const closeBtn = addModal.querySelector('.js-modal-close');

      if (addBtn) {
        addBtn.addEventListener('click', () => {
          addModal.style.display = 'flex';
          renderModalList();
        });
      }

      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          addModal.style.display = 'none';
        });
      }

      addModal.querySelectorAll('.js-modal-tab').forEach(btn => {
        btn.addEventListener('click', (e) => {
          addModal.querySelectorAll('.js-modal-tab').forEach(b => {
            b.style.background = 'transparent';
            b.style.color = '#64748b';
          });
          e.currentTarget.style.background = '#ffffff';
          e.currentTarget.style.color = '#0f172a';
          activeCategory = e.currentTarget.dataset.category;
          renderModalList();
        });
      });
    }

    const resetBtn = document.querySelector(resetBtnSelector);
    if (resetBtn) {
      resetBtn.onclick = () => {
        saveActiveCards([...defaultCards]);
        renderGrid();
      };
    }

    renderGrid();
  }
};