// Sort objects by property "age"
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(function() {
  for (var i = 0; i < people.length; i++) {
    if (people[i].age > people[i+1].age) {
      return 1;
    } else {
      return -1;
    }
    i--;
  }
});

console.log(people[0].age);