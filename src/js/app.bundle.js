'use strict'

const fitness = require('./fitness-hr');
const maxhr = require('./max-hr');
const cooper = require('./cooper');
const fat = require('./fat-pct');
const fatm = require('./fat-pct-measurements');
const rm = require('./1rm');
const etpunkt = require('./etpunkttest');
const topunkt = require('./topunkttest');
const bmr = require('./bmr');

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
        var g = $("#sex:checked").val();

        var f = fat.CalculateFatPercent(h, w, a, g);

        $("#BMI").val(f.getBMI());
        $("#fat_mass").val(f.getFatMass());
        $("#fat_percent").val(f.getFatPercent());
    });
    // Calculate Durning
    $("#calculate_skinfold_durnin").click(function() {
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
    });
    // Calculate Durning
    $("#calculate_skinfold_pollock_men").click(function() {
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
    });
    // Calculate Durning
    $("#calculate_skinfold_pollock_women").click(function() {
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
    // Calculate Walktest 1.6 km
    $("#calc_wattmax_children").click(function() {
        console.log("Calculate Wattmax Children");

        var Wmax = Number($("[name='WMax']").val());
        var Sek = Number($("[name='Sek']").val());
        var Vaegt = Number($("[name='Vaegt']").val());

        var resultat = Math.round((13.16 * (Wmax - 25 + (25 * Sek / 180)) + 5 * Vaegt) / Vaegt * Math.pow(10, 1)) / Math.pow(10, 1)
        var resultat2 = Math.round((13.16 * (Wmax - 25 + (25 * Sek / 180)) + 5 * Vaegt) / 1000 * Math.pow(10, 2)) / Math.pow(10, 2)

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
    // Calculate Index 100
    $("#calculate_index100").click(function() {
        console.log("Calculate Walktest 1,6 km");

        var Loeft = Number($("[name='Loeft']").val());
        var Vaegt = Number($("[name='Vaegt']").val());

        var resultat = Math.round(Loeft * 986.63 / (1270.4 - 172970 * ((Math.pow(Vaegt, -1.3925)))) * Math.pow(10, 0)) / Math.pow(10, 0)

        $("[name='Krop100']").val(resultat);
    });
    // Calculate Walktest 1.6 km
    $("#calculate_bmr").click(function() {
        console.log("Calculate BMR");

        var koen = Number($("[name='koen']").val());
        var alder = Number($("[name='alder']").val());
        var vaegt = Number($("[name='vaegt']").val());
        var sport = Number($("[name='sport']").val());
        var pal = Number($("[name='pal']:checked").val());

        var b = bmr.EnergyExpenditure(koen, alder, vaegt, pal, sport);

        $("[name='BMR2']").val(b.getBasicMetabolicRate());
        $("[name='TEE2']").val(b.getTotalEnergyExpenditure());
    });
    // Calculate VMax
    $("#calculate_vmax_bike_vmax").click(function() {
        console.log("Calculate Vmax from VO2");

        var Maxvo2 = Number($("[name='Maxvo2']").val());

        var resultat = Math.round((Maxvo2 * 21 / 60 * 0.23 / 5) * Math.pow(10, 0)) / Math.pow(10, 0) * 5

        $("[name='Vmax']").val(resultat);
    });
     // Calculate VMax intervals biking
    $("#calculate_vmax_bike_intervals").click(function() {
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
    });
     // Calculate VMax intervals biking
    $("#calculate_vmax_running_intervals").click(function() {
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
    });
});
