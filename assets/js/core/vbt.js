// assets/js/core/vbt.js

export const MVT_PRESETS = {
  bench: { name: 'Bænkpres', mvt: 0.15 },
  squat: { name: 'Back Squat', mvt: 0.30 },
  deadlift: { name: 'Dødløft', mvt: 0.15 },
  ohp: { name: 'Skulderpres / OHP', mvt: 0.20 },
  row: { name: 'Vægtstangsroning / Row', mvt: 0.35 },
  hipthrust: { name: 'Hip Thrust', mvt: 0.25 },
  pullup: { name: 'Kropshævninger / Pull-ups', mvt: 0.20 },
  frontsquat: { name: 'Front Squat', mvt: 0.30 },
  custom: { name: 'Brugerdefineret', mvt: 0.20 }
};

export const DEFAULT_TARGET_PERCENTAGES = [0.45, 0.60, 0.72, 0.82, 0.90, 0.95];

export function roundTo2Point5(val) {
  if (!val || isNaN(val) || val <= 0) return 0;
  return Math.max(2.5, Math.round(val / 2.5) * 2.5);
}

export function calculateVBTProfile(attempts, mvtValue) {
  const validPoints = attempts
    .filter(a => a && parseFloat(a.load) > 0 && parseFloat(a.velocity) > 0)
    .map(a => ({
      ...a,
      load: parseFloat(a.load),
      velocity: parseFloat(a.velocity)
    }));

  if (validPoints.length < 2) {
    return {
      isValid: false,
      validPointsCount: validPoints.length,
      message: 'Indtast mindst 2 forsøg for at danne profil og beregne e1RM.'
    };
  }

  const n = validPoints.length;
  let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0, sumYY = 0;

  validPoints.forEach(p => {
    sumX += p.load;
    sumY += p.velocity;
    sumXY += p.load * p.velocity;
    sumXX += p.load * p.load;
    sumYY += p.velocity * p.velocity;
  });

  const meanY = sumY / n;
  const denominator = (n * sumXX - sumX * sumX);
  if (denominator === 0) return { isValid: false, message: 'Ugyldige data.' };

  const slope = (n * sumXY - sumX * sumY) / denominator;
  let intercept = (sumY - slope * sumX) / n;

  // R^2 (Forklaringsgrad)
  const ssTot = validPoints.reduce((acc, p) => acc + Math.pow(p.velocity - meanY, 2), 0);
  const ssRes = validPoints.reduce((acc, p) => {
    const predY = slope * p.load + intercept;
    return acc + Math.pow(p.velocity - predY, 2);
  }, 0);
  
  const rSquared = ssTot > 0 ? Math.max(0, 1 - (ssRes / ssTot)) : 0;

  let e1RM = 0;
  if (slope < 0) {
    e1RM = (mvtValue - intercept) / slope;
  }

  const successfulLifts = validPoints.filter(p => p.velocity >= mvtValue).map(p => p.load);
  const maxLiftedAtOrAboveMVT = successfulLifts.length > 0 ? Math.max(...successfulLifts) : 0;

  let isCappedByRealLift = false;
  if (maxLiftedAtOrAboveMVT > e1RM) {
    e1RM = maxLiftedAtOrAboveMVT;
    isCappedByRealLift = true;
    intercept = mvtValue - slope * e1RM;
  }

  const cutoffThreshold = mvtValue + 0.20;
  const lowestVelocity = Math.min(...validPoints.map(p => p.velocity));
  const isCutoffReached = lowestVelocity <= cutoffThreshold;

  const processedPoints = validPoints.map((p, idx) => {
    const expectedVel = slope * p.load + intercept;
    const diff = Math.abs(p.velocity - expectedVel);
    return {
      index: idx,
      id: p.id,
      load: p.load,
      velocity: p.velocity,
      isWarmup: p.velocity > 1.00,
      isOutlier: diff > 0.07
    };
  });

  // Udregn dynamisk næste vægtforslag (afrundet til 2,5 kg)
  let suggestedNextLoad = 0;
  if (e1RM > 0 && !isCutoffReached) {
    const maxLoadEntered = Math.max(...validPoints.map(p => p.load));
    const count = validPoints.length;
    const targetPercent = DEFAULT_TARGET_PERCENTAGES[Math.min(count, DEFAULT_TARGET_PERCENTAGES.length - 1)];
    suggestedNextLoad = roundTo2Point5(e1RM * targetPercent);

    if (suggestedNextLoad <= maxLoadEntered) {
      suggestedNextLoad = roundTo2Point5(maxLoadEntered + 2.5);
    }
  }

  return {
    isValid: true,
    slope,
    intercept,
    rSquared,
    e1RM: Math.max(0, e1RM),
    isCappedByRealLift,
    isCutoffReached,
    cutoffThreshold,
    suggestedNextLoad,
    processedPoints,
    validPointsCount: validPoints.length
  };
}