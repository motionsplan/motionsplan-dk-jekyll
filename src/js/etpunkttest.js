let motionsplan = {}

motionsplan.EtPunktTest = function(gender, age, weight, work, hr) {
  var ax3, bx2, cx, d, korrektion;
  var arb = work;
  var koen = gender;
  var vaegt = weight;
  var puls = hr;
  var alder = age;

  function getMaximalOxygenUptake() {
    if ((koen == "1") && (arb == "50")) {
      ax3 = -0.0000141887098363194;
      bx2 = 0.00564913345624763;
      cx = -0.780818885937746;
      d = 39.1006320316801;
    }
    else if ((koen == "1") && (arb == "75")) {
      ax3 = -0.00000543674435627603;
      bx2 = 0.0026568064501183;
      cx = -0.452158557600623;
      d = 28.2705225878313;
    }
    else if ((koen == "1") && (arb == "100")) {
      ax3 = -0.00000781456387209244;
      bx2 = 0.0037691350493366;
      cx = -0.628684090959725;
      d = 38.1781325862974;
    }
    else if ((koen == "1") && (arb == "150")) {
      ax3 = -0.00000480199704005531;
      bx2 = 0.00263336860763636;
      cx = -0.502384480151535;
      d = 35.4646039706529;
    }
    else if ((koen == "0") && (arb == "50")) {
      ax3 = -0.00000908367168416049;
      bx2 = 0.00414579767940695;
      cx = -0.655844035762893;
      d = 37.2727235943794;
    }
    else if ((koen == "0") && (arb == "75")) {
      ax3 = -0.00000933665751673296;
      bx2 = 0.0044902366150176;
      cx = -0.742969310750658;
      d = 43.9747812265557;
    }
    else if ((koen == "0") && (arb == "100")) {
      ax3 = -0.00000915073336660991;
      bx2 = 0.00455540562587432;
      cx = -0.780173372160715;
      d = 47.9223030409269;
    }
    else if ((koen == "0") && (arb == "150")) {
      ax3 = -0.00000541183365569748;
      bx2 = 0.00301601587808795;
      cx = -0.586119541549347;
      d = 41.7833862710695;
    }
    korrektion = 0.0000772460416296068 * alder * alder - 0.0153110952973968 * alder + 1.31886556366008;
    return ((ax3 * puls * puls * puls + bx2 * puls * puls + cx * puls + d) * korrektion);
  }
  
  function getFitnessLevel() {
    return (getMaximalOxygenUptake() / vaegt * 1000) * Math.pow(10, 1) / Math.pow(10, 1);
  }

  var publicAPI = {
    getMaximalOxygenUptake: getMaximalOxygenUptake,
    getFitnessLevel : getFitnessLevel

  };

  return publicAPI;
}

module.exports = motionsplan;
