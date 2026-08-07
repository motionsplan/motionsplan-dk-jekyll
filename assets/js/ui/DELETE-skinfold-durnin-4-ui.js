// assets/js/ui/skinfold-durnin-ui.js
import { initSkinfoldEngine } from './skinfold-engine.js';
import { calculateDurninWomersley } from '../core/skinfold.js'; 

export function initSkinfoldDurnin(container) {
  const config = {
    sites: {
      // Durnin & Womersley bruger disse 4 steder for både mænd og kvinder
      male: ['biceps', 'triceps', 'subscapular', 'suprailiac'],
      female: ['biceps', 'triceps', 'subscapular', 'suprailiac']
    },
    // Alder er vigtig for Durnin-tabellerne, og vægt bruges til kg-beregning
    demographics: ['age', 'weight'],
    targetAudience: 'adult' // <-- NY LINJE!
  };

  initSkinfoldEngine(container, 'durnin-4', config, calculateDurninWomersley);
}

export const initCalculator = initSkinfoldDurnin;