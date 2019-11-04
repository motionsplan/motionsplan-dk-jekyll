$(document).ready(function() {

    $("#gCalBtn").click(function() {

        var dist = Number($("#gDist").val());
        var kon = Number($("#gkon").val());
        var ald = Number($("#gAlder").val());
        var hgt = Number($("#gHojde").val());
        var wgt = Number($("#gVaegt").val());

        var mandVal = (7.57 * hgt) - (5.02 * ald) - (1.76 * wgt) - 309;
        var kvindeVal = (2.11 * hgt) - (5.78 * ald) - (2.29 * wgt) + 667;

        var refrenM = Math.round((mandVal * kon + kvindeVal * (1 - kon)) * Math.pow(10, 1)) / Math.pow(10, 1);
        var proc = Math.round((dist / refrenM * 100) * Math.pow(10, 1)) / Math.pow(10, 1);

        $("#gRefr").text(refrenM);
        $("#gProc").text(proc);

    });

    // restricting with decimal places
    $("#gDist,#gAlder,#gHojde,#gVaegt").keydown(function(e) {
        if (e.shiftKey || e.ctrlKey || e.altKey) { // if shift, ctrl or alt keys held down
            e.preventDefault(); // Prevent character input
        }
        else {
            var n = e.keyCode;
            if (!((n == 8) // backspace
                    ||
                    (n == 190) // period
                    ||
                    (n == 110) // decimal point
                    ||
                    (n == 46) // delete
                    ||
                    (n >= 35 && n <= 40) // arrow keys/home/end
                    ||
                    (n >= 48 && n <= 57) // numbers on keyboard
                    ||
                    (n >= 96 && n <= 105)) // number on keypad
            ) {
                e.preventDefault(); // Prevent character input
            }
        }
    });

});