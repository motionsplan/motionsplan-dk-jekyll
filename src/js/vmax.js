let motionsplan = {};

// vo2max i ml
motionsplan.Vmax = function(vo2max) {
  vo2max = vo2max;

  function getVmax() {
    return (vo2max * 21 / 60 * 0.23);
  }

  var publicAPI = {
    getVmax : getVmax
  };

  return publicAPI;
};

module.exports = motionsplan;
