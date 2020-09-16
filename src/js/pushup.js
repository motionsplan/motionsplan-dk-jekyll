let motionsplan = {}

motionsplan.Pushup = function(age, sex) {
  var A, StandDev, PercRegress, Zscore, PE;
  var age = age;
  var sex = sex;

  function getPopulationAverage() {
    if (isMale()) {
      return Math.round(-69.12079872 + 10.96689892 * age - 0.40037146 * Math.pow(age, 2) + 0.00576340 * Math.pow(age, 3) - 0.00002911 * Math.pow(age, 4));
    }
    return Math.round(-0.00003969 * Math.pow(Age, 4) + 0.00710960 * Math.pow(Age, 3) - 0.45191034 * Math.pow(Age, 2) + 11.56628022 * Age - 75.77740372);
  }

  function isMale() {
    if (sex == 'Male') {
      return true;
    }
    return false;
  }

  function calc(repetitions) {
        if (S == "Male" && form.Repetitions.value <= getPopulationAverage()) {
            StandDev = (-33980791 + 3096739.1 * age) / (1 + 40384.763 * age + 3713.2581 * Math.pow(age, 2));
        }
        else if (S == "Male" && form.Repetitions.value > getPopulationAverage()) {
            StandDev = -56.09510371 + 8.70427042 * age - 0.34822960 * Math.pow(Age, 2) + 0.00562839 * Math.pow(Age, 3) - 0.00003203 * Math.pow(Age, 4);
        }
        else if (S == "Female" && form.Repetitions.value <= getPopulationAverage()) {
            StandDev =
                1.0794478 * Math.pow(0.96572202, Age) * Math.pow(Age, 1.015305);
        }
        else if (S == "Female" && form.Repetitions.value > getPopulationAverage()) {
            StandDev = (5.5414783 + 0.47843206 * Age) / (1 - 0.010122299 * Age + 0.0009372169 * Math.pow(Age, 2));
        }
        Zscore = (form.Repetitions.value - getPopulationAverage()) / StandDev;
        PE = Math.exp(-1.8355027 * (Math.abs(Zscore) - 0.23073201));
        PercRegress = -0.41682992 * (PE - 1) / (PE + 1) + 0.58953708;
        
    function getRating() {    
        
        if (Zscore > 0) {
            form.Score.value = Math.round(PercRegress * 100)
        }
        if (Zscore <= 0) {
            form.Score.value = Math.round((1 - PercRegress) * 100)
        }
        if (Zscore >= 1) {
            form.Rating.value = "Excellent"
        }
        else if (Zscore < 1 && Zscore >= 0.5) {
            form.Rating.value = "Good"
        }
        else if (Zscore < 0.5 && Zscore >= -0.5) {
            form.Rating.value = "Average"
        }
        else if (Zscore < -0.5 && Zscore >= -1) {
            form.Rating.value = "Fair"
        }
        else if (Zscore < -1) {
            form.Rating.value = "Poor"
        }
    }

  var publicAPI = {
    getBMI : getBMI,
    getPonderalIndex : getPonderalIndex

  };

  return publicAPI;
}

module.exports = motionsplan;
