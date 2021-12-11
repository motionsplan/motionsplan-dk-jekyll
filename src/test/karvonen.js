const motionsplan = require('../js/karvonen.js');
let assert = require('assert');

describe('Karvonen', function() {
  describe('getHeartRateReserve', function() {
    it('should return the correct number', function() {

      // Maxhr
      let hr = motionsplan.Karvonen(60, 200);

      assert.equal(hr.getHeartRateReserve(), 140);
    });
  });
  describe('getIntensity', function() {
    it('should return the correct number', function() {

      // Maxhr
      let hr = motionsplan.Karvonen(60, 200);

      assert.equal(hr.getTargetHR(60), 144);
    });
  });
});
