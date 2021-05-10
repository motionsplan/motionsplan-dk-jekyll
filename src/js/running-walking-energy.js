let motionsplan = {};

// grade in decimal form - 5% incline is 0.05
motionsplan.RunningWalkingEnergyExpenditure = function(type, bw, velocity, grade = 0) {

  // velocity is in km/t - change to m/s
  let m_pr_min = velocity / 3.6 * 60;

  function getASCMWalking() {
    // formula returns ml/o2/min
    return (0.1 * m_pr_min) + (1.8 * m_pr_min * grade) + 3.5;
  }

  function getASCMRunning() {
    // formula returns ml/o2/min
    return (0.2 * m_pr_min) + (0.9 * m_pr_min * grade) + 3.5;
  }

  function getLegerRunning() {
    return 2.209 + 3.1633 * velocity;
  }

  /*
  function getPandolfWalking(load = 0) {
    return 1.5 * bw + 2.0 * (bw + load) * Math.pow(bw / load) + n *(bw + load)[1.5V2  0.35VG]
  }
  */
  
  function getCaloriesPrMinute() {
    // ml/kg/min --> L/min = * bw / 1000
    // L/min --> kcal/min = * 5
    if (type == 'running') {
      return getASCMRunning() * bw / 1000 * 5;
    }
    return getASCMWalking() * bw / 1000 * 5;
  }
  
  function getCaloriesPrKilometer() {
    let min_pr_km = 1 / (velocity / 60);
    return getCaloriesPrMinute() * min_pr_km;
  }

  let publicAPI = {
    getASCMWalking : getASCMWalking,
    getASCMRunning : getASCMRunning,
    getCaloriesPrMinute : getCaloriesPrMinute,
    getCaloriesPrKilometer : getCaloriesPrKilometer
  };

  return publicAPI;
};

module.exports = motionsplan;
