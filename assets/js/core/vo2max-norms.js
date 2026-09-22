// assets/js/core/vo2max-norms.js

// Vi definerer de mulige kategorier og giver dem en farve, der kan bruges i UI'et
const CATEGORIES = {
  VERY_LOW: { label: 'Meget lavt', color: '#ef4444' }, // Rød
  LOW:      { label: 'Lavt', color: '#f97316' },       // Orange
  AVERAGE:  { label: 'Middel', color: '#eab308' },     // Gul
  HIGH:     { label: 'Højt', color: '#22c55e' },       // Grøn
  VERY_HIGH:{ label: 'Meget højt', color: '#3b82f6' }  // Blå
};

// Datasæt: Åstrand (Almindelige danske mennesker)
// Tærskelværdier repræsenterer den øvre grænse for: [Meget lavt, Lavt, Middel, Højt]
// Alt over den sidste værdi er "Meget højt".
const DATASETS = {
  astrand: {
    male: [
      { maxAge: 14, thresholds: [38, 43, 51, 56] },
      { maxAge: 19, thresholds: [43, 48, 56, 61] },
      { maxAge: 29, thresholds: [38, 43, 51, 56] },
      { maxAge: 39, thresholds: [34, 39, 47, 51] },
      { maxAge: 49, thresholds: [30, 35, 43, 47] },
      { maxAge: 59, thresholds: [25, 31, 39, 43] },
      { maxAge: 69, thresholds: [21, 26, 35, 39] },
      { maxAge: 120, thresholds: [19, 24, 32, 37] } // 70+
    ],
    female: [
      { maxAge: 14, thresholds: [34, 39, 47, 51] },
      { maxAge: 29, thresholds: [28, 34, 43, 48] }, // 15-29
      { maxAge: 39, thresholds: [27, 33, 41, 47] },
      { maxAge: 49, thresholds: [25, 31, 40, 45] },
      { maxAge: 64, thresholds: [21, 28, 36, 41] }, // 50-64
      { maxAge: 120, thresholds: [19, 26, 34, 39] } // 65+
    ]
  }
};

/**
 * Vurderer et kondital ud fra køn, alder og det valgte datasæt.
 */
export function evaluateFitnessLevel(vo2max, age, gender = 'male', dataset = 'astrand') {
  if (!vo2max || !age || !gender) return null;

  const currentDataset = DATASETS[dataset];
  if (!currentDataset || !currentDataset[gender]) return null;

  // Find den rigtige aldersgruppe
  const ageGroup = currentDataset[gender].find(group => age <= group.maxAge);
  if (!ageGroup) return null;

  const t = ageGroup.thresholds;

  // Sammenlign konditallet med tærskelværdierne
  if (vo2max < t[0]) return CATEGORIES.VERY_LOW;
  if (vo2max < t[1]) return CATEGORIES.LOW;
  if (vo2max <= t[2]) return CATEGORIES.AVERAGE;
  if (vo2max <= t[3]) return CATEGORIES.HIGH;
  
  return CATEGORIES.VERY_HIGH;
}

/**
 * Henter tærskelværdierne (array med 4 tal), som vi bruger til slideren.
 */
export function getFitnessThresholds(age, gender = 'male', dataset = 'astrand') {
  const currentDataset = DATASETS[dataset];
  if (!currentDataset || !currentDataset[gender]) return null;
  
  const ageGroup = currentDataset[gender].find(group => age <= group.maxAge);
  return ageGroup ? ageGroup.thresholds : null;
}