var min = Math.min;
var max = Math.max;

function interval_multiply(a, b, out) {
  var al = a[0];
  var au = a[1];
  var bl = b[0];
  var bu = b[1];

  out = out || [0, 0]

  out[0] = min(al * bl, al * bu, au * bl, au * bu);
  out[1] = max(al * bl, al * bu, au * bl, au * bu);

  if (al === bl && au === bu) {
    out[0] = max(out[0], 0);
    out[1] = max(out[1], 0);
  }

  return out;
}

module.exports = interval_multiply;
