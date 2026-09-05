// assets/js/core/steptest.js

export const STEPTEST_FORMULAS = {
  ymca_kieu: {
    key: 'ymca_kieu',
    testGroup: 'ymca',
    name: 'YMCA – Kieu et al. (2020)',
    shortName: 'YMCA (Kieu)',
    desc: 'Inddrager alder, højde, vægt og 1-minutters genoprettelsespuls.',
    see: '±4.1 ml/kg/min',
    requiresWeight: true,
    requiresHeight: true,
    requiresStepHeight: false,
    requiresPulse: true,
    requiresDuration: false,
    isRecommended: true
  },
  ymca_modified: {
    key: 'ymca_modified',
    testGroup: 'ymca',
    name: 'YMCA Modified (Santo & Golding)',
    shortName: 'YMCA Modificeret',
    desc: 'Modificeret YMCA-test hvor bænkens højde tilpasses din kropshøjde.',
    see: '±4.3 ml/kg/min',
    requiresWeight: false,
    requiresHeight: true,
    requiresStepHeight: true,
    requiresPulse: true,
    requiresDuration: false,
    isRecommended: false
  },
  ymca_golding: {
    key: 'ymca_golding',
    testGroup: 'ymca',
    name: 'YMCA – Golding et al. (Standard)',
    shortName: 'YMCA (Klassisk)',
    desc: 'Klassisk YMCA-standardmodel baseret på genoprettelsespuls og køn.',
    see: '±4.8 ml/kg/min',
    requiresWeight: false,
    requiresHeight: false,
    requiresStepHeight: false,
    requiresPulse: true,
    requiresDuration: false,
    isRecommended: false
  },
  queens: {
    key: 'queens',
    testGroup: 'queens',
    name: 'Queens College Steptest (McArdle)',
    shortName: 'Queens College',
    desc: '3 minutter på 41,3 cm bænk. Måler 15-sekunders genoprettelsespuls (omregnet til BPM).',
    see: '±3.8 ml/kg/min',
    requiresWeight: false,
    requiresHeight: false,
    requiresStepHeight: false,
    requiresPulse: true,
    requiresDuration: false,
    isRecommended: true
  },
  astrand: {
    key: 'astrand',
    testGroup: 'astrand',
    name: 'Åstrand-Ryhming Steptest',
    shortName: 'Åstrand Step',
    desc: '6 minutter på bænk (40 cm mænd / 33 cm kvinder). Måler steady-state arbejdspuls i 5.-6. min.',
    see: '±4.0 ml/kg/min',
    requiresWeight: true,
    requiresHeight: false,
    requiresStepHeight: false,
    requiresPulse: true,
    requiresDuration: false,
    isRecommended: true
  },
  chester: {
    key: 'chester',
    testGroup: 'chester',
    name: 'Chester Step Test',
    shortName: 'Chester Step',
    desc: 'Progressiv steptest (max 80% HRmax). Ekstrapolerer VO₂max ud fra arbejdspuls og bokshøjde.',
    see: '±3.5 ml/kg/min',
    requiresWeight: true,
    requiresHeight: false,
    requiresStepHeight: true,
    requiresPulse: true,
    requiresDuration: false,
    isRecommended: true
  },
  harvard: {
    key: 'harvard',
    testGroup: 'harvard',
    name: 'Harvard Step Test',
    shortName: 'Harvard Step',
    desc: 'Intensiv test på høj bænk (50,8 / 40,6 cm). Udregner Fitness Index ud fra restitution.',
    see: 'Fitness Index',
    requiresWeight: false,
    requiresHeight: false,
    requiresStepHeight: false,
    requiresPulse: false,
    requiresHarvardP: true,
    requiresDuration: true,
    isRecommended: true
  },
  dansk: {
    key: 'dansk',
    testGroup: 'dansk',
    name: 'Den Danske Steptest',
    shortName: 'Den Danske Steptest',
    desc: 'Progressiv test UDEN pulsmåling. Estimerer VO₂max ud fra trinhøjde, vægt og gennemført tid.',
    see: 'Moderat',
    requiresWeight: true,
    requiresHeight: false,
    requiresStepHeight: true,
    requiresPulse: false,
    requiresDuration: true,
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
export function calculateStepTest({
  formulaKey = 'ymca_kieu',
  hr,
  p1, p2, p3,
  duration,
  age = 40,
  gender = 'male',
  height = 180,
  weight = 80,
  stepHeight = 25
}) {
  const heartRate = parseFloat(hr);
  const userAge = parseInt(age, 10) || 40;
  const userHeight = parseFloat(height) || 180;
  const bodyWeight = parseFloat(weight) || 80;
  const boxHeightCm = parseFloat(stepHeight) || 25;
  const testDuration = parseFloat(duration) || 300;
  const isMale = (gender === 'male' || gender === 'mand');

  let vo2max = 0;
  let fitnessIndex = null;
  const key = formulaKey.toLowerCase();

  switch (key) {
    case 'ymca_kieu':
      if (isNaN(heartRate) || heartRate <= 30) return { isValid: false };
      if (isMale) {
        vo2max = 70.597 - (0.246 * userAge) + (0.077 * userHeight) - (0.222 * bodyWeight) - (0.147 * heartRate);
      } else {
        vo2max = 70.597 - (0.185 * userAge) + (0.097 * userHeight) - (0.246 * bodyWeight) - (0.122 * heartRate);
      }
      break;

    case 'ymca_modified':
      if (isNaN(heartRate) || heartRate <= 30) return { isValid: false };
      // Santo & Golding (2003): VO2max = 76.710 - (0.2805 * HR_1min)
      vo2max = 76.710 - (0.2805 * heartRate);
      break;

    case 'ymca_golding':
      if (isNaN(heartRate) || heartRate <= 30) return { isValid: false };
      if (isMale) {
        vo2max = 70.03 - (0.35 * heartRate);
      } else {
        vo2max = 55.05 - (0.23 * heartRate);
      }
      break;

    case 'queens':
      if (isNaN(heartRate) || heartRate <= 30) return { isValid: false };
      if (isMale) {
        vo2max = 111.33 - (0.42 * heartRate);
      } else {
        vo2max = 65.81 - (0.1847 * heartRate);
      }
      break;

    case 'astrand': {
      if (isNaN(heartRate) || heartRate <= 30) return { isValid: false };
      const ageFactor = getAstrandAgeFactor(userAge);
      let rawVo2L = isMale ? ((192 - heartRate) / 32 + 1.5) : ((188 - heartRate) / 30 + 1.2);
      if (rawVo2L <= 0) rawVo2L = 1.0;
      vo2max = ((rawVo2L * 1000) / bodyWeight) * ageFactor;
      break;
    }

    case 'chester': {
      if (isNaN(heartRate) || heartRate <= 30) return { isValid: false };
      // Chester submax beregning baseret på bokshøjde og ekstrapolation til HRmax (220 - alder)
      const heightMeters = boxHeightCm / 100;
      const cadence = 25; // typisk niveau 3 (100 BPM)
      const vo2Submax = (0.2 * cadence) + (1.8 * cadence * heightMeters * 1.33) + 3.5;
      
      const maxHR = 220 - userAge;
      const hrRestingEst = 60;

      const hrRatio = Math.max(0.3, (maxHR - hrRestingEst) / Math.max(1, heartRate - hrRestingEst));
      vo2max = vo2Submax * hrRatio;

      if (!isMale) vo2max *= 0.90;
      break;
    }

    case 'harvard': {
      const valP1 = parseFloat(p1);
      const valP2 = parseFloat(p2);
      const valP3 = parseFloat(p3);

      if (isNaN(valP1) || valP1 <= 0) return { isValid: false };

      if (!isNaN(valP2) && !isNaN(valP3) && valP2 > 0 && valP3 > 0) {
        // Lang formel: (tid_sek * 100) / (2 * (P1 + P2 + P3))
        fitnessIndex = ((testDuration * 100) / (2 * (valP1 + valP2 + valP3))).toFixed(1);
      } else {
        // Kort formel: (tid_sek * 100) / (5.5 * P1)
        fitnessIndex = ((testDuration * 100) / (5.5 * valP1)).toFixed(1);
      }

      const fiNum = parseFloat(fitnessIndex);
      vo2max = (fiNum * 0.55) + 12;
      break;
    }

    case 'dansk': {
      // Den Danske Steptest: Ingen puls! Baseret på gennemført tid (sek) og stephøjde (cm)
      if (isNaN(testDuration) || testDuration <= 0) return { isValid: false };
      const timeInSec = Math.min(360, testDuration);
      
      // Zacho/Aadahl fysiologisk approksimationsmodel for præstation på Danske Steptest
      vo2max = (0.118 * timeInSec) + (0.75 * boxHeightCm) - 4.5;
      if (!isMale) vo2max *= 0.90;
      break;
    }
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