let motionsplan = {}

motionsplan.SixMinutesWalkingTest = function(sex, age, height, weight, meter) {
  var meter = meter;
  var sex = sex;
  var age  = age;
  var height = height;
  var weight = weight;
  var meter = meter;
  var result;
  
  function isMale() {
    if (sex == 1) {
      return true;
    }
    return false;
  }

  function getReferenceMeter(repeated = false) {
    if (repeated == true) {
      return getReferenceMeterGibbons();
    }
    return getReferenceMeterEnright();
  }
  
  // men = 0; woman = 1
  function getReferenceMeterGibbons() {
    if (isMale()) {
      return 868.8 - 2.99 * age;
    }
    return 868.8 - 2.99 * age - 74.7;
  }
  
  // Based on Enright and Sherill
  // https://pubmed.ncbi.nlm.nih.gov/9817683/
  function getReferenceMeterEnright() {
    if (isMale()) {
      return (7.57 * height) - (5.02 * age) - (1.76 * weight) - 309;
    }
    return (2.11 * height) - (5.78 * age) - (2.29 * weight) + 667;
  }

  function getPercent(repeated = false) {
    return (meter / getReferenceMeter(repeated) * 100);
  }

  var publicAPI = {
    getReferenceMeter : getReferenceMeter,
    getPercent : getPercent
  };

  return publicAPI;
}

module.exports = motionsplan;
