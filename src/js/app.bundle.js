'use strict'

/* global $ */

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
const bmr = require('./bmr-nordic-1996');
const bmr_benedict_harris = require('./bmr-benedict-harris');
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
    // Udregn ideal weight
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
        $("#idealweight_robinson").val(iw.getRobinson());
        $("#idealweight_miller").val(iw.getMiller());
        $("#idealweight_hamwi").val(iw.getHamwi());
        $("#idealweight_devine").val(iw.getDevine());
        $("#idealweight_bmi_bodytype").val(iw.getIdealWeightBasedOnBmiAndBodytype(Number($("[name='bodytype']").val())));
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
    // Calculate Fat Percent
    $("#calculator_bmi").submit(function(e) {
        console.log("Calculate BMI");
        e.preventDefault();

        var h = Number($("#height").val());
        var w = Number($("#weight").val());

        var b = bmi.BMI(h, w);

        $("#BMI").val(b.getBMI().toFixed(1));
        $("#PMI").val(b.getPonderalIndex().toFixed(1));
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

        var a = Number($("#age").val());
        var h = Number($("#height").val());
        var w = Number($("#weight").val());
        var g = $("[name='sex']:checked").val();

        var f = fat.CalculateFatPercent(h, w, a, g);

        $("#BMI").val(f.getBMI().toFixed(2));
        $("#fat_percent_heitmann").val(f.getBodyFatPercentHeitmannBMIEquation().toFixed(2));
        $("#fat_percent_durnin").val(f.getBodyFatPercentWomersleyDurninBMIEquation().toFixed(2));
        $("#fat_percent_duerenberg").val(f.getBodyFatPercentDuerenbergBMIEquation().toFixed(2));
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

        var meter = Number($("[name='meter']").val());
        var sex = Number($("[name='gender']").val());
        var age = Number($("[name='age']").val());
        var height = Number($("[name='height']").val());
        var weight = Number($("[name='weight']").val());
        var repeated = $("#formula").val();
        
        var hr = walktest_sixminutes.SixMinutesWalkingTest(sex, age, height, weight, meter);

        $("[name='reference_distance']").val(hr.getReferenceMeter(repeated));
        $("[name='procent']").val(hr.getPercent(repeated));
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
    // Calculate BMR - Benedict Harris
    $("#calculator_bmr_equilibrium").submit(function(e) {
        console.log("Calculate BMR - Benedict Harris");
        e.preventDefault();

        var sex = $("[name='sex']:checked").val();
        var age = Number($("[name='age']").val());
        var weight = Number($("[name='weight']").val());
        var height = Number($("[name='height']").val());
        var bulkConstant = Number($("[name='bulkConstant']").val());
        var activityConstant = Number($("[name='activityLevel']").val());

        var b = bmr_benedict_harris.BMRBenedictHarris(sex, age, weight, height);

        var tee = tee_pal.TotalEnergyExpenditurePAL(b.getBasicMetabolicRate(), activityConstant / 100);

        $("[name='bmr']").val(b.getBasicMetabolicRate() + ' kcal');
        $("[name='equilibrium']").val(tee.getTotalEnergyExpenditure() + ' kcal');
        $("[name='bulk']").val(tee.getTotalEnergyExpenditure() + bulkConstant + ' kcal');
        $("[name='cut']").val(tee.getTotalEnergyExpenditure() - bulkConstant + ' kcal');
        $("[name='protein']").val(weight * 2 + ' g');
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
        var sport = $("[name='sport']:checked").val();
        var pal = Number($("[name='pal']:checked").val());

        var b;
        if (formula == 'nordic_1996') {
            b = bmr.BMRNordicNutritionRecommendations1996(gender, age, weight);
        } else if (formula == 'schofield') {
            b = schofield.BMRSchofield(gender, age, weight);
        } else if (formula == 'benedict_harris') {
            b = bmr_benedict_harris.BMRBenedictHarris(gender, age, weight, height);
        } else {
            b = ree.BMRNordicNutritionRecommendations2012(gender, age, weight, height);
        }
        $("[name='bmr']").val(b.getBasicMetabolicRate());
        
        var tee = tee_pal.TotalEnergyExpenditurePAL(b.getBasicMetabolicRate(), pal, sport);

        $("[name='pal_calc']").val(tee.getPhysicalActivityLevel());
        $("[name='tee']").val(tee.getTotalEnergyExpenditure());

    });
    $("#activity_intense, #activity_moderat, #activity_light, #activity_standing #activity_sleeping").change(function(e) {
        var min_day = 24 * 60;
        var activity_intense = document.getElementById('activity_intense').value;
        var activity_moderat = document.getElementById('activity_moderat').value;
        var activity_light = document.getElementById('activity_light').value;
        var activity_standing = document.getElementById('activity_standing').value;
        var activity_sleeping = document.getElementById('activity_sleeping').value;

        var activity_sitting = min_day - activity_intense - activity_moderat - activity_light - activity_standing - activity_sleeping;
        $("[name='activity_sitting']").val(activity_sitting);
    });
    // Calculate BMR - Nordic Nutrition 1996
    $("#calculator_bmr_advanced_pal").submit(function(e) {
        console.log("Calculate BMR - Advanced");
        e.preventDefault();

        var gender = $("[name='gender']").val();
        var age = Number($("[name='age']").val());
        var weight = Number($("[name='weight']").val());
        var height = Number($("[name='height']").val());

        var b = schofield.BMRSchofield(gender, age, weight);

        var basicMeta = b.getBasicMetabolicRate();
        var BMR = bmr;
	    
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

        $("#whr").val(c.getWaistHipRatio(waist, hip));
        $("#waistheightratio").val(c.getWaistHeightRatio(waist, height));
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
