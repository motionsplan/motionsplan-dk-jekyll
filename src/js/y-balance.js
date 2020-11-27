let motionsplan = {};

motionsplan.YBalance = function(anterior, posterolateral, posteromedial) {
  
  function getAbsoluteReachDistance() {
    return (anterior + posterolateral + posteromedial) / 3;
  }

  function getRelativeReachDistance(limb_length) {
    return getAbsoluteReachDistance() / limb_length * 100;
  }
  
  function getCompositeReachDistance(limb_length) {
    return (anterior + posterolateral + posteromedial) / (3 * limb_length) * 100;
  }

  let publicAPI = {
    getAbsoluteReachDistance : getAbsoluteReachDistance,
    getRelativeReachScore : getRelativeReachDistance,
    getCompositeReachScore : getCompositeReachDistance
  };

  return publicAPI;
};

module.exports = motionsplan;
