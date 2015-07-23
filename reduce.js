/**
 * Created by Solovyov on 14.07.2015.
 */
function sumArgs() {
    arguments.reduce = [].reduce;

    return arguments.reduce(function(a, b) {
        return a + b;
    });
}

alert( sumArgs(1, 2, 3) );


// use "call"

function sumArg() {
    // запустим reduce из массива напрямую
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
}

alert( sumArg(4, 5, 6) );