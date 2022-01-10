let motionsplan = {};

// grade in decimal form - 5% incline is 0.05
motionsplan.RunningWalkingEnergyExpenditurePandolf = function(bw, velocity, grade = 0, load = 0) {

  // velocity is in km/t - change to m/s
  let m_pr_sec = velocity / 3.6;

  // returns watt - J/s
  function getPandolfUnloadedWalking() {
    return (1.5 * bw + 1.5 * Math.pow(m_pr_sec, 2) * bw);
    // convert to kcal/min
  }

  function getPandolfLoadedWalking() {
   let n = 1;
    return 1.5 * bw + 2 * ((bw + load) * Math.pow(load/bw, 2)) + n * ((bw + load) * (1.5 * Math.pow(m_pr_sec, 2) + (0.35 * m_pr_sec * grade)));
  }

  function getCaloriesPrMinute() {
    if (grade > 0 || load > 0) {
      return 0.01433075379765 * getPandolfLoadedWalking();
    }
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
