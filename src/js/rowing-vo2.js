let motionsplan = {}

// weight in kg
// velocity in km/t
// oxygenuptake in L O2 / min
motionsplan.RowingVO2 = function(WM, gender = 'male') {

  function isMale() {
    if (gender == 'male') {
      return true;
    }
    return false;
  }

  function getVO2() {
      if (isMale()) {
        return 1.682 + 0.0097 * WM;
      }
      return 1.631 + 0.0088 * WM;
  }

  /**
   * @return float (ml/kg/min)
   */
  function getFitnessLevel(weight) {
    return getVO2() / weight * 1000;
  }

  let publicAPI = {
    getVO2 : getVO2,
    getFitnessLevel : getFitnessLevel
  };

  return publicAPI;
}

module.exports = motionsplan;
