let motionsplan = {}

motionsplan.EstimateMaxHr = function(ald) {
  var ald;
  
  ald = ald;

  function getMaxHr()
  {
    return Math.round((208 - 0.7 * ald) * Math.pow(10, 0)) / Math.pow(10, 0);
  }
  
  var publicAPI = {
    getMaxHr : getMaxHr
  };  

  return publicAPI; 
}

module.exports = motionsplan;
