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
  // Original form used weight in lbs
  weight = weight * 2.205;
  
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

        //wtkg = wtadj;

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

        //wtkg = wtadj;

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

  let publicAPI = {
    getAdjustedTime: computefun,
  };

  return publicAPI;
};

module.exports = motionsplan;
