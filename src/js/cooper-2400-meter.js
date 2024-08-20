let motionsplan = {};

motionsplan.Cooper2400Meter = function() {

  // TODO - see this also... https://pubmed.ncbi.nlm.nih.gov/11926486/
  function getVO2Max(min, sek, formula = "cooper") {
    if (formula == "burger") {
      return getBurger(min, sek);
    }
    return getCooper(min, sek);
  }

  function getCooper(min, sek) {
    let time = min + (sek / 60);
    return (483 / time) + 3.5;
  }

  // https://www.brianmac.co.uk/24kmruntest.htm
  // https://pubmed.ncbi.nlm.nih.gov/2396155/
  function getBurger(min, sek) {
    let time = min + (sek / 60);
    return 85.95 - (3.079 * time);
  }

  let publicAPI = {
    getVO2Max: getVO2Max,
  };

  return publicAPI;
};

module.exports = motionsplan;
