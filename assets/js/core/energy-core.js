// assets/js/core/energy-core.js

export function calculateRER(vco2, vo2) {
  const v2 = parseFloat(vo2) || 0;
  const vc = parseFloat(vco2) || 0;
  if (v2 <= 0 || vc <= 0) return 0;
  return Math.round((vc / v2) * 100) / 100;
}

export function calculateGrossEfficiency(workrateWatt, metabolicWatts) {
  const wExt = parseFloat(workrateWatt) || 0;
  const wMet = parseFloat(metabolicWatts) || 0;
  if (wExt <= 0 || wMet <= 0) return 0;
  return Math.round((wExt / wMet) * 1000) / 10;
}

export function calculateCyclingEconomy(workrateWatt, vo2Lmin) {
  const wExt = parseFloat(workrateWatt) || 0;
  const v2 = parseFloat(vo2Lmin) || 0;
  if (wExt <= 0 || v2 <= 0) return 0;
  const kJPerMin = wExt * 0.06;
  return Math.round((kJPerMin / v2) * 100) / 100;
}

export function getSubstrateUtilization(rer) {
  const clampedRer = Math.min(Math.max(rer, 0.70), 1.00);
  const fatPct = Math.max(0, Math.min(100, ((1.00 - clampedRer) / 0.30) * 100));
  const choPct = 100 - fatPct;

  return {
    fatPct: Math.round(fatPct * 10) / 10,
    choPct: Math.round(choPct * 10) / 10
  };
}

export function getKcalPerLiterO2(rer) {
  return 3.815 + 1.232 * rer;
}

/**
 * STRUKTUREREDE FORMELDEFINITIONER MED SPECIFIK SEE PR. FORMEL
 */
export const VO2_FORMULA_DEFINITIONS = {
  recommended_formula: {
    name: '⭐ Anbefalet formel (Lusk Standard)',
    desc: 'Bruger den anerkendte fysiologiske Lusk-standard baseret på iltens termiske ækvivalent for indirekte kalorimetri.',
    see: '±1,0%',
    seeVal: 1.0
  },
  lusk: {
    name: 'Lusk (1928 / Standard)',
    desc: 'Klassisk fysiologisk standardformel. Særligt velegnet ved submaksimale belastninger.',
    see: '±1,0%',
    seeVal: 1.0,
    calcInWatts: (vo2Lmin, rer) => {
      const kcalPerMin = vo2Lmin * (3.815 + 1.232 * rer);
      return (kcalPerMin * 4184) / 60;
    }
  },
  weir_corrected: {
    name: 'Weir Korrigeret (1949)',
    desc: 'Protein-fri indirekte kalorimetri-formel der anvendes hyppigt i laboratorietests.',
    see: '±0,8%',
    seeVal: 0.8,
    calcInWatts: (vo2Lmin, rer) => {
      const vo2sec = vo2Lmin / 60;
      const vco2sec = (vo2Lmin * rer) / 60;
      return (16.62 * vo2sec + 4.51 * vco2sec) * 1000;
    }
  },
  weir: {
    name: 'Weir Original (1949)',
    desc: 'Standard indirekte kalorimetri uden protein-korrektion.',
    see: '±1,2%',
    seeVal: 1.2,
    calcInWatts: (vo2Lmin, rer) => {
      const vo2sec = vo2Lmin / 60;
      const vco2sec = (vo2Lmin * rer) / 60;
      return (16.50 * vo2sec + 4.62 * vco2sec) * 1000;
    }
  },
  garby: {
    name: 'Garby & Astrup (1987)',
    desc: 'Nyere europæisk formel til direkte omdannelse af iltoptagelse og RER til kJ/min.',
    see: '±1,1%',
    seeVal: 1.1,
    calcInWatts: (vo2Lmin, rer) => {
      return (vo2Lmin / 60) * (4940 * rer + 16040);
    }
  },
  brouwer: {
    name: 'Brouwer (1957)',
    desc: 'Anerkendt metabolisk ligning ofte benyttet i humanfysiologiske studier.',
    see: '±1,0%',
    seeVal: 1.0,
    calcInWatts: (vo2Lmin, rer) => {
      const vo2sec = vo2Lmin / 60;
      const vco2sec = (vo2Lmin * rer) / 60;
      return (16.195634 * vo2sec + 5.00227 * vco2sec) * 1000;
    }
  }
};

export const ENERGY_FORMULAS = VO2_FORMULA_DEFINITIONS;

export function getResolvedVo2FormulaKey(requestedKey) {
  if (requestedKey === 'recommended_formula' || !VO2_FORMULA_DEFINITIONS[requestedKey]) {
    return 'lusk';
  }
  return requestedKey;
}

export function calculateFuelingStrategy(totalChoGrams, totalTimeMinutes) {
  if (totalTimeMinutes <= 0) {
    return { choPerHour: 0, targetIntakePerHour: 0, glucose: 0, fructose: 0, ratioLabel: 'Ingen' };
  }

  const choPerHour = Math.round((totalChoGrams / totalTimeMinutes) * 60);
  let targetIntakePerHour = choPerHour;
  let glucose = 0;
  let fructose = 0;

  if (choPerHour <= 30) {
    targetIntakePerHour = choPerHour;
    glucose = choPerHour;
    fructose = 0;
  } else if (choPerHour <= 60) {
    targetIntakePerHour = choPerHour;
    glucose = choPerHour;
    fructose = 0;
  } else if (choPerHour <= 90) {
    targetIntakePerHour = choPerHour;
    glucose = 60;
    fructose = choPerHour - 60;
  } else if (choPerHour <= 120) {
    targetIntakePerHour = choPerHour;
    glucose = 60;
    fructose = choPerHour - 60;
  } else {
    targetIntakePerHour = 120;
    glucose = 60;
    fructose = 60;
  }

  let ratioLabel = 'Kun Glukose / Maltodextrin';
  if (fructose > 0) {
    const fRatio = (fructose / glucose).toFixed(1);
    ratioLabel = `1 : ${fRatio} (Glukose : Fruktose)`;
  }

  return {
    choPerHour,
    targetIntakePerHour,
    glucose: Math.round(glucose),
    fructose: Math.round(fructose),
    ratioLabel
  };
}