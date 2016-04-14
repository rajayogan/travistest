var Bear = require('./index.js');
var test = require('tape');

test('should shout', function(assert){
  var bear = new Bear();
  var result = bear.shout();
  assert.equal(result, 'The Bear says grr');
  assert.end();
})
