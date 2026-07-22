// assets/js/ui/skinfold-ui.js
import { initSkinfoldEngine } from './skinfold-engine.js';
import { SKINFOLD_FORMULAS } from '../core/skinfold.js';

export function initSkinfold(container) {
  if (!container) return;

  const rawId = container.dataset.calculator;

  if (!rawId) {
    console.warn('Mangler [data-calculator] attribute på beholderen:', container);
    return;
  }
  
  // Normaliserer ID (fjerner 'skinfold-' præfiks)
  const cleanId = rawId.replace(/^skinfold-/, '');
  const formula = SKINFOLD_FORMULAS[cleanId] || SKINFOLD_FORMULAS[rawId];

  if (formula) {
    initSkinfoldEngine(container, rawId, formula);
  } else {
    console.warn(`Ingen skinfold-formel fundet i core for ID: "${rawId}"`);
  }
}

export const initCalculator = initSkinfold;