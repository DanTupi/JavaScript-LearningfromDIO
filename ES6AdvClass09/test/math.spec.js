const Math = require('../math.js');
const expect = require('chai').expect;

let value = 0;

describe('Math class', function() {
    //hooks
    beforeEach(function() {
        value = 0;
    });

    it('Sum two numbers', function(done){
        const math = new Math();
        this. timeout(1000);

        value = 5

        math.sum(value, 5, value => {
            expect(value).to.equal(10);
            done();
        });
    });

    it('Multiply two numbers', function(){
        const math = new Math();

        expect(math.multiply(value, 5)).to.equal(0);
    });

    it('Two objects must be equal', function(){
        const obj ={
            name: 'Danilo'
        };
        const obj2 ={
            name: 'Danilo'
        };

        expect(obj).to.have.property('name');
        expect(obj).to.deep.equal(obj2);
    });
});