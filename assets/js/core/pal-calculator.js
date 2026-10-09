// assets/js/core/pal-calculator-core.js

export const PAL_CALCULATOR_CORE = {
  /**
   * Beregner BMR/BEE via Mifflin-St Jeor formlen
   */
  calculateBmr({ sex = 'male', age = 40, weight = 70, height = 175 }) {
    const w = parseFloat(weight) || 70;
    const h = parseFloat(height) || 175;
    const a = parseFloat(age) || 40;

    if (sex === 'male') {
      return (10 * w) + (6.25 * h) - (5 * a) + 5;
    } else {
      return (10 * w) + (6.25 * h) - (5 * a) - 161;
    }
  },

  /**
   * Beregner PAL via NNR (Nordic Nutrition Recommendations)
   */
  calculateSimple({ basePal = 1.45, modHours = 0, vigHours = 0 }) {
    const bPal = parseFloat(basePal) || 1.45;
    const mHrs = parseFloat(modHours) || 0;
    const vHrs = parseFloat(vigHours) || 0;

    const extraPal = (mHrs * 0.025) + (vHrs * 0.05);
    const totalPal = bPal + extraPal;

    return {
      isValid: true,
      pal: Math.round(totalPal * 100) / 100,
      basePal: bPal,
      extraPal: Math.round(extraPal * 1000) / 1000
    };
  },

  /**
   * Beregner Standard MET PAL: TEE / BMR = sum(MET_i * min_i) / 1440
   */
  calculateStandardMet({ activities = [] }) {
    let totalMin = 0;
    let weightedMetSum = 0;

    activities.forEach(act => {
      const met = parseFloat(act.met) || 0;
      const min = parseFloat(act.min) || 0;
      totalMin += min;
      weightedMetSum += (met * min);
    });

    if (totalMin <= 0) return { isValid: false, totalMin: 0 };

    const rawPal = weightedMetSum / totalMin;

    return {
      isValid: true,
      pal: Math.round(rawPal * 100) / 100,
      rawPal,
      totalMin
    };
  },

  /**
   * Beregner Gerrior et al. (2006) BMR & Vægt-korrigeret PAL
   */
  calculateGerrior({ activities = [], sex = 'male', age = 40, weight = 70, height = 175 }) {
    const bw = parseFloat(weight) || 70;
    const bmrVal = this.calculateBmr({ sex, age, weight: bw, height });

    // REE baseline = 0.0175 kcal/kg/min * 1440 min * bw
    const reeFactor = 0.0175 * 1440 * bw; 
    const bmrRatio = bmrVal / reeFactor;

    if (bmrRatio <= 0) return { isValid: false };

    let sumGerriorDelta = 0;
    let totalMin = 0;

    activities.forEach(act => {
      const met = parseFloat(act.met) || 1;
      const min = parseFloat(act.min) || 0;
      totalMin += min;

      // Gerrior delta = ((MET - 1) * (1.15 / 0.9) * (min / 1440)) / bmrRatio
      const delta = ((met - 1) * (1.15 / 0.9) * (min / 1440)) / bmrRatio;
      sumGerriorDelta += delta;
    });

    const totalPal = 1.1 + sumGerriorDelta;

    return {
      isValid: true,
      pal: Math.round(totalPal * 100) / 100,
      bmrCalculated: Math.round(bmrVal),
      totalMin
    };
  },

  getPalCategory(pal) {
    if (pal < 1.35) {
      return {
        label: 'Sengeliggende / Meget inaktiv',
        desc: 'Sengeliggende eller næsten helt stillesiddende hverdag uden fysisk bevægelse.'
      };
    } else if (pal < 1.6) {
      return {
        label: 'Stillesiddende',
        desc: 'Kontorarbejde med minimal fysisk aktivitet i hverdagen og begrænset motion.'
      };
    } else if (pal < 1.8) {
      return {
        label: 'Moderat aktiv',
        desc: 'Stående/gående arbejde eller stillesiddende arbejde m. regelmæssig træning.'
      };
    } else if (pal < 2.0) {
      return {
        label: 'Aktiv livsstil',
        desc: 'Fysisk betonet erhverv eller stillesiddende job kombineret m. daglig hård motion.'
      };
    } else {
      return {
        label: 'Meget aktiv / Hårdt kropsarbejde',
        desc: 'Tungt manuelt kropsarbejde eller intensiv træning flere timer dagligt.'
      };
    }
  }
};