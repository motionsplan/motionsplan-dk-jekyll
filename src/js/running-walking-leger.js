let motionsplan = {};

// grade in decimal form - 5% incline is 0.05
motionsplan.RunningWalkingEnergyExpenditureLeger = function(bw, velocity) {

  // velocity is in km/t - change to m/s
  let m_pr_min = velocity / 3.6 * 60;

  // formula returns ml/kg/min
  function getLegerRunning() {
    return 2.209 + 3.1633 * velocity;
  }

  function getCaloriesPrMinute() {
    // ml/kg/min --> L/min = * bw / 1000
    // L/min --> kcal/min = * 5
    return getLegerRunning() * bw / 1000 * 5;
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
