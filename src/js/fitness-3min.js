let motionsplan = {}

// TODO - NY GANGTEST _ https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8434117/
// TODO - NY GANGTEST - https://pubmed.ncbi.nlm.nih.gov/22821953/
// 3K-test -- https://pubmed.ncbi.nlm.nih.gov/33092333/
// VO2max -- running paces -- ?

// app -- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9389381/

motionsplan.Fitness3MT = function(CS) {
  // CS critical speed - average speed in last 30 seconds of the test

  function getMaximalOxygenUptake() {
    return getFitnessLevel() * wgt / 1000;
  }

  function getFitnessLevel() {
    // gender = (F = 0, M = 1)
    return 8.449 * CS + 4.387 * gender + 14.683;
  }

  // https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7760774/
  // not to be used. no significant
  function getD() {
    let t = 150;
    // average_speeds in m/s
    return t * (average_speed_0_150_seconds - average_speed_150_180_seconds);
  }

  let publicAPI = {
    getMaximalOxygenUptake: getMaximalOxygenUptake,
    getFitnessLevel: getFitnessLevel
  };

  return publicAPI;
}

module.exports = motionsplan;
