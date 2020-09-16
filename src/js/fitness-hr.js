let motionsplan = {}

motionsplan.CalculateFitnessFromHr = function(hr_max, hr_rest, wgt) {
  var hr_max, hr_rest, wgt;

  hr_max = hr_max;
  hr_rest = hr_rest;
  wgt = wgt;

  function getMaximalOxygenUptake() {
    return getFitnessLevel() * wgt / 1000;
  }

  function getFitnessLevel() {
    return hr_max / hr_rest * 15.3;
  }

  var publicAPI = {
    getMaximalOxygenUptake: getMaximalOxygenUptake,
    getFitnessLevel: getFitnessLevel

  };

  return publicAPI;
}

module.exports = motionsplan;
