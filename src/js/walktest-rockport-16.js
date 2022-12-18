let motionsplan = {};

motionsplan.RockPortWalkingTest = function(min, sec, hr, gender, age, weight, formula = 'kline') {
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
    if (formula == 'lunt') {
      return getLunt();
    }
    return getKline();
  }
  
  function getMaximalOxygenUptake() {
    return (getFitnessLevel() * weight / 1000);
  }

  // https://academic.oup.com/milmed/article/178/7/753/4243559
  // British military personel 18-39 år
  function getLunt() {
    return 51.047 + (8.336 * sex) + (635.012 * 1 / time) - (0.225 * hr) - (0.271 * weight) - (0.231 * age);
  }

  function getKline() {
    return 132.853 - (0.0769 * weight_lbs) - (0.3877 * age) + (6.3150 * sex) - (3.2649 * time) - (0.1565 * hr);
  }

  let publicAPI = {
    getFitnessLevel : getFitnessLevel,
    getLunt : getLunt,
    getMaximalOxygenUptake : getMaximalOxygenUptake
  };

  return publicAPI;
};

module.exports = motionsplan;
