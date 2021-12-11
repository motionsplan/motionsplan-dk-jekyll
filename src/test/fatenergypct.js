const motionsplan = require('../js/fatenergypct.js');
let assert = require('assert');

describe('BMI', function() {
  describe('getBMI()', function() {
    it('should return the correct number', function() {

      // biceps, triceps, hoftekam, skulder, weight, gender, age
      let hr = motionsplan.FatEnergyPct(1859, 17);
      assert.equal(hr.getFatEnergyPct(), 34.74986551909629);
    });
  });
});
