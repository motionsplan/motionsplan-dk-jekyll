let motionsplan = {};

motionsplan.PonderalIndex = function(h, w) {

  h = h = h / 100;
  w = w;

  function getPonderalIndex() {
    return w / (h * h * h);
  }

  let publicAPI = {
    getPonderalIndex
  };

  return publicAPI;
};

module.exports = motionsplan;
