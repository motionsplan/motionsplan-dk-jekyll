// assets/js/core/waist-health.js

/**
 * WAIST_HEALTH_FORMULAS
 * Centralt katalog over talje- og kropsformsrelaterede beregninger,
 * WHO-grænseværdier og kriterier til vurderings-modals.
 */
export const WAIST_HEALTH_FORMULAS = {

  // 1. KUN TALJEMÅL (WHO)
  'waist-only': {
    id: 'waist-only',
    name: 'Taljemål (Visceral fedtrisiko)',
    inputs: ['waist'],
    unit: 'cm',
    disclaimer: '⚠️ Forbehold: Taljemål alene tager ikke højde for kropshøjde eller vægt, men er en stærk indikator for fedt omkring organerne (visceralt fedt).',
    criteria: {
      male: [
        { limit: '< 94 cm', label: 'Lav risiko', color: '#22c55e', min: 0, max: 93.99 },
        { limit: '94 - 101 cm', label: 'Øget risiko', color: '#f97316', min: 94, max: 101.99 },
        { limit: '≥ 102 cm', label: 'Væsentligt øget risiko', color: '#ef4444', min: 102, max: 999 }
      ],
      female: [
        { limit: '< 80 cm', label: 'Lav risiko', color: '#22c55e', min: 0, max: 79.99 },
        { limit: '80 - 87 cm', label: 'Øget risiko', color: '#f97316', min: 80, max: 87.99 },
        { limit: '≥ 88 cm', label: 'Væsentligt øget risiko', color: '#ef4444', min: 88, max: 999 }
      ]
    },
    evaluate(params) {
      const { gender, waist } = params;
      if (!waist || waist <= 0) return { isValid: false };

      const isMale = gender === 'male';
      let status = 'Lav risiko';
      let color = '#22c55e';
      let pct = 25;
      let text = isMale 
        ? 'Dit taljemål er under 94 cm, hvilket indikerer en sund mængde fedt omkring de indre organer.'
        : 'Dit taljemål er under 80 cm, hvilket indikerer en sund mængde fedt omkring de indre organer.';

      if (isMale) {
        if (waist >= 102) {
          status = 'Væsentligt øget risiko'; color = '#ef4444'; pct = 88;
          text = 'Et taljemål på 102 cm eller derover øger risikoen for hjerte-kar-sygdomme og type 2-diabetes markant.';
        } else if (waist >= 94) {
          status = 'Øget risiko'; color = '#f97316'; pct = 60;
          text = 'Et taljemål mellem 94 og 101 cm indikerer en øget mængde fedt omkring organerne (visceralt fedt).';
        }
      } else {
        if (waist >= 88) {
          status = 'Væsentligt øget risiko'; color = '#ef4444'; pct = 88;
          text = 'Et taljemål på 88 cm eller derover øger risikoen for hjerte-kar-sygdomme og type 2-diabetes markant.';
        } else if (waist >= 80) {
          status = 'Øget risiko'; color = '#f97316'; pct = 60;
          text = 'Et taljemål mellem 80 og 87 cm indikerer en øget mængde fedt omkring organerne (visceralt fedt).';
        }
      }

      return { isValid: true, mainValue: `${waist}`, subUnit: 'cm', status, color, pct, text };
    }
  },

  // 2. HOFTE-TALJE RATIO (WHR)
  'waist-hip': {
    id: 'waist-hip',
    name: 'Hofte-Talje Ratio (WHR)',
    inputs: ['waist', 'hip'],
    unit: 'ratio',
    disclaimer: '⚠️ Forbehold: WHR kan overestimere risiko hos personer med meget brede hofter eller stor muskelmasse i underkroppen.',
    criteria: {
      male: [
        { limit: '< 0.90', label: 'Lav risiko (Pære)', color: '#22c55e', min: 0, max: 0.899 },
        { limit: '0.90 - 0.99', label: 'Moderat risiko', color: '#f97316', min: 0.90, max: 0.999 },
        { limit: '≥ 1.00', label: 'Høj risiko (Æble)', color: '#ef4444', min: 1.0, max: 999 }
      ],
      female: [
        { limit: '< 0.80', label: 'Lav risiko (Pære)', color: '#22c55e', min: 0, max: 0.799 },
        { limit: '0.80 - 0.84', label: 'Moderat risiko', color: '#f97316', min: 0.80, max: 0.849 },
        { limit: '≥ 0.85', label: 'Høj risiko (Æble)', color: '#ef4444', min: 0.85, max: 999 }
      ]
    },
    evaluate(params) {
      const { gender, waist, hip } = params;
      if (!waist || !hip || waist <= 0 || hip <= 0) return { isValid: false };

      const ratio = waist / hip;
      const isMale = gender === 'male';
      let status = 'Lav risiko (Pæreform)';
      let color = '#22c55e';
      let pct = 25;
      let text = 'Din fedtfordeling er hensigtsmæssig med primær fedtsamling på hofter/lår (pæreform).';

      if (isMale) {
        if (ratio >= 1.0) {
          status = 'Høj risiko (Æbleform)'; color = '#ef4444'; pct = 88;
          text = 'En ratio på 1,0 eller over indikerer central fedtsamling omkring mave og organer (æbleform).';
        } else if (ratio >= 0.90) {
          status = 'Moderat risiko'; color = '#f97316'; pct = 60;
          text = 'En ratio mellem 0,90 og 0,99 ligger i overgangszonen til en mere uhensigtsmæssig fedtfordeling.';
        }
      } else {
        if (ratio >= 0.85) {
          status = 'Høj risiko (Æbleform)'; color = '#ef4444'; pct = 88;
          text = 'En ratio på 0,85 eller over indikerer central fedtsamling omkring mave og organer (æbleform).';
        } else if (ratio >= 0.80) {
          status = 'Moderat risiko'; color = '#f97316'; pct = 60;
          text = 'En ratio mellem 0,80 og 0,84 ligger i overgangszonen til en mere uhensigtsmæssig fedtfordeling.';
        }
      }

      return { isValid: true, mainValue: ratio.toFixed(2), subUnit: 'ratio', status, color, pct, text };
    }
  },

  // 3. HØJDE-TALJE RATIO (WHtR)
  'waist-height': {
    id: 'waist-height',
    name: 'Højde-Talje Ratio (WHtR)',
    inputs: ['waist', 'height'],
    unit: 'ratio',
    disclaimer: '⚠️ Forbehold: WHtR vurderer risiko afhængigt af højde, men kan være upræcis ved ekstrem muskelmasse. Vurdering baseret på Ashwells retningslinjer.',
    criteria: {
      both: [
        { limit: '< 0.40', label: 'Slank / Undervægtig', color: '#3b82f6', min: 0, max: 0.399 },
        { limit: '0.40 - 0.49', label: 'Ideel / Sund', color: '#22c55e', min: 0.40, max: 0.499 },
        { limit: '0.50 - 0.59', label: 'Øget risiko', color: '#f97316', min: 0.50, max: 0.599 },
        { limit: '≥ 0.60', label: 'Væsentligt øget risiko', color: '#ef4444', min: 0.60, max: 999 }
      ]
    },
    evaluate(params) {
      const { waist, height } = params;
      if (!waist || !height || waist <= 0 || height <= 0) return { isValid: false };

      const ratio = waist / height;
      let status = 'Ideel / Sund';
      let color = '#22c55e';
      let pct = 30;
      let text = 'Du overholder tommelfingerreglen: "Hold dit taljemål under halvdelen af din højde".';

      if (ratio >= 0.60) {
        status = 'Væsentligt øget risiko'; color = '#ef4444'; pct = 90;
        text = 'Et taljemål på over 60% af din højde indikerer en markant forhøjet mængde visceralt fedt.';
      } else if (ratio >= 0.50) {
        status = 'Øget risiko'; color = '#f97316'; pct = 65;
        text = 'Dine taljemål overstiger halvdelen af din højde. Det anbefales at reducere maveomkredsen.';
      } else if (ratio < 0.40) {
        status = 'Slank / Undervægtig'; color = '#3b82f6'; pct = 10;
        text = 'Dine taljemål er smalle i forhold til din højde.';
      }

      return { isValid: true, mainValue: ratio.toFixed(2), subUnit: 'ratio', status, color, pct, text };
    }
  },

  // 4. BODY ADIPOSITY INDEX (BAI)
  'bai': {
    id: 'bai',
    name: 'Body Adiposity Index (BAI)',
    inputs: ['hip', 'height'],
    unit: '%',
    disclaimer: '⚠️ Forbehold: BAI kræver ikke kropsvægt, men estimerer fedtprocent baseret på hoftens størrelse relativt til højden.',
    criteria: {
      male: [
        { limit: '< 8%', label: 'Meget lav fedtprocent', color: '#3b82f6', min: 0, max: 7.99 },
        { limit: '8 - 20%', label: 'Sund fedtprocent', color: '#22c55e', min: 8, max: 20.99 },
        { limit: '21 - 25%', label: 'Overvægt', color: '#f97316', min: 21, max: 25.99 },
        { limit: '≥ 26%', label: 'Svær overvægt', color: '#ef4444', min: 26, max: 999 }
      ],
      female: [
        { limit: '< 21%', label: 'Meget lav fedtprocent', color: '#3b82f6', min: 0, max: 20.99 },
        { limit: '21 - 32%', label: 'Sund fedtprocent', color: '#22c55e', min: 21, max: 32.99 },
        { limit: '33 - 38%', label: 'Overvægt', color: '#f97316', min: 33, max: 38.99 },
        { limit: '≥ 39%', label: 'Svær overvægt', color: '#ef4444', min: 39, max: 999 }
      ]
    },
    evaluate(params) {
      const { gender, hip, height } = params;
      if (!hip || !height || hip <= 0 || height <= 0) return { isValid: false };

      const heightInMeters = height / 100;
      const bai = (hip / Math.pow(heightInMeters, 1.5)) - 18;

      if (bai <= 0 || isNaN(bai)) return { isValid: false };

      const isMale = gender === 'male';
      let status = 'Sund / Normal fedtprocent';
      let color = '#22c55e';
      let pct = 35;
      let text = 'Dit BAI-tal indikerer en sund estimeret kropsfedtprocent i forhold til din højde og hofteomkreds.';

      if (isMale) {
        if (bai >= 26) {
          status = 'Svær overvægt'; color = '#ef4444'; pct = 88;
          text = 'Et BAI på 26% eller over for mænd indikerer en forhøjet fedtmasse.';
        } else if (bai >= 21) {
          status = 'Overvægt'; color = '#f97316'; pct = 65;
          text = 'Et BAI mellem 21% og 25% for mænd indikerer en moderat forhøjet fedtmasse.';
        } else if (bai < 8) {
          status = 'Meget lav fedtprocent'; color = '#3b82f6'; pct = 10;
          text = 'Et BAI under 8% for mænd svarer til en meget lav kropsfedtprocent.';
        }
      } else {
        if (bai >= 39) {
          status = 'Svær overvægt'; color = '#ef4444'; pct = 88;
          text = 'Et BAI på 39% eller over for kvinder indikerer en forhøjet fedtmasse.';
        } else if (bai >= 33) {
          status = 'Overvægt'; color = '#f97316'; pct = 65;
          text = 'Et BAI mellem 33% og 38% for kvinder indikerer en moderat forhøjet fedtmasse.';
        } else if (bai < 21) {
          status = 'Meget lav fedtprocent'; color = '#3b82f6'; pct = 10;
          text = 'Et BAI under 21% for kvinder svarer til en meget lav kropsfedtprocent.';
        }
      }

      return { isValid: true, mainValue: bai.toFixed(1), subUnit: '%', status, color, pct, text };
    }
  },

  // 5. SAMLET DASHBOARD (4-i-1)
  'waist-dashboard': {
    id: 'waist-dashboard',
    isDashboard: true,
    name: 'Talje & Kropsform Dashboard',
    inputs: ['waist', 'hip', 'height'],
    evaluate(params) {
      return {
        isValid: params.waist > 0 || params.hip > 0,
        results: {
          waistOnly: WAIST_HEALTH_FORMULAS['waist-only'].evaluate(params),
          waistHip: WAIST_HEALTH_FORMULAS['waist-hip'].evaluate(params),
          waistHeight: WAIST_HEALTH_FORMULAS['waist-height'].evaluate(params),
          bai: WAIST_HEALTH_FORMULAS['bai'].evaluate(params)
        }
      };
    }
  }
};