// assets/js/ui/skinfold-lohman-ui.js
import { initSkinfoldEngine } from './skinfold-engine.js';
import { calculateLohman } from '../core/skinfold.js'; 

export function initSkinfoldLohman(container) {
  const config = {
    sites: {
      // Lohman bruger triceps og læggen
      male: ['triceps', 'calf'],
      female: ['triceps', 'calf']
    },
    // Igen: Vægt er nødvendig for at få fedtmasse i kg, alder hvis formlen kræver det.
    demographics: ['age', 'weight'],
    targetAudience: 'child' // <-- NY LINJE!
  };

  initSkinfoldEngine(container, 'lohman-2', config, calculateLohman);
}

export const initCalculator = initSkinfoldLohman;