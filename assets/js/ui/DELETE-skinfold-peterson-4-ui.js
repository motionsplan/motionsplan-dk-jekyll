// assets/js/ui/skinfold-peterson-ui.js
import { initSkinfoldEngine } from './skinfold-engine.js';
import { calculatePetersonSkinfold } from '../core/skinfold.js'; 

export function initSkinfoldPeterson(container) {
  // Fortæl motoren præcis hvilke felter Peterson skal bruge
  const config = {
    sites: {
      male: ['thigh', 'triceps', 'subscapular', 'suprailiac'],
      female: ['thigh', 'triceps', 'subscapular', 'suprailiac']
    },
    demographics: ['age', 'weight', 'height'],
    targetAudience: 'adult' // <-- NY LINJE!
  };

  // Start motoren! "peterson" bruges til at lave unikke ID'er til at gemme data
  initSkinfoldEngine(container, 'peterson-4', config, calculatePetersonSkinfold);
}

export const initCalculator = initSkinfoldPeterson;