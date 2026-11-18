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
  let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;

  validPoints.forEach(p => {
    sumX += p.load;
    sumY += p.velocity;
    sumXY += p.load * p.velocity;
    sumXX += p.load * p.load;
  });

  const meanX = sumX / n;
  const meanY = sumY / n;
  const denominator = (n * sumXX - sumX * sumX);

  if (denominator === 0) {
    return {
      isValid: false,
      validPointsCount: validPoints.length,
      message: 'Indtast forskellige vægte for at beregne profilen.'
    };
  }

  let slope = (n * sumXY - sumX * sumY) / denominator;
  let intercept = meanY - slope * meanX;

  const maxLoadEntered = Math.max(...validPoints.map(p => p.load));
  const lowestVelocity = Math.min(...validPoints.map(p => p.velocity));
  const cutoffThreshold = mvtValue + 0.20;
  const isCutoffReached = lowestVelocity <= cutoffThreshold;

  // Hvis hastigheden ikke er faldet med øget vægt (flad eller positiv hældning)
  if (slope >= -0.0005) {
    const safeStep = Math.max(5, roundTo2Point5(maxLoadEntered * 0.075));
    return {
      isValid: true,
      hasNegativeSlope: false,
      slope,
      intercept,
      rSquared: null,
      e1RM: 0,
      isCappedByRealLift: false,
      isCutoffReached,
      cutoffThreshold,
      suggestedNextLoad: isCutoffReached ? 0 : roundTo2Point5(maxLoadEntered + safeStep),
      processedPoints: validPoints.map((p, idx) => ({
        index: idx,
        id: p.id,
        load: p.load,
        velocity: p.velocity,
        isWarmup: p.velocity > 1.00,
        isOutlier: false
      })),
      validPointsCount: validPoints.length
    };
  }

  // R^2 (kun meningsfuld ved >= 3 punkter, da 2 punkter altid giver R^2 = 1.00)
  const ssTot = validPoints.reduce((acc, p) => acc + Math.pow(p.velocity - meanY, 2), 0);
  const ssRes = validPoints.reduce((acc, p) => {
    const predY = slope * p.load + intercept;
    return acc + Math.pow(p.velocity - predY, 2);
  }, 0);
  const rSquared = (n >= 3 && ssTot > 0) ? Math.max(0, 1 - (ssRes / ssTot)) : null;

  let e1RM = (mvtValue - intercept) / slope;

  // Sikkerhedsloft ved kun 2 punkter: roterer linjen omkring (meanX, meanY) i stedet for at parallelforskyde
  if (n === 2) {
    const maxSaneMultiplier = lowestVelocity > 0.90 ? 2.35 : (lowestVelocity > 0.70 ? 1.95 : 1.65);
    const maxSaneE1RM = maxLoadEntered * maxSaneMultiplier;
    if (e1RM > maxSaneE1RM && maxSaneE1RM > meanX) {
      e1RM = maxSaneE1RM;
      slope = (mvtValue - meanY) / (e1RM - meanX);
      intercept = meanY - slope * meanX;
    }
  }

  // Et faktisk gennemført løft i tabellen sætter altid minimumsgulvet for e1RM
  let isCappedByRealLift = false;
  if (maxLoadEntered > e1RM) {
    e1RM = maxLoadEntered;
    isCappedByRealLift = true;
    if (e1RM > meanX) {
      slope = (mvtValue - meanY) / (e1RM - meanX);
      intercept = meanY - slope * meanX;
    } else {
      intercept = mvtValue - slope * e1RM;
    }
  }

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

  // Stabiliseret forslag til næste vægt
  let suggestedNextLoad = 0;
  if (e1RM > 0 && !isCutoffReached) {
    const currentPct = maxLoadEntered / e1RM;
    const remainingSteps = Math.max(1, 5 - n);

    let idealStepKg;
    if (currentPct < 0.90) {
      idealStepKg = ((0.92 - currentPct) / remainingSteps) * e1RM;
    } else {
      idealStepKg = Math.max(2.5, e1RM * 0.03);
    }

    let maxAllowedJumpKg;
    if (n === 2 || lowestVelocity > 0.75) {
      maxAllowedJumpKg = Math.min(15, Math.max(5, maxLoadEntered * 0.15));
    } else if (lowestVelocity > 0.55) {
      maxAllowedJumpKg = Math.min(10, Math.max(5, maxLoadEntered * 0.10));
    } else {
      maxAllowedJumpKg = Math.min(7.5, Math.max(2.5, maxLoadEntered * 0.075));
    }

    const clampedStep = Math.max(2.5, Math.min(idealStepKg, maxAllowedJumpKg));
    suggestedNextLoad = roundTo2Point5(maxLoadEntered + clampedStep);

    if (suggestedNextLoad <= maxLoadEntered) {
      suggestedNextLoad = roundTo2Point5(maxLoadEntered + 2.5);
    }
  }

  return {
    isValid: true,
    hasNegativeSlope: true,
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