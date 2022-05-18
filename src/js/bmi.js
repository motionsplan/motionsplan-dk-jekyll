let motionsplan = {};

motionsplan.BMI = function(h, w) {

  h = h = h / 100;
  w = w;

  function getBMI() {
    return w / (h * h);
  }

  let publicAPI = {
    getBMI : getBMI
  };

  return publicAPI;
};

module.exports = motionsplan;
