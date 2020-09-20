let motionsplan = {};

motionsplan.RunningWeightLoss = function(weight, loose) {
  weight = weight;
  loose = loose * -1;
  // løbetid * (startvægt - vægttab * 0.8) / startvægt;

  function getEstimatedFinishTime(hours, minutes, seconds) {
    var h1 = hours;
    var m1 = minutes;
    var s1 = seconds;

    if (h1 == '00') { h1 = 0; }
    if (h1 == '') { h1 = 0; }
    if (m1 == '00') { m1 = 0; }
    if (m1 == '') { m1 = 0; }
    if (s1 == '00') { s1 = 0; }
    if (s1 == '') { s1 = 0; }

    var time1 = parseInt(h1 * 3600) + parseInt(m1 * 60) + parseInt(s1 * 1);
    var output1 = time1 * (weight - loose * 0.8) / weight;

    var h_out = Math.floor(output1 / 3600);
    var m_out = Math.floor((output1 - h_out * 3600) / 60);
    var s_out = Math.floor(output1 - h_out * 3600 - m_out * 60);
    if (h_out < 10) { h_out = '0' + h_out; }
    if (m_out < 10) { m_out = '0' + m_out; }
    if (s_out < 10) { s_out = '0' + s_out; }
    if (h_out == 0) { h_out = '00'; }
    if (m_out == 0) { m_out = '00'; }
    if (s_out == 0) { s_out = '00'; }
    return h_out + ':' + m_out + ':' + s_out;
  }

  var publicAPI = {
    getEstimatedFinishTime: getEstimatedFinishTime
  };

  return publicAPI;
}

module.exports = motionsplan;
