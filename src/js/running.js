let motionsplan = {};

motionsplan.Running = function() {

    // Funktion til at beregne kalorieforbrug
    // Tager kun højde for dansk komma i input
    function getEstimatedCalories(v, km) {
        return v * km * 1.055;
    }

    // Funktion til at beregne antal skridt
    function getEstimatedSteps(l, km) {
        return (km * 1000) / l;
    }

    function getKilometersPrHour(m, s, km) {
        return (km / s + m * 60) / (60 * 60); // (m * 60 + s) / (60*60)
    }

    function getTimePrKilometer(m, s, km) {
        var totalSek = parseInt(m) * 60 + parseInt(s);
        var totalSekPrKm = totalSek / parseFloat(km);
        var minPrKm = parseInt(totalSekPrKm / 60);
        var rest = totalSekPrKm - (minPrKm * 60);
        var sek = rest.toFixed(0);

        if (sek < 10) {
            return minPrKm.toFixed(0) + ":0" + rest.toFixed(0);
        }
        else {
            return minPrKm.toFixed(0) + ":" + rest.toFixed(0);
        }

    }

    // Based on https://www.researchgate.net/profile/Luc_Leger/publication/19712663_New_approaches_to_predict_VO2max_and_endurance_from_running_performances_The_Journal_of_sports_medicine_and_physical_fitness_27_4_401-409_1988/links/54f5fa880cf27d8ed71d235f/New-approaches-to-predict-VO2max-and-endurance-from-running-performances-The-Journal-of-sports-medicine-and-physical-fitness-27-4-401-409-1988.pdf
    function getEstimatedFitnessLevel(m2, s2, km) {
        // var KmPerTime2 = getKilometersPrHour(m2, s2, km);
        var KmPerTime2 = (parseFloat(km) / ((parseInt(s2) + parseInt(m2) * 60) / (60 * 60))).toFixed(2);
        return (3.5 * (4.326 + (0.862 * KmPerTime2) - (-1.3264 * Math.log(km) + 2.6934))).toFixed(1);
    }

    var publicAPI = {
        getEstimatedFitnessLevel: getEstimatedFitnessLevel,
        getKilometersPrHour : getKilometersPrHour,
        getTimePrKilometer : getTimePrKilometer
    };

    return publicAPI;
}

module.exports = motionsplan;
