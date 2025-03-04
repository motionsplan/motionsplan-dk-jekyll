let motionsplan = {};

motionsplan.SteptestYMCAModified = function() {

  function isMale(sex) {
    if (sex == "male") {
      return true;
    }
    return false;
  }

  function getFitnessLevel(type = "HRR60", hr) {
    if (type == "HRR15") {
      return getFitnessLevelHRR15s(hr);
    }
    return getFitnessLevelHRR60s(hr);
  }

  // 10.1007/s40279-015-0445-1
  function getFitnessLevelHRR15s(HR15) {
    return (-0.9675 * HR15) + 77.643; 
  }

  // 10.1007/s40279-015-0445-1
  function getFitnessLevelHRR60s(HR60) {
    return (-0.2805 * HR60) + 76.710;
  }

  // 10.1007/s40279-015-0445-1
  function getStepHeight(sex, Height) {
    if (isMale(sex)) {
      return 0.192 * (Height);
    }
    return 0.189 * Height;
  }
  
  let publicAPI = {
    getFitnessLevel : getFitnessLevel,
    getStepHeight : getStepHeight

  };

  return publicAPI;
}

module.exports = motionsplan;
