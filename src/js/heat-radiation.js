let motionsplan = {};

motionsplan.HeatLossFromRadiation = function(bsa, temp_radiator = 37, temp_surroundings = 0, formula = "couzens", emmisivity = 0.97) {
  
  function getHeatLoss() {
    if (formula == "boltzmann") {
      return getBoltzmann();
    }
    return getCouzens();
  }

  // I think these calculations might be a bit off?
  // Original source: See https://www.alancouzens.com/blog/heat.html
  function getCouzens() {
    return Math.round((temp_radiator-temp_surroundings)*bsa*5.2);
  }

  // Stefan Boltzmanns law
  // See this instead: http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/bodrad.html
  function getBoltzmann() {
    let t = temp_radiator + 273.15;
    let tc = temp_surroundings + 273.15;
    let e = 0.97; // emmisivity 1=perfect radiator
    let a = 5.6703*Math.pow(10, -8);
    let A = bsa;
    return e*a*A*(Math.pow(t, 4) - Math.pow(tc, 4));
  }

  let publicAPI = {
    getHeatLoss : getHeatLoss

  };

  return publicAPI;
}

module.exports = motionsplan;
