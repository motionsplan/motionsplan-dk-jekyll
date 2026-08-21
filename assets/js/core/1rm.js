// assets/js/core/1rm.js

/**
 * Strategy Pattern: Samling af alle 1RM formler.
 * Placeret i outer scope for maksimal ydeevne (oprettes kun én gang i hukommelsen).
 */
const FORMULAS = {
  brzycki: {
    name: 'Brzycki',
    calc: (weight, repetitions, rm = 1) => {
      const repmax = weight * (36 / (37 - repetitions));
      return rm === 1 ? repmax : repmax / (36 / (37 - rm));
    }
  },
  epley: {
    name: 'Epley',
    calc: (weight, repetitions, rm = 1) => {
      const repmax = weight * (1 + 0.0333 * repetitions);
      return rm === 1 ? repmax : repmax / (1 + 0.0333 * rm);
    }
  },
  lander: {
    name: 'Lander',
    calc: (weight, repetitions, rm = 1) => {
      const repmax = (100 * weight) / (101.3 - 2.67123 * repetitions);
      return rm === 1 ? repmax : (repmax * (101.3 - 2.67123 * rm)) / 100;
    }
  },
  lombardi: {
    name: 'Lombardi',
    calc: (weight, repetitions, rm = 1) => {
      const repmax = weight * repetitions ** 0.1;
      return rm === 1 ? repmax : repmax / rm ** 0.1;
    }
  },
  mayhew: {
    name: 'Mayhew et al.',
    calc: (weight, repetitions, rm = 1) => {
      const repmax = (100 * weight) / (52.2 + 41.9 * Math.exp(-0.055 * repetitions));
      return rm === 1 ? repmax : (repmax * (52.2 + 41.9 * Math.exp(-0.055 * rm))) / 100;
    }
  },
  oconnor: {
    name: "O'Connor et al.",
    calc: (weight, repetitions, rm = 1) => {
      const repmax = weight * (1 + 0.025 * repetitions);
      return rm === 1 ? repmax : repmax / (1 + 0.025 * rm);
    }
  },
  wathan: {
    name: 'Wathan',
    calc: (weight, repetitions, rm = 1) => {
      const repmax = (100 * weight) / (48.8 + 53.8 * Math.exp(-0.075 * repetitions));
      return rm === 1 ? repmax : (repmax * (48.8 + 53.8 * Math.exp(-0.075 * rm))) / 100;
    }
  },
  wendler: {
    name: 'Wendler',
    calc: (weight, repetitions, rm = 1) => {
      const repmax = weight * repetitions * 0.0333 + weight;
      return rm === 1 ? repmax : 1 / ((rm * 0.0333) / repmax + 1 / repmax);
    }
  },
  reynolds: {
    name: 'Reynolds et al.',
    calc: (weight, repetitions, rm = 1, bodyPart = 'lower') => {
      const getReynoldsPercent = (r) =>
        bodyPart === 'lower'
          ? 78.17 * Math.exp(-0.0569 * r) + 26.41
          : 55.51 * Math.exp(-0.0723 * r) + 48.47;

      const repmax = (weight / getReynoldsPercent(repetitions)) * 100;
      return rm === 1 ? repmax : (getReynoldsPercent(rm) * repmax) / 100;
    }
  }
};

/**
 * Hovedfunktion til estimering af 1RM og Rep Maxima
 */
export function estimate1RM(weight, repetitions = 5, formula = 'brzycki', bodyPart = 'lower') {
  // Hjælper til at kalde en specifik formel
  const execFormula = (key, rm = 1) => {
    const target = FORMULAS[key] || FORMULAS.brzycki;
    return target.calc(weight, repetitions, rm, bodyPart);
  };

  const getRepMax = (rm = 1) => execFormula(formula, rm);

  const getAverage = (rm = 1) => {
    const keys = Object.keys(FORMULAS);
    const sum = keys.reduce((acc, key) => acc + FORMULAS[key].calc(weight, repetitions, rm, bodyPart), 0);
    return sum / keys.length;
  };

  return {
    getRepMax,
    getAverage,
    getBrzycki: (rm = 1) => execFormula('brzycki', rm),
    getEpley: (rm = 1) => execFormula('epley', rm),
    getLander: (rm = 1) => execFormula('lander', rm),
    getLombardi: (rm = 1) => execFormula('lombardi', rm),
    getMayhew: (rm = 1) => execFormula('mayhew', rm),
    getOconnor: (rm = 1) => execFormula('oconnor', rm),
    getWathan: (rm = 1) => execFormula('wathan', rm),
    getWendler: (rm = 1) => execFormula('wendler', rm),
    getReynolds: (rm = 1) => execFormula('reynolds', rm)
  };
}

// Bagudkompatibilitet for eksisterende tests
export const Estimate1RM = estimate1RM;

// Hybrid-eksport for Node/Jest unit-tests (CommonJS)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    estimate1RM,
    Estimate1RM,
    FORMULAS
  };
}