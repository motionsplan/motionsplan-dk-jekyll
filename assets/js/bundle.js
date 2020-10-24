(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*! Image Map Resizer (imageMapResizer.min.js ) - v1.0.10 - 2019-04-10
 *  Desc: Resize HTML imageMap to scaled image.
 *  Copyright: (c) 2019 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!function(){"use strict";function r(){function e(){var r={width:u.width/u.naturalWidth,height:u.height/u.naturalHeight},a={width:parseInt(window.getComputedStyle(u,null).getPropertyValue("padding-left"),10),height:parseInt(window.getComputedStyle(u,null).getPropertyValue("padding-top"),10)};i.forEach(function(e,t){var n=0;o[t].coords=e.split(",").map(function(e){var t=1==(n=1-n)?"width":"height";return a[t]+Math.floor(Number(e)*r[t])}).join(",")})}function t(e){return e.coords.replace(/ *, */g,",").replace(/ +/g,",")}function n(){clearTimeout(d),d=setTimeout(e,250)}function r(e){return document.querySelector('img[usemap="'+e+'"]')}var a=this,o=null,i=null,u=null,d=null;"function"!=typeof a._resize?(o=a.getElementsByTagName("area"),i=Array.prototype.map.call(o,t),u=r("#"+a.name)||r(a.name),a._resize=e,u.addEventListener("load",e,!1),window.addEventListener("focus",e,!1),window.addEventListener("resize",n,!1),window.addEventListener("readystatechange",e,!1),document.addEventListener("fullscreenchange",e,!1),u.width===u.naturalWidth&&u.height===u.naturalHeight||e()):a._resize()}function e(){function t(e){e&&(!function(e){if(!e.tagName)throw new TypeError("Object is not a valid DOM element");if("MAP"!==e.tagName.toUpperCase())throw new TypeError("Expected <MAP> tag, found <"+e.tagName+">.")}(e),r.call(e),n.push(e))}var n;return function(e){switch(n=[],typeof e){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(e||"map"),t);break;case"object":t(e);break;default:throw new TypeError("Unexpected data type ("+typeof e+").")}return n}}"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&"object"==typeof module.exports?module.exports=e():window.imageMapResize=e(),"jQuery"in window&&(window.jQuery.fn.imageMapResize=function(){return this.filter("map").each(r).end()})}();

},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
let motionsplan = {};

motionsplan.Estimate1RM = function(weight, repetitions = 5) {
  weight = weight;
  repetitions = repetitions;

  function getBrzycki(rm = 1) {
    var repmax = weight * (36 / (37 - repetitions))
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
    var repmax;
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
  function getReynolds(body_part = "lower", rm = 1) {
    var repmax = weight / getReynoldsPercent(body_part, repetitions) * 100;
    if (rm == 1) {
      return repmax;
    }
    return getReynoldsPercent(body_part, rm) * repmax / 100;
  }

  function getReynoldsPercent(body_part = "lower", rm = 1) {
    if (body_part == "lower") {
      return 78.17 * Math.exp(-0.0569 * rm) + 26.41;
    } else {
      return 55.51 * Math.exp(-0.0723 * rm) + 48.47;
    }
  }

  function getEpley(rm = 1) {
    var repmax = (1 + (0.0333 * repetitions)) * weight;
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
    var repmax = 7.24 + (1.05 * weight * repetitions);
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
    var repmax = (100 * weight) / (101.3 - 2.67123 * repetitions);
    if (rm == 1) {
      return repmax;
    }
    return (repmax * (101.3 - 2.67123 * rm)) / 100;
  }

  function getLombardi(rm = 1) {
    var repmax = weight * (Math.pow(repetitions, 0.1));
    if (rm == 1) {
      return repmax;
    }
    return repmax / ((Math.pow(repetitions, 0.1)));
  }

  function getMayhew(rm = 1) {
    var repmax = (100 * weight) / (52.2 + (41.9 * Math.exp(-0.055 * repetitions)));
    if (rm == 1) {
      return repmax;
    }
    return repmax * (52.2 + (41.9 * Math.exp(-0.055 * rm))) / 100;
  }

  function getOconnor(rm = 1) {
    var repmax = weight * (1 + 0.025 * repetitions);
    if (rm == 1) {
      return repmax;
    }
    return repmax / (1 + 0.025 * rm);
  }

  function getWathan(rm = 1) {
    var repmax = (100 * weight) / (48.8 + (53.8 * Math.exp(-0.075 * repetitions)));
    if (rm == 1) {
      return repmax;
    }
    return repmax * (48.8 + (53.8 * Math.exp(-0.075 * rm))) / 100;
  }

  function getWendler(rm = 1) {
    var repmax = weight * repetitions * 0.0333 + weight;
    if (rm == 1) {
      return repmax;
    }
    return 1 / (((rm * .0333) / repmax) + (1 / repmax));
  }

  function getPercentOfRm(rm, percent) {
    return rm * percent / 100;
  }

  var publicAPI = {
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
    getWendler: getWendler
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],4:[function(require,module,exports){
'use strict';

/* global $ */

const jump_reach = require('./jumpreach');
const tee_pal = require('./bmr-totalenergy-pal');
const schofield = require('./bmr-schofield');
const vmax_bike = require('./vmax');
const vmax_intervals = require('./vmax-intervals');
const billat = require('./billat');
const runwalk = require('./running-walking');
const pushup = require('./pushup');
const yyir1 = require('./beeptest-yyir1');
const beeptest = require('./beeptest');
const fitness = require('./fitness-hr');
const maxhr = require('./max-hr');
const cooper = require('./cooper');
const cooper_test = require('./cooper-running');
const running_weightchange = require('./running-weightloss');
const riegel = require('./riegel');
const fat = require('./fat-pct');
const fp_navy = require('./fat-pct-navy');
const fatm = require('./fat-pct-measurements');
const rm = require('./1rm');
const etpunkt = require('./etpunkttest');
const borg15 = require('./borg15');
const topunkt = require('./topunkttest');
const bmr_benedict_harris = require('./bmr-benedict-harris');
const bmr_equilibrium = require('./bmr-ligevaegt');
const ree = require('./bmr-nordic-2012');
const bmi = require('./bmi');
const idealweight = require('./ideal-weight');
const wilks = require('wilks-calculator');
const karvonen = require('./karvonen');
const index23 = require('./fitness-index-23');
const running = require('./running');
const running_distance_vo2 = require('./running-distance-vo2');
const running_economy = require('./running-economy');
const index100 = require('./index100');
const skinfold_durnin = require('./skinfold-durnin');
const skinfold_peterson = require('./skinfold-peterson');
const skinfold_pollock = require('./skinfold-pollock');
const skinfold_lohman = require('./skinfold-lohman');
const skinfold_slaughter = require('./skinfold-slaughter');
const rockport = require('../js/walktest-rockport-16');
const walktest_sixminutes = require('../js/walktest-sixminutes');
const fatenergypct = require('../js/fatenergypct');
const whr = require('../js/waist');
const tbw = require('../js/bodywater');
const wattmax = require('../js/wattmax');
const hr_intensity = require('../js/hr-intensity');
require('image-map-resizer');

$(document).ready(function() {
    $('map').imageMapResize();

    $("#step_man").change(function() {
        console.log('Ready to calculate');
        $("table#steps > tbody > tr").each(function(i, obj) {
            var km = $(this).find('td:first').html();
            var steps = km * 1000 / ($("#step_man").val() / 100);
            $(this).find('td').eq(1).html(steps.toFixed(0));
        });
    });
    $("#step_woman").change(function() {
        console.log('Ready to calculate');
        $("table#steps > tbody > tr").each(function(i, obj) {
            var km = $(this).find('td:first').html();
            var steps = km * 1000 / ($("#step_woman").val() / 100);
            $(this).find('td').eq(2).html(steps.toFixed(0));
        });
    });

    $("#step_length").change(function() {
        console.log('Ready to calculate');
        $("table#steps_to_km > tbody > tr").each(function(i, obj) {
            var steps = $(this).find('td:first').html();
            var km = steps * ($("#step_length").val()) / 1000 / 100;
            $(this).find('td').eq(1).html(km.toFixed(2));
        });
    });

    $("#form-formula").ready(function() {
        $(".reynolds").hide();
        $(".navy-hip").hide();
    });
    // 1RM calculate
    $("#form-formula").change(function() {
        if ($("#form-formula").val() == 'reynolds') {
            $(".reynolds").show();
        } else {
            $(".reynolds").hide();
        }
    });
    $("#calculator_fat_percent_navy").change(function() {
        if ($("#checkbox-woman").is(":checked")) {
            $(".navy-hip").show();
        } else {
            $(".navy-hip").hide();
        }
    });
    $("#calculator_rm").submit(function(e) {
        console.log("Calculate 1RM");
        e.preventDefault();

        var repmax;
        var formula = $("#form-formula").val();
        var decimals = 1;

        var reps = Number($("#form-reps").val());
        var weight = Number($("#form-weight").val());
        var bodypart = $("#form-bodypart").val();

        var r = rm.Estimate1RM(weight, reps);

        if (formula == "brzycki") {
            repmax = r.getBrzycki();
            $("#rm1").val(repmax.toFixed(decimals));
            $("#rm2").val(r.getBrzycki(2).toFixed(decimals));
            $("#rm3").val(r.getBrzycki(3).toFixed(decimals));
            $("#rm4").val(r.getBrzycki(4).toFixed(decimals));
            $("#rm5").val(r.getBrzycki(5).toFixed(decimals));
            $("#rm6").val(r.getBrzycki(6).toFixed(decimals));
            $("#rm8").val(r.getBrzycki(8).toFixed(decimals));
            $("#rm10").val(r.getBrzycki(10).toFixed(decimals));
            $("#rm12").val(r.getBrzycki(12).toFixed(decimals));
            $("#rm15").val(r.getBrzycki(15).toFixed(decimals));
        } else if (formula == "reynolds") {
            repmax = r.getReynolds();
            $("#rm1").val(repmax.toFixed(decimals));
            $("#rm2").val(r.getReynolds(bodypart, 2).toFixed(decimals));
            $("#rm3").val(r.getReynolds(bodypart, 3).toFixed(decimals));
            $("#rm4").val(r.getReynolds(bodypart, 4).toFixed(decimals));
            $("#rm5").val(r.getReynolds(bodypart, 5).toFixed(decimals));
            $("#rm6").val(r.getReynolds(bodypart, 6).toFixed(decimals));
            $("#rm8").val(r.getReynolds(bodypart, 8).toFixed(decimals));
            $("#rm10").val(r.getReynolds(bodypart, 10).toFixed(decimals));
            $("#rm12").val(r.getReynolds(bodypart, 12).toFixed(decimals));
            $("#rm15").val(r.getReynolds(bodypart, 15).toFixed(decimals));
        } else if (formula == "epley") {
            repmax = r.getEpley();
            $("#rm1").val(repmax.toFixed(decimals));
            $("#rm2").val(r.getEpley(2).toFixed(decimals));
            $("#rm3").val(r.getEpley(3).toFixed(decimals));
            $("#rm4").val(r.getEpley(4).toFixed(decimals));
            $("#rm5").val(r.getEpley(5).toFixed(decimals));
            $("#rm6").val(r.getEpley(6).toFixed(decimals));
            $("#rm8").val(r.getEpley(8).toFixed(decimals));
            $("#rm10").val(r.getEpley(10).toFixed(decimals));
            $("#rm12").val(r.getEpley(12).toFixed(decimals));
            $("#rm15").val(r.getEpley(15).toFixed(decimals));
        } else if (formula == "lander") {
            repmax = r.getLander();
            $("#rm1").val(repmax.toFixed(decimals));
            $("#rm2").val(r.getLander(2).toFixed(decimals));
            $("#rm3").val(r.getLander(3).toFixed(decimals));
            $("#rm4").val(r.getLander(4).toFixed(decimals));
            $("#rm5").val(r.getLander(5).toFixed(decimals));
            $("#rm6").val(r.getLander(6).toFixed(decimals));
            $("#rm8").val(r.getLander(8).toFixed(decimals));
            $("#rm10").val(r.getLander(10).toFixed(decimals));
            $("#rm12").val(r.getLander(12).toFixed(decimals));
            $("#rm15").val(r.getLander(15).toFixed(decimals));
        } else if (formula == "lombardi") {
            repmax = r.getLombardi();
            $("#rm1").val(repmax.toFixed(decimals));
            $("#rm2").val(r.getLombardi(2).toFixed(decimals));
            $("#rm3").val(r.getLombardi(3).toFixed(decimals));
            $("#rm4").val(r.getLombardi(4).toFixed(decimals));
            $("#rm5").val(r.getLombardi(5).toFixed(decimals));
            $("#rm6").val(r.getLombardi(6).toFixed(decimals));
            $("#rm8").val(r.getLombardi(8).toFixed(decimals));
            $("#rm10").val(r.getLombardi(10).toFixed(decimals));
            $("#rm12").val(r.getLombardi(12).toFixed(decimals));
            $("#rm15").val(r.getLombardi(15).toFixed(decimals));
        } else if (formula == "mayhew") {
            repmax = r.getMayhew();
            $("#rm1").val(repmax.toFixed(decimals));
            $("#rm2").val(r.getMayhew(2).toFixed(decimals));
            $("#rm3").val(r.getMayhew(3).toFixed(decimals));
            $("#rm4").val(r.getMayhew(4).toFixed(decimals));
            $("#rm5").val(r.getMayhew(5).toFixed(decimals));
            $("#rm6").val(r.getMayhew(6).toFixed(decimals));
            $("#rm8").val(r.getMayhew(8).toFixed(decimals));
            $("#rm10").val(r.getMayhew(10).toFixed(decimals));
            $("#rm12").val(r.getMayhew(12).toFixed(decimals));
            $("#rm15").val(r.getMayhew(15).toFixed(decimals));
        } else if (formula == "oconnor") {
            repmax = r.getOconnor();
            $("#rm1").val(repmax.toFixed(decimals));
            $("#rm2").val(r.getOconnor(2).toFixed(decimals));
            $("#rm3").val(r.getOconnor(3).toFixed(decimals));
            $("#rm4").val(r.getOconnor(4).toFixed(decimals));
            $("#rm5").val(r.getOconnor(5).toFixed(decimals));
            $("#rm6").val(r.getOconnor(6).toFixed(decimals));
            $("#rm8").val(r.getOconnor(8).toFixed(decimals));
            $("#rm10").val(r.getOconnor(10).toFixed(decimals));
            $("#rm12").val(r.getOconnor(12).toFixed(decimals));
            $("#rm15").val(r.getOconnor(15).toFixed(decimals));
        } else if (formula == "wathan") {
            repmax = r.getWathan();
            $("#rm1").val(repmax.toFixed(decimals));
            $("#rm2").val(r.getWathan(2).toFixed(decimals));
            $("#rm3").val(r.getWathan(3).toFixed(decimals));
            $("#rm4").val(r.getWathan(4).toFixed(decimals));
            $("#rm5").val(r.getWathan(5).toFixed(decimals));
            $("#rm6").val(r.getWathan(6).toFixed(decimals));
            $("#rm8").val(r.getWathan(8).toFixed(decimals));
            $("#rm10").val(r.getWathan(10).toFixed(decimals));
            $("#rm12").val(r.getWathan(12).toFixed(decimals));
            $("#rm15").val(r.getWathan(15).toFixed(decimals));
        } else if (formula == "wendler") {
            repmax = r.getWendler();
            $("#rm1").val(repmax.toFixed(decimals));
            $("#rm2").val(r.getWendler(2).toFixed(decimals));
            $("#rm3").val(r.getWendler(3).toFixed(decimals));
            $("#rm4").val(r.getWendler(4).toFixed(decimals));
            $("#rm5").val(r.getWendler(5).toFixed(decimals));
            $("#rm6").val(r.getWendler(6).toFixed(decimals));
            $("#rm8").val(r.getWendler(8).toFixed(decimals));
            $("#rm10").val(r.getWendler(10).toFixed(decimals));
            $("#rm12").val(r.getWendler(12).toFixed(decimals));
            $("#rm15").val(r.getWendler(15).toFixed(decimals));
        }

        $("#p100").val(r.getPercentOfRm(repmax, 100).toFixed(decimals));
        $("#p95").val(r.getPercentOfRm(repmax, 95).toFixed(decimals));
        $("#p90").val(r.getPercentOfRm(repmax, 90).toFixed(decimals));
        $("#p85").val(r.getPercentOfRm(repmax, 85).toFixed(decimals));
        $("#p80").val(r.getPercentOfRm(repmax, 80).toFixed(decimals));
        $("#p75").val(r.getPercentOfRm(repmax, 75).toFixed(decimals));
        $("#p70").val(r.getPercentOfRm(repmax, 70).toFixed(decimals));
        $("#p60").val(r.getPercentOfRm(repmax, 60).toFixed(decimals));
        $("#p50").val(r.getPercentOfRm(repmax, 50).toFixed(decimals));
        $("#p40").val(r.getPercentOfRm(repmax, 40).toFixed(decimals));
    });
    // Mortality calculation
    $("#calculator_cooper_mortality").submit(function(e) {
        console.log("Calculate Cooper");
        e.preventDefault();

        var age = Number($("#age").val());
        var hr_rest = Number($("#hrrest").val());
        var bloodpressure = $("#bloodpressure").val();
        var diabetes = $("#diabetes").val();
        var smoker = $("#smoker").val();
        var bmi = Number($("#bmi").val());
        var fitnesslevel = Number($("#kondital").val());

        // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
        var c = cooper.CooperClinicMortalityRiskIndex(age, hr_rest, bloodpressure, diabetes, smoker, bmi, fitnesslevel);

        $("#risk_points").val(c.getRiskPoint());
        $("#absolute_risk").val(c.getAbsoluteRisk());
        $("#relative_risk").val(c.getRelativeRisk());
    });
    // Udregn fatpercent navy
    $("#calculator_fat_percent_navy").submit(function(e) {
        console.log("Fat percent navy");
        e.preventDefault();

        var sex = $("[name='sex']:checked").val();
        var height = Number($("[name='height']").val());
        var waist = Number($("[name='waist']").val());
        var neck = Number($("[name='neck']").val());
        var hip = Number($("[name='hip']").val());

        var fp = fp_navy.CalculateFatPercentNavy(sex, height, waist, neck, hip);
        $("#fat_percent_navy").val(fp.getFatPercent());
    });
    $("#calculator_step_to_km").submit(function(e) {
        console.log("Steps to km");
        e.preventDefault();

        let steps = Number($("[name='steps']").val());
        let step_length = Number($("[name='step_to_km_step_length']").val());

        let km = steps * step_length / 100000;
        $("#step_to_km_km").val(km);
    });
    // Udregn Billat
    $("#calculator_billat").submit(function(e) {
        console.log("Billat");
        e.preventDefault();

        var distance = Number($("[name='distance']").val());

        var iw = billat.Billat(distance);
        $("#speed").val(iw.getVelocity());
        $("#d30").val(iw.getDistance30());
        $("#r30").val(iw.getRecovery30());
        $("#d60").val(iw.getDistance60());
        $("#r60").val(iw.getRecovery60());
        $("#session").val(iw.getDistance3min());
        $("#mins").val(iw.getMinutes3min());
        $("#secs").val(iw.getSeconds3min());
        $("#secs400").val(iw.getTimePr400Meter3min());
    });
    // Udregn ideal weight
    $("#calculator_idealweight").submit(function(e) {
        console.log("Idealweight");
        e.preventDefault();

        var sex = $("[name='sex']:checked").val();
        var height = Number($("[name='height']").val());

        var iw = idealweight.IdealWeight(height, sex);
        $("[name='idealweight_robinson']").val(iw.getRobinson().toFixed(2));
        $("[name='idealweight_miller']").val(iw.getMiller().toFixed(2));
        $("[name='idealweight_hamwi']").val(iw.getHamwi().toFixed(2));
        $("[name='idealweight_devine']").val(iw.getDevine().toFixed(2));
        $("[name='idealweight_peterson']").val(iw.getPeterson().toFixed(2));
        $("[name='idealweight_bmi_bodytype']").val(iw.getIdealWeightBasedOnBmiAndBodytype(Number($("[name='bodytype']").val())).toFixed(2));
    });
    // Udregn ideal weight
    $("#calculator_running_walking").submit(function(e) {
        console.log("Running Walking");
        e.preventDefault();

        var weight = Number($("[name='weight']").val());
        var running = Number($("[name='running']").val());
        var walking = Number($("[name='walking']").val());
        
        console.log(walking + ' ' + running);
        
        var run = runwalk.RunningWalking("running", running, weight);
        var walk = runwalk.RunningWalking("walking", walking, weight);
        
        var ratio_kilometer = run.getCaloriesPrKilometer() / walk.getCaloriesPrKilometer();
        var ratio_minute = run.getCaloriesPrMinute() / walk.getCaloriesPrMinute();

        $("#calories_walking_kilometer").val(walk.getCaloriesPrKilometer().toFixed(0));
        $("#calories_walking_minute").val(walk.getCaloriesPrMinute().toFixed(0));
        $("#calories_running_minute").val(run.getCaloriesPrMinute().toFixed(0));
        $("#calories_running_kilometer").val(run.getCaloriesPrKilometer().toFixed(0));
        $("#ratio_kilometer").val(ratio_kilometer.toFixed(1));
        $("#ratio_minute").val(ratio_minute.toFixed(1));
    });
    $("#calculator_jump_reach_height").submit(function(e) {
        console.log("Jump Reach test");
        e.preventDefault();

        let standing_height = Number($("[name='standing_height']").val());
        let jumping_height = Number($("[name='jumping_height']").val());

        $("[name='jump_reach_height_score']").val(jumping_height - standing_height);
    });
    $("#calculator_jump_reach_power").submit(function(e) {
        console.log("Jump Reach test");
        e.preventDefault();

        let formula = $("[name='jump-reach-formula']").val();
        let body_weight = Number($("[name='body_weight']").val());
        let body_height = Number($("[name='body_height']").val());
        let jump_reach_height_score = Number($("#jump_reach_height_score").val());

        console.log(formula + ' ' + body_weight + ' ' + body_height + ' ' + jump_reach_height_score);

        let et = jump_reach.JumpReach(formula, jump_reach_height_score, body_weight, body_height);

        $("[name='average_power']").val(et.getAveragePower());
        $("[name='peak_power']").val(et.getPeakPower());
    });
    // Udregn 1punkttest
    $("#calculator_etpunkttest").submit(function(e) {
        console.log("Etpunkt test");
        e.preventDefault();

        var work = Number($("[name='work']").val());
        var gender = Number($("[name='gender']").val());
        var puls = Number($("[name='puls']").val());
        var age = Number($("[name='age']").val());
        var weight = Number($("[name='weight']").val());

        var et = etpunkt.EtPunktTest(gender, age, weight, work, puls);

        $("[name='vo2max']").val(et.getMaximalOxygenUptake());
        $("[name='kondital']").val(et.getFitnessLevel());
    });
    // Udregn 2punkttest
    $("#calculator_topunkttest").submit(function(e) {
        console.log("Topunkt test");
        e.preventDefault();

        var work_1 = Number($("[name='work_1']").val());
        var work_2 = Number($("[name='work_2']").val());
        var hr_1 = Number($("[name='hr_1']").val());
        var hr_2 = Number($("[name='hr_2']").val());
        var age = Number($("[name='age']").val());
        var weight = Number($("[name='weight']").val());
        var max_hr = Number($("[name='max_hr']").val());

        var et = topunkt.ToPunktTest(age, weight, max_hr, work_1, hr_1, work_2, hr_2);

        $("[name='work_max']").val(et.getMaximalWork());
        $("[name='vo2max']").val(et.getMaximalOxygenUptake());
        $("[name='kondital']").val(et.getFitnessLevel());
    });
    // Calculate Max Heart Rate
    $("#calculator_maxhr").submit(function(e) {
        console.log("Calculate Maximal Heart Rate");
        e.preventDefault();

        var ald = Number($("#age").val());

        var hr = maxhr.EstimateMaxHr(ald);

        $("#max_hr").val(hr.getMaxHr().toFixed(0));
    });
    // Calculate BMI
    $("#calculator_bmi").submit(function(e) {
        console.log("Calculate BMI");
        e.preventDefault();

        var h = Number($("[name='height']").val());
        var w = Number($("[name='weight']").val());

        var b = bmi.BMI(h, w);

        $("[name='BMI']").val(b.getBMI().toFixed(1));
        $("[name='PMI']").val(b.getPonderalIndex().toFixed(1));
    });
    // Calculate Body Water
    $("#calculator_bodywater").submit(function(e) {
        console.log("Calculate Body Water");
        e.preventDefault();

        var a = Number($("#age").val());
        var h = Number($("#height").val());
        var w = Number($("#weight").val());
        var g = $("[name='sex']:checked").val();

        var f = tbw.BodyWater(h, w, a, g);

        $("#tbw").val(f.getTotalBodyWater().toFixed(2));
        $("#tbw_pct").val(f.getPercent().toFixed(2));
    });
    // Calculate Fat Percent
    $("#calculator_fat_percent").submit(function(e) {
        console.log("Calculate Fat Percent");
        e.preventDefault();

        var a = Number($("[name='age']").val());
        var h = Number($("[name='height']").val());
        var w = Number($("[name='weight']").val());
        var g = $("[name='sex']:checked").val();

        var f = fat.CalculateFatPercent(h, w, a, g);

        $("[name='BMI']").val(f.getBMI().toFixed(2));
        $("[name='fat_percent_heitmann']").val(f.getBodyFatPercentHeitmannBMIEquation().toFixed(2));
        $("[name='fat_percent_durnin']").val(f.getBodyFatPercentWomersleyDurninBMIEquation().toFixed(2));
        $("[name='fat_percent_duerenberg']").val(f.getBodyFatPercentDuerenbergBMIEquation().toFixed(2));
    });
    // Calculate Durnin
    $("#calculator_skinfold_durnin").submit(function(e) {
        console.log("Calculate Skinfold Durnin");
        e.preventDefault();

        var biceps = Number($("[name='biceps']").val());
        var triceps = Number($("[name='triceps']").val());
        var suprailiac = Number($("[name='suprailiac']").val());
        var subscapularis = Number($("[name='subscapularis']").val());
        var weight = Number($("[name='weight']").val());
        var sex = $("[name='gender']").val();
        var age = Number($("[name='age']").val());

        var f = skinfold_durnin.SkinfoldDurnin(biceps, triceps, suprailiac, subscapularis, weight, sex, age);

        $("[name='skinfold_durnin']").val(f.getSkinfoldSum().toFixed(2));
        $("[name='fatpercent_durnin']").val(f.getBodyFatPercent().toFixed(2));
        $("[name='ffm_durnin']").val(f.getFatFreeMass().toFixed(2));
    });
    // Calculate Peterson
    $("#calculator_skinfold_peterson").submit(function(e) {
        console.log("Calculate Skinfold Durnin");
        e.preventDefault();

        var midthigh = Number($("[name='midthigh']").val());
        var triceps = Number($("[name='triceps']").val());
        var suprailiac = Number($("[name='suprailiac']").val());
        var subscapularis = Number($("[name='subscapularis']").val());
        var weight = Number($("[name='weight']").val());
        var height = Number($("[name='height']").val());
        var sex = $("[name='gender']").val();
        var age = Number($("[name='age']").val());

        var f = skinfold_peterson.SkinfoldPeterson(midthigh, triceps, suprailiac, subscapularis, height, weight, sex, age);

        $("[name='skinfold_peterson']").val(f.getSkinfoldSum().toFixed(2));
        $("[name='fatpercent_peterson']").val(f.getBodyFatPercent().toFixed(2));
        $("[name='ffm_peterson']").val(f.getFatFreeMass().toFixed(2));
    });
    // Calculate Pollock
    $("#calculator_skinfold_pollock_men").submit(function(e) {
        console.log("Calculate Skinfold Pollock Men");
        e.preventDefault();

        var breast = Number($("[name='chest_male']").val());
        var abdomen = Number($("[name='abdomen_male']").val());
        var thigh = Number($("[name='thigh_male']").val());
        var age = Number($("[name='age_male']").val());
        var weight = Number($("[name='weight_male']").val());

        var f = skinfold_pollock.SkinfoldPollock(weight, age);

        $("[name='fatpercent_male']").val(f.getBodyFatPercentMale(breast, abdomen, thigh));
        $("[name='ffm_male']").val(f.getBodyFatFreeMass());
    });
    // Calculate Durnin
    $("#calculator_skinfold_pollock_women").submit(function(e) {
        console.log("Calculate Skinfold Pollock Women");
        e.preventDefault();

        var triceps = Number($("[name='triceps_female']").val());
        var hip = Number($("[name='supiliac_female']").val());
        var thigh = Number($("[name='thigh_female']").val());
        var age = Number($("[name='age_female']").val());
        var weight = Number($("[name='weight_female']").val());

        var f = skinfold_pollock.SkinfoldPollock(weight, age);

        $("[name='fatpercent_female']").val(f.getBodyFatPercentFemale(triceps, hip, thigh));
        $("[name='ffm_female']").val(f.getBodyFatFreeMass());
    });
    // Calculate Lohman
    $("#calculator_skinfold_lohman").submit(function(e) {
        console.log("Calculate Skinfold Lohman");
        e.preventDefault();

        var triceps = Number($("[name='triceps']").val());
        var calf = Number($("[name='calf']").val());
        var sex = Number($("[name='gender']").val());

        var f = skinfold_lohman.SkinfoldLohman(sex, triceps, calf);

        $("[name='fatpercent']").val(f.getBodyFatPercent());
    });
    // Calculate Slaughter
    $("#calculator_skinfold_slaughter").submit(function(e) {
        console.log("Calculate Skinfold Slaughter");
        e.preventDefault();

        var triceps = Number($("[name='triceps']").val());
        var subscapular = Number($("[name='subscapular']").val());
        var sex = Number($("[name='gender']").val());

        var f = skinfold_slaughter.SkinfoldSlaughter(sex, triceps, subscapular);

        $("[name='fatpercent']").val(f.getBodyFatpercent());
    });
    /*
    // Calculate Fat Percent Measurements
    $("#calculator_fat_percent_mu26").submit(function(e) {
        console.log("Calculate Fat Percent on Measurements");
        e.preventDefault();
        var f = fatm.CalculateFatPercentMeasurements();
        $("#fat_mu26").val(f.getFatPercentMenUnder26(
            Number($("[name='Overarm_mu26']").val()),
            Number($("[name='Mave_mu26']").val()),
            Number($("[name='Underarm_mu26']").val())
        ));
    });
    $("#calculator_fat_percent_mo26").submit(function(e) {
        console.log("Calculate Fat Percent on Measurements");
        e.preventDefault();
        var f = fatm.CalculateFatPercentMeasurements();
        $("#fat_mo26").val(f.getFatPercentMenOver26(
            Number($("[name='Hofter_mo26']").val()),
            Number($("[name='Mave_mo26']").val()),
            Number($("[name='Underarm_mo26']").val())
        ));
    });
    $("#calculator_fat_percent_wu26").submit(function(e) {
        console.log("Calculate Fat Percent on Measurements");
        e.preventDefault();
        var f = fatm.CalculateFatPercentMeasurements();
        $("#fat_wu26").val(f.getFatPercentWomenUnder26(
            Number($("[name='Laar_wu26']").val()),
            Number($("[name='Mave_wu26']").val()),
            Number($("[name='Underarm_wu26']").val())
        ));
    });
    $("#calculator_fat_percent_wo26").submit(function(e) {
        console.log("Calculate Fat Percent on Measurements");
        e.preventDefault();
        var f = fatm.CalculateFatPercentMeasurements();
        $("#fat_wo26").val(f.getFatPercentWomenOver26(
            Number($("[name='Laar_wo26']").val()),
            Number($("[name='Mave_wo26']").val()),
            Number($("[name='Laeg_wo26']").val())
        ));
    });
    */
    // Calculate VO2 from HR
    $("#calculate_fitness_level_hr").submit(function(e) {
        console.log("Calculate VO2 from HR");
        e.preventDefault();

        var hvpul = Number($("#hr_rest").val());
        var mxpul = Number($("#hr_max").val());
        var wgt = Number($("#weight").val());

        var fitnesshr = fitness.CalculateFitnessFromHr(mxpul, hvpul, wgt);

        var maxiltoptagelse = fitnesshr.getMaximalOxygenUptake();
        var kondital = fitnesshr.getFitnessLevel();

        $("#vo2max").val(maxiltoptagelse);
        $("#kondital").val(kondital);
    });
    // Calculate Borg 15 fitness
    $("#calculator_borg15").submit(function(e) {
        console.log("Calculate Borg 15 fitness");
        e.preventDefault();

        var watt = Number($("#borg_watt").val());
        var age = Number($("#borg_age").val());
        var weight = Number($("#borg_weight").val());

        var borg = borg15.Borg15(age, weight, watt);

        $("#borg_iltoptagelse").val(borg.getMaximalOxygenUptake());
        $("#borg_kondital").val(borg.getFitnessLevel());
    });
    // Calculate Wattmax
    $("#calculator_fitness_wattmax").submit(function(e) {
        console.log("Calculate Wattmax");
        e.preventDefault();
        var wmax = Number($("[name='wmax']").val());
        var sec = Number($("[name='sec']").val());
        var weight = Number($("[name='weight']").val());
        
        var watt = wattmax.Wattmax(wmax, sec, weight);

        $("[name='kondital']").val(watt.getFitnessLevel());
        $("[name='vo2max']").val(watt.getMaximalOxygenUptake());
        $("[name='mpo']").val(watt.getMPO());
    });
    // Calculate Wattmax Children
    $("#calculator_fitness_wattmax_children").submit(function(e) {
        console.log("Calculate Wattmax Children");
        e.preventDefault();

        var wmax = Number($("[name='wmax']").val());
        var sec = Number($("[name='sec']").val());
        var weight = Number($("[name='weight']").val());
        var watt_jumps = Number($("[name='watt_jumps']").val());
        var age = 15;
        
        var watt = wattmax.Wattmax(wmax, sec, weight, age, watt_jumps);

        $("[name='kondital']").val(watt.getFitnessLevel());
        $("[name='vo2max']").val(watt.getMaximalOxygenUptake());
        $("[name='mpo']").val(watt.getMPO());
    });
    // Calculate Walktest 6 min
    $("#calculator_walktest_6min").submit(function(e) {
        console.log("Calculate Walktest 6 min");
        e.preventDefault();

        let meter = Number($("[name='meter']").val());
        let sex = Number($("[name='gender']").val());
        let age = Number($("[name='age']").val());
        let height = Number($("[name='height']").val());
        let weight = Number($("[name='weight']").val());
        let repeated = $("#formula").val();
        
        let hr = walktest_sixminutes.SixMinutesWalkingTest(sex, age, height, weight, meter);

        $("[name='reference_distance']").val(hr.getReferenceMeter(repeated));
        $("[name='procent']").val(hr.getPercent(repeated).toFixed(0));
        $("#walktest_gauge").val(hr.getPercent(repeated));
    });
    // Calculate Walktest 1.6 km
    $("#calculator_walktest_16km").submit(function(e) {
        console.log("Calculate Walktest 1,6 km");
        e.preventDefault();

        var min = Number($("[name='min']").val());
        var sec = Number($("[name='sec']").val());
        var hr_after = Number($("[name='hr_after']").val());
        var gender = $("[name='gender']").val();
        var age = Number($("[name='age']").val());
        var weight = Number($("[name='weight']").val());

         var rp = rockport.RockPortWalkingTest(min, sec, hr_after, gender, age, weight);

        $("[name='kondital']").val(rp.getFitnessLevel());
    });
    // Calculate Index 23
    $("#calculator_index23").submit(function(e) {
        console.log("Calculate Index23");
        e.preventDefault();

        var height = Number($("#height").val());
        var weight = Number($("#weight").val());
        var kondital = Number($("#kondital").val());

        var i = index23.FitnessIndex23(height, weight);

        $("#index23").val(i.getIndex23BasedOnFitnessLevel(kondital));
    });
    // Calculate Index 100
    $("#calculator_index100").submit(function(e) {
        console.log("Calculate Index100");
        e.preventDefault();

        var lifted = Number($("[name='lifted']").val());
        var bodyweight = Number($("[name='weight']").val());

        var idx = index100.Index100(lifted, bodyweight);

        $("[name='index_100_lift']").val(idx.getIndex100());
    });
    $("#calculator_necessary_energy_deficit").submit(function(e) {
        console.log("Calculate calculator_necessary_energy_deficit");
        e.preventDefault();

        var lost = Number($("[name='lost']").val());
        var days = Number($("[name='days']").val());
        var lost_day = lost / days * 1000;
        var fat = 9; //kcal
        var diff = lost_day * fat;
        var weight_loss = lost_day;

        $("[name='daily_diff']").val(diff.toFixed(0) + ' kcal');
        $("[name='daily_weight_loss']").val(weight_loss.toFixed(0) + ' g');
    });
    // Calculate BMR - Benedict Harris
    $("#calculator_change").submit(function(e) {
        console.log("Calculate Equilibrium");
        e.preventDefault();

        var tee = Number($("#calculator_change [name='tee']").val());
        var intake = Number($("[name='intake']").val());

        var b = bmr_equilibrium.BMREquilibrium();

        var balance = b.getBalance(tee, intake);

        $("[name='balance']").val(balance + ' kJ');
        $("[name='weekly_weightchange']").val((b.getMaximalWeightChange(balance, 7) * 1000).toFixed(0) + ' g');
        $("[name='monthly_weightchange']").val(b.getMaximalWeightChange(balance, 30).toFixed(2) + ' kg');
    });
    $("#bmr-formula").change(function() {
        $("#bmr_legend").text($("#bmr-formula option:selected").text());
    });
    // Calculate BMR - Nordic Nutrition 2012
    $("#calculator_bmr_pal").submit(function(e) {
        console.log("Calculate BMR - 2012");
        e.preventDefault();

        var formula = $("[name='bmr-formula']").val();
        var gender = $("[name='gender']").val();
        var age = Number($("[name='age']").val());
        var weight = Number($("[name='weight']").val());
        var height = Number($("[name='height']").val());

        var b;

        if (height < 1) {
            formula = "nordic_2012";
        }

        if (formula == 'schofield') {
            b = schofield.BMRSchofield(gender, age, weight);
        } else if (formula == 'benedict_harris') {
            b = bmr_benedict_harris.BMRBenedictHarris(gender, age, weight, height);
        } else {
            b = ree.BMRNordicNutritionRecommendations2012(gender, age, weight, height);
        }
        $("[name='bmr']").val(b.getBasicMetabolicRate().toFixed(0));

        if ($("input[name='pal']").length > 0) {
            var pal = Number($("[name='pal']:checked").val());
            var moderate_leisure_activity = Number($("[name='moderate_leisure_activity']").val());
            var strenuous_leisure_activity = Number($("[name='strenuous_leisure_activity']").val());

            var tee = tee_pal.TotalEnergyExpenditurePAL(b.getBasicMetabolicRate(), pal, moderate_leisure_activity, strenuous_leisure_activity);

            $("[name='pal_calc']").val(tee.getPhysicalActivityLevel().toFixed(2));
            $("[name='tee']").val(tee.getTotalEnergyExpenditure().toFixed(0));
        }
    });
    $("#activity_intense, #activity_moderat, #activity_light, #activity_standing, #activity_sleeping").change(function(e) {
        var min_day = 24 * 60;
        var activity_intense = document.getElementById('activity_intense').value;
        var activity_moderat = document.getElementById('activity_moderat').value;
        var activity_light = document.getElementById('activity_light').value;
        var activity_standing = document.getElementById('activity_standing').value;
        var activity_sleeping = document.getElementById('activity_sleeping').value;

        var activity_sitting = min_day - activity_intense - activity_moderat - activity_light - activity_standing - activity_sleeping;
        $("[name='activity_sitting']").val(activity_sitting);
    });
    // Calculate BMR
    $("#calculator_bmr_advanced_pal").submit(function(e) {
        console.log("Calculate BMR - Advanced");
        e.preventDefault();

        var formula = $("[name='bmr-formula']").val();
        var gender = $("[name='sex']:checked").val();
        var age = Number($("[name='age']").val());
        var weight = Number($("[name='weight']").val());
        var height = Number($("[name='height']").val());

        var b;

        if (formula == 'schofield') {
            b = schofield.BMRSchofield(gender, age, weight);
        } else if (formula == 'benedict_harris') {
            b = bmr_benedict_harris.BMRBenedictHarris(gender, age, weight, height);
        } else {
            b = ree.BMRNordicNutritionRecommendations2012(gender, age, weight, height);
        }

        var basicMeta = b.getBasicMetabolicRate();

        var min_day = 24 * 60;
        var activity_intense = document.getElementById('activity_intense').value;
        var activity_moderat = document.getElementById('activity_moderat').value;
        var activity_light = document.getElementById('activity_light').value;
        var activity_standing = document.getElementById('activity_standing').value;
        var activity_sleeping = document.getElementById('activity_sleeping').value;

        var activity_sitting = min_day - activity_intense - activity_moderat - activity_light - activity_standing - activity_sleeping;

        // Estimated MET-values used
        var met_intense = 10;
        var met_moderat = 7;
        var met_light = 4;
        var met_standing = 2;
        var met_sleeping = 0.9;
        var met_sitting = 1.2;
        
        /*
        // My own PAL calculation - there is no weight factor
        var pal_intense = (met_intense * (activity_intense / 1440));
        var pal_moderat = (met_moderat * (activity_moderat / 1440));
        var pal_light = (met_light * (activity_light / 1440));
        var pal_standing = (met_standing * (activity_standing / 1440));
        var pal_sleeping = (met_sleeping * (activity_sleeping / 1440));
        var pal_sitting = (met_sitting * (activity_sitting / 1440));

        var pal = pal_intense + pal_moderat + pal_light + pal_standing + pal_sleeping + pal_sitting;
        */
        /*
        // Calculate MET-energy
        var met_energy_intense = weight * (met_intense * (activity_intense / 60));
        var met_energy_moderat = weight * (met_moderat * (activity_moderat / 60));
        var met_energy_light = weight * (met_light * (activity_light / 60));
        var met_energy_standing = weight * (met_standing * (activity_standing / 60));
        var met_energy_sitting = weight * (met_sitting * (activity_sitting / 60));
        
        var met_energy = met_energy_intense + met_energy_moderat + met_energy_light + met_energy_standing + met_energy_sitting;
        */

        // Calculate PAL from Gerrior
        var bmr_kcal = basicMeta / 4.2; // BMR is in kcal in formula
        var pal_intense = ((met_intense - 1) * ((1.15 / 0.9) * activity_intense) / 1440) / (bmr_kcal / (0.0175 * 1440 * weight));
        var pal_moderat = ((met_moderat - 1) * ((1.15 / 0.9) * activity_moderat) / 1440) / (bmr_kcal / (0.0175 * 1440 * weight));
        var pal_light = ((met_light - 1) * ((1.15 / 0.9) * activity_light) / 1440) / (bmr_kcal / (0.0175 * 1440 * weight));
        var pal_standing = ((met_standing - 1) * ((1.15 / 0.9) * activity_standing) / 1440) / (bmr_kcal / (0.0175 * 1440 * weight));
        var pal_sleeping = ((met_sleeping - 1) * ((1.15 / 0.9) * activity_sleeping) / 1440) / (bmr_kcal / (0.0175 * 1440 * weight));
        var pal_sitting = ((met_sitting - 1) * ((1.15 / 0.9) * activity_sitting) / 1440) / (bmr_kcal / (0.0175 * 1440 * weight));
        var pal_gerrior = 1.1 + pal_intense + pal_moderat + pal_light + pal_standing + pal_sleeping + pal_sitting;

        // Using Gerrior PAL calculations as constant
        var activityConstant = pal_gerrior;

        var vedligehold = basicMeta * activityConstant;

        $("[name='pal_gerrior']").val(pal_gerrior);
        $("[name='activity_sitting']").val(activity_sitting);
        $("[name='bmr']").val(basicMeta + " kJ");
        $("[name='equilibrium']").val(vedligehold + " kJ");

    });
    // Calculate BMR - Nordic Nutrition 2012
    $("#calculator_riegels").submit(function(e) {
        console.log("Riegels formular");
        e.preventDefault();

        var dist = Number($("[name='dist']").val());
        var hours = Number($("[name='hours']").val());
        var minutes = Number($("[name='minutes']").val());
        var seconds = Number($("[name='seconds']").val());

        var b = riegel.Riegel(dist, hours, minutes, seconds);

        $("#results").html(b.getTableWithEndTimes());
    });
    // Calculate BMR - Nordic Nutrition 2012
    $("#calculator_weightloss_running_time").submit(function(e) {
        console.log("Running time weight loss");
        e.preventDefault();

        var weight = Number($("[name='weight']").val());
        var weight_change = Number($("[name='change']").val());
        var hours = Number($("[name='hours']").val());
        var minutes = Number($("[name='minutes']").val());
        var seconds = Number($("[name='seconds']").val());
        var change_effect = Number($("[name='change_effect']").val());

        var b = running_weightchange.RunningWeightLoss(weight, weight_change, change_effect / 100);

        $("#result").val(b.getEstimatedFinishTime(hours, minutes, seconds));
    });
    // Calculate VMax
    $("#calculator_vmax_bike_vmax").submit(function(e) {
        console.log("Calculate Vmax from VO2");
        e.preventDefault();
        var vo2max = Number($("[name='vo2max']").val());
        
        var b = vmax_bike.Vmax(vo2max);

        $("[name='vmax']").val(b.getVmax());
    });
    // Calculate VMax intervals biking
    $("#calculator_vmax_biking_intervals").submit(function(e) {
        console.log("Calculate Vmax for Biking");
        e.preventDefault();

        var vmax = Number($("[name='biking_vmax_program']").val());
        var tmax_min = Number($("[name='biking_tmax_min']").val());
        var tmax_sec = Number($("[name='biking_tmax_sec']").val());
        var warmup_percentage = Number($("[name='biking_warmup_percentage']").val());
        var tmax_percentage = Number($("[name='biking_tmax_percentage']").val());
        var vmax_pause_percentage = Number($("[name='biking_vmax_pause_percentage']").val());
        var tmax_pause_percentage = Number($("[name='biking_tmax_pause_percentage']").val());

        var b = vmax_intervals.VmaxIntervals(vmax, tmax_min, tmax_sec);

        $("[name='biking_warmup_velocity']").val(b.getVelocity(warmup_percentage));
        $("[name='biking_vmax_program_value']").val(vmax);
        $("[name='biking_time_program_time']").val(b.getTime(tmax_percentage));
        $("[name='biking_pause_velocity']").val(b.getVelocity(vmax_pause_percentage));
        $("[name='biking_time_pause']").val(b.getTime(tmax_pause_percentage));
    });
    // Calculate VMax intervals biking
    $("#calculator_vmax_running_intervals").submit(function(e) {
        console.log("Calculate Vmax for Running");
        e.preventDefault();

        var vmax = Number($("[name='running_vmax_program']").val());
        var tmax_min = Number($("[name='running_tmax_min']").val());
        var tmax_sec = Number($("[name='running_tmax_sec']").val());
        var warmup_percentage = Number($("[name='running_warmup_percentage']").val());
        var tmax_percentage = Number($("[name='running_tmax_percentage']").val());
        var vmax_pause_percentage = Number($("[name='running_vmax_pause_percentage']").val());
        var tmax_pause_percentage = Number($("[name='running_tmax_pause_percentage']").val());

        var b = vmax_intervals.VmaxIntervals(vmax, tmax_min, tmax_sec);

        $("[name='running_warmup_velocity']").val(b.getVelocity(warmup_percentage));
        $("[name='running_vmax_program_value']").val(vmax);
        $("[name='running_time_program_time']").val(b.getTime(tmax_percentage));
        $("[name='running_pause_velocity']").val(b.getVelocity(vmax_pause_percentage));
        $("[name='running_time_pause']").val(b.getTime(tmax_pause_percentage));
        return false;
    });
    // Calculate Intensity
    $("#calculator_hr_intensity_hrr").submit(function(e) {
        console.log("Calculate HR intensity HRR");
        e.preventDefault();

        var hr_rest = Number($("[name='hr_rest']").val());
        var max_hr = Number($("[name='hr_max']").val());
        var hr_work = Number($("[name='hr_work']").val());

        var hr = hr_intensity.HRIntensity(max_hr);
        var result = hr.getHRIntensityFromHeartRateReserve(hr_rest, hr_work);

        $("[name='hrr_intensity']").val(result);
    });
     // Calculate Intensity
    $("#calculator_hr_intensity_work").submit(function(e) {
        console.log("Calculate HR work intensity HRR");
        e.preventDefault();

        var hr_rest = Number($("[name='hr_rest_form2']").val());
        var hr_max = Number($("[name='hr_max_form2']").val());
        var hr_intensity = Number($("[name='intensity']").val());

        var hr = hr_intensity.HRIntensity(hr_max);
        var result = hr.getHRBasedOnIntensityFromHeartRateReserve(hr_rest, hr_intensity);

        $("[name='hrr_heartrate']").val(result);
    });
    // Calculate Intensity
    $("#calculator_hr_intensity_from_max").submit(function(e) {
        console.log("Calculate HR work intensity from HRmax");
        e.preventDefault();

        var hr_work = Number($("[name='hr_work_form3']").val());
        var hr_max = Number($("[name='hr_max_form3']").val());

        var hr = hr_intensity.HRIntensity(hr_max);
        var result = hr.getWorkIntensityBasedOnMaxHR(hr_work);

        $("[name='intensity_form3']").val(result);
    });
     // Calculate Wilks
    $("#calculator_yyir1").submit(function(e) {
        console.log("Calculate YYIR1");
        e.preventDefault();

        var gender = $("[name='sex']:checked").val();
        var level = Number($("[name='level']").val());
        var shuttles = Number($("[name='shuttles']").val());
        var age = 10;

        var b = yyir1.YYIR1(level, shuttles);

        $("[name='distance_result']").val(b.getDistance());
        $("[name='vo2max_result']").val(b.getFitnessLevel());
        $("[name='status']").val(b.getEvaluation(gender, age));
    });
     // Calculate Wilks
    $("#calculator_beeptest_yye1").submit(function(e) {
        console.log("Calculate YYIR1");
        e.preventDefault();

        var version = $("[name='version']:checked").val();
        var level = Number($("[name='level']").val());
        var shuttles = Number($("[name='shuttles']").val());

        var b = beeptest.BeepTest(level, shuttles, version);

        $("[name='distance_result']").val(b.getDistance());
        $("[name='vo2max_result']").val(b.getFitnessLevel());
        $("[name='totalshuttles_result']").val(b.getTotalShuttles());
    });
     // Pushups
    $("#calculator_pushups").submit(function(e) {
        console.log("Calculate Pushups");
        e.preventDefault();

        var gender = $("[name='gender']:checked").val();
        var age = Number($("[name='age']").val());
        var repetitions = Number($("[name='repetitions']").val());

        var p = pushup.Pushup(gender, age, repetitions);

        $("[name='population_average']").val(p.getPopulationAverage());
        $("[name='score']").val(p.getScore());
        $("[name='rating']").val(p.getRating());
    });
     // Calculate Wilks
    $("#calculator_wilksscore").submit(function(e) {
        console.log("Calculate Wilks Score");
        e.preventDefault();

        var gender = $("[name='gender']:checked").val();
        var bodyweight = Number($("[name='bodyweight']").val());
        var lifted = Number($("[name='lifted']").val());

        var wilksScore = wilks.calculateWilksScore(gender, bodyweight, lifted);

        $("[name='wilksscore']").val(wilksScore);
    });
     // Calculate Karvonen Intensity
    $("#calculator_karvonen_intensity").submit(function(e) {
        console.log("Calculate Karvonen Intensity Zones");
        e.preventDefault();

        var min_hr = Number($("#karvonen_min_hr").val());
        var max_hr = Number($("#karvonen_max_hr").val());

        var k = karvonen.Karvonen(min_hr, max_hr);

        $("#karvonen_zone1_a").val(k.getTargetHR(50));
        $("#karvonen_zone1_b").val(k.getTargetHR(60));
        $("#karvonen_zone2_a").val(k.getTargetHR(60));
        $("#karvonen_zone2_b").val(k.getTargetHR(70));
        $("#karvonen_zone3_a").val(k.getTargetHR(70));
        $("#karvonen_zone3_b").val(k.getTargetHR(80));
        $("#karvonen_zone4_a").val(k.getTargetHR(80));
        $("#karvonen_zone4_b").val(k.getTargetHR(90));
        $("#karvonen_zone5_a").val(k.getTargetHR(90));
        $("#karvonen_zone5_b").val(max_hr);
    });
    $("#calculator_vo2max_distance_test").submit(function(e) {
        console.log("Calculate Distance");
        e.preventDefault();

        var hours = Number($("#tid_hours").val());
        var min = Number($("#tid_min").val());
        var sek = Number($("#tid_sek").val());
        var distance = Number($("#distance").val());

        min = min + (hours * 60);
        distance = distance / 1000;

        var c = running_distance_vo2.RunningDistanceVO2();

        $("#kondital").val(c.getEstimatedFitnessLevel(min, sek, distance));
    });
    $("#calculator_velocity").submit(function(e) {
        console.log("Calculate velocity");
        e.preventDefault();

        var min = Number($("[name='min']").val());
        var sec = Number($("[name='sec']").val());
        var distance = Number($("[name='distance']").val());

        var c = running.Running();

        $("#velocity_kmt").val(c.getKilometersPrHour(min, sec, distance));
        $("#velocity_min_km").val(c.getTimePrKilometer(min, sec, distance));
    });
    $("#calculator_convert_kmt_minkm_velocity").submit(function(e) {
        console.log("Calculate velocity");
        e.preventDefault();

        var kmt = Number($("[name='kmt']").val());

        var c = running.Running();

        $("#velocity_convert_minkm").val(c.convertKmtToMinPerKm(kmt));
    });
    $("#calculator_convert_minkm_kmt_velocity").submit(function(e) {
        console.log("Calculate velocity");
        e.preventDefault();

        var min = Number($("[name='min']").val());
        var sec = Number($("[name='sec']").val());

        var c = running.Running();

        $("#velocity_convert_kmt").val(c.convertMinPerKmToKmt(min, sec));
    });
    $("#calculator_running_economy").submit(function(e) {
        console.log("Calculate running economy");
        e.preventDefault();

        var weight = Number($("[name='weight']").val());
        var velocity = Number($("[name='velocity']").val());
        var oxygenuptake = Number($("[name='oxygenuptake']").val());

        var c = running_economy.RunningEconomy(weight, oxygenuptake);

        $("#running_economy").val(c.getRunningEconomy(velocity).toFixed(2));
    });
    $("#calculator_oxygen_uptake").submit(function(e) {
        console.log("Calculate oxygen uptake");
        e.preventDefault();

        var weight = Number($("[name='fitness_weight']").val());
        var oxygenuptake = Number($("[name='fitness_oxygenuptake']").val());

        var c = running_economy.RunningEconomy(weight, oxygenuptake);

        $("#fitness_level").val(c.getFitnessLevel().toFixed(2));
    });
     // Calculate Cooper 2400 meter
    $("#calculator_cooper_2400_test").submit(function(e) {
        console.log("Calculate CooperTest 2400");
        e.preventDefault();

        var min = Number($("#tid_min").val());
        var sek = Number($("#tid_sek").val());

        var c = cooper_test.CooperRunning();

        $("#kondital").val(c.getVO22400MeterTest(min, sek));
    });
    // Calculate Cooper 12 min
    $("#calculator_cooper_test").submit(function(e) {
        console.log("Calculate CooperTest");
        e.preventDefault();

        var distance = Number($("#distance").val());

        var c = cooper_test.CooperRunning();

        $("#kondital").val(c.getVO212MinTest(distance));
    });
    $("#calculator_fat_percent_food").submit(function(e) {
        console.log("Calculate Fat Energy Pct");
        e.preventDefault();

        var kj = Number($("#kj").val());
        var fat = Number($("#fat").val());

        var c = fatenergypct.FatEnergyPct(kj, fat);

        $("#fat_energy_pct").val(c.getFatEnergyPct());
    });
    $("#calculator_waist").submit(function(e) {
        console.log("Calculate Waist");
        e.preventDefault();

        var hip = Number($("#hip").val());
        var waist = Number($("#waist").val());
        var height = Number($("#height").val());

        var c = whr.WaistRatio();

        $("#whr").val(c.getWaistHipRatio(waist, hip).toFixed(2));
        $("#waistheightratio").val(c.getWaistHeightRatio(waist, height).toFixed(2));
    });
    $("[input='number']").on('input keyup change paste', function() {
        if (this.min) this.value = Math.max(parseInt(this.min), parseInt(this.value));
        if (this.max) this.value = Math.min(parseInt(this.max), parseInt(this.value));
    });

    $(".adductor-longus").hover(function () {
    	$(".adductor-longus").toggleClass("anatomy-popup-on");
	});

	$(".adductor-magnus").hover(function () {
    	$(".adductor-magnus").toggleClass("anatomy-popup-on");
	});

	$(".anconeus").hover(function () {
    	$(".anconeus").toggleClass("anatomy-popup-on");
	});

	$(".biceps-brachii").hover(function () {
    	$(".biceps-brachii").toggleClass("anatomy-popup-on");
	});

	$(".biceps-femoris").hover(function () {
    	$(".biceps-femoris").toggleClass("anatomy-popup-on");
	});

	$(".brachioradialis").hover(function () {
    	$(".brachioradialis").toggleClass("anatomy-popup-on");
	});

	$(".deltoideus").hover(function () {
    	$(".deltoideus").toggleClass("anatomy-popup-on");
	});

	$(".extensor-carpi-radialis-longus").hover(function () {
    	$(".extensor-carpi-radialis-longus").toggleClass("anatomy-popup-on");
	});

	$(".extensor-carpi-ulnaris").hover(function () {
    	$(".extensor-carpi-ulnaris").toggleClass("anatomy-popup-on");
	});

	$(".extensor-digitori-minimi").hover(function () {
    	$(".extensor-digitori-minimi").toggleClass("anatomy-popup-on");
	});

	$(".extensor-digitorum").hover(function () {
    	$(".extensor-digitorum").toggleClass("anatomy-popup-on");
	});

	$(".external-oblique").hover(function () {
    	$(".external-oblique").toggleClass("anatomy-popup-on");
	});

	$(".flexor-carpi-radialis").hover(function () {
    	$(".flexor-carpi-radialis").toggleClass("anatomy-popup-on");
	});

	$(".flexor-carpi-ulnaris").hover(function () {
    	$(".flexor-carpi-ulnaris").toggleClass("anatomy-popup-on");
	});

	$(".gastrocnemius").hover(function () {
    	$(".gastrocnemius").toggleClass("anatomy-popup-on");
	});

	$(".gluteus-maximus").hover(function () {
    	$(".gluteus-maximus").toggleClass("anatomy-popup-on");
	});

	$(".gluteus-medius").hover(function () {
    	$(".gluteus-medius").toggleClass("anatomy-popup-on");
	});

	$(".gracilis").hover(function () {
    	$(".gracilis").toggleClass("anatomy-popup-on");
	});

	$(".infraspinatus").hover(function () {
    	$(".infraspinatus").toggleClass("anatomy-popup-on");
	});

	$(".internal-oblique").hover(function () {
    	$(".internal-oblique").toggleClass("anatomy-popup-on");
	});

	$(".latissimus-dorsi").hover(function () {
    	$(".latissimus-dorsi").toggleClass("anatomy-popup-on");
	});

	$(".pectineus").hover(function () {
    	$(".pectineus").toggleClass("anatomy-popup-on");
	});

	$(".pectoralis-major").hover(function () {
    	$(".pectoralis-major").toggleClass("anatomy-popup-on");
	});

	$(".rectus-abdominis").hover(function () {
    	$(".rectus-abdominis").toggleClass("anatomy-popup-on");
	});

	$(".rectus-femoris").hover(function () {
    	$(".rectus-femoris").toggleClass("anatomy-popup-on");
	});

	$(".sartorius").hover(function () {
    	$(".sartorius").toggleClass("anatomy-popup-on");
	});

	$(".semimembranosus").hover(function () {
    	$(".semimembranosus").toggleClass("anatomy-popup-on");
	});

	$(".semitendinosus").hover(function () {
    	$(".semitendinosus").toggleClass("anatomy-popup-on");
	});

	$(".serratus-anterior").hover(function () {
    	$(".serratus-anterior").toggleClass("anatomy-popup-on");
	});

	$(".soleus").hover(function () {
    	$(".soleus").toggleClass("anatomy-popup-on");
	});

	$(".teres-major").hover(function () {
    	$(".teres-major").toggleClass("anatomy-popup-on");
	});

	$(".tibialis-anterior").hover(function () {
    	$(".tibialis-anterior").toggleClass("anatomy-popup-on");
	});

	$(".trapezius").hover(function () {
    	$(".trapezius").toggleClass("anatomy-popup-on");
	});

	$(".triceps-brachii").hover(function () {
    	$(".triceps-brachii").toggleClass("anatomy-popup-on");
	});

	$(".vastus-lateralis").hover(function () {
    	$(".vastus-lateralis").toggleClass("anatomy-popup-on");
	});

	$(".vastus-medialis").hover(function () {
    	$(".vastus-medialis").toggleClass("anatomy-popup-on");
	});
});

},{"../js/bodywater":14,"../js/fatenergypct":22,"../js/hr-intensity":25,"../js/waist":46,"../js/walktest-rockport-16":47,"../js/walktest-sixminutes":48,"../js/wattmax":49,"./1rm":3,"./beeptest":6,"./beeptest-yyir1":5,"./billat":7,"./bmi":8,"./bmr-benedict-harris":9,"./bmr-ligevaegt":10,"./bmr-nordic-2012":11,"./bmr-schofield":12,"./bmr-totalenergy-pal":13,"./borg15":15,"./cooper":17,"./cooper-running":16,"./etpunkttest":18,"./fat-pct":21,"./fat-pct-measurements":19,"./fat-pct-navy":20,"./fitness-hr":23,"./fitness-index-23":24,"./ideal-weight":26,"./index100":27,"./jumpreach":28,"./karvonen":29,"./max-hr":30,"./pushup":31,"./riegel":32,"./running":37,"./running-distance-vo2":33,"./running-economy":34,"./running-walking":35,"./running-weightloss":36,"./skinfold-durnin":38,"./skinfold-lohman":39,"./skinfold-peterson":40,"./skinfold-pollock":41,"./skinfold-slaughter":42,"./topunkttest":43,"./vmax":45,"./vmax-intervals":44,"image-map-resizer":1,"wilks-calculator":2}],5:[function(require,module,exports){
let motionsplan = {}

motionsplan.YYIR1 = function(level, shuttles) {
    var distTOTAL = [0, 0, 0, 0, 0, 40, 40, 40, 40, 80, 80, 120, 200, 320, 480, 800, 1120, 1440, 1760, 2080, 2400, 2720, 3040, 3360];
    var distance = distTOTAL[level] + (shuttles * 40 - 40);
    var calcval = (distance * 0.0084 + 36.4);

    function getDistance() {
        return distance;
    }

    function getFitnessLevel() {
        return calcval;
    }

    // Age is not working at the moment in the calculator
    function getEvaluation(sex, age = 10) {
        var ageGroup;
        var normdistance = getDistance();
        if (age <= 25) {
            ageGroup = 0;
        }
        else if (age <= 35) {
            ageGroup = 1;
        }
        else if (age <= 45) {
            ageGroup = 2;
        }
        else if (age <= 55) {
            ageGroup = 3;
        }
        else if (age <= 65) {
            ageGroup = 4;
        }
        else {
            ageGroup = 5;
        }
        if (sex == "male") {

            var male = [
                [2400, 57, 52, 46, 42, 38],
                [2000, 49, 43, 39, 36, 33],
                [1520, 43, 39, 36, 32, 29],
                [1040, 40, 35, 32, 30, 26],
                [520, 35, 31, 29, 26, 22],
                [0, 30, 26, 25, 22, 20],
                [0, 0, 0, 0, 0, 0]
            ];
            if (normdistance >= male[0][ageGroup]) {
                return "Elite";
            }
            else if (normdistance >= male[1][ageGroup]) {
                return "Excellent";
            }
            else if (normdistance >= male[2][ageGroup]) {
                return "Good";
            }
            else if (normdistance >= male[3][ageGroup]) {
                return "Average";
            }
            else if (normdistance >= male[4][ageGroup]) {
                return "Below Average";
            }
            else if (normdistance >= male[5][ageGroup]) {
                return "Poor";
            }
            else if (normdistance >= male[6][ageGroup]) {
                return "Poor";
            }


        }
        else {

            var female = [
                [1600, 53, 46, 41, 38, 33],
                [1320, 45, 38, 34, 32, 28],
                [1000, 39, 34, 31, 28, 25],
                [680, 35, 31, 28, 25, 22],
                [320, 31, 27, 25, 22, 19],
                [0, 26, 22, 20, 18, 17],
                [0, 0, 0, 0, 0, 0]
            ];

            if (normdistance >= female[0][ageGroup]) {
                return "Elite";
            }
            else if (normdistance >= female[1][ageGroup]) {
                return "Excellent";
            }
            else if (normdistance >= female[2][ageGroup]) {
                return "Good";
            }
            else if (normdistance >= female[3][ageGroup]) {
                return "Average";
            }
            else if (normdistance >= female[4][ageGroup]) {
                return "Below Average";
            }
            else if (normdistance >= female[5][ageGroup]) {
                return "Poor";
            }
            else if (normdistance >= female[6][ageGroup]) {
                return "Poor";
            }

        }

    }

    var publicAPI = {
        getDistance: getDistance,
        getEvaluation: getEvaluation,
        getFitnessLevel: getFitnessLevel

    };

    return publicAPI;
}

module.exports = motionsplan;

},{}],6:[function(require,module,exports){
let motionsplan = {};

motionsplan.BeepTest = function(level, shuttles, version) {
    var shuttleTOTAL = [0, 7, 8, 8, 8, 9, 9, 10, 10, 11, 11, 11, 12, 12, 13, 13, 13, 14, 14, 15, 15, 16];
    var distTOTAL = [0, 0, 140, 300, 460, 620, 800, 980, 1180, 1380, 1600, 1820, 2040, 2280, 2520, 2780, 3040, 3300, 3580, 3860, 4160, 4460];

    var Fract = shuttles / shuttleTOTAL[level];
    var Score = Number(level) + Fract;

    version = version;
    var adjust = 0;
    if (version == "YYE2") {
        adjust = 1180;
    }

    var distance = distTOTAL[level] + (shuttles * 20) - adjust;

    var totalshuttles = distance / 20;

    var calcval = ((0.0028 * Score * Score * Score) - (0.0968 * Score * Score) + (4.5226 * Score) + 5.5137);

    function getDistance() {
        return distance;
    }

    function getTotalShuttles() {
        return totalshuttles;
    }

    function getFitnessLevel() {
        return calcval;
    }

    var publicAPI = {
        getDistance: getDistance,
        getTotalShuttles: getTotalShuttles,
        getFitnessLevel: getFitnessLevel

    };

    return publicAPI;
}

module.exports = motionsplan;

},{}],7:[function(require,module,exports){
let motionsplan = {}

motionsplan.Billat = function(distance) {
  var dist = distance;
  var vel = dist / 360;
  
  function getVelocity() {
    return vel;
  }

  var tdist = Math.ceil(dist / 200) * 100;
  var d30 = Math.ceil(dist / 12);
  var r30 = Math.ceil(d30 / 2);
  var d60 = d30 * 2;
  var r60 = r30 * 2;

  function getDistance30() {
    return d30;
  }
  
  function getRecovery30() {
    return r30;
  }
  
  function getDistance60() {
    return d60;
  }
  
  function getRecovery60() {
    return r60;
  }

  function getDistance3min() {
    return tdist;
  }

  var ttime = tdist / vel;
  var mins = Math.floor(ttime / 60);
  
  function getMinutes3min() {
    return mins;    
  }
  
  function getSeconds3min() {
    return Math.ceil(ttime - (60 * mins));
  }
  
  function getTimePr400Meter3min() {
    return Math.ceil(400 / vel);
  }

  var publicAPI = {
    getVelocity: getVelocity,
    getDistance30: getDistance30,
    getRecovery30: getRecovery30,
    getDistance60: getDistance60,
    getRecovery60: getRecovery60,
    getDistance3min: getDistance3min,
    getMinutes3min : getMinutes3min,
    getSeconds3min : getSeconds3min,
    getTimePr400Meter3min : getTimePr400Meter3min
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
let motionsplan = {};

motionsplan.BMRBenedictHarris = function(sex, age, weight, height) {
    age = parseInt(age);
    weight = parseInt(weight);
    height = parseInt(height); // convert to meters
    sex = sex;

    function getBasicMetabolicRate() {
        var bmr;
        if (sex == "male") {
            bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
        } else {
            bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
        }
        return bmr * 4.184;
            
    }

    var publicAPI = {
        getBasicMetabolicRate : getBasicMetabolicRate
    };

    return publicAPI;

};

module.exports = motionsplan;

},{}],10:[function(require,module,exports){
let motionsplan = {};

motionsplan.BMREquilibrium = function() {
    function getBalance(tee, intake) {
        return (intake - tee);
    }

    function getMaximalWeightChange(change, days = 1) {
        var fat_energy = 38000; // pr. kg
        var protein_energy = 17000; // pr. kg
        if (change < 0) {
            return (change * -1 / fat_energy) * days;
        } 
        
        if (change == 0) {
            return 0;
        } 

        return (change / protein_energy) * days;
    }

    var publicAPI = {
        getMaximalWeightChange : getMaximalWeightChange,
        getBalance : getBalance
    };

    return publicAPI;

};

module.exports = motionsplan;

},{}],11:[function(require,module,exports){
let motionsplan = {};

/**
 * Based on Nordic Nutrition Recommendations 2012
 */
motionsplan.BMRNordicNutritionRecommendations2012 = function(sex, age, weight, height = 0) {
    var bmr;
    sex = sex; // Men is 1; women 0
    age = age;
    weight = weight;
    height = height / 100;

    function isMale() {
        if (sex == "male") {
            return true;
        }
        return false;
    }

    function getBasicMetabolicRate() {
        return getRestingEnergyExpenditure();
    }

    // BMR - Nordiska 2012 - kJ
    function getRestingEnergyExpenditure() {
        if (height > 0) {
            return getRestingEnergyExpenditureHeight();
        }

        if (isMale()) {
            if (age > 70) {
                bmr = 0.0573 * weight + 2.01;
            } else if (age > 60) {
                bmr = 0.0543 * weight + 2.37;
            } else if (age > 30) {
                bmr = 0.0592 * weight + 2.48;
            } else if (age > 18) {
                bmr = 0.0669 * weight + 2.28;
            } else if (age > 10) {
                bmr = 0.0769 * weight + 2.43;
            } else if (age > 2) {
                bmr = 0.0937 * weight + 2.15;
            } else {
                bmr = 0.255 * weight - 0.141;
            }
        } else {
            if (age > 70) {
                bmr = 0.0417 * weight + 2.41;
            } else if (age > 60) {
                bmr = 0.0429 * weight + 2.39;
            } else if (age > 30) {
                bmr = 0.0407 * weight + 2.9;
            } else if (age > 18) {
                bmr = 0.0546 * weight + 2.33;
            } else if (age > 10) {
                bmr = 0.0465 * weight + 3.18;
            } else if (age > 2) {
                bmr = 0.0842 * weight + 2.12;
            } else {
                bmr = 0.246 * weight - 0.0965;
            }
        }
        return bmr * 1000;
    }

    // BMR - Nordiska 2012 - based on height
    function getRestingEnergyExpenditureHeight() {
        if (isMale()) {
            if (age > 70) {
                bmr = 0.0748 * weight + 2.26 * height - 1.070;
            } else if (age > 60) {
                bmr = 0.0748 * weight + 2.26 * height - 1.070;
            } else if (age > 30) {
                bmr = 0.0476 * weight + 2.26 * height - 0.574;
            } else if (age > 18) {
                bmr = 0.0600 * weight + 1.31 * height + 0.473;
            } else if (age > 10) {
                bmr = 0.0651 * weight + 1.11 * height + 1.25;
            } else if (age > 2) {
                bmr = 0.0632 * weight + 1.31 * height + 1.28;
            } else {
                bmr = 0.118 * weight + 3.59 * height - 1.55;
            }
        } else {
            if (age > 70) {
                bmr = 0.0356 * weight + 1.76 * height + 0.0448;
            }else if (age > 60) {
                bmr = 0.0356 * weight + 1.76 * height + 0.0448;
            } else if (age > 30) {
                bmr = 0.0342 * weight + 2.10 * height - 0.0486;
            } else if (age > 18) {
                bmr = 0.0433 * weight + 2.57 * height - 1,180;
            } else if (age > 10) {
                bmr = 0.0393 * weight + 1.04 * height + 1.93;
            } else if (age > 2) {
                bmr = 0.0666 * weight + 0.878 * height + 1.46;
            } else {
                bmr = 0.127 * weight + 2.94 * height - 1.20;
            }
        }
        return bmr * 1000;
    }

    var publicAPI = {
        getBasicMetabolicRate : getBasicMetabolicRate,
        getRestingEnergyExpenditure : getRestingEnergyExpenditure
    };

    return publicAPI;

};

module.exports = motionsplan;

},{}],12:[function(require,module,exports){
let motionsplan = {};

motionsplan.BMRSchofield = function(sex, age, weight) {
    sex = sex;
    age = age;
    weight = weight;

    function isMale() {
        if (sex == "male") {
            return true;
        }
        return false;
    }

    // Værdier baseret på Schofield
    function getBasicMetabolicRate() {
        if (isMale()) {
            if (age > 60) {
                return 49.9 * weight + 2930;
            }
            if (age > 30) {
                return 48 * weight + 3653;
            }
            if (age > 18) {
                return 63 * weight + 2896;
            }
            if (age > 10) {
                return 74 * weight + 2754;
            }
            if (age > 2) {
                return 95 * weight + 2110;
            }
            if (age > 0) {
                return 249 * weight - 127;
            }
        }
        if (age > 60) {
            return 38 * weight + 2755;
        }   
        if (age > 30) {
            return 34 * weight + 3538;
        }
        if (age > 18) {
            return 62 * weight + 2036;
        }
        if (age > 10) {
            return 56 * weight + 2898;
        }
        if (age > 2) {
            return 85 * weight + 2033;
        }
        if (age > 0) {
            return 244 * weight - 130;
        }
    }

    var publicAPI = {
        getBasicMetabolicRate: getBasicMetabolicRate
    };

    return publicAPI;

};

module.exports = motionsplan;

},{}],13:[function(require,module,exports){
let motionsplan = {};


/**
 * Based on Nordic Nutrition Recommendations 2012
 * 
 * PAL-values:
 * 
 * 1.45 Stillesiddende arbejde med kun lidt fysisk aktivitet og ingen eller begrænset fysisk aktivitet i fritiden. 
 * 1.65 Stillesiddende arbejde med et vist behov for fysisk aktivitet og ingen eller begrænset fysisk aktivitet i fritiden.
 * 1.85 Hovedsageligt stående arbejde.
 * 2.20 Hårdt kropsarbejde eller meget høj fritidsaktivitet.
 * 
 * +0.3 Sport eller anden hård fysisk aktivitet i fritiden. (30-60 min. 4-5 gange/uge)
 */

motionsplan.TotalEnergyExpenditurePAL = function(bmr, pal, moderate_leisure_activity, strenuous_leisure_activity) {
    bmr = bmr;
    pal = pal + moderate_leisure_activity * 0.025 + strenuous_leisure_activity * 0.05;

    function getRestingEnergyExpenditure() {
        return bmr;
    }

    // TEE
    function getTotalEnergyExpenditure() {
        return getPhysicalActivityLevel() * getRestingEnergyExpenditure();
    }

    // PAL
    function getPhysicalActivityLevel() {
        return pal;
    }

    var publicAPI = {
        getRestingEnergyExpenditure: getRestingEnergyExpenditure,
        getTotalEnergyExpenditure: getTotalEnergyExpenditure,
        getPhysicalActivityLevel: getPhysicalActivityLevel
    };

    return publicAPI;

};

module.exports = motionsplan;

},{}],14:[function(require,module,exports){
let motionsplan = {}

motionsplan.BodyWater = function(height, weight, age, sex) {
  height = height;
  weight = weight;
  age = age;
  sex = sex;

  function getTotalBodyWater() {
    if (isMale()) {
      return 2.447 - (0.09145 * age) + (0.1074 * height) + (0.3362 * weight);
    }
    return -2.097 + (0.1069 * height) + (0.2466 * weight);
  }
  
  
  function getPercent() {
    return getTotalBodyWater() / weight * 100;
  }
  
  function isMale() {
    if (sex == 'male') {
      return true;
    }
    return false;
  }

  var publicAPI = {
    getTotalBodyWater : getTotalBodyWater,
    getPercent : getPercent

  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],15:[function(require,module,exports){
let motionsplan = {}

motionsplan.Borg15 = function(age, weight, watt) {
  var age = age;
  var wgt = weight;
  var watt = watt;

  function getMaximalOxygenUptake() {
    // Jeg har brugt tyngdeaccellerationen i Danmark til at udregne 9.816 / 60 s = 0.1636
    return ((1.19 * (watt / 9.816 * 60)) - (15.84 * age) + (13.06 * wgt) + 1365) / 1000;
  }

  function getFitnessLevel() {
    return  (getMaximalOxygenUptake() / wgt) * 1000;
  }

  var publicAPI = {
    getMaximalOxygenUptake : getMaximalOxygenUptake,
    getFitnessLevel : getFitnessLevel
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],16:[function(require,module,exports){
let motionsplan = {}

motionsplan.CooperRunning = function() {

  // time in minutes
  function getVO22400MeterTest(min, sek) {
    var time = min + (sek / 60);
    return (483 / time) + 3.5;
  }

  // distance in meters
  function getVO212MinTest(distance) {
    return (distance - 504.9) / 44.73;
  }

  var publicAPI = {
    getVO22400MeterTest: getVO22400MeterTest,
    getVO212MinTest: getVO212MinTest

  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
let motionsplan = {}

motionsplan.EtPunktTest = function(gender, age, weight, work, hr) {
  var ax3, bx2, cx, d, korrektion;
  var arb = work;
  var koen = gender;
  var vaegt = weight;
  var puls = hr;
  var alder = age;

  function isMale() {
    if (koen == "1") {
      return true;
    }
    return false;
  }

  function getMaximalOxygenUptake() {
    if (isMale()) {
      if (arb == "50") {
        ax3 = -0.0000141887098363194;
        bx2 = 0.00564913345624763;
        cx = -0.780818885937746;
        d = 39.1006320316801;
      }
      else if (arb == "75") {
        ax3 = -0.00000543674435627603;
        bx2 = 0.0026568064501183;
        cx = -0.452158557600623;
        d = 28.2705225878313;
      }
      else if (arb == "100") {
        ax3 = -0.00000781456387209244;
        bx2 = 0.0037691350493366;
        cx = -0.628684090959725;
        d = 38.1781325862974;
      }
      else if (arb == "150") {
        ax3 = -0.00000480199704005531;
        bx2 = 0.00263336860763636;
        cx = -0.502384480151535;
        d = 35.4646039706529;
      }
    } else {
      if (arb == "50") {
        ax3 = -0.00000908367168416049;
        bx2 = 0.00414579767940695;
        cx = -0.655844035762893;
        d = 37.2727235943794;
      }
      else if (arb == "75") {
        ax3 = -0.00000933665751673296;
        bx2 = 0.0044902366150176;
        cx = -0.742969310750658;
        d = 43.9747812265557;
      }
      else if (arb == "100") {
        ax3 = -0.00000915073336660991;
        bx2 = 0.00455540562587432;
        cx = -0.780173372160715;
        d = 47.9223030409269;
      }
      else if (arb == "150") {
        ax3 = -0.00000541183365569748;
        bx2 = 0.00301601587808795;
        cx = -0.586119541549347;
        d = 41.7833862710695;
      }
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

},{}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
let motionsplan = {}

/**
 * Also see here
 * https://www.researchgate.net/publication/242017991_Predicting_Body_Composition_in_College_Students_Using_the_Womersley_and_Durnin_Body_Mass_Index_Equation
 */
motionsplan.CalculateFatPercentNavy = function(sex, h, waist, neck, hip = 0) {
  var height, waist, sex, hip, neck;

  height = h;
  waist = waist;
  sex = sex;
  hip = hip;
  neck = neck;

  function getFatPercent() {
    if (sex == 'man') {
      var eq = (1.0324 - (0.19077 * Math.log10(waist - neck)) + (0.15456 * Math.log10(height)));

    } else {
      var eq = (1.29579 - (0.35004 * Math.log10(waist + hip - neck)) + (0.22100 * Math.log10(height)));
    }
    
    return (495/eq) - 450;
  }

  var publicAPI = {
    getFatPercent : getFatPercent
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],21:[function(require,module,exports){
let motionsplan = {}

/**
 * Also see here
 * https://www.researchgate.net/publication/242017991_Predicting_Body_Composition_in_College_Students_Using_the_Womersley_and_Durnin_Body_Mass_Index_Equation
 */
motionsplan.CalculateFatPercent = function(h, w, a, sex) {
  var h, w, sex;

  h = h = h / 100;
  w = w;
  a = a;
  sex = sex;

  function getBMI() {
    return w / (h * h);
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

  /**
   * https://www.ncbi.nlm.nih.gov/pubmed/2043597
   */
  function getBodyFatPercentDuerenbergBMIEquation() {
    if (isMale()) {
      sex = 1;
    } else {
      sex = 1;
    }
    return 1.20 * getBMI() + 0.23 * a - 10.8 * sex - 5.4;
  }

  function isMale() {
    if (sex == 'man') {
      return true; 
    }
    return false;
  }

  var publicAPI = {
    getBMI : getBMI,
    getFatMass: getFatMass,
    getBodyFatPercentHeitmannBMIEquation: getBodyFatPercentHeitmannBMIEquation,
    getBodyFatPercentWomersleyDurninBMIEquation : getBodyFatPercentWomersleyDurninBMIEquation,
    getBodyFatPercentDuerenbergBMIEquation : getBodyFatPercentDuerenbergBMIEquation
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],22:[function(require,module,exports){
let motionsplan = {}

motionsplan.FatEnergyPct = function(kj, fat) {
  kj = kj;
  fat = fat;

  function getFatEnergyPct() {
    return  (fat * 38/kj) * 100;
  }

  var publicAPI = {
    getFatEnergyPct : getFatEnergyPct
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],23:[function(require,module,exports){
let motionsplan = {}

motionsplan.CalculateFitnessFromHr = function(hr_max, hr_rest, wgt) {
  var hr_max, hr_rest, wgt;

  hr_max = hr_max;
  hr_rest = hr_rest;
  wgt = wgt;

  function getMaximalOxygenUptake() {
    return getFitnessLevel() * wgt / 1000;
  }

  function getFitnessLevel() {
    return hr_max / hr_rest * 15.3;
  }

  var publicAPI = {
    getMaximalOxygenUptake: getMaximalOxygenUptake,
    getFitnessLevel: getFitnessLevel

  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],24:[function(require,module,exports){
let motionsplan = {}

// height in cm
// weight in kg
motionsplan.FitnessIndex23 = function(height, weight) {

  height = height / 100; // should be in meters for the following calculations
  weight = weight; // in kg

  // kondital i ml/kg/min
  function getIndex23BasedOnFitnessLevel(kondital) {
    return (kondital * weight) / (23 * height * height);
  }

  // vo2max in ml / min
  function getIndex23BasedOnVO2max(vo2max) {
    return vo2max / (23 * height * height);
  }

  // vo2max in ml / min
  function getFitnessLevelBasedOnVO2max(vo2max) {
    return vo2max / weight;
  }

  var publicAPI = {
    getIndex23BasedOnVO2max : getIndex23BasedOnVO2max,
    getIndex23BasedOnFitnessLevel : getIndex23BasedOnFitnessLevel,
    getFitnessLevelBasedOnVO2max : getFitnessLevelBasedOnVO2max
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],25:[function(require,module,exports){
let motionsplan = {}

motionsplan.HRIntensity = function(max_hr) {
  var max_hr = max_hr;
  
  function getWorkIntensityBasedOnMaxHR(work_hr) {
    return work_hr / max_hr * 100;
  }

  function getHRBasedOnIntensityFromHeartRateReserve(rest_hr, intensity) {
    return rest_hr * 1 + intensity / 100 * (max_hr - rest_hr);
  }
    
  function getHRIntensityFromHeartRateReserve(rest_hr, work_hr) {
    return (work_hr - rest_hr) / (max_hr - rest_hr) * 100;
  }
  
  var publicAPI = {
    getWorkIntensityBasedOnMaxHR : getWorkIntensityBasedOnMaxHR,
    getHRBasedOnIntensityFromHeartRateReserve : getHRBasedOnIntensityFromHeartRateReserve,
    getHRIntensityFromHeartRateReserve : getHRIntensityFromHeartRateReserve
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],26:[function(require,module,exports){
let motionsplan = {}

motionsplan.IdealWeight = function(height, sex) {
  var h, height, sex;

  height = height;
  // Formulas only works for people over 152
  h = height - 152;
  sex = sex;

  function getRobinson() {
    if (sex == 'man') {
      return 52 + 0.75 * h;
    } 
    return 49 + 0.67 * h;
  }

  function getMiller() {
    if (sex == 'man') {
      return 56.2 + 0.56 * h;
    } 
    return 53.1 + 0.54 * h;
  }

  function getHamwi() {
    if (sex == 'man') {
      return 48.0 + 1.06 * h;
    } 
    return 45.5 + 0.87 * h;
  }

  function getDevine() {
    if (sex == 'man') {
      return 50.0 + 0.91 * h;
    } 
    return 45.5 + 0.91 * h;
  }

  // https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4841935/
  function getPeterson(target_bmi = 22) {
    var hgt = height / 100;
    return (2.2 * target_bmi) + (3.5 * target_bmi * (hgt - 1.5));
  }

  // Based on Zacho BMI Women 22,5 og Man 24,5  
  function getIdealWeightBasedOnBmiAndBodytype(bodytype) {
    var hgt = height / 100;
    
    if (sex == 'man') {
      return (hgt * hgt) * 24.5 * bodytype;
    } 
    return (hgt * hgt) * 22.5 * bodytype;
  }

  var publicAPI = {
    getHamwi : getHamwi,
    getDevine : getDevine,
    getMiller : getMiller,
    getRobinson : getRobinson,
    getPeterson : getPeterson,
    getIdealWeightBasedOnBmiAndBodytype : getIdealWeightBasedOnBmiAndBodytype
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],27:[function(require,module,exports){
let motionsplan = {}

motionsplan.Index100 = function(lifted, body_weight) {
  var lifted = lifted;
  var body_weight = body_weight;

  // time in minutes
  function getIndex100(min, sek) {
    return lifted * 986.63 / (1270.4 - 172970 * ((Math.pow(body_weight, -1.3925))));
  }

  var publicAPI = {
    getIndex100 : getIndex100
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],28:[function(require,module,exports){
let motionsplan = {};

motionsplan.JumpReach = function(formula = "harman", jump_height, body_mass, height = 0) {
  height = height;
  body_mass = body_mass;
  jump_height = jump_height;
  var average_power = "n/a";
  var peak_power = "n/a";
  var papw = "n/a";

  if (formula == "lewis") {
    getLewis();
  } else if (formula == "johnsonbahmamonde") {
    getJohnsonBahmamonde();
  } else if (formula == "sayers_cmj") {
    getSayersCMJ();
  } else if (formula == "sayers_sj") {
    getSayersSquatJump();
  } else {
    getHarman();
  }

  function getAveragePower(jump_height) {
    return average_power;
  }
  
  function getPeakPower() {
    return peak_power;
  }
  
  function getPapw() {
    return papw;
  }

  // Returns average power
  // jump_reach_score (m)
  function getLewis() {
    let jump_reach_score =  jump_height / 100;
    average_power = Math.sqrt(4.9) * body_mass * Math.sqrt(jump_reach_score) * 9.81;
  }

  // height cm
  // Original paper says +1822, but in this paper where Harman is a coauthor it says -1822,
  // which aligns better with the other formulas.
  // https://journals.lww.com/acsm-msse/Fulltext/1999/04000/Cross_validation_of_three_jump_power_equations.13.aspx
  function getHarman() {
    peak_power = 61.9 * jump_height + 36.0 * body_mass - 1822;
    average_power = 21.2 * jump_height + 23 * body_mass - 1393;
  }
  
  function getJohnsonBahmamonde() {
    peak_power = 78.6 * jump_height + 60.3 * body_mass - 15.3 * height - 1308;
    average_power = 43.8 * jump_height + 32.7 * body_mass - 16.8 * height + 431;
  }
  
  function getSayersSquatJump() {
    peak_power = papw = 60.7 * jump_height + 45.3 * body_mass - 2055;
  }

  function getSayersCMJ() {
    peak_power = papw = 51.9 * jump_height + 48.9 * body_mass - 2007;
  }

  var publicAPI = {
    getAveragePower : getAveragePower,
    getPeakPower : getPeakPower,
    getPapw : getPapw
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],29:[function(require,module,exports){
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

},{}],30:[function(require,module,exports){
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

},{}],31:[function(require,module,exports){
let motionsplan = {};

motionsplan.Pushup = function(sex, age, repetitions) {
    var A, StandDev, PercRegress, Zscore, PE;
    age = age;
    sex = sex;
    repetitions;
    var score;

    function getPopulationAverage() {
        if (isMale()) {
            return -69.12079872 + 10.96689892 * age - 0.40037146 * Math.pow(age, 2) + 0.00576340 * Math.pow(age, 3) - 0.00002911 * Math.pow(age, 4);
        }
        return -0.00003969 * Math.pow(age, 4) + 0.00710960 * Math.pow(age, 3) - 0.45191034 * Math.pow(age, 2) + 11.56628022 * age - 75.77740372;
    }

    function isMale() {
        if (sex == 'male') {
            return true;
        }
        return false;
    }

    function getScore() {
        if (isMale()) {
            if (repetitions <= getPopulationAverage()) {
                StandDev = (-33980791 + 3096739.1 * age) / (1 + 40384.763 * age + 3713.2581 * Math.pow(age, 2));
            }
            else if (repetitions > getPopulationAverage()) {
                StandDev = -56.09510371 + 8.70427042 * age - 0.34822960 * Math.pow(age, 2) + 0.00562839 * Math.pow(age, 3) - 0.00003203 * Math.pow(age, 4);
            }
        }
        else {
            if (repetitions <= getPopulationAverage()) {
                StandDev =
                    1.0794478 * Math.pow(0.96572202, age) * Math.pow(age, 1.015305);
            }
            else if (repetitions > getPopulationAverage()) {
                StandDev = (5.5414783 + 0.47843206 * age) / (1 - 0.010122299 * age + 0.0009372169 * Math.pow(age, 2));
            }
        }
        Zscore = (repetitions - getPopulationAverage()) / StandDev;
        PE = Math.exp(-1.8355027 * (Math.abs(Zscore) - 0.23073201));
        PercRegress = -0.41682992 * (PE - 1) / (PE + 1) + 0.58953708;;

        if (Zscore > 0) {
            score = Math.round(PercRegress * 100);
        }
        if (Zscore <= 0) {
            score = Math.round((1 - PercRegress) * 100);
        }

        return score;
    }

    function getRating() {

        if (Zscore >= 1) {
            return "Rigtig godt"; // Excellent
        }
        if (Zscore < 1 && Zscore >= 0.5) {
            return "Godt"; // Good
        }
        else if (Zscore < 0.5 && Zscore >= -0.5) {
            return "Gennemsnitlig"; // Average
        }
        else if (Zscore < -0.5 && Zscore >= -1) {
            return "Nogenlunde"; // Fair
        }
        else if (Zscore < -1) {
            return "Ikke så godt"; // "Poor"
        }
    }

    var publicAPI = {
        getPopulationAverage : getPopulationAverage,
        getRating: getRating,
        getScore: getScore

    };

    return publicAPI;
}

module.exports = motionsplan;

},{}],32:[function(require,module,exports){
let motionsplan = {};

motionsplan.Riegel = function(dist, hours, minutes, seconds) {
  var calcdist = dist;
  var calchour = hours;
  var calcmin = minutes;
  var calcsec = seconds;

  function getTableWithEndTimes() {
    var res = '';

    res += '<hr />';
    res += '<h3>Potentielle konkurrencetider</h3>';
    res += '<table class="table">';
    res += '<tr><td><b>Distance</b></td><td><b>Sluttid</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td><b>Min/km</b></td></tr>';
    res += '<tr><td>1000m</td><td>' + riegels(1000) + '</td></tr>';
    res += '<tr><td>1500m</td><td>' + riegels(1500) + '</td></tr>';
    res += '<tr><td>3000m</td><td>' + riegels(3000) + '</td></tr>';
    res += '<tr><td>5000m</td><td>' + riegels(5000) + '</td></tr>';
    res += '<tr><td>8000m</td><td>' + riegels(8000) + '</td></tr>';
    res += '<tr><td>10000m</td><td>' + riegels(10000) + '</td></tr>';
    res += '<tr><td>20000m</td><td>' + riegels(20000) + '</td></tr>';
    res += '<tr><td>½ marathon</td><td>' + riegels(21097.5) + '</td></tr>';
    res += '<tr><td>Marathon</td><td>' + riegels(42195) + '</td></tr>';
    res += '</table>';

    return res;
  }

  function riegels(d2) {
    var d1 = calcdist;
    var h = calchour;
    var m = calcmin;
    var s = calcsec;
    var inputsec = parseInt(h * 3600) + parseInt(m * 60) + parseInt(s * 1);
    var outputsec = Math.round(inputsec * Math.pow((d2 / d1), 1.06));
    var reshour = Math.floor(outputsec / 3600);
    var resmin = Math.floor((outputsec - reshour * 3600) / 60);
    var ressec = Math.floor(outputsec - reshour * 3600 - resmin * 60);
    var kmtime_min = Math.floor((1000 * outputsec / d2) / 60);
    var kmtime_sec = Math.floor((1000 * outputsec / d2) - kmtime_min * 60);

    if (reshour < 10) { reshour = '0' + reshour; }
    if (resmin < 10) { resmin = '0' + resmin; }
    if (ressec < 10) { ressec = '0' + ressec; }
    if (kmtime_min < 10) { kmtime_min = '0' + kmtime_min; }
    if (kmtime_sec < 10) { kmtime_sec = '0' + kmtime_sec; }
    if (reshour == 0) { reshour = '00'; }
    if (resmin == 0) { resmin = '00'; }
    if (ressec == 0) { ressec = '00'; }
    if (kmtime_min == 0) { kmtime_min = '00'; }
    if (kmtime_sec == 0) { kmtime_sec = '00'; }

    return reshour + ':' + resmin + ':' + ressec + '</td><td>' + kmtime_min + ':' + kmtime_sec;
  }

  var publicAPI = {
    getRiegels: riegels,
    getTableWithEndTimes: getTableWithEndTimes

  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],33:[function(require,module,exports){
let motionsplan = {};

motionsplan.RunningDistanceVO2 = function() {

    function getKilometersPrHour(m, s, km) {
        // return (km / (s + (m * 60)) * (60 * 60)); // (m * 60 + s) / (60*60)
        s = s / (60 * 60);
        m = m / 60;
        return (km / (s + m));
    }

    // Based on https://www.researchgate.net/profile/Luc_Leger/publication/19712663_New_approaches_to_predict_VO2max_and_endurance_from_running_performances_The_Journal_of_sports_medicine_and_physical_fitness_27_4_401-409_1988/links/54f5fa880cf27d8ed71d235f/New-approaches-to-predict-VO2max-and-endurance-from-running-performances-The-Journal-of-sports-medicine-and-physical-fitness-27-4-401-409-1988.pdf
    function getEstimatedFitnessLevel(min, sec, km) {
        var kmt = getKilometersPrHour(min, sec, km);
        return 3.5 * getMETBasedOnKmAndKmt(km, kmt);
    }

    function getMETBasedOnKmAndKmt(km, kmt) {
        if (km < 1.5) {
            return 1.2730 + 0.8325 * kmt;
        }
        else if (km < 1.6) {
            return 2.4388 + 0.8343 * kmt;
        }
        else if (km < 2) {
            return 2.5043 + 0.8400 * kmt;
        }
        else if (km < 3) {
            return 0.27297 + 0.8527 * kmt;
        }
        else if (km < 5) {
            return 0.29226 + 0.8900 * kmt;
        }
        else if (km < 10) {
            return 3.1747 + 0.9139 * kmt;
        }
        else if (km < 15) {
            return 4.7226 + 0.8690 * kmt;
        }
        else if (km < 20) {
            return 4.8619 + 0.8872 * kmt;
        }
        else if (km < 42.195) {
            return 4.9574 + 0.8995 * kmt;
        }
        else {
            return 6.9021 + 0.8246 * kmt;
        }
    }

    var publicAPI = {
        getEstimatedFitnessLevel: getEstimatedFitnessLevel,
        getKilometersPrHour: getKilometersPrHour,
        getMETBasedOnKmAndKmt: getMETBasedOnKmAndKmt
    };

    return publicAPI;
}

module.exports = motionsplan;

},{}],34:[function(require,module,exports){
let motionsplan = {}

// weight in kg
// velocity in km/t
// oxygenuptake in L O2 / min
motionsplan.RunningEconomy= function(weight, oxygenuptake) {

  var w = weight;
  var o = oxygenuptake;

  /**
   * @param {float} velocity - Velocity.
   * 
   * @return float (ml/kg/min)
   */
  function getRunningEconomy(velocity) {
    var v = velocity;
    var a = getFitnessLevel(); // ml / kg / min
    var b = v / 60;
    return a / b;
  }

  /**
   * @return float (ml/kg/min)
   */
  function getFitnessLevel() {
    return o / w * 1000;
  }

  var publicAPI = {
    getRunningEconomy : getRunningEconomy,
    getFitnessLevel : getFitnessLevel
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],35:[function(require,module,exports){
let motionsplan = {};

motionsplan.RunningWalking = function(activity, speed, body_weight) {
  activity = activity;
  speed = speed;
  body_weight;

  let met = [];
  met['running'] = [];
  met['walking'] = [];

  met['walking'][4.0] = 3;
  met['walking'][4.8] = 3.5;
  met['walking'][5.6] = 4.3;
  met['walking'][6.4] = 5;
  met['walking'][7.2] = 7;
  met['walking'][8] = 8.3;

  met['running'][6.4] = 6;  
  met['running'][8] = 8.3;
  met['running'][9.7] = 9.8;
  met['running'][10.8] = 10.5;
  met['running'][11.3] = 11;
  met['running'][14.5] = 12.8;
  met['running'][16.1] = 14.5;

  function getMET() {
    return met[activity][speed];
  }

  function getCaloriesPrMinute() {
    return met[activity][speed] * (1/60) * body_weight;
  }
  
  function getCaloriesPrKilometer() {
    return (met[activity][speed] * body_weight) / 1 / speed;
  }

  var publicAPI = {
    getMET : getMET,
    getCaloriesPrMinute : getCaloriesPrMinute,
    getCaloriesPrKilometer : getCaloriesPrKilometer
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],36:[function(require,module,exports){
let motionsplan = {};

motionsplan.RunningWeightLoss = function(weight, weight_change, effect = 0.8) {
  weight = weight;
  weight_change = weight_change * -1;
  effect = effect;

  // løbetid * (startvægt - vægttab * 0.8) / startvægt;
  function getEstimatedFinishTime(hours, minutes, seconds) {
    var h1 = hours;
    var m1 = minutes;
    var s1 = seconds;

    if (h1 == '00') { h1 = 0; }
    if (h1 == '') { h1 = 0; }
    if (m1 == '00') { m1 = 0; }
    if (m1 == '') { m1 = 0; }
    if (s1 == '00') { s1 = 0; }
    if (s1 == '') { s1 = 0; }

    var time1 = parseInt(h1 * 3600) + parseInt(m1 * 60) + parseInt(s1 * 1);
    var output1 = time1 * (weight - weight_change * effect) / weight;

    var h_out = Math.floor(output1 / 3600);
    var m_out = Math.floor((output1 - h_out * 3600) / 60);
    var s_out = Math.floor(output1 - h_out * 3600 - m_out * 60);
    if (h_out < 10) { h_out = '0' + h_out; }
    if (m_out < 10) { m_out = '0' + m_out; }
    if (s_out < 10) { s_out = '0' + s_out; }
    if (h_out == 0) { h_out = '00'; }
    if (m_out == 0) { m_out = '00'; }
    if (s_out == 0) { s_out = '00'; }
    return h_out + ':' + m_out + ':' + s_out;
  }

  var publicAPI = {
    getEstimatedFinishTime: getEstimatedFinishTime
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],37:[function(require,module,exports){
let motionsplan = {};

motionsplan.Running = function() {

    // Funktion til at beregne kalorieforbrug
    // Tager kun højde for dansk komma i input
    function getEstimatedCalories(v, km) {
        return v * km * 1.055;
    }

    // Funktion til at beregne antal skridt
    function getEstimatedSteps(l, km) {
        return (km * 1000) / l;
    }

    function getKilometersPrHour(m, s, km) {
        // return (km / (s + (m * 60)) * (60 * 60)); // (m * 60 + s) / (60*60)
        s = s / (60 * 60);
        m = m / 60;
        return (km / (s + m));
    }

    function getTimePrKilometer(m, s, km) {
        var totalSek = parseInt(m) * 60 + parseInt(s);
        var totalSekPrKm = totalSek / parseFloat(km);
        var minPrKm = parseInt(totalSekPrKm / 60);
        var rest = totalSekPrKm - (minPrKm * 60);
        var sek = rest.toFixed(0);

        if (sek < 10) {
            return minPrKm.toFixed(0) + ":0" + rest.toFixed(0);
        }
        else {
            return minPrKm.toFixed(0) + ":" + rest.toFixed(0);
        }
    }

    function convertMinPerKmToKmt(min, sec) {
        return 60/(min*1+(sec/60));
    }

    function convertKmtToMinPerKm(kmt) {
        var min = 60 / kmt;
        var min_out = Math.floor(min);
        var sec_out = Math.round((min - Math.floor(min)) * 60);
        if (sec_out < 10) {
            sec_out='0'+sec_out;
        }
        return (min_out + ":" + sec_out);
    }

    var publicAPI = {
        getKilometersPrHour : getKilometersPrHour,
        getTimePrKilometer : getTimePrKilometer,
        convertKmtToMinPerKm : convertKmtToMinPerKm,
        convertMinPerKmToKmt : convertMinPerKmToKmt
    };

    return publicAPI;
}

module.exports = motionsplan;

},{}],38:[function(require,module,exports){
let motionsplan = {}

motionsplan.SkinfoldDurnin = function(biceps, triceps, suprailiac, subscapularis, weight, gender, age = 20) {

  biceps = biceps;
  triceps = triceps;
  suprailiac = suprailiac;
  subscapularis = subscapularis;
  weight = weight;
  gender = gender; // male / female
  age = age;

  // Siri formula
  function getBodyFatPercent() {
    return (495 / getDensity() - 450);
  }

  function getSkinfoldSum() {
    return biceps + triceps + suprailiac + subscapularis;
  }

  function getDensity() {
    var density;

    var fatsum = getSkinfoldSum();
    if (isMale()) {
      if (age < 17) {
        density = 1.1533 - 0.0643 * Math.log10(fatsum);
      } else if (age < 20) {
        density = 1.1620 - 0.0630 * Math.log10(fatsum);
      } else if (age < 30) {
        density = 1.1631 - 0.0632 * Math.log10(fatsum);
      } else if (age < 40) {
        density = 1.1422 - 0.0544 * Math.log10(fatsum);
      } else if (age < 50) {
        density = 1.1620 - 0.0700 * Math.log10(fatsum);
      } else {
        density = 1.1715 - 0.0779 * Math.log10(fatsum);
      }
    }
    else {
      if (age < 17) {
        density = 1.1369 - 0.0598 * Math.log10(fatsum);
      } else if (age < 20) {
        density = 1.1549 - 0.0678 * Math.log10(fatsum);
      } else if (age < 30) {
        density = 1.1599 - 0.0717 * Math.log10(fatsum);
      } else if (age < 40) {
        density = 1.1423 - 0.0632 * Math.log10(fatsum);
      } else if (age < 50) {
        density = 1.1333 - 0.0612 * Math.log10(fatsum);
      } else {
        density = 1.1339 - 0.0645 * Math.log10(fatsum);
      }
    }
    return density; 
  }
  
  function isMale() {
    if (gender == "male") {
      return true;
    }
    return false;
  }

  function getFatFreeMass() {
    return (weight - weight * getBodyFatPercent() / 100);
  }

  var publicAPI = {
    getFatFreeMass: getFatFreeMass,
    getBodyFatPercent: getBodyFatPercent,
    getDensity : getDensity,
    getSkinfoldSum : getSkinfoldSum
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],39:[function(require,module,exports){
let motionsplan = {}

motionsplan.SkinfoldLohman = function(sex, triceps, calf) {
  var sex = sex;
  var triceps = triceps;
  var calf = calf;
  
  function getSkinfoldSum() {
    return (triceps + calf);
  }
  
  function getBodyFatPercent() {
    if (isMale()) {
      return 0.735 * getSkinfoldSum()  + 1.0;
    }
    return 0.610 * getSkinfoldSum() + 5.1;
  }
  
  function isMale() {
    if (sex == 1) {
      return true;
    }
    return false;
  }
  
  var publicAPI = {
    getBodyFatPercent : getBodyFatPercent
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],40:[function(require,module,exports){
let motionsplan = {}

// https://academic.oup.com/ajcn/article/77/5/1186/4689818
motionsplan.SkinfoldPeterson = function(triceps, subscapularis, suprailiac, midthigh, height, weight, gender, age) {

  triceps = triceps;
  suprailiac = suprailiac;
  subscapularis = subscapularis;
  height = height;
  gender = gender; // male / female
  age = age;

  function getBMI() {
    let hgt = height / 100;
    return weight / (hgt * hgt);
  }

  function getBodyFatPercent() {
    if (isMale()) {
      return 20.94878 + (age * 0.1166) - (height * 0.11666) + (getSkinfoldSum() * 0.42696) - ((getSkinfoldSum() * getSkinfoldSum()) * 0.00159);
    }
    return 22.18945 + (age * 0.06368) + (getBMI() * 0.60404) - (height * 0.14520) + (getSkinfoldSum() * 0.30919) - ((getSkinfoldSum() * getSkinfoldSum()) * 0.00099562);
  }

  function getSkinfoldSum() {
    return midthigh + triceps + suprailiac + subscapularis;
  }
  
  function isMale() {
    if (gender == "male") {
      return true;
    }
    return false;
  }

  function getFatFreeMass() {
    return (weight - weight * getBodyFatPercent() / 100);
  }

  var publicAPI = {
    getFatFreeMass: getFatFreeMass,
    getBodyFatPercent: getBodyFatPercent,
    getSkinfoldSum : getSkinfoldSum
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],41:[function(require,module,exports){
let motionsplan = {}

motionsplan.SkinfoldPollock = function(weight, age) {
  var fatpercent;
  var weight = weight;
  var age = age;

  function getBodyFatPercentMale(breast, abdomen, thigh) {
    var fatsum = breast + abdomen + thigh;
    var density = 1.10938 - 0.0008267 * fatsum + 0.0000016 * Math.pow(fatsum, 2) - 0.0002574 * age;
    return fatpercent = (495 / density - 450);
  }

  function getBodyFatPercentFemale(triceps, hip, thigh) {
    var fatsum = triceps + hip + thigh;
    var density = 1.0994921 - 0.0009929 * fatsum + 0.0000023 * Math.pow(fatsum, 2) - 0.0001392 * age;
    return fatpercent = (495 / density - 450);
  }
  
  function getFatFreeMass() {
    return (weight - weight * fatpercent / 100);
  }

  var publicAPI = {
    getBodyFatPercentMale : getBodyFatPercentMale,
    getBodyFatPercentFemale : getBodyFatPercentFemale,
    getFatFreeMass : getFatFreeMass
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],42:[function(require,module,exports){
let motionsplan = {}

motionsplan.SkinfoldSlaughter = function(sex, triceps, subscapular) {
  var sex = sex;
  var triceps = triceps;
  var subscapular = subscapular;
  
  function getBodyFatPercent() {
    if (isMale()) {
      return 1.21 * (triceps + subscapular) - 0.008 * Math.pow(triceps + subscapular, 2) - 1.7;
    }
    return 1.33 * (triceps + subscapular) - 0.013 * Math.pow(triceps + subscapular, 2) - 2.5;
  }
  
  function isMale() {
    if (sex == 1) {
      return true;
    }
    return false;
  }
  
  var publicAPI = {
    getBodyFatPercent : getBodyFatPercent
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],43:[function(require,module,exports){
let motionsplan = {}

motionsplan.ToPunktTest = function(age, weight, max_hr, work1, hr1, work2, hr2) {
  var work_1 = work1;
  var hr_1 = hr1;
  var work_2 = work2;
  var hr_2 = hr2;
  var age = age;
  var weight = weight;
  var hr_max = max_hr;

  function getMaximalWork() {
    return ((hr_max - hr_2) * (work_2 - work_1)) / (hr_2 - hr_1) + work_2;
  }

  function getMaximalOxygenUptake() {
    var mechanical_efficiency = 0.23;
    var oxygen_energy = 21100;
    var bmr = 0.25;
    return (getMaximalWork() / mechanical_efficiency * 60 / oxygen_energy + bmr);
  }
  
  function getFitnessLevel() {
    return (getMaximalOxygenUptake() / weight * 1000);
  }

  var publicAPI = {
    getMaximalWork : getMaximalWork,
    getMaximalOxygenUptake: getMaximalOxygenUptake,
    getFitnessLevel : getFitnessLevel

  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],44:[function(require,module,exports){
let motionsplan = {}

// vo2max i ml
motionsplan.VmaxIntervals = function(vmax, tmax_min, tmax_sec) {
  vmax = vmax;
  tmax_min = tmax_min;
  tmax_sec = tmax_sec;

  var tmax = tmax_min * 60 + tmax_sec;

  function getVelocity(percentage = 60) {
    percentage = percentage / 100;
    return (vmax * percentage).toFixed(2);
  }

  function getTime(percentage = 60) {
    percentage = percentage / 100;
    var min = Math.floor((tmax * percentage) / 60);
    var sec = ((tmax * percentage) - (Math.floor((tmax * percentage) / 60) * 60)).toFixed(0);
    if (sec < 10) {
      sec = '0' + sec;
    }
    return min + ":" + sec;
  }

  var publicAPI = {
    getVelocity : getVelocity,
    getTime : getTime
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],45:[function(require,module,exports){
let motionsplan = {};

// vo2max i ml
motionsplan.Vmax = function(vo2max) {
  vo2max = vo2max;

  function getVmax() {
    return (vo2max * 21 / 60 * 0.23);
  }

  var publicAPI = {
    getVmax : getVmax
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],46:[function(require,module,exports){
let motionsplan = {}

motionsplan.WaistRatio = function() {

  function getWaistHeightRatio(waist, height) {
    return waist / height;
  }

  function getWaistHipRatio(waist, hip) {
    return waist / hip;
  }

  var publicAPI = {
    getWaistHeightRatio : getWaistHeightRatio,
    getWaistHipRatio : getWaistHipRatio
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],47:[function(require,module,exports){
let motionsplan = {}

motionsplan.RockPortWalkingTest = function(min, sec, hr, sex, age, weight) {
  var resultat, Koen; // Oxygen
  var Pul = hr;
  var sex = sex;
  var Alder = age;
  var Vaegt = weight;

  if (sex == "male") {
    Koen = 1;
  } else {
    Koen = 0;
  }

  function getFitnessLevel() {
    // Convert mins/secs to mins and 100ths of mins
    var tm = min;
    var ts = sec / 60;
    var time = tm + ts;

    weight = Vaegt * 2.2046226218; // Original formula is in lbs
    return 132.853 - (0.0769 * weight) - (0.3877 * age) + (6.3150 * Koen) - (3.2649 * time) - (0.1565 * hr);
  }

  function getMaximalOxygenUptakeMOL() {
    // Værdier fra Motion-Online.dk
    var Tid = min * 60 + sec * 1
    return resultat = (6.9652 + (0.020062 * Vaegt) - (0.0257 * Alder) + (0.5955 * Koen) - (0.003754 * Tid) - (0.0115 * Pul));
  }
  
  function getFitnessLevelMOL() {
    // Værdier fra Motion-Online.dk
    return (resultat / Vaegt * 1000);
  }

  var publicAPI = {
    getFitnessLevel : getFitnessLevel,
    getMaximalOxygenUptakeMOL : getMaximalOxygenUptakeMOL,
    getFitnessLevelMOL : getFitnessLevelMOL
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],48:[function(require,module,exports){
let motionsplan = {}

motionsplan.SixMinutesWalkingTest = function(sex, age, height, weight, meter) {
  var meter = meter;
  var sex = sex;
  var age  = age;
  var height = height;
  var weight = weight;
  var meter = meter;
  var result;
  
  function isMale() {
    if (sex == 1) {
      return true;
    }
    return false;
  }

  function getReferenceMeter(repeated = "false") {
    if (repeated == "repeated") {
      return getReferenceMeterGibbons();
    }
    return getReferenceMeterEnright();
  }
  
  // men = 0; woman = 1
  function getReferenceMeterGibbons() {
    if (isMale()) {
      return 868.8 - 2.99 * age;
    }
    return 868.8 - 2.99 * age - 74.7;
  }
  
  // Based on Enright and Sherill
  // https://pubmed.ncbi.nlm.nih.gov/9817683/
  function getReferenceMeterEnright() {
    if (isMale()) {
      return (7.57 * height) - (5.02 * age) - (1.76 * weight) - 309;
    }
    return (2.11 * height) - (5.78 * age) - (2.29 * weight) + 667;
  }

  function getPercent(repeated = "false") {
    return (meter / getReferenceMeter(repeated) * 100);
  }

  var publicAPI = {
    getReferenceMeter : getReferenceMeter,
    getPercent : getPercent
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],49:[function(require,module,exports){
let motionsplan = {};

motionsplan.Wattmax = function(wmax, sec, weight, age, watt_jumps = 25) {
  wmax = wmax;
  sec = sec;
  weight = weight;
  age = age;
  watt_jumps = watt_jumps; // used for children 25 is default

  function isChild() {
    if (age < 18) {
      return true;
    }
    return false;
  }
  
  function getMPO() {
    if (isChild()) {
      return (wmax - watt_jumps + (watt_jumps * sec / 180));
    }
    return (wmax - 35 + (35 * sec / 120));
  }

  function getMaximalOxygenUptake() {
    if (isChild()) {
      // watt_jumps for kids is 25 as standard
      return (13.16 * getMPO() + 5 * weight) / 1000;
    }
    // watt_jumps for adults is 35
    return (0.0117 * getMPO() + 0.16);
  }

  function getFitnessLevel() {
    if (isChild()) {
      return getMaximalOxygenUptake() / weight * 1000;
    }
    return getMaximalOxygenUptake() / weight * 1000;
  }

  var publicAPI = {
    getFitnessLevel : getFitnessLevel,
    getMaximalOxygenUptake : getMaximalOxygenUptake,
    getMPO : getMPO
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}]},{},[4]);
