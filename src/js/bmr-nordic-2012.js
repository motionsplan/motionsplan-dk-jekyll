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

    // BMR - Nordiska 2012
    function getRestingEnergyExpenditure() {
        if ((koen == "1") && (alder > 10) && (alder < 19)) {
            bmr = 0.0769 * vaegt + 2.43;
        }
        else if ((koen == "1") && (alder > 18) && (alder < 31)) {
            bmr = 0.0669 * vaegt + 2.28;
        }
        else if ((koen == "1") && (alder > 30) && (alder < 61)) {
            bmr = 0.0592 * vaegt + 2.48;
        }
        else if ((koen == "1") && (alder > 60) && (alder < 71)) {
            bmr = 0.0543 * vaegt + 2.37;
        }
        else if ((koen == "1") && (alder > 70)) {
            bmr = 0.0573 * vaegt + 2.01;
        }
        else if ((koen == "0") && (alder > 10) && (alder < 19)) {
            bmr = 0.0465 * vaegt + 3.18;
        }
        else if ((koen == "0") && (alder > 18) && (alder < 31)) {
            bmr = 0.0546 * vaegt + 2.33;
        }
        else if ((koen == "0") && (alder > 30) && (alder < 61)) {
            bmr = 0.0407 * vaegt + 2.9;
        }
        else if ((koen == "0") && (alder > 60) && (alder < 71)) {
            bmr = 0.0429 * vaegt + 2.39;
        }
        else if ((koen == "0") && (alder > 70)) {
            bmr = 0.0417 * vaegt + 2.41;
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
        getTotalEnergyExpenditure: getTotalEnergyExpenditure,
        getPhysicalActivityLevel: getPhysicalActivityLevel
    };

    return publicAPI;

};

module.exports = motionsplan;
