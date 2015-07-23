var arr = [1, 2, 3, 4, 5, 6, 7];

filter(arr, inBetween(3, 6));
filter(arr, inArray([1, 2, 10]));

function filter(arr, func) {

function inBetween(a, b) {
  var newArr = [];
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

function inArray(c) {
  var newArr = [];

  for (var j = 0; j < c.length; j++) {
    for (var k = 0; k < arr.length; k++) {
      if (c[j] == arr[k]) {
        newArr.push(c[j]);
      }
    }
  }

  return newArr;
}
}