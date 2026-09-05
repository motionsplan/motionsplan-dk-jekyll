// assets/js/core/power-zone-core.js

export const POWER_ZONE_MODELS = {
  // --- CYKLING MODELLER (🚴) ---
  coggan_7zone: {
    name: 'Andy Coggan 7-Zone (Standard)',
    sport: 'cycling',
    hasSweetSpot: true, // Sweet Spot er opfundet af Overton & Coggan
    formulaDesc: 'Guldstandarden i watt-træning til cykling skabt af Dr. Andy Coggan. Baseret på procenter af din FTP.',
    zones: [
      {
        name: 'Z1 – Aktiv Restitution',
        minPct: 0,
        maxPct: 55,
        rpe: 'RPE < 2',
        talkTest: 'Helt ubesværet samtale',
        timeInZone: 'Uendelig / Fri',
        color: '#0284c7',
        bgColor: '#f0f9ff',
        borderColor: '#bae6fd',
        textColor: '#0369a1',
        desc: 'Meget let tråd. Fremmer blodgennemstrømning og heling uden at opbygge træthed.',
        extendedDetails: 'Øger blodgennemstrømningen i musklerne, fjerner affaldsstoffer og tilfører næringsstoffer.'
      },
      {
        name: 'Z2 – Udholdenhed (Base)',
        minPct: 56,
        maxPct: 75,
        rpe: 'RPE 2–3',
        talkTest: 'Fuldt samtaletempo',
        timeInZone: '2 – 8 timer',
        color: '#10b981',
        bgColor: '#f0fdf4',
        borderColor: '#a7f3d0',
        textColor: '#065f46',
        desc: 'Klassisk Zone 2 aerob grundtræning. Maksimerer fedtforbrænding og mitokondrier.',
        extendedDetails: 'Øger mitokondrietætheden, fedtforbrændingen og kapillærnettet omkring muskelcellerne.'
      },
      {
        name: 'Z3 – Tempo',
        minPct: 76,
        maxPct: 90,
        rpe: 'RPE 4–5',
        talkTest: 'Korte kontrollerede sætninger',
        timeInZone: '30 min – 3 timer',
        color: '#f59e0b',
        bgColor: '#fffbeb',
        borderColor: '#fde68a',
        textColor: '#92400e',
        desc: 'Aktivt arbejdstempo. Øger kulhydratomsætning og udholdenhed ved høj fart.',
        extendedDetails: 'Forbedrer glukoseomsætning og tilvænner fast-twitch fibrene til udholdenhedsarbejde.'
      },
      {
        name: 'Z4 – Laktattærskel (FTP)',
        minPct: 91,
        maxPct: 105,
        rpe: 'RPE 6–7',
        talkTest: 'Kun enkelte ord ad gangen',
        timeInZone: '8 – 30 min intervaller',
        color: '#f97316',
        bgColor: '#fff7ed',
        borderColor: '#ffedd5',
        textColor: '#c2410c',
        desc: 'Lige omkring din 1-times max ydeevne (FTP). Løfter din anaerobe tærskel.',
        extendedDetails: 'Øger evnen til at omsætte og tolerere mælkesyre ved maksimal bæredygtig intensitet.'
      },
      {
        name: 'Z5 – VO2max',
        minPct: 106,
        maxPct: 120,
        rpe: 'RPE 8–9',
        talkTest: 'Kan overhovedet ikke tale',
        timeInZone: '3 – 8 min intervaller',
        color: '#ef4444',
        bgColor: '#fef2f2',
        borderColor: '#fecaca',
        textColor: '#991b1b',
        desc: 'Maksimal iltoptagelse. Hårde kardiologiske intervaller med stærk forpustelse.',
        extendedDetails: 'Udvider hjertets slagvolumen og presser den maksimale iltoptagelse til sin grænse.'
      },
      {
        name: 'Z6 – Anaerob Kapacitet',
        minPct: 121,
        maxPct: 150,
        rpe: 'RPE 9–10',
        talkTest: 'Forpustet / Hvæsende',
        timeInZone: '30 sek – 2 min',
        color: '#8b5cf6',
        bgColor: '#f5f3ff',
        borderColor: '#ddd6fe',
        textColor: '#6d28d9',
        desc: 'Korte, eksplosive ryk og bakkespurter. Opbygger kraftig mælkesyre.',
        extendedDetails: 'Udvikler den anaerobe glykolyse og muskulære tolerance over for høj syrekoncentration.'
      },
      {
        name: 'Z7 – Neuromuskulær Effekt',
        minPct: 151,
        maxPct: 250,
        rpe: 'RPE 10 Max',
        talkTest: 'Ingen vejrtrækning til ord',
        timeInZone: '5 – 20 sekunder',
        color: '#ec4899',
        bgColor: '#fdf2f8',
        borderColor: '#fbcfe8',
        textColor: '#be185d',
        desc: 'Ren maksimal eksplosiv styrke og spurt. Drevet af ATP-PCr depotet.',
        extendedDetails: 'Rekrutterer maksimale hurtige muskelfibre og træner nervesystemets fyringsfrekvens.'
      }
    ]
  },

  cts_carmichael: {
    name: 'Carmichael / CTS (6-Zone)',
    sport: 'cycling',
    hasSweetSpot: false,
    formulaDesc: 'Carmichael Training Systems (CTS) klassiske wattzoner, udbredt af Chris Carmichael.',
    zones: [
      { name: 'Recovery (RE)', minPct: 0, maxPct: 45, rpe: 'RPE < 2', talkTest: 'Ubesværet samtale', timeInZone: 'Uendelig', color: '#0284c7', bgColor: '#f0f9ff', borderColor: '#bae6fd', textColor: '#0369a1', desc: 'Aktiv hvile og opvarmning.' },
      { name: 'Endurance (EM)', minPct: 46, maxPct: 73, rpe: 'RPE 2–3', talkTest: 'Samtaletempo', timeInZone: '1 – 5 timer', color: '#10b981', bgColor: '#f0fdf4', borderColor: '#a7f3d0', textColor: '#065f46', desc: 'Basal udholdenhed og langpas.' },
      { name: 'Tempo (TM)', minPct: 74, maxPct: 85, rpe: 'RPE 4–5', talkTest: 'Korte sætninger', timeInZone: '30 – 90 min', color: '#f59e0b', bgColor: '#fffbeb', borderColor: '#fde68a', textColor: '#92400e', desc: 'Aktivt modstræbende tempotilvænning.' },
      { name: 'Steady State (SS)', minPct: 86, maxPct: 95, rpe: 'RPE 6–7', talkTest: 'Enkelte ord', timeInZone: '8 – 30 min', color: '#f97316', bgColor: '#fff7ed', borderColor: '#ffedd5', textColor: '#c2410c', desc: 'Tærskelnært arbejde lige under FTP.' },
      { name: 'Climbing Repeat (CR)', minPct: 96, maxPct: 100, rpe: 'RPE 8', talkTest: 'Meget forpustet', timeInZone: '6 – 12 min', color: '#ef4444', bgColor: '#fef2f2', borderColor: '#fecaca', textColor: '#991b1b', desc: 'Bakke- og stigningsintervaller ved tærskel.' },
      { name: 'Power Interval (PI)', minPct: 101, maxPct: 180, rpe: 'RPE 9–10', talkTest: 'Kan ikke tale', timeInZone: '30 sek – 3 min', color: '#8b5cf6', bgColor: '#f5f3ff', borderColor: '#ddd6fe', textColor: '#6d28d9', desc: 'Maksimalt intervalarbejde over FTP.' }
    ]
  },

  joe_friel_bike: {
    name: 'Joe Friel Cycling (7-Zone)',
    sport: 'cycling',
    hasSweetSpot: false,
    formulaDesc: 'Træneren Joe Friels 7-zone model til landevejscykling og triatlon.',
    zones: [
      { name: 'Z1 - Active Recovery', minPct: 0, maxPct: 55, rpe: 'RPE 1–2', talkTest: 'Fri samtale', timeInZone: 'Uendelig', color: '#0284c7', bgColor: '#f0f9ff', borderColor: '#bae6fd', textColor: '#0369a1', desc: 'Let opvarmning og restitution.' },
      { name: 'Z2 - Endurance', minPct: 56, maxPct: 74, rpe: 'RPE 3–4', talkTest: 'Ubesværet samtale', timeInZone: '1 – 6 timer', color: '#10b981', bgColor: '#f0fdf4', borderColor: '#a7f3d0', textColor: '#065f46', desc: 'Grundlæggende udholdenhed.' },
      { name: 'Z3 - Tempo', minPct: 75, maxPct: 89, rpe: 'RPE 5–6', talkTest: 'Korte sætninger', timeInZone: '45 – 120 min', color: '#f59e0b', bgColor: '#fffbeb', borderColor: '#fde68a', textColor: '#92400e', desc: 'Moderat anstrengende tempo.' },
      { name: 'Z4 - Threshold', minPct: 90, maxPct: 104, rpe: 'RPE 7–8', talkTest: 'Få ord', timeInZone: '10 – 40 min', color: '#f97316', bgColor: '#fff7ed', borderColor: '#ffedd5', textColor: '#c2410c', desc: 'Enkeltstart og laktattærskel.' },
      { name: 'Z5a - SuperThreshold', minPct: 105, maxPct: 110, rpe: 'RPE 8–9', talkTest: 'Kan næsten ikke tale', timeInZone: '5 – 15 min', color: '#ef4444', bgColor: '#fef2f2', borderColor: '#fecaca', textColor: '#991b1b', desc: 'Lidt over FTP.' },
      { name: 'Z5b - Aerobic Capacity', minPct: 111, maxPct: 120, rpe: 'RPE 9', talkTest: 'Ingen samtale', timeInZone: '3 – 6 min', color: '#8b5cf6', bgColor: '#f5f3ff', borderColor: '#ddd6fe', textColor: '#6d28d9', desc: 'VO2max-intervaller.' },
      { name: 'Z5c - Anaerobic Capacity', minPct: 121, maxPct: 200, rpe: 'RPE 10', talkTest: 'Max udmattelse', timeInZone: '< 2 min', color: '#ec4899', bgColor: '#fdf2f8', borderColor: '#fbcfe8', textColor: '#be185d', desc: 'Spurter og kortere ryk.' }
    ]
  },

  // --- LØBE-MODELLER (🏃 Running Power) ---
  stryd_run: {
    name: 'Stryd Running Power (5-Zone)',
    sport: 'running',
    hasSweetSpot: false,
    formulaDesc: 'Den officielle 5-zone wattmodel fra Stryd løbewattmåler baseret på din løbe-CP/FTP.',
    zones: [
      { name: 'Zone 1 – Easy / Restitution', minPct: 0, maxPct: 80, rpe: 'RPE 1–3', talkTest: 'Ubesværet samtale', timeInZone: '60 min – 3 timer', color: '#0284c7', bgColor: '#f0f9ff', borderColor: '#bae6fd', textColor: '#0369a1', desc: 'Let jog og aktiv restitution.' },
      { name: 'Zone 2 – Moderate / Udholdenhed', minPct: 81, maxPct: 90, rpe: 'RPE 4–5', talkTest: 'Uforstyrret samtale', timeInZone: '1 – 4 timer', color: '#10b981', bgColor: '#f0fdf4', borderColor: '#a7f3d0', textColor: '#065f46', desc: 'Aerobt grundløb og maraton pace.' },
      { name: 'Zone 3 – Threshold / Tærskel', minPct: 91, maxPct: 100, rpe: 'RPE 6–7', talkTest: 'Korte sætninger', timeInZone: '20 – 60 min', color: '#f59e0b', bgColor: '#fffbeb', borderColor: '#fde68a', textColor: '#92400e', desc: 'Laktattærskel og halvmaraton pace.' },
      { name: 'Zone 4 – Interval / VO2max', minPct: 101, maxPct: 115, rpe: 'RPE 8–9', talkTest: 'Enkelte ord', timeInZone: '3 – 10 min intervaller', color: '#f97316', bgColor: '#fff7ed', borderColor: '#ffedd5', textColor: '#c2410c', desc: 'Hårde VO2max løbeintervaller.' },
      { name: 'Zone 5 – Repetition / Anaerob', minPct: 116, maxPct: 150, rpe: 'RPE 10', talkTest: 'Kan ikke tale', timeInZone: '30 sek – 2 min', color: '#ef4444', bgColor: '#fef2f2', borderColor: '#fecaca', textColor: '#991b1b', desc: 'Korte bakkespurter og repetitionsløb.' }
    ]
  },

  fitzgerald_run_7zone: {
    name: '80/20 Running Power (7-Zone)',
    sport: 'running',
    hasSweetSpot: false,
    formulaDesc: 'Matt Fitzgeralds 80/20 løbe-wattzoner med opdeling i Zone 1, 2, X, Y, 3, 4 og 5.',
    zones: [
      { name: 'Zone 1 - Low Aerobic', minPct: 0, maxPct: 75, rpe: 'RPE 1–2', talkTest: 'Samtaletempo', timeInZone: '1 – 3 timer', color: '#0284c7', bgColor: '#f0f9ff', borderColor: '#bae6fd', textColor: '#0369a1', desc: 'Rolig opbygning.' },
      { name: 'Zone 2 - Moderate Aerobic', minPct: 76, maxPct: 88, rpe: 'RPE 3–4', talkTest: 'Let forpustet', timeInZone: '1 – 2.5 timer', color: '#10b981', bgColor: '#f0fdf4', borderColor: '#a7f3d0', textColor: '#065f46', desc: 'Standard udholdenhedsløb.' },
      { name: 'Zone X - Mixed / Grey Zone', minPct: 89, maxPct: 95, rpe: 'RPE 5', talkTest: 'Korte sætninger', timeInZone: '30 – 60 min', color: '#f59e0b', bgColor: '#fffbeb', borderColor: '#fde68a', textColor: '#92400e', desc: 'Mellem zone (undgås i ren 80/20).' },
      { name: 'Zone Y - Sub-Threshold', minPct: 96, maxPct: 100, rpe: 'RPE 6–7', talkTest: 'Få ord', timeInZone: '15 – 45 min', color: '#f97316', bgColor: '#fff7ed', borderColor: '#ffedd5', textColor: '#c2410c', desc: 'Tærskelnær løb.' },
      { name: 'Zone 3 - Threshold (rFTPw)', minPct: 101, maxPct: 105, rpe: 'RPE 8', talkTest: 'Meget forpustet', timeInZone: '8 – 25 min', color: '#ea580c', bgColor: '#fff7ed', borderColor: '#fdba74', textColor: '#9a3412', desc: 'Ren 1-times løbetærskel.' },
      { name: 'Zone 4 - VO2max', minPct: 106, maxPct: 115, rpe: 'RPE 9', talkTest: 'Ingen samtale', timeInZone: '2 – 6 min', color: '#ef4444', bgColor: '#fef2f2', borderColor: '#fecaca', textColor: '#991b1b', desc: 'Korte kardiologiske løbeintervaller.' },
      { name: 'Zone 5 - Anaerobic', minPct: 116, maxPct: 140, rpe: 'RPE 10', talkTest: 'Max spurt', timeInZone: '< 90 sek', color: '#8b5cf6', bgColor: '#f5f3ff', borderColor: '#ddd6fe', textColor: '#6d28d9', desc: 'Eksplosiv løbefart og bakkespurter.' }
    ]
  }
};

export function calculatePowerZones({ ftp, weight, modelKey }) {
  const model = POWER_ZONE_MODELS[modelKey] || POWER_ZONE_MODELS.coggan_7zone;
  const wattsPerKg = (ftp > 0 && weight > 0) ? (ftp / weight).toFixed(1) : null;

  const calculatedZones = model.zones.map(z => {
    let fromWatt = Math.round(ftp * (z.minPct / 100));
    let toWatt = Math.round(ftp * (z.maxPct / 100));

    if (z.minPct === 0) fromWatt = 0;

    return {
      name: z.name,
      minPct: z.minPct,
      maxPct: z.maxPct,
      fromWatt,
      toWatt,
      rpe: z.rpe || '',
      talkTest: z.talkTest || '',
      timeInZone: z.timeInZone || '',
      color: z.color,
      bgColor: z.bgColor || '#ffffff',
      borderColor: z.borderColor || '#e2e8f0',
      textColor: z.textColor || '#0f172a',
      desc: z.desc,
      extendedDetails: z.extendedDetails || ''
    };
  });

  const sweetSpot = {
    fromWatt: Math.round(ftp * 0.84),
    toWatt: Math.round(ftp * 0.97)
  };

  return {
    modelName: model.name,
    modelKey: modelKey,
    sport: model.sport || 'cycling',
    hasSweetSpot: !!model.hasSweetSpot,
    ftp,
    weight,
    wattsPerKg,
    sweetSpot,
    zones: calculatedZones
  };
}