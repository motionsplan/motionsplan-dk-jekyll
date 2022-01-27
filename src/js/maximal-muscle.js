let motionsplan = {}

motionsplan.MaximalMuscle = function(h) {

  h = h = h / 100;

  function getMaximalFFM() {
    return (h * h) * 34;
  }

  function getMaximalMuscleMass() {
    return (h * h) * 17;
  }

  let publicAPI = {
    getMaximalMuscleMass : getMaximalMuscleMass,
    getMaximalFFM : getMaximalFFM

  };

  return publicAPI;
}

module.exports = motionsplan;
