var array = [];
for (var i = 0; ; i++) {
  array[i] = +prompt('Enter number', '');
  if (!array[i]) break;
  /*if (array[i] == '' ||
      array[i] == NaN ||
      array[i] == null) break;
  */
}
array.pop();
var result = 0;
for (var j = 0; j < array.length; j++) {
  result += array[j];
}
console.log(result);