let motionsplan = {};

motionsplan.JumpMat = function(jump_time, jump_height, peak_power) {
  jump_height = jump_height;
  jump_height = jump_height;
  peak_power = peak_power;

  // N m/s

  function getForce() {
    return (peak_power * (jump_time / 2)) / (jump_height);
  }

  function getKg() {
    return getForce() / 9.81;
  }

  var publicAPI = {
    getForce : getForce,
    getKg : getKg
  };

  return publicAPI;
};

module.exports = motionsplan;
