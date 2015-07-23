function sum(x) {
  var currentSum = x;

  function f(y) {
    currentSum += x;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}
alert( sum(1)(2)(3)(-5) );