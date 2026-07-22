// assets/js/ui/aastrand-etpunktstest-ui.js
import { AASTRAND_ETPUNKTSTEST_FORMULAS } from '../core/aastrand-etpunktstest.js';

export function initAAstrandEtpunktstestUI(container, calcId = 'aastrand-etpunktstest-all') {
  if (!container) return;

  const STORAGE_KEY = `mp_aastrand_etpunktstest_state_${calcId}`;
  const formulaEngine = AASTRAND_ETPUNKTSTEST_FORMULAS['aastrand-etpunktstest-all'];

  // DOM Køn-knapper
  const genderBtns = container.querySelectorAll('.js-astrand-gender');
  
  // DOM Inputs
  const ageInput = container.querySelector('[data-input="age"]');
  const weightInput = container.querySelector('[data-input="weight"]');
  const wattInput = container.querySelector('[data-input="watt"]');
  const hrInput = container.querySelector('[data-input="hr"]');

  // DOM Guides
  const wattGuide = container.querySelector('.js-astrand-watt-guide');

  // DOM Resultatfelter
  const resFitness = container.querySelector('.js-astrand-res-fitness');
  const resVo2 = container.querySelector('.js-astrand-res-vo2');
  const resAgeFactor = container.querySelector('.js-astrand-res-agefactor');
  const resBadge = container.querySelector('.js-astrand-res-badge');
  const scalePin = container.querySelector('.js-astrand-scale-pin');

  // Action Buttons
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  let currentGender = 'male';

  function saveState() {
    try {
      const state = {
        gender: currentGender,
        age: ageInput ? ageInput.value : '',
        weight: weightInput ? weightInput.value : '',
        watt: wattInput ? wattInput.value : '',
        hr: hrInput ? hrInput.value : ''
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (state.gender) currentGender = state.gender;
        if (ageInput && state.age !== undefined) ageInput.value = state.age;
        if (weightInput && state.weight !== undefined) weightInput.value = state.weight;
        if (wattInput && state.watt !== undefined) wattInput.value = state.watt;
        if (hrInput && state.hr !== undefined) hrInput.value = state.hr;
      }
    } catch (e) {}
  }

  function updateGenderUI(gender) {
    currentGender = gender;
    genderBtns.forEach(btn => {
      if (btn.getAttribute('data-gender') === gender) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (wattGuide) {
      if (gender === 'female') {
        wattGuide.textContent = '(Vejledende: 50–100W)';
      } else {
        wattGuide.textContent = '(Vejledende: 100–150W)';
      }
    }

    calculate();
  }

  function calculate() {
    saveState();

    const params = {
      gender: currentGender,
      age: ageInput ? parseFloat(ageInput.value) || 0 : 0,
      weight: weightInput ? parseFloat(weightInput.value) || 0 : 0,
      watt: wattInput ? parseFloat(wattInput.value) || 0 : 0,
      hr: hrInput ? parseFloat(hrInput.value) || 0 : 0
    };

    const res = formulaEngine ? formulaEngine.evaluate(params) : null;

    if (res && res.isValid) {
      if (resFitness) resFitness.textContent = res.fitnessLevel.toFixed(1);
      if (resVo2) resVo2.textContent = res.correctedVo2.toFixed(2);
      if (resAgeFactor) resAgeFactor.textContent = res.ageFactor.toFixed(2);

      if (resBadge) {
        resBadge.textContent = res.category.label;
        resBadge.style.backgroundColor = res.category.color;
      }

      if (scalePin) {
        const pct = Math.min(100, Math.max(0, ((res.fitnessLevel - 20) / (60 - 20)) * 100));
        scalePin.style.left = `${pct}%`;
      }
    } else {
      if (resFitness) resFitness.textContent = '-';
      if (resVo2) resVo2.textContent = '-';
      if (resAgeFactor) resAgeFactor.textContent = '-';
      if (resBadge) {
        resBadge.textContent = '-';
        resBadge.style.backgroundColor = '#94a3b8';
      }
      if (scalePin) scalePin.style.left = '0%';
    }
  }

  // Event Listeners
  genderBtns.forEach(btn => {
    btn.addEventListener('click', () => updateGenderUI(btn.getAttribute('data-gender')));
  });

  container.querySelectorAll('.js-astrand-input').forEach(input => {
    ['input', 'change', 'keyup'].forEach(e => input.addEventListener(e, calculate));
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      container.querySelectorAll('input').forEach(i => i.value = '');
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      updateGenderUI('male');
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      setTimeout(() => {
        if (typeof html2canvas !== 'undefined') {
          html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'aastrand-etpunktstest-rapport.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
          });
        }
      }, 100);
    });
  }

  // Opstart
  loadState();
  updateGenderUI(currentGender);
}

export const initCalculator = initAAstrandEtpunktstestUI;