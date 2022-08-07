let motionsplan = {}

// https://www.concept2.com/indoor-rowers/training/calculators/watts-calculator
motionsplan.RowingPowerCalculator = function() {

  function getPaceFromWatts(watts) {
    // return ³√(2.80/watts);
  }


  // distance in meters
  function getPaceFromTimeAndDistance(distance, min, sec) {
    return (min * 60 + sec) / distance;
  }

  // Pace m/s
  function getWattsFromPace(pace) {
    return 2.80 / Math.pow(pace, 3);
  }

  let publicAPI = {
    getPaceFromTimeAndDistance : getPaceFromTimeAndDistance,
    getPaceFromWatts : getPaceFromWatts,
    getWattsFromPace : getWattsFromPace
  };

  return publicAPI;
}

module.exports = motionsplan;
