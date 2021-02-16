const motionsplan = require('../js/jumpmat.js');
var assert = require('assert');

describe('JumpMat', function() {
  describe('getForce()', function() {
    it('should return the correct number', function() {
      
      let hr = motionsplan.JumpMat(0.53, 0.40, 5000);
      assert.equal(hr.getForce(), 3312.5);
      assert.equal(hr.getKg(), 337.6656472986748);
    });
    it('should return the correct number', function() {
      
      let hr = motionsplan.JumpMat(0.56, 0.372, 4617);
      assert.equal(hr.getForce(), 3475.1612903225814);
      assert.equal(hr.getKg(), 354.24681858538037);
    });

  });
});
