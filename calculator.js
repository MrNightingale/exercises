var calculator = {

  read: function() {
    this.firstValue = + prompt( "Enter your first number", "Enter here" );
    this.secondValue = + prompt( "Enter your second number", "Enter here" );

    if (isNaN(this.firstValue) || isNaN(this.secondValue)) {
      console.log("Entered value is not a number!");
    }
  },

  sum: function() {
    if (!isNaN(this.firstValue) && !isNaN(this.secondValue)) {
      return this.firstValue + this.secondValue;
    } else {
      return "Entered value is not a number!";
    }
  },

  mul: function() {
    if (!isNaN(this.firstValue) && !isNaN(this.secondValue)) {
      return this.firstValue + this.secondValue;
    } else {
      return "Entered value is not a number!";
    }
  }

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );