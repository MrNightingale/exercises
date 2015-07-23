// Copy and Sort array
var arr = ["HTML", "JavaScript", "CSS"];
var arrSorted = [];

copyAndSort(arr);
console.log(arrSorted);
console.log(arr);

function copyAndSort(arr) {
  
  for (var i = 0; i < arr.length; i++) {
    arrSorted[i] = arr[i];
  }

  arrSorted.sort();
}

// OR we can use slice() for copy!

var arr = ["HTML", "JavaScript", "CSS"];

var arrSorted = arr.slice().sort();

console.log(arrSorted);
console.log(arr);