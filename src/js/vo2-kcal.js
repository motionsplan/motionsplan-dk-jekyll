let motionsplan = {};

motionsplan.VO2RERKcal = function(rer) {

  // Values from this formula does not equal tables usually shown
  // https://www.phymep.com/wp-content/uploads/2014/05/equations.pdf
  function getPercentFatUtilized() {
    return (1-rer)/(1-0.7)*100;
  }

  function getPercentCHOUtilized() {
    return 100 - getPercentFatUtilized();
  }

  function getKcalExpenditure(vo2, minutes, seconds) {
    return (vo2)*(minutes+(seconds/60))*getKcalPrRERPrMin();
  }

  // where is this formula from?
  function getKcalPrRERPrMin() {
    return 3.815 + 1.232 * rer;
  }

  let publicAPI = {
    getPercentFatUtilized : getPercentFatUtilized,
    getPercentCHOUtilized : getPercentCHOUtilized,
    getKcalExpenditure : getKcalExpenditure
  };

  return publicAPI;
};

module.exports = motionsplan;
