drawAnimalQuantity("dog", 3, "cat", 2, 6, 25);
function drawAnimalQuantity(firstAnimal, quantityFirstAnimal, secondAnimal, quantitySecondAnimal, quantityAnimals, lines) {
  var items = quantityAnimals * lines;
  var output = "";
  var numInLine = 0; // animal # in line
  var id = 0; // animal ID
  while (id < items) {
    for (var i = 0; i < quantityFirstAnimal; i++) {
      output += firstAnimal;
      id++;
      setWhiteSpaces();
    }
    for (var j = 0; j < quantitySecondAnimal; j++) {
      output += secondAnimal;
      id++;
      setWhiteSpaces();
    }
  }
  console.log(output);
  function setWhiteSpaces() {
    numInLine++;
    if (numInLine == quantityAnimals) {
      output += "\n";
      numInLine = 0;
    }
    else {
      output += "\t";
    }
  }
}