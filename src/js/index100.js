let motionsplan = {}

motionsplan.Index100 = function(lifted, body_weight) {
  var lifted = lifted;
  var body_weight = body_weight;

  // time in minutes
  function getIndex100(min, sek) {
    return lifted * 986.63 / (1270.4 - 172970 * ((Math.pow(body_weight, -1.3925))));
  }

  var publicAPI = {
    getIndex100 : getIndex100
  };

  return publicAPI;
}

module.exports = motionsplan;
