let motionsplan = {};

motionsplan.Cooper12Min = function() {

  // distance in meters
  function getVO2Max(distance, formula = "wikipedia") {
    if (formula == "cooper") {
      return getCooper(distance);
    } else if (formula == "bandyopadhyay") {
      return getBandyopadhyay(distance);
    }

    return getWikipedia(distance);
  }

  function getWikipedia(distance) {
    return (distance - 504.9) / 44.73;
  }

  // Cooper original formula - see Alvarez-Ramirez
  // Distance in km
  function getCooper(distance) {
    // Range? 1,6 - 3,4 km
    return -11.288 + 22.351 * distance / 1000;
  }

  // see Alvarez-Ramirez
  function getBandyopadhyay(distance) {
    // Range? 2 - 2,9 km
    return -11.04 + 21.01 * distance / 1000;
  }

  function getDistanceFromVO2Max(vo2max) {
    return (vo2max * 44.73) + 504.9;
  }

  let publicAPI = {
    getVO2Max: getVO2Max,
    getDistanceFromVO2Max : getDistanceFromVO2Max
  };

  return publicAPI;
};

module.exports = motionsplan;
