let motionsplan = {};

motionsplan.RunningWeightLoss = function(weight, weight_change, effect = 0.8) {
  weight = weight;
  weight_change = weight_change * -1;
  effect = effect;

  // løbetid * (startvægt - vægttab * 0.8) / startvægt;
  function getEstimatedFinishTime(hours, minutes, seconds) {
   let h1 = hours;
   let m1 = minutes;
   let s1 = seconds;

    if (h1 == '00') { h1 = 0; }
    if (h1 == '') { h1 = 0; }
    if (m1 == '00') { m1 = 0; }
    if (m1 == '') { m1 = 0; }
    if (s1 == '00') { s1 = 0; }
    if (s1 == '') { s1 = 0; }

   let time1 = parseInt(h1 * 3600) + parseInt(m1 * 60) + parseInt(s1 * 1);
   let output1 = time1 * (weight - weight_change * effect) / weight;

   let h_out = Math.floor(output1 / 3600);
   let m_out = Math.floor((output1 - h_out * 3600) / 60);
   let s_out = Math.floor(output1 - h_out * 3600 - m_out * 60);
    if (h_out < 10) { h_out = '0' + h_out; }
    if (m_out < 10) { m_out = '0' + m_out; }
    if (s_out < 10) { s_out = '0' + s_out; }
    if (h_out == 0) { h_out = '00'; }
    if (m_out == 0) { m_out = '00'; }
    if (s_out == 0) { s_out = '00'; }
    return h_out + ':' + m_out + ':' + s_out;
  }

  let publicAPI = {
    getEstimatedFinishTime: getEstimatedFinishTime
  };

  return publicAPI;
}

module.exports = motionsplan;
