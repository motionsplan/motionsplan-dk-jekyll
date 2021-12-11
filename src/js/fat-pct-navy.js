let motionsplan = {};

/**
 * Also see here
 * https://www.researchgate.net/publication/242017991_Predicting_Body_Composition_in_College_Students_Using_the_Womersley_and_Durnin_Body_Mass_Index_Equation
 */
motionsplan.CalculateFatPercentNavy = function(sex, h, waist, neck, hip = 0) {
  let height = h;
  waist = waist;
  sex = sex;
  hip = hip;
  neck = neck;

  function getFatPercent() {
   let eq;
    if (sex == 'man') {
      eq = (1.0324 - (0.19077 * Math.log10(waist - neck)) + (0.15456 * Math.log10(height)));
    } else {
      eq = (1.29579 - (0.35004 * Math.log10(waist + hip - neck)) + (0.22100 * Math.log10(height)));
    }
    
    return (495/eq) - 450;
  }

  let publicAPI = {
    getFatPercent : getFatPercent
  };

  return publicAPI;
};

module.exports = motionsplan;
