// Random order in array
var arr = [1, 2, 3, 4, 5];

arr.sort(function(a) {
  a = Math.random();
  
  if (a < 0.5) {
    return 1;
  } else {
    return -1;
  }

});

console.log(arr);