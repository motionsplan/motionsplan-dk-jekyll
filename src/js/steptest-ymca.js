let motionsplan = {};

motionsplan.SteptestYMCA = function(sex, HR, Height, Weight, Age) {

  function isMale() {
    if (sex == "male") {
      return true;
    }
    return false;
  }
  
  // See more here: https://pmc.ncbi.nlm.nih.gov/articles/PMC7171059/
  // After 5 seconds, the subjects heart rate is monitored for one minute.
  // Korean
  function getFitnessLevel() {
    if (isMale()) {
      return 70.597 - 0.246 * (Age) + 0.077 * (Height) - 0.222 * (Weight) - 0.147 * (HR);
    }
    return 70.597 - 0.185 * (Age) + 0.097 * (Height) - 0.246 * (Weight) - 0.122 * (HR);
  }
  
  let publicAPI = {
    getFitnessLevel : getFitnessLevel

  };

  return publicAPI;
}

module.exports = motionsplan;
