let motionsplan = {};

motionsplan.BMRCunningham = function(lbm, formula = "cunningham") {

    if (formula == "recommended_formula") {
        formula = "cunningham";
    }

    // kJ / day
    function getCunningham() {
        return 500 + 22 * lbm * 4.186
    }

    function getNordicNutrition() {
        return (0.09 * lbm + 1.55) * 1000;
    }

    function getBasicMetabolicRate() {
        if (formula == "nordic_nutrition_2012") {
            return getNordicNutrition();
        }
        // recommended formula
        return getCunningham();
    }

    function getFormulaName() {
        const formulas = [];
        formulas["cunningham"]= "Cunningham (1991)";
        formulas["nordic_nutrition_2012"]= "Nordic Nutrition Recommendations (2012)";
        return formulas[formula];
    }

   let publicAPI = {
        getBasicMetabolicRate: getBasicMetabolicRate, 
        getFormulaName : getFormulaName
    };

    return publicAPI;

};

module.exports = motionsplan;
