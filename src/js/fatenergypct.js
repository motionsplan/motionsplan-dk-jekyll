let motionsplan = {}

motionsplan.FatEnergyPct = function(kj, fat) {
  kj = kj;
  fat = fat;

  function getFatEnergyPct() {
    return  (fat * 38/kj) * 100;
  }

  var publicAPI = {
    getFatEnergyPct : getFatEnergyPct
  };

  return publicAPI;
}

module.exports = motionsplan;
