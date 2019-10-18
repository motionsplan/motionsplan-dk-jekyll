let motionsplan = {};

motionsplan.CooperClinicMortalityRiskIndex = function(age, hr, bloodpressure, diabetes, smoker, bmi, fitness)
{
  var age, hr, bloodpressure, diabetes, smoker, bmi, fitness;
  
  age = age;
  hr = hr;
  bloodpressure = bloodpressure;
  diabetes = diabetes;
  smoker = smoker;
  bmi = bmi;
  fitness = fitness;
  
  function getRisk()
  {
     var risk;
     var point = getRiskPoint();
     if (point == 0) {
         risk = 1.8;
     }
     else if (point == 1) {
         risk = 2.2;
     }
     else if (point == 2) {
         risk = 2.6;
     }
     else if (point == 3) {
         risk = 3.1;
     }
     else if (point == 4) {
         risk = 3.7;
     }
     else if (point == 5) {
         risk = 4.4;
     }
     else if (point == 6) {
         risk = 5.4;
     }
     else if (point == 7) {
         risk = 6.5;
     }
     else if (point == 8) {
         risk = 7.9;
     }
     else if (point == 9) {
         risk = 9.7;
     }
     else if (point == 10) {
         risk = 11.8;
     }
     else if (point == 11) {
         risk = 14;
     }
     else if (point == 12) {
         risk = 16.5;
     }
     else if (point == 13) {
         risk = 20.4;
     }
     else if (point == 14) {
         risk = 23.2;
     }
     else if (point == 15) {
         risk = 28.1;
     }
     else if (point == 16) {
         risk = 32.1;
     }
     else {
         risk = 46.7;
     }

    return risk;
  }
  
  function getRiskPoint()
  {
     var point, alderpoint;
     if (age == -1) {
         alderpoint = 0;
     }
     else {
         alderpoint = age;
     }
     point = alderpoint + hr + bloodpressure + diabetes + smoker + bmi + fitness;
     return point;
  }
  
  function getRisk3()
  {
     var risk2, risk3;
     var risk = getRisk();
     if (age == -1) {
         risk2 = risk / 2.4;
     }
     else if (age == 0) {
         risk2 = risk / 2.6;
     }
     else if (age == 3) {
         risk2 = risk / 4.6;
     }
     else if (age == 6) {
         risk2 = risk / 8.2;
     }
     else if (age == 8) {
         risk2 = risk / 12.6;
     }
     else if (age == 9) {
         risk2 = risk / 16.1;
     }
     else {
         risk2 = risk / 18.1;
     }
     risk3 = Math.round((risk2) * Math.pow(10, 1)) / Math.pow(10, 1);
     return risk3;
  }

  var publicAPI = {
    getRiskPoint : getRiskPoint,
    getRisk : getRisk,
    getRisk3 : getRisk3
    
  };  
  
  // To be returned upon creation of a new instance.  
  return publicAPI; 
}

module.exports = motionsplan;
