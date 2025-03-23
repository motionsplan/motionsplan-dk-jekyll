

let motionsplan = {};
const bmr_benedict_harris = require('./bmr-benedict-harris');
const bmr_henry = require('./bmr-henry');
const bmr_mifflin = require('./bmr-mifflin');
const bmr_equilibrium = require('./bmr-ligevaegt');
const ree = require('./bmr-nordic-2012');

motionsplan.BMR = function(sex, age, weight, height, formula) {
    let gender = sex;
    let b;

    function getRecommendedFormula() {
        let bmi;
        let w = weight;
        let h = height / 100;
        bmi = w / (h * h);
        if (bmi >= 40) {
            formula = "henry";
        } else if (bmi >= 30) { 
            formula = "mifflin";
        } else if (bmi >= 25 && weight >= 30) {
            //formula = "who";
            formula = "nordic_nutrition_2012";
        } else {
            formula = "nordic_nutrition_2012";
        }
    }

    function getFormulaName() {
        const formulas = [];
        formulas["henry"]= "Henry (2005)";
        formulas["schofield"]= "Schofield (1985)";
        formulas["mifflin"]= "Mifflin et al (1990)";
        formulas["benedict_harris"]= "Benedict-Harris (1918-1919)";
        formulas["nordic_nutrition_2012"]= "Nordic Nutrition Recommendations (2012)";
        return formulas[formula];
    }

    function getBasicMetabolicRate() {
        if (formula == "recommended_formula") {
            getRecommendedFormula();
        }
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
    
        return b.getBasicMetabolicRate();
    }

   let publicAPI = {
        getBasicMetabolicRate: getBasicMetabolicRate,
        getFormulaName : getFormulaName
    };

    return publicAPI;

};

module.exports = motionsplan;
