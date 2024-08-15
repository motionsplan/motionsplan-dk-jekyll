let motionsplan = {};

// check - https://www.esmagazine.com/articles/99019-we-can-learn-a-lot-from-our-bodies-when-it-comes-to-efficiently-cooling-buildings
motionsplan.HeatBalance = function() {
  
  // M - metabolic heat from body
  // R - power transferred from radiation
  // C - power transferred through convection
  // E - power transferred evaporation of sweat
  // G - power transferred through conduction

  function getBalance() {
    return Math.round((skin-air)*(Math.pow(speedm,0.5))*BSA*8.3);
  }

  let publicAPI = {
    getBalance : getBalance

  };

  return publicAPI;
}

module.exports = motionsplan;
