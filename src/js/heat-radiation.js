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
    // Original formula for Couzens - (37-0)*BSA2*5.2 // Hardcoded 0 value
    return (temp_radiator-temp_surroundings)*bsa*5.2;
  }

  // Stefan Boltzmanns law
  // See this instead: http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/bodrad.html
  function getBoltzmann() {
    let convert_kelvin_celcius = 273.15;
    let t = temp_radiator + convert_kelvin_celcius;
    let tc = temp_surroundings + convert_kelvin_celcius;
    let e = emmisivity; // emmisivity 1=perfect radiator - 0,97 typical human
    let a = 5.6703 * Math.pow(10, -8);
    let A = bsa;
    return e * a * A * (Math.pow(t, 4) - Math.pow(tc, 4));
  }

  let publicAPI = {
    getHeatLoss : getHeatLoss

  };

  return publicAPI;
}

module.exports = motionsplan;
