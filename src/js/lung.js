let motionsplan = {};

motionsplan.Lung = function(sex, height, age) {
  height = height;

  function isMale() {
    if (sex == "male") {
      return true;
    }
    return false;
  }

  function getVitalCapacity() {
    if (isMale()) {
      return (27.63 - 0.112 * age) * height;
    }
    return (21.78 - 0.101 * age) * height;
  }

  var publicAPI = {
    getVitalCapacity : getVitalCapacity

  };

  return publicAPI;
}

module.exports = motionsplan;
