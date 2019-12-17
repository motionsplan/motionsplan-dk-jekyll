let motionsplan = {}

// weight in kg
// velocity in km/t
// oxygenuptage in L O2 / min
motionsplan.RunningEconomy= function(weight, oxygenuptake) {

  var w = weight;
  var o = oxygenuptake;

  function getRunningEconomy(velocity) {
    var v = velocity;
    var a = (o / w) * 1000; // ml / kg / min
    var b = v / 60;
    return a / b;
  }

  function getFitnessLevel() {
    // return w / (h * h * h);
  }

  var publicAPI = {
    getRunningEconomy : getRunningEconomy
  };

  return publicAPI;
}

module.exports = motionsplan;
