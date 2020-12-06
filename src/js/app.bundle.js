'use strict';

/* global $ */

const inol = require('./inol');
const ipfpoints = require('./ipf-points');
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

    $("#step_length").change(function() {
        console.log('Ready to calculate');
        $("table#steps_to_km > tbody > tr").each(function(i, obj) {
            let steps = $(this).find('td:first').html();
            let km = steps * ($("#step_length").val()) / 1000 / 100;
            $(this).find('td').eq(1).html(km.toFixed(2));
        });
    });
    $("#form-formula").ready(function() {
        $(".reynolds").hide();
    });
    // 1RM calculate
    $("#form-formula").change(function() {
        if ($("#form-formula").val() == 'reynolds') {
            $(".reynolds").show();
        } else {
            $(".reynolds").hide();
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
    // Udregn Billat
    $("#calculator_billat").submit(function(e) {
        console.log("Billat");
        e.preventDefault();

        let distance = Number($("[name='distance']").val());

        let iw = billat.Billat(distance);
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

        let sex = $("[name='sex']:checked").val();
        let height = Number($("[name='height']").val());

        let iw = idealweight.IdealWeight(height, sex);
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

        let weight = Number($("[name='weight']").val());
        let running = Number($("[name='running']").val());
        let walking = Number($("[name='walking']").val());
        
        console.log(walking + ' ' + running);
        
        let run = runwalk.RunningWalking("running", running, weight);
        let walk = runwalk.RunningWalking("walking", walking, weight);
        
        let ratio_kilometer = run.getCaloriesPrKilometer() / walk.getCaloriesPrKilometer();
        let ratio_minute = run.getCaloriesPrMinute() / walk.getCaloriesPrMinute();

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

        let b = bmi.BMI(h, w);

        $("[name='BMI']").val(b.getBMI().toFixed(1));
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
        $("[name='fat_percent_heitmann']").val(f.getBodyFatPercentHeitmannBMIEquation().toFixed(2));
        $("[name='fat_percent_durnin']").val(f.getBodyFatPercentWomersleyDurninBMIEquation().toFixed(2));
        $("[name='fat_percent_duerenberg']").val(f.getBodyFatPercentDuerenbergBMIEquation().toFixed(2));
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

        $("#borg_iltoptagelse").val(borg.getMaximalOxygenUptake());
        $("#borg_kondital").val(borg.getFitnessLevel());
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

        $("[name='hrr_intensity']").val(result);
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

        $("[name='hrr_heartrate']").val(result);
    });
    // Calculate Intensity
    $("#calculator_hr_intensity_from_max").submit(function(e) {
        console.log("Calculate HR work intensity from HRmax");
        e.preventDefault();

        let hr_work = Number($("[name='hr_work_form3']").val());
        let hr_max = Number($("[name='hr_max_form3']").val());

        let hr = hr_intensity.HRIntensity(hr_max);
        let result = hr.getWorkIntensityBasedOnMaxHR(hr_work);

        $("[name='intensity_form3']").val(result);
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

        let ipf_points = ipfpoints.IPFPoint(gender, bodyweight, lifted, event, equipment);

        $("[name='ipf_points']").val(ipf_points.getPoints().toFixed(1));
        $("[name='ipf_dots']").val(ipf_points.getDots().toFixed(1));
    });
     // Calculate Karvonen Intensity
    $("#calculator_karvonen_intensity").submit(function(e) {
        console.log("Calculate Karvonen Intensity Zones");
        e.preventDefault();

        let min_hr = Number($("#karvonen_min_hr").val());
        let max_hr = Number($("#karvonen_max_hr").val());

        let k = karvonen.Karvonen(min_hr, max_hr);

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

        $("#velocity_kmt").val(c.getKilometersPrHour(min, sec, distance));
        $("#velocity_min_km").val(c.getTimePrKilometer(min, sec, distance));
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

        let min = Number($("[name='min']").val());
        let sec = Number($("[name='sec']").val());

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

        $("#kondital").val(c.getVO212MinTest(distance));
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
