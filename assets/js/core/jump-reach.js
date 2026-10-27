// assets/js/core/jump-reach.js

export const JUMP_VARIATIONS = [
  { key: 'cmj_1h', label: 'Stående CMJ (1-hånd)', icon: '🧍‍♂️', desc: 'Stående hop m. modbevægelse og 1-hånds rækkevidde.' },
  { key: 'cmj_2h', label: 'Stående CMJ (2-hånd)', icon: '🙌', desc: 'Stående hop m. modbevægelse og 2-hånds berøring.' },
  { key: 'run_2leg_2h', label: 'Tilløb dbl. afsæt (2-hånd)', icon: '🤾‍♂️', desc: 'Tilløb m. to-bens afsæt og 2-hånds berøring.' },
  { key: 'run_2leg_1h', label: 'Tilløb dbl. afsæt (1-hånd)', icon: '🏃‍♂️', desc: 'Tilløb m. to-bens afsæt og 1-hånds rækkevidde.' },
  { key: 'run_left_1h', label: 'Tilløb v. ben (1-hånd)', icon: '🦵', desc: 'Tilløb m. enkeltbensafsæt på venstre ben.' },
  { key: 'run_right_1h', label: 'Tilløb h. ben (1-hånd)', icon: '🦵', desc: 'Tilløb m. enkeltbensafsæt på højre ben.' }
];

export const JUMP_POWER_FORMULAS = {
  sayers_cmj: {
    key: 'sayers_cmj',
    name: 'Sayers et al. (1999) – CMJ / Vertec',
    shortName: 'Sayers (CMJ)',
    desc: 'Mest præcise formel til hop med fjedring/modbevægelse (fx Vertec eller Sargent-test). Formel: Peak Power (W) = 51.9 × h + 48.9 × m - 2007.',
    requiresHeight: false,
    isRecommended: true
  },
  sayers_sj: {
    key: 'sayers_sj',
    name: 'Sayers et al. (1999) – Squat Jump',
    shortName: 'Sayers (SJ)',
    desc: 'Til hop fra statisk 90° squat uden modbevægelse. Formel: Peak Power (W) = 60.7 × h + 45.3 × m - 2055.',
    requiresHeight: false,
    isRecommended: false
  },
  harman: {
    key: 'harman',
    name: 'Harman et al. (1991)',
    shortName: 'Harman',
    desc: 'Klassisk formel til Peak Power. Formel: Peak Power (W) = 61.9 × h + 36 × m - 1822.',
    requiresHeight: false,
    isRecommended: false
  },
  johnson: {
    key: 'johnson',
    name: 'Johnson & Bahamonde (1996)',
    shortName: 'Johnson & Bahamonde',
    desc: 'Inddrager atletens kropshøjde. Formel: Peak Power (W) = 78.6 × h + 60.3 × m - 15.3 × kropshøjde - 1308.',
    requiresHeight: true,
    isRecommended: false
  },
  lewis: {
    key: 'lewis',
    name: 'Lewis (1974) – Gns. Power',
    shortName: 'Lewis (Gns. Power)',
    desc: 'Beregner den gennemsnitlige mekaniske power i afsættet.',
    requiresHeight: false,
    isRecommended: false
  }
};

export const JUMP_NORMS = {
  male: [
    { minAge: 15, maxAge: 19, thresholds: [41, 50, 60, 68] },
    { minAge: 20, maxAge: 29, thresholds: [42, 52, 62, 70] },
    { minAge: 30, maxAge: 39, thresholds: [38, 47, 56, 64] },
    { minAge: 40, maxAge: 49, thresholds: [33, 41, 50, 58] },
    { minAge: 50, maxAge: 59, thresholds: [28, 35, 43, 50] },
    { minAge: 60, maxAge: 100, thresholds: [22, 28, 35, 42] }
  ],
  female: [
    { minAge: 15, maxAge: 19, thresholds: [31, 38, 46, 53] },
    { minAge: 20, maxAge: 29, thresholds: [32, 40, 48, 55] },
    { minAge: 30, maxAge: 39, thresholds: [27, 34, 42, 49] },
    { minAge: 40, maxAge: 49, thresholds: [22, 28, 36, 42] },
    { minAge: 50, maxAge: 59, thresholds: [18, 23, 30, 36] },
    { minAge: 60, maxAge: 100, thresholds: [14, 18, 24, 30] }
  ]
};

export function calculateJumpReach({
  inputMode = 'reach',
  standingReach,
  jumpReach,
  jumpHeightDirect,
  weight,
  bodyHeight,
  powerFormulaKey = 'sayers_cmj'
}) {
  let h = 0;

  if (inputMode === 'reach') {
    const sReach = parseFloat(standingReach);
    const jReach = parseFloat(jumpReach);
    if (isNaN(sReach) || isNaN(jReach) || jReach <= sReach || sReach <= 0) {
      return { isValid: false, missingReach: true };
    }
    h = jReach - sReach;
  } else {
    h = parseFloat(jumpHeightDirect);
    if (isNaN(h) || h <= 0) {
      return { isValid: false };
    }
  }

  const m = parseFloat(weight) || 0;
  const bHeight = parseFloat(bodyHeight) || 175;
  const fKey = powerFormulaKey.toLowerCase();
  const fDef = JUMP_POWER_FORMULAS[fKey] || JUMP_POWER_FORMULAS.sayers_cmj;

  let peakPowerW = 0;
  let avgPowerW = 0;
  let hasPower = false;

  if (m > 0) {
    hasPower = true;
    switch (fKey) {
      case 'sayers_sj':
        peakPowerW = (60.7 * h) + (45.3 * m) - 2055;
        break;
      case 'harman':
        peakPowerW = (61.9 * h) + (36.0 * m) - 1822;
        break;
      case 'johnson':
        peakPowerW = (78.6 * h) + (60.3 * m) - (15.3 * bHeight) - 1308;
        break;
      case 'lewis':
        avgPowerW = Math.sqrt(4.9) * m * Math.sqrt(h / 100) * 9.81;
        peakPowerW = avgPowerW;
        break;
      case 'sayers_cmj':
      default:
        peakPowerW = (51.9 * h) + (48.9 * m) - 2007;
        break;
    }
  }

  const relativePower = (hasPower && m > 0 && peakPowerW > 0) ? (peakPowerW / m).toFixed(1) : '-';

  return {
    isValid: true,
    jumpHeightCm: h.toFixed(1),
    jumpHeightNumber: h,
    hasPower,
    peakPowerW: Math.max(0, Math.round(peakPowerW)),
    relativePowerWKg: relativePower,
    formulaDef: fDef
  };
}

export function evaluateJumpHeight(jumpHeightCm, age, gender) {
  const h = parseFloat(jumpHeightCm);
  const userAge = parseInt(age, 10) || 25;
  const isMale = (gender === 'male' || gender === 'mand');
  const normList = JUMP_NORMS[isMale ? 'male' : 'female'];

  const row = normList.find(r => userAge >= r.minAge && userAge <= r.maxAge) || normList[1];
  const t = row.thresholds;

  if (isNaN(h) || h <= 0) {
    return { label: 'Mangler data', color: '#e2e8f0', thresholds: t };
  }

  if (h < t[0]) {
    return { label: 'Under middel', color: '#ef4444', thresholds: t };
  } else if (h <= t[1]) {
    return { label: 'Middel', color: '#f97316', thresholds: t };
  } else if (h <= t[2]) {
    return { label: 'Over middel', color: '#eab308', thresholds: t };
  } else if (h <= t[3]) {
    return { label: 'Godt', color: '#22c55e', thresholds: t };
  } else {
    return { label: 'Fremragende', color: '#3b82f6', thresholds: t };
  }
}