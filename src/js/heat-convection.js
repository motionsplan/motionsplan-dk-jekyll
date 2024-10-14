let motionsplan = {};

// See https://www.alancouzens.com/blog/heat.html
// @param speed in km/t
motionsplan.HeatLossFromConvection = function(bsa, air_temperature, skin_temperature, speed, formula = "couzens") {
  
  let speedm = speed * 1000/3600; // recalculate to m/s
  let BSA = bsa; // m^2
  let skin = skin_temperature;
  let air = air_temperature;

  // Convection is a form of conduction
  // This formula is from Alan Couzens
  // Compare to the conduction formula - where d is the distance to cool down
  function getCouzens() {
    return (skin-air)*(Math.pow(speedm,0.5))*BSA*8.3;
  }
  
  function getHeatLoss() {
    if (formula == "newton") {
      return getNewton();
    }
    return getCouzens();
  }

  // returns slightly higher values than couzens
  function getNewton() {
    let h = 10.45 - speedm + 10 * Math.sqrt(speedm);
    let Q = h * BSA * (skin - air);
    return Q;
  }

  let publicAPI = {
    getHeatLoss : getHeatLoss

  };

  return publicAPI;
}

module.exports = motionsplan;
