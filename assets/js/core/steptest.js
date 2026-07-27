// assets/js/core/steptest.js

export const STEPTEST_FORMULAS = {
  ymca_kieu: {
    key: 'ymca_kieu',
    testGroup: 'ymca',
    name: 'YMCA – Kieu et al. (2020)',
    shortName: 'YMCA (Kieu)',
    desc: 'Moderne og højdepræcis model. Inddrager alder, højde, vægt og 1-minutters genoprettelsespuls.',
    see: '±4.1 ml/kg/min',
    requiresWeight: true,
    requiresHeight: true,
    requiresStepHeight: false,
    isRecommended: true
  },
  ymca_modified: {
    key: 'ymca_modified',
    testGroup: 'ymca',
    name: 'YMCA Modified (Justerbar stephøjde)',
    shortName: 'YMCA Modificeret',
    desc: 'Modificeret YMCA-test hvor bænkens højde tilpasses. Beregner VO₂max ud fra stephøjde, vægt, alder og puls.',
    see: '±4.3 ml/kg/min',
    requiresWeight: true,
    requiresHeight: false,
    requiresStepHeight: true,
    isRecommended: false
  },
  ymca_golding: {
    key: 'ymca_golding',
    testGroup: 'ymca',
    name: 'YMCA – Golding et al. (Standard)',
    shortName: 'YMCA (Klassisk)',
    desc: 'Klassisk YMCA-standardmodel baseret udelukkende på din genoprettelsespuls og køn.',
    see: '±4.8 ml/kg/min',
    requiresWeight: false,
    requiresHeight: false,
    requiresStepHeight: false,
    isRecommended: false
  },
  queens: {
    key: 'queens',
    testGroup: 'queens',
    name: 'Queens College Steptest (McArdle)',
    shortName: 'Queens College',
    desc: '3 minutter på 41,3 cm bænk (24 step/min mænd / 22 kvinder). Pulsen tælles i 15 sek.',
    see: '±3.8 ml/kg/min',
    requiresWeight: false,
    requiresHeight: false,
    requiresStepHeight: false,
    isRecommended: true
  },
  astrand: {
    key: 'astrand',
    testGroup: 'astrand',
    name: 'Åstrand-Ryhming Steptest',
    shortName: 'Åstrand Step',
    desc: '6 minutter på bænk (40 cm mænd / 33 cm kvinder). Måler arbejdispuls i 5.-6. minut.',
    see: '±4.0 ml/kg/min',
    requiresWeight: true,
    requiresHeight: false,
    requiresStepHeight: false,
    isRecommended: true
  },
  chester: {
    key: 'chester',
    testGroup: 'chester',
    name: 'Chester Step Test',
    shortName: 'Chester Step',
    desc: 'Progressiv steptest. Estimerer VO₂max ud fra din arbejdspuls, stephøjde (15-30 cm) og alder.',
    see: '±3.5 ml/kg/min',
    requiresWeight: true,
    requiresHeight: false,
    requiresStepHeight: true,
    isRecommended: true
  },
  harvard: {
    key: 'harvard',
    testGroup: 'harvard',
    name: 'Harvard Step Test',
    shortName: 'Harvard Step',
    desc: '5 minutter på høj bænk (50,8 cm mænd / 40,6 cm kvinder). Beregner et Fitness Index.',
    see: 'Fitness Index',
    requiresWeight: false,
    requiresHeight: false,
    requiresStepHeight: false,
    isRecommended: true
  }
};

function getAstrandAgeFactor(age) {
  if (age <= 19) return 1.10;
  if (age <= 24) return 1.00;
  if (age <= 29) return 0.97;
  if (age <= 34) return 0.93;
  if (age <= 39) return 0.88;
  if (age <= 44) return 0.83;
  if (age <= 49) return 0.78;
  if (age <= 54) return 0.73;
  if (age <= 59) return 0.68;
  if (age <= 64) return 0.64;
  return 0.60;
}

/**
 * Beregner kondital for den valgte steptest-formel
 */
export function calculateStepTest({ formulaKey = 'ymca_kieu', hr, age = 30, gender = 'male', height = 175, weight = 70, stepHeight = 30.5 }) {
  const heartRate = parseFloat(hr);
  const userAge = parseInt(age, 10) || 30;
  const userHeight = parseFloat(height) || 175;
  const bodyWeight = parseFloat(weight) || 70;
  const boxHeightCm = parseFloat(stepHeight) || 30.5;
  const isMale = (gender === 'male' || gender === 'mand');

  if (isNaN(heartRate) || heartRate <= 30 || heartRate > 220) {
    return { isValid: false };
  }

  let vo2max = 0;
  let fitnessIndex = null;
  const key = formulaKey.toLowerCase();

  switch (key) {
    case 'ymca_kieu':
      // Kieu et al. (2020) PMC7171059
      if (isMale) {
        vo2max = 70.597 - (0.246 * userAge) + (0.077 * userHeight) - (0.222 * bodyWeight) - (0.147 * heartRate);
      } else {
        vo2max = 70.597 - (0.185 * userAge) + (0.097 * userHeight) - (0.246 * bodyWeight) - (0.122 * heartRate);
      }
      break;

    case 'ymca_modified': {
      // ACSM submax stepper-ligning justeret for bænkens højde i meter
      const heightMeters = boxHeightCm / 100;
      const cadence = 24; // 24 step/min (96 bpm)
      const vo2Submax = (0.2 * cadence) + (1.8 * cadence * heightMeters * 1.33) + 3.5;
      
      const maxHR = 208 - (0.7 * userAge);
      const hrRestingEst = 61;
      
      const hrRatio = Math.max(0.3, (maxHR - hrRestingEst) / Math.max(1, heartRate - hrRestingEst));
      vo2max = vo2Submax * hrRatio;

      if (!isMale) vo2max *= 0.92;
      break;
    }

    case 'ymca_golding':
      if (isMale) {
        vo2max = 70.03 - (0.35 * heartRate);
      } else {
        vo2max = 55.05 - (0.23 * heartRate);
      }
      break;

    case 'queens':
      if (isMale) {
        vo2max = 111.33 - (0.42 * heartRate);
      } else {
        vo2max = 65.81 - (0.1847 * heartRate);
      }
      break;

    case 'astrand': {
      const ageFactor = getAstrandAgeFactor(userAge);
      let rawVo2L = isMale ? ((192 - heartRate) / 32 + 1.5) : ((188 - heartRate) / 30 + 1.2);
      if (rawVo2L <= 0) rawVo2L = 1.0;
      vo2max = ((rawVo2L * 1000) / bodyWeight) * ageFactor;
      break;
    }

    case 'chester': {
      // Chester Step Test (ACSM submax beregning baseret på stephøjde og puls)
      const heightMeters = boxHeightCm / 100;
      const cadence = 25; // typisk submax niveau (niveau 3 / 100 bpm)
      const vo2Submax = (0.2 * cadence) + (1.8 * cadence * heightMeters * 1.33) + 3.5;
      
      const maxHR = 208 - (0.7 * userAge);
      const hrRestingEst = 60;

      const hrRatio = Math.max(0.3, (maxHR - hrRestingEst) / Math.max(1, heartRate - hrRestingEst));
      vo2max = vo2Submax * hrRatio;

      if (!isMale) vo2max *= 0.90;
      break;
    }

    case 'harvard':
      fitnessIndex = ((300 * 100) / (2 * heartRate)).toFixed(1);
      vo2max = (fitnessIndex * 0.55) + 12;
      break;
  }

  if (vo2max <= 0 || isNaN(vo2max)) {
    return { isValid: false };
  }

  return {
    isValid: true,
    formulaKey: key,
    formulaDef: STEPTEST_FORMULAS[key],
    fitnessLevel: vo2max.toFixed(1),
    fitnessIndex: fitnessIndex,
    heartRate: heartRate
  };
}