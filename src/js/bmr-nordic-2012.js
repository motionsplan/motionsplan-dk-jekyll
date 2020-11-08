let motionsplan = {};

/**
 * Based on Nordic Nutrition Recommendations 2012
 */
motionsplan.BMRNordicNutritionRecommendations2012 = function(sex, age, weight, height = 0) {
    var bmr;
    sex = sex; // Men is 1; women 0
    age = age;
    weight = weight;
    height = height / 100;

    function isMale() {
        if (sex == "male") {
            return true;
        }
        return false;
    }

    function getBasicMetabolicRate() {
        return getRestingEnergyExpenditure();
    }

    // BMR - Nordiska 2012 - kJ
    function getRestingEnergyExpenditure() {
        if (height > 0) {
            return getRestingEnergyExpenditureHeight();
        }

        if (isMale()) {
            if (age > 70) {
                bmr = 0.0573 * weight + 2.01;
            } else if (age > 60) {
                bmr = 0.0543 * weight + 2.37;
            } else if (age > 30) {
                bmr = 0.0592 * weight + 2.48;
            } else if (age > 18) {
                bmr = 0.0669 * weight + 2.28;
            } else if (age > 10) {
                bmr = 0.0769 * weight + 2.43;
            } else if (age > 2) {
                bmr = 0.0937 * weight + 2.15;
            } else {
                bmr = 0.255 * weight - 0.141;
            }
        } else {
            if (age > 70) {
                bmr = 0.0417 * weight + 2.41;
            } else if (age > 60) {
                bmr = 0.0429 * weight + 2.39;
            } else if (age > 30) {
                bmr = 0.0407 * weight + 2.9;
            } else if (age > 18) {
                bmr = 0.0546 * weight + 2.33;
            } else if (age > 10) {
                bmr = 0.0465 * weight + 3.18;
            } else if (age > 2) {
                bmr = 0.0842 * weight + 2.12;
            } else {
                bmr = 0.246 * weight - 0.0965;
            }
        }
        return bmr * 1000;
    }

    // BMR - Nordiska 2012 - based on height
    function getRestingEnergyExpenditureHeight() {
        if (isMale()) {
            if (age > 70) {
                bmr = 0.0748 * weight + 2.26 * height - 1.070;
            } else if (age > 60) {
                bmr = 0.0748 * weight + 2.26 * height - 1.070;
            } else if (age > 30) {
                bmr = 0.0476 * weight + 2.26 * height - 0.574;
            } else if (age > 18) {
                bmr = 0.0600 * weight + 1.31 * height + 0.473;
            } else if (age > 10) {
                bmr = 0.0651 * weight + 1.11 * height + 1.25;
            } else if (age > 2) {
                bmr = 0.0632 * weight + 1.31 * height + 1.28;
            } else {
                bmr = 0.118 * weight + 3.59 * height - 1.55;
            }
        } else {
            if (age > 70) {
                bmr = 0.0356 * weight + 1.76 * height + 0.0448;
            }else if (age > 60) {
                bmr = 0.0356 * weight + 1.76 * height + 0.0448;
            } else if (age > 30) {
                bmr = 0.0342 * weight + 2.10 * height - 0.0486;
            } else if (age > 18) {
                bmr = 0.0433 * weight + 2.57 * height - 1,180;
            } else if (age > 10) {
                bmr = 0.0393 * weight + 1.04 * height + 1.93;
            } else if (age > 2) {
                bmr = 0.0666 * weight + 0.878 * height + 1.46;
            } else {
                bmr = 0.127 * weight + 2.94 * height - 1.20;
            }
        }
        return bmr * 1000;
    }

    let publicAPI = {
        getBasicMetabolicRate : getBasicMetabolicRate,
        getRestingEnergyExpenditure : getRestingEnergyExpenditure
    };

    return publicAPI;
};

module.exports = motionsplan;
