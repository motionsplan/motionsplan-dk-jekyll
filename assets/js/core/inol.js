// assets/js/core/inol.js

/**
 * Standard øvelseskatalog med muskelgruppe-vægte
 */
export const EXERCISE_DATABASE = [
  { id: 'squat', name: 'Back Squat', primary: 'quads', secondary: ['glutes'] },
  { id: 'front_squat', name: 'Front Squat', primary: 'quads', secondary: ['abs'] },
  { id: 'bench_press', name: 'Bænkpres', primary: 'chest', secondary: ['triceps', 'delts'] },
  { id: 'incline_bench', name: 'Incline Bænkpres', primary: 'chest', secondary: ['delts', 'triceps'] },
  { id: 'deadlift', name: 'Dødløft', primary: 'back', secondary: ['hamstrings', 'glutes'] },
  { id: 'sumo_deadlift', name: 'Sumo Dødløft', primary: 'glutes', secondary: ['quads', 'back'] },
  { id: 'overhead_press', name: 'Military Press / OHP', primary: 'delts', secondary: ['triceps'] },
  { id: 'barbell_row', name: 'Barbell Row', primary: 'back', secondary: ['biceps'] },
  { id: 'pullups', name: 'Pull-ups / Chins', primary: 'back', secondary: ['biceps'] },
  { id: 'romanian_deadlift', name: 'RDL / Rumænsk Dødløft', primary: 'hamstrings', secondary: ['glutes', 'back'] },
  { id: 'leg_extension', name: 'Leg Extension', primary: 'quads', secondary: [] },
  { id: 'leg_curl', name: 'Leg Curl', primary: 'hamstrings', secondary: [] },
  { id: 'biceps_curl', name: 'Biceps Curl', primary: 'biceps', secondary: [] },
  { id: 'triceps_pushdown', name: 'Triceps Pushdown', primary: 'triceps', secondary: [] },
  { id: 'lateral_raise', name: 'Side Lateral Raise', primary: 'delts', secondary: [] }
];

/**
 * Konverterer RPE + Reps til estimeret % af 1RM
 * Formel baseret på Epley / Wathan RIR-sammenhæng
 */
export function rpeToPercent(reps, rpe) {
  const r = parseFloat(reps);
  const rpeVal = parseFloat(rpe);
  if (isNaN(r) || isNaN(rpeVal) || r <= 0 || rpeVal < 5 || rpeVal > 10) return 0;

  const rir = 10 - rpeVal;
  const maxRepsEst = r + rir;
  
  // Epley invers: %1RM = 100 / (1 + 0.0333 * estMaxReps)
  const pct = 100 / (1 + (0.0333 * maxRepsEst));
  return Math.min(100, Math.max(50, Math.round(pct * 10) / 10));
}

/**
 * Beregner INOL for ét enkelt sæt eller en samling sæt
 * Formel: INOL = Reps / (100 - %1RM)
 */
export function calculateSetINOL(reps, intensityPercent) {
  const r = parseFloat(reps);
  const pct = parseFloat(intensityPercent);

  if (isNaN(r) || isNaN(pct) || r <= 0 || pct <= 0 || pct >= 100) {
    return 0;
  }

  return r / (100 - pct);
}

/**
 * Vurderer INOL belastningsniveauet ud fra Hristovs retningslinjer
 */
export function evaluateINOL(inolValue, isWeekly = false) {
  const val = parseFloat(inolValue);
  if (isNaN(val) || val <= 0) {
    return { label: 'Mangler data', color: '#94a3b8', level: 0, desc: 'Indtast sæt og intensitet.' };
  }

  if (!isWeekly) {
    // Enkelt Træningspas Grænser
    if (val < 0.4) {
      return { label: 'Meget lav', color: '#94a3b8', level: 1, desc: 'For lav stimulationsgrænse for vækst, men god til aktiv restitution.' };
    } else if (val <= 1.0) {
      return { label: 'Optimal / Restitution', color: '#22c55e', level: 2, desc: 'God og overkommelig volumen. Fremragende til teknisk træning eller lette dage.' };
    } else if (val <= 2.0) {
      return { label: 'Hård & Effektiv', color: '#f97316', level: 3, desc: 'Meget hårdt træningspas. Optimal for maksimal muskelopbygning og styrke.' };
    } else {
      return { label: 'Ekstrem / Brutal', color: '#ef4444', level: 4, desc: 'Megen høj risiko for overbelastning. Bør kun bruges sjældent.' };
    }
  } else {
    // Ugentlige Grænser per muskelgruppe
    if (val < 2.0) {
      return { label: 'Let uge', color: '#22c55e', level: 1, desc: 'Let ugentlig volumen. God til deload.' };
    } else if (val <= 3.0) {
      return { label: 'Optimal uge', color: '#3b82f6', level: 2, desc: 'Perfekt ugentlig volumen for jævn fremgang.' };
    } else if (val <= 4.0) {
      return { label: 'Meget tung uge', color: '#f97316', level: 3, desc: 'Meget høj ugentlig belastning. Kræver god søvn og ernæring.' };
    } else {
      return { label: 'Overrækkelse', color: '#ef4444', level: 4, desc: 'Høj risiko for overtræning hvis det fortsættes over flere uger.' };
    }
  }
}

/**
 * Beregner akkumuleret INOL for et helt workout-array
 */
export function calculateWorkoutINOL(workoutList) {
  let totalWorkoutINOL = 0;
  const muscleTotals = {
    quads: 0,
    hamstrings: 0,
    glutes: 0,
    chest: 0,
    back: 0,
    delts: 0,
    triceps: 0,
    biceps: 0,
    abs: 0
  };

  const exerciseResults = workoutList.map(item => {
    const exDef = EXERCISE_DATABASE.find(e => e.id === item.exerciseId) || {
      name: item.customName || 'Øvelse',
      primary: item.primaryMuscle || 'chest',
      secondary: []
    };

    let effectivePct = item.intensityPercent;
    if (item.inputType === 'rpe') {
      effectivePct = rpeToPercent(item.reps, item.rpe);
    }

    const setINOL = calculateSetINOL(item.reps, effectivePct);
    const exerciseINOL = setINOL * (parseFloat(item.sets) || 1);

    totalWorkoutINOL += exerciseINOL;

    // Muskelgruppe vægtning (100% til primær, 50% til sekundær)
    if (exDef.primary && muscleTotals[exDef.primary] !== undefined) {
      muscleTotals[exDef.primary] += exerciseINOL;
    }
    if (exDef.secondary && Array.isArray(exDef.secondary)) {
      exDef.secondary.forEach(sec => {
        if (muscleTotals[sec] !== undefined) {
          muscleTotals[sec] += exerciseINOL * 0.5;
        }
      });
    }

    return {
      ...item,
      exerciseName: exDef.name,
      effectivePct,
      setINOL: setINOL.toFixed(2),
      exerciseINOL: exerciseINOL.toFixed(2)
    };
  });

  return {
    totalINOL: totalWorkoutINOL.toFixed(2),
    rawTotalINOL: totalWorkoutINOL,
    muscleTotals,
    exerciseResults
  };
}