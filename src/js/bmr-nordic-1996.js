let motionsplan = {};

motionsplan.BMRNordicNutritionRecommendations1996 = function(sex, age, weight) {
    sex = sex;
    age = age;
    weight = weight;

    function isMale() {
        if (sex == "male") {
            return true;
        }
        return false;
    }

    // BMR - Nordiska 1996
    function getBasicMetabolicRate() {
        if (isMale()) {
            if (age > 75) {
                return 35 * weight + 3430;
            }
            if (age > 60) {
                return 49.9 * weight + 2930;
            }
            if (age > 30) {
                return 48.5 * weight + 3670;
            }
            if (age > 18) {
                return 64 * weight + 2840;
            }
            if (age > 10) {
                return 74 * weight + 2750;
            }
        }
        
        if (age > 75) {
            return 41 * weight + 2610;
        }
        if (age > 60) {
            return 38.6 * weight + 2880;
        }
        if (age > 30) {
            return 36.4 * weight + 3470;
        }
        if (age > 18) {
            return 61.5 * weight + 2080;
        }
        if (age > 10) {
            return 56 * weight + 2900;
        }
    }

   let publicAPI = {
        getBasicMetabolicRate: getBasicMetabolicRate
    };

    return publicAPI;

};

module.exports = motionsplan;
