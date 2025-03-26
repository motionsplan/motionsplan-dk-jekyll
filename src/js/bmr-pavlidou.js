let motionsplan = {};

// https://pubmed.ncbi.nlm.nih.gov/36837808/
motionsplan.BMRPavlidou = function(sex, age, weight, height) {

    height = height / 100;

    function isMale() {
        if (sex == "male") {
            return true;
        }
        return false;
    }
    function getBasicMetabolicRate() {
        let bmr;
        if (isMale()) {
            bmr = (9.65 * weight) + (573 * height) - (5.08 * age) + 260;
        } else {
            bmr = (7.38 * weight) + (607 * height) - (2.31 * age) + 43;
        }
        return bmr * 4.186;
    }

   let publicAPI = {
        getBasicMetabolicRate: getBasicMetabolicRate
    };

    return publicAPI;

};

module.exports = motionsplan;
