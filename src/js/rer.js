let motionsplan = {};

// TODO compare to vo2-kcal - and put together
motionsplan.RER = function(vo2, vco2) {

  function getRER() {
    return vco2 / vo2;
  }

  // https://www.phymep.com/wp-content/uploads/2014/05/equations.pdf
  function getFatPercent() {
    return (1-getRER())/(1-0.7);
  }

  function getCHOPercent() {
    return 1 - getFatPercent();
  }

  // compare this formula with vo2-kcal.js formula
  // where is this formula from?
  // we also have the formula from vo2master
  // Denne formel ligner til forveksling 

  // Weir formula
  // Metabolic rate (kcal per day) = 1.440 (3.9 VO2 + 1.1 VCO2)

  // EE (kcal/day) = ([VO2×3.941] + [VCO2×1.11]) ×1440
  // https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5477450/
  // https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4670754/

  // Formula derived from Lusk (1928)
  // https://www.phymep.com/wp-content/uploads/2014/05/equations.pdf
  function getKcalMin() {
    return (3.815 + 1.232 * getRER()) * vo2;
  }

  // Weir formula
  // https://en.wikipedia.org/wiki/Weir_formula
  function getKcalMinWeir() {
    return (3.941 * vo2) + (1.106 * vco2);
  }

  function getCaloriesFromFat() {
    return getFatPercent() * getKcalMin();
  }

  function getCaloriesFromCHO() {
    return getCHOPercent() * getKcalMin();
  }

  let publicAPI = {
    getRER : getRER,
    getKcalMin : getKcalMin,
    getFatPercent : getFatPercent,
    getCHOPercent : getCHOPercent,
    getCaloriesFromCHO : getCaloriesFromCHO,
    getCaloriesFromFat : getCaloriesFromFat
  };

  return publicAPI;
}

module.exports = motionsplan;
