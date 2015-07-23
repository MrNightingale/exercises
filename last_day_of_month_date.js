getLastDayOfMonth(2012, 1);

function getLastDayOfMonth(year, month) {
  var date = new Date(year, month + 1, 0);
  return date.getDate();
}