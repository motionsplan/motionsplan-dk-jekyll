// assets/js/ui/bmi-ui.js
import { initBmiEngine } from './bmi-engine.js';
import { BMI_HEALTH_FORMULAS } from '../core/bmi-health.js';

export function initBmi(container) {
  if (!container) return;

  const rawId = container.dataset.calculator || 'bmi-adult';
  const formula = BMI_HEALTH_FORMULAS[rawId];

  if (formula) {
    initBmiEngine(container, rawId, formula);
  } else {
    console.warn(`Ingen BMI formel fundet for ID: "${rawId}"`);
  }
}

export const initCalculator = initBmi;