// assets/js/ui/waist-ui.js
import { initWaistEngine } from './waist-engine.js';
import { WAIST_HEALTH_FORMULAS } from '../core/waist-health.js';

export function initWaist(container) {
  if (!container) return;

  const rawId = container.dataset.calculator;
  if (!rawId) {
    console.warn('Mangler [data-calculator] attribute:', container);
    return;
  }

  const formula = WAIST_HEALTH_FORMULAS[rawId];

  if (formula) {
    initWaistEngine(container, rawId, formula);
  } else {
    console.warn(`Ingen formel fundet for ID: "${rawId}"`);
  }
}

export const initCalculator = initWaist;