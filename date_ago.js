var date = new Date(2015, 0, 2);

getDateAgo(date, 1);

function getDateAgo(date, days) {
  var newDate = new Date(date);
  newDate.setDate(newDate.getDate() - days);
  return newDate;
}