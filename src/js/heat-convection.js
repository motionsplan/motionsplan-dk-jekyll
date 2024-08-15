let motionsplan = {};

// See https://www.alancouzens.com/blog/heat.html
motionsplan.HeatLossFromConvection = function(bsa, air_temperature, skin_temperature, speed) {
  
  let speedm = speed * 1000/3600;
  let BSA = bsa;
  let skin = skin_temperature;
  let air = air_temperature;

  function getHeatLoss() {
    return Math.round((skin-air)*(Math.pow(speedm,0.5))*BSA*8.3);
  }

  let publicAPI = {
    getHeatLoss : getHeatLoss

  };

  return publicAPI;
}

module.exports = motionsplan;
