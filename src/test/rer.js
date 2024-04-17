const motionsplan = require('../js/rer.js');
let assert = require('assert');

describe('RER', function() {
  describe('getKcalMin()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.RER(0.85,2 );
      assert.equal(hr.getKcalMin(), 9.728);
      assert.equal(hr.getFatPercent(), 0.4995000000000003);
      assert.equal(hr.getCaloriesFromFat(), 4.859136000000003);
      assert.equal(hr.getCHOPercent(), 0.5004999999999997);
      assert.equal(hr.getCaloriesFromCHO(), 4.868863999999997);
    });
  });
});
