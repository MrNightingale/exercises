function ucFirst(str) {
  var result = "";
  var firstLetter = "";
  firstLetter = str.charAt(0).toUpperCase();
  result += firstLetter;
  for (var i = 1; i < str.length; i++) {
    result += str.charAt(i);
  }
  return result;
}
ucFirst("john");