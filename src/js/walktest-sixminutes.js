let motionsplan = {}

motionsplan.SixMinutesWalkingTest = function(sex, age, height, weight, meter) {
  var meter = meter;
  var sex = sex;
  var age  = age;
  var height = height;
  var weight = weight;
  var meter = meter;
  var result;
  
  function getReferenceMeter() {
    var man = (7.57 * height) - (5.02 * age) - (1.76 * weight) - 309;
    var woman = (2.11 * height) - (5.78 * age) - (2.29 * weight) + 667;

    return result = (man * sex + woman * (1 - sex));
  }

  function getPercent() {
    return (meter / result * 100);
  }

  var publicAPI = {
    getReferenceMeter : getReferenceMeter,
    getPercent : getPercent
  };

  return publicAPI;
}

module.exports = motionsplan;
