let motionsplan = {};

motionsplan.WaterIntake = function(weight) {
  
  // upper and lower limit from LetLiv
  let lower = 30; // ml
  let upper = 40; // ml

  function getDailyWaterIntake(range = 'lower') {
    if (range == 'upper') {
      return weight * upper;
    }
    return weight * lower;
  }

  let publicAPI = {
    getDailyWaterIntake : getDailyWaterIntake
  };

  return publicAPI;
};

module.exports = motionsplan;
