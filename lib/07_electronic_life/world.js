'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.World = undefined;

var _vector = require('./vector.js');

var _directons = require('./directons.js');

var _grid = require('./grid.js');

var _critter = require('./critter.js');

var _plan = require('./plan.js');

var _view = require('./view.js');

function elementFromChar(legend, ch) {
    if (ch == " ") return null;
    var element = new legend[ch]();
    element.originChar = ch;
    return element;
};

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
};

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

World.prototype.turn = function () {
    // Keep track of which critters moved
    var acted = [];
    this.grid.forEach(function (critter, vector) {
        if (critter.act && acted.indexOf(critter) == -1) {
            acted.push(critter);
            this.letAct(critter, vector);
        }
    }, this);
};

World.prototype.letAct = function (critter, vector) {
    var action = critter.act(new _view.View(this, vector));
    if (action && action.type == 'move') {
        var dest = this.checkDestination(action, vector);
        if (dest && this.grid.get(dest) == null) {
            this.grid.set(vector, null);
            this.grid.set(dest, critter);
        }
    }
};

World.prototype.checkDestination = function (action, vector) {
    if (_directons.directions.hasOwnProperty(action.direction)) {
        var dest = vector.plus(_directons.directions[action.direction]);
        if (this.grid.isInside(dest)) return dest;
    }
};

function Wall() {} // has no functionality - only takes up space

var world = new World(_plan.plan, { "#": Wall,
    "o": _critter.BouncingCritter });

//console.log(world.toString());

//for (var i = 0; i < 5; i++) {
//world.turn();
//console.log(world.toString());

//}

//animateWorld(world);

exports.World = World;