let motionsplan = {}

motionsplan.Billat = function(distance) {
  let dist = distance;
  let vel = dist / 360;
  
  function getVelocity() {
    return vel;
  }

  let tdist = Math.ceil(dist / 200) * 100;
  let d30 = Math.ceil(dist / 12);
  let r30 = Math.ceil(d30 / 2);
  let d60 = d30 * 2;
  let r60 = r30 * 2;

  function getDistance30() {
    return d30;
  }
  
  function getRecovery30() {
    return r30;
  }
  
  function getDistance60() {
    return d60;
  }
  
  function getRecovery60() {
    return r60;
  }

  function getDistance3min() {
    return tdist;
  }

  let ttime = tdist / vel;
  let mins = Math.floor(ttime / 60);
  
  function getMinutes3min() {
    return mins;    
  }
  
  function getSeconds3min() {
    return Math.ceil(ttime - (60 * mins));
  }
  
  function getTimePr400Meter3min() {
    return Math.ceil(400 / vel);
  }

  let publicAPI = {
    getVelocity: getVelocity,
    getDistance30: getDistance30,
    getRecovery30: getRecovery30,
    getDistance60: getDistance60,
    getRecovery60: getRecovery60,
    getDistance3min: getDistance3min,
    getMinutes3min : getMinutes3min,
    getSeconds3min : getSeconds3min,
    getTimePr400Meter3min : getTimePr400Meter3min
  };

  return publicAPI;
}

module.exports = motionsplan;
