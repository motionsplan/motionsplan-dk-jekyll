let motionsplan = {}

motionsplan.SkinfoldLohman = function(sex, triceps, calf) {
  var sex = sex;
  var triceps = triceps;
  var calf = calf;
  
  function getBodyFatPercent() {
    if (isMale()) {
      return 0.735 * (triceps + calf) + 1.0;
    }
    return 0.610 * (triceps + calf) + 5.1;
  }
  
  function isMale() {
    if (sex == 1) {
      return true;
    }
    return false;
  }
  
  var publicAPI = {
    getBodyFatPercent : getBodyFatPercent
  };

  return publicAPI;
}

module.exports = motionsplan;
