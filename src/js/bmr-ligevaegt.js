let motionsplan = {};

motionsplan.BMREquilibrium = function(tee, change) {
    tee = parseInt(tee);
    change = parseInt(change);

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
