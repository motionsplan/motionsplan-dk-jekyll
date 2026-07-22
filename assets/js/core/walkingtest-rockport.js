// assets/js/core/rockport-walking-test.js

/**
 * Beregner kondital ud fra Rockport 1,6 km gåtest.
 *
 * @param {object} params - { min, sec, hr, gender, age, weight, formula }
 * @returns {object} { isValid, fitnessLevel, maxOxygenUptake }
 */
export function calculateRockport({ min, sec, hr, gender, age, weight, formula = 'kline' }) {
  const m = parseFloat(min) || 0;
  const s = parseFloat(sec) || 0;
  const heartRate = parseFloat(hr);
  const userAge = parseFloat(age);
  const userWeight = parseFloat(weight);

  const totalTimeMinutes = m + (s / 60);

  if (!heartRate || !userAge || !userWeight || totalTimeMinutes <= 0) {
    return { isValid: false };
  }

  const isMale = (gender === 'male' || gender === 'mand' || gender === 'man') ? 1 : 0;
  let fitnessLevel = 0;

  if (formula === 'lunt') {
    // Lunt et al. (2013) - British military Personnel
    fitnessLevel = 51.047 + (8.336 * isMale) + (635.012 * (1 / totalTimeMinutes)) - (0.225 * heartRate) - (0.271 * userWeight) - (0.231 * userAge);
  } else {
    // Kline et al. (1987) - Standard formel
    const weightLbs = userWeight * 2.2046226218;
    fitnessLevel = 132.853 - (0.0769 * weightLbs) - (0.3877 * userAge) + (6.3150 * isMale) - (3.2649 * totalTimeMinutes) - (0.1565 * heartRate);
  }

  if (fitnessLevel <= 0) return { isValid: false };

  const maxOxygenUptake = (fitnessLevel * userWeight) / 1000;

  return {
    isValid: true,
    fitnessLevel: fitnessLevel.toFixed(1),
    maxOxygenUptake: maxOxygenUptake.toFixed(2)
  };
}