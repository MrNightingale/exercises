function printNumbers(num, cols) {
  var step = num / cols;
  var result = "";
  var id = 1;
  while (id <= num) {
    for (var j = 0; j < step; j++) {
      result = "";
      result += j;
        for (var i = 0; i < cols; i++) {
          addWhiteSpaces();
          result += step;
          step *= 2;
        }
    }
  }
  console.log(result);
  function addWhiteSpaces() {
    if (id % cols === 0 && id < num) {
      result += "\n";
      id++;
    }
    else {
      result += "\t";
      id++;
    }
  }
}
printNumbers(12, 3);