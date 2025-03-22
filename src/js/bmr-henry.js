let motionsplan = {};

motionsplan.BMRHenry = function(sex, age, weight, height) {
    sex = sex;
    age = age;
    weight = weight;
    height = height / 100; // convert to meters

    function isMale() {
        if (sex == "male") {
            return true;
        }
        return false;
    }

    // Værdier baseret på Schofield
    function getBasicMetabolicRate() {
        let bmr;
        if (isMale()) {
            if (age >= 60) {
                bmr = 0.0478 * weight + 2.26 * height - 1.07;
            }
            if (age >= 30) {
                bmr = 0.0476 * weight + 2.26 * height - 0.574;
            }
            if (age >= 18) {
                bmr = 0.0600 * weight + 1.31 * height + 0.473;
            } else {
                bmr = false;
            }
            return bmr * 1000;
        }
        if (age >= 60) {
            bmr = 0.0356 * weight + 1.76 * height + 0.0448;
        }   
        if (age >= 30) {
            bmr = 0.0342 * weight + 2.10 * height - 0.0486;
        }
        if (age >= 18) {
            bmr = 0.0433 * weight + 2.57 * height - 1.18;
        } else { 
           bmr = false;
        }
        return bmr * 1000;
    }

   let publicAPI = {
        getBasicMetabolicRate: getBasicMetabolicRate
    };

    return publicAPI;

};

module.exports = motionsplan;
