// Remove class from string
var obj = {
  className: 'open menu menu'
};

removeClass(obj, 'open');

function removeClass(obj, cls) {
  var arr = obj.className.split(" ");

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == cls) {
      arr.splice(i, 1);
      i--;
      /* Элементы массива проверяются один за другим. При вызове splice удаляется текущий, i-й элемент, и те элементы, которые идут дальше, сдвигаются на его место.
       * Таким образом, на месте i оказывается новый, непроверенный элемент.
       * Чтобы это учесть, строчка 14 уменьшает i, чтобы следующая итерация цикла заново проверила элемент с номером i. Без нее функция будет работать с ошибками.
       */
    }
  }

  obj.className = arr.join(" ");
  return obj.className;
}