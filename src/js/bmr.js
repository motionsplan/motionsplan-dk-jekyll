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

motionsplan.EnergyExpenditure = function(sex, age, weight, pal, sport) {
    var bmr;
    var koen = sex;
    var alder = age;
    var vaegt = weight;
    sport = sport;
    pal = pal;

    // BMR
    function getBasicMetabolicRate() {
        if ((koen == "1") && (alder > 10) && (alder < 19)) {
            bmr = 74 * vaegt + 2750;
        }
        else if ((koen == "1") && (alder > 18) && (alder < 31)) {
            bmr = 64 * vaegt + 2840;
        }
        else if ((koen == "1") && (alder > 30) && (alder < 61)) {
            bmr = 48.5 * vaegt + 3670;
        }
        else if ((koen == "1") && (alder > 60) && (alder < 76)) {
            bmr = 49.9 * vaegt + 2930;
        }
        else if ((koen == "1") && (alder > 75)) {
            bmr = 35 * vaegt + 3430;
        }
        else if ((koen == "0") && (alder > 10) && (alder < 19)) {
            bmr = 56 * vaegt + 2900;
        }
        else if ((koen == "0") && (alder > 18) && (alder < 31)) {
            bmr = 61.5 * vaegt + 2080;
        }
        else if ((koen == "0") && (alder > 30) && (alder < 61)) {
            bmr = 36.4 * vaegt + 3470;
        }
        else if ((koen == "0") && (alder > 60) && (alder < 76)) {
            bmr = 38.6 * vaegt + 2880;
        }
        else if ((koen == "0") && (alder > 75)) {
            bmr = 41 * vaegt + 2610;
        }
        return bmr;
    }

    // TEE
    function getTotalEnergyExpenditure() {
        return getPhysicalActivityLevel() * getBasicMetabolicRate();
    }

    // PAL
    function getPhysicalActivityLevel() {
        var pal2;
        var pal_val = pal;
        pal2 = pal_val * 1;
        if (sport == true) {
            pal2 = pal2 + 0.3;
        }
        return pal2;
    }

    var publicAPI = {
        getBasicMetabolicRate: getBasicMetabolicRate,
        getTotalEnergyExpenditure: getTotalEnergyExpenditure,
        getPhysicalActivityLevel: getPhysicalActivityLevel
    };

    return publicAPI;

};

module.exports = motionsplan;
