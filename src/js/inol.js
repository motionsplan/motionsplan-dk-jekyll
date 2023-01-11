let motionsplan = {};

motionsplan.INOL= function(intensity) {

  function getIntensity(rm, lifted) {
    return lifted / rm * 100;
  }

  function getINOL(reps) {
    return reps / (100 - intensity);
  }

  function getReps(inol) {
    return inol * (100 - intensity);
  }

  let publicAPI = {
    getINOL : getINOL,
    getIntensity : getIntensity,
    getReps : getReps
  };

  return publicAPI;
};

module.exports = motionsplan;
