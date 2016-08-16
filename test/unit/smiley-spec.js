var expect = require('chai').expect;
var smileAtUs = require('../../js/smiley').smileAtUs;

describe("smiley", function() {
  it("should return randomly :) or :D", function() {
    var arrSmile = [":)", ":D"];
    expect(arrSmile.includes(smileAtUs())).to.equal(true);
  });
});
