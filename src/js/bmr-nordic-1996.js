let motionsplan = {};


/**
 * PAL-values:
 * 
 * 1.45 Stillesiddende arbejde med kun lidt fysisk aktivitet og ingen eller begrænset fysisk aktivitet i fritiden. 
 * 1.65 Stillesiddende arbejde med et vist behov for fysisk aktivitet og ingen eller begrænset fysisk aktivitet i fritiden.
 * 1.85 Hovedsageligt stående arbejde.
 * 2.20 Hårdt kropsarbejde eller meget høj fritidsaktivitet.
 * 
 * +0.3 Sport eller anden hård fysisk aktivitet i fritiden. (30-60 min. 4-5 gange/uge)
 */

motionsplan.BMRNordicNutritionRecommendations1996 = function(sex, age, weight) {
    var bmr;
    var sex = sex;
    var age = age;
    var weight = weight;

    function isMale() {
        if (sex == "1") {
            return true;
        }
        return false;
    }

    // BMR - Nordiska 1996
    function getBasicMetabolicRate() {
        if (isMale()) {
            if ((age > 10) && (age < 19)) {
                bmr = 74 * weight + 2750;
            }
            else if ((age > 18) && (age < 31)) {
                bmr = 64 * weight + 2840;
            }
            else if ((age > 30) && (age < 61)) {
                bmr = 48.5 * weight + 3670;
            }
            else if ((age > 60) && (age < 76)) {
                bmr = 49.9 * weight + 2930;
            }
            else if ((age > 75)) {
                bmr = 35 * weight + 3430;
            }
        } else {
            if ((age > 10) && (age < 19)) {
                bmr = 56 * weight + 2900;
            }
            else if ((age > 18) && (age < 31)) {
                bmr = 61.5 * weight + 2080;
            }
            else if ((age > 30) && (age < 61)) {
                bmr = 36.4 * weight + 3470;
            }
            else if ((age > 60) && (age < 76)) {
                bmr = 38.6 * weight + 2880;
            }
            else if ((age > 75)) {
                bmr = 41 * weight + 2610;
            }
        }
        return bmr;
    }

    var publicAPI = {
        getBasicMetabolicRate: getBasicMetabolicRate
    };

    return publicAPI;

};

module.exports = motionsplan;
