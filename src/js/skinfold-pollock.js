let motionsplan = {}

motionsplan.SkinfoldPollock = function(weight, age) {
  var fatpercent;
  var weight = weight;
  var age = age;

  function getBodyFatPercentMale(breast, abdomen, thigh) {
    var fatsum = breast * 1 + abdomen * 1 + thigh * 1;
    var density = 1.10938 - 0.0008267 * fatsum + 0.0000016 * Math.pow(fatsum, 2) - 0.0002574 * age;
    return fatpercent = (495 / density - 450);
  }

  function getBodyFatPercentFemale(triceps, hip, thigh) {
    var fatsum = triceps * 1 + hip * 1 + thigh * 1;
    var density = 1.0994921 - 0.0009929 * fatsum + 0.0000023 * Math.pow(fatsum, 2) - 0.0001392 * age;
    return fatpercent = (495 / density - 450);
  }
  
  function getFatFreeMass() {
    return (weight - weight * fatpercent / 100);
  }

  var publicAPI = {
    getBodyFatPercentMale : getBodyFatPercentMale,
    getBodyFatPercentFemale : getBodyFatPercentFemale,
    getFatFreeMass : getFatFreeMass
  };

  return publicAPI;
}

module.exports = motionsplan;
