let motionsplan = {}

motionsplan.BruceTest = function(gender, time) {
  gender = gender;
  time = time;

  function isMale() {
    if (gender == 'man') {
      return true;
    }
    return false;
  }

  function getMaximalOxygen() {
    if (isMale()) {
      return 14.8 - (1.379 * time) + (0.451 * Math.pow(time, 2)) - (0.012 * Math.pow(time, 3));
    }
    return 4.38 * time - 3.9;
  }

  var publicAPI = {
    getMaximalOxygen: getMaximalOxygen

  };

  return publicAPI;
}

module.exports = motionsplan;
