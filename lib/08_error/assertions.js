"use strict";

function AssertionFailed(message) {
    this.message = message;
}

AssertionFailed.prototype = Object.create(Error.prototype);

// Assert takes true statment and
// failure message for when assertion is un-true

function assert(test, message) {
    if (!test) throw new AssertionFailed(message);
}

function lastElement(array) {
    assert(array.length > 0, "empty array in last element");
    return array[array.length - 1];
}