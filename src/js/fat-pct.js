let motionsplan = {}

/**
 * Also see here
 * https://www.researchgate.net/publication/242017991_Predicting_Body_Composition_in_College_Students_Using_the_Womersley_and_Durnin_Body_Mass_Index_Equation
 */
motionsplan.CalculateFatPercent = function(h, w, a, gender) {
  h = h = h / 100;

  function getBMI() {
    return w / (h * h);
  }

  function getGallagher(ethniticity = "white") {
    let age = a;
    if (isMale()) {
      sex = 1;
    } else {
      sex = 0;
    }
    let asian = 0;
    let afro = 0;
    if (ethniticity == 'asian') {
      asian = 1;
    } else if (ethniticity == "afro") {
      afro = 1;
    }
    return 63.7 - 864 * (1/getBMI()) - 12.1 * sex + 0.12 * age + (129 * asian * (1/getBMI())) - (0.091 * asian * age) - (0.030 * afro * age);
  }

  /**
   * Might be Heitmann
   * Evaluation of body fat estimated from body mass index, skinfolds and impedance. A comparative study
   */
  function getFatMass() {
    var fm;
    if (isMale()) {
      fm = 0.988 * getBMI() + 0.242 * w + 0.094 * a - 30.18;
    } else {
      fm = 0.988 * getBMI() + 0.344 * w + 0.094 * a - 30.18;
    }
    return fm;
  }

  function getBodyFatPercentHeitmannBMIEquation() {
    return getFatMass() / w * 100;
  }

  /**
   * https://www.researchgate.net/publication/242017991_Predicting_Body_Composition_in_College_Students_Using_the_Womersley_and_Durnin_Body_Mass_Index_Equation
   */
  function getBodyFatPercentWomersleyDurninBMIEquation() {
    if (isMale()) {
      return 1.34*getBMI()-12.47;
    }
    return 1.37*getBMI()-3.47;
  }

  function getJacksonPollock1980() {
    if (isMale()) {
      sex = 1;
    } else {
      sex = 0;
    }
    return (1.60 * getBMI()) + (0.13 * a) - (12.1 * sex) - 13.9;
  }

  /**
   * https://www.ncbi.nlm.nih.gov/pubmed/2043597
   */
  function getBodyFatPercentDuerenbergBMIEquation() {
    if (isMale()) {
      sex = 1;
    } else {
      sex = 0;
    }

    if (a < 18) {
      return 1.51 * getBMI() - 0.70 * a - 3.6 * sex + 1.4;
    }
    return 1.20 * getBMI() + 0.23 * a - 10.8 * sex - 5.4;
  }

  function getDuerenberg1998() {
    if (isMale()) {
      sex = 1;
    } else {
      sex = 0;
    }

    return 1.29 * getBMI() + 0.20 * a - 11.4 * sex - 10;
  }

  function getHeritage2002() {
    if (isMale()) {
      sex = 1;
    } else {
      sex = 0;
    }

    return 1.39 * getBMI() + 0.16 * a - 10.34 * sex - 9;
  }

  function isMale() {
    if (gender == 'man') {
      return true; 
    }
    return false;
  }

  var publicAPI = {
    getBMI : getBMI,
    getFatMass: getFatMass,
    getHeitmann1990: getBodyFatPercentHeitmannBMIEquation,
    getWomersleyDurnin1977 : getBodyFatPercentWomersleyDurninBMIEquation,
    getDuerenberg1991 : getBodyFatPercentDuerenbergBMIEquation,
    getDuerenberg1998 : getDuerenberg1998,
    getGallagher2000 : getGallagher,
    getJacksonPollock1980 : getJacksonPollock1980,
    getHeritage2002 : getHeritage2002
  };

  return publicAPI;
}

module.exports = motionsplan;
