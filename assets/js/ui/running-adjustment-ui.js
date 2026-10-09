// assets/js/ui/running-adjustment-ui.js
import { initRunningAdjustmentEngine } from './running-adjustment-engine.js';
import { RUNNING_ADJUSTMENT_FORMULAS } from '../core/running-adjustment-health.js';

export function initRunningAdjustment(container) {
  if (!container) return;

  const rawId = container.dataset.calculator || 'running-adjustment-all';
  const formula = RUNNING_ADJUSTMENT_FORMULAS[rawId];

  if (formula) {
    initRunningAdjustmentEngine(container, rawId, formula);
  } else {
    console.warn(`Ingen formel fundet for ID: "${rawId}"`);
  }
}

export const initCalculator = initRunningAdjustment;