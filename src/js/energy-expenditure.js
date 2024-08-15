let motionsplan = {};

// Se also - https://www.researchgate.net/publication/254744636_Comparison_of_energy_expenditure_calculations

// L / m
motionsplan.EnergyExpenditure = function(vo2, vco2, formula = "weir-corrected", N = 0) {

  vo2 = vo2 / 60; // convert to J/s
  vco2 = vco2 / 60; // convert to J/s

  function getRER() {
    return vco2 / vo2;
  }

  // return J/s
  function getEnergyExpenditureInJoule() {
    if (formula == "weir") {
      return getWeir() * 1000;
    }

    if (formula == "brockway") {
      return getBrockway() * 1000;
    }

    if (formula == "brouwer") {
      return getBrouwer() * 1000;
    }

    if (formula == "peronnetandmassicotte") {
      return getPeronnetAndMassicotte() * 1000;
    }

    if (formula == "lusk") {
      return getLusk() * 1000;
    }

    return getWeirCorrected() * 1000;
  }

  function getEnergyExpenditureInKcal() {
    return getEnergyExpenditureInJoule() / 4.1896;
  }


  // return J/s
  function getWeir() {
    return 16.50 * vo2 + 4.62 * vco2 - 9.06 * N;
  }

  // return J/s
  function getWeirCorrected() {
    return 16.62 * vo2 + 4.51 * vco2 - 9.22 * N;
  }

  function getBrockway() {
    return 16.58 * vo2 + 4.51 * vco2 + 5.90 * N;
  }

  function getBrouwer() {

    // return (3.869 * vo2) + (1.195 * vco2);
    return (16.195634 * vo2) + (5.00227 * vco2);
  }

  function getPeronnetAndMassicotte() {
    return 16.89 * vo2 + 4.84 * vco2;
  }

  // return J/s
  function getLusk() {
    return 16.00 * vo2 + 5.15 * vco2 - 7.80 * N;
  }

  let publicAPI = {
    getRER : getRER,
    getEnergyExpenditureInJoule : getEnergyExpenditureInJoule
  };

  return publicAPI;
}

module.exports = motionsplan;
