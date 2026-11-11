let motionsplan = {};

motionsplan.Strength = function(weight, body_weight) {
  weight = weight;
  body_weight = body_weight;

  function getIndex100() {
    let Loeft = weight;
    let Vaegt = body_weight;
    return Loeft * 986.63 / (1270.4 - 172970 * ((Math.pow(Vaegt, -1.3925))));
  }
  
  function getAllometricScaling() {
    let S = weight;
    let M = body_weight;
    return S * Math.pow(M, -2/3);
  }

  function getBodyweightPercent() {
    return weight / body_weight;
  }
  
  function getNuckolsIndex() {
    let a, b;
    let w = weight;
    let bw = body_weight;
    
    return 100*w/(a*Math.pow(bw, 2)+b*bw);
  }

  let publicAPI = {
    getIndex100 : getIndex100,
    getAllometricScaling : getAllometricScaling,
    getBodyweightPercent : getBodyweightPercent
  };

  return publicAPI;
}

module.exports = motionsplan;
