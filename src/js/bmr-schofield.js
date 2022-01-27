let motionsplan = {};

motionsplan.BMRSchofield = function(sex, age, weight) {
    sex = sex;
    age = age;
    weight = weight;

    function isMale() {
        if (sex == "male") {
            return true;
        }
        return false;
    }

    // Værdier baseret på Schofield
    function getBasicMetabolicRate() {
        if (isMale()) {
            if (age > 60) {
                return 49.9 * weight + 2930;
            }
            if (age > 30) {
                return 48 * weight + 3653;
            }
            if (age > 18) {
                return 63 * weight + 2896;
            }
            if (age > 10) {
                return 74 * weight + 2754;
            }
            if (age > 2) {
                return 95 * weight + 2110;
            }
            if (age > 0) {
                return 249 * weight - 127;
            }
        }
        if (age > 60) {
            return 38 * weight + 2755;
        }   
        if (age > 30) {
            return 34 * weight + 3538;
        }
        if (age > 18) {
            return 62 * weight + 2036;
        }
        if (age > 10) {
            return 56 * weight + 2898;
        }
        if (age > 2) {
            return 85 * weight + 2033;
        }
        if (age > 0) {
            return 244 * weight - 130;
        }
    }

   let publicAPI = {
        getBasicMetabolicRate: getBasicMetabolicRate
    };

    return publicAPI;

};

module.exports = motionsplan;
