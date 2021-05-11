let motionsplan = {};

// grade in decimal form - 5% incline is 0.05
motionsplan.RunningWalkingEnergyExpenditurePandolf = function(bw, velocity) {

  // velocity is in km/t - change to m/s
  let m_pr_min = velocity / 3.6 * 60;

  // returns watt - J/s
  function getPandolfUnloadedWalking() {
    let m_pr_sec = velocity / 3.6;
    return (1.5 * bw + 1.5 * Math.pow(m_pr_sec, 2) * bw);
    // convert to kcal/min
  }

/*
  function getPandolfWalking(load = 0) {
    return 1.5 * bw + 2.0 * (bw + load) * Math.pow(bw / load) + n *(bw + load)[1.5V2  0.35VG]
  }
*/  

  function getCaloriesPrMinute() {
    return 0.01433075379765 * getPandolfUnloadedWalking();
  }
  
  function getCaloriesPrKilometer() {
    let min_pr_km = 1 / (velocity / 60);
    return getCaloriesPrMinute() * min_pr_km;
  }

  let publicAPI = {
    getCaloriesPrMinute : getCaloriesPrMinute,
    getCaloriesPrKilometer : getCaloriesPrKilometer
  };

  return publicAPI;
};

module.exports = motionsplan;
