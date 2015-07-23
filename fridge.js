/**
 * Created by Solovyov on 23.07.2015.
 */
function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function() {
        self._enabled = true;
    };

    this.disable = function () {
        self._enabled = false;
    };
}

function Fridge(power) {
    Machine.apply(this, arguments);

    var food = [];

    this.addFood = function(item) {
        if (!this._enabled) {
            throw new Error('Fridge is not working. Please, enable it.');
        }
        else if (food.length >= (this._power / 100)) {
            throw new Error('So much food. Not enough power.');
        }
        else {
            food.push(item);
        }
    };

    this.getFood = function() {
        return food;
    };
}

var fridge = new Fridge(500);

fridge.enable();
fridge.addFood('meat', 'eggs');

var fridgeFood = fridge.getFood();
alert( fridgeFood );

fridge.disable();