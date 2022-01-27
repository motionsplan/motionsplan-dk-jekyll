const motionsplan = require('../js/bmr-ligevaegt.js');
let assert = require('assert');

describe('BMREquilibrium', function() {
  describe('getMaximalWeightChange', function() {
    it('should return the correct number', function() {
      // sex, age, weight, pal, sport
      let b = motionsplan.BMREquilibrium();
      assert.equal(b.getBalance(10000, 8000), -2000);
      assert.equal(b.getMaximalWeightChange(300), 0.01764705882352941);
      assert.equal(b.getMaximalWeightChange(-300), 0.007894736842105263);
    });
  });
});
