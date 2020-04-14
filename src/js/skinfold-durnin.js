let motionsplan = {}

motionsplan.SkinfoldDurnin = function(biceps, triceps, hoftekam, skulder, weight, gender, age = 20) {

  biceps = biceps;
  triceps = triceps;
  hoftekam = hoftekam;
  skulder = skulder;
  weight = weight;
  gender = gender; // male / female
  age = age;

  function getBodyFatPercent() {
    return (495 / getDensity() - 450);
  }

  function getFatSum() {
    return biceps * 1 + triceps * 1 + hoftekam * 1 + skulder * 1;
  }

  function getDensity() {
    var density;

    var fedtsum = getFatSum();
    if (isMale()) {
      if (age < 17) {
        density = 1.1533 - 0.0643 * Math.log10(fedtsum);
      } else if (age < 19) {
        density = 1.1620 - 0.0630 * Math.log10(fedtsum);
      } else if (age < 29) {
        density = 1.1631 - 0.0632 * Math.log10(fedtsum);
      } else if (age < 39) {
        density = 1.1422 - 0.0544 * Math.log10(fedtsum);
      } else if (age < 49) {
        density = 1.1620 - 0.0700 * Math.log10(fedtsum);
      } else {
        density = 1.1715 - 0.0779 * Math.log10(fedtsum);
      }
    }
    else {
      if (age < 17) {
        density = 1.1369 - 0.0598 * Math.log10(fedtsum);
      } else if (age < 19) {
        density = 1.1549 - 0.0678 * Math.log10(fedtsum);
      } else if (age < 29) {
        density = 1.1599 - 0.0717 * Math.log10(fedtsum);
      } else if (age < 39) {
        density = 1.1423 - 0.0632 * Math.log10(fedtsum);
      } else if (age < 49) {
        density = 1.1333 - 0.0612 * Math.log10(fedtsum);
      } else {
        density = 1.1339 - 0.0645 * Math.log10(fedtsum);
      }
    }
    return density; 
  }
  
  function isMale() {
    if (gender == "male") {
      return true;
    }
    return false;
  }

  function getFatFreeMass() {
    return (weight - weight * getBodyFatPercent() / 100) * Math.pow(10, 1) / Math.pow(10, 1);
  }

  var publicAPI = {
    getFatFreeMass: getFatFreeMass,
    getBodyFatPercent: getBodyFatPercent,
    getDensity : getDensity,
    getFatSum : getFatSum
  };

  return publicAPI;
}

module.exports = motionsplan;
