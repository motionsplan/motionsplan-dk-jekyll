let motionsplan = {}

motionsplan.YYIR1 = function(level, shuttles) {
   let distTOTAL = [0, 0, 0, 0, 0, 40, 40, 40, 40, 80, 80, 120, 200, 320, 480, 800, 1120, 1440, 1760, 2080, 2400, 2720, 3040, 3360];
   let distance = distTOTAL[level] + (shuttles * 40 - 40);
   let calcval = (distance * 0.0084 + 36.4);

    function getDistance() {
        return distance;
    }

    function getFitnessLevel() {
        return calcval;
    }

    // Age is not working at the moment in the calculator
    function getEvaluation(sex, age = 10) {
       let ageGroup;
       let normdistance = getDistance();
        if (age <= 25) {
            ageGroup = 0;
        }
        else if (age <= 35) {
            ageGroup = 1;
        }
        else if (age <= 45) {
            ageGroup = 2;
        }
        else if (age <= 55) {
            ageGroup = 3;
        }
        else if (age <= 65) {
            ageGroup = 4;
        }
        else {
            ageGroup = 5;
        }
        if (sex == "male") {

           let male = [
                [2400, 57, 52, 46, 42, 38],
                [2000, 49, 43, 39, 36, 33],
                [1520, 43, 39, 36, 32, 29],
                [1040, 40, 35, 32, 30, 26],
                [520, 35, 31, 29, 26, 22],
                [0, 30, 26, 25, 22, 20],
                [0, 0, 0, 0, 0, 0]
            ];
            if (normdistance >= male[0][ageGroup]) {
                return "Elite";
            }
            else if (normdistance >= male[1][ageGroup]) {
                return "Excellent";
            }
            else if (normdistance >= male[2][ageGroup]) {
                return "Good";
            }
            else if (normdistance >= male[3][ageGroup]) {
                return "Average";
            }
            else if (normdistance >= male[4][ageGroup]) {
                return "Below Average";
            }
            else if (normdistance >= male[5][ageGroup]) {
                return "Poor";
            }
            else if (normdistance >= male[6][ageGroup]) {
                return "Poor";
            }
        }
        else {

           let female = [
                [1600, 53, 46, 41, 38, 33],
                [1320, 45, 38, 34, 32, 28],
                [1000, 39, 34, 31, 28, 25],
                [680, 35, 31, 28, 25, 22],
                [320, 31, 27, 25, 22, 19],
                [0, 26, 22, 20, 18, 17],
                [0, 0, 0, 0, 0, 0]
            ];

            if (normdistance >= female[0][ageGroup]) {
                return "Elite";
            }
            else if (normdistance >= female[1][ageGroup]) {
                return "Excellent";
            }
            else if (normdistance >= female[2][ageGroup]) {
                return "Good";
            }
            else if (normdistance >= female[3][ageGroup]) {
                return "Average";
            }
            else if (normdistance >= female[4][ageGroup]) {
                return "Below Average";
            }
            else if (normdistance >= female[5][ageGroup]) {
                return "Poor";
            }
            else if (normdistance >= female[6][ageGroup]) {
                return "Poor";
            }
        }
    }

   let publicAPI = {
        getDistance: getDistance,
        getEvaluation: getEvaluation,
        getFitnessLevel: getFitnessLevel

    };

    return publicAPI;
};

module.exports = motionsplan;
