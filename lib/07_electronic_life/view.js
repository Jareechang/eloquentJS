"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.View = undefined;

var _directons = require("./directons.js");

function charFromElement(element) {
    if (element == null) return " ";else return element.originChar;
};

function View(world, vector) {
    this.world = world;
    this.vector = vector;
}

View.prototype.look = function (dir) {
    var target = this.vector.plus(_directons.directions[dir]);
    if (this.world.grid.isInside(target)) return charFromElement(this.world.grid.get(target));else return "#";
};

View.prototype.findAll = function (ch) {
    var found = [];
    for (var dir in _directons.directions) {
        if (this.look(dir) == ch) found.push(dir);
    }return found;
};

View.prototype.find = function (ch) {
    var found = this.findAll(ch);
    if (found.length == 0) return null;
    return randomElement(found);
};

exports.View = View;