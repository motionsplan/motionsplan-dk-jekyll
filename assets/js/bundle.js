(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict'

const fitness = require('./fitness-hr');
const maxhr = require('./max-hr');
const cooper = require('./cooper');
const fat = require('./fat-pct');

$(document).ready(function() {

    // Mortality calculation
    $("#calculate_cooper").click(function() {
        console.log("Calculate Cooper");
        
        var Alder = Number($("#age").val());
        var Hvilepuls = Number($("#hrrest").val());
        var Blodtryk = Number($("#bloodpressure").val());
        var Sukkersyge = Number($("#diabetes").val());
        var Ryger = Number($("#smoker").val());
        var Bmi = Number($("#bmi").val());
        var Kondital = Number($("#kondital").val());

        // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
        var c = cooper.CooperClinicMortalityRiskIndex(Alder, Hvilepuls, Blodtryk, Sukkersyge, Ryger, Bmi, Kondital);

        $("#Risikopoint").val(c.getRiskPoint());
        $("#Risiko1").val(c.getAbsoluteRisk());
        $("#Risiko2").val(c.getRelativeRisk());
    });

    // Calculate Max Heart Rate
    $("#mxCalBtn").click(function() {
        console.log("Calculate Maximal Heart Rate");
        
        var ald = Number($("#mxAld").val());
        var hr = maxhr.EstimateMaxHr(ald);
        $("#mxMaxpul").text(hr.getMaxHr());
    });
    
    // Calculate Fat Percent
    $("#calculate_fat_percent").click(function() {
        console.log("Calculate Fat Percent");

        var a = Number($("#age").val());
        var h = Number($("#height").val());
        var w = Number($("#weight").val());
        var g = $("#gender").val();

        var f = fat.CalculateFatPercent(h, w, a, g);

        $("#BMI").val(f.getBMI());
        $("#fat_mass").val(f.getFatMass());
        $("#fat_percent").val(f.getFatPercent());
    });

    // Calculate VO2 from HR
    $("#plCalBtn").click(function() {
        console.log("Calculate VO2 from HR");
        
        var hvpul = Number($("#plHvil").val());
        var mxpul = Number($("#plMaxp").val());
        var wgt = Number($("#plVgt").val());

        var fitnesshr = fitness.CalculateFitnessFromHr(mxpul, hvpul, wgt);

        var maxiltop = fitnesshr.getMaximalOxygen();
        var kondi = fitnesshr.getFitnessLevel();

        $("#plIltop").text(maxiltop);
        $("#plKond").text(kondi);
    });

    $("#rpCalBtn").click(function() {
        console.log("Calculate Borg 15 fitness");

        var borg = Number($("#rpBorg").val());
        var ald = Number($("#rpAlder").val());
        var wgt = Number($("#rpVgt").val());

        var iltoptag = (1.19 * borg / 9.82 * 60) - (15.84 * ald) + (13.06 * wgt) + 1365;

        var maxiltop = Math.round((iltoptag / 1000) * Math.pow(10, 2)) / Math.pow(10, 2)
        var kondi = Math.round((iltoptag / wgt) * Math.pow(10, 1)) / Math.pow(10, 1)

        $("#rpIltop").text(maxiltop);
        $("#rpKond").text(kondi);

    });
});

},{"./cooper":2,"./fat-pct":3,"./fitness-hr":4,"./max-hr":5}],2:[function(require,module,exports){
let motionsplan = {};

motionsplan.CooperClinicMortalityRiskIndex = function(age, hr, bloodpressure, diabetes, smoker, bmi, fitness) {
  var age, hr, bloodpressure, diabetes, smoker, bmi, fitness;

  age = age;
  hr = hr;
  bloodpressure = bloodpressure;
  diabetes = diabetes;
  smoker = smoker;
  bmi = bmi;
  fitness = fitness;

  function getAgePoint() {
    var point;
    if (age < 44) {
      point = 0
    }
    else if (age < 49) {
      point = 3;
    }
    else if (age < 54) {
      point = 6;
    }
    else if (age < 59) {
      point = 8;
    }
    else if (age < 64) {
      point = 9;
    }
    else if (age < 69) {
      point = 10;
    }
    // TODO: How to handle that.
    // test is not originally designed for people older than 70

    return point;
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
    var point = getAgePoint() + getHrPoint() + bloodpressure + diabetes + smoker + getBMIPoint() + getFitnessPoint();
    return point;
  }

  function getAbsoluteRisk() {
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

  function getRelativeRisk() {
    var risk2, risk3;
    var risk = getAbsoluteRisk();
    if (age < 34) {
      risk2 = risk / 2.4;
    }
    else if (age < 44) {
      risk2 = risk / 2.6;
    }
    else if (age < 49) {
      risk2 = risk / 4.6;
    }
    else if (age < 54) {
      risk2 = risk / 8.2;
    }
    else if (age < 59) {
      risk2 = risk / 12.6;
    }
    else if (age < 64) {
      risk2 = risk / 16.1;
    }
    else {
      risk2 = risk / 18.1;
    }
    risk3 = Math.round((risk2) * Math.pow(10, 1)) / Math.pow(10, 1);
    return risk3;
  }

  var publicAPI = {
    getRiskPoint: getRiskPoint,
    getAbsoluteRisk: getAbsoluteRisk,
    getRelativeRisk: getRelativeRisk

  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],3:[function(require,module,exports){
let motionsplan = {}

motionsplan.CalculateFatPercent = function(h, w, a, sex) {
  var h, w, sex;

  h = h = h / 100;
  w = w;
  a = a;
  sex = sex;

  function getBMI() {
    return w / (h * h);
  }

  function getFatMass() {
    var fm;
    if (sex == 'man') {
      fm = 0.988 * getBMI() + 0.242 * w + 0.094 * a - 30.18;
    } else {
      fm = 0.988 * getBMI() + 0.344 * w + 0.094 * a - 30.18;
    }
    return fm;
  }

  function getFatPercent() {
    return getFatMass() / w * 100;
  }

  var publicAPI = {
    getBMI : getBMI,
    getFatMass: getFatMass,
    getFatPercent: getFatPercent

  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],4:[function(require,module,exports){
let motionsplan = {}

motionsplan.CalculateFitnessFromHr = function(mxpul, hvpul, wgt) {
  var mxpul, hvpul, wgt;

  mxpul = mxpul;
  hvpul = hvpul;
  wgt = wgt;

  function getMaximalOxygen() {
    var konditalM = mxpul / hvpul * 15.3;
    var maxiltop = Math.round(konditalM * wgt / 1000 * Math.pow(10, 2)) / Math.pow(10, 2);
    return maxiltop;
  }

  function getFitnessLevel() {
    var konditalM = mxpul / hvpul * 15.3;
    var kondi = Math.round((konditalM) * Math.pow(10, 1)) / Math.pow(10, 1);
    return kondi;
  }

  var publicAPI = {
    getMaximalOxygen: getMaximalOxygen,
    getFitnessLevel: getFitnessLevel

  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],5:[function(require,module,exports){
let motionsplan = {}

motionsplan.EstimateMaxHr = function(ald) {
  var ald;

  ald = ald;

  function getMaxHr() {
    return Math.round((208 - 0.7 * ald) * Math.pow(10, 0)) / Math.pow(10, 0);
  }

  var publicAPI = {
    getMaxHr: getMaxHr
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}]},{},[1]);
