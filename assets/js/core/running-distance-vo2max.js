// assets/js/core/running-distance-vo2.js

export function getKilometersPrHour(timeInSeconds, distanceMeters) {
  if (timeInSeconds <= 0 || distanceMeters <= 0) return 0;
  const hours = timeInSeconds / 3600;
  const km = distanceMeters / 1000;
  return km / hours;
}

// Tokmakidis et al. (1987) / Léger MET-formel baseret på distance (km) og hastighed (km/t)
export function getMETBasedOnKmAndKmt(km, kmt) {
  if (km < 1.5) {
    return 1.2730 + 0.8325 * kmt;
  } else if (km < 1.6) {
    return 2.4388 + 0.8343 * kmt;
  } else if (km < 2.0) {
    return 2.5043 + 0.8400 * kmt;
  } else if (km < 3.0) {
    return 0.27297 + 0.8527 * kmt;
  } else if (km < 5.0) {
    return 0.29226 + 0.8900 * kmt;
  } else if (km < 10.0) {
    return 3.1747 + 0.9139 * kmt;
  } else if (km < 15.0) {
    return 4.7226 + 0.8690 * kmt;
  } else if (km < 20.0) {
    return 4.8619 + 0.8872 * kmt;
  } else if (km < 42.195) {
    return 4.9574 + 0.8995 * kmt;
  } else {
    return 6.9021 + 0.8246 * kmt;
  }
}

export function formatPace(timeInSeconds, distanceMeters) {
  if (timeInSeconds <= 0 || distanceMeters <= 0) return '-';
  const km = distanceMeters / 1000;
  const paceSecondsPerKm = timeInSeconds / km;
  const mins = Math.floor(paceSecondsPerKm / 60);
  const secs = Math.round(paceSecondsPerKm % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs} /km`;
}

export function calculateRunningDistanceVO2(distanceInput, hoursInput, minutesInput, secondsInput, bodyweightInput = 0) {
  const distanceMeters = parseFloat(distanceInput);
  const hrs = parseFloat(hoursInput) || 0;
  const mins = parseFloat(minutesInput) || 0;
  const secs = parseFloat(secondsInput) || 0;
  const weight = parseFloat(bodyweightInput) || 0;

  const totalSeconds = (hrs * 3600) + (mins * 60) + secs;

  if (isNaN(distanceMeters) || distanceMeters <= 0 || totalSeconds <= 0) {
    return { isValid: false };
  }

  const km = distanceMeters / 1000;
  const kmt = getKilometersPrHour(totalSeconds, distanceMeters);
  const met = getMETBasedOnKmAndKmt(km, kmt);
  const fitnessLevel = 3.5 * met; // 1 MET = 3.5 ml O2/kg/min

  if (fitnessLevel <= 0 || isNaN(fitnessLevel)) {
    return { isValid: false };
  }

  const vo2max = weight > 0 ? (weight * fitnessLevel) / 1000 : null;

  return {
    isValid: true,
    distanceMeters: distanceMeters,
    totalSeconds: totalSeconds,
    kmt: kmt,
    formattedKmt: kmt.toFixed(1) + ' km/t',
    pace: formatPace(totalSeconds, distanceMeters),
    fitnessLevel: fitnessLevel,
    formattedFitnessLevel: fitnessLevel.toFixed(1),
    maxOxygenUptake: vo2max,
    formattedVO2Max: vo2max ? vo2max.toFixed(2) : '-',
    sd: 3.0,
    sdUnit: 'ml/kg/min'
  };
}