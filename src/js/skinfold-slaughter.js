let motionsplan = {}

motionsplan.SkinfoldSlaughter = function(sex, triceps, subscapular) {
  var sex = sex;
  var triceps = triceps;
  var subscapular = subscapular;
  
  function getBodyFatPercent() {
    if (isMale()) {
      return 1.21 * (triceps + subscapular) - 0.008 * Math.pow(triceps + subscapular, 2) - 1.7;
    }
    return 1.33 * (triceps + subscapular) - 0.013 * Math.pow(triceps + subscapular, 2) - 2.5;
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
