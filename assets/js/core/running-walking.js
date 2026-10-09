// assets/js/core/running-walking-core.js

const MET_TABLES = {
  walking: [
    { speed: 4.0, met: 3.0 },
    { speed: 4.8, met: 3.5 },
    { speed: 5.6, met: 4.3 },
    { speed: 6.4, met: 5.0 },
    { speed: 7.2, met: 7.0 },
    { speed: 8.0, met: 8.3 }
  ],
  running: [
    { speed: 6.4, met: 6.0 },
    { speed: 8.0, met: 8.3 },
    { speed: 9.7, met: 9.8 },
    { speed: 10.8, met: 10.5 },
    { speed: 11.3, met: 11.0 },
    { speed: 14.5, met: 12.8 },
    { speed: 16.1, met: 14.5 }
  ]
};

function interpolateMet(type, speed) {
  const table = MET_TABLES[type];
  if (!table) return 0;

  if (speed <= table[0].speed) return table[0].met;
  if (speed >= table[table.length - 1].speed) return table[table.length - 1].met;

  for (let i = 0; i < table.length - 1; i++) {
    const p1 = table[i];
    const p2 = table[i + 1];
    if (speed >= p1.speed && speed <= p2.speed) {
      const ratio = (speed - p1.speed) / (p2.speed - p1.speed);
      return p1.met + ratio * (p2.met - p1.met);
    }
  }
  return 0;
}

export const RUNNING_WALKING_CORE = {
  calculateWalking({ formula = 'acsm', bw = 0, speed = 0, duration = 30, grade = 0, load = 0 }) {
    if (bw <= 0 || speed <= 0 || duration <= 0) return { isValid: false };

    let kcalMin = 0;
    let kcalKm = 0;
    let metVal = 0;

    if (formula === 'pandolf') {
      const m_pr_sec = speed / 3.6;
      let watts = 0;
      if (grade > 0 || load > 0) {
        const gradeDecimal = grade / 100;
        watts = 1.5 * bw + 2 * ((bw + load) * Math.pow(load / bw, 2)) + 1 * ((bw + load) * (1.5 * Math.pow(m_pr_sec, 2) + (0.35 * m_pr_sec * gradeDecimal)));
      } else {
        watts = 1.5 * bw + 1.5 * Math.pow(m_pr_sec, 2) * bw;
      }
      kcalMin = watts * 0.01433075379765;
      kcalKm = kcalMin * (60 / speed);

    } else if (formula === 'met') {
      metVal = interpolateMet('walking', speed);
      kcalMin = metVal * (1 / 60) * bw;
      kcalKm = (metVal * bw) / speed;

    } else {
      const m_pr_min = (speed / 3.6) * 60;
      const gradeDecimal = grade / 100;
      const vo2 = (0.1 * m_pr_min) + (1.8 * m_pr_min * gradeDecimal) + 3.5;
      kcalMin = (vo2 * bw / 1000) * 5;
      kcalKm = kcalMin * (60 / speed);
    }

    return {
      isValid: true,
      kcalMin,
      kcalKm,
      totalKcal: kcalMin * duration,
      metVal
    };
  },

  calculateRunning({ formula = 'acsm', bw = 0, speed = 0, duration = 30, grade = 0 }) {
    if (bw <= 0 || speed <= 0 || duration <= 0) return { isValid: false };

    let kcalMin = 0;
    let kcalKm = 0;
    let metVal = 0;

    if (formula === 'leger') {
      const vo2 = 2.209 + 3.1633 * speed;
      kcalMin = (vo2 * bw / 1000) * 5;
      kcalKm = kcalMin * (60 / speed);

    } else if (formula === 'met') {
      metVal = interpolateMet('running', speed);
      kcalMin = metVal * (1 / 60) * bw;
      kcalKm = (metVal * bw) / speed;

    } else {
      const m_pr_min = (speed / 3.6) * 60;
      const gradeDecimal = grade / 100;
      const vo2 = (0.2 * m_pr_min) + (0.9 * m_pr_min * gradeDecimal) + 3.5;
      kcalMin = (vo2 * bw / 1000) * 5;
      kcalKm = kcalMin * (60 / speed);
    }

    return {
      isValid: true,
      kcalMin,
      kcalKm,
      totalKcal: kcalMin * duration,
      metVal
    };
  }
};