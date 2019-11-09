let motionsplan = {}

motionsplan.CooperRunning = function() {

  // time in minutes
  function getVO22400Meter(time) {
    return (483 / time) + 3.5;
  }

  // distance in meters
  function getVO212MinTest(distance) {
    return (distance - 504.9) / 44.73;
  }

  var publicAPI = {
    getVO22400Meter: getVO22400Meter,
    getVO212MinTest: getVO212MinTest

  };

  return publicAPI;
}

module.exports = motionsplan;
