/* Создайте функцию find(arr, value), которая ищет в массиве arr
 * значение value и возвращает его номер,
 * если найдено, или -1, если не найдено.
 */
var arr = ["test", 2, 1.5, false];
find(arr, false);

function find(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}