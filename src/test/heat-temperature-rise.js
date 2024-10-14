const motionsplan = require('../js/heat-temperature-rise.js');
let assert = require('assert');

describe('TemperatureRise', function() {
  describe('getDeltaTemperature', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.TemperatureRise();
      assert.equal(hr.getDeltaTemperature(100, 600, 70), 0.24701523260601072);
    });
  });
});
