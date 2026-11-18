// assets/js/core/bmi-health.js

/**
 * ISOBMI GRÆNSEVÆRDIER FOR BØRN OG UNGE (2-18 ÅR)
 * Baseret på IOTF / Cole et al. (jf. de officielle danske anbefalinger)
 */
const CHILD_ISOBMI_TABLE = {
  // alder: { male: [overweight, obesity], female: [overweight, obesity] }
  2:  { male: [18.4, 20.0], female: [18.0, 19.8] },
  3:  { male: [17.9, 19.6], female: [17.6, 19.4] },
  4:  { male: [17.6, 19.3], female: [17.3, 19.2] },
  5:  { male: [17.4, 19.3], female: [17.2, 19.2] },
  6:  { male: [17.6, 19.8], female: [17.3, 19.7] },
  7:  { male: [17.9, 20.6], female: [17.8, 20.5] },
  8:  { male: [18.4, 21.6], female: [18.4, 21.6] },
  9:  { male: [19.1, 22.8], female: [19.1, 22.8] },
  10: { male: [19.8, 24.0], female: [19.9, 24.1] },
  11: { male: [20.6, 25.1], female: [20.7, 25.4] },
  12: { male: [21.2, 26.0], female: [21.7, 26.7] },
  13: { male: [21.9, 26.8], female: [22.6, 27.8] },
  14: { male: [22.6, 27.6], female: [23.3, 28.6] },
  15: { male: [23.3, 28.3], female: [23.9, 29.1] },
  16: { male: [23.9, 28.9], female: [24.4, 29.4] },
  17: { male: [24.5, 29.4], female: [24.7, 29.7] },
  18: { male: [25.0, 30.0], female: [25.0, 30.0] }
};

export const BMI_HEALTH_FORMULAS = {

  // 1. BMI FOR VOKSNE (Med dynamiske vurderingsmodeller)
  'bmi-adult': {
    id: 'bmi-adult',
    name: 'BMI Beregner (Voksne)',
    inputs: ['height', 'weight', 'age'],
    unit: 'BMI',
    disclaimer: '⚠️ Forbehold: BMI skelner ikke mellem fedt- og muskelmasse. Det er et generelt populationsværktøj for voksne over 18 år og bør ved behov suppleres med taljemål.',
    models: {
      'who': {
        name: 'WHO Standard (Anbefalet fallback)',
        getCriteria: () => [
          { limit: '< 18.5', label: 'Undervægtig', color: '#3b82f6', min: 0, max: 18.49 },
          { limit: '18.5 - 24.9', label: 'Normalvægtig', color: '#22c55e', min: 18.5, max: 24.99 },
          { limit: '25.0 - 29.9', label: 'Overvægtig', color: '#f97316', min: 25.0, max: 29.99 },
          { limit: '30.0 - 34.9', label: 'Fedme klasse I', color: '#ef4444', min: 30.0, max: 34.99 },
          { limit: '≥ 35.0', label: 'Svær fedme', color: '#991b1b', min: 35.0, max: 999 }
        ],
        evaluate(bmi) {
          if (bmi < 18.5) return { status: 'Undervægtig', color: '#3b82f6', pct: 15, text: 'Dit BMI ligger under WHOs anbefalede normalområde.' };
          if (bmi < 25.0) return { status: 'Normalvægtig', color: '#22c55e', pct: 38, text: 'Dit BMI ligger inden for det sundhedsmæssigt optimale område ifølge WHO.' };
          if (bmi < 30.0) return { status: 'Overvægtig', color: '#f97316', pct: 65, text: 'Dit BMI ligger i kategorien overvægt. Kombinér gerne med taljemål for et mere præcist billede.' };
          if (bmi < 35.0) return { status: 'Fedme klasse I', color: '#ef4444', pct: 85, text: 'Et BMI over 30 indikerer fedme og forhøjet livsstilsrisiko.' };
          return { status: 'Svær fedme', color: '#991b1b', pct: 98, text: 'Et BMI over 35 indikerer svær fedme med væsentlig sundhedsrisiko.' };
        }
      },
      'zacho': {
        name: 'Revideret Skala (Morten Zacho / Nyere forskning)',
        getCriteria: () => [
          { limit: '< 20.0', label: 'Undervægtig', color: '#3b82f6', min: 0, max: 19.99 },
          { limit: '20.0 - 30.0', label: 'Sund zone (Normal/Overvægt)', color: '#22c55e', min: 20.0, max: 30.0 },
          { limit: '30.0 - 35.0', label: 'Fedme', color: '#f97316', min: 30.01, max: 35.0 },
          { limit: '≥ 35.0', label: 'Svær fedme', color: '#ef4444', min: 35.01, max: 999 }
        ],
        evaluate(bmi) {
          if (bmi < 20.0) return { status: 'Undervægtig', color: '#3b82f6', pct: 15, text: 'Ved BMI under 20 øges sundhedsrisikoen for undervægt.' };
          if (bmi <= 30.0) return { status: 'Sund zone', color: '#22c55e', pct: 45, text: 'Nyere forskning viser, at et BMI mellem 20 og 30 generelt er sundt, forudsat at du er fysisk aktiv og spiser varieret.' };
          if (bmi <= 35.0) return { status: 'Fedme', color: '#f97316', pct: 80, text: 'Et BMI mellem 30 og 35 kræver varige livsstilsændringer.' };
          return { status: 'Svær fedme', color: '#ef4444', pct: 95, text: 'Et BMI over 35 indikerer svær fedme, hvor vægttab vil have klare sundhedsfordele.' };
        }
      },
      'nhanes': {
        name: 'NHANES II (Kønsspecifik)',
        getCriteria: (gender) => {
          return gender === 'female' 
            ? [
                { limit: '< 19.1', label: 'Undervægtig', color: '#3b82f6', min: 0, max: 19.09 },
                { limit: '19.1 - 25.8', label: 'Normal', color: '#22c55e', min: 19.1, max: 25.8 },
                { limit: '25.9 - 27.3', label: 'Marginalt overvægtig', color: '#facc15', min: 25.81, max: 27.3 },
                { limit: '27.4 - 32.3', label: 'Overvægtig', color: '#f97316', min: 27.31, max: 32.3 },
                { limit: '≥ 32.4', label: 'Fed', color: '#ef4444', min: 32.31, max: 999 }
              ]
            : [
                { limit: '< 20.7', label: 'Undervægtig', color: '#3b82f6', min: 0, max: 20.69 },
                { limit: '20.7 - 26.4', label: 'Normal', color: '#22c55e', min: 20.7, max: 26.4 },
                { limit: '26.5 - 27.8', label: 'Marginalt overvægtig', color: '#facc15', min: 26.41, max: 27.8 },
                { limit: '27.9 - 31.1', label: 'Overvægtig', color: '#f97316', min: 27.81, max: 31.1 },
                { limit: '≥ 31.2', label: 'Fed', color: '#ef4444', min: 31.11, max: 999 }
              ];
        },
        evaluate(bmi, gender) {
          const isFemale = gender === 'female';
          if (isFemale) {
            if (bmi < 19.1) return { status: 'Undervægtig', color: '#3b82f6', pct: 15, text: 'NHANES II kønsspecifik grænse for undervægt hos kvinder.' };
            if (bmi <= 25.8) return { status: 'Normal', color: '#22c55e', pct: 40, text: 'Normalområde for kvinder ifølge NHANES II.' };
            if (bmi <= 27.3) return { status: 'Marginalt overvægtig', color: '#facc15', pct: 60, text: 'Marginal overvægt for kvinder.' };
            if (bmi <= 32.3) return { status: 'Overvægtig', color: '#f97316', pct: 78, text: 'Overvægt for kvinder ifølge NHANES II.' };
            return { status: 'Fed', color: '#ef4444', pct: 95, text: 'Fedme-kategori for kvinder.' };
          } else {
            if (bmi < 20.7) return { status: 'Undervægtig', color: '#3b82f6', pct: 15, text: 'NHANES II kønsspecifik grænse for undervægt hos mænd.' };
            if (bmi <= 26.4) return { status: 'Normal', color: '#22c55e', pct: 40, text: 'Normalområde for mænd ifølge NHANES II.' };
            if (bmi <= 27.8) return { status: 'Marginalt overvægtig', color: '#facc15', pct: 60, text: 'Marginal overvægt for mænd.' };
            if (bmi <= 31.1) return { status: 'Overvægtig', color: '#f97316', pct: 78, text: 'Overvægt for mænd ifølge NHANES II.' };
            return { status: 'Fed', color: '#ef4444', pct: 95, text: 'Fedme-kategori for mænd.' };
          }
        }
      }
    },
    evaluate(params) {
      const { height, weight, age, gender, modelKey = 'who' } = params;
      if (!height || !weight || height <= 0 || weight <= 0) return { isValid: false };

      const heightM = height / 100;
      const bmi = weight / (heightM * heightM);
      
      // ALDERS-SJEK: Børn/unge under 18 år
      if (age && age < 18 && age > 0) {
        return {
          isValid: true,
          mainValue: bmi.toFixed(1),
          subUnit: 'BMI',
          status: 'Brug børne-beregner',
          color: '#f97316',
          pct: 50,
          text: '⚠️ **Bemærk:** Du er under 18 år. Voksen-BMI giver et misvisende billede af børns og unges kropsudvikling. Skift venligst til vor BMI-beregner for børn og unge for at få vurderet resultatet ud fra IsoBMI.'
        };
      }

      const model = this.models[modelKey] || this.models['who'];
      const res = model.evaluate(bmi, gender);

      return {
        isValid: true,
        mainValue: bmi.toFixed(1),
        subUnit: 'kg/m²',
        status: res.status,
        color: res.color,
        pct: res.pct,
        text: res.text,
        criteria: model.getCriteria(gender)
      };
    }
  },

  // 2. BMI FOR BØRN & UNGE (IsoBMI)
  'bmi-child': {
    id: 'bmi-child',
    name: 'BMI Beregner (Børn & Unge)',
    inputs: ['height', 'weight', 'age'],
    unit: 'IsoBMI',
    disclaimer: '⚠️ Forbehold: Børns BMI (IsoBMI) ændrer sig hurtigt med alderen. Evalueringen tager udgangspunkt i Sundhedsstyrelsens og IOTF\'s officielle alders- og kønsspecifikke grænseværdier (2–18 år).',
    getCriteria(age, gender) {
      const validAge = Math.min(Math.max(Math.round(age || 12), 2), 18);
      const childData = CHILD_ISOBMI_TABLE[validAge] || CHILD_ISOBMI_TABLE[18];
      const limits = gender === 'female' ? childData.female : childData.male;
      
      return [
        { limit: `< ${limits[0]}`, label: 'Normalvægtig / Slank', color: '#22c55e', min: 0, max: limits[0] - 0.01 },
        { limit: `${limits[0]} - ${limits[1]}`, label: 'Overvægtig (IsoBMI 25)', color: '#f97316', min: limits[0], max: limits[1] - 0.01 },
        { limit: `≥ ${limits[1]}`, label: 'Svært overvægtig (IsoBMI 30)', color: '#ef4444', min: limits[1], max: 999 }
      ];
    },
    evaluate(params) {
      const { height, weight, age, gender } = params;
      if (!height || !weight || !age || height <= 0 || weight <= 0) return { isValid: false };

      const heightM = height / 100;
      const bmi = weight / (heightM * heightM);

      // ALDERS-SJEK: Voksne over 18 år
      if (age > 18) {
        return {
          isValid: true,
          mainValue: bmi.toFixed(1),
          subUnit: 'BMI',
          status: 'Brug voksen-beregner',
          color: '#3b82f6',
          pct: 50,
          text: 'ℹ️ **Bemærk:** Du har angivet en alder over 18 år. Børne-BMI (IsoBMI) benyttes kun op til 18 år. Benyt venligst vor voksen-BMI beregner for det mest præcise resultat.'
        };
      }

      const validAge = Math.min(Math.max(Math.round(age), 2), 18);
      const childData = CHILD_ISOBMI_TABLE[validAge];
      const limits = gender === 'female' ? childData.female : childData.male;

      let status = 'Normalvægtig';
      let color = '#22c55e';
      let pct = 35;
      let text = `For en ${validAge}-årig ${gender === 'female' ? 'pige' : 'dreng'} indikerer et BMI på ${bmi.toFixed(1)} en sund og normal vægtudvikling (IsoBMI).`;

      if (bmi >= limits[1]) {
        status = 'Svært overvægtig'; color = '#ef4444'; pct = 90;
        text = `For en ${validAge}-årig ${gender === 'female' ? 'pige' : 'dreng'} svarer et BMI på ${bmi.toFixed(1)} til svær overvægt (IsoBMI 30+).`;
      } else if (bmi >= limits[0]) {
        status = 'Overvægtig'; color = '#f97316'; pct = 68;
        text = `For en ${validAge}-årig ${gender === 'female' ? 'pige' : 'dreng'} svarer et BMI på ${bmi.toFixed(1)} til overvægt (IsoBMI 25+).`;
      }

      return {
        isValid: true,
        mainValue: bmi.toFixed(1),
        subUnit: 'IsoBMI',
        status,
        color,
        pct,
        text,
        criteria: this.getCriteria(validAge, gender)
      };
    }
  }
};