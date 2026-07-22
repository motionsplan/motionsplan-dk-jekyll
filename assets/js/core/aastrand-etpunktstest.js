// assets/js/core/aastrand-etpunktstest-health.js

const ASTRAND_AGE_TABLE = [
  { age: 15, factor: 1.10 },
  { age: 25, factor: 1.00 },
  { age: 35, factor: 0.87 },
  { age: 40, factor: 0.83 },
  { age: 45, factor: 0.78 },
  { age: 50, factor: 0.75 },
  { age: 55, factor: 0.71 },
  { age: 60, factor: 0.68 },
  { age: 65, factor: 0.65 }
];

export const AASTRAND_ETPUNKTSTEST_FORMULAS = {
  'aastrand-etpunktstest-all': {
    id: 'aastrand-etpunktstest-all',
    name: 'Åstrands etpunktstest',

    getAgeFactor(age) {
      if (!age || age <= 0) return 1.0;
      if (age <= 15) return 1.10;
      if (age >= 65) return 0.65;

      for (let i = 0; i < ASTRAND_AGE_TABLE.length - 1; i++) {
        const p1 = ASTRAND_AGE_TABLE[i];
        const p2 = ASTRAND_AGE_TABLE[i + 1];
        if (age >= p1.age && age <= p2.age) {
          const ratio = (age - p1.age) / (p2.age - p1.age);
          return p1.factor + ratio * (p2.factor - p1.factor);
        }
      }
      return 1.0;
    },

    getFitnessCategory(fitness) {
      if (!fitness || fitness <= 0) return { label: '-', color: '#94a3b8' };
      if (fitness < 28) return { label: 'Lavt', color: '#ef4444' };
      if (fitness < 36) return { label: 'Under middel', color: '#f97316' };
      if (fitness < 44) return { label: 'Middel', color: '#eab308' };
      if (fitness < 52) return { label: 'Højt', color: '#22c55e' };
      return { label: 'Særdeles højt', color: '#2563eb' };
    },

    evaluate(params) {
      const { gender = 'male', age = 0, weight = 0, watt = 0, hr = 0 } = params || {};

      const numAge = Number(age) || 0;
      const numWeight = Number(weight) || 0;
      const numWatt = Number(watt) || 0;
      const numHr = Number(hr) || 0;

      if (numAge <= 0 || numWeight <= 0 || numWatt <= 0 || numHr <= 0) {
        return { isValid: false };
      }

      const workloadKpm = numWatt * 6.118297;
      let uncorrectedVo2 = 0;

      if (gender === 'female') {
        const denominator = (0.769 * numHr) - 56.1;
        if (denominator <= 0) return { isValid: false };
        uncorrectedVo2 = ((0.00193 * workloadKpm + 0.326) / denominator) * 100;
      } else {
        const denominator = (0.769 * numHr) - 48.5;
        if (denominator <= 0) return { isValid: false };
        uncorrectedVo2 = ((0.00212 * workloadKpm + 0.299) / denominator) * 100;
      }

      const ageFactor = this.getAgeFactor(numAge);
      const correctedVo2 = uncorrectedVo2 * ageFactor;
      const fitnessLevel = (correctedVo2 * 1000) / numWeight;
      const category = this.getFitnessCategory(fitnessLevel);

      return {
        isValid: true,
        gender,
        age: numAge,
        weight: numWeight,
        watt: numWatt,
        hr: numHr,
        uncorrectedVo2,
        ageFactor,
        correctedVo2,
        fitnessLevel,
        category
      };
    },

    calculate(params) {
      return this.evaluate(params);
    }
  }
};