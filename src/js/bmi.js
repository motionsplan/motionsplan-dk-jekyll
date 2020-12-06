let motionsplan = {};

motionsplan.BMI = function(h, w) {

  h = h = h / 100;
  w = w;

  function getBMI() {
    return w / (h * h);
  }

  function getPonderalIndex() {
    return w / (h * h * h);
  }

  let publicAPI = {
    getBMI : getBMI,
    getPonderalIndex : getPonderalIndex

  };

  return publicAPI;
};

module.exports = motionsplan;
