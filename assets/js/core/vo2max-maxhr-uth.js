// assets/js/core/vo2max-maxhr-uth.js

export const UTH_FORMULA = {
  id: 'uth2004_2005',
  name: 'Uth et al. (2004/2005)',
  sd: 4.9,             // Rent tal
  sdUnit: 'ml/kg/min'  // Enhed
};

export function calculateVo2MaxFromPulse({ maxHr, restHr, weight, gender }) {
  if (!maxHr || !restHr || maxHr <= restHr || restHr < 30 || maxHr > 240) {
    return { isValid: false };
  }

  // Kønsspecifik konstant (Uth, 2005)
  const factor = (gender === 'female') ? 14.5 : 15.3;
  const fitnessLevel = (maxHr / restHr) * factor;
  
  const maxOxygenUptake = weight > 0 ? (fitnessLevel * weight) / 1000 : null;

  return {
    isValid: true,
    fitnessLevel: fitnessLevel.toFixed(1),
    maxOxygenUptake: maxOxygenUptake ? maxOxygenUptake.toFixed(2) : '-',
    sd: UTH_FORMULA.sd,
    sdUnit: UTH_FORMULA.sdUnit,
    factorUsed: factor // God at gemme i loggen for transparens
  };
}