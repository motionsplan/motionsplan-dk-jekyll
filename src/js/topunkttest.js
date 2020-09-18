let motionsplan = {}

motionsplan.ToPunktTest = function(age, weight, max_hr, work1, hr1, work2, hr2) {
  var work_1 = work1;
  var hr_1 = hr1;
  var work_2 = work2;
  var hr_2 = hr2;
  var age = age;
  var weight = weight;
  var hr_max = max_hr;

  function getMaximalWork() {
    return ((hr_max - hr_2) * (work_2 - work_1)) / (hr_2 - hr_1) + work_2;
  }

  function getMaximalOxygenUptake() {
    var mechanical_efficiency = 0.23;
    var oxygen_energy = 21100;
    var bmr = 0.25;
    return (getMaximalWork() / mechanical_efficiency * 60 / oxygen_energy + bmr);
  }
  
  function getFitnessLevel() {
    return (getMaximalOxygenUptake() / weight * 1000);
  }

  var publicAPI = {
    getMaximalWork : getMaximalWork,
    getMaximalOxygenUptake: getMaximalOxygenUptake,
    getFitnessLevel : getFitnessLevel

  };

  return publicAPI;
}

module.exports = motionsplan;
