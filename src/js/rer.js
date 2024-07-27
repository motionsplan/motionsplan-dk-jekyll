let motionsplan = {};


// TODO compare to vo2-kcal - and put together
motionsplan.RER = function(R, vo2) {
  
  // compare this formula with vo2-kcal.js formula
  function getKcalMin() {
    return (1.24 * R + 3.81) * vo2;
  }

  function getFatPercent() {
    let fat = -3.33 * R + 3.33; 
    if (fat > 0) {
      return fat;
    }
    return 0;
  }

  function getCHOPercent() {
    return 1 - getFatPercent();
  }

  function getCaloriesFromFat() {
    return getFatPercent() * getKcalMin();
  }

  function getCaloriesFromCHO() {
    return getCHOPercent() * getKcalMin();
  }

  let publicAPI = {
    getKcalMin : getKcalMin,
    getFatPercent : getFatPercent,
    getCHOPercent : getCHOPercent,
    getCaloriesFromCHO : getCaloriesFromCHO,
    getCaloriesFromFat : getCaloriesFromFat
  };

  return publicAPI;
}

module.exports = motionsplan;
