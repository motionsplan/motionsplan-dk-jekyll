// assets/js/core/sitko-test.js

/**
 * Beregner VO2max baseret på Sitko et al. (2022) 5-minutters watt-test
 * Formel: VO2max = 16.61 + (8.87 * W/kg)
 */
export function calculateSitkoTest({ watt, weight, age, gender }) {
  const w = parseFloat(watt);
  const kg = parseFloat(weight);
  const userAge = parseInt(age, 10) || 30;

  if (isNaN(w) || w <= 0 || isNaN(kg) || kg <= 0) {
    return { isValid: false };
  }

  const wPerKg = w / kg;
  const vo2max = 16.61 + (8.87 * wPerKg);

  return {
    isValid: true,
    watt: w,
    weight: kg,
    wPerKg: wPerKg.toFixed(2),
    fitnessLevel: vo2max.toFixed(1),
    vo2maxNumber: vo2max
  };
}