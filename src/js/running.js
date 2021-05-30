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
        // return (km / (s + (m * 60)) * (60 * 60)); // (m * 60 + s) / (60*60)
        s = s / (60 * 60);
        m = m / 60;
        return (km / (s + m));
    }

    function getTimePrKilometer(m, s, km) {
        let totalSek = parseInt(m) * 60 + parseInt(s);
        let totalSekPrKm = totalSek / parseFloat(km);
        let minPrKm = parseInt(totalSekPrKm / 60);
        let rest = totalSekPrKm - (minPrKm * 60);
        let sek = rest.toFixed(0);

        if (sek < 10) {
            return minPrKm.toFixed(0) + ":0" + rest.toFixed(0);
        }
        else {
            return minPrKm.toFixed(0) + ":" + rest.toFixed(0);
        }
    }

    function convertMinPerKmToKmt(min, sec) {
        return 60/(min*1+(sec/60));
    }

    function convertKmtToMinPerKm(kmt) {
        let min = 60 / kmt;
        let min_out = Math.floor(min);
        let sec_out = Math.round((min - Math.floor(min)) * 60);
        if (sec_out < 10) {
            sec_out='0'+sec_out;
        }
        return (min_out + ":" + sec_out);
    }
    
    function convertMinPerKmToDistanceForDuration(min, sec, duration_minutes, duration_seconds) {
        let velocity = convertMinPerKmToKmt(min, sec);
        return velocity * (duration_minutes + (duration_seconds / 60)) / 60 * 1000;
    }

    function getDistanceFromTimeAndVelocity(min, sec, velocity) {
        let time = min + (sec / 60);
        return (velocity * time / 60);
    }

    function getTimeFromDistanceAndVelocity(distance, velocity) {
        return (distance * 60) / velocity;
    }

    let publicAPI = {
        getKilometersPrHour : getKilometersPrHour,
        getTimePrKilometer : getTimePrKilometer,
        convertKmtToMinPerKm : convertKmtToMinPerKm,
        convertMinPerKmToKmt : convertMinPerKmToKmt,
        convertMinPerKmToDistanceForDuration : convertMinPerKmToDistanceForDuration,
        getDistanceFromTimeAndVelocity : getDistanceFromTimeAndVelocity,
        getTimeFromDistanceAndVelocity : getTimeFromDistanceAndVelocity
    };

    return publicAPI;
}

module.exports = motionsplan;
