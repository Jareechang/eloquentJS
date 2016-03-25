"use strict";

var _roads = require("./roads.js");

function member(array, value) {
    var found = false;
    forEach(array, function (element) {
        if (element === value) {
            found = true;
        }
    });
    return found;
}

function gamblerPath(from, to) {
    function randomInteger(below) {
        return Math.floor(Math.random() * below);
    }

    function randomDirection(from) {
        var options = (0, _roads.roadsFrom)(from);
        // return random vector (to) location
        return options[randomInteger(options.length)].to;
    }

    var path = [];
    while (true) {
        path.push(from);
        if (from == to) {
            break;
        }
        from = randomDirection(from);
    }
    return path;
}

//console.log(roads)

(0, _roads.show)(gamblerPath("Hanaiapa", "Mt Feani"));