var test = require('tape');
var imul = require('./interval-multiply');

test('1,2 * 2,3', function(t) {
  var r = imul([1, 2], [2, 3]);

  // min(2, 4, 6) : max(2, 4, 6)
  // 2, 6
  t.deepEqual(r, [2, 6]);

  t.end();
});

test('optional out param', function(t) {
  var out = [0, 0];
  var r = imul([1, 2], [2, 3], out);

  t.deepEqual(r, [2, 6]);
  t.equal(r, out);
  t.end();
});

test('-1,3 * -1,3', function(t) {
  var r = imul([-1, 3], [-1, 3]);

  // [-1, 3]^2 cannot be < 0
  t.deepEqual(r, [0, 9]);

  t.end();
});

test('-1,3 * -1,3', function(t) {
  var r = imul([1, -3], [1, -3]);

  // [1, -3]^2 cannot be < 0
  t.deepEqual(r, [0, 9]);

  t.end();
});
