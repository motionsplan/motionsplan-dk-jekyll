let motionsplan = {};

motionsplan.AndersenTest = function(sex, distance) {
  if (sex == "female") {
    sex = 1;
  } else {
    sex = 0;
  }
  distance = distance;

  function getFitnessLevel() {
    return 18.38 + (0.03301 * distance) - (5.92 * sex);
  }

  let publicAPI = {
    getFitnessLevel : getFitnessLevel
  };

  return publicAPI;
};

module.exports = motionsplan;
