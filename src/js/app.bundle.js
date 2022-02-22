'use strict';

/* global $ */

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
require('image-map-resizer');

$(function() {
    $('map').imageMapResize();

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
        $(this).find('td').eq(2).html('+'+increment_1.toFixed(0)+' kg');
        $(this).find('td').eq(5).html(weight.toFixed(2));
      });
      $("table#smolov_jr_week_3 > tbody > tr").each(function(i, obj) {
        let increment_2 = Number($("#increment_2").val());
        let intensity_text = $(this).find('td').eq(1).html();
        let intensity = intensity_text.replace(/[^0-9]/g,'');
        let weight = rm * intensity / 100 + increment_2;
        console.log(rm + ' ' + intensity + ' ' + weight);
        $(this).find('td').eq(2).html('+' +increment_2.toFixed(0)+' kg');
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

      let b = bmi.BMI(h, w);

        $("[name='BMI']").val(b.getBMI().toFixed(1));
        $("[name='PMI']").val(b.getPonderalIndex().toFixed(1));
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
