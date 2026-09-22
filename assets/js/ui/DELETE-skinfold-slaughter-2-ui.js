// assets/js/ui/skinfold-slaughter-ui.js
import { initSkinfoldEngine } from './skinfold-engine.js';
import { calculateSlaughter } from '../core/skinfold.js'; 

export function initSkinfoldSlaughter(container) {
  const config = {
    sites: {
      male: ['triceps', 'subscapular'],
      female: ['triceps', 'subscapular']
    },
    // Til børn skjuler vi ofte højde. 
    // Vægt beholdes, hvis din formel skal udregne fedt/fedtfri masse i kg.
    // Alder beholdes, hvis din core-formel bruger alderstrin.
    demographics: ['age', 'weight'],
    targetAudience: 'child' // <-- NY LINJE!
  };

  initSkinfoldEngine(container, 'slaughter-2', config, calculateSlaughter);
}

export const initCalculator = initSkinfoldSlaughter;