'use strict'

/* global $ */

const fitness = require('./fitness-hr');
const maxhr = require('./max-hr');
const cooper = require('./cooper');
const cooper_test = require('./cooper-running');
const fat = require('./fat-pct');
const fp_navy = require('./fat-pct-navy');
const fatm = require('./fat-pct-measurements');
const rm = require('./1rm');
const etpunkt = require('./etpunkttest');
const borg15 = require('./borg15');
const topunkt = require('./topunkttest');
const bmr = require('./bmr-nordic-1996');
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
    $("#calculator_rm").submit(function() {
        console.log("Calculate 1RM");

        var repmax, reps;
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
            $("#rm10").val(r.geBrzycki(10).toFixed(decimals));
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
        return false;
    });
    // Mortality calculation
    $("#calculator_cooper_mortality").submit(function() {
        console.log("Calculate Cooper");

        var age = Number($("#age").val());
        var hr_rest = Number($("#hrrest").val());
        var bloodpressure = Number($("#bloodpressure").val());
        var diabetes = Number($("#diabetes").val());
        var smoker = Number($("#smoker").val());
        var bmi = Number($("#bmi").val());
        var fitnesslevel = Number($("#kondital").val());

        // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
        var c = cooper.CooperClinicMortalityRiskIndex(age, hr_rest, bloodpressure, diabetes, smoker, bmi, fitnesslevel);

        $("#risk_points").val(c.getRiskPoint());
        $("#absolute_risk").val(c.getAbsoluteRisk());
        $("#relative_risk").val(c.getRelativeRisk());
        return false;
    });
    // Udregn fatpercent navy
    $("#calculator_fat_percent_navy").submit(function() {
        console.log("Fat percent navy");

        var sex = $("[name='sex']:checked").val();
        var height = Number($("[name='height']").val());
        var waist = Number($("[name='waist']").val());
        var neck = Number($("[name='neck']").val());
        var hip = Number($("[name='hip']").val());

        var fp = fp_navy.CalculateFatPercentNavy(sex, height, waist, neck, hip);
        $("#fat_percent_navy").val(fp.getFatPercent());
        return false;
    });
    // Udregn ideal weight
    $("#calculator_idealweight").submit(function() {
        console.log("Idealweight");

        var sex = $("[name='sex']:checked").val();
        var height = Number($("[name='height']").val());

        var iw = idealweight.IdealWeight(height, sex);
        $("#idealweight_robinson").val(iw.getRobinson());
        $("#idealweight_miller").val(iw.getMiller());
        $("#idealweight_hamwi").val(iw.getHamwi());
        $("#idealweight_devine").val(iw.getDevine());
        $("#idealweight_bmi_bodytype").val(iw.getIdealWeightBasedOnBmiAndBodytype(Number($("[name='bodytype']").val())));
        return false;
    });
    // Udregn 1punkttest
    $("#calculator_etpunkttest").submit(function() {
        console.log("Etpunkt test");

        var work = Number($("[name='work']").val());
        var gender = Number($("[name='gender']").val());
        var puls = Number($("[name='puls']").val());
        var age = Number($("[name='age']").val());
        var weight = Number($("[name='weight']").val());

        var et = etpunkt.EtPunktTest(gender, age, weight, work, puls);

        $("[name='vo2max']").val(et.getMaximalOxygenUptake());
        $("[name='kondital']").val(et.getFitnessLevel());
        return false;
    });
    // Udregn 2punkttest
    $("#calculator_topunkttest").submit(function() {
        console.log("Topunkt test");

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
        return false;
    });
    // Calculate Max Heart Rate
    $("#calculator_maxhr").submit(function() {
        console.log("Calculate Maximal Heart Rate");

        var ald = Number($("#age").val());

        var hr = maxhr.EstimateMaxHr(ald);

        $("#max_hr").val(hr.getMaxHr().toFixed(0));
        return false;
    });
    // Calculate Fat Percent
    $("#calculator_bmi").submit(function() {
        console.log("Calculate BMI");

        var h = Number($("#height").val());
        var w = Number($("#weight").val());

        var b = bmi.BMI(h, w);

        $("#BMI").val(b.getBMI().toFixed(1));
        $("#PMI").val(b.getPonderalIndex().toFixed(1));
        return false;
    });
    // Calculate Body Water
    $("#calculator_bodywater").submit(function() {
        console.log("Calculate Body Water");

        var a = Number($("#age").val());
        var h = Number($("#height").val());
        var w = Number($("#weight").val());
        var g = $("[name='sex']:checked").val();

        var f = tbw.BodyWater(h, w, a, g);

        $("#tbw").val(f.getTotalBodyWater().toFixed(2));
        $("#tbw_pct").val(f.getPercent().toFixed(2));
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

        $("#BMI").val(f.getBMI().toFixed(2));
        $("#fat_percent_heitmann").val(f.getBodyFatPercentHeitmannBMIEquation().toFixed(2));
        $("#fat_percent_durnin").val(f.getBodyFatPercentWomersleyDurninBMIEquation().toFixed(2));
        $("#fat_percent_duerenberg").val(f.getBodyFatPercentDuerenbergBMIEquation().toFixed(2));
        return false;
    });
    // Calculate Durnin
    $("#calculator_skinfold_durnin").submit(function() {
        console.log("Calculate Skinfold Durnin");

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
        return false;
    });
    // Calculate Pollock
    $("#calculator_skinfold_pollock_men").submit(function() {
        console.log("Calculate Skinfold Pollock Men");

        var breast = Number($("[name='chest_male']").val());
        var abdomen = Number($("[name='abdomen_male']").val());
        var thigh = Number($("[name='thigh_male']").val());
        var age = Number($("[name='age_male']").val());
        var weight = Number($("[name='weight_male']").val());

        var f = skinfold_pollock.SkinfoldPollock(weight, age);

        $("[name='fatpercent_male']").val(skinfold_pollock.getBodyFatPercentMale(breast, abdomen, thigh));
        $("[name='ffm_male']").val(skinfold_pollock.getBodyFatFreeMass());
        return false;
    });
    // Calculate Durnin
    $("#calculator_skinfold_pollock_women").submit(function() {
        console.log("Calculate Skinfold Pollock Women");

        var triceps = Number($("[name='triceps_female']").val());
        var hip = Number($("[name='hoftekam_female']").val());
        var thigh = Number($("[name='thigh_female']").val());
        var age = Number($("[name='age_female']").val());
        var weight = Number($("[name='weight_female']").val());

        var f = skinfold_pollock.SkinfoldPollock(weight, age);

        $("[name='fatpercent_female']").val(skinfold_pollock.getBodyFatPercentFemale(triceps, hip, thigh));
        $("[name='ffm_female']").val(skinfold_pollock.getBodyFatFreeMass());
        return false;
    });
    // Calculate Lohman
    $("#calculator_skinfold_lohman").submit(function() {
        console.log("Calculate Skinfold Lohman");

        var triceps = Number($("[name='triceps']").val());
        var calf = Number($("[name='calf']").val());
        var sex = Number($("[name='gender']").val());

        var f = skinfold_lohman.SkinfoldLohman(sex, triceps, calf);

        $("[name='fatpercent']").val(skinfold_lohman.getBodyFatPercent());
        return false;
    });
    // Calculate Slaughter
    $("#calculator_skinfold_slaughter").submit(function() {
        console.log("Calculate Skinfold Slaughter");

        var triceps = Number($("[name='triceps']").val());
        var subscapular = Number($("[name='subscapular']").val());
        var sex = Number($("[name='gender']").val());

        var f = skinfold_slaughter.SkinfoldSlaughter(sex, triceps, subscapular);

        $("[name='fatpercent']").val(skinfold_slaughter.getBodyFatpercent());
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

        var hvpul = Number($("#hr_rest").val());
        var mxpul = Number($("#hr_max").val());
        var wgt = Number($("#weight").val());

        var fitnesshr = fitness.CalculateFitnessFromHr(mxpul, hvpul, wgt);

        var maxiltoptagelse = fitnesshr.getMaximalOxygenUptake();
        var kondital = fitnesshr.getFitnessLevel();

        $("#vo2max").val(maxiltoptagelse);
        $("#kondital").val(kondital);

        return false;
    });
    // Calculate Borg 15 fitness
    $("#calculator_borg15").submit(function() {
        console.log("Calculate Borg 15 fitness");

        var watt = Number($("#borg_watt").val());
        var age = Number($("#borg_age").val());
        var weight = Number($("#borg_weight").val());

        var borg = borg15.Borg15(age, weight, watt);

        $("#borg_iltoptagelse").val(borg.getMaximalOxygenUptake());
        $("#borg_kondital").val(borg.getFitnessLevel());
        return false;
    });
    // Calculate Wattmax
    $("#calculator_fitness_wattmax").submit(function() {
        console.log("Calculate Wattmax");
        var wmax = Number($("[name='wmax']").val());
        var sec = Number($("[name='sec']").val());
        var weight = Number($("[name='weight']").val());
        
        var watt = wattmax.Wattmax(wmax, sec, weight);

        $("[name='kondital']").val(watt.getFitnessLevel());
        $("[name='vo2max']").val(watt.getMaximalOxygenUptake());
        $("[name='mpo']").val(watt.getMPO());
        return false;
    });
    // Calculate Wattmax Children
    $("#calculator_fitness_wattmax_children").submit(function() {
        console.log("Calculate Wattmax Children");

        var wmax = Number($("[name='wmax']").val());
        var sec = Number($("[name='sec']").val());
        var weight = Number($("[name='weight']").val());
        var watt_jumps = Number($("[name='watt_jumps']").val());
        var age = 15;
        
        var watt = wattmax.Wattmax(wmax, sec, weight, age, watt_jumps);

        $("[name='kondital']").val(watt.getFitnessLevel());
        $("[name='vo2max']").val(watt.getMaximalOxygenUptake());
        $("[name='mpo']").val(watt.getMPO());
        return false;
    });
    // Calculate Walktest 6 min
    $("#calculator_walktest_6min").submit(function() {
        console.log("Calculate Walktest 6 min");

        var meter = Number($("[name='meter']").val());
        var sex = Number($("[name='gender']").val());
        var age = Number($("[name='age']").val());
        var height = Number($("[name='height']").val());
        var weight = Number($("[name='weight']").val());
        var repeated = $("#formula").val();
        
        var hr = walktest_sixminutes.SixMinutesWalkingTest(sex, age, height, weight, meter);

        $("[name='reference_distance']").val(hr.getReferenceMeter(repeated));
        $("[name='procent']").val(hr.getPercent(repeated));
        return false;
    });
    // Calculate Walktest 1.6 km
    $("#calculator_walktest_16km").submit(function() {
        console.log("Calculate Walktest 1,6 km");

        var min = Number($("[name='min']").val());
        var sec = Number($("[name='sec']").val());
        var hr_after = Number($("[name='hr_after']").val());
        var gender = $("[name='gender']").val();
        var age = Number($("[name='age']").val());
        var weight = Number($("[name='weight']").val());

         var rp = rockport.RockPortWalkingTest(min, sec, hr_after, gender, age, weight);

        $("[name='kondital']").val(rp.getFitnessLevel());
        return false;
    });
    // Calculate Index 23
    $("#calculator_index23").submit(function() {
        console.log("Calculate Index23");

        var height = Number($("#height").val());
        var weight = Number($("#weight").val());
        var kondital = Number($("#kondital").val());

        var i = index23.FitnessIndex23(height, weight);

        $("#index23").val(i.getIndex23BasedOnFitnessLevel(kondital));
        return false;
    });
    // Calculate Index 100
    $("#calculator_index100").submit(function() {
        console.log("Calculate Index100");

        var lifted = Number($("[name='lifted']").val());
        var bodyweight = Number($("[name='weight']").val());

        var idx = index100.Index100(lifted, bodyweight);

        $("[name='index_100_lift']").val(idx.getIndex100());
        return false;
    });
    // Calculate BMR - Nordic Nutrition 1996
    $("#calculator_bmr").submit(function() {
        console.log("Calculate BMR - 1996");

        var gender = Number($("[name='gender']").val());
        var age = Number($("[name='age']").val());
        var weight = Number($("[name='weight']").val());
        var sport = $("[name='sport']:checked").val();
        var pal = Number($("[name='pal']:checked").val());

        var b = bmr.EnergyExpenditure(gender, age, weight, pal, sport);

        $("[name='pal_calc']").val(b.getPhysicalActivityLevel());
        $("[name='bmr']").val(b.getBasicMetabolicRate());
        $("[name='tee']").val(b.getTotalEnergyExpenditure());
        return false;
    });
    // Calculate BMR - Nordic Nutrition 2012
    $("#calculator_nordic_2012").submit(function() {
        console.log("Calculate BMR - 2012");

        var koen = Number($("[name='koen']").val());
        var alder = Number($("[name='alder']").val());
        var vaegt = Number($("[name='vaegt']").val());
        var height = Number($("[name='height']").val());
        var sport = $("[name='sport']:checked").val();
        var pal = Number($("[name='pal']:checked").val());

        var b = ree.REE2012(koen, alder, vaegt, pal, sport);

        $("[name='pal_calc']").val(b.getPhysicalActivityLevel());
        if (height > 0) {
            $("[name='bmr']").val(b.getRestingEnergyExpenditureHeight(height));
            $("[name='tee']").val(b.getRestingEnergyExpenditureHeight(height) * b.getPhysicalActivityLevel());
        } else {
            $("[name='bmr']").val(b.getRestingEnergyExpenditure());
            $("[name='tee']").val(b.getTotalEnergyExpenditure());
        }
        
        return false;
    });
    // Calculate VMax
    $("#calculator_vmax_bike_vmax").submit(function() {
        console.log("Calculate Vmax from VO2");

        var Maxvo2 = Number($("[name='Maxvo2']").val());

        var resultat = Math.round((Maxvo2 * 21 / 60 * 0.23 / 5) * Math.pow(10, 0)) / Math.pow(10, 0) * 5;

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

        var hr_rest = Number($("[name='hr_rest']").val());
        var max_hr = Number($("[name='hr_max']").val());
        var hr_work = Number($("[name='hr_work']").val());

        var hr = hr_intensity.HRIntensity(max_hr);
        var result = hr.getHRIntensityFromHeartRateReserve(hr_rest, hr_work);

        $("[name='hrr_intensity']").val(result);
        return false;
    });
     // Calculate Intensity
    $("#calculator_hr_intensity_work").submit(function() {
        console.log("Calculate HR work intensity HRR");

        var hr_rest = Number($("[name='hr_rest_form2']").val());
        var hr_max = Number($("[name='hr_max_form2']").val());
        var hr_intensity = Number($("[name='intensity']").val());

        var hr = hr_intensity.HRIntensity(hr_max);
        var result = hr.getHRBasedOnIntensityFromHeartRateReserve(hr_rest, hr_intensity);

        $("[name='hrr_heartrate']").val(result);
        return false;
    });
    // Calculate Intensity
    $("#calculator_hr_intensity_from_max").submit(function() {
        console.log("Calculate HR work intensity from HRmax");

        var hr_work = Number($("[name='hr_work_form3']").val());
        var hr_max = Number($("[name='hr_max_form3']").val());

        var hr = hr_intensity.HRIntensity(hr_max);
        var result = hr.getWorkIntensityBasedOnMaxHR(hr_work);

        $("[name='intensity_form3']").val(result);
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
    $("#calculator_vo2max_distance_test").submit(function() {
        console.log("Calculate Distance");

        var hours = Number($("#tid_hours").val());
        var min = Number($("#tid_min").val());
        var sek = Number($("#tid_sek").val());
        var distance = Number($("#distance").val());

        min = min + (hours * 60);
        distance = distance / 1000;

        var c = running_distance_vo2.RunningDistanceVO2();

        $("#kondital").val(c.getEstimatedFitnessLevel(min, sek, distance));

        return false;
    });
    $("#calculator_velocity").submit(function() {
        console.log("Calculate velocity");

        var min = Number($("[name='min']").val());
        var sec = Number($("[name='sec']").val());
        var distance = Number($("[name='distance']").val());

        var c = running.Running();

        $("#velocity_kmt").val(c.getKilometersPrHour(min, sec, distance));
        $("#velocity_min_km").val(c.getTimePrKilometer(min, sec, distance));

        return false;
    });
    $("#calculator_convert_kmt_minkm_velocity").submit(function() {
        console.log("Calculate velocity");

        var kmt = Number($("[name='kmt']").val());

        var c = running.Running();

        $("#velocity_convert_minkm").val(c.convertKmtToMinPerKm(kmt));

        return false;
    });
    $("#calculator_convert_minkm_kmt_velocity").submit(function() {
        console.log("Calculate velocity");

        var min = Number($("[name='min']").val());
        var sec = Number($("[name='sec']").val());

        var c = running.Running();

        $("#velocity_convert_kmt").val(c.convertMinPerKmToKmt(min, sec));

        return false;
    });
    $("#calculator_running_economy").submit(function() {
        console.log("Calculate running economy");

        var weight = Number($("[name='weight']").val());
        var velocity = Number($("[name='velocity']").val());
        var oxygenuptake = Number($("[name='oxygenuptake']").val());

        var c = running_economy.RunningEconomy(weight, oxygenuptake);

        $("#running_economy").val(c.getRunningEconomy(velocity).toFixed(2));

        return false;
    });
    $("#calculator_oxygen_uptake").submit(function() {
        console.log("Calculate oxygen uptake");

        var weight = Number($("[name='fitness_weight']").val());
        var oxygenuptake = Number($("[name='fitness_oxygenuptake']").val());

        var c = running_economy.RunningEconomy(weight, oxygenuptake);

        $("#fitness_level").val(c.getFitnessLevel().toFixed(2));

        return false;
    });
     // Calculate Cooper 2400 meter
    $("#calculator_cooper_2400_test").submit(function() {
        console.log("Calculate CooperTest 2400");

        var min = Number($("#tid_min").val());
        var sek = Number($("#tid_sek").val());

        var c = cooper_test.CooperRunning();

        $("#kondital").val(c.getVO22400MeterTest(min, sek));

        return false;
    });
    // Calculate Cooper 12 min
    $("#calculator_cooper_test").submit(function() {
        console.log("Calculate CooperTest");

        var distance = Number($("#distance").val());

        var c = cooper_test.CooperRunning();

        $("#kondital").val(c.getVO212MinTest(distance));

        return false;
    });
    $("#calculator_fat_percent_food").submit(function() {
        console.log("Calculate Fat Energy Pct");

        var kj = Number($("#kj").val());
        var fat = Number($("#fat").val());

        var c = fatenergypct.FatEnergyPct(kj, fat);

        $("#fat_energy_pct").val(c.getFatEnergyPct());

        return false;
    });
    $("#calculator_waist").submit(function() {
        console.log("Calculate Waist");

        var hip = Number($("#hip").val());
        var waist = Number($("#waist").val());
        var height = Number($("#height").val());

        var c = whr.WaistRatio();

        $("#whr").val(c.getWaistHipRatio(waist, hip));
        $("#waistheightratio").val(c.getWaistHeightRatio(waist, height));

        return false;
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
