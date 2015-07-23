function Calculator() {
  this.calculate = function(str) {
    var firstValue = +str[0];
    var secondValue = +str[4];
    var result;

    if(str[2] == "+") {
      result = firstValue + secondValue;
    }
    else {
      result = firstValue - secondValue;
    }

    return result;
  };
}

var calc = new Calculator();

alert( calc.calculate("1 + 2") );