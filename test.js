var Bear = require('./index.js');
var test = require('tape');
var expect = require("chai").expect;

test('should shout', function(assert){
  var bear = new Bear();
  var result = bear.shout();
  assert.equal(result, 'The Bear says grr');
  assert.end();
})

describe('should return something', function(){
  it('should return a string', function(){
    var bear = new Bear();
    var res = bear.shout();
    expect(res).to.equal('The Bear says grr');
  })
})
