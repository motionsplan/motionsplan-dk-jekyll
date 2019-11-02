let motionsplan = {}

motionsplan.CalculateFatPercent = function(h, w, a, sex) {
  var h, w, sex;

  h = h = h / 100;
  w = w;
  a = a;
  sex = sex;

  function getBMI() {
    return w / (h * h);
  }

  function getFatMass() {
    var fm;
    if (sex == 'man') {
      fm = 0.988 * getBMI() + 0.242 * w + 0.094 * a - 30.18;
    } else {
      fm = 0.988 * getBMI() + 0.344 * w + 0.094 * a - 30.18;
    }
    return fm;
  }

  function getFatPercent() {
    return getFatMass() / w * 100;
  }

  var publicAPI = {
    getBMI : getBMI,
    getFatMass: getFatMass,
    getFatPercent: getFatPercent

  };

  return publicAPI;
}

module.exports = motionsplan;
