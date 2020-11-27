let motionsplan = {};

motionsplan.RockPortWalkingTest = function(min, sec, hr, gender, age, weight) {
  let sex;
  hr = hr;
  gender = gender;
  age = age;
  let weight_lbs = weight * 2.2046226218; // Original formula is in lbs - Kline 1987

  if (gender == "male") {
    sex = 1;
  } else {
    sex = 0;
  }

  // Convert mins/secs to mins and 100ths of mins
  let tm = min;
  let ts = sec / 60;
  let time = tm + ts;

  function getFitnessLevel() {
    return 132.853 - (0.0769 * weight_lbs) - (0.3877 * age) + (6.3150 * sex) - (3.2649 * time) - (0.1565 * hr);
  }
  
  function getMaximalOxygenUptake() {
    return (getFitnessLevel() * weight / 1000);
  }

  var publicAPI = {
    getFitnessLevel : getFitnessLevel,
    getMaximalOxygenUptake : getMaximalOxygenUptake
  };

  return publicAPI;
};

module.exports = motionsplan;
