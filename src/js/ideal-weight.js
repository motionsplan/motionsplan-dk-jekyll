let motionsplan = {}

motionsplan.IdealWeight = function(height, sex) {
  var h, height, sex;

  height = height;
  // Formulas only works for people over 152
  h = height - 152;
  sex = sex;

  function getRobinson() {
    if (sex == 'man') {
      return 52 + 0.75 * h;
    } 
    return 49 + 0.67 * h;
  }

  function getMiller() {
    if (sex == 'man') {
      return 56.2 + 0.56 * h;
    } 
    return 53.1 + 0.54 * h;
  }

  function getHamwi() {
    if (sex == 'man') {
      return 48.0 + 1.06 * h;
    } 
    return 45.5 + 0.87 * h;
  }

  function getDevine() {
    if (sex == 'man') {
      return 50.0 + 0.91 * h;
    } 
    return 45.5 + 0.91 * h;
  }

  // https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4841935/
  function getPeterson(target_bmi = 22) {
    var hgt = height / 100;
    return (2.2 * target_bmi) + (3.5 * target_bmi * (hgt - 1.5));
  }

  // Based on Zacho BMI Women 22,5 og Man 24,5  
  function getIdealWeightBasedOnBmiAndBodytype(bodytype) {
    var hgt = height / 100;
    
    if (sex == 'man') {
      return (hgt * hgt) * 24.5 * bodytype;
    } 
    return (hgt * hgt) * 22.5 * bodytype;
  }

  var publicAPI = {
    getHamwi : getHamwi,
    getDevine : getDevine,
    getMiller : getMiller,
    getRobinson : getRobinson,
    getPeterson : getPeterson,
    getIdealWeightBasedOnBmiAndBodytype : getIdealWeightBasedOnBmiAndBodytype
  };

  return publicAPI;
}

module.exports = motionsplan;
