

let motionsplan = {};
const bmr_benedict_harris = require('./bmr-benedict-harris');
const bmr_henry = require('./bmr-henry');
const bmr_mifflin = require('./bmr-mifflin');
const bmr_equilibrium = require('./bmr-ligevaegt');
const ree = require('./bmr-nordic-2012');

motionsplan.BMR = function(sex, age, weight, height, formula) {
    let gender = sex;
    let b;

    if (formula == 'schofield') {
        b = schofield.BMRSchofield(gender, age, weight);
    } else if (formula == 'benedict_harris') {
        b = bmr_benedict_harris.BMRBenedictHarris(gender, age, weight, height);
    } else if (formula == 'henry') {
          b = bmr_henry.BMRHenry(gender, age, weight, height);
    } else if (formula == 'mifflin') {
      b = bmr_mifflin.BMRMifflin(gender, age, weight, height);
    } else {
        b = ree.BMRNordicNutritionRecommendations2012(gender, age, weight, height);
    }

    function getBasicMetabolicRate() {
        return b.getBasicMetabolicRate();
    }

   let publicAPI = {
        getBasicMetabolicRate: getBasicMetabolicRate
    };

    return publicAPI;

};

module.exports = motionsplan;
