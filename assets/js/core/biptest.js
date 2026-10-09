// assets/js/core/biptest.js

// Antal 20m shuttles pr. level for Yo-Yo Endurance Level 1 & 2 (Bangsbo, 1996)
const YYE_SHUTTLES = {
  1: 7, 2: 8, 3: 8, 4: 8, 5: 9, 6: 9, 7: 10, 8: 10, 9: 11, 10: 11,
  11: 11, 12: 12, 13: 12, 14: 13, 15: 13, 16: 13, 17: 14, 18: 14, 19: 15, 20: 15, 21: 16
};

// Antal 20m shuttles pr. level for Léger 20m Bip-test (Léger et al., 1988)
const LEGER_SHUTTLES = {
  1: 7, 2: 8, 3: 8, 4: 9, 5: 9, 6: 10, 7: 10, 8: 11, 9: 11, 10: 11,
  11: 12, 12: 12, 13: 13, 14: 13, 15: 13, 16: 14, 17: 14, 18: 15, 19: 15, 20: 16, 21: 16
};

/**
 * Hjælpefunktion til samlet distance ud fra protokollen
 */
function getAccumulatedDistance(shuttleMap, startLevel, currentLevel, currentShuttles) {
  let totalDistanceMeters = 0;
  for (let lvl = startLevel; lvl < currentLevel; lvl++) {
    const shuttlesOnLvl = shuttleMap[lvl] || 10;
    totalDistanceMeters += shuttlesOnLvl * 20;
  }
  totalDistanceMeters += currentShuttles * 20;
  return totalDistanceMeters;
}

function getMaxTestDistance(shuttleMap, startLevel, maxLevel) {
  let maxDist = 0;
  for (let lvl = startLevel; lvl <= maxLevel; lvl++) {
    maxDist += (shuttleMap[lvl] || 10) * 20;
  }
  return maxDist;
}

export const BIPTEST_FORMULAS = {
  yye1: {
    id: 'yye1',
    name: 'Yo-Yo Endurance Level 1 (Bangsbo, 1996)',
    minLevel: 1,
    maxLevel: 21,
    sd: 3.5,
    sdUnit: 'ml/kg/min',
    maxTestDistance: getMaxTestDistance(YYE_SHUTTLES, 1, 21), // 4.840 m
    maxTotalShuttles: getMaxTestDistance(YYE_SHUTTLES, 1, 21) / 20, // 242 shuttles
    description: 'Bangsbo (1996) formel til Yo-Yo Udholdenhedstest 1.',
    getMaxShuttles: (level) => YYE_SHUTTLES[level] || 11,
    calc: ({ level, shuttles }) => {
      const maxShuttles = YYE_SHUTTLES[level] || 1;
      const score = Number(level) + (shuttles / maxShuttles);
      return (0.0028 * Math.pow(score, 3)) - (0.0968 * Math.pow(score, 2)) + (4.5226 * score) + 5.5137;
    },
    calcDistance: ({ level, shuttles }) => getAccumulatedDistance(YYE_SHUTTLES, 1, level, shuttles)
  },
  yye2: {
    id: 'yye2',
    name: 'Yo-Yo Endurance Level 2 (Bangsbo, 1996)',
    minLevel: 11,
    maxLevel: 21,
    sd: 3.8,
    sdUnit: 'ml/kg/min',
    maxTestDistance: getMaxTestDistance(YYE_SHUTTLES, 11, 21), // 2.920 m
    maxTotalShuttles: getMaxTestDistance(YYE_SHUTTLES, 11, 21) / 20, // 146 shuttles
    description: 'Start-justeret Yo-Yo Udholdenhedstest 2 til veltrænede (starter v. level 11).',
    getMaxShuttles: (level) => YYE_SHUTTLES[level] || 11,
    calc: ({ level, shuttles }) => {
      const maxShuttles = YYE_SHUTTLES[level] || 1;
      const score = Number(level) + (shuttles / maxShuttles);
      return (0.0028 * Math.pow(score, 3)) - (0.0968 * Math.pow(score, 2)) + (4.5226 * score) + 5.5137;
    },
    calcDistance: ({ level, shuttles }) => getAccumulatedDistance(YYE_SHUTTLES, 11, level, shuttles)
  },
  leger1988: {
    id: 'leger1988',
    name: 'Léger 20m Bip-test (Léger et al., 1988)',
    minLevel: 1,
    maxLevel: 21,
    sd: 3.2,
    sdUnit: 'ml/kg/min',
    maxTestDistance: getMaxTestDistance(LEGER_SHUTTLES, 1, 21), // 4.940 m
    maxTotalShuttles: getMaxTestDistance(LEGER_SHUTTLES, 1, 21) / 20, // 247 shuttles
    description: 'Klassisk skolerefereret 20m Shuttle Run.',
    getMaxShuttles: (level) => LEGER_SHUTTLES[level] || 11,
    calc: ({ level }) => {
      const speed = 8.0 + (level * 0.5); 
      return 31.025 + (3.238 * speed) - (3.248 * 25) + (0.1536 * speed * 25);
    },
    calcDistance: ({ level, shuttles }) => getAccumulatedDistance(LEGER_SHUTTLES, 1, level, shuttles)
  }
};

export function calculateBipTest(levelInput, shuttlesInput, bodyweightInput, chosenFormulaKey = 'yye1') {
  let activeKey = chosenFormulaKey === 'auto' ? 'yye1' : chosenFormulaKey;
  if (!BIPTEST_FORMULAS[activeKey]) activeKey = 'yye1';

  const formula = BIPTEST_FORMULAS[activeKey];
  let level = parseInt(levelInput, 10);
  let shuttles = parseInt(shuttlesInput, 10) || 0;
  const weight = parseFloat(bodyweightInput) || 0;

  // Tjek niveauets grænser
  if (isNaN(level) || level < formula.minLevel || level > formula.maxLevel) {
    return { isValid: false, formula };
  }

  const maxShuttlesForLevel = formula.getMaxShuttles(level);

  // STRENG PROTOKOL-LÅS: Shuttles må ikke overstige det faktiske max på niveauet
  if (shuttles > maxShuttlesForLevel || shuttles < 0) {
    return { isValid: false, formula };
  }

  const ctx = { level, shuttles, bodyweight: weight };
  const fitnessLevel = formula.calc(ctx);
  const totalDistance = formula.calcDistance(ctx);
  const totalShuttles = Math.floor(totalDistance / 20);

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