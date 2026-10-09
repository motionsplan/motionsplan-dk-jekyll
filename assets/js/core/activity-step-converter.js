// assets/js/core/activity-step-converter.js

let cachedData = null;

export async function fetchStepData() {
  if (cachedData) return cachedData;
  try {
    const res = await fetch('/assets/data/step-conversion.json');
    const rawData = await res.json();
    
    // Tvinger talstørrelsen til int, så der ikke opstår streng-konkatenering i JS
    cachedData = rawData.map(item => ({
      ...item,
      stepsPerMin: parseInt(item.stepsPerMin, 10) || 0
    }));
    
    return cachedData;
  } catch (e) {
    console.error('Fejl ved indlæsning af skridt-data fra Jekyll JSON:', e);
    return [];
  }
}

export function calculateStepEquivalent(activityKey, durationMinutes, dataList = []) {
  const duration = parseFloat(durationMinutes) || 0;
  const activity = dataList.find(a => a.key === activityKey);

  if (!activity || duration <= 0) {
    return { isValid: false };
  }

  const totalSteps = Math.round(activity.stepsPerMin * duration);
  const estKm = (totalSteps * 0.00075).toFixed(2);

  return {
    isValid: true,
    activityKey: activity.key,
    activityName: activity.name,
    stepsPerMin: activity.stepsPerMin,
    durationMinutes: duration,
    totalSteps: totalSteps,
    estKm: estKm
  };
}