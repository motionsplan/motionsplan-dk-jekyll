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

  const STORAGE_KEY = `mp_skridt_km_state_v5_${calcId}`;

  // Separat tilstand for skridt vs km
  let currentMode = 'stepsToKm'; // 'stepsToKm' or 'kmToSteps'
  let stepsVal = '10000';
  let kmVal = '7.5';
  let modalGender = 'man';
  let modalHeight = '180';

  // UI Elements
  const modeBtns = container.querySelectorAll('.js-mode-btn');
  const primaryLabel = container.querySelector('.js-primary-label');
  const primaryInput = container.querySelector('.js-primary-input');
  const paceSelect = container.querySelector('.js-pace-select');
  const stepLengthInput = container.querySelector('.js-step-length-input');

  // Modal Elements
  const estimatorModal = container.querySelector('.js-estimator-modal');
  const openEstimerBtn = container.querySelector('.js-open-estimer-btn');
  const closeModalBtn = container.querySelector('.js-close-modal-btn');
  const applyModalBtn = container.querySelector('.js-apply-modal-btn');
  const modalGenderBtns = container.querySelectorAll('.js-modal-gender-btn');
  const modalHeightInput = container.querySelector('.js-modal-height-input');
  const modalStepPreview = container.querySelector('.js-modal-step-preview');

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
      <p style="margin:0 0 0.5rem 0; font-size:0.8rem; color:#475569;">Omregneren benytter din personlige trinlængde i cm til præcist at beregne distancen.</p>
      <p style="margin:0; font-size:0.775rem; color:#64748b;">Kender du ikke din trinlængde, kan du trykke på lineal-ikonet (📐) for at udregne den ud fra dit køn og din højde.</p>
    `
  };

  function openInfoOverlay(btn) {
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
        stepsVal,
        kmVal,
        modalGender,
        modalHeight,
        stepLengthCm: stepLengthInput ? stepLengthInput.value : '74.7',
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
        if (state.stepsVal !== undefined) stepsVal = state.stepsVal;
        if (state.kmVal !== undefined) kmVal = state.kmVal;
        if (state.modalGender) setModalGender(state.modalGender);
        if (state.modalHeight && modalHeightInput) {
          modalHeight = state.modalHeight;
          modalHeightInput.value = modalHeight;
        }
        if (state.stepLengthCm && stepLengthInput) stepLengthInput.value = state.stepLengthCm;
        if (state.pace && paceSelect) paceSelect.value = state.pace;
        if (state.mode) setMode(state.mode);
      } else {
        setModalGender('man');
        setMode('stepsToKm');
      }
    } catch (e) {
      setMode('stepsToKm');
    }
  }

  function setMode(mode) {
    if (primaryInput) {
      if (currentMode === 'stepsToKm') {
        stepsVal = primaryInput.value;
      } else {
        kmVal = primaryInput.value;
      }
    }

    currentMode = mode;

    modeBtns.forEach(btn => {
      btn.classList.toggle('is-active', btn.getAttribute('data-mode') === mode);
    });

    if (mode === 'stepsToKm') {
      if (primaryLabel) primaryLabel.textContent = 'Antal skridt';
      if (primaryInput) {
        primaryInput.placeholder = 'fx 10000';
        primaryInput.value = stepsVal || '10000';
      }
      if (resLabel) resLabel.textContent = 'Svarer til i kilometer';
      if (resUnit) resUnit.textContent = 'km';
    } else {
      if (primaryLabel) primaryLabel.textContent = 'Antal kilometer (km)';
      if (primaryInput) {
        primaryInput.placeholder = 'fx 7.5';
        primaryInput.value = kmVal || '7.5';
      }
      if (resLabel) resLabel.textContent = 'Svarer til i skridt';
      if (resUnit) resUnit.textContent = 'skridt';
    }

    calculate();
  }

  function setModalGender(gender) {
    modalGender = gender;
    modalGenderBtns.forEach(btn => {
      btn.classList.toggle('is-selected', btn.getAttribute('data-gender') === gender);
    });
    updateModalPreview();
  }

  function updateModalPreview() {
    const h = parseFloat(modalHeightInput ? modalHeightInput.value : 180) || 180;
    modalHeight = h.toString();
    const est = calculateStepLength(h, modalGender);
    if (modalStepPreview) modalStepPreview.textContent = `${est.toString().replace('.', ',')} cm`;
  }

  function calculate() {
    const rawStepLen = stepLengthInput ? stepLengthInput.value.replace(',', '.') : '74.7';
    const stepLen = parseFloat(rawStepLen) || 0;

    const rawPrimary = primaryInput ? primaryInput.value.replace(',', '.') : '0';
    const val = parseFloat(rawPrimary) || 0;
    const pace = paceSelect ? paceSelect.value : 'normal';

    if (currentMode === 'stepsToKm') {
      stepsVal = primaryInput ? primaryInput.value : '10000';
    } else {
      kmVal = primaryInput ? primaryInput.value : '7.5';
    }

    saveState();

    if (val <= 0 || stepLen <= 0) {
      if (resVal) resVal.textContent = '-';
      if (resSub) resSub.textContent = 'Indtast værdier for at se resultatet.';
      return;
    }

    if (currentMode === 'stepsToKm') {
      const km = stepsToKm(val, stepLen);
      const timeMin = estimateTimeMinutes(km, pace);
      if (resVal) resVal.textContent = km.toLocaleString('da-DK');
      if (resSub) resSub.textContent = `Estimeret gangtid: ${formatMinutes(timeMin)} (Trinlængde: ${stepLen.toString().replace('.', ',')} cm)`;
    } else {
      const steps = kmToSteps(val, stepLen);
      const timeMin = estimateTimeMinutes(val, pace);
      if (resVal) resVal.textContent = steps.toLocaleString('da-DK');
      if (resSub) resSub.textContent = `Estimeret gangtid: ${formatMinutes(timeMin)} (Trinlængde: ${stepLen.toString().replace('.', ',')} cm)`;
    }
  }

  // EVENT LISTENERS
  modeBtns.forEach(btn => btn.addEventListener('click', () => setMode(btn.getAttribute('data-mode'))));

  if (primaryInput) {
    ['input', 'change', 'keyup'].forEach(ev => primaryInput.addEventListener(ev, calculate));
  }

  if (stepLengthInput) {
    ['input', 'change', 'keyup'].forEach(ev => stepLengthInput.addEventListener(ev, calculate));
  }

  if (paceSelect) paceSelect.addEventListener('change', calculate);

  // Modal Lyttere
  if (openEstimerBtn && estimatorModal) {
    openEstimerBtn.addEventListener('click', () => {
      estimatorModal.style.display = 'flex';
      updateModalPreview();
    });
  }

  if (closeModalBtn && estimatorModal) {
    closeModalBtn.addEventListener('click', () => {
      estimatorModal.style.display = 'none';
    });
  }

  modalGenderBtns.forEach(btn => btn.addEventListener('click', () => setModalGender(btn.getAttribute('data-gender'))));

  if (modalHeightInput) {
    ['input', 'change', 'keyup'].forEach(ev => modalHeightInput.addEventListener(ev, updateModalPreview));
  }

  if (applyModalBtn) {
    applyModalBtn.addEventListener('click', () => {
      const h = parseFloat(modalHeightInput ? modalHeightInput.value : 180) || 180;
      const est = calculateStepLength(h, modalGender);
      if (stepLengthInput) {
        stepLengthInput.value = est.toFixed(1);
      }
      if (estimatorModal) estimatorModal.style.display = 'none';
      calculate();
    });
  }

  // Info overlay
  container.querySelectorAll('.js-info-btn').forEach(btn => btn.addEventListener('click', () => openInfoOverlay(btn)));
  container.querySelectorAll('.js-info-close').forEach(btn => btn.addEventListener('click', () => {
    const o = container.querySelector('.js-section-info-overlay');
    if (o) o.style.display = 'none';
  }));

  // Nulstil
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      stepsVal = '10000';
      kmVal = '7.5';
      modalGender = 'man';
      modalHeight = '180';
      if (modalHeightInput) modalHeightInput.value = '180';
      if (stepLengthInput) stepLengthInput.value = '74.7';
      if (paceSelect) paceSelect.value = 'normal';
      setModalGender('man');
      setMode('stepsToKm');
    });
  }

  // Billede rapport
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