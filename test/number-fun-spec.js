const { expect } = require('chai')

const { returnsThree, reciprocal } = require('../problems/number-fun');

describe('returnsThree', () => {
    it('returnsThree function should return the number 3', () => {
        expect(returnsThree()).to.equal(3)
    })
})

describe('reciprocal', () => {
    context('valid', () => {
        it('reciprocal function should return the reciprical of the given number', () => {
            let test01 = reciprocal(5);
            expect(test01).to.equal(.2)
        })
    })

    context('invalid', () => {
        it('should throw range error for numbers less than 1', () => {
            let funcCopy = reciprocal.bind(null, 0)
            expect(funcCopy).to.throw(RangeError)
        })
        it('should throw range error for numbers greater than 1,000,000', () => {
            let funcCopy = reciprocal.bind(null, 1000001)
            expect(funcCopy).to.throw(RangeError)
        })
    })
})