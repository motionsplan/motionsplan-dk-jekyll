// assets/js/core/running-adjustment-health.js

/**
 * WMA / WAVA ALDERSFAKTORER OG REKORDER (5K, 10K, Halvmaraton, Maraton)
 */
const WMA_DATA = {
  male: {
    '5k': {
      openRecord: 757, // 12:37
      factors: [0.6526, 0.6899, 0.7250, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.9550, 0.9670, 0.9790, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 0.9999, 0.9991, 0.9975, 0.9952, 0.9922, 0.9885, 0.9840, 0.9788, 0.9729, 0.9662, 0.9592, 0.9521, 0.9451, 0.9380, 0.9310, 0.9240, 0.9169, 0.9099, 0.9028, 0.8958, 0.8888, 0.8817, 0.8747, 0.8676, 0.8606, 0.8536, 0.8465, 0.8395, 0.8324, 0.8254, 0.8184, 0.8113, 0.8043, 0.7972, 0.7902, 0.7832, 0.7761, 0.7691, 0.7620, 0.7550, 0.7479, 0.7402, 0.7319, 0.7230, 0.7134, 0.7031, 0.6923, 0.6808, 0.6687, 0.6559, 0.6425, 0.6285, 0.6138, 0.5985, 0.5825, 0.5660, 0.5488, 0.5309, 0.5124, 0.4933, 0.4735, 0.4531, 0.4321, 0.4104, 0.3881, 0.3652, 0.3416, 0.3174, 0.2926, 0.2671, 0.2409, 0.2142, 0.1868]
    },
    '10k': {
      openRecord: 1580, // 26:20
      factors: [0.6526, 0.6899, 0.7250, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.9550, 0.9670, 0.9790, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 0.9999, 0.9991, 0.9975, 0.9952, 0.9922, 0.9885, 0.9840, 0.9788, 0.9729, 0.9662, 0.9592, 0.9521, 0.9451, 0.9380, 0.9310, 0.9240, 0.9169, 0.9099, 0.9028, 0.8958, 0.8888, 0.8817, 0.8747, 0.8676, 0.8606, 0.8536, 0.8465, 0.8395, 0.8324, 0.8254, 0.8184, 0.8113, 0.8043, 0.7972, 0.7902, 0.7832, 0.7761, 0.7691, 0.7620, 0.7550, 0.7479, 0.7402, 0.7319, 0.7230, 0.7134, 0.7031, 0.6923, 0.6808, 0.6687, 0.6559, 0.6425, 0.6285, 0.6138, 0.5985, 0.5825, 0.5660, 0.5488, 0.5309, 0.5124, 0.4933, 0.4735, 0.4531, 0.4321, 0.4104, 0.3881, 0.3652, 0.3416, 0.3174, 0.2926, 0.2671, 0.2409, 0.2142, 0.1868]
    },
    'half': {
      openRecord: 3553, // 59:13
      factors: [0.6369, 0.6752, 0.7113, 0.7452, 0.7769, 0.8064, 0.8337, 0.8588, 0.8817, 0.9024, 0.9209, 0.9372, 0.9513, 0.9643, 0.9773, 0.9884, 0.9958, 0.9995, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9984, 0.9960, 0.9925, 0.9878, 0.9820, 0.9750, 0.9675, 0.9599, 0.9524, 0.9448, 0.9373, 0.9297, 0.9222, 0.9146, 0.9071, 0.8995, 0.8920, 0.8844, 0.8769, 0.8693, 0.8618, 0.8542, 0.8467, 0.8392, 0.8316, 0.8241, 0.8165, 0.8090, 0.8014, 0.7939, 0.7863, 0.7788, 0.7712, 0.7637, 0.7561, 0.7486, 0.7410, 0.7334, 0.7253, 0.7166, 0.7071, 0.6969, 0.6860, 0.6744, 0.6622, 0.6492, 0.6356, 0.6212, 0.6062, 0.5905, 0.5740, 0.5569, 0.5391, 0.5206, 0.5014, 0.4815, 0.4609, 0.4396, 0.4177, 0.3950, 0.3717, 0.3476, 0.3229, 0.2974, 0.2713, 0.2445, 0.2169, 0.1887]
    },
    'marathon': {
      openRecord: 7495, // 2:04:55
      factors: [0.6211, 0.6604, 0.6975, 0.7324, 0.7651, 0.7956, 0.8239, 0.8500, 0.8739, 0.8956, 0.9151, 0.9324, 0.9475, 0.9615, 0.9755, 0.9875, 0.9955, 0.9995, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9990, 0.9960, 0.9910, 0.9840, 0.9759, 0.9679, 0.9599, 0.9519, 0.9439, 0.9358, 0.9278, 0.9198, 0.9118, 0.9038, 0.8957, 0.8877, 0.8797, 0.8717, 0.8637, 0.8556, 0.8476, 0.8396, 0.8316, 0.8236, 0.8155, 0.8075, 0.7995, 0.7915, 0.7835, 0.7754, 0.7674, 0.7594, 0.7514, 0.7434, 0.7353, 0.7272, 0.7185, 0.7091, 0.6990, 0.6882, 0.6766, 0.6644, 0.6515, 0.6379, 0.6236, 0.6085, 0.5928, 0.5764, 0.5593, 0.5415, 0.5229, 0.5037, 0.4838, 0.4632, 0.4419, 0.4198, 0.3971, 0.3737, 0.3496, 0.3248, 0.2992, 0.2730, 0.2461, 0.2185, 0.1902]
    }
  },
  female: {
    '5k': {
      openRecord: 864, // 14:24
      factors: [0.7250, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.9550, 0.9670, 0.9790, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9987, 0.9971, 0.9948, 0.9919, 0.9883, 0.9841, 0.9793, 0.9737, 0.9676, 0.9608, 0.9533, 0.9452, 0.9365, 0.9271, 0.9170, 0.9063, 0.8953, 0.8843, 0.8733, 0.8623, 0.8512, 0.8402, 0.8292, 0.8182, 0.8072, 0.7961, 0.7851, 0.7741, 0.7631, 0.7521, 0.7410, 0.7300, 0.7190, 0.7080, 0.6970, 0.6859, 0.6749, 0.6639, 0.6529, 0.6419, 0.6308, 0.6198, 0.6088, 0.5978, 0.5868, 0.5757, 0.5647, 0.5537, 0.5422, 0.5297, 0.5161, 0.5016, 0.4861, 0.4696, 0.4521, 0.4335, 0.4140, 0.3935, 0.3720, 0.3495, 0.3259, 0.3014, 0.2759, 0.2494, 0.2219, 0.1933, 0.1638, 0.1333, 0.1018, 0.0692]
    },
    '10k': {
      openRecord: 1801, // 30:01
      factors: [0.7250, 0.7579, 0.7886, 0.8171, 0.8434, 0.8675, 0.8894, 0.9091, 0.9266, 0.9419, 0.9550, 0.9670, 0.9790, 0.9893, 0.9961, 0.9996, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9989, 0.9975, 0.9955, 0.9930, 0.9900, 0.9863, 0.9821, 0.9774, 0.9721, 0.9662, 0.9598, 0.9528, 0.9453, 0.9372, 0.9285, 0.9193, 0.9096, 0.8992, 0.8883, 0.8770, 0.8655, 0.8540, 0.8425, 0.8310, 0.8195, 0.8080, 0.7965, 0.7850, 0.7735, 0.7620, 0.7505, 0.7390, 0.7275, 0.7160, 0.7045, 0.6930, 0.6815, 0.6700, 0.6585, 0.6470, 0.6355, 0.6240, 0.6125, 0.6010, 0.5895, 0.5780, 0.5665, 0.5550, 0.5435, 0.5320, 0.5200, 0.5070, 0.4930, 0.4780, 0.4620, 0.4450, 0.4270, 0.4080, 0.3880, 0.3670, 0.3450, 0.3220, 0.2980, 0.2730, 0.2470, 0.2200, 0.1920, 0.1630, 0.1330, 0.1020]
    },
    'half': {
      openRecord: 3950, // 1:05:50
      factors: [0.6563, 0.6942, 0.7299, 0.7634, 0.7947, 0.8238, 0.8507, 0.8754, 0.8979, 0.9182, 0.9363, 0.9533, 0.9703, 0.9848, 0.9945, 0.9994, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9986, 0.9970, 0.9946, 0.9915, 0.9878, 0.9834, 0.9783, 0.9726, 0.9661, 0.9590, 0.9513, 0.9428, 0.9337, 0.9238, 0.9133, 0.9024, 0.8915, 0.8806, 0.8697, 0.8588, 0.8479, 0.8370, 0.8261, 0.8152, 0.8043, 0.7934, 0.7825, 0.7716, 0.7607, 0.7498, 0.7389, 0.7280, 0.7171, 0.7062, 0.6953, 0.6844, 0.6735, 0.6626, 0.6517, 0.6408, 0.6299, 0.6190, 0.6081, 0.5971, 0.5855, 0.5731, 0.5601, 0.5464, 0.5320, 0.5169, 0.5012, 0.4848, 0.4677, 0.4499, 0.4314, 0.4123, 0.3925, 0.3720, 0.3508, 0.3289, 0.3064, 0.2832, 0.2593, 0.2347, 0.2094, 0.1835, 0.1569, 0.1296, 0.1016, 0.0729]
    },
    'marathon': {
      openRecord: 8125, // 2:15:25
      factors: [0.6150, 0.6559, 0.6946, 0.7311, 0.7654, 0.7975, 0.8274, 0.8551, 0.8806, 0.9039, 0.9250, 0.9450, 0.9650, 0.9821, 0.9936, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9984, 0.9965, 0.9937, 0.9902, 0.9859, 0.9808, 0.9749, 0.9682, 0.9608, 0.9526, 0.9435, 0.9337, 0.9232, 0.9123, 0.9014, 0.8905, 0.8796, 0.8687, 0.8578, 0.8469, 0.8360, 0.8251, 0.8142, 0.8033, 0.7924, 0.7815, 0.7706, 0.7597, 0.7488, 0.7377, 0.7265, 0.7151, 0.7034, 0.6915, 0.6794, 0.6671, 0.6545, 0.6417, 0.6288, 0.6155, 0.6021, 0.5885, 0.5746, 0.5605, 0.5462, 0.5317, 0.5169, 0.5019, 0.4868, 0.4713, 0.4557, 0.4399, 0.4238, 0.4075, 0.3910, 0.3743, 0.3573, 0.3401, 0.3228, 0.3051, 0.2873, 0.2693, 0.2510, 0.2325, 0.2138, 0.1949, 0.1757, 0.1563, 0.1368, 0.1169]
    }
  }
};

export const RUNNING_ADJUSTMENT_FORMULAS = {

  'running-adjustment-all': {
    id: 'running-adjustment-all',
    name: 'Løbe-Handicap & Præstationsberegner',
    inputs: ['distanceKey', 'hours', 'minutes', 'seconds', 'age', 'weight', 'gender'],
    unit: 'tid',
    disclaimer: '⚠️ Forbehold: WMA-aldersfaktorer og Flyer Handicap-formlen er fysiologiske modeller baseret på befolkningsdata. De er ideelle til at sammenligne tider på tværs af alder og kropsbygning, men erstatter ikke individuel træningstilstand.',

    formatSeconds(totalSec) {
      if (!totalSec || isNaN(totalSec) || totalSec === 0) return '00:00';
      const absSec = Math.abs(totalSec);
      const h = Math.floor(absSec / 3600);
      const m = Math.floor((absSec - h * 3600) / 60);
      const s = Math.round(absSec - h * 3600 - m * 60);

      const hh = h < 10 ? `0${h}` : `${h}`;
      const mm = m < 10 ? `0${m}` : `${m}`;
      const ss = s < 10 ? `0${s}` : `${s}`;

      return h > 0 ? `${hh}:${mm}:${ss}` : `${mm}:${ss}`;
    },

    getDistanceLabel(key) {
      const labels = {
        '5k': '5 km',
        '10k': '10 km',
        'half': 'Halvmaraton',
        'marathon': 'Maraton'
      };
      return labels[key] || '10 km';
    },

    evaluate(params) {
      const { distanceKey = '10k', hours = 0, minutes = 0, seconds = 0, age = 30, weight = 70, gender = 'male' } = params;

      const totalSec = (hours * 3600) + (minutes * 60) + seconds;
      if (!totalSec || totalSec <= 0) return { isValid: false };

      const isMale = gender === 'male';
      const validAge = Math.min(Math.max(Math.round(age || 30), 5), 100);
      const validWeightKg = Math.max(parseFloat(weight) || 70, 30);
      const weightLbs = validWeightKg * 2.20462;
      const distanceLabel = this.getDistanceLabel(distanceKey);

      // 1. WMA ALDERSGRADUERING (WAVA)
      const genderWma = isMale ? WMA_DATA.male : WMA_DATA.female;
      const distData = genderWma[distanceKey] || genderWma['10k'];

      const ageIndex = validAge - 5;
      const ageFactor = distData.factors[ageIndex] || 1.0;
      const ageAdjustedSec = totalSec * ageFactor;
      
      const openRecordSec = distData.openRecord;
      const agePerformancePct = ((openRecordSec / ageAdjustedSec) * 100).toFixed(1);

      let agePerformanceLevel = 'Motionist';
      let agePerformanceColor = '#2563eb';
      if (agePerformancePct >= 90) { agePerformanceLevel = 'Verdensklasse (90%+)'; agePerformanceColor = '#8b5cf6'; }
      else if (agePerformancePct >= 80) { agePerformanceLevel = 'National Elite (80%+)'; agePerformanceColor = '#22c55e'; }
      else if (agePerformancePct >= 70) { agePerformanceLevel = 'Regional Elite (70%+)'; agePerformanceColor = '#10b981'; }
      else if (agePerformancePct >= 60) { agePerformanceLevel = 'God Lokal Løber (60%+)'; agePerformanceColor = '#f59e0b'; }

      // 2. FLYER HANDICAP
      let distFactor = 1.0;
      if (distanceKey === '10k') distFactor = 2.0;
      else if (distanceKey === 'half') distFactor = 4.2195;
      else if (distanceKey === 'marathon') distFactor = 8.439;

      let equiv5kSec = totalSec / distFactor;
      let ageAdjFlyer = Math.max(validAge, 25);
      let flyerAdjustedSec = 0;

      if (isMale) {
        let minWtLbs = Math.max(weightLbs, 143);
        let wtKg = minWtLbs / 2.20462;

        flyerAdjustedSec = ((59.31 * Math.pow(wtKg, 1.03)) /
          Math.pow(
            (((Math.pow((59.31 * Math.pow(wtKg, 1.03)) / equiv5kSec, 1 / 1.01) * 1000) /
              wtKg + (ageAdjFlyer - 25) * 0.26) * wtKg) / 1000,
            1.01
          )) * Math.pow(65 / wtKg, 1 / 3);
      } else {
        let minWtLbs = Math.max(weightLbs, 110);
        let wtKg = minWtLbs / 2.20462;

        flyerAdjustedSec = ((59.31 * Math.pow(wtKg, 1.03)) /
          Math.pow(
            (((Math.pow((59.31 * Math.pow(wtKg, 1.03)) / equiv5kSec, 1 / 1.01) * 1000) /
              wtKg + (ageAdjFlyer - 25) * 0.25) * wtKg) / 1000,
            1.01
          )) * Math.pow(50 / wtKg, 1 / 3);
      }

      flyerAdjustedSec = flyerAdjustedSec * distFactor;

      const flyerDiffSec = totalSec - flyerAdjustedSec;
      const flyerDiffFormatted = `${flyerDiffSec >= 0 ? '-' : '+'}${this.formatSeconds(flyerDiffSec)}`;

      const targetSpec = isMale ? '65 kg / 25 år' : '50 kg / 25 år';

      return {
        isValid: true,
        gender,
        validAge,
        validWeightKg,
        distanceKey,
        distanceLabel,
        rawTimeFormatted: this.formatSeconds(totalSec),
        ageAdjustedTimeFormatted: this.formatSeconds(ageAdjustedSec),
        ageFactor: ageFactor.toFixed(4),
        agePerformancePct,
        agePerformanceLevel,
        agePerformanceColor,
        flyerAdjustedTimeFormatted: this.formatSeconds(flyerAdjustedSec),
        flyerDiffFormatted,
        targetSpec,
        subUnit: 'tid',
        text: `<strong>WMA</strong>: Din faktiske tid på **${distanceLabel}** på **${this.formatSeconds(totalSec)}** svarer til **${this.formatSeconds(ageAdjustedSec)}** i din biologiske topalder (20–30 år) med en WMA-alderspræstation på **${agePerformancePct}%**. <strong>Flyer Handicap</strong>: Justeret for både alder og kropsvægt (standardiseret til ${targetSpec}) svarer din præstation til **${this.formatSeconds(flyerAdjustedSec)}** på denne distance (korrektion: **${flyerDiffFormatted}**).`
      };
    }
  }
};