function getDecimal(num) {
  var numRounded = Math.ceil(num);
  var result = numRounded - num;
  return +result.toFixed(6);
}
getDecimal(12.1);