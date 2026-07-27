// assets/js/core/yoyo-intermittent.js

const YYIR1_SHUTTLES = {
  5: 1, 9: 1, 11: 2, 12: 3, 13: 4, 14: 8, 15: 8, 16: 8, 17: 8, 18: 8, 19: 8, 20: 8, 21: 8, 22: 8, 23: 8
};

const YYIR2_SHUTTLES = {
  11: 1, 15: 1, 17: 2, 18: 3, 19: 4, 20: 8, 21: 8, 22: 8, 23: 8, 24: 8, 25: 8, 26: 8
};

// Både YYIE1 og YYIE2 deler præcis samme opbygning af stages og shuttles
const YYIE_SHUTTLES = {
  1: 2, 2: 2, 3: 2, 4: 8, 5: 8, 6: 8, 7: 3, 8: 3, 9: 6, 10: 6,
  11: 6, 12: 6, 13: 6, 14: 6, 15: 6, 16: 6, 17: 6, 18: 6, 19: 6, 20: 6
};

function getIntermittentDistance(shuttleMap, minLvl, currentLvl, currentShuttles) {
  let dist = 0;
  for (let lvl = minLvl; lvl < currentLvl; lvl++) {
    if (shuttleMap[lvl]) {
      dist += shuttleMap[lvl] * 40;
    }
  }
  dist += currentShuttles * 40;
  return dist;
}

function getMaxIntermittentDistance(shuttleMap, minLvl, maxLvl) {
  let maxDist = 0;
  for (let lvl = minLvl; lvl <= maxLvl; lvl++) {
    if (shuttleMap[lvl]) {
      maxDist += shuttleMap[lvl] * 40;
    }
  }
  return maxDist;
}

export const YOYO_INTERMITTENT_FORMULAS = {
  yyir1: {
    id: 'yyir1',
    name: 'Yo-Yo Intermittent Recovery 1 (YYIR1) 🏆',
    minLevel: 5,
    maxLevel: 23,
    sd: 3.2,
    sdUnit: 'ml/kg/min',
    maxTestDistance: getMaxIntermittentDistance(YYIR1_SHUTTLES, 5, 23),
    maxTotalShuttles: getMaxIntermittentDistance(YYIR1_SHUTTLES, 5, 23) / 40,
    description: 'Bangsbo formel: Distance × 0.0084 + 36.4 (10s active recovery).',
    getMaxShuttles: (lvl) => YYIR1_SHUTTLES[lvl] !== undefined ? YYIR1_SHUTTLES[lvl] : 8,
    calc: (dist) => (dist * 0.0084) + 36.4,
    calcDistance: (lvl, shuttles) => getIntermittentDistance(YYIR1_SHUTTLES, 5, lvl, shuttles)
  },
  yyir2: {
    id: 'yyir2',
    name: 'Yo-Yo Intermittent Recovery 2 (YYIR2 - Elite)',
    minLevel: 11,
    maxLevel: 26,
    sd: 3.5,
    sdUnit: 'ml/kg/min',
    maxTestDistance: getMaxIntermittentDistance(YYIR2_SHUTTLES, 11, 26),
    maxTotalShuttles: getMaxIntermittentDistance(YYIR2_SHUTTLES, 11, 26) / 40,
    description: 'Bangsbo formel for veltrænede: Distance × 0.0136 + 45.3.',
    getMaxShuttles: (lvl) => YYIR2_SHUTTLES[lvl] !== undefined ? YYIR2_SHUTTLES[lvl] : 8,
    calc: (dist) => (dist * 0.0136) + 45.3,
    calcDistance: (lvl, shuttles) => getIntermittentDistance(YYIR2_SHUTTLES, 11, lvl, shuttles)
  },
  yyie1: {
    id: 'yyie1',
    name: 'Yo-Yo Intermittent Endurance 1 (YYIE1)',
    minLevel: 1,
    maxLevel: 20,
    sd: 3.3,
    sdUnit: 'ml/kg/min',
    maxTestDistance: getMaxIntermittentDistance(YYIE_SHUTTLES, 1, 20),
    maxTotalShuttles: getMaxIntermittentDistance(YYIE_SHUTTLES, 1, 20) / 40,
    description: 'Bangsbo formel: Distance × 0.0078 + 41.1 (5s active recovery).',
    getMaxShuttles: (lvl) => YYIE_SHUTTLES[lvl] !== undefined ? YYIE_SHUTTLES[lvl] : 6,
    calc: (dist) => (dist * 0.0078) + 41.1,
    calcDistance: (lvl, shuttles) => getIntermittentDistance(YYIE_SHUTTLES, 1, lvl, shuttles)
  },
  yyie2: {
    id: 'yyie2',
    name: 'Yo-Yo Intermittent Endurance 2 (YYIE2)',
    minLevel: 1, // Opdateret til at følge YYIE-logikken
    maxLevel: 20, // Opdateret til at følge YYIE-logikken
    sd: 3.6,
    sdUnit: 'ml/kg/min',
    maxTestDistance: getMaxIntermittentDistance(YYIE_SHUTTLES, 1, 20), // Bruger nu YYIE_SHUTTLES
    maxTotalShuttles: getMaxIntermittentDistance(YYIE_SHUTTLES, 1, 20) / 40,
    description: 'Bangsbo formel for veltrænede: Distance × 0.0121 + 45.0.',
    getMaxShuttles: (lvl) => YYIE_SHUTTLES[lvl] !== undefined ? YYIE_SHUTTLES[lvl] : 6, // Bruger nu YYIE_SHUTTLES
    calc: (dist) => (dist * 0.0121) + 45.0,
    calcDistance: (lvl, shuttles) => getIntermittentDistance(YYIE_SHUTTLES, 1, lvl, shuttles) // Bruger nu YYIE_SHUTTLES
  }
};

export function getYoYoIntermittentRating(distance, gender = 'male', age = 20) {
  let ageGroup = 0;
  if (age <= 25) ageGroup = 0;
  else if (age <= 35) ageGroup = 1;
  else if (age <= 45) ageGroup = 2;
  else if (age <= 55) ageGroup = 3;
  else if (age <= 65) ageGroup = 4;
  else ageGroup = 5;

  const vo2max = (distance * 0.0084) + 36.4;

  const maleNorms = [
    [57, 57, 52, 46, 42, 38], // Elite
    [53, 49, 43, 39, 36, 33], // Fremragende
    [49, 43, 39, 36, 32, 29], // God
    [45, 40, 35, 32, 30, 26], // Middel
    [41, 35, 31, 29, 26, 22], // Under middel
    [0,  30, 26, 25, 22, 20]  // Lav
  ];

  const femaleNorms = [
    [50, 53, 46, 41, 38, 33],
    [47, 45, 38, 34, 32, 28],
    [45, 39, 34, 31, 28, 25],
    [42, 35, 31, 28, 25, 22],
    [39, 31, 27, 25, 22, 19],
    [0,  26, 22, 20, 18, 17]
  ];

  const matrix = (gender === 'male' || gender === 'mand') ? maleNorms : femaleNorms;

  if (vo2max >= matrix[0][ageGroup]) return { label: 'Elite', color: '#1e40af' };
  if (vo2max >= matrix[1][ageGroup]) return { label: 'Fremragende', color: '#16a34a' };
  if (vo2max >= matrix[2][ageGroup]) return { label: 'God', color: '#22c55e' };
  if (vo2max >= matrix[3][ageGroup]) return { label: 'Middel', color: '#eab308' };
  if (vo2max >= matrix[4][ageGroup]) return { label: 'Under middel', color: '#f97316' };
  return { label: 'Lav', color: '#ef4444' };
}

export function calculateYoYoIntermittent(levelInput, shuttlesInput, bodyweightInput, chosenFormulaKey = 'yyir1') {
  let activeKey = chosenFormulaKey === 'auto' ? 'yyir1' : chosenFormulaKey;
  if (!YOYO_INTERMITTENT_FORMULAS[activeKey]) activeKey = 'yyir1';

  const formula = YOYO_INTERMITTENT_FORMULAS[activeKey];
  let level = parseInt(levelInput, 10);
  let shuttles = parseInt(shuttlesInput, 10) || 0;
  const weight = parseFloat(bodyweightInput) || 0;

  if (isNaN(level) || level < formula.minLevel || level > formula.maxLevel) {
    return { isValid: false, formula };
  }

  const maxShuttlesForLevel = formula.getMaxShuttles(level);

  if (shuttles > maxShuttlesForLevel || shuttles < 0) {
    return { isValid: false, formula };
  }

  const totalDistance = formula.calcDistance(level, shuttles);
  const fitnessLevel = formula.calc(totalDistance);
  const totalShuttles = Math.floor(totalDistance / 40);

  if (fitnessLevel <= 0) return { isValid: false, formula };

  const vo2max = weight > 0 ? (weight * fitnessLevel) / 1000 : null;

  const shuttlesPercent = Math.min(100, Math.round((shuttles / maxShuttlesForLevel) * 100));
  const distancePercent = Math.min(100, Math.round((totalDistance / formula.maxTestDistance) * 100));
  const totalShuttlesPercent = Math.min(100, Math.round((totalShuttles / formula.maxTotalShuttles) * 100));

  return {
    isValid: true,
    fitnessLevel: fitnessLevel,
    formattedFitnessLevel: fitnessLevel.toFixed(1),
    totalDistance: totalDistance,
    maxTestDistance: formula.maxTestDistance,
    totalShuttles: totalShuttles,
    maxTotalShuttles: formula.maxTotalShuttles,
    totalShuttlesPercent: totalShuttlesPercent,
    level: level,
    shuttles: shuttles,
    maxShuttlesForLevel: maxShuttlesForLevel,
    shuttlesPercent: shuttlesPercent,
    distancePercent: distancePercent,
    maxOxygenUptake: vo2max,
    formattedVO2Max: vo2max ? vo2max.toFixed(2) : '-',
    activeFormulaKey: activeKey,
    formulaName: formula.name,
    description: formula.description,
    sd: formula.sd,
    sdUnit: formula.sdUnit,
    formula
  };
}