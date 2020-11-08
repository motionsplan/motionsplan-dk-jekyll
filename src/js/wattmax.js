let motionsplan = {};

motionsplan.Wattmax = function(wmax, sec, weight, age, watt_jumps = 25) {
  wmax = wmax;
  sec = sec;
  weight = weight;
  age = age;
  watt_jumps = watt_jumps; // used for children 25 is default

  function isChild() {
    if (age < 18) {
      return true;
    }
    return false;
  }
  
  function getMPO() {
    if (isChild()) {
      return (wmax - watt_jumps + (watt_jumps * sec / 180));
    }
    return (wmax - 35 + (35 * sec / 120));
  }

  function getMaximalOxygenUptake() {
    if (isChild()) {
      // watt_jumps for kids is 25 as standard
      return (13.16 * getMPO() + 5 * weight) / 1000;
    }
    // watt_jumps for adults is 35
    return (0.0117 * getMPO() + 0.16);
  }

  function getFitnessLevel() {
    if (isChild()) {
      return getMaximalOxygenUptake() / weight * 1000;
    }
    return getMaximalOxygenUptake() / weight * 1000;
  }

  let publicAPI = {
    getFitnessLevel : getFitnessLevel,
    getMaximalOxygenUptake : getMaximalOxygenUptake,
    getMPO : getMPO
  };

  return publicAPI;
};

module.exports = motionsplan;
