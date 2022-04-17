let motionsplan = {}

motionsplan.PlateRackCalc = function(weight, bar_weight = 20, collar_weight = 0, percentage = 1) {
    weight = weight;
    bar_weight = bar_weight;
    collar_weight = collar_weight;
    percentage = percentage;

    var Final, Target, Diff;

    var A25 = 2;
    var A20 = 2;
    var A15 = 2;
    var A10 = 2;
    var A5 = 2;
    var A2 = 2;
    var A2dot5 = 2;
    var A1dot5 = 2;
    var A1 = 2;
    var A0dot5 = 2;

    var Avail = [A25, A20, A15, A10, A5, A2dot5, A2, A1dot5, A1, A0dot5];
    var plateWeight = [25, 20, 15, 10, 5, 2.5, 2, 1.5, 1, 0.5];
    var NoPlateReq = [];

    function setAvailablePlates() {

    }

    function startcalc() {

        var diff;
        var noplate, pairVal;

        // Get basic weight to count plates needed
        var rw = getPlatesWeight();

        // loop to count number of plates
        for (var i = 0; i < Avail.length; i++) {
            pairVal = plateWeight[i] * 2;
            if (rw >= pairVal) {
                noplate = rw / pairVal;
                if (noplate > Avail[i]) {
                    noplate = parseInt(Avail[i]);
                    NoPlateReq.push(parseInt(noplate));
                    if (NoPlateReq[i] > 0) {
                        rw = rw - parseFloat((NoPlateReq[i] * 2 * plateWeight[i]));
                    }
                }
                else {
                    NoPlateReq.push(parseInt(noplate));
                    if (NoPlateReq[i] > 0) {
                        rw = rw - parseFloat((NoPlateReq[i] * 2 * plateWeight[i]));
                    }
                }
            }
            else {
                NoPlateReq.push(0);
            }
        }

        var finalval = 0;
        for (var i = 0; i < NoPlateReq.length; i++) {
            finalval = finalval + parseInt(NoPlateReq[i] * plateWeight[i] * 2);
        }

        var bs = parseFloat(collar_weight) + parseFloat(bar_weight);
        diff = parseFloat(weight * percentage);

        Final = parseFloat(finalval + bs);
        Target = parseFloat(weight * percentage);
        Diff = parseFloat(diff - (finalval + bs));

        return true;
    }

    function getTarget() {
        return Target;
    }

    function getDiff() {
        return Diff;
    }

    function getFinal() {
        return Final;
    }

    function getHowManyPlatesNeededOf(key) {
        if (parseInt(NoPlateReq[key]) != 0) {
            return parseInt(NoPlateReq[key]);
        }
        return 0;
    }

    function getPlatesWeight() {
        var warmupWeight = weight * percentage;
        var bs = parseFloat(collar_weight) + parseFloat(bar_weight);
        var retWeight = parseFloat(warmupWeight) - parseFloat(bs);
        return retWeight;
    }

    var publicAPI = {
        getPlatesWeight: getPlatesWeight,
        getTarget: getTarget,
        getFinal: getFinal,
        getDiff: getDiff,
        getHowManyPlatesNeededOf: getHowManyPlatesNeededOf,
        startcalc: startcalc
    };

    return publicAPI;
}

module.exports = motionsplan;
