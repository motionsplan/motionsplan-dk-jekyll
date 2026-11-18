import { initSkinfoldEngine } from './skinfold-engine.js';
import { calculateJP3 } from '../core/skinfold.js';

export function initSkinfoldJP3(container) {
  const config = {
    sites: {
      male: ['chest', 'abdomen', 'thigh'], 
      female: ['triceps', 'suprailiac', 'thigh']
    },
    // Husk 'weight', så den kan udregne kasserne med kilo!
    demographics: ['age', 'weight'],
    targetAudience: 'adult' // <-- NY LINJE!
  };

  // VIGTIGT: Navnet her skal matche din calc_id i HTML!
  initSkinfoldEngine(container, 'jackson-pollock-3', config, calculateJP3);
}

export const initCalculator = initSkinfoldJP3;