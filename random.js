// Range [0, max)
function random(max) {
  var result = Math.random() * max;
  return result;
}
random(1);

// Range [min, max]
function random(min, max) {
  var rand = min + Math.floor( Math.random() * (max+1-min) );
  return rand;
}