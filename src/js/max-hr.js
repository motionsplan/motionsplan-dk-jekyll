let motionsplan = {};

motionsplan.EstimateMaxHr = function(age, formula = "tanaka") {

  function getMaxHr() {
    if (formula == "aastrand") {
      return getAastrand();
    }
    if (formula == "arena") {
      return getArena();
    }
    if (formula == "nes") {
      return getNes();
    }
    if (formula == "fox") {
      return getFox();
    }
    if (formula == "fairbarn_female") {
      return getFairbarnFemale();
    }
    if (formula == "fairbarn_male") {
      return getFairbarnMale();
    }
    if (formula == "gellish_linear") {
      return getGellishLinear();
    }
    if (formula == "gellish") {
      return getGellish();
    }
    if (formula == "whyte_female") {
      return getWhyteFemale();
    }
    if (formula == "whyte_male") {
      return getWhyteMale();
    }
    if (formula == "inbar") {
      return getInbar();
    }
    if (formula == "gulati") {
      return getGulati();
    }
    if (formula == 'londeree_moeschberger') {
      return getLondereeMoeschberger();
    }
    return getTanaka();
  }
  
  function getTanaka() {
    return (208 - 0.7 * age);
  }
  
  function getAastrand() {
    return 216.6 - 0.84 * age;
  }
  
  function getArena() {
    return 209.3 - 0.72 * age;
  }
  
  function getNes() {
    return 211 - 0.64 * age;
  }
  
  function getFox() {
    return (220 - age);
  }
  
  function getFairbarnFemale() {
    return 201 - 0.63 * age;
  }
  
  function getFairbarnMale() {
    return 208 - 0.8 * age;
  }

  function getWhyteFemale() {
    return 216 - (1.09 * age);
  }
  
  function getWhyteMale() {
    return 202 - (0.55 * age)
  }
  
  function getInbar() {
    return 205.8 - (0.685 * age);
  }

  function getGellish() {
    return 192 - 0.007 * Math.pow(age, 2);
  }

  function getLondereeMoeschberger() {
    return 206.3 - (0.711 * age);
  }

  function getGellishLinear() {
    return (207 - 0.7 * age);
  }
  
  function getGulati() {
    return 206 - 0.88 * age;
  }

  function getAverage() {
    let no_formulas = 10;
    let total = getGulati() + getGellish() + getLondereeMoeschberger() + getGellishLinear() + getInbar() + getFox() + getAastrand() + getArena() + getTanaka() + getNes();
    return total / no_formulas;
  }

  let publicAPI = {
    getMaxHr : getMaxHr,
    getAverage : getAverage
  };

  return publicAPI;
};

module.exports = motionsplan;
