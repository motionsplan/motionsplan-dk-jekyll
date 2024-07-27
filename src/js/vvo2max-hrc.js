let motionsplan = {};

// Reference: Heart rate cost of running in track estimates velocity associated with maximal oxygen uptake
motionsplan.VVO2maxHRC = function(hr_submax, distance, minutes, seconds = 0) {

  // Values from this formula does not equal tables usually shown
  // https://www.phymep.com/wp-content/uploads/2014/05/equations.pdf
  function getHRC() {
    // v_submax m/min
    return hr_submax / getVelocitySubmax();
  }

  function getVelocitySubmax() {
    return distance / (minutes + (seconds / 60));
  }

  function getVVO2maxPrMin(hr_max) {
    return hr_max / getHRC();
  }

  let publicAPI = {
    getHRC : getHRC,
    getVVO2maxPrMin : getVVO2maxPrMin
  };

  return publicAPI;
};

module.exports = motionsplan;
