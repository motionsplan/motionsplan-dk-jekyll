let motionsplan = {}

motionsplan.Karvonen = function(minHr, maxHr) {
  maxHr = maxHr;
  minHr = minHr;

  function getHeartRateReserve() {
    return maxHr - minHr;
  }

  function getTargetHR(intensity) {
    return Math.round(getHeartRateReserve() * intensity / 100 + minHr);
  }

  var publicAPI = {
    getTargetHR: getTargetHR
  };

  return publicAPI;
}

module.exports = motionsplan;
