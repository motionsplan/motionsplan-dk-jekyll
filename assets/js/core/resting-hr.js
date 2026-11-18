// assets/js/core/resting-hr.js

export const RESTING_HR_NORMS = {
  male: [
    { minAge: 18, maxAge: 25, label: '18–25 år', p10: 56, p25: 61, p50: 69, p75: 75, p90: 76 },
    { minAge: 26, maxAge: 35, label: '26–35 år', p10: 55, p25: 61, p50: 70, p75: 76, p90: 77 },
    { minAge: 36, maxAge: 45, label: '36–45 år', p10: 57, p25: 62, p50: 71, p75: 77, p90: 78 },
    { minAge: 46, maxAge: 55, label: '46–55 år', p10: 58, p25: 63, p50: 72, p75: 78, p90: 79 },
    { minAge: 56, maxAge: 65, label: '56–65 år', p10: 57, p25: 62, p50: 71, p75: 77, p90: 78 },
    { minAge: 66, maxAge: 120, label: '65+ år', p10: 56, p25: 61, p50: 69, p75: 75, p90: 76 }
  ],
  female: [
    { minAge: 18, maxAge: 25, label: '18–25 år', p10: 61, p25: 65, p50: 73, p75: 78, p90: 79 },
    { minAge: 26, maxAge: 35, label: '26–35 år', p10: 60, p25: 64, p50: 72, p75: 78, p90: 79 },
    { minAge: 36, maxAge: 45, label: '36–45 år', p10: 60, p25: 65, p50: 73, p75: 79, p90: 80 },
    { minAge: 46, maxAge: 55, label: '46–55 år', p10: 61, p25: 65, p50: 73, p75: 79, p90: 80 },
    { minAge: 56, maxAge: 65, label: '56–65 år', p10: 60, p25: 64, p50: 73, p75: 78, p90: 79 },
    { minAge: 66, maxAge: 120, label: '65+ år', p10: 59, p25: 64, p50: 72, p75: 77, p90: 78 }
  ]
};

export function getNormRow(age, gender) {
  const normList = RESTING_HR_NORMS[gender === 'female' ? 'female' : 'male'];
  const userAge = Math.max(18, parseInt(age, 10) || 25);
  return normList.find(row => userAge >= row.minAge && userAge <= row.maxAge) || normList[0];
}

export function evaluateRestingHr(bpm, age, gender) {
  const hr = parseFloat(bpm);
  if (isNaN(hr) || hr <= 0) {
    return { isValid: false };
  }

  const row = getNormRow(age, gender);

  if (hr <= row.p10) {
    return {
      isValid: true,
      categoryKey: 'top10',
      label: 'Top 10% (Fremragende)',
      color: '#3b82f6',
      percentile: '10. percentil',
      shortEval: 'blandt de laveste 10%',
      typicalFor: 'veltrænede udholdenhedsatleter eller personer i fremragende form.'
    };
  } else if (hr <= row.p25) {
    return {
      isValid: true,
      categoryKey: 'top25',
      label: 'Top 25% (God)',
      color: '#22c55e',
      percentile: '25. percentil',
      shortEval: 'i den bedste fjerdedel',
      typicalFor: 'personer med en god grundform og et stærkt kredsløb.'
    };
  } else if (hr <= row.p50) {
    return {
      isValid: true,
      categoryKey: 'p50',
      label: '50% (Gennemsnit)',
      color: '#eab308',
      percentile: '50. percentil',
      shortEval: 'meget tæt på befolkningens median',
      typicalFor: 'de fleste voksne med et almindeligt aktivitetsniveau.'
    };
  } else if (hr <= row.p75) {
    return {
      isValid: true,
      categoryKey: 'p75',
      label: '75% (Under gennemsnit)',
      color: '#f97316',
      percentile: '75. percentil',
      shortEval: 'lidt højere end gennemsnittet',
      typicalFor: 'personer med et lavere eller moderat aktivitetsniveau.'
    };
  } else {
    return {
      isValid: true,
      categoryKey: 'p90',
      label: '90% (Høj / Utrænet)',
      color: '#ef4444',
      percentile: '90. percentil',
      shortEval: 'blandt de højeste 10%',
      typicalFor: 'utrænede eller personer med et forhøjet pulsniveau.'
    };
  }
}