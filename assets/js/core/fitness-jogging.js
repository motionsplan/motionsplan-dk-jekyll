// assets/js/core/fitness-jogging.js

export const JOGGING_FORMULAS = {
  george1993: {
    id: 'george1993',
    name: 'George et al. (1993)',
    sd: 3.0,
    sdUnit: 'ml/kg/min',
    description: 'Udviklet og valideret til voksne (college-studerende, 18+ år).',
    calc: ({ s, weight, timeMinutes, hr }) =>
      100.5 + 8.344 * s - 0.1636 * weight - 1.438 * timeMinutes - 0.1928 * hr
  },
  hunt2000: {
    id: 'hunt2000',
    name: 'Hunt et al. (2000)',
    sd: 2.8,
    sdUnit: 'ml/kg/min',
    description: 'Valideret specifikt til børn og unge i alderen 13–17 år.',
    calc: ({ s, weight, timeMinutes, hr }) =>
      92.91 + 6.50 * s - 0.141 * weight - 1.562 * timeMinutes - 0.125 * hr
  }
};

/**
 * Udvælger automatisk den mest velegnede formel baseret på alder
 */
export function getRecommendedJoggingFormula(age) {
  return age < 18 ? 'hunt2000' : 'george1993';
}

/**
 * Hovedfunktion til joggingtest-beregning
 */
export function calculateFitnessJogging(sex, age, weight, timeMinutes, hr, chosenFormulaKey = 'auto') {
  const isMale = sex === 'man' || sex === 'male' || sex === 1 || sex === '1';
  const s = isMale ? 1 : 0;

  if (Number.isNaN(weight) || Number.isNaN(age) || Number.isNaN(hr) || Number.isNaN(timeMinutes) || timeMinutes <= 0 || weight <= 0 || age <= 0 || hr <= 0) {
    return { isValid: false };
  }

  const recKey = getRecommendedJoggingFormula(age);
  let activeKey = chosenFormulaKey;
  
  if (activeKey === 'auto' || !JOGGING_FORMULAS[activeKey]) {
    activeKey = recKey;
  }

  const ctx = { s, weight, timeMinutes, hr, age };
  const fitnessLevel = JOGGING_FORMULAS[activeKey].calc(ctx);

  if (fitnessLevel <= 0) {
    return { isValid: false };
  }

  const maxOxygenUptake = (fitnessLevel * weight) / 1000;
  const activeFormula = JOGGING_FORMULAS[activeKey];

  return {
    isValid: true,
    fitnessLevel: fitnessLevel,
    formattedFitnessLevel: fitnessLevel.toFixed(1),
    maxOxygenUptake: maxOxygenUptake,
    formattedVO2Max: maxOxygenUptake.toFixed(2),
    activeFormulaKey: activeKey,
    recommendedFormulaKey: recKey,
    isRecommended: activeKey === recKey,
    formulaName: activeFormula.name,
    description: activeFormula.description,
    sd: activeFormula.sd,
    sdUnit: activeFormula.sdUnit,
    
    // Bagudkompatible metoder
    getFitnessLevel: () => fitnessLevel,
    getMaximalOxygenUptake: () => maxOxygenUptake,
    getKondital: () => fitnessLevel,
    getVO2Max: () => maxOxygenUptake
  };
}

export const VO2MaxJog = calculateFitnessJogging;