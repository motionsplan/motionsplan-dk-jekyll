$(document).ready(function() {

    $("#plCalBtn").click(function() {

        var hvpul = Number($("#plHvil").val());
        var mxpul = Number($("#plMaxp").val());
        var wgt = Number($("#plVgt").val());

        var konditalM = mxpul / hvpul * 15.3;

        var maxiltop = Math.round(konditalM * wgt / 1000 * Math.pow(10, 2)) / Math.pow(10, 2);
        var kondi = Math.round((konditalM) * Math.pow(10, 1)) / Math.pow(10, 1);

        $("#plIltop").text(maxiltop);
        $("#plKond").text(kondi);

    });

    // restricting with decimal places
    $("#plHvil,#plMaxp,#plVgt").keydown(function(e) {
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