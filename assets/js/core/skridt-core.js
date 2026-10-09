// assets/js/core/skridt-core.js

/**
 * Beregner estimeret trinlængde (1 trin / step) ud fra højde og køn.
 * Mænd: Højde * 0.415
 * Kvinder: Højde * 0.413
 */
export function calculateStepLength(heightCm, gender = 'man') {
  const h = parseFloat(heightCm) || 0;
  if (h <= 0) return 0;

  const factor = gender === 'woman' ? 0.413 : 0.415;
  return Math.round(h * factor * 10) / 10; // cm med 1 decimal
}

/**
 * Omregner skridt til kilometer
 */
export function stepsToKm(steps, stepLengthCm) {
  const s = parseInt(steps, 10) || 0;
  const len = parseFloat(stepLengthCm) || 0;
  if (s <= 0 || len <= 0) return 0;

  return Math.round(((s * len) / 100000) * 100) / 100; // km med 2 decimaler
}

/**
 * Omregner kilometer til skridt
 */
export function kmToSteps(km, stepLengthCm) {
  const k = parseFloat(km) || 0;
  const len = parseFloat(stepLengthCm) || 0;
  if (k <= 0 || len <= 0) return 0;

  return Math.round((k * 100000) / len);
}

/**
 * Estimerer tidsforbrug i minutter ud fra distance og tempo
 * Temps: 'normal' (~4.8 km/t), 'brisk' (~6.0 km/t), 'run' (~10.0 km/t)
 */
export function estimateTimeMinutes(km, paceType = 'normal') {
  const k = parseFloat(km) || 0;
  if (k <= 0) return 0;

  let speedKmh = 4.8;
  if (paceType === 'brisk') speedKmh = 6.0;
  if (paceType === 'run') speedKmh = 10.0;

  return Math.round((k / speedKmh) * 60);
}

/**
 * Hjælpefunktion til at formatere minutter til "X t Y min" eller "X min"
 */
export function formatMinutes(totalMinutes) {
  const m = parseInt(totalMinutes, 10) || 0;
  if (m <= 0) return '0 min';

  const hours = Math.floor(m / 60);
  const mins = m % 60;

  if (hours > 0) {
    return mins > 0 ? `${hours} t ${mins} min` : `${hours} t`;
  }
  return `${mins} min`;
}