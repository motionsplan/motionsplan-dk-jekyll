// assets/js/core/ekblom-bak.js

/**
 * Ekblom-Bak cykeltest (2016 opdateret regressionsmodel)
 * Indirekte submaksimal cykeltest baseret på ΔHR og ΔPO (Watt).
 * 
 * @param {Object} params
 * @param {number} params.age - Alder i år
 * @param {string} params.gender - 'male' | 'female'
 * @param {number} params.weight - Vægt i kg
 * @param {number} params.work1 - Baseline belastning i watt (standard: 32 W / 0.5 kp v. 60 rpm)
 * @param {number} params.hr1 - Puls ved slutningen af minut 4 på baseline (slag/min)
 * @param {number} params.work2 - Arbejdsbelastning i watt (trin 2)
 * @param {number} params.hr2 - Puls ved slutningen af minut 8 på arbejdsbelastning (slag/min)
 */
export function calculateEkblomBak({ age, gender, weight, work1 = 32, hr1, work2, hr2 }) {
  const parsedAge = parseFloat(age);
  const parsedWeight = parseFloat(weight);
  const w1 = parseFloat(work1);
  const h1 = parseFloat(hr1);
  const w2 = parseFloat(work2);
  const h2 = parseFloat(hr2);

  if (
    !parsedAge || parsedAge < 10 || parsedAge > 100 ||
    !parsedWeight || parsedWeight < 30 || parsedWeight > 250 ||
    isNaN(w1) || w1 < 0 ||
    !h1 || h1 < 40 || h1 > 220 ||
    !w2 || w2 <= w1 ||
    !h2 || h2 <= h1 || h2 > 230
  ) {
    return { isValid: false };
  }

  const deltaPO = w2 - w1; // Ændring i Watt
  const deltaHR = h2 - h1; // Ændring i puls (bpm)

  // Ekblom-Bak (2016) koefficienter for samlet iltoptagelse (L/min)
  let vo2MaxLmin = 0;

  if (gender === 'female' || gender === 'woman') {
    vo2MaxLmin = 1.836 - (0.0190 * parsedAge) + (0.00885 * deltaPO) - (0.00984 * deltaHR) - (0.00397 * h2);
  } else {
    // Standard: Mand
    vo2MaxLmin = 2.446 - (0.0215 * parsedAge) + (0.00769 * deltaPO) - (0.00977 * deltaHR) - (0.00490 * h2);
  }

  if (vo2MaxLmin <= 0 || isNaN(vo2MaxLmin)) {
    return { isValid: false };
  }

  const fitnessLevel = (vo2MaxLmin * 1000) / parsedWeight;

  return {
    isValid: true,
    maxOxygenUptake: Math.round(vo2MaxLmin * 100) / 100, // L/min (2 decimaler)
    fitnessLevel: Math.round(fitnessLevel * 10) / 10,     // ml/kg/min (1 decimal)
    deltaPO: Math.round(deltaPO),
    deltaHR: Math.round(deltaHR),
    sd: 4.5,                                              // Standardafvigelse i ml/kg/min
    sdUnit: 'ml/kg/min'
  };
}