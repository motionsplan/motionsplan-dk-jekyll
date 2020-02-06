let motionsplan = {};

motionsplan.Estimate1RM = function(weight, repetitions) {
  weight = weight;
  repetitions = repetitions;

  function getBrzycki(rm = 1) {
    var repmax = weight * (36 / (37 - repetitions))
    if (rm == 1) {
      return repmax;
    }
    return repmax / (36 / (37 - rm));
  }

  function getEpley(rm = 1) {
    var repmax = (1 + (0.0333 * repetitions)) * weight;
    if (rm == 1) {
      return repmax;
    }
    return repmax / (1 + (0.0333 * rm));
  }

  function getReynolds(rm = 1) {
    var repmax = (1 + (0.0333 * repetitions)) * weight;
    if (rm == 1) {
      return repmax;
    }
    return repmax / (1 + (0.0333 * rm));
  }

  /**
   * Women College Aged
   */
  function getAbadie(rm = 1) {
    var repmax = 7.24 + (1.05 * weight * repetitions);
    if (rm == 1) {
      return repmax;
    }
    return repmax / (1 + (0.0333 * rm));
  }

  function getLander() {
    return (100 * weight) / (101.3 - 2.67123 * repetitions);
  }

  function getLombardi() {
    return weight * (Math.pow(repetitions, 0.1));
  }

  function getMayhew() {
    return (100 * weight) / (52.2 + (41.9 * Math.exp(-0.055 * repetitions)));
  }

  function getOconnor() {
    return weight * (1 + 0.025 * repetitions);
  }

  function getWathan() {
    return (100 * weight) / (48.8 + (53.8 * Math.exp(-0.075 * repetitions)));
  }

  /**
   * Advanced - originally from motion-online.dk.
   * https://www.motion-online.dk/rm-beregner/
   * https://www.motion-online.dk/rm-beregner-teoretisk-baggrund/
   */
  function getMOL(trained, sex, rm = 1) {
    var trained, koen;
    var a, b, repmax;
    
    trained = trained;
    koen = sex;

    if (koen == 1 && trained == 1) {
      a = -2.1021;
      b = 102.52;
    }
    else if (koen == 1 && trained == 0) {
      a = -2.6578;
      b = 102.65;
    }
    else if (koen == 0 && trained == 1) {
      a = -2.1275;
      b = 101.59;
    }
    else if (koen == 0 && trained == 0) {
      a = -2.6914;
      b = 102.14;
    }
    if (repetitions == 1) {
      repmax = weight;
    }
    else {
      repmax = weight / (a * repetitions + b) * 100;
    }

    if (rm == 1) {
      return repmax;
    }
    return (a*rm+b)*repmax/100;
  }

  /**
   * From motion-online RM calculator
   */
  function getMOLBrzycki(rm = 1)
  {
    var a = -2.78, b = 102.78;
    var repmax;
    if (repetitions == 1) {
      repmax = weight;
    }
    else {
      repmax = weight / (a * repetitions + b) * 100;
    }
    if (rm == 1) {
      return repmax;
    }
    return (a*rm+b)*repmax/100;
  }

  function getPercentOfRm(rm, percent) {
    return rm * percent / 100;
  }

  var publicAPI = {
    getBrzycki: getBrzycki,
    getEpley: getEpley,
    getLander: getLander,
    getLombardi: getLombardi,
    getMayhew: getMayhew,
    getOconnor: getOconnor,
    getWathan: getWathan,
    getMOL: getMOL,
    getMOLBrzycki : getMOLBrzycki,
    getPercentOfRm : getPercentOfRm
  };

  return publicAPI;
}

module.exports = motionsplan;
