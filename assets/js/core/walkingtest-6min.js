// assets/js/core/walkingtest-6min.js

export const WALKING_TEST_FORMULAS = {
  enright: {
    id: 'enright',
    name: 'Enright & Sherrill (1998) 🏆',
    subtitle: 'Mest præcis (Første forsøg)',
    description: 'Beregner forventet gådistance baseret på køn, alder, højde og vægt.',
    requiresHeightWeight: true,
    calcReference: ({ gender, age, height, weight }) => {
      if (gender === 'male' || gender === 'mand' || gender === 1) {
        return (7.57 * height) - (5.02 * age) - (1.76 * weight) - 309;
      }
      return (2.11 * height) - (5.78 * age) - (2.29 * weight) + 667;
    }
  },
  gibbons: {
    id: 'gibbons',
    name: 'Gibbons et al. (2001)',
    subtitle: 'Re-test / Gentagne forsøg',
    description: 'Tager højde for indlæringseffekt ved gentagne tests (kræver kun køn og alder).',
    requiresHeightWeight: false,
    calcReference: ({ gender, age }) => {
      if (gender === 'male' || gender === 'mand' || gender === 1) {
        return 868.8 - (2.99 * age);
      }
      return 868.8 - (2.99 * age) - 74.7;
    }
  }
};

export function getWalkingTestEvaluation(percent) {
  if (percent >= 100) return { label: 'Over forventet', color: '#16a34a' };
  if (percent >= 80) return { label: 'Normal / Tilfredsstillende', color: '#22c55e' };
  if (percent >= 65) return { label: 'Lidt nedsat', color: '#eab308' };
  if (percent >= 50) return { label: 'Moderat nedsat', color: '#f97316' };
  return { label: 'Betydeligt nedsat', color: '#ef4444' };
}

export function calculateWalkingTest6Min(distanceInput, ageInput, heightInput, weightInput, gender = 'male', chosenFormulaKey = 'auto') {
  const distance = parseFloat(distanceInput);
  const age = parseFloat(ageInput);
  const height = parseFloat(heightInput);
  const weight = parseFloat(weightInput);

  // Auto-valg logik: Brug Enright hvis højde og vægt er udfyldt, ellers Gibbons
  let activeKey = chosenFormulaKey;
  if (chosenFormulaKey === 'auto') {
    if (!isNaN(height) && height > 0 && !isNaN(weight) && weight > 0) {
      activeKey = 'enright';
    } else {
      activeKey = 'gibbons';
    }
  }

  const formula = WALKING_TEST_FORMULAS[activeKey] || WALKING_TEST_FORMULAS.enright;

  // Basal validering
  if (isNaN(distance) || distance <= 0 || isNaN(age) || age <= 0) {
    return { isValid: false, formula, activeKey };
  }

  // Tjek om den valgte formel kræver højde og vægt
  if (formula.requiresHeightWeight && (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0)) {
    return { isValid: false, formula, activeKey };
  }

  const ctx = { gender, age, height, weight };
  const referenceMeter = formula.calcReference(ctx);

  if (isNaN(referenceMeter) || referenceMeter <= 0) {
    return { isValid: false, formula, activeKey };
  }

  const percentOfNormal = (distance / referenceMeter) * 100;

  return {
    isValid: true,
    distance: distance,
    referenceMeter: Math.round(referenceMeter),
    percentOfNormal: Math.round(percentOfNormal),
    formattedPercent: percentOfNormal.toFixed(1),
    activeFormulaKey: activeKey,
    isAutoSelected: chosenFormulaKey === 'auto',
    formula
  };
}