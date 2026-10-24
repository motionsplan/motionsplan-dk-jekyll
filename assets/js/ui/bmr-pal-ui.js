// assets/js/ui/bmr-pal-ui.js
import { calculateAdvancedPAL } from '../core/bmr-pal.js';

export function initCalculator(container) {
  const form = container.querySelector('form');
  if (!form) return;

  const inputsToTrack = ['intense', 'moderate', 'light', 'standing', 'sleeping'];
  const sittingInput = container.querySelector('[name="min_sitting"]');
  const toggleMetBtn = container.querySelector('#bmr-adv-toggle-met');
  const activitySection = container.querySelector('.mp-activity-section');

  // Toggle visning/skjulning af MET-kolonnen
  if (toggleMetBtn && activitySection) {
    toggleMetBtn.addEventListener('click', () => {
      const isShowing = activitySection.classList.toggle('mp-show-met');
      toggleMetBtn.textContent = isShowing ? '🙈 Skjul MET-værdier' : '⚙️ Tilpas MET-værdier';
    });
  }

  // Automatisk nedtælling af siddende tid (1440 min - sum af resten)
  const updateSittingTime = () => {
    let sum = 0;
    inputsToTrack.forEach((key) => {
      const input = container.querySelector(`[name="min_${key}"]`);
      if (input) sum += parseInt(input.value || 0, 10);
    });

    const remaining = 1440 - sum;
    if (sittingInput) {
      sittingInput.value = Math.max(0, remaining);
      if (remaining < 0) {
        sittingInput.classList.add('mp-input-error');
      } else {
        sittingInput.classList.remove('mp-input-error');
      }
    }
  };

  // Lyt på alle minut-felter i realtid
  inputsToTrack.forEach((key) => {
    const input = container.querySelector(`[name="min_${key}"]`);
    if (input) {
      input.addEventListener('input', updateSittingTime);
    }
  });

  // Initial kørsel
  updateSittingTime();

  // Beregn ved Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const gender = data.get('gender') ?? 'man';
    const age = parseInt(data.get('age'), 10);
    const weight = parseFloat(data.get('weight'));
    const height = parseFloat(data.get('height'));
    const formula = data.get('formula') ?? 'recommended_formula';

    if (Number.isNaN(weight) || Number.isNaN(age) || Number.isNaN(height)) return;

    const activities = {
      intense: { minutes: parseInt(data.get('min_intense') || 0, 10), met: parseFloat(data.get('met_intense') || 10.0) },
      moderate: { minutes: parseInt(data.get('min_moderate') || 0, 10), met: parseFloat(data.get('met_moderate') || 7.0) },
      light: { minutes: parseInt(data.get('min_light') || 0, 10), met: parseFloat(data.get('met_light') || 4.0) },
      standing: { minutes: parseInt(data.get('min_standing') || 0, 10), met: parseFloat(data.get('met_standing') || 2.0) },
      sleeping: { minutes: parseInt(data.get('min_sleeping') || 0, 10), met: parseFloat(data.get('met_sleeping') || 0.9) },
      sitting: { met: parseFloat(data.get('met_sitting') || 1.2) }
    };

    const res = calculateAdvancedPAL(gender, age, weight, height, formula, activities);

    // Opdater BMR
    const bmrEl = container.querySelector('[data-result="bmr"]');
    if (bmrEl) bmrEl.textContent = Math.round(res.getBMRKJ()).toLocaleString('da-DK');

    // Opdater PAL
    const palEl = container.querySelector('[data-result="pal"]');
    if (palEl) palEl.textContent = res.getPAL().toFixed(2);

    // Opdater TEE / Daglige energibehov
    const teeEl = container.querySelector('[data-result="tee"]');
    if (teeEl) teeEl.textContent = Math.round(res.getTEEKS()).toLocaleString('da-DK');

    const teeKcalEl = container.querySelector('[data-result="tee_kcal"]');
    if (teeKcalEl) teeKcalEl.textContent = `${Math.round(res.getTEEKcal()).toLocaleString('da-DK')} kcal / dag`;

    // Opdater undertitel/formelnavn
    const formulaNameEl = container.querySelector('[data-result="formula_name"]');
    if (formulaNameEl) formulaNameEl.textContent = res.getFormulaName();
  });
}