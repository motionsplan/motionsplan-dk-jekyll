import { initSkinfoldEngine } from './skinfold-engine.js';
import { initSkinfoldDashboard } from './skinfold-dashboard.js';
import { SKINFOLD_FORMULAS } from '../core/skinfold.js';

export function initSkinfold(container) {
  if (!container) return;

  const rawId = container.dataset.calculator;
  const uiModule = container.dataset.uiModule;

  // Hvis det er vores nye dashboard
  if (uiModule === 'skinfold-dashboard' || rawId === 'skinfold-dashboard') {
    initSkinfoldDashboard(container);
    return;
  }

  if (!rawId) {
    console.warn('Mangler [data-calculator] attribute på beholderen:', container);
    return;
  }
  
  // Normaliserer ID for enkeltsiderne
  const cleanId = rawId.replace(/^skinfold-/, '');
  const formula = SKINFOLD_FORMULAS[cleanId] || SKINFOLD_FORMULAS[rawId];

  if (formula) {
    initSkinfoldEngine(container, rawId, formula);
  } else {
    console.warn(`Ingen skinfold-formel fundet i core for ID: "${rawId}"`);
  }
}

export const initCalculator = initSkinfold;