// assets/js/core/rockport-walking-test.js

/**
 * Formeldefinitioner til Rockport Gåtest
 */
export const ROCKPORT_FORMULAS = {
  auto: {
    key: 'auto',
    name: '⭐ Anbefalet formel (Automatisk)',
    desc: 'Vælger automatisk Lunt et al. (2013) for 18–39 årige (optimering til yngre voksne) eller Kline et al. (1987) for øvrige aldersgrupper.',
    see: '±4.5 ml/kg/min'
  },
  kline: {
    key: 'kline',
    name: 'Kline et al. (1987) – Standard',
    desc: 'Den originale og mest udbredte Rockport-formel. Validereet for voksne og ældre.',
    see: '±5.0 ml/kg/min'
  },
  lunt: {
    key: 'lunt',
    name: 'Lunt et al. (2013) – Ungdom & Militær',
    desc: 'Optimeret formel til yngre, mere aktive voksne i alderen 18–39 år.',
    see: '±4.1 ml/kg/min'
  }
};

/**
 * Beregner kondital ud fra Rockport 1,6 km gåtest.
 *
 * @param {object} params - { min, sec, hr, gender, age, weight, formula }
 * @returns {object} { isValid, fitnessLevel, maxOxygenUptake, usedFormula }
 */
export function calculateRockport({ min, sec, hr, gender, age, weight, formula = 'auto' }) {
  const m = parseFloat(min) || 0;
  const s = parseFloat(sec) || 0;
  const heartRate = parseFloat(hr) || 0;
  const userAge = parseFloat(age) || 0;
  const userWeight = parseFloat(weight) || 0;

  const totalTimeMinutes = m + (s / 60);

  if (heartRate <= 0 || userAge <= 0 || userWeight <= 0 || totalTimeMinutes <= 0) {
    return { isValid: false };
  }

  // Bestem reelt anvendte formel hvis auto
  let resolvedFormula = formula;
  if (formula === 'auto') {
    resolvedFormula = (userAge >= 18 && userAge <= 39) ? 'lunt' : 'kline';
  }

  const isMale = (gender === 'male' || gender === 'mand' || gender === 'man') ? 1 : 0;
  let fitnessLevel = 0;

  if (resolvedFormula === 'lunt') {
    // Lunt et al. (2013)
    fitnessLevel = 51.047 + (8.336 * isMale) + (635.012 * (1 / totalTimeMinutes)) - (0.225 * heartRate) - (0.271 * userWeight) - (0.231 * userAge);
  } else {
    // Kline et al. (1987)
    const weightLbs = userWeight * 2.2046226218;
    fitnessLevel = 132.853 - (0.0769 * weightLbs) - (0.3877 * userAge) + (6.3150 * isMale) - (3.2649 * totalTimeMinutes) - (0.1565 * heartRate);
  }

  if (fitnessLevel <= 0) return { isValid: false };

  const maxOxygenUptake = (fitnessLevel * userWeight) / 1000;

  return {
    isValid: true,
    fitnessLevel: fitnessLevel.toFixed(1),
    maxOxygenUptake: maxOxygenUptake.toFixed(2),
    usedFormula: resolvedFormula
  };
}