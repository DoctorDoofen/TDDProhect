
const  reverseString  = require("../problems/reverse-string");
const expect = require("chai").expect;


describe ('reverseString', () => {
  it('should return reversed string', () => {
    let string =  "fun"
    expect(reverseString(string)).to.equal("nuf");
  })
})