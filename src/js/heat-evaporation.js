let motionsplan = {};

motionsplan.HeatLossFromEvaporation = function(sweat_rate, humidity, formula = "couzens") {
  let humid = humidity;
  let sweat = sweat_rate;
  
  // return 
  function getHeatLoss() {
    if (formula == "hyperphysics") {
      return getHyperPhysics();
    }
    return getCouzens();
  }

  // See https://www.alancouzens.com/blog/heat.html
  // return watt
  function getCouzens() {
    if (humid>50) {
      return Math.round(sweat*625*0.2103*Math.pow((humid/100),-1.879));
    }
    return Math.round(sweat*625);
  }

  // these values are far from Couzens
  // based on gram / day for the sweat rate.
  function getHyperPhysics() {
    let cal_gram = 580; // vapor at skin temperature
    let joule_cal = 4.186;

    return sweat_rate * 1000 * cal_gram * joule_cal / 3600 / 24;
  }

  let publicAPI = {
    getHeatLoss : getHeatLoss

  };

  return publicAPI;
}

module.exports = motionsplan;
