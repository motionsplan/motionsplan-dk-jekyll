// assets/js/core/skinfold.js

/**
 * Hjælpefunktion: Formaterer det matematiske resultat.
 */
function formatResult(fatPct, weight) {
  if (isNaN(fatPct) || fatPct < 0 || fatPct > 100) {
    return { isValid: false };
  }
  
  const fatMass = weight > 0 ? (weight * fatPct) / 100 : 0;
  const leanMass = weight > 0 ? weight - fatMass : 0;
  
  return {
    isValid: true,
    fatPct: fatPct,
    fatMass: fatMass,
    leanMass: leanMass
  };
}

/**
 * SKINFOLD_FORMULAS
 * Centralt katalog over alle hudfoldstests med deres faglige metadata og beregninger.
 */
export const SKINFOLD_FORMULAS = {
  
  'ymca-4': {
    id: 'ymca-4',
    name: 'YMCA 4-punkt',
    targetAudience: 'adult',
    see: 3.5, // Standard Error of Estimate (%)
    demographics: ['age', 'weight'],
    sites: {
      male: ['abdomen', 'suprailiac', 'triceps', 'thigh'],
      female: ['abdomen', 'suprailiac', 'triceps', 'thigh']
    },
    calculate(params) {
      const { gender, age, weight, abdomen, suprailiac, triceps, thigh } = params;
      if (!abdomen || !suprailiac || !triceps || !thigh || !age) return { isValid: false };

      const sum4 = abdomen + suprailiac + triceps + thigh;
      const isMale = gender === 'male';
      
      let density = isMale
        ? 1.0953 - (0.00085 * sum4) + (0.0000016 * Math.pow(sum4, 2)) - (0.0002574 * age)
        : 1.0960 - (0.000695 * sum4) + (0.0000011 * Math.pow(sum4, 2)) - (0.0000714 * age);

      const fatPct = ((4.95 / density) - 4.50) * 100;
      return formatResult(Math.max(2, Math.min(60, fatPct)), weight);
    }
  },

  'peterson-4': {
    id: 'peterson-4',
    name: 'Peterson 4-punkt',
    targetAudience: 'adult',
    see: 2.5,
    demographics: ['age', 'weight', 'height'],
    sites: {
      male: ['thigh', 'triceps', 'subscapular', 'suprailiac'],
      female: ['thigh', 'triceps', 'subscapular', 'suprailiac']
    },
    calculate(params) {
      const { gender, age, weight, height, thigh, triceps, subscapular, suprailiac } = params;
      if (!age || !weight || !height || !thigh || !triceps || !subscapular || !suprailiac) {
        return { isValid: false };
      }

      const sum4 = thigh + triceps + subscapular + suprailiac;
      let fatPct = 20.94878 + (0.1166 * age) - (0.1166 * height) + (0.4269 * weight) - (0.3559 * sum4) + (0.0013 * Math.pow(sum4, 2)) - (0.1386 * (height * weight / 1000));
      
      if (gender === 'male') fatPct -= 5.5;
      return formatResult(Math.max(3, Math.min(60, fatPct)), weight);
    }
  },

  'durnin-4': {
    id: 'durnin-4',
    name: 'Durnin & Womersley 4-punkt',
    targetAudience: 'adult',
    see: 3.5,
    demographics: ['age', 'weight'],
    sites: {
      male: ['biceps', 'triceps', 'subscapular', 'suprailiac'],
      female: ['biceps', 'triceps', 'subscapular', 'suprailiac']
    },
    calculate(params) {
      const { gender, age, weight, biceps, triceps, subscapular, suprailiac } = params;
      if (!biceps || !triceps || !subscapular || !suprailiac || !age) return { isValid: false };

      const sum = biceps + triceps + subscapular + suprailiac;
      const logSum = Math.log10(sum);
      let density = 0;

      if (gender === 'male') {
        if (age < 17)      density = 1.1533 - 0.0643 * logSum;
        else if (age < 20) density = 1.1620 - 0.0630 * logSum;
        else if (age < 30) density = 1.1631 - 0.0632 * logSum;
        else if (age < 40) density = 1.1422 - 0.0544 * logSum;
        else if (age < 50) density = 1.1620 - 0.0700 * logSum;
        else               density = 1.1715 - 0.0779 * logSum;
      } else {
        if (age < 17)      density = 1.1369 - 0.0598 * logSum;
        else if (age < 20) density = 1.1549 - 0.0678 * logSum;
        else if (age < 30) density = 1.1599 - 0.0717 * logSum;
        else if (age < 40) density = 1.1423 - 0.0632 * logSum;
        else if (age < 50) density = 1.1333 - 0.0612 * logSum;
        else               density = 1.1339 - 0.0645 * logSum;
      }

      const fatPct = (495 / density) - 450;
      return formatResult(fatPct, weight);
    }
  },

  'jackson-pollock-3': {
    id: 'jackson-pollock-3',
    name: 'Jackson & Pollock 3-punkt',
    targetAudience: 'adult',
    see: 3.7,
    demographics: ['age', 'weight'],
    sites: {
      male: ['chest', 'abdomen', 'thigh'],
      female: ['triceps', 'suprailiac', 'thigh']
    },
    calculate(params) {
      const { gender, age, weight, chest, abdomen, thigh, triceps, suprailiac } = params;
      if (!age) return { isValid: false };

      let sum = 0;
      let density = 0;

      if (gender === 'male') {
        if (!chest || !abdomen || !thigh) return { isValid: false };
        sum = chest + abdomen + thigh;
        density = 1.10938 - (0.0008267 * sum) + (0.0000016 * Math.pow(sum, 2)) - (0.0002574 * age);
      } else {
        if (!triceps || !suprailiac || !thigh) return { isValid: false };
        sum = triceps + suprailiac + thigh;
        density = 1.0994921 - (0.0009929 * sum) + (0.0000023 * Math.pow(sum, 2)) - (0.0001392 * age);
      }

      const fatPct = (495 / density) - 450;
      return formatResult(fatPct, weight);
    }
  },

  'lohman-2': {
    id: 'lohman-2',
    name: 'Lohman 2-punkt',
    targetAudience: 'child',
    see: 3.8,
    demographics: ['age', 'weight'],
    sites: {
      male: ['triceps', 'calf'],
      female: ['triceps', 'calf']
    },
    calculate(params) {
      const { gender, weight, triceps, calf } = params;
      if (!triceps || !calf) return { isValid: false };

      const sum = triceps + calf;
      const fatPct = gender === 'male' ? (0.735 * sum) + 1.0 : (0.610 * sum) + 5.1;
      return formatResult(fatPct, weight);
    }
  },

  'slaughter-2': {
    id: 'slaughter-2',
    name: 'Slaughter 2-punkt',
    targetAudience: 'child',
    see: 3.6,
    demographics: ['age', 'weight'],
    sites: {
      male: ['triceps', 'subscapular'],
      female: ['triceps', 'subscapular']
    },
    calculate(params) {
      const { gender, age, weight, triceps, subscapular } = params;
      if (!triceps || !subscapular) return { isValid: false };

      const sum = triceps + subscapular;
      const isMale = gender === 'male';
      let fatPct = 0;

      if (isMale) {
        if (sum > 35) {
          fatPct = 0.783 * sum + 1.6;
        } else {
          let intercept = 1.7;
          if (age >= 11 && age <= 14) intercept = 3.4;
          else if (age >= 15) intercept = 5.5;

          fatPct = (1.21 * sum) - (0.008 * Math.pow(sum, 2)) - intercept;
        }
      } else {
        if (sum > 35) {
          fatPct = 0.546 * sum + 9.7;
        } else {
          fatPct = (1.33 * sum) - (0.013 * Math.pow(sum, 2)) - 2.5;
        }
      }

      return formatResult(Math.max(3, Math.min(60, fatPct)), weight);
    }
  }
};