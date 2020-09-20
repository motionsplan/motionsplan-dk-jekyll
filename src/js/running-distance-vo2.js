let motionsplan = {};

motionsplan.RunningDistanceVO2 = function() {

    function getKilometersPrHour(m, s, km) {
        // return (km / (s + (m * 60)) * (60 * 60)); // (m * 60 + s) / (60*60)
        s = s / (60 * 60);
        m = m / 60;
        return (km / (s + m));
    }

    // Based on https://www.researchgate.net/profile/Luc_Leger/publication/19712663_New_approaches_to_predict_VO2max_and_endurance_from_running_performances_The_Journal_of_sports_medicine_and_physical_fitness_27_4_401-409_1988/links/54f5fa880cf27d8ed71d235f/New-approaches-to-predict-VO2max-and-endurance-from-running-performances-The-Journal-of-sports-medicine-and-physical-fitness-27-4-401-409-1988.pdf
    function getEstimatedFitnessLevel(min, sec, km) {
        var kmt = getKilometersPrHour(min, sec, km);
        return 3.5 * getMETBasedOnKmAndKmt(km, kmt);
    }

    function getMETBasedOnKmAndKmt(km, kmt) {
        if (km < 1.5) {
            return 1.2730 + 0.8325 * kmt;
        }
        else if (km < 1.6) {
            return 2.4388 + 0.8343 * kmt;
        }
        else if (km < 2) {
            return 2.5043 + 0.8400 * kmt;
        }
        else if (km < 3) {
            return 0.27297 + 0.8527 * kmt;
        }
        else if (km < 5) {
            return 0.29226 + 0.8900 * kmt;
        }
        else if (km < 10) {
            return 3.1747 + 0.9139 * kmt;
        }
        else if (km < 15) {
            return 4.7226 + 0.8690 * kmt;
        }
        else if (km < 20) {
            return 4.8619 + 0.8872 * kmt;
        }
        else if (km < 42.195) {
            return 4.9574 + 0.8995 * kmt;
        }
        else {
            return 6.9021 + 0.8246 * kmt;
        }
    }

    var publicAPI = {
        getEstimatedFitnessLevel: getEstimatedFitnessLevel,
        getKilometersPrHour: getKilometersPrHour,
        getMETBasedOnKmAndKmt: getMETBasedOnKmAndKmt
    };

    return publicAPI;
}

module.exports = motionsplan;
