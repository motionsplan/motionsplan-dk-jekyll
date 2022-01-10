const motionsplan = require('../js/riegel.js');
let assert = require('assert');

describe('BMI', function() {
  describe('getBMI()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.Riegel(5000, 0, 20, 0);
      assert.equal(hr.getRiegels(1500), '00:05:35</td><td>03:43');
    });
  });
});
