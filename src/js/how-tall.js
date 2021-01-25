let motionsplan = {};

motionsplan.HowTall = function(gender, father, mother) {

  function isMale() {
    if (gender == 'male') {
      return true;
    }
    return false;
  }

  function getHeight() {
    if (isMale()) {
      return ((mother + 13) + father)/2;
    }
    
    return ((mother - 13) + father)/2;
  }

  let publicAPI = {
    getHeight : getHeight

  };

  return publicAPI;
};

module.exports = motionsplan;
