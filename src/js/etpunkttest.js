let motionsplan = {};

motionsplan.EtPunktTest = function(sex, age, weight, hr, work, load = "watt") {
  work = work;

  // work should be in kilopond
  if (load == "watt") {
    work = work * 6.12; 
  }
  sex = sex;
  weight = weight;
  hr = hr;
  age = age;

  function isMale() {
    if (sex == "1") {
      return true;
    }
    return false;
  }

  function getMaximalOxygenUptakeBuono() {
    if (isMale()) {
      return (0.00212 * work + 0.299) / (0.769 * hr - 48.5) * 100;
    }
    return (0.00193 * work + 0.326) / (0.769 * hr - 56.1) * 100;
  }
  
  function getAgeCorrectionBueno() {
    // Buono et al (1989)
    return (0.166 - 0.028 * age) + 0.026 * weight + 0.66 * getMaximalOxygenUptakeBuono();
  }

  function getMaximalOxygenUptageBrianMac() {
    let v = 0;
    let kg = work;
    let r1, r2;
    let pr = hr;

    if (isMale()) {
      if ((kg >= 450) && (kg < 750)) {
		    r1 = 15.614286 + (pr*-0.148869) + (pr*pr*0.0003869);
		    r2 = 17.9 + (pr*-0.164167) + (pr*pr*0.0004167);
		    v = r1+(((r2-r1)/300) * (kg-450));
	    }
	 
	    if ((kg>=750) && (kg<=900)) {
		    r2 = 17.142857 + (pr*-0.143274) + (pr*pr*0.0003274);
		    r1 = 17.9 + (pr*-0.164167) + (pr*pr*0.0004167);
		    v = r1+(((r2-r1)/150) * (kg-750));
	    }
	  } else {
      if ((kg>=300) && (kg<=600)) {
		    r1 = 15.754286 + (pr*-0.154577) + (pr*pr*0.0004077);
		    r2 = 25.235714 + (pr*-0.265089) + (pr*pr*0.0007589);
		    v = r1+(((r2-r1)/300) * (kg-300));
	    }
	    if ((kg>=600) && (kg<=750)) {
		    r2 = 25.371429 + (pr*-0.251845) + (pr*pr*0.0006845);
		    r1 = 25.235714 + (pr*-0.265089) + (pr*pr*0.0007589);
		    v = r1+(((r2-r1)/150) * (kg-600));
	    }
    }
    return v;
  }

  function getAgeCorrectionAastrand() {
/*
15	1.10
25	1.00
35	0.87
40	0.83
45	0.78
50	0.75
55	0.71
60	0.68
65	0.65
*/
    if (age < 20) {
      return 1.10 * getMaximalOxygenUptakeBuono();
    }
    if (age < 30) {
      return 1.0 * getMaximalOxygenUptakeBuono();
    }
    if (age < 40) {
      return 0.87 * getMaximalOxygenUptakeBuono();
    }
    if (age < 45) {
      return 0.83 * getMaximalOxygenUptakeBuono();
    }
    if (age < 50) {
      return 0.78 * getMaximalOxygenUptakeBuono();
    }
    if (age < 55) {
      return 0.75 * getMaximalOxygenUptakeBuono();
    }
    if (age < 60) {
      return 0.71 * getMaximalOxygenUptakeBuono();
    }
    if (age < 65) {
      return 0.68 * getMaximalOxygenUptakeBuono();
    }
    return 0.65 * getMaximalOxygenUptakeBuono();
  }
  
  function getMaximalOxygenUptake() {
    return getAgeCorrectionBueno();
  }

  function getFitnessLevel() {
    return (getMaximalOxygenUptake() / weight * 1000);
  }

  var publicAPI = {
    getMaximalOxygenUptake: getMaximalOxygenUptake,
    getFitnessLevel : getFitnessLevel

  };

  return publicAPI;
};

module.exports = motionsplan;
