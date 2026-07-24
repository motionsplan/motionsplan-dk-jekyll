// assets/js/ui/heart-rate-calculator-ui.js
import {
  HEART_RATE_MODELS,
  getAutoRecommendedFormulaKey,
  calculateHeartRateZones
} from '../core/heart-rate-core.js';

import { estimateMaxHr } from '../core/max-hr.js';

export function initHeartRateCalculatorUI(container, calcId = 'heart-rate-calculator') {
  if (!container) return;

  const STORAGE_KEY = `mp_hr_calc_state_v19_${calcId}`;

  let currentInputMode = 'hrmax'; // 'hrmax', 'hrr', 'lthr'
  let currentZoneStructure = '3_zone'; // '3_zone', '5_zone'
  let isManualOverride = false;
  let activeManualFormulaKey = '';

  // Data mode buttons & field wrappers
  const inputModeBtns = container.querySelectorAll('.js-hr-input-mode-btn');
  const wrapperHrMax = container.querySelector('.js-hr-field-wrapper-hrmax');
  const wrapperHrRest = container.querySelector('.js-hr-field-wrapper-hrrest');
  const wrapperLthr = container.querySelector('.js-hr-field-wrapper-lthr');
  const wrapperLt1 = container.querySelector('.js-hr-field-wrapper-lt1');

  // Main Inputs
  const hrMaxInput = container.querySelector('[data-key="hrMax"]');
  const hrRestInput = container.querySelector('[data-key="hrRest"]');
  const lthrInput = container.querySelector('[data-key="lthr"]');
  const lt1Input = container.querySelector('[data-key="lt1"]');

  // Magic Wand Elements
  const magicBtn = container.querySelector('.js-hr-magic-btn');
  const magicPopover = container.querySelector('.js-hr-magic-popover');
  const magicCloseBtn = container.querySelector('.js-hr-magic-close');
  const estAgeInput = container.querySelector('.js-hr-est-age');
  const estValSpan = container.querySelector('.js-hr-est-val-span');
  const applyEstBtn = container.querySelector('.js-hr-apply-est-btn');

  // Switchers & Controls
  const modeBtns = container.querySelectorAll('.js-hr-mode-btn');
  const formulaBar = container.querySelector('.js-hr-formula-bar');
  const manualWrapper = container.querySelector('.js-hr-manual-dropdown-wrapper');
  const pickerContainer = container.querySelector('.js-hr-picker-container');

  // Results & Popover
  const rrBadge = container.querySelector('.js-hr-rr-badge');
  const cardContainer = container.querySelector('.js-hr-zone-card-container');
  const zonePopover = container.querySelector('.js-hr-zone-popover');
  const zonePopoverBody = container.querySelector('.js-hr-zone-popover-body');
  const zonePopoverCloseBtn = container.querySelector('.js-hr-zone-popover-close');

  // Actions
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  // ALT DETALJERET FORKLARING LIGGER NU I (i) OVERLAYET
  const INFO_TEXTS = {
    hr_basics: `
      <h4 style="margin: 0 0 0.5rem 0; font-size: 0.95rem; font-weight: 800; color: #0f172a;">🫀 Valg af Datagrundlag</h4>
      <p style="margin: 0 0 0.65rem 0; font-size: 0.825rem; color: #475569; line-height: 1.4;"><strong>🔵 Maxpuls (Basis):</strong> Beregner zoner ud fra standardmæssige statistiske procenter af din maxpuls. Hurtigt og nemt, hvis du kun kender din maxpuls.</p>
      <p style="margin: 0 0 0.65rem 0; font-size: 0.825rem; color: #475569; line-height: 1.4;"><strong>🟢 Maxpuls + Hvilepuls (Pulsreserve / Karvonen):</strong> Inddrager din hvilepuls for at skabe personlige trænervinduer, der tager højde for din aktuelle fysiske form.</p>
      <p style="margin: 0 0 0.65rem 0; font-size: 0.825rem; color: #475569; line-height: 1.4;"><strong>⭐ Tærskelpuls / LT2 (Fysiologisk Guldstandard):</strong> Zonerne låses til din mælkesyretærskel (LT2). Kender du også din aerobe tærskel (LT1), låses 3-zone modellen 100% præcist uden brug af maxpuls!</p>
    `
  };

  function setInputMode(mode) {
    currentInputMode = mode;

    inputModeBtns.forEach(btn => {
      btn.classList.toggle('is-active', btn.getAttribute('data-input-mode') === mode);
    });

    // VIS/SKJUL FELTER: Maxpuls skjules helt ved LTHR!
    if (wrapperHrMax) wrapperHrMax.style.display = (mode === 'lthr') ? 'none' : 'block';
    if (wrapperHrRest) wrapperHrRest.style.display = (mode === 'hrr') ? 'block' : 'none';
    if (wrapperLthr) wrapperLthr.style.display = (mode === 'lthr') ? 'block' : 'none';
    if (wrapperLt1) wrapperLt1.style.display = (mode === 'lthr') ? 'block' : 'none';

    isManualOverride = false;
    activeManualFormulaKey = '';
    toggleFormulaPicker(false);

    calculate();
  }

  function updateMaxHrEstimation() {
    if (!estAgeInput) return 180;
    const age = parseInt(estAgeInput.value, 10) || 40;
    const rawEst = estimateMaxHr(age, 'male', 'tanaka');
    const estVal = Math.round(rawEst);

    if (estValSpan) estValSpan.textContent = estVal;
    return estVal;
  }

  function openMagicPopover() {
    if (magicPopover) {
      magicPopover.style.display = 'flex';
      updateMaxHrEstimation();
    }
  }

  function closeMagicPopover() {
    if (magicPopover) magicPopover.style.display = 'none';
  }

  function openZonePopover(z) {
    if (!zonePopover || !zonePopoverBody) return;

    zonePopoverBody.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.85rem;">
        <span style="width: 14px; height: 14px; border-radius: 50%; background: ${z.color}; display: inline-block;"></span>
        <h4 style="font-size: 1.05rem; font-weight: 800; color: #0f172a; margin: 0;">${z.name}</h4>
        <span class="mp-hr-rec-tag" style="margin-left: auto;">${z.minPct}% – ${z.maxPct}%</span>
      </div>

      <div style="background: ${z.bgColor}; border: 1px solid ${z.borderColor}; border-radius: 12px; padding: 1rem; text-align: center; margin-bottom: 0.85rem;">
        <div style="font-size: 0.7rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.04em;">Målrettet Pulsområde</div>
        <div style="font-size: 2.2rem; font-weight: 900; color: #0f172a; line-height: 1.1; margin-top: 0.2rem;">${z.fromHR} – ${z.toHR}</div>
      </div>

      <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap; margin-bottom: 0.85rem;">
        <span class="mp-hr-rpe-badge" style="font-size: 0.775rem;">${z.rpe}</span>
        <span style="font-size: 0.8rem; font-weight: 700; color: #334155;">${z.rpeDesc}</span>
      </div>

      ${z.thresholdNote ? `<div style="margin-bottom: 0.85rem;"><span class="mp-hr-threshold-tag">📍 ${z.thresholdNote}</span></div>` : ''}

      <div style="font-size: 0.825rem; color: #334155; line-height: 1.45; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 0.85rem;">
        <p style="margin: 0 0 0.5rem 0; font-weight: 600; color: #0f172a;">${z.desc}</p>
        ${z.extendedDetails ? `<div style="border-top: 1px dashed #cbd5e1; padding-top: 0.65rem; margin-top: 0.65rem;">${z.extendedDetails}</div>` : ''}
      </div>
    `;

    zonePopover.style.display = 'flex';
  }

  function closeZonePopover() {
    if (zonePopover) zonePopover.style.display = 'none';
  }

  function openSectionOverlay(btn) {
    const type = btn.getAttribute('data-info-type');
    const panel = btn.closest('.mp-hr-section-rel');
    if (!panel) return;

    const overlay = panel.querySelector('.js-section-info-overlay');
    const body = panel.querySelector('.js-info-overlay-body');

    if (overlay && body) {
      body.innerHTML = INFO_TEXTS[type] || '';
      overlay.style.display = 'flex';

      if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise([body]);
      }
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

  function switchZoneStructure(mode) {
    currentZoneStructure = mode;
    modeBtns.forEach(btn => {
      btn.classList.toggle('is-active', btn.getAttribute('data-mode') === mode);
    });

    isManualOverride = false;
    activeManualFormulaKey = '';
    toggleFormulaPicker(false);

    calculate();
  }

  function renderFormulaPicker(activeKey, autoRecKey) {
    if (!pickerContainer) return;

    const availableKeys = Object.keys(HEART_RATE_MODELS).filter(key => {
      const model = HEART_RATE_MODELS[key];

      // Zonestruktur tjek
      if (currentZoneStructure === '3_zone') {
        if (model.category !== '3_zone') return false;
      } else {
        if (model.category === '3_zone') return false;
      }

      // Datagrundlag tjek
      if (currentInputMode === 'lthr') {
        if (!model.supportsLTHR && model.type !== 'lthr') return false;
      } else if (currentInputMode === 'hrmax') {
        if (model.requiresLTHR) return false;
      }

      return true;
    });

    availableKeys.sort((a, b) => {
      const modelA = HEART_RATE_MODELS[a];
      const modelB = HEART_RATE_MODELS[b];
      const order = { lthr: 1, hrr: 2, hrmax: 3, threshold: 1 };
      return (order[modelA.type] || 4) - (order[modelB.type] || 4);
    });

    pickerContainer.innerHTML = availableKeys.map(key => {
      const m = HEART_RATE_MODELS[key];
      const isSelected = key === activeKey;
      const isAutoRecommended = key === autoRecKey;

      return `
        <div class="mp-hr-picker-card ${isSelected ? 'is-selected' : ''}" data-formula-key="${key}">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
            <div style="display: flex; align-items: center; gap: 0.35rem;">
              <strong style="font-size: 0.875rem; color: #0f172a;">${m.name}</strong>
              ${isAutoRecommended ? '<span class="mp-hr-rec-tag">⭐ Anbefalet</span>' : ''}
            </div>
            <span class="mp-hr-check-icon ${isSelected ? 'is-selected' : ''}">✓</span>
          </div>
          <div style="font-size: 0.75rem; color: #475569; line-height: 1.35;">${m.formulaDesc}</div>
        </div>
      `;
    }).join('');

    pickerContainer.querySelectorAll('.mp-hr-picker-card').forEach(card => {
      card.addEventListener('click', () => {
        activeManualFormulaKey = card.getAttribute('data-formula-key');
        isManualOverride = true;
        toggleFormulaPicker(false);
        calculate();
      });
    });
  }

  function calculate() {
    // INGEN FALLBACKS DER SKABER 'SPOEGELSES-ZONER' NÅR ET FELT TØMMES!
    const rawMax = hrMaxInput ? hrMaxInput.value.trim() : '';
    const rawRest = hrRestInput ? hrRestInput.value.trim() : '';
    const rawLthr = lthrInput ? lthrInput.value.trim() : '';
    const rawLt1 = lt1Input ? lt1Input.value.trim() : '';

    const hrMax = rawMax !== '' ? parseInt(rawMax, 10) : 0;
    const hrRest = (currentInputMode === 'hrr' && rawRest !== '') ? parseInt(rawRest, 10) : 0;
    const lthr = (currentInputMode === 'lthr' && rawLthr !== '') ? parseInt(rawLthr, 10) : 0;
    const lt1 = (currentInputMode === 'lthr' && rawLt1 !== '') ? parseInt(rawLt1, 10) : 0;

    // TJEK OM PÅKRÆVEDE TAL ER ANGVET
    let isMissingInput = false;
    let missingMsg = '';

    if (currentInputMode === 'hrmax' && hrMax <= 0) {
      isMissingInput = true;
      missingMsg = '⚠️ Indtast venligst din maxpuls for at beregne zoner.';
    } else if (currentInputMode === 'hrr' && (hrMax <= 0 || hrRest <= 0)) {
      isMissingInput = true;
      missingMsg = '⚠️ Indtast venligst både maxpuls og hvilepuls.';
    } else if (currentInputMode === 'lthr' && lthr <= 0) {
      isMissingInput = true;
      missingMsg = '⚠️ Indtast venligst din tærskelpuls (LT2) for at beregne zoner.';
    }

    if (isMissingInput) {
      if (cardContainer) {
        cardContainer.innerHTML = `<div class="mp-hr-empty-state">${missingMsg}</div>`;
      }
      if (rrBadge) rrBadge.textContent = 'Mangler pulstal';
      if (formulaBar) {
        formulaBar.innerHTML = `<div style="font-size: 0.8rem; font-weight: 700; color: #64748b; padding: 0.4rem 0;">Indtast dine pulstal ovenfor</div>`;
      }
      return;
    }

    const hasHrRest = hrRest > 0;
    const hasLthr = lthr > 0;
    const hrr = (hrMax > 0 && hasHrRest) ? Math.max(0, hrMax - hrRest) : 0;

    const autoRecKey = getAutoRecommendedFormulaKey({
      zoneStructure: currentZoneStructure,
      inputMode: currentInputMode,
      hasHrRest,
      hasLthr
    });

    let activeModelKey = (isManualOverride && activeManualFormulaKey) ? activeManualFormulaKey : autoRecKey;

    const res = calculateHeartRateZones({ hrMax, hrRest, lthr, lt1, modelKey: activeModelKey, inputMode: currentInputMode });
    const activeModelObj = HEART_RATE_MODELS[activeModelKey];

    if (formulaBar && activeModelObj) {
      const isAuto = activeModelKey === autoRecKey;
      formulaBar.innerHTML = `
        <div class="mp-hr-badge-header">
          <div class="mp-hr-badge-title-group">
            <strong class="mp-hr-badge-title">${activeModelObj.name}</strong>
            ${isAuto ? '<span class="mp-hr-rec-tag">⭐ Anbefalet</span>' : ''}
            ${res.hasExactBothThresholds ? '<span class="mp-hr-rec-tag" style="background:#fef3c7; color:#92400e;">🎯 Låst til LT1 & LT2</span>' : ''}
          </div>
          <button type="button" class="js-hr-toggle-override mp-hr-btn-gear" title="Skift formel">
            ⚙️
          </button>
        </div>
        <div style="font-size: 0.75rem; color: #475569; line-height: 1.35; margin-top: 0.2rem;">
          ${res.hasExactBothThresholds ? 'Zonerne er låst direkte til dine målespecifikke tærskler LT1 og LT2 for maksimal fysiologisk præcision.' : activeModelObj.formulaDesc}
        </div>
      `;

      const gearBtn = formulaBar.querySelector('.js-hr-toggle-override');
      if (gearBtn) {
        gearBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleFormulaPicker();
        });
      }
    }

    // OPDATER DYNAMISK BASIS-BADGE
    if (rrBadge) {
      if (currentInputMode === 'lthr') {
        if (lt1 > 0 && lthr > 0) {
          rrBadge.textContent = `LT1: ${lt1} bpm | LT2: ${lthr} bpm`;
        } else {
          rrBadge.textContent = `LT2 (Tærskel): ${lthr} bpm`;
        }
      } else if (currentInputMode === 'hrr' && hrr > 0) {
        rrBadge.textContent = `Pulsreserve: ${hrr} bpm`;
      } else {
        rrBadge.textContent = `Maxpuls: ${hrMax} bpm`;
      }
      rrBadge.style.display = 'inline-block';
    }

    renderFormulaPicker(activeModelKey, autoRecKey);

    // RENDER ZONEKORT
    if (cardContainer) {
      cardContainer.innerHTML = res.zones.map((z, idx) => `
        <div class="mp-hr-zone-card" style="border-left-color: ${z.color}; background: ${z.bgColor}; border-color: ${z.borderColor};" data-zone-index="${idx}">
          
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem;">
            
            <div style="display: flex; flex-direction: column; gap: 0.15rem; flex: 1;">
              <div style="display: flex; align-items: center; gap: 0.4rem;">
                <span style="width: 10px; height: 10px; border-radius: 50%; background: ${z.color}; display: inline-block; flex-shrink: 0;"></span>
                <strong class="mp-hr-card-title" style="color: ${z.textColor};">${z.name}</strong>
              </div>
              
              <div style="display: flex; align-items: center; gap: 0.4rem; margin-top: 0.1rem;">
                <span class="mp-hr-rpe-badge">${z.rpe}</span>
                <span style="font-weight: 700; font-size: 0.775rem; color: #334155;">${z.rpeDesc}</span>
              </div>
            </div>

            <div class="mp-hr-card-bpm-container">
              <div class="mp-hr-card-bpm">${z.fromHR} – ${z.toHR}</div>
              <div style="text-align: right; margin-top: 3px;">
                <span class="mp-hr-pct-sub">${z.minPct}% – ${z.maxPct}%</span>
              </div>
            </div>

          </div>

          ${z.thresholdNote ? `
            <div style="margin-top: 0.35rem;">
              <span class="mp-hr-threshold-tag">📍 ${z.thresholdNote}</span>
            </div>
          ` : ''}

          <div style="font-size: 0.775rem; color: #475569; margin-top: 0.35rem; line-height: 1.35;">
            ${z.desc}
          </div>

        </div>
      `).join('');

      cardContainer.querySelectorAll('.mp-hr-zone-card').forEach(card => {
        card.addEventListener('click', () => {
          const idx = parseInt(card.getAttribute('data-zone-index'), 10);
          const zoneObj = res.zones[idx];
          if (zoneObj) openZonePopover(zoneObj);
        });
      });
    }
  }

  // Event Listeners for 3 Data-Mode Buttons
  inputModeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-input-mode');
      setInputMode(mode);
    });
  });

  // Event Listeners for Magic Wand
  if (magicBtn) magicBtn.addEventListener('click', openMagicPopover);
  if (magicCloseBtn) magicCloseBtn.addEventListener('click', closeMagicPopover);
  if (estAgeInput) estAgeInput.addEventListener('input', updateMaxHrEstimation);

  if (applyEstBtn) {
    applyEstBtn.addEventListener('click', () => {
      const estimatedValue = updateMaxHrEstimation();
      if (hrMaxInput && estimatedValue) {
        hrMaxInput.value = estimatedValue;
        closeMagicPopover();
        calculate();
      }
    });
  }

  if (zonePopoverCloseBtn) zonePopoverCloseBtn.addEventListener('click', closeZonePopover);

  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => switchZoneStructure(btn.getAttribute('data-mode')));
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

  container.querySelectorAll('.js-hr-input').forEach(input => {
    ['input', 'change', 'keyup'].forEach(ev => input.addEventListener(ev, calculate));
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (hrMaxInput) hrMaxInput.value = '190';
      if (hrRestInput) hrRestInput.value = '55';
      if (lthrInput) lthrInput.value = '168';
      if (lt1Input) lt1Input.value = '';

      setInputMode('hrmax');
      switchZoneStructure('3_zone');
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      setTimeout(() => {
        if (typeof html2canvas !== 'undefined') {
          html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'pulszoner-rapport.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
          });
        }
      }, 100);
    });
  }

  // SIKRER 100% INIT VED POPUP / LOAD
  setInputMode('hrmax');
}

export const initCalculator = initHeartRateCalculatorUI;