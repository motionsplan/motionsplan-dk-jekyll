// assets/js/ui/bmr-calculator-ui.js
import { calculateBMR } from '../core/bmr.js';
import { PAL_CALCULATOR_CORE } from '../core/pal-calculator.js';

// DEFINITION AF BMR FORMLER TIL FLOTTE KORT
const BMR_FORMULA_DEFINITIONS = {
  recommended_formula: {
    name: '⭐ Anbefalet formel (Automatisk)',
    desc: 'Vælger automatisk den mest fysiologisk præcise formel ud fra din profil (Katch-McArdle/Cunningham v. fedtprocent, ellers NNR 2012 / Mifflin).'
  },
  nordic_nutrition_2012: {
    name: 'Nordic Nutrition Recommendations (2012)',
    desc: 'Det officielle nordiske referencegrundlag baseret på nyere skandinaviske befolkningsundersøgelser.'
  },
  mifflin: {
    name: 'Mifflin et al. (1990)',
    desc: 'Klinisk guldstandard for moderne voksne. Høj præcision ved både normalvægt og overvægt.'
  },
  henry: {
    name: 'Henry (2005) / Oxford',
    desc: 'Opdateret europæisk standard baseret på BMR-målinger uden tropiske skævheder.'
  },
  benedict_harris: {
    name: 'Benedict-Harris (1918 / 1984)',
    desc: 'Klassisk historisk formel. Meget udbredt, men har tendens til at overestimere stofskiftet en smule.'
  },
  schofield: {
    name: 'Schofield (1985)',
    desc: 'Tidligere WHO-standard formel baseret på store internationale befolkningsgrupper.'
  },
  cunningham: {
    name: 'Cunningham (1991) – FFM/LBM',
    requiresFat: true,
    desc: 'Beregner hvilestofskiftet direkte ud fra din magre kropsmasse (FFM). Velegnet til trænede og atleter.'
  },
  katch_mcardle: {
    name: 'Katch-McArdle – FFM/LBM',
    requiresFat: true,
    desc: 'Populær fysiologisk formel baseret på fedtfri masse. Lige præcis til både mænd og kvinder.'
  },
  nordic_nutrition_ffm: {
    name: 'Nordic Nutrition Recommendations (FFM)',
    requiresFat: true,
    desc: 'Nordisk anbefaling baseret på målt fedtfri kropsmasse.'
  }
};

export function initBmrCalculatorUI(container, calcId = 'bmr-calculator') {
  if (!container) return;

  // UNIK GEMME-NØGLE PR. UNDERSIDE (URL PATH)
  const pagePath = window.location.pathname.replace(/[^a-zA-Z0-9_-]/g, '_');
  const STORAGE_KEY = `mp_bmr_calc_state_v20_${calcId}_${pagePath}`;
  const MET_DATA_URL = '/assets/data/met.json';

  const defaultPalMode = container.getAttribute('data-default-pal-mode') || 'simple';

  let currentGender = 'man';
  let currentPalMode = defaultPalMode;
  let activeFormulaKey = 'recommended_formula';
  let isFormulaOverride = false;
  let metDatabase = [];
  let isMetLoaded = false;
  let isMetLoading = false;

  // UI Elements - Stamdata
  const genderBtns = container.querySelectorAll('.js-gender-btn');
  const ageInput = container.querySelector('[data-key="age"]');
  const heightInput = container.querySelector('[data-key="height"]');
  const weightInput = container.querySelector('[data-key="weight"]');
  const bodyFatInput = container.querySelector('.js-bmr-fat-input');
  const bodyFatOverlay = container.querySelector('.js-bmr-fat-overlay');

  // UI Elements - Formel Bar & Picker
  const formulaBar = container.querySelector('.js-bmr-formula-bar');
  const manualWrapper = container.querySelector('.js-bmr-manual-dropdown-wrapper');
  const pickerContainer = container.querySelector('.js-bmr-picker-container');

  // UI Elements - PAL Sektion & Opt-in
  const palSectionWrapper = container.querySelector('.js-pal-section-wrapper');
  const palToggleWrapper = container.querySelector('.js-pal-toggle-wrapper');
  const palEnableBtn = container.querySelector('.js-pal-enable-btn');
  const palDisableBtn = container.querySelector('.js-pal-disable-btn');
  const palModeBtns = container.querySelectorAll('.js-bmr-mode-btn');

  // Sub-Panels
  const panelSimple = container.querySelector('.js-pal-panel-simple');
  const panelAdvancedWrapper = container.querySelector('.js-pal-advanced-wrapper');
  const panelNormal = container.querySelector('.js-pal-panel-normal');
  const panelAdvanced = container.querySelector('.js-pal-panel-advanced');

  // Datalist element
  const metDatalist = document.getElementById('mp-bmr-met-datalist');

  // Simple PAL Inputs
  const basePalRadios = container.querySelectorAll('input[name="bmr_base_pal"]');
  const modHoursInput = container.querySelector('[data-input="mod_hours"]');
  const vigHoursInput = container.querySelector('[data-input="vig_hours"]');

  // Normal PAL Inputs
  const normMetInputs = container.querySelectorAll('.js-bmr-norm-met');
  const normMinInputs = container.querySelectorAll('.js-bmr-norm-min');
  const unlockMetNormal = container.querySelector('.js-bmr-unlock-met-normal');
  const lockIconNormal = container.querySelector('.js-bmr-lock-icon-normal');
  const normalTimeBadge = container.querySelector('.js-bmr-normal-time-badge');

  // Advanced Builder Elements
  const builderContainer = container.querySelector('.js-bmr-builder-container');
  const addRowBtn = container.querySelector('.js-bmr-add-row-btn');
  const advSoveMinInput = container.querySelector('.js-bmr-adv-sove-min');
  const advRestMinInput = container.querySelector('.js-bmr-adv-rest-min');
  const advTimeBadge = container.querySelector('.js-bmr-adv-time-badge');

  // Result Output Elements
  const resBmrKcal = container.querySelector('.js-res-bmr-kcal');
  const resBmrKj = container.querySelector('.js-res-bmr-kj');
  const resBmrSee = container.querySelector('.js-res-bmr-see');
  const resPalCard = container.querySelector('.js-res-pal-card');
  const resPalVal = container.querySelector('.js-res-pal-val');
  const resPalLabel = container.querySelector('.js-res-pal-label');
  const resTeeCard = container.querySelector('.js-res-tee-card');
  const resTeeKcal = container.querySelector('.js-res-tee-kcal');
  const resTeeKj = container.querySelector('.js-res-tee-kj');
  const resTeeSee = container.querySelector('.js-res-tee-see');
  const resDesc = container.querySelector('.js-res-desc');
  const resMeta = container.querySelector('.js-res-meta');

  // Actions
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  const INFO_TEXTS = {
    bmr_formulas: `
      <h4 style="margin: 0 0 0.5rem 0; font-size: 0.95rem; font-weight: 800; color: #0f172a;">🔥 Om Hvilestofskifte (BMR) & Formler</h4>
      <p style="margin: 0 0 0.5rem 0; font-size: 0.8rem; color: #475569;">BMR (Basal Metabolic Rate) er den mængde energi, din krop forbrænder i fuldstændig hvile for at holde organerne i gang.</p>
      <p style="margin: 0 0 0.5rem 0; font-size: 0.8rem; color: #475569;"><strong>Anbefalet formel:</strong> Vælger automatisk den mest præcise fysiologiske formel baseret på din fedtprocent/FFM eller dit BMI.</p>
    `,
    nnr_info: `
      <h4 style="margin: 0 0 0.5rem 0; font-size: 0.95rem; font-weight: 800; color: #0f172a;">⚡ Hurtig PAL (Nordic Nutrition Recommendations)</h4>
      <p style="margin: 0 0 0.5rem 0; font-size: 0.8rem; color: #475569;">Fastslår din PAL-faktor ud fra et skøn over din primære hverdag med tillæg for ugentlig træning.</p>
    `,
    met_24h_info: `
      <h4 style="margin: 0 0 0.5rem 0; font-size: 0.95rem; font-weight: 800; color: #0f172a;">📊 24-timers MET Døgnbudget</h4>
      <p style="margin: 0 0 0.5rem 0; font-size: 0.8rem; color: #475569;">Beregn din faktiske gennemsnitlige PAL-faktor ud fra alle 24 timer (1440 minutter) i et døgn.</p>
    `
  };

  function openSectionOverlay(btn) {
    const type = btn.getAttribute('data-info-type');
    const panel = btn.closest('.mp-bmr-section-rel');
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

    const isFatUnlocked = bodyFatInput ? !bodyFatInput.hasAttribute('readonly') : false;
    const fatVal = bodyFatInput ? parseFloat(bodyFatInput.value) || 0 : 0;
    const hasFatPercent = isFatUnlocked && fatVal > 0;

    const availableKeys = Object.keys(BMR_FORMULA_DEFINITIONS).filter(key => {
      const def = BMR_FORMULA_DEFINITIONS[key];
      if (def.requiresFat && !hasFatPercent) return false;
      return true;
    });

    pickerContainer.innerHTML = availableKeys.map(key => {
      const f = BMR_FORMULA_DEFINITIONS[key];
      const isSelected = key === activeFormulaKey;
      const isAuto = key === 'recommended_formula';

      return `
        <div class="mp-bmr-picker-card ${isSelected ? 'is-selected' : ''}" data-formula-key="${key}">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
            <div style="display: flex; align-items: center; gap: 0.35rem;">
              <strong style="font-size: 0.875rem; color: #0f172a;">${f.name}</strong>
              ${isAuto ? '<span class="mp-bmr-rec-tag">⭐ Anbefalet</span>' : ''}
            </div>
            <span class="mp-bmr-check-icon ${isSelected ? 'is-selected' : ''}">✓</span>
          </div>
          <div style="font-size: 0.75rem; color: #475569; line-height: 1.35;">${f.desc}</div>
        </div>
      `;
    }).join('');

    pickerContainer.querySelectorAll('.mp-bmr-picker-card').forEach(card => {
      card.addEventListener('click', () => {
        activeFormulaKey = card.getAttribute('data-formula-key');
        isFormulaOverride = true;
        toggleFormulaPicker(false);
        calculate();
      });
    });
  }

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

  function setFatUnlocked(unlocked) {
    if (!bodyFatInput) return;

    if (unlocked) {
      bodyFatInput.removeAttribute('readonly');
      if (bodyFatOverlay) bodyFatOverlay.classList.add('is-hidden');
    } else {
      bodyFatInput.setAttribute('readonly', 'readonly');
      bodyFatInput.value = '';
      if (bodyFatOverlay) bodyFatOverlay.classList.remove('is-hidden');

      if (['cunningham', 'katch_mcardle', 'nordic_nutrition_ffm'].includes(activeFormulaKey)) {
        activeFormulaKey = 'recommended_formula';
        isFormulaOverride = false;
      }
    }
    calculate();
  }

  function saveState() {
    try {
      let selectedBase = '1.45';
      basePalRadios.forEach(r => { if (r.checked) selectedBase = r.value; });

      const normState = {};
      normMinInputs.forEach(minEl => {
        const key = minEl.getAttribute('data-key');
        const metEl = container.querySelector(`.js-bmr-norm-met[data-key="${key}"]`);
        if (key) {
          normState[key] = { met: metEl ? metEl.value : '', min: minEl ? minEl.value : '' };
        }
      });

      const advRows = [];
      if (builderContainer) {
        builderContainer.querySelectorAll('.mp-bmr-builder-row').forEach(row => {
          const nameEl = row.querySelector('.js-bmr-row-name');
          const metEl = row.querySelector('.js-bmr-row-met');
          const minEl = row.querySelector('.js-bmr-row-min');
          if (nameEl && metEl && minEl) {
            advRows.push({ name: nameEl.value, met: metEl.value, min: minEl.value });
          }
        });
      }

      const isFatUnlocked = bodyFatInput ? !bodyFatInput.hasAttribute('readonly') : false;

      const state = {
        gender: currentGender,
        palMode: currentPalMode,
        activeFormulaKey,
        isFormulaOverride,
        age: ageInput ? ageInput.value : '',
        height: heightInput ? heightInput.value : '',
        weight: weightInput ? weightInput.value : '',
        bodyFat: bodyFatInput ? bodyFatInput.value : '',
        isFatUnlocked,
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
        if (state.gender) switchGender(state.gender);

        switchPalMode(state.palMode || defaultPalMode);

        if (state.activeFormulaKey) activeFormulaKey = state.activeFormulaKey;
        if (state.isFormulaOverride !== undefined) isFormulaOverride = state.isFormulaOverride;

        if (ageInput && state.age !== undefined) ageInput.value = state.age;
        if (heightInput && state.height !== undefined) heightInput.value = state.height;
        if (weightInput && state.weight !== undefined) weightInput.value = state.weight;

        if (state.isFatUnlocked || (state.bodyFat && parseFloat(state.bodyFat) > 0)) {
          setFatUnlocked(true);
          if (bodyFatInput && state.bodyFat !== undefined) bodyFatInput.value = state.bodyFat;
        } else {
          setFatUnlocked(false);
        }

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
            const metEl = container.querySelector(`.js-bmr-norm-met[data-key="${key}"]`);
            const minEl = container.querySelector(`.js-bmr-norm-min[data-key="${key}"]`);
            if (metEl && item.met !== undefined) metEl.value = item.met;
            if (minEl && item.min !== undefined) minEl.value = item.min;
          });
        }

        if (advSoveMinInput && state.advSoveMin !== undefined) advSoveMinInput.value = state.advSoveMin;

        if (builderContainer && Array.isArray(state.advRows)) {
          builderContainer.innerHTML = '';
          state.advRows.forEach(r => addBuilderRow(r.name, r.met, r.min));
        }
      } else {
        switchPalMode(defaultPalMode);
        setFatUnlocked(false);
      }
    } catch (e) {
      switchPalMode(defaultPalMode);
      setFatUnlocked(false);
    }
  }

  function switchGender(gender) {
    currentGender = gender;
    genderBtns.forEach(btn => {
      btn.classList.toggle('is-selected', btn.getAttribute('data-gender') === gender);
    });
    calculate();
  }

  function switchPalMode(mode) {
    currentPalMode = mode;

    if (mode === 'none') {
      if (palSectionWrapper) palSectionWrapper.style.display = 'none';
      if (palToggleWrapper) palToggleWrapper.style.display = 'block';
    } else {
      if (palSectionWrapper) palSectionWrapper.style.display = 'block';
      if (palToggleWrapper) palToggleWrapper.style.display = 'none';

      palModeBtns.forEach(btn => {
        btn.classList.toggle('is-active', btn.getAttribute('data-pal-mode') === mode);
      });

      if (panelSimple) panelSimple.style.display = (mode === 'simple') ? 'block' : 'none';
      if (panelAdvancedWrapper) panelAdvancedWrapper.style.display = (mode === 'normal' || mode === 'advanced') ? 'block' : 'none';
      if (panelNormal) panelNormal.style.display = (mode === 'normal') ? 'block' : 'none';
      if (panelAdvanced) panelAdvanced.style.display = (mode === 'advanced') ? 'block' : 'none';

      if (mode === 'advanced') {
        ensureMetLoaded().then(() => updateDatalistOptions(''));
      }
    }

    calculate();
  }

  function addBuilderRow(name = '', met = '4.0', min = '30') {
    if (!builderContainer) return;

    const row = document.createElement('div');
    row.className = 'mp-bmr-builder-row';
    row.innerHTML = `
      <div style="flex: 2; min-width: 140px;">
        <input type="text" list="mp-bmr-met-datalist" class="mp-bmr-builder-input js-bmr-row-name" placeholder="Søg aktivitet (f.eks. fodbold)..." value="${name}" style="width: 100%;" autocomplete="off">
      </div>
      <div style="width: 75px;">
        <input type="number" step="0.1" class="mp-bmr-builder-input js-bmr-row-met" value="${met}" style="width: 100%; text-align: center;">
      </div>
      <div style="width: 90px;">
        <input type="number" min="0" max="1440" step="5" class="mp-bmr-builder-input js-bmr-row-min" value="${min}" style="width: 100%; text-align: center;">
      </div>
      <button type="button" class="mp-bmr-btn-remove js-bmr-remove-row" title="Fjern række">🗑️</button>
    `;

    const nameInput = row.querySelector('.js-bmr-row-name');
    const metInput = row.querySelector('.js-bmr-row-met');

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

    row.querySelector('.js-bmr-remove-row').addEventListener('click', () => {
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
      const el = container.querySelector(`.js-bmr-norm-min[data-key="${k}"]`);
      if (el) sumOther += parseFloat(el.value) || 0;
    });

    const remaining = Math.max(0, 1440 - sumOther);
    const siddendeEl = container.querySelector('.js-bmr-norm-min[data-key="siddende"]');
    if (siddendeEl) siddendeEl.value = remaining;
  }

  function calculate(event) {
    saveState();

    const rawAge = ageInput ? ageInput.value.trim() : '';
    const rawHeight = heightInput ? heightInput.value.trim() : '';
    const rawWeight = weightInput ? weightInput.value.trim() : '';

    const age = rawAge !== '' ? parseInt(rawAge, 10) : 0;
    const height = rawHeight !== '' ? parseFloat(rawHeight) : 0;
    const weight = rawWeight !== '' ? parseFloat(rawWeight) : 0;
    const bodyFat = (bodyFatInput && !bodyFatInput.hasAttribute('readonly')) ? (parseFloat(bodyFatInput.value) || 0) : 0;

    // 1. BMR BEREGNING
    const bmrRes = calculateBMR(currentGender, age, weight, height, activeFormulaKey, bodyFat);
    
    // VIS KUN FORMELNAVN I DEN LUKKEDE FELTVISNING
    const actualFormulaName = bmrRes ? bmrRes.getFormulaName() : 'Nordic Nutrition Recommendations (2012)';
    const isAuto = activeFormulaKey === 'recommended_formula';

    if (formulaBar) {
      formulaBar.innerHTML = `
        <div class="mp-bmr-badge-header">
          <div class="mp-bmr-badge-title-group">
            <strong class="mp-bmr-badge-title">${actualFormulaName}</strong>
            ${isAuto ? '<span class="mp-bmr-rec-tag">⭐ Anbefalet</span>' : ''}
          </div>
          <button type="button" class="js-bmr-toggle-override mp-bmr-btn-gear" title="Skift BMR formel">
            ⚙️
          </button>
        </div>
      `;

      const gearBtn = formulaBar.querySelector('.js-bmr-toggle-override');
      if (gearBtn) {
        gearBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleFormulaPicker();
        });
      }
    }

    renderFormulaPicker();

    // Tjek om påkrævede felter er udfyldt
    if (age <= 0 || height <= 0 || weight <= 0) {
      if (resBmrKcal) resBmrKcal.textContent = '-';
      if (resBmrKj) resBmrKj.textContent = '- kJ / dag';
      if (resBmrSee) resBmrSee.textContent = 'SEE: ±- kcal';
      if (resPalVal) resPalVal.textContent = '-';
      if (resPalLabel) resPalLabel.textContent = '-';
      if (resTeeKcal) resTeeKcal.textContent = '-';
      if (resTeeKj) resTeeKj.textContent = '- kJ / dag';
      if (resTeeSee) resTeeSee.textContent = 'SEE: ±- kcal';
      if (resDesc) resDesc.textContent = 'Indtast dine stamdata for at beregne stofskifte.';
      return;
    }

    const bmrKcal = Math.round(bmrRes.getBMRKcal());
    const bmrKJ = Math.round(bmrRes.getBMRKJ());
    const seeKcal = bmrRes.getSEE();

    if (resBmrKcal) resBmrKcal.textContent = bmrKcal.toLocaleString('da-DK');
    if (resBmrKj) resBmrKj.textContent = `${bmrKJ.toLocaleString('da-DK')} kJ / dag`;
    if (resBmrSee) resBmrSee.textContent = `SEE: ±${seeKcal} kcal/dag`;

    // 2. PAL BEREGNING
    let palVal = 1.0;
    let palCalculated = false;

    if (currentPalMode === 'simple') {
      let basePal = 1.45;
      basePalRadios.forEach(r => { if (r.checked) basePal = parseFloat(r.value) || 1.45; });
      const modHours = modHoursInput ? parseFloat(modHoursInput.value) || 0 : 0;
      const vigHours = vigHoursInput ? parseFloat(vigHoursInput.value) || 0 : 0;

      const palObj = PAL_CALCULATOR_CORE.calculateSimple({ basePal, modHours, vigHours });
      palVal = palObj.pal;
      palCalculated = true;

    } else if (currentPalMode === 'normal') {
      const changedInput = event ? event.target : null;
      autoAdjustNormalSiddende(changedInput);

      const activities = [];
      let totalMin = 0;

      normMinInputs.forEach(minEl => {
        const key = minEl.getAttribute('data-key');
        const metEl = container.querySelector(`.js-bmr-norm-met[data-key="${key}"]`);
        const met = metEl ? parseFloat(metEl.value) || 0 : 0;
        const min = parseFloat(minEl.value) || 0;
        totalMin += min;
        activities.push({ met, min });
      });

      if (normalTimeBadge) {
        normalTimeBadge.textContent = `${totalMin} / 1440 min`;
        normalTimeBadge.style.backgroundColor = (totalMin === 1440) ? '#10b981' : (totalMin > 1440 ? '#ef4444' : '#f59e0b');
      }

      const palObj = PAL_CALCULATOR_CORE.calculateStandardMet({ activities });
      palVal = palObj.pal;
      palCalculated = true;

    } else if (currentPalMode === 'advanced') {
      const activities = [];
      let totalMin = 0;

      const soveMin = advSoveMinInput ? parseFloat(advSoveMinInput.value) || 0 : 480;
      activities.push({ met: 0.9, min: soveMin });
      totalMin += soveMin;

      if (builderContainer) {
        builderContainer.querySelectorAll('.mp-bmr-builder-row').forEach(row => {
          const metEl = row.querySelector('.js-bmr-row-met');
          const minEl = row.querySelector('.js-bmr-row-min');
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

      const palObj = PAL_CALCULATOR_CORE.calculateStandardMet({ activities });
      palVal = palObj.pal;
      palCalculated = true;
    }

    // 3. TEE & UI DISPLAY
    if (currentPalMode === 'none' || !palCalculated) {
      if (resPalCard) resPalCard.style.display = 'none';
      if (resTeeCard) resTeeCard.style.display = 'none';
      if (resDesc) resDesc.textContent = `Dine tal giver et hvilestofskifte (BMR) på ${bmrKcal.toLocaleString('da-DK')} kcal/dag i ren hvile.`;
    } else {
      if (resPalCard) resPalCard.style.display = 'flex';
      if (resTeeCard) resTeeCard.style.display = 'flex';

      const cat = PAL_CALCULATOR_CORE.getPalCategory(palVal);
      if (resPalVal) resPalVal.textContent = palVal.toFixed(2).replace('.', ',');
      if (resPalLabel) resPalLabel.textContent = cat.label;

      const teeKcal = Math.round(bmrKcal * palVal);
      const teeKJ = Math.round(bmrKJ * palVal);
      const teeSee = Math.round(seeKcal * palVal);

      if (resTeeKcal) resTeeKcal.textContent = teeKcal.toLocaleString('da-DK');
      if (resTeeKj) resTeeKj.textContent = `${teeKJ.toLocaleString('da-DK')} kJ / dag`;
      if (resTeeSee) resTeeSee.textContent = `SEE: ±${teeSee} kcal/dag`;

      if (resDesc) resDesc.textContent = `For at holde vægten stabil (dit ligevægtsindtag), skal du indtage ca. ${teeKcal.toLocaleString('da-DK')} kcal om dagen.`;
    }

    if (resMeta) {
      let metaText = `Formel til hvilestofskifte: ${bmrRes.getFormulaName()}`;
      if (bmrRes.getLBM() > 0) {
        metaText += ` (Mager masse / FFM: ${bmrRes.getLBM().toFixed(1)} kg)`;
      }
      resMeta.textContent = metaText;
    }

    container.dispatchEvent(new CustomEvent('mp-bmr-calculated', {
      bubbles: true,
      detail: { bmrKcal, bmrKJ, pal: palVal, palMode: currentPalMode, formula: bmrRes.getFormulaKey() }
    }));
  }

  // EVENT LISTENERS
  if (palEnableBtn) {
    palEnableBtn.addEventListener('click', () => switchPalMode('simple'));
  }

  if (palDisableBtn) {
    palDisableBtn.addEventListener('click', () => switchPalMode('none'));
  }

  if (bodyFatOverlay) {
    bodyFatOverlay.addEventListener('click', () => {
      setFatUnlocked(true);
      if (bodyFatInput) bodyFatInput.focus();
    });
  }

  genderBtns.forEach(btn => {
    btn.addEventListener('click', () => switchGender(btn.getAttribute('data-gender')));
  });

  palModeBtns.forEach(btn => {
    btn.addEventListener('click', () => switchPalMode(btn.getAttribute('data-pal-mode')));
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

  if (unlockMetNormal) {
    unlockMetNormal.addEventListener('change', (e) => {
      const isUnlocked = e.target.checked;
      normMetInputs.forEach(input => {
        if (isUnlocked) {
          input.removeAttribute('readonly');
          input.classList.remove('mp-bmr-input-locked');
        } else {
          input.setAttribute('readonly', 'readonly');
          input.classList.add('mp-bmr-input-locked');
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

  container.querySelectorAll('.js-bmr-input, .js-bmr-pal-input, .js-bmr-norm-met, .js-bmr-norm-min, .js-bmr-adv-sove-min').forEach(input => {
    ['input', 'change', 'keyup'].forEach(ev => input.addEventListener(ev, calculate));
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}

      switchGender('man');
      if (ageInput) ageInput.value = '';
      if (heightInput) heightInput.value = '';
      if (weightInput) weightInput.value = '';
      setFatUnlocked(false);

      activeFormulaKey = 'recommended_formula';
      isFormulaOverride = false;
      toggleFormulaPicker(false);

      basePalRadios.forEach((r, idx) => {
        r.checked = (idx === 1);
        const parent = r.closest('.mp-pal-radio-label');
        if (parent) parent.classList.toggle('is-selected', r.checked);
      });

      if (modHoursInput) modHoursInput.value = '0';
      if (vigHoursInput) vigHoursInput.value = '0';

      if (builderContainer) builderContainer.innerHTML = '';
      if (advSoveMinInput) advSoveMinInput.value = '480';

      container.querySelectorAll('.js-section-info-overlay').forEach(o => o.style.display = 'none');

      switchPalMode(defaultPalMode);
      calculate();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      setTimeout(() => {
        if (typeof html2canvas !== 'undefined') {
          html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'bmr-dagligt-energiforbrug.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
          });
        }
      }, 100);
    });
  }

  loadState();
}

export const initCalculator = initBmrCalculatorUI;