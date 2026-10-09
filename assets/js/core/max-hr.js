// assets/js/core/max-hr.js

/**
 * Formeldefinitioner og fysiologisk metadata for Maxpuls
 */
export const HRMAX_FORMULA_DEFINITIONS = {
  tanaka: {
    name: 'Tanaka et al. (2001) – Standard',
    shortName: 'Tanaka (2001)',
    desc: '208 - (0.7 × alder). Den moderne fysiologiske guldstandard for voksne.',
    see: '±7-10 bpm',
    isRecommended: true,
    requiresGender: false
  },
  fox: {
    name: 'Haskell & Fox (1970) – Klassisk',
    shortName: 'Haskell & Fox',
    desc: '220 - alder. Den klassiske tommelfingerregel. Meget simpel, men med større usikkerhed.',
    see: '±10-12 bpm',
    requiresGender: false
  },
  gellish: {
    name: 'Gellish et al. (2007) – Ikke-lineær',
    shortName: 'Gellish (Ikke-lineær)',
    desc: '192 - (0.007 × alder²). Præcis ikke-lineær kurve, særligt velegnet til midaldrende og ældre.',
    see: '±7-8 bpm',
    requiresGender: false
  },
  gellish_linear: {
    name: 'Gellish (2007) – Lineær',
    shortName: 'Gellish (Lineær)',
    desc: '207 - (0.7 × alder). Forenklet lineær udgave af Gellish-studiet.',
    see: '±7-9 bpm',
    requiresGender: false
  },
  gulati: {
    name: 'Gulati et al. (2010) – Kun Kvinder',
    shortName: 'Gulati (Kvinder)',
    desc: '206 - (0.88 × alder). Specifikt udviklet og valideret på over 25.000 kvinder.',
    see: '±8 bpm',
    requiresGender: 'female_only'
  },
  fairbarn: {
    name: 'Fairbarn et al. (1994) – Køns-specifik',
    shortName: 'Fairbarn',
    desc: 'Mænd: 208 - (0.8 × alder) | Kvinder: 201 - (0.63 × alder). Baseret på ergometertests.',
    see: '±8 bpm',
    requiresGender: true
  },
  whyte: {
    name: 'Whyte et al. (2008) – Atleter',
    shortName: 'Whyte (Atleter)',
    desc: 'Mænd: 202 - (0.55 × alder) | Kvinder: 216 - (1.09 × alder). Til veltrænede udholdenhedsatleter.',
    see: '±6-8 bpm',
    requiresGender: true
  },
  nes: {
    name: 'Nes et al. (2013) – HUNT-studiet',
    shortName: 'Nes (HUNT)',
    desc: '211 - (0.64 × alder). Baseret på det omfattende norske HUNT-3 studie.',
    see: '±8-10 bpm',
    requiresGender: false
  },
  aastrand: {
    name: 'Åstrand (1952)',
    shortName: 'Åstrand',
    desc: '216.6 - (0.84 × alder). Klassisk formel fra fysiologipioneren Per-Olof Åstrand.',
    see: '±10 bpm',
    requiresGender: false
  },
  inbar: {
    name: 'Inbar et al. (1994)',
    shortName: 'Inbar',
    desc: '205.8 - (0.685 × alder). Udbredt i europæiske laboratoriestudier.',
    see: '±6.4 bpm',
    requiresGender: false
  },
  londeree_moeschberger: {
    name: 'Londeree & Moeschberger (1982)',
    shortName: 'Londeree & Moeschberger',
    desc: '206.3 - (0.711 × alder). Baseret på en stor metaanalyse af tilgængelige studier.',
    see: '±8-10 bpm',
    requiresGender: false
  }
};

/**
 * Estimerer maxpuls ud fra alder, køn og formel nøgle
 */
export function estimateMaxHr(age, gender = 'male', formula = 'tanaka') {
  if (!age || age <= 0) return 0;

  let activeFormula = formula.toLowerCase();

  if (activeFormula === 'fairbarn') {
    activeFormula = gender === 'female' ? 'fairbarn_female' : 'fairbarn_male';
  } else if (activeFormula === 'whyte') {
    activeFormula = gender === 'female' ? 'whyte_female' : 'whyte_male';
  }

  switch (activeFormula) {
    case 'aastrand':
      return 216.6 - 0.84 * age;
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
        (208 - 0.7 * age) +                   // tanaka
        (211 - 0.64 * age);                   // nes
      return total / 9;

    case 'tanaka':
    default:
      return 208 - 0.7 * age;
  }
}

export function calculateMaxHrUI(params) {
  const { age, gender, formula } = params;
  
  if (!age || age <= 0) {
    return { isValid: false };
  }

  const rawMaxHr = estimateMaxHr(age, gender, formula);

  return {
    isValid: true,
    maxHr: Math.round(rawMaxHr)
  };
}