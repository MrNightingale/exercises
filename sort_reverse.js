// How to sort array in a vice versa?

var arr = [5, 2, 1, -10, 8];

arr.sort(function (a, b) {
  return b - a;
});

alert ( arr );