let motionsplan = {};

motionsplan.Blood = function(sex, weight, height, age) {
  let h = height / 100;
  let w = weight;

  function isMale() {
    if (sex == "male") {
      return true;
    }
    return false;
  }
  
  function getVolume() {
    return getNadler();
  }

  function getNadler() {
    if (isMale()) {
      return 0.3669 * Math.pow(h, 3) + 0.03219 * w + 0.6041;
    }
    return 0.3561 * Math.pow(h, 3) + 0.03308 * w + 0.1833;
  }

  var publicAPI = {
    getVolume : getVolume

  };

  return publicAPI;
}

module.exports = motionsplan;
