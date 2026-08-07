// assets/js/ui/1rm-ui.js
import {
  FORMULA_DEFINITIONS,
  getResolvedFormulaKey,
  calculate1RM
} from '../core/1rm-core.js';

export function init1RMCalculatorUI(container, calcId = '1rm-calculator') {
  if (!container) return;

  const pagePath = window.location.pathname.replace(/[^a-zA-Z0-9_-]/g, '_');
  const STORAGE_KEY = `mp_1rm_calc_state_v4_${calcId}_${pagePath}`;

  let currentBodyPart = 'all'; // 'all', 'upper', 'lower'
  let activeFormulaKey = 'recommended_formula';

  // UI Elements - Inputs
  const bodypartBtns = container.querySelectorAll('.js-bodypart-btn');
  const weightInput = container.querySelector('[data-key="weight"]');
  const repsInput = container.querySelector('[data-key="reps"]');
  const rpeInput = container.querySelector('[data-key="rpe"]');

  // UI Elements - Formel Bar & Picker
  const formulaBar = container.querySelector('.js-1rm-formula-bar');
  const manualWrapper = container.querySelector('.js-1rm-manual-dropdown-wrapper');
  const pickerContainer = container.querySelector('.js-1rm-picker-container');

  // UI Elements - Resultater
  const res1RMVal = container.querySelector('.js-res-1rm-val');
  const resFormulaLabel = container.querySelector('.js-res-formula-label');
  const resSeeTag = container.querySelector('.js-res-see-tag');
  const tableBody = container.querySelector('.js-1rm-table-body');

  // Actions
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  const INFO_TEXTS = {
    '1rm_basics': `
      <h4 style="margin: 0 0 0.5rem 0; font-size: 0.95rem; font-weight: 800; color: #0f172a;">🏋️‍♂️ Hvad er 1RM, RPE & RIR?</h4>
      <p style="margin: 0 0 0.5rem 0; font-size: 0.825rem; color: #475569; line-height: 1.4;"><strong>1RM (One Rep Max):</strong> Den maksimale vægt, du fysiologisk kan løfte i én enkelt præcis gentagelse.</p>
      <p style="margin: 0 0 0.5rem 0; font-size: 0.825rem; color: #475569; line-height: 1.4;"><strong>RPE & RIR:</strong> Rating of Perceived Exertion (1–10 scale) og Reps in Reserve. Hvis du tager 5 reps med 1 rep i tanken, er det RPE 9 (1 RIR) – hvilket fysiologisk svarer til et 6RM maxforløb.</p>
      <p style="margin: 0; font-size: 0.8rem; color: #64748b; line-height: 1.4;"><strong>RTS RPE Formel:</strong> Mike Tuchscherers populære Reactive Training Systems model, der beregner 1RM direkte ud fra din RPE-anstrengelse.</p>
    `
  };

  function openSectionOverlay(btn) {
    const type = btn.getAttribute('data-info-type');
    const panel = btn.closest('.mp-1rm-section-rel');
    if (!panel) return;

    const overlay = panel.querySelector('.js-section-info-overlay');
    const body = panel.querySelector('.js-info-overlay-body');

    if (overlay && body) {
      body.innerHTML = INFO_TEXTS[type] || '';
      overlay.style.display = 'flex';
    }
  }

  function closeSectionOverlay(closeBtn) {
    const overlay = closeBtn.closest('.js-section-info-overlay');
    if (overlay) overlay.style.display = 'none';
  }

  function toggleFormulaPicker(show) {
    const isCurrentlyOpen = manualWrapper && manualWrapper.style.display === 'block';
    const open = show !== undefined ? show : !isCurrentlyOpen;

    if (open) {
      if (formulaBar) formulaBar.style.display = 'none';
      if (manualWrapper) manualWrapper.style.display = 'block';
    } else {
      if (manualWrapper) manualWrapper.style.display = 'none';
      if (formulaBar) formulaBar.style.display = 'flex';
    }
  }

  function renderFormulaPicker() {
    if (!pickerContainer) return;

    const availableKeys = Object.keys(FORMULA_DEFINITIONS);

    pickerContainer.innerHTML = availableKeys.map(key => {
      const f = FORMULA_DEFINITIONS[key];
      const isSelected = key === activeFormulaKey;
      const isAuto = key === 'recommended_formula';

      return `
        <div class="mp-1rm-picker-card ${isSelected ? 'is-selected' : ''}" data-formula-key="${key}">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
            <div style="display: flex; align-items: center; gap: 0.35rem;">
              <strong style="font-size: 0.875rem; color: #0f172a;">${f.name}</strong>
              ${isAuto ? '<span class="mp-1rm-rec-tag">⭐ Anbefalet</span>' : ''}
            </div>
            <span class="mp-1rm-check-icon ${isSelected ? 'is-selected' : ''}">✓</span>
          </div>
          <div style="font-size: 0.75rem; color: #475569; line-height: 1.35;">${f.desc}</div>
        </div>
      `;
    }).join('');

    pickerContainer.querySelectorAll('.mp-1rm-picker-card').forEach(card => {
      card.addEventListener('click', () => {
        activeFormulaKey = card.getAttribute('data-formula-key');
        toggleFormulaPicker(false);
        calculate();
      });
    });
  }

  function saveState() {
    try {
      const state = {
        bodyPart: currentBodyPart,
        activeFormulaKey,
        weight: weightInput ? weightInput.value : '',
        reps: repsInput ? repsInput.value : '',
        rpe: rpeInput ? rpeInput.value : '10'
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (state.bodyPart) switchBodyPart(state.bodyPart);
        if (state.activeFormulaKey) activeFormulaKey = state.activeFormulaKey;
        if (weightInput && state.weight !== undefined) weightInput.value = state.weight;
        if (repsInput && state.reps !== undefined) repsInput.value = state.reps;
        if (rpeInput && state.rpe !== undefined) rpeInput.value = state.rpe;
      }
    } catch (e) {}
  }

  function switchBodyPart(bp) {
    currentBodyPart = bp;
    bodypartBtns.forEach(btn => {
      btn.classList.toggle('is-selected', btn.getAttribute('data-bodypart') === bp);
    });
    calculate();
  }

  function calculate() {
    saveState();

    const weight = weightInput ? weightInput.value.trim() : '';
    const reps = repsInput ? repsInput.value.trim() : '';
    const rpe = rpeInput ? rpeInput.value : '10';

    const res = calculate1RM({
      weight,
      reps,
      rpe,
      formulaKey: activeFormulaKey,
      bodyPart: currentBodyPart
    });

    const isAuto = activeFormulaKey === 'recommended_formula';
    const resolvedKey = getResolvedFormulaKey(activeFormulaKey, currentBodyPart);
    const resolvedDef = FORMULA_DEFINITIONS[resolvedKey];

    // OPDATER COLLAPSED BAR VISNING (MED FORMELNAVN & FORKLARING NEDENUNDER)
    if (formulaBar && resolvedDef) {
      formulaBar.innerHTML = `
        <div class="mp-1rm-badge-header">
          <div class="mp-1rm-badge-title-group">
            <strong class="mp-1rm-badge-title">${resolvedDef.name}</strong>
            ${isAuto ? '<span class="mp-1rm-rec-tag">⭐ Anbefalet</span>' : ''}
          </div>
          <button type="button" class="js-1rm-toggle-override mp-1rm-btn-gear" title="Skift 1RM formel">
            ⚙️
          </button>
        </div>
        <div style="font-size: 0.75rem; color: #475569; line-height: 1.35; margin-top: 0.15rem;">
          ${resolvedDef.desc}
        </div>
      `;

      const gearBtn = formulaBar.querySelector('.js-1rm-toggle-override');
      if (gearBtn) {
        gearBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleFormulaPicker();
        });
      }
    }

    renderFormulaPicker();

    if (!res.isValid) {
      if (res1RMVal) res1RMVal.textContent = '-';
      if (resFormulaLabel) resFormulaLabel.textContent = resolvedDef ? resolvedDef.name : 'Brzycki';
      if (resSeeTag) resSeeTag.textContent = 'Estimeret usikkerhed (SEE): ±- kg';
      if (tableBody) {
        tableBody.innerHTML = `<tr><td colspan="4" class="mp-1rm-empty-state">Indtast vægt og gentagelser for at se din 1RM-tabel.</td></tr>`;
      }
      return;
    }

    // OPDATER HERO RESULTAT
    if (res1RMVal) res1RMVal.textContent = res.max1RM.toLocaleString('da-DK');
    if (resFormulaLabel) resFormulaLabel.textContent = res.formulaName;
    
    let seeText = `Estimeret usikkerhed (SEE): ±${res.seeKg.toLocaleString('da-DK')} kg (±${res.seePct}%)`;
    if (res.rir > 0) {
      seeText += ` • ${res.effectiveReps} effektive reps (RPE ${res.rpe})`;
    }
    if (resSeeTag) resSeeTag.textContent = seeText;

    // OPDATER TABEL
    if (tableBody && Array.isArray(res.rmTable)) {
      tableBody.innerHTML = res.rmTable.map(row => `
        <tr ${row.rm === 1 ? 'style="background: #eff6ff; font-weight: 800;"' : ''}>
          <td><strong>${row.rm} RM</strong></td>
          <td style="text-align: right;"><strong style="color: #2563eb; font-size: 0.95rem;">${row.weightKg.toLocaleString('da-DK')} kg</strong></td>
          <td style="text-align: right;"><span style="font-weight: 700; color: #475569;">${row.pctOf1RM}%</span></td>
          <td style="text-align: right; color: #64748b;">${row.avgWeightKg.toLocaleString('da-DK')} kg</td>
        </tr>
      `).join('');
    }
  }

  // EVENT LISTENERS
  bodypartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetBtn = e.target.closest('.js-bodypart-btn');
      if (targetBtn) {
        switchBodyPart(targetBtn.getAttribute('data-bodypart'));
      }
    });
  });

  container.querySelectorAll('.js-info-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openSectionOverlay(btn);
    });
  });

  container.querySelectorAll('.js-info-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeSectionOverlay(closeBtn);
    });
  });

  container.querySelectorAll('.js-1rm-input').forEach(input => {
    ['input', 'change', 'keyup'].forEach(ev => input.addEventListener(ev, calculate));
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}

      switchBodyPart('all');
      if (weightInput) weightInput.value = '';
      if (repsInput) repsInput.value = '';
      if (rpeInput) rpeInput.value = '10';

      activeFormulaKey = 'recommended_formula';
      toggleFormulaPicker(false);

      container.querySelectorAll('.js-section-info-overlay').forEach(o => o.style.display = 'none');
      calculate();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      setTimeout(() => {
        if (typeof html2canvas !== 'undefined') {
          html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = '1rm-styrkerapport.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
          });
        }
      }, 100);
    });
  }

  loadState();
  calculate();
}

export const initCalculator = init1RMCalculatorUI;