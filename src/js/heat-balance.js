let motionsplan = {};

// check - https://www.esmagazine.com/articles/99019-we-can-learn-a-lot-from-our-bodies-when-it-comes-to-efficiently-cooling-buildings
motionsplan.HeatBalance = function() {
  
  // M - metabolic heat from body
  // R - power transferred from radiation
  let R = 0;
  // C - power transferred through convection
  let C = 0;
  // E - power transferred evaporation of sweat
  let E = 0;
  // G - power transferred through conduction
  let G = 0;

  let total = 0; // Initialize total

  function setTotal(value) {
    total = value; // Set the total correctly
  }

  function setConvection(convection) {
    C = convection;
  }

  function setRadiation(radiation) {
    R = radiation;
  }

  function setConduction(conduction) {
    G = conduction;
  }

  function setEvaporation(evaporation) {
    E = evaporation;
  }

  function getBalance() {
    return total - (C + R + G + E); // Ensure correct calculation
  }

  let publicAPI = {
    getBalance: getBalance,
    setConvection: setConvection,
    setRadiation: setRadiation,
    setConduction: setConduction,
    setEvaporation: setEvaporation,
    setTotal: setTotal
  };

  return publicAPI;
}

module.exports = motionsplan;
