// assets/js/core/running-performance-health.js

const DISTANCES = {
  '5k': 5000,
  '10k': 10000,
  'half': 21097.5,
  'marathon': 42195
};

export const RUNNING_PERFORMANCE_FORMULAS = {
  'running-performance-all': {
    id: 'running-performance-all',
    name: 'Jack Daniels VDOT & Løbeberegner',

    calculateVDOT(distanceMeters, totalSeconds) {
      if (distanceMeters <= 0 || totalSeconds <= 0) return 0;
      const tMin = totalSeconds / 60;
      const velocity = distanceMeters / tMin;
      const percentVo2 = 0.8 + 0.1894393 * Math.exp(-0.012778 * tMin) + 0.2989558 * Math.exp(-0.1932605 * tMin);
      const vo2 = -4.60 + 0.182258 * velocity + 0.000104 * Math.pow(velocity, 2);
      const vdot = vo2 / percentVo2;
      return (vdot > 0 && !isNaN(vdot)) ? vdot : 0;
    },

    getDanielsTimeForDistance(vdot, distanceMeters) {
      if (vdot <= 0 || distanceMeters <= 0) return 0;
      let low = 60;
      let high = 86400;
      for (let i = 0; i < 35; i++) {
        let mid = (low + high) / 2;
        let testVdot = this.calculateVDOT(distanceMeters, mid);
        if (testVdot < vdot) {
          high = mid;
        } else {
          low = mid;
        }
      }
      return (low + high) / 2;
    },

    getRiegelTime(testDistanceMeters, testSeconds, targetDistanceMeters) {
      if (testDistanceMeters <= 0 || testSeconds <= 0 || targetDistanceMeters <= 0) return 0;
      return testSeconds * Math.pow(targetDistanceMeters / testDistanceMeters, 1.06);
    },

    getTrainingPaces(vdot) {
      if (vdot <= 0) return null;
      const getPaceFromPercentVo2 = (pct) => {
        const targetVo2 = vdot * pct;
        const a = 0.000104;
        const b = 0.182258;
        const c = -(4.60 + targetVo2);
        const v = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        return (1000 / v) * 60;
      };

      return {
        eLow: getPaceFromPercentVo2(0.59),
        eHigh: getPaceFromPercentVo2(0.74),
        m: getPaceFromPercentVo2(0.80),
        t: getPaceFromPercentVo2(0.88),
        i: getPaceFromPercentVo2(0.98),
        r: getPaceFromPercentVo2(1.10)
      };
    },

    evaluate(params) {
      const { distanceKey = '10k', hours = 0, minutes = 0, seconds = 0 } = params || {};
      const testDistanceMeters = DISTANCES[distanceKey] || DISTANCES['10k'];
      const hrs = Number(hours) || 0;
      const mins = Number(minutes) || 0;
      const secs = Number(seconds) || 0;
      const totalSeconds = (hrs * 3600) + (mins * 60) + secs;

      if (!totalSeconds || totalSeconds <= 0) return { isValid: false };

      const vdot = this.calculateVDOT(testDistanceMeters, totalSeconds);
      if (vdot <= 0) return { isValid: false };

      const predictions = {};
      const targetKeys = ['5k', '10k', 'half', 'marathon'];

      targetKeys.forEach(key => {
        const targetDist = DISTANCES[key];
        const danielsSec = (key === distanceKey) ? totalSeconds : this.getDanielsTimeForDistance(vdot, targetDist);
        const danielsPaceSec = danielsSec / (targetDist / 1000);
        const riegelSec = this.getRiegelTime(testDistanceMeters, totalSeconds, targetDist);
        const diffSec = danielsSec - riegelSec;

        predictions[key] = {
          danielsTime: danielsSec,
          danielsPaceSec: danielsPaceSec,
          riegelTime: riegelSec,
          diffSec: diffSec
        };
      });

      const paces = this.getTrainingPaces(vdot);

      return {
        isValid: true,
        vdot: vdot,
        vdotFormatted: vdot.toFixed(1),
        distanceLabel: distanceKey === '5k' ? '5 km' : distanceKey === '10k' ? '10 km' : distanceKey === 'half' ? 'Halvmaraton' : 'Maraton',
        predictions,
        trainingPaces: paces
      };
    },

    calculate(params) {
      return this.evaluate(params);
    }
  }
};