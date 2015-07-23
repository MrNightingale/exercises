var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

aclean(arr);

function aclean(arr) {
  var newStr = arr.join();
  var newArr = newStr.toLowerCase().split(",").sort();

  for (var i = 0, j = 0; i < newArr.length, j < newArr[i].length; i++, j++) {
    var k = i + 1;

    for (k; k < newArr.length; k++) {

      if (newArr[i][j] == newArr[k][j] &&
         newArr[i][newArr[i].length-1] == newArr[k][newArr[i].length-1]) {
          newArr.splice(k, 1);
          k--;
      }

    }
    
  }

  return newArr;
}