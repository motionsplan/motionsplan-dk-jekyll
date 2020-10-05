let motionsplan = {}

motionsplan.SkinfoldDurnin = function(biceps, triceps, suprailiac, subscapularis, weight, gender, age = 20) {

  biceps = biceps;
  triceps = triceps;
  suprailiac = suprailiac;
  subscapularis = subscapularis;
  weight = weight;
  gender = gender; // male / female
  age = age;

  // Siri formula
  function getBodyFatPercent() {
    return (495 / getDensity() - 450);
  }

  function getSkinfoldSum() {
    return biceps + triceps + suprailiac + subscapularis;
  }

  function getDensity() {
    var density;

    var fatsum = getSkinfoldSum();
    if (isMale()) {
      if (age < 17) {
        density = 1.1533 - 0.0643 * Math.log10(fatsum);
      } else if (age < 20) {
        density = 1.1620 - 0.0630 * Math.log10(fatsum);
      } else if (age < 30) {
        density = 1.1631 - 0.0632 * Math.log10(fatsum);
      } else if (age < 40) {
        density = 1.1422 - 0.0544 * Math.log10(fatsum);
      } else if (age < 50) {
        density = 1.1620 - 0.0700 * Math.log10(fatsum);
      } else {
        density = 1.1715 - 0.0779 * Math.log10(fatsum);
      }
    }
    else {
      if (age < 17) {
        density = 1.1369 - 0.0598 * Math.log10(fatsum);
      } else if (age < 20) {
        density = 1.1549 - 0.0678 * Math.log10(fatsum);
      } else if (age < 30) {
        density = 1.1599 - 0.0717 * Math.log10(fatsum);
      } else if (age < 40) {
        density = 1.1423 - 0.0632 * Math.log10(fatsum);
      } else if (age < 50) {
        density = 1.1333 - 0.0612 * Math.log10(fatsum);
      } else {
        density = 1.1339 - 0.0645 * Math.log10(fatsum);
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
    return (weight - weight * getBodyFatPercent() / 100);
  }

  var publicAPI = {
    getFatFreeMass: getFatFreeMass,
    getBodyFatPercent: getBodyFatPercent,
    getDensity : getDensity,
    getSkinfoldSum : getSkinfoldSum
  };

  return publicAPI;
}

module.exports = motionsplan;
