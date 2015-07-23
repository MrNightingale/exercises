function truncate(str, maxlength) {
  var end = "...";
  var result = "";
  if (str.length > maxlength) {
    result = str.slice(0, maxlength-end.length) + end;
    return result;
  } else {
    return str;
  }
}
truncate("Самый удобный метод — это slice(start, end).", 20);