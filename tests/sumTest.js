var should = require('should');
var sum = require('../sum');

// 1st step: Let's create the test scope with describe
describe('sum.js', function() {
    // Let's say that we want so test the sum of 10 + 10
    // Probably when you ran the code it has fail.
    it('sum of 10 + 10 should return 20', function() {
        sum(10,10).should.be.equal(20);
    });
});
