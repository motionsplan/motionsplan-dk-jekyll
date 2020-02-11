let motionsplan = {}

motionsplan.SkinfoldDurnin = function(biceps, triceps, hoftekam, skulder, weight, gender, age = 20) {

  biceps = biceps;
  triceps = triceps;
  hoftekam = hoftekam;
  skulder = skulder;
  weight = weight;
  gender = gender;
  age = age;

  function getBodyFatPercent() {
        var density;

        var fedtsum = biceps * 1 + triceps * 1 + hoftekam * 1 + skulder * 1;
        if (gender == 1) {
            density = -0.0274 * Math.log(fedtsum) + 1.1631;
        }
        else {
            density = -0.0311 * Math.log(fedtsum) + 1.1599;
        }
        return Math.round((495 / density - 450) * Math.pow(10, 1)) / Math.pow(10, 1);
  }
  
  function getFatFreeMass() {
        return Math.round((weight - weight * getBodyFatPercent() / 100) * Math.pow(10, 1)) / Math.pow(10, 1);
  }

  var publicAPI = {
    getFatFreeMass : getFatFreeMass,
    getBodyFatPercent : getBodyFatPercent
  };

  return publicAPI;
}

module.exports = motionsplan;
