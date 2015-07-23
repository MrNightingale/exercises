// power x in n
// Loop
var x = +prompt("Enter number");
var n = +prompt("Enter power number");
var result = 1;
function pow(x, n) {
	if (x >= 1 && n >= 1) {
		for(var i = 0; i < n; i++) {
			result *= x;
		}
		return result;
	}
	else {
		return "Less then one!";
	}
}
alert(pow(x, n));

// Recursion
var x = +prompt("Enter number");
var n = +prompt("Enter power number");
var result = 1;
function pow(x, n) {
  if (n === 0) {
    return 1;
  }
  return x * pow(x, n-1);
}
alert(pow(x, n));