// assets/js/core/max-hr.js

/**
 * Den rå matematiske motor: Estimerer max-puls ud fra alder, køn og formel.
 * Denne kan importeres direkte i Åstrand, biptest, etc.
 */
export function estimateMaxHr(age, gender = 'male', formula = 'tanaka') {
  if (!age || age <= 0) return 0;

  // Gør det nemt, hvis UI'et bare sender 'fairbarn' men vi har et køn valgt
  let activeFormula = formula.toLowerCase();
  if (activeFormula === 'fairbarn') {
    activeFormula = gender === 'female' ? 'fairbarn_female' : 'fairbarn_male';
  } else if (activeFormula === 'whyte') {
    activeFormula = gender === 'female' ? 'whyte_female' : 'whyte_male';
  }

  switch (activeFormula) {
    case 'aastrand':
      return 216.6 - 0.84 * age;
    case 'arena':
      return 209.3 - 0.72 * age;
    case 'nes':
      return 211 - 0.64 * age;
    case 'fox':
      return 220 - age;
    case 'fairbarn_female':
      return 201 - 0.63 * age;
    case 'fairbarn_male':
      return 208 - 0.8 * age;
    case 'whyte_female':
      return 216 - 1.09 * age;
    case 'whyte_male':
      return 202 - 0.55 * age;
    case 'inbar':
      return 205.8 - 0.685 * age;
    case 'gellish_linear':
      return 207 - 0.7 * age;
    case 'gellish':
      return 192 - 0.007 * Math.pow(age, 2);
    case 'gulati':
      return 206 - 0.88 * age;
    case 'londeree_moeschberger':
      return 206.3 - 0.711 * age;
    
    case 'average':
      const total = 
        (206 - 0.88 * age) +                  // gulati
        (192 - 0.007 * Math.pow(age, 2)) +    // gellish
        (206.3 - 0.711 * age) +               // londeree_moeschberger
        (207 - 0.7 * age) +                   // gellish_linear
        (205.8 - 0.685 * age) +               // inbar
        (220 - age) +                         // fox
        (216.6 - 0.84 * age) +                // aastrand
        (209.3 - 0.72 * age) +                // arena
        (208 - 0.7 * age) +                   // tanaka
        (211 - 0.64 * age);                   // nes
      return total / 10;

    case 'tanaka':
    default:
      return 208 - 0.7 * age;
  }
}

/**
 * UI Wrapper: Modtager data fra din HTML-beregner og returnerer et formateret objekt.
 */
export function calculateMaxHrUI(params) {
  const { age, gender, formula } = params;
  
  if (!age) {
    return { isValid: false };
  }

  const rawMaxHr = estimateMaxHr(age, gender, formula);

  return {
    isValid: true,
    maxHr: Math.round(rawMaxHr) // Returnerer et pænt, afrundet pulsslag
  };
}