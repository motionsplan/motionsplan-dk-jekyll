let motionsplan = {};

// https://www.alancouzens.com/blog/somatotype.html
// https://ebooks.inflibnet.ac.in/antp06/chapter/heath-carter-methods-of-somatotyping/
motionsplan.Somatotype = function(gender, height, weight, tricep, subscap, supra, ab, thigh, calf, humerus, femur, armrelax, calfgirth) {

  function getEndomorph() {
    return Math.round((-0.7182+0.1451*((tricep+subscap+supra)*(170.18/height))-0.00068*Math.pow(((tricep+subscap+supra)*(170.18/height)),2)+0.0000014*Math.pow(((tricep+subscap+supra)*(170.18/height)),3))*10)/10;
  }

  function getMesomorph() {
    return Math.round(((0.858*humerus+0.601*femur+(0.188*(armrelax-(tricep/10)))+(0.161*(calfgirth-(calf/10))))-(0.131*height)+4.5)*10)/10;
  }

  function getEctomorph() {
    let wh = height/Math.pow(weight,0.33);
    if(wh > 40.75) {
        return Math.round((0.732*(height/Math.pow(weight,0.333))-28.58)*10)/10;
    } 
    return Math.round((0.463*(height/Math.pow(weight,0.333))-17.63)*10)/10;
  }

  function isMale() {
    if (gender == "male") {
        return true;
    }
    return false;
  }

  function getBodyFat() {
    let sf6 = Math.round(tricep+subscap+supra+ab+thigh+calf);
    let bodyfat;
    if (isMale()) {
        bodyfat=Math.round((0.1051*(sf6)+2.585)*10)/10;
    } else {
        bodyfat=Math.round((0.1548*(sf6)+3.58)*10)/10;
    }
    return Math.round(((bodyfat/100)*weight)*10)/10;
  }

  function getBMI() {
    return Math.round(weight/Math.pow((height/100),2)*10)/10;
  }

  function getLMM() {
    return weight - getBodyFat();
  }
  
  let publicAPI = {
    getEndomorph : getEndomorph,
    getMesomorph : getMesomorph,
    getEctomorph : getEctomorph,
    getBodyFat: getBodyFat,
    getBMI : getBMI,
    getLMM : getLMM
  };

  return publicAPI;
}

module.exports = motionsplan;
