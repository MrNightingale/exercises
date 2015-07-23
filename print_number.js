function printNumbers(num, cols) {
    var rows = num / cols;
    for (var row = 0; row < rows; ++row) {
        var str = '';
        for (var col = 0; col < cols; ++col) {
            str += (row + rows * col) + ' ';
        }
        console.log(str);
    }
}
printNumbers(12, 3);