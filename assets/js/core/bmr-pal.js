// assets/js/core/bmr-pal.js
import { calculateBMR } from './bmr.js';

/**
 * Beregner avanceret energiforbrug (TEE) baseret på Gerrior PAL / MET-værdier
 */
export function calculateAdvancedPAL(gender, age, weight, height, formula, activities) {
  // 1. Beregn BMR via det centrale BMR-modul
  const bmrRes = calculateBMR(gender, age, weight, height, formula);
  const bmrKJ = bmrRes.getBMRKJ();
  const bmrKcal = bmrRes.getBMRKcal();
  const isMale = gender === 'man' || gender === 'male' || gender === '1' || gender === 1;

  // 2. Døgnets minutter (1440 minutter)
  const totalOtherMinutes =
    (activities.intense?.minutes || 0) +
    (activities.moderate?.minutes || 0) +
    (activities.light?.minutes || 0) +
    (activities.standing?.minutes || 0) +
    (activities.sleeping?.minutes || 0);

  const sittingMinutes = Math.max(0, 1440 - totalOtherMinutes);

  // 3. Beregn Gerrior Delta-PAL for hver aktivitet
  const calculateDeltaPAL = (met, minutes) => {
    if (!minutes || minutes <= 0) return 0;
    const numerator = (met - 1) * ((1.15 / 0.9) * minutes) / 1440;
    const denominator = bmrKcal / (0.0175 * 1440 * weight);
    return denominator > 0 ? numerator / denominator : 0;
  };

  const list = [
    { ...activities.intense, met: activities.intense?.met || 10.0 },
    { ...activities.moderate, met: activities.moderate?.met || 7.0 },
    { ...activities.light, met: activities.light?.met || 4.0 },
    { ...activities.standing, met: activities.standing?.met || 2.0 },
    { ...activities.sleeping, met: activities.sleeping?.met || 0.9 },
    { minutes: sittingMinutes, met: activities.sitting?.met || 1.2 }
  ];

  const sumDeltaPAL = list.reduce((acc, act) => acc + calculateDeltaPAL(act.met, act.minutes), 0);
  const pal = 1.1 + sumDeltaPAL; // Basal Gerrior offset

  // 4. Gerrior Physical Activity (PA) Koefficient
  let pa = 1.0;
  if (isMale) {
    if (pal >= 1.9) pa = 1.54;
    else if (pal >= 1.6) pa = 1.27;
    else if (pal >= 1.4) pa = 1.12;
  } else {
    if (pal >= 1.9) pa = 1.45;
    else if (pal >= 1.6) pa = 1.27;
    else if (pal >= 1.4) pa = 1.14;
  }

  // 5. Samlet dagligt energiforbrug (TEE)
  let teeKJ = bmrKJ * pal;
  let teeKcal = bmrKcal * pal;

  // Særlig EER-håndtering hvis Gerrior 2006 formel vælges
  if (bmrRes.getFormulaKey() === 'gerrior_2006') {
    const hMeters = height / 100;
    const gerriorEER = isMale
      ? 662 - 9.53 * age + pa * (15.91 * weight + 539.6 * hMeters)
      : 354 - 6.91 * age + pa * (9.36 * weight + 726 * hMeters);
    teeKcal = gerriorEER;
    teeKJ = gerriorEER * 4.184;
  }

  return {
    getBMRKJ: () => bmrKJ,
    getBMRKcal: () => bmrKcal,
    getPAL: () => pal,
    getPA: () => pa,
    getTEEKS: () => teeKJ,
    getTEEKcal: () => teeKcal,
    getSittingMinutes: () => sittingMinutes,
    getFormulaName: () => bmrRes.getFormulaName()
  };
}