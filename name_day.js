var date = new Date(2012, 0, 3);

getWeekDay(date);

function getWeekDay(date) {
  var day = date.getDay();
  var nameDay = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

  for (var i = 0; i < 7; i++) {
    if (day == i) {
      return nameDay[i];
    }
  }
// OR return nameDay[date.getDay()];
}