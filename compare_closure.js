// Example for Function Closure
function compare(x) {
  return function(y) {
    if (y == x) {
      return null;
    }
    return (y > x) ? true : false;
  };
}
var compareTen = compare(10); // x = 10
console.log(compareTen(15)); // y = 15