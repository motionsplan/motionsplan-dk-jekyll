export const UTH_FORMULA = {
  id: 'uth2004',
  name: 'Uth et al. (2004)',
  sd: 4.9,             // Rent tal
  sdUnit: 'ml/kg/min'  // Enhed
};

export function calculateVo2MaxFromPulse({ maxHr, restHr, weight }) {
  if (!maxHr || !restHr || maxHr <= restHr || restHr < 30 || maxHr > 240) {
    return { isValid: false };
  }

  const fitnessLevel = (maxHr / restHr) * 15.3;
  const maxOxygenUptake = weight > 0 ? (fitnessLevel * weight) / 1000 : null;

  return {
    isValid: true,
    fitnessLevel: fitnessLevel.toFixed(1),
    maxOxygenUptake: maxOxygenUptake ? maxOxygenUptake.toFixed(2) : '-',
    sd: UTH_FORMULA.sd,
    sdUnit: UTH_FORMULA.sdUnit
  };
}