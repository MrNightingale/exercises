/**
 * Created by Solovyov on 19.07.2015.
 */
var arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

for (var j = 0; j < arr.length; j++) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i+1]) {
            var firstValue = arr[i+1];
            var secondValue = arr[i];
            arr[i] = firstValue;
            arr[i+1] = secondValue;
        }
    }
}

console.log(arr);