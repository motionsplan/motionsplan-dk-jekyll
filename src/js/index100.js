let motionsplan = {}

motionsplan.Index100 = function(lifted, body_weight) {

  function getIndex100() {
    return lifted * 986.63 / (1270.4 - 172970 * ((Math.pow(body_weight, -1.3925))));
  }

  let publicAPI = {
    getIndex100 : getIndex100
  };

  return publicAPI;
}

module.exports = motionsplan;
