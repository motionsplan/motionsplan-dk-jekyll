// assets/js/ui/vo2-rer-ui.js
import {
  VO2_FORMULA_DEFINITIONS,
  getResolvedVo2FormulaKey,
  getSubstrateUtilization,
  calculateRER,
  calculateGrossEfficiency,
  calculateCyclingEconomy
} from '../core/energy-core.js';

export function initVo2RerUI(container, calcId = 'vo2-rer-calculator') {
  if (!container) return;

  const pagePath = window.location.pathname.replace(/[^a-zA-Z0-9_-]/g, '_');
  const STORAGE_KEY = `mp_vo2rer_state_v9_${calcId}_${pagePath}`;

  let activeFormulaKey = 'recommended_formula';
  let currentRerInputMode = 'direct';

  // Inputs
  const inputs = container.querySelectorAll('.js-vo2-input');
  const rerModeBtns = container.querySelectorAll('.js-rer-mode-btn');
  const rerDirectWrapper = container.querySelector('.js-rer-direct-wrapper');
  const vco2Wrapper = container.querySelector('.js-vco2-wrapper');

  // Formel-elementer
  const formulaBar = container.querySelector('.js-vo2-formula-bar');
  const manualWrapper = container.querySelector('.js-vo2-manual-dropdown-wrapper');
  const pickerContainer = container.querySelector('.js-vo2-picker-container');

  // Outputs (3 Top-kort)
  const resWatts = container.querySelector('.js-res-watts');
  const resKcalMin = container.querySelector('.js-res-kcalmin');
  const resRerVal = container.querySelector('.js-res-rer-val');

  // Outputs (2 Substrat-kort + Badges)
  const resChoPct = container.querySelector('.js-res-cho-pct');
  const resChoRate = container.querySelector('.js-res-cho-rate');
  const resChoKcal = container.querySelector('.js-res-cho-kcal');

  const resFatPct = container.querySelector('.js-res-fat-pct');
  const resFatRate = container.querySelector('.js-res-fat-rate');
  const resFatKcal = container.querySelector('.js-res-fat-kcal');

  // Slider Bar
  const barCho = container.querySelector('.js-bar-cho');
  const barFat = container.querySelector('.js-bar-fat');

  // Efficiency / Economy Outputs
  const efficiencyWrapper = container.querySelector('.js-efficiency-wrapper');
  const resEfficiency = container.querySelector('.js-res-efficiency');
  const resEconomy = container.querySelector('.js-res-economy');

  const resSummaryText = container.querySelector('.js-res-summary-text');

  // Actions
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  function openInfoOverlay(btn) {
    const resolvedKey = getResolvedVo2FormulaKey(activeFormulaKey);
    const activeDef = VO2_FORMULA_DEFINITIONS[resolvedKey];

    const overlay = container.querySelector('.js-section-info-overlay');
    const body = container.querySelector('.js-info-overlay-body');
    if (overlay && body) {
      body.innerHTML = `
        <h4 style="margin:0 0 0.5rem 0; font-size:0.95rem; font-weight:800; color:#0f172a;">🔬 Indirekte Kalorimetri & Formelpraecision</h4>
        <p style="margin:0 0 0.5rem 0; font-size:0.8rem; color:#475569;"><strong>VO₂ (iltoptagelse):</strong> Mængden af optaget ilt pr. minut.</p>
        <p style="margin:0 0 0.5rem 0; font-size:0.8rem; color:#475569;"><strong>R-værdi (RER):</strong> Udskilt CO₂ divideret med optaget O₂ (0.70 = 100% fedt, 1.00 = 100% kulhydrat).</p>
        <p style="margin:0 0 0.5rem 0; font-size:0.8rem; color:#475569;"><strong>Formelspecifik SEE:</strong> Den valgte formel (<em>${activeDef.name}</em>) har en indkodet estimat-standardfejl på <strong>${activeDef.see}</strong>.</p>
        <p style="margin:0; font-size:0.775rem; color:#64748b;"><strong>Ydre Watt & Nyttevirkning:</strong> Angives ydre effekt, beregnes brutto nyttevirkning samt cykeløkonomi i kJ/L.</p>
      `;
      overlay.style.display = 'flex';
    }
  }

  function setRerInputMode(mode) {
    currentRerInputMode = mode;
    rerModeBtns.forEach(btn => {
      btn.classList.toggle('is-active', btn.getAttribute('data-rer-mode') === mode);
    });

    if (mode === 'direct') {
      if (rerDirectWrapper) rerDirectWrapper.style.display = 'block';
      if (vco2Wrapper) vco2Wrapper.style.display = 'none';
    } else {
      if (rerDirectWrapper) rerDirectWrapper.style.display = 'none';
      if (vco2Wrapper) vco2Wrapper.style.display = 'block';
    }

    calculate();
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

    const availableKeys = Object.keys(VO2_FORMULA_DEFINITIONS);

    pickerContainer.innerHTML = availableKeys.map(key => {
      const f = VO2_FORMULA_DEFINITIONS[key];
      const isSelected = key === activeFormulaKey;
      const isAuto = key === 'recommended_formula';

      return `
        <div class="mp-vo2-picker-card ${isSelected ? 'is-selected' : ''}" data-formula-key="${key}">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
            <div style="display: flex; align-items: center; gap: 0.35rem;">
              <strong style="font-size: 0.85rem; color: #0f172a;">${f.name}</strong>
              ${isAuto ? '<span class="mp-vo2-rec-tag">⭐ Anbefalet</span>' : ''}
              ${f.see ? `<span style="font-size:0.65rem; font-weight:700; color:#475569; background:#f1f5f9; padding:2px 5px; border-radius:4px;">SEE: ${f.see}</span>` : ''}
            </div>
            <span class="mp-vo2-check-icon ${isSelected ? 'is-selected' : ''}">✓</span>
          </div>
          <div style="font-size: 0.725rem; color: #475569; line-height: 1.35;">${f.desc}</div>
        </div>
      `;
    }).join('');

    pickerContainer.querySelectorAll('.mp-vo2-picker-card').forEach(card => {
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
        activeFormulaKey,
        currentRerInputMode,
        vo2: container.querySelector('[data-key="vo2"]')?.value || '1.89',
        rer: container.querySelector('[data-key="rer"]')?.value || '0.90',
        vco2: container.querySelector('[data-key="vco2"]')?.value || '1.70',
        workrate: container.querySelector('[data-key="workrate"]')?.value || '100'
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (state.activeFormulaKey) activeFormulaKey = state.activeFormulaKey;
        if (state.currentRerInputMode) setRerInputMode(state.currentRerInputMode);
        if (state.vo2 && container.querySelector('[data-key="vo2"]')) container.querySelector('[data-key="vo2"]').value = state.vo2;
        if (state.rer && container.querySelector('[data-key="rer"]')) container.querySelector('[data-key="rer"]').value = state.rer;
        if (state.vco2 && container.querySelector('[data-key="vco2"]')) container.querySelector('[data-key="vco2"]').value = state.vco2;
        if (state.workrate && container.querySelector('[data-key="workrate"]')) container.querySelector('[data-key="workrate"]').value = state.workrate;
      }
    } catch (e) {}
  }

  function calculate() {
    saveState();

    const vo2Lmin = parseFloat(container.querySelector('[data-key="vo2"]')?.value || 0);
    const vco2Lmin = parseFloat(container.querySelector('[data-key="vco2"]')?.value || 0);
    const workrateWatt = parseFloat(container.querySelector('[data-key="workrate"]')?.value || 0);

    let rer = 0.90;
    if (currentRerInputMode === 'vco2') {
      rer = calculateRER(vco2Lmin, vo2Lmin);
    } else {
      rer = parseFloat(container.querySelector('[data-key="rer"]')?.value || 0.85);
    }

    const isAuto = activeFormulaKey === 'recommended_formula';
    const resolvedKey = getResolvedVo2FormulaKey(activeFormulaKey);
    const resolvedDef = VO2_FORMULA_DEFINITIONS[resolvedKey];

    // OPDATER FORMEL BADGE (DYNAMISK SEE HENTET FRA FORMELOBJEKTET)
    if (formulaBar && resolvedDef) {
      formulaBar.innerHTML = `
        <div class="mp-vo2-badge-header">
          <div class="mp-vo2-badge-title-group">
            <strong class="mp-vo2-badge-title">${resolvedDef.name}</strong>
            ${isAuto ? '<span class="mp-vo2-rec-tag">⭐ Anbefalet</span>' : ''}
            ${resolvedDef.see ? `<span style="font-size:0.65rem; font-weight:700; color:#475569; background:#ffffff; padding:2px 6px; border-radius:4px; border:1px solid #cbd5e1;">SEE: ${resolvedDef.see}</span>` : ''}
          </div>
          <button type="button" class="js-vo2-toggle-override mp-vo2-btn-gear" title="Skift energiformel">
            ⚙️
          </button>
        </div>
        <div style="font-size: 0.725rem; color: #475569; line-height: 1.35;">
          ${resolvedDef.desc}
        </div>
      `;

      const gearBtn = formulaBar.querySelector('.js-vo2-toggle-override');
      if (gearBtn) {
        gearBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleFormulaPicker();
        });
      }
    }

    renderFormulaPicker();

    if (vo2Lmin <= 0 || rer <= 0) {
      if (resWatts) resWatts.textContent = '-';
      if (resKcalMin) resKcalMin.textContent = '-';
      if (resRerVal) resRerVal.textContent = '-';
      if (resChoPct) resChoPct.textContent = '- %';
      if (resChoRate) resChoRate.textContent = '- g/t';
      if (resChoKcal) resChoKcal.textContent = '- kcal/min';
      if (resFatPct) resFatPct.textContent = '- %';
      if (resFatRate) resFatRate.textContent = '- g/t';
      if (resFatKcal) resFatKcal.textContent = '- kcal/min';
      if (barCho) barCho.style.width = '50%';
      if (barFat) barFat.style.width = '50%';
      if (efficiencyWrapper) efficiencyWrapper.style.display = 'none';
      if (resSummaryText) resSummaryText.textContent = 'Indtast måleværdier for at beregne energiforbrug.';
      return;
    }

    // Beregning via den valgte formel
    const watts = resolvedDef.calcInWatts(vo2Lmin, rer);
    const kcalPerMin = (watts * 60) / 4184;

    const sub = getSubstrateUtilization(rer);
    
    const choKcalPerMin = kcalPerMin * (sub.choPct / 100);
    const choGramsPerHour = (choKcalPerMin * 60) / 4.1;

    const fatKcalPerMin = kcalPerMin * (sub.fatPct / 100);
    const fatGramsPerHour = (fatKcalPerMin * 60) / 9.4;

    // Opdater 3 Top-kort
    if (resWatts) resWatts.textContent = Math.round(watts).toLocaleString('da-DK');
    if (resKcalMin) resKcalMin.textContent = kcalPerMin.toFixed(1).replace('.', ',');
    if (resRerVal) resRerVal.textContent = rer.toFixed(2).replace('.', ',');

    // Opdater 2 Substrat-kort
    const choPctFormatted = sub.choPct.toString().replace('.', ',');
    const fatPctFormatted = sub.fatPct.toString().replace('.', ',');

    if (resChoPct) resChoPct.textContent = `${choPctFormatted}%`;
    if (resChoRate) resChoRate.textContent = `${Math.round(choGramsPerHour)} g/t`;
    if (resChoKcal) resChoKcal.textContent = `${choKcalPerMin.toFixed(1).replace('.', ',')} kcal/min`;

    if (resFatPct) resFatPct.textContent = `${fatPctFormatted}%`;
    if (resFatRate) resFatRate.textContent = `${Math.round(fatGramsPerHour)} g/t`;
    if (resFatKcal) resFatKcal.textContent = `${fatKcalPerMin.toFixed(1).replace('.', ',')} kcal/min`;

    // Opdater Substrat-Slider
    if (barCho) barCho.style.width = `${sub.choPct}%`;
    if (barFat) barFat.style.width = `${sub.fatPct}%`;

    // Beregn Nyttevirkning & Cykeløkonomi hvis Watt > 0
    if (workrateWatt > 0) {
      const grossEfficiency = calculateGrossEfficiency(workrateWatt, watts);
      const cyclingEconomy = calculateCyclingEconomy(workrateWatt, vo2Lmin);

      if (resEfficiency) resEfficiency.textContent = `${grossEfficiency.toString().replace('.', ',')} %`;
      if (resEconomy) resEconomy.textContent = `${cyclingEconomy.toString().replace('.', ',')} kJ/L`;
      if (efficiencyWrapper) efficiencyWrapper.style.display = 'grid';
    } else {
      if (efficiencyWrapper) efficiencyWrapper.style.display = 'none';
    }

    // DYNAMISK DOKUMENTERENDE EKSEMPELTEKST (INKL. FORMEL EGENSKABER)
    if (resSummaryText) {
      let text = '';
      const formattedVo2 = vo2Lmin.toFixed(2).replace('.', ',');
      const formattedRer = rer.toFixed(2).replace('.', ',');
      const formattedWatts = watts.toFixed(2).replace('.', ',');

      if (workrateWatt > 0) {
        const grossEfficiency = calculateGrossEfficiency(workrateWatt, watts);
        text = `Lad os sige, at du arbejder med <strong>${workrateWatt}W</strong> (ydre belastning) og iltoptagelsen er målt til <strong>${formattedVo2} L O₂/min</strong> med en R-værdi på <strong>${formattedRer}</strong>. Baseret på <em>${resolvedDef.name}</em> (SEE: ${resolvedDef.see}) er energiforbruget <strong>${formattedWatts} J/s</strong> (svarende til <strong>${kcalPerMin.toFixed(1).replace('.', ',')} kcal/min</strong>). Din brutto nyttevirkning udregnes her til <strong>${grossEfficiency.toString().replace('.', ',')}%</strong>.`;
      } else {
        text = `Ved en målt iltoptagelse på <strong>${formattedVo2} L O₂/min</strong> og en R-værdi på <strong>${formattedRer}</strong> udgør det samlede metaboliske energiforbrug <strong>${formattedWatts} J/s</strong> (eller <strong>${kcalPerMin.toFixed(1).replace('.', ',')} kcal/min</strong>) målt via <em>${resolvedDef.name}</em> (SEE: ${resolvedDef.see}).`;
      }

      text += ` Brændstofsammensætningen er <strong>${choPctFormatted}% kulhydrat</strong> (${Math.round(choGramsPerHour)} g/t / ${choKcalPerMin.toFixed(1).replace('.', ',')} kcal/min) og <strong>${fatPctFormatted}% fedt</strong> (${Math.round(fatGramsPerHour)} g/t / ${fatKcalPerMin.toFixed(1).replace('.', ',')} kcal/min).`;

      resSummaryText.innerHTML = text;
    }
  }

  // Events
  rerModeBtns.forEach(btn => btn.addEventListener('click', () => setRerInputMode(btn.getAttribute('data-rer-mode'))));
  inputs.forEach(i => ['input', 'change', 'keyup'].forEach(ev => i.addEventListener(ev, calculate)));

  container.querySelectorAll('.js-info-btn').forEach(btn => btn.addEventListener('click', (e) => openInfoOverlay(e.currentTarget)));
  container.querySelectorAll('.js-info-close').forEach(btn => btn.addEventListener('click', () => {
    const o = container.querySelector('.js-section-info-overlay');
    if (o) o.style.display = 'none';
  }));

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      activeFormulaKey = 'recommended_formula';
      setRerInputMode('direct');
      toggleFormulaPicker(false);
      container.querySelector('[data-key="vo2"]').value = '1.89';
      container.querySelector('[data-key="rer"]').value = '0.90';
      container.querySelector('[data-key="vco2"]').value = '1.70';
      container.querySelector('[data-key="workrate"]').value = '100';
      calculate();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      setTimeout(() => {
        if (typeof html2canvas !== 'undefined') {
          html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'vo2-rer-test-rapport.png';
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

export const initCalculator = initVo2RerUI;