let motionsplan = {};


/**
 * Based on Nordic Nutrition Recommendations 2012
 * 
 * PAL-values:
 * 
 * 1.45 Stillesiddende arbejde med kun lidt fysisk aktivitet og ingen eller begrænset fysisk aktivitet i fritiden. 
 * 1.65 Stillesiddende arbejde med et vist behov for fysisk aktivitet og ingen eller begrænset fysisk aktivitet i fritiden.
 * 1.85 Hovedsageligt stående arbejde.
 * 2.20 Hårdt kropsarbejde eller meget høj fritidsaktivitet.
 * 
 * +0.3 Sport eller anden hård fysisk aktivitet i fritiden. (30-60 min. 4-5 gange/uge)
 */

motionsplan.REE2012 = function(sex, age, weight, pal, sport) {
    var bmr;
    var koen = sex; // Men is 1; women 0
    var alder = age;
    var vaegt = weight;
    sport = sport;
    pal = pal;

    function isMale() {
        if (koen == "1") {
            return true;
        }
        return false;
    }

    // BMR - Nordiska 2012
    function getRestingEnergyExpenditure() {
        if (isMale()) {
            if ((alder > 10) && (alder < 19)) {
                bmr = 0.0769 * vaegt + 2.43;
            } else if ((alder > 18) && (alder < 31)) {
                bmr = 0.0669 * vaegt + 2.28;
            } else if ((alder > 30) && (alder < 61)) {
                bmr = 0.0592 * vaegt + 2.48;
            } else if ((alder > 60) && (alder < 71)) {
                bmr = 0.0543 * vaegt + 2.37;
            } else if ((alder > 70)) {
                bmr = 0.0573 * vaegt + 2.01;
            }
        } else {
            if ((alder > 10) && (alder < 19)) {
                bmr = 0.0465 * vaegt + 3.18;
            } else if ((alder > 18) && (alder < 31)) {
                bmr = 0.0546 * vaegt + 2.33;
            } else if ((alder > 30) && (alder < 61)) {
                bmr = 0.0407 * vaegt + 2.9;
            } else if ((alder > 60) && (alder < 71)) {
                bmr = 0.0429 * vaegt + 2.39;
            } else if ((alder > 70)) {
                bmr = 0.0417 * vaegt + 2.41;
            }
        }
        return bmr * 1000;
    }

    // BMR - Nordiska 2012 - height in cm
    function getRestingEnergyExpenditureHeight(height) {
        var height = height / 100;
        if (isMale()) {
            if ((alder > 10) && (alder < 19)) {
                bmr = 0.0651 * vaegt + 1.11 * height + 1.25;
            } else if ((alder > 18) && (alder < 31)) {
                bmr = 0.0600 * vaegt + 1.31 * height + 0.473;
            } else if ((alder > 30) && (alder < 61)) {
                bmr = 0.0476 * vaegt + 2.26 * height - 0.574;
            } else if ((alder > 60) && (alder < 71)) {
                bmr = 0.0748 * weight + 2.26 * height - 1.070;
            } else if ((alder > 70)) {
                bmr = 0.0748 * weight + 2.26 * height - 1.070;
            }
        } else {
            if ((alder > 10) && (alder < 19)) {
                bmr = 0.0393 * weight + 1.04 * height + 1.93;
            } else if ((alder > 18) && (alder < 31)) {
                bmr = 0.0433 * weight + 2.57 * height - 1,180;
            } else if ((alder > 30) && (alder < 61)) {
                bmr = 0.0342 * weight + 2.10 * height - 0.0486;
            } else if ((alder > 60) && (alder < 71)) {
                bmr = 0.0356 * weight + 1.76 * height + 0.0448;
            } else if ((alder > 70)) {
                bmr = 0.0356 * weight + 1.76 * height + 0.0448;
            }
        }
        return bmr * 1000;
    }

    // TEE
    function getTotalEnergyExpenditure() {
        return getPhysicalActivityLevel() * getRestingEnergyExpenditure();
    }

    // PAL
    function getPhysicalActivityLevel() {
        var pal2;
        var pal_val = pal;
        pal2 = pal_val * 1;
        console.log(sport);
        if (String(sport) == "true") {
            pal2 = pal2 + 0.3;
        }
        return pal2;
    }

    var publicAPI = {
        getRestingEnergyExpenditure: getRestingEnergyExpenditure,
        getRestingEnergyExpenditureHeight: getRestingEnergyExpenditureHeight,
        getTotalEnergyExpenditure: getTotalEnergyExpenditure,
        getPhysicalActivityLevel: getPhysicalActivityLevel
    };

    return publicAPI;

};

module.exports = motionsplan;
