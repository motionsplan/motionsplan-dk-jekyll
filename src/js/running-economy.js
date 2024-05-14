let motionsplan = {}

// weight in kg
// velocity in km/t
// oxygenuptake in L O2 / min
motionsplan.RunningEconomy= function(oxygenuptake, velocity) {

  let v = velocity;
  let o = oxygenuptake;

  /**
   * @param {float} velocity - Velocity.
   * 
   * @return float (ml/kg/min)
   */
  function getRunningEconomyInMlPrKgPrMin(weight) {
    let a = getOxygenPrKgPrMin(weight); // ml / kg / min
    let b = v / 60;
    return a / b;
  }

  /**
   * @return float (ml/kg/min)
   */
  function getOxygenPrKgPrMin(weight) {
    return o / weight * 1000;
  }

  function getOxygenPrKm() {
    let b = v / 60;
    return o / b;
  }

  let publicAPI = {
    getRunningEconomyInMlPrKgPrMin : getRunningEconomyInMlPrKgPrMin,
    getOxygenPrKgPrMin : getOxygenPrKgPrMin,
    getOxygenPrKm : getOxygenPrKm
  };

  return publicAPI;
}

module.exports = motionsplan;
