let motionsplan = {};

motionsplan.CardiacOutput = function(hr, systolic, diastolic) {

  // https://www.researchgate.net/publication/270893782_Estimating_Cardiac_Output_from_Blood_Pressure_and_Heart_Rate_The_Liljestrand_Zander_Formula
  function getCardiacOutput() {
    return getPP() * hr * 0.002;
  }
  
  function getPP() {
    return systolic - diastolic;
  }

  let publicAPI = {
    getCardiacOutput : getCardiacOutput
  };

  return publicAPI;
};

module.exports = motionsplan;
