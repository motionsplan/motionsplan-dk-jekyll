let motionsplan = {};

motionsplan.Strength = function(weight, body_weight) {
  weight = weight;
  body_weight = body_weight;

  function getIndex100() {
    var Loeft = weight;
    var Vaegt = body_weight;
    return Math.round(Loeft * 986.63 / (1270.4 - 172970 * ((Math.pow(Vaegt, -1.3925)))) * Math.pow(10, 0)) / Math.pow(10, 0)
  }

  var publicAPI = {
    getIndex100: getIndex100
  };

  return publicAPI;
}

module.exports = motionsplan;
