let motionsplan = {};

motionsplan.BMRBenedictHarris = function(sex, age, weight, height) {
    age = parseInt(age);
    weight = parseInt(weight);
    height = parseInt(height); // convert to meters
    sex = sex;

    function getBasicMetabolicRate() {
        var bmr;
        if (sex == "male") {
            bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
        } else {
            bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
        }
        return bmr * 4.184;
            
    }

    var publicAPI = {
        getBasicMetabolicRate : getBasicMetabolicRate
    };

    return publicAPI;

};

module.exports = motionsplan;
