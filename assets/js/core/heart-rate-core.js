// assets/js/core/heart-rate-core.js

export const HEART_RATE_MODELS = {
  // --- 3-ZONE MODELLER ---
  three_zone_standard: {
    name: '3-Zone Standard (LT1 & LT2)',
    category: '3_zone',
    type: 'lthr',
    supportsLTHR: true,
    formulaDesc: 'Opdeler træningen direkte ud fra de fysiologiske tærskler LT1 (Aerob tærskel) og LT2 (Anaerob/Syretærskel).',
    zones: [
      {
        name: 'Zone 1 – Lav / Aerob',
        minPct: 60,
        maxPct: 80,
        rpe: 'RPE 5–6',
        rpeDesc: 'Ubesværet samtale',
        thresholdNote: 'Under LT1 (Aerob tærskel)',
        color: '#10b981',
        bgColor: '#f0fdf4',
        borderColor: '#a7f3d0',
        textColor: '#065f46',
        desc: 'Udholdenhedsture, lange rolige pas og restitution.',
        extendedDetails: '<strong>Formål:</strong> Opbygger kapillærtæthed, øger mitokondriemængden og træner kroppen i at bruge fedt som primær energikilde.<br><br><strong>Træningstype:</strong> Rolige ture, langpas og aktiv restitution.'
      },
      {
        name: 'Zone 2 – Moderat / Tærskel',
        minPct: 80,
        maxPct: 90,
        rpe: 'RPE 7–8',
        rpeDesc: 'Korte sætninger',
        thresholdNote: 'Mellem LT1 og LT2 / AT',
        color: '#f59e0b',
        bgColor: '#fffbeb',
        borderColor: '#fde68a',
        textColor: '#92400e',
        desc: 'Tempoløb, kontrollerede tærskelintervaller og maratontempo.',
        extendedDetails: '<strong>Formål:</strong> Løfter din anaerobe tærskel (LT2) og forbedrer din evne til at omsætte mælkesyre ved høj fart.<br><br><strong>Træningstype:</strong> Tempoløb, 3x10 min tærskelintervaller og marathon pace.'
      },
      {
        name: 'Zone 3 – Høj / Anaerob',
        minPct: 90,
        maxPct: 100,
        rpe: 'RPE 9–10',
        rpeDesc: 'Kan ikke tale',
        thresholdNote: 'Over LT2 / AT (Syretærskel)',
        color: '#ef4444',
        bgColor: '#fef2f2',
        borderColor: '#fecaca',
        textColor: '#991b1b',
        desc: 'VO2max-intervaller, bakkespurt og hård anaerob belastning.',
        extendedDetails: '<strong>Formål:</strong> Maksimerer din iltoptagelse (VO2max) og øger din tolerance over for høj mælkesyrekoncentration.<br><br><strong>Træningstype:</strong> 4x4 min intervaller, bakkespurter og kortere syrepas.'
      }
    ]
  },

  seiler_3zone: {
    name: 'Stephen Seiler (Polariseret 80/20)',
    category: '3_zone',
    type: 'lthr',
    supportsLTHR: true,
    formulaDesc: 'Den videnskabelige model for 80/20 polariseret træning. Låst til skæringspunkterne ved LT1 og LT2.',
    zones: [
      {
        name: 'Zone 1 – Grøn (Lav)',
        minPct: 60,
        maxPct: 80,
        rpe: 'RPE 4–6',
        rpeDesc: 'Samtaletempo',
        thresholdNote: '< LT1 (80% af al din træning)',
        color: '#10b981',
        bgColor: '#f0fdf4',
        borderColor: '#a7f3d0',
        textColor: '#065f46',
        desc: 'Aerob base og udholdenhed. Minimal syreopbygning.',
        extendedDetails: 'I Seilers polariserede model foregår størstedelen (ca. 80%) af din samlede træningstid her for at undgå overbelastning af nervesystemet.'
      },
      {
        name: 'Zone 2 – Gul (Den grå zone)',
        minPct: 80,
        maxPct: 90,
        rpe: 'RPE 7–8',
        rpeDesc: 'Lidt forpustet',
        thresholdNote: 'Mellem LT1 og LT2 (Undgås ofte i 80/20)',
        color: '#f59e0b',
        bgColor: '#fffbeb',
        borderColor: '#fde68a',
        textColor: '#92400e',
        desc: 'Tærskelzone. Krævende for restitutionsbudgettet.',
        extendedDetails: 'Kaldes ofte "no man\'s land" i ren polariseret træning, fordi intensiteten giver høj træthed uden at give de maksimale adaptationer som Zone 3.'
      },
      {
        name: 'Zone 3 – Rød (Høj)',
        minPct: 90,
        maxPct: 100,
        rpe: 'RPE 9–10',
        rpeDesc: 'Meget forpustet',
        thresholdNote: '> LT2 (20% af din træning)',
        color: '#ef4444',
        bgColor: '#fef2f2',
        borderColor: '#fecaca',
        textColor: '#991b1b',
        desc: 'Hård intervaltræning og konkurrencefart.',
        extendedDetails: 'Her ligger dine hårde ugentlige intervalpas (ca. 20% af træningen), som presser kredsløbet til det maksimale.'
      }
    ]
  },

  // --- 7-ZONE MODELLER ---
  joe_friel_7zone: {
    name: 'Joe Friel (7-Zone Laktattærskel / LTHR)',
    category: '7_zone',
    type: 'lthr',
    requiresLTHR: true,
    supportsLTHR: true,
    formulaDesc: 'Friels udvidede 7-zone model til cykling og triatlon. Opdeler zone 5 i super-tærskel, aerob kapacitet og anaerob effekt.',
    zones: [
      { name: 'Zone 1 - Aktiv Restitution', minPct: 60, maxPct: 75, useLTHR: true, rpe: 'RPE 1–2', rpeDesc: 'Meget let', color: '#0284c7', bgColor: '#f0f9ff', borderColor: '#bae6fd', textColor: '#0369a1', desc: 'Restitutionsture og let opvarmning.', extendedDetails: 'Holdes under 75% af LTHR. Skylle affaldsstoffer ud og fremme heling.' },
      { name: 'Zone 2 - Udholdenhed', minPct: 75, maxPct: 85, useLTHR: true, rpe: 'RPE 3–4', rpeDesc: 'Aerob base', color: '#10b981', bgColor: '#f0fdf4', borderColor: '#a7f3d0', textColor: '#065f46', desc: 'Aerob grundtræning og lange ture.', extendedDetails: 'Vigtigste zone til at bygge udholdenhed og kapillærnet.' },
      { name: 'Zone 3 - Tempo', minPct: 85, maxPct: 90, useLTHR: true, rpe: 'RPE 5–6', rpeDesc: 'Moderat tempo', color: '#f59e0b', bgColor: '#fffbeb', borderColor: '#fde68a', textColor: '#92400e', desc: 'Aerobt tempotræning og mellemlange pas.', extendedDetails: 'Anstrengende, men kontrolleret. Typisk halvmaraton og maraton pace.' },
      { name: 'Zone 4 - Sub-Tærskel / Sweetspot', minPct: 90, maxPct: 95, useLTHR: true, rpe: 'RPE 7', rpeDesc: 'Anstrengende', color: '#f97316', bgColor: '#fff7ed', borderColor: '#ffedd5', textColor: '#c2410c', desc: 'Sub-tærskel. Høj aerob effekt med moderat mælkesyre.', extendedDetails: 'Lige under tærsklen. Giver høj træningseffekt med overkommelig restitutionstid.' },
      { name: 'Zone 5a - Tærskel (LTHR)', minPct: 95, maxPct: 102, useLTHR: true, rpe: 'RPE 8', rpeDesc: 'Tærskelfart', color: '#ea580c', bgColor: '#fff7ed', borderColor: '#fdba74', textColor: '#9a3412', desc: 'Laktattærskel / Enkeltstartstempo.', extendedDetails: 'Omkring din reelle 1-times tærskelpuls. Træner syretolerance.' },
      { name: 'Zone 5b - Super-Tærskel (VO2max)', minPct: 102, maxPct: 106, useLTHR: true, rpe: 'RPE 9', rpeDesc: 'Hårdt interval', color: '#ef4444', bgColor: '#fef2f2', borderColor: '#fecaca', textColor: '#991b1b', desc: 'Intervaller over tærskel for iltoptagelse.', extendedDetails: 'Intensiv intervaltræning (f.eks. 3–5 minutter) over din bæredygtige tærskel.' },
      { name: 'Zone 5c - Anaerob Kapacitet', minPct: 106, maxPct: 120, useLTHR: true, rpe: 'RPE 10', rpeDesc: 'Maksimal spurt', color: '#b91c1c', bgColor: '#fef2f2', borderColor: '#fca5a5', textColor: '#7f1d1d', desc: 'Korte anaerobe ryk og bakkespurter.', extendedDetails: 'Maksimal indsats af 30 til 90 sekunders varighed.' }
    ]
  },

  // --- 5-ZONE MODELLER ---
  joe_friel: {
    name: 'Joe Friel (5-Zone Laktattærskel / LTHR)',
    category: '5_zone',
    type: 'lthr',
    requiresLTHR: true,
    supportsLTHR: true,
    formulaDesc: 'Standard 5-zone tærskelmodel for cykelryttere og triatleter baseret på din målte tærskelpuls (LTHR).',
    zones: [
      { name: 'Zone 1 - Restitution', minPct: 60, maxPct: 75, useLTHR: true, rpe: 'RPE 2–3', rpeDesc: 'Let hvile', color: '#0284c7', bgColor: '#f0f9ff', borderColor: '#bae6fd', textColor: '#0369a1', desc: 'Restitutionsture og opvarmning.', extendedDetails: 'Holdes under 75% af LTHR. Bruges til at skylle affaldsstoffer ud og fremme heling.' },
      { name: 'Zone 2 - Udholdenhed', minPct: 75, maxPct: 85, useLTHR: true, rpe: 'RPE 4–5', rpeDesc: 'Aerob base', color: '#10b981', bgColor: '#f0fdf4', borderColor: '#a7f3d0', textColor: '#065f46', desc: 'Aerob grundtræning og lange ture.', extendedDetails: 'Den vigtigste zone til at bygge udholdenhed. Kan fastholdes i flere timer ad gangen.' },
      { name: 'Zone 3 - Tempo', minPct: 85, maxPct: 95, useLTHR: true, rpe: 'RPE 6–7', rpeDesc: 'Moderat tempo', color: '#f59e0b', bgColor: '#fffbeb', borderColor: '#fde68a', textColor: '#92400e', desc: 'Aerobt tempotræning.', extendedDetails: 'Anstrengende, men kontrolleret tempo. Svarer ofte til halvmaraton eller marathon pace.' },
      { name: 'Zone 4 - Tærskel', minPct: 95, maxPct: 102, useLTHR: true, rpe: 'RPE 8', rpeDesc: 'Tærskelfart', color: '#f97316', bgColor: '#fff7ed', borderColor: '#ffedd5', textColor: '#c2410c', desc: 'Laktattærskel / Enkeltstartstempo.', extendedDetails: 'Ligger lige omkring din reelle tærskelpuls (95-102%). Træner syretolerance.' },
      { name: 'Zone 5 - Super Tærskel / VO2max', minPct: 102, maxPct: 106, useLTHR: true, rpe: 'RPE 9–10', rpeDesc: 'Over tærskel', color: '#ef4444', bgColor: '#fef2f2', borderColor: '#fecaca', textColor: '#991b1b', desc: 'Lidt over tærskel, kortere intervaller.', extendedDetails: 'Intensiv intervaltræning (f.eks. 3-5 minutter) over din bæredygtige tærskel.' }
    ]
  },

  coggan_lthr: {
    name: 'Andy Coggan (Laktattærskel / LTHR)',
    category: '5_zone',
    type: 'lthr',
    requiresLTHR: true,
    supportsLTHR: true,
    formulaDesc: 'Klassisk watt- og pulszoneopdeling skabt af Dr. Andy Coggan. Baseres på procenter af din tærskelpuls (LTHR).',
    zones: [
      { name: 'Z1 - Aktiv Restitution', minPct: 50, maxPct: 68, useLTHR: true, rpe: 'RPE 1–2', rpeDesc: 'Meget let', color: '#0284c7', bgColor: '#f0f9ff', borderColor: '#bae6fd', textColor: '#0369a1', desc: 'Aktiv restitution og let opvarmning.', extendedDetails: 'Masser af ilt, minimal mælkesyre. Fremmer blodgennemstrømning og restitution.' },
      { name: 'Z2 - Udholdenhed', minPct: 69, maxPct: 83, useLTHR: true, rpe: 'RPE 3–4', rpeDesc: 'Ubesværet', color: '#10b981', bgColor: '#f0fdf4', borderColor: '#a7f3d0', textColor: '#065f46', desc: 'Grundlæggende aerob udholdenhedstræning.', extendedDetails: 'Standard udholdenhedszone i Coggans system. Kan opretholdes i flere timer.' },
      { name: 'Z3 - Tempo', minPct: 84, maxPct: 94, useLTHR: true, rpe: 'RPE 5–6', rpeDesc: 'Moderat', color: '#f59e0b', bgColor: '#fffbeb', borderColor: '#fde68a', textColor: '#92400e', desc: 'Aerob tempotilvænning og mellemlange pas.', extendedDetails: 'Sub-tærskel belastning. Kræver mental fokus og kulhydratomsætning.' },
      { name: 'Z4 - Tærskel (LTHR)', minPct: 95, maxPct: 105, useLTHR: true, rpe: 'RPE 7–8', rpeDesc: 'Anstrengende', color: '#f97316', bgColor: '#fff7ed', borderColor: '#ffedd5', textColor: '#c2410c', desc: 'Syretærskel og enkeltstartsintensitet.', extendedDetails: 'Træning tæt på din 1-times tærskelpuls (LTHR). Løfter din maksimale bæredygtige fysiologiske ydeevne.' },
      { name: 'Z5 - VO2max', minPct: 106, maxPct: 120, useLTHR: true, rpe: 'RPE 9–10', rpeDesc: 'Maksimal', color: '#ef4444', bgColor: '#fef2f2', borderColor: '#fecaca', textColor: '#991b1b', desc: 'Korte kardiologiske HIIT-intervaller.', extendedDetails: 'Zone for maksimal iltoptagelse. Typisk intervaller fra 3 til 8 minutter.' }
    ]
  },

  karvonen: {
    name: 'Karvonen (Pulsreserve / % HRR)',
    category: '5_zone',
    type: 'hrr',
    requiresRestHR: true,
    requiresMaxHR: true,
    formulaDesc: 'Inddrager din hvilepuls for at give personligt tilpassede zoner. Ekstremt præcis for både veltrænede og utrænede.',
    zones: [
      { name: 'Restitution (Z1)', minPct: 50, maxPct: 60, rpe: 'RPE 2–3', rpeDesc: 'Meget let', color: '#0284c7', bgColor: '#f0f9ff', borderColor: '#bae6fd', textColor: '#0369a1', desc: 'Meget let aktivitet. Fremmer blodcirkulation og restitution.', extendedDetails: 'Submaksimal belastning der genopbygger depoter og løsner op i ømme muskler.' },
      { name: 'Udholdenhed (Z2)', minPct: 60, maxPct: 70, rpe: 'RPE 4–5', rpeDesc: 'Samtaletempo', color: '#10b981', bgColor: '#f0fdf4', borderColor: '#a7f3d0', textColor: '#065f46', desc: 'Basis udholdenhed og maksimal fedtforbrænding.', extendedDetails: 'Klassisk Zone 2 cardio. Løfter den grundlæggende iltoptagelse uden at belaste kroppen hårdt.' },
      { name: 'Tempo (Z3)', minPct: 70, maxPct: 80, rpe: 'RPE 6–7', rpeDesc: 'Moderat', color: '#f59e0b', bgColor: '#fffbeb', borderColor: '#fde68a', textColor: '#92400e', desc: 'Aerob kapacitet. Moderat anstrengende tempotræning.', extendedDetails: 'Øger hjertets slagvolumen og tilvænner kroppen til højere fart over længere tid.' },
      { name: 'Anaerob Tærskel (Z4)', minPct: 80, maxPct: 90, rpe: 'RPE 8', rpeDesc: 'Korte sætninger', color: '#f97316', bgColor: '#fff7ed', borderColor: '#ffedd5', textColor: '#c2410c', desc: 'Syretærskel. Øger tolerance for mælkesyre og farten.', extendedDetails: 'Laktat-akkumuleringen stiger. Forbedrer din evne til at holde en stærk konkurrencefart.' },
      { name: 'VO2max (Z5)', minPct: 90, maxPct: 100, rpe: 'RPE 9–10', rpeDesc: 'Maksimal', color: '#ef4444', bgColor: '#fef2f2', borderColor: '#fecaca', textColor: '#991b1b', desc: 'Maksimal iltoptagelse. Hårde kortvarige intervaller.', extendedDetails: 'Presser kredsløbet til dets absolutte grænse. Bruges til korte dybe intervaller.' }
    ]
  },

  garmin_standard: {
    name: 'Garmin / Polar Standard (% HRmax)',
    category: '5_zone',
    type: 'hrmax',
    formulaDesc: 'Den mest udbredte standard-model i sportsure. Baseres på procenter af din maxpuls (50-60-70-80-90-100%).',
    zones: [
      { name: 'Zone 1 - Meget Let', minPct: 50, maxPct: 60, rpe: 'RPE 1–3', rpeDesc: 'Meget let', color: '#0284c7', bgColor: '#f0f9ff', borderColor: '#bae6fd', textColor: '#0369a1', desc: 'Restitution og opvarmning.', extendedDetails: 'Standard restitution på Garmin/Polar ure.' },
      { name: 'Zone 2 - Let / Base', minPct: 60, maxPct: 70, rpe: 'RPE 4–5', rpeDesc: 'Samtaletempo', color: '#10b981', bgColor: '#f0fdf4', borderColor: '#a7f3d0', textColor: '#065f46', desc: 'Opbygger grundform og forbrænder fedt.', extendedDetails: 'Aerob grundtræning på dit sportsur.' },
      { name: 'Zone 3 - Moderat', minPct: 70, maxPct: 80, rpe: 'RPE 6–7', rpeDesc: 'Moderat', color: '#f59e0b', bgColor: '#fffbeb', borderColor: '#fde68a', textColor: '#92400e', desc: 'Forbedrer den aerobe kapacitet.', extendedDetails: 'Moderat tempo og mellemlange ture.' },
      { name: 'Zone 4 - Hård', minPct: 80, maxPct: 90, rpe: 'RPE 8', rpeDesc: 'Anstrengende', color: '#f97316', bgColor: '#fff7ed', borderColor: '#ffedd5', textColor: '#c2410c', desc: 'Øger udholdenhed ved høj fart.', extendedDetails: 'Tærskelnær træning og konkurrencetempo.' },
      { name: 'Zone 5 - Maksimal', minPct: 90, maxPct: 100, rpe: 'RPE 9–10', rpeDesc: 'Maksimal', color: '#ef4444', bgColor: '#fef2f2', borderColor: '#fecaca', textColor: '#991b1b', desc: 'Maksimal indsats for fart og sprint.', extendedDetails: 'Anaerob topzone for maksimal udmattelse.' }
    ]
  },

  olt_norsk: {
    name: 'Norsk Olympiatoppen (OLT 5-Zone)',
    category: '5_zone',
    type: 'hrmax',
    formulaDesc: 'Udviklet af den norske elitesportsorganisation. Meget populær i skandinavisk langrend, cykling og løb.',
    zones: [
      { name: 'Z1 - Lav / Restitution', minPct: 60, maxPct: 72, rpe: 'RPE 2–3', rpeDesc: 'Meget let', color: '#0284c7', bgColor: '#f0f9ff', borderColor: '#bae6fd', textColor: '#0369a1', desc: 'Rolig restitution og lette opvarmningsture.', extendedDetails: 'Meget rolig træning i Olympiatoppens system.' },
      { name: 'Z2 - Moderat Udholdenhed', minPct: 72, maxPct: 82, rpe: 'RPE 4–5', rpeDesc: 'Ubesværet', color: '#10b981', bgColor: '#f0fdf4', borderColor: '#a7f3d0', textColor: '#065f46', desc: 'Aerob base. Lange ture og grundlæggende udholdenhed.', extendedDetails: 'Norsk langdistanzone for opbygning af volumen.' },
      { name: 'Z3 - Intensiv Udholdenhed', minPct: 82, maxPct: 87, rpe: 'RPE 6–7', rpeDesc: 'Moderat forpustet', color: '#f59e0b', bgColor: '#fffbeb', borderColor: '#fde68a', textColor: '#92400e', desc: 'Aerob tærskel. Maratontempo og langt tempo.', extendedDetails: 'Kontrolleret intensiv udholdenhed.' },
      { name: 'Z4 - Anaerob Tærskel', minPct: 87, maxPct: 92, rpe: 'RPE 8', rpeDesc: 'Korte sætninger', color: '#f97316', bgColor: '#fff7ed', borderColor: '#ffedd5', textColor: '#c2410c', desc: 'Syretærskel / Konkurrencepace (10k til halvmaraton).', extendedDetails: 'Klassisk norsk tærskelintervallag.' },
      { name: 'Z5 - VO2max / Høj', minPct: 92, maxPct: 100, rpe: 'RPE 9–10', rpeDesc: 'Maksimal', color: '#ef4444', bgColor: '#fef2f2', borderColor: '#fecaca', textColor: '#991b1b', desc: 'Korte intervaller for maksimal iltoptagelse.', extendedDetails: 'Højeste norske intensitetszone.' }
    ]
  },

  daniels: {
    name: 'Jack Daniels Running Formula (% HRmax)',
    category: '5_zone',
    type: 'hrmax',
    formulaDesc: 'Skabt af den legendariske løbecoach Jack Daniels. Opdelt efter specifikke trænertempoer (E, M, T, I, R).',
    zones: [
      { name: 'E-Løb / Restitution (Z1)', minPct: 65, maxPct: 70, rpe: 'RPE 2–3', rpeDesc: 'Easy pace', color: '#0284c7', bgColor: '#f0f9ff', borderColor: '#bae6fd', textColor: '#0369a1', desc: 'Easy pace. Genopbygning og let basalt løb.', extendedDetails: 'Lave stød på leddene, fremmer blodtilførslen.' },
      { name: 'M-Løb / Udholdenhed (Z2)', minPct: 70, maxPct: 80, rpe: 'RPE 4–5', rpeDesc: 'Maraton pace', color: '#10b981', bgColor: '#f0fdf4', borderColor: '#a7f3d0', textColor: '#065f46', desc: 'Marathon pace. Opbygger aerob udholdenhed.', extendedDetails: 'Specifikt tilvænningstempo for langdistance.' },
      { name: 'T-Løb / Tempo (Z3)', minPct: 80, maxPct: 88, rpe: 'RPE 6–7', rpeDesc: 'Threshold pace', color: '#f59e0b', bgColor: '#fffbeb', borderColor: '#fde68a', textColor: '#92400e', desc: 'Threshold pace. Løb ved syretærsklen.', extendedDetails: 'Løb der kan opretholdes i ca. 60 minutter i konkurrence.' },
      { name: 'I-Løb / Tærskel (Z4)', minPct: 88, maxPct: 94, rpe: 'RPE 8–9', rpeDesc: 'Interval pace', color: '#f97316', bgColor: '#fff7ed', borderColor: '#ffedd5', textColor: '#c2410c', desc: 'Interval pace. Forbedrer VO2max.', extendedDetails: 'Klassiske 3-5 minutters VO2max intervaller.' },
      { name: 'R-Løb / Repetition (Z5)', minPct: 94, maxPct: 100, rpe: 'RPE 10', rpeDesc: 'Repetition pace', color: '#ef4444', bgColor: '#fef2f2', borderColor: '#fecaca', textColor: '#991b1b', desc: 'Repetition pace. Kortvarig anaerob fart.', extendedDetails: 'Korte bakkespurter og repetitionsløb med lange pauser.' }
    ]
  },

  tri_alliance: {
    name: 'Tri-Alliance (% HRmax)',
    category: '5_zone',
    type: 'hrmax',
    formulaDesc: 'Meget anvendt i triatlon-miljøer til strukturering af svømme-, cykel- og løbepas.',
    zones: [
      { name: 'T1 - Recovery', minPct: 55, maxPct: 65, rpe: 'RPE 2–3', rpeDesc: 'Very Easy', color: '#0284c7', bgColor: '#f0f9ff', borderColor: '#bae6fd', textColor: '#0369a1', desc: 'Aktiv restitution og let kredsløbsstimulation.', extendedDetails: 'Triatlon restitutionsture.' },
      { name: 'T2 - Base Endurance', minPct: 65, maxPct: 75, rpe: 'RPE 4–5', rpeDesc: 'Easy / Base', color: '#10b981', bgColor: '#f0fdf4', borderColor: '#a7f3d0', textColor: '#065f46', desc: 'Grundlæggende udholdenhed og kapillærnet.', extendedDetails: 'Base-opbygning til lange triatlon-distancer.' },
      { name: 'T3 - Intensive Endurance', minPct: 75, maxPct: 85, rpe: 'RPE 6–7', rpeDesc: 'Moderate', color: '#f59e0b', bgColor: '#fffbeb', borderColor: '#fde68a', textColor: '#92400e', desc: 'Intensiv udholdenhed og tempo.', extendedDetails: 'Halv-ironman og olympisk distancetempo.' },
      { name: 'T4 - Threshold', minPct: 85, maxPct: 95, rpe: 'RPE 8', rpeDesc: 'Hard', color: '#f97316', bgColor: '#fff7ed', borderColor: '#ffedd5', textColor: '#c2410c', desc: 'Laktattærskel. Øger mælkesyretolerance.', extendedDetails: 'Sprint-triatlon pace og tærskeltræning.' },
      { name: 'T5 - Anaerobic', minPct: 95, maxPct: 100, rpe: 'RPE 9–10', rpeDesc: 'Very Hard', color: '#ef4444', bgColor: '#fef2f2', borderColor: '#fecaca', textColor: '#991b1b', desc: 'Anaerob effekt og kortere intervaller.', extendedDetails: 'Korte maksimale ryk.' }
    ]
  }
};

export function getAutoRecommendedFormulaKey({ zoneStructure, inputMode, hasHrRest, hasLthr }) {
  if (inputMode === 'lthr' || hasLthr) {
    if (zoneStructure === '3_zone') {
      return 'three_zone_standard';
    }
    return 'joe_friel_7zone';
  }

  if (zoneStructure === '3_zone') {
    return 'three_zone_standard';
  }

  if (inputMode === 'hrr' || hasHrRest) {
    return 'karvonen';
  }

  return 'garmin_standard';
}

export function calculateHeartRateZones({ hrMax, hrRest, lthr, lt1, modelKey, inputMode }) {
  const model = HEART_RATE_MODELS[modelKey] || HEART_RATE_MODELS.three_zone_standard;
  const hrr = (hrMax && hrRest) ? (hrMax - hrRest) : 0;

  const is3Zone = model.category === '3_zone';
  const isLthrMode = inputMode === 'lthr' || (lthr > 0 && model.type === 'lthr');

  // HVIS MAN BRUGER 3-ZONE MED TÆRSKELPULS (LTHR/LT2)
  const effectiveLT2 = lthr > 0 ? lthr : (hrMax > 0 ? Math.round(hrMax * 0.90) : 168);
  const effectiveLT1 = lt1 > 0 ? lt1 : Math.round(effectiveLT2 * 0.85); // Estimerer LT1 hvis udefineret

  const calculatedZones = model.zones.map((z, idx) => {
    let fromHR = 0;
    let toHR = 0;
    let customNote = z.thresholdNote;

    if (is3Zone && isLthrMode) {
      if (idx === 0) { // Zone 1
        fromHR = Math.round(effectiveLT1 * 0.70);
        toHR = effectiveLT1;
        customNote = lt1 > 0 ? `Under din målespecifikke LT1 (${effectiveLT1} bpm)` : `Under estimeret LT1 (~${effectiveLT1} bpm)`;
      } else if (idx === 1) { // Zone 2
        fromHR = effectiveLT1;
        toHR = effectiveLT2;
        customNote = `Mellem LT1 (${effectiveLT1} bpm) og LT2 (${effectiveLT2} bpm)`;
      } else if (idx === 2) { // Zone 3
        fromHR = effectiveLT2;
        toHR = hrMax > 0 ? hrMax : Math.round(effectiveLT2 * 1.15);
        customNote = `Over din syretærskel LT2 (${effectiveLT2} bpm)`;
      }
    } else if (modelKey === 'karvonen' && hrr > 0) {
      fromHR = Math.round(hrRest + (hrr * (z.minPct / 100)));
      toHR = Math.round(hrRest + (hrr * (z.maxPct / 100)));
    } else if (z.useLTHR && effectiveLT2 > 0) {
      fromHR = Math.round(effectiveLT2 * (z.minPct / 100));
      toHR = Math.round(effectiveLT2 * (z.maxPct / 100));
      if (toHR > hrMax && hrMax > 0) toHR = hrMax;
    } else if (hrMax > 0) {
      fromHR = Math.round(hrMax * (z.minPct / 100));
      toHR = Math.round(hrMax * (z.maxPct / 100));
    }

    return {
      name: z.name,
      minPct: z.minPct,
      maxPct: z.maxPct,
      fromHR,
      toHR,
      rpe: z.rpe || '',
      rpeDesc: z.rpeDesc || '',
      thresholdNote: customNote || '',
      color: z.color,
      bgColor: z.bgColor || '#ffffff',
      borderColor: z.borderColor || '#e2e8f0',
      textColor: z.textColor || '#0f172a',
      desc: z.desc,
      extendedDetails: z.extendedDetails || ''
    };
  });

  return {
    modelName: model.name,
    modelKey: modelKey,
    modelType: model.type || 'hrmax',
    hasExactBothThresholds: is3Zone && isLthrMode && lt1 > 0 && lthr > 0,
    requiresHRR: modelKey === 'karvonen',
    hrr,
    zones: calculatedZones
  };
}