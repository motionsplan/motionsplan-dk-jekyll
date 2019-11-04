let motionsplan = {}

motionsplan.ToPunktTest = function(age, weight, work1, hr1, work2, hr2) {
  var arb1 = work1;
  var puls1 = hr1;
  var arb2 = work2;
  var puls2 = hr2;
  var alder = age;
  var vaegt = weight;

  // TODO: How can we let the user choose this for them selves
  // Dependency injection of max-hr calculator
  function getMaximalHeartRate() {
    return 208 - 0.7 * alder;
  }

  function getMaximalOxygenUptake() {
    var delres;
    delres = ((getMaximalHeartRate() - puls2) * (arb2 - arb1)) / (puls2 - puls1) + arb2 * 1;
    return Math.round((delres / 0.23 * 60 / 21100 + 0.25) * Math.pow(10, 2)) / Math.pow(10, 2)
  }
  
  function getFitnessLevel() {
    return Math.round((getMaximalOxygenUptake() / vaegt * 1000) * Math.pow(10, 1)) / Math.pow(10, 1);
  }

  var publicAPI = {
    getMaximalOxygenUptake: getMaximalOxygenUptake,
    getFitnessLevel : getFitnessLevel

  };

  return publicAPI;
}

module.exports = motionsplan;
