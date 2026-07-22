// assets/js/core/speed-pace.js

export const SPEED_PACE_FORMULAS = {
  'speed-pace-all': {
    id: 'speed-pace-all',
    name: 'Super-Hastigheds & Paceberegner',

    // Konverter km/t til sekunder pr. km
    kmhToPaceSec(kmh) {
      if (!kmh || kmh <= 0) return 0;
      return 3600 / kmh;
    },

    // Konverter sekunder pr. km til km/t
    paceSecToKmh(paceSec) {
      if (!paceSec || paceSec <= 0) return 0;
      return 3600 / paceSec;
    },

    // Konverter km/t til m/s
    kmhToMs(kmh) {
      if (!kmh || kmh <= 0) return 0;
      return kmh / 3.6;
    },

    // Konverter m/s til km/t
    msToKmh(ms) {
      if (!ms || ms <= 0) return 0;
      return ms * 3.6;
    },

    // Hovedberegning for Trepartsberegneren
    evaluate(params) {
      const { mode = 'speed', distance = 0, hours = 0, minutes = 0, seconds = 0, targetSpeed = 0, paceMin = 0, paceSec = 0 } = params || {};

      const dist = Number(distance) || 0;
      const totalSec = (Number(hours) || 0) * 3600 + (Number(minutes) || 0) * 60 + (Number(seconds) || 0);
      
      // Bestem den valgte hastighed i km/t (enten direkte fra km/t eller ud fra pace)
      let inputKmh = Number(targetSpeed) || 0;
      const inputPaceTotalSec = (Number(paceMin) || 0) * 60 + (Number(paceSec) || 0);
      
      if (!inputKmh && inputPaceTotalSec > 0) {
        inputKmh = this.paceSecToKmh(inputPaceTotalSec);
      }

      let resDistance = 0;
      let resTimeSec = 0;
      let resKmh = 0;
      let resPaceSec = 0;
      let resMs = 0;

      if (mode === 'speed') {
        // Beregn Fart & Pace ud fra Distance + Tid
        if (dist > 0 && totalSec > 0) {
          const hoursTotal = totalSec / 3600;
          resKmh = dist / hoursTotal;
          resPaceSec = totalSec / dist;
          resMs = this.kmhToMs(resKmh);
          resDistance = dist;
          resTimeSec = totalSec;
        } else {
          return { isValid: false };
        }
      } else if (mode === 'time') {
        // Beregn Tid ud fra Distance + Fart
        if (dist > 0 && inputKmh > 0) {
          const hoursTotal = dist / inputKmh;
          resTimeSec = hoursTotal * 3600;
          resKmh = inputKmh;
          resPaceSec = this.kmhToPaceSec(resKmh);
          resMs = this.kmhToMs(resKmh);
          resDistance = dist;
        } else {
          return { isValid: false };
        }
      } else if (mode === 'distance') {
        // Beregn Distance ud fra Tid + Fart
        if (totalSec > 0 && inputKmh > 0) {
          const hoursTotal = totalSec / 3600;
          resDistance = inputKmh * hoursTotal;
          resTimeSec = totalSec;
          resKmh = inputKmh;
          resPaceSec = this.kmhToPaceSec(resKmh);
          resMs = this.kmhToMs(resKmh);
        } else {
          return { isValid: false };
        }
      }

      return {
        isValid: true,
        mode,
        distance: resDistance,
        timeSec: resTimeSec,
        kmh: resKmh,
        paceSec: resPaceSec,
        ms: resMs
      };
    },

    calculate(params) {
      return this.evaluate(params);
    }
  }
};