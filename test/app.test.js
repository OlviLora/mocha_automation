const Cube = require('../src/app').Cube;
var assert = require('assert');

describe('Testing the Cube Functions', function() {
    it('1. The side length of the Cube', function(done) {
        let c1 = new Cube(2);
        assert.equal(c1.getSideLength(), 2);
        done();
    });

    it('2. The surface area of the Cube', function(done) {
        let c2 = new Cube(5);
        assert.equal(c2.getSurfaceArea(), 1500);
        done();
    });

    it('3. The volume of the Cube', function(done) {
        let c3 = new Cube(7);
        assert.equal(c3.getVolume(), 3430);
        done();
    });
});
