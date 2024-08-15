let motionsplan = {};

motionsplan.VO2Kcal = function(rer) {

  // Values from this formula does not equal tables usually shown
  // https://www.phymep.com/wp-content/uploads/2014/05/equations.pdf
  // Table is probably from 1928.
  function getPercentFatUtilized() {
    return (1-rer)/(1-0.7)*100;
  }

  function getPercentCHOUtilized() {
    return 100 - getPercentFatUtilized();
  }

  function getTotalKcalExpenditure(vo2, minutes, seconds) {
    return (vo2)*(minutes+(seconds/60))*getKcalPrLiterO2PrMin();
  }

  // https://vo2master.com/blog/exercise-efficiency/
  // Brouwer
  // return J/s
  function getEnergyExpenditureInJoule() {
    return ((3.869 * vo2) + (1.195 * vco2)) * (4.1896/60) * 1000;
  }


  // where is this formula from?
  // we also have the formula from vo2master
  // comapre these to rer.js
  // Lusk - https://www.researchgate.net/publication/254744636_Comparison_of_energy_expenditure_calculations
  function getKcalPrLiterO2PrMin() {
    return 3.815 + 1.232 * rer;
  }

  function getKcalFromFat() {
    return getFatPercent() * getKcalMin();
  }

  function getKcalFromCHO() {
    return getCHOPercent() * getKcalMin();
  }

  let publicAPI = {
    getPercentFatUtilized : getPercentFatUtilized,
    getPercentCHOUtilized : getPercentCHOUtilized,
    getTotalKcalExpenditure : getTotalKcalExpenditure,
    getKcalFromCHO : getKcalFromCHO,
    getKcalFromFat : getKcalFromFat
  };

  return publicAPI;
};

module.exports = motionsplan;
