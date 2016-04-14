module.exports = bear;

function bear(type) {
  this.type = type;
}

bear.prototype.shout = function(says) {
  return 'The Bear says grr';
}
