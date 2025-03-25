let motionsplan = {}

// height in cm
motionsplan.BMRGerrior = function(sex, age, weight, height) {

  height = height / 100;

  function isMale() {
    if (sex == "male") {
      return true;
    }
    return false;
  }

  function getBasicMetabolicRate() {
    let bmr;
    if (isMale()) {
      bmr = 293 - 3.8 * age + 456.4 * height + 10.12 * weight;
    } else {
      bmr = 247 - 2.67 * age + 401.5 * height + 8.6 * weight;
    }
    return bmr * 4.186;
  }

  function getTEE(PA) {
    if (isMale()) {
      tee = 864 - 9.72 * age + PA * (14.2 * weight + 503 * height);
    } else {
      tee = 387 - 7.31 * age + PA * (10.9 * weight + 660.7 * height);
    }
    return tee * 4.186;
  }

  let publicAPI = {
    getBasicMetabolicRate : getBasicMetabolicRate,
    getTEE : getTEE
  };

  return publicAPI;
}

module.exports = motionsplan;
