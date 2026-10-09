// assets/js/core/1rm-core.js

// RTS RPE TABEL MATRIX (Mike Tuchscherer / Reactive Training Systems)
const RTS_RPE_LOOKUP = {
  1.0: 100.0, 1.5: 97.8, 2.0: 95.5, 2.5: 93.9,
  3.0: 92.2,  3.5: 90.7, 4.0: 89.2, 4.5: 87.8,
  5.0: 86.3,  5.5: 85.0, 6.0: 83.7, 6.5: 82.4,
  7.0: 81.1,  7.5: 79.9, 8.0: 78.6, 8.5: 77.4,
  9.0: 76.2,  9.5: 75.1, 10.0: 73.9, 10.5: 72.3,
  11.0: 70.7, 11.5: 69.4, 12.0: 68.0, 12.5: 66.7,
  13.0: 65.3, 13.5: 64.0, 14.0: 62.6, 14.5: 61.3,
  15.0: 59.9, 15.5: 58.6
};

export function getRtsRpePercentage(effectiveReps) {
  const rounded = Math.round(effectiveReps * 2) / 2;
  if (RTS_RPE_LOOKUP[rounded]) {
    return RTS_RPE_LOOKUP[rounded];
  }
  if (rounded <= 1.0) return 100.0;
  return Math.max(40, 100.0 - (rounded * 2.7));
}

export const FORMULA_DEFINITIONS = {
  recommended_formula: {
    name: '⭐ Anbefalet formel (Automatisk)',
    seePct: 2.5,
    desc: 'Vælger automatisk Brzycki v. generel træning (1–10 reps) eller Reynolds et al. når overkrop/underkrop er valgt.'
  },
  brzycki: {
    name: 'Brzycki (1993)',
    seePct: 2.5,
    desc: 'Guldstandarden til 1–10 reps. Meget præcis til både overkrop og underkrop.',
    calc: (w, effReps) => w * (36 / (37 - effReps))
  },
  rts_rpe: {
    name: 'RTS RPE-Tabel (Tuchscherer)',
    seePct: 2.0,
    desc: 'Mike Tuchscherers Reactive Training Systems tabel baseret på fysiologiske procenter og Reps in Reserve (RIR).',
    calc: (w, effReps) => {
      const pct = getRtsRpePercentage(effReps);
      return (w / pct) * 100;
    }
  },
  epley: {
    name: 'Epley (1985)',
    seePct: 3.0,
    desc: 'Udbredt og klassisk formel. Særligt velegnet ved færre gentagelser (2–6 reps).',
    calc: (w, effReps) => w * (1 + 0.0333 * effReps)
  },
  reynolds: {
    name: 'Reynolds et al. (2006)',
    seePct: 2.2,
    requiresBodyPart: true,
    desc: 'Avanceret fysiologisk formel opdelt i specifikke ligninger for overkrop og underkrop.',
    calc: (w, effReps, bodyPart = 'lower') => {
      const getReynoldsPct = (r) =>
        bodyPart === 'upper'
          ? 55.51 * Math.exp(-0.0723 * r) + 48.47
          : 78.17 * Math.exp(-0.0569 * r) + 26.41;

      return (w / getReynoldsPct(effReps)) * 100;
    }
  },
  mayhew: {
    name: 'Mayhew et al. (1992)',
    seePct: 2.8,
    desc: 'Eksponentiel model udviklet på trænede atleter. Meget præcis ved 1–12 reps.',
    calc: (w, effReps) => (100 * w) / (52.2 + 41.9 * Math.exp(-0.055 * effReps))
  },
  wathan: {
    name: 'Wathan (1994)',
    seePct: 2.7,
    desc: 'Eksponentiel formel med høj præcision til både overkrop og benøvelser.',
    calc: (w, effReps) => (100 * w) / (48.8 + 53.8 * Math.exp(-0.075 * effReps))
  },
  lander: {
    name: 'Lander (1985)',
    seePct: 3.2,
    desc: 'Lineær formel der fungerer godt ved moderate vægte og reps.',
    calc: (w, effReps) => (100 * w) / (101.3 - 2.67123 * effReps)
  },
  wendler: {
    name: 'Wendler (5/3/1)',
    seePct: 3.0,
    desc: 'Populær formel fra Jim Wendlers 5/3/1 styrkeprogrammer. Tæt på Epley.',
    calc: (w, effReps) => w * effReps * 0.0333 + w
  },
  lombardi: {
    name: 'Lombardi (1989)',
    seePct: 3.5,
    desc: 'Potens-formel velegnet til hurtige estimater ved højere rep-antal.',
    calc: (w, effReps) => w * Math.pow(effReps, 0.10)
  },
  oconnor: {
    name: "O'Connor et al. (1989)",
    seePct: 3.5,
    desc: 'Enkel lineær formel udviklet til styrketræning.',
    calc: (w, effReps) => w * (1 + 0.025 * effReps)
  }
};

export function getResolvedFormulaKey(requestedKey, bodyPart = 'all') {
  if (requestedKey === 'recommended_formula' || !FORMULA_DEFINITIONS[requestedKey]) {
    if (bodyPart === 'upper' || bodyPart === 'lower') {
      return 'reynolds';
    }
    return 'brzycki';
  }
  return requestedKey;
}

/**
 * Hjælpefunktion til at beregne 1RM for en specifik formel med garanti for fysiologisk spærring
 */
export function computeSingleFormula1RM(formulaKey, w, effectiveReps, bodyPart) {
  if (w <= 0) return 0;

  // Ved 1 rep @ RPE 10 (effektive reps = 1) ER din 1RM præcis lig den løftede vægt
  if (effectiveReps <= 1) {
    return w;
  }

  const target = FORMULA_DEFINITIONS[formulaKey] || FORMULA_DEFINITIONS.brzycki;
  const raw = target.calc(w, effectiveReps, bodyPart);

  // Fysiologisk bundgrænse: 1RM kan aldrig beregnes lavere end den reelt gennemførte vægt
  return Math.max(w, raw);
}

/**
 * Hovedfunktion til beregning af 1RM samt Rep Maxima tabel
 */
export function calculate1RM({ weight, reps, rpe = 10, formulaKey = 'recommended_formula', bodyPart = 'all' }) {
  const w = parseFloat(weight) || 0;
  const r = parseInt(reps, 10) || 0;
  const rpeVal = parseFloat(rpe) || 10;

  if (w <= 0 || r <= 0) {
    return { isValid: false };
  }

  const rir = Math.max(0, 10 - rpeVal);
  const effectiveReps = r + rir;

  const resolvedKey = getResolvedFormulaKey(formulaKey, bodyPart);
  const formulaDef = FORMULA_DEFINITIONS[resolvedKey] || FORMULA_DEFINITIONS.brzycki;

  // 1RM for den valgte formel med fysiologisk spærring
  const max1RM = computeSingleFormula1RM(resolvedKey, w, effectiveReps, bodyPart);

  // SEE i kg (ved 1 rep max-forsøg er der ingen statistisk usikkerhed)
  const seePct = effectiveReps <= 1 ? 0 : formulaDef.seePct;
  const seeKg = Math.round((max1RM * (seePct / 100)) * 10) / 10;

  // Gennemsnit af alle formler
  const allKeys = Object.keys(FORMULA_DEFINITIONS).filter(k => k !== 'recommended_formula');
  const sum1RM = allKeys.reduce((acc, key) => {
    return acc + computeSingleFormula1RM(key, w, effectiveReps, bodyPart);
  }, 0);
  const average1RM = sum1RM / allKeys.length;

  // RM-tabel
  const targetReps = [1, 2, 3, 4, 5, 6, 8, 10, 12];

  const rmTable = targetReps.map(rm => {
    let estWeight = 0;
    if (rm === 1) {
      estWeight = max1RM;
    } else {
      const ratio = computeSingleFormula1RM(resolvedKey, 100, rm, bodyPart) / 100;
      estWeight = max1RM / ratio;
    }

    const avgEst = allKeys.reduce((acc, key) => {
      const f1rm = computeSingleFormula1RM(key, w, effectiveReps, bodyPart);
      const fRatio = computeSingleFormula1RM(key, 100, rm, bodyPart) / 100;
      return acc + (f1rm / fRatio);
    }, 0) / allKeys.length;

    const pctOf1RM = (estWeight / max1RM) * 100;

    return {
      rm,
      weightKg: Math.round(estWeight * 10) / 10,
      avgWeightKg: Math.round(avgEst * 10) / 10,
      pctOf1RM: Math.round(pctOf1RM)
    };
  });

  return {
    isValid: true,
    weight: w,
    reps: r,
    rpe: rpeVal,
    rir,
    effectiveReps,
    bodyPart,
    requestedFormulaKey: formulaKey,
    resolvedFormulaKey: resolvedKey,
    formulaName: formulaDef.name,
    formulaDesc: formulaDef.desc,
    isRecommended: formulaKey === 'recommended_formula',
    max1RM: Math.round(max1RM * 10) / 10,
    seeKg,
    seePct,
    average1RM: Math.round(average1RM * 10) / 10,
    rmTable
  };
}