// assets/js/core/aastrand-etpunktstest-health.js

export const AASTRAND_ETPUNKTSTEST_FORMULAS = {
  'aastrand-etpunktstest-all': {
    id: 'aastrand-etpunktstest-all',
    name: 'Åstrand 1-punkts Cykeltest (Buono et al., 1989)',

    evaluate(params) {
      const { gender = 'male', age = 0, weight = 0, watt = 0, hr = 0 } = params || {};

      const numAge = Number(age) || 0;
      const numWeight = Number(weight) || 0;
      const numWatt = Number(watt) || 0;
      const numHr = Number(hr) || 0;

      // Validering af basale input
      if (numAge <= 0 || numWeight <= 0 || numWatt <= 0 || numHr <= 0) {
        return { isValid: false };
      }

      // 1. Omregn Watt til kp*m/min (1 Watt = 6.12 kp*m/min jf. din standard)
      const workloadKpm = numWatt * 6.12;

      let uncorrectedVo2 = 0;

      // 2. Buono et al. (1989) - Ukorrigeret VO2max (L/min)
      if (gender === 'female') {
        const denominator = (0.769 * numHr) - 56.1;
        if (denominator <= 0) return { isValid: false };
        uncorrectedVo2 = ((0.00193 * workloadKpm + 0.326) / denominator) * 100;
      } else {
        const denominator = (0.769 * numHr) - 48.5;
        if (denominator <= 0) return { isValid: false };
        uncorrectedVo2 = ((0.00212 * workloadKpm + 0.299) / denominator) * 100;
      }

      // 3. Buono et al. (1989) - Alders- og vægtkorrektion (L/min)
      const correctedVo2 = (0.166 - 0.028 * numAge) + (0.026 * numWeight) + (0.66 * uncorrectedVo2);

      // 4. Kondital i ml/kg/min
      const fitnessLevel = (correctedVo2 / numWeight) * 1000;

      // Effektiv korrektionsfaktor til visning i UI (Forholdet ml. korrigeret og ukorrigeret)
      const effectiveAgeFactor = uncorrectedVo2 > 0 ? (correctedVo2 / uncorrectedVo2) : 1.0;

      return {
        isValid: true,
        gender,
        age: numAge,
        weight: numWeight,
        watt: numWatt,
        hr: numHr,
        uncorrectedVo2,
        correctedVo2,
        fitnessLevel,
        ageFactor: effectiveAgeFactor,
        isHrValid: numHr >= 120 && numHr <= 170
      };
    },

    calculate(params) {
      return this.evaluate(params);
    }
  }
};