let motionsplan = {}

motionsplan.ToPunktTest = function(age, weight, max_hr, work1, hr1, work2, hr2) {
  let work_1 = work1;
  let hr_1 = hr1;
  let work_2 = work2;
  let hr_2 = hr2;
  let hr_max = max_hr;

  function getMaximalWork() {
    return ((hr_max - hr_2) * (work_2 - work_1)) / (hr_2 - hr_1) + work_2;
  }

  function getMaximalOxygenUptake() {
   let mechanical_efficiency = 0.23;
   let oxygen_energy = 21100;
   let bmr = 0.25;
    return (getMaximalWork() / mechanical_efficiency * 60 / oxygen_energy + bmr);
  }
  
  function getFitnessLevel() {
    return (getMaximalOxygenUptake() / weight * 1000);
  }

  let publicAPI = {
    getMaximalWork : getMaximalWork,
    getMaximalOxygenUptake: getMaximalOxygenUptake,
    getFitnessLevel : getFitnessLevel
  };

  return publicAPI;
}

module.exports = motionsplan;
