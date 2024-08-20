let motionsplan = {};

motionsplan.FitnessEvaluation = function(gender, age) {

  let high;
  let low;
  let min;
  let max;
  let optimum;

  function getEvaluation(fitness_level) {

    min = 10;
    max = 35;
    optimum = 25;

    return getZacho(fitness_level);
  }

  // Interpretation for children is low and high means the overweight status
  // For adults it is low for underweight and high for overweight
  function getHigh() {
    return high;
  }

  function getLow() {
    return low;
  }

  function getMin() {
    return min;
  }

  function getMax() {
    return max;
  }

  function getOptimum() {
    return optimum;
  }

  function getZacho(fitness_level) {

    if (age > 64) {
      very_low = 19;
      low = 26;
      middle = 34;
      high = 39;
    } else if (age > 49) {
      very_low = 21;
      low = 28;
      middle = 36;
      high = 41;
    } else { 
      very_low = 34;
      low = 39;
      middle = 47;
      high = 51;
    }

    if (fitness_level > high) {
      return "Meget højt";
    } else if (bmi > middle) {
      return "Højt";
    } else if (bmi > low) {
      return "Middel";
    } else if (bmi > very_low) {
      return "Lavt";
    } 
    return "Meget lavt";
  }

  let publicAPI = {
    getEvaluation : getEvaluation,
    getLow : getLow,
    getHigh : getHigh,
    getMin : getMin,
    getMax : getMax,
    getOptimum : getOptimum
  };

  return publicAPI;
};

module.exports = motionsplan;
