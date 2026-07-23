// assets/js/core/bmr.js

const KCAL_TO_KJ = 4.184;

/**
 * Strategy Pattern: Alle BMR-formler med koefficienter, enheder og SEE (Standard Error of Estimate).
 */
const FORMULAS = {
  // --- FFM / LBM Formler (Kræver fedtprocent / Mager kropsmasse) ---
  cunningham: {
    name: 'Cunningham (1991) – FFM/LBM',
    unit: 'kcal',
    requiresFFM: true,
    seeKcal: 110,
    calc: ({ lbm }) => 500 + (22 * lbm)
  },

  katch_mcardle: {
    name: 'Katch-McArdle – FFM/LBM',
    unit: 'kcal',
    requiresFFM: true,
    seeKcal: 115,
    calc: ({ lbm }) => 370 + (21.6 * lbm)
  },

  nordic_nutrition_ffm: {
    name: 'Nordic Nutrition Recommendations (FFM)',
    unit: 'kJ',
    requiresFFM: true,
    seeKcal: 140,
    calc: ({ lbm }) => (0.09 * lbm + 1.55) * 1000
  },

  // --- Standard Formler (Vægt, Højde, Alder) ---
  nordic_nutrition_2012: {
    name: 'Nordic Nutrition Recommendations (2012)',
    unit: 'kJ',
    seeKcal: 160,
    calc: ({ weight, height, age, isMale }) => {
      const hMeters = height / 100;

      if (hMeters > 0) {
        let bmrMJ = 0;
        if (isMale) {
          if (age > 70)      bmrMJ = 0.0748 * weight + 2.26 * hMeters - 1.070;
          else if (age > 60) bmrMJ = 0.0748 * weight + 2.26 * hMeters - 1.070;
          else if (age > 30) bmrMJ = 0.0476 * weight + 2.26 * hMeters - 0.574;
          else if (age > 18) bmrMJ = 0.0600 * weight + 1.31 * hMeters + 0.473;
          else if (age > 10) bmrMJ = 0.0651 * weight + 1.11 * hMeters + 1.25;
          else if (age > 2)  bmrMJ = 0.0632 * weight + 1.31 * hMeters + 1.28;
          else               bmrMJ = 0.118 * weight + 3.59 * hMeters - 1.55;
        } else {
          if (age > 70)      bmrMJ = 0.0356 * weight + 1.76 * hMeters + 0.0448;
          else if (age > 60) bmrMJ = 0.0356 * weight + 1.76 * hMeters + 0.0448;
          else if (age > 30) bmrMJ = 0.0342 * weight + 2.10 * hMeters - 0.0486;
          else if (age > 18) bmrMJ = 0.0433 * weight + 2.57 * hMeters - 1.180;
          else if (age > 10) bmrMJ = 0.0393 * weight + 1.04 * hMeters + 1.93;
          else if (age > 2)  bmrMJ = 0.0666 * weight + 0.878 * hMeters + 1.46;
          else               bmrMJ = 0.127 * weight + 2.94 * hMeters - 1.20;
        }
        return bmrMJ * 1000;
      }

      let bmrMJ = 0;
      if (isMale) {
        if (age > 70)      bmrMJ = 0.0573 * weight + 2.01;
        else if (age > 60) bmrMJ = 0.0543 * weight + 2.37;
        else if (age > 30) bmrMJ = 0.0592 * weight + 2.48;
        else if (age > 18) bmrMJ = 0.0669 * weight + 2.28;
        else if (age > 10) bmrMJ = 0.0769 * weight + 2.43;
        else if (age > 2)  bmrMJ = 0.0937 * weight + 2.15;
        else               bmrMJ = 0.255 * weight - 0.141;
      } else {
        if (age > 70)      bmrMJ = 0.0417 * weight + 2.41;
        else if (age > 60) bmrMJ = 0.0429 * weight + 2.39;
        else if (age > 30) bmrMJ = 0.0407 * weight + 2.9;
        else if (age > 18) bmrMJ = 0.0546 * weight + 2.33;
        else if (age > 10) bmrMJ = 0.0465 * weight + 3.18;
        else if (age > 2)  bmrMJ = 0.0842 * weight + 2.12;
        else               bmrMJ = 0.246 * weight - 0.0965;
      }
      return bmrMJ * 1000;
    }
  },

  mifflin: {
    name: 'Mifflin et al. (1990)',
    unit: 'kcal',
    seeKcal: 125,
    calc: ({ weight, height, age, isMale }) => {
      const w = parseFloat(weight);
      const h = parseFloat(height);
      const a = parseFloat(age);
      return isMale
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;
    }
  },

  pavlidou_2023: {
    name: 'Pavlidou (2023)',
    unit: 'kJ',
    seeKcal: 130,
    calc: ({ weight, height, age, isMale }) => {
      const hMeters = height / 100;
      const bmrKcal = isMale
        ? 9.65 * weight + 573 * hMeters - 5.08 * age + 260
        : 7.38 * weight + 607 * hMeters - 2.31 * age + 43;
      return bmrKcal * KCAL_TO_KJ;
    }
  },

  schofield: {
    name: 'Schofield (1985)',
    unit: 'kJ',
    seeKcal: 180,
    calc: ({ weight, age, isMale }) => {
      if (isMale) {
        if (age > 60) return 49.9 * weight + 2930;
        if (age > 30) return 48 * weight + 3653;
        if (age > 18) return 63 * weight + 2896;
        if (age > 10) return 74 * weight + 2754;
        if (age > 2)  return 95 * weight + 2110;
        if (age > 0)  return 249 * weight - 127;
      } else {
        if (age > 60) return 38 * weight + 2755;
        if (age > 30) return 34 * weight + 3538;
        if (age > 18) return 62 * weight + 2036;
        if (age > 10) return 56 * weight + 2898;
        if (age > 2)  return 85 * weight + 2033;
        if (age > 0)  return 244 * weight - 130;
      }
      return 0;
    }
  },

  nordic_nutrition_1996: {
    name: 'Nordic Nutrition Recommendations (1996)',
    unit: 'kJ',
    seeKcal: 180,
    calc: ({ weight, age, isMale }) => {
      if (isMale) {
        if (age > 75) return 35 * weight + 3430;
        if (age > 60) return 49.9 * weight + 2930;
        if (age > 30) return 48.5 * weight + 3670;
        if (age > 18) return 64 * weight + 2840;
        if (age > 10) return 74 * weight + 2750;
      } else {
        if (age > 75) return 41 * weight + 2610;
        if (age > 60) return 38.6 * weight + 2880;
        if (age > 30) return 36.4 * weight + 3470;
        if (age > 18) return 61.5 * weight + 2080;
        if (age > 10) return 56 * weight + 2900;
      }
      return 0;
    }
  },

  benedict_harris: {
    name: 'Benedict-Harris (1918-1919)',
    unit: 'kcal',
    seeKcal: 185,
    calc: ({ weight, height, age, isMale }) =>
      isMale
        ? 66.5 + 13.75 * weight + 5.003 * height - 6.75 * age
        : 655.1 + 9.563 * weight + 1.850 * height - 4.676 * age
  },

  henry: {
    name: 'Henry (2005)',
    unit: 'kcal',
    seeKcal: 145,
    calc: ({ weight, height, age, isMale }) => {
      const hMeters = height / 100;
      if (isMale) {
        if (age < 18) return 15.6 * weight + 266 * hMeters + 65;
        if (age < 30) return 14.4 * weight + 313 * hMeters + 113;
        if (age < 60) return 11.4 * weight + 541 * hMeters - 137;
        return 11.4 * weight + 541 * hMeters - 256;
      }
      if (age < 18) return 14.4 * weight + 313 * hMeters - 62;
      if (age < 30) return 10.4 * weight + 615 * hMeters - 282;
      if (age < 60) return 8.18 * weight + 502 * hMeters - 11.6;
      return 8.52 * weight + 421 * hMeters + 10.7;
    }
  },

  gerrior_2006: {
    name: 'Gerrior (2006)',
    unit: 'kcal',
    seeKcal: 135,
    calc: ({ weight, height, age, isMale }) =>
      isMale
        ? 293 + 12.8 * weight + 10.2 * height - 6.2 * age
        : 247 + 9.2 * weight + 7.8 * height - 4.3 * age
  }
};

function getRecommendedFormulaKey(bmi, bodyFat = 0) {
  if (bodyFat > 0) return 'cunningham';
  if (bmi >= 40) return 'henry';
  if (bmi >= 30) return 'mifflin';
  return 'nordic_nutrition_2012';
}

export function calculateBMR(gender, age, weight, height = 0, formula = 'recommended_formula', bodyFat = 0) {
  const isMale = gender === 'man' || gender === 'male' || gender === '1' || gender === 1;
  const hMeters = height > 0 ? height / 100 : 0;
  const bmi = hMeters > 0 ? weight / (hMeters * hMeters) : 0;
  const fatPct = parseFloat(bodyFat) || 0;

  const lbm = fatPct > 0 ? weight * (1 - (fatPct / 100)) : 0;

  const isAuto = !formula || formula === 'recommended_formula' || formula === 'recommended';
  let activeKey = isAuto ? getRecommendedFormulaKey(bmi, fatPct) : formula;
  let formulaObj = FORMULAS[activeKey] || FORMULAS.nordic_nutrition_2012;

  if (formulaObj.requiresFFM && lbm <= 0) {
    activeKey = 'nordic_nutrition_2012';
    formulaObj = FORMULAS.nordic_nutrition_2012;
  }

  const rawValue = formulaObj.calc({ weight, height, age, isMale, bmi, lbm });

  let bmrKJ = 0;
  let bmrKcal = 0;

  if (formulaObj.unit === 'kJ') {
    bmrKJ = rawValue;
    bmrKcal = rawValue / KCAL_TO_KJ;
  } else {
    bmrKcal = rawValue;
    bmrKJ = rawValue * KCAL_TO_KJ;
  }

  const seeKcal = formulaObj.seeKcal || 150;
  const seeKJ = Math.round(seeKcal * KCAL_TO_KJ);

  return {
    getBMRKcal: () => bmrKcal,
    getBMRKJ: () => bmrKJ,
    getBasicMetabolicRate: () => bmrKJ,
    getSEE: () => seeKcal,
    getSEEKj: () => seeKJ,
    getFormulaName: () => formulaObj.name,
    getFormulaKey: () => activeKey,
    getBMI: () => bmi,
    getLBM: () => lbm,
    isAutoSelected: () => isAuto
  };
}

export function BMR(sex, age, weight, height = 0, formula = 'recommended_formula', bodyFat = 0) {
  const calc = calculateBMR(sex, age, weight, height, formula, bodyFat);
  return {
    getBasicMetabolicRate: () => calc.getBMRKJ(),
    getFormulaName: () => calc.getFormulaName()
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calculateBMR,
    BMR,
    FORMULAS
  };
}