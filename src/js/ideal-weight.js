let motionsplan = {}

motionsplan.IdealWeight = function(height, sex) {
  // Formulas only works for people over 152
  let h = height - 152;
  // let h = (height * 0.0328084 - 5) * 12; // formula is in inches

  function isMale() {
    if (sex == 'man') {
      return true;
    }
    return false;
  }

  function getRobinson() {
    if (isMale()) {
      return 52 + 0.75 * h;
    } 
    return 49 + 0.67 * h;
  }

  function getMiller() {
    if (isMale()) {
      return 56.2 + 0.56 * h;
    } 
    return 53.1 + 0.54 * h;
  }

  function getHamwi() {
    if (isMale()) {
      return 48.0 + 1.06 * h;
    } 
    return 45.5 + 0.87 * h;
  }

  function getDevine() {
    if (isMale()) {
      return 50.0 + 0.91 * h;
    } 
    return 45.5 + 0.91 * h;
  }

  // https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4841935/
  function getPeterson(target_bmi = 22) {
    let hgt = height / 100;
    return (2.2 * target_bmi) + (3.5 * target_bmi * (hgt - 1.5));
  }

  // Based on Zacho BMI Women 22,5 og Man 24,5  
  function getIdealWeightBasedOnBMI(target_bmi = 0) {
    let hgt = height / 100;
    
    if (target_bmi == 0) {
      if (isMale()) {
        target_bmi = 24.5;
      } else {
        target_bmi = 22.5;
      }
    }

    return (hgt * hgt) * target_bmi;
  }

  let publicAPI = {
    getHamwi : getHamwi,
    getDevine : getDevine,
    getMiller : getMiller,
    getRobinson : getRobinson,
    getPeterson : getPeterson,
    getIdealWeightBasedOnBMI : getIdealWeightBasedOnBMI,
    isMale : isMale
  };

  return publicAPI;
}

module.exports = motionsplan;
