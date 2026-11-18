// assets/js/core/wattmax-test.js

export const WATTMAX_FORMULAS = {
  andersen: {
    key: 'andersen',
    name: 'Andersen (1995) – Voksne',
    shortName: 'Andersen (1995)',
    desc: 'Standard Watt-max test for voksne og unge. Mænd starter på 100w, kvinder på 70w. Belastningen øges med 35 W hvert 2. minut (120 sek).',
    stepWatt: 35,
    stepTimeSec: 120
  },
  wedderkopp_25: {
    key: 'wedderkopp_25',
    name: 'Wedderkopp et al. (2004) – Børn (25 W)',
    shortName: 'Wedderkopp (25 W)',
    desc: 'Børneprotokol til børn ≥ 30 kg. Start på 25w. Belastningen øges med 25 W hvert 3. minut (180 sek).',
    stepWatt: 25,
    stepTimeSec: 180
  },
  wedderkopp_20: {
    key: 'wedderkopp_20',
    name: 'Wedderkopp et al. (2004) – Børn < 30 kg (20 W)',
    shortName: 'Wedderkopp (20 W)',
    desc: 'Modificeret børneprotokol til børn < 30 kg. Start på 25w. Belastningen øges med 20 W hvert 3. minut (180 sek).',
    stepWatt: 20,
    stepTimeSec: 180
  }
};

/**
 * Bestemmer den anbefalede formelnøgle baseret på alder og vægt
 */
export function getRecommendedFormulaKey(age, weight) {
  const a = parseFloat(age) || 0;
  const w = parseFloat(weight) || 0;

  if (a > 0 && a < 18) {
    return (w > 0 && w < 30) ? 'wedderkopp_20' : 'wedderkopp_25';
  }
  return 'andersen';
}

/**
 * Beregner MPO, VO2max og kondital fra Watt-max testen.
 */
export function calculateWattMax({ wmax, sec, weight, age, formula = 'auto' }) {
  const watt = parseFloat(wmax) || 0;
  const seconds = parseFloat(sec) || 0;
  const bodyWeight = parseFloat(weight) || 0;
  const userAge = parseFloat(age) || 0;

  if (watt <= 0 || seconds <= 0 || bodyWeight <= 0) {
    return { isValid: false };
  }

  // Bestem reelt anvendte formel
  const recommendedKey = getRecommendedFormulaKey(userAge, bodyWeight);
  const resolvedKey = (formula === 'auto') ? recommendedKey : formula;

  let mpo = 0;
  let vo2max = 0; // L/min

  if (resolvedKey === 'wedderkopp_20' || resolvedKey === 'wedderkopp_25') {
    const stepWatt = resolvedKey === 'wedderkopp_20' ? 20 : 25;
    const stepTime = 180; // 3 minutter

    mpo = (watt - stepWatt) + (stepWatt * (seconds / stepTime));
    vo2max = (13.16 * mpo + 5 * bodyWeight) / 1000;
  } else {
    // Andersen (1995) Voksne
    const stepWatt = 35;
    const stepTime = 120; // 2 minutter

    mpo = (watt - stepWatt) + (stepWatt * (seconds / stepTime));
    vo2max = 0.0117 * mpo + 0.16;
  }

  if (mpo <= 0 || vo2max <= 0) {
    return { isValid: false };
  }

  const fitnessLevel = (vo2max * 1000) / bodyWeight;

  return {
    isValid: true,
    mpo: Math.round(mpo * 10) / 10,
    vo2max: vo2max.toFixed(2),
    fitnessLevel: fitnessLevel.toFixed(1),
    usedFormulaKey: resolvedKey,
    recommendedFormulaKey: recommendedKey
  };
}