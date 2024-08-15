let motionsplan = {};

motionsplan.HeatLossFromConduction = function(bsa, temp_radiator = 37, temp_surroundings = 0, d = 5) {

  let t = temp_radiator;
  let tc = temp_surroundings;
  let a = bsa * Math.pow(10, 4);
  
  // http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/bodcon.html#c1
  function getHeatLoss() {
    let k = 0.000057; // thermal constant still air
    let td = (t - tc);
    let qq = (k * a * td) / d;
    return qq * 4.186;
  }

  let publicAPI = {
    getHeatLoss : getHeatLoss

  };

  return publicAPI;
}

module.exports = motionsplan;
