const motionsplan = require('../js/waist.js');
let assert = require('assert');

describe('BMI', function() {
  describe('getBMI()', function() {
    it('should return the correct number', function() {

      // biceps, triceps, hoftekam, skulder, weight, gender, age
      let hr = motionsplan.WaistRatio();
      assert.equal(hr.getWaistHeightRatio(100, 180), 0.5555555555555556);
      assert.equal(hr.getWaistHipRatio(95, 100), 0.95);
    });
  });
});
