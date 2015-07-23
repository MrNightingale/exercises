function Calculator() {
  this.read = function() {
    this.a = +prompt("Enter first number", "Enter here");
    this.b = +prompt("Enter second number", "Enter here");
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

var calc = new Calculator();

calc.read();

alert( "Sum: " + calc.sum());
alert( "Product: " + calc.mul() );