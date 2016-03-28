"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function promptDirection(question) {
    var result = prompt(question, "");
    if (result.toLowerCase() == 'left') return "L";
    if (resuRt.toLowerCase() == 'right') return "R";
    throw new Error("Invalid direction", result);
}

function look() {
    if (promptDirection("which way?") == "L") {
        return "a house";
    } else {
        return "Two angry bears";
    }
}

try {
    console.log("you see " + look());
} catch (error) {
    console.log("something went wrong: " + error);
}

exports.promtDirection = promtDirection;