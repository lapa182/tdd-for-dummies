var should = require('should');
var sum = require('../sum');

// Let's create the test scope with describe
describe('sum.js', function() {
    it('sum of 1 + 1 should return 2', function() {
        sum(1,1).should.be.equal(2);
    });
});
