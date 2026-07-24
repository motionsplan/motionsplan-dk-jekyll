// assets/js/ui/skridt-km-ui.js
import {
  calculateStepLength,
  stepsToKm,
  kmToSteps,
  estimateTimeMinutes,
  formatMinutes
} from '../core/skridt-core.js';

export function initSkridtKmUI(container, calcId = 'skridt-km-calculator') {
  if (!container) return;

  const STORAGE_KEY = `mp_skridt_km_state_${calcId}`;

  let currentMode = 'stepsToKm';
  let currentGender = 'man';
  let isManualStep = false;

  // Elements
  const modeBtns = container.querySelectorAll('.js-mode-btn');
  const primaryLabel = container.querySelector('.js-primary-label');
  const primaryInput = container.querySelector('.js-primary-input');

  const toggleManualCheck = container.querySelector('.js-toggle-manual-step');
  const autoStepWrapper = container.querySelector('.js-auto-step-wrapper');
  const manualStepWrapper = container.querySelector('.js-manual-step-wrapper');

  const genderBtns = container.querySelectorAll('.js-gender-btn');
  const heightInput = container.querySelector('.js-height-input');
  const manualStepInput = container.querySelector('.js-manual-step-input');
  const paceSelect = container.querySelector('.js-pace-select');

  // Result Elements
  const resLabel = container.querySelector('.js-res-label');
  const resVal = container.querySelector('.js-res-val');
  const resUnit = container.querySelector('.js-res-unit');
  const resSub = container.querySelector('.js-res-sub');

  // Actions
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  const INFO_TEXTS = {
    step_info: `
      <h4 style="margin:0 0 0.5rem 0; font-size:0.95rem; font-weight:800; color:#0f172a;">🚶‍♂️ Om Skridtomregning</h4>
      <p style="margin:0 0 0.5rem 0; font-size:0.8rem; color:#475569;">Beregneren estimerer din trinlængde ud fra din højde ganged med fysiologiske faktorer (0,415 for mænd / 0,413 for kvinder).</p>
      <p style="margin:0; font-size:0.775rem; color:#64748b;">Når du kender din trinlængde, svarer 10.000 skridt typisk til ca. 7,4 – 8,0 km for en voksen person.</p>
    `
  };

  function openOverlay(btn) {
    const type = btn.getAttribute('data-info-type');
    const overlay = container.querySelector('.js-section-info-overlay');
    const body = container.querySelector('.js-info-overlay-body');
    if (overlay && body) {
      body.innerHTML = INFO_TEXTS[type] || '';
      overlay.style.display = 'flex';
    }
  }

  function saveState() {
    try {
      const state = {
        mode: currentMode,
        gender: currentGender,
        isManualStep,
        primaryVal: primaryInput ? primaryInput.value : '',
        height: heightInput ? heightInput.value : '',
        manualStep: manualStepInput ? manualStepInput.value : '',
        pace: paceSelect ? paceSelect.value : 'normal'
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (state.mode) setMode(state.mode);
        if (state.gender) setGender(state.gender);
        if (state.isManualStep !== undefined) {
          isManualStep = state.isManualStep;
          if (toggleManualCheck) toggleManualCheck.checked = isManualStep;
          updateStepInputVisibilities();
        }
        if (primaryInput && state.primaryVal !== undefined) primaryInput.value = state.primaryVal;
        if (heightInput && state.height !== undefined) heightInput.value = state.height;
        if (manualStepInput && state.manualStep !== undefined) manualStepInput.value = state.manualStep;
        if (paceSelect && state.pace) paceSelect.value = state.pace;
      }
    } catch (e) {}
  }

  function setMode(mode) {
    currentMode = mode;
    modeBtns.forEach(btn => {
      btn.classList.toggle('is-active', btn.getAttribute('data-mode') === mode);
    });

    if (mode === 'stepsToKm') {
      if (primaryLabel) primaryLabel.textContent = 'Antal skridt (trin)';
      if (primaryInput) primaryInput.placeholder = 'fx 10000';
      if (resLabel) resLabel.textContent = 'Svarer til i kilometer';
      if (resUnit) resUnit.textContent = 'km';
    } else {
      if (primaryLabel) primaryLabel.textContent = 'Antal kilometer (km)';
      if (primaryInput) primaryInput.placeholder = 'fx 7.5';
      if (resLabel) resLabel.textContent = 'Svarer til i skridt';
      if (resUnit) resUnit.textContent = 'skridt';
    }
    calculate();
  }

  function setGender(gender) {
    currentGender = gender;
    genderBtns.forEach(btn => {
      btn.classList.toggle('is-selected', btn.getAttribute('data-gender') === gender);
    });
    calculate();
  }

  function updateStepInputVisibilities() {
    if (autoStepWrapper) autoStepWrapper.style.display = isManualStep ? 'none' : 'block';
    if (manualStepWrapper) manualStepWrapper.style.display = isManualStep ? 'block' : 'none';
  }

  function calculate() {
    saveState();

    let stepLen = 0;
    if (isManualStep) {
      stepLen = parseFloat(manualStepInput ? manualStepInput.value : 0) || 0;
    } else {
      const h = parseFloat(heightInput ? heightInput.value : 180) || 180;
      stepLen = calculateStepLength(h, currentGender);
      if (manualStepInput) manualStepInput.value = stepLen;
    }

    const val = parseFloat(primaryInput ? primaryInput.value : 0) || 0;
    const pace = paceSelect ? paceSelect.value : 'normal';

    if (val <= 0 || stepLen <= 0) {
      if (resVal) resVal.textContent = '-';
      if (resSub) resSub.textContent = 'Indtast værdier for at se resultatet.';
      return;
    }

    if (currentMode === 'stepsToKm') {
      const km = stepsToKm(val, stepLen);
      const timeMin = estimateTimeMinutes(km, pace);
      if (resVal) resVal.textContent = km.toLocaleString('da-DK');
      if (resSub) resSub.textContent = `Estimeret tid: ${formatMinutes(timeMin)} (Trinlængde: ${stepLen.toString().replace('.', ',')} cm)`;
    } else {
      const steps = kmToSteps(val, stepLen);
      const timeMin = estimateTimeMinutes(val, pace);
      if (resVal) resVal.textContent = steps.toLocaleString('da-DK');
      if (resSub) resSub.textContent = `Estimeret tid: ${formatMinutes(timeMin)} (Trinlængde: ${stepLen.toString().replace('.', ',')} cm)`;
    }
  }

  // Event Listeners
  modeBtns.forEach(btn => btn.addEventListener('click', () => setMode(btn.getAttribute('data-mode'))));
  genderBtns.forEach(btn => btn.addEventListener('click', () => setGender(btn.getAttribute('data-gender'))));

  if (toggleManualCheck) {
    toggleManualCheck.addEventListener('change', (e) => {
      isManualStep = e.target.checked;
      updateStepInputVisibilities();
      calculate();
    });
  }

  container.querySelectorAll('.js-primary-input, .js-height-input, .js-manual-step-input').forEach(i => {
    ['input', 'change', 'keyup'].forEach(ev => i.addEventListener(ev, calculate));
  });

  if (paceSelect) paceSelect.addEventListener('change', calculate);

  container.querySelectorAll('.js-info-btn').forEach(btn => btn.addEventListener('click', () => openOverlay(btn)));
  container.querySelectorAll('.js-info-close').forEach(btn => btn.addEventListener('click', () => {
    const o = container.querySelector('.js-section-info-overlay');
    if (o) o.style.display = 'none';
  }));

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      setMode('stepsToKm');
      setGender('man');
      isManualStep = false;
      if (toggleManualCheck) toggleManualCheck.checked = false;
      updateStepInputVisibilities();
      if (primaryInput) primaryInput.value = '10000';
      if (heightInput) heightInput.value = '180';
      if (paceSelect) paceSelect.value = 'normal';
      calculate();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      setTimeout(() => {
        if (typeof html2canvas !== 'undefined') {
          html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'skridt-km-rapport.png';
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

export const initCalculator = initSkridtKmUI;