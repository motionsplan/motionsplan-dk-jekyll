let motionsplan = {}

motionsplan.BodyWater = function(height, weight, age, sex) {
  height = height;
  weight = weight;
  age = age;
  sex = sex;

  function getTotalBodyWater() {
    if (isMale()) {
      return 2.447 - (0.09145 * age) + (0.1074 * height) + (0.3362 * weight);
    }
    return -2.097 + (0.1069 * height) + (0.2466 * weight);
  }
  
  
  function getPercent() {
    return getTotalBodyWater() / weight * 100;
  }
  
  function isMale() {
    if (sex == 'male') {
      return true;
    }
    return false;
  }

  var publicAPI = {
    getTotalBodyWater : getTotalBodyWater,
    getPercent : getPercent

  };

  return publicAPI;
}

module.exports = motionsplan;
