let motionsplan = {};

motionsplan.INOL= function(reps, intensity) {

  function getIntensity(rm, lifted) {
    return lifted / rm * 100;
  }

  function getINOL() {
    return reps / (100 - intensity);
  }

  let publicAPI = {
    getINOL : getINOL,
    getIntensity : getIntensity
  };

  return publicAPI;
};

module.exports = motionsplan;
