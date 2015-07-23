// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

camelize("list-style-image");

function camelize(str) {
  var arr = str.split("-");
  for (var i = 1; i < arr.length; i++) {
    var result = "";
    var firstLetter = arr[i].charAt(0).toUpperCase();
    result += firstLetter;

    for (var j = 1; j < arr[i].length; j++) {
      result += arr[i].charAt(j);
    }

    arr[i] = result;
// OR arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  str = arr.join("");
  return str;
}