const assert = require('chai').assert;
const calculator = require('../app/calculator'); // Assuming your calculator functions are in calculator.js

describe('Calculator Tests', function() {
    // Add test cases with expected success results
    it('add(5, 2) should return 7 (PASS)', function() {
        assert.equal(calculator.add(5, 2), 7);  // Should pass
    });

    it('sub(5, 2) should return 3 (PASS)', function() {
        assert.equal(calculator.sub(5, 2), 3);  // Should pass
    });

    it('mul(5, 2) should return 10 (PASS)', function() {
        assert.equal(calculator.mul(5, 2), 10);  // Should pass
    });

    it('div(10, 2) should return 5 (PASS)', function() {
        assert.equal(calculator.div(10, 2), 5);  // Should pass
    });

    // Add test cases with expected failure results
    it('add(5, 2) should return 8 (FAIL)', function() {
        assert.equal(calculator.add(5, 2), 8);  // Should fail
    });

    it('sub(5, 2) should return 5 (FAIL)', function() {
        assert.equal(calculator.sub(5, 2), 5);  // Should fail
    });

    it('mul(5, 2) should return 12 (FAIL)', function() {
        assert.equal(calculator.mul(5, 2), 12);  // Should fail
    });

    it('div(10, 2) should return 2 (FAIL)', function() {
        assert.equal(calculator.div(10, 2), 2);  // Should fail
    });
});


