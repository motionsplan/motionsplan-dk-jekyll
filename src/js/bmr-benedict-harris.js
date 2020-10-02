let motionsplan = {};

motionsplan.BMRBenedictHarris = function(sex, age, weight, height) {
    age = parseInt(age);
    weight = parseInt(weight);
    height = parseInt(height); // convert to meters
    sex = sex;

    function getBasicMetabolicRate() {
        if (sex == "male") {
            return 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
        }

        return 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    }

    var publicAPI = {
        getBasicMetabolicRate : getBasicMetabolicRate
    };

    return publicAPI;

};

module.exports = motionsplan;
