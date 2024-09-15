const motionsplan = require('../js/plate-calc.js');
var assert = require('assert');

describe('PlateCalc', function() {
  describe('PlateCalc', function() {
    it('should return the correct number', function() {

      var hr = motionsplan.PlateRackCalc(100);
      assert.equal(hr.getPlatesWeight(), 80);
      hr.startcalc();
      assert.equal(hr.getTarget(), 100);
      assert.equal(hr.getFinal(), 100);
      assert.equal(hr.getDiff(), 0);
      assert.equal(hr.getHowManyPlatesNeededOf(0), 1);
      assert.equal(hr.getHowManyPlatesNeededOf(1), 0);
      assert.equal(hr.getHowManyPlatesNeededOf(2), 1);
      assert.equal(hr.getHowManyPlatesNeededOf(3), 0);
      assert.equal(hr.getHowManyPlatesNeededOf(4), 0);
      assert.equal(hr.getHowManyPlatesNeededOf(5), 0);
      assert.equal(hr.getHowManyPlatesNeededOf(6), 0);
      assert.equal(hr.getHowManyPlatesNeededOf(7), 0);
      assert.equal(hr.getHowManyPlatesNeededOf(8), 0);
    });
  });
});
