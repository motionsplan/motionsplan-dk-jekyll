let motionsplan = {};

motionsplan.HeatLossFromEvaporation = function(sweat_rate, humidity, formula = "couzens") {
  let humidity_percentage = humidity; // Relative humidity in percentage
  let sweat_rate_liters_per_hour = sweat_rate; // L/hour
  
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
    if (humidity_percentage > 50) {
      return sweat_rate_liters_per_hour*625*0.2103*Math.pow((humidity_percentage/100),-1.879);
    }
    return sweat_rate_liters_per_hour*625;
  }

  // these values are far from Couzens
  // based on gram / day for the sweat rate.
  // rewrote based on perplexity.ai
  function getHyperPhysics() {
    const cal_gram = 580; // Latent heat of vaporization in cal/g
    const joule_cal = 4.186; // Joules per calorie
    const grams_per_liter = 1000; // Grams in one liter of water

    // Convert sweat rate from liters/hour to grams/minute
    const sweat_rate_grams_per_minute = (sweat_rate_liters_per_hour * grams_per_liter) / 60;

    // Calculate heat loss in joules/minute
    let heat_loss_joules_per_minute = sweat_rate_grams_per_minute * cal_gram * joule_cal;

    // Adjust for humidity (assuming a linear decrease in effectiveness)
    const humidity_factor = (100 - humidity_percentage) / 100;
    heat_loss_joules_per_minute *= humidity_factor;

    // Convert to watts (joules/minute to joules/second)
    const heat_loss_watts = heat_loss_joules_per_minute / 60;

    return heat_loss_watts; // Returns heat loss in watts
  }

  let publicAPI = {
    getHeatLoss : getHeatLoss

  };

  return publicAPI;
}

module.exports = motionsplan;
