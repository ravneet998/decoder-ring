// Write your tests here!
const { expect } = require("chai");
const polybius = require("../src/polybius.js");

describe("polybius cipher tests written by student", () => {
    it('encoding a message', () => {
        it('should encode a message by translating each letter to number pairs', () => {
            const actual = polybius('abcdefghijklmnopqrstuvwxyz')
            const expected = '1121314151122232424252132333435314243444541525354555'
            expect(actual).to.eql(expected);
        })
        it('should translate both \'i\' and \'j\' to 42', () => {
            const actualI = polybius('I')
            const actualJ = polybius('J')
            const expected = '42'
            expect(actualI).to.eql(expected);
            expect(actualJ).to.eql(expected);
        })
        it('should leave spaces as is', () => {
            const actual = polybius(' ')
            const expected = ' '
            expect(actual).to.eql(expected);
        })
    })
    it('decoding a message', () => {
        it('should decode a message by translating each pair of numbers into a letter', () => {
            const actual = polybius('1121314151122232424252132333435314243444541525354555', false)
            const expected = 'abcdefghi,ji,jklmnopqrstuvwxyz'
            expect(actual).to.eql(expected);
        })
        it('should translate 42 to both \'i\' and \'j\'', () => {
            const actual = polybius('42', false)
            const expected = 'i,j'
            expect(actual).to.eql(expected);
        })
        it('should leave spaces as is', () => {
            const actual = polybius(' ', false)
            const expected = ' '
            expect(actual).to.eql(expected);
        })
        it('should leave spaces as is', () => {
            const actual = polybius('000', false)
            const expected = false
            expect(actual).to.eql(expected);
        })
    })
})