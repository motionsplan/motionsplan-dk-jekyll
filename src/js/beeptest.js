let motionsplan = {};

motionsplan.BeepTest = function(level, shuttles, version) {
   let shuttleTOTAL = [0, 7, 8, 8, 8, 9, 9, 10, 10, 11, 11, 11, 12, 12, 13, 13, 13, 14, 14, 15, 15, 16];
   let distTOTAL = [0, 0, 140, 300, 460, 620, 800, 980, 1180, 1380, 1600, 1820, 2040, 2280, 2520, 2780, 3040, 3300, 3580, 3860, 4160, 4460];

   let Fract = shuttles / shuttleTOTAL[level];
   let Score = Number(level) + Fract;

    version = version;
    let adjust = 0;
    if (version == "YYE2") {
        adjust = 1180;
    }

    let distance = distTOTAL[level] + (shuttles * 20) - adjust;

    function getDistance() {
        return distance;
    }

    function getTotalShuttles() {
        let totalshuttles = distance / 20;
        return totalshuttles;
    }

    function getFitnessLevel() {
        let calcval = ((0.0028 * Score * Score * Score) - (0.0968 * Score * Score) + (4.5226 * Score) + 5.5137);
        return calcval;
    }

    let publicAPI = {
        getDistance: getDistance,
        getTotalShuttles: getTotalShuttles,
        getFitnessLevel: getFitnessLevel
    };

    return publicAPI;
};

module.exports = motionsplan;
