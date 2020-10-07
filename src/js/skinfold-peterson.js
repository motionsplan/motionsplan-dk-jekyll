let motionsplan = {}

// https://academic.oup.com/ajcn/article/77/5/1186/4689818
motionsplan.SkinfoldPeterson = function(triceps, subscapularis, suprailiac, midthigh, height, weight, gender, age) {

  triceps = triceps;
  suprailiac = suprailiac;
  subscapularis = subscapularis;
  height = height;
  gender = gender; // male / female
  age = age;

  function getBMI() {
    let hgt = height / 100;
    return weight / (hgt * hgt);
  }

  function getBodyFatPercent() {
    if (isMale()) {
      return 20.94878 + (age * 0.1166) - (height * 0.11666) + (getSkinfoldSum() * 0.42696) - ((getSkinfoldSum() * getSkinfoldSum()) * 0.00159);
    }
    return 22.18945 + (age * 0.06368) + (getBMI() * 0.60404) - (height * 0.14520) + (getSkinfoldSum() * 0.30919) - ((getSkinfoldSum() * getSkinfoldSum()) * 0.00099562);
  }

  function getSkinfoldSum() {
    return midthigh + triceps + suprailiac + subscapularis;
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
    getSkinfoldSum : getSkinfoldSum
  };

  return publicAPI;
};

module.exports = motionsplan;
