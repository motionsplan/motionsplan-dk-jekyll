let motionsplan = {};

// Se also - https://www.researchgate.net/publication/254744636_Comparison_of_energy_expenditure_calculations

// vo2 in L / m
motionsplan.EnergyExpenditureRER = function(vo2, rer, formula = "lusk") {

  function getEnergyExpenditureInJoule() {
    if (formula == "garby") {
      return getGarby();
    }
    return getLusk();
  }

  // return kJ / min
  function getLusk() {
    // where is this formula from?
    // we also have the formula from vo2master
    // comapre these to rer.js
    // Lusk - https://www.researchgate.net/publication/254744636_Comparison_of_energy_expenditure_calculations
    return ((3.815 + 1.232 * rer) * vo2) / 0.0143;
  }

  // return kJ / min
  function getGarby() {
    return (vo2/60) * (4940*rer+16040);
  }

  let publicAPI = {
    getEnergyExpenditureInJoule : getEnergyExpenditureInJoule
  };

  return publicAPI;
}

module.exports = motionsplan;
