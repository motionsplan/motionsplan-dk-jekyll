// assets/js/ui/activity-step-converter-ui.js
import { fetchStepData, calculateStepEquivalent } from '../core/activity-step-converter.js';

export async function initActivityStepUI(container, calcId = 'activity-step-converter') {
  if (!container) return;

  const pagePath = window.location.pathname.replace(/[^a-zA-Z0-9_-]/g, '_');
  const STORAGE_KEY = `mp_step_converter_state_${calcId}_${pagePath}`;

  const activitySelect = container.querySelector('.js-step-activity');
  const durationInput = container.querySelector('.js-step-duration');
  
  // Preset knapper
  const actPresetBtns = container.querySelectorAll('.js-preset-act');
  const timePresetBtns = container.querySelectorAll('.js-preset-time');

  // Outputs
  const resSteps = container.querySelector('.js-res-steps');
  const resRate = container.querySelector('.js-res-rate');
  const resKm = container.querySelector('.js-res-km');

  // Actions
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  // Hent data direkte fra Jekyll's JSON-endpoint
  const stepData = await fetchStepData();

  function populateSelect() {
    if (!activitySelect || !stepData.length) return;

    const categories = [...new Set(stepData.map(a => a.cat))];
    
    activitySelect.innerHTML = categories.map(cat => {
      const items = stepData.filter(a => a.cat === cat);
      const optionsHtml = items.map(item => `<option value="${item.key}">${item.name} (${item.stepsPerMin} skridt/min)</option>`).join('');
      return `<optgroup label="── ${cat} ──">${optionsHtml}</optgroup>`;
    }).join('');
  }

  function saveState() {
    try {
      const state = {
        activityKey: activitySelect?.value || 'bicycling_mod',
        durationMinutes: durationInput?.value || '30'
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (state.activityKey && activitySelect) activitySelect.value = state.activityKey;
        if (state.durationMinutes && durationInput) durationInput.value = state.durationMinutes;
      }
    } catch (e) {}
  }

  function calculate() {
    saveState();

    const activityKey = activitySelect?.value;
    const durationMinutes = durationInput?.value;

    const result = calculateStepEquivalent(activityKey, durationMinutes, stepData);

    if (!result.isValid) {
      if (resSteps) resSteps.textContent = '-';
      if (resRate) resRate.textContent = '-';
      if (resKm) resKm.textContent = '-';
      return;
    }

    if (resSteps) resSteps.textContent = result.totalSteps.toLocaleString('da-DK');
    if (resRate) resRate.textContent = result.stepsPerMin;
    if (resKm) resKm.textContent = result.estKm.toString().replace('.', ',');
  }

  // Initialisér UI og event handlers
  populateSelect();
  loadState();

  if (activitySelect) activitySelect.addEventListener('change', calculate);
  if (durationInput) {
    ['input', 'change', 'keyup'].forEach(ev => durationInput.addEventListener(ev, calculate));
  }

  // Genveje til Aktivitet
  actPresetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const actKey = btn.getAttribute('data-act');
      if (activitySelect && actKey) {
        activitySelect.value = actKey;
        calculate();
      }
    });
  });

  // Genveje til Varighed
  timePresetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const min = btn.getAttribute('data-min');
      if (durationInput) {
        durationInput.value = min;
        calculate();
      }
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      if (activitySelect) activitySelect.selectedIndex = 0;
      if (durationInput) durationInput.value = '30';
      calculate();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      setTimeout(() => {
        if (typeof html2canvas !== 'undefined') {
          html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'skridt-omregner-rapport.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
          });
        }
      }, 100);
    });
  }

  calculate();
}

export const initCalculator = initActivityStepUI;