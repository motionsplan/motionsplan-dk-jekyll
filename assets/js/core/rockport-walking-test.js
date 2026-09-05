/**
 * Formeldefinitioner til Rockport 1,6 km & UKK 2,0 km
 */
export const ROCKPORT_FORMULAS = {
  auto: {
    key: 'auto',
    name: '⭐ Anbefalet formel (Automatisk)',
    desc: 'Vælger automatisk Lunt et al. (2013) for 18–39 årige eller Kline et al. (1987) for 40+ årige.',
    see: '±4.5 ml/kg/min'
  },
  kline: {
    key: 'kline',
    name: 'Kline et al. (1987) – Standard',
    desc: 'Den originale og mest udbredte Rockport-formel for voksne.',
    see: '±5.0 ml/kg/min'
  },
  lunt: {
    key: 'lunt',
    name: 'Lunt et al. (2013) – Ungdom & Aktiv',
    desc: 'Optimeret formel til yngre, mere aktive voksne (18–39 år).',
    see: '±4.1 ml/kg/min'
  }
};

export const UKK_FORMULAS = {
  ukk_std: {
    key: 'ukk_std',
    name: '⭐ UKK Instituttet (Oja et al. 1991)',
    desc: 'Den officielle finske/nordiske 2,0 km gå-test for voksne (20–65 år).',
    see: '±4.8 ml/kg/min'
  }
};

/**
 * Beregner kondital ud fra enten Rockport (1,6 km) eller UKK (2,0 km).
 */
export function calculateWalkingTest({ testType = 'rockport', min, sec, hr, gender, age, weight, height, formula = 'auto' }) {
  const m = parseFloat(min) || 0;
  const s = parseFloat(sec) || 0;
  const heartRate = parseFloat(hr) || 0;
  const userAge = parseFloat(age) || 0;
  const userWeight = parseFloat(weight) || 0;
  const userHeight = parseFloat(height) || 175; // standard cm hvis tom

  const totalTimeMinutes = m + (s / 60);

  if (heartRate <= 0 || userAge <= 0 || userWeight <= 0 || totalTimeMinutes <= 0) {
    return { isValid: false };
  }

  const isMale = (gender === 'male' || gender === 'mand' || gender === 'man') ? 1 : 0;
  let fitnessLevel = 0;
  let resolvedFormula = formula;

  if (testType === 'ukk') {
    // UKK 2,0 km test (Laukkanen et al. 1992 / Oja et al. 1991)
    resolvedFormula = 'ukk_std';
    const heightMeters = userHeight / 100;
    const bmi = userWeight / (heightMeters * heightMeters);

    if (isMale) {
      fitnessLevel = 184.9 - (4.65 * totalTimeMinutes) - (0.22 * heartRate) - (0.26 * userAge) - (1.05 * bmi);
    } else {
      fitnessLevel = 116.2 - (2.98 * totalTimeMinutes) - (0.11 * heartRate) - (0.14 * userAge) - (0.39 * bmi);
    }
  } else {
    // Rockport 1,6 km test
    if (formula === 'auto') {
      resolvedFormula = (userAge >= 18 && userAge <= 39) ? 'lunt' : 'kline';
    }

    if (resolvedFormula === 'lunt') {
      fitnessLevel = 51.047 + (8.336 * isMale) + (635.012 * (1 / totalTimeMinutes)) - (0.225 * heartRate) - (0.271 * userWeight) - (0.231 * userAge);
    } else {
      const weightLbs = userWeight * 2.2046226218;
      fitnessLevel = 132.853 - (0.0769 * weightLbs) - (0.3877 * userAge) + (6.3150 * isMale) - (3.2649 * totalTimeMinutes) - (0.1565 * heartRate);
    }
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