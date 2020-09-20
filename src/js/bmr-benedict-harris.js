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

motionsplan.BMRBenedictHarris = function(sex, age, weight, height, pal) {
    age = parseInt(age);
    weight = parseInt(weight);
    height = parseInt(height); // convert to meters
    sex = sex;
    var activityConstant = pal / 100;
    var basicMeta;

    function getBasicMetabolicRate() {
        if (sex == "male") {
            return basicMeta = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
        }

        return basicMeta = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    }

    function getBulk(bulkConstant) {
        return getTotalEnergyExpenditure() + bulkConstant;
    }

    function getCut(bulkConstant) {
        return getTotalEnergyExpenditure() - bulkConstant;
    }

    function getProtein() {
        return weight * 2;
    }

    // TEE
    function getTotalEnergyExpenditure() {
        return parseInt(getBasicMetabolicRate() * activityConstant);
    }

    // PAL
    function getPhysicalActivityLevel() {
        return activityConstant;
    }

    var publicAPI = {
        getBasicMetabolicRate: getBasicMetabolicRate,
        getTotalEnergyExpenditure: getTotalEnergyExpenditure,
        getPhysicalActivityLevel: getPhysicalActivityLevel,
        getBulk: getBulk,
        getCut: getCut,
        getProtein : getProtein
    };

    return publicAPI;

};

module.exports = motionsplan;
