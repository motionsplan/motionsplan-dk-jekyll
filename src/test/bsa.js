const motionsplan = require('../js/bsa.js');
let assert = require('assert');

describe('BSA', function() {
  describe('getBSA(mosteller)', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.BSA(180, 80);
      assert.equal(hr.getBSA(), 2);
    });
  });
  describe('getBSA(dubois)', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.BSA(180, 80, "dubois");
      assert.equal(hr.getBSA(), 1.996421022275045);
    });
  });
  describe('getBSA(fujimoto)', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.BSA(180, 80, "fujimoto");
      assert.equal(hr.getBSA(), 1.9443627272819302);
    });
  });
  describe('getBSA(gehanandgeorge)', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.BSA(180, 80, "gehanandgeorge");
      assert.equal(hr.getBSA(), 2.0094826854704952);
    });
  });
  describe('getBSA(haycock)', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.BSA(180, 80, "haycock");
      assert.equal(hr.getBSA(), 2.0065598206174218);
    });
  });

});
