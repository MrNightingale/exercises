// Bin's equation for calculating Fn of Fibonachi's row
function fib(n) {
  var phi = (1 + Math.sqrt(5)) / 2;
  var result = Math.pow(phi, n) / Math.sqrt(5);
  return Math.round(result);
}
fib(77);