const motionsplan = require('../js/maximal-muscle.js');
let assert = require('assert');

describe('MaximalMuscle', function() {
  describe('getMaximalMuscle()', function() {
    it('should return the correct number', function() {

      // biceps, triceps, hoftekam, skulder, weight, gender, age
      let hr = motionsplan.MaximalMuscle(181);
      assert.equal(hr.getMaximalFFM(), 111.3874);
      assert.equal(hr.getMaximalMuscleMass(), 55.6937);
    });
  });
});
