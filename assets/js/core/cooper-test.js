// assets/js/core/cooper-test.js

export const COOPER_FORMULAS = {
  wikipedia: {
    id: 'wikipedia',
    name: 'Standard / Wikipedia',
    sd: 3.2,
    sdUnit: 'ml/kg/min',
    description: 'Mest anvendte standardformel til Cooper-testen.',
    calc: (distanceMeters) => (distanceMeters - 504.9) / 44.73
  },
  cooper: {
    id: 'cooper',
    name: 'Cooper (1968)',
    sd: 3.5,
    sdUnit: 'ml/kg/min',
    description: 'Kenneth Coopers oprindelige formel (-11.288 + 22.351 × d_km).',
    calc: (distanceMeters) => -11.288 + (22.351 * (distanceMeters / 1000))
  },
  bandyopadhyay: {
    id: 'bandyopadhyay',
    name: 'Bandyopadhyay (2015)',
    sd: 3.4,
    sdUnit: 'ml/kg/min',
    description: 'Justeret formel (-11.04 + 21.01 × d_km).',
    calc: (distanceMeters) => -11.04 + (21.01 * (distanceMeters / 1000))
  }
};

/**
 * Anbefalet formel er som udgangspunkt standardformlen
 */
export function getRecommendedCooperFormula() {
  return 'wikipedia';
}

/**
 * Hovedfunktion til 12-minutters Cooper-test
 */
export function calculateCooperTest(distance, bodyweight, chosenFormulaKey = 'auto') {
  const dist = parseFloat(distance);
  const weight = parseFloat(bodyweight) || 0;

  if (isNaN(dist) || dist <= 0) {
    return { isValid: false };
  }

  const recKey = getRecommendedCooperFormula();
  let activeKey = chosenFormulaKey;

  if (activeKey === 'auto' || !COOPER_FORMULAS[activeKey]) {
    activeKey = recKey;
  }

  const activeFormula = COOPER_FORMULAS[activeKey];
  const fitnessLevel = activeFormula.calc(dist);

  if (fitnessLevel <= 0) {
    return { isValid: false };
  }

  // Maksimal iltoptagelse i L/min hvis vægt er opgivet
  const vo2max = weight > 0 ? (weight * fitnessLevel) / 1000 : null;

  return {
    isValid: true,
    fitnessLevel: fitnessLevel,
    formattedFitnessLevel: fitnessLevel.toFixed(1),
    maxOxygenUptake: vo2max,
    formattedVO2Max: vo2max ? vo2max.toFixed(2) : '-',
    activeFormulaKey: activeKey,
    recommendedFormulaKey: recKey,
    isRecommended: activeKey === recKey,
    formulaName: activeFormula.name,
    description: activeFormula.description,
    sd: activeFormula.sd,
    sdUnit: activeFormula.sdUnit,

    // Bagudkompatibilitet
    getVO2Max: () => fitnessLevel,
    getDistanceFromVO2Max: (vo2maxInput) => (vo2maxInput * 44.73) + 504.9
  };
}
