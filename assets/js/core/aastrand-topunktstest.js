// assets/js/core/astrand.js

export function calculateAstrand2Point(params) {
  const { weight, maxHr, work1, hr1, work2, hr2 } = params;

  // Sikkerhedstjek: Vi kan ikke dividere med 0, hvis pulsen er ens
  if (!weight || !maxHr || !work1 || !hr1 || !work2 || !hr2 || hr1 === hr2) {
    return { isValid: false };
  }

  // 1. Beregn Max Watt vha. lineær fremskrivning
  // Formel: ((MaxHR - HR2) * (Work2 - Work1)) / (HR2 - HR1) + Work2
  const maxWork = ((maxHr - hr2) * (work2 - work1)) / (hr2 - hr1) + work2;

  // 2. Beregn Max Iltoptagelse (L/min)
  const mechanicalEfficiency = 0.23;
  const oxygenEnergy = 21100;
  const bmr = 0.25; // Hvile-iltoptagelse (L/min)
  
  const maxOxygenUptake = (maxWork / mechanicalEfficiency * 60 / oxygenEnergy) + bmr;

  // 3. Beregn Kondital (ml O2 / kg / min)
  const fitnessLevel = (maxOxygenUptake / weight) * 1000;

  return {
    isValid: true,
    maxWork: Math.round(maxWork), // Afrunder til hele watt
    maxOxygenUptake: Math.round(maxOxygenUptake * 100) / 100, // 2 decimaler
    fitnessLevel: Math.round(fitnessLevel * 10) / 10 // 1 decimal
  };
}