let motionsplan = {};

/*
distance = race0
age = age0
weight = weight0
gender = gender1 // V3 = men - V4 = women
hour = hour0
minute = minute0
second = second0
*/

motionsplan.FlyerHandicap = function (age, weight, gender) {
  function Convert() {
    var MeasurementType1, MeasurementType2, Answer, Input;
    MeasurementType1 =
      document.CalculatorForm.Measure1.options[
        document.CalculatorForm.Measure1.selectedIndex
      ].value;
    MeasurementType2 =
      document.CalculatorForm.Measure2.options[
        document.CalculatorForm.Measure2.selectedIndex
      ].value;
    Answer = document.CalculatorForm.Answer;
    Input = document.CalculatorForm.input;
    if (MeasurementType1 == "Kilometers" && MeasurementType2 == "Miles") {
      Answer.value = Input.value * 0.6214;
    } else if (
      MeasurementType1 == "Kilometers" &&
      MeasurementType2 == "Meters"
    ) {
      Answer.value = Input.value * 1000;
    } else if (
      MeasurementType1 == "Kilometers" &&
      MeasurementType2 == "Yards"
    ) {
      Answer.value = Input.value * 1093.61;
    } else if (
      MeasurementType1 == "Kilometers" &&
      MeasurementType2 == "Kilometers"
    ) {
      Answer.value = Input.value * 1;
    } else if (MeasurementType1 == "Meters" && MeasurementType2 == "Miles") {
      Answer.value = Input.value * 0.0006214;
    } else if (
      MeasurementType1 == "Meters" &&
      MeasurementType2 == "Kilometers"
    ) {
      Answer.value = Input.value * 0.001;
    } else if (MeasurementType1 == "Meters" && MeasurementType2 == "Yards") {
      Answer.value = Input.value * 1.09;
    } else if (MeasurementType1 == "Meters" && MeasurementType2 == "Meters") {
      Answer.value = Input.value * 1;
    } else if (
      MeasurementType1 == "Miles" &&
      MeasurementType2 == "Kilometers"
    ) {
      Answer.value = Input.value * 1.6093;
    } else if (MeasurementType1 == "Miles" && MeasurementType2 == "Meters") {
      Answer.value = Input.value * 1609.34;
    } else if (MeasurementType1 == "Miles" && MeasurementType2 == "Yards") {
      Answer.value = Input.value * 1760;
    } else if (MeasurementType1 == "Miles" && MeasurementType2 == "Miles") {
      Answer.value = Input.value * 1;
    } else if (
      MeasurementType1 == "Yards" &&
      MeasurementType2 == "Kilometers"
    ) {
      Answer.value = Input.value * 0.0009144;
    } else if (MeasurementType1 == "Yards" && MeasurementType2 == "Meters") {
      Answer.value = Input.value * 0.9144;
    } else if (MeasurementType1 == "Yards" && MeasurementType2 == "Miles") {
      Answer.value = Input.value * 0.0005682;
    } else if (MeasurementType1 == "Yards" && MeasurementType2 == "Yards") {
      Answer.value = Input.value * 1;
    } else {
    }
  }
  function PaceConvert() {
    var D, MeasurementType, h, m, s, MPH, KPH, hrs, sec;
    var Pace,
      MMinuteValue,
      MSecondValue,
      Miles,
      MPS,
      YPS,
      KMinuteValue,
      KSecondValue;
    D = document.CalculatorForm.input.value;
    MeasurementType =
      document.CalculatorForm.Measure.options[
        document.CalculatorForm.Measure.selectedIndex
      ].value;
    h = eval(document.CalculatorForm.Hours.value);
    m = eval(document.CalculatorForm.Minutes.value);
    s = eval(document.CalculatorForm.Seconds.value);
    if (MeasurementType == "Miles") {
      Miles = D;
    } else if (MeasurementType == "Kilometers") {
      Miles = D * 0.6214;
    } else if (MeasurementType == "Meters") {
      Miles = D * 0.0006214;
    } else if (MeasurementType == "Yards") {
      Miles = D * 0.0005682;
    } else {
      alert("error");
    }
    sec = h * 3600 + m * 60 + s;
    hrs = sec / 3600;
    MPH = Miles / hrs;
    document.CalculatorForm.MilesPerHour.value = roundNumber(MPH, 2);
    KPH = (Miles * 1.6093) / hrs;
    document.CalculatorForm.KilosPerHour.value = roundNumber(KPH, 2);
    MPS = (Miles * 1609.34) / sec;
    document.CalculatorForm.MetersPerSecond.value = roundNumber(MPS, 2);
    YPS = (Miles * 1760) / sec;
    document.CalculatorForm.YardsPerSecond.value = roundNumber(YPS, 2);
    PaceM = sec / Miles;
    PaceK = sec / (Miles * 1.6093);
    MMinuteValue = Math.floor(PaceM / 60);
    MSecondValue = Math.round(60 * (PaceM / 60 - Math.floor(PaceM / 60)));
    if (MSecondValue > 59) MSecondValue = 00;
    alert(MSecondValue);
    document.CalculatorForm.PacePerMile.value = MMinuteValue + ":" + MSecondValue;
    KMinuteValue = Math.floor(PaceK / 60);
    KSecondValue = Math.round(60 * (PaceK / 60 - Math.floor(PaceK / 60)));
    if (KSecondValue > 59.49) KSecondValue = 59;
    document.CalculatorForm.PacePerKilo.value = KMinuteValue + ":" + KSecondValue;
  }
  function roundNumber(numberField, rlength) {
    return (
      Math.round(numberField * Math.pow(10, rlength)) / Math.pow(10, rlength)
    );
  }
  function roundTime(numberField, rlength) {
    if (numberField > 59.49) numberField = 59;
    return (
      Math.round(numberField * Math.pow(10, rlength)) / Math.pow(10, rlength)
    );
  }
  function check_race() {
    var pos = document.FrontPage_Form1.race0.selectedIndex;
    if (pos == 0) {
      disable_components();
      clearall();
    } else {
      enable_components();
      clearall();
    }
  }
  function disable_components() {
    document.FrontPage_Form1.age0.disabled = "hide";
    document.FrontPage_Form1.weight0.disabled = "hide";
    document.FrontPage_Form1.gender1[0].disabled = "hide";
    document.FrontPage_Form1.gender1[1].disabled = "hide";
    document.FrontPage_Form1.hour0.disabled = "hide";
    document.FrontPage_Form1.minute0.disabled = "hide";
    document.FrontPage_Form1.second0.disabled = "hide";
  }
  function enable_components() {
    document.FrontPage_Form1.age0.disabled = false;
    document.FrontPage_Form1.weight0.disabled = false;
    document.FrontPage_Form1.gender1[0].disabled = false;
    document.FrontPage_Form1.gender1[1].disabled = false;
    document.FrontPage_Form1.hour0.disabled = false;
    document.FrontPage_Form1.minute0.disabled = false;
    document.FrontPage_Form1.second0.disabled = false;
  }
  function computefun(distance, hours, minutes, seconds) {
    // distance
    // <OPTION>5K</OPTION>
    // <OPTION>10K</OPTION>
    // <OPTION>1/2 Marathon</OPTION>
    // <OPTION>Marathon</OPTION>

      var wtadj;
      var ageadj;
      var wtkg;
      var rt;
      wtadj = weight;
      ageadj = age;
  
      if (ageadj < 25) {
        ageadj = 25;
        // document.FrontPage_Form1.age0.value = ageadj;
      }
      rt =
        hours * 3600 +
        minutes * 60 +
        seconds * 1;
      if (distance == '10K') {
        rt = rt / 2;
      } else if (distance == '1/2 Marathon') {
        rt = rt / 4.2195;
      } else if (distance == 'Marathon') {
        rt = rt / 8.439;
      }
      /*
      for (pos = 0; pos <= 1; pos++) {
        if (document.FrontPage_Form1.gender1[pos].checked) {
          gender = pos;
          break;
        }
      }
      */
      if (gender == 'male') {
        if (wtadj < 143) {
          wtadj = 143;
          //document.FrontPage_Form1.weight0.value = wtadj;
        }
        wtkg = wtadj / 2.205;
        rtadjsec =
          ((59.31 * Math.pow(wtkg, 1.03)) /
            Math.pow(
              (((Math.pow((59.31 * Math.pow(wtkg, 1.03)) / rt, 1 / 1.01) *
                1000) /
                wtkg +
                (ageadj - 25) * 0.26) *
                wtkg) /
                1000,
              1.01
            )) *
          Math.pow(65 / wtkg, 1 / 3);
      } else if (gender == 'female') {
        if (wtadj < 110) {
          wtadj = 110;
          //document.FrontPage_Form1.weight0.value = wtadj;
        }
        wtkg = wtadj / 2.205;
        rtadjsec =
          ((59.31 * Math.pow(wtkg, 1.03)) /
            Math.pow(
              (((Math.pow((59.31 * Math.pow(wtkg, 1.03)) / rt, 1 / 1.01) *
                1000) /
                wtkg +
                (ageadj - 25) * 0.25) *
                wtkg) /
                1000,
              1.01
            )) *
          Math.pow(50 / wtkg, 1 / 3);
      }
      if (distance == '10K') {
        rtadjsec = rtadjsec * 2;
      } else if (distance == '1/2 Marathon') {
        rtadjsec = rtadjsec * 4.2195;
      } else if (distance == 'Marathon') {
        rtadjsec = rtadjsec * 8.439;
      }
      rtadjhour = rtadjsec / 3600;
      hour = Math.floor(rtadjhour);
      rtadjsec = (rtadjhour - hour) * 3600;
      rtadjmin = rtadjsec / 60;
      min = Math.floor(rtadjmin);
      sec = (rtadjmin - min) * 60;
      sec2 = Math.floor(sec);
      
      return hour + ':' + min + ':' + sec2;
  }
  function clearall() {
    document.FrontPage_Form1.hour0.value = "";
    document.FrontPage_Form1.minute0.value = "";
    document.FrontPage_Form1.second0.value = "";
    document.FrontPage_Form1.hour0.value = "";
    document.FrontPage_Form1.minute0.value = "";
    document.FrontPage_Form1.second0.value = "";
  }
  function reset() {
    document.FrontPage_Form1.age0.value = "";
    document.FrontPage_Form1.weight0.value = "";
    document.FrontPage_Form1.gender1[0].checked = true;
    document.FrontPage_Form1.hour0.value = "";
    document.FrontPage_Form1.minute0.value = "";
    document.FrontPage_Form1.second0.value = "";
    document.FrontPage_Form1.hour1.value = "";
    document.FrontPage_Form1.minute1.value = "";
    document.FrontPage_Form1.second1.value = "";
    document.FrontPage_Form1.race0.selectedIndex = 0;
  }

  let publicAPI = {
    computefun: computefun,
  };

  return publicAPI;
};

module.exports = motionsplan;
