// assets/js/ui/pal-calculator-ui.js
import { PAL_CALCULATOR_CORE } from '../core/pal-calculator.js';

export function initPalCalculatorUI(container, calcId = 'pal-calculator') {
  if (!container) return;

  const STORAGE_KEY = `mp_pal_calc_state_v12_${calcId}`;
  const MET_DATA_URL = '/assets/data/met.json';

  let currentMode = 'simple';
  let metDatabase = [];
  let isMetLoaded = false;
  let isMetLoading = false;

  // Mode Switch Buttons
  const modeBtns = container.querySelectorAll('.js-pal-mode-btn');
  const panelSimple = container.querySelector('.js-pal-panel-simple');
  const panelAdvancedWrapper = container.querySelector('.js-pal-advanced-wrapper');
  const panelNormal = container.querySelector('.js-pal-panel-normal');
  const panelAdvanced = container.querySelector('.js-pal-panel-advanced');

  // Datalist element
  const metDatalist = document.getElementById('mp-pal-met-datalist');

  // Formula Controls
  const formulaSelect = container.querySelector('.js-pal-formula-select');
  const gerriorInputsWrapper = container.querySelector('.js-pal-gerrior-inputs');
  const gerriorSexInput = container.querySelector('.js-pal-gerrior-sex');
  const gerriorAgeInput = container.querySelector('.js-pal-gerrior-age');
  const gerriorWeightInput = container.querySelector('.js-pal-gerrior-weight');
  const gerriorHeightInput = container.querySelector('.js-pal-gerrior-height');

  // Simple Inputs
  const basePalRadios = container.querySelectorAll('input[name="base_pal"]');
  const modHoursInput = container.querySelector('[data-input="mod_hours"]');
  const vigHoursInput = container.querySelector('[data-input="vig_hours"]');

  // Normal Inputs
  const normMetInputs = container.querySelectorAll('.js-pal-norm-met');
  const normMinInputs = container.querySelectorAll('.js-pal-norm-min');
  const unlockMetNormal = container.querySelector('.js-pal-unlock-met-normal');
  const lockIconNormal = container.querySelector('.js-pal-lock-icon-normal');
  const normalTimeBadge = container.querySelector('.js-pal-normal-time-badge');

  // Advanced Builder Elements
  const builderContainer = container.querySelector('.js-pal-builder-container');
  const addRowBtn = container.querySelector('.js-pal-add-row-btn');
  const advSoveMinInput = container.querySelector('.js-pal-adv-sove-min');
  const advRestMinInput = container.querySelector('.js-pal-adv-rest-min');
  const advTimeBadge = container.querySelector('.js-pal-adv-time-badge');

  // Outputs
  const resVal = container.querySelector('.js-pal-res-val');
  const resBadge = container.querySelector('.js-pal-res-badge');
  const resDesc = container.querySelector('.js-pal-res-desc');
  const resMeta = container.querySelector('.js-pal-res-meta');

  // Actions
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  // TEKSTER TIL SECTION OVERLAYS
  const INFO_TEXTS = {
    nnr: `
      <h4 style="margin: 0 0 0.5rem 0; font-size: 0.95rem; font-weight: 800; color: #0f172a;">⚡ Om NNR (Nordic Nutrition Recommendations)</h4>
      <p style="margin: 0 0 0.5rem 0; font-size: 0.8rem; color: #475569;">NNR-modellen estimerer dit fysiske aktivitetsniveau (PAL) ud fra din generelle livsstil kombineret med eventuelle ugentlige træningstimer.</p>
      <p style="margin: 0 0 0.5rem 0; font-size: 0.8rem; font-weight: 700; color: #0f172a;">Formel:</p>
      <div style="background: #f1f5f9; padding: 8px; border-radius: 6px; text-align: center; font-weight: 700; font-size: 0.8rem; color: #2563eb; margin-bottom: 0.5rem;">
        PAL = Basal PAL + (Timer moderat × 0,025) + (Timer hård × 0,050)
      </div>
      <p style="margin: 0; font-size: 0.775rem; color: #64748b;">Basal PAL varierer fra 1,20 (sengeliggende) til 2,20 (tungt kropsarbejde/elitetræning).</p>
    `,
    '24h': `
      <h4 style="margin: 0 0 0.5rem 0; font-size: 0.95rem; font-weight: 800; color: #0f172a;">📊 Om 24-timers MET-døgnbudget & Beregningsmodeller</h4>
      <p style="margin: 0 0 0.6rem 0; font-size: 0.8rem; color: #475569;">Dette modul beregner din PAL-faktor ud fra, hvordan dine 24 timer (1440 minutter) er fordelt på aktiviteter med forskellig MET-intensitet.</p>
      
      <p style="margin: 0 0 0.35rem 0; font-size: 0.8rem; font-weight: 700; color: #0f172a;">1. Standard MET (Uafhængig af kropsvægt/køn):</p>
      <p style="margin: 0 0 0.6rem 0; font-size: 0.775rem; color: #475569;">Beregner PAL direkte som det tidsvægtede gennemsnit af døgnets MET-værdier. Da 1 MET er defineret som hvileforbrændingen, er formlen uafhængig af vægt og køn:</p>
      <div style="background: #f1f5f9; padding: 6px; border-radius: 6px; text-align: center; font-weight: 700; font-size: 0.8rem; color: #2563eb; margin-bottom: 0.85rem;">
        $$\\text{PAL} = \\frac{\\sum (\\text{MET}_i \\cdot \\text{min}_i)}{1440}$$
      </div>

      <p style="margin: 0 0 0.35rem 0; font-size: 0.8rem; font-weight: 700; color: #0f172a;">2. Gerrior et al. (2006) – BMR-korrigeret:</p>
      <p style="margin: 0; font-size: 0.775rem; color: #475569;">Korrigerer for, at standard MET-værdier kan overestimere energiforbruget for personer med højere kropsvægt eller BMI, ved at inddrage dit præcise BMR baseret på køn, alder, vægt og højde.</p>
    `
  };

  function openSectionOverlay(btn) {
    const type = btn.getAttribute('data-info-type');
    const panel = btn.closest('.mp-pal-section-rel');
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

  // LAZY LOADING
  async function ensureMetLoaded() {
    if (isMetLoaded || isMetLoading) return;
    isMetLoading = true;
    try {
      const resp = await fetch(MET_DATA_URL);
      if (resp.ok) {
        metDatabase = await resp.json();
        isMetLoaded = true;
      }
    } catch (e) {
      console.warn('Kunne ikke hente met.json:', e);
    } finally {
      isMetLoading = false;
    }
  }

  // DYNAMISK TOP-15 FILTRERING
  function updateDatalistOptions(query = '') {
    if (!metDatalist || !metDatabase.length) return;
    const q = query.trim().toLowerCase();

    let matches = [];
    if (!q) {
      matches = metDatabase.slice(0, 15);
    } else {
      matches = metDatabase
        .filter(item => item.Activity && item.Activity.toLowerCase().includes(q))
        .slice(0, 15);
    }

    metDatalist.innerHTML = matches.map(item => `
      <option value="${item.Activity}">MET: ${parseFloat(item.MET).toFixed(1)} (${item.Group || 'Aktivitet'})</option>
    `).join('');
  }

  function saveState() {
    try {
      let selectedBase = '1.45';
      basePalRadios.forEach(r => { if (r.checked) selectedBase = r.value; });

      const normState = {};
      normMinInputs.forEach(minEl => {
        const key = minEl.getAttribute('data-key');
        const metEl = container.querySelector(`.js-pal-norm-met[data-key="${key}"]`);
        if (key) {
          normState[key] = { met: metEl ? metEl.value : '', min: minEl ? minEl.value : '' };
        }
      });

      const advRows = [];
      if (builderContainer) {
        builderContainer.querySelectorAll('.mp-pal-builder-row').forEach(row => {
          const nameEl = row.querySelector('.js-pal-row-name');
          const metEl = row.querySelector('.js-pal-row-met');
          const minEl = row.querySelector('.js-pal-row-min');
          if (nameEl && metEl && minEl) {
            advRows.push({ name: nameEl.value, met: metEl.value, min: minEl.value });
          }
        });
      }

      const state = {
        mode: currentMode,
        formula: formulaSelect ? formulaSelect.value : 'standard',
        sex: gerriorSexInput ? gerriorSexInput.value : 'male',
        age: gerriorAgeInput ? gerriorAgeInput.value : '40',
        weight: gerriorWeightInput ? gerriorWeightInput.value : '70',
        height: gerriorHeightInput ? gerriorHeightInput.value : '175',
        basePal: selectedBase,
        modHours: modHoursInput ? modHoursInput.value : '0',
        vigHours: vigHoursInput ? vigHoursInput.value : '0',
        normState,
        advSoveMin: advSoveMinInput ? advSoveMinInput.value : '480',
        advRows
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (state.mode) switchMode(state.mode);
        if (formulaSelect && state.formula) {
          formulaSelect.value = state.formula;
          toggleFormulaInputs(state.formula);
        }
        if (gerriorSexInput && state.sex) gerriorSexInput.value = state.sex;
        if (gerriorAgeInput && state.age) gerriorAgeInput.value = state.age;
        if (gerriorWeightInput && state.weight) gerriorWeightInput.value = state.weight;
        if (gerriorHeightInput && state.height) gerriorHeightInput.value = state.height;

        if (state.basePal) {
          basePalRadios.forEach(r => {
            r.checked = (r.value === state.basePal);
            const parent = r.closest('.mp-pal-radio-label');
            if (parent) parent.classList.toggle('is-selected', r.checked);
          });
        }

        if (modHoursInput && state.modHours !== undefined) modHoursInput.value = state.modHours;
        if (vigHoursInput && state.vigHours !== undefined) vigHoursInput.value = state.vigHours;

        if (state.normState) {
          Object.keys(state.normState).forEach(key => {
            const item = state.normState[key];
            const metEl = container.querySelector(`.js-pal-norm-met[data-key="${key}"]`);
            const minEl = container.querySelector(`.js-pal-norm-min[data-key="${key}"]`);
            if (metEl && item.met !== undefined) metEl.value = item.met;
            if (minEl && item.min !== undefined) minEl.value = item.min;
          });
        }

        if (advSoveMinInput && state.advSoveMin !== undefined) advSoveMinInput.value = state.advSoveMin;

        if (builderContainer && Array.isArray(state.advRows)) {
          builderContainer.innerHTML = '';
          state.advRows.forEach(r => addBuilderRow(r.name, r.met, r.min));
        }
      }
    } catch (e) {}
  }

  function switchMode(mode) {
    currentMode = mode;
    modeBtns.forEach(btn => {
      btn.classList.toggle('is-active', btn.getAttribute('data-mode') === mode);
    });

    if (panelSimple) panelSimple.style.display = (mode === 'simple') ? 'block' : 'none';
    if (panelAdvancedWrapper) panelAdvancedWrapper.style.display = (mode === 'normal' || mode === 'advanced') ? 'block' : 'none';
    if (panelNormal) panelNormal.style.display = (mode === 'normal') ? 'block' : 'none';
    if (panelAdvanced) panelAdvanced.style.display = (mode === 'advanced') ? 'block' : 'none';

    if (mode === 'advanced') {
      ensureMetLoaded().then(() => updateDatalistOptions(''));
    }

    calculate();
  }

  function toggleFormulaInputs(form) {
    if (gerriorInputsWrapper) {
      gerriorInputsWrapper.style.display = (form === 'gerrior') ? 'grid' : 'none';
    }
  }

  function addBuilderRow(name = '', met = '4.0', min = '30') {
    if (!builderContainer) return;

    const row = document.createElement('div');
    row.className = 'mp-pal-builder-row';
    row.innerHTML = `
      <div style="flex: 2; min-width: 140px;">
        <input type="text" list="mp-pal-met-datalist" class="mp-pal-builder-input js-pal-row-name" placeholder="Søg aktivitet (f.eks. fodbold)..." value="${name}" style="width: 100%;" autocomplete="off">
      </div>
      <div style="width: 75px;">
        <input type="number" step="0.1" class="mp-pal-builder-input js-pal-row-met" value="${met}" style="width: 100%; text-align: center;">
      </div>
      <div style="width: 90px;">
        <input type="number" min="0" max="1440" step="5" class="mp-pal-builder-input js-pal-row-min" value="${min}" style="width: 100%; text-align: center;">
      </div>
      <button type="button" class="mp-pal-btn-remove js-pal-remove-row" title="Fjern række">🗑️</button>
    `;

    const nameInput = row.querySelector('.js-pal-row-name');
    const metInput = row.querySelector('.js-pal-row-met');

    nameInput.addEventListener('focus', () => {
      ensureMetLoaded().then(() => updateDatalistOptions(nameInput.value));
    });

    nameInput.addEventListener('input', () => {
      updateDatalistOptions(nameInput.value);

      if (metDatabase.length > 0) {
        const query = nameInput.value.trim().toLowerCase();
        const match = metDatabase.find(item => item.Activity && item.Activity.toLowerCase() === query);
        if (match) {
          metInput.value = parseFloat(match.MET).toFixed(1);
        }
      }
      calculate();
    });

    row.querySelectorAll('input').forEach(i => {
      ['change', 'keyup'].forEach(ev => i.addEventListener(ev, calculate));
    });

    row.querySelector('.js-pal-remove-row').addEventListener('click', () => {
      row.remove();
      calculate();
    });

    builderContainer.appendChild(row);
    calculate();
  }

  function autoAdjustNormalSiddende(changedInput) {
    if (changedInput && changedInput.getAttribute('data-key') === 'siddende') return;

    const keys = ['intens', 'moderat', 'let', 'staaende', 'sove'];
    let sumOther = 0;

    keys.forEach(k => {
      const el = container.querySelector(`.js-pal-norm-min[data-key="${k}"]`);
      if (el) sumOther += parseFloat(el.value) || 0;
    });

    const remaining = Math.max(0, 1440 - sumOther);
    const siddendeEl = container.querySelector('.js-pal-norm-min[data-key="siddende"]');
    if (siddendeEl) siddendeEl.value = remaining;
  }

  function calculate(event) {
    saveState();

    const selectedFormula = formulaSelect ? formulaSelect.value : 'standard';
    let result = { isValid: false, pal: 0 };

    if (currentMode === 'simple') {
      let basePal = 1.45;
      basePalRadios.forEach(r => { if (r.checked) basePal = parseFloat(r.value) || 1.45; });
      const modHours = modHoursInput ? parseFloat(modHoursInput.value) || 0 : 0;
      const vigHours = vigHoursInput ? parseFloat(vigHoursInput.value) || 0 : 0;

      result = PAL_CALCULATOR_CORE.calculateSimple({ basePal, modHours, vigHours });
      if (resMeta) resMeta.textContent = 'Model: Nordic Nutrition Recommendations (NNR 2012 / NNR 2023)';

    } else if (currentMode === 'normal') {
      const changedInput = event ? event.target : null;
      autoAdjustNormalSiddende(changedInput);

      const activities = [];
      let totalMin = 0;

      normMinInputs.forEach(minEl => {
        const key = minEl.getAttribute('data-key');
        const metEl = container.querySelector(`.js-pal-norm-met[data-key="${key}"]`);
        const met = metEl ? parseFloat(metEl.value) || 0 : 0;
        const min = parseFloat(minEl.value) || 0;
        totalMin += min;
        activities.push({ met, min });
      });

      if (normalTimeBadge) {
        normalTimeBadge.textContent = `${totalMin} / 1440 min`;
        normalTimeBadge.style.backgroundColor = (totalMin === 1440) ? '#10b981' : (totalMin > 1440 ? '#ef4444' : '#f59e0b');
      }

      if (selectedFormula === 'gerrior') {
        const sex = gerriorSexInput ? gerriorSexInput.value : 'male';
        const age = gerriorAgeInput ? parseFloat(gerriorAgeInput.value) || 40 : 40;
        const bw = gerriorWeightInput ? parseFloat(gerriorWeightInput.value) || 70 : 70;
        const h = gerriorHeightInput ? parseFloat(gerriorHeightInput.value) || 175 : 175;

        result = PAL_CALCULATOR_CORE.calculateGerrior({ activities, sex, age, weight: bw, height: h });
        if (resMeta) resMeta.textContent = `Model: Gerrior et al. (Estimeret BMR: ${result.bmrCalculated} kcal)`;
      } else {
        result = PAL_CALCULATOR_CORE.calculateStandardMet({ activities });
        if (resMeta) resMeta.textContent = `Model: 24-timers Standard MET (${totalMin} min registreret)`;
      }

    } else if (currentMode === 'advanced') {
      const activities = [];
      let totalMin = 0;

      const soveMin = advSoveMinInput ? parseFloat(advSoveMinInput.value) || 0 : 480;
      activities.push({ met: 0.9, min: soveMin });
      totalMin += soveMin;

      if (builderContainer) {
        builderContainer.querySelectorAll('.mp-pal-builder-row').forEach(row => {
          const metEl = row.querySelector('.js-pal-row-met');
          const minEl = row.querySelector('.js-pal-row-min');
          const met = metEl ? parseFloat(metEl.value) || 0 : 0;
          const min = minEl ? parseFloat(minEl.value) || 0 : 0;
          activities.push({ met, min });
          totalMin += min;
        });
      }

      const restMin = Math.max(0, 1440 - totalMin);
      if (advRestMinInput) advRestMinInput.value = restMin;
      activities.push({ met: 1.2, min: restMin });
      totalMin += restMin;

      if (advTimeBadge) {
        advTimeBadge.textContent = `${totalMin} / 1440 min`;
        advTimeBadge.style.backgroundColor = (totalMin === 1440) ? '#10b981' : (totalMin > 1440 ? '#ef4444' : '#f59e0b');
      }

      if (selectedFormula === 'gerrior') {
        const sex = gerriorSexInput ? gerriorSexInput.value : 'male';
        const age = gerriorAgeInput ? parseFloat(gerriorAgeInput.value) || 40 : 40;
        const bw = gerriorWeightInput ? parseFloat(gerriorWeightInput.value) || 70 : 70;
        const h = gerriorHeightInput ? parseFloat(gerriorHeightInput.value) || 175 : 175;

        result = PAL_CALCULATOR_CORE.calculateGerrior({ activities, sex, age, weight: bw, height: h });
        if (resMeta) resMeta.textContent = `Model: Gerrior et al. (Estimeret BMR: ${result.bmrCalculated} kcal)`;
      } else {
        result = PAL_CALCULATOR_CORE.calculateStandardMet({ activities });
        if (resMeta) resMeta.textContent = `Model: Dynamisk Døgnbygger Standard MET (${totalMin} min)`;
      }
    }

    // Render Results
    if (result.isValid && result.pal > 0) {
      const cat = PAL_CALCULATOR_CORE.getPalCategory(result.pal);

      if (resVal) resVal.textContent = result.pal.toFixed(2).replace('.', ',');
      if (resBadge) {
        resBadge.textContent = cat.label;
        resBadge.style.display = 'inline-block';
      }
      if (resDesc) resDesc.textContent = cat.desc;

      container.dispatchEvent(new CustomEvent('mp-pal-calculated', {
        bubbles: true,
        detail: { pal: result.pal, mode: currentMode, formula: selectedFormula }
      }));

    } else {
      if (resVal) resVal.textContent = '-';
      if (resBadge) resBadge.style.display = 'none';
      if (resDesc) resDesc.textContent = 'Indtast gyldige værdier for at se din PAL-faktor.';
    }
  }

  // Event Listeners
  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => switchMode(btn.getAttribute('data-mode')));
  });

  // Open Section Info Overlay ved klik på (i)
  container.querySelectorAll('.js-info-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openSectionOverlay(btn);
    });
  });

  // Close Section Info Overlay ved klik på ✕
  container.querySelectorAll('.js-info-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeSectionOverlay(closeBtn);
    });
  });

  if (formulaSelect) {
    formulaSelect.addEventListener('change', (e) => {
      toggleFormulaInputs(e.target.value);
      calculate();
    });
  }

  if (unlockMetNormal) {
    unlockMetNormal.addEventListener('change', (e) => {
      const isUnlocked = e.target.checked;
      normMetInputs.forEach(input => {
        if (isUnlocked) {
          input.removeAttribute('readonly');
          input.classList.remove('mp-pal-input-field-locked');
        } else {
          input.setAttribute('readonly', 'readonly');
          input.classList.add('mp-pal-input-field-locked');
        }
      });
      if (lockIconNormal) lockIconNormal.textContent = isUnlocked ? '🔓' : '🔒';
    });
  }

  if (addRowBtn) {
    addRowBtn.addEventListener('click', () => addBuilderRow('', '4.0', '30'));
  }

  basePalRadios.forEach(r => {
    r.addEventListener('change', (e) => {
      basePalRadios.forEach(item => {
        const parent = item.closest('.mp-pal-radio-label');
        if (parent) parent.classList.toggle('is-selected', item.checked);
      });
      calculate(e);
    });
  });

  container.querySelectorAll('.js-pal-input, .js-pal-norm-met, .js-pal-norm-min, .js-pal-adv-sove-min, .js-pal-gerrior-sex, .js-pal-gerrior-age, .js-pal-gerrior-weight, .js-pal-gerrior-height').forEach(input => {
    ['input', 'change', 'keyup'].forEach(ev => input.addEventListener(ev, calculate));
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      basePalRadios.forEach((r, idx) => {
        r.checked = (idx === 1);
        const parent = r.closest('.mp-pal-radio-label');
        if (parent) parent.classList.toggle('is-selected', r.checked);
      });

      if (modHoursInput) modHoursInput.value = '0';
      if (vigHoursInput) vigHoursInput.value = '0';
      if (formulaSelect) formulaSelect.value = 'standard';
      toggleFormulaInputs('standard');

      if (builderContainer) builderContainer.innerHTML = '';
      if (advSoveMinInput) advSoveMinInput.value = '480';

      // Skjul alle åbne sektions-overlays
      container.querySelectorAll('.js-section-info-overlay').forEach(o => o.style.display = 'none');

      switchMode('simple');
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      calculate();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      setTimeout(() => {
        if (typeof html2canvas !== 'undefined') {
          html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'pal-fysisk-aktivitetsniveau.png';
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

export const initCalculator = initPalCalculatorUI;