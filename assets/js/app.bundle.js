'use strict'

const fitness = require('./fitness-hr');
const maxhr = require('./max-hr');
const cooper = require('./cooper');
const fat = require('./fat-pct');

$(document).ready(function() {

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
});
