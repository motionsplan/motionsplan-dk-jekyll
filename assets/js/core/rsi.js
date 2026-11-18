// assets/js/core/rsi.js

/**
 * Beregner RSI (Reactive Strength Index) ud fra tre forskellige beregningsmetoder
 */
export function calculateSingleRSI({
  method = 'height_ct', // 'height_ct', 'flight_ct', 'rsimod'
  jumpHeightCm,
  contactTimeMs,
  flightTimeMs,
  contractionTimeMs
}) {
  const jhM = (parseFloat(jumpHeightCm) || 0) / 100;
  const ctS = (parseFloat(contactTimeMs) || 0) / 1000;
  const ftS = (parseFloat(flightTimeMs) || 0) / 1000;
  const contrS = (parseFloat(contractionTimeMs) || 0) / 1000;

  let rsi = 0;
  let calculatedJumpHeightCm = jumpHeightCm;

  if (method === 'height_ct') {
    if (jhM <= 0 || ctS <= 0) return { isValid: false };
    rsi = jhM / ctS;
  } else if (method === 'flight_ct') {
    if (ftS <= 0 || ctS <= 0) return { isValid: false };
    const calcJhM = (9.81 * Math.pow(ftS, 2)) / 8;
    calculatedJumpHeightCm = (calcJhM * 100).toFixed(1);
    rsi = calcJhM / ctS;
  } else if (method === 'rsimod') {
    if (jhM <= 0 || contrS <= 0) return { isValid: false };
    rsi = jhM / contrS;
  }

  if (rsi <= 0 || isNaN(rsi)) return { isValid: false };

  return {
    isValid: true,
    rsi: rsi.toFixed(2),
    rawRsi: rsi,
    jumpHeightCm: calculatedJumpHeightCm,
    contactTimeMs: parseFloat(contactTimeMs) || 0
  };
}

/**
 * Beregner Incremental Drop Jump og finder den optimale kassehøjde (ODH)
 */
export function calculateIncrementalDropJump(rows = []) {
  const validRows = rows.map(r => {
    const box = parseFloat(r.boxHeightCm) || 0;
    const jh = parseFloat(r.jumpHeightCm) || 0;
    const ct = parseFloat(r.contactTimeMs) || 0;
    const calc = calculateSingleRSI({ method: 'height_ct', jumpHeightCm: jh, contactTimeMs: ct });

    return {
      boxHeightCm: box,
      jumpHeightCm: jh,
      contactTimeMs: ct,
      rsi: calc.isValid ? parseFloat(calc.rsi) : 0,
      isValid: calc.isValid
    };
  }).filter(r => r.isValid);

  if (validRows.length === 0) return { isValid: false };

  let bestRow = validRows[0];
  let bestFastSscRow = null;

  validRows.forEach(r => {
    if (r.rsi > bestRow.rsi) {
      bestRow = r;
    }
    if (r.contactTimeMs <= 250) {
      if (!bestFastSscRow || r.rsi > bestFastSscRow.rsi) {
        bestFastSscRow = r;
      }
    }
  });

  const optimalBox = bestFastSscRow ? bestFastSscRow.boxHeightCm : bestRow.boxHeightCm;

  return {
    isValid: true,
    rows: validRows,
    optimalBoxHeightCm: optimalBox,
    bestRsi: (bestFastSscRow ? bestFastSscRow.rsi : bestRow.rsi).toFixed(2),
    isFastSsc: !!bestFastSscRow
  };
}

/**
 * Beregner 10/5 RSI test (gennemsnit af de 5 bedste ud af 10 hop)
 */
export function calculateTenFiveRSI(jumps = []) {
  const validJumps = jumps.map((j, idx) => {
    const jh = parseFloat(j.jumpHeightCm) || 0;
    const ct = parseFloat(j.contactTimeMs) || 0;
    const calc = calculateSingleRSI({ method: 'height_ct', jumpHeightCm: jh, contactTimeMs: ct });

    return {
      jumpNum: idx + 1,
      jumpHeightCm: jh,
      contactTimeMs: ct,
      rsi: calc.isValid ? parseFloat(calc.rsi) : 0,
      isValid: calc.isValid
    };
  }).filter(j => j.isValid);

  if (validJumps.length < 5) return { isValid: false, count: validJumps.length };

  const sorted = [...validJumps].sort((a, b) => b.rsi - a.rsi);
  const top5 = sorted.slice(0, 5);

  const avgRsi = top5.reduce((sum, j) => sum + j.rsi, 0) / 5;
  const avgJh = top5.reduce((sum, j) => sum + j.jumpHeightCm, 0) / 5;
  const avgCt = top5.reduce((sum, j) => sum + j.contactTimeMs, 0) / 5;

  return {
    isValid: true,
    avgRsi: avgRsi.toFixed(2),
    avgJumpHeightCm: avgJh.toFixed(1),
    avgContactTimeMs: Math.round(avgCt),
    top5Jumps: top5,
    allJumps: validJumps
  };
}

/**
 * Normer og evaluering af RSI baseret på Flanagan (2016) samt Suchomel et al. (RSImod)
 */
export function evaluateRSI(rsiValue, method = 'height_ct') {
  const rsi = parseFloat(rsiValue);
  if (isNaN(rsi) || rsi <= 0) {
    return { label: 'Mangler data', color: '#cbd5e1', source: '' };
  }

  // RSImod (Countermovement Jump ud fra kontraktionstid)
  if (method === 'rsimod') {
    if (rsi < 0.35) return { label: 'Lav RSImod', color: '#ef4444', source: 'Normering: Suchomel et al. (RSImod)' };
    if (rsi <= 0.50) return { label: 'Middel RSImod', color: '#f97316', source: 'Normering: Suchomel et al. (RSImod)' };
    if (rsi <= 0.65) return { label: 'God RSImod', color: '#22c55e', source: 'Normering: Suchomel et al. (RSImod)' };
    return { label: 'Elite RSImod', color: '#3b82f6', source: 'Normering: Suchomel et al. (RSImod)' };
  }

  // Klassisk Drop Jump RSI / 10/5 RSI (Eamonn Flanagan, 2016 5-trins skala)
  if (rsi < 1.50) return { label: 'Lav reaktivitet (<1.50)', color: '#ef4444', source: 'Normering: Eamonn Flanagan (2016)' };
  if (rsi <= 2.00) return { label: 'Tilfredsstillende (1.50-2.00)', color: '#f97316', source: 'Normering: Eamonn Flanagan (2016)' };
  if (rsi <= 2.50) return { label: 'God reaktivitet (2.00-2.50)', color: '#eab308', source: 'Normering: Eamonn Flanagan (2016)' };
  if (rsi <= 3.00) return { label: 'Meget god (2.50-3.00)', color: '#22c55e', source: 'Normering: Eamonn Flanagan (2016)' };
  return { label: 'Ekstraordinær (>3.00)', color: '#3b82f6', source: 'Normering: Eamonn Flanagan (2016)' };
}