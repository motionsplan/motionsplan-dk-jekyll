let motionsplan = {};

// See https://www.alancouzens.com/blog/heat.html
motionsplan.HeatFromBiking = function(power, efficiency) {
  let eff = efficiency;
  
  function getHeat() {
    return Math.round(power/(eff/100)-power);
  }

  let publicAPI = {
    getHeat : getHeat

  };

  return publicAPI;
}

module.exports = motionsplan;
