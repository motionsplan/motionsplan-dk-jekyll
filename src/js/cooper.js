let motionsplan = {};

motionsplan.CooperClinicMortalityRiskIndex = function(age, hr, bloodpressure, diabetes, smoker, bmi, fitness) {

  age = age;
  hr = hr;
  bloodpressure = bloodpressure;
  diabetes = diabetes;
  smoker = smoker;
  bmi = bmi;
  fitness = fitness;

  function getBloodpressurePoint() {
    if (bloodpressure == "over") {
      return 2;
    }
    return 0;
  }

  function getDiabetesPoint() {
    if (diabetes == "yes") {
      return 4;
    }
    return 0;
  }

  function getSmokerPoint() {
    if (diabetes == "current") {
      return 4;
    }
    
    if (diabetes == "previous") {
      return 1;
    }
    return 0;
  }
  
  function getAgePoint() {
    if (age < 44) {
      return 0;
    }
    if (age < 49) {
      return 3;
    }
    if (age < 54) {
      return 6;
    }
    if (age < 59) {
      return 8;
    }
    if (age < 64) {
      return 9;
    }
    if (age < 69) {
      return 10;
    }
    // TODO: How to handle that.
    // test is not originally designed for people older than 70
  }

  function getHrPoint() {
    if (hr >= 80) {
      return 2;
    }
    return 0;
  }

  function getBMIPoint() {
    if (bmi > 35) {
      return 3;
    }

    return 0;
  }

  function getFitnessPoint() {
    if (fitness < 35) {
      return 2;
    }

    return 0;
  }

  function getRiskPoint() {
    var point = getAgePoint() + getHrPoint() + getBloodpressurePoint() + getDiabetesPoint() + getSmokerPoint() + getBMIPoint() + getFitnessPoint();
    return point;
  }

  function getAbsoluteRisk() {
    var point = getRiskPoint();
    
    var point_to_risk = [];
    point_to_risk[0] = 1.8;
    point_to_risk[1] = 2.2;
    point_to_risk[2] = 2.6;
    point_to_risk[3] = 3.1;
    point_to_risk[4] = 3.7;
    point_to_risk[5] = 4.4;
    point_to_risk[6] = 5.4;
    point_to_risk[7] = 6.5;
    point_to_risk[8] = 7.9;
    point_to_risk[9] = 9.7;
    point_to_risk[10] = 11.8;
    point_to_risk[11] = 14;
    point_to_risk[12] = 16.5;
    point_to_risk[13] = 20.4;
    point_to_risk[14] = 23.2;
    point_to_risk[15] = 28.1;
    point_to_risk[16] = 32.1;
    
    if (point_to_risk[point]) {
      return point_to_risk[point];
    }
    
    return 46.7;
  }

  function getRelativeRisk() {
    var risk = getAbsoluteRisk();
    if (age < 34) {
      return risk / 2.4;
    }
    if (age < 44) {
      return risk / 2.6;
    }
    if (age < 49) {
      return risk / 4.6;
    }
    if (age < 54) {
      return risk / 8.2;
    }
    if (age < 59) {
      return risk / 12.6;
    }
    if (age < 64) {
      return risk / 16.1;
    }
    return risk / 18.1;
  }

  var publicAPI = {
    getRiskPoint: getRiskPoint,
    getAbsoluteRisk: getAbsoluteRisk,
    getRelativeRisk: getRelativeRisk

  };

  return publicAPI;
}

module.exports = motionsplan;
