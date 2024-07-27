let motionsplan = {}

// weight in kg
// velocity in km/t
// oxygenuptake in L O2 / min
motionsplan.RunningEconomy= function(vo2, velocity) {

  let v = velocity;

  /**
   * @param {float} velocity - Velocity.
   * 
   * @return float (ml/kg/km)
   */
  function getRunningEconomyInMlPrKgPrKm(weight) {
    let a = getMlOxygenPrKgPrMin(weight); // ml / kg / min
    let b = v / 60;
    return a / b;
  }

  /*
  // Alternative function
  // @return ml o2/kg/km;
  function getRunningEconomy(bw, kmt) {
    return ((vo2 * 1000) * (1/bw)) * 60 / kmt;
  }
  */

  /**
   * @return float (ml/kg/min)
   */
  function getMlOxygenPrKgPrMin(weight) {
    return vo2 / weight * 1000;
  }

  function getOxygenPrKm() {
    let b = vo2 / 60;
    return vo2 / b;
  }

  function getRunningEconomyInLPrKm() {
    return (vo2 * 60) / velocity;
  }

  let publicAPI = {
    getRunningEconomyInMlPrKgPrKm : getRunningEconomyInMlPrKgPrKm,
    getMlOxygenPrKgPrMin : getMlOxygenPrKgPrMin,
    getOxygenPrKm : getOxygenPrKm,
    getRunningEconomyInLPrKm : getRunningEconomyInLPrKm
  };

  return publicAPI;
}

module.exports = motionsplan;
