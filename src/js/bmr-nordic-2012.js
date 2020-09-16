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
    var sex = sex; // Men is 1; women 0
    var age = age;
    var weight = weight;
    sport = sport;
    pal = pal;

    function isMale() {
        if (sex == "1") {
            return true;
        }
        return false;
    }

    // BMR - Nordiska 2012
    function getRestingEnergyExpenditure() {
        if (isMale()) {
            if ((age > 10) && (age < 19)) {
                bmr = 0.0769 * weight + 2.43;
            } else if ((age > 18) && (age < 31)) {
                bmr = 0.0669 * weight + 2.28;
            } else if ((age > 30) && (age < 61)) {
                bmr = 0.0592 * weight + 2.48;
            } else if ((age > 60) && (age < 71)) {
                bmr = 0.0543 * weight + 2.37;
            } else if ((age > 70)) {
                bmr = 0.0573 * weight + 2.01;
            }
        } else {
            if ((age > 10) && (age < 19)) {
                bmr = 0.0465 * weight + 3.18;
            } else if ((age > 18) && (age < 31)) {
                bmr = 0.0546 * weight + 2.33;
            } else if ((age > 30) && (age < 61)) {
                bmr = 0.0407 * weight + 2.9;
            } else if ((age > 60) && (age < 71)) {
                bmr = 0.0429 * weight + 2.39;
            } else if ((age > 70)) {
                bmr = 0.0417 * weight + 2.41;
            }
        }
        return bmr * 1000;
    }

    // BMR - Nordiska 2012 - height in cm
    function getRestingEnergyExpenditureHeight(height) {
        var height = height / 100;
        if (isMale()) {
            if ((age > 10) && (age < 19)) {
                bmr = 0.0651 * weight + 1.11 * height + 1.25;
            } else if ((age > 18) && (age < 31)) {
                bmr = 0.0600 * weight + 1.31 * height + 0.473;
            } else if ((age > 30) && (age < 61)) {
                bmr = 0.0476 * weight + 2.26 * height - 0.574;
            } else if ((age > 60) && (age < 71)) {
                bmr = 0.0748 * weight + 2.26 * height - 1.070;
            } else if ((age > 70)) {
                bmr = 0.0748 * weight + 2.26 * height - 1.070;
            }
        } else {
            if ((age > 10) && (age < 19)) {
                bmr = 0.0393 * weight + 1.04 * height + 1.93;
            } else if ((age > 18) && (age < 31)) {
                bmr = 0.0433 * weight + 2.57 * height - 1,180;
            } else if ((age > 30) && (age < 61)) {
                bmr = 0.0342 * weight + 2.10 * height - 0.0486;
            } else if ((age > 60) && (age < 71)) {
                bmr = 0.0356 * weight + 1.76 * height + 0.0448;
            } else if ((age > 70)) {
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
        var pal_val = pal;
        var pal2 = pal_val * 1;
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
