// assets/js/core/andersen-test.js

export const ANDERSEN_FORMULAS = {
  andersen_2008: {
    id: 'andersen_2008',
    name: 'Andersen et al. (2008)',
    sd: 4.2,
    sdUnit: 'ml/kg/min',
    description: 'Den oprindelige formel til børn og unge (6–17 år). Kræver ikke kropsvægt.',
    requiresWeight: false,
    calc: ({ distance, isFemale }) =>
      18.38 + (0.03301 * distance) - (5.92 * isFemale)
  },
  aadland_2014: {
    id: 'aadland_2014',
    name: 'Aadland et al. (2014)',
    sd: 3.8,
    sdUnit: 'ml/kg/min',
    description: 'Justeret formel der inddrager kropsvægt for øget præcision.',
    requiresWeight: true,
    calc: ({ distance, isFemale, bodyweight }) =>
      23.262 + (0.050 * distance) - (3.858 * isFemale) - (0.376 * bodyweight)
  }
};

/**
 * Udvælger automatisk den mest velegnede formel.
 * Hvis vægt er angivet anbefales Aadland (2014), ellers Andersen (2008).
 */
export function getRecommendedAndersenFormula(bodyweight) {
  return (bodyweight && bodyweight > 0) ? 'aadland_2014' : 'andersen_2008';
}

/**
 * Hovedfunktion til Andersen-test beregning
 */
export function calculateAndersenTest(sex, distance, bodyweight, chosenFormulaKey = 'auto') {
  // Piger/kvinder = 1, Drenge/mænd = 0
  const isFemale = (sex === 'female' || sex === 'woman' || sex === 'kvinde' || sex === 1 || sex === '1') ? 1 : 0;
  const dist = parseFloat(distance);
  const weight = parseFloat(bodyweight) || 0;

  if (isNaN(dist) || dist <= 0) {
    return { isValid: false };
  }

  const recKey = getRecommendedAndersenFormula(weight);
  let activeKey = chosenFormulaKey;
  
  if (activeKey === 'auto' || !ANDERSEN_FORMULAS[activeKey]) {
    activeKey = recKey;
  }

  // Tjek om den valgte formel kræver vægt, som mangler
  if (ANDERSEN_FORMULAS[activeKey].requiresWeight && weight <= 0) {
    return { 
      isValid: false, 
      missingWeight: true,
      activeFormulaKey: activeKey,
      formulaName: ANDERSEN_FORMULAS[activeKey].name
    };
  }

  const ctx = { distance: dist, isFemale, bodyweight: weight };
  const fitnessLevel = ANDERSEN_FORMULAS[activeKey].calc(ctx);

  if (fitnessLevel <= 0) {
    return { isValid: false };
  }

  // Beregn iltoptagelse i L/min hvis vægt er angivet
  const vo2max = weight > 0 ? (weight * fitnessLevel) / 1000 : null;
  const activeFormula = ANDERSEN_FORMULAS[activeKey];

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
    getFitnessLevel: () => fitnessLevel,
    getVO2max: () => vo2max
  };
}