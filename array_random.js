// Напишите код для вывода alert случайного значения из массива:
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var value = random(0, arr.length-1);
alert(arr[value]);

function random(min, max) {
  var rand = min + Math.floor( Math.random() * (max+1-min) );
  return rand;
}