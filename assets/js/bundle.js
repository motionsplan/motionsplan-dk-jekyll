(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

const maleValues = [
	-216.0475144,
	16.2606339,
	-0.002388645,
	-0.00113732,
	7.01863E-06,
	-1.291E-08
];

const femaleValues = [
	594.31747775582,
	-27.23842536447,
	0.82112226871,
	-0.00930733913,
	4.731582E-05,
	-9.054E-08
];

const imperial = 2.20462262185;

/**
 * Returns a Wilks score based on the body weight of the lifter and the weight they have lifted.
 *
 * @param gender {string} The gender of the lifter the wilks score is calculated for ('m' for male, 'f' for female).
 * @param bodyWeight {number} The body weight of the lifter the wilks score is calculated for.
 * @param liftedWeight {number} The weight the lifter has lifted.
 * @param unitType {string} Optional parameter for lifters using the imperial unit system ('kg' is default, 'imperial' for the imperial system).
 *
 * @returns {number} The Wilks score.
 */
function calculateWilksScore (gender, bodyWeight, liftedWeight, unitType = 'metric') {
    if (!gender || !bodyWeight || !liftedWeight) {
    	throw new Error('Missing parameters, please fill in gender, body weight and weight.');
	}

	if (unitType === 'imperial') {
		liftedWeight /= imperial;
		bodyWeight /= imperial;
	}

	validateInput({gender: gender, bodyWeight: bodyWeight, liftedWeight: liftedWeight, unitType: unitType});

	let coeff = 500 / calculateCoefficient(gender, bodyWeight);

    return liftedWeight * coeff;
}

/**
 * Returns a total amount of weight to lift based on the body weight of the lifter and the preferred Wilks score.
 *
 * @param gender {string} The gender of the lifter the wilks score is calculated for ('m' for male, 'f' for female).
 * @param bodyWeight {number} The body weight of the lifter the wilks score is calculated for.
 * @param wilksScore {number} The preferred Wilks score.
 * @param unitType {string} Optional parameter for lifters using the imperial unit system ('kg' is default, 'imperial' for the imperial system).
 *
 * @returns {number} The total amount of weight to lift.
 */
function calculateWeightToLift (gender, bodyWeight, wilksScore, unitType = 'metric') {
	if (!gender || !bodyWeight || !wilksScore) {
		throw new Error('Missing parameters, please fill in gender, body weight and Wilks score.');
	}

	validateInput({gender: gender, bodyWeight: bodyWeight, wilksScore: wilksScore, unitType: unitType});

	if (unitType === 'imperial') {
		bodyWeight /= imperial;
	}

	let coeff = 500 / calculateCoefficient(gender, bodyWeight);

	return unitType === 'imperial' ? imperial * (wilksScore / coeff) : wilksScore / coeff;
}

/**
 * Returns the needed body weight based on the total amount of weight to lift and the preferred Wilks score.
 *
 * @param gender {string} The gender of the lifter the wilks score is calculated for ('m' for male, 'f' for female).
 * @param liftedWeight {number} liftedWeight {number} The weight the lifter has lifted.
 * @param wilksScore {number} The preferred Wilks score.
 * @param unitType {string} Optional parameter for lifters using the imperial unit system ('kg' is default, 'imperial' for the imperial system).
 *
 * @returns {number} The total amount of weight to lift.
 */
function calculateNeededBodyWeight (gender, liftedWeight, wilksScore, unitType = 'metric') {
	if (!gender || !liftedWeight || !wilksScore) {
		throw new Error('Missing parameters, please fill in gender, lifted weight and Wilks score.');
	}

	validateInput({gender: gender, liftedWeight: liftedWeight, wilksScore: wilksScore, unitType: unitType});

	if (unitType === 'imperial') {
		liftedWeight /= imperial;
	}

	let coeff = 500 / (wilksScore / liftedWeight);
	let bodyWeight = 0.0;
	let result = 0.0;

	do {
		bodyWeight += 0.1;
		result = calculateCoefficient(gender, bodyWeight);
	} while (calculateDifference(coeff, result) > 0.5);

	return unitType === 'imperial' ? imperial * bodyWeight : bodyWeight;
}

/**
 * A helper function to determine the difference between the calculated coefficient and the input.
 *
 * @param a {number}
 * @param b {number}
 *
 * @returns {number} The absolute difference between a and b.
 *
 * @private
 */
function calculateDifference(a, b) {
	return Math.abs(a - b);
}

/**
 * Calculates the coefficient based on the body weight and the gender.
 *
 * @param gender {string}
 * @param bodyWeight {number}
 *
 * @returns {number} The coefficient.
 *
 * @private
 */
function calculateCoefficient(gender, bodyWeight) {
	let coeff = 0;
	let values = gender === 'm' ? maleValues : femaleValues;

	for (let i = 0; i <= 5; i++) {
		coeff += i === 0 ? values[i] : (values[i]  * (bodyWeight ** i));
	}

	return coeff;
}

/**
 * A helper function to validate the input.
 *
 * @param gender {string}
 * @param bodyWeight {number}
 * @param liftedWeight {number}
 * @param wilksScore {number}
 * @param unitType {string}
 *
 * @private
 */
function validateInput ({gender, bodyWeight = 0, liftedWeight = 0, wilksScore = 0, unitType}) {
	if (typeof gender !== 'string' || (gender !== 'm' && gender !== 'f')) {
		throw new Error('Gender is not valid. Please select m for Male or f for Female.')
	}

	if (typeof bodyWeight !== 'number' || bodyWeight < 0) {
		throw new Error('Body weight is not valid.');
	}

	if (typeof liftedWeight !== 'number' || liftedWeight < 0) {
		throw new Error('Weight is not valid.');
	}

	if (typeof wilksScore !== 'number' || wilksScore < 0) {
		throw new Error('Wilks score is not valid.');
	}

	if (typeof unitType !== 'string' || (unitType !== 'metric' && unitType !== 'imperial')) {
		throw new Error('Unit type is not valid. Please select metric or imperial.');
	}
}

module.exports = {
	calculateWilksScore: calculateWilksScore,
	calculateWeightToLift: calculateWeightToLift,
	calculateNeededBodyWeight: calculateNeededBodyWeight
};
},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
'use strict'

const fitness = require('./fitness-hr');
const maxhr = require('./max-hr');
const cooper = require('./cooper');
const cooper_test = require('./cooper-running');
const fat = require('./fat-pct');
const fatm = require('./fat-pct-measurements');
const rm = require('./1rm');
const etpunkt = require('./etpunkttest');
const topunkt = require('./topunkttest');
const bmr = require('./bmr');
const bmi = require('./bmi');
const wilks = require('wilks-calculator');
const karvonen = require('./karvonen');

$(document).ready(function() {

    // 1RM calculate
    $("#calculator_rm").submit(function() {
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
        return false;
    });
    // Mortality calculation
    $("#calculator_cooper_mortality").submit(function() {
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
        return false;
    });
    // Udregn 1punkttest
    $("#calculator_etpunkttest").submit(function() {
        console.log("Etpunkt test");

        var arb = Number($("[name='arb']").val());
        var koen = Number($("[name='koen']").val());
        var puls = Number($("[name='puls']").val());
        var alder = Number($("[name='alder']").val());
        var vaegt = Number($("[name='vaegt']").val());

        var et = etpunkt.EtPunktTest(koen, alder, vaegt, arb, puls);

        $("[name='Iltoptag']").val(et.getMaximalOxygenUptake());
        $("[name='Kondital']").val(et.getFitnessLevel());
        return false;
    });
    // Udregn 1punkttest
    $("#calculator_topunkttest").submit(function() {
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
        return false;
    });
    // Calculate Max Heart Rate
    $("#calculator_maxhr").submit(function() {
        console.log("Calculate Maximal Heart Rate");
        
        var ald = Number($("#mxAld").val());
        
        var hr = maxhr.EstimateMaxHr(ald);

        $("#mxMaxpul").val(hr.getMaxHr());
        return false;
    });
    // Calculate Fat Percent
    $("#calculator_bmi").submit(function() {
        console.log("Calculate BMI");

        var h = Number($("#height").val());
        var w = Number($("#weight").val());

        var b = bmi.BMI(h, w);

        $("#BMI").val(b.getBMI());
        $("#PMI").val(b.getPonderalIndex());
        return false;
    });
    
    // Calculate Fat Percent
    $("#calculator_fat_percent").submit(function() {
        console.log("Calculate Fat Percent");

        var a = Number($("#age").val());
        var h = Number($("#height").val());
        var w = Number($("#weight").val());
        var g = $("[name='sex']:checked").val();

        var f = fat.CalculateFatPercent(h, w, a, g);

        $("#BMI").val(f.getBMI());
        $("#fat_mass").val(f.getFatMass());
        $("#fat_percent").val(f.getFatPercent());
        $("meter#fat_meter").val(f.getFatPercent());
        return false;
    });
    // Calculate Durning
    $("#calculator_skinfold_durnin").submit(function() {
        console.log("Calculate Skinfold Durnin");

        var density;

        var biceps = Number($("[name='biceps']").val());
        var triceps = Number($("[name='triceps']").val());
        var hoftekam = Number($("[name='hoftekam']").val());
        var skulder = Number($("[name='skulder']").val());
        var vaegt = Number($("[name='vaegt']").val());
        var koen = Number($("[name='koen']").val());

        var fedtsum = biceps * 1 + triceps * 1 + hoftekam * 1 + skulder * 1;
        if (koen == 1) {
            density = -0.0274 * Math.log(fedtsum) + 1.1631;
        }
        else {
            density = -0.0311 * Math.log(fedtsum) + 1.1599;
        }
        var resultat1 = Math.round((495 / density - 450) * Math.pow(10, 1)) / Math.pow(10, 1)
        var resultat2 = Math.round((vaegt - vaegt * resultat1 / 100) * Math.pow(10, 1)) / Math.pow(10, 1)

        $("[name='fedtprocentDurnin']").val(resultat1);
        $("[name='fedtfriDurnin']").val(resultat2);
        return false;
    });
    // Calculate Pollock
    $("#calculator_skinfold_pollock_men").submit(function() {
        console.log("Calculate Skinfold Pollock Men");

        var bryst_m = Number($("[name='bryst_m']").val());
        var mave_m = Number($("[name='mave_m']").val());
        var laar_m = Number($("[name='laar_m']").val());
        var alder_m = Number($("[name='alder_m']").val());
        var vaegt_m = Number($("[name='vaegt_m']").val());

        var fedtsum_m = bryst_m * 1 + mave_m * 1 + laar_m * 1;
        var density_m = 1.10938 - 0.0008267 * fedtsum_m + 0.0000016 * Math.pow(fedtsum_m, 2) - 0.0002574 * alder_m;
        
        var resultat1_m = Math.round((495 / density_m - 450) * Math.pow(10, 1)) / Math.pow(10, 1)
        var resultat2_m = Math.round((vaegt_m - vaegt_m * resultat1_m / 100) * Math.pow(10, 1)) / Math.pow(10, 1)

        $("[name='fedtprocent_m']").val(resultat1_m);
        $("[name='fedtfri_m']").val(resultat2_m);
        return false;
    });
    // Calculate Durnin
    $("#calculator_skinfold_pollock_women").submit(function() {
        console.log("Calculate Skinfold Pollock Women");

        var triceps_k = Number($("[name='triceps_k']").val());
        var hoftekam_k = Number($("[name='hoftekam_k']").val());
        var laar_k = Number($("[name='laar_k']").val());
        var alder_k = Number($("[name='alder_k']").val());
        var vaegt_k = Number($("[name='vaegt_k']").val());

        var fedtsum_k = triceps_k * 1 + hoftekam_k * 1 + laar_k * 1;
        var density_k = 1.0994921 - 0.0009929 * fedtsum_k + 0.0000023 * Math.pow(fedtsum_k, 2) - 0.0001392 * alder_k;
        var resultat1_k = Math.round((495 / density_k - 450) * Math.pow(10, 1)) / Math.pow(10, 1)
        var resultat2_k = Math.round((vaegt_k - vaegt_k * resultat1_k / 100) * Math.pow(10, 1)) / Math.pow(10, 1)

        $("[name='fedtprocent_k']").val(resultat1_k);
        $("[name='fedtfri_k']").val(resultat2_k);
        return false;
    });
    // Calculate Fat Percent Measurements
    $("#calculator_fat_percent_mu26").submit(function() {
        console.log("Calculate Fat Percent on Measurements");
        var f = fatm.CalculateFatPercentMeasurements();
        $("#fat_mu26").val(f.getFatPercentMenUnder26(
            Number($("[name='Overarm_mu26']").val()),
            Number($("[name='Mave_mu26']").val()),
            Number($("[name='Underarm_mu26']").val())
        ));
        return false;
    });
    $("#calculator_fat_percent_mo26").submit(function() {
        console.log("Calculate Fat Percent on Measurements");
        var f = fatm.CalculateFatPercentMeasurements();
        $("#fat_mo26").val(f.getFatPercentMenOver26(
            Number($("[name='Hofter_mo26']").val()),
            Number($("[name='Mave_mo26']").val()),
            Number($("[name='Underarm_mo26']").val())
        ));
        return false;
    });
    $("#calculator_fat_percent_wu26").submit(function() {
        console.log("Calculate Fat Percent on Measurements");
        var f = fatm.CalculateFatPercentMeasurements();
        $("#fat_wu26").val(f.getFatPercentWomenUnder26(
            Number($("[name='Laar_wu26']").val()),
            Number($("[name='Mave_wu26']").val()),
            Number($("[name='Underarm_wu26']").val())
        ));
        return false;
    });
    $("#calculator_fat_percent_wo26").submit(function() {
        console.log("Calculate Fat Percent on Measurements");
        var f = fatm.CalculateFatPercentMeasurements();
        $("#fat_wo26").val(f.getFatPercentWomenOver26(
            Number($("[name='Laar_wo26']").val()),
            Number($("[name='Mave_wo26']").val()),
            Number($("[name='Laeg_wo26']").val())
        ));
        return false;
    });
    // Calculate VO2 from HR
    $("#calculate_fitness_level_hr").submit(function() {
        console.log("Calculate VO2 from HR");
        
        var hvpul = Number($("#plHvil").val());
        var mxpul = Number($("#plMaxp").val());
        var wgt = Number($("#plVgt").val());

        var fitnesshr = fitness.CalculateFitnessFromHr(mxpul, hvpul, wgt);

        var maxiltop = fitnesshr.getMaximalOxygen();
        var kondi = fitnesshr.getFitnessLevel();

        $("#plIltop").val(maxiltop);
        $("#plKond").val(kondi);
        
        return false;
    });
    // Calculate Borg 15 fitness
    $("#calculator_borg15").submit(function() {
        console.log("Calculate Borg 15 fitness");

        var borg = Number($("#rpBorg").val());
        var ald = Number($("#rpAlder").val());
        var wgt = Number($("#rpVgt").val());

        var iltoptag = (1.19 * borg / 9.82 * 60) - (15.84 * ald) + (13.06 * wgt) + 1365;

        var maxiltop = Math.round((iltoptag / 1000) * Math.pow(10, 2)) / Math.pow(10, 2)
        var kondi = Math.round((iltoptag / wgt) * Math.pow(10, 1)) / Math.pow(10, 1)

        $("#rpIltop").val(maxiltop);
        $("#rpKond").val(kondi);
        return false;
    });
    // Calculate Wattmax
    $("#calculator_fitness_wattmax").submit(function() {
        console.log("Calculate Wattmax");
        var Wmax = Number($("[name='Wmax']").val());
        var Sek = Number($("[name='Sek']").val());
        var Vaegt = Number($("[name='Vaegt']").val());
        var resultat = Math.round((0.0117 * (Wmax - 35 + (35 * Sek / 120)) + 0.16) / Vaegt * 1000 * Math.pow(10, 1)) / Math.pow(10, 1)
        var resultat2 = Math.round((0.0117 * (Wmax - 35 + (35 * Sek / 120)) + 0.16) * Math.pow(10, 2)) / Math.pow(10, 2)
        $("[name='Kondital']").val(resultat);
        $("[name='Iltoptag']").val(resultat2);
        return false;
    });
    // Calculate Walktest 1.6 km
    $("#calculator_fitness_wattmax_children").submit(function() {
        console.log("Calculate Wattmax Children");

        var Wmax = Number($("[name='WMax']").val());
        var Sek = Number($("[name='Sek']").val());
        var Vaegt = Number($("[name='Vaegt']").val());

        var resultat = Math.round((13.16 * (Wmax - 25 + (25 * Sek / 180)) + 5 * Vaegt) / Vaegt * Math.pow(10, 1)) / Math.pow(10, 1)
        var resultat2 = Math.round((13.16 * (Wmax - 25 + (25 * Sek / 180)) + 5 * Vaegt) / 1000 * Math.pow(10, 2)) / Math.pow(10, 2)

        $("[name='Kondital']").val(resultat);
        $("[name='Iltoptag']").val(resultat2);
        return false;
    });
    // Calculate Walktest 6 min
    $("#calculator_walktest_6min").submit(function() {
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
        return false;
    });
    // Calculate Walktest 1.6 km
    $("#calculator_walktest_16km").submit(function() {
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
        return false;
    });
    // Calculate Index 100
    $("#calculator_index100").submit(function() {
        console.log("Calculate Index100");

        var Loeft = Number($("[name='Loeft']").val());
        var Vaegt = Number($("[name='Vaegt']").val());

        var resultat = Math.round(Loeft * 986.63 / (1270.4 - 172970 * ((Math.pow(Vaegt, -1.3925)))) * Math.pow(10, 0)) / Math.pow(10, 0)

        $("[name='Krop100']").val(resultat);
        return false;
    });
    // Calculate BMR
    $("#calculator_bmr").submit(function() {
        console.log("Calculate BMR");

        var koen = Number($("[name='koen']").val());
        var alder = Number($("[name='alder']").val());
        var vaegt = Number($("[name='vaegt']").val());
        var sport = $("[name='sport']:checked").val();
        var pal = Number($("[name='pal']:checked").val());

        var b = bmr.EnergyExpenditure(koen, alder, vaegt, pal, sport);

        $("[name='BMR2']").val(b.getBasicMetabolicRate());
        $("[name='TEE2']").val(b.getTotalEnergyExpenditure());
        return false;
    });
    // Calculate VMax
    $("#calculator_vmax_bike_vmax").submit(function() {
        console.log("Calculate Vmax from VO2");

        var Maxvo2 = Number($("[name='Maxvo2']").val());

        var resultat = Math.round((Maxvo2 * 21 / 60 * 0.23 / 5) * Math.pow(10, 0)) / Math.pow(10, 0) * 5

        $("[name='Vmax']").val(resultat);
        return false;
    });
     // Calculate VMax intervals biking
    $("#calculator_vmax_bike_intervals").submit(function() {
        console.log("Calculate Vmax for Biking");

        var Vmax2 = Number($("[name='Vmax2']").val());
        var Min = Number($("[name='Min']").val());
        var Sek = Number($("[name='Sek']").val());
        
        var Tid = Min * 60 + Sek * 1

        $("[name='Opvarm1']").val(Math.round((Vmax2 * 0.6 / 5) * Math.pow(10, 0)) / Math.pow(10, 0) * 5);
        $("[name='Opvarm2']").val(Math.round((Vmax2 * 0.75 / 5) * Math.pow(10, 0)) / Math.pow(10, 0) * 5);
        $("[name='Vmax3']").val(Math.round((Vmax2 * 1 / 5) * Math.pow(10, 0)) / Math.pow(10, 0) * 5);
        $("[name='Vmaxtid_m']").val(Math.floor((Tid * 0.6) / 60));
        $("[name='Vmaxtid_s']").val(Math.round(((Tid * 0.6) - (Math.floor((Tid * 0.6) / 60) * 60)) / 5 * Math.pow(10, 0)) / Math.pow(10, 0) * 5);
        $("[name='Vpause']").val(Math.round((Vmax2 * 0.5 / 5) * Math.pow(10, 0)) / Math.pow(10, 0) * 5);
        $("[name='Pausetid_m']").val(Math.floor((Tid * 0.3 / 60)));
        $("[name='Pausetid_s']").val(Math.round(((Tid * 0.3) - (Math.floor((Tid * 0.3) / 60) * 60)) / 5 * Math.pow(10, 0)) / Math.pow(10, 0) * 5);
        return false;
    });
     // Calculate VMax intervals biking
    $("#calculator_vmax_running_intervals").submit(function() {
        console.log("Calculate Vmax for Running");

        var Vmax2 = Number($("[name='Vmax2']").val());
        var Min = Number($("[name='Min']").val());
        var Sek = Number($("[name='Sek']").val());
        
        var Tid = Min * 60 + Sek * 1

        $("[name='Opvarm1']").val(Math.round((Vmax2 * 0.6 / 5) * Math.pow(10, 1)) / Math.pow(10, 1) * 5);
        $("[name='Opvarm2']").val(Math.round((Vmax2 * 0.75 / 5) * Math.pow(10, 1)) / Math.pow(10, 1) * 5);
        $("[name='Vmax3']").val(Math.round((Vmax2 * 1) * Math.pow(10, 1)) / Math.pow(10, 1));
        $("[name='Vmaxtid_m']").val(Math.floor((Tid * 0.6) / 60));
        $("[name='Vmaxtid_s']").val(Math.round(((Tid * 0.6) - (Math.floor((Tid * 0.6) / 60) * 60)) / 5 * Math.pow(10, 0)) / Math.pow(10, 0) * 5);
        $("[name='Vpause']").val(Math.round((Vmax2 * 0.5) * Math.pow(10, 1)) / Math.pow(10, 1));
        $("[name='Pausetid_m']").val(Math.floor((Tid * 0.3 / 60)));
        $("[name='Pausetid_s']").val(Math.round(((Tid * 0.3) - (Math.floor((Tid * 0.3) / 60) * 60)) / 5 * Math.pow(10, 0)) / Math.pow(10, 0) * 5);
        return false;
    });
     // Calculate Intensity
    $("#calculator_hr_intensity_hrr").submit(function() {
        console.log("Calculate HR intensity HRR");

        var Hpuls = Number($("[name='Hpuls']").val());
        var Mpuls = Number($("[name='Mpuls']").val());
        var Apuls = Number($("[name='Apuls']").val());

        var resultat = (Apuls - Hpuls) / (Mpuls - Hpuls) * 100;

        $("[name='Ialt']").val(resultat);
        return false;
    });
     // Calculate Intensity
    $("#calculator_hr_intensity_work").submit(function() {
        console.log("Calculate HR work intensity HRR");

        var Hpuls2 = Number($("[name='Hpuls2']").val());
        var Mpuls2 = Number($("[name='Mpuls2']").val());
        var Intens2 = Number($("[name='Intens2']").val());

        var resultat2 = Hpuls2 * 1 + Intens2 / 100 * (Mpuls2 - Hpuls2);

        $("[name='Ialt2']").val(resultat2);
        return false;
    });
     // Calculate Intensity
    $("#calculator_hr_intensity_from_max").submit(function() {
        console.log("Calculate HR work intensity from HRmax");

        var Apuls3 = Number($("[name='Apuls3']").val());
        var Mpuls3 = Number($("[name='Mpuls3']").val());

        var resultat3 = Apuls3 / Mpuls3 * 100;

        $("[name='Ialt3']").val(resultat3);
        return false;
    });
     // Calculate Wilks
    $("#calculator_wilksscore").submit(function() {
        console.log("Calculate Wilks Score");

        var gender = $("[name='gender']:checked").val();
        var bodyweight = Number($("[name='bodyweight']").val());
        var lifted = Number($("[name='lifted']").val());

        var wilksScore = wilks.calculateWilksScore(gender, bodyweight, lifted);

        $("[name='wilksscore']").val(wilksScore);
        return false;
    });
     // Calculate Karvonen Intensity
    $("#calculator_karvonen_intensity").submit(function() {
        console.log("Calculate Karvonen Intensity Zones");

        var minHr = Number($("#karvonen_min_hr").val());
        var maxHr = Number($("#karvonen_max_hr").val());
        
        var k = karvonen.Karvonen(minHr, maxHr);

        $("#karvonen_zone1_a").val(k.getTargetHR(50));
        $("#karvonen_zone1_b").val(k.getTargetHR(60));
        $("#karvonen_zone2_a").val(k.getTargetHR(60));
        $("#karvonen_zone2_b").val(k.getTargetHR(70));
        $("#karvonen_zone3_a").val(k.getTargetHR(70));
        $("#karvonen_zone3_b").val(k.getTargetHR(80));
        $("#karvonen_zone4_a").val(k.getTargetHR(80));
        $("#karvonen_zone4_b").val(k.getTargetHR(90));
        $("#karvonen_zone5_a").val(k.getTargetHR(90));
        $("#karvonen_zone5_b").val(maxHr);
        return false;
    });
     // Calculate Intensity
    $("#calculator_cooper_test").submit(function() {
        console.log("Calculate CooperTest");

        var distance = Number($("#distance").val());

        var c = cooper_test.CooperRunning();

        $("#kondital").val(c.getVO212MinTest(distance));
        
        return false;
    });

    $("[input='number']").on('input keyup change paste', function() {
        if (this.min) this.value = Math.max(parseInt(this.min), parseInt(this.value));
        if (this.max) this.value = Math.min(parseInt(this.max), parseInt(this.value));
    });
});

},{"./1rm":2,"./bmi":4,"./bmr":5,"./cooper":7,"./cooper-running":6,"./etpunkttest":8,"./fat-pct":10,"./fat-pct-measurements":9,"./fitness-hr":11,"./karvonen":12,"./max-hr":13,"./topunkttest":14,"wilks-calculator":1}],4:[function(require,module,exports){
let motionsplan = {}

motionsplan.BMI = function(h, w) {
  var h, w;

  h = h = h / 100;
  w = w;

  function getBMI() {
    return w / (h * h);
  }

  function getPonderalIndex() {
    return w / (h * h * h);
  }

  var publicAPI = {
    getBMI : getBMI,
    getPonderalIndex : getPonderalIndex

  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],5:[function(require,module,exports){
let motionsplan = {};


/**
 * PAL-values:
 * 
 * 1.45 Stillesiddende arbejde med kun lidt fysisk aktivitet og ingen eller begrænset fysisk aktivitet i fritiden. 
 * 1.65 Stillesiddende arbejde med et vist behov for fysisk aktivitet og ingen eller begrænset fysisk aktivitet i fritiden.
 * 1.85 Hovedsageligt stående arbejde.
 * 2.20 Hårdt kropsarbejde eller meget høj fritidsaktivitet.
 * 
 * +0.3 Sport eller anden hård fysisk aktivitet i fritiden. (30-60 min. 4-5 gange/uge)
 */

motionsplan.EnergyExpenditure = function(sex, age, weight, pal, sport) {
    var bmr;
    var koen = sex;
    var alder = age;
    var vaegt = weight;
    sport = sport;
    pal = pal;

    // BMR
    function getBasicMetabolicRate() {
        if ((koen == "1") && (alder > 10) && (alder < 19)) {
            bmr = 74 * vaegt + 2750;
        }
        else if ((koen == "1") && (alder > 18) && (alder < 31)) {
            bmr = 64 * vaegt + 2840;
        }
        else if ((koen == "1") && (alder > 30) && (alder < 61)) {
            bmr = 48.5 * vaegt + 3670;
        }
        else if ((koen == "1") && (alder > 60) && (alder < 76)) {
            bmr = 49.9 * vaegt + 2930;
        }
        else if ((koen == "1") && (alder > 75)) {
            bmr = 35 * vaegt + 3430;
        }
        else if ((koen == "0") && (alder > 10) && (alder < 19)) {
            bmr = 56 * vaegt + 2900;
        }
        else if ((koen == "0") && (alder > 18) && (alder < 31)) {
            bmr = 61.5 * vaegt + 2080;
        }
        else if ((koen == "0") && (alder > 30) && (alder < 61)) {
            bmr = 36.4 * vaegt + 3470;
        }
        else if ((koen == "0") && (alder > 60) && (alder < 76)) {
            bmr = 38.6 * vaegt + 2880;
        }
        else if ((koen == "0") && (alder > 75)) {
            bmr = 41 * vaegt + 2610;
        }
        return bmr;
    }

    // TEE
    function getTotalEnergyExpenditure() {
        return getPhysicalActivityLevel() * getBasicMetabolicRate();
    }

    // PAL
    function getPhysicalActivityLevel() {
        var pal2;
        var pal_val = pal;
        pal2 = pal_val * 1;
        console.log(sport);
        if (String(sport) == "true") {
            pal2 = pal2 + 0.3;
        }
        return pal2;
    }

    var publicAPI = {
        getBasicMetabolicRate: getBasicMetabolicRate,
        getTotalEnergyExpenditure: getTotalEnergyExpenditure,
        getPhysicalActivityLevel: getPhysicalActivityLevel
    };

    return publicAPI;

};

module.exports = motionsplan;

},{}],6:[function(require,module,exports){
let motionsplan = {}

motionsplan.CooperRunning = function() {

  // time in minutes
  function getVO22400Meter(time) {
    return (483 / time) + 3.5;
  }

  // distance in meters
  function getVO212MinTest(distance) {
    return (distance - 504.9) / 44.73;
  }

  var publicAPI = {
    getVO22400Meter: getVO22400Meter,
    getVO212MinTest: getVO212MinTest

  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
let motionsplan = {}

motionsplan.Karvonen = function(minHr, maxHr) {
  maxHr = maxHr;
  minHr = minHr;

  function getHeartRateReserve() {
    return maxHr - minHr;
  }

  function getTargetHR(intensity) {
    return Math.round(getHeartRateReserve() * intensity / 100 + minHr);
  }

  var publicAPI = {
    getTargetHR: getTargetHR
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}]},{},[3]);
