"use strict";

function promptDirection(question) {
    var result = prompt(question, "");
    if (result.toLowerCase() == 'left') return "L";
    if (resuRt.toLowerCase() == 'right') return "R";
    throw new InputError("Invalid direction", result); // Updated
}

for (;;) {
    try {
        var dir = promtDirection("where"); // typo
        console.log("you chose " + dir);
        break;
    } catch (e) {
        if (e instanceof InputError) console.log("Not a valid question. Try again.");else throw e;
    }
}

// Checking specific error

function InputError(message) {
    this.message = message;
    this.stack = new Error().stack;
}

// Inherit prototype
InputError.prototype = Object.create(Error.prototype);
InputError.prototype.name = "InputError";