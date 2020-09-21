let motionsplan = {};

motionsplan.Pushup = function(sex, age, repetitions) {
    var A, StandDev, PercRegress, Zscore, PE;
    age = age;
    sex = sex;
    repetitions;
    var score;

    function getPopulationAverage() {
        if (isMale()) {
            return -69.12079872 + 10.96689892 * age - 0.40037146 * Math.pow(age, 2) + 0.00576340 * Math.pow(age, 3) - 0.00002911 * Math.pow(age, 4);
        }
        return -0.00003969 * Math.pow(age, 4) + 0.00710960 * Math.pow(age, 3) - 0.45191034 * Math.pow(age, 2) + 11.56628022 * age - 75.77740372;
    }

    function isMale() {
        if (sex == 'male') {
            return true;
        }
        return false;
    }

    function getScore() {
        if (isMale()) {
            if (repetitions <= getPopulationAverage()) {
                StandDev = (-33980791 + 3096739.1 * age) / (1 + 40384.763 * age + 3713.2581 * Math.pow(age, 2));
            }
            else if (repetitions > getPopulationAverage()) {
                StandDev = -56.09510371 + 8.70427042 * age - 0.34822960 * Math.pow(age, 2) + 0.00562839 * Math.pow(age, 3) - 0.00003203 * Math.pow(age, 4);
            }
        }
        else {
            if (repetitions <= getPopulationAverage()) {
                StandDev =
                    1.0794478 * Math.pow(0.96572202, age) * Math.pow(age, 1.015305);
            }
            else if (repetitions > getPopulationAverage()) {
                StandDev = (5.5414783 + 0.47843206 * age) / (1 - 0.010122299 * age + 0.0009372169 * Math.pow(age, 2));
            }
        }
        Zscore = (repetitions - getPopulationAverage()) / StandDev;
        PE = Math.exp(-1.8355027 * (Math.abs(Zscore) - 0.23073201));
        PercRegress = -0.41682992 * (PE - 1) / (PE + 1) + 0.58953708;;

        if (Zscore > 0) {
            score = Math.round(PercRegress * 100);
        }
        if (Zscore <= 0) {
            score = Math.round((1 - PercRegress) * 100);
        }

        return score;
    }

    function getRating() {

        if (Zscore >= 1) {
            return "Rigtig godt"; // Excellent
        }
        if (Zscore < 1 && Zscore >= 0.5) {
            return "Godt"; // Good
        }
        else if (Zscore < 0.5 && Zscore >= -0.5) {
            return "Gennemsnitlig"; // Average
        }
        else if (Zscore < -0.5 && Zscore >= -1) {
            return "Nogenlunde"; // Fair
        }
        else if (Zscore < -1) {
            return "Ikke så godt"; // "Poor"
        }
    }

    var publicAPI = {
        getRating: getRating,
        getScore: getScore

    };

    return publicAPI;
}

module.exports = motionsplan;
