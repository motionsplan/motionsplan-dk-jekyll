let motionsplan = {};

motionsplan.VAM = function(ascent_meters, minutes, seconds) {

  function getVAM() {
    return ascent_meters * 60 / (minutes + seconds/60);
  }

  function getGradientFactor(gradient_percent) {
    return 2 + (gradient_percent / 10);
  }

  function getRelativePower(gradient_percent) {
    return getVAM() / (getGradientFactor(gradient_percent) * 100);
  }

  let publicAPI = {
    getVAM : getVAM,
    getGradientFactor : getGradientFactor,
    getRelativePower : getRelativePower
  };

  return publicAPI;
};

module.exports = motionsplan;
