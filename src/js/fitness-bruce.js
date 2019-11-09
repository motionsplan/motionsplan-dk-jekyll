let motionsplan = {}

motionsplan.BruceTest = function(gender, time) {
  gender = gender;
  var T = time;

  function getMaximalOxygen() {
    if (gender == 'man') {
      return 14.8 - (1.379 * T) + (0.451 * Math.pow(T, 2)) - (0.012 * Math.pow(T, 3));
    } else {
      return 4.38 * T - 3.9;
    }
  }

  var publicAPI = {
    getMaximalOxygen: getMaximalOxygen

  };

  return publicAPI;
}

module.exports = motionsplan;
