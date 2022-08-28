// Write your tests here!
const { expect } = require("chai");
const substitution = require("../src/substitution.js");

describe('substitution cipher tests written by student', () => {
    it('error handling', () => {
        it('should return false if the substitution alphabet is missing', () => {
            const actual = substitution('message')
            const expected = false
            expect(actual).to.eql(expected);
        })
        it('should return false if the substitution alphabet is not exactly 26 characters', () => {
            const actual = substitution('message', 'cba')
            const expected = false
            expect(actual).to.eql(expected);
        })
        it('should return false if the substitution alphabet is missing', () => {
            const actual = substitution('message', 'aaaaaaaaaaaaaaaaaaaaaaaaaa')
            const expected = false
            expect(actual).to.eql(expected);
        })
    })
    it('encoding a message', () => {
        it('should encode a message by using the given substitution alphabet', () => {
            const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
            const expected = 'jrufscpw'
            expect(actual).to.eql(expected);
        })
        it('should work with any kind of key with unique characters', () => {
            const actual = substitution("thinkful", "xoyqmc#ruksw*flnjhd$pzibev");
            const expected = '$rufscpw'
            expect(actual).to.eql(expected);
        })
        it('should preserve spaces', () => {
            const actual = substitution(" ", "xoyqmc#ruksw*flnjhd$pzibev");
            const expected = ''
            expect(actual).to.eql(expected);
        })
    })
    it('decoding a message', () => {
        it('should decode a message by using the given substitution alphabet', () => {
            const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev");
            const expected = 'thinkful'
            expect(actual).to.eql(expected);
        })
        it('should work with any kind of key with unique characters', () => {
            const actual = substitution("$rufscpw", "xoyqmc#ruksw*flnjhd$pzibev");
            const expected = 'thinkful'
            expect(actual).to.eql(expected);
        })
        it('should preserve spaces', () => {
            const actual = substitution(" ", "xoyqmc#ruksw*flnjhd$pzibev");
            const expected = ''
            expect(actual).to.eql(expected);
        })
    })
})