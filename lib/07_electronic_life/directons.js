"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.directions = undefined;

var _vector = require("./vector.js");

var directions = {
    "n": new _vector.Vector(0, -1),
    "ne": new _vector.Vector(1, -1),
    "e": new _vector.Vector(1, 0),
    "se": new _vector.Vector(1, 1),
    "s": new _vector.Vector(0, 1),
    "sw": new _vector.Vector(-1, 1),
    "w": new _vector.Vector(-1, 0),
    "nw": new _vector.Vector(-1, -1)
};

exports.directions = directions;