let motionsplan = {}

motionsplan.ToPunktTest = function(age, weight, work1, hr1, work2, hr2) {
  var work_1 = work1;
  var hr_1 = hr1;
  var work_2 = work2;
  var hr_2 = hr2;
  var age = age;
  var weight = weight;

  // TODO: How can we let the user choose this for them selves
  // Dependency injection of max-hr calculator
  function getMaximalHeartRate() {
    return 208 - 0.7 * age;
  }

  function getMaximalOxygenUptake() {
    var workmax = ((getMaximalHeartRate() - hr_2) * (work_2 - work_1)) / (hr_2 - hr_1) + work_2 * 1;
    return (workmax / 0.23 * 60 / 21100 + 0.25);
  }
  
  function getFitnessLevel() {
    return (getMaximalOxygenUptake() / weight * 1000);
  }

  var publicAPI = {
    getMaximalOxygenUptake: getMaximalOxygenUptake,
    getFitnessLevel : getFitnessLevel

  };

  return publicAPI;
}

module.exports = motionsplan;
