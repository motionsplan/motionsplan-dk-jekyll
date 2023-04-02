let motionsplan = {};

motionsplan.AndersenTest = function(sex, distance, bodyweight, formula = "andersen_2008") {
  if (sex == "female") {
    sex = 1;
  } else {
    sex = 0;
  }
  distance = distance;

  function getFitnessLevel() {
    if (formula == 'aadland_2014') {
      return 23.262 + 0.050 * distance - 3.858 * sex - 0.376 * bodyweight;
    }
    return 18.38 + (0.03301 * distance) - (5.92 * sex);
  }

  function getVO2max() {
    return bodyweight * getFitnessLevel() / 1000;
  }

  let publicAPI = {
    getFitnessLevel : getFitnessLevel,
    getVO2max : getVO2max
  };

  return publicAPI;
};

module.exports = motionsplan;
