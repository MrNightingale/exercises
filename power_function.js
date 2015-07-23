function power(x, n) {
  var result = 1;
  if (x > 0) {
    for (var i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  }
  else if (x === 0) {
    return 1;
  }
  else {
    return "Negative number!";
  }
}
power(2, 10);