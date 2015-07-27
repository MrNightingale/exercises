/**
 * Created by Solovyov on 27.07.2015.
 */
function Hamster() {
    this.food = [];
}

Hamster.prototype.found = function(something) {
    this.food.push(something);
};

var speedy = new Hamster();
var lazy = new Hamster();

speedy.found('apple');
lazy.found('nut');

alert( speedy.food.length );
alert( lazy.food.length );