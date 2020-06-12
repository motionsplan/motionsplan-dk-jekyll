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

    weight = Vaegt * 2.2046226218; // Original formula is in lbs
    return 132.853 - (0.0769 * weight) - (0.3877 * age) + (6.3150 * Koen) - (3.2649 * time) - (0.1565 * hr);
  }

  function getMaximalOxygenUptakeMOL() {
    // Værdier fra Motion-Online.dk
    var Tid = min * 60 + sec * 1
    return resultat = Math.round((6.9652 + (0.020062 * Vaegt) - (0.0257 * Alder) + (0.5955 * Koen) - (0.003754 * Tid) - (0.0115 * Pul)) * Math.pow(10, 1)) / Math.pow(10, 1);
  }
  
  function getFitnessLevelMOL() {
    // Værdier fra Motion-Online.dk
    return Math.round((resultat / Vaegt * 1000) * Math.pow(10, 2)) / Math.pow(10, 2);
  }

  var publicAPI = {
    getFitnessLevel : getFitnessLevel,
    getMaximalOxygenUptakeMOL : getMaximalOxygenUptakeMOL,
    getFitnessLevelMOL : getFitnessLevelMOL
  };

  return publicAPI;
}

module.exports = motionsplan;





  
