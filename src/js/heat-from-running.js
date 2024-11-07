let motionsplan = {};

// See https://www.alancouzens.com/blog/heat2.html
// weight - kg
// pace - 8 minutes / mile -- 4:58 min/km
// efficiency = ml/kg/km
motionsplan.HeatFromRunning = function(weight, pace_min, pace_sec, efficiency) {
  let eff = efficiency;
  let weightkg = weight;
  let pace = pace_min + (pace_sec/60);
  
  function getHeat() {
    let power = (((eff/(pace))*weightkg)/1000*75);

    // I do not understand this at all?
    let eff1 = 210/eff*23;
    return Math.round(power/(eff1/100)-power);
  }

  let publicAPI = {
    getHeat : getHeat

  };

  return publicAPI;
}

module.exports = motionsplan;
