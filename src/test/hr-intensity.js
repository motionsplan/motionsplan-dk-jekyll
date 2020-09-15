const motionsplan = require('../js/hr-intensity.js');
var assert = require('assert');

describe('EstimateMaxHr', function() {
  describe('getMaxHr', function() {
    it('should return the correct number', function() {

      // Maxhr
      var hr = motionsplan.HRIntensity(200);

      assert.equal(hr.getWorkIntensityBasedOnMaxHR(180), 90);
      assert.equal(hr.getHRBasedOnIntensityFromHeartRateReserve(60, 90), 186);
      assert.equal(hr.getHRIntensityFromHeartRateReserve(60, 160), 71.42857142857143);
    });
  });
});
