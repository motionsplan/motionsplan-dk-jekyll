let motionsplan = {}

motionsplan.RockPortWalkingTest = function(min, sec, hr, sex, age, weight) {
  var resultat, Koen; // Oxygen
  var Pul = hr;
  var sex = sex;
  var Alder = age;
  var Vaegt = weight;

  if (sex == "male") {
    Koen = 1;
  } else {
    Koen = 0;
  }

  function getFitnessLevel() {
    // Convert mins/secs to mins and 100ths of mins
    var tm = min;
    var ts = sec / 60;
    var time = tm + ts;

    weight = Vaegt * 2.2046226218; // Original formula is in lbs - Kline 1987
    return 132.853 - (0.0769 * weight) - (0.3877 * age) + (6.3150 * Koen) - (3.2649 * time) - (0.1565 * hr);
  }
  
  function getMaximalOxygenUptake() {
    return (getFitnessLevel() * Vaegt / 1000);
  }

  var publicAPI = {
    getFitnessLevel : getFitnessLevel,
    getMaximalOxygenUptake : getMaximalOxygenUptake
  };

  return publicAPI;
}

module.exports = motionsplan;
