// assets/js/core/runningtest-2400m.js

export const RUNNING_2400M_FORMULAS = {
  cooper: {
    key: 'cooper',
    name: 'Cooper et al. – Standard',
    shortName: 'Cooper',
    desc: 'VO₂max = (483 / tid) + 3.5. Den mest udbredte og validerede formel til 2,4 km testen.',
    see: '±4.0 ml/kg/min',
    isRecommended: true
  },
  burger: {
    key: 'burger',
    name: 'Burger et al. (1990)',
    shortName: 'Burger',
    desc: 'VO₂max = 85.95 - (3.079 × tid). Alternativ formel udviklet til militære og aktive populationer.',
    see: '±4.2 ml/kg/min',
    isRecommended: false
  }
};

/**
 * Beregner kondital ud fra 2400 meter løbetest.
 */
export function calculate2400m({ min, sec, formula = 'cooper' }) {
  const m = parseFloat(min) || 0;
  const s = parseFloat(sec) || 0;
  const totalTimeMinutes = m + (s / 60);

  if (totalTimeMinutes <= 0 || m < 0 || s < 0 || s >= 60) {
    return { isValid: false };
  }

  let fitnessLevel = 0;
  const activeFormula = formula.toLowerCase();

  if (activeFormula === 'burger') {
    fitnessLevel = 85.95 - (3.079 * totalTimeMinutes);
  } else {
    fitnessLevel = (483 / totalTimeMinutes) + 3.5;
  }

  if (fitnessLevel <= 0) return { isValid: false };

  return {
    isValid: true,
    fitnessLevel: fitnessLevel.toFixed(1),
    totalTimeMinutes: totalTimeMinutes,
    totalTimeSeconds: Math.round(totalTimeMinutes * 60)
  };
}

/**
 * Vurdering ud fra Dansk Politis optagelsesprøve på 2400m
 */
export function evaluatePolice2400m(totalTimeSeconds, gender) {
  const isMale = (gender === 'male' || gender === 'mand');

  if (isMale) {
    if (totalTimeSeconds <= 540) return { grade: '12', status: '(Bestået)', color: '#22c55e', pass: true };
    if (totalTimeSeconds <= 580) return { grade: '10', status: '(Bestået)', color: '#22c55e', pass: true };
    if (totalTimeSeconds <= 620) return { grade: '7', status: '(Bestået)', color: '#2563eb', pass: true };
    if (totalTimeSeconds <= 660) return { grade: '4', status: '(Bestået)', color: '#eab308', pass: true };
    if (totalTimeSeconds <= 720) return { grade: '02', status: '(Bestået)', color: '#f97316', pass: true };
    if (totalTimeSeconds <= 750) return { grade: '00', status: '(Ej bestået)', color: '#ef4444', pass: false };
    return { grade: '-3', status: '(Ej bestået)', color: '#dc2626', pass: false };
  } else {
    if (totalTimeSeconds <= 630) return { grade: '12', status: '(Bestået)', color: '#22c55e', pass: true };
    if (totalTimeSeconds <= 690) return { grade: '10', status: '(Bestået)', color: '#22c55e', pass: true };
    if (totalTimeSeconds <= 720) return { grade: '7', status: '(Bestået)', color: '#2563eb', pass: true };
    if (totalTimeSeconds <= 760) return { grade: '4', status: '(Bestået)', color: '#eab308', pass: true };
    if (totalTimeSeconds <= 810) return { grade: '02', status: '(Bestået)', color: '#f97316', pass: true };
    if (totalTimeSeconds <= 840) return { grade: '00', status: '(Ej bestået)', color: '#ef4444', pass: false };
    return { grade: '-3', status: '(Ej bestået)', color: '#dc2626', pass: false };
  }
}

/**
 * Vurdering ud fra Coopers 1.5-mile (2400m) aldersnormer
 */
export function evaluateCooper2400mTime(totalTimeSeconds, age, gender) {
  const isMale = (gender === 'male' || gender === 'mand');
  const a = age || 25;

  const thresholds = isMale ? getCooperThresholdsMen(a) : getCooperThresholdsWomen(a);

  if (totalTimeSeconds <= thresholds.superior) return { label: 'I særklasse', color: '#3b82f6', cat: 'superior' };
  if (totalTimeSeconds <= thresholds.excellent) return { label: 'Fremragende', color: '#22c55e', cat: 'excellent' };
  if (totalTimeSeconds <= thresholds.good) return { label: 'God', color: '#eab308', cat: 'good' };
  if (totalTimeSeconds <= thresholds.fair) return { label: 'Middel', color: '#f97316', cat: 'fair' };
  return { label: 'Lav', color: '#ef4444', cat: 'poor' };
}

export function getCooperThresholdsMen(age) {
  if (age < 20) return { superior: 542, excellent: 637, good: 690, fair: 839 };
  if (age < 30) return { superior: 564, excellent: 652, good: 753, fair: 880 };
  if (age < 40) return { superior: 592, excellent: 689, good: 812, fair: 918 };
  if (age < 50) return { superior: 604, excellent: 720, good: 832, fair: 930 };
  if (age < 60) return { superior: 637, excellent: 797, good: 920, fair: 1137 };
  if (age < 70) return { superior: 690, excellent: 920, good: 1110, fair: 1360 };
  return { superior: 788, excellent: 1103, good: 1380, fair: 1624 };
}

export function getCooperThresholdsWomen(age) {
  if (age < 20) return { superior: 592, excellent: 690, good: 818, fair: 920 };
  if (age < 30) return { superior: 622, excellent: 788, good: 920, fair: 1180 };
  if (age < 40) return { superior: 651, excellent: 836, good: 985, fair: 1235 };
  if (age < 50) return { superior: 673, excellent: 880, good: 1020, fair: 1295 };
  if (age < 60) return { superior: 690, excellent: 920, good: 1166, fair: 1380 };
  if (age < 70) return { superior: 819, excellent: 1103, good: 1380, fair: 1660 };
  return { superior: 920, excellent: 1390, good: 1660, fair: 2080 };
}