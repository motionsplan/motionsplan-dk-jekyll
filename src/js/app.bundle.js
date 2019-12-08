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
const index23 = require('./fitness-index-23');
const running = require('./running');
require('image-map-resizer');

$(document).ready(function() {
    $('map').imageMapResize();

    $("#calculator_rm").ready(function() {
        $(".motiononline").hide();
    });
    // 1RM calculate
    $("#form-formula").change(function() {
        if ($("#form-formula").val() == 'motiononline') {
            $(".motiononline").show();
        } else {
            $(".motiononline").hide();
        }
    });
    $("#calculator_rm").submit(function() {
        console.log("Calculate 1RM");
        
        var repmax;

        var reps = Number($("#form-reps").val());
        var weight = Number($("#form-weight").val());
        var trained = Number($("#form-trained").val());
        var koen = Number($("#form-sex").val());
        var formula = $("#form-formula").val();

        var r = rm.Estimate1RM(weight, reps);

        if (formula == "brzycki") {
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
        return false;
    });
    // Calculate Durnin
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
    // Calculate Lohman
    $("#calculator_skinfold_lohman").submit(function() {
        console.log("Calculate Skinfold Lohman");

        var bf;

        var triceps = Number($("[name='triceps']").val());

        var calf = Number($("[name='calf']").val());
        var koen = Number($("[name='koen']").val());

        if (koen == 1) {
            bf = 0.735 * (triceps + calf) + 1.0;
        }
        else {
            bf = 0.610 * (triceps + calf) + 5.1;
        }

        $("[name='fatpercent']").val(bf);
        return false;
    });
    // Calculate Durning
    $("#calculator_skinfold_slaughter").submit(function() {
        console.log("Calculate Skinfold Slaughter");

        var bf;

        var triceps = Number($("[name='triceps']").val());
        var subscapular = Number($("[name='subscapular']").val());
        var koen = Number($("[name='koen']").val());

        if (koen == 1) {
            bf = 1.21 * (triceps + subscapular) - 0.008 * Math.pow(triceps + subscapular, 2) - 1.7;
        }
        else {
            bf = 1.33 (triceps + subscapular) - 0.013 * Math.pow(triceps + subscapular, 2) - 2.5;
        }

        $("[name='fatpercent']").val(bf);
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

    // Calculate Index 23
    $("#calculator_index23").submit(function() {
        console.log("Calculate Index23");

        var height = Number($("#height").val());
        var weight = Number($("#weight").val());
        var kondital = Number($("#kondital").val());

        var i = index23.FitnessIndex23(height, weight);

        $("#index23").val(i.getIndex23BasedOnFitnessLevel(kondital));
        return false;
    });    // Calculate Index 100
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
    $("#calculator_vo2max_distance_test").submit(function() {
        console.log("Calculate Distance");

        var hours = Number($("#tid_hours").val());
        var min = Number($("#tid_min").val());
        var sek = Number($("#tid_sek").val());
        var distance = Number($("#distance").val());

        min = min + (hours * 60);
        distance = distance / 1000;

        var c = running.Running();

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
    // Calculate Cooper 12 min
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
