let motionsplan = {}

motionsplan.BMRGerriorPAL = function(sex, weight) {

  let met_intense = 10;
  let activity_intense = 0;
  let met_moderat = 7;
  let activity_moderat = 0;
  let met_light = 4;
  let activity_light = 0;
  let met_standing = 2;
  let activity_standing = 0;
  let met_sleeping = 0.9;
  let activity_sleeping = 0;
  let met_sitting = 1.2;
  let activity_sitting = 0;

  function isMale() {
    if (sex == "male") {
      return true;
    }
    return false;
  }

  function setIntense(duration, met) {
    activity_intense = duration;
    met_intense = met;
  }

  function setModerat(duration, met) {
    activity_moderat = duration;
    met_moderat = met;
  }

  function setLight(duration, met) {
    activity_light = duration;
    met_light = met;
  }

  function setStanding(duration, met) {
    activity_standing = duration;
    met_standing = met;
  }

  function setSleeping(duration, met) {
    activity_sleeping = duration;
    met_sleeping = met;
  }

  function setSitting(duration, met) {
    activity_sitting = duration;
    met_sitting = met;
  }

  // physical activity level (PAL)
  // https://pmc.ncbi.nlm.nih.gov/articles/PMC1784117/
  function getPAL(bmr_kcal) {
      // Calculate PAL from Gerrior with weight factor
      let pal_intense = ((met_intense - 1) * ((1.15 / 0.9) * activity_intense) / 1440) / (bmr_kcal / (0.0175 * 1440 * weight));
      let pal_moderat = ((met_moderat - 1) * ((1.15 / 0.9) * activity_moderat) / 1440) / (bmr_kcal / (0.0175 * 1440 * weight));
      let pal_light = ((met_light - 1) * ((1.15 / 0.9) * activity_light) / 1440) / (bmr_kcal / (0.0175 * 1440 * weight));
      let pal_standing = ((met_standing - 1) * ((1.15 / 0.9) * activity_standing) / 1440) / (bmr_kcal / (0.0175 * 1440 * weight));
      let pal_sleeping = ((met_sleeping - 1) * ((1.15 / 0.9) * activity_sleeping) / 1440) / (bmr_kcal / (0.0175 * 1440 * weight));
      let pal_sitting = ((met_sitting - 1) * ((1.15 / 0.9) * activity_sitting) / 1440) / (bmr_kcal / (0.0175 * 1440 * weight));
      let pal_gerrior = 1.1 + pal_intense + pal_moderat + pal_light + pal_standing + pal_sleeping + pal_sitting;

        // Using Gerrior PAL calculations as constant
      return pal_gerrior;
  }

  function getDeltaPAL(MET, duration, weight, bee) {
    return ((MET - 1) * ((1.15 / 0.9) * duration) / 1440) / (bee / (0.0175 * 1440 * weight));
  }

  // physical activity coefficient (PA)
  // To account for this variability, the EER equations include a physical activity coefficient (PA).
  // This coefficient considers the impact of the duration and intensity of the physical activity performed and the efficiency of performance
  function getPA(bmr_kcal) {
    if (isMale(bmr_kcal)) {
      if (getPAL(bmr_kcal) >= 1.9) {
        return 1.54;
      } else if (getPAL(bmr_kcal) >= 1.6 ) {
        return 1.27;
      } else if (getPAL(bmr_kcal) >= 1.4) {
        return 1.12;
      }
      return 1;
    }
    if (getPAL(bmr_kcal) >= 1.9) {
      return 1.45;
    } else if (getPAL(bmr_kcal) >= 1.6 ) {
      return 1.27;
    } else if (getPAL(bmr_kcal) >= 1.4) {
      return 1.14;
    }
    return 1;
  }

  let publicAPI = {
    getPAL : getPAL,
    getPA : getPA,
    setIntense : setIntense,
    setModerat : setModerat,
    setLight : setLight,
    setStanding: setStanding,
    setSleeping : setSleeping,
    setSitting : setSitting
  };

  return publicAPI;
}

module.exports = motionsplan;
