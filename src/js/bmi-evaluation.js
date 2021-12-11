let motionsplan = {};

motionsplan.BMIEvaluation = function(type, gender, age) {

  let high;
  let low;
  let min;
  let max;
  let optimum;

  function getEvaluation(bmi) {
    if (age < 18) {
      return getChildren(bmi);
    }

    min = 10;
    max = 35;
    optimum = 25;

    if (type == "nhanes") {
      return getNhanes(bmi);
    }

    return getWhoEvaluation(bmi);
  }

  // Interpretation for children is low and high means the overweight status
  // For adults it is low for underweight and high for overweight
  function getHigh() {
    return high;
  }

  function getLow() {
    return low;
  }

  function getMin() {
    return min;
  }

  function getMax() {
    return max;
  }

  function getOptimum() {
    return optimum;
  }

  function getWhoEvaluation(bmi) {
    low = 18.5;
    high = 25;
    if (bmi >= 40) {
      return "Ekstrem fedme";
    } else if (bmi >= 35) {
      return "Fedme";
    } else if (bmi >= 30) {
      return "Meget overvægtig";
    } else if (bmi >= 25) {
      return "Overvægtig";
    } else if (bmi >= 18.5) {
      return "Normalvægtig";
    }
    return "Undervægtig";
  }

  function getNhanes(bmi) {
    if (gender == "female") {

      low = 19.1;
      high = 25.8;

      if (bmi >= 32.3) {
        return 'Fed';
      } else if (bmi >= 27.3) {
        return 'Overvægtig';
      } else if (bmi >= 25.8) {
        return 'Marginalt overvægtig';
      } else if (bmi >= 19.1) {
        return 'Normalvægtig';
      } else {
        return 'Undervægtig';
      }
    }

    high = 26.4;
    low = 20.7;

    if (bmi >= 31.1) {
      return 'Fed';
    } else if (bmi >= 27.8) {
      return 'Overvægtig';
    } else if (bmi >= 26.4) {
      return 'Marginalt overvægtig';
    } else if (bmi >= 20.7) {
      return 'Normalvægtig';
    } else {
      return 'Undervægtig';
    }
  }

  function getChildren(bmi) {

    if (gender == "male") {
      if (age==2.0) {
        low=18.41;
        high=20.09;
      }
      if (age==2.5) {
        low=18.13;
        high=19.80;
      }
      if (age==3.0) {
        low=17.89;
        high=19.57;
      }
      if (age==3.5) {
        low=17.69;
        high=19.39;
      }
      if (age==4.0) {
        low=17.55;
        high=19.29;
      }
      if (age==4.5) {
        low=17.47;
        high=19.26;
      }
      if (age==5.0) {
        low=17.42;
        high=19.30;
      }
      if (age==5.5) {
        low=17.45;
        high=19.47;
      }
      if (age==6.0) {
        low=17.55;
        high=19.78;
      }
      if (age==6.5) {
        low=17.71;
        high=20.23;
      }
      if (age==7.0) {
        low=17.92;
        high=20.63;
      }
      if (age==7.5) {
        low=18.16;
        high=21.09;
      }
      if (age==8.0) {
        low=18.44;
        high=21.60;
      }
      if (age==8.5) {
        low=18.76;
        high=22.17;
      }
      if (age==9.0) {
        low=19.10;
        high=22.77;
      }
      if (age==9.5) {
        low=19.46;
        high=23.39;
      }
      if (age==10.0) {
        low=19.84;
        high=24.00;
      }
      if (age==10.5) {
        low=20.20;
        high=24.57;
      }
      if (age==11.0) {
        low=20.55;
        high=25.10;
      }
      if (age==11.5) {
        low=20.89;
        high=25.58;
      }
      if (age==12.0) {
        low=21.22;
        high=26.02;
      }
      if (age==12.5) {
        low=21.56;
        high=26.43;
      }
      if (age==13.0) {
        low=21.91;
        high=26.84;
      }
      if (age==13.5) {
        low=22.27;
        high=27.25;
      }
      if (age==14.0) {
        low=22.62;
        high=27.63;
      }
      if (age==14.5) {
        low=22.96;
        high=27.98;
      }
      if (age==15.0) {
        low=23.29;
        high=28.30;
      }
      if (age==15.5) {
        low=23.60;
        high=28.60;
      }
      if (age==16.0) {
        low=23.90;
        high=28.88;
      }
      if (age==16.5) {
        low=24.19;
        high=29.14;
      }
      if (age==17.0) {
        low=24.46;
        high=29.41;
      }
      if (age==17.5) {
        low=24.73;
        high=29.70;
      }
      if (age==18.0) {
        low=25;
        high=30;
      }
    }
    // Calculate percentile value - female
    if (gender == "female") {
      if (age==2.0) {
        low=18.02;
        high=19.81;
      }
      if (age==2.5) {
        low=17.76;
        high=19.55;
      }
      if (age==3.0) {
        low=17.56;
        high=19.36;
      }
      if (age==3.5) {
        low=17.40;
        high=19.23;
      }
      if (age==4.0) {
        low=17.28;
        high=19.15;
      }
      if (age==4.5) {
        low=17.19;
        high=19.12;
      }
      if (age==5.0) {
        low=17.15;
        high=19.17;
      }
      if (age==5.5) {
        low=17.20;
        high=19.34;
      }
      if (age==6.0) {
        low=17.34;
        high=19.65;
      }
      if (age==6.5) {
        low=17.53;
        high=20.08;
      }
      if (age==7.0) {
        low=17.75;
        high=20.51;
      }
      if (age==7.5) {
        low=18.03;
        high=21.01;
      }
      if (age==8.0) {
        low=18.35;
        high=21.57;
      }
      if (age==8.5) {
        low=18.69;
        high=22.18;
      }
      if (age==9.0) {
        low=19.07;
        high=22.81;
      }
      if (age==9.5) {
        low=19.45;
        high=23.46;
      }
      if (age==10.0) {
        low=19.86;
        high=24.11;
      }
      if (age==10.5) {
        low=20.29;
        high=24.77;
      }
      if (age==11.0) {
        low=20.74;
        high=25.42;
      }
      if (age==11.5) {
        low=21.20;
        high=26.05;
      }
      if (age==12.0) {
        low=21.68;
        high=26.67;
      }
      if (age==12.5) {
        low=22.14;
        high=27.24;
      }
      if (age==13.0) {
        low=22.58;
        high=27.76;
      }
      if (age==13.5) {
        low=22.98;
        high=28.20;
      }
      if (age==14.0) {
        low=23.34;
        high=28.57;
      }
      if (age==14.5) {
        low=23.66;
        high=28.87;
      }
      if (age==15.0) {
        low=23.94;
        high=29.11;
      }
      if (age==15.5) {
        low=24.17;
        high=29.29;
      }
      if (age==16.0) {
        low=24.37;
        high=29.43;
      }
      if (age==16.5) {
        low=24.54;
        high=29.56;
      }
      if (age==17.0) {
        low=24.70;
        high=29.69;
      }
      if (age==17.5) {
        low=24.85;
        high=29.84;
      }
      // not used
      if (age==18.0) {
        low=25;
        high=30;
      }
    }

    min = low - 10;
    max = high + 3;
    optimum = low - 1;

    if (bmi >= high) {
      return "Risiko for fedme";
    } else if (bmi >= low) {
      return "Risiko for overvægt";
    } else {
      return "Normalvægtig";
    }
  }

  let publicAPI = {
    getEvaluation : getEvaluation,
    getLow : getLow,
    getHigh : getHigh,
    getMin : getMin,
    getMax : getMax,
    getOptimum : getOptimum
  };

  return publicAPI;
};

module.exports = motionsplan;
