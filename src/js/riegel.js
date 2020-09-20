let motionsplan = {};

motionsplan.Riegel = function(dist, hours, minutes, seconds) {
  var calcdist = dist;
  var calchour = hours;
  var calcmin = minutes;
  var calcsec = seconds;

  function getTableWithEndTimes() {
    var res = '';

    res += '<hr />';
    res += '<h3>Potentielle konkurrencetider</h3>';
    res += '<table class="table">';
    res += '<tr><td><b>Distance</b></td><td><b>Sluttid</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td><b>Min/km</b></td></tr>';
    res += '<tr><td>1000m</td><td>' + riegels(1000) + '</td></tr>';
    res += '<tr><td>1500m</td><td>' + riegels(1500) + '</td></tr>';
    res += '<tr><td>3000m</td><td>' + riegels(3000) + '</td></tr>';
    res += '<tr><td>5000m</td><td>' + riegels(5000) + '</td></tr>';
    res += '<tr><td>8000m</td><td>' + riegels(8000) + '</td></tr>';
    res += '<tr><td>10000m</td><td>' + riegels(10000) + '</td></tr>';
    res += '<tr><td>20000m</td><td>' + riegels(20000) + '</td></tr>';
    res += '<tr><td>½ marathon</td><td>' + riegels(21097.5) + '</td></tr>';
    res += '<tr><td>Marathon</td><td>' + riegels(42195) + '</td></tr>';
    res += '</table>';

    return res;
  }

  function riegels(d2) {
    var d1 = calcdist;
    var h = calchour;
    var m = calcmin;
    var s = calcsec;
    var inputsec = parseInt(h * 3600) + parseInt(m * 60) + parseInt(s * 1);
    var outputsec = Math.round(inputsec * Math.pow((d2 / d1), 1.06));
    var reshour = Math.floor(outputsec / 3600);
    var resmin = Math.floor((outputsec - reshour * 3600) / 60);
    var ressec = Math.floor(outputsec - reshour * 3600 - resmin * 60);
    var kmtime_min = Math.floor((1000 * outputsec / d2) / 60);
    var kmtime_sec = Math.floor((1000 * outputsec / d2) - kmtime_min * 60);

    if (reshour < 10) { reshour = '0' + reshour; }
    if (resmin < 10) { resmin = '0' + resmin; }
    if (ressec < 10) { ressec = '0' + ressec; }
    if (kmtime_min < 10) { kmtime_min = '0' + kmtime_min; }
    if (kmtime_sec < 10) { kmtime_sec = '0' + kmtime_sec; }
    if (reshour == 0) { reshour = '00'; }
    if (resmin == 0) { resmin = '00'; }
    if (ressec == 0) { ressec = '00'; }
    if (kmtime_min == 0) { kmtime_min = '00'; }
    if (kmtime_sec == 0) { kmtime_sec = '00'; }

    return reshour + ':' + resmin + ':' + ressec + '</td><td>' + kmtime_min + ':' + kmtime_sec;
  }

  var publicAPI = {
    getRiegels: riegels,
    getTableWithEndTimes: getTableWithEndTimes

  };

  return publicAPI;
}

module.exports = motionsplan;
