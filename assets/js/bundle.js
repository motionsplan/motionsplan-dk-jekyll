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

},{}],2:[function(require,module,exports){
'use strict'

const fitness = require('./fitness-hr');
const maxhr = require('./max-hr');
const cooper = require('./cooper');
const fat = require('./fat-pct');
const fatm = require('./fat-pct-measurements');
const rm = require('./1rm');
const etpunkt = require('./etpunkttest');
const topunkt = require('./topunkttest');

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

    // Udregn 1punkttest
    $("#calculate_etpunkttest").click(function() {
        console.log("Etpunkt test");

        var arb = Number($("[name='arb']").val());
        var koen = Number($("[name='koen']").val());
        var puls = Number($("[name='puls']").val());
        var alder = Number($("[name='alder']").val());
        var vaegt = Number($("[name='vaegt']").val());

        var et = etpunkt.EtPunktTest(koen, alder, vaegt, arb, puls);

        $("[name='Iltoptag']").val(et.getMaximalOxygenUptake());
        $("[name='Kondital']").val(et.getFitnessLevel());
    });
    
    // Udregn 1punkttest
    $("#calculate_topunkttest").click(function() {
        console.log("Etpunkt test");

        var arb1 = Number($("[name='arb1']").val());
        var arb2 = Number($("[name='arb2']").val());
        var puls1 = Number($("[name='puls1']").val());
        var puls2 = Number($("[name='puls2']").val());
        var alder = Number($("[name='alder']").val());
        var vaegt = Number($("[name='vaegt']").val());

        var et = topunkt.ToPunktTest(alder, vaegt, arb1, puls1, arb2, puls2);

        $("[name='Iltoptag']").val(et.getMaximalOxygenUptake());
        $("[name='Kondital']").val(et.getFitnessLevel());
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
        $("#fat_wu26").val(f.getFatPercentWomenUnder26(
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
    // Calculate Borg 15 fitness
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
    // Calculate Wattmax
    $("#calc_wattmax").click(function() {
        console.log("Calculate Wattmax");
        var Wmax = Number($("[name='Wmax']").val());
        var Sek = Number($("[name='Sek']").val());
        var Vaegt = Number($("[name='Vaegt']").val());
        var resultat = Math.round((0.0117 * (Wmax - 35 + (35 * Sek / 120)) + 0.16) / Vaegt * 1000 * Math.pow(10, 1)) / Math.pow(10, 1)
        var resultat2 = Math.round((0.0117 * (Wmax - 35 + (35 * Sek / 120)) + 0.16) * Math.pow(10, 2)) / Math.pow(10, 2)
        $("[name='Kondital']").val(resultat);
        $("[name='Iltoptag']").val(resultat2);
    });
    // Calculate Walktest 6 min
    $("#calculate_6min").click(function() {
        console.log("Calculate Walktest 6 min");

        var Meter = Number($("[name='Meter']").val());
        var Koen = Number($("[name='Koen']").val());
        var Alder = Number($("[name='Alder']").val());
        var Hoejde = Number($("[name='Hoejde']").val());
        var Vaegt = Number($("[name='Vaegt']").val());

        var Mand = (7.57 * Hoejde) - (5.02 * Alder) - (1.76 * Vaegt) - 309
        var Kvinde = (2.11 * Hoejde) - (5.78 * Alder) - (2.29 * Vaegt) + 667

        var resultat = Math.round((Mand * Koen + Kvinde * (1 - Koen)) * Math.pow(10, 1)) / Math.pow(10, 1)
        var resultat2 = Math.round((Meter / resultat * 100) * Math.pow(10, 1)) / Math.pow(10, 1)

        $("[name='Refmeter']").val(resultat);
        $("[name='Procent']").val(resultat2);
    });
    // Calculate Walktest 1.6 km
    $("#calculate_16km").click(function() {
        console.log("Calculate Walktest 1,6 km");

        var Min = Number($("[name='Min']").val());
        var Sek = Number($("[name='Sek']").val());
        var Pul = Number($("[name='Pul']").val());
        var Koen = Number($("[name='Koen']").val());
        var Alder = Number($("[name='Alder']").val());
        var Vaegt = Number($("[name='Vaegt']").val());

        var Tid = Min * 60 + Sek * 1
        var resultat = Math.round((6.9652 + (0.020062 * Vaegt) - (0.0257 * Alder) + (0.5955 * Koen) - (0.003754 * Tid) - (0.0115 * Pul)) * Math.pow(10, 1)) / Math.pow(10, 1)
        var resultat2 = Math.round((resultat / Vaegt * 1000) * Math.pow(10, 2)) / Math.pow(10, 2)

        $("[name='Iltoptag']").val(resultat);
        $("[name='Konditalk']").val(resultat2);
    });
    // Calculate Walktest 1.6 km
    $("#calculate_index100").click(function() {
        console.log("Calculate Walktest 1,6 km");

        var Loeft = Number($("[name='Loeft']").val());
        var Vaegt = Number($("[name='Vaegt']").val());

        var resultat = Math.round(Loeft * 986.63 / (1270.4 - 172970 * ((Math.pow(Vaegt, -1.3925)))) * Math.pow(10, 0)) / Math.pow(10, 0)

        $("[name='Krop100']").val(resultat);
    });    
});

},{"./1rm":1,"./cooper":3,"./etpunkttest":4,"./fat-pct":6,"./fat-pct-measurements":5,"./fitness-hr":7,"./max-hr":8,"./topunkttest":9}],3:[function(require,module,exports){
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

motionsplan.EtPunktTest = function(gender, age, weight, work, hr) {
  var ax3, bx2, cx, d, korrektion;
  var arb = work;
  var koen = gender;
  var vaegt = weight;
  var puls = hr;
  var alder = age;

  function getMaximalOxygenUptake() {
    if ((koen == "1") && (arb == "50")) {
      ax3 = -0.0000141887098363194;
      bx2 = 0.00564913345624763;
      cx = -0.780818885937746;
      d = 39.1006320316801;
    }
    else if ((koen == "1") && (arb == "75")) {
      ax3 = -0.00000543674435627603;
      bx2 = 0.0026568064501183;
      cx = -0.452158557600623;
      d = 28.2705225878313;
    }
    else if ((koen == "1") && (arb == "100")) {
      ax3 = -0.00000781456387209244;
      bx2 = 0.0037691350493366;
      cx = -0.628684090959725;
      d = 38.1781325862974;
    }
    else if ((koen == "1") && (arb == "150")) {
      ax3 = -0.00000480199704005531;
      bx2 = 0.00263336860763636;
      cx = -0.502384480151535;
      d = 35.4646039706529;
    }
    else if ((koen == "0") && (arb == "50")) {
      ax3 = -0.00000908367168416049;
      bx2 = 0.00414579767940695;
      cx = -0.655844035762893;
      d = 37.2727235943794;
    }
    else if ((koen == "0") && (arb == "75")) {
      ax3 = -0.00000933665751673296;
      bx2 = 0.0044902366150176;
      cx = -0.742969310750658;
      d = 43.9747812265557;
    }
    else if ((koen == "0") && (arb == "100")) {
      ax3 = -0.00000915073336660991;
      bx2 = 0.00455540562587432;
      cx = -0.780173372160715;
      d = 47.9223030409269;
    }
    else if ((koen == "0") && (arb == "150")) {
      ax3 = -0.00000541183365569748;
      bx2 = 0.00301601587808795;
      cx = -0.586119541549347;
      d = 41.7833862710695;
    }
    korrektion = 0.0000772460416296068 * alder * alder - 0.0153110952973968 * alder + 1.31886556366008;
    return ((ax3 * puls * puls * puls + bx2 * puls * puls + cx * puls + d) * korrektion);
  }
  
  function getFitnessLevel() {
    return (getMaximalOxygenUptake() / vaegt * 1000) * Math.pow(10, 1) / Math.pow(10, 1);
  }

  var publicAPI = {
    getMaximalOxygenUptake: getMaximalOxygenUptake,
    getFitnessLevel : getFitnessLevel

  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],5:[function(require,module,exports){
let motionsplan = {}

motionsplan.CalculateFatPercentMeasurements = function() {

  function getFatPercentMenUnder26(upperarm, abdomen, underarm) {
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
let motionsplan = {}

motionsplan.ToPunktTest = function(age, weight, work1, hr1, work2, hr2) {
  var arb1 = work1;
  var puls1 = hr1;
  var arb2 = work2;
  var puls2 = hr2;
  var alder = age;
  var vaegt = weight;

  // TODO: How can we let the user choose this for them selves
  // Dependency injection of max-hr calculator
  function getMaximalHeartRate() {
    return 208 - 0.7 * alder;
  }

  function getMaximalOxygenUptake() {
    var delres;
    delres = ((getMaximalHeartRate() - puls2) * (arb2 - arb1)) / (puls2 - puls1) + arb2 * 1;
    return Math.round((delres / 0.23 * 60 / 21100 + 0.25) * Math.pow(10, 2)) / Math.pow(10, 2)
  }
  
  function getFitnessLevel() {
    return Math.round((getMaximalOxygenUptake() / vaegt * 1000) * Math.pow(10, 1)) / Math.pow(10, 1);
  }

  var publicAPI = {
    getMaximalOxygenUptake: getMaximalOxygenUptake,
    getFitnessLevel : getFitnessLevel

  };

  return publicAPI;
}

module.exports = motionsplan;

},{}]},{},[2]);
