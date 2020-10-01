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

motionsplan.BMRSchofield = function(sex, age, weight) {
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

    // Værdier baseret på Schofield
    function getBasicMetabolicRate() {
        if (isMale()) {
            if ((age > 0) && (age < 3)) {
                bmr = 249 * weight - 127;
            }
            else if ((age > 2) && (age < 11)) {
                bmr = 95 * weight + 2110;
            }
            else if ((age > 10) && (age < 19)) {
                bmr = 74 * weight + 2754;
            }
            else if ((age > 18) && (age < 31)) {
                bmr = 63 * weight + 2896;
            }
            else if ((age > 30) && (age < 61)) {
                bmr = 48 * weight + 3653;
            }
            else if ((age > 60)) {
                bmr = 49.9 * weight + 2930;
            }
        } else {
            if ((age > 0) && (age < 3)) {
                bmr = 244 * weight - 130;
            }
            else if ((age > 2) && (age < 11)) {
                bmr = 85 * weight + 2033;
            }
            else if ((age > 10) && (age < 19)) {
                bmr = 56 * weight + 2898;
            }
            else if ((age > 18) && (age < 31)) {
                bmr = 62 * weight + 2036;
            }
            else if ((age > 30) && (age < 61)) {
                bmr = 34 * weight + 3538;
            }
            else if ((age > 60)) {
                bmr = 38 * weight + 2755;
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
