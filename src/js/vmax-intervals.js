let motionsplan = {}

// vo2max i ml
motionsplan.VmaxIntervals = function(vmax, tmax_min, tmax_sec) {
  vmax = vmax;
  tmax_min = tmax_min;
  tmax_sec = tmax_sec;

  var tmax = tmax_min * 60 + tmax_sec;

  function getVelocity(percentage = 60) {
    percentage = percentage / 100;
    return (vmax * percentage).toFixed(2);
  }

  function getTime(percentage = 60) {
    percentage = percentage / 100;
    var min = Math.floor((tmax * percentage) / 60);
    var sec = ((tmax * percentage) - (Math.floor((tmax * percentage) / 60) * 60)).toFixed(0);
    if (sec < 10) {
      sec = '0' + sec;
    }
    return min + ":" + sec;
  }

  var publicAPI = {
    getVelocity : getVelocity,
    getTime : getTime
  };

  return publicAPI;
}

module.exports = motionsplan;
