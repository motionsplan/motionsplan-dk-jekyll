let motionsplan = {};

motionsplan.SteptestQueensCollege = function(sex, hr) {

  function isMale() {
    if (sex == "male") {
      return true;
    }
    return false;
  }
  
  // See more here: https://pubmed.ncbi.nlm.nih.gov/33352603/ 
  function getFitnessLevel() {
    if (isMale()) {
      return 111.33 - (0.42 * hr);
    }
    return 65.81 - (0.1847 * hr);
  }
  
  let publicAPI = {
    getFitnessLevel : getFitnessLevel

  };

  return publicAPI;
}

module.exports = motionsplan;
