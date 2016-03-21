"use strict";

function Vector(x, y) {
    this.x = x;
    this.y = y;
    this.length = calcLength.call(this);
}

Vector.prototype.plus = function (_ref) {
    var x = _ref.x;
    var y = _ref.y;

    this.x += x;
    this.y += y;
    return this;
};

Vector.prototype.minus = function (_ref2) {
    var x = _ref2.x;
    var y = _ref2.y;

    this.x -= x;
    this.y -= y;
    return this;
};

Vector.prototype.calcLength = function () {
    // distance from (0,0)
    var xSquared = Math.pow(this.x, 2);
    var ySquared = Math.pow(this.y, 2);
    return Math.sqrt(xSquared + ySquared);
};

//console.log(new Vector(1,2).plus(new Vector(2,3)));
//console.log(new Vector(1,2).minus(new Vector(2,3)));
console.log(new Vector(3, 4).length);