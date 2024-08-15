let motionsplan = {};

motionsplan.BSA = function(height, weight, formula = "mosteller") {
  
  function getBSA() {
    if (formula == "dubois") {
      return getDuBois();
    }
    if (formula == "fujimoto") {
      return getFujimoto();
    }
    if (formula == "gehanandgeorge") {
      return getGehanAndGeorge();
    }
    if (formula == "haycock") {
      return getHaycock();
    }
    return getMosteller();
  }

  // mest almindelige formel
  function getDuBois() {
    return 0.007184 * Math.pow(weight, 0.425) * Math.pow(height, 0.725);
  }

  function getFujimoto() {
    return 0.008883 * Math.pow(weight, 0.444) * Math.pow(height, 0.663);
  }

  function getGehanAndGeorge() {
    return 0.0235 * Math.pow(weight, 0.51456) * Math.pow(height, 0.42246);
  }

  function getHaycock() {
    return 0.024265 * Math.pow(weight, 0.5378) * Math.pow(height, 0.3964);
  }

  // Alan Couzens uses this one
  function getMosteller() {
    return Math.sqrt(((height * weight ) / 3600));
  }

  let publicAPI = {
    getBSA : getBSA
  };

  return publicAPI;
}

module.exports = motionsplan;
