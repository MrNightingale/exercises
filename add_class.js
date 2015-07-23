// Add class to string
var obj = {
  className: 'open menu'
};

addClass(obj, 'new');

function addClass(obj, cls) {
  var str = obj.className;
  var arr = str.split(' ');

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == cls) {
      str = arr.join(' ');
      obj.className = str;
      return obj.className;
    }
  }

  if (arr[0] === '') {
    pushAndJoin('');
  } else {
    pushAndJoin(' ');
  }
  return obj.className;

  function pushAndJoin(space) {
    arr.push(cls);
    str = arr.join(space);
    obj.className = str;
  }
}