let motionsplan = {};

motionsplan.RowingErgRowing = function (minutes, seconds, splitseconds) {

    let totalseconds = Number(minutes) * 60 + Number(seconds);
    let totalsplitseconds = Number(totalseconds) * 10 + Number(splitseconds);

    let splitseconds_per_500 = totalsplitseconds / 4;
    let seconds_per_500 = splitseconds_per_500 / 10;

    //Calculate watts for 2k
    let pacepowerthree = Math.pow(seconds_per_500 / 500, 3);
    let watts = 2.8 / pacepowerthree;

    //Watts for each test with Jensen percentages
    let watts10sec = watts * 1.73;
    let watts60sec = watts * 1.53;
    let watts2k = watts;
    let watts6k = watts * 0.85;
    let watts60min = watts * 0.76;

    function getWatts10Sec() {
      return watts10sec;
    }

    function getWatts60Sec() {
      return watts60sec;
    }

    function getWatts2k() {
      return watts;
    }

    function getWatts6k() {
      return watts6k;
    }
    
    function getWatts60min() {
      return watts60min;
    }

    /*
    //Assign Watts to Table
    document.getElementById("watts10sec").innerHTML =
      parseFloat(watts10sec).toFixed(1);
    document.getElementById("watts60sec").innerHTML =
      parseFloat(watts60sec).toFixed(1);
    document.getElementById("watts2k").innerHTML =
      parseFloat(watts2k).toFixed(1);
    document.getElementById("watts6k").innerHTML =
      parseFloat(watts6k).toFixed(1);
    document.getElementById("watts60min").innerHTML =
      parseFloat(watts60min).toFixed(1);
  //Calculate Pace
    document.getElementById("pace10sec").innerHTML = calculate_pace(watts10sec);
    document.getElementById("pace60sec").innerHTML = calculate_pace(watts60sec);
    document.getElementById("pace2k").innerHTML = calculate_pace(watts2k);
    document.getElementById("pace6k").innerHTML = calculate_pace(watts6k);
    document.getElementById("pace60min").innerHTML = calculate_pace(watts60min);

    //Calculate Distance/Score
    document.getElementById("score10sec").innerHTML = calculate_distance(
      pace_in_seconds(watts10sec),
      10
    );
    document.getElementById("score60sec").innerHTML = calculate_distance(
      pace_in_seconds(watts60sec),
      60
    );
    document.getElementById("score2k").innerHTML =
      document.getElementById("m").value +
      ":" +
      document.getElementById("s").value +
      "." +
      document.getElementById("ss").value;

    document.getElementById("score6k").innerHTML = calculate_score(
      watts6k,
      6000
    );

    document.getElementById("score60min").innerHTML = calculate_distance(
      pace_in_seconds(watts60min),
      3600
    );
  */

    /*
    //RENDER CHART
    var speedCanvas = document.getElementById("speedChart");

    //Chart.defaults.global.defaultFontFamily = "Lato";
    //Chart.defaults.global.defaultFontSize = 18;

    var speedData = {
      labels: [
        moment().set({ minutes: 0, seconds: 10 }),
        moment().set({ minutes: 1, seconds: 0 }),
        moment().set({
          minutes: score_min_sec(calculate_score(watts2k, 2000), "min"),
          seconds: score_min_sec(calculate_score(watts2k, 2000), "sec"),
        }),
        moment().set({
          minutes: score_min_sec(calculate_score(watts6k, 6000), "min"),
          seconds: score_min_sec(calculate_score(watts6k, 6000), "sec"),
        }),
        moment().set({ minutes: 60, seconds: 00 }),
      ],

      datasets: [
        {
          label: "Watts/Time",
          data: [
            parseFloat(watts10sec).toFixed(1),
            parseFloat(watts60sec).toFixed(1),
            parseFloat(watts2k).toFixed(1),
            parseFloat(watts6k).toFixed(1),
            parseFloat(watts60min).toFixed(1),
          ],
          lineTension: 0.3,
          fill: false,
          borderColor: "blue",
          backgroundColor: "transparent",
          pointBorderColor: "#007bff",
          pointBackgroundColor: "rgba(255,150,0,0.5)",
          // borderDash: [5, 1],
          pointRadius: 5,
          pointHoverRadius: 10,
          pointHitRadius: 30,
          pointBorderWidth: 2,
          pointStyle: "rectRounded",
        },
      ],
    };

    var chartOptions = {
      legend: {
        display: true,
        position: "top",
        labels: {
          boxWidth: 30,
          fontColor: "black",
        },
      },

      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              unit: "minute",
              unitStepSize: 5,
              round: "second",
              tooltipFormat: "mm:ss",
              displayFormats: {
                minute: "mm:ss",
              },
            },
            scaleLabel: {
              display: true,
              labelString: "Time MM:SS",
              fontColor: "grey",
            },
          },
        ],

        yAxes: [
          {
            gridLines: {
              color: "black",
              // borderDash: [2, 5],
            },
            scaleLabel: {
              display: true,
              labelString: "Watts (W)",
              fontColor: "grey",
            },
          },
        ],
      },
    };

    var lineChart = new Chart(speedCanvas, {
      type: "line",
      data: speedData,
      options: chartOptions,
    });
  }

  */

  function getPaceFromWatts(watts) {
    let paceinseconds = Math.cbrt(2.8 / watts) * 500;
    let minutes = Math.floor(paceinseconds / 60);
    let seconds = paceinseconds - minutes * 60;
    return minutes + ":" + parseFloat(seconds).toFixed(1);
  }

  /*
  function score_min_sec(score, element) {
    console.log(score);
    var arr = score.split(":");

    if (element == "min") return arr[0];
    else return arr[1];
  }

  function getPaceFromWattsInSeconds(watts) {
    return Math.cbrt(2.8 / watts) * 500;
  }

  function calculate_score(watts, distance) {
    split = pace_in_seconds(watts);

    if (distance == 6000) time = split * (6000 / 500);
    else time = split * (2000 / 500);

    scoreminutes = Math.floor(time / 60);
    scoreseconds = time - scoreminutes * 60;

    return scoreminutes + ":" + parseFloat(scoreseconds).toFixed(1);
  }

  function calculate_distance(pace, time) {
    return parseFloat((time / pace) * 500).toFixed(1);
  }

  function sports_format(tenths) {
    hours = Math.floor(tenths / 36000);
    tenths -= hours * 36000;

    minutes = Math.floor(tenths / 600);
    tenths -= minutes * 600;

    seconds = Math.floor(tenths / 10);
    tenths -= seconds * 10;

    return hours + ":" + minutes + "." + seconds;
  }
  */

  let publicAPI = {
    getPaceFromWatts : getPaceFromWatts,
    getWatts10Sec : getWatts10Sec,
    getWatts60Sec : getWatts60Sec,
    getWatts2k : getWatts2k,
    getWatts6k : getWatts6k,
    getWatts60min : getWatts60min
  };

  return publicAPI;
};

module.exports = motionsplan;
