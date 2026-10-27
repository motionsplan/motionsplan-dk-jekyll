// assets/js/core/fat-pct.js

/**
 * Formel-register med indkodede standardafvigelser (SD / SEE)
 * Du kan nemt slå disse op i studierne og ændre tallene her.
 */
export const FORMULAS = {
  duerenberg1991: {
    id: 'duerenberg1991',
    name: 'Deurenberg et al. (1991)',
    sd: 3.7, // Standardafvigelse i %
    calc: ({ bmi, age, sex }) =>
      age < 18
        ? 1.51 * bmi - 0.70 * age - 3.6 * sex + 1.4
        : 1.20 * bmi + 0.23 * age - 10.8 * sex - 5.4
  },
  duerenberg1998: {
    id: 'duerenberg1998',
    name: 'Deurenberg et al. (1998)',
    sd: 3.9,
    calc: ({ bmi, age, sex }) => 1.29 * bmi + 0.20 * age - 11.4 * sex - 10
  },
  gallagher2000: {
    id: 'gallagher2000',
    name: 'Gallagher et al. (2000)',
    sd: 4.1,
    calc: ({ bmi, age, sex }) => 63.7 - 864 * (1 / bmi) - 12.1 * sex + 0.12 * age
  },
  jacksonPollock1980: {
    id: 'jacksonPollock1980',
    name: 'Jackson & Pollock (1980)',
    sd: 3.6,
    calc: ({ bmi, age, sex }) => 1.60 * bmi + 0.13 * age - 12.1 * sex - 13.9
  },
  heitmann1990: {
    id: 'heitmann1990',
    name: 'Heitmann (1990)',
    sd: 4.5,
    calc: ({ bmi, weight, age, isMale }) => {
      const fm = isMale
        ? 0.988 * bmi + 0.242 * weight + 0.094 * age - 30.18
        : 0.988 * bmi + 0.344 * weight + 0.094 * age - 30.18;
      return (fm / weight) * 100;
    }
  },
  womersleyDurnin1977: {
    id: 'womersleyDurnin1977',
    name: 'Durnin & Womersley (1977)',
    sd: 4.8,
    calc: ({ bmi, isMale }) => (isMale ? 1.34 * bmi - 12.47 : 1.37 * bmi - 3.47)
  },
  heritage2002: {
    id: 'heritage2002',
    name: 'HERITAGE Study (2002)',
    sd: 3.8,
    calc: ({ bmi, age, sex }) => 1.39 * bmi + 0.16 * age - 10.34 * sex - 9
  }
};

/**
 * Finder automatisk den mest velegnede formel ud fra alder
 */
export function selectBestFormulaKey(age) {
  if (age < 18) return 'duerenberg1991'; // Børn og unge
  if (age >= 18 && age <= 65) return 'duerenberg1998'; // Voksne
  return 'jacksonPollock1980'; // Ældre
}

/**
 * Hovedfunktion til udregning af fedtprocent og fedtmasse
 */
export function calculateFatPercent(height, weight, age, gender = 'man', chosenFormulaKey = 'auto') {
  if (!height || !weight || !age || height <= 0 || weight <= 0 || age <= 0) {
    return { isValid: false };
  }

  const hMeters = height / 100;
  const bmi = weight / (hMeters ** 2);
  const isMale = gender === 'man' || gender === 'male' || gender === '1' || gender === 1;
  const sex = isMale ? 1 : 0;

  const ctx = { bmi, weight, age, isMale, sex };

  // Beregn alle 7 formler
  const results = {};
  let sum = 0;
  let count = 0;

  Object.keys(FORMULAS).forEach(key => {
    const val = FORMULAS[key].calc(ctx);
    results[key] = {
      id: key,
      name: FORMULAS[key].name,
      sd: FORMULAS[key].sd,
      value: val,
      formatted: val.toFixed(1)
    };
    sum += val;
    count++;
  });

  const average = sum / count;

  // Bestem hvilken formel der skal benyttes
  let activeKey = chosenFormulaKey;
  if (activeKey === 'auto' || !FORMULAS[activeKey]) {
    activeKey = selectBestFormulaKey(age);
  }

  const chosenResult = results[activeKey];
  
  // Fedtmasse (kg) udregnet DIREKTE ud fra den valgte formels fedtprocent
  const fatMass = weight * (chosenResult.value / 100);

  return {
    isValid: true,
    bmi: bmi,
    fatMass: fatMass,
    average: average,
    chosenFormulaKey: activeKey,
    chosenResult: chosenResult,
    allResults: results
  };
}

export const CalculateFatPercent = calculateFatPercent;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calculateFatPercent, CalculateFatPercent, FORMULAS, selectBestFormulaKey };
}