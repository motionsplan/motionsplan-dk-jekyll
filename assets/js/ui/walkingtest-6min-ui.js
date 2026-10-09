// assets/js/ui/walkingtest-6min-ui.js
import { calculateWalkingTest6Min, getWalkingTestEvaluation, WALKING_TEST_FORMULAS } from '../core/walkingtest-6min.js';

export function initWalkingTest6Min(container) {
  if (!container) return;

  const distanceInput = container.querySelector('[name="wt6_distance"]');
  const ageInput = container.querySelector('[name="wt6_age"]');
  const heightInput = container.querySelector('[name="wt6_height"]');
  const weightInput = container.querySelector('[name="wt6_weight"]');
  const formulaSelect = container.querySelector('.js-wt6-formula-select');
  const formulaHint = container.querySelector('.js-wt6-formula-hint');

  // Progress Elements
  const progressText = container.querySelector('.js-wt6-progress-text');
  const progressBar = container.querySelector('.js-wt6-progress-bar');

  // Result DOM
  const resPercent = container.querySelector('.js-wt6-percent');
  const resDiffText = container.querySelector('.js-wt6-diff-text');
  const resEvalBadge = container.querySelector('.js-wt6-eval-badge');
  const summaryEl = container.querySelector('.js-wt6-summary-text');

  function saveState() {
    try {
      const genderEl = container.querySelector('input[name="wt6_gender"]:checked');
      const attemptEl = container.querySelector('input[name="wt6_attempt"]:checked');
      const state = {
        attempt: attemptEl ? attemptEl.value : 'first',
        formula: formulaSelect ? formulaSelect.value : 'auto',
        distance: distanceInput ? distanceInput.value : '',
        age: ageInput ? ageInput.value : '',
        height: heightInput ? heightInput.value : '',
        weight: weightInput ? weightInput.value : '',
        gender: genderEl ? genderEl.value : 'male'
      };
      localStorage.setItem('mp_wt6_state', JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem('mp_wt6_state');
      if (saved) {
        const state = JSON.parse(saved);
        if (state.attempt) {
          const radio = container.querySelector(`input[name="wt6_attempt"][value="${state.attempt}"]`);
          if (radio) radio.checked = true;
        }
        if (state.formula && formulaSelect) formulaSelect.value = state.formula;
        if (state.distance && distanceInput) distanceInput.value = state.distance;
        if (state.age && ageInput) ageInput.value = state.age;
        if (state.height && heightInput) heightInput.value = state.height;
        if (state.weight && weightInput) weightInput.value = state.weight;
        if (state.gender) {
          const radio = container.querySelector(`input[name="wt6_gender"][value="${state.gender}"]`);
          if (radio) radio.checked = true;
        }
      }
    } catch (e) {}
  }

  function calculate() {
    const distance = distanceInput ? distanceInput.value : '';
    const age = ageInput ? ageInput.value : '';
    const height = heightInput ? heightInput.value : '';
    const weight = weightInput ? weightInput.value : '';
    const genderEl = container.querySelector('input[name="wt6_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';
    
    const attemptEl = container.querySelector('input[name="wt6_attempt"]:checked');
    const attemptValue = attemptEl ? attemptEl.value : 'first';
    const chosenFormulaKey = formulaSelect ? formulaSelect.value : 'auto';

    // Bestem aktiv formel-nøgle
    let activeFormulaKey = chosenFormulaKey;
    if (chosenFormulaKey === 'auto') {
      activeFormulaKey = (attemptValue === 'second') ? 'gibbons' : 'enright';
    }

    const res = calculateWalkingTest6Min(distance, age, height, weight, gender, activeFormulaKey);

    // Opdater hint om aktiv formel under dropdown
    if (formulaHint) {
      const activeObj = WALKING_TEST_FORMULAS[activeFormulaKey];
      if (chosenFormulaKey === 'auto') {
        formulaHint.innerHTML = `<em>Auto-valgt: <strong>${activeObj.name}</strong> (${attemptValue === 'second' ? '2. forsøg' : '1. forsøg'}).</em>`;
      } else {
        formulaHint.innerHTML = `<em>Manuelt valgt: <strong>${activeObj.name}</strong>.</em>`;
      }
    }

    if (res && res.isValid) {
      if (resPercent) resPercent.textContent = `${res.percentOfNormal}%`;

      // +/- meter ift. gennemsnit
      const diff = res.distance - res.referenceMeter;
      const diffFormatted = diff >= 0 
        ? `+${diff} m i forhold til gennemsnit` 
        : `-${Math.abs(diff)} m i forhold til gennemsnit`;
      if (resDiffText) resDiffText.textContent = diffFormatted;

      // Progress bar
      const barPercent = Math.min(100, Math.round((res.distance / res.referenceMeter) * 100));
      if (progressText) {
        progressText.textContent = `${res.distance} m / ${res.referenceMeter} m (${res.percentOfNormal}%)`;
        progressText.style.color = '#15803d';
      }
      if (progressBar) progressBar.style.width = `${barPercent}%`;

      // Vurdering
      const evaluation = getWalkingTestEvaluation(res.percentOfNormal);
      if (resEvalBadge) {
        resEvalBadge.textContent = evaluation.label;
        resEvalBadge.style.backgroundColor = evaluation.color;
        resEvalBadge.style.color = '#ffffff';
      }

      // Dynamisk forklaringstekst i Boks 2
      if (summaryEl) {
        const diffText = diff >= 0 
          ? `<strong>+${diff} m længere</strong>` 
          : `<strong>${Math.abs(diff)} m kortere</strong>`;

        summaryEl.innerHTML = `Du gik ${diffText} end referenceværdien på ${res.referenceMeter} m for din alder, køn og vægt.`;
      }
    } else {
      resetResults();
    }
  }

  function resetResults() {
    if (progressText) {
      progressText.textContent = `- m / - m (0%)`;
      progressText.style.color = '#64748b';
    }
    if (progressBar) progressBar.style.width = '0%';

    if (resPercent) resPercent.textContent = '-';
    if (resDiffText) resDiffText.textContent = '-';
    if (resEvalBadge) {
      resEvalBadge.textContent = 'Mangler data';
      resEvalBadge.style.backgroundColor = '#e2e8f0';
      resEvalBadge.style.color = '#64748b';
    }
    if (summaryEl) {
      summaryEl.innerHTML = 'Indtast dine oplysninger og distance for at se din personlige sammenligning.';
    }
  }

  const allInputs = container.querySelectorAll('input, select');
  allInputs.forEach(input => {
    ['input', 'change', 'click', 'keyup'].forEach(eventType => {
      input.addEventListener(eventType, () => {
        saveState();
        calculate();
      });
    });
  });

  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      allInputs.forEach(input => {
        if (input.name === 'wt6_gender' && input.value === 'male') input.checked = true;
        else if (input.name === 'wt6_attempt' && input.value === 'first') input.checked = true;
        else if (input.tagName === 'SELECT') input.value = 'auto';
        else if (input.type !== 'radio') input.value = '';
      });
      try { localStorage.removeItem('mp_wt6_state'); } catch(e){}
      calculate();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      setTimeout(() => {
        if (typeof html2canvas !== 'undefined') {
          html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = '6min-gatest-resultat.png';
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

export const initCalculator = initWalkingTest6Min;