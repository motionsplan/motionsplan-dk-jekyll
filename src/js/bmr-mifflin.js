let motionsplan = {};

motionsplan.BMRMifflin = function(sex, age, weight, height) {
    age = parseInt(age);
    weight = parseInt(weight); // kg
    height = parseInt(height); 
    sex = sex;

    function getBasicMetabolicRate() {
        
        let bmr;
        if (sex == "male") {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        } else {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        }
        // return in joules
        return bmr * 4.184;
            
    }

   let publicAPI = {
        getBasicMetabolicRate : getBasicMetabolicRate
    };

    return publicAPI;

};

module.exports = motionsplan;
