let motionsplan = {}

motionsplan.Borg15 = function(age, weight, watt) {
  var ald = age;
  var wgt = weight;
  var borg = watt;

  function getMaximalOxygenUptake() {
    var iltoptag = (1.19 * borg / 9.82 * 60) - (15.84 * ald) + (13.06 * wgt) + 1365;
    return (iltoptag / 1000) * Math.pow(10, 2) / Math.pow(10, 2);
  }

  function getFitnessLevel() {
    return  (getMaximalOxygenUptake() / wgt) * 1000;
  }

  var publicAPI = {
    getMaximalOxygenUptake : getMaximalOxygenUptake,
    getFitnessLevel : getFitnessLevel
  };

  return publicAPI;
}

module.exports = motionsplan;
