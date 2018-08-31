var fs = require("fs");



// Write a function that logs a message, then executes
// a function argument.

function func1(str, callbacks) {

    console.log(str);

    callbacks(str);
};


// Write a function that runs a function argument if
// its other argument is truthy.
function arg1(str, callbacks) {
    if (str)
        callbacks(true);
}


// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!
function func1(f, v) {
    return function () {
        return f(v);
    }

}

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?
