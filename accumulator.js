function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.enteredValue = +prompt("Enter new value", "Enter here");
    this.value += this.enteredValue;
  };
}

var accum = new Accumulator(1);

accum.read();

alert( accum.value );