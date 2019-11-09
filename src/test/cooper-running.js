const motionsplan = require('../js/cooper-running.js');
var assert = require('assert');

describe('CooperRunning', function() {
  describe('getVO22400Meter', function() {
    it('should return the correct number', function() {

      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      var fitness = motionsplan.CooperRunning();
      assert.equal(fitness.getVO22400Meter(12), 43.75);
      assert.equal(fitness.getVO212MinTest(3000), 55.781354795439306);
    });
  });
});

