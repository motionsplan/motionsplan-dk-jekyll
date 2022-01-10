let motionsplan = {}

motionsplan.SkinfoldLohman = function(sex, triceps, calf) {
  
  function getSkinfoldSum() {
    return (triceps + calf);
  }
  
  function getBodyFatPercent() {
    if (isMale()) {
      return 0.735 * getSkinfoldSum()  + 1.0;
    }
    return 0.610 * getSkinfoldSum() + 5.1;
  }
  
  function isMale() {
    if (sex == 1) {
      return true;
    }
    return false;
  }
  
  let publicAPI = {
    getBodyFatPercent : getBodyFatPercent
  };

  return publicAPI;
}

module.exports = motionsplan;
