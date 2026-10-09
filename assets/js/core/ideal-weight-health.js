// assets/js/core/ideal-weight-health.js

export const IDEAL_WEIGHT_FORMULAS = {

  'ideal-weight-all': {
    id: 'ideal-weight-all',
    name: 'Idealvægt Beregner',
    inputs: ['height', 'gender', 'frame', 'formulaKey', 'targetBmi'],
    unit: 'kg',
    disclaimer: '⚠️ Forbehold: Husk at idealvægten for mænd og kvinder kan variere med +/- 6 kg i forhold til din sundhed. Din kropsbygning og bredden af skelettet påvirker også idealvægten. De udregnede værdier er kun retningslinjer.',

    formulaMeta: {
      'auto': {
        name: 'Automatisk (Morten Zacho 2000)',
        year: 2000,
        needsBmi: false,
        comments: [
          '✨ **Automatisk valgt:** Morten Zachos fysiologiske model er valgt som den mest optimale faglige fallback.',
          '💡 Baseret på nyere dansk forskning i sammenhængen mellem BMI, sundhed og overlevelse.'
        ]
      },
      'zacho': {
        name: 'Morten Zacho (2000)',
        year: 2000,
        needsBmi: true,
        defaultBmiMale: 24.5,
        defaultBmiFemale: 22.5,
        comments: [
          '💡 Baseret på dansk fysiologisk forskning i optimal overlevelse og sundhed.',
          '🎯 Tager direkte udgangspunkt i det mest optimale BMI-spænd for mænd (24,5) og kvinder (22,5).'
        ]
      },
      'peterson': {
        name: 'Peterson et al. (2016)',
        year: 2016,
        needsBmi: true,
        defaultBmiMale: 22.0,
        defaultBmiFemale: 22.0,
        comments: [
          '🔬 Nyere international formel publiceret i PMC/NCBI (2016).',
          '📐 Udregnes ud fra en præcis sammenhæng mellem kropshøjde og dit ønskede Mål-BMI.'
        ]
      },
      'devine': {
        name: 'B. J. Devine (1974)',
        year: 1974,
        needsBmi: false,
        comments: [
          '🏥 Den mest udbredte kliniske formel på hospitaler til medicindosering.',
          '⚠️ Tager kun højde for kropshøjde over 152 cm og tager ikke højde for alder.'
        ]
      },
      'hamwi': {
        name: 'G. J. Hamwi (1964)',
        year: 1964,
        needsBmi: false,
        comments: [
          '📜 En af de ældste og mest kendte amerikanske tommelfingerregler.',
          '⚖️ Giver ofte lidt lavere idealvægte end nyere fysiologiske modeller.'
        ]
      },
      'robinson': {
        name: 'J. D. Robinson (1983)',
        year: 1983,
        needsBmi: false,
        comments: [
          '🛠️ En revideret udgave af Devine-formlen med justeret hældningskoefficient.',
          '📊 Særligt velegnet som mellemværdi for personer med gennemsnitlig kropsbygning.'
        ]
      },
      'miller': {
        name: 'D. R. Miller (1983)',
        year: 1983,
        needsBmi: false,
        comments: [
          '⚙️ Fysiologisk modifikation af Robinson- og Devine-formlerne.',
          '📈 Vægter højdetillægget lavere, hvilket gør den mere skånsom for høje personer.'
        ]
      }
    },

    evaluate(params) {
      const { height, gender = 'male', frame = 'medium', formulaKey = 'auto', targetBmi } = params;

      if (!height || height <= 0) return { isValid: false };

      // HAARD SPÆRRING FOR HØJDER UNDER 152 CM
      if (height < 152) {
        return {
          isValid: false,
          isTooShort: true,
          text: '⚠️ Idealvægt-formler er udviklet til voksne og kræver en højde på mindst **152 cm** (5 fod). For børn og unge under 18 år bør børne-BMI (IsoBMI) benyttes.'
        };
      }

      const isMale = gender === 'male';
      const hM = height / 100;
      const hInchesOver60 = height - 152;

      let frameFactor = 1.0;
      let frameLabel = 'Normalt skelet';
      if (frame === 'small') {
        frameFactor = 0.90;
        frameLabel = 'Smalt skelet (-10%)';
      } else if (frame === 'large') {
        frameFactor = 1.10;
        frameLabel = 'Bredt skelet (+10%)';
      }

      // Bestem aktiv formel (ved 'auto' bruges 'zacho')
      const activeKey = formulaKey === 'auto' ? 'zacho' : formulaKey;
      const meta = this.formulaMeta[formulaKey] || this.formulaMeta['auto'];

      // --- BEREGN ALLE FORMLER ---
      let rawResults = {};

      const zachoBmi = (activeKey === 'zacho' && targetBmi) ? targetBmi : (isMale ? 24.5 : 22.5);
      rawResults['zacho'] = (hM * hM) * zachoBmi;

      const petersonBmi = (activeKey === 'peterson' && targetBmi) ? targetBmi : 22.0;
      rawResults['peterson'] = (2.2 * petersonBmi) + (3.5 * petersonBmi * (hM - 1.5));

      rawResults['devine'] = isMale ? 50.0 + (0.91 * hInchesOver60) : 45.5 + (0.91 * hInchesOver60);
      rawResults['hamwi'] = isMale ? 48.0 + (1.06 * hInchesOver60) : 45.5 + (0.87 * hInchesOver60);
      rawResults['robinson'] = isMale ? 52.0 + (0.75 * hInchesOver60) : 49.0 + (0.67 * hInchesOver60);
      rawResults['miller'] = isMale ? 56.2 + (0.56 * hInchesOver60) : 53.1 + (0.54 * hInchesOver60);

      let sum = 0;
      let count = 0;
      let allAdjusted = {};
      let minAvg = Infinity;
      let maxAvg = -Infinity;

      Object.keys(rawResults).forEach(k => {
        const adj = rawResults[k] * frameFactor;
        allAdjusted[k] = adj;
        sum += adj;
        count++;

        if (adj < minAvg) minAvg = adj;
        if (adj > maxAvg) maxAvg = adj;
      });

      const averageWeight = sum / count;

      const primaryBase = rawResults[activeKey] || rawResults['zacho'];
      const primaryAdjusted = primaryBase * frameFactor;

      const stdDevMargin = 6.0;
      const minRange = Math.max(30, primaryAdjusted - stdDevMargin).toFixed(1);
      const maxRange = (primaryAdjusted + stdDevMargin).toFixed(1);

      return {
        isValid: true,
        height,
        gender,
        frame,
        frameLabel,
        formulaKey,
        activeKey,
        activeMeta: this.formulaMeta[activeKey],
        effectiveBmi: zachoBmi,
        mainValue: primaryAdjusted.toFixed(1),
        averageValue: averageWeight.toFixed(1),
        avgMinRange: minAvg.toFixed(1),
        avgMaxRange: maxAvg.toFixed(1),
        stdDevMargin: stdDevMargin.toFixed(1),
        rangeMin: minRange,
        rangeMax: maxRange,
        subUnit: 'kg',
        status: frameLabel,
        color: '#2563eb',
        comments: meta.comments,
        allAdjusted,
        rawResults
      };
    }
  }
};