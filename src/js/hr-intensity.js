let motionsplan = {}

motionsplan.HRIntensity = function(max_hr) {
  var max_hr = max_hr;
  
  function getWorkIntensityBasedOnMaxHR(work_hr) {
    return work_hr / max_hr * 100;
  }

  function getHRBasedOnIntensityFromHeartRateReserve(rest_hr, intensity) {
    return rest_hr * 1 + intensity / 100 * (max_hr - rest_hr);
  }
    
  function getHRIntensityFromHeartRateReserve(rest_hr, work_hr) {
    return (work_hr - rest_hr) / (max_hr - rest_hr) * 100;
  }
  
  var publicAPI = {
    getWorkIntensityBasedOnMaxHR : getWorkIntensityBasedOnMaxHR,
    getHRBasedOnIntensityFromHeartRateReserve : getHRBasedOnIntensityFromHeartRateReserve,
    getHRIntensityFromHeartRateReserve : getHRIntensityFromHeartRateReserve
  };

  return publicAPI;
}

module.exports = motionsplan;
