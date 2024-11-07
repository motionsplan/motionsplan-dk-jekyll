let motionsplan = {};

// @param bsa Body Surface Area
// @param temp_radiator Would be the body in this case
// @param temp_surroundings air temperature
// @param d Distance until temperature drops to drops to the ambient temperature:
motionsplan.HeatLossFromConduction = function(bsa, temp_surroundings = 0, temp_radiator = 37, d = 5) {

  let t = temp_radiator;
  let tc = temp_surroundings;
  let a = bsa * Math.pow(10, 4);
  
  // http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/bodcon.html#c1
  // @return J/s
  function getHeatLoss() {
    let k = 0.000057; // thermal constant still air
    let td = (t - tc); // skin - air
    let qq = (k * a * td) / d; // thermal air constant * bsa * temperature_delta
    return qq * 4.186;
  }

  let publicAPI = {
    getHeatLoss : getHeatLoss

  };

  return publicAPI;
}

module.exports = motionsplan;
