let motionsplan = {};

motionsplan.Estimate1RM = function(weight, repetitions = 5, formula = "brzycki", body_part = "lower") {

  function getRepMax(rm = 1) {
    if (formula == "reynolds") {
      return getReynolds(rm, body_part);
    } else if (formula == "epley") {
      return getEpley(rm);
    } else if (formula == "lander") {
      return getLander(rm);
    } else if (formula == "lombardi") {
      return getLombardi(rm);
    } else if (formula == "mayhew") {
      return getMayhew(rm);
    } else if (formula == "oconnor") {
      return getOconnor(rm)
    } else if (formula == "wathan") {
      return getWathan(rm);
    } else if (formula == "wendler") {
      return getWendler(rm);
    }

    return getBrzycki(rm);
  }

  function getBrzycki(rm = 1) {
    let repmax = weight * (36 / (37 - repetitions));
    if (rm == 1) {
      return repmax;
    }
    return repmax / (36 / (37 - rm));
  }

  /**
   * Lower body Reynolds seems to overestimate lower body 1RM
   */
  function getReynolds5RM(body_part = "lower") {
    if (repetitions != 5) {
      throw Error('Reynolds only works with 5RM');
    }
    let repmax;
    if (body_part == "lower") {
      repmax = (1.09703 * weight) + 14.2546;
    } else {
      repmax = (1.1307 * weight) + 0.6998;
    }
    return repmax;
  }

  /**
   * Lower body Reynolds original formula from getReynolds5RM()
   * seems to overestimate lower body 1RM so we are using the estimation formula
   * from figure 3 instead for all calculations.
   */
  function getReynolds(rm = 1, body_part = "lower") {
    let repmax = weight / getReynoldsPercent(repetitions, body_part) * 100;
    if (rm == 1) {
      return repmax;
    }
    return getReynoldsPercent(rm, body_part) * repmax / 100;
  }

  function getReynoldsPercent(rm = 1, body_part = "lower") {
    if (body_part == "lower") {
      return 78.17 * Math.exp(-0.0569 * rm) + 26.41;
    } else {
      return 55.51 * Math.exp(-0.0723 * rm) + 48.47;
    }
  }

  function getEpley(rm = 1) {
    let repmax = (1 + (0.0333 * repetitions)) * weight;
    if (rm == 1) {
      return repmax;
    }
    return repmax / (1 + (0.0333 * rm));
  }

  /**
   * Women College Aged
   */
  /*
  function getAbadie(rm = 1) {
   let repmax = 7.24 + (1.05 * weight * repetitions);
    if (rm == 1) {
      return repmax;
    }
    return repmax / (1 + (0.0333 * rm));
  }
  */

  /**
   * McGlothin on Wikipedia
   */
  function getLander(rm = 1) {
    let repmax = (100 * weight) / (101.3 - 2.67123 * repetitions);
    if (rm == 1) {
      return repmax;
    }
    return (repmax * (101.3 - 2.67123 * rm)) / 100;
  }

  function getLombardi(rm = 1) {
    let repmax = weight * (Math.pow(repetitions, 0.1));
    if (rm == 1) {
      return repmax;
    }
    return repmax / ((Math.pow(rm, 0.1)));
  }

  function getMayhew(rm = 1) {
    let repmax = (100 * weight) / (52.2 + (41.9 * Math.exp(-0.055 * repetitions)));
    if (rm == 1) {
      return repmax;
    }
    return repmax * (52.2 + (41.9 * Math.exp(-0.055 * rm))) / 100;
  }

  function getOconnor(rm = 1) {
    let repmax = weight * (1 + 0.025 * repetitions);
    if (rm == 1) {
      return repmax;
    }
    return repmax / (1 + 0.025 * rm);
  }

  function getWathan(rm = 1) {
    let repmax = (100 * weight) / (48.8 + (53.8 * Math.exp(-0.075 * repetitions)));
    if (rm == 1) {
      return repmax;
    }
    return repmax * (48.8 + (53.8 * Math.exp(-0.075 * rm))) / 100;
  }

  function getWendler(rm = 1) {
    let repmax = weight * repetitions * 0.0333 + weight;
    if (rm == 1) {
      return repmax;
    }
    return 1 / (((rm * .0333) / repmax) + (1 / repmax));
  }

  function getAverage(rm = 1) {
    let total = getBrzycki(rm) + getEpley(rm) + getLander(rm) + getLombardi(rm) + getMayhew(rm) + getOconnor(rm) + getReynolds(rm, body_part) + getWathan(rm) + getWendler(rm);
    let no_formulas = 9;
    return (total / no_formulas);
  }

  function getPercentOfRm(rm, percent) {
    return rm * percent / 100;
  }

  let publicAPI = {
    getBrzycki: getBrzycki,
    // getAbadie: getAbadie,
    getReynolds: getReynolds,
    getReynolds5RM: getReynolds5RM,
    getReynoldsPercent: getReynoldsPercent,
    getEpley: getEpley,
    getLander: getLander,
    getLombardi: getLombardi,
    getMayhew: getMayhew,
    getOconnor: getOconnor,
    getWathan: getWathan,
    getPercentOfRm: getPercentOfRm,
    getWendler: getWendler,
    getAverage : getAverage,
    getRepMax : getRepMax
  };

  return publicAPI;
};

module.exports = motionsplan;
