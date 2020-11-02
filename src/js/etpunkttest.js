let motionsplan = {};

motionsplan.EtPunktTest = function(sex, age, weight, hr, work, load = "watt") {
  work = work;

  // work should be in kilopond
  if (load == "watt") {
    work = work * 6.12; 
  }
  sex = sex;
  weight = weight;
  hr = hr;
  age = age;

  function isMale() {
    if (sex == "1") {
      return true;
    }
    return false;
  }

  function getMaximalOxygenUptakeBuono() {
    if (isMale()) {
      return (0.00212 * work + 0.299) / (0.769 * hr - 48.5) * 100;
    }
    return (0.00193 * work + 0.326) / (0.769 * hr - 56.1) * 100;
  }
  
  function getMaximalOxygenUptake() {
    // Buono et al (1989)
    return (0.166 - 0.028 * age) + 0.026 * weight + 0.66 * getMaximalOxygenUptakeBuono();
  }

  function getFitnessLevel() {
    return (getMaximalOxygenUptake() / weight * 1000);
  }

  var publicAPI = {
    getMaximalOxygenUptake: getMaximalOxygenUptake,
    getFitnessLevel : getFitnessLevel

  };

  return publicAPI;
}

module.exports = motionsplan;
