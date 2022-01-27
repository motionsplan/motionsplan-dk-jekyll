let motionsplan = {};

motionsplan.VO2MaxJog = function(sex, age, weight, time, hr) {
  sex = sex;
  weight = weight; // kg
  time = time; // minutes
  hr = hr;
  age = age;

  function getMaximalOxygenUptakeHunt() {
     return 92.91 + 6.50 * sex - 0.141 * weight - 1.562 * time - 0.125 * hr;
  }

  function getMaximalOxygenUptakeGeorge() {
    return 100.5 + 8.344 * sex - 0.1636 * weight - 1.438 * time - 0.1928 * hr;
  }
  
  function getMaximalOxygenUptake() {
    return (getFitnessLevel() * weight / 1000);
  }

  function getFitnessLevel() {
    if (age < 18) {
      return getMaximalOxygenUptakeHunt();
    }
    return getMaximalOxygenUptakeGeorge();
  }

  let publicAPI = {
    getMaximalOxygenUptake: getMaximalOxygenUptake,
    getFitnessLevel : getFitnessLevel

  };

  return publicAPI;
}

module.exports = motionsplan;
