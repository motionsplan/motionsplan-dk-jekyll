let motionsplan = {};

motionsplan.CooperRunning = function() {

  // time in minutes
  function getVO22400MeterTest(min, sek) {
   let time = min + (sek / 60);
    return (483 / time) + 3.5;
  }

  // distance in meters
  function getVO212MinTest(distance) {
    return (distance - 504.9) / 44.73;
  }
  
  // distance in meters
  function getOriginalCooper(distance) {
    distance = distance / 1000;
    return (22.351 * distance) - 11.288;
  }

  let publicAPI = {
    getVO22400MeterTest: getVO22400MeterTest,
    getVO212MinTest: getVO212MinTest,
    getCooperOriginal : getOriginalCooper
  };

  return publicAPI;
};

module.exports = motionsplan;
