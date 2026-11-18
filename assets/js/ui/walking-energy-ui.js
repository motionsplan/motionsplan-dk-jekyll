// assets/js/ui/walking-energy-ui.js
import { RUNNING_WALKING_CORE } from '../core/running-walking.js';

export function initWalkingEnergyUI(container, calcId = 'walking-energy') {
  if (!container) return;

  const STORAGE_KEY = `mp_walking_energy_state_${calcId}`;

  // Inputs
  const formulaInput = container.querySelector('[data-input="formula"]');
  const weightInput = container.querySelector('[data-input="weight"]');
  const speedInput = container.querySelector('[data-input="speed"]');
  const durationInput = container.querySelector('[data-input="duration"]');
  const gradeInput = container.querySelector('[data-input="grade"]');
  const loadInput = container.querySelector('[data-input="load"]');
  const loadWrapper = container.querySelector('.js-walk-load-wrapper');

  // MET Info Element
  const metInfoBox = container.querySelector('.js-walk-met-info');

  // Outputs
  const resTotal = container.querySelector('.js-walk-res-total');
  const resTotalLbl = container.querySelector('.js-walk-res-total-lbl');
  const resKm = container.querySelector('.js-walk-res-km');
  const resMin = container.querySelector('.js-walk-res-min');
  const resDist = container.querySelector('.js-walk-res-dist');
  const resMeta = container.querySelector('.js-walk-res-meta');

  // Actions
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  function saveState() {
    try {
      const state = {
        formula: formulaInput ? formulaInput.value : 'acsm',
        weight: weightInput ? weightInput.value : '',
        speed: speedInput ? speedInput.value : '',
        duration: durationInput ? durationInput.value : '60',
        grade: gradeInput ? gradeInput.value : '',
        load: loadInput ? loadInput.value : ''
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (formulaInput && state.formula) formulaInput.value = state.formula;
        if (weightInput && state.weight !== undefined) weightInput.value = state.weight;
        if (speedInput && state.speed !== undefined) speedInput.value = state.speed;
        if (durationInput && state.duration !== undefined) durationInput.value = state.duration;
        if (gradeInput && state.grade !== undefined) gradeInput.value = state.grade;
        if (loadInput && state.load !== undefined) loadInput.value = state.load;
      }
    } catch (e) {}
  }

  function calculate() {
    const formula = formulaInput ? formulaInput.value : 'acsm';

    // Håndter rygsæk-feltets tilstand baseret på valgt beregningsmodel
    if (formula === 'pandolf') {
      if (loadInput) loadInput.disabled = false;
      if (loadWrapper) {
        loadWrapper.style.opacity = '1';
        loadWrapper.style.pointerEvents = 'auto';
      }
    } else {
      if (loadInput) {
        loadInput.disabled = true;
        loadInput.value = ''; // Nulstil værdi når Pandolf fravælges
      }
      if (loadWrapper) {
        loadWrapper.style.opacity = '0.4';
        loadWrapper.style.pointerEvents = 'none';
      }
    }

    saveState();

    const bw = weightInput ? parseFloat(weightInput.value) || 0 : 0;
    const speed = speedInput ? parseFloat(speedInput.value) || 0 : 0;
    const duration = durationInput ? parseFloat(durationInput.value) || 0 : 0;
    const grade = gradeInput ? parseFloat(gradeInput.value) || 0 : 0;
    const load = loadInput ? parseFloat(loadInput.value) || 0 : 0;

    const res = RUNNING_WALKING_CORE.calculateWalking({
      formula,
      bw,
      speed,
      duration,
      grade,
      load
    });

    // Opdater MET Info-boks
    if (formula === 'met' && res.isValid) {
      if (metInfoBox) {
        metInfoBox.style.display = 'block';
        metInfoBox.innerHTML = `
          <strong>💡 MET-værdi: ${res.metVal.toFixed(1)}</strong><br>
          <span style="color: #64748b;">Estimeret ud fra Compendium of Physical Activities for gang ved ${speed} km/t.</span>
        `;
      }
    } else if (metInfoBox) {
      metInfoBox.style.display = 'none';
    }

    // Opdater bund-meta (Standardafvigelse, Formel & evt. MET-værdi)
    if (resMeta) {
      if (formula === 'pandolf') {
        resMeta.textContent = 'Standardafvigelse: ±10% | Model: Pandolf et al. (1977)';
      } else if (formula === 'met') {
        const metStr = res.isValid && res.metVal ? ` (MET: ${res.metVal.toFixed(1)})` : '';
        resMeta.textContent = `Standardafvigelse: ±15-20% | Model: Compendium of Physical Activities${metStr}`;
      } else {
        resMeta.textContent = 'Standardafvigelse: ±10-15% | Model: ACSM Metabolic Equations';
      }
    }

    if (res.isValid) {
      const distanceKm = speed * (duration / 60);

      if (resTotal) resTotal.textContent = Math.round(res.totalKcal);
      if (resTotalLbl) resTotalLbl.textContent = `Samlet forbrænding på ${duration} min (kcal)`;
      if (resKm) resKm.textContent = res.kcalKm.toFixed(1);
      if (resMin) resMin.textContent = res.kcalMin.toFixed(1);
      if (resDist) resDist.textContent = distanceKm.toFixed(2);

    } else {
      if (resTotal) resTotal.textContent = '-';
      if (resTotalLbl) resTotalLbl.textContent = 'Samlet kalorieforbrænding (kcal)';
      if (resKm) resKm.textContent = '-';
      if (resMin) resMin.textContent = '-';
      if (resDist) resDist.textContent = '-';
    }
  }

  // Event Listeners
  container.querySelectorAll('.js-walk-input').forEach(input => {
    ['input', 'change', 'keyup'].forEach(e => input.addEventListener(e, calculate));
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      container.querySelectorAll('input').forEach(i => i.value = '');
      if (durationInput) durationInput.value = '60';
      if (formulaInput) formulaInput.value = 'acsm';
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
            link.download = 'kalorieberegner-gang-rapport.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
          });
        }
      }, 100);
    });
  }

  // Opstart
  loadState();
  calculate();
}

export const initCalculator = initWalkingEnergyUI;