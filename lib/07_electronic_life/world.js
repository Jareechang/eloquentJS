'use strict';

var _vector = require('./vector.js');

var _grid = require('./grid.js');

var _critter = require('./critter.js');

var _plan = require('./plan.js');

function elementFromChar(legend, ch) {
    if (ch == " ") return null;
    var element = new legend[ch]();
    element.originChar = ch;
    return element;
}

function World(map, legend) {
    var grid = new _grid.Grid(map[0].length, map.length);
    this.grid = grid;
    this.legend = legend;

    map.forEach(function (line, y) {
        for (var x = 0; x < line.length; x++) {
            grid.set(new _vector.Vector(x, y), elementFromChar(legend, line[x]));
        }
    });
}

function charFromElement(element) {
    if (element == null) return " ";else return element.originChar;
}

World.prototype.toString = function () {
    var output = "";
    for (var y = 0; y < this.grid.height; y++) {
        for (var x = 0; x < this.grid.width; x++) {
            var element = this.grid.get(new _vector.Vector(x, y));
            output += charFromElement(element);
        }
        output += "\n";
    }
    return output;
};

function Wall() {} // has no functionality - only takes up space

var world = new World(_plan.plan, { "#": Wall,
    "o": _critter.BouncingCritter });

console.log(world.toString());