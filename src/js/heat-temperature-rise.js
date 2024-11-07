let motionsplan = {};

motionsplan.TemperatureRise = function() {

  // ΔT = Temperature change in °C
  // P = Power in watts (W)
  // t = Time in seconds (s)
  // m = Mass in kilograms (kg)
  // c = Specific heat capacity in J/(kg·°C)
  
  // @param power watts
  // return Q in Joule
  function getTotalEnergyAdded(watts, seconds) {
    // Q = P * t
    return watts * seconds;
  }

  // @param heat_capacity c Energy required to rise 1 kg mass 1 degree C
  // For human tissue it is about 3470 J/(kg·°C) 
  // @return degrees celcius
  function getDeltaTemperature(watts, seconds, mass, heat_capacity = 3470) {
    return (getTotalEnergyAdded(watts, seconds) / (mass * heat_capacity));
  }

  let publicAPI = {
    getDeltaTemperature : getDeltaTemperature
  };

  return publicAPI;
}

module.exports = motionsplan;
