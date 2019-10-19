const motionsplan = require('../assets/js/1rm.js');
var assert = require('assert');

describe('Estimate1RM', function() {
  describe('getBrycki', function() {
    it('should return the correct number', function() {
      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      var rm = motionsplan.Estimate1RM(100, 5);
      assert.equal(rm.getBrzycki(), 113);
      assert.equal(rm.getLander(), 114);
      assert.equal(rm.getLombardi(), 117);
      assert.equal(rm.getMayhewetal(), 119);
      assert.equal(rm.getOconneretal(), 113);
      assert.equal(rm.getWathan(), 117);
      assert.equal(rm.getMOL(1, 1), 108.68442932523273);
      assert.equal(rm.getMOL(1, 0), 109.94750006871719);
      assert.equal(rm.getMOL(0, 1), 111.90564116337104);
      assert.equal(rm.getMOL(0, 0), 112.76118309033298);
    });
  });
});
