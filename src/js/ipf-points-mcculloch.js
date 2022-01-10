let motionsplan = {};

motionsplan.McCulloch = function(age) {
  age = age;
  
  // McCulloch coefficients for ages 14 to 23 and 40 to 90:
	const mc = [1.23,1.18,1.13,1.08,1.06,1.04,
		1.03,1.02,1.01,1,
		1,1.01,1.02,1.031,1.043,1.055,1.068,1.082,1.097,1.113,
		1.13,1.147,1.165,1.184,1.204,1.225,1.246,1.268,1.291,1.315,
		1.34,1.366,1.393,1.421,1.45,1.48,1.511,1.543,1.576,1.61,
		1.645,1.681,1.718,1.756,1.795,1.835,1.876,1.918,1.961,2.005,
		2.05,2.096,2.143,2.19,2.238,2.287,2.337,2.388,2.44,2.494,2.549];
  
  function getCoefficient() {
   let aa;
    if (age > 13 && age < 24) {
  		return mc[age-14];
  	}
  	else if (age > 39 && age < 91) {
  		return mc[age-30];
  	}
  	else {
  	  return 1;
  	}
  }
	
  let publicAPI = {
    getCoefficient : getCoefficient
  };

  return publicAPI;
};

module.exports = motionsplan;
