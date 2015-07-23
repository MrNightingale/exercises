var date = new Date(2012, 0, 3);

getLocalDay(date);

function getLocalDay(date) {
  var day = date.getDay();
  var numDay = [7, 1, 2, 3, 4, 5, 6];

  for (var i = 0; i < 6; i++) {
    if (day == i) {
      return numDay[i];
    }
  }

}