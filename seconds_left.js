getSecondsToday();

function getSecondsToday() {
  var date = new Date();
  var sec = date.getHours() * 3600 +
            date.getMinutes() * 60 +
            date.getSeconds() +
            date.getMilliseconds() / 1000;
  return sec;
}