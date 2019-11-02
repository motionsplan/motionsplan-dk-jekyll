(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

/* Bryzki og avanceret fra motion-online

function Calculate1(thisform)
{
reps = thisform.reps.value;
weight = thisform.weight.value;
trained = thisform.trained.value*1;
koen = thisform.koen.value*1;
bformel = 0
bformel = thisform.bformel.value*1;
if (koen == 1 && trained == 1 && bformel == 0) {
a = -2.1021, b = 102.52; 
}
if (koen == 1 && trained == 0 && bformel == 0) {
a = -2.6578, b = 102.65; 
}
if (koen == 0 && trained == 1 && bformel == 0) {
a = -2.1275, b = 101.59; 
}
if (koen == 0 && trained == 0 && bformel == 0) {
a = -2.6914, b = 102.14; 
}
if (bformel == 1) {
a = -2.78, b = 102.78; 
}
if (reps == 1) {
repmax = weight; }
else {
repmax=weight/(a*reps+b)*100; }

thisform.rm1.value=Math.round((repmax) * Math.pow(10,1))/Math.pow(10,1)
thisform.rm2.value=Math.round(((a*2+b)*repmax/100) * Math.pow(10,1))/Math.pow(10,1)
thisform.rm3.value=Math.round(((a*3+b)*repmax/100) * Math.pow(10,1))/Math.pow(10,1)
thisform.rm4.value=Math.round(((a*4+b)*repmax/100) * Math.pow(10,1))/Math.pow(10,1)
thisform.rm5.value=Math.round(((a*5+b)*repmax/100) * Math.pow(10,1))/Math.pow(10,1)
thisform.rm6.value=Math.round(((a*6+b)*repmax/100) * Math.pow(10,1))/Math.pow(10,1)
thisform.rm8.value=Math.round(((a*8+b)*repmax/100) * Math.pow(10,1))/Math.pow(10,1)
thisform.rm10.value=Math.round(((a*10+b)*repmax/100) * Math.pow(10,1))/Math.pow(10,1)
thisform.rm12.value=Math.round(((a*12+b)*repmax/100) * Math.pow(10,1))/Math.pow(10,1)
thisform.rm15.value=Math.round(((a*15+b)*repmax/100) * Math.pow(10,1))/Math.pow(10,1)
thisform.p100.value=Math.round((repmax) * Math.pow(10,1))/Math.pow(10,1)
thisform.p95.value=Math.round((repmax*0.95) * Math.pow(10,1))/Math.pow(10,1)
thisform.p90.value=Math.round((repmax*0.90) * Math.pow(10,1))/Math.pow(10,1)
thisform.p85.value=Math.round((repmax*0.85) * Math.pow(10,1))/Math.pow(10,1)
thisform.p80.value=Math.round((repmax*0.80) * Math.pow(10,1))/Math.pow(10,1)
thisform.p75.value=Math.round((repmax*0.75) * Math.pow(10,1))/Math.pow(10,1)
thisform.p70.value=Math.round((repmax*0.70) * Math.pow(10,1))/Math.pow(10,1)
thisform.p60.value=Math.round((repmax*0.60) * Math.pow(10,1))/Math.pow(10,1)
thisform.p50.value=Math.round((repmax*0.50) * Math.pow(10,1))/Math.pow(10,1)
thisform.p40.value=Math.round((repmax*0.40) * Math.pow(10,1))/Math.pow(10,1)    
return false;
}
*/
},{}],2:[function(require,module,exports){
'use strict'

const fitness = require('./fitness-hr');
const maxhr = require('./max-hr');
const cooper = require('./cooper');
const fat = require('./fat-pct');
const fatm = require('./fat-pct-measurements');
const rm = require('./1rm');

$(document).ready(function() {

    // 1RM calculate
    $("#calculate_rm").click(function() {
        console.log("Calculate 1RM");
        
        var repmax;

        var reps = Number($("#form-reps").val());
        var weight = Number($("#form-weight").val());
        var trained = Number($("#form-trained").val());
        var koen = Number($("#form-sex").val());
        var bformel = Number($("#form-brzycki").val());

        var r = rm.Estimate1RM(weight, reps);

        if (bformel == 1) {
            repmax = r.getMOLBrzycki();
            $("#rm1").val(r.getMOLBrzycki());
            $("#rm2").val(r.getMOLBrzycki(2));
            $("#rm3").val(r.getMOLBrzycki(3));
            $("#rm4").val(r.getMOLBrzycki(4));
            $("#rm5").val(r.getMOLBrzycki(5));
            $("#rm6").val(r.getMOLBrzycki(6));
            $("#rm8").val(r.getMOLBrzycki(8));
            $("#rm10").val(r.getMOLBrzycki(10));
            $("#rm12").val(r.getMOLBrzycki(12));
            $("#rm15").val(r.getMOLBrzycki(15));
        }
        else {
            repmax = r.getMOL(trained, koen);
            $("#rm1").val(repmax);
            $("#rm2").val(r.getMOL(trained, koen, 2));
            $("#rm3").val(r.getMOL(trained, koen, 3));
            $("#rm4").val(r.getMOL(trained, koen, 4));
            $("#rm5").val(r.getMOL(trained, koen, 5));
            $("#rm6").val(r.getMOL(trained, koen, 6));
            $("#rm8").val(r.getMOL(trained, koen, 8));
            $("#rm10").val(r.getMOL(trained, koen, 10));
            $("#rm12").val(r.getMOL(trained, koen, 12));
            $("#rm15").val(r.getMOL(trained, koen, 15));
        }

        $("#p100").val(r.getPercentOfRm(repmax, 100));
        $("#p95").val(r.getPercentOfRm(repmax, 95));
        $("#p90").val(r.getPercentOfRm(repmax, 90));
        $("#p85").val(r.getPercentOfRm(repmax, 85));
        $("#p80").val(r.getPercentOfRm(repmax, 80));
        $("#p75").val(r.getPercentOfRm(repmax, 75));
        $("#p70").val(r.getPercentOfRm(repmax, 70));
        $("#p60").val(r.getPercentOfRm(repmax, 60));
        $("#p50").val(r.getPercentOfRm(repmax, 50));
        $("#p40").val(r.getPercentOfRm(repmax, 40));
    });

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

    // Calculate Fat Percent Measurements
    $("#calc_mu26").click(function() {
        console.log("Calculate Fat Percent on Measurements");
        var f = fatm.CalculateFatPercentMeasurements();
        $("#fat_mu26").val(f.getFatPercentMenUnder26(
            Number($("[name='Overarm_mu26']").val()),
            Number($("[name='Mave_mu26']").val()),
            Number($("[name='Underarm_mu26']").val())
            ));
    });
    $("#calc_mo26").click(function() {
        console.log("Calculate Fat Percent on Measurements");
        var f = fatm.CalculateFatPercentMeasurements();
        $("#fat_mo26").val(f.getFatPercentMenOver26(
            Number($("[name='Hofter_mo26']").val()),
            Number($("[name='Mave_mo26']").val()),
            Number($("[name='Underarm_mo26']").val())
            ));
    });
    $("#calc_wu26").click(function() {
        console.log("Calculate Fat Percent on Measurements");
        var f = fatm.CalculateFatPercentMeasurements();
        $("#fat_wu26").val(f.getFatPercentMenUnder26(
            Number($("[name='Laar_wu26']").val()),
            Number($("[name='Mave_wu26']").val()),
            Number($("[name='Underarm_wu26']").val())
            ));
    });
    $("#calc_wo26").click(function() {
        console.log("Calculate Fat Percent on Measurements");
        var f = fatm.CalculateFatPercentMeasurements();
        $("#fat_wo26").val(f.getFatPercentWomenOver26(
            Number($("[name='Laar_wo26']").val()),
            Number($("[name='Mave_wo26']").val()),
            Number($("[name='Laeg_wo26']").val())
            ));
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

},{"./1rm":1,"./cooper":3,"./fat-pct":5,"./fat-pct-measurements":4,"./fitness-hr":6,"./max-hr":7}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
let motionsplan = {}

motionsplan.CalculateFatPercentMeasurements = function() {

  function getFatPercentMenUnder26(upperarm, abdomen, underarm) {
    // resultat1 = Math.round(((Overarm_mu26 * 1.457 + Mave_mu26 * 0.5166 - Underarm_mu26 * 2.1376) / 10 - 10.2) * Math.pow(10, 1)) / Math.pow(10, 1)

    return ((upperarm * 1.457 + abdomen * 0.5166 - underarm * 2.1376) / 10 - 10.2) * Math.pow(10, 1) / Math.pow(10, 1);
  }

  function getFatPercentMenOver26(hips, abdomen, underarm) {
    return  ((hips * 0.4126 + abdomen * 0.3525 - underarm * 1.182) / 10 - 15.0) * Math.pow(10, 1) / Math.pow(10, 1);
  }

  function getFatPercentWomenUnder26(thigh, abdomen, underarm) {
    return ((abdomen * 0.5262 + thigh * 0.8191 - underarm * 1.6972) / 10 - 19.6) * Math.pow(10, 1) / Math.pow(10, 1);
  }

  function getFatPercentWomenOver26(thigh, abdomen, calf) {
    return ((abdomen * 0.4675 + thigh * 0.4868 - calf * 0.5693) / 10 - 18.4) * Math.pow(10, 1) / Math.pow(10, 1);
  }

  var publicAPI = {
    getFatPercentMenOver26 : getFatPercentMenOver26,
    getFatPercentMenUnder26 : getFatPercentMenUnder26,
    getFatPercentWomenOver26 : getFatPercentWomenOver26,
    getFatPercentWomenUnder26 : getFatPercentWomenUnder26
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}]},{},[2]);
