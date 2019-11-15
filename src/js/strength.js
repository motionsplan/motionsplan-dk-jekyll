let motionsplan = {};

motionsplan.Strength = function(weight, body_weight) {
  weight = weight;
  body_weight = body_weight;

  function getIndex100() {
    var Loeft = weight;
    var Vaegt = body_weight;
    return Math.round(Loeft * 986.63 / (1270.4 - 172970 * ((Math.pow(Vaegt, -1.3925)))) * Math.pow(10, 0)) / Math.pow(10, 0);
  }
  
  function getAllometricScaling() {
    var S = weight;
    var M = body_weight;
    return S * Math.pow(M, -2/3);
  }

  function getBodyweightPercent() {
    return weight / body_weight;
  }
  
  function getNuckolsIndex() {
    var a, b;
    var w = weight;
    var bw = body_weight;
    
    return 100*w/(a*Math.pow(bw, 2)+b*bw);
  }

  var publicAPI = {
    getIndex100 : getIndex100,
    getAllometricScaling : getAllometricScaling,
    getBodyweightPercent : getBodyweightPercent
  };

  return publicAPI;
}

module.exports = motionsplan;
