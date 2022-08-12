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

  function getBrzycki(rm = 1) {
    let repmax = weight * (36 / (37 - repetitions));
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
    let repmax;
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
    let repmax = weight / getReynoldsPercent(body_part, repetitions) * 100;
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
    let repmax = (1 + (0.0333 * repetitions)) * weight;
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
   let repmax = 7.24 + (1.05 * weight * repetitions);
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
    let repmax = (100 * weight) / (101.3 - 2.67123 * repetitions);
    if (rm == 1) {
      return repmax;
    }
    return (repmax * (101.3 - 2.67123 * rm)) / 100;
  }

  function getLombardi(rm = 1) {
    let repmax = weight * (Math.pow(repetitions, 0.1));
    if (rm == 1) {
      return repmax;
    }
    return repmax / ((Math.pow(repetitions, 0.1)));
  }

  function getMayhew(rm = 1) {
    let repmax = (100 * weight) / (52.2 + (41.9 * Math.exp(-0.055 * repetitions)));
    if (rm == 1) {
      return repmax;
    }
    return repmax * (52.2 + (41.9 * Math.exp(-0.055 * rm))) / 100;
  }

  function getOconnor(rm = 1) {
    let repmax = weight * (1 + 0.025 * repetitions);
    if (rm == 1) {
      return repmax;
    }
    return repmax / (1 + 0.025 * rm);
  }

  function getWathan(rm = 1) {
    let repmax = (100 * weight) / (48.8 + (53.8 * Math.exp(-0.075 * repetitions)));
    if (rm == 1) {
      return repmax;
    }
    return repmax * (48.8 + (53.8 * Math.exp(-0.075 * rm))) / 100;
  }

  function getWendler(rm = 1) {
    let repmax = weight * repetitions * 0.0333 + weight;
    if (rm == 1) {
      return repmax;
    }
    return 1 / (((rm * .0333) / repmax) + (1 / repmax));
  }

  function getPercentOfRm(rm, percent) {
    return rm * percent / 100;
  }

  let publicAPI = {
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
};

module.exports = motionsplan;

},{}],4:[function(require,module,exports){
let motionsplan = {};

motionsplan.AndersenTest = function(sex, distance) {
  if (sex == "female") {
    sex = 1;
  } else {
    sex = 0;
  }
  distance = distance;

  function getFitnessLevel() {
    return 18.38 + (0.03301 * distance) - (5.92 * sex);
  }

  let publicAPI = {
    getFitnessLevel : getFitnessLevel
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],5:[function(require,module,exports){
'use strict';

/* global $ */

const rpe = require('./rpe-strength');
const how_tall = require('./how-tall');
const water = require('./water-intake');
const inol = require('./inol');
const ipfpoints = require('./ipf-points');
const mcculloch = require('./ipf-points-mcculloch');
const ybalance = require('./y-balance');
const lung = require('./lung');
const blood = require('./blood');
const andersen = require('./andersen-test');
const jog = require('./fitness-jogging');
const jump_reach = require('./jumpreach');
const tee_pal = require('./bmr-totalenergy-pal');
const schofield = require('./bmr-schofield');
const vmax_bike = require('./vmax');
const vmax_intervals = require('./vmax-intervals');
const billat = require('./billat');
const runwalk = require('./running-walking');
const runwalkenergy = require('./running-walking-energy.js');
const pandolf = require('./running-walking-pandolf.js');
const leger = require('./running-walking-leger.js');
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
const bmievaluation = require('./bmi-evaluation');
const ponderalindex = require('./ponderal-index');
const idealweight = require('./ideal-weight');
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
const wilks = require('wilks-calculator');
const treadmill = require('../js/treadmill');
const flyer_handicap = require('../js/flyer-handicap');
const rowing_power_calculator = require('../js/rowing-power-calculator');
const rowing_vo2 = require('../js/rowing-vo2');
const rowing_powerprofile = require('../js/rowing-ergrowing');
require('image-map-resizer');

$(function() {
    $('map').imageMapResize();

    $('.rating input[name="rating"]').one('click', function () {
      console.log("Clicked star");
      let votes = Number($('#votes').text() * 1);
      $('#votes').text(votes + 1);
    });

    $("#target_bmi_man").change(function() {
        console.log('Ready to calculate');
        $("table#idealweight > tbody > tr").each(function(i, obj) {
          let height = $(this).find('td:first').html();
          let target_bmi = Number($("#target_bmi_man").val());

          let iw = idealweight.IdealWeight(height, "man");
          let weight = iw.getPeterson(target_bmi);

            $(this).find('td').eq(1).html(weight.toFixed(0));
        });
    });

    $("#maxhr_age").change(function() {
      console.log('Ready to calculate');
      let age = Number($("#maxhr_age").val());

      let tanaka = maxhr.EstimateMaxHr(age, 'tanaka');
      $("#maxhr_tanaka").text(tanaka.getMaxHr().toFixed(0));

      let fox = maxhr.EstimateMaxHr(age, 'fox');
      $("#maxhr_fox").text(fox.getMaxHr().toFixed(0));

      let gellish_linear = maxhr.EstimateMaxHr(age, 'gellish_linear');
      $("#maxhr_gellish_linear").text(gellish_linear.getMaxHr().toFixed(0));

      let gellish = maxhr.EstimateMaxHr(age, 'gellish');
      $("#maxhr_gellish").text(gellish.getMaxHr().toFixed(0));

      let nes = maxhr.EstimateMaxHr(age, 'nes');
      $("#maxhr_nes").text(nes.getMaxHr().toFixed(0));

      let arena = maxhr.EstimateMaxHr(age, 'arena');
      $("#maxhr_arena").text(arena.getMaxHr().toFixed(0));

      let aastrand = maxhr.EstimateMaxHr(age, 'aastrand');
      $("#maxhr_aastrand").text(aastrand.getMaxHr().toFixed(0));

      let inbar = maxhr.EstimateMaxHr(age, 'inbar');
      $("#maxhr_inbar").text(inbar.getMaxHr().toFixed(0));

      let londeree_moeschberger = maxhr.EstimateMaxHr(age, 'londeree_moeschberger');
      $("#maxhr_londeree_moeschberger").text(londeree_moeschberger.getMaxHr().toFixed(0));
    });

    $("#maxhr_age_men_women").change(function() {
      console.log('Ready to calculate');
      let age = Number($("#maxhr_age_men_women").val());

      let fairbarn_female = maxhr.EstimateMaxHr(age, 'fairbarn_female');
      $("#maxhr_fairbarn_female").text(fairbarn_female.getMaxHr().toFixed(0));

      let fairbarn_male = maxhr.EstimateMaxHr(age, 'fairbarn_male');
      $("#maxhr_fairbarn_male").text(fairbarn_male.getMaxHr().toFixed(0));

      let whyte_female = maxhr.EstimateMaxHr(age, 'whyte_female');
      $("#maxhr_whyte_female").text(whyte_female.getMaxHr().toFixed(0));

      let whyte_male = maxhr.EstimateMaxHr(age, 'whyte_male');
      $("#maxhr_whyte_male").text(whyte_male.getMaxHr().toFixed(0));
    });

    $("#target_bmi_woman").change(function() {
        console.log('Ready to calculate');
        $("table#idealweight > tbody > tr").each(function(i, obj) {
            let height = $(this).find('td:first').html();
            let target_bmi = Number($("#target_bmi_woman").val());

            let iw = idealweight.IdealWeight(height, "woman");
            let weight = iw.getPeterson(target_bmi);

            $(this).find('td').eq(2).html(weight.toFixed(0));
        });
    });
    $("#smolov_jr").submit(function(e) {
      console.log("Calculate 1RM");
      e.preventDefault();
    });
    $("#smolov_jr").change(function() {
      console.log('Ready to calculate Smolov Jr');
      let rm = Number($("#one_rep_max").val());

      $("table#smolov_jr_week_1 > tbody > tr").each(function(i, obj) {
          let intensity_text = $(this).find('td').eq(1).html();
          let intensity = intensity_text.replace(/[^0-9]/g,'');
          let weight = rm * intensity / 100;
          console.log(rm + ' ' + intensity + ' ' + weight);
          $(this).find('td').eq(4).html(weight.toFixed(2));
      });
      $("table#smolov_jr_week_2 > tbody > tr").each(function(i, obj) {
        let increment_1 = Number($("#increment_1").val());
        let intensity_text = $(this).find('td').eq(1).html();
        let intensity = intensity_text.replace(/[^0-9]/g,'');
        let weight = rm * intensity / 100 + increment_1;
        console.log(rm + ' ' + intensity + ' ' + weight);
        $(this).find('td').eq(2).html('+'+increment_1.toFixed(1)+' kg');
        $(this).find('td').eq(5).html(weight.toFixed(2));
      });
      $("table#smolov_jr_week_3 > tbody > tr").each(function(i, obj) {
        let increment_1 = Number($("#increment_1").val());
        let increment_2 = Number($("#increment_2").val());
        let intensity_text = $(this).find('td').eq(1).html();
        let intensity = intensity_text.replace(/[^0-9]/g,'');
        let weight = rm * (intensity / 100) + increment_1 + increment_2;
        console.log(rm + ' ' + intensity + ' ' + weight);
        $(this).find('td').eq(2).html('+' +increment_2.toFixed(1)+' kg');
        $(this).find('td').eq(5).html(weight.toFixed(2));
      });
    });
    $("#step_man").change(function() {
        console.log('Ready to calculate');
        $("table#steps > tbody > tr").each(function(i, obj) {
          let km = $(this).find('td:first').html();
          let steps = km * 1000 / ($("#step_man").val() / 100);
            $(this).find('td').eq(1).html(steps.toFixed(0));
        });
    });
    $("#step_woman").change(function() {
        console.log('Ready to calculate');
        $("table#steps > tbody > tr").each(function(i, obj) {
          let km = $(this).find('td:first').html();
          let steps = km * 1000 / ($("#step_woman").val() / 100);
            $(this).find('td').eq(2).html(steps.toFixed(0));
        });
    });

    $("#step_length_man").change(function() {
        console.log('Ready to calculate');
        $("table#steps_to_km > tbody > tr").each(function(i, obj) {
          let steps = $(this).find('td:first').html();
          let km = steps * ($("#step_length_man").val()) / 1000 / 100;
            $(this).find('td').eq(1).html(km.toFixed(2));
        });
    });
    $("#step_length_woman").change(function() {
        console.log('Ready to calculate');
        $("table#steps_to_km > tbody > tr").each(function(i, obj) {
          let steps = $(this).find('td:first').html();
          let km = steps * ($("#step_length_woman").val()) / 1000 / 100;
            $(this).find('td').eq(2).html(km.toFixed(2));
        });
    });
    // 1RM calculate
    $("#form-formula").ready(function() {
        $(".reynolds").hide();
    });
    $("#form-formula").change(function() {
        if ($("#form-formula").val() == 'reynolds') {
            $(".reynolds").show();
        } else {
            $(".reynolds").hide();
        }
    });
    $("#calculator_running_walking").ready(function() {
        $(".walk-met").hide();
        $(".run-met").hide();
        $(".met-explanation").hide();
    });
    $("#calculator_walking_energy").ready(function() {
        $(".walk-met").hide();
        $(".met-explanation").hide();
        $(".walk-pandolf").hide();
    });
    $("#bmi-evaluation-criteria").ready(function() {
        $("#bmi-evaluation-criteria").hide();
    });
    $("#calculator_bmi").change(function() {
        if (Number($("[name='age']").val()) < 18) {
            $("#bmi-evaluation-criteria").hide();
        } else {
            $("#bmi-evaluation-criteria").show();
        }
    });
    $("#calculator_running_walking").change(function() {
        if ($("#formula-energy-running").val() == 'met') {
            $(".run-met").show();
            $(".met-explanation").show();
            $(".run-ascm").hide();
        } else {
            $(".run-met").hide();
            $(".run-ascm").show();
        }
        if ($("#formula-energy-walking").val() == 'met') {
            $(".walk-met").show();
            $(".met-explanation").show();
            $(".walk-ascm").hide();
        } else {
            $(".walk-met").hide();
            $(".walk-ascm").show();
        }
    });
    $("#calculator_walking_energy").change(function() {
        if ($("#formula-walking-energy").val() == 'met') {
            $(".walk-met").show();
            $(".met-explanation").show();
            $(".walk-ascm").hide();
            $(".walk-pandolf").hide();
        } else if ($("#formula-walking-energy").val() == 'pandolf') {
            $(".walk-ascm").show();
            $(".walk-met").hide();
            $(".met-explanation").hide();
            $(".walk-pandolf").show();
        } else {
            $(".walk-met").hide();
            $(".walk-ascm").show();
            $(".met-explanation").hide();
            $(".walk-pandolf").hide();
        }
    });
    $("#calculator_rm").submit(function(e) {
        console.log("Calculate 1RM");
        e.preventDefault();

      let repmax;
      let formula = $("#form-formula").val();
      let decimals = 1;

      let reps = Number($("#form-reps").val());
      let weight = Number($("#form-weight").val());
      let bodypart = $("#form-bodypart").val();

      let r = rm.Estimate1RM(weight, reps);

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
    $("#calculator_ftp").submit(function(e) {
        console.log("Calculate FTP");
        e.preventDefault();

      let ftp = Number($("#ftp").val());

        $("#ftp_value").text(ftp);

        $("#ftp_recovery").val('<' + (ftp * 0.56).toFixed(0));
        $("#ftp_endurance").val((ftp * 0.56).toFixed(0) + '-' + (ftp * 0.76).toFixed(0));
        $("#ftp_tempo").val((ftp * 0.76).toFixed(0) + '-' + (ftp * 0.91).toFixed(0));
        $("#ftp_ftp").val((ftp * 0.91).toFixed(0) + '-' +(ftp * 1.06).toFixed(0));
        $("#ftp_vo2").val((ftp * 1.06).toFixed(0) + '-' + (ftp * 1.21).toFixed(0));
        $("#ftp_anaerob").val((ftp * 1.21).toFixed(0) + '-' + (ftp * 1.50).toFixed(0));
    });
    $("#calculator_ftp_cp").submit(function(e) {
        console.log("Calculate FTP CP");
        e.preventDefault();

      let cp = Number($("#zone_cp").val());
      let adjust = Number($("#zone_adjust").val());
      let ftp = cp * adjust / 100;

        $("#ftp_value").text(ftp.toFixed(0));

        $("#ftp_recovery").val('<' + (ftp * 0.56).toFixed(0));
        $("#ftp_endurance").val((ftp * 0.56).toFixed(0) + '-' + (ftp * 0.76).toFixed(0));
        $("#ftp_tempo").val((ftp * 0.76).toFixed(0) + '-' + (ftp * 0.91).toFixed(0));
        $("#ftp_ftp").val((ftp * 0.91).toFixed(0) + '-' +(ftp * 1.06).toFixed(0));
        $("#ftp_vo2").val((ftp * 1.06).toFixed(0) + '-' + (ftp * 1.21).toFixed(0));
        $("#ftp_anaerob").val((ftp * 1.21).toFixed(0) + '-' + (ftp * 1.50).toFixed(0));
    });
    $("#calculator_ftpa").submit(function(e) {
        console.log("Calculate FTPa");
        e.preventDefault();

      let ftp = Number($("#ftpa").val());

        $("#ftpa_value").text(ftp);

        $("#ftpa_recovery").val('<' + (ftp * 1.29).toFixed(0));
        $("#ftpa_endurance").val((ftp * 1.14).toFixed(0) + '-' + (ftp * 1.29).toFixed(0));
        $("#ftpa_tempo").val((ftp * 1.06).toFixed(0) + '-' + (ftp * 1.14).toFixed(0));
        $("#ftpa_ftp").val((ftp * 1.01).toFixed(0) + '-' +(ftp * 1.05).toFixed(0));
        $("#ftpa_vo2").val((ftp * 0.97).toFixed(0) + '-' + (ftp * 1.01).toFixed(0));
        $("#ftpa_anaerob").val((ftp * 0.90).toFixed(0) + '-' + (ftp * 0.97).toFixed(0));
    });
    $("#calculator_kroppens_rumfang").submit(function(e) {
      console.log("Calculate Kroppens Rumfang");
      e.preventDefault();

      let weight = Number($("[name='weight']").val());
      let density = Number($("[name='density']").val());

      $("[name='kroppens_rumfang']").val((weight / density).toFixed(5));
    });
    $("#calculator_rpe_strength").submit(function(e) {
      console.log("Calculate RPE Strength");
      e.preventDefault();

      let have_weight = Number($("[name='have_weight']").val());
      let have_reps = Number($("[name='have_reps']").val());
      let have_rpe = Number($("[name='have_rpe']").val());
      let want_reps = Number($("[name='want_reps']").val());
      let want_rpe = Number($("[name='want_rpe']").val());

      let hr = rpe.RPEStrength(have_weight, have_reps, have_rpe);

      $("[name='e1rm']").val(hr.getE1RM().toFixed(1));
      $("[name='want_weight']").val(hr.getWantWeight(want_reps, want_rpe).toFixed(1));
    });
    $("#calculator_fat_bai").submit(function(e) {
      console.log("Calculate BAI");
      e.preventDefault();

      let HC = Number($("[name='hc']").val());
      let HM = Number($("[name='hm']").val() / 100);

      let bai = (HC / Math.pow(HM,1.5)) - 18;

      $("[name='bai']").val(bai.toFixed(1));
    });
    $("#calculator_maffetone").submit(function(e) {
        console.log("Calculate Maffetone");
        e.preventDefault();

      let age = Number($("[name='age']").val());
      let category = Number($("[name='category']:checked").val());

        $("[name='mahr']").val((180 - age + category).toFixed(0));
    });
    // Mortality calculation
    $("#calculator_cooper_mortality").submit(function(e) {
        console.log("Calculate Cooper");
        e.preventDefault();

      let age = Number($("#age").val());
      let hr_rest = Number($("#hrrest").val());
      let bloodpressure = $("#bloodpressure").val();
      let diabetes = $("#diabetes").val();
      let smoker = $("#smoker").val();
      let bmi = Number($("#bmi").val());
      let fitnesslevel = Number($("#kondital").val());

        // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      let c = cooper.CooperClinicMortalityRiskIndex(age, hr_rest, bloodpressure, diabetes, smoker, bmi, fitnesslevel);

        $("#risk_points").val(c.getRiskPoint());
        $("#absolute_risk").val(c.getAbsoluteRisk());
        $("#relative_risk").val(c.getRelativeRisk());
    });
    $("#calculator_fat_percent_navy").ready(function() {
        $(".navy-hip").hide();
    });
    // Udregn fatpercent navy
    $("#calculator_fat_percent_navy").change(function() {
        if ($("#checkbox-woman").is(":checked")) {
            $(".navy-hip").show();
        } else {
            $(".navy-hip").hide();
        }
    });
    $("#calculator_ybalance").submit(function(e) {
        console.log("Y-balance");
        e.preventDefault();

        let limb_length = Number($("[name='limb_length']").val());
        let anterior = Number($("[name='anterior']").val());
        let posterolateral = Number($("[name='posterolateral']").val());
        let posteromedial = Number($("[name='posteromedial']").val());

        let fp = ybalance.YBalance(anterior, posterolateral, posteromedial);
        $("[name='absolute_score']").val(fp.getAbsoluteReachDistance().toFixed(0));
        $("[name='relative_score']").val(fp.getRelativeReachScore(limb_length).toFixed(0));
        $("[name='composite_score']").val(fp.getCompositeReachScore(limb_length).toFixed(0));
    });
    $("#calculator_treadmill").submit(function(e) {
      console.log("Treadmill");
      e.preventDefault();

      let gradient = Number($("[name='gradient']").val());
      let speed = Number($("[name='speed']").val());
      let time = Number($("[name='time']").val());
      let distance = Number($("[name='distance']").val());
      let weight = Number($("[name='weight']").val());

      let tm = treadmill.Treadmill(gradient, speed, time, distance, weight);
      $("[name='speed_gradient']").val(tm.getGradientCorrectedSpeed().toFixed(2));
      $("[name='distance_gradient']").val(tm.getGradientCorrectedDistance().toFixed(2));
      $("[name='time_gradient']").val(tm.getGradientCorrectedDistance().toFixed(2));
      $("[name='speed_calculated']").val(tm.getSpeed().toFixed(0));
      $("[name='distance_calculated']").val(tm.getDistance().toFixed(0));
      $("[name='time_calculated']").val(tm.getTime().toFixed(0));
      $("[name='kcal']").val(tm.getKcal().toFixed(0));
      $("[name='kj']").val(tm.getKj().toFixed(0));
      $("[name='kwh']").val(tm.getKwh().toFixed(2));
      $("[name='mets']").val(tm.getMets().toFixed(1));
      $("[name='gradient_calculated']").val(gradient);
  });
  $("#calculator_fat_percent_navy").submit(function(e) {
        console.log("Fat percent navy");
        e.preventDefault();

      let sex = $("[name='sex']:checked").val();
      let height = Number($("[name='height']").val());
      let waist = Number($("[name='waist']").val());
      let neck = Number($("[name='neck']").val());
      let hip = Number($("[name='hip']").val());

      let fp = fp_navy.CalculateFatPercentNavy(sex, height, waist, neck, hip);
        $("#fat_percent_navy").val(fp.getFatPercent().toFixed(2));
    });
    $("#calculator_wave_ladder").submit(function(e) {
        console.log("Calculate Wave Ladder");
        e.preventDefault();

      let rm = Number($("[name='wave_ladder_1rm']").val());
      let intensity = Number($("[name='wave_ladder_intensity']").val());
      let wave_2_plus = Number($("[name='wave_ladder_2_plus']").val());
      let wave_3_plus = Number($("[name='wave_ladder_3_plus']").val());

      let weight = rm * intensity / 100;
        $("#wave_ladder_1_1").val(weight);
        $("#wave_ladder_1_2").val(weight);
        $("#wave_ladder_1_3").val(weight);
        $("#wave_ladder_2_1").val(weight + wave_2_plus);
        $("#wave_ladder_2_2").val(weight + wave_2_plus);
        $("#wave_ladder_2_3").val(weight + wave_2_plus);
        $("#wave_ladder_3_1").val(weight + wave_2_plus + wave_3_plus);
        $("#wave_ladder_3_2").val(weight + wave_2_plus + wave_3_plus);
        $("#wave_ladder_3_3").val(weight + wave_2_plus + wave_3_plus);
    });
    $("#calculator_wave_traditional").submit(function(e) {
        console.log("Calculate Wave Traditional");
        e.preventDefault();

      let rm = Number($("[name='wave_traditional_1rm']").val());
      let intensity_1 = Number($("[name='wave_traditional_intensity_1']").val());
      let intensity_2 = Number($("[name='wave_traditional_intensity_2']").val());
      let intensity_3 = Number($("[name='wave_traditional_intensity_3']").val());
      let wave_2_plus = Number($("[name='wave_traditional_2_plus']").val());
      let wave_3_plus = Number($("[name='wave_traditional_3_plus']").val());

      let weight_1 = rm * intensity_1 / 100;
      let weight_2 = rm * intensity_2 / 100;
      let weight_3 = rm * intensity_3 / 100;
        $("#wave_traditional_1_1").val(weight_1);
        $("#wave_traditional_1_2").val(weight_2);
        $("#wave_traditional_1_3").val(weight_3);
        $("#wave_traditional_2_1").val(weight_1 + wave_2_plus);
        $("#wave_traditional_2_2").val(weight_2 + wave_2_plus);
        $("#wave_traditional_2_3").val(weight_3 + wave_2_plus);
        $("#wave_traditional_3_1").val(weight_1 + wave_2_plus + wave_3_plus);
        $("#wave_traditional_3_2").val(weight_2 + wave_2_plus + wave_3_plus);
        $("#wave_traditional_3_3").val(weight_3 + wave_2_plus + wave_3_plus);
    });
    $("#calculator_step_to_km").submit(function(e) {
        console.log("Steps to km");
        e.preventDefault();

      let steps = Number($("[name='steps']").val());
      let step_length = Number($("[name='step_to_km_step_length']").val());

      let km = steps * step_length / 100000;
        $("#step_to_km_km").val(km);
    });
    $("#calculator_kj_kcal").submit(function(e) {
        console.log("kj to kcal");
        e.preventDefault();

        let kj = Number($("[name='kj_kcal_kj']").val());

        let kcal = kj / 4.184;
        $("[name='kj_kcal_kcal']").val(kcal.toFixed(2));
    });
    $("#calculator_kcal_kj").submit(function(e) {
        console.log("kcal to kj");
        e.preventDefault();

        let kcal = Number($("[name='kcal_kj_kcal']").val());

        let kj = kcal * 4.184;
        $("[name='kcal_kj_kj']").val(kj.toFixed(2));
    });
    // Udregn Billat
    $("#calculator_billat").submit(function(e) {
        console.log("Billat");
        e.preventDefault();

        let distance = Number($("[name='distance']").val());

        let iw = billat.Billat(distance);
        $("#speed").val(iw.getVelocity().toFixed(2));
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
    $("[name='peterson_target_bmi']").change(function() {
        $("#calculator_idealweight").submit();
    });
    $("[name='zacho_target_bmi']").change(function() {
        $("#calculator_idealweight").submit();
    });
    $("#calculator_idealweight").submit(function(e) {
        console.log("Idealweight");
        e.preventDefault();

        let sex = $("[name='sex']:checked").val();
        let height = Number($("[name='height']").val());

        let iw = idealweight.IdealWeight(height, sex);

        if ($("[name='zacho_target_bmi']").val() == '') {
           if (iw.isMale()) {
                $("[name='zacho_target_bmi']").val(24.5);
            } else {
                $("[name='zacho_target_bmi']").val(22.5);
            }
        }

        let target_bmi = Number($("[name='peterson_target_bmi']").val());
        let zacho_bmi = Number($("[name='zacho_target_bmi']").val());
        let bodytype = Number($("[name='bodytype']").val());

        $("[name='idealweight_robinson']").val(iw.getRobinson().toFixed(1));
        $("[name='idealweight_miller']").val(iw.getMiller().toFixed(1));
        $("[name='idealweight_hamwi']").val(iw.getHamwi().toFixed(1));
        $("[name='idealweight_devine']").val(iw.getDevine().toFixed(1));
        $("[name='idealweight_peterson']").val(iw.getPeterson(target_bmi).toFixed(1));
        $("[name='idealweight_zacho']").val(iw.getIdealWeightBasedOnBMI(zacho_bmi).toFixed(1));
        $("[name='idealweight_robinson_bodytype']").val((iw.getRobinson()*bodytype).toFixed(1));
        $("[name='idealweight_miller_bodytype']").val((iw.getMiller()*bodytype).toFixed(1));
        $("[name='idealweight_hamwi_bodytype']").val((iw.getHamwi()*bodytype).toFixed(1));
        $("[name='idealweight_devine_bodytype']").val((iw.getDevine()*bodytype).toFixed(1));
        $("[name='idealweight_peterson_bodytype']").val((iw.getPeterson(target_bmi)*bodytype).toFixed(1));
        $("[name='idealweight_zacho_bodytype']").val((iw.getIdealWeightBasedOnBMI(zacho_bmi)*bodytype).toFixed(1));
    });
    // Udregn ideal weight
    $("#calculator_running_walking").submit(function(e) {
        console.log("Running Walking Energy Expenditure");
        e.preventDefault();

      let weight = Number($("[name='weight']").val());

        console.log($("#formula-energy-walking").val());
        console.log($("#formula-energy-running").val());

      let walk;
      let run;
      let running;
      let walking;

        if ($("#formula-energy-walking").val() == 'met') {
            walking = Number($("[name='walking']").val());
            walk = runwalk.RunningWalking("walking", walking, weight);
        } else if ($("#formula-energy-walking").val() == 'pandolf') {
            walking = Number($("[name='walk_velocity']").val());
            walk = pandolf.RunningWalkingEnergyExpenditurePandolf(weight, walking);
        } else {
            walking = Number($("[name='walk_velocity']").val());
            walk = runwalkenergy.RunningWalkingEnergyExpenditure("walking", weight, walking);
        }

        if ($("#formula-energy-running").val() == 'met') {
            running = Number($("[name='running']").val());
            run = runwalk.RunningWalking("running", running, weight);
        } else if ($("#formula-energy-running").val() == 'leger') {
            running = Number($("[name='run_velocity']").val());
            run = leger.RunningWalkingEnergyExpenditureLeger(weight, running);
        } else {
            running = Number($("[name='run_velocity']").val());
            run = runwalkenergy.RunningWalkingEnergyExpenditure("running", weight, running);
        }

      let ratio_kilometer = run.getCaloriesPrKilometer() / walk.getCaloriesPrKilometer();
      let ratio_minute = run.getCaloriesPrMinute() / walk.getCaloriesPrMinute();

        $("#walking-velocity").text(walking + ' km/t');
        $("#running-velocity").text(running + ' km/t');

        $("#calories_walking_kilometer").val(walk.getCaloriesPrKilometer().toFixed(0));
        $("#calories_walking_minute").val(walk.getCaloriesPrMinute().toFixed(0));
        $("#calories_running_minute").val(run.getCaloriesPrMinute().toFixed(0));
        $("#calories_running_kilometer").val(run.getCaloriesPrKilometer().toFixed(0));
        $("#ratio_kilometer").val(ratio_kilometer.toFixed(1));
        $("#ratio_minute").val(ratio_minute.toFixed(1));
    });
    $("#calculator_walking_energy").submit(function(e) {
        console.log("Running Walking Energy Expenditure");
        e.preventDefault();

      let weight = Number($("[name='weight']").val());

        console.log($("#formula-walking-energy").val());

      let walk;
      let walking;

        if ($("#formula-walking-energy").val() == 'met') {
            walking = Number($("[name='walking']").val());
            walk = runwalk.RunningWalking("walking", walking, weight);
        } else if ($("#formula-walking-energy").val() == 'pandolf') {
            walking = Number($("[name='walk_velocity']").val());
          let grade = Number($("[name='walk_grade']").val());
          let load = Number($("[name='walk_load']").val());
            walk = pandolf.RunningWalkingEnergyExpenditurePandolf(weight, walking, grade, load);
        } else {
            walking = Number($("[name='walk_velocity']").val());
          let grade = Number($("[name='walk_grade']").val());
            walk = runwalkenergy.RunningWalkingEnergyExpenditure("walking", weight, grade);
        }

        console.log(walking);

      let time = $("#time").val() * 60;

      let total = walk.getCaloriesPrMinute() * time;

        $("#calories_walking_kilometer").val(walk.getCaloriesPrKilometer().toFixed(0));
        $("#calories_walking_minute").val(walk.getCaloriesPrMinute().toFixed(1));
        $("#calories_walking_total").val(total.toFixed(0));
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
    $("#calculator_jump_cmj").submit(function(e) {
        console.log("CMJ test");
        e.preventDefault();

        let flight_time = Number($("[name='cmj_flight_time']").val());

        console.log('CMJ flight time ' + flight_time);

        let jump_height = 9.81 * Math.pow(flight_time, 2) / 8;

        jump_height = jump_height * 100;

        $("[name='cmj_jump_height']").val(jump_height.toFixed(2));
    });
    $("#calculator_dsi").submit(function(e) {
        console.log("DSI test");
        e.preventDefault();

        let peak_force_max = Number($("[name='dsi_peak_force_max_strength']").val());
        let peak_force_ballistic = Number($("[name='dsi_peak_force_max_ballistic']").val());

        let dsi = peak_force_ballistic / peak_force_max;

        $("[name='dsi']").val(dsi.toFixed(2));
    });
    $("#calculator_walking_steps_how_fast").submit(function(e) {
      console.log("Calculate how fast steps");
      e.preventDefault();

      let steps = Number($("[name='steps']").val());
      let step_length = Number($("[name='step_length']").val());
      let velocity = Number($("[name='velocity']").val());

      let distance = steps * step_length / 100 / 1000;
      let time = distance / velocity;
      let hour_out = Math.floor(time);

      var min = 60 * (time - Math.floor(time));

      let min_out = Math.floor(min);
      let sec_out = Math.round((min - Math.floor(min)) * 60);
      if (sec_out < 10) {
          sec_out='0'+sec_out;
      }

      let time_formatted = hour_out + ":" + min_out + ":" + sec_out;

      $("[name='distance']").val(distance);
      $("[name='time']").val(time_formatted);
    });
    $("#calculator_6sek_relative_ppo").submit(function(e) {
      console.log("6sek_relative_ppo");
      e.preventDefault();

      let ppo = Number($("[name='6sek_ppo']").val());
      let bw = Number($("[name='6sek_bw']").val());

      let relative_ppo = ppo / bw;

      $("[name='relative_ppo']").val(relative_ppo.toFixed(2));
    });
    $("#calculator_musclemass_upper_limit").submit(function(e) {
      console.log("musclemass_upper_limit");
      e.preventDefault();

      let height = Number($("[name='height']").val()) / 100;

      let ffm = height * height * 34;
      let musclemass = height * height * 17;

      $("[name='ffm']").val(ffm.toFixed(2));
      $("[name='musclemass']").val(musclemass.toFixed(2));
    });
    $("#calculator_musclemass").submit(function(e) {
      console.log("musclemass");
      e.preventDefault();

      let ethniticity = $("[name='ethniticity']").val();
      let gender = $("[name='gender']").val();

      console.log(ethniticity + ' ' + gender);
      let H = Number($("[name='height']").val());
      let W = Number($("[name='weight']").val());
      let A = Number($("[name='age']").val());
      let WC = Number($("[name='waist']").val())

      let SM;
      if (WC > 0) {
        if (gender == 'man') {
          if (ethniticity == 'white') {
            SM = 0.46 * W + 0.03 * H + 0.013 * A - 0.0006 * Math.pow(A, 2)  - 0.28 * WC + 13.8;
          } else {
            SM = 0.50 * W + 0.03 * H + 0.031 * A - 0.0008* Math.pow(A, 2) - 0.31 * WC + 13.3;
          }
        } else {
          if (ethniticity == 'white') {
            SM = 0.24 * W + 0.09 * H - 0.097 * A + 0.0004 * Math.pow(A, 2) - 0.06 * WC - 3.9;
          } else {
            SM = 0.26 * W + 0.10 * H - 0.120 * A + 0.0006 * Math.pow(A, 2) - 0.06 * WC - 4.9;
          }
        }
      } else {
        if (gender == 'man') {
          if (ethniticity == 'white') {
            SM = 0.23 * W + 0.15 * H - 0.058 * A - 0.0005 * Math.pow(A, 2) - 13.2;
          } else {
            SM = 0.26 * W + 0.16 * H - 0.054 * A - 0.0007 * Math.pow(A, 2) - 14.8;
          }
        } else {
          if (ethniticity == 'white') {
            SM = 0.19 * W + 0.11 * H - 0.095 * A + 0.0003 * A2 - 9.0;
          } else {
            SM = 0.21 * W + 0.12 * H - 0.132 * A + 0.0006 * A2 - 9.6;
          }
        }
      }

      $("[name='musclemass']").val(SM.toFixed(2));
    });
    $("#calculator_6sek_fi").submit(function(e) {
      console.log("6sek_fi");
      e.preventDefault();

      let best = Number($("[name='6sek_best']").val());
      let worst = Number($("[name='6sek_worst']").val());

      let fi = 100 * ((best - worst) / best);

      $("[name='fi']").val(fi.toFixed(2));
    });
    $("#calculator_galloway_magic_mile").submit(function(e) {
      console.log("Gallowway_magic_mile");
      e.preventDefault();

      let time_mm_minutes = Number($("[name='time_mm_minutes']").val());
      let time_mm_seconds = Number($("[name='time_mm_seconds']").val());

      let c = running.Running();
      let mm_velocity = c.getKilometersPrHour(1.609, time_mm_minutes, time_mm_seconds);

      console.log('mmtime' + mm_velocity);

      // 5k
      let time_5k_minutes = time_mm_minutes;
      let time_5k_seconds = time_mm_seconds + 33;
      if (time_5k_seconds > 59) {
        time_5k_seconds = time_5k_seconds - 60;
        time_5k_minutes = time_5k_minutes + 1;
      }

      let velocity_5k_tempo = c.getKilometersPrHour(1.609, time_5k_minutes, time_5k_seconds);

      let pace_5k_run = c.convertKmtToMinPerKm(velocity_5k_tempo);

      let velocity_10k_run = mm_velocity / 1.15;

      let pace_10k_run = c.convertKmtToMinPerKm(velocity_10k_run);

      let velocity_half_marathon_run = mm_velocity / 1.2;

      let pace_half_marathon_run = c.convertKmtToMinPerKm(velocity_half_marathon_run);

      let velocity_marathon_run = mm_velocity / 1.3;

      let pace_marathon_run = c.convertKmtToMinPerKm(velocity_marathon_run);

      let velocity_long_run = (mm_velocity / 1.55);

      let pace_long_run = c.convertKmtToMinPerKm(velocity_long_run);

      $("[name='pace_long_run']").val(pace_long_run);
      $("[name='pace_5k_run']").val(pace_5k_run);
      $("[name='pace_10k_run']").val(pace_10k_run);
      $("[name='pace_half_marathon_run']").val(pace_half_marathon_run);
      $("[name='pace_marathon_run']").val(pace_marathon_run);
    });
    $("#calculator_run_walk_time").submit(function(e) {
      console.log("run_walk_time");
      e.preventDefault();

      let time_running_minutes = Number($("[name='time_running_minutes']").val());
      let time_running_seconds = Number($("[name='time_running_seconds']").val());

      let time_walking_minutes = Number($("[name='time_walking_minutes']").val());
      let time_walking_seconds = Number($("[name='time_walking_seconds']").val());

      let pace_walking_minutes = Number($("[name='pace_walking_minutes']").val());
      let pace_running_minutes = Number($("[name='pace_running_minutes']").val());

      let pace_walking_seconds = Number($("[name='pace_walking_seconds']").val());
      let pace_running_seconds = Number($("[name='pace_running_seconds']").val());

      console.log('Pace walking' + pace_walking_minutes + ':' + pace_walking_seconds);
      console.log('Time' + time_walking_minutes + ':' + time_walking_seconds);
      console.log('Pace running' + pace_walking_minutes + ':' + pace_walking_seconds);

      // Calculate total running and walking distance

      let c = running.Running();

      let running_distance = c.convertMinPerKmToDistanceForDuration(pace_running_minutes, pace_running_seconds, time_running_minutes, time_running_seconds);
      let walking_distance = c.convertMinPerKmToDistanceForDuration(pace_walking_minutes, pace_walking_seconds, time_walking_minutes, time_walking_seconds);

      let total_distance = (running_distance + walking_distance) / 1000;
      let total_minutes = time_running_minutes + time_walking_minutes;
      let total_seconds = time_running_seconds + time_walking_seconds;
      if (total_seconds > 59) {
        total_seconds = total_seconds - 60;
        total_minutes = total_minutes + 1;
      }

      console.log('dist_running: ' + running_distance + 'dist_walking: ' + walking_distance + 'dist: ' + total_distance + ' - min: ' + total_minutes + ' - sec: ' + total_seconds);

      $("[name='velocity']").val(c.getKilometersPrHour(total_distance, total_minutes, total_seconds).toFixed(2));
      $("[name='pace']").val(c.getTimePrKilometer(total_distance, total_minutes, total_seconds));
    });
    $("#calculator_6sek_sdec").submit(function(e) {
      console.log("6sek_sdec");
      e.preventDefault();

      let type = $("[name='6sek_type']").val();

      let sek_1 = Number($("[name='6sek_1']").val());
      let sek_2 = Number($("[name='6sek_2']").val());
      let sek_3 = Number($("[name='6sek_3']").val());
      let sek_4 = Number($("[name='6sek_4']").val());
      let sek_5 = Number($("[name='6sek_5']").val());

      let best = Math.max(sek_1, sek_2, sek_3, sek_4, sek_5);
      let number_of_sprints = 5;

      let part = (sek_1 + sek_2 + sek_3 + sek_4 + sek_5) / (best * number_of_sprints);

      let sdec;

      if (type == 'running') {
        sdec = (part - 1) * 100;
      } else {
        sdec = (1 - part) * 100;
      }

      $("[name='6sek_sdec']").val(sdec.toFixed(2));
    });
    $("#calculator_jump_cmj_initial_velocity").submit(function(e) {
        console.log("CMJ test");
        e.preventDefault();

        let initial_velocity = Number($("[name='cmj_initial_velocity']").val());

        console.log('CMJ flight time ' + initial_velocity);

        let jump_height = Math.pow(initial_velocity, 2) / 9.81 / 2;

        jump_height = jump_height * 100;

        $("[name='cmj_jump_height_initial_velocity']").val(jump_height.toFixed(2));
    });
    // Udregn 1punkttest
    $("#calculator_fitness_jog_vo2").submit(function(e) {
        console.log("Etpunkt test");
        e.preventDefault();

      let min = Number($("[name='time_min']").val());
      let sec = Number($("[name='time_sec']").val());
      let time = min + (sec / 60);
      let gender = Number($("[name='gender']").val());
      let hr = Number($("[name='hr']").val());
      let age = Number($("[name='age']").val());
      let weight = Number($("[name='weight']").val());

        // sex, age, weight, time, hr
      let et = jog.VO2MaxJog(gender, age, weight, time, hr);

        $("[name='vo2max']").val(et.getMaximalOxygenUptake().toFixed(2));
        $("[name='kondital']").val(et.getFitnessLevel().toFixed(0));
    });
    $("#calculator_etpunkttest").submit(function(e) {
        console.log("Etpunkt test");
        e.preventDefault();

      let work = Number($("[name='work']").val());
      let gender = Number($("[name='gender']").val());
      let puls = Number($("[name='hr']").val());
      let age = Number($("[name='age']").val());
      let weight = Number($("[name='weight']").val());

      let et = etpunkt.EtPunktTest(gender, age, weight, puls, work);

        $("[name='vo2max']").val(et.getMaximalOxygenUptake().toFixed(2));
        $("[name='kondital']").val(et.getFitnessLevel().toFixed(0));
    });
    // Udregn 2punkttest
    $("#calculator_topunkttest").submit(function(e) {
        console.log("Topunkt test");
        e.preventDefault();

      let work_1 = Number($("[name='work_1']").val());
      let work_2 = Number($("[name='work_2']").val());
      let hr_1 = Number($("[name='hr_1']").val());
      let hr_2 = Number($("[name='hr_2']").val());
      let age = Number($("[name='age']").val());
      let weight = Number($("[name='weight']").val());
      let max_hr = Number($("[name='max_hr']").val());

      let et = topunkt.ToPunktTest(age, weight, max_hr, work_1, hr_1, work_2, hr_2);

        $("[name='work_max']").val(et.getMaximalWork().toFixed(0));
        $("[name='vo2max']").val(et.getMaximalOxygenUptake().toFixed(2));
        $("[name='kondital']").val(et.getFitnessLevel().toFixed(0));
    });
    // Calculate Max Heart Rate
    $("#calculator_maxhr").submit(function(e) {
        console.log("Calculate Maximal Heart Rate");
        e.preventDefault();

        let age = Number($("[name='age']").val());
        let formula = $("[name='maxhr-formula']").val();

        let hr = maxhr.EstimateMaxHr(age, formula);

        $("[name='max_hr']").val(hr.getMaxHr().toFixed(0));
    });
    // Calculate BMI
    $("#calculator_bmi").submit(function(e) {
        console.log("Calculate BMI");
        e.preventDefault();

        let h = Number($("[name='height']").val());
        let w = Number($("[name='weight']").val());
        let age = Number($("[name='age']").val());
        let gender = $("[name='gender']:checked").val();
        let type = $("[name='type']").val();

        let b = bmi.BMI(h, w);
        let evaluation = bmievaluation.BMIEvaluation(type, gender, age);
        let meter_text = $("#meter-text");
        meter_text.text(evaluation.getEvaluation(b.getBMI()));

        $("[name='BMI']").val(b.getBMI().toFixed(1));

        let meter = $("#meter-bmi");
        meter.val(b.getBMI().toFixed(1));
        meter.text(b.getBMI().toFixed(1));
        meter.attr('low', evaluation.getLow());
        meter.attr('high', evaluation.getHigh());
        meter.attr('optimum', evaluation.getOptimum());
        meter.attr('min', evaluation.getMin());
        meter.attr('max', evaluation.getMax());
    });
    // Calculate water intake
    $("#calculator_water_intake").submit(function(e) {
        console.log("Calculate Water Intake");
        e.preventDefault();

        let w = Number($("[name='weight']").val());
        let b = water.WaterIntake(w);

        $("[name='daily_water_intake_lower']").val(b.getDailyWaterIntake());
        $("[name='daily_water_intake_upper']").val(b.getDailyWaterIntake("upper"));
    });
    // Calculate BMI
    $("#calculator_ponderal_index").submit(function(e) {
        console.log("Calculate BMI");
        e.preventDefault();

        let h = Number($("[name='height']").val());
        let w = Number($("[name='weight']").val());

        let b = ponderalindex.PonderalIndex(h, w);

        $("[name='PMI']").val(b.getPonderalIndex().toFixed(1));
    });
    // Calculate Body Water
    $("#calculator_bodywater").submit(function(e) {
        console.log("Calculate Body Water");
        e.preventDefault();

      let a = Number($("#age").val());
      let h = Number($("#height").val());
      let w = Number($("#weight").val());
      let g = $("[name='sex']:checked").val();

      let f = tbw.BodyWater(h, w, a, g);

        $("#tbw").val(f.getTotalBodyWater().toFixed(2));
        $("#tbw_pct").val(f.getPercent().toFixed(2));
    });
    // Calculate Fat Percent
    $("#calculator_fat_percent").submit(function(e) {
        console.log("Calculate Fat Percent");
        e.preventDefault();

        let a = Number($("[name='age']").val());
        let h = Number($("[name='height']").val());
        let w = Number($("[name='weight']").val());
        let g = $("[name='sex']:checked").val();

        let f = fat.CalculateFatPercent(h, w, a, g);

        $("[name='BMI']").val(f.getBMI().toFixed(2));
        $("[name='fat_percent_durnin']").val(f.getWomersleyDurnin1977().toFixed(1));
        $("[name='fat_percent_jackson_pollock']").val(f.getJacksonPollock1980().toFixed(1));
        $("[name='fat_percent_heitmann']").val(f.getHeitmann1990().toFixed(1));
        $("[name='fat_percent_duerenberg']").val(f.getDuerenberg1991().toFixed(1));
        $("[name='fat_percent_duerenberg_1998']").val(f.getDuerenberg1998().toFixed(1));
        $("[name='fat_percent_gallagher']").val(f.getGallagher2000().toFixed(1));
        $("[name='fat_percent_heritage_2002']").val(f.getHeritage2002().toFixed(1));
    });
    $("#calculator_how_tall").submit(function(e) {
        console.log("Calculate How Tall");
        e.preventDefault();

        let father = Number($("[name='father_height']").val());
        let mother = Number($("[name='mother_height']").val());
        let g = $("[name='sex']:checked").val();

        let f = how_tall.HowTall(g, father, mother);

        $("[name='adult_height']").val(f.getHeight().toFixed(0));
    });
    $("#calculator_flyer_handicap").submit(function(e) {
      console.log("Calculate Flyer Handicap");
      e.preventDefault();

      let gender = $("[name='gender']").val();
      let weight = Number($("[name='weight']").val());
      let age = Number($("[name='age']").val());

      let distance = $("[name='distance']").val();
      let hours = Number($("[name='hours']").val());
      let minutes = Number($("[name='minutes']").val());
      let seconds = Number($("[name='seconds']").val());

      if (age < 25) {
        $("[name='age']").val(25);
      }

      if (gender == 'female') {
        if (weight < 50) {
          $("[name='weight']").val(50);
        }
        $("#fh_weight").text(50);
        $("#fh_gender").text('kvinde');
      } else if (gender == 'male') {
        if ( weight < 65) {
          $("[name='weight']").val(65);
        }
        $("#fh_weight").text(65);
        $("#fh_gender").text('mand');
      }

      let f = flyer_handicap.FlyerHandicap(age, weight, gender);

      $("[name='fh_time']").val(f.getAdjustedTime(distance, hours, minutes, seconds));
  });
    $("#calculator_who5").submit(function(e) {
        console.log("Calculate Eating Disorder");
        e.preventDefault();

        let q1 = Number($("[name='question_1']:checked").val());
        let q2 = Number($("[name='question_2']:checked").val());
        let q3 = Number($("[name='question_3']:checked").val());
        let q4 = Number($("[name='question_4']:checked").val());
        let q5 = Number($("[name='question_5']:checked").val());
        let score = (q1 + q2 + q3 + q4 + q5) * 4;

        let text;

        if (score > 49) {
            text = 'Din score på ' + score + ' ligger her inden for gennemsnittet for resten af befolkningen som er 68 med en nedre grænse omkring 50.';
        } else if (score > 35) {
            text = 'Din score på ' + score + ' ligger lavere end gennemsnittet for resten af befolkningen. Resultatet tyder på, at du nok ikke har det helt godt. Vær opmærksom på, om du får det bedre eller værre og søg evt. læge, hvis du får det værre.';
        } else {
            text = 'Din score på ' + score + ' ligger væsentligt lavere end gennemsnittet for resten af befolkningen. Resultatet tyder på, at du ikke er på toppen, og der kan være en reel risiko for, at du lider af depression eller langvarig stress. Du bør overveje at søge hjælp hos din læge for at få det undersøgt.';
        }

        $("[name='who5_score']").val(score);
        $("#result").text(text);
    });
    $("#calculator_phq9").submit(function(e) {
        console.log("Calculate PHQ-9");
        e.preventDefault();

        let q1 = Number($("[name='question_1']:checked").val());
        let q2 = Number($("[name='question_2']:checked").val());
        let q3 = Number($("[name='question_3']:checked").val());
        let q4 = Number($("[name='question_4']:checked").val());
        let q5 = Number($("[name='question_5']:checked").val());
        let q6 = Number($("[name='question_6']:checked").val());
        let q7 = Number($("[name='question_7']:checked").val());
        let q8 = Number($("[name='question_8']:checked").val());
        let q9 = Number($("[name='question_9']:checked").val());
        let score = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9;

        let text;

        if (score > 19) {
            text = 'Din score på ' + score + ' viser, at du har svære symptomer på depression. Du skal søge professionel hjælp, så du kan komme til en specialist, der vil hjælpe dig med at igangsætte en øjeblikkelig behandling.';
        } else if (score > 14) {
            text = 'Din score på ' + score + ' viser, at du har moderate til svære symptomer på depression. Du skal søge professionel hjælp, som kan hjælpe med at få dig i behandling.';
        } else if (score > 9) {
            text = 'Din score på ' + score + ' viser at du har moderate symptomer på depression. Du bør søge professionel hjælp og lægge en plan.';
        } else if (score > 4) {
            text = 'Din score på ' + score + ' viser at du kan have milde symptomer på depression. Det er godt at følge op efter lidt tid med at besvare skemaet igen for at se, om symptomerne bliver værre.';
        } else {
            text = 'Din score på ' + score + ' viser, at du ingen eller kun minimale depressive symptomer har.';
        }

        $("[name='phq9_score']").val(score);
        $("#result").text(text);
    });
    $("#calculator_stress").submit(function(e) {
        console.log("Calculate Stress");
        e.preventDefault();

      let q1 = Number($("[name='question_1']:checked").val());
      let q2 = Number($("[name='question_2']:checked").val());
      let q3 = Number($("[name='question_3']:checked").val());
      let q4 = Number($("[name='question_4']:checked").val());
      let q5 = Number($("[name='question_5']:checked").val());
      let q6 = Number($("[name='question_6']:checked").val());
      let q7 = Number($("[name='question_7']:checked").val());
      let q8 = Number($("[name='question_8']:checked").val());
      let q9 = Number($("[name='question_9']:checked").val());
      let q10 = Number($("[name='question_10']:checked").val());
      let q11 = Number($("[name='question_11']:checked").val());
      let q12 = Number($("[name='question_12']:checked").val());
      let q13 = Number($("[name='question_13']:checked").val());
      let q14 = Number($("[name='question_14']:checked").val());
      let q15 = Number($("[name='question_15']:checked").val());
      let q16 = Number($("[name='question_16']:checked").val());
      let score = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10 + q11 + q12 + q13 + q14 + q15 + q16;

      let text;

        if (score > 50) {
            text = 'Din score på ' + score + ' viser, at dit stressniveau er <strong>meget højt niveau</strong>. Dit stressniveau er meget højt. Du bør tage hånd om din situation straks og række ud efter hjælp, så du kan få det bedre.';
        } else if (score > 36) {
            text = 'Din score på ' + score + ' viser, at dit stressniveau er <strong>for højt niveau</strong>. Dit stressniveau er højt. Du har måske været belastet over en længere periode, hvor stressen gradvist er taget til. Du bør gøre noget ved din situation nu.';
        } else if (score > 23) {
            text = 'Din score på ' + score + ' viser, at dit stressniveau er på et <strong>mellem niveau<strong>. Dit stress-niveau er ikke alarmerende højt, men du er alligevel tilpas stresset til, at du bør se på, hvad der kan ændres i dit liv.';
        } else {
            text = 'Din score på ' + score + ' viser, at dit stressniveau er på et <strong>afslappet niveau</strong>. Du er ikke stresset for tiden. Det er rigtig godt, men vær alligevel opmærksom på, om din tilstand ændrer sig.';
        }

        $("[name='stress_score']").val(score);
        $("#result").text(text);
    });
    $("#calculator_atq").submit(function(e) {
        console.log("Calculate ATQ");
        e.preventDefault();

      let q1 = Number($("[name='frequency_1']:checked").val());
      let q2 = Number($("[name='frequency_2']:checked").val());
      let q3 = Number($("[name='frequency_3']:checked").val());
      let q4 = Number($("[name='frequency_4']:checked").val());
      let q5 = Number($("[name='frequency_5']:checked").val());
      let q6 = Number($("[name='frequency_6']:checked").val());
      let q7 = Number($("[name='frequency_7']:checked").val());
      let q8 = Number($("[name='frequency_8']:checked").val());
      let q9 = Number($("[name='frequency_9']:checked").val());
      let q10 = Number($("[name='frequency_10']:checked").val());
      let q11 = Number($("[name='frequency_11']:checked").val());
      let q12 = Number($("[name='frequency_12']:checked").val());
      let q13 = Number($("[name='frequency_13']:checked").val());
      let q14 = Number($("[name='frequency_14']:checked").val());
      let q15 = Number($("[name='frequency_15']:checked").val());
      let q16 = Number($("[name='frequency_16']:checked").val());
      let q17 = Number($("[name='frequency_17']:checked").val());
      let q18 = Number($("[name='frequency_18']:checked").val());
      let q19 = Number($("[name='frequency_19']:checked").val());
      let q20 = Number($("[name='frequency_20']:checked").val());
      let q21 = Number($("[name='frequency_21']:checked").val());
      let q22 = Number($("[name='frequency_22']:checked").val());
      let q23 = Number($("[name='frequency_23']:checked").val());
      let q24 = Number($("[name='frequency_24']:checked").val());
      let q25 = Number($("[name='frequency_25']:checked").val());
      let q26 = Number($("[name='frequency_26']:checked").val());
      let q27 = Number($("[name='frequency_27']:checked").val());
      let q28 = Number($("[name='frequency_28']:checked").val());
      let q29 = Number($("[name='frequency_29']:checked").val());
      let q30 = Number($("[name='frequency_30']:checked").val());
      let frequency = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10 + q11 + q12 + q13 + q14 + q15 + q16 + q17 + q18 + q19 + q20 + q21 + q22 + q23 + q24 + q25 + q26 + q27 + q28 + q29 + q30;

      let b1 = Number($("[name='believe_1']:checked").val());
      let b2 = Number($("[name='believe_2']:checked").val());
      let b3 = Number($("[name='believe_3']:checked").val());
      let b4 = Number($("[name='believe_4']:checked").val());
      let b5 = Number($("[name='believe_5']:checked").val());
      let b6 = Number($("[name='believe_6']:checked").val());
      let b7 = Number($("[name='believe_7']:checked").val());
      let b8 = Number($("[name='believe_8']:checked").val());
      let b9 = Number($("[name='believe_9']:checked").val());
      let b10 = Number($("[name='believe_10']:checked").val());
      let b11 = Number($("[name='believe_11']:checked").val());
      let b12 = Number($("[name='believe_12']:checked").val());
      let b13 = Number($("[name='believe_13']:checked").val());
      let b14 = Number($("[name='believe_14']:checked").val());
      let b15 = Number($("[name='believe_15']:checked").val());
      let b16 = Number($("[name='believe_16']:checked").val());
      let b17 = Number($("[name='believe_17']:checked").val());
      let b18 = Number($("[name='believe_18']:checked").val());
      let b19 = Number($("[name='believe_19']:checked").val());
      let b20 = Number($("[name='believe_20']:checked").val());
      let b21 = Number($("[name='believe_21']:checked").val());
      let b22 = Number($("[name='believe_22']:checked").val());
      let b23 = Number($("[name='believe_23']:checked").val());
      let b24 = Number($("[name='believe_24']:checked").val());
      let b25 = Number($("[name='believe_25']:checked").val());
      let b26 = Number($("[name='believe_26']:checked").val());
      let b27 = Number($("[name='believe_27']:checked").val());
      let b28 = Number($("[name='believe_28']:checked").val());
      let b29 = Number($("[name='believe_29']:checked").val());
      let b30 = Number($("[name='believe_30']:checked").val());

      let believe = b1 + b2 + b3 + b4 + b5 + b6 + b7 + b8 + b9 + b10 + b11 + b12 + b13 + b14 + b15 + b16 + b17 + b18 + b19 + b20 + b21 + b22 + b23 + b24 + b25 + b26 + b27 + b28 + b29 + b30;

      let text;

      let pmdc = q7 + q10 + q14 + q20 + q26;
      let nsne = q2 + q3 + q9 + q21 + q23 + q24 + q28;
      let lse = q17 + q18;
      let helplessness = q29 + q30;

        /*
        if (score > 50) {
            text = 'Din score på ' + score + ' viser, at dit stressniveau er <strong>meget højt niveau</strong>. Dit stressniveau er meget højt. Du bør tage hånd om din situation straks og række ud efter hjælp, så du kan få det bedre.';
        } else if (score > 36) {
            text = 'Din score på ' + score + ' viser, at dit stressniveau er <strong>for højt niveau</strong>. Dit stressniveau er højt. Du har måske været belastet over en længere periode, hvor stressen gradvist er taget til. Du bør gøre noget ved din situation nu.';
        } else if (score > 23) {
            text = 'Din score på ' + score + ' viser, at dit stressniveau er på et <strong>mellem niveau<strong>. Dit stress-niveau er ikke alarmerende højt, men du er alligevel tilpas stresset til, at du bør se på, hvad der kan ændres i dit liv.';
        } else {
            text = 'Din score på ' + score + ' viser, at dit stressniveau er på et <strong>afslappet niveau</strong>. Du er ikke stresset for tiden. Det er rigtig godt, men vær alligevel opmærksom på, om din tilstand ændrer sig.';
        }
        */
        $("[name='frequency_score']").val(frequency);
        $("[name='believe_score']").val(believe);
        $("[name='pmdc_score']").val(pmdc);
        $("[name='nsne_score']").val(nsne);
        $("[name='lse_score']").val(lse);
        $("[name='helplessness_score']").val(helplessness);
        $("#result").text(text);
    });
    $("#calculator_excercise_addiction").submit(function(e) {
        console.log("Calculate Eating Disorder");
        e.preventDefault();

      let q1 = Number($("[name='question_1']:checked").val());
      let q2 = Number($("[name='question_2']:checked").val());
      let q3 = Number($("[name='question_3']:checked").val());
      let q4 = Number($("[name='question_4']:checked").val());
      let q5 = Number($("[name='question_5']:checked").val());
      let q6 = Number($("[name='question_6']:checked").val());

      let disorder = q1 + q2 + q3 + q4 + q5 + q6;

      let text;

        if (disorder > 23) {
            text = 'Din score på ' + disorder + ' ligger mellem 24-30. Det er sandsynligt, at du er afhængig af træning på en måde, der kan skade dig.';
        } else if (disorder > 15) {
            text = 'Du har fået ' + disorder + ' point. Hvis du får 24 point eller mere, så er du sandsynligvis afhængig af træning på en måde, der kan skade dig.';
        } else {
            text = 'Du er med ' + disorder + ' point sandsynligvis ikke i risikogruppen for at være afhængig af træning.';
        }

        $("#result").text(text);
    });
    $("#calculator_eating_disorder").submit(function(e) {
        console.log("Calculate Eating Disorder");
        e.preventDefault();

      let q1 = Number($("[name='question_1']:checked").val());
      let q2 = Number($("[name='question_2']:checked").val());
      let q3 = Number($("[name='question_3']:checked").val());
      let q4 = Number($("[name='question_4']:checked").val());
      let q5 = Number($("[name='question_5']:checked").val());
      let q6 = Number($("[name='question_6']:checked").val());

      let disorder = q1 + q2 + q3 + q4;
      let no_disorder = q5 + q6;

      let text;

        if (disorder > 1) {
            text = 'Du har svaret ja på ' + disorder + ' af de fire første spørgsmål. Du er i risikogruppen for at have en spiseforstyrrelse og bør søge hjælp. Yderligere udredning er nødvendig for at vurdere, om der er tale om en spiseforstyrrelse.';
        } else if (disorder > 0) {
            text = 'Du har svaret ja på et af de fire første spørgsmål. At svare ja på et af spørgsmålene er formentlig ikke alvorligt, men det kan være tegn på et forstyrret spisemønster.';
        } else if (no_disorder == 0) {
            text = 'Dine s let tyder på, at du ikke har et forstyrret spisemønster.';
        } else {
            text = 'Det  let ikke muligt at konkludere noget på baggrund af dine svar. De første fire spørgsmål har en sammenhæng med det at have en spiseforstyrrelse. De sidste to spørgsmål kan afdække om du er uden for risikogruppen.';
        }

        $("#result").text(text);
    });
    $("#calculator_norwegian_2011").submit(function(e) {
        console.log("Calculate Norwegian 2011");
        e.preventDefault();

      let gender = $("[name='gender']").val();
      let age = Number($("[name='age']").val());
      let hr_rest = Number($("[name='hr_rest']").val());
      let waist = Number($("[name='waist']").val());
      let frequency = Number($("[name='frequency']").val());
      let intensity = Number($("[name='intensity']").val());
      let duration = Number($("[name='duration']").val());

      let kondital;
      let pa = frequency * intensity * duration;

        if (gender == 'male') {
            kondital = 100.27 + 0.226 * pa - 0.296 * age - 0.369 * waist - 0.155 * hr_rest;
        } else {
            kondital = 74.74 + 0.198 * pa - 0.247 * age - 0.259 * waist - 0.114 * hr_rest;
        }

        $("[name='kondital']").val(kondital.toFixed(0));
        $("[name='pa']").val(pa);
    });
    $("#calculator_jackson").submit(function(e) {
        console.log("Calculate Jackson");
        e.preventDefault();

      let gender = Number($("[name='jackson_gender']").val());
      let age = Number($("[name='jackson_age']").val());
      let height = Number($("[name='jackson_height']").val());
      let weight = Number($("[name='jackson_weight']").val());
      let par = Number($("[name='par']:checked").val());

      let b = bmi.BMI(height, weight);

      let kondital = 56.363 + 1.921 * par - 0.381 * age - 0.754 * b.getBMI() + 10.987 * gender;

        $("[name='jackson_kondital']").val(kondital.toFixed(0));
    });
    // Calculate Durnin
    $("#calculator_skinfold_durnin").submit(function(e) {
        console.log("Calculate Skinfold Durnin");
        e.preventDefault();

      let biceps = Number($("[name='biceps']").val());
      let triceps = Number($("[name='triceps']").val());
      let suprailiac = Number($("[name='suprailiac']").val());
      let subscapularis = Number($("[name='subscapularis']").val());
      let weight = Number($("[name='weight']").val());
      let sex = $("[name='gender']").val();
      let age = Number($("[name='age']").val());

      let f = skinfold_durnin.SkinfoldDurnin(biceps, triceps, suprailiac, subscapularis, weight, sex, age);

        $("[name='skinfold_durnin']").val(f.getSkinfoldSum().toFixed(2));
        $("[name='fatpercent_durnin']").val(f.getBodyFatPercent().toFixed(2));
        $("[name='ffm_durnin']").val(f.getFatFreeMass().toFixed(2));
    });
    // Calculate Peterson
    $("#calculator_skinfold_peterson").submit(function(e) {
        console.log("Calculate Skinfold Durnin");
        e.preventDefault();

      let midthigh = Number($("[name='midthigh']").val());
      let triceps = Number($("[name='triceps']").val());
      let suprailiac = Number($("[name='suprailiac']").val());
      let subscapularis = Number($("[name='subscapularis']").val());
      let weight = Number($("[name='weight']").val());
      let height = Number($("[name='height']").val());
      let sex = $("[name='gender']").val();
      let age = Number($("[name='age']").val());

      let f = skinfold_peterson.SkinfoldPeterson(midthigh, triceps, suprailiac, subscapularis, height, weight, sex, age);

        $("[name='skinfold_peterson']").val(f.getSkinfoldSum().toFixed(2));
        $("[name='fatpercent_peterson']").val(f.getBodyFatPercent().toFixed(2));
        $("[name='ffm_peterson']").val(f.getFatFreeMass().toFixed(2));
    });
    // Calculate Pollock
    $("#calculator_skinfold_pollock_men").submit(function(e) {
        console.log("Calculate Skinfold Pollock Men");
        e.preventDefault();

      let breast = Number($("[name='chest_male']").val());
      let abdomen = Number($("[name='abdomen_male']").val());
      let thigh = Number($("[name='thigh_male']").val());
      let age = Number($("[name='age_male']").val());
      let weight = Number($("[name='weight_male']").val());

      let f = skinfold_pollock.SkinfoldPollock(weight, age);

        $("[name='fatpercent_male']").val(f.getBodyFatPercentMale(breast, abdomen, thigh));
        $("[name='ffm_male']").val(f.getBodyFatFreeMass());
    });
    // Calculate Durnin
    $("#calculator_skinfold_pollock_women").submit(function(e) {
        console.log("Calculate Skinfold Pollock Women");
        e.preventDefault();

      let triceps = Number($("[name='triceps_female']").val());
      let hip = Number($("[name='supiliac_female']").val());
      let thigh = Number($("[name='thigh_female']").val());
      let age = Number($("[name='age_female']").val());
      let weight = Number($("[name='weight_female']").val());

      let f = skinfold_pollock.SkinfoldPollock(weight, age);

        $("[name='fatpercent_female']").val(f.getBodyFatPercentFemale(triceps, hip, thigh));
        $("[name='ffm_female']").val(f.getBodyFatFreeMass());
    });
    // Calculate Lohman
    $("#calculator_skinfold_lohman").submit(function(e) {
        console.log("Calculate Skinfold Lohman");
        e.preventDefault();

      let triceps = Number($("[name='triceps']").val());
      let calf = Number($("[name='calf']").val());
      let sex = Number($("[name='gender']").val());

      let f = skinfold_lohman.SkinfoldLohman(sex, triceps, calf);

        $("[name='fatpercent']").val(f.getBodyFatPercent());
    });
    // Calculate Slaughter
    $("#calculator_skinfold_slaughter").submit(function(e) {
        console.log("Calculate Skinfold Slaughter");
        e.preventDefault();

      let triceps = Number($("[name='triceps']").val());
      let subscapular = Number($("[name='subscapular']").val());
      let sex = Number($("[name='gender']").val());

      let f = skinfold_slaughter.SkinfoldSlaughter(sex, triceps, subscapular);

        $("[name='fatpercent']").val(f.getBodyFatpercent());
    });
    $("#calculator_fat_percent_measurement").ready(function() {
        $("#calculator_fat_percent_men_under_26").hide();
        $("#calculator_fat_percent_men_over_26").hide();
        $("#calculator_fat_percent_women_under_26").hide();
        $("#calculator_fat_percent_women_over_26").hide();
    });
    // 1RM calculate
    $("#calculator_fat_percent_measurement [name='group']").change(function() {
      let group = $("[name='group']").val();
        $("#calculator_fat_percent_men_under_26").hide();
        $("#calculator_fat_percent_men_over_26").hide();
        $("#calculator_fat_percent_women_under_26").hide();
        $("#calculator_fat_percent_women_over_26").hide();
        $("#calculator_fat_percent_" + group).show();
    });
    // Calculate Fat Percent Measurements
    $("#calculator_fat_percent_men_under_26").submit(function(e) {
        console.log("Calculate Fat Percent on Measurements");
        e.preventDefault();
      let f = fatm.CalculateFatPercentMeasurements();
        $("[name='fat_men_under_26']").val(f.getFatPercentMenUnder26(
            Number($("#calculator_fat_percent_men_under_26 [name='right_upperarm']").val()),
            Number($("#calculator_fat_percent_men_under_26 [name='abdomen']").val()),
            Number($("#calculator_fat_percent_men_under_26 [name='right_forearm']").val())
        ).toFixed(2));
    });
    $("#calculator_fat_percent_men_over_26").submit(function(e) {
        console.log("Calculate Fat Percent on Measurements");
        e.preventDefault();
      let f = fatm.CalculateFatPercentMeasurements();
        $("[name='fat_men_over_26']").val(f.getFatPercentMenOver26(
            Number($("#calculator_fat_percent_men_over_26 [name='hips']").val()),
            Number($("#calculator_fat_percent_men_over_26 [name='abdomen']").val()),
            Number($("#calculator_fat_percent_men_over_26 [name='right_forearm']").val())
        ).toFixed(2));
    });
    $("#calculator_fat_percent_women_under_26").submit(function(e) {
        console.log("Calculate Fat Percent on Measurements");
        e.preventDefault();
      let f = fatm.CalculateFatPercentMeasurements();
        $("[name='fat_women_under_26']").val(f.getFatPercentWomenUnder26(
            Number($("#calculator_fat_percent_women_under_26 [name='abdomen']").val()),
            Number($("#calculator_fat_percent_women_under_26 [name='right_thigh']").val()),
            Number($("#calculator_fat_percent_women_under_26 [name='right_forearm']").val())
        ).toFixed(2));
    });
    $("#calculator_fat_percent_women_over_26").submit(function(e) {
        console.log("Calculate Fat Percent on Measurements");
        e.preventDefault();
      let f = fatm.CalculateFatPercentMeasurements();
        $("[name='fat_women_over_26']").val(f.getFatPercentWomenOver26(
            Number($("#calculator_fat_percent_women_over_26 [name='abdomen']").val()),
            Number($("#calculator_fat_percent_women_over_26 [name='right_thigh']").val()),
            Number($("#calculator_fat_percent_women_over_26 [name='right_calf']").val())
        ).toFixed(2));
    });
    // Calculate VO2 from HR
    $("#calculate_fitness_level_hr").submit(function(e) {
        console.log("Calculate VO2 from HR");
        e.preventDefault();

      let hvpul = Number($("#hr_rest").val());
      let mxpul = Number($("#hr_max").val());
      let wgt = Number($("#weight").val());

      let fitnesshr = fitness.CalculateFitnessFromHr(mxpul, hvpul, wgt);

      let maxiltoptagelse = fitnesshr.getMaximalOxygenUptake();
      let kondital = fitnesshr.getFitnessLevel();

        $("#vo2max").val(maxiltoptagelse);
        $("#kondital").val(kondital);
    });
    // Calculate Borg 15 fitness
    $("#calculator_borg15").submit(function(e) {
        console.log("Calculate Borg 15 fitness");
        e.preventDefault();

      let watt = Number($("#borg_watt").val());
      let age = Number($("#borg_age").val());
      let weight = Number($("#borg_weight").val());

      let borg = borg15.Borg15(age, weight, watt);

        $("#borg_iltoptagelse").val(borg.getMaximalOxygenUptake().toFixed(2));
        $("#borg_kondital").val(borg.getFitnessLevel().toFixed(0));
    });
    // Calculate Wattmax
    $("#calculator_inol").submit(function(e) {
        console.log("Calculate INOL");
        e.preventDefault();
      let reps = Number($("[name='reps']").val());
      let intensity = Number($("[name='intensity']").val());

      let watt = inol.INOL(reps, intensity);

        $("[name='inol']").val(watt.getINOL());
    });
    // Calculate Wattmax
    $("#calculator_fitness_wattmax").submit(function(e) {
        console.log("Calculate Wattmax");
        e.preventDefault();
      let wmax = Number($("[name='wmax']").val());
      let sec = Number($("[name='sec']").val());
      let weight = Number($("[name='weight']").val());

      let watt = wattmax.Wattmax(wmax, sec, weight);

        $("[name='kondital']").val(watt.getFitnessLevel());
        $("[name='vo2max']").val(watt.getMaximalOxygenUptake());
        $("[name='mpo']").val(watt.getMPO());
    });
    // Calculate Wattmax Children
    $("#calculator_fitness_wattmax_children").submit(function(e) {
        console.log("Calculate Wattmax Children");
        e.preventDefault();

      let wmax = Number($("[name='wmax']").val());
      let sec = Number($("[name='sec']").val());
      let weight = Number($("[name='weight']").val());
      let watt_jumps = Number($("[name='watt_jumps']").val());
      let age = 15;

      let watt = wattmax.Wattmax(wmax, sec, weight, age, watt_jumps);

        $("[name='kondital']").val(watt.getFitnessLevel());
        $("[name='vo2max']").val(watt.getMaximalOxygenUptake());
        $("[name='mpo']").val(watt.getMPO());
    });
    // Calculate Trappetest
    $("#calculator_fitness_trappetest").submit(function(e) {
      console.log("Calculate Trappetest");
      e.preventDefault();
      let wmax = Number($("[name='wmax']").val());
      let sec = Number($("[name='sec']").val());
      let weight = Number($("[name='weight']").val());

      let ppo = (wmax - 25) + (sec / 150) * 25;
      let vo2max = 0.01141 * ppo + 0.435;
      let kondital = vo2max / weight * 1000;

      $("[name='kondital']").val(kondital.toFixed(0));
      $("[name='vo2max']").val(vo2max.toFixed(2));
      $("[name='ppo']").val(ppo);
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

      let min = Number($("[name='min']").val());
      let sec = Number($("[name='sec']").val());
      let hr_after = Number($("[name='hr_after']").val());
      let gender = $("[name='gender']").val();
      let age = Number($("[name='age']").val());
      let weight = Number($("[name='weight']").val());

        console.log(gender);

      let rp = rockport.RockPortWalkingTest(min, sec, hr_after, gender, age, weight);

        $("[name='kondital']").val(rp.getFitnessLevel().toFixed(0));
        $("[name='vo2max']").val(rp.getMaximalOxygenUptake().toFixed(2));
    });
    // Calculate Index 23
    $("#calculator_index23").submit(function(e) {
        console.log("Calculate Index23");
        e.preventDefault();

      let height = Number($("#height").val());
      let weight = Number($("#weight").val());
      let kondital = Number($("#kondital").val());

      let i = index23.FitnessIndex23(height, weight);

        $("#index23").val(i.getIndex23BasedOnFitnessLevel(kondital));
    });
    // Calculate Index 23
    $("#calculator_andersen_test").submit(function(e) {
        console.log("Calculate Andersen Test");
        e.preventDefault();

      let distance = Number($("[name='distance']").val());
      let sex = $("[name='gender']").val();

      let i = andersen.AndersenTest(sex, distance);

        $("[name='kondital']").val(i.getFitnessLevel().toFixed(0));
    });
    // Calculate Index 100
    $("#calculator_index100").submit(function(e) {
        console.log("Calculate Index100");
        e.preventDefault();

      let lifted = Number($("[name='lifted']").val());
      let bodyweight = Number($("[name='weight']").val());

      let idx = index100.Index100(lifted, bodyweight);

        $("[name='index_100_lift']").val(idx.getIndex100());
    });
    $("#calculator_necessary_energy_deficit").submit(function(e) {
        console.log("Calculate calculator_necessary_energy_deficit");
        e.preventDefault();

      let lost = Number($("[name='lost']").val());
      let days = Number($("[name='days']").val());
      let lost_day = lost / days * 1000;
      let fat = 9; //kcal
      let diff = lost_day * fat;
      let weight_loss = lost_day;

        $("[name='daily_diff']").val(diff.toFixed(0) + ' kcal');
        $("[name='daily_weight_loss']").val(weight_loss.toFixed(0) + ' g');
    });
    // Calculate BMR - Benedict Harris
    $("#calculator_change").submit(function(e) {
        console.log("Calculate Equilibrium");
        e.preventDefault();

      let tee = Number($("#calculator_change [name='tee']").val());
      let intake = Number($("[name='intake']").val());

      let b = bmr_equilibrium.BMREquilibrium();

      let balance = b.getBalance(tee, intake);

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

      let formula = $("[name='bmr-formula']").val();
      let gender = $("[name='gender']").val();
      let age = Number($("[name='age']").val());
      let weight = Number($("[name='weight']").val());
      let height = Number($("[name='height']").val());

      let b;

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
          let pal = Number($("[name='pal']:checked").val());
          let moderate_leisure_activity = Number($("[name='moderate_leisure_activity']").val());
          let strenuous_leisure_activity = Number($("[name='strenuous_leisure_activity']").val());

          let tee = tee_pal.TotalEnergyExpenditurePAL(b.getBasicMetabolicRate(), pal, moderate_leisure_activity, strenuous_leisure_activity);

            $("[name='pal_calc']").val(tee.getPhysicalActivityLevel().toFixed(2));
            $("[name='tee']").val(tee.getTotalEnergyExpenditure().toFixed(0));
        }
    });
    $("#calculator_critical_power_time").submit(function(e) {
        console.log("Calculate CP Time");
        e.preventDefault();

        let cp = Number($("[name='time_cp']").val());
        let w = Number($("[name='time_w']").val());
        let p = Number($("[name='time_p']").val());

        let time = ((1000 * w) / (p - cp));

        $("[name='time']").val(time.toFixed(0));
    });
    $("#calculator_rowing_2000_meter_time").submit(function(e) {
      console.log("Calculate VO2max rowing");
      e.preventDefault();

      let min = Number($("[name='tid_min']").val());
      let sek = Number($("[name='tid_sek']").val());
      let bw = Number($("[name='rowing_body_weight']").val());
      let gender = $("[name='rowing_gender']").val();

      let b = rowing_power_calculator.RowingPowerCalculator();
      let pace = b.getPaceFromTimeAndDistance(2000, min, sek);

      let WM = b.getWattsFromPace(pace);

      let r = rowing_vo2.RowingVO2(WM, gender);

      $("[name='vo2_max']").val(r.getVO2().toFixed(2));
      $("[name='kondital']").val(r.getFitnessLevel(bw).toFixed(0));
      $("[name='mean_power']").val(WM.toFixed(0));
    });
    $("#calculator_rowing_trappetest").submit(function(e) {
      console.log("Calculate VO2max rowing");
      e.preventDefault();

      let min = Number($("[name='trappetest_tid_min']").val());
      let sek = Number($("[name='trappetest_tid_sek']").val());
      let bw = Number($("[name='trappetest_body_weight']").val());
      let second_watt = Number($("[name='trappetest_second_watts']").val());
      let last_watt = Number($("[name='trappetest_last_watts']").val());

      let increment = last_watt - second_watt;

      let time_on_increment = (min + ((sek / 60) / 100)) / 5;

      let power = second_watt + (increment * time_on_increment);

      let vo2max = (13.7 * power + 287) / 1000;
      let kondital = vo2max / bw * 1000;
      
      $("[name='trappetest_vo2_max']").val(vo2max.toFixed(2));
      $("[name='trappetest_kondital']").val(kondital.toFixed(0));
      $("[name='trappetest_mean_power']").val(power.toFixed(0));
    });
    $("#calculator_rowing_powerprofile").submit(function(e) {
      console.log("Calculate VO2max rowing");
      e.preventDefault();

      let min = Number($("[name='roning_pp_tid_min']").val());
      let sek = Number($("[name='roning_pp_tid_sek']").val());
      let ms = Number($("[name='roning_pp_tid_ms']").val());

      let b = rowing_powerprofile.RowingErgRowing(min, sek, ms);

      $("#pace10sec").text(b.getPaceFromWatts(b.getWatts10Sec()));
      $("#pace60sec").text(b.getPaceFromWatts(b.getWatts60Sec()));
      $("#pace2k").text(b.getPaceFromWatts(b.getWatts2k()));
      $("#pace6k").text(b.getPaceFromWatts(b.getWatts6k()));
      $("#pace60min").text(b.getPaceFromWatts(b.getWatts60min()));

      $("#watts10sec").text(b.getWatts10Sec().toFixed(0));
      $("#watts60sec").text(b.getWatts60Sec().toFixed(0));
      $("#watts2k").text(b.getWatts2k().toFixed(0));
      $("#watts6k").text(b.getWatts6k().toFixed(0));
      $("#watts60min").text(b.getWatts60min().toFixed(0));

      /*
      //RENDER CHART
      var speedCanvas = document.getElementById("speedChart");

      //Chart.defaults.global.defaultFontFamily = "Lato";
      //Chart.defaults.global.defaultFontSize = 18;

      var speedData = {
        labels: [
          moment().set({ minutes: 0, seconds: 10 }),
          moment().set({ minutes: 1, seconds: 0 }),
          moment().set({
            minutes: score_min_sec(calculate_score(watts2k, 2000), "min"),
            seconds: score_min_sec(calculate_score(watts2k, 2000), "sec"),
          }),
          moment().set({
            minutes: score_min_sec(calculate_score(watts6k, 6000), "min"),
            seconds: score_min_sec(calculate_score(watts6k, 6000), "sec"),
          }),
          moment().set({ minutes: 60, seconds: 00 }),
        ],

        datasets: [
          {
            label: "Watts/Time",
            data: [
              parseFloat(watts10sec).toFixed(1),
              parseFloat(watts60sec).toFixed(1),
              parseFloat(watts2k).toFixed(1),
              parseFloat(watts6k).toFixed(1),
              parseFloat(watts60min).toFixed(1),
            ],
            lineTension: 0.3,
            fill: false,
            borderColor: "blue",
            backgroundColor: "transparent",
            pointBorderColor: "#007bff",
            pointBackgroundColor: "rgba(255,150,0,0.5)",
            // borderDash: [5, 1],
            pointRadius: 5,
            pointHoverRadius: 10,
            pointHitRadius: 30,
            pointBorderWidth: 2,
            pointStyle: "rectRounded",
          },
        ],
      };

      var chartOptions = {
        legend: {
          display: true,
          position: "top",
          labels: {
            boxWidth: 30,
            fontColor: "black",
          },
        },

        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                unit: "minute",
                unitStepSize: 5,
                round: "second",
                tooltipFormat: "mm:ss",
                displayFormats: {
                  minute: "mm:ss",
                },
              },
              scaleLabel: {
                display: true,
                labelString: "Time MM:SS",
                fontColor: "grey",
              },
            },
          ],

          yAxes: [
            {
              gridLines: {
                color: "black",
                // borderDash: [2, 5],
              },
              scaleLabel: {
                display: true,
                labelString: "Watts (W)",
                fontColor: "grey",
              },
            },
          ],
        },
      };

      var lineChart = new Chart(speedCanvas, {
        type: "line",
        data: speedData,
        options: chartOptions,
      });
    */

    });
    $("#calculator_critical_power_power_for_time").submit(function(e) {
        console.log("Calculate CP Power for time");
        e.preventDefault();

        let cp = Number($("[name='power_time_cp']").val());
        let w = Number($("[name='power_time_w']").val());
        let t = Number($("[name='power_time_time']").val());

        let p = ((1000 * w) / t) + cp;

        $("[name='power_for_time']").val(p.toFixed(0));
    });
    $("#calculator_bruce").submit(function(e) {
        console.log("Calculate Bruce");
        e.preventDefault();

        let T = Number($("[name='bruce_time']").val());

        let kondital = 14.8 - (1.379 * T) + (0.451 * Math.pow(T, 2)) - (0.012 * Math.pow(T, 3));

        $("[name='bruce_kondital']").val(kondital.toFixed(0));
    });
    $("#calculator_critical_power").submit(function(e) {
        console.log("Calculate CP");
        e.preventDefault();

        let p3 = Number($("[name='p3']").val());
        let p12 = Number($("[name='p12']").val());

        let cp = ((12 * p12) - (3 * p3)) / 9;
        let w = 0.24 * (p3 - p12);

        $("[name='cp']").val(cp.toFixed(0));
        $("[name='w']").val(w.toFixed(0));
    });
    // Calculate BMR - Nordic Nutrition 2012
    $("#calculator_blood").submit(function(e) {
        console.log("Calculate Blood");
        e.preventDefault();

        let formula = $("[name='bloodvolume-formula']").val();
        let gender = $("[name='gender']").val();
        let age = Number($("[name='age']").val());
        let weight = Number($("[name='weight']").val());
        let height = Number($("[name='height']").val());

        let b = blood.Blood(gender, age, weight, height);

        $("[name='bloodvolume']").val(b.getVolume().toFixed(0));
    });
    // Calculate BMR - Nordic Nutrition 2012
    $("#calculator_lung").submit(function(e) {
        console.log("Calculate Blood");
        e.preventDefault();
      let gender = $("[name='gender']").val();
      let age = Number($("[name='age']").val());
      let height = Number($("[name='height']").val());

      let b = lung.Lung(gender, height, age);

        $("[name='vital_capacity']").val(b.getVitalCapacity().toFixed(0));
    });
    $("#activity_intense, #activity_moderat, #activity_light, #activity_standing, #activity_sleeping").change(function(e) {
      let min_day = 24 * 60;
      let activity_intense = document.getElementById('activity_intense').value;
      let activity_moderat = document.getElementById('activity_moderat').value;
      let activity_light = document.getElementById('activity_light').value;
      let activity_standing = document.getElementById('activity_standing').value;
      let activity_sleeping = document.getElementById('activity_sleeping').value;

      let activity_sitting = min_day - activity_intense - activity_moderat - activity_light - activity_standing - activity_sleeping;
        $("[name='activity_sitting']").val(activity_sitting);
    });
    // Calculate BMR
    $("#calculator_bmr_advanced_pal").submit(function(e) {
        console.log("Calculate BMR - Advanced");
        e.preventDefault();

      let formula = $("[name='bmr-formula']").val();
      let gender = $("[name='sex']:checked").val();
      let age = Number($("[name='age']").val());
      let weight = Number($("[name='weight']").val());
      let height = Number($("[name='height']").val());

      let b;

        if (formula == 'schofield') {
            b = schofield.BMRSchofield(gender, age, weight);
        } else if (formula == 'benedict_harris') {
            b = bmr_benedict_harris.BMRBenedictHarris(gender, age, weight, height);
        } else {
            b = ree.BMRNordicNutritionRecommendations2012(gender, age, weight, height);
        }

      let basicMeta = b.getBasicMetabolicRate();

      let min_day = 24 * 60;
      let activity_intense = document.getElementById('activity_intense').value;
      let activity_moderat = document.getElementById('activity_moderat').value;
      let activity_light = document.getElementById('activity_light').value;
      let activity_standing = document.getElementById('activity_standing').value;
      let activity_sleeping = document.getElementById('activity_sleeping').value;

      let activity_sitting = min_day - activity_intense - activity_moderat - activity_light - activity_standing - activity_sleeping;

        // Estimated MET-values used
      let met_intense = 10;
      let met_moderat = 7;
      let met_light = 4;
      let met_standing = 2;
      let met_sleeping = 0.9;
      let met_sitting = 1.2;

        /*
        // My own PAL calculation - there is no weight factor
      let pal_intense = (met_intense * (activity_intense / 1440));
      let pal_moderat = (met_moderat * (activity_moderat / 1440));
      let pal_light = (met_light * (activity_light / 1440));
      let pal_standing = (met_standing * (activity_standing / 1440));
      let pal_sleeping = (met_sleeping * (activity_sleeping / 1440));
      let pal_sitting = (met_sitting * (activity_sitting / 1440));

      let pal = pal_intense + pal_moderat + pal_light + pal_standing + pal_sleeping + pal_sitting;
        */
        /*
        // Calculate MET-energy
      let met_energy_intense = weight * (met_intense * (activity_intense / 60));
      let met_energy_moderat = weight * (met_moderat * (activity_moderat / 60));
      let met_energy_light = weight * (met_light * (activity_light / 60));
      let met_energy_standing = weight * (met_standing * (activity_standing / 60));
      let met_energy_sitting = weight * (met_sitting * (activity_sitting / 60));

      let met_energy = met_energy_intense + met_energy_moderat + met_energy_light + met_energy_standing + met_energy_sitting;
        */

        // Calculate PAL from Gerrior
      let bmr_kcal = basicMeta / 4.2; // BMR is in kcal in formula
      let pal_intense = ((met_intense - 1) * ((1.15 / 0.9) * activity_intense) / 1440) / (bmr_kcal / (0.0175 * 1440 * weight));
      let pal_moderat = ((met_moderat - 1) * ((1.15 / 0.9) * activity_moderat) / 1440) / (bmr_kcal / (0.0175 * 1440 * weight));
      let pal_light = ((met_light - 1) * ((1.15 / 0.9) * activity_light) / 1440) / (bmr_kcal / (0.0175 * 1440 * weight));
      let pal_standing = ((met_standing - 1) * ((1.15 / 0.9) * activity_standing) / 1440) / (bmr_kcal / (0.0175 * 1440 * weight));
      let pal_sleeping = ((met_sleeping - 1) * ((1.15 / 0.9) * activity_sleeping) / 1440) / (bmr_kcal / (0.0175 * 1440 * weight));
      let pal_sitting = ((met_sitting - 1) * ((1.15 / 0.9) * activity_sitting) / 1440) / (bmr_kcal / (0.0175 * 1440 * weight));
      let pal_gerrior = 1.1 + pal_intense + pal_moderat + pal_light + pal_standing + pal_sleeping + pal_sitting;

        // Using Gerrior PAL calculations as constant
      let activityConstant = pal_gerrior;

      let vedligehold = basicMeta * activityConstant;

        $("[name='pal_gerrior']").val(pal_gerrior);
        $("[name='activity_sitting']").val(activity_sitting);
        $("[name='bmr']").val(basicMeta + " kJ");
        $("[name='equilibrium']").val(vedligehold + " kJ");

    });
    // Calculate BMR - Nordic Nutrition 2012
    $("#calculator_riegels").submit(function(e) {
        console.log("Riegels formular");
        e.preventDefault();

      let dist = Number($("[name='dist']").val());
      let hours = Number($("[name='hours']").val());
      let minutes = Number($("[name='minutes']").val());
      let seconds = Number($("[name='seconds']").val());

      let b = riegel.Riegel(dist, hours, minutes, seconds);

        $("#results").html(b.getTableWithEndTimes());
    });
    // Calculate BMR - Nordic Nutrition 2012
    $("#calculator_weightloss_running_time").submit(function(e) {
        console.log("Running time weight loss");
        e.preventDefault();

      let weight = Number($("[name='weight']").val());
      let weight_change = Number($("[name='change']").val());
      let hours = Number($("[name='hours']").val());
      let minutes = Number($("[name='minutes']").val());
      let seconds = Number($("[name='seconds']").val());
      let change_effect = Number($("[name='change_effect']").val());

      let b = running_weightchange.RunningWeightLoss(weight, weight_change, change_effect / 100);

        $("#result").val(b.getEstimatedFinishTime(hours, minutes, seconds));
    });
    // Calculate VMax
    $("#calculator_vmax_bike_vmax").submit(function(e) {
        console.log("Calculate Vmax from VO2");
        e.preventDefault();
      let vo2max = Number($("[name='vo2max']").val());

      let b = vmax_bike.Vmax(vo2max);

        $("[name='vmax']").val(b.getVmax());
    });
    // Calculate VMax intervals biking
    $("#calculator_vmax_biking_intervals").submit(function(e) {
        console.log("Calculate Vmax for Biking");
        e.preventDefault();

      let vmax = Number($("[name='biking_vmax_program']").val());
      let tmax_min = Number($("[name='biking_tmax_min']").val());
      let tmax_sec = Number($("[name='biking_tmax_sec']").val());
      let warmup_percentage = Number($("[name='biking_warmup_percentage']").val());
      let tmax_percentage = Number($("[name='biking_tmax_percentage']").val());
      let vmax_pause_percentage = Number($("[name='biking_vmax_pause_percentage']").val());
      let tmax_pause_percentage = Number($("[name='biking_tmax_pause_percentage']").val());

      let b = vmax_intervals.VmaxIntervals(vmax, tmax_min, tmax_sec);

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

      let vmax = Number($("[name='running_vmax_program']").val());
      let tmax_min = Number($("[name='running_tmax_min']").val());
      let tmax_sec = Number($("[name='running_tmax_sec']").val());
      let warmup_percentage = Number($("[name='running_warmup_percentage']").val());
      let tmax_percentage = Number($("[name='running_tmax_percentage']").val());
      let vmax_pause_percentage = Number($("[name='running_vmax_pause_percentage']").val());
      let tmax_pause_percentage = Number($("[name='running_tmax_pause_percentage']").val());

      let b = vmax_intervals.VmaxIntervals(vmax, tmax_min, tmax_sec);

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

      let hr_rest = Number($("[name='hr_rest']").val());
      let max_hr = Number($("[name='hr_max']").val());
      let hr_work = Number($("[name='hr_work']").val());

      let hr = hr_intensity.HRIntensity(max_hr);
      let result = hr.getHRIntensityFromHeartRateReserve(hr_rest, hr_work);

        $("[name='hrr_intensity']").val(result.toFixed(0));
    });
     // Calculate Intensity
    $("#calculator_hr_intensity_work").submit(function(e) {
        console.log("Calculate HR work intensity HRR");
        e.preventDefault();

      let hr_rest = Number($("[name='hr_rest_form2']").val());
      let hr_max = Number($("[name='hr_max_form2']").val());
      let hr_intensity = Number($("[name='intensity']").val());

      let hr = hr_intensity.HRIntensity(hr_max);
      let result = hr.getHRBasedOnIntensityFromHeartRateReserve(hr_rest, hr_intensity);

        $("[name='hrr_heartrate']").val(result.toFixed(0));
    });
    // Calculate Intensity
    $("#calculator_hr_intensity_from_max").submit(function(e) {
        console.log("Calculate HR work intensity from HRmax");
        e.preventDefault();

      let hr_work = Number($("[name='hr_work_form3']").val());
      let hr_max = Number($("[name='hr_max_form3']").val());

      let hr = hr_intensity.HRIntensity(hr_max);
      let result = hr.getWorkIntensityBasedOnMaxHR(hr_work);

        $("[name='intensity_form3']").val(result.toFixed(0));
    });
     // Calculate YYIR1
    $("#calculator_yyir1").submit(function(e) {
        console.log("Calculate YYIR1");
        e.preventDefault();

      let gender = $("[name='sex']:checked").val();
      let level = Number($("[name='level']").val());
      let shuttles = Number($("[name='shuttles']").val());
      let age = 10;

      let b = yyir1.YYIR1(level, shuttles);

        $("[name='distance_result']").val(b.getDistance());
        $("[name='vo2max_result']").val(b.getFitnessLevel());
        $("[name='status']").val(b.getEvaluation(gender, age));
    });
     // Calculate YYE1
    $("#calculator_beeptest_yye1").submit(function(e) {
        console.log("Calculate YYIR1");
        e.preventDefault();

      let version = $("[name='version']:checked").val();
      let level = Number($("[name='level']").val());
      let shuttles = Number($("[name='shuttles']").val());

      let b = beeptest.BeepTest(level, shuttles, version);

        $("[name='distance_result']").val(b.getDistance());
        $("[name='vo2max_result']").val(b.getFitnessLevel());
        $("[name='totalshuttles_result']").val(b.getTotalShuttles());
    });
     // Pushups
    $("#calculator_pushups").submit(function(e) {
        console.log("Calculate Pushups");
        e.preventDefault();

      let gender = $("[name='gender']:checked").val();
      let age = Number($("[name='age']").val());
      let repetitions = Number($("[name='repetitions']").val());

      let p = pushup.Pushup(gender, age, repetitions);

        $("[name='population_average']").val(p.getPopulationAverage());
        $("[name='score']").val(p.getScore());
        $("[name='rating']").val(p.getRating());
    });
    // Calculate Wilks
    $("#calculator_wilksscore").submit(function(e) {
        console.log("Calculate Wilks Score");
        e.preventDefault();

      let gender = $("[name='gender']:checked").val();
      let bodyweight = Number($("[name='bodyweight']").val());
      let lifted = Number($("[name='lifted']").val());

      let wilksScore = wilks.calculateWilksScore(gender, bodyweight, lifted);

        $("[name='wilksscore']").val(wilksScore.toFixed(1));
    });
    // Calculate IPF
    $("#calculator_ipf").submit(function(e) {
        console.log("Calculate IPF Score");
        e.preventDefault();

      let gender = $("[name='ipf_gender']:checked").val();
      let bodyweight = Number($("[name='ipf_bodyweight']").val());
      let lifted = Number($("[name='ipf_lifted']").val());
      let event = $("[name='ipf_event']").val();
      let equipment = $("[name='ipf_equipment']").val();
      let age = Number($("[name='ipf_age']").val());

      let ipf_points = ipfpoints.IPFPoint(gender, bodyweight, lifted, event, equipment);

      let mc = mcculloch.McCulloch(age);
      let age_adjusted;
        if (mc.getCoefficient() != "") {
            age_adjusted = ipf_points.getPoints() * mc.getCoefficient();
        } else {
            age_adjusted = ipf_points.getPoints();
        }

        $("[name='ipf_points']").val(ipf_points.getPoints().toFixed(2));
        // $("[name='ipf_dots']").val(ipf_points.getDots().toFixed(2));
        $("[name='mcculloch_ipf_points']").val(age_adjusted.toFixed(2));
    });
     // Calculate Karvonen Intensity
    $("#calculator_hrzones_karvonen").submit(function(e) {
        console.log("Calculate Karvonen Intensity Zones");
        e.preventDefault();

      let min_hr = Number($("#karvonen_min_hr").val());
      let max_hr = Number($("#karvonen_max_hr").val());

      let k = karvonen.Karvonen(min_hr, max_hr);
      let hrr = max_hr - min_hr;

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
        $("#karvonen_hrr").val(hrr);
    });
    $("#calculator_hrzones_friel").submit(function(e) {
        console.log("Calculate Friel Intensity Zones");
        e.preventDefault();

      let lthr = Number($("#friel_lthr").val());

        $("#friel_zone1_b").val((0.75 * lthr).toFixed(0));
        $("#friel_zone2_a").val((0.75 * lthr).toFixed(0));
        $("#friel_zone2_b").val((0.85 * lthr).toFixed(0));
        $("#friel_zone3_a").val((0.85 * lthr).toFixed(0));
        $("#friel_zone3_b").val((0.95 * lthr).toFixed(0));
        $("#friel_zone4_a").val((0.95 * lthr).toFixed(0));
        $("#friel_zone4_b").val((1.02 * lthr).toFixed(0));
        $("#friel_zone5_a").val((1.02 * lthr).toFixed(0));
        $("#friel_zone5_b").val('Maxpuls');
    });
    $("#calculator_hrzones_maxhr").submit(function(e) {
        console.log("Calculate Maxhr Intensity Zones");
        e.preventDefault();

      let maxhr = Number($("#maxhr_max_hr").val());

        $("#maxhr_zone1_a").val((0.65 * maxhr).toFixed(0));
        $("#maxhr_zone1_b").val((0.70 * maxhr).toFixed(0));
        $("#maxhr_zone2_a").val((0.70 * maxhr).toFixed(0));
        $("#maxhr_zone2_b").val((0.80 * maxhr).toFixed(0));
        $("#maxhr_zone3_a").val((0.80 * maxhr).toFixed(0));
        $("#maxhr_zone3_b").val((0.90 * maxhr).toFixed(0));
        $("#maxhr_zone4_a").val((0.88 * maxhr).toFixed(0));
        $("#maxhr_zone4_b").val((0.94 * maxhr).toFixed(0));
        $("#maxhr_zone5_a").val((0.94 * maxhr).toFixed(0));
        $("#maxhr_zone5_b").val(maxhr);
    });
    $("#calculator_vo2max_distance_test").submit(function(e) {
        console.log("Calculate Distance");
        e.preventDefault();

        let hours = Number($("#tid_hours").val());
        let min = Number($("#tid_min").val());
        let sek = Number($("#tid_sek").val());
        let distance = Number($("#distance").val());

        min = min + (hours * 60);
        distance = distance / 1000;

        let c = running_distance_vo2.RunningDistanceVO2();

        $("#kondital").val(c.getEstimatedFitnessLevel(min, sek, distance));
    });
    $("#calculator_velocity").submit(function(e) {
        console.log("Calculate velocity");
        e.preventDefault();

        let min = Number($("[name='min']").val());
        let sec = Number($("[name='sec']").val());
        let distance = Number($("[name='distance']").val());

        let c = running.Running();

        $("#velocity_kmt").val(c.getKilometersPrHour(distance, min, sec).toFixed(2));
        $("#velocity_ms").val(c.getMeterPerSecond(distance, min, sec).toFixed(2));
        $("#velocity_min_km").val(c.getTimePrKilometer(distance, min, sec));
    });
    $("#calculator_velocity_speedlight").submit(function(e) {
      console.log("Calculate speedlight");
      e.preventDefault();

      let min = 0;
      let sec = Number($("[name='sec']").val());
      let hd = Number($("[name='hundrededele']").val());
      let distance = Number($("[name='distance']").val()) / 1000;

      let c = running.Running();

      $("#velocity_kmt").val(c.getKilometersPrHour(distance, min, sec, hd).toFixed(2));
      $("#velocity_ms").val(c.getMeterPerSecond(distance, min, sec, hd).toFixed(2));
  });
  $("#calculator_velocity_speedlight_advanced").submit(function(e) {
    console.log("Calculate speedlight Advanced");
    e.preventDefault();

    let min = 0;
    let sec_1 = Number($("[name='sec_1']").val());
    let hd_1 = Number($("[name='hundrededele_1']").val());
    let distance_1 = Number($("[name='distance_1']").val()) / 1000;

    console.log("Calculate:" + sec_1 + ":" + hd_1 + " - " + distance_1);

    let c = running.Running();

    $("#velocity_kmt_1").val(c.getKilometersPrHour(distance_1, min, sec_1, hd_1).toFixed(2));
    $("#velocity_ms_1").val(c.getMeterPerSecond(distance_1, min, sec_1, hd_1).toFixed(2));

    let sec_2 = Number($("[name='sec_2']").val());
    let hd_2 = Number($("[name='hundrededele_2']").val());
    let distance_2 = Number($("[name='distance_2']").val()) / 1000;

    console.log("Calculate:" + sec_2 + ":" + hd_2 + " - " + distance_2);

    $("#velocity_kmt_2").val(c.getKilometersPrHour(distance_2 - distance_1, min, sec_2 - sec_1, hd_2 - hd_1).toFixed(2));
    $("#velocity_ms_2").val(c.getMeterPerSecond(distance_2 - distance_1, min, sec_2 - sec_1, hd_2 - hd_1).toFixed(2));

    let sec_3 = Number($("[name='sec_3']").val());
    let hd_3 = Number($("[name='hundrededele_3']").val());
    let distance_3 = Number($("[name='distance_3']").val()) / 1000;

    console.log("Calculate:" + sec_3 + ":" + hd_3 + " - " + distance_3);

    $("#velocity_kmt_3").val(c.getKilometersPrHour(distance_3 - distance_2, min, sec_3 - sec_2, hd_3 - hd_2).toFixed(2));
    $("#velocity_ms_3").val(c.getMeterPerSecond(distance_3 - distance_2, min, sec_3 - sec_2, hd_3 - hd_2).toFixed(2));

    let sec_4 = Number($("[name='sec_4']").val());
    let hd_4 = Number($("[name='hundrededele_4']").val());
    let distance_4 = Number($("[name='distance_4']").val()) / 1000;

    console.log("Calculate:" + sec_4 + ":" + hd_4 + " - " + distance_4);

    $("#velocity_kmt_4").val(c.getKilometersPrHour(distance_4 - distance_3, min, sec_4 - sec_3, hd_4 - hd_3).toFixed(2));
    $("#velocity_ms_4").val(c.getMeterPerSecond(distance_4 - distance_3, min, sec_4 - sec_3, hd_4 - hd_3).toFixed(2));

    $("#velocity_kmt_advanced").val(c.getKilometersPrHour(distance_4, min, sec_4, hd_4).toFixed(2));
    $("#velocity_ms_advanced").val(c.getMeterPerSecond(distance_4, min, sec_4, hd_4).toFixed(2));
  });
  $("#calculator_velocity_distance").submit(function(e) {
        console.log("Calculate distance");
        e.preventDefault();

        let min = Number($("[name='dist_min']").val());
        let sec = Number($("[name='dist_sec']").val());
        let velocity = Number($("[name='dist_velocity']").val());

        let c = running.Running();

        $("#dist_distance").val(c.getDistanceFromTimeAndVelocity(min, sec, velocity).toFixed(1));
    });
    $("#calculator_kipchoge_challenge").submit(function(e) {
      console.log("Calculate time");
      e.preventDefault();

      let velocity = Number($("[name='velocity']").val());

      let run = running.Running();

      let time, min, sec;

      time = run.getTimeFromDistanceAndVelocity(0.2, velocity);
      min = Math.floor(time);
      sec = (time - min) * 60;

      $("[name='t200']").val(min + ':' + sec.toFixed(0));

      time = run.getTimeFromDistanceAndVelocity(0.4, velocity);
      min = Math.floor(time);
      sec = (time - min) * 60;

      $("[name='t400']").val(min + ':' + sec.toFixed(0));

      time = run.getTimeFromDistanceAndVelocity(0.6, velocity);
      min = Math.floor(time);
      sec = (time - min) * 60;

      $("[name='t600']").val(min + ':' + sec.toFixed(0));

      time = run.getTimeFromDistanceAndVelocity(0.8, velocity);
      min = Math.floor(time);
      sec = (time - min) * 60;

      $("[name='t800']").val(min + ':' + sec.toFixed(0));

      time = run.getTimeFromDistanceAndVelocity(1, velocity);
      min = Math.floor(time);
      sec = (time - min) * 60;

      $("[name='t1000']").val(min + ':' + sec.toFixed(0));

      time = run.getTimeFromDistanceAndVelocity(1.2, velocity);
      min = Math.floor(time);
      sec = (time - min) * 60;

      $("[name='t1200']").val(min + ':' + sec.toFixed(0));

      time = run.getTimeFromDistanceAndVelocity(1.4, velocity);
      min = Math.floor(time);
      sec = (time - min) * 60;

      $("[name='t1400']").val(min + ':' + sec.toFixed(0));

      time = run.getTimeFromDistanceAndVelocity(1.6, velocity);
      min = Math.floor(time);
      sec = (time - min) * 60;

      $("[name='t1600']").val(min + ':' + sec.toFixed(0));

      time = run.getTimeFromDistanceAndVelocity(1.8, velocity);
      min = Math.floor(time);
      sec = (time - min) * 60;

      $("[name='t1800']").val(min + ':' + sec.toFixed(0));

      time = run.getTimeFromDistanceAndVelocity(2, velocity);
      min = Math.floor(time);
      sec = (time - min) * 60;

      $("[name='t2000']").val(min + ':' + sec.toFixed(0));
    });
    $("#calculator_velocity_time").submit(function(e) {
        console.log("Calculate time");
        e.preventDefault();

        let distance = Number($("[name='time_distance']").val());
        let velocity = Number($("[name='time_velocity']").val());

        let c = running.Running();

        let time = c.getTimeFromDistanceAndVelocity(distance, velocity);

        let min = Math.floor(time);
        let sec = (time - min) * 60;

        $("[name='time_min']").val(min);
        $("[name='time_sec']").val(sec.toFixed(0));
    });
    $("#calculator_how_far_interval").submit(function(e) {
        console.log("Calculate velocity");
        e.preventDefault();

        let min = Number($("[name='min']").val());
        let sec = Number($("[name='sec']").val());
        let duration_min = Number($("[name='duration_min']").val());
        let duration_sec = Number($("[name='duration_sec']").val());

        let c = running.Running();

        $("[name='distance_to_run']").val(c.convertMinPerKmToDistanceForDuration(min, sec, duration_min, duration_sec).toFixed(0));
    });
    $("#calculator_convert_kmt_minkm_velocity").submit(function(e) {
        console.log("Calculate velocity");
        e.preventDefault();

        let kmt = Number($("[name='kmt']").val());

        let c = running.Running();

        $("#velocity_convert_minkm").val(c.convertKmtToMinPerKm(kmt));
    });
    $("#calculator_convert_minkm_kmt_velocity").submit(function(e) {
        console.log("Calculate velocity");
        e.preventDefault();

        let min = Number($("[name='minkm_kmt_min']").val());
        let sec = Number($("[name='minkm_kmt_sec']").val());

        let c = running.Running();

        $("#velocity_convert_kmt").val(c.convertMinPerKmToKmt(min, sec));
    });
    $("#calculator_running_economy").submit(function(e) {
        console.log("Calculate running economy");
        e.preventDefault();

      let weight = Number($("[name='weight']").val());
      let velocity = Number($("[name='velocity']").val());
      let oxygenuptake = Number($("[name='oxygenuptake']").val());

      let c = running_economy.RunningEconomy(weight, oxygenuptake);

        $("#running_economy").val(c.getRunningEconomy(velocity).toFixed(2));
    });
    $("#calculator_oxygen_uptake").submit(function(e) {
        console.log("Calculate oxygen uptake");
        e.preventDefault();

      let weight = Number($("[name='fitness_weight']").val());
      let oxygenuptake = Number($("[name='fitness_oxygenuptake']").val());

      let c = running_economy.RunningEconomy(weight, oxygenuptake);

        $("#fitness_level").val(c.getFitnessLevel().toFixed(2));
    });
     // Calculate Cooper 2400 meter
    $("#calculator_cooper_2400_test").submit(function(e) {
        console.log("Calculate CooperTest 2400");
        e.preventDefault();

      let min = Number($("#tid_min").val());
      let sek = Number($("#tid_sek").val());

      let c = cooper_test.CooperRunning();

        $("#kondital").val(c.getVO22400MeterTest(min, sek));
    });
    // Calculate Cooper 12 min
    $("#calculator_cooper_test").submit(function(e) {
        console.log("Calculate CooperTest");
        e.preventDefault();

      let distance = Number($("#distance").val());

      let c = cooper_test.CooperRunning();

        $("#kondital").val(c.getVO212MinTest(distance).toFixed(0));
    });
    $("#calculator_fat_percent_food").submit(function(e) {
        console.log("Calculate Fat Energy Pct");
        e.preventDefault();

      let kj = Number($("#kj").val());
      let fat = Number($("#fat").val());

      let c = fatenergypct.FatEnergyPct(kj, fat);

        $("#fat_energy_pct").val(c.getFatEnergyPct());
    });
    $("#calculator_waist").submit(function(e) {
        console.log("Calculate Waist");
        e.preventDefault();

      let hip = Number($("#hip").val());
      let waist = Number($("#waist").val());
      let height = Number($("#height").val());

      let c = whr.WaistRatio();

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

},{"../js/bodywater":17,"../js/fatenergypct":25,"../js/flyer-handicap":29,"../js/hr-intensity":31,"../js/rowing-ergrowing":44,"../js/rowing-power-calculator":45,"../js/rowing-vo2":46,"../js/treadmill":62,"../js/waist":65,"../js/walktest-rockport-16":66,"../js/walktest-sixminutes":67,"../js/wattmax":69,"./1rm":3,"./andersen-test":4,"./beeptest":7,"./beeptest-yyir1":6,"./billat":8,"./blood":9,"./bmi":11,"./bmi-evaluation":10,"./bmr-benedict-harris":12,"./bmr-ligevaegt":13,"./bmr-nordic-2012":14,"./bmr-schofield":15,"./bmr-totalenergy-pal":16,"./borg15":18,"./cooper":20,"./cooper-running":19,"./etpunkttest":21,"./fat-pct":24,"./fat-pct-measurements":22,"./fat-pct-navy":23,"./fitness-hr":26,"./fitness-index-23":27,"./fitness-jogging":28,"./how-tall":30,"./ideal-weight":32,"./index100":33,"./inol":34,"./ipf-points":36,"./ipf-points-mcculloch":35,"./jumpreach":37,"./karvonen":38,"./lung":39,"./max-hr":40,"./ponderal-index":41,"./pushup":42,"./riegel":43,"./rpe-strength":47,"./running":55,"./running-distance-vo2":48,"./running-economy":49,"./running-walking":53,"./running-walking-energy.js":50,"./running-walking-leger.js":51,"./running-walking-pandolf.js":52,"./running-weightloss":54,"./skinfold-durnin":56,"./skinfold-lohman":57,"./skinfold-peterson":58,"./skinfold-pollock":59,"./skinfold-slaughter":60,"./topunkttest":61,"./vmax":64,"./vmax-intervals":63,"./water-intake":68,"./y-balance":70,"image-map-resizer":1,"wilks-calculator":2}],6:[function(require,module,exports){
let motionsplan = {}

motionsplan.YYIR1 = function(level, shuttles) {
   let distTOTAL = [0, 0, 0, 0, 0, 40, 40, 40, 40, 80, 80, 120, 200, 320, 480, 800, 1120, 1440, 1760, 2080, 2400, 2720, 3040, 3360];
   let distance = distTOTAL[level] + (shuttles * 40 - 40);
   let calcval = (distance * 0.0084 + 36.4);

    function getDistance() {
        return distance;
    }

    function getFitnessLevel() {
        return calcval;
    }

    // Age is not working at the moment in the calculator
    function getEvaluation(sex, age = 10) {
       let ageGroup;
       let normdistance = getDistance();
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

           let male = [
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

           let female = [
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

   let publicAPI = {
        getDistance: getDistance,
        getEvaluation: getEvaluation,
        getFitnessLevel: getFitnessLevel

    };

    return publicAPI;
};

module.exports = motionsplan;

},{}],7:[function(require,module,exports){
let motionsplan = {};

motionsplan.BeepTest = function(level, shuttles, version) {
   let shuttleTOTAL = [0, 7, 8, 8, 8, 9, 9, 10, 10, 11, 11, 11, 12, 12, 13, 13, 13, 14, 14, 15, 15, 16];
   let distTOTAL = [0, 0, 140, 300, 460, 620, 800, 980, 1180, 1380, 1600, 1820, 2040, 2280, 2520, 2780, 3040, 3300, 3580, 3860, 4160, 4460];

   let Fract = shuttles / shuttleTOTAL[level];
   let Score = Number(level) + Fract;

    version = version;
   let adjust = 0;
    if (version == "YYE2") {
        adjust = 1180;
    }

   let distance = distTOTAL[level] + (shuttles * 20) - adjust;

   let totalshuttles = distance / 20;

   let calcval = ((0.0028 * Score * Score * Score) - (0.0968 * Score * Score) + (4.5226 * Score) + 5.5137);

    function getDistance() {
        return distance;
    }

    function getTotalShuttles() {
        return totalshuttles;
    }

    function getFitnessLevel() {
        return calcval;
    }

   let publicAPI = {
        getDistance: getDistance,
        getTotalShuttles: getTotalShuttles,
        getFitnessLevel: getFitnessLevel
    };

    return publicAPI;
};

module.exports = motionsplan;

},{}],8:[function(require,module,exports){
let motionsplan = {}

motionsplan.Billat = function(distance) {
  let dist = distance;
  let vel = dist / 360;
  
  function getVelocity() {
    return vel;
  }

  let tdist = Math.ceil(dist / 200) * 100;
  let d30 = Math.ceil(dist / 12);
  let r30 = Math.ceil(d30 / 2);
  let d60 = d30 * 2;
  let r60 = r30 * 2;

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

  let ttime = tdist / vel;
  let mins = Math.floor(ttime / 60);
  
  function getMinutes3min() {
    return mins;    
  }
  
  function getSeconds3min() {
    return Math.ceil(ttime - (60 * mins));
  }
  
  function getTimePr400Meter3min() {
    return Math.ceil(400 / vel);
  }

  let publicAPI = {
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

},{}],9:[function(require,module,exports){
let motionsplan = {};

motionsplan.Blood = function(sex, weight, height, age) {
  let h = height / 100;
  let w = weight;

  function isMale() {
    if (sex == "male") {
      return true;
    }
    return false;
  }
  
  function getVolume() {
    return getNadler();
  }

  function getNadler() {
    if (isMale()) {
      return 0.3669 * Math.pow(h, 3) + 0.03219 * w + 0.6041;
    }
    return 0.3561 * Math.pow(h, 3) + 0.03308 * w + 0.1833;
  }

  let publicAPI = {
    getVolume : getVolume

  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
let motionsplan = {};

motionsplan.BMI = function(h, w) {

  h = h = h / 100;
  w = w;

  function getBMI() {
    return w / (h * h);
  }

  let publicAPI = {
    getBMI : getBMI
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],12:[function(require,module,exports){
let motionsplan = {};

motionsplan.BMRBenedictHarris = function(sex, age, weight, height) {
    age = parseInt(age);
    weight = parseInt(weight);
    height = parseInt(height); // convert to meters
    sex = sex;

    function getBasicMetabolicRate() {
       let bmr;
        if (sex == "male") {
            bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
        } else {
            bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
        }
        return bmr * 4.184;
            
    }

   let publicAPI = {
        getBasicMetabolicRate : getBasicMetabolicRate
    };

    return publicAPI;

};

module.exports = motionsplan;

},{}],13:[function(require,module,exports){
let motionsplan = {};

motionsplan.BMREquilibrium = function() {
    function getBalance(tee, intake) {
        return (intake - tee);
    }

    function getMaximalWeightChange(change, days = 1) {
       let fat_energy = 38000; // pr. kg
       let protein_energy = 17000; // pr. kg
        if (change < 0) {
            return (change * -1 / fat_energy) * days;
        } 
        
        if (change == 0) {
            return 0;
        } 

        return (change / protein_energy) * days;
    }

   let publicAPI = {
        getMaximalWeightChange : getMaximalWeightChange,
        getBalance : getBalance
    };

    return publicAPI;

};

module.exports = motionsplan;

},{}],14:[function(require,module,exports){
let motionsplan = {};

/**
 * Based on Nordic Nutrition Recommendations 2012
 */
motionsplan.BMRNordicNutritionRecommendations2012 = function(sex, age, weight, height = 0) {
   let bmr;
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

   let publicAPI = {
        getBasicMetabolicRate : getBasicMetabolicRate,
        getRestingEnergyExpenditure : getRestingEnergyExpenditure
    };

    return publicAPI;
};

module.exports = motionsplan;

},{}],15:[function(require,module,exports){
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

   let publicAPI = {
        getBasicMetabolicRate: getBasicMetabolicRate
    };

    return publicAPI;

};

module.exports = motionsplan;

},{}],16:[function(require,module,exports){
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

   let publicAPI = {
        getRestingEnergyExpenditure: getRestingEnergyExpenditure,
        getTotalEnergyExpenditure: getTotalEnergyExpenditure,
        getPhysicalActivityLevel: getPhysicalActivityLevel
    };

    return publicAPI;

};

module.exports = motionsplan;

},{}],17:[function(require,module,exports){
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

  let publicAPI = {
    getTotalBodyWater : getTotalBodyWater,
    getPercent : getPercent

  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],18:[function(require,module,exports){
let motionsplan = {}

motionsplan.Borg15 = function(age, weight, watt) {
  let wgt = weight;

  function getMaximalOxygenUptake() {
    // Jeg har brugt tyngdeaccellerationen i Danmark til at udregne 9.816 / 60 s = 0.1636
    return ((1.19 * (watt / 9.816 * 60)) - (15.84 * age) + (13.06 * wgt) + 1365) / 1000;
  }

  function getFitnessLevel() {
    return  (getMaximalOxygenUptake() / wgt) * 1000;
  }

  let publicAPI = {
    getMaximalOxygenUptake : getMaximalOxygenUptake,
    getFitnessLevel : getFitnessLevel
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],19:[function(require,module,exports){
let motionsplan = {};

motionsplan.CooperRunning = function() {

  // time in minutes
  function getVO22400MeterTest(min, sek) {
   let time = min + (sek / 60);
    return (483 / time) + 3.5;
  }

  // distance in meters
  function getVO212MinTest(distance) {
    return (distance - 504.9) / 44.73;
  }
  
  // distance in meters
  function getOriginalCooper(distance) {
    distance = distance / 1000;
    return (22.351 * distance) - 11.288;
  }

  let publicAPI = {
    getVO22400MeterTest: getVO22400MeterTest,
    getVO212MinTest: getVO212MinTest,
    getCooperOriginal : getOriginalCooper
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],20:[function(require,module,exports){
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
   let point = getAgePoint() + getHrPoint() + getBloodpressurePoint() + getDiabetesPoint() + getSmokerPoint() + getBMIPoint() + getFitnessPoint();
    return point;
  }

  function getAbsoluteRisk() {
   let point = getRiskPoint();
    
   let point_to_risk = [];
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
   let risk = getAbsoluteRisk();
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

  let publicAPI = {
    getRiskPoint: getRiskPoint,
    getAbsoluteRisk: getAbsoluteRisk,
    getRelativeRisk: getRelativeRisk

  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],21:[function(require,module,exports){
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

  let publicAPI = {
    getMaximalOxygenUptake: getMaximalOxygenUptake,
    getFitnessLevel : getFitnessLevel

  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],22:[function(require,module,exports){
let motionsplan = {};

motionsplan.CalculateFatPercentMeasurements = function() {

  function getFatPercentMenUnder26(upperarm, abdomen, underarm) {
    return ((upperarm * 1.457 + abdomen * 0.5166 - underarm * 2.1376) / 10 - 10.2);
  }

  function getFatPercentMenOver26(hips, abdomen, underarm) {
    return  ((hips * 0.4126 + abdomen * 0.3525 - underarm * 1.182) / 10 - 15.0);
  }

  function getFatPercentWomenUnder26(abdomen, thigh, underarm) {
    return ((abdomen * 0.5262 + thigh * 0.8191 - underarm * 1.6972) / 10 - 19.6);
  }

  function getFatPercentWomenOver26(abdomen, thigh, calf) {
    return ((abdomen * 0.4675 + thigh * 0.4868 - calf * 0.5693) / 10 - 18.4);
  }

  let publicAPI = {
    getFatPercentMenOver26 : getFatPercentMenOver26,
    getFatPercentMenUnder26 : getFatPercentMenUnder26,
    getFatPercentWomenOver26 : getFatPercentWomenOver26,
    getFatPercentWomenUnder26 : getFatPercentWomenUnder26
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],23:[function(require,module,exports){
let motionsplan = {};

/**
 * Also see here
 * https://www.researchgate.net/publication/242017991_Predicting_Body_Composition_in_College_Students_Using_the_Womersley_and_Durnin_Body_Mass_Index_Equation
 */
motionsplan.CalculateFatPercentNavy = function(sex, h, waist, neck, hip = 0) {
  let height = h;
  waist = waist;
  sex = sex;
  hip = hip;
  neck = neck;

  function getFatPercent() {
   let eq;
    if (sex == 'man') {
      eq = (1.0324 - (0.19077 * Math.log10(waist - neck)) + (0.15456 * Math.log10(height)));
    } else {
      eq = (1.29579 - (0.35004 * Math.log10(waist + hip - neck)) + (0.22100 * Math.log10(height)));
    }
    
    return (495/eq) - 450;
  }

  let publicAPI = {
    getFatPercent : getFatPercent
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],24:[function(require,module,exports){
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
   let fm;
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

  let publicAPI = {
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

},{}],25:[function(require,module,exports){
let motionsplan = {}

motionsplan.FatEnergyPct = function(kj, fat) {
  kj = kj;
  fat = fat;

  function getFatEnergyPct() {
    return  (fat * 38/kj) * 100;
  }

  let publicAPI = {
    getFatEnergyPct : getFatEnergyPct
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],26:[function(require,module,exports){
let motionsplan = {}

motionsplan.CalculateFitnessFromHr = function(hr_max, hr_rest, wgt) {

  function getMaximalOxygenUptake() {
    return getFitnessLevel() * wgt / 1000;
  }

  function getFitnessLevel() {
    return hr_max / hr_rest * 15.3;
  }

  let publicAPI = {
    getMaximalOxygenUptake: getMaximalOxygenUptake,
    getFitnessLevel: getFitnessLevel

  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],27:[function(require,module,exports){
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

  let publicAPI = {
    getIndex23BasedOnVO2max : getIndex23BasedOnVO2max,
    getIndex23BasedOnFitnessLevel : getIndex23BasedOnFitnessLevel,
    getFitnessLevelBasedOnVO2max : getFitnessLevelBasedOnVO2max
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],28:[function(require,module,exports){
let motionsplan = {};

motionsplan.VO2MaxJog = function(sex, age, weight, time, hr) {
  sex = sex;
  weight = weight; // kg
  time = time; // minutes
  hr = hr;
  age = age;

  function getMaximalOxygenUptakeHunt() {
     return 92.91 + 6.50 * sex - 0.141 * weight - 1.562 * time - 0.125 * hr;
  }

  function getMaximalOxygenUptakeGeorge() {
    return 100.5 + 8.344 * sex - 0.1636 * weight - 1.438 * time - 0.1928 * hr;
  }
  
  function getMaximalOxygenUptake() {
    return (getFitnessLevel() * weight / 1000);
  }

  function getFitnessLevel() {
    if (age < 18) {
      return getMaximalOxygenUptakeHunt();
    }
    return getMaximalOxygenUptakeGeorge();
  }

  let publicAPI = {
    getMaximalOxygenUptake: getMaximalOxygenUptake,
    getFitnessLevel : getFitnessLevel

  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],29:[function(require,module,exports){
let motionsplan = {};

/*
distance = race0
age = age0
weight = weight0
gender = gender1 // V3 = men - V4 = women
hour = hour0
minute = minute0
second = second0
*/

motionsplan.FlyerHandicap = function (age, weight, gender) {
  // Original form used weight in lbs
  weight = weight * 2.205;
  
  function computefun(distance, hours, minutes, seconds) {
    // distance
    // <OPTION>5K</OPTION>
    // <OPTION>10K</OPTION>
    // <OPTION>1/2 Marathon</OPTION>
    // <OPTION>Marathon</OPTION>

      var wtadj;
      var ageadj;
      var wtkg;
      var rt;
      wtadj = weight;
      ageadj = age;
  
      if (ageadj < 25) {
        ageadj = 25;
        // document.FrontPage_Form1.age0.value = ageadj;
      }
      rt =
        hours * 3600 +
        minutes * 60 +
        seconds * 1;
      if (distance == '10K') {
        rt = rt / 2;
      } else if (distance == '1/2 Marathon') {
        rt = rt / 4.2195;
      } else if (distance == 'Marathon') {
        rt = rt / 8.439;
      }
      /*
      for (pos = 0; pos <= 1; pos++) {
        if (document.FrontPage_Form1.gender1[pos].checked) {
          gender = pos;
          break;
        }
      }
      */
      if (gender == 'male') {
        if (wtadj < 143) {
          wtadj = 143;
          //document.FrontPage_Form1.weight0.value = wtadj;
        }
        wtkg = wtadj / 2.205;

        //wtkg = wtadj;

        rtadjsec =
          ((59.31 * Math.pow(wtkg, 1.03)) /
            Math.pow(
              (((Math.pow((59.31 * Math.pow(wtkg, 1.03)) / rt, 1 / 1.01) *
                1000) /
                wtkg +
                (ageadj - 25) * 0.26) *
                wtkg) /
                1000,
              1.01
            )) *
          Math.pow(65 / wtkg, 1 / 3);
      } else if (gender == 'female') {
        if (wtadj < 110) {
          wtadj = 110;
          //document.FrontPage_Form1.weight0.value = wtadj;
        }
        wtkg = wtadj / 2.205;

        //wtkg = wtadj;

        rtadjsec =
          ((59.31 * Math.pow(wtkg, 1.03)) /
            Math.pow(
              (((Math.pow((59.31 * Math.pow(wtkg, 1.03)) / rt, 1 / 1.01) *
                1000) /
                wtkg +
                (ageadj - 25) * 0.25) *
                wtkg) /
                1000,
              1.01
            )) *
          Math.pow(50 / wtkg, 1 / 3);
      }
      if (distance == '10K') {
        rtadjsec = rtadjsec * 2;
      } else if (distance == '1/2 Marathon') {
        rtadjsec = rtadjsec * 4.2195;
      } else if (distance == 'Marathon') {
        rtadjsec = rtadjsec * 8.439;
      }
      rtadjhour = rtadjsec / 3600;
      hour = Math.floor(rtadjhour);
      rtadjsec = (rtadjhour - hour) * 3600;
      rtadjmin = rtadjsec / 60;
      min = Math.floor(rtadjmin);
      sec = (rtadjmin - min) * 60;
      sec2 = Math.floor(sec);

      if (sec2 < 10) {
        sec2 = '0' + sec2;
      }

      if (hour < 10) {
        hour = '0' + hour;
      }
      
      return hour + ':' + min + ':' + sec2;
  }

  let publicAPI = {
    getAdjustedTime: computefun,
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],30:[function(require,module,exports){
let motionsplan = {};

motionsplan.HowTall = function(gender, father, mother) {

  function isMale() {
    if (gender == 'male') {
      return true;
    }
    return false;
  }

  function getHeight() {
    if (isMale()) {
      return ((mother + 13) + father)/2;
    }
    
    return ((mother - 13) + father)/2;
  }

  let publicAPI = {
    getHeight : getHeight

  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],31:[function(require,module,exports){
let motionsplan = {}

motionsplan.HRIntensity = function(max_hr) {
  
  function getWorkIntensityBasedOnMaxHR(work_hr) {
    return work_hr / max_hr * 100;
  }

  function getHRBasedOnIntensityFromHeartRateReserve(rest_hr, intensity) {
    return rest_hr * 1 + intensity / 100 * (max_hr - rest_hr);
  }
    
  function getHRIntensityFromHeartRateReserve(rest_hr, work_hr) {
    return (work_hr - rest_hr) / (max_hr - rest_hr) * 100;
  }
  
  let publicAPI = {
    getWorkIntensityBasedOnMaxHR : getWorkIntensityBasedOnMaxHR,
    getHRBasedOnIntensityFromHeartRateReserve : getHRBasedOnIntensityFromHeartRateReserve,
    getHRIntensityFromHeartRateReserve : getHRIntensityFromHeartRateReserve
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],32:[function(require,module,exports){
let motionsplan = {}

motionsplan.IdealWeight = function(height, sex) {
  // Formulas only works for people over 152
  let h = height - 152;
  // let h = (height * 0.0328084 - 5) * 12; // formula is in inches

  function isMale() {
    if (sex == 'man') {
      return true;
    }
    return false;
  }

  function getRobinson() {
    if (isMale()) {
      return 52 + 0.75 * h;
    } 
    return 49 + 0.67 * h;
  }

  function getMiller() {
    if (isMale()) {
      return 56.2 + 0.56 * h;
    } 
    return 53.1 + 0.54 * h;
  }

  function getHamwi() {
    if (isMale()) {
      return 48.0 + 1.06 * h;
    } 
    return 45.5 + 0.87 * h;
  }

  function getDevine() {
    if (isMale()) {
      return 50.0 + 0.91 * h;
    } 
    return 45.5 + 0.91 * h;
  }

  // https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4841935/
  function getPeterson(target_bmi = 22) {
   let hgt = height / 100;
    return (2.2 * target_bmi) + (3.5 * target_bmi * (hgt - 1.5));
  }

  // Based on Zacho BMI Women 22,5 og Man 24,5  
  function getIdealWeightBasedOnBMI(target_bmi = 0) {
   let hgt = height / 100;
    
    if (target_bmi == 0) {
      if (isMale()) {
        target_bmi = 24.5;
      } else {
        target_bmi = 22.5;
      }
    }

    return (hgt * hgt) * target_bmi;
  }

  let publicAPI = {
    getHamwi : getHamwi,
    getDevine : getDevine,
    getMiller : getMiller,
    getRobinson : getRobinson,
    getPeterson : getPeterson,
    getIdealWeightBasedOnBMI : getIdealWeightBasedOnBMI,
    isMale : isMale
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],33:[function(require,module,exports){
let motionsplan = {}

motionsplan.Index100 = function(lifted, body_weight) {

  function getIndex100() {
    return lifted * 986.63 / (1270.4 - 172970 * ((Math.pow(body_weight, -1.3925))));
  }

  let publicAPI = {
    getIndex100 : getIndex100
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],34:[function(require,module,exports){
let motionsplan = {};

motionsplan.INOL= function(reps, intensity) {

  function getIntensity(rm, lifted) {
    return lifted / rm * 100;
  }

  function getINOL() {
    return reps / (100 - intensity);
  }

  let publicAPI = {
    getINOL : getINOL,
    getIntensity : getIntensity
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],35:[function(require,module,exports){
let motionsplan = {};

motionsplan.McCulloch = function(age) {
  age = age;
  
  // McCulloch coefficients for ages 14 to 23 and 40 to 90:
	const mc = [1.23,1.18,1.13,1.08,1.06,1.04,
		1.03,1.02,1.01,1,
		1,1.01,1.02,1.031,1.043,1.055,1.068,1.082,1.097,1.113,
		1.13,1.147,1.165,1.184,1.204,1.225,1.246,1.268,1.291,1.315,
		1.34,1.366,1.393,1.421,1.45,1.48,1.511,1.543,1.576,1.61,
		1.645,1.681,1.718,1.756,1.795,1.835,1.876,1.918,1.961,2.005,
		2.05,2.096,2.143,2.19,2.238,2.287,2.337,2.388,2.44,2.494,2.549];
  
  function getCoefficient() {
   let aa;
    if (age > 13 && age < 24) {
  		return mc[age-14];
  	}
  	else if (age > 39 && age < 91) {
  		return mc[age-30];
  	}
  	else {
  	  return 1;
  	}
  }
	
  let publicAPI = {
    getCoefficient : getCoefficient
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],36:[function(require,module,exports){
let motionsplan = {};

motionsplan.IPFPoint = function(sex, bodyweight, total, event = "SBD", equipment = "Raw") {
  sex = sex;
  let bw = bodyweight;
  total = total;
  event = event;
  equipment = equipment;
  
  function dots_poly(a,b,c,d,e,x) {
   let x2=x*x, x3=x2*x, x4=x3*x;
    return 500.0 / (a*x4+b*x3+c*x2+d*x+e);
  }
  
  function dots_men(bw) {
    bw = Math.min(Math.max(bw, 40.0), 210.0);
    return dots_poly(-0.0000010930,0.0007391293,-0.1918759221,24.0900756,-307.75076, bw);
  }
  
  function dots_women(bw) {
    bw = Math.min(Math.max(bw, 40.0), 150.0);
    return dots_poly(-0.0000010706,0.0005158568,-0.1126655495,13.6175032,-57.96288, bw);
  }

  const PARAMETERS = {
    "M": {
      "Raw": {
        "SBD": [1199.72839, 1025.18162, 0.009210],
        "B": [320.98041, 281.40258, 0.01008]
      },
      "Single-ply": {
        "SBD": [1236.25115, 1449.21864, 0.01644],
        "B": [381.22073, 733.79378, 0.02398]
      }
    },
    "F": {
      "Raw": {
        "SBD": [610.32796, 1045.59282, 0.03048],
        "B": [142.40398, 442.52671, 0.04724]
      },
      "Single-ply": {
        "SBD": [758.63878, 949.31382, 0.02435],
        "B": [221.82209, 357.00377, 0.02937]
      }
    }
  };

  function getDots() {
    return total * ((sex === "M") ? dots_men(bw) : dots_women(bw));
  }

  function getPoints() {
   let params = PARAMETERS[sex][equipment][event];
   let denom = params[0] - (params[1] * Math.exp(-1.0 * params[2] * bw));
   let glp = (denom === 0) ? 0 : Math.max(0, total * 100.0 / denom);
    if (isNaN(glp) || bw < 35) {
      glp = 0;
    }
    return glp;
  }

  let publicAPI = {
    getPoints : getPoints,
    getDots : getDots
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],37:[function(require,module,exports){
let motionsplan = {};

motionsplan.JumpReach = function(formula = "harman", jump_height, body_mass, height = 0) {
  height = height;
  body_mass = body_mass;
  jump_height = jump_height;
  let average_power = "n/a";
  let peak_power = "n/a";
  let papw = "n/a";

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

  function getAveragePower() {
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

  let publicAPI = {
    getAveragePower : getAveragePower,
    getPeakPower : getPeakPower,
    getPapw : getPapw
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],38:[function(require,module,exports){
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

  let publicAPI = {
    getTargetHR: getTargetHR,
    getHeartRateReserve : getHeartRateReserve
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],39:[function(require,module,exports){
let motionsplan = {};

motionsplan.Lung = function(sex, height, age) {
  height = height;

  function isMale() {
    if (sex == "male") {
      return true;
    }
    return false;
  }

  function getVitalCapacity() {
    if (isMale()) {
      return (27.63 - 0.112 * age) * height;
    }
    return (21.78 - 0.101 * age) * height;
  }

  let publicAPI = {
    getVitalCapacity : getVitalCapacity

  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],40:[function(require,module,exports){
let motionsplan = {};

motionsplan.EstimateMaxHr = function(age, formula = "tanaka") {

  function getMaxHr() {
    if (formula == "aastrand") {
      return getAastrand();
    }
    if (formula == "arena") {
      return getArena();
    }
    if (formula == "nes") {
      return getNes();
    }
    if (formula == "fox") {
      return getFox();
    }
    if (formula == "fairbarn_female") {
      return getFairbarnFemale();
    }
    if (formula == "fairbarn_male") {
      return getFairbarnMale();
    }
    if (formula == "gellish_linear") {
      return getGellishLinear();
    }
    if (formula == "gellish") {
      return getGellish();
    }
    if (formula == "whyte_female") {
      return getWhyteFemale();
    }
    if (formula == "whyte_male") {
      return getWhyteMale();
    }
    if (formula == "inbar") {
      return getInbar();
    }
    if (formula == "gulati") {
      return getGulati();
    }
    if (formula == 'londeree_moeschberger') {
      return getLondereeMoeschberger();
    }
    return getTanaka();
  }
  
  function getTanaka() {
    return (208 - 0.7 * age);
  }
  
  function getAastrand() {
    return 216.6 - 0.84 * age;
  }
  
  function getArena() {
    return 209.3 - 0.72 * age;
  }
  
  function getNes() {
    return 211 - 0.64 * age;
  }
  
  function getFox() {
    return (220 - age);
  }
  
  function getFairbarnFemale() {
    return 201 - 0.63 * age;
  }
  
  function getFairbarnMale() {
    return 208 - 0.8 * age;
  }

  function getWhyteFemale() {
    return 216 - (1.09 * age);
  }
  
  function getWhyteMale() {
    return 202 - (0.55 * age)
  }
  
  function getInbar() {
    return 205.8 - (0.685 * age);
  }

  function getGellish() {
    return 192 - 0.007 * Math.pow(age, 2);
  }

  function getLondereeMoeschberger() {
    return 206.3 - (0.711 * age);
  }

  function getGellishLinear() {
    return (207 - 0.7 * age);
  }
  
  function getGulati() {
    return 206 - 0.88 * age;
  }

  let publicAPI = {
    getMaxHr : getMaxHr
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],41:[function(require,module,exports){
let motionsplan = {};

motionsplan.PonderalIndex = function(h, w) {

  h = h = h / 100;
  w = w;

  function getPonderalIndex() {
    return w / (h * h * h);
  }

  let publicAPI = {
    getPonderalIndex
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],42:[function(require,module,exports){
let motionsplan = {};

motionsplan.Pushup = function(sex, age, repetitions) {
   let A, StandDev, PercRegress, Zscore, PE;
    age = age;
    sex = sex;
    repetitions;
   let score;

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

   let publicAPI = {
        getPopulationAverage : getPopulationAverage,
        getRating: getRating,
        getScore: getScore

    };

    return publicAPI;
}

module.exports = motionsplan;

},{}],43:[function(require,module,exports){
let motionsplan = {};

motionsplan.Riegel = function(dist, hours, minutes, seconds) {
  let calcdist = dist;
  let calchour = hours;
  let calcmin = minutes;
  let calcsec = seconds;

  function getTableWithEndTimes() {
   let res = '';

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
   let d1 = calcdist;
   let h = calchour;
   let m = calcmin;
   let s = calcsec;
   let inputsec = parseInt(h * 3600) + parseInt(m * 60) + parseInt(s * 1);
   let outputsec = Math.round(inputsec * Math.pow((d2 / d1), 1.06));
   let reshour = Math.floor(outputsec / 3600);
   let resmin = Math.floor((outputsec - reshour * 3600) / 60);
   let ressec = Math.floor(outputsec - reshour * 3600 - resmin * 60);
   let kmtime_min = Math.floor((1000 * outputsec / d2) / 60);
   let kmtime_sec = Math.floor((1000 * outputsec / d2) - kmtime_min * 60);

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

  let publicAPI = {
    getRiegels: riegels,
    getTableWithEndTimes: getTableWithEndTimes

  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],44:[function(require,module,exports){
let motionsplan = {};

motionsplan.RowingErgRowing = function (minutes, seconds, splitseconds) {

    let totalseconds = Number(minutes) * 60 + Number(seconds);
    let totalsplitseconds = Number(totalseconds) * 10 + Number(splitseconds);

    let splitseconds_per_500 = totalsplitseconds / 4;
    let seconds_per_500 = splitseconds_per_500 / 10;

    //Calculate watts for 2k
    let pacepowerthree = Math.pow(seconds_per_500 / 500, 3);
    let watts = 2.8 / pacepowerthree;

    //Watts for each test with Jensen percentages
    let watts10sec = watts * 1.73;
    let watts60sec = watts * 1.53;
    let watts2k = watts;
    let watts6k = watts * 0.85;
    let watts60min = watts * 0.76;

    function getWatts10Sec() {
      return watts10sec;
    }

    function getWatts60Sec() {
      return watts60sec;
    }

    function getWatts2k() {
      return watts;
    }

    function getWatts6k() {
      return watts6k;
    }
    
    function getWatts60min() {
      return watts60min;
    }

    /*
    //Assign Watts to Table
    document.getElementById("watts10sec").innerHTML =
      parseFloat(watts10sec).toFixed(1);
    document.getElementById("watts60sec").innerHTML =
      parseFloat(watts60sec).toFixed(1);
    document.getElementById("watts2k").innerHTML =
      parseFloat(watts2k).toFixed(1);
    document.getElementById("watts6k").innerHTML =
      parseFloat(watts6k).toFixed(1);
    document.getElementById("watts60min").innerHTML =
      parseFloat(watts60min).toFixed(1);
  //Calculate Pace
    document.getElementById("pace10sec").innerHTML = calculate_pace(watts10sec);
    document.getElementById("pace60sec").innerHTML = calculate_pace(watts60sec);
    document.getElementById("pace2k").innerHTML = calculate_pace(watts2k);
    document.getElementById("pace6k").innerHTML = calculate_pace(watts6k);
    document.getElementById("pace60min").innerHTML = calculate_pace(watts60min);

    //Calculate Distance/Score
    document.getElementById("score10sec").innerHTML = calculate_distance(
      pace_in_seconds(watts10sec),
      10
    );
    document.getElementById("score60sec").innerHTML = calculate_distance(
      pace_in_seconds(watts60sec),
      60
    );
    document.getElementById("score2k").innerHTML =
      document.getElementById("m").value +
      ":" +
      document.getElementById("s").value +
      "." +
      document.getElementById("ss").value;

    document.getElementById("score6k").innerHTML = calculate_score(
      watts6k,
      6000
    );

    document.getElementById("score60min").innerHTML = calculate_distance(
      pace_in_seconds(watts60min),
      3600
    );
  */

    /*
    //RENDER CHART
    var speedCanvas = document.getElementById("speedChart");

    //Chart.defaults.global.defaultFontFamily = "Lato";
    //Chart.defaults.global.defaultFontSize = 18;

    var speedData = {
      labels: [
        moment().set({ minutes: 0, seconds: 10 }),
        moment().set({ minutes: 1, seconds: 0 }),
        moment().set({
          minutes: score_min_sec(calculate_score(watts2k, 2000), "min"),
          seconds: score_min_sec(calculate_score(watts2k, 2000), "sec"),
        }),
        moment().set({
          minutes: score_min_sec(calculate_score(watts6k, 6000), "min"),
          seconds: score_min_sec(calculate_score(watts6k, 6000), "sec"),
        }),
        moment().set({ minutes: 60, seconds: 00 }),
      ],

      datasets: [
        {
          label: "Watts/Time",
          data: [
            parseFloat(watts10sec).toFixed(1),
            parseFloat(watts60sec).toFixed(1),
            parseFloat(watts2k).toFixed(1),
            parseFloat(watts6k).toFixed(1),
            parseFloat(watts60min).toFixed(1),
          ],
          lineTension: 0.3,
          fill: false,
          borderColor: "blue",
          backgroundColor: "transparent",
          pointBorderColor: "#007bff",
          pointBackgroundColor: "rgba(255,150,0,0.5)",
          // borderDash: [5, 1],
          pointRadius: 5,
          pointHoverRadius: 10,
          pointHitRadius: 30,
          pointBorderWidth: 2,
          pointStyle: "rectRounded",
        },
      ],
    };

    var chartOptions = {
      legend: {
        display: true,
        position: "top",
        labels: {
          boxWidth: 30,
          fontColor: "black",
        },
      },

      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              unit: "minute",
              unitStepSize: 5,
              round: "second",
              tooltipFormat: "mm:ss",
              displayFormats: {
                minute: "mm:ss",
              },
            },
            scaleLabel: {
              display: true,
              labelString: "Time MM:SS",
              fontColor: "grey",
            },
          },
        ],

        yAxes: [
          {
            gridLines: {
              color: "black",
              // borderDash: [2, 5],
            },
            scaleLabel: {
              display: true,
              labelString: "Watts (W)",
              fontColor: "grey",
            },
          },
        ],
      },
    };

    var lineChart = new Chart(speedCanvas, {
      type: "line",
      data: speedData,
      options: chartOptions,
    });
  }

  */

  function getPaceFromWatts(watts) {
    let paceinseconds = Math.cbrt(2.8 / watts) * 500;
    let minutes = Math.floor(paceinseconds / 60);
    let seconds = paceinseconds - minutes * 60;
    return minutes + ":" + parseFloat(seconds).toFixed(1);
  }

  /*
  function score_min_sec(score, element) {
    console.log(score);
    var arr = score.split(":");

    if (element == "min") return arr[0];
    else return arr[1];
  }

  function getPaceFromWattsInSeconds(watts) {
    return Math.cbrt(2.8 / watts) * 500;
  }

  function calculate_score(watts, distance) {
    split = pace_in_seconds(watts);

    if (distance == 6000) time = split * (6000 / 500);
    else time = split * (2000 / 500);

    scoreminutes = Math.floor(time / 60);
    scoreseconds = time - scoreminutes * 60;

    return scoreminutes + ":" + parseFloat(scoreseconds).toFixed(1);
  }

  function calculate_distance(pace, time) {
    return parseFloat((time / pace) * 500).toFixed(1);
  }

  function sports_format(tenths) {
    hours = Math.floor(tenths / 36000);
    tenths -= hours * 36000;

    minutes = Math.floor(tenths / 600);
    tenths -= minutes * 600;

    seconds = Math.floor(tenths / 10);
    tenths -= seconds * 10;

    return hours + ":" + minutes + "." + seconds;
  }
  */

  let publicAPI = {
    getPaceFromWatts : getPaceFromWatts,
    getWatts10Sec : getWatts10Sec,
    getWatts60Sec : getWatts60Sec,
    getWatts2k : getWatts2k,
    getWatts6k : getWatts6k,
    getWatts60min : getWatts60min
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],45:[function(require,module,exports){
let motionsplan = {}

// https://www.concept2.com/indoor-rowers/training/calculators/watts-calculator
motionsplan.RowingPowerCalculator = function() {

  function getPaceFromWatts(watts) {
    // return ³√(2.80/watts);
  }

  // distance in meters
  function getPaceFromTimeAndDistance(distance, min, sec) {
    return (min * 60 + sec) / distance;
  }

  // Pace m/s
  function getWattsFromPace(pace) {
    return 2.80 / Math.pow(pace, 3);
  }

  let publicAPI = {
    getPaceFromTimeAndDistance : getPaceFromTimeAndDistance,
    getPaceFromWatts : getPaceFromWatts,
    getWattsFromPace : getWattsFromPace
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],46:[function(require,module,exports){
let motionsplan = {}

// weight in kg
// velocity in km/t
// oxygenuptake in L O2 / min
motionsplan.RowingVO2 = function(WM, gender = 'male') {

  function isMale() {
    if (gender == 'male') {
      return true;
    }
    return false;
  }

  function getVO2() {
      if (isMale()) {
        return 1.682 + 0.0097 * WM;
      }
      return 1.631 + 0.0088 * WM;
  }

  /**
   * @return float (ml/kg/min)
   */
  function getFitnessLevel(weight) {
    return getVO2() / weight * 1000;
  }

  let publicAPI = {
    getVO2 : getVO2,
    getFitnessLevel : getFitnessLevel
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],47:[function(require,module,exports){
let motionsplan = {};

motionsplan.RPEStrength = function (have_weight, have_reps, have_rpe) {

  // @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-v3-or-Later

  // https://www.plsource.org/rpe-calc/

  // This is a translation of Tuchscherer's standard percentage chart into
  // a continuous function. This enables using real numbers for RPEs, like 8.75.
  function percentage(reps, rpe) {
    // Cap the RPE at 10.
    if (rpe > 10) {
      rpe = 10.0;
    }

    // No prediction if failure occurred, or if RPE is unreasonably low.
    if (reps < 1 || rpe < 4) {
      return 0.0;
    }

    // Handle the obvious case early to avoid bound errors.
    if (reps === 1 && rpe === 10.0) {
      return 100.0;
    }

    // x is defined such that 1@10 = 0, 1@9 = 1, 1@8 = 2, etc.
    // By definition of RPE, then also:
    //  2@10 = 1@9 = 1
    //  3@10 = 2@9 = 1@8 = 2
    // And so on. That pattern gives the equation below.
    let x = 10.0 - rpe + (reps - 1);

    // The logic breaks down for super-high numbers,
    // and it's too hard to extrapolate an E1RM from super-high-rep sets anyway.
    if (x >= 16) {
      return 0.0;
    }

    let intersection = 2.92;

    // The highest values follow a quadratic.
    // Parameters were resolved via GNUPlot and match extremely closely.
    if (x <= intersection) {
      let a = 0.347619;
      let b = -4.60714;
      let c = 99.9667;
      return a * x * x + b * x + c;
    }

    // Otherwise it's just a line, since Tuchscherer just guessed.
    let m = -2.64249;
    let b = 97.0955;
    return m * x + b;
  }

  function calc(want_reps, want_rpe) {

    // Ensure that the Weight widgets are sane.
    if (isNaN(want_reps) || want_reps <= 0) return;
    if (Math.floor(want_reps) !== want_reps) return;
    if (isNaN(want_rpe) || want_rpe <= 0) return;

    let e1rm = getE1RM();

    // Calculate the Weight percentage.
    var p2 = percentage(want_reps, want_rpe);
    if (p2 <= 0) return;
    var weight = (e1rm / 100) * p2;

    // Write the Weight
    return weight;
  }

  function getE1RM() {
    // Ensure that the E1RM widgets are sane.
    if (isNaN(have_weight) || have_weight <= 0) return;
    if (isNaN(have_reps) || have_reps <= 0) return;
    if (Math.floor(have_reps) !== have_reps) return;
    if (isNaN(have_rpe) || have_rpe <= 0) return;

    // Calculate the E1RM percentage.
    var p = percentage(have_reps, have_rpe);
    if (p <= 0) return;
    var e1rm = (have_weight / p) * 100;
    if (e1rm <= 0) return;

    return e1rm;
  }

  // @license-end

  let publicAPI = {
    getE1RM : getE1RM,
    getWantWeight : calc,
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],48:[function(require,module,exports){
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
       let kmt = getKilometersPrHour(min, sec, km);
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

   let publicAPI = {
        getEstimatedFitnessLevel: getEstimatedFitnessLevel,
        getKilometersPrHour: getKilometersPrHour,
        getMETBasedOnKmAndKmt: getMETBasedOnKmAndKmt
    };

    return publicAPI;
}

module.exports = motionsplan;

},{}],49:[function(require,module,exports){
let motionsplan = {}

// weight in kg
// velocity in km/t
// oxygenuptake in L O2 / min
motionsplan.RunningEconomy= function(weight, oxygenuptake) {

  let w = weight;
  let o = oxygenuptake;

  /**
   * @param {float} velocity - Velocity.
   * 
   * @return float (ml/kg/min)
   */
  function getRunningEconomy(velocity) {
   let v = velocity;
   let a = getFitnessLevel(); // ml / kg / min
   let b = v / 60;
    return a / b;
  }

  /**
   * @return float (ml/kg/min)
   */
  function getFitnessLevel() {
    return o / w * 1000;
  }

  let publicAPI = {
    getRunningEconomy : getRunningEconomy,
    getFitnessLevel : getFitnessLevel
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],50:[function(require,module,exports){
let motionsplan = {};

// grade in decimal form - 5% incline is 0.05
motionsplan.RunningWalkingEnergyExpenditure = function(type, bw, velocity, grade = 0) {

  // velocity is in km/t - change to m/s
  let m_pr_min = velocity / 3.6 * 60;
  grade = grade / 100;

  function getASCMWalking() {
    // formula returns ml/kg/min
    return (0.1 * m_pr_min) + (1.8 * m_pr_min * grade) + 3.5;
  }

  function getASCMRunning() {
    // formula returns ml/kg/min
    return (0.2 * m_pr_min) + (0.9 * m_pr_min * grade) + 3.5;
  }

  function getCaloriesPrMinute() {
    // ml/kg/min --> L/min = * bw / 1000
    // L/min --> kcal/min = * 5
    if (type == 'running') {
      return getASCMRunning() * bw / 1000 * 5;
    }
    return getASCMWalking() * bw / 1000 * 5;
  }
  
  function getCaloriesPrKilometer() {
   let min_pr_km = 1 / (velocity / 60);
    return getCaloriesPrMinute() * min_pr_km;
  }

  let publicAPI = {
    getCaloriesPrMinute : getCaloriesPrMinute,
    getCaloriesPrKilometer : getCaloriesPrKilometer
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],51:[function(require,module,exports){
let motionsplan = {};

// grade in decimal form - 5% incline is 0.05
motionsplan.RunningWalkingEnergyExpenditureLeger = function(bw, velocity) {

  // velocity is in km/t - change to m/s
  let m_pr_min = velocity / 3.6 * 60;

  // formula returns ml/kg/min
  function getLegerRunning() {
    return 2.209 + 3.1633 * velocity;
  }

  function getCaloriesPrMinute() {
    // ml/kg/min --> L/min = * bw / 1000
    // L/min --> kcal/min = * 5
    return getLegerRunning() * bw / 1000 * 5;
  }
  
  function getCaloriesPrKilometer() {
   let min_pr_km = 1 / (velocity / 60);
    return getCaloriesPrMinute() * min_pr_km;
  }

  let publicAPI = {
    getCaloriesPrMinute : getCaloriesPrMinute,
    getCaloriesPrKilometer : getCaloriesPrKilometer
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],52:[function(require,module,exports){
let motionsplan = {};

// grade in decimal form - 5% incline is 0.05
motionsplan.RunningWalkingEnergyExpenditurePandolf = function(bw, velocity, grade = 0, load = 0) {

  // velocity is in km/t - change to m/s
  let m_pr_sec = velocity / 3.6;

  // returns watt - J/s
  function getPandolfUnloadedWalking() {
    return (1.5 * bw + 1.5 * Math.pow(m_pr_sec, 2) * bw);
    // convert to kcal/min
  }

  function getPandolfLoadedWalking() {
   let n = 1;
    return 1.5 * bw + 2 * ((bw + load) * Math.pow(load/bw, 2)) + n * ((bw + load) * (1.5 * Math.pow(m_pr_sec, 2) + (0.35 * m_pr_sec * grade)));
  }

  function getCaloriesPrMinute() {
    if (grade > 0 || load > 0) {
      return 0.01433075379765 * getPandolfLoadedWalking();
    }
    return 0.01433075379765 * getPandolfUnloadedWalking();
  }
  
  function getCaloriesPrKilometer() {
   let min_pr_km = 1 / (velocity / 60);
    return getCaloriesPrMinute() * min_pr_km;
  }

  let publicAPI = {
    getCaloriesPrMinute : getCaloriesPrMinute,
    getCaloriesPrKilometer : getCaloriesPrKilometer
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],53:[function(require,module,exports){
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

  let publicAPI = {
    getMET : getMET,
    getCaloriesPrMinute : getCaloriesPrMinute,
    getCaloriesPrKilometer : getCaloriesPrKilometer
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],54:[function(require,module,exports){
let motionsplan = {};

motionsplan.RunningWeightLoss = function(weight, weight_change, effect = 0.8) {
  weight = weight;
  weight_change = weight_change * -1;
  effect = effect;

  // løbetid * (startvægt - vægttab * 0.8) / startvægt;
  function getEstimatedFinishTime(hours, minutes, seconds) {
   let h1 = hours;
   let m1 = minutes;
   let s1 = seconds;

    if (h1 == '00') { h1 = 0; }
    if (h1 == '') { h1 = 0; }
    if (m1 == '00') { m1 = 0; }
    if (m1 == '') { m1 = 0; }
    if (s1 == '00') { s1 = 0; }
    if (s1 == '') { s1 = 0; }

   let time1 = parseInt(h1 * 3600) + parseInt(m1 * 60) + parseInt(s1 * 1);
   let output1 = time1 * (weight - weight_change * effect) / weight;

   let h_out = Math.floor(output1 / 3600);
   let m_out = Math.floor((output1 - h_out * 3600) / 60);
   let s_out = Math.floor(output1 - h_out * 3600 - m_out * 60);
    if (h_out < 10) { h_out = '0' + h_out; }
    if (m_out < 10) { m_out = '0' + m_out; }
    if (s_out < 10) { s_out = '0' + s_out; }
    if (h_out == 0) { h_out = '00'; }
    if (m_out == 0) { m_out = '00'; }
    if (s_out == 0) { s_out = '00'; }
    return h_out + ':' + m_out + ':' + s_out;
  }

  let publicAPI = {
    getEstimatedFinishTime: getEstimatedFinishTime
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],55:[function(require,module,exports){
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

    function getKilometersPrHour(km, m, s, hd = 0) {
        // return (km / (s + (m * 60)) * (60 * 60)); // (m * 60 + s) / (60*60)
        hd = hd / 100;
        s = (s + hd) / (60 * 60);
        m = m / 60;

        let seconds = s + m;

        return (km / seconds);
    }

    function getTimePrKilometer(km, m, s) {
        let totalSek = parseInt(m) * 60 + parseInt(s);
        let totalSekPrKm = totalSek / parseFloat(km);
        let minPrKm = parseInt(totalSekPrKm / 60);
        let rest = totalSekPrKm - (minPrKm * 60);
        let sek = rest.toFixed(0);

        if (sek < 10) {
            return minPrKm.toFixed(0) + ":0" + rest.toFixed(0);
        }
        else {
            return minPrKm.toFixed(0) + ":" + rest.toFixed(0);
        }
    }

    function getMeterPerSecond(km, m, s, hd = 0) {
        let velocity = getKilometersPrHour(km, m, s, hd);
        return velocity * 0.2777778;
    }

    function convertMinPerKmToKmt(min, sec) {
        return 60/(min*1+(sec/60));
    }

    function convertKmtToMinPerKm(kmt) {
        let min = 60 / kmt;
        let min_out = Math.floor(min);
        let sec_out = Math.round((min - Math.floor(min)) * 60);
        if (sec_out < 10) {
            sec_out='0'+sec_out;
        }
        return (min_out + ":" + sec_out);
    }

    function convertMinPerKmToDistanceForDuration(min, sec, duration_minutes, duration_seconds) {
        let velocity = convertMinPerKmToKmt(min, sec);
        return velocity * (duration_minutes + (duration_seconds / 60)) / 60 * 1000;
    }

    function getDistanceFromTimeAndVelocity(min, sec, velocity) {
        let time = min + (sec / 60);
        return (velocity * time / 60);
    }

    function getTimeFromDistanceAndVelocity(distance, velocity) {
        return (distance * 60) / velocity;
    }

    let publicAPI = {
        getKilometersPrHour : getKilometersPrHour,
        getTimePrKilometer : getTimePrKilometer,
        convertKmtToMinPerKm : convertKmtToMinPerKm,
        convertMinPerKmToKmt : convertMinPerKmToKmt,
        convertMinPerKmToDistanceForDuration : convertMinPerKmToDistanceForDuration,
        getDistanceFromTimeAndVelocity : getDistanceFromTimeAndVelocity,
        getTimeFromDistanceAndVelocity : getTimeFromDistanceAndVelocity,
        getMeterPerSecond : getMeterPerSecond
    };

    return publicAPI;
}

module.exports = motionsplan;

},{}],56:[function(require,module,exports){
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
   let density;

   let fatsum = getSkinfoldSum();
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

  let publicAPI = {
    getFatFreeMass: getFatFreeMass,
    getBodyFatPercent: getBodyFatPercent,
    getDensity : getDensity,
    getSkinfoldSum : getSkinfoldSum
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],57:[function(require,module,exports){
let motionsplan = {}

motionsplan.SkinfoldLohman = function(sex, triceps, calf) {
  
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
  
  let publicAPI = {
    getBodyFatPercent : getBodyFatPercent
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],58:[function(require,module,exports){
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

  let publicAPI = {
    getFatFreeMass: getFatFreeMass,
    getBodyFatPercent: getBodyFatPercent,
    getSkinfoldSum : getSkinfoldSum
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],59:[function(require,module,exports){
let motionsplan = {}

motionsplan.SkinfoldPollock = function(weight, age) {
  let fatpercent;

  function getBodyFatPercentMale(breast, abdomen, thigh) {
   let fatsum = breast + abdomen + thigh;
   let density = 1.10938 - 0.0008267 * fatsum + 0.0000016 * Math.pow(fatsum, 2) - 0.0002574 * age;
    return fatpercent = (495 / density - 450);
  }

  function getBodyFatPercentFemale(triceps, hip, thigh) {
   let fatsum = triceps + hip + thigh;
   let density = 1.0994921 - 0.0009929 * fatsum + 0.0000023 * Math.pow(fatsum, 2) - 0.0001392 * age;
    return fatpercent = (495 / density - 450);
  }
  
  function getFatFreeMass() {
    return (weight - weight * fatpercent / 100);
  }

  let publicAPI = {
    getBodyFatPercentMale : getBodyFatPercentMale,
    getBodyFatPercentFemale : getBodyFatPercentFemale,
    getFatFreeMass : getFatFreeMass
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],60:[function(require,module,exports){
let motionsplan = {}

motionsplan.SkinfoldSlaughter = function(sex, triceps, subscapular) {
  
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
  
  let publicAPI = {
    getBodyFatPercent : getBodyFatPercent
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],61:[function(require,module,exports){
let motionsplan = {}

motionsplan.ToPunktTest = function(age, weight, max_hr, work1, hr1, work2, hr2) {
  let work_1 = work1;
  let hr_1 = hr1;
  let work_2 = work2;
  let hr_2 = hr2;
  let hr_max = max_hr;

  function getMaximalWork() {
    return ((hr_max - hr_2) * (work_2 - work_1)) / (hr_2 - hr_1) + work_2;
  }

  function getMaximalOxygenUptake() {
   let mechanical_efficiency = 0.23;
   let oxygen_energy = 21100;
   let bmr = 0.25;
    return (getMaximalWork() / mechanical_efficiency * 60 / oxygen_energy + bmr);
  }
  
  function getFitnessLevel() {
    return (getMaximalOxygenUptake() / weight * 1000);
  }

  let publicAPI = {
    getMaximalWork : getMaximalWork,
    getMaximalOxygenUptake: getMaximalOxygenUptake,
    getFitnessLevel : getFitnessLevel
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],62:[function(require,module,exports){
let motionsplan = {};

motionsplan.Treadmill = function(gradient, speed, time, distance, weight) {

  function getMets() {

      let x = gradient; // gradient
      let y = speed; // speed
      let z = time; // time
      let d = distance; // distance
      let m = weight; // weight
  
      y=y;
      y_00=y/1.61;
      d=d;
      d_00=d/1.61;
      m=m;m_00=m/0.454;
      
      if ((y == 0) && (z != 0)){
        y=d/z*60;
        y_00=y/1.61;
      } //y...v(km/h)
      if ((z == 0) && (y != 0)){
        z=d/y*60;
      } //z...time(min)
      if (d == 0){
        d=y*z/60;
        d_00=d/1.61;
      } //d...distance(km)
      
      y0=y+y*x*9/200;
      ymp0=y_00+y_00*x*9/200;
      
      z0=z;
      d0=y0*z/60;
      dm0=ymp0*z/60;
      
      cal=(y0*1000/60+17.5)*z*m/1000;
      fat=cal/7/2;
      fatoz=fat/28.3495;
      mets=cal/m/z*60;
      return mets;
  }

  function calc(){

    let x = gradient; // gradient
    let y = speed; // speed
    let z = time; // time
    let d = distance; // distance
    let m = weight; // weight

    y=y;
    y_00=y/1.61;
    d=d;
    d_00=d/1.61;
    m=m;m_00=m/0.454;
    
    if ((y == 0) && (z != 0)){
      y=d/z*60;
      y_00=y/1.61;
    } //y...v(km/h)
    if ((z == 0) && (y != 0)){
      z=d/y*60;
    } //z...time(min)
    if (d == 0){
      d=y*z/60;
      d_00=d/1.61;
    } //d...distance(km)
    
    y0=y+y*x*9/200;
    ymp0=y_00+y_00*x*9/200;
    
    z0=z;
    d0=y0*z/60;
    dm0=ymp0*z/60;
    
    cal=(y0*1000/60+17.5)*z*m/1000;
    fat=cal/7/2;
    fatoz=fat/28.3495;
    mets=cal/m/z*60;
    kj=4.184*cal;
    kw=kj/3600;
    stb=60*kw;
    dnk=kw*10;
    rice=cal/252;
    beer=cal/203;
    shop=cal/2.5;
    clean=cal/3.8;
    
    cburger=cal/310;
    beer2=cal/153.1;
    cleanning=cal/1.59/m_00*60;
    
    s100=360/y0;  		//100m for sec
    
    m10k=Math.floor(600/y0);		//10K for min
    s10k=((600/y0)-m10k)*60;
    
    
    m21k=21.095*60/y0;	//Half for min
    
    m21kh=Math.floor(m21k/60);
    m21km=Math.floor(m21k-m21kh*60);
    m21ks=((m21k-m21kh*60)-m21km)*60;
    
    m42k=42.195*60/y0;	//Full for min
    m42kh=Math.floor(m42k/60);
    m42km=Math.floor(m42k-m42kh*60);
    m42ks=((m42k-m42kh*60)-m42km)*60;
    myrecord=m42k/60;
    //alert(myrecord);
    record=2.0275/myrecord*100; //record 2:01:39 
  }

  function getKwh() {
    let x = gradient; // gradient
    let y = speed; // speed
    let z = time; // time
    let d = distance; // distance
    let m = weight; // weight

    y=y;
    y_00=y/1.61;
    d=d;
    d_00=d/1.61;
    m=m;
    m_00=m/0.454;
    if ((y == 0) && (z != 0)){
      y=d/z*60;
      y_00=y/1.61;
    } //y...v(km/h)
    if ((z == 0) && (y != 0)){
      z=d/y*60;
    } //z...time(min)
    if (d == 0){
      d=y*z/60;
      d_00=d/1.61;
    } //d...distance(km)
    
    
    y0=y+y*x*9/200;
    ymp0=y_00+y_00*x*9/200;
    
    z0=z;
    d0=y0*z/60;
    dm0=ymp0*z/60;

    cal=(y0*1000/60+17.5)*z*m/1000;
    fat=cal/7/2;
    fatoz=fat/28.3495;
    mets=cal/m/z*60;
    kj=4.184*cal;
    kw=kj/3600;
    return kw;
  }

  function getKj() {
      let x = gradient; // gradient
      let y = speed; // speed
      let z = time; // time
      let d = distance; // distance
      let m = weight; // weight
  
      y=y;
      y_00=y/1.61;
      d=d;
      d_00=d/1.61;
      m=m;
      m_00=m/0.454;
      if ((y == 0) && (z != 0)){
        y=d/z*60;
        y_00=y/1.61;
      } //y...v(km/h)
      if ((z == 0) && (y != 0)){
        z=d/y*60;
      } //z...time(min)
      if (d == 0){
        d=y*z/60;
        d_00=d/1.61;
      } //d...distance(km)
      
      
      y0=y+y*x*9/200;
      ymp0=y_00+y_00*x*9/200;
      
      z0=z;
      d0=y0*z/60;
      dm0=ymp0*z/60;
  
      cal=(y0*1000/60+17.5)*z*m/1000;
      fat=cal/7/2;
      fatoz=fat/28.3495;
      mets=cal/m/z*60;
      kj=4.184*cal;
      return kj;
      kw=kj/3600;
  }

  function getGradientCorrectedDistance() {
    let x = gradient; // gradient
    let y = speed; // speed
    let z = time; // time
    let d = distance; // distance
    let m = weight; // weight

    y=y;
    y_00=y/1.61;
    d=d;
    d_00=d/1.61;
    m=m;
    m_00=m/0.454;
    if ((y == 0) && (z != 0)){
      y=d/z*60;
      y_00=y/1.61;
    } //y...v(km/h)
    if ((z == 0) && (y != 0)){
      z=d/y*60;
    } //z...time(min)
    if (d == 0){
      d=y*z/60;
      d_00=d/1.61;
    } //d...distance(km)
    
    
    y0=y+y*x*9/200;
    ymp0=y_00+y_00*x*9/200;
    z0=z;
    d0=y0*z/60;
    dm0=ymp0*z/60;
    return d0;
  }

  function getGradientCorrectedSpeed() {
    let x = gradient; // gradient
    let y = speed; // speed
    let z = time; // time
    let d = distance; // distance
    let m = weight; // weight

    y=y;
    y_00=y/1.61;
    d=d;
    d_00=d/1.61;
    m=m;
    m_00=m/0.454;
    if ((y == 0) && (z != 0)){
      y=d/z*60;
      y_00=y/1.61;
    } //y...v(km/h)
    if ((z == 0) && (y != 0)){
      z=d/y*60;
    } //z...time(min)
    if (d == 0){
      d=y*z/60;
      d_00=d/1.61;
    } //d...distance(km)
    
    
    y0=y+y*x*9/200;
    ymp0=y_00+y_00*x*9/200;
    
    return y0;

    z0=z;
    d0=y0*z/60;
    dm0=ymp0*z/60;

    cal=(y0*1000/60+17.5)*z*m/1000;
    return cal;
    fat=cal/7/2;
    fatoz=fat/28.3495;
    mets=cal/m/z*60;
    kj=4.184*cal;
    kw=kj/3600;
    stb=60*kw;
    dnk=kw*10;
    rice=cal/252;
    beer=cal/203;
    shop=cal/2.5;
    clean=cal/3.8;
    
    cburger=cal/310;
    beer2=cal/153.1;
    cleanning=cal/1.59/m_00*60;
    
    s100=360/y0;  		//100m for sec
    
    m10k=Math.floor(600/y0);		//10K for min
    s10k=((600/y0)-m10k)*60;
    
    
    m21k=21.095*60/y0;	//Half for min
    
    m21kh=Math.floor(m21k/60);
    m21km=Math.floor(m21k-m21kh*60);
    m21ks=((m21k-m21kh*60)-m21km)*60;
    
    m42k=42.195*60/y0;	//Full for min
    m42kh=Math.floor(m42k/60);
    m42km=Math.floor(m42k-m42kh*60);
    m42ks=((m42k-m42kh*60)-m42km)*60;
    myrecord=m42k/60;
    //alert(myrecord);
    record=2.0275/myrecord*100; //record 2:01:39 
  }

  function getTime() {
    let x = gradient; // gradient
    let y = speed; // speed
    let z = time; // time
    let d = distance; // distance
    let m = weight; // weight

    y=y;
    y_00=y/1.61;
    d=d;
    d_00=d/1.61;
    m=m;
    m_00=m/0.454;
    if ((y == 0) && (z != 0)){
      y=d/z*60;
      y_00=y/1.61;
    } //y...v(km/h)
    if ((z == 0) && (y != 0)){
      z=d/y*60;
    } //z...time(min)
    if (d == 0){
      d=y*z/60;
      d_00=d/1.61;
    } //d...distance(km)
    
    return z;
  }

  function getDistance() {
    let x = gradient; // gradient
    let y = speed; // speed
    let z = time; // time
    let d = distance; // distance
    let m = weight; // weight

    y=y;
    y_00=y/1.61;
    d=d;
    d_00=d/1.61;
    m=m;
    m_00=m/0.454;
    if ((y == 0) && (z != 0)){
      y=d/z*60;
      y_00=y/1.61;
    } //y...v(km/h)
    if ((z == 0) && (y != 0)){
      z=d/y*60;
    } //z...time(min)
    if (d == 0){
      d=y*z/60;
      d_00=d/1.61;
    } //d...distance(km)
    
    return d;
  }

  function getSpeed() {
    let x = gradient; // gradient
    let y = speed; // speed
    let z = time; // time
    let d = distance; // distance
    let m = weight; // weight

    y=y;
    y_00=y/1.61;
    d=d;
    d_00=d/1.61;
    m=m;
    m_00=m/0.454;
    if ((y == 0) && (z != 0)){
      y=d/z*60;
      y_00=y/1.61;
    } //y...v(km/h)
    if ((z == 0) && (y != 0)){
      z=d/y*60;
    } //z...time(min)
    if (d == 0){
      d=y*z/60;
      d_00=d/1.61;
    } //d...distance(km)
    
    return y;
    
    y0=y+y*x*9/200;
    ymp0=y_00+y_00*x*9/200;
    
    z0=z;
    d0=y0*z/60;
    dm0=ymp0*z/60;

    cal=(y0*1000/60+17.5)*z*m/1000;
    return cal;
  }

  function getKcal() {
    let x = gradient; // gradient
    let y = speed; // speed
    let z = time; // time
    let d = distance; // distance
    let m = weight; // weight

    y=y;
    y_00=y/1.61;
    d=d;
    d_00=d/1.61;
    m=m;
    m_00=m/0.454;
    if ((y == 0) && (z != 0)){
      y=d/z*60;
      y_00=y/1.61;
    } //y...v(km/h)
    if ((z == 0) && (y != 0)){
      z=d/y*60;
    } //z...time(min)
    if (d == 0){
      d=y*z/60;
      d_00=d/1.61;
    } //d...distance(km)
    
    
    y0=y+y*x*9/200;
    ymp0=y_00+y_00*x*9/200;
    
    z0=z;
    d0=y0*z/60;
    dm0=ymp0*z/60;

    cal=(y0*1000/60+17.5)*z*m/1000;
    return cal;
    fat=cal/7/2;
    fatoz=fat/28.3495;
    mets=cal/m/z*60;
    kj=4.184*cal;
    kw=kj/3600;
    stb=60*kw;
    dnk=kw*10;
    rice=cal/252;
    beer=cal/203;
    shop=cal/2.5;
    clean=cal/3.8;
    
    cburger=cal/310;
    beer2=cal/153.1;
    cleanning=cal/1.59/m_00*60;
    
    s100=360/y0;  		//100m for sec
    
    m10k=Math.floor(600/y0);		//10K for min
    s10k=((600/y0)-m10k)*60;
    
    
    m21k=21.095*60/y0;	//Half for min
    
    m21kh=Math.floor(m21k/60);
    m21km=Math.floor(m21k-m21kh*60);
    m21ks=((m21k-m21kh*60)-m21km)*60;
    
    m42k=42.195*60/y0;	//Full for min
    m42kh=Math.floor(m42k/60);
    m42km=Math.floor(m42k-m42kh*60);
    m42ks=((m42k-m42kh*60)-m42km)*60;
    myrecord=m42k/60;
    //alert(myrecord);
    record=2.0275/myrecord*100; //record 2:01:39 
  }

  let publicAPI = {
    getKcal : getKcal,
    getMets : getMets,
    getKj : getKj,
    getKwh : getKwh,
    getTime : getTime,
    getSpeed : getSpeed,
    getDistance : getDistance,
    getGradientCorrectedDistance : getGradientCorrectedDistance,
    getGradientCorrectedSpeed : getGradientCorrectedSpeed
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],63:[function(require,module,exports){
let motionsplan = {}

// vo2max i ml
motionsplan.VmaxIntervals = function(vmax, tmax_min, tmax_sec) {
  vmax = vmax;
  tmax_min = tmax_min;
  tmax_sec = tmax_sec;

  let tmax = tmax_min * 60 + tmax_sec;

  function getVelocity(percentage = 60) {
    percentage = percentage / 100;
    return (vmax * percentage).toFixed(2);
  }

  function getTime(percentage = 60) {
    percentage = percentage / 100;
   let min = Math.floor((tmax * percentage) / 60);
   let sec = ((tmax * percentage) - (Math.floor((tmax * percentage) / 60) * 60)).toFixed(0);
    if (sec < 10) {
      sec = '0' + sec;
    }
    return min + ":" + sec;
  }

  let publicAPI = {
    getVelocity : getVelocity,
    getTime : getTime
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],64:[function(require,module,exports){
let motionsplan = {};

// vo2max i ml
motionsplan.Vmax = function(vo2max) {
  vo2max = vo2max;

  function getVmax() {
    return (vo2max * 21 / 60 * 0.23);
  }

  let publicAPI = {
    getVmax : getVmax
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],65:[function(require,module,exports){
let motionsplan = {}

motionsplan.WaistRatio = function() {

  function getWaistHeightRatio(waist, height) {
    return waist / height;
  }

  function getWaistHipRatio(waist, hip) {
    return waist / hip;
  }

  let publicAPI = {
    getWaistHeightRatio : getWaistHeightRatio,
    getWaistHipRatio : getWaistHipRatio
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],66:[function(require,module,exports){
let motionsplan = {};

motionsplan.RockPortWalkingTest = function(min, sec, hr, gender, age, weight) {
  let sex;
  hr = hr;
  gender = gender;
  age = age;
  let weight_lbs = weight * 2.2046226218; // Original formula is in lbs - Kline 1987

  if (gender == "male") {
    sex = 1;
  } else {
    sex = 0;
  }

  // Convert mins/secs to mins and 100ths of mins
  let tm = min;
  let ts = sec / 60;
  let time = tm + ts;

  function getFitnessLevel() {
    return 132.853 - (0.0769 * weight_lbs) - (0.3877 * age) + (6.3150 * sex) - (3.2649 * time) - (0.1565 * hr);
  }
  
  function getMaximalOxygenUptake() {
    return (getFitnessLevel() * weight / 1000);
  }

  let publicAPI = {
    getFitnessLevel : getFitnessLevel,
    getMaximalOxygenUptake : getMaximalOxygenUptake
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],67:[function(require,module,exports){
let motionsplan = {};

motionsplan.SixMinutesWalkingTest = function(sex, age, height, weight, meter) {
  meter = meter;
  sex = sex;
  age  = age;
  height = height;
  weight = weight;
  meter = meter;
  
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

  let publicAPI = {
    getReferenceMeter : getReferenceMeter,
    getPercent : getPercent
  };

  return publicAPI;
}

module.exports = motionsplan;

},{}],68:[function(require,module,exports){
let motionsplan = {};

motionsplan.WaterIntake = function(weight) {
  
  // upper and lower limit from LetLiv
  let lower = 30; // ml
  let upper = 40; // ml

  function getDailyWaterIntake(range = 'lower') {
    if (range == 'upper') {
      return weight * upper;
    }
    return weight * lower;
  }

  let publicAPI = {
    getDailyWaterIntake : getDailyWaterIntake
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],69:[function(require,module,exports){
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

  let publicAPI = {
    getFitnessLevel : getFitnessLevel,
    getMaximalOxygenUptake : getMaximalOxygenUptake,
    getMPO : getMPO
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}],70:[function(require,module,exports){
let motionsplan = {};

motionsplan.YBalance = function(anterior, posterolateral, posteromedial) {
  
  function getAbsoluteReachDistance() {
    return (anterior + posterolateral + posteromedial) / 3;
  }

  function getRelativeReachDistance(limb_length) {
    return getAbsoluteReachDistance() / limb_length * 100;
  }
  
  function getCompositeReachDistance(limb_length) {
    return (anterior + posterolateral + posteromedial) / (3 * limb_length) * 100;
  }

  let publicAPI = {
    getAbsoluteReachDistance : getAbsoluteReachDistance,
    getRelativeReachScore : getRelativeReachDistance,
    getCompositeReachScore : getCompositeReachDistance
  };

  return publicAPI;
};

module.exports = motionsplan;

},{}]},{},[5]);
