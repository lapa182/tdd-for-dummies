var should = require('should');
var sum = require('../sum');

// Let's create the test scope with describe
describe('sum.js', function() {
    it('sum of 10 + 10 should return 20', function() {
        sum(10,10).should.be.equal(20);
    });
});
