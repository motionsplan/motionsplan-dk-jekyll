// assets/js/ui/ideal-weight-ui.js
import { initIdealWeightEngine } from './ideal-weight-engine.js';
import { IDEAL_WEIGHT_FORMULAS } from '../core/ideal-weight-health.js';

export function initIdealWeight(container) {
  if (!container) return;

  const rawId = container.dataset.calculator || 'ideal-weight-all';
  const formula = IDEAL_WEIGHT_FORMULAS[rawId];

  if (formula) {
    initIdealWeightEngine(container, rawId, formula);
  } else {
    console.warn(`Ingen idealvægt-formel fundet for ID: "${rawId}"`);
  }
}

export const initCalculator = initIdealWeight;