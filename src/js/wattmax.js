let motionsplan = {}

motionsplan.Wattmax = function(wmax, sec, weight, age, watt_jumps = 25) {
  var wmax = wmax;
  var sec = sec;
  var weight = weight;
  var age = age;
  var watt_jumps = watt_jumps; // used for children 25 is default

  function isChild() {
    if (age < 18) {
      return true;
    }
    return false;
  }

  function getMaximalOxygenUptake() {
    if (isChild()) {
      // watt_jumps for kids is 25 as standard
      return (13.16 * (wmax - watt_jumps + (watt_jumps * sec / 180)) + 5 * weight) / 1000;
    }
    // watt_jumps for adults is 35
    return (0.0117 * (wmax - 35 + (35 * sec / 120)) + 0.16);
  }

  function getFitnessLevel() {
    if (isChild()) {
      return getMaximalOxygenUptake() / weight * 1000;
    }
    return getMaximalOxygenUptake() / weight * 1000;
  }

  var publicAPI = {
    getFitnessLevel : getFitnessLevel,
    getMaximalOxygenUptake : getMaximalOxygenUptake
  };

  return publicAPI;
}

module.exports = motionsplan;
